import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginetudiantComponent } from './loginetudiant.component';

describe('LoginetudiantComponent', () => {
  let component: LoginetudiantComponent;
  let fixture: ComponentFixture<LoginetudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginetudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginetudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
