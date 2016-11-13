import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="row centered">
      <div class="col col-8">
        <h3>app starts here</h3>
        
      </div>
    </div>
  `,
  styles: [`
    .col-8 {
      background-color: rgba(0,0,0,0.1);
      padding: 3rem 0;
    }
  `]
})
export class AppComponent {}