import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownChangeStateTaskComponent } from './dropdown-change-state-task.component';

describe('DropdownChangeStateTaskComponent', () => {
  let component: DropdownChangeStateTaskComponent;
  let fixture: ComponentFixture<DropdownChangeStateTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownChangeStateTaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownChangeStateTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
