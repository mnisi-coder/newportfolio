import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyMeCComponent } from './why-me-c.component';

describe('WhyMeCComponent', () => {
  let component: WhyMeCComponent;
  let fixture: ComponentFixture<WhyMeCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyMeCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhyMeCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
