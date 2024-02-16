import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalutComponent } from './salut.component';

describe('SalutComponent', () => {
  let component: SalutComponent;
  let fixture: ComponentFixture<SalutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
