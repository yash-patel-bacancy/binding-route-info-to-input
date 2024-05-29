import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withComponentInputBinding } from '@angular/router';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// bootstrapApplication(AppComponent, {
//   providers: [
//     provideRouter([], 
//         //... other features
//         withComponentInputBinding() // <-- enable this feature
//     )
//   ],
// });