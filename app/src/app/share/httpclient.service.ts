import { Http, RequestMethod, RequestOptions, Headers } from '@angular/http'
import { Injectable } from '@angular/core'

@Injectable()

export class HttpClientService{
	constructor(private http:Http){}
	baseUrl:string = "http://localhost:4200/";
	filterUrl(_url){
		return _url.startsWith('http')
					?_url
					:this.baseUrl+_url
	}
	
	get(_url,params={}){
		return  new Promise((resolve,reject)=>{
		     this.http.get(this.filterUrl(_url),new RequestOptions({
				method: RequestMethod.Get,
				search: params
			})).toPromise().then((res)=>{
				resolve(res.json())
			}).catch(()=>{
				reject('请求不存在');
			})
		})
		
	}
	
	post(_url,params={}){
		return new Promise((resolve,reject)=>{
			this.http.get(this.filterUrl(_url),new RequestOptions({
				method: RequestMethod.Post,
				body: params,
				headers: new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                })
			})).toPromise().then((res)=>{
				resolve(res.json())
			}).catch(()=>{
				reject('请求不存在');
			})
		})
		
	}
	
}

