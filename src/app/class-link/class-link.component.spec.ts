import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassLinkComponent } from './class-link.component';

describe('ClassLinkComponent', () => {
  let component: ClassLinkComponent;
  let fixture: ComponentFixture<ClassLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
