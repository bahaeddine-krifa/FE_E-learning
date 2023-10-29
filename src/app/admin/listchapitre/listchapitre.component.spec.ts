import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListchapitreComponent } from './listchapitre.component';

describe('ListchapitreComponent', () => {
  let component: ListchapitreComponent;
  let fixture: ComponentFixture<ListchapitreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListchapitreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListchapitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
