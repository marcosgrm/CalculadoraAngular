import { Component, Input } from '@angular/core';

@Component({
  selector: 'apresentacao',
  template: `<h1>Calculadora Básica</h1>`,
  styles: [`h1 { font-family: Lato; text-align: center}`]
})
export class HelloComponent  {
  @Input() name: string;
}
