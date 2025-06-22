import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiveComponent } from './give/give.component';
import { ClearComponent } from './clear/clear.component';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { API_BASE_URL, QueueServiceProxy, ServiceProxy } from '../shared/service-proxies';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GiveComponent,
    ClearComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  providers: [
    { provide: API_BASE_URL, useValue: 'https://localhost:44352' },
    provideHttpClient(),
    ServiceProxy,
    QueueServiceProxy
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }