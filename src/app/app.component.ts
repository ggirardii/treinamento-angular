import { Component, OnInit } from '@angular/core';
import { Musica } from './models/musica.model';
import { MusicaService } from './services/musica.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  musicas : Array<Musica> = new Array<Musica>();
  musicasDaSemana : Array<Musica> = new Array<Musica>();

  constructor(private _musicaService : MusicaService){  }

  ngOnInit(): void {
    this.musicasDaSemana = this._musicaService.buscarMusicasDaSemana();
    this.musicas = this._musicaService.buscarMusicasFavoritas();
  }
}
