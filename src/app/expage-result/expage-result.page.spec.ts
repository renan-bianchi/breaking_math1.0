import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpageResultPage } from './expage-result.page';

describe('ExpageResultPage', () => {
  let component: ExpageResultPage;
  let fixture: ComponentFixture<ExpageResultPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExpageResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
