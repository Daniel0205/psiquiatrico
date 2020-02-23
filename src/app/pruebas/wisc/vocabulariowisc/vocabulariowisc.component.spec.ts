import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabulariowiscComponent } from './vocabulariowisc.component';

describe('VocabulariowiscComponent', () => {
  let component: VocabulariowiscComponent;
  let fixture: ComponentFixture<VocabulariowiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabulariowiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabulariowiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
