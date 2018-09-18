import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { AES, enc } from 'crypto-ts';
// const CryptoTS = require('crypto-ts');

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  secretKey = 'as73euh299hdc298uhduhasj8';
  usersAPIurl = 'http://localhost:4000/api/Users/';
  constructor(private http: HttpClient) { }


  regUser(data) {
    // console.log(data);
    const uri = this.usersAPIurl + 'Register';
    const req = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      pass: this.encPwd(data.password)
    };
    // const headers = new HttpHeaders()
    // .append('Access-Control-Allow-Origin', '*');

    // console.log(JSON.stringify(req));

    return this.http
      .post(uri, req)
      .map(res => {
          // console.log(res);
          return res; }
      );
  }

  loginUser(data) {
    const uri = this.usersAPIurl + 'Login';
    const req = {
      email: data.email,
      pass: this.encPwd(data.password)
    };

    return this.http
    .post(uri, req)
    .map(res => {
        // console.log(res);
        return res; }
    );

  }

  encPwd(str) {
     return AES.encrypt(str, this.secretKey).toString();
    // const ciphertext = CryptoTS.AES.encrypt(str, 'as73euh299hdc298uhduhasj8').toString();
    // return ciphertext;
  }

  decPwd(str) {
    return AES.decrypt(str, this.secretKey).toString(enc.Utf8);
    // const bytes  = CryptoTS.AES.decrypt(str.toString(), 'as73euh299hdc298uhduhasj8');
    // const plaintext = bytes.toString(CryptoTS.enc.Utf8);
    // return plaintext;
  }
}
