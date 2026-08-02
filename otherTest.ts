// namespace SpriteKind {
//     export const Snow = SpriteKind.create()
//     export const WindTrail = SpriteKind.create()
// }
// let wind = 10
// let targetWind = 10
// let windState = 0
// function createSnowflake() {
//     let snow = sprites.create(
//         img`
//             . 1 .
//             1 1 1
//             . 1 .
//         `,
//         SpriteKind.Snow
//     )

//     snow.setPosition(
//         randint(-10, scene.screenWidth()),
//         -5
//     )

//     let depth = randint(1, 3)

//     if (depth == 1) {
//         // far snow
//         snow.setScale(0.5)
//         snow.vy = randint(5, 20)
//     } else if (depth == 2) {
//         // normal snow
//         snow.setScale(1)
//         snow.vy = randint(20, 50)
//     } else {
//         // close snow
//         snow.setScale(1.5)
//         snow.vy = randint(50, 80)
//     }

//     snow.vx = wind

//     snow.setFlag(SpriteFlag.AutoDestroy, false)

//     snow.data = randint(0, 360)

//     return snow
// }
// function createWindTrail() {
//     let streak = sprites.create(
//         img`
//             1 1 1 1 1
//         `,
//         SpriteKind.WindTrail
//     )

//     streak.setPosition(
//         wind > 0 ? -10 : 170,
//         randint(0, 120)
//     )

//     streak.vx = wind * 2
//     streak.vy = 0
// }
// game.onUpdateInterval(40, function () {
//     createSnowflake()
// })
// game.onUpdate(function () {
//     for (let snow of sprites.allOfKind(SpriteKind.Snow)) {

//         // wind smoothing
//         snow.vx += (wind - snow.vx) * 0.02
//         snow.vy = Math.max(20, snow.vy + Math.abs(wind) * 0.02)
//         // slight floating movement
//         snow.x += Math.sin(game.runtime() / 300 + snow.data) * 0.3


//         // remove offscreen snow
//         if (snow.y > 125 || snow.x > 170 || snow.x < -10) {
//             snow.destroy()
//         }
//     }

//     // create wind streaks during strong gusts
//     if (Math.abs(wind) > 100 && Math.percentChance(10)) {
//         createWindTrail()
//     }

//     wind += (targetWind - wind) * 0.02
// })
// game.onUpdateInterval(2000, function () {

//     if (Math.percentChance(50)) {

//         // wind picks up!
//         targetWind = randint(80, 250) * (Math.percentChance(50) ? 1 : -1)

//         timer.after(1000, () => {
//             // calm down
//             targetWind = randint(5, 20)
//         })


//     }
// })
// game.onUpdateInterval(3000, function () {
//     if (Math.percentChance(50)) {

//         windState = 1
//         targetWind = randint(40, 80)

//         timer.after(1000, function () {
//             windState = 2
//             targetWind = randint(150, 300)
//         })

//         timer.after(3000, function () {
//             windState = 0
//             targetWind = 0
//         })
//     }
// })
