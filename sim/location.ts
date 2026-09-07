namespace pxsim.Location {
    let latitudeValue = 0
    let longitudeValue = 0
    let readyValue = false

    export function request(): void {
        readyValue = false

        if (!navigator.geolocation) {
            console.log("Geolocation is not supported by this browser.")
            return
        }

        navigator.geolocation.getCurrentPosition(
            position => {
                latitudeValue = position.coords.latitude
                longitudeValue = position.coords.longitude
                readyValue = true
            },
            error => {
                console.log("Geolocation error: " + error.message)
                readyValue = false
            }
        )
    }

    export function latitude(): number {
        return latitudeValue
    }

    export function longitude(): number {
        return longitudeValue
    }

    export function isReady(): boolean {
        return readyValue
    }
}
