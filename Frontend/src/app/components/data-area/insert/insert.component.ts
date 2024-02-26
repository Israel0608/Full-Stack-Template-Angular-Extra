import { Component, OnInit } from '@angular/core';
import AudienceModel from '../../../models/audience-model';
import { DataService } from '../../../services/data.service';
import { CommonModule } from '@angular/common';
import GiftModel from '../../../models/gift-model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './insert.component.html',
  styleUrl: './insert.component.css'
})
export class InsertComponent implements OnInit {

  public gift = new GiftModel();
  public audiences: AudienceModel[];


  public constructor(private dataService: DataService, private router: Router) { } // DI
  public async ngOnInit() {
    try {
      this.audiences = await this.dataService.getAllAudeinces();
    } catch (err: any) { alert(err.message) }
  }

  public async send() {
    try {
      await this.dataService.addGift(this.gift);
      alert("Gift has been added.")
      this.router.navigateByUrl("/list")

    } catch (err: any) {
      alert(err.message)
    }
  }
}
