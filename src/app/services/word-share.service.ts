import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordShareService {

  private word = new BehaviorSubject(' example ');
  currentWord = this.word.asObservable();
  
  private meaning = new BehaviorSubject(' to show how to do something ');
  currentMeaning = this.meaning.asObservable();
  
  private use = new BehaviorSubject(' A teacher should set a good example. ');
  currentUse = this.use.asObservable();
  constructor(){}

  updateWord(w : string) : void{
    this.word.next(w);
  }

  updateMeaning(m : string) : void{
    this.meaning.next(m);
  }

  updateUse(u : string) : void{
    this.use.next(u);   
  }

}
