import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminComponent } from './components/admin/admin.component';

import { FilterPipe } from './FilterPipe';

const appRoutes: Routes = [
    { path: '', component: PortfolioComponent },
    { path: 'admin', component: AdminComponent },
    { path: '**', component: PortfolioComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        PortfolioComponent,
        FooterComponent,
        HeaderComponent,
        AdminComponent,
        FilterPipe
    ],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [HttpModule],
    bootstrap: [AppComponent]
})
export class AppModuleShared { }
