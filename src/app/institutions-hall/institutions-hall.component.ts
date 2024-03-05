import { Component, OnInit } from '@angular/core';
import kettleDatabase from '../kettle.appwrite';
@Component({
  selector: 'app-institutions-hall',
  standalone: true,
  imports: [],
  templateUrl: './institutions-hall.component.html',
  styleUrl: './institutions-hall.component.css'
})
export class InstitutionsHallComponent implements OnInit {

  userId = kettleDatabase.local.select('ktSession').$id

  arrayInstitutions:any = [];


  ngOnInit(): void {
      this.getAllInstitutions();
  }

  getAllInstitutions() {
    kettleDatabase.select('user_has_institutions', [
      [ "equal", 'users', this.userId ]
    ]).then(response => {
      this.arrayInstitutions = response;
    } )
  }

  gotoInstitution(institution: any) {
    console.log(institution);
    kettleDatabase.local.create('ktInstitution', institution);
    window.location.href = "/institution";
  }

}
