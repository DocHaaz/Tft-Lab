import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <h1 class='text-center'>
      404 this page does not exist
    </h1>
    <a routerLink='/champion'> return to hell</a>
  `
})
export class PageNotFoundComponent {}
