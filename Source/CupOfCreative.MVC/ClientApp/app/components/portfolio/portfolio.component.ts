import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FilterPipe } from './../../FilterPipe';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

    constructor(private _httpService: Http) { }

    thumbs: any[] = [];

    ngOnInit() {
        this._httpService.get('/api/thumbs').subscribe(values => {
            this.thumbs = values.json();
        });
    }

}
