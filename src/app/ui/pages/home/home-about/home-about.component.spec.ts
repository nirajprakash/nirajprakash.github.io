import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAboutComponent } from './home-about.component';

describe('HomeAboutComponent', () => {
  let component: HomeAboutComponent;
  let fixture: ComponentFixture<HomeAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
