import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app-upload',
    templateUrl: './uploadform.component.html',
    styleUrls: ['./uploadform.component.css']
})
export class UploadFormComponent implements OnInit {

    constructor(private _httpService: Http) { }
    
    ngOnInit() {
    }

}
