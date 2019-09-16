import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';

import { WordShareService } from 'src/app/services/word-share.service';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DictionaryConnectService {

  private wordUrl = 'https://od-api.oxforddictionaries.com/api/v2/entries/en-us/';  
  
  constructor(private http : HttpClient,private wordShare : WordShareService) { }

  get(search : String){
    this.getWord(search).subscribe(wd => {
      this.wordShare.updateMeaning(wd['results'][0]['lexicalEntries'][0].entries[0].senses[0].definitions);
      this.wordShare.updateUse(wd['results'][0]['lexicalEntries'][0].entries[0].senses[0].examples[0].text);
  });

  
  }
  getWord(search : String){
    const url = `${this.wordUrl}${search}`;
    return this.http.get(url,{headers : {"app_id" : " your app id","app_key":" your app key "}}).pipe(
      tap(_ => this.log(`fetched word id=${search}`)),
      catchError(this.handleError<any>(`getWord search=${search}`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.logError(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`Dictionary Connect Service: ${message}`);
  }

  private logError(message: string) {
   alert(`Application Error: ${message}`);
  }
}