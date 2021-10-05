import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewnewsdetailsComponent } from './newnewsdetails.component';

describe('NewnewsdetailsComponent', () => {
  let component: NewnewsdetailsComponent;
  let fixture: ComponentFixture<NewnewsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewnewsdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewnewsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
