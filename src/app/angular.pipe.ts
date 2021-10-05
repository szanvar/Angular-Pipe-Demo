import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'angular'
})
export class AngularPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
