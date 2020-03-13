import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprensionwiscComponent } from './comprensionwisc.component';

describe('ComprensionwiscComponent', () => {
  let component: ComprensionwiscComponent;
  let fixture: ComponentFixture<ComprensionwiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprensionwiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprensionwiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
