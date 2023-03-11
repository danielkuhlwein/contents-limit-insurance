import { Component } from '@angular/core';
import { ApiConfiguration } from 'src/app/api/api-configuration';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'app';
  constructor(private apiConfiguration: ApiConfiguration) {
    this.apiConfiguration.rootUrl = environment.apiUrl;
  }
}
