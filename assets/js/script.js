let nome = window.document.querySelector('nome')
let email = window.document.querySelector('email')
let assunto = window.document.querySelector('assunto')
let descricao = window.document.querySelector('descricao')

let nomeOk = false
let emailOk = false
let assuntoOk = false
let descricaoOk = false



function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    }
    else{
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        let nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color = 'red'
    }
    else{
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = ' green'
        let emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length < 4){
        txtAssunto.innerHTML = 'Assunto Inválido'
        txtAssunto.style.color = 'red'
    }
    else{
        txtAssunto.innerHTML = 'Assunto Válido'
        txtAssunto.style.color = 'green'
        assuntoOk = true
    }
}

function validaDescricao(){
    let txtDescricao = document.querySelector('#txtDescricao')

    if(descricao.value.length >= 500){
        txtDescricao.innerHTML = 'Limite máximo de caracteres atingido'
        txtDescricao.style.color = 'red'
        txtDescricao.style.display = 'block'
    }
    else{
        txtDescricao.style.display = 'none'
        assuntoOk = true
    }
    
}

function enviar(){
    if(nomeOk==true && emailOk==true && assuntoOk==true && descricaoOk==true){
        alert('Mensagem enviada com sucesso!')
    }else{
        alert('Preencha os campos antes de enviar!')
    }
}


function enviar(){

    if( nomeOk==true && emailOk ==true && assuntoOk ==true && descricaoOk==true){
        alert('Mensagem enviada com sucesso!')
    }
    else{
        alert('Preencha os campos corretamente antes de enviar!')
    }
         
}

