/**
 * Location
 */
//% weight=90 color=#FFAD1F icon="\uf3c5"
namespace Location {
    let latitudeValue = 0
    let longitudeValue = 0
    let readyValue = false

    /**
     * Request the current location
     */
    //% block="request location"
    //% group="Location"
    export function request(): void {
        if (typeof pxsim !== "undefined") {
            pxsim.Location.request()
        }
    }

    /**
     * Get the current latitude
     */
    //% block="latitude"
    //% group="Location"
    export function latitude(): number {
        return latitudeValue
    }

    /**
     * Get the current longitude
     */
    //% block="longitude"
    //% group="Location"
    export function longitude(): number {
        return longitudeValue
    }

    /**
     * Check whether the current location is available
     */
    //% block="location is ready"
    //% group="Location"
    export function isReady(): boolean {
        return readyValue
    }
}
