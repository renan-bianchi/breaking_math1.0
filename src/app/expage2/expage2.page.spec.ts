import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Expage2Page } from './expage2.page';

describe('Expage2Page', () => {
  let component: Expage2Page;
  let fixture: ComponentFixture<Expage2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Expage2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
