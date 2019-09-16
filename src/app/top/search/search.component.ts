import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DictionaryConnectService } from 'src/app/services/dictionary-connect.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  formSearch : FormControl = new FormControl();
  requestedWord : string;
  fetched: boolean = false;
  
  constructor(private dc : DictionaryConnectService ) { 
  }

  ngOnInit() {
  }

  sendRequest() : void {
    let trimmed : string;
    this.requestedWord = this.formSearch.value;
    if(this.requestedWord != null){
      trimmed = this.requestedWord.trim();
      if(trimmed.length > 1 && !trimmed.includes(' ')){
      this.dc.get(trimmed);
      this.fetched = true;
      }else{
        alert('Please enter a valid word. Words should contain more than one letter and no spaces.')
      }
    }else{
      alert('Please enter a word.')
    }
  }
  
}