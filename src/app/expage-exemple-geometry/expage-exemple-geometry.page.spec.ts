import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpageExempleGeometryPage } from './expage-exemple-geometry.page';

describe('ExpageExempleGeometryPage', () => {
  let component: ExpageExempleGeometryPage;
  let fixture: ComponentFixture<ExpageExempleGeometryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExpageExempleGeometryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
