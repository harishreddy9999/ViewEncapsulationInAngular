import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmulatedComponent } from 'src/Components/emulated/emulated.component';
import { NoneComponent } from 'src/Components/none/none.component';
import { ShadowDOMComponent } from 'src/Components/shadow-dom/shadow-dom.component';

@NgModule({
  declarations: [
    AppComponent,
    EmulatedComponent,
    NoneComponent,
    ShadowDOMComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
