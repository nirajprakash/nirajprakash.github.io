import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThedroidIllustrationComponent } from './thedroid-illustration.component';

describe('ThedroidIllustrationComponent', () => {
  let component: ThedroidIllustrationComponent;
  let fixture: ComponentFixture<ThedroidIllustrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThedroidIllustrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThedroidIllustrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
