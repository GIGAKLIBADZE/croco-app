import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekType, ILeaderboardItem } from './leaderboard-model';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leaderboard.html',
  styleUrls: ['./leaderboard.scss']
})
export class LeaderboardComponent {
  weekTypes: (WeekType | 'ALL')[] = ['ALL', 'I', 'II', 'III', 'IV'];
  activeFilter: WeekType | 'ALL' = 'ALL';

  leaderboard: ILeaderboardItem[] = [];

  constructor() {
    this.generateData();
  }

  generateData() {
    const weeks: WeekType[] = ['I', 'II', 'III', 'IV'];
    const names = ['giga', 'luka', 'ana', 'dato', 'mari', 'nika', 'sandro', 'tamo'];

    for (let i = 1; i <= 50; i++) {
      this.leaderboard.push({
        customerId: Math.floor(Math.random() * 100000),
        loginName: names[Math.floor(Math.random() * names.length)] + i,
        place: i,
        week: weeks[Math.floor(Math.random() * weeks.length)]
      });
    }
  }

  get filteredData() {
    if (this.activeFilter === 'ALL') return this.leaderboard;
    return this.leaderboard.filter(item => item.week === this.activeFilter);
  }

  setFilter(filter: WeekType | 'ALL') {
    this.activeFilter = filter;
  }
}
