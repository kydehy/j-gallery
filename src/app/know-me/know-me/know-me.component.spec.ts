import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowMeComponent } from './know-me.component';

describe('KnowMeComponent', () => {
  let component: KnowMeComponent;
  let fixture: ComponentFixture<KnowMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KnowMeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
