import { Component,OnInit } from '@angular/core';
import { DictionaryService } from '../../share/dictionary.service'

@Component({
  selector: 'xheader',
  templateUrl: './xheader.html',
  styleUrls: ['./xheader.css']
})

export class Xheader implements OnInit{
	title:string = '头部';
  bg:string = 'red';
  color:string = '#fff';
  
  langTypes:Array<any> = ['en','cn'];
  constructor(private dic:DictionaryService){
  	
  }
  ngOnInit(){
  	
  }
  changeLang(lang){
  	this.dic.langType = lang;
  	console.log(this.dic);
  }
}
