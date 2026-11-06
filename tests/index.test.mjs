import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('returns Monday index', () => {
  assert.equal(api.weekdayIndex('2024-01-01'), 1);
});
test('returns Sunday index', () => {
  assert.equal(api.weekdayIndex('2024-01-07'), 0);
});
test('returns Saturday index', () => {
  assert.equal(api.weekdayIndex('2024-01-06'), 6);
});
test('handles leap day', () => {
  assert.equal(api.weekdayIndex('2024-02-29'), 4);
});
test('handles years below 100', () => {
  assert.equal(api.weekdayIndex('0001-01-01'), 1);
});
test('rejects malformed date', () => {
  assert.throws(() => api.weekdayIndex('01/01/2024'), RangeError);
});
