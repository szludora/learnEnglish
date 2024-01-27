import { szenvedoMondatok } from "./angol";

export default class AngolModel {
  #lista = [];
  #aktIndex = 2;
  #aktObj = {};

  constructor() {
    this.#lista = szenvedoMondatok;
    this.setMondat();
  }

  getCim() {
    return this.#lista[0];
  }

  getSugo() {
    return this.#lista[1];
  }

  getMondat() {
    return this.#aktObj;
  }
  
  setMondat() {
    this.#aktObj=this.#lista[this.#aktIndex];
    this.#aktObj.helyes = this.#aktObj.valasztas[0];
    this.#aktObj.valasztas.sort(() => {
      return 0.5 - Math.random();
    });
    this.#aktObj.valasztas.unshift("Válassz...");
  }
  
  setAktIndex(){
    console.log(this.#aktIndex)
    this.#aktIndex++;
    if(this.#aktIndex>=this.#lista.length-1){
      this.#aktIndex=2;
    }
    this.setMondat()
  }
}
