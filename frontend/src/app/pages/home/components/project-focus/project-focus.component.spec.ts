import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFocusComponent } from './project-focus.component';

describe('ProjectFocusComponent', () => {
  let component: ProjectFocusComponent;
  let fixture: ComponentFixture<ProjectFocusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectFocusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
