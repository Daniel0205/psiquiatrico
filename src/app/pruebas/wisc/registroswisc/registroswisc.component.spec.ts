import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroswiscComponent } from './registroswisc.component';

describe('RegistroswiscComponent', () => {
  let component: RegistroswiscComponent;
  let fixture: ComponentFixture<RegistroswiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroswiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroswiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
