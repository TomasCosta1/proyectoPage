var user = 'prueba';
var password = 'prueba';
var userIngresado = document.getElementById('user')
var passwordIngresado = document.getElementById('password')
var buttonSubmit = document.getElementById('submit')

function validar(){
    if(passwordIngresado.value == password && userIngresado.value == user){
        window.location.href = '../views/home.html'
    }else{
        alert('Usuario o contraseña incorrectos')
    }
}

buttonSubmit.onclick = validar;