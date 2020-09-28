import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelHistoryComponent } from './channel-history.component';

describe('ChannelHistoryComponent', () => {
  let component: ChannelHistoryComponent;
  let fixture: ComponentFixture<ChannelHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
