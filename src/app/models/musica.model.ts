export class Musica {
  id: number;
  nome : string;
  autor : string;
  album : string;
  dataLancamento : Date;

  constructor(id : number, nome : string, autor: string, album : string = '', dataLancamento : Date = undefined){
    this.id = id;
    this.nome = nome;
    this.autor = autor;
    this.album = album;
    this.dataLancamento = dataLancamento;
  }
}
