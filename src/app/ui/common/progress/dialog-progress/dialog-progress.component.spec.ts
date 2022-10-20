import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProgressComponent } from './dialog-progress.component';

describe('DialogProgressComponent', () => {
  let component: DialogProgressComponent;
  let fixture: ComponentFixture<DialogProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
