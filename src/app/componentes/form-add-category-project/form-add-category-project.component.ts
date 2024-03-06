import { Component } from '@angular/core';
import kettleDatabase from '../../kettle.appwrite';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-add-category-project',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './form-add-category-project.component.html',
  styleUrl: './form-add-category-project.component.css'
})
  
  
export class FormAddCategoryProjectComponent {

  
  @Input() projectId = ''

  formNewCategory:any =  {
    title: '',
    descript: '',
    color: '',
  }

  createCategory() {
    kettleDatabase.create('project_categories', {
      title: this.formNewCategory.title,
      description: this.formNewCategory.descript,
      projectId: this.projectId,
      color: (this.formNewCategory.color != '') ? this.formNewCategory.color : '#d4d4d4'
    }).then(response => {
      console.log(response);
    });
  }

}
