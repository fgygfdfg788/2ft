let index = 0
sloth.set_offset(
0,
0,
0,
0
)
basic.forever(function () {
    index = randint(1, 4)
    makerbit.connectIrReceiver(DigitalPin.P0, IrProtocol.Keyestudio)
})
basic.forever(function () {
    sloth.do_action(sloth.actions(sloth.action_name.walk), 10, 50)
})
basic.forever(function () {
    basic.showLeds(`
        # # # # #
        # # . # #
        # . # . #
        # # . # #
        # # # # #
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        # . # . #
        # # # # #
        # . # . #
        # # # # #
        `)
    basic.pause(500)
})
