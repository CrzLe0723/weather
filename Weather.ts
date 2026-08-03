
namespace SpriteKind {
    export const WeatherSnow = SpriteKind.create()
    export const WeatherWind = SpriteKind.create()
    export const WeatherRain = SpriteKind.create()
    export const WeatherFog = SpriteKind.create()
}


/**
 * Custom Weather Blocks
 */
//% weight=100 color=#42a5f5 icon="\uf0c2"
namespace Weather {

    export enum WeatherMode {
        //% block="calm"
        Calm,
        //% block="snow"
        Snow,
        //% block="blizzard"
        Blizzard
    }

    let enabled = false

    let wind = 0
    let targetWind = 0

    let minFallSpeed = 20
    let maxFallSpeed = 50

    let spawnInterval = 50
    let spawnTimer = 0

    let snowAmount = 1

    let snowScale = 1

    let snowDrift = 0.3

    let snowImage = img`
        . 1 .
        1 1 1
        . 1 .
    `

    /**
     * start the snowfall effect
     */
    //% blockId=snowweather_start
    //% block="start snow"
    //% subcategory="Snow"
    //% group="Control"
    //% weight=100
    export function start() {
        if (enabled) return

        enabled = true
    }

    /**
     * stop the snowfall effect
     */
    //% blockId=snowweather_stop
    //% block="stop snow"
    //% subcategory="Snow"
    //% group="Control"
    //% weight=95
    export function stop() {
        if (!enabled) return;
        enabled = false

        spawnTimer = 0

    }
    
    /**
     * remove all snowflakes
     */
    //% blockId=weather_clearSnow
    //% block="clear snow"
    //% subcategory="Snow"
    //% group="Control"
    //% weight=90
    export function clearSnow() {
        for (let snow of sprites.allOfKind(SpriteKind.WeatherSnow)) {
            snow.destroy()
        }
    }
    /**
     * set the snowfall speed 
     * @param min the minimum fall speed
     * @param max the maxiumum fall speed
     */
    //% blockId=snowweather_setFallSpeed
    //% block="set snowfall speed min $min max $max"
    //% min.shadow=math_number
    //% max.shadow=math_number
    //% subcategory="Snow"
    //% group="Behavior"
    export function setSnowFallSpeed(min: number, max: number) {
        minFallSpeed = Math.min(min, max)
        maxFallSpeed = Math.max(min, max)
    }

    /** 
     * set the snow drift amount 
     * @param amount the amount of snow drift
    */ 
    //% block="set snow drift $amount"
    //% amount.min=0 amount.max=5
    //% subcategory="Snow"
    //% group="Behavior"
    export function setSnowDrift(amount: number) {
        snowDrift = amount
    }

    /**
     * set the wind strength
     * @param amount the wind strength
     */
    //% blockId=snowweather_setWind
    //% block="set wind $amount"
    //% amount="math_number"
    //% amount.min=-500 amount.max=500
    //% subcategory="Snow"
    //% group="Wind"
    export function setWind(amount: number) {
        targetWind = amount
    }

    /**
     * set the gust strength and duration
     * @param amount the wind strength 
     * @param time the duration of the gust
     */
    //% blockId=snowweather_gust
    //% block="wind gust strength $amount duration $time ms"
    //% amount="math_number"
    //% amount.min=0 amount.max=500
    //% time.shadow="timePicker"
    //% subcategory="Snow"
    //% group="Wind"
    export function gust(amount: number, time: number) {

        targetWind = amount

        timer.after(time, function () {
            targetWind = 0
        })
    }

    /**
     * Set the snow scale 
     * @param scale the scale of the snow
     */
    //% blockId=weather_setSnowScale
    //% block="set snow scale $scale"
    //% scale.min=0.1 scale.max=5
    //% subcategory="Snow"
    //% group="Appearance"
    export function setSnowScale(scale: number) {
        snowScale = scale
    }
    /**
     * set the snow image
     * @param image the image for the snow 
     */
    //% blockId=snowweather_setSnowImage
    //% block="set snow image to $image"
    //% image.shadow=screen_image_picker
    //% subcategory="Snow"
    //% group="Appearance"
    export function setSnowImage(image: Image) {
        snowImage = image
    }



    /**
     * Set snow intensity
     * @param amount number of snowflakes spawned at once
     */
    //% blockId=weather_setSnowAmount
    //% block="set snow amount $amount"
    //% amount.min=1 amount.max=10
    //% subcategory="Snow"
    //% group="Behavior"
    export function setSnowAmount(amount: number) {
        snowAmount = Math.max(1, amount)
    }


    /**
     * Set how often snowflakes spawn.
     * Smaller values create heavier snowfall.
     * @param interval milliseconds between snowflakes
     */
    //% blockId=snowweather_setSpawnInterval
    //% block="set snow spawn interval $interval ms"
    //% interval.shadow=timePicker
    //% interval.min=10 interval.max=1000
    //% subcategory="Snow"
    //% group="Behavior"
    export function setSnowSpawnInterval(interval: number) {
        spawnInterval = Math.max(10, interval)
    }





    //---Helper Functions---
    function createSnowflake() {
        let snow = sprites.create(snowImage, SpriteKind.WeatherSnow)

        snow.setPosition(
            randint(-10, scene.screenWidth()),
            0
        )
        snow.setScale(snowScale)

        snow.vy = randint(minFallSpeed, maxFallSpeed)
        sprites.setDataNumber(snow, "wobble", randint(0, 360))
        snow.setFlag(SpriteFlag.AutoDestroy, true)
        snow.setFlag(SpriteFlag.RelativeToCamera, true)
    }

    game.onUpdate(function () {
        if (!enabled) return

        spawnTimer += game.eventContext().deltaTimeMillis

        if (spawnTimer >= spawnInterval) {
            spawnTimer = 0
            for (let i = 0; i < snowAmount; i++) {
                createSnowflake()
            }
        }
    })
    game.onUpdate(function () {

        wind += (targetWind - wind) * 0.02

        for (let snow of sprites.allOfKind(SpriteKind.WeatherSnow)) {

            // wind movement
            snow.vx += (wind - snow.vx) * 0.02

            // floating snow movement
            snow.x += Math.sin(game.runtime() / 200 + sprites.readDataNumber(snow, "wobble")) * snowDrift

            if (snow.y > 125 ||
                snow.x > 170 ||
                snow.x < -10) {

                snow.destroy()
            }
        }

    })
}
