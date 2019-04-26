import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public signUpConfig = {
    header: 'Welcome!',
    defaultCountryCode: '46',
    hideDefaults: true,
    signUpFields: [
      {
        label: 'Username',
        key: 'username',
        required: true,
        displayOrder: 1,
        type: 'string',
      },
      {
        label: 'Password',
        key: 'password',
        required: true,
        displayOrder: 2,
        type: 'password',
      },
      {
        label: 'Email',
        key: 'email',
        required: true,
        displayOrder: 3,
        type: 'email',
      },
      {
        label: 'Name',
        key: 'name',
        required: true,
        displayOrder: 4,
        type: 'string',
      },
      {
        label: 'Family name',
        key: 'family_name',
        required: false,
        displayOrder: 5,
        type: 'string',
      },
      {
        label: 'Phone number',
        key: 'phone_number',
        required: false,
        displayOrder: 6,
        type: 'string',
      }
    ]
  };

  constructor() { 
  }

  ngOnInit() {
  }

}

