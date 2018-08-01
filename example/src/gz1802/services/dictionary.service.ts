import {HttpClientService} from './httpclient.service'
import {Injectable} from '@angular/core'

@Injectable()
export class DictionaryService{
    lanType: string = "en";
    dic: object = {};

    constructor(private http: HttpClientService){
        //dictionary
        this.http.get('assets/config/gz1802/dictionary.txt').then((res) =>{
            this.dic = res;
        })
    }

    getDictionary(key, configDic = {}){
        return configDic[this.lanType] && configDic[this.lanType][key] ? configDic[this.lanType][key] : ((this.dic[this.lanType] && this.dic[this.lanType][key]) || key);
    }
}