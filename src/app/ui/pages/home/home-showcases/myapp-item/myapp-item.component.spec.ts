import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyappItemComponent } from './myapp-item.component';

describe('MyappItemComponent', () => {
  let component: MyappItemComponent;
  let fixture: ComponentFixture<MyappItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyappItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyappItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
