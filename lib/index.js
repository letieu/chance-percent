"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function random(options) {
    let random = Math.floor(Math.random() * 100);
    for (const option of options) {
        if (random <= option.percentage) {
            return option.value;
        }
        random -= option.percentage;
    }
    return options[options.length - 1].value;
}
exports.default = random;
