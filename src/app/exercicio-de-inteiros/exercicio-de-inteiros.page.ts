import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-de-inteiros',
  templateUrl: './exercicio-de-inteiros.page.html',
  styleUrls: ['./exercicio-de-inteiros.page.scss'],
})
export class ExercicioDeInteirosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  answers = [
    {
      id: 1,
      answer: 'Resposta 1',
      type: 'wrong',
    },
    {
      id: 2,
      answer: 'Resposta 2',
      type: 'wrong',
    },
    {
      id: 3,
      answer: 'Resposta 3',
      type: 'correct',
    },
    {
      id: 4,
      answer: 'Resposta 4',
      type: 'wrong',
    },
    {
      id: 5,
      answer: 'Resposta 5',
      type: 'wrong',
    }

  ];

  handleChange(ev: any) {
    console.log('Current value:', JSON.stringify(ev.target.value));
  }

  trackItems(index: number, item: any) {
    return item.id;
  }
}
