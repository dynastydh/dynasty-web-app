import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuildWarsComponent } from './guild-wars.component';

describe('GuildWarsComponent', () => {
  let component: GuildWarsComponent;
  let fixture: ComponentFixture<GuildWarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuildWarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuildWarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
