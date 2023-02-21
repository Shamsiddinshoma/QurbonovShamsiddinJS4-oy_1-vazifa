let product = {
    Fruits: ['strawberry','grapes','banana','apple'],
    liquid: ['suv','muz'],
    holder: ['cone','cup','stick'],
    toppings: ['chocolate','peaunuts'],
};


let is_shop_open = false

let vaqt = new Date().getHours();

if(vaqt >= 9){
    is_shop_open = true
}else if(vaqt >= 22){
    is_shop_open = false
}



let order = (time,work) => {
    return new Promise((res,rej) =>{
        if(is_shop_open){
            setTimeout(() => {
                res(work())
            },time)
        }else{
            rej(console.log('error'))
        }
    })
}

const strawberry = document.getElementById('strawberry')
const straw = document.querySelector('.straw')
const banan = document.querySelector('.banan')
const apple = document.querySelector('.apple')
const grapes = document.querySelector('.grapes')
const milkice = document.querySelector('.milkice')
const mexed = document.querySelector('.mexed')
const cone = document.querySelector('.cone')
const sotildi = document.querySelector('.sotildi')

strawberry.addEventListener('click',() => {
    order(1000,() => straw.classList.add('activstraw'))
    .then(() => {
        return order(1000, () => milkice.classList.add('activmilkice'))
    })
    .then(() => {
        return order(1000, () => mexed.classList.add('activemexed'))
    })
    .then(() => {
        return order(1000, () => cone.classList.add('activcone'))
    })
    .then(() => {
        return order(1000, () => sotildi.classList.add('activsotildi'))
    })
})


const strawberry2 = document.getElementById('strawberry2')

strawberry2.addEventListener('click',() => {
    order(1000,() => banan.classList.add('activbanan'))
    .then(() => {
        return order(1000, () => milkice.classList.add('activmilkice'))
    })
    .then(() => {
        return order(1000, () => mexed.classList.add('activemexed'))
    })
    .then(() => {
        return order(1000, () => cone.classList.add('activcone'))
    })
    .then(() => {
        return order(1000, () => sotildi.classList.add('activsotildi'))
    })
})

const strawberry3 = document.getElementById('strawberry3')
strawberry3.addEventListener('click',() => {
    order(1000,() => grapes.classList.add('activgrapes'))
    .then(() => {
        return order(1000, () => milkice.classList.add('activmilkice'))
    })
    .then(() => {
        return order(1000, () => mexed.classList.add('activemexed'))
    })
    .then(() => {
        return order(1000, () => cone.classList.add('activcone'))
    })
    .then(() => {
        return order(1000, () => sotildi.classList.add('activsotildi'))
    })
})

const strawberry4 = document.getElementById('strawberry4')

strawberry4.addEventListener('click',() => {
    order(1000,() => apple.classList.add('activapple'))
    .then(() => {
        return order(1000, () => milkice.classList.add('activmilkice'))
    })
    .then(() => {
        return order(1000, () => mexed.classList.add('activemexed'))
    })
    .then(() => {
        return order(1000, () => cone.classList.add('activcone'))
    })
    .then(() => {
        return order(1000, () => sotildi.classList.add('activsotildi'))
    })
})
