import { Component } from '@angular/core';
import CommonService from './gz1801/utils/common'
import {DictionaryService} from './gz1802/services/dictionary.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //typescript
  title: string = 'app';
  student: object = {
    name: 'oldxie',
    age: 42
  }
  id: string = "0001";
  className:string = "test";
  size:number = 12;
  color: string = 'red';
  // currentItem: Object = null;
  // // lanType: string = "en";

  constructor(private dic: DictionaryService){}
  //泛型
  dataset: Array<any> = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ]

  Byid(item){
    return item.id;
  }

  getKeys(item){
    return Object.keys(item || {});
  }

  // selectItem(item){
  //   // console.log(item)
  //   this.currentItem = item;
  // }

  // parentEvent(val: string){
  //   console.log(val);
  // }

  // cpEvent(arg1){
  //   console.log(arg1)
  // }
}