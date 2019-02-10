import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgeComponent } from './surge.component';

describe('SurgeComponent', () => {
  let component: SurgeComponent;
  let fixture: ComponentFixture<SurgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
