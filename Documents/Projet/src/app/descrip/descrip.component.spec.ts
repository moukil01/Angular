import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripComponent } from './descrip.component';

describe('DescripComponent', () => {
  let component: DescripComponent;
  let fixture: ComponentFixture<DescripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
