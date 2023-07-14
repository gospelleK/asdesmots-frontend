import { Component, OnInit } from '@angular/core';
import { ArcadeService } from '../arcade.service';


@Component({
  selector: 'app-add-arcade',
  templateUrl: './add-arcade.component.html',
  styleUrls: ['./add-arcade.component.css']
})
export class AddArcadeComponent implements OnInit {


  constructor(private arcadeService: ArcadeService) { }

  ngOnInit(): void {
  }


  addArcade(Arcade: any){
    this.arcadeService.add(Arcade).subscribe(() => {

    });
  }

}

