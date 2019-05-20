import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxShimmeringLoaderModule} from '../../projects/ngx-shimmering-loader/src/lib/ngx-shimmering-loader.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxShimmeringLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
