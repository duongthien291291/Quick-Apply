import { Component, OnInit } from '@angular/core';
import { BaseHeaderComponent } from '../base-header/base-header.component';

@Component({
  selector: 'app-right-header',
  templateUrl: './right-header.component.html',
  styleUrls: ['./right-header.component.scss']
})
export class RightHeaderComponent extends BaseHeaderComponent implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

}
