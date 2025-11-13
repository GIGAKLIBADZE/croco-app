import { Component } from '@angular/core';
import { PromoWheelComponent } from './wheel/promo-wheel';
import { LeaderboardComponent } from './leaderboard/leaderboard';

@Component({
  selector: 'app-promo-page',
  standalone: true,
  imports: [PromoWheelComponent, LeaderboardComponent],
  templateUrl: './promo-page.html',
  styleUrls: ['./promo-page.scss']
})
export class PromoPageComponent {}
