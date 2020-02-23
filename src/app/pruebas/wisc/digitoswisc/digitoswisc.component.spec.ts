import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitoswiscComponent } from './digitoswisc.component';

describe('DigitoswiscComponent', () => {
  let component: DigitoswiscComponent;
  let fixture: ComponentFixture<DigitoswiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitoswiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitoswiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
