declare const navigator: any

namespace pxsim.Location {
    export function test(): number {
        if (navigator && navigator.geolocation) {
            console.log("Geolocation exists!")
            return 1
        }

        console.log("Geolocation does not exist!")
        return 0
    }
}