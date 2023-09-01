import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-card',
  templateUrl: './secondary-card.component.html',
  styleUrls: ['./secondary-card.component.css']
})
export class SecondaryCardComponent implements OnInit {

  @Input()
  imageSecondaryCard:string = ""
  @Input()
  titleSecondaryCard:string = ""
  @Input()
  paragraphDateSecondaryCard:string = ""
  @Input() 
  link: string = ""; 

  constructor() { }

  ngOnInit(): void {
  }

}
