/**
 * Location
 */
//% weight=28 color=#EE2B2B icon="\uf3c5"
namespace Location {
    let latitudeValue = 0
    let longitudeValue = 0
    let readyValue = false

    /**
     * Request the current location
     */
    //% block="request location"
    //% group="Location"
    //% shim=Location::request
    export function request(): void {
        let browser: any = (<any>window)
    
        if (!browser.navigator || !browser.navigator.geolocation) {
            console.log("Geolocation is not supported by this browser.")
            return
        }
    
        browser.navigator.geolocation.getCurrentPosition(
            (position: any) => {
                latitudeValue = position.coords.latitude
                longitudeValue = position.coords.longitude
                readyValue = true
            },
            (error: any) => {
                console.log("Geolocation error: " + error.message)
                readyValue = false
            }
        )
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
