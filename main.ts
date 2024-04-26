basic.showLeds(`
    . . # # #
    . . . . #
    . . # . #
    . # . . .
    # . . . .
    `)
basic.pause(100)
basic.showLeds(`
    . . # . .
    . . . # .
    # # # . #
    . . . # .
    . . # . .
    `)
basic.pause(100)
basic.showLeds(`
    # . . . .
    . # . . .
    . . # . #
    . . . . #
    . . # # #
    `)
basic.pause(100)
basic.showLeds(`
    . . # . .
    . . # . .
    # . # . #
    . # . # .
    . . # . .
    `)
basic.pause(100)
basic.showLeds(`
    . . . . #
    . . . # .
    # . # . .
    # . . . .
    # # # . .
    `)
basic.pause(100)
basic.showLeds(`
    . . # . .
    . # . . .
    # . # # #
    . # . . .
    . . # . .
    `)
basic.pause(100)
basic.showLeds(`
    # # # . .
    # . . . .
    # . # . .
    . . . # .
    . . . . #
    `)
basic.pause(100)
basic.showLeds(`
    . . # . .
    . # . # .
    # . # . #
    . . # . .
    . . # . .
    `)
basic.pause(100)
basic.forever(function () {
    if (input.compassHeading() >= 23 && input.compassHeading() < 68) {
        basic.showLeds(`
            # # # . .
            # . . . .
            # . # . .
            . . . # .
            . . . . #
            `)
    } else if (input.compassHeading() < 113) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # . # # #
            . # . . .
            . . # . .
            `)
    } else if (input.compassHeading() < 158) {
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            # . . . .
            # # # . .
            `)
    } else if (input.compassHeading() < 203) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # . # .
            . . # . .
            `)
    } else if (input.compassHeading() < 248) {
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . #
            . . . . #
            . . # # #
            `)
    } else if (input.compassHeading() < 293) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # . #
            . . . # .
            . . # . .
            `)
    } else if (input.compassHeading() < 338) {
        basic.showLeds(`
            . . # # #
            . . . . #
            . . # . #
            . # . . .
            # . . . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
})
