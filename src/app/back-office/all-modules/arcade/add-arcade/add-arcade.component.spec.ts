import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArcadeComponent } from './add-arcade.component';

describe('AddArcadeComponent', () => {
  let component: AddArcadeComponent;
  let fixture: ComponentFixture<AddArcadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddArcadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddArcadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
