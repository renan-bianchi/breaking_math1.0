import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  private questionsUrl = 'assets/questions_source/questions_teste.json';

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<any> {
    return this.http.get(this.questionsUrl);
  }
}


// tem algum problema no serviço, mas não sei qual é. Pesquisar melhor como ler o JSON localmente.