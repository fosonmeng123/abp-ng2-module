var iBlob = /** @class */ (function () {
    function iBlob(texts, options) {
    }
    return iBlob;
}());
var iFileReader = /** @class */ (function () {
    function iFileReader() {
    }
    iFileReader.prototype.readAsText = function (blob) {
        if (typeof this.onload === 'function') {
            this.onload();
        }
    };
    return iFileReader;
}());
export var Blob = window['Blob'] || iBlob;
export var FileReader = window['FileReader'] || iFileReader;
//# sourceMappingURL=ie9-blob.js.map