const espacoAlerta = document.getElementById("espaco-alerta");

function mostrarAlerta(mensagem, tipo){
    const divAlerta  = document.createElement('div');
    divAlerta.setAttribute("class", `alert alert-${tipo} alert-dismissible`);
    divAlerta.setAttribute("role", "alert");

    divAlerta.innerHTML = 
    `<div>${mensagem}</div>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="close" ></button>
    `
    espacoAlerta.appendChild(divAlerta);
}
const meuBotao =  document.getElementById("meu-btn");

if(meuBotao){
    meuBotao.addEventListener("click", ()=>{
        mostrarAlerta('Uma mensagem de exemplo', 'success');
    });
}
