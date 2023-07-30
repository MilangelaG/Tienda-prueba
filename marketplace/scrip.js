let carrito = [];

function agregarAlCarrito(id) {
 
  carrito.push(id);
  mostrarCarrito();
}

function mostrarCarrito() {
  const carritoElement = document.getElementById("carrito");
  carritoElement.innerHTML = "";
  carrito.forEach((id) => {
    const producto = obtenerProductoPorId(id);
    const li = document.createElement("li");
    li.innerText = producto.nombre + " - $" + producto.precio.toFixed(2);
    carritoElement.appendChild(li);
  });
}

function obtenerProductoPorId(id) {
  // llamada a la API o consulta a la base de datos
  if (id === 1) {
    return { nombre: "Producto 1", precio: 2000 };
  } else if (id === 2) {
    return { nombre: "Producto 2", precio: 1500 };
  } else {
    return { nombre: "Producto Desconocido", precio: 0 };
  }
}
