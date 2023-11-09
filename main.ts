input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 9; index++) {
        basic.showNumber(index)
        lista.push(index)
    }
})
input.onButtonPressed(Button.B, function () {
    lista.reverse()
    for (let value of lista) {
        basic.showNumber(value)
    }
})
let lista: number[] = []
lista = []
basic.showString("Hola!")
basic.forever(function () {
	
})
