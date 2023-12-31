import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Expage5Page } from './expage5.page';

describe('Expage5Page', () => {
  let component: Expage5Page;
  let fixture: ComponentFixture<Expage5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Expage5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
