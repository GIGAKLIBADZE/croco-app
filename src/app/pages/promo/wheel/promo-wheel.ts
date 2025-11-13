import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-promo-wheel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './promo-wheel.html',
  styleUrls: ['./promo-wheel.scss'],
})
export class PromoWheelComponent {
  sectors = Array.from({ length: 10 }, (_, i) => i + 1);

  rotation = 0;
  selectedNumber: number | null = null;
  error: string | null = null;

  get step(): number {
    return 360 / this.sectors.length;
  }
  getLabelAngle(index: number): number {
    return index * this.step + this.step / 2;
  }

  spin() {
    this.error = null;

    if (
      this.selectedNumber === null ||
      this.selectedNumber < 1 ||
      this.selectedNumber > this.sectors.length
    ) {
      this.error = `აღნიშნული სექტორი ვერ მოიძებნა`;
      return;
    }

    const index = this.sectors.indexOf(this.selectedNumber);
    const exactAngle = this.getLabelAngle(index);
    const fullSpins = (Math.floor(Math.random() * 4) + 5) * 360;

    this.rotation = -exactAngle + fullSpins;
  }
}
