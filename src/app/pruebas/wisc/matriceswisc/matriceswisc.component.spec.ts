import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriceswiscComponent } from './matriceswisc.component';

describe('MatriceswiscComponent', () => {
  let component: MatriceswiscComponent;
  let fixture: ComponentFixture<MatriceswiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatriceswiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriceswiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
