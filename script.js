const dino = document.querySelector('.dino');
//Incluindo o cactus dentro da background
const background = document.querySelector('.background');
let inJumping = false;
let position = 0;
/*Este comando ao pressionar uma tecla ele irá gerar um comando, aqui é para o Dino Pular*/
function handlekeyUp(event) {
    /*Site para pesquisar Keycode: keycode.info */
    if (event.keyCode === 32) {
        if (!isJumping) {
            jump();
        }
    }
}
/*Função responsável pelo pulo do Dininho*/
function jump() {
    inJumping = true;
    let upInterval = setInterval(() => {
        if (position => 150) {
            clearInterval(upInterval);//Até onde irá subir
            //Descer
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 20;
                    dino.style.bottom = position + 'px'
                }
            }, 20);
        } else
            /*Aqui será definido o tempo que o Dininho irá pular */
            position += 20;
        dino.style.bottom = position + 'px';
    }, 20);
}
//Termina a parte de interação do Dininho
//Início da interação dos cactos
function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    //Criando mais cactos.
    let randomtime = Math.random() * 6000;
    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
cactusPosition -= 10;
cactus.style.left = cactusposition + 'px';
//Para novos cactus aparecerem no jogo
if(cactusPosition < -60){
    clearInterval(leftInterval);
    //Remover o elemento filho dele
    background.removeChild(cactus);
}else if(cactusPosition > 0 && cactusPosition < 60 && position < 60) {
    //GAME OVER
    clearInterval(leftInterval);
    document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
}else { 
    cactusPosition -= 10;
    cactus.style.left = cactusPosition + 'px';
}
}, 20);
//Aqui tipo invoca a criação de um novo cactos, tipo espelho.
setTimeout(createCactus, randomtime);
}

//Iniciar o jogo
createCactus();
Document.addEventListener('keyup'.handlekeyUp);

