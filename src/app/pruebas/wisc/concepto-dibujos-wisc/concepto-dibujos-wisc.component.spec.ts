import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptoDibujosWiscComponent } from './concepto-dibujos-wisc.component';

describe('ConceptoDibujosWiscComponent', () => {
  let component: ConceptoDibujosWiscComponent;
  let fixture: ComponentFixture<ConceptoDibujosWiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptoDibujosWiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptoDibujosWiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
