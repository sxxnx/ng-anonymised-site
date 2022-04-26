import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContactService } from './contact.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { TeachingComponent } from './teaching/teaching.component';
import { PricesComponent } from './prices/prices.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    TeachingComponent,
    PricesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPageScrollCoreModule
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
