import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Expage3Page } from './expage3.page';

describe('Expage3Page', () => {
  let component: Expage3Page;
  let fixture: ComponentFixture<Expage3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Expage3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
