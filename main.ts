let getal = 0
basic.showNumber(getal)
basic.forever(function () {
    basic.showNumber(getal)
    getal += 3
    if (true) {
        getal = 0
    }
})
