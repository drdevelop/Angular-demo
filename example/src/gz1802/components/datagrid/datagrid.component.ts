import { Component, OnInit, Input } from '@angular/core';
import {HttpClientService} from '../../services/httpclient.service'

import {DictionaryService} from '../../services/dictionary.service'

@Component({
  selector: 'datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class DatagridComponent implements OnInit {

  constructor(private http: HttpClientService, private dic: DictionaryService) { }
  @Input() config: string = "";

  dataset: Array<any> = [];
  columns: Array<string> = [];
  selectedTrs: Array<any> = [];
  configObj: object = {};

  ngOnInit() {
    //config
    this.http.get(`assets/config/gz1802/${this.config}.txt`).then((res) => {
      this.configObj = res;
      this.columns = this.configObj['cols'].split(',');

      this.http.get(this.configObj['url']).then((res) => {
        // console.log(res.json());
        let data = res;
        if(data instanceof Array){
          this.dataset = data;
        } else {
          this.dataset = data['data'];
        }
      })
    })
  }

  getKeys(item = {}){
    return Object.keys(item);
  }

  selectTrs(e, item){
    if(this.configObj['multiple']){
      if(this.selectedTrs.includes(item[this.configObj['key']])){
       this.selectedTrs.splice(this.selectedTrs.indexOf(item[this.configObj['key']]), 1);
      } else {
        this.selectedTrs.push(item[this.configObj['key']]);
      }
    } else {
      this.selectedTrs = [item[this.configObj['key']]];
    }
    // console.log(e.target.parentNode)
  }

  selectAll(){
    if(this.selectedTrs.length == this.dataset.length){
      this.selectedTrs = [];
      return false;
    }
    for(let item of this.dataset){
      if(!this.selectedTrs.includes(item[this.configObj['key']])){
        this.selectedTrs.push(item[this.configObj['key']]);
      }
    }
  }
}