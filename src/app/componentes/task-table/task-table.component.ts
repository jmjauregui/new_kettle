import { Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownChangeStateTaskComponent } from '../dropdown-change-state-task/dropdown-change-state-task.component';
import kettleDatabase from '../../kettle.appwrite';
@Component({
  selector: 'app-task-table',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    DropdownChangeStateTaskComponent
  ],
  templateUrl: './task-table.component.html',
  styleUrl: './task-table.component.css'
})
export class TaskTableComponent implements OnInit{

  @Input() projectId: string = 'disable';
  tasks:any = [];

  newtask: any = {
    title: '',
    description: '',
    hh: 0,
  }

  ngOnInit(): void {
    this.getAllTaskToProject();
  }


  addTaskToProject() {
    kettleDatabase.create('project_tasks', {
      project: this.projectId,
      title: this.newtask.title,
      description: this.newtask.description,
      estimated: this.newtask.hh
    })
      .then(response => {
        console.log(response);
        this.newtask = { title: '', description: '', hh: 0 };
        this.getAllTaskToProject();
      });

  }

  changeStateTask(id:string) {
    kettleDatabase.update('project_tasks', id, {
      'status': 'eliminada'
    }).then(() => {
      this.getAllTaskToProject();
    });
  }

  getAllTaskToProject() {
    kettleDatabase.select('project_tasks', [
      ['project', '==', this.projectId],
      ['status', '!=', 'eliminada']

    ]).then(response => {
      this.tasks = response;
    });
  }



}
