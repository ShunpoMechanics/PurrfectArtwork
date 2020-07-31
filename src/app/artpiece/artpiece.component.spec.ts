import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtpieceComponent } from './artpiece.component';

describe('ArtpieceComponent', () => {
  let component: ArtpieceComponent;
  let fixture: ComponentFixture<ArtpieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtpieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtpieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
