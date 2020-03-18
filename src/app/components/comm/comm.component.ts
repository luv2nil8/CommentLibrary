import { Component, OnInit, Input } from '@angular/core';
import { Comm } from './comm';

@Component({
  selector: 'app-comm',
  templateUrl: './comm.component.html',
  styleUrls: ['./comm.component.scss'],
})
export class CommComponent implements OnInit {
  @Input() comment: Comm[]

  constructor() { }

  ngOnInit() {}

}
