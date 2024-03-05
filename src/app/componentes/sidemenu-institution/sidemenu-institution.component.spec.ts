import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidemenuInstitutionComponent } from './sidemenu-institution.component';

describe('SidemenuInstitutionComponent', () => {
  let component: SidemenuInstitutionComponent;
  let fixture: ComponentFixture<SidemenuInstitutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidemenuInstitutionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidemenuInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
