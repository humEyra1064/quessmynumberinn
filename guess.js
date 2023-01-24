const input = document.querySelector.apply('.input')
const buton = document.querySelector.apply('.input-con button')
let live =6
console.log(buton)

//1 ile 100 arasında bir sayı tut.
console.log(randomNumber)
buton.addEventListener('click',()=>{
    console.log(+input.value)
    live--
    console.log('can',live)
    //kazanma durumu
    if(+input.value === randomNumber){
        console.log('Bildiniz')
    }
    //tahmin edilen sayı küçükse 
    if(+input.value < randomNumber){
        console.log('artır')
    }
    //tahmin edilen sayı büyükse
    if(+input.value > randomNumber){
        console.log('azalt')
    }
})