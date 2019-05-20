import {NgModule} from '@angular/core';
import {NgxShimmeringLoaderComponent} from './ngx-shimmering-loader.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgxShimmeringLoaderComponent],
  exports: [NgxShimmeringLoaderComponent]
})
export class NgxShimmeringLoaderModule {
}
