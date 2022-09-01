import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestclaimComponent } from './testclaim.component';

describe('TestclaimComponent', () => {
  let component: TestclaimComponent;
  let fixture: ComponentFixture<TestclaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestclaimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
