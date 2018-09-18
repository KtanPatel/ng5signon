import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  res: any;
  constructor(private router: Router, private service: UsersService) { }

  ngOnInit() {
  }

  onFormSubmit(data) {
    // console.log(data);

    this.service.regUser(data).subscribe(res => {
      console.log(res);
    });

    this.router.navigateByUrl('/');
  }

}
