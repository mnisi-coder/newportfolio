import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomobileComponent } from './nomobile.component';

describe('NomobileComponent', () => {
  let component: NomobileComponent;
  let fixture: ComponentFixture<NomobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NomobileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NomobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
