import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-demo-pipe',
  templateUrl: './demo-pipe.component.html',
  styleUrls: ['./demo-pipe.component.css'],
})
export class DemoPipeComponent implements OnInit {
  mynumber: number[] = [];

  constructor() {}

  ngOnInit() {
    this.generateNumber();
  }

  generateNumber() {
    of(2, 4, 6)
      .pipe(
        map((item) => item * 2),
        tap((item) => console.log(item)),
        take(2)
      )
      .subscribe((res) => {
        this.mynumber.push(res);
      });
  }
}
