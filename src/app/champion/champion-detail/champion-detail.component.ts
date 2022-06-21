import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Champion } from '../champion';
import { ChampionService } from '../champion.service';

@Component({
  selector: 'app-champion-detail',
  templateUrl: './champion-detail.component.html',
})
export class ChampionDetailComponent implements OnInit {

  championList: Champion[];
  champion: Champion|undefined;

  constructor(private route: ActivatedRoute, private router: Router, private championService: ChampionService) { }

  ngOnInit(){
    const champID: string|null = this.route.snapshot.paramMap.get('id');
    if(champID) {
      this.champion = this.championService.getChampionById(+champID);
    }
  }

  goBack() {
    this.router.navigate(['/champion']);
  }
}
