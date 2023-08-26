const request = require("supertest");
const server = require("../app");

describe("Operaciones CRUD de usuarios", () => {
  test('crear un usuario', async () => {
    var data = {
      email: "vanegrr@prueba.cl",
      password: "123456789",
      direccion: "Santiago Centro 666"
    }
    const resquest = await request(server)
      .post('/crear_cuenta')
      .send(data);
    expect(resquest.statusCode).toEqual(201);
  });

});