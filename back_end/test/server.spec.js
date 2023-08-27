const request = require("supertest");
const server = require("../app");
const {resetear} = require('../consultas');

describe("Operaciones CRUD de usuarios", () => {
  test('flujo basico de compra (crear_usuario, ingresar, comprar, ver pedido)', async () => {
    await(resetear())
    const resquest_sign_in = await request(server)
      .post('/crear_cuenta')
      .send({
        email: "vanegrr@prueba.cl",
        password: "123456789",
        direccion: "Santiago Centro 666"
      })
    expect(resquest_sign_in.statusCode).toEqual(201);

    const resquest_login = await request(server)
      .post('/login')
      .send({email: "vanegrr@prueba.cl", password: "123456789"})
    expect(resquest_login.statusCode).toEqual(202)
    expect(resquest_login.body.token).any

    const resquest_buy = await request(server)
      .post('/crear_pedido')
      .set('Authorization', "Bearer " + resquest_login.body.token)  
      .send([{'nombre': 'Batman', 'valor': '333', 'cantidad': 2, 'tiempo_de_envio': 3}])
    expect(resquest_buy.statusCode).toEqual(201)

    const resquest_orders = await request(server)
      .get('/listar_pedidos')
      .set('Authorization', "Bearer " + resquest_login.body.token)  
      .send()
    expect(resquest_orders.statusCode).toEqual(200)

    expect(resquest_login.body.user.direccion).toEqual("Santiago Centro 666")
    expect(resquest_login.body.user.email).toEqual("vanegrr@prueba.cl")
    expect(resquest_login.body.user.password).none

    expect(resquest_orders.body.length).toEqual(1)
    expect(resquest_orders.body[0].monto_pagado).any
    expect(resquest_orders.body[0].descripcion).any
    expect(resquest_orders.body[0].usuario_id).any
    expect(resquest_orders.body[0].fecha_de_entrega).any

    const resquest_all = await request(server)
      .get('/listar_productos')
      .send()

    const resquest_single = await request(server)
      .get('/listar_productos/' + resquest_all.body[0].id)
      .send()

    expect(resquest_all.statusCode).toEqual(200);
    expect(resquest_single.statusCode).toEqual(200);

    expect(resquest_all.body.length).toEqual(2);
    expect(resquest_single.body.length).toEqual(1);
  });

});