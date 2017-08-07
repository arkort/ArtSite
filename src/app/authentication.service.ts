import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response, Headers } from '@angular/http';

@Injectable()
export class AuthenticationService {

    constructor(private http: HttpClient) { }
    ProcessLogin(password: string): void {
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        console.log(password);
        this.http.post('/login', JSON.stringify({ password: password }), headers).subscribe();
    }
}
