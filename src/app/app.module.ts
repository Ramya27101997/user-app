import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
import {RouterModule} from '@angular/router';
import {allAppRoutes} from './routes';
import { HighlightDirective } from './highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    UsersComponent,
    AboutComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    RouterModule.forRoot(allAppRoutes)
  ],
  exports: [MatSidenavModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
