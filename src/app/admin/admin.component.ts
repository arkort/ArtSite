import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AuthenticationService]
})
export class AdminComponent{
  user:any;

  constructor(private authenticationService: AuthenticationService) {
      this.user = { password: '' };
  }

  login() {
      console.log(this.user.password);
      this.authenticationService.ProcessLogin(this.user.password)
  }
}
