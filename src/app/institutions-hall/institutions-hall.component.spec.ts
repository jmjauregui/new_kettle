import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionsHallComponent } from './institutions-hall.component';

describe('InstitutionsHallComponent', () => {
  let component: InstitutionsHallComponent;
  let fixture: ComponentFixture<InstitutionsHallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionsHallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstitutionsHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
