import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-demo-projects',
  templateUrl: './demo-projects.component.html',
  styleUrls: ['./demo-projects.component.css']
})
export class DemoProjectsComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          {
            title: 'Basic Management Dashboard', lineItems: [
              { item: 'Angular 10 Framework' },
              { item: 'Angular Material - Google Material Design' },
              { item: 'Firebase Database' }
            ], cols: 2, rows: 1
          },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        {
          title: 'Basic Management Dashboard', lineItems: [
            { item: 'Angular 10 Framework' },
            { item: 'Angular Material - Google Material Design' },
            { item: 'Firebase Database' }
          ], cols: 2, rows: 1
        },        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) { }
}
