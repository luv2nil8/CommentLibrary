import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Comm } from '../comm/comm';

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.scss'],
})
export class CollapsibleComponent {
  @Input() comments: Comm[];
  @Input() title: string; 
  private icon: string;
  @ViewChild("collapsible", {static: false}) collapsible: ElementRef; 
  constructor() { }

  ngAfterViewInit() {
    this.collapse();
  }

  collapse(){
    let collapsed = this.collapsible.nativeElement.hidden ? this.collapsible.nativeElement.hidden=false : this.collapsible.nativeElement.hidden=true;
    this.icon = collapsed ? "add": "remove-outline";
    console.log(this.icon)
  }
}
