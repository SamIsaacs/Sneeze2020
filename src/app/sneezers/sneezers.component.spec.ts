import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SneezersComponent } from './sneezers.component';

describe('SneezersComponent', () => {
  let component: SneezersComponent;
  let fixture: ComponentFixture<SneezersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneezersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SneezersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
