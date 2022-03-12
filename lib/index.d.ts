export interface ChanceOption<T> {
  percentage: number;
  value: T;
}

declare module "chance-percent" {
    export function random<T>(options: ChanceOption<T>[]): T;
}
