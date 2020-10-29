import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServicesModule} from './services/services.module';
import {PagesModule} from './pages/pages.module';
import {HelpersModule} from './helpers/helpers.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HttpParams} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {PaginatorModule} from 'primeng/paginator';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServicesModule,
    PagesModule,
    HelpersModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    PaginatorModule,
    ToastModule
  ],
  providers: [
    HttpParams],
  bootstrap: [AppComponent]
})
export class AppModule {
}
