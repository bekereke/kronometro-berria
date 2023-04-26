function gelditu () {
    martxan = false
    guztizkoDenbora = input.runningTime() - hasierakoDenbora
    basic.showNumber(Math.idiv(guztizkoDenbora, 1000))
}
function hasi () {
    hasierakoDenbora = input.runningTime()
    martxan = true
    basic.clearScreen()
}
input.onButtonPressed(Button.A, function () {
    if (martxan) {
        gelditu()
    } else {
        hasi()
    }
})
function dirdir () {
    if (martxan) {
        led.toggle(0, 0)
    }
    basic.pause(200)
}
let martxan = false
let hasierakoDenbora = 0
let guztizkoDenbora = 0
guztizkoDenbora = 0
hasierakoDenbora = 0
martxan = false
basic.forever(function () {
    dirdir()
})
