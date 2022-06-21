import { Injectable } from '@angular/core';
import { Champion } from './champion';
import { CHAMPIONS } from './mock-champion-list';

@Injectable()
export class ChampionService {

  getChampionList(): Champion[] {
    return CHAMPIONS;
  }

  getChampionById(ChampionId: number): Champion|undefined {
    return CHAMPIONS.find(champion => champion.id == ChampionId )
  }

  getChampionCostList(): string[] {
    return ['1', '2', '3', '4', '5']
  }
}
