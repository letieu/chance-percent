import { ChanceOption } from "./index.d";

export function random<T>(options: ChanceOption<T>[]) {
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
