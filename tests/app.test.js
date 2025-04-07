const request = require('supertest');
const app = require('../index');

test('Basic server response', async () => {
  const response = await request(app).get('/');
  expect(response.status).toBe(200);
});