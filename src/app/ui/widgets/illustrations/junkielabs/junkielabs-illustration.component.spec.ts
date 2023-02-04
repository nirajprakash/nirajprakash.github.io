import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JunkielabsIllustrationComponent } from './junkielabs-illustration.component';

describe('JunkielabsIllustrationComponent', () => {
  let component: JunkielabsIllustrationComponent;
  let fixture: ComponentFixture<JunkielabsIllustrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JunkielabsIllustrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JunkielabsIllustrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
