import { Component, OnInit } from '@angular/core';
import { BaseHeaderComponent } from '../base-header/base-header.component';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent extends BaseHeaderComponent implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

}
