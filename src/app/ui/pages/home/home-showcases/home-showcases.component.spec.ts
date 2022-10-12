import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeShowcasesComponent } from './home-showcases.component';

describe('HomeShowcasesComponent', () => {
  let component: HomeShowcasesComponent;
  let fixture: ComponentFixture<HomeShowcasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeShowcasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeShowcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
