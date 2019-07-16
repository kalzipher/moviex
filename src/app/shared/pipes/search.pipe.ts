import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(values: any[], search: string): any {
    if (!Array.isArray(values)) {
      return [];
    }
    if (!search) {
      return values;
    }
    const filtered: any[] = values.filter(item => {
      return JSON.stringify(item).toLocaleLowerCase().includes(search.toLocaleLowerCase());
    });
    console.log(filtered);
    return filtered;
  }
}
