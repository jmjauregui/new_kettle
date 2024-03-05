import { Component } from '@angular/core';
import kettleDatabase from '../kettle.appwrite';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  super() {
    kettleDatabase.select('users').then(response => { console.log(response) });
  }
 
}
