"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = void 0;
function random(options) {
    options = options.sort((a, b) => a.percentage - b.percentage);
    let random = Math.floor(Math.random() * 100);
    for (const option of options) {
        if (random <= option.percentage) {
            return option.value;
        }
        random -= option.percentage;
    }
    return options[options.length - 1].value;
}
exports.random = random;
