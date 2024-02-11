import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogDialogComponent } from './dog-dialog.component';

describe('DogDialogComponent', () => {
  let component: DogDialogComponent;
  let fixture: ComponentFixture<DogDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DogDialogComponent]
    });
    fixture = TestBed.createComponent(DogDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
