const botao = document.querySelector('.button-menu')
const menulateral = document.querySelector('.menu-lateral')
const background = document.querySelector('.bakground')
const conteudo = document.querySelector('.conteudo')

botao.addEventListener('click', () => {
    botao.classList.toggle('ativo')
    menulateral.classList.toggle('ativo')
    conteudo.classList.toggle('ativo')
    background.classList.toggle('ativo')
   document.body.style.backgroundColor =  menulateral.classList.contains('ativo') ? '#34495e' : '#ecf0f1';
})
background.addEventListener('click', () => { 
    botao.classList.remove('ativo')
    menulateral.classList.remove('ativo')
    conteudo.classList.remove('ativo')
    background.classList.remove('ativo')
    document.body.style.backgroundColor = "#ecf0f1";

})