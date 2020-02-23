import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemejanzaswiscComponent } from './semejanzaswisc.component';

describe('SemejanzaswiscComponent', () => {
  let component: SemejanzaswiscComponent;
  let fixture: ComponentFixture<SemejanzaswiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemejanzaswiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemejanzaswiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
