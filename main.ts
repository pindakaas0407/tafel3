let getal = 0
basic.forever(function () {
    if (getal < 15) {
        basic.showNumber(getal)
        getal += 3
    } else {
        getal = 0
    }
})
