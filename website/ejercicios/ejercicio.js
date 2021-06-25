/* IIFE
(function(){
    let color = 'green'

    function printColor(){
        console.log(color)
    }

    printColor()
})(); */

/* Funciones que regresan otras funciones
function makeColorPrinter(color){
    let colorMessage = `El color es ${color}`
    return function(){
        console.log(colorMessage)
    }
}
let  greenColorPrinter = makeColorPrinter('green')
console.log(greenColorPrinter()) */

/*Variables privadas
function makeCounter(n){
    let count = n

    return {
        increase: function(){
            return count+= 1
        },
        decrese: function(){
            return count-=1
        },
        getCount: function(){
            return count
        }
    }
}
let counter = makeCounter(7)
console.log('El contador es ',counter.decrese())
console.log('El contador es ',counter.decrese())
console.log('El contador es ',counter.decrese())
console.log('El contador es ',counter.getCount()) */

function moreAsync(){
    console.log('start')
    setTimeout( ()=> console.log('setTimeout'), 0 )
    Promise.resolve('Promise 1').then( msg => console.log(msg))
    Promise.resolve('Promise 2').then( msg => console.log(msg))
    console.log('end')
}
moreAsync()