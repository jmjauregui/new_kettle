import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import kettleDatabase from '../kettle.appwrite';

@Component({
  selector: 'app-create-institution',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './create-institution.component.html',
  styleUrl: './create-institution.component.css'
})
export class CreateInstitutionComponent {


  formInstitution = {
    name: '',
  }

  fnc_createInstitution() {
    kettleDatabase.create('institutions', {
      'name': this.formInstitution.name
    }).then(response => {
      kettleDatabase.create('user_has_institutions', {
        'users': kettleDatabase.local.select('ktSession').$id,
        'institutions': response.$id,
        'created_at': new Date()
      }).then(responseBis => {
        window.location.href = '/institution-hall';
      } )
    } )
    
  }


}
