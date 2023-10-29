import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListinstructionComponent } from './listinstruction.component';

describe('ListinstructionComponent', () => {
  let component: ListinstructionComponent;
  let fixture: ComponentFixture<ListinstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListinstructionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListinstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
