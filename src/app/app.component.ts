import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  list: number[];
  title = 'shimmering-loader';
  style = {
    'width': '300px',
    'height': '400px',
    'margin': '10px'
  };

  ngOnInit(): void {
    setTimeout(() => {
      this.list = [2, 3, 4];
    }, 5000);
  }

}
