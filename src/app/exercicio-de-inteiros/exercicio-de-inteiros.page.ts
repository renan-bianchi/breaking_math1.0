import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../services/exercise.service';
import { Option } from '../types';

@Component({
  selector: 'app-exercicio-de-inteiros',
  templateUrl: './exercicio-de-inteiros.page.html',
  styleUrls: ['./exercicio-de-inteiros.page.scss'],
})
export class ExercicioDeInteirosPage implements OnInit {
  currentQuestion: any;
  selectedOption: any | null = null;
  showResult = false;
  correctAnswers = 0;
  questions: any[] = [];

  constructor(private exerciseService: ExerciseService) {}

  ngOnInit() {
    this.exerciseService.getQuestions().subscribe((data) => {
      // console.log('Dados recebidos:', data);
      this.questions = data.questions;
      this.currentQuestion = this.questions[0];
    });
  }

  checkAnswer() {
    if (this.selectedOption !== undefined) {
      const selectedQuestion = this.questions.find(
        (q) => q.id === this.currentQuestion.id
      );
      const selectedOption = selectedQuestion?.options.find(
        (opt: Option) => opt.id === this.selectedOption
      );
  
      if (selectedOption?.correct) {
        this.correctAnswers++;
      }
  
      const currentIndex = this.questions.findIndex(q => q.id === this.currentQuestion.id);
      const nextIndex = currentIndex + 1;
      if (nextIndex < this.questions.length) {
        this.currentQuestion = this.questions[nextIndex];
        // this.selectedOption = null;
        setTimeout(() => {
          const radioButtons = document.getElementsByName('optionRadios');
          for (let i = 0; i < radioButtons.length; i++) {
            (radioButtons[i] as HTMLInputElement).checked = false;
          }
        }, 100);
      }
      else {
          this.showResult = true;
      }
    }
  }
}