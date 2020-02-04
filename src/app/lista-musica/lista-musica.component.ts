import { Component, OnInit, Input } from '@angular/core';
import { Musica } from '../models/musica.model';
import { MusicaAdicionar } from '../models/musica-adicionar.model';

@Component({
  selector: 'app-lista-musica',
  templateUrl: './lista-musica.component.html',
  styleUrls: ['./lista-musica.component.scss']
})
export class ListaMusicaComponent implements OnInit {

  @Input() titulo : string;
  @Input() musicas : Array<Musica> = new Array<Musica>();
  musicaAdicionar : MusicaAdicionar = new MusicaAdicionar();
  constructor() { }
  ngOnInit(): void {
  }

  removerMusica(musica : Musica) : void {
    this.musicas.splice(this.musicas.findIndex(x => x.id === musica.id), 1);
  }

  adicionarMusica(){
    let proximoId = this.musicas[this.musicas.length - 1].id + 1;
    let musica = new Musica(proximoId, this.musicaAdicionar.nome, this.musicaAdicionar.autor, this.musicaAdicionar.album);
    this.musicas.push(musica);
  }
}
