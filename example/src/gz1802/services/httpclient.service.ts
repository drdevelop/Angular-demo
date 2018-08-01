import {Http, RequestMethod, RequestOptions, Headers} from '@angular/http';
import {Injectable} from '@angular/core'

@Injectable()
export class HttpClientService{
    constructor(private http: Http){}
    
    baseUrl = 'http://localhost:4200/';

    filterUrl(_url){
        if(_url.startsWith('http')){
            return _url;
        } 
        return this.baseUrl + _url;
    }

    get(_url, _params = {}){
        return new Promise((resolve, reject) => {
            this.http.request(this.filterUrl(_url), new RequestOptions({
                method: RequestMethod.Get,
                search: _params
            })).toPromise().then((res) => {
                resolve(res.json())
                //{status: true ||false, data: [], message: null, error: null}
                //{status: false, error: '400001'} => login
            }).catch((error) => {
                reject(error)
            })
        })
    }

    post(_url, _params = {}){
        return new Promise((resolve, reject) => {
            this.http.request(this.filterUrl(_url), new RequestOptions({
                method: RequestMethod.Post,
                body: _params,
                headers: new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                })
            })).toPromise().then((res) => {
                resolve(res.json())
            }).catch((error) => {
                reject(error)
            })
        })
    }
}