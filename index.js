
exports.chance = function(options) {
  let random = Math.floor(Math.random() * 100);

  for (const option of options) {
    if (random <= option.percentage) {
      return option;
    }
    random -= option.percentage;
  }

  return options[options.length - 1];
}
