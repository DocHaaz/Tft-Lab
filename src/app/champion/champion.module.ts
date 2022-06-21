import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { ChampionCostColorPipe } from './champion-cost-color.pipe';
import { ChampionListComponent } from './champion-list/champion-list.component';
import { ChampionDetailComponent } from './champion-detail/champion-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { ChampionService } from './champion.service';

const routes: Routes = [
  { path: 'champion', component: ChampionListComponent },
  { path: 'champion/:id', component: ChampionDetailComponent},
];

@NgModule({
  declarations: [
    BorderCardDirective,
    ChampionCostColorPipe,
    ChampionListComponent,
    ChampionDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [ChampionService]
})
export class ChampionModule { }
