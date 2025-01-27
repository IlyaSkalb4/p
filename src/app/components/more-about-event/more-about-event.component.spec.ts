import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreAboutEventComponent } from './more-about-event.component';

describe('MoreAboutEventComponent', () => {
  let component: MoreAboutEventComponent;
  let fixture: ComponentFixture<MoreAboutEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreAboutEventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoreAboutEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
