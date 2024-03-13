function imprimirMsg(texto){
    alert('Você clicou no botão ' + texto);
    

}

function login(){
    const emailCorreto = "ryanzinhoreidelas@gmail.com"
    const senhaCorreta = "senha"

    var email = document.getElementById("email").value;
    var senha = document.getElementById("pwd").value;

    if(email == emailCorreto && senha == senhaCorreta){ 
          window.location.href = "./index.html";

    }else{
          alert("Email ou senha incorreto.")
    }
}