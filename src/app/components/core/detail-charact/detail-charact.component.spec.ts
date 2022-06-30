import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCharactComponent } from './detail-charact.component';

describe('DetailCharactComponent', () => {
  let component: DetailCharactComponent;
  let fixture: ComponentFixture<DetailCharactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCharactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCharactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
