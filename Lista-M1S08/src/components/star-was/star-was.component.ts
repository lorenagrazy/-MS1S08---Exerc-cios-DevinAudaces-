import { Component, OnInit } from '@angular/core';
import { PersonagemClass } from 'src/app/personagem-class';
import { PersonagensStarWarsService } from 'src/app/personagens-star-wars.service';


@Component({
  selector: 'app-star-was',
  templateUrl: './star-was.component.html',
  styleUrls: ['./star-was.component.css']
})
export class StarWasComponent implements OnInit {
  public personagens: PersonagemClass[] = [];

  constructor(private _service: PersonagensStarWarsService) { }
  ngOnInit(): void {
    this._service.getPersonagens().subscribe(
      (res) => {
        this.personagens = res
      }
    )
  }
  public getPersonagensFromService() {

  }
}

