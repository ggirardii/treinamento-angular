import { Component, OnInit } from '@angular/core';
import { Musica } from './models/musica.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  musicas : Array<Musica> = new Array<Musica>();
  musicasDaSemana : Array<Musica> = new Array<Musica>();


  ngOnInit(): void {
    let musica : Musica = new Musica('Back in Black', 'AC/DC', 'Back in Black', new Date('1980-7-25'));
    this.musicas.push(musica);
    this.musicas.push(new Musica('Another one Bites the Dust','QUEEN', 'The Game', new Date('1980-8-22')));
    this.musicas.push(new Musica('Fortunate Son','Creedence', 'Willy and the Poor Boys'));
    this.musicas.push(new Musica('Sound of Silence','Simon & Garfunkel'));

    this.musicasDaSemana.push(new Musica('Best of You','Foo Fighters', 'In Your Honor', new Date('2005-5-30')));
    this.musicasDaSemana.push(new Musica('Stranger Things Have Happened','Foo Fighters', 'Echoes, Silence, Patience & Grace'));
  }
}
