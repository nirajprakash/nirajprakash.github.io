import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeExpertiseComponent } from './home-expertise.component';

describe('HomeExpertiseComponent', () => {
  let component: HomeExpertiseComponent;
  let fixture: ComponentFixture<HomeExpertiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeExpertiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
