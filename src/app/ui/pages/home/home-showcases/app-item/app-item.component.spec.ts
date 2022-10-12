import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppItemComponent } from './app-item.component';

describe('AppItemComponent', () => {
  let component: AppItemComponent;
  let fixture: ComponentFixture<AppItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
