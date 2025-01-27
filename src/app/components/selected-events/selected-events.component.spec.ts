import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedEventsComponent } from './selected-events.component';

describe('SelectedEventsComponent', () => {
  let component: SelectedEventsComponent;
  let fixture: ComponentFixture<SelectedEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedEventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectedEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
