// server/test/api.test.js
import test from 'node:test';
import assert from 'node:assert/strict';
import bcrypt from 'bcryptjs';
import {
  generateToken,
  hashToken,
  hashPassword,
  verifyPassword,
  escapeLike,
} from '../src/security.js';

test('Seguridad de tokens de sesión', () => {
  const token1 = generateToken();
  const token2 = generateToken();

  assert.notEqual(token1, token2, 'Los tokens generados deben ser únicos');
  assert.ok(token1.length >= 40, 'El token base64url debe tener longitud suficiente');

  const hash1 = hashToken(token1);
  const hash2 = hashToken(token1);
  const hashOther = hashToken(token2);

  assert.equal(hash1.length, 32, 'El hash SHA-256 debe medir exactamente 32 bytes');
  assert.deepEqual(hash1, hash2, 'El cálculo de hash debe ser determinista');
  assert.notDeepEqual(hash1, hashOther, 'Tokens distintos deben producir hashes distintos');
});

test('Hashing y verificación de contraseñas (incluyendo migración Supabase $2a$)', async () => {
  const plainPassword = 'SuperSecretPassword123!';

  // 1. Password moderno con costo 12
  const modernHash = await hashPassword(plainPassword);
  assert.ok(modernHash.startsWith('$2a$') || modernHash.startsWith('$2b$'));

  const checkModern = await verifyPassword(plainPassword, modernHash);
  assert.equal(checkModern.valid, true);

  const checkWrong = await verifyPassword('WrongPassword!', modernHash);
  assert.equal(checkWrong.valid, false);

  // 2. Simulación de hash importado de Supabase ($2a$ con costo 10)
  const supabaseLegacyHash = await bcrypt.hash(plainPassword, 10);
  const checkLegacy = await verifyPassword(plainPassword, supabaseLegacyHash);

  assert.equal(checkLegacy.valid, true, 'Debe aceptar hashes generados en Supabase');
  assert.equal(checkLegacy.needsRehash, true, 'Debe indicar que requiere re-hashing a estándar de 12 rondas');
});

test('Sanitización de operadores LIKE para prevenir inyecciones SQL lógicas', () => {
  const attack1 = "test%admin_";
  const sanitized1 = escapeLike(attack1);
  assert.equal(sanitized1, "test\\%admin\\_");

  const attack2 = "normal text";
  const sanitized2 = escapeLike(attack2);
  assert.equal(sanitized2, "normal text");
});

test('Validación de esquema de subida de preguntas JSON', async () => {
  const { validateQuestionJSON } = await import('../../data/questions/upload-schema.js');

  const samplePayload = {
    section: 'algebra',
    subtema: 'exponentes',
    law: 'producto',
    questions: [
      {
        id: 'prod-f-91',
        difficulty: 'easy',
        prompt: 'Simplifica: x^3 \\cdot x^5',
        options: [
          { latex: 'x^8', correct: true },
          { latex: 'x^{15}', correct: false },
          { latex: '2x^8', correct: false },
          { latex: 'x^2', correct: false },
        ],
        explanation: 'Producto de potencias de igual base: x^{3+5} = x^8.',
      },
    ],
  };

  const validCheck = validateQuestionJSON(JSON.stringify(samplePayload));
  assert.equal(validCheck.ok, true, 'La plantilla oficial debe pasar la validación');
  assert.equal(validCheck.questions.length, 1);
  assert.equal(validCheck.questions[0].section_id, 'algebra');

  const missingIdsCheck = validateQuestionJSON(
    JSON.stringify([
      {
        id: 'prod-f-99',
        difficulty: 'easy',
        prompt: 'x^2',
        options: [
          { latex: '1', correct: true },
          { latex: '2', correct: false },
          { latex: '3', correct: false },
          { latex: '4', correct: false },
        ],
        explanation: 'Explicación de prueba',
      },
    ])
  );
  assert.equal(missingIdsCheck.ok, false, 'Debe rechazar preguntas sin section_id/subtema_id/law_id');

  const duplicateIdCheck = validateQuestionJSON(
    JSON.stringify({
      section: 'algebra',
      subtema: 'exponentes',
      law: 'producto',
      questions: [samplePayload.questions[0], samplePayload.questions[0]],
    })
  );
  assert.equal(duplicateIdCheck.ok, false, 'Debe rechazar IDs duplicados en el mismo lote');
});

test('registerLimiter permite registros simultáneos en red escolar (sin bloqueo por IP)', async () => {
  const { registerLimiter } = await import('../src/middleware/rate-limiter.js');
  let nextCalls = 0;
  for (let i = 0; i < 60; i++) {
    registerLimiter({ ip: '189.200.10.1' }, {}, () => {
      nextCalls += 1;
    });
  }
  assert.equal(nextCalls, 60, 'Debe permitir 60+ registros desde la misma IP escolar sin bloquear');
});

