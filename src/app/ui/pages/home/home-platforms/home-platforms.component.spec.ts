import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePlatformsComponent } from './home-platforms.component';

describe('HomePlatformsComponent', () => {
  let component: HomePlatformsComponent;
  let fixture: ComponentFixture<HomePlatformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePlatformsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePlatformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
