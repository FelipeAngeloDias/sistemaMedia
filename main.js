const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/images/aprovado.png" alt=Emoji celebranco"/>';
const imgReprovado = '<img src="./images/images/reprovado.png" alt=Emoji triste"/>';
const atividade = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite uma nota mínima:"));

let linhas ='';

form.addEventListener('submit',  function(e){
    e.preventDefault();
    
    adicionarLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionarLinha() {

    const inputNomeAtividade = document.getElementById("nome-atividade");
    const inputNotaAtividade = document.getElementById("nota-atividade");
    
    if(atividade.includes(inputNomeAtividade.value)){
        alert(`Atividade: ${inputNomeAtividade.value} já foi inserida!`);
    }else {
        atividade.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }

    inputNomeAtividade.value ='';
    inputNotaAtividade.value ='';
}

function atualizaTabela(){

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal(){
   const mediaFinal = calculaMediaFinal();

   document.getElementById('mediaFinalValor').innerHTML = mediaFinal.toFixed(2);
   document.getElementById('mediaFinalResultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}
function calculaMediaFinal(){
    let somaDasNotas = 0;

    for (let i =  0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }
    return somaDasNotas / notas.length;
}