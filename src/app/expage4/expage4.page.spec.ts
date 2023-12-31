import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Expage4Page } from './expage4.page';

describe('Expage4Page', () => {
  let component: Expage4Page;
  let fixture: ComponentFixture<Expage4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Expage4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
