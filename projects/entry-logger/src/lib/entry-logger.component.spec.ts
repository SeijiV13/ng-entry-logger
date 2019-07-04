import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryLoggerComponent } from './entry-logger.component';

describe('EntryLoggerComponent', () => {
  let component: EntryLoggerComponent;
  let fixture: ComponentFixture<EntryLoggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryLoggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
