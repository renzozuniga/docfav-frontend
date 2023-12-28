import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'customFilter' })
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter((it) => {
      return it.title.toLocaleLowerCase().includes(searchText);
    });
  }
}
