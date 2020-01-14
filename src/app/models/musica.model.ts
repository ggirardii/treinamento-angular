export class Musica {
  nome : string;
  autor : string;
  album : string;
  dataLancamento : Date;

  constructor(nome : string, autor: string, album : string = '', dataLancamento : Date = undefined){
    this.nome = nome;
    this.autor = autor;
    this.album = album;
    this.dataLancamento = dataLancamento;
  }
}
