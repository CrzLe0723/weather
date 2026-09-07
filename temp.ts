
/**
 * Custom blocks
 */
//% weight=100 color=#FFAD1F icon="\uf2ca"
namespace Temperature {
    /**
     * Get the latest temperature in Celsius
    */
    //% block
    export function celsius(): number {
        return 0
    }

    // Get the latest temperature in Fahrenheit
    export function fahrenheit(): number {
        return 0
    }

    // Get the latest temperature in Kelvin
    export function kelvin(): number {
        return 0
    }

    // Whether temperature data has been obtained
    export function isReady(): boolean {
        return false
    }

    // Start updating temperature data
    export function start(): void {

    }

    // Stop updating temperature data
    export function stop(): void {

    }
}
