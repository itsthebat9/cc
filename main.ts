namespace SpriteKind {
    export const point = SpriteKind.create()
    export const life = SpriteKind.create()
}
function spawn_ghost () {
    ghost = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 6 6 6 6 6 6 6 . . . . . 
        . . 6 6 6 6 6 6 6 6 6 6 . . . . 
        . . 6 6 6 6 6 6 6 6 6 6 6 . . . 
        . 6 6 6 f 6 6 6 6 f 6 6 6 6 . . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 . . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . 6 6 6 . 6 6 6 . 6 6 6 . 6 6 . 
        . . 6 . . . 6 . . . 6 . . . 6 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    ghost.setPosition(22, 82)
    ghost.setBounceOnWall(true)
    ghost.setVelocity(randint(10, 50), randint(10, 50))
}
function spawn_snake () {
    snake = sprites.create(img`
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
        `, SpriteKind.Enemy)
    snake.setPosition(136, 23)
    snake.setBounceOnWall(true)
    snake.setVelocity(randint(10, 50), randint(10, 50))
}
info.onCountdownEnd(function () {
    game.gameOver(true)
    game.setGameOverScoringType(game.ScoringType.HighScore)
})
function spawn_coin () {
    coin = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . 5 5 5 5 f 5 5 5 5 . . . . 
        . . 5 5 5 5 5 f 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 f 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 f 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 f 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 f 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 f 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 f 5 5 5 5 5 . . . 
        . . . 5 5 5 5 f 5 5 5 5 . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.point)
    coin.setPosition(randint(0, 160), randint(0, 120))
    coin.setStayInScreen(true)
}
function spawn_pacman () {
    pacman = sprites.create(assets.image`pacman`, SpriteKind.Player)
    controller.moveSprite(pacman)
    pacman.setStayInScreen(true)
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.setPosition(randint(0, 160), randint(0, 120))
})
function spawn_life () {
    heart = sprites.create(img`
        ....................
        ....................
        ....................
        ....2222...2222.....
        ...222222.222222....
        ..222222222222222...
        ..222222222222222...
        ..222222222222222...
        ..222222222222222...
        ..222222222222222...
        ..222222222222222...
        ...2222222222222....
        ....22222222222.....
        .....222222222......
        ......2222222.......
        .......22222........
        ........222.........
        .........2..........
        .........2..........
        ....................
        `, SpriteKind.life)
    heart.setPosition(randint(0, 160), randint(0, 120))
    heart.setStayInScreen(true)
}
function spawn_cb () {
    cb = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 e . . . . 
        . . . . . 2 2 2 2 d 2 2 e . . . 
        . . . . e 2 2 2 2 2 2 2 e . . . 
        . . . . e 2 2 2 2 2 2 2 e . . . 
        . . . . e 2 2 2 2 2 e f f c c . 
        . . . . e e 2 2 e f f f f b c . 
        . . e e e f e e f f f f f d c . 
        . e e 2 2 d f c b 4 4 c 1 b c . 
        . e e 2 2 b c 4 1 1 4 c c . . . 
        . b 1 1 b e c 4 4 4 4 c . . . . 
        . . f f f d d 4 4 4 b c d . . . 
        e e f f f d d c c c c d d . . . 
        e e e f f f f c c c . . . . . . 
        e e . . . . f f f . . . . . . . 
        . . . . . . f f f f . . . . . . 
        `, SpriteKind.Enemy)
    cb.setPosition(140, 98)
    cb.setBounceOnWall(true)
    cb.setVelocity(randint(10, 50), randint(10, 50))
}
info.onLifeZero(function () {
    game.setGameOverEffect(true, effects.melt)
    game.setGameOverMessage(true, "YOU LOSE")
    game.gameOver(true)
    game.setGameOverScoringType(game.ScoringType.HighScore)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.point, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(coin)
    spawn_coin()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.life, function (sprite, otherSprite) {
    info.changeLifeBy(1)
})
let cb: Sprite = null
let heart: Sprite = null
let pacman: Sprite = null
let coin: Sprite = null
let snake: Sprite = null
let ghost: Sprite = null
spawn_pacman()
spawn_snake()
spawn_cb()
spawn_ghost()
info.setLife(3)
info.setScore(0)
info.startCountdown(30)
spawn_coin()
game.onUpdateInterval(5000, function () {
    sprites.destroy(heart)
    spawn_life()
})
game.onUpdateInterval(5000, function () {
    spawn_ghost()
})
