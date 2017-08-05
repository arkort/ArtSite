import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    FooterComponent,
    HeaderComponent,
    AdminComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot([
          {
              path: 'home',
              component: HeaderComponent
          },
          {
              path: 'admin',
              component: AdminComponent
          },
          {
              path: '',
              redirectTo: '/home',
              pathMatch: 'full'
          }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
