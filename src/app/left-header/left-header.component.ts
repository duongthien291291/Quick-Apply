import { Component, OnInit } from '@angular/core';
import { BaseHeaderComponent } from '../base-header/base-header.component';

@Component({
  selector: 'app-left-header',
  templateUrl: './left-header.component.html',
  styleUrls: ['./left-header.component.scss']
})
export class LeftHeaderComponent extends BaseHeaderComponent implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

}
