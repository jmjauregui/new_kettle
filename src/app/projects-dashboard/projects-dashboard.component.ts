import { Component, OnInit } from '@angular/core';
import { SidemenuInstitutionComponent } from '../componentes/sidemenu-institution/sidemenu-institution.component';
import { TopmenuInstitutionComponent } from '../componentes/topmenu-institution/topmenu-institution.component';
import { TaskTableComponent } from '../componentes/task-table/task-table.component';
import Utils from '../utils';
import kettleDatabase from '../kettle.appwrite';
import { CommonModule } from '@angular/common';
import { FormAddCategoryProjectComponent } from '../componentes/form-add-category-project/form-add-category-project.component';



@Component({
  selector: 'app-projects-dashboard',
  standalone: true,
  imports: [
    SidemenuInstitutionComponent,
    TopmenuInstitutionComponent,
    TaskTableComponent,
    FormAddCategoryProjectComponent,
    CommonModule
  ],
  templateUrl: './projects-dashboard.component.html',
  styleUrl: './projects-dashboard.component.css'
})
  
  
  
export class ProjectsDashboardComponent implements OnInit{


  navigationSelected: string = 'task';
  idProyecto: string = '';
  projectData: any = {};
  
  

  ngOnInit(): void {
    console.log(window.location.href);
    this.idProyecto = Utils.url.GET('id');
    this.getProjectById();
  }

  getProjectById() {
    kettleDatabase.select('project', [
      ['$id', '==',this.idProyecto]
    ]).then(response => { 
      this.projectData = response[0];
    })
  }

  changeSection(section:string) {
    this.navigationSelected = section;
  }




}
