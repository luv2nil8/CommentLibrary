import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Genre } from './genre';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss'],
})
export class GenreComponent {
  private icon: string; 
  @ViewChild("collapsible",{static: false})collapsible: ElementRef
  @Input() genre: Genre;
  
  constructor() {}

  ngAfterViewInit() {
    this.icon = "add";
    this.collapse();
  }
  collapse(){
    let collapsed = this.collapsible.nativeElement.hidden ? false : true;
    this.collapsible.nativeElement.hidden = collapsed;
    this.icon = collapsed ? "add": "remove-outline";
    
  }
}
