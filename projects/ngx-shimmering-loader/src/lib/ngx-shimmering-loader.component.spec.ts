import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxShimmeringLoaderComponent } from './ngx-shimmering-loader.component';

describe('NgxShimmeringLoaderComponent', () => {
  let component: NgxShimmeringLoaderComponent;
  let fixture: ComponentFixture<NgxShimmeringLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxShimmeringLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxShimmeringLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
