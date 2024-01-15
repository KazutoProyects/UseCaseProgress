import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementUserProjectComponent } from './management-user-project.component';

describe('ManagementUserProjectComponent', () => {
  let component: ManagementUserProjectComponent;
  let fixture: ComponentFixture<ManagementUserProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagementUserProjectComponent]
    });
    fixture = TestBed.createComponent(ManagementUserProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
