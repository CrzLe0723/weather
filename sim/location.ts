namespace pxsim.Location {
    export function request(): void {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(
                    "Location: " +
                    position.coords.latitude +
                    ", " +
                    position.coords.longitude
                )
            },
            (error) => {
                console.log("Geolocation error: " + error.message)
            }
        )
    }
}
