import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElearningComponent } from './elearning.component';

describe('ElearningComponent', () => {
  let component: ElearningComponent;
  let fixture: ComponentFixture<ElearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElearningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
