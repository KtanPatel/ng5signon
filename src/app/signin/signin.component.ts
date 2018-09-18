import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UsersService } from './../users.service';
import { Response } from './../response';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  res: Response;
  constructor(private router: Router, private service: UsersService) { }

  ngOnInit() {
    if (localStorage.getItem('username')) {
      this.router.navigateByUrl('/home');
    }

  }


  onFormSubmit(data) {
    // PASSWORD ENCRYPION

    // console.log(data);
    // const enc = this.service.encPwd(data.password);
    // console.log(enc);
    // console.log(this.service.decPwd(enc));

    this.service.loginUser(data).subscribe(res => {
      this.res = res;
      // console.log(this.res.data);
      if (this.res.isSuccess) {
        if (data.password === this.service.decPwd(this.res.data[0].pass)) {
          // localStorage.setItem('userEmail', res.data[0].email);
          localStorage.setItem('username', this.res.data[0].name);
          this.router.navigateByUrl('/home');
        } else {
          console.log('Invalid Password');
        }
      } else {
        console.log(this.res.message);
        // this.router.navigateByUrl('/');
      }
    });
    // console.log(JSON.stringify(this.res));
    // if (this.res) {
    // localStorage.setItem('user', this.res.data.data);
    // this.router.navigateByUrl('/home');
    // } else {
    //   // this.router.navigateByUrl('/');
    //   console.log(this.res.data.message);
    //   console.log(this.res.data.exceptionMessage);
    // }
  }

}
