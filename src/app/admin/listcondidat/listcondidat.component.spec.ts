import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcondidatComponent } from './listcondidat.component';

describe('ListcondidatComponent', () => {
  let component: ListcondidatComponent;
  let fixture: ComponentFixture<ListcondidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcondidatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcondidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
