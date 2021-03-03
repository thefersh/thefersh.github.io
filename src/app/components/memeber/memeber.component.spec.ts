import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeberComponent } from './memeber.component';

describe('MemeberComponent', () => {
  let component: MemeberComponent;
  let fixture: ComponentFixture<MemeberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemeberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemeberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
