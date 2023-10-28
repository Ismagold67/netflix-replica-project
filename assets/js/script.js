const img = document.querySelectorAll('.container-login .profiles img') // Seleciona todos os elementos "img" da página HTML
const f = document.querySelector('.f') // Seleciona o elemento que vai ser alterado após o evento de click
const containerSeries = document.querySelector('.contain-series') // Seleciona a div com a classe "contain-series"
const containerLogin = document.querySelector('.container-login') // Seleciona a div com a classe "container-login"
const backgroundVideo = document.querySelector('.backgroundVideo') // Seleciona a div com a classe "backgroundVideo"

//Itera por todas as tags "img" dentro da div "profiles"
img.forEach(element => {
    // Vai escutar em qual dessas "imgs" ouve um clique
    element.addEventListener('click', () => {
        // Pega o valor da src do elemento "img" que foi clicado
        var ele = element.getAttribute('src')
        // Array para guardar uma parte do valor da variável "ele"
        var list = []
        // Este comando vai iterar pelos 6 últimos elementos da variável "ele"
        // e vai guardar os valores dentro da Array "list"
        for(i = 0; i < ele.length; i++){
            if(i >= 14 && i <= 19){
                list.push(ele[i])
            }
        }
        var nameImg = list.join('')
        f.setAttribute('src', `assets/images/${nameImg}`)
        console.log(nameImg)
        //Faz manipulação no CSS
        containerSeries.style.display = 'block'
        containerSeries.classList.add('animation-container')
        containerLogin.style.display = 'none'
        backgroundVideo.style.display = 'none'
    })
});
