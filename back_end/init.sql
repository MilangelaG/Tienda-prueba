DROP TABLE IF EXISTS usuarios cascade;
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(60) NOT NULL,
    direccion VARCHAR(250),
    UNIQUE(email)
);

INSERT INTO usuarios VALUES (DEFAULT, 'ejemplo@ejemplo.cl', 'password', 'Lorem ipsum dolor sit amet, consectetur');

DROP TABLE IF EXISTS productos cascade;
CREATE TABLE productos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    valor INTEGER NOT NULL,
    descripcion VARCHAR(250),
    tiempo_de_envio INTEGER NOT NULL,
    dimensiones VARCHAR(50),
    img_path VARCHAR(250) NOT NULL,
    UNIQUE(nombre)
);
INSERT INTO productos VALUES (DEFAULT, 'Batman', 333, 'The Dark Knight', 1, '1x1x1', 'https://carpinchopop.cl/wp-content/uploads/2023/02/1000007647.jpg');
INSERT INTO productos VALUES (DEFAULT, 'Robin', 333, 'Excuse Me For Having A Life', 1, '1x1x1', 'https://carpinchopop.cl/wp-content/uploads/2023/06/1000072865-768x768.jpg');

DROP TABLE IF EXISTS pedidos cascade;
CREATE TABLE pedidos (
    id SERIAL PRIMARY KEY,
    monto_pagado INTEGER NOT NULL,
    descripcion VARCHAR(450),
    usuario_id INTEGER NOT NULL,
    fecha_de_entrega DATE,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

SELECT * FROM productos;
SELECT * FROM usuarios;
SELECT * FROM pedidos;

