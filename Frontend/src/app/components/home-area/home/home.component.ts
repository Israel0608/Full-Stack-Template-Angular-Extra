import { Component, OnInit, } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponen implements OnInit {

  public totalGifts: number;

  public constructor(private dataService: DataService) { }

  public async ngOnInit() {
    try{
      this.totalGifts = await this.dataService.getTotalGifts()
    }catch(err: any){
      alert(err.message)
    }
  }
}
