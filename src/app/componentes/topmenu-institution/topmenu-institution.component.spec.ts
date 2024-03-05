import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopmenuInstitutionComponent } from './topmenu-institution.component';

describe('TopmenuInstitutionComponent', () => {
  let component: TopmenuInstitutionComponent;
  let fixture: ComponentFixture<TopmenuInstitutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopmenuInstitutionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopmenuInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
