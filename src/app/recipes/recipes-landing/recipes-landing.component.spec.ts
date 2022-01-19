import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesLandingComponent } from './recipes-landing.component';

describe('RecipesLandingComponent', () => {
  let component: RecipesLandingComponent;
  let fixture: ComponentFixture<RecipesLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
