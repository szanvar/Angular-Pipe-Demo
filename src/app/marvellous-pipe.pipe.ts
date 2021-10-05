import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousPipe'
})

// {{'Hello World' | marvellousPipe : "Marvellous" : "Infosystems"}}
export class MarvellousPipePipe implements PipeTransform {

  transform(value: any, ...args:any): any 
  {
    let str = value;

    if(args[0] == "Marvellous")
    {
      str += " Educating for better tomorrow "; 
    }
    else
    {
      str += " For better future ";
    }
    return str;
  }

}
