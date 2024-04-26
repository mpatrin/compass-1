basic.show_leds("""
    . . # # #
    . . . . #
    . . # . #
    . # . . .
    # . . . .
    """)
basic.pause(100)
basic.show_leds("""
    . . # . .
    . . . # .
    # # # . #
    . . . # .
    . . # . .
    """)
basic.pause(100)
basic.show_leds("""
    # . . . .
    . # . . .
    . . # . #
    . . . . #
    . . # # #
    """)
basic.pause(100)
basic.show_leds("""
    . . # . .
    . . # . .
    # . # . #
    . # . # .
    . . # . .
    """)
basic.pause(100)
basic.show_leds("""
    . . . . #
    . . . # .
    # . # . .
    # . . . .
    # # # . .
    """)
basic.pause(100)
basic.show_leds("""
    . . # . .
    . # . . .
    # . # # #
    . # . . .
    . . # . .
    """)
basic.pause(100)
basic.show_leds("""
    # # # . .
    # . . . .
    # . # . .
    . . . # .
    . . . . #
    """)
basic.pause(100)
basic.show_leds("""
    . . # . .
    . # . # .
    # . # . #
    . . # . .
    . . # . .
    """)
basic.pause(100)

def on_forever():
    if input.compass_heading() >= 23 and input.compass_heading() < 68:
        basic.show_leds("""
            # # # . .
            # . . . .
            # . # . .
            . . . # .
            . . . . #
            """)
    elif input.compass_heading() < 113:
        basic.show_leds("""
            . . # . .
            . # . . .
            # . # # #
            . # . . .
            . . # . .
            """)
    elif input.compass_heading() < 158:
        basic.show_leds("""
            . . . . #
            . . . # .
            # . # . .
            # . . . .
            # # # . .
            """)
    elif input.compass_heading() < 203:
        basic.show_leds("""
            . . # . .
            . . # . .
            # . # . #
            . # . # .
            . . # . .
            """)
    elif input.compass_heading() < 248:
        basic.show_leds("""
            # . . . .
            . # . . .
            . . # . #
            . . . . #
            . . # # #
            """)
    elif input.compass_heading() < 293:
        basic.show_leds("""
            . . # . .
            . . . # .
            # # # . #
            . . . # .
            . . # . .
            """)
    elif input.compass_heading() < 338:
        basic.show_leds("""
            . . # # #
            . . . . #
            . . # . #
            . # . . .
            # . . . .
            """)
    else:
        basic.show_leds("""
            . . # . .
            . # . # .
            # . # . #
            . . # . .
            . . # . .
            """)
basic.forever(on_forever)
