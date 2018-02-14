import { Component, OnInit } from '@angular/core';
import {trigger,style,transition,animate,keyframes,query,stagger, animation} from '@angular/animations'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('goals',[
      transition('* => *',[
        query(':enter',style({opacity: 0 }),{optional:true}),
        query(':enter',stagger('300ms',[
          animate('.6s ease-in',keyframes([
            style({opacity: 0,transition:'translateY(-75%)',offset:0}),
            style({opacity: .5,transition:'translateY(35px)',offset:.3}),
            style({opacity: 1,transition:'translateY(0)',offset:1}),
          ]))

        ]),{optional:true}),
        query(':leave',stagger('300ms',[
          animate('.6s ease-in',keyframes([
            style({opacity: 1,transition:'translateY(0)',offset:0}),
            style({opacity: .5,transition:'translateY(35px)',offset:.3}),
            style({opacity: 1,transition:'translateY(-75%)',offset:1}),
          ]))

        ]),{optional:true})


      ])


    ])

  ]
})
export class HomeComponent implements OnInit {
itemCout: number;
btnText:  string ='Add An Item';
goalText: string ='This is my first goal text';
goals =['1','2','3'];
  constructor() { }

  ngOnInit() {
    this.itemCout=this.goals.length;
  }
  addItem()
  {
    this.goals.push(this.goalText);
    this.goalText='';
    this.itemCout=this.goals.length;

  }
  removeItem(i)
  {
    this.goals.splice(i,1);
    this.itemCout=this.goals.length;
  }

}
