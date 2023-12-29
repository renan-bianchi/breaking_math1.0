import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../services/exercise.service';
import { Option } from '../types';

@Component({
  selector: 'app-exercicio-de-inteiros',
  templateUrl: './exercicio-de-inteiros.page.html',
  styleUrls: ['./exercicio-de-inteiros.page.scss'],
})
export class ExercicioDeInteirosPage implements OnInit {
  questions: any[] = [];
  selectedOption: { [key: number]: number } = {};
  showAnswer = false;

  constructor(private exerciseService: ExerciseService) {}

  ngOnInit() {
    this.loadQuestions();
  }

  loadQuestions() {
    this.exerciseService.getQuestions().subscribe(
      (data: any[]) => {
        this.questions = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  checkAnswer(question: any) {
    this.showAnswer = true;
    // Implemente a lógica para verificar se a opção selecionada é correta
    // aqui será feita na própria interface no método isAnswerCorrect
  }

  isAnswerCorrect(question: any): boolean {
    const selectedOption = this.selectedOption[question.id];
    if (selectedOption !== undefined) {
      const selectedQuestion = this.questions.find(
        (q) => q.id === question.id
      );
      if (selectedQuestion) {
        const correctAnswer = selectedQuestion.options.find(
          (opt: Option) => opt.correct
        );
        return correctAnswer.id === selectedOption;
      }
    }
    return false;
  }
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*questions = []; // Aqui você teria as questões do seu JSON

  constructor(private ExerciseService: ExerciseService) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.ExerciseService.getQuestions().subscribe(
      (data: any) => {
        this.questions = data;
        console.log(this.questions);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

}*/
