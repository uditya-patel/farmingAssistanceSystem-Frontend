import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllAdvertisementsComponent } from './view-all-advertisements.component';

describe('ViewAllAdvertisementsComponent', () => {
  let component: ViewAllAdvertisementsComponent;
  let fixture: ComponentFixture<ViewAllAdvertisementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllAdvertisementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllAdvertisementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
