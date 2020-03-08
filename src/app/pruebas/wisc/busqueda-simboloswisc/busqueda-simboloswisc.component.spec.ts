import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaSimboloswiscComponent } from './busqueda-simboloswisc.component';

describe('BusquedaSimboloswiscComponent', () => {
  let component: BusquedaSimboloswiscComponent;
  let fixture: ComponentFixture<BusquedaSimboloswiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaSimboloswiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaSimboloswiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
