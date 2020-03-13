import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaveNumeroswiscComponent } from './clave-numeroswisc.component';

describe('ClaveNumeroswiscComponent', () => {
  let component: ClaveNumeroswiscComponent;
  let fixture: ComponentFixture<ClaveNumeroswiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaveNumeroswiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaveNumeroswiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
