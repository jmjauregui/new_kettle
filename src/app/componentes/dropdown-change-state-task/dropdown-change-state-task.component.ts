import { Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import kettleDatabase from '../../kettle.appwrite';
@Component({
  selector: 'app-dropdown-change-state-task',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './dropdown-change-state-task.component.html',
  styleUrl: './dropdown-change-state-task.component.css'
})
export class DropdownChangeStateTaskComponent {

  @Input() projectId: string = 'disable';
  @Input() taskId: string = '';
  @Input() state:string =  '';

  changeStateTask() {
    kettleDatabase.update('project_tasks', this.taskId, {
      'status': this.state
    });
  }

}
