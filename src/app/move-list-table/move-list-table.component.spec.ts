import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveListTableComponent } from './move-list-table.component';

describe('MoveListTableComponent', () => {
  let component: MoveListTableComponent;
  let fixture: ComponentFixture<MoveListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveListTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
