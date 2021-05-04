import { Component, OnInit } from '@angular/core';
import { BaseFooterComponent } from '../base-footer/base-footer.component';

@Component({
  selector: 'app-bottom-footer',
  templateUrl: './bottom-footer.component.html',
  styleUrls: ['./bottom-footer.component.scss']
})
export class BottomFooterComponent extends BaseFooterComponent implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

}
