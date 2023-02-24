import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAppsComponent } from './client-apps.component';

describe('ClientAppsComponent', () => {
  let component: ClientAppsComponent;
  let fixture: ComponentFixture<ClientAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAppsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
