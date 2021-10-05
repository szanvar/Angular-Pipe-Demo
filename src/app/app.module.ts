import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarvellousPipePipe } from './marvellous-pipe.pipe';
import { AngularPipe } from './angular.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MarvellousPipePipe,
    AngularPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
