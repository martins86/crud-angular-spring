import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconsCategory'
})
export class IconsCategoryPipe implements PipeTransform {

  transform(value: string): string {
    let icon: string;

    switch (value) {
      case 'front-end':
        icon = 'code';
        break;
      case 'back-end':
        icon = 'computer';
        break;
      default:
        icon = 'code';
        break;
    }
    return icon;
  }

}
