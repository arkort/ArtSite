import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { IntroHeaderComponent } from './intro-header/intro-header.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    IntroHeaderComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot([
          {
              path: 'home',
              component: AboutComponent
          },
          {
              path: 'contact',
              component: ContactComponent
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
