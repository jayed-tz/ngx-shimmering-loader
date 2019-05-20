import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-shimmering-loader',
  templateUrl: 'ngx-shimmering-loader.html',
  styleUrls: ['./ngx-shimmering-loader.scss']
})
export class NgxShimmeringLoaderComponent implements OnInit {
  @Input() style: any;
  @Input() elemCount: string;
  @Input() isVisible: string;
  count: any[];

  constructor() {
  }

  ngOnInit() {
    this.count = Array(this.elemCount);
  }

}
