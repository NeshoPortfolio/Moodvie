import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreItemComponent } from './genre-item.component';

describe('GenreItemComponent', () => {
  let component: GenreItemComponent;
  let fixture: ComponentFixture<GenreItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
