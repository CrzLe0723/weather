/**
 * Location
 */
//% weight=28 color=#EE2B2B icon="\uf3c5"
namespace Location {
    let latitudeValue = 0
    let longitudeValue = 0
    let readyValue = false

    //% block="request location"
    //% group="Location"
    export function request(): void {
    }

    //% block="latitude"
    //% group="Location"
    export function latitude(): number {
        return latitudeValue
    }

    //% block="longitude"
    //% group="Location"
    export function longitude(): number {
        return longitudeValue
    }

    //% block="location is ready"
    //% group="Location"
    export function isReady(): boolean {
        return readyValue
    }
}
