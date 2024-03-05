import { Component, OnInit } from '@angular/core';
import { SidemenuInstitutionComponent } from '../componentes/sidemenu-institution/sidemenu-institution.component';
import { TopmenuInstitutionComponent } from '../componentes/topmenu-institution/topmenu-institution.component';
import { ProgressbarComponent } from '../componentes/progressbar/progressbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import kettleDatabase from '../kettle.appwrite';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    SidemenuInstitutionComponent,
    TopmenuInstitutionComponent,
    CommonModule,
    FormsModule,
    ProgressbarComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {

  ngOnInit(): void {
    this.getMyProjects();
  }

  projects: any = [];
  nombreNuevoProjecto = '';

  createNewProject() {
    kettleDatabase.create('project', {
      name: this.nombreNuevoProjecto,
      users: kettleDatabase.local.select('ktSession').$id,
      institutions: kettleDatabase.local.select('ktInstitution').institutions.$id,
      presupuesto: 0
    }).then(response => {
        kettleDatabase.create('user_has_project', {
          users: kettleDatabase.local.select('ktSession').$id,
          project: response.$id,
          institutions: kettleDatabase.local.select('ktInstitution').institutions.$id
        }).then(response => {
            this.nombreNuevoProjecto = '';
            this.getMyProjects();
        });
    } );
  }

  getMyProjects() {
    kettleDatabase.select('user_has_project',
      [
        ['users', '==' ,kettleDatabase.local.select('ktSession').$id],
        ['institutions', '==', kettleDatabase.local.select('ktInstitution').institutions.$id]
      ]
    ).then(response => {
      this.projects = response;
    } );
  }

  goToProject(projectId:any) {
    window.location.href = "/projectsdetail?id=" + projectId;
  } 



}
