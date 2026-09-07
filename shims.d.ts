declare namespace Location {
    //% shim=Location::request
    function request(): void;

    //% shim=Location::latitude
    function latitude(): number;

    //% shim=Location::longitude
    function longitude(): number;

    //% shim=Location::isReady
    function isReady(): boolean;
}
