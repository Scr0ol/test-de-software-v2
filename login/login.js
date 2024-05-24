let usuarios = [];
if (localStorage.getItem('cadastrados')) {
    usuarios = JSON.parse(localStorage.getItem('cadastrados'));
}

function login() {
    const guarda_senha = document.getElementById('senha').value;
    const guarda_cpf = document.getElementById('cpf').value;
    const userIndex = procura_usuario(guarda_cpf, guarda_senha);
    if (userIndex!== -1) {
        alert("Usuário validado! Bem-vindo!");
        location.assign('.//qrcode.html');
    } else {
        alert("Usuário não cadastrado");
    }
}

function procura_usuario(guarda_cpf, guarda_senha) {
    return usuarios.findIndex((element) => {
        return element.cpf === guarda_cpf && element.senha === guarda_senha;
    });
}

const btn_senha = document.getElementById('senha');
const btn_cpf = document.getElementById('cpf');

btn_cpf.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        login();
    }
});

btn_senha.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        login();
    }
});