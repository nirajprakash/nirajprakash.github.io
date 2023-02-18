import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaruPrivacyComponent } from './taru-privacy.component';

describe('TaruPrivacyComponent', () => {
  let component: TaruPrivacyComponent;
  let fixture: ComponentFixture<TaruPrivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaruPrivacyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaruPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
