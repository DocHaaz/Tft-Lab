import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'championCostColor'
})
export class ChampionCostColorPipe implements PipeTransform {
  transform(cost: number): string {

    let color: string;

    switch (cost) {
      case 1:
        color = 'grey';
        break;
      case 2:
        color = 'green';
        break;
      case 3:
        color = 'blue'
        break;
      case 4:
        color = 'purple'
        break;
      case 5:
        color = 'yellow'
        break;
      default:
        color = 'brown';
        break;
    }

    return 'chip-' + color;

  }
}