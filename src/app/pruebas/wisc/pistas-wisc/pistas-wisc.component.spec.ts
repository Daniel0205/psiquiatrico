import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PistasWiscComponent } from './pistas-wisc.component';

describe('PistasWiscComponent', () => {
  let component: PistasWiscComponent;
  let fixture: ComponentFixture<PistasWiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PistasWiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PistasWiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
