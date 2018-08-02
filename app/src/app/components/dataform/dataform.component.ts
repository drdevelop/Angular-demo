import { Component, OnInit, Input } from '@angular/core'
import { HttpClientService } from '../../share/httpclient.service'
import { DictionaryService } from '../../share/dictionary.service'

@Component({
  selector: 'app-dataform',
  templateUrl: './dataform.component.html',
  styleUrls: ['./dataform.component.css']
})
export class DataformComponent implements OnInit {
	@Input() config:string
	
	configObj: object = {}
	columns: Array<any> = []
	
  constructor(private http:HttpClientService,private dic:DictionaryService) { }

  ngOnInit() {
  	
  	this.http.get('assets/config/'+this.config).then((res)=>{
  		this.configObj = res;
  		//this.columns = this.configObj['keys'].split(',');
  		this.http[this.configObj['method']](this.configObj['api']).then((res)=>{
  			for(var key in res[0]){
  				this.columns.push(key);
  			}
  		})
  	})
  	
  }
  //id,discountRate,properName,kind,cityId,poster,areaImage
}
