import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributesDirectivesNgStyleComponent } from './attributes-directives-ng-style.component';

describe('AttributesDirectivesNgStyleComponent', () => {
  let component: AttributesDirectivesNgStyleComponent;
  let fixture: ComponentFixture<AttributesDirectivesNgStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributesDirectivesNgStyleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributesDirectivesNgStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
