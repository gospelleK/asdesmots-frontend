import { Component, OnInit } from '@angular/core';
import { ArcadeService } from './arcade.service';

@Component({
  selector: 'app-arcade',
  templateUrl: './arcade.component.html',
  styleUrls: ['./arcade.component.css']
})
export class ArcadeComponent implements OnInit {
  data: any;

  constructor(private arcadeService: ArcadeService) { }

  ngOnInit(): void {
    this.arcadeService.get().subscribe((response: any) => {
      this.data = response;
    });
  }
}
