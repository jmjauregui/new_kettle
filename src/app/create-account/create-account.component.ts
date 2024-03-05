import { Component } from '@angular/core';
import kettleDatabase from '../kettle.appwrite';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {

  userParams = {
    email: '',
    password: '',
  }

  crearCuenta() {

    kettleDatabase.create('users', {
      'email': this.userParams.email,
      'created_at': new Date(),
      'password': this.userParams.password
    }).then(response => {
        kettleDatabase.local.create('ktSession', response);
      })
      .then(response => {
          window.location.href = '/institution-hall'
      });


  }

}
