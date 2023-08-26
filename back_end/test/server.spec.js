const request = require("supertest");
const server = require("../app");
const { 
  resetear
} = require('../consultas');

describe("Operaciones CRUD de usuarios", () => {
  test('crear un usuario y logearme', async () => {
    await(resetear());
    var data = {
      email: "vanegrr@prueba.cl",
      password: "123456789",
      direccion: "Santiago Centro 666"
    }
    const resquest = await request(server)
      .post('/crear_cuenta')
      .send(data);
    expect(resquest.statusCode).toEqual(201);
    data = {email: "vanegrr@prueba.cl", password: "123456789"}
    const resquest_login = await request(server)
      .post('/login')
      .send(data);
    console.log(resquest_login);
    expect(resquest_login.body.token).any
    expect(resquest_login.body.user.direccion).any
    expect(resquest_login.body.user.email).any
    expect(resquest_login.body.user.id).any
    expect(resquest_login.statusCode).toEqual(202);
  });

});