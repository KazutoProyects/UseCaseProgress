import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementUseCaseComponent } from './management-use-case.component';

describe('ManagementUseCaseComponent', () => {
  let component: ManagementUseCaseComponent;
  let fixture: ComponentFixture<ManagementUseCaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagementUseCaseComponent]
    });
    fixture = TestBed.createComponent(ManagementUseCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
