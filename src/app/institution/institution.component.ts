import { Component } from '@angular/core';
import { TopmenuInstitutionComponent } from '../componentes/topmenu-institution/topmenu-institution.component';
import { SidemenuInstitutionComponent } from '../componentes/sidemenu-institution/sidemenu-institution.component'; 
@Component({
  selector: 'app-institution',
  standalone: true,
  imports: [
    TopmenuInstitutionComponent,
    SidemenuInstitutionComponent
  ],
  templateUrl: './institution.component.html',
  styleUrl: './institution.component.css'
})
export class InstitutionComponent {

}
