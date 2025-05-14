namespace SpriteKind {
    export const shark = SpriteKind.create()
    export const fishenemy = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (player2, c) {
    if (canBeHit) {
        info.changeScoreBy(25)
        c.destroy(effects.fire, 100)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    PlayerSprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c . . . . 
        . . . . . . c c d d d d c . . . 
        . . . . . c c c c c c d c . . . 
        . . . . c c 4 4 4 4 d c c . . . 
        . . . c 4 d 4 4 4 4 4 1 c . c c 
        . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
        . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
        f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
        f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
        f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
        . f 4 4 4 4 1 c 4 f 4 d f f f f 
        . . f f 4 d 4 4 f f 4 c f c . . 
        . . . . f f 4 4 4 4 c d b c . . 
        . . . . . . f f f f d d d c . . 
        . . . . . . . . . . c c c . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c c c c . . . . 
        . . . . . . c d d d d d c . . . 
        . . . . . . c c c c c d c . . . 
        . . . . . c 4 4 4 4 d c c . . . 
        . . . . c d 4 4 4 4 4 1 c . . . 
        . . . c 4 4 1 4 4 4 4 4 1 c . . 
        . . c 4 4 4 4 1 4 4 4 4 1 c c c 
        . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
        . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
        f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
        f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
        . f 4 4 4 4 1 4 4 4 4 c b c f f 
        . . f f f d 4 4 4 4 c d d c . . 
        . . . . . f f f f f c c c . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . c c c c . . . . 
        . . . . . . c c d d d d c . . . 
        . . . . . c c c c c c d c . . . 
        . . . . c c 4 4 4 4 d c c . c c 
        . . . c 4 d 4 4 4 4 4 1 c c 4 c 
        . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
        . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
        f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
        f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
        f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
        . f 4 4 4 4 1 c c 4 4 d f f . . 
        . . f f 4 d 4 4 4 4 4 c f . . . 
        . . . . f f 4 4 4 4 c d b c . . 
        . . . . . . f f f f d d d c . . 
        . . . . . . . . . . c c c . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . c c c c . . . 
        . . . . . . . c c d d d d c . . 
        . . . . . c c c c c c d d c . . 
        . . . c c c 4 4 4 4 d c c c c c 
        . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
        . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
        f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
        f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
        f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
        . f 4 4 4 4 1 4 4 f 4 4 d f . . 
        . . f 4 4 1 4 c c 4 4 d f . . . 
        . . . f d 4 4 4 4 4 4 c f . . . 
        . . . . f f 4 4 4 4 c d b c . . 
        . . . . . . f f f f d d d c . . 
        . . . . . . . . . . c c c . . . 
        `],
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    PlayerSprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . . c d d d d c c . . . . . . 
        . . . c d c c c c c c . . . . . 
        . . . c c d 4 4 4 4 c c . . . . 
        c c . c 1 4 4 4 4 4 d 4 c . . . 
        c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
        c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
        f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
        f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
        f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
        f f f f d 4 f 4 c 1 4 4 4 4 f . 
        . . c f c 4 f f 4 4 d 4 f f . . 
        . . c b d c 4 4 4 4 f f . . . . 
        . . c d d d f f f f . . . . . . 
        . . . c c c . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c c . . . . . . . 
        . . . c d d d d d c . . . . . . 
        . . . c d c c c c c . . . . . . 
        . . . c c d 4 4 4 4 c . . . . . 
        . . . c 1 4 4 4 4 4 d c . . . . 
        . . c 1 4 4 4 4 4 1 4 4 c . . . 
        c c c 1 4 4 4 4 1 4 4 4 4 c . . 
        c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
        f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
        f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
        f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
        f f c b c 4 4 4 4 1 4 4 4 4 f . 
        . . c d d c 4 4 4 4 d f f f . . 
        . . . c c c f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . c c c c . . . . . . . . 
        . . . c d d d d c c . . . . . . 
        . . . c d c c c c c c . . . . . 
        c c . c c d 4 4 4 4 c c . . . . 
        c 4 c c 1 4 4 4 4 4 d 4 c . . . 
        f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
        f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
        f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
        f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
        f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
        . . f f d 4 4 c c 1 4 4 4 4 f . 
        . . . f c 4 4 4 4 4 d 4 f f . . 
        . . c b d c 4 4 4 4 f f . . . . 
        . . c d d d f f f f . . . . . . 
        . . . c c c . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . c c c c . . . . . . . . . 
        . . c d d d d c c . . . . . . . 
        . . c d d c c c c c c . . . . . 
        c c c c c d 4 4 4 4 c c c . . . 
        f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
        f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
        f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
        f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
        f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
        . . f d 4 4 f 4 4 1 4 4 4 4 f . 
        . . . f d 4 4 c c 4 1 4 4 f . . 
        . . . f c 4 4 4 4 4 4 d f . . . 
        . . c b d c 4 4 4 4 f f . . . . 
        . . c d d d f f f f . . . . . . 
        . . . c c c . . . . . . . . . . 
        `],
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (otherSprite == Enemy1) {
        if (canBeHit) {
            canBeHit = false
            info.changeLifeBy(-1)
            scene.cameraShake(4, 500)
            animation.runImageAnimation(
            otherSprite,
            [img`
                .................ccfff..............
                ................cddbbf..............
                ...............cddbbf...............
                ..............fccbbcf............ccc
                ........ffffffccccccff.........ccbbc
                ......ffbbbbbbbbbbbbbcfff.....cdbbc.
                ....ffbbbbbbbbbcbcbbbbcccff..cddbbf.
                ....fbcbbbbbffbbcbcbbbcccccfffdbbf..
                ....fbbb1111ff1bcbcbbbcccccccbbbcf..
                .....fb11111111bbbbbbcccccccccbccf..
                ......fccc33cc11bbbbccccccccfffbbcf.
                .......fc131c111bbbcccccbdbc...fbbf.
                ........f33c111cbbbfdddddcc.....fbbf
                .........ff1111fbdbbfddcc........fff
                ...........cccccfbdbbfc.............
                .................fffff..............
                `,img`
                .................ccfff..............
                ................cddbbf..............
                ...............cddbbf...............
                .........ffffffccbbcf...............
                ......fffbbbbbbbbcccff..............
                .....fbbbbbbbbbbbbbbbcfff......ccccc
                .....bcbbbbbffbcbcbbbbcccff...cdbbbc
                .....bbb1111ffbbcbcbbbcccccffcddbbc.
                .....fb11111111bcbcbbbcccccccbdbbf..
                ......fccc33c11bbbbbbcccccccccbbcf..
                .......fc131cc11bbbbccccccccffbccf..
                ........f33c1111bbbcccccbdbc..fbbcf.
                .........ff1111cbbbfdddddcc....fbbf.
                ...........ccc1fbdbbfddcc.......fbbf
                ..............ccfbdbbfc..........fff
                .................fffff..............
                `,img`
                ..................ccfff.............
                .................cddbbf.............
                ........fffffffffddbbf..............
                .......fbbbbbbbbbfcbcf..............
                .......fbbc111bffbbccffff...........
                .......fb111111ffbbbbbcccff....ccccc
                ........f1cc3311bbcbcbbccccf..cdbbbc
                ........fcc131c1bbbcbcbcccccfcddbbc.
                .........f111111bbbcbcbccccccbdbbf..
                .........f1111111bbbbbccccccccbbcf..
                ..........f111111bbbbcccccccffbccf..
                ...........c1111cbbbcccccbdbc.fbbcf.
                ............cc11cbbbfddddddc...fbbf.
                ..............cffbdbbfdddcc.....fbbf
                .................fbdbbfcc........fff
                ..................fffff.............
                `,img`
                ....................ccfff...........
                ..........fffffffffcbbbbf...........
                .........fbbbbbbbbbfffbf............
                .........fbb111bffbbbbff............
                .........fb11111ffbbbbbcff..........
                .........f1cccc11bbcbcbcccf.........
                ..........fc1c1c1bbbcbcbcccf...ccccc
                ............c3331bbbcbcbccccfccddbbc
                ...........c333c1bbbbbbbcccccbddbcc.
                ...........c331c11bbbbbcccccccbbcc..
                ..........cc13c111bbbbccccccffbccf..
                ..........c111111cbbbcccccbbc.fccf..
                ...........cc1111cbbbfdddddc..fbbcf.
                .............cccffbdbbfdddc....fbbf.
                ..................fbdbbfcc......fbbf
                ...................fffff.........fff
                `,img`
                ...........fffffff...ccfff..........
                ..........fbbbbbbbffcbbbbf..........
                ..........fbb111bbbbbffbf...........
                ..........fb11111ffbbbbff...........
                ..........f1cccc1ffbbbbbcff.........
                ..........ffc1c1c1bbcbcbcccf........
                ...........fcc3331bbbcbcbcccf..ccccc
                ............c333c1bbbcbcbccccfcddbbc
                ............c333c1bbbbbbbcccccddbcc.
                ............c333c11bbbbbccccccbbcc..
                ...........cc331c11bbbbccccccfbccf..
                ...........cc13c11cbbbcccccbbcfccf..
                ...........c111111cbbbfdddddc.fbbcf.
                ............cc1111fbdbbfdddc...fbbf.
                ..............cccfffbdbbfcc.....fbbf
                ....................fffff........fff
                `,img`
                ....................................
                ....................................
                ....................................
                ...............ccffff...............
                ..............cddbbbf...............
                .......ffffffcddbbbf................
                .....ffbbbbbbbbbbbbbcfff.......ccccc
                ...ffbbbbbbbbcbcbbbbbcccff....cdbbbc
                ..fbbbbbbbbbbcbbcbbbbcccccfffcddbbc.
                .fbcbbbbbbbbbbcbcbbbbccccccccbdbbf..
                .fbbbbbbbfffbbcbbbbbccccccccccbbcf..
                .ffbb1111fffbbcbbbbcccccccbcffbccf..
                ..ff111111111bbbbccccccbbbcc..fbbcf.
                ....ccccccc111bdbbbfddbccc.....ffbbf
                ........ccccccfbdbbbfcc..........fff
                ...............ffffff...............
                `],
            100,
            false
            )
            pause(1000)
            canBeHit = true
            animation.runImageAnimation(
            otherSprite,
            [img`
                .............ccfff..............
                ...........ccddbcf..............
                ..........ccddbbf...............
                ..........fccbbcf...............
                .....fffffccccccff.........ccc..
                ...ffbbbbbbbcbbbbcfff....ccbbc..
                ..fbbbbbbbbcbcbbbbcccff.cdbbc...
                ffbbbbbbffbbcbcbbbcccccfcdbbf...
                fbcbbb11ff1bcbbbbbcccccffbbf....
                fbbb11111111bbbbbcccccccbbcf....
                .fb11133cc11bbbbcccccccccccf....
                ..fccc31c111bbbcccccbdbffbbcf...
                ...fc13c111cbbbfcddddcc..fbbf...
                ....fccc111fbdbbccdcc.....fbbf..
                ........ccccfcdbbcc........fff..
                .............fffff..............
                `,img`
                .............ccfff..............
                ............cddbbf..............
                ...........cddbbf...............
                ..........fccbbcf............ccc
                ....ffffffccccccff.........ccbbc
                ..ffbbbbbbbbbbbbbcfff.....cdbbc.
                ffbbbbbbbbbcbcbbbbcccff..cddbbf.
                fbcbbbbbffbbcbcbbbcccccfffdbbf..
                fbbb1111ff1bcbcbbbcccccccbbbcf..
                .fb11111111bbbbbbcccccccccbccf..
                ..fccc33cc11bbbbccccccccfffbbcf.
                ...fc131c111bbbcccccbdbc...fbbf.
                ....f33c111cbbbfdddddcc.....fbbf
                .....ff1111fbdbbfddcc........fff
                .......cccccfbdbbfc.............
                .............fffff..............
                `,img`
                ..............cfff..............
                ............ccddbf..............
                ...........cbddbff.........ccc..
                ..........fccbbcf.........cbbc..
                ...fffffffccccccff.......cdbc...
                .ffcbbbbbbbbbbbbbcfff....cdbf...
                fcbbbbbbbbbcbbbbbbcccff.cdbf....
                fbcbbbbffbbbcbcbbbcccccffdcf....
                fbb1111ffbbbcbcbbbccccccbbcf....
                .fb11111111bbcbbbccccccccbbcf...
                ..fccc33cb11bbbbcccccccfffbbf...
                ...fc131c111bbbcccccbdbc..fbbf..
                ....f33c111cbbccdddddbc....fff..
                .....ff1111fdbbccddbcc..........
                .......cccccfdbbbfcc............
                .............fffff..............
                `,img`
                .............ccfff..............
                ............cddbbf..............
                ...........cddbbf...............
                ..........fccbbcf............ccc
                ....ffffffccccccff.........ccbbc
                ..ffbbbbbbbbbbbbbcfff.....cdbbc.
                ffbbbbbbbbbcbcbbbbcccff..cddbbf.
                fbcbbbbbffbbcbcbbbcccccfffdbbf..
                fbbb1111ff1bcbcbbbcccccccbbbcf..
                .fb11111111bbbbbbcccccccccbccf..
                ..fccc33cc11bbbbccccccccfffbbcf.
                ...fc131c111bbbcccccbdbc...fbbf.
                ....f33c111cbbbfdddddcc.....fbbf
                .....ff1111fbdbbfddcc........fff
                .......cccccfbdbbfc.............
                .............fffff..............
                `],
            500,
            false
            )
        }
    }
    if (otherSprite == enemy2) {
        if (canBeHit) {
            canBeHit = false
            info.changeLifeBy(-1)
            scene.cameraShake(4, 500)
            pause(1000)
            canBeHit = true
        }
    }
    if (otherSprite == Enemy3) {
        if (canBeHit) {
            canBeHit = false
            info.changeLifeBy(-1)
            scene.cameraShake(4, 500)
            animation.runImageAnimation(
            otherSprite,
            [img`
                . . . . . c c c c c c c . . . . 
                . . . . c 6 7 7 7 7 7 6 c . . . 
                . . . c 7 c 6 6 6 6 c 7 6 c . . 
                . . c 6 7 6 f 6 6 f 6 7 7 c . . 
                . . c 7 7 7 7 7 7 7 7 7 7 c . . 
                . . f 7 8 1 f f 1 6 7 7 7 f . . 
                . . f 6 f 1 f f 1 f 7 7 7 f . . 
                . . . f f 2 2 2 2 f 7 7 6 f . . 
                . . c c f 2 2 2 2 7 7 6 f c . . 
                . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
                c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
                f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
                f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
                f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
                . f 6 1 1 1 1 1 6 6 6 6 c . . . 
                . . f f c c c c c c c c . . . . 
                `,img`
                . . . . . . c c c c c c c . . . 
                . . . . . c f f 6 6 f f 7 c . . 
                . . . . c 7 6 6 6 6 6 6 7 6 c . 
                . . . c 7 7 7 7 7 7 7 7 7 7 c . 
                . . . c 7 8 1 f f 1 6 7 7 7 c . 
                . . . f 6 f 1 f f 1 f 7 7 7 f . 
                . . . f 6 f 2 2 2 2 f 7 7 7 f . 
                . . c c 6 f 2 2 2 2 f 7 7 6 f . 
                . c 7 7 7 7 2 2 2 2 7 7 f c . . 
                c 7 1 1 1 7 7 7 7 7 c c 7 7 c . 
                f 1 1 1 1 1 7 7 7 f c 6 7 7 7 c 
                f 1 1 1 1 1 1 6 f c c 6 6 6 c c 
                f 6 1 1 1 1 1 6 6 c 6 6 6 c . . 
                f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
                . f 6 1 1 1 1 6 6 6 6 6 c . . . 
                . . f f c c c c c c c c . . . . 
                `,img`
                . . . . . . c c c c c c c . . . 
                . . . . . c f f 6 6 f f 7 c . . 
                . . . . c 7 6 6 6 6 6 6 7 6 c . 
                . . . c 7 7 7 7 7 7 7 7 7 7 c . 
                . . . c 7 8 1 f f 1 6 7 7 7 c . 
                . . . f 6 f 1 f f 1 f 7 7 7 f . 
                . . . f 6 f 2 2 2 2 f 7 7 7 f . 
                . . c c 6 f 2 2 2 2 f 7 7 6 f . 
                . c 7 7 7 7 2 2 2 2 7 7 f c . . 
                c 7 1 1 1 7 7 7 7 7 c c 7 7 c . 
                f 1 1 1 1 1 7 7 7 f c 6 7 7 7 c 
                f 1 1 1 1 1 1 6 f c c 6 6 6 c c 
                f 6 1 1 1 1 1 6 6 c 6 6 6 c . . 
                f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
                . f 6 1 1 1 1 6 6 6 6 6 c . . . 
                . . f f c c c c c c c c . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . c c c c c 
                . . . . . . . . . c c 7 7 7 6 c 
                . . . . . . . . c c 7 7 7 c c . 
                . . . . . . . . c 6 7 7 c . . . 
                . . . . . . . . c 6 6 6 c . . . 
                . . . c c c c c c 6 6 6 c c . . 
                . . c 6 7 7 7 7 6 c c 6 6 6 c . 
                . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
                c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
                c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
                f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
                f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
                . c 1 c f f 1 c 7 6 f 6 6 c c . 
                . c c c c c c c c c c c c . . . 
                `,img`
                . . . . . . . . . . . c c c c c 
                . . . . . . . . . c c 7 7 7 6 c 
                . . . . . . . . c c 7 7 7 c c . 
                . . . . . . . . c 6 7 7 c . . . 
                . . . . . . . . c 6 6 6 c . . . 
                . . . . . . . . c 6 6 6 c c . . 
                . . . c c c c c c c 6 6 6 c c . 
                . . c 6 7 7 7 7 6 c c 6 6 6 c . 
                . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
                c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
                c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
                f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
                f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
                . f 7 7 7 7 7 7 7 7 6 f 6 6 c . 
                . c 1 c f f 1 c 7 6 f 6 6 c c . 
                . c c c c c c c c c c c c . . . 
                `,img`
                . . . . . . . . . . . c c c c c 
                . . . . . . . . . c c 7 7 7 6 c 
                . . . . . . . . c c 7 7 7 c c . 
                . . . . . . . . c 6 7 7 c . . . 
                . . . . . . . . c 6 6 6 c . . . 
                . . . . . . . . c 6 6 6 c c . . 
                . . . c c c c c c c 6 6 6 c c . 
                . . c 6 7 7 7 7 6 c c 6 6 6 c . 
                . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
                c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
                c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
                f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
                f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
                . f 7 7 7 7 7 7 7 7 6 f 6 6 c . 
                . c 1 c f f 1 c 7 6 f 6 6 c c . 
                . c c c c c c c c c c c c . . . 
                `],
            100,
            false
            )
            pause(1000)
            canBeHit = true
            animation.runImageAnimation(
            otherSprite,
            [img`
                . . . . c c c c c c . . . . . . 
                . . . c 6 7 7 7 7 6 c . . . . . 
                . . c 7 7 7 7 7 7 7 7 c . . . . 
                . c 6 7 7 7 7 7 7 7 7 6 c . . . 
                . c 7 c 6 6 6 6 c 7 7 7 c . . . 
                . f 7 6 f 6 6 f 6 7 7 7 f . . . 
                . f 7 7 7 7 7 7 7 7 7 7 f . . . 
                . . f 7 7 7 7 6 c 7 7 6 f c . . 
                . . . f c c c c 7 7 6 f 7 7 c . 
                . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
                . c 7 7 2 7 7 c f c 6 7 7 6 c c 
                c 1 1 1 1 7 6 f c c 6 6 6 c . . 
                f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
                f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
                . f 6 1 1 1 1 1 1 6 6 6 f . . . 
                . . c c c c c c c c c f . . . . 
                `,img`
                . . . c c c c c c . . . . . . . 
                . . c 6 7 7 7 7 6 c . . . . . . 
                . c 7 7 7 7 7 7 7 7 c . . . . . 
                c 6 7 7 7 7 7 7 7 7 6 c . . . . 
                c 7 c 6 6 6 6 c 7 7 7 c . . . . 
                f 7 6 f 6 6 f 6 7 7 7 f . . . . 
                f 7 7 7 7 7 7 7 7 7 7 f . . . . 
                . f 7 7 7 7 6 c 7 7 6 f . . . . 
                . . f c c c c 7 7 6 f c c c . . 
                . . c 6 2 7 7 7 f c c 7 7 7 c . 
                . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
                . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
                . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
                . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
                . . c 6 1 1 1 1 1 7 6 6 c c . . 
                . . . c c c c c c c c c c . . . 
                `],
            500,
            true
            )
        }
    }
})
let coin: Sprite = null
let Enemy3: Sprite = null
let enemy2: Sprite = null
let Enemy1: Sprite = null
let PlayerSprite: Sprite = null
let canBeHit = false
scene.setBackgroundImage(assets.image`default background`)
canBeHit = true
PlayerSprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . c c c c . . . . . . . . 
    . . . c d d d d c c . . . . . . 
    . . . c d c c c c c c . . . . . 
    . . . c c d 4 4 4 4 c c . . . . 
    c c . c 1 4 4 4 4 4 d 4 c . . . 
    c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
    c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
    f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
    f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
    f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
    f f f f d 4 f 4 c 1 4 4 4 4 f . 
    . . c f c 4 f f 4 4 d 4 f f . . 
    . . c b d c 4 4 4 4 f f . . . . 
    . . c d d d f f f f . . . . . . 
    . . . c c c . . . . . . . . . . 
    `, SpriteKind.Player)
info.setLife(3)
info.setScore(0)
PlayerSprite.setStayInScreen(true)
scroller.setLayerImage(scroller.BackgroundLayer.Layer0, assets.image`
            sky
            `)
scroller.scrollBackgroundWithSpeed(-10, 0, scroller.BackgroundLayer.Layer0)
scroller.setLayerImage(scroller.BackgroundLayer.Layer1, assets.image`
            coral
            `)
scroller.scrollBackgroundWithSpeed(-20, 0, scroller.BackgroundLayer.Layer1)
scroller.setLayerImage(scroller.BackgroundLayer.Layer2, assets.image`
            sand
            `)
scroller.scrollBackgroundWithSpeed(-30, 0, scroller.BackgroundLayer.Layer2)
game.onUpdateInterval(randint(1000, 40000), function () {
    coin = sprites.create(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, SpriteKind.Food)
    animation.runImageAnimation(
    coin,
    [img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `,img`
        . . b b b . . . 
        . b 5 5 5 b . . 
        b 5 d 3 d 5 b . 
        b 5 3 5 1 5 b . 
        c 5 3 5 1 d c . 
        c 5 d 1 d d c . 
        . f d d d f . . 
        . . f f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 d 1 5 b . 
        . b 5 3 1 5 b . 
        . c 5 3 1 d c . 
        . c 5 1 d d c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . . b 1 1 b . . 
        . . b 5 5 b . . 
        . . b d d b . . 
        . . c d d c . . 
        . . c 3 3 c . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 1 d 5 b . 
        . b 5 1 3 5 b . 
        . c d 1 3 5 c . 
        . c d d 1 5 c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b b . . 
        . . b 5 5 5 b . 
        . b 5 d 3 d 5 b 
        . b 5 1 5 3 5 b 
        . c d 1 5 3 5 c 
        . c d d 1 d 5 c 
        . . f d d d f . 
        . . . f f f . . 
        `],
    200,
    true
    )
    coin.x = scene.screenWidth()
    coin.vx = randint(-10, -15)
    coin.y = randint(10, scene.screenHeight() - 0)
})
game.onUpdateInterval(randint(5000, 20000), function () {
    Enemy3 = sprites.create(img`
        . . . . . c c c c c c c . . . . 
        . . . . c 6 7 7 7 7 7 6 c . . . 
        . . . c 7 c 6 6 6 6 c 7 6 c . . 
        . . c 6 7 6 f 6 6 f 6 7 7 c . . 
        . . c 7 7 7 7 7 7 7 7 7 7 c . . 
        . . f 7 8 1 f f 1 6 7 7 7 f . . 
        . . f 6 f 1 f f 1 f 7 7 7 f . . 
        . . . f f 2 2 2 2 f 7 7 6 f . . 
        . . c c f 2 2 2 2 7 7 6 f c . . 
        . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
        c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
        f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
        f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
        f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
        . f 6 1 1 1 1 1 6 6 6 6 c . . . 
        . . f f c c c c c c c c . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    Enemy3,
    [img`
        . . . . c c c c c c . . . . . . 
        . . . c 6 7 7 7 7 6 c . . . . . 
        . . c 7 7 7 7 7 7 7 7 c . . . . 
        . c 6 7 7 7 7 7 7 7 7 6 c . . . 
        . c 7 c 6 6 6 6 c 7 7 7 c . . . 
        . f 7 6 f 6 6 f 6 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 6 c 7 7 6 f c . . 
        . . . f c c c c 7 7 6 f 7 7 c . 
        . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
        . c 7 7 2 7 7 c f c 6 7 7 6 c c 
        c 1 1 1 1 7 6 f c c 6 6 6 c . . 
        f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
        f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
        . f 6 1 1 1 1 1 1 6 6 6 f . . . 
        . . c c c c c c c c c f . . . . 
        `,img`
        . . . c c c c c c . . . . . . . 
        . . c 6 7 7 7 7 6 c . . . . . . 
        . c 7 7 7 7 7 7 7 7 c . . . . . 
        c 6 7 7 7 7 7 7 7 7 6 c . . . . 
        c 7 c 6 6 6 6 c 7 7 7 c . . . . 
        f 7 6 f 6 6 f 6 7 7 7 f . . . . 
        f 7 7 7 7 7 7 7 7 7 7 f . . . . 
        . f 7 7 7 7 6 c 7 7 6 f . . . . 
        . . f c c c c 7 7 6 f c c c . . 
        . . c 6 2 7 7 7 f c c 7 7 7 c . 
        . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
        . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
        . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
        . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
        . . c 6 1 1 1 1 1 7 6 6 c c . . 
        . . . c c c c c c c c c c . . . 
        `],
    500,
    true
    )
    Enemy3.x = scene.screenWidth()
    Enemy3.vx = randint(-20, -30)
    Enemy3.y = randint(112, 113)
})
game.onUpdateInterval(randint(1000, 10000), function () {
    enemy2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c c . . . 
        . . . . . . c c 5 5 5 5 5 c . . 
        . . . . . c 5 5 5 5 5 5 5 5 c . 
        . . . . c b b b b b b 5 5 5 c . 
        . . . . c 1 1 b b 1 b b c c . . 
        . . . c 1 1 1 b b 1 1 1 c . . . 
        . . . c 1 1 1 1 b 1 1 1 c . c c 
        . . . c d 1 1 1 b 1 1 1 b b 5 c 
        . . c c d 1 c 1 b 1 b 1 5 5 5 c 
        . c c d d 1 1 1 1 1 b 1 b b 5 c 
        f d d d 1 1 1 1 1 b b 1 f . c c 
        f f f 1 1 1 1 1 1 b b b f . . . 
        . . . f f 1 1 1 b b b 5 5 f . . 
        . . . . . f f f 5 5 5 5 5 f . . 
        . . . . . . . . f f f f f f . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    enemy2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c c c c c . . . 
        . . . . . . c 5 5 5 5 5 c c . . 
        . . . . . c 5 5 5 5 5 5 5 5 c . 
        . . . . c b b b b b b 5 5 5 c . 
        . . . . c b b b b 1 b b c c . . 
        . . . . c 1 1 b b 1 1 1 c . . . 
        . . . c 1 1 1 1 b 1 1 1 c . . . 
        . . . c 1 1 1 1 b 1 1 1 b b c c 
        . . c c d 1 1 1 b 1 b 1 5 5 5 c 
        . . c c d 1 c 1 1 1 b 1 b b 5 c 
        . c c d d 1 1 1 1 1 b 1 f b 5 c 
        f d d d 1 1 1 1 1 b b b f . c c 
        f f f f f 1 1 1 b b 5 5 5 f . . 
        . . . . . f f f 5 5 5 5 5 f . . 
        . . . . . . . . f f f f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c c . . . 
        . . . . . . c c 5 5 5 5 5 c . . 
        . . . . . c 5 5 5 5 5 5 5 5 c . 
        . . . . c b b b b b b 5 5 5 c . 
        . . . . c 1 1 b b 1 b b c c . . 
        . . . c 1 1 1 b b 1 1 1 c . . . 
        . . . c 1 1 1 1 b 1 1 1 c . c c 
        . . . c d 1 1 1 b 1 1 1 b b 5 c 
        . . c c d 1 c 1 b 1 b 1 5 5 5 c 
        . c c d d 1 1 1 1 1 b 1 b b 5 c 
        f d d d 1 1 1 1 1 b b 1 f . c c 
        f f f 1 1 1 1 1 1 b b b f . . . 
        . . . f f 1 1 1 b b b 5 5 f . . 
        . . . . . f f f 5 5 5 5 5 f . . 
        . . . . . . . . f f f f f f . . 
        `,img`
        . . . . . . . . . c c c c c . . 
        . . . . . . c c c 5 5 5 5 c c . 
        . . . . c c 5 5 5 5 5 5 5 5 c . 
        . . . . c b b b b b b 5 5 5 c . 
        . . . c 1 1 1 b b 1 b b c c . . 
        . . . c 1 1 1 1 b 1 1 1 c . c c 
        . . . c d 1 1 1 b 1 1 1 c b 5 c 
        . . c c d 1 c 1 b 1 1 1 b b 5 c 
        c c c d d 1 1 1 b 1 b 1 5 5 5 c 
        f d d d 1 1 1 1 1 1 b 1 b b c c 
        . f f 1 1 1 1 1 1 b b 1 f . . . 
        . . . f 1 1 1 1 1 b b b f . . . 
        . . . . f f 1 1 b b 5 5 f . . . 
        . . . . . . f 5 5 5 5 5 f . . . 
        . . . . . . . f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . c c c c c . . . 
        . . . . . . c c 5 5 5 5 5 c . . 
        . . . . . c 5 5 5 5 5 5 5 5 c . 
        . . . . c b b b b b b 5 5 5 c . 
        . . . . c 1 1 b b 1 b b c c . . 
        . . . c 1 1 1 b b 1 1 1 c . . . 
        . . . c 1 1 1 1 b 1 1 1 c . c c 
        . . . c d 1 1 1 b 1 1 1 b b 5 c 
        . . c c d 1 c 1 b 1 b 1 5 5 5 c 
        . c c d d 1 1 1 1 1 b 1 b b 5 c 
        f d d d 1 1 1 1 1 b b 1 f . c c 
        f f f 1 1 1 1 1 1 b b b f . . . 
        . . . f f 1 1 1 b b b 5 5 f . . 
        . . . . . f f f 5 5 5 5 5 f . . 
        . . . . . . . . f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
    enemy2.x = scene.screenWidth()
    enemy2.vx = randint(-40, -60)
    enemy2.y = randint(40, 70)
})
forever(function () {
    controller.moveSprite(PlayerSprite, 60, 60)
})
game.onUpdateInterval(randint(8000, 15000), function () {
    Enemy1 = sprites.create(img`
        .............ccfff..............
        ...........ccddbcf..............
        ..........ccddbbf...............
        ..........fccbbcf...............
        .....fffffccccccff.........ccc..
        ...ffbbbbbbbcbbbbcfff....ccbbc..
        ..fbbbbbbbbcbcbbbbcccff.cdbbc...
        ffbbbbbbffbbcbcbbbcccccfcdbbf...
        fbcbbb11ff1bcbbbbbcccccffbbf....
        fbbb11111111bbbbbcccccccbbcf....
        .fb11133cc11bbbbcccccccccccf....
        ..fccc31c111bbbcccccbdbffbbcf...
        ...fc13c111cbbbfcddddcc..fbbf...
        ....fccc111fbdbbccdcc.....fbbf..
        ........ccccfcdbbcc........fff..
        .............fffff..............
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    Enemy1,
    [img`
        .............ccfff..............
        ...........ccddbcf..............
        ..........ccddbbf...............
        ..........fccbbcf...............
        .....fffffccccccff.........ccc..
        ...ffbbbbbbbcbbbbcfff....ccbbc..
        ..fbbbbbbbbcbcbbbbcccff.cdbbc...
        ffbbbbbbffbbcbcbbbcccccfcdbbf...
        fbcbbb11ff1bcbbbbbcccccffbbf....
        fbbb11111111bbbbbcccccccbbcf....
        .fb11133cc11bbbbcccccccccccf....
        ..fccc31c111bbbcccccbdbffbbcf...
        ...fc13c111cbbbfcddddcc..fbbf...
        ....fccc111fbdbbccdcc.....fbbf..
        ........ccccfcdbbcc........fff..
        .............fffff..............
        `,img`
        .............ccfff..............
        ............cddbbf..............
        ...........cddbbf...............
        ..........fccbbcf............ccc
        ....ffffffccccccff.........ccbbc
        ..ffbbbbbbbbbbbbbcfff.....cdbbc.
        ffbbbbbbbbbcbcbbbbcccff..cddbbf.
        fbcbbbbbffbbcbcbbbcccccfffdbbf..
        fbbb1111ff1bcbcbbbcccccccbbbcf..
        .fb11111111bbbbbbcccccccccbccf..
        ..fccc33cc11bbbbccccccccfffbbcf.
        ...fc131c111bbbcccccbdbc...fbbf.
        ....f33c111cbbbfdddddcc.....fbbf
        .....ff1111fbdbbfddcc........fff
        .......cccccfbdbbfc.............
        .............fffff..............
        `,img`
        ..............cfff..............
        ............ccddbf..............
        ...........cbddbff.........ccc..
        ..........fccbbcf.........cbbc..
        ...fffffffccccccff.......cdbc...
        .ffcbbbbbbbbbbbbbcfff....cdbf...
        fcbbbbbbbbbcbbbbbbcccff.cdbf....
        fbcbbbbffbbbcbcbbbcccccffdcf....
        fbb1111ffbbbcbcbbbccccccbbcf....
        .fb11111111bbcbbbccccccccbbcf...
        ..fccc33cb11bbbbcccccccfffbbf...
        ...fc131c111bbbcccccbdbc..fbbf..
        ....f33c111cbbccdddddbc....fff..
        .....ff1111fdbbccddbcc..........
        .......cccccfdbbbfcc............
        .............fffff..............
        `,img`
        .............ccfff..............
        ............cddbbf..............
        ...........cddbbf...............
        ..........fccbbcf............ccc
        ....ffffffccccccff.........ccbbc
        ..ffbbbbbbbbbbbbbcfff.....cdbbc.
        ffbbbbbbbbbcbcbbbbcccff..cddbbf.
        fbcbbbbbffbbcbcbbbcccccfffdbbf..
        fbbb1111ff1bcbcbbbcccccccbbbcf..
        .fb11111111bbbbbbcccccccccbccf..
        ..fccc33cc11bbbbccccccccfffbbcf.
        ...fc131c111bbbcccccbdbc...fbbf.
        ....f33c111cbbbfdddddcc.....fbbf
        .....ff1111fbdbbfddcc........fff
        .......cccccfbdbbfc.............
        .............fffff..............
        `],
    200,
    true
    )
    Enemy1.x = scene.screenWidth()
    Enemy1.vx = randint(-40, -60)
    Enemy1.y = randint(60, 100)
})
