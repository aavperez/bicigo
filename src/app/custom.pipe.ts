import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'pesos'})
export class pesosPipe implements PipeTransform {
  transform(value: string): string {
    let newStr: string = "$" + value;
    return newStr;
  }
}