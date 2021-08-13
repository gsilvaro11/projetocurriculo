let lista = ['conteudo0', 'conteudo1', 'conteudo2']
var numero_id = 0
    maximo = lista.length;

function start(){  
    document.getElementById('conteudo0').style.display = 'block';  
}

/* Area projetos, função para mudar proejto... */
function dispara(request){    
    if(request == 'direito'){
        numero_id++;     
        if(numero_id >= maximo){
            numero_id = 0          
        } 
    }else{
        numero_id--;     
        if(numero_id < 0){
            numero_id = 2
        }               
    }                 
    
    for(let i = 0 ; i < maximo; i++){        
        if(i == numero_id){
            console.log('igual', i);
            document.getElementById('conteudo' + String(i)).style.display = 'block';

        }else{
            console.log('Diferente', i);
            document.getElementById('conteudo' + String(i)).style.display = 'none';
        }                                                                                 
    } 
}



window.addEventListener('load', start)