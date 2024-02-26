import { Component, OnInit } from '@angular/core';
import AudienceModel from '../../../models/audience-model';
import { DataService } from '../../../services/data.service';
import { CommonModule } from '@angular/common';
import GiftModel from '../../../models/gift-model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})


export class ListComponent implements OnInit {
  public audiences: AudienceModel[];
  public gifts: GiftModel[];


  public constructor(private dataService: DataService) { } // DI


  public async ngOnInit() {
    try {
      this.audiences = await this.dataService.getAllAudeinces();
    } catch (err: any) { alert(err.message) }

  }

  public async showGifts(args: Event) {
    try {
      const select = args.target as HTMLSelectElement; // Elemnt raising the event;
      const audienceId = +select.value
      this.gifts = await this.dataService.getGiftsByAudience(audienceId)
      
    } catch (err: any) { alert(err.message) }
  }
}
