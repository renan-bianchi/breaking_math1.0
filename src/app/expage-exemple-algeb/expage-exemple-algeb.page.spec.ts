import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpageExempleAlgebPage } from './expage-exemple-algeb.page';

describe('ExpageExempleAlgebPage', () => {
  let component: ExpageExempleAlgebPage;
  let fixture: ComponentFixture<ExpageExempleAlgebPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExpageExempleAlgebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
