import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  palabra = 'TURMERO'
  oculta = ''

  gano = false
  perdio = false

  intentos = 0

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
            'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ]

  constructor() {
    this.oculta = '_ '.repeat(this.palabra.length)
  }

  comprobar(letra) {

    this.existeLetra(letra)
    const ocultaArray = this.oculta.split(' ')
    for (let i = 0; i < this.palabra.length; i++) {
      if (this.palabra[i] === letra) {
        ocultaArray[i] = letra
      }
    }
    this.oculta = ocultaArray.join(' ')
    this.verificaGane()
  }

  verificaGane() {
    const palabraArr = this.oculta.split(' ').join('')
    console.log(palabraArr)
    if (this.palabra === palabraArr) {
      
      this.gano = true
      
    } else if (this.intentos >= 9) {
      this.perdio = true
    }
  }

  existeLetra(letra) {
    if (this.palabra.indexOf(letra) >= 0) {
      this.verificaGane()
    } else if (this.intentos < 9) {
      this.intentos++
      this.verificaGane()
    }
  }
}
