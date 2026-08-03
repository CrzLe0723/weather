// tests go here; this will not be compiled when this package is used as an extension.
// Start with light snow
Weather.setSnowFallSpeed(20, 35)
Weather.setSnowSpawnInterval(70)
Weather.setWind(0)
Weather.start()

// After 10 seconds, the storm rolls in
timer.after(10000, function () {
    Weather.setSnowSpawnInterval(30)
    Weather.setSnowFallSpeed(40, 70)
    Weather.setWind(60)

    // Strong gusts every 5 seconds
    game.onUpdateInterval(5000, function () {
        Weather.gust(randint(250, 800), 1200)
    })
})