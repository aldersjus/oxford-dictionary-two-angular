import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordShareService {
  
  private meaning = new BehaviorSubject(' the word meaning will be displayed here ');
  currentMeaning = this.meaning.asObservable();
  
  private use = new BehaviorSubject(' an example sentence will be displayed here ');
  currentUse = this.use.asObservable();
  constructor(){}

  updateMeaning(m : string) : void{
    this.meaning.next(m);
  }

  updateUse(u : string) : void{
    this.use.next(u);   
  }

}
