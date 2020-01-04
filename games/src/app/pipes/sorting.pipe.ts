import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sorting"
})
export class SortingPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value.sort(function(a, b) {
      return b.rating - a.rating;
    });
  }
}
