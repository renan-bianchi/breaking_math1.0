import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Expage1Page } from './expage1.page';

describe('Expage1Page', () => {
  let component: Expage1Page;
  let fixture: ComponentFixture<Expage1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Expage1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
