import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { initializePlayground, PlaygroundModule } from 'angular-playground';
import { AppModule } from './app/app.module';

initializePlayground('app-root');
platformBrowserDynamic().bootstrapModule(AppModule);
