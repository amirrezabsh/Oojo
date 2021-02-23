import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassCreationComponent } from './class-creation.component';

describe('ClassCreationComponent', () => {
  let component: ClassCreationComponent;
  let fixture: ComponentFixture<ClassCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
