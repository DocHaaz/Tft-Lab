import { Component, OnInit} from '@angular/core';
import { Champion } from '../champion';
import { Router } from '@angular/router';
import { ChampionService } from '../champion.service';

@Component({
  selector: 'app-champion-list',
  templateUrl: './champion-list.component.html',
})
export class ChampionListComponent implements OnInit {

  ChampionList: Champion[]
  championSelected: Champion|undefined;

  constructor(private router: Router, private championService: ChampionService) {}

  ngOnInit() {
    this.ChampionList = this.championService.getChampionList()
  }

  selectChampion(championID: string) {
    const champion: Champion|undefined = this.ChampionList.find(champion => champion.id == +championID)
    if(champion) {
      console.log(`vous avez cliqué sur le champion ${champion.name}`)
      this.championSelected = champion
    }
    else {
      console.log("vous avez demandé un champion qui n'existe pas")
      this.championSelected = champion;
    }
  }

  goTo(champion: Champion) {
    this.router.navigate(['/champion', champion.id])
  }
}
