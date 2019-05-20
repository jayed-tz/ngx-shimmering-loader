import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-shimmering-loader',
  templateUrl: 'ngx-shimmering-loader.html',
  styleUrls: ['./ngx-shimmering-loader.scss']
})
export class NgxShimmeringLoaderComponent implements OnInit {
  @Input() style = {
  'width': '200px',
  'height': '300px',
  'margin': '10px'
};
  @Input() elemCount = 1;
  @Input() isVisible: string;
  count: any[];

  constructor() {
  }

  ngOnInit() {
    this.count = Array(this.elemCount);
  }

}
