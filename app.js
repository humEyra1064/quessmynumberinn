let randomNumber = Math.ceil(Math.random()*100)
const input = document.querySelector('.input')
const buton = document.querySelector('.input-con button')
const result = document.querySelector('.result')
const imgCon = document.querySelector('.img-con')
let live =6
console.log(buton)
// console.log(result.innerText = 'Congratulations')

//1 ile 100 arasında bir sayı tut.
console.log(randomNumber)
buton.addEventListener('click',()=>{
    console.log(+input.value)
    live--
    console.log('can',live)
    //kazanma durumu
    if(+input.value === randomNumber){
        console.log('Bildiniz')
        result.innerText = 'Congratulations'
        imgCon.style.backgroundImage = "url('minions.gif')"
    }
    //tahmin edilen sayı küçükse 
    if(+input.value < randomNumber){
        console.log('artır')
        result.innerText = "👍Higher Number👍"
    }
    //tahmin edilen sayı büyükse
    if(+input.value > randomNumber){
        console.log('azalt')
        result.innerText = "👎Lower Number👎"
    }
    //can bitince
    if(live ==0){
        console.log("Kaybettiniz can bitti")
        result.innerText = "Try Again!!😔";
        imgCon.style.backgroundImage = "url('minions-taunting.gif')"

    }
})