import { Http } from '@angular/http'
import {Injectable} from '@angular/core'
import { HttpClientService } from './httpclient.service' 

@Injectable()

export class DictionaryService{
	constructor(private http:HttpClientService){
		this.http.get('assets/config/dictionary.json').then((res)=>{
			this.dic = res;
		})
	}
	langType:string = 'en'
	dic: object = {}
	getDictionary(key,configDic = {}){
		return  (configDic[this.langType]&&configDic[this.langType][key])
					?configDic[this.langType][key]
					:(this.dic[this.langType]&&this.dic[this.langType][key])||key
	}
}
