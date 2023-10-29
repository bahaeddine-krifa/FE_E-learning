import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListobjectifComponent } from './listobjectif.component';

describe('ListobjectifComponent', () => {
  let component: ListobjectifComponent;
  let fixture: ComponentFixture<ListobjectifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListobjectifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListobjectifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
