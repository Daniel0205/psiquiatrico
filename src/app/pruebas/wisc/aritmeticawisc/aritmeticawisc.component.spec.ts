import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AritmeticawiscComponent } from './aritmeticawisc.component';

describe('AritmeticawiscComponent', () => {
  let component: AritmeticawiscComponent;
  let fixture: ComponentFixture<AritmeticawiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AritmeticawiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AritmeticawiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
