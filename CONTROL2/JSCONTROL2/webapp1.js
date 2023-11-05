function generarContrasena() {
    const longitud = document.getElementById('longitud').value;
    const mayusculas = document.getElementById('mayus').checked;
    const minusculas = document.getElementById('minus').checked;
    const numeros = document.getElementById('num').checked;
    const caracteres = document.getElementById('caracter').checked;

    let charset = "";
    if (mayusculas) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (minusculas) charset += "abcdefghijklmnopqrstuvwxyz";
    if (numeros) charset += "0123456789";
    if (caracteres) charset += "!@#$%^&*()_-+=<>?/[]{}|";

    let contrasena = "";
    for (let i = 0; i < longitud; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        contrasena += charset[randomIndex];
    }

    document.getElementById('contrasenaGenerada').value = contrasena;
}