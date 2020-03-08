import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionwiscComponent } from './informacionwisc.component';

describe('InformacionwiscComponent', () => {
  let component: InformacionwiscComponent;
  let fixture: ComponentFixture<InformacionwiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionwiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionwiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
