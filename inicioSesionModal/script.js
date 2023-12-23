let modal = document.querySelector(".modal");

document.getElementById("iniciarSesion").addEventListener('click',mostrarModal);
document.getElementById("cerrarModal").addEventListener('click', cerrarModal);



function mostrarModal(e) {
    modal.classList.add("modal--show");
};
function cerrarModal(e) {
    modal.classList.remove("modal--show");
};