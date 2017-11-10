import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app/app.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FilterPipe } from './FilterPipe';

@NgModule({
    declarations: [
        AppComponent,
        PortfolioComponent,
        FooterComponent,
        HeaderComponent,
        FilterPipe
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [HttpModule],
    bootstrap: [AppComponent]
})
export class AppModuleShared { }
