import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {


  public setValue(value: string) {
    console.log(value)
  }

  constructor() { }
}
