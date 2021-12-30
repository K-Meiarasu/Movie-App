import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  constructor(private DOM:DomSanitizer){ }

  transform(url:any): unknown {
    return this.DOM.bypassSecurityTrustResourceUrl(url);
  }
}