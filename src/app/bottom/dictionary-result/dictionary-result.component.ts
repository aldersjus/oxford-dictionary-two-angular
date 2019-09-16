import { Component, OnInit, Input } from '@angular/core';
import { WordShareService } from 'src/app/services/word-share.service';

@Component({
  selector: 'app-dictionary-result',
  templateUrl: './dictionary-result.component.html',
  styleUrls: ['./dictionary-result.component.css']
})
export class DictionaryResultComponent implements OnInit {

  meaning : String;
  use : String;
  @Input('requestedWord') word : String;

  constructor(private wordShare : WordShareService) { }

  

  ngOnInit() {
    this.wordShare.currentMeaning.subscribe(m => this.meaning = m);
    this.wordShare.currentUse.subscribe(m => this.use = m);
  }

}