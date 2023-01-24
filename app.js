let randomNumber 
const input = document.querySelector('.input')
const buton = document.querySelector('.input-con button')
const result = document.querySelector('.result')
const imgCon = document.querySelector('.img-con')
const startGame = document.querySelector('.btn-con button')
const liveElement = document.querySelector('#live')
const inputCon = document.querySelector('.input-con')
const butonCon = document.querySelector('.btn-con')
const reStartGame = document.querySelector('.restart')


let live =6
console.log(buton)
// console.log(result.innerText = 'Congratulations')
startGame.addEventListener('click',()=>{
    butonCon.style.display = 'none'
    inputCon.style.display = 'flex'
    document.querySelector('.live-con').style.visibility = 'visible'
    result.innerText = 'Write the number '
    input.focus()
    randomNumber = Math.ceil(Math.random()*100)
    

console.log(randomNumber)


})
reStartGame.addEventListener('click',()=>{
    randomNumber = Math.ceil(Math.random()*100)
    imgCon.style.backgroundImage = "url('magic.png')"
    butonCon.style.display = 'none'
    inputCon.style.display = 'flex'
    liveElement.innerText = 6 
   input.value = ""
result.innerText = 'Write the number'


})

//1 ile 100 arasında bir sayı tut.

buton.addEventListener('click',()=>{
    console.log(+input.value)
    live--
    console.log('can',live)
    liveElement.innerText = live  //live yani can hakkını bu şekilde tıklandıkça güncelledik.
    //kazanma durumu
    if(+input.value === randomNumber){
        console.log('Bildiniz')
        result.innerText = 'Congratulations'
        imgCon.style.backgroundImage = "url('minions.gif')"
        
        input.focus()
        inputCon.style.display = 'none'
        butonCon.style.display = 'flex'
        reStartGame.style.display = 'block'
        startGame.style.display = 'none'


    }
    //tahmin edilen sayı küçükse 
    if(+input.value < randomNumber){
        console.log('artır')
        result.innerText = "👍Higher Number👍"
        
        input.focus()
    }
    //tahmin edilen sayı büyükse
    if(+input.value > randomNumber){
        console.log('azalt')
        result.innerText = "👎Lower Number👎"
        input.value = ""
        input.focus()
    }
    //can bitince
    if(live ==0){
        console.log("Kaybettiniz can bitti")
        result.innerText = "Try Again!!😔";
        imgCon.style.backgroundImage = "url('minions-taunting.gif')"
        input.value = ''
        input.focus()
        inputCon.style.display = 'none'
        butonCon.style.display = 'flex'
        reStartGame.style.display = 'block'
        startGame.style.display = 'none'

    }
})
document.addEventListener('keydown',(e)=>{
    if(e.key == 'Enter'){
        buton.click()
    }//klavyeye tıkladığımda tıkladığım elementin key i enter a eşitse buton tıklanmış sayılsın
})