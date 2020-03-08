import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetrasNumerosWiscComponent } from './letras-numeros-wisc.component';

describe('LetrasNumerosWiscComponent', () => {
  let component: LetrasNumerosWiscComponent;
  let fixture: ComponentFixture<LetrasNumerosWiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetrasNumerosWiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetrasNumerosWiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
