import { Component, OnInit } from '@angular/core';
import { BaseFooterComponent } from '../base-footer/base-footer.component';

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss']
})
export class MainFooterComponent extends BaseFooterComponent implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

}
