import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCComponent } from './about-c.component';

describe('AboutCComponent', () => {
  let component: AboutCComponent;
  let fixture: ComponentFixture<AboutCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
