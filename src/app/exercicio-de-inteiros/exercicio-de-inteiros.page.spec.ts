import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExercicioDeInteirosPage } from './exercicio-de-inteiros.page';

describe('ExercicioDeInteirosPage', () => {
  let component: ExercicioDeInteirosPage;
  let fixture: ComponentFixture<ExercicioDeInteirosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExercicioDeInteirosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
