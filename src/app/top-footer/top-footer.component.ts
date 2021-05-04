import { Component, OnInit } from '@angular/core';
import { BaseFooterComponent } from '../base-footer/base-footer.component';

@Component({
  selector: 'app-top-footer',
  templateUrl: './top-footer.component.html',
  styleUrls: ['./top-footer.component.scss']
})
export class TopFooterComponent extends BaseFooterComponent implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

}
