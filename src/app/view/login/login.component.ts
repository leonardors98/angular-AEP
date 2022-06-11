import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  logoIMG: string =
    'https://github.com/leonardors98/angular-AEP/blob/master/src/app/assets/img/logoHC.png?raw=true';

  constructor() {}
  ngOnInit() {}
}
