import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddCategoryProjectComponent } from './form-add-category-project.component';

describe('FormAddCategoryProjectComponent', () => {
  let component: FormAddCategoryProjectComponent;
  let fixture: ComponentFixture<FormAddCategoryProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAddCategoryProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormAddCategoryProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
