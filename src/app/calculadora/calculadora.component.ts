import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  expressao='';
  resultado: number;

  constructor() { }

  ngOnInit() {
  }
  
  ac(){
    this.resultado=null;
    this.expressao=null;
  }

  insere(elemento){
    this.expressao+=elemento;
  }

  fazCalculo(num){
    if(isFinite(eval(this.expressao))==true && isNaN(eval(this.expressao))==false){
      this.resultado=eval(this.expressao);
    }else{
      alert("Número não pode ser representado!")
      this.resultado=null;
    }
  }

  retiraUltimo(){
    this.expressao=this.expressao.substring(0,(this.expressao.length - 1));
  }

}