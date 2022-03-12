import { ChanceOption } from "./index.d";

export default function random<T>(options: ChanceOption<T>[]) {
  let random = Math.floor(Math.random() * 100);

  for (const option of options) {
    if (random <= option.percentage) {
      return option.value;
    }
    random -= option.percentage;
  }

  return options[options.length - 1].value;
}
