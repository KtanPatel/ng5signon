import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // console.log(JSON.stringify(localStorage.getItem('username')));
  }

  getUserEmail() {
    return JSON.stringify(localStorage.getItem('username'));
  }

  logout() {
    localStorage.removeItem('username');
    this.router.navigateByUrl('/');
  }

}