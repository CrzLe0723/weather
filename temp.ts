/**
 * Temperature
 */
//% weight=29 color=#FFAD1F icon="\uf2ca"
namespace Temperature {

    let celsiusVar: number = 0 // placeholder 
    let farhenheitVar: number = 32 // placeholder

    /**
     * Get the latest temperature in Celsius
     */
    //% block="temperature (°C)"
    //% group="Temperature"
    export function celsius(): number {
        return 0
    }

    /**
     * Get the latest temperature in Fahrenheit
     */
    //% block="temperature (°F)"
    //% group="Temperature"
    export function fahrenheit(): number {
        return 0
    }

    /**
     * Get the latest temperature in Kelvin
     */
    //% block="temperature (K)"
    //% group="Temperature"
    export function kelvin(): number {
        return 0
    }

    /**
     * Check whether temperature data is available
     */
    //% block="temperature data is ready"
    //% group="Status"
    export function isReady(): boolean {
        return false
    }

    /**
     * Start updating temperature data
     */
    //% block="start temperature updates"
    //% group="Updates"
    export function start(): void {
    }

    /**
     * Stop updating temperature data
     */
    //% block="stop temperature updates"
    //% group="Updates"
    export function stop(): void {
    }

    /**
     * Convert fahrenheit to celsius
    */
    //% block="convert fahrenheit $f to celsius"
    //% group="Conversion"
    export function convertFtoC(f: number): number { 
        celsiusVar = (f - 32) / 1.8

        return celsiusVar
    }
    /**
     * Convert celsius to farhenheit
    */
    //% block="convert celsius $c to fahrenheit"
    //% group="Conversion"
    export function convertCtoF(c: number): number { 
        farhenheitVar = (c + 32) * 1.8

        return farhenheitVar
    }
}
