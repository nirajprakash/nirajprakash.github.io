import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechItemComponent } from './tech-item.component';

describe('TechItemComponent', () => {
  let component: TechItemComponent;
  let fixture: ComponentFixture<TechItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
