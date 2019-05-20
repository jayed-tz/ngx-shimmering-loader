
  
  
   
# ngx-shimmering-loader     
 A component that provides shimmering loading placeholder like facebook.      
  
![sample](https://media.giphy.com/media/ekYuzxYrlbyxtKHzj0/giphy.gif)  
     
## Installation      
 Install `ngx-shimmering-loader` via NPM, using the command below:      
      
### NPM      
 ```shell   
 npm install --save ngx-shimmering-loader   
 ```      
 ## Getting started      
 Import the `NgxShimmeringLoaderModule` in your root application module `AppModule` or any other module you need to use the component:      
      
```typescript      
 import { BrowserModule } from  '@angular/platform-browser';   
 import { NgModule } from  '@angular/core';      
 import {CommonModule} from '@angular/common';  
 import { AppComponent } from './app.component'; 
 import {NgxShimmeringLoaderModule} from 'ngx-shimmering-loader';      
 @NgModule({      
  declarations: [      
   AppComponent  
 ],  
  imports: [      
   BrowserModule,  
   CommonModule,   // Import NgxShimmeringLoaderModule   
   NgxShimmeringLoaderModule   
  ],    
  providers: [],      
bootstrap: [AppComponent] }) 
export class AppModule { }      
```   
## Using it in a component   
After importing the `NgxShimmeringLoaderModule`, you can use the `NgxShimmeringLoaderComponent` component as below:      
      
```html 
<ngx-shimmering-loader  
 [style]="style" [elemCount]="3" [isVisible]="!list">
 </ngx-shimmering-loader>  
```   

**The `style` input parameter should be used to set the `width` and `height` css properties.** 
  
## Input Parameters  
  
|   Attribute   |      Type      | Required  | Default |                                              Description                              |  
| ------------- | ----------------- | ---------- | ---------- | ----------------------------------------------------------------------------------------- |  
| `isVisible`          | *boolean*  | requried | | If `true`, the placeholder will be visible. |  
| `elemCount`        | *number*  | optional | 1| Number of placeholders that needs to be displayed. |  
| `style`            | *object*  | optional |    `{'width':'200px','height': '300px','margin': '10px' }`          | An object suitable for the `ngStyle` directive that is applied on the placeholder. This should be used to set the `width` and `height` css properties.                                                  |  
|
    
## License   
 This project is licensed under the MIT License.
