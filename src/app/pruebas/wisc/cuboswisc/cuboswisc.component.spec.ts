import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuboswiscComponent } from './cuboswisc.component';

describe('CuboswiscComponent', () => {
  let component: CuboswiscComponent;
  let fixture: ComponentFixture<CuboswiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuboswiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuboswiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
