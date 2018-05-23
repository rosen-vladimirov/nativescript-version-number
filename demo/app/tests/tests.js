var VersionNumber = require("nativescript-version-number").VersionNumber;
var versionNumber = new VersionNumber();

describe("greet function", function() {
    it("exists", function() {
        expect(versionNumber.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(versionNumber.greet()).toEqual("Hello, NS");
    });
});