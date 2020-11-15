var palavras = [
    "cpu", "ula", "registradores", "ram", "rom", "eprom", "flash", "memoria de massa", "dma", "chip select", "adress bus", "data bus", 
    "dual core", "quad core"
];

/* Descomentar quando Adicionar as palavras no HTML */
/* var palavras = [
    "cpu", "ula", "registradores", "ram", "rom", "eprom", "flash", "memoria de massa", "dma", "chip select", "adress bus", "data bus", 
    "dual core", "quad core", "i5", "i7"
]; */

/* Descomentar quando Adicionar as palavras no HTML */
/* var perguntas = ["Também é conhecido como processador. Ele realiza todas as operações lógicas e aritiméticas, possuindo além da própria Unidade Lógica e Aritimética os registradores (Acumulador, registradores de propósito gerais e especiais) e a Unidade de Controle.", 
"Unidade que implementa operações lógicas (NOT, AND, OR, XOR) e aritiméticas que são as de adição, subtração, multiplicação, divisão, dependendo do microprocessador.", 
"É um espaço temporário de informações do sistema operacional e de aplicativos em uso.", 
"Nesse tipo de memória os dados são gravados nelas apenas uma vez.", 
"Esse tipo de memória têm como principal característica a capacidade de permitir que dados sejam regravados no dispositivo.", "Esse tipo memória também pode ser vista como um tipo de EEPROM, no entanto, o processo de gravação (e regravação) é muito mais rápido.", 
"Também conhecida como memória auxiliar, tem como função armazenar grandes quantidades de informações.", "Faz com que que certos dispositivos de hardware num computador acessem a memória do sistema para leitura e escrita independentemente da CPU.", 
"É o nome de uma linha de controle na eletrônica digital usada para selecionar um dos circuitos integrados dentre vários conectados ao mesmo barramento de computador.", "Um barramento de endereço é uma arquitetura de barramento de computador. É usado para transferir dados entre dispositivos. Os dispositivos são identificados pelo endereço de hardware da memória física (o endereço físico).", "Barramento (computação), um sistema de comunicação que transfere dados.", "É uma central com dois núcleos, ou seja, núcleo duplo, esta divisão contribui com uma distribuição de tarefas no aparelho.", "É uma central com quatro núcleos, ou seja, núcleo quádruplo, esta divisão contribui com uma distribuição de tarefas no aparelho.", "É utilizado tanto em computadores residenciais quanto em comerciais. É conhecido como um processador de alto desempenho.", "É considerado o modelo mais potente da família Core, sendo amplamente usado para rodar jogos de última geração e softwares de produção de conteúdo, projetos e edição de imagens."] */;

var perguntas = ["Também é conhecido como processador. Ele realiza todas as operações lógicas e aritiméticas, possuindo além da própria Unidade Lógica e Aritimética os registradores (Acumulador, registradores de propósito gerais e especiais) e a Unidade de Controle.", 
"Unidade que implementa operações lógicas (NOT, AND, OR, XOR) e aritiméticas que são as de adição, subtração, multiplicação, divisão, dependendo do microprocessador.", 
"É um espaço temporário de informações do sistema operacional e de aplicativos em uso.", 
"Nesse tipo de memória os dados são gravados nelas apenas uma vez.", 
"Esse tipo de memória têm como principal característica a capacidade de permitir que dados sejam regravados no dispositivo.", "Esse tipo memória também pode ser vista como um tipo de EEPROM, no entanto, o processo de gravação (e regravação) é muito mais rápido.", 
"Também conhecida como memória auxiliar, tem como função armazenar grandes quantidades de informações.", "Faz com que que certos dispositivos de hardware num computador acessem a memória do sistema para leitura e escrita independentemente da CPU.", 
"É o nome de uma linha de controle na eletrônica digital usada para selecionar um dos circuitos integrados dentre vários conectados ao mesmo barramento de computador.", "Um barramento de endereço é uma arquitetura de barramento de computador. É usado para transferir dados entre dispositivos. Os dispositivos são identificados pelo endereço de hardware da memória física (o endereço físico).", "Barramento (computação), um sistema de comunicação que transfere dados.", "É uma central com dois núcleos, ou seja, núcleo duplo, esta divisão contribui com uma distribuição de tarefas no aparelho.", "É uma central com quatro núcleos, ou seja, núcleo quádruplo, esta divisão contribui com uma distribuição de tarefas no aparelho."];

var classesDivs = [".palavra1", ".palavra2", ".palavra3", ".palavra4", ".palavra5", ".palavra6", ".palavra7", ".palavra8", ".palavra9", ".palavra10", ".palavra11", ".palavra12", ".palavra13", ".palavra14"];

/* Descomentar quando Adicionar as palavras no HTML */
/* var classesDivs = [".palavra1", ".palavra2", ".palavra3", ".palavra4", ".palavra5", ".palavra6", ".palavra7", ".palavra8", ".palavra9", ".palavra10", ".palavra11", ".palavra12", ".palavra13", ".palavra14", ".palavra15", ".palavra16"]; */


var btnEnviar = document.getElementById("btnEnviar");
var dicasTxt = document.getElementById("dica");
var contador = 0;

/* == Se igual no valor */
/* === Se igual exatamente no valor e no tipo */

dicasTxt.innerHTML = perguntas[contador];

btnEnviar.addEventListener("click", () => {

    let palavraDigitada = document.getElementById("palavra").value;

    if (contador <= palavras.length) {
        if (palavraDigitada === palavras[contador]) {
            alert("acertou");
            document.querySelectorAll(classesDivs[contador]).forEach(item => {
                item.style.color = "black";
            })
            contador++;
            dicasTxt.innerHTML = perguntas[contador];
        } else {
            alert("errou");
        }
    } else {
        alert("acabou");
        contador = 0;
    }



});


/* document.querySelectorAll(".palavra1").forEach(item => item.style.color = "black") */

/* console.log() */
;