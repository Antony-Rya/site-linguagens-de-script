function imprimirMsg(texto){
    alert('Você clicou no botão ' + texto);

}

function login(){
    const emailCorreto = "ryanzinhoreidelas@gmail.com"
    const senhaCorreta = "senha"

    var email = document.getElementById("email").value;
    var senha = document.getElementById("pwd").value;

    if(email == emailCorreto){
        if(senha == senhaCorreta){
          alert("Email e senha incorreto")
    }else{
        alert("Email incorreto")
    }

    // if(email == emailCorreto && senha == senhaCorreta){
    //     alert("Login bem sucedido")
        
    // }else{
    //     alert("Login incorreto")
    // }
   
}