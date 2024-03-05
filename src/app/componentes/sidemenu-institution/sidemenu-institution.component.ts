import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidemenu-institution',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './sidemenu-institution.component.html',
  styleUrl: './sidemenu-institution.component.css'
})
export class SidemenuInstitutionComponent implements OnInit{

  @Input() selectedMenu: string = '';
  institutionInformation:any = {};
  ngOnInit(): void {
    this.institutionInformation = JSON.parse(localStorage.getItem('ktInstitution') || '{}');
  }
}
