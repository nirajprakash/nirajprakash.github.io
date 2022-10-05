import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyContainerComponent } from './empty-container.component';

describe('EmptyContainerComponent', () => {
  let component: EmptyContainerComponent;
  let fixture: ComponentFixture<EmptyContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
