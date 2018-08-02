import { Component,Input,OnInit } from '@angular/core'
import { DictionaryService } from '../../share/dictionary.service'
import { HttpClientService } from '../../share/httpclient.service'

@Component({
	selector: 'datagrid',
	templateUrl: './datagrid.html',
	styleUrls: ['./datagrid.css']
})

export class dataGrid implements OnInit{
	@Input() config:string = ''
	
	configDic:object = {}
	goodlist:Array<any> = []
	selectTrs:Array<any> = []
	keys: Array<any> = []
	multiple:boolean = false
	langType:string = 'en'
	hideColumns:Array<any> = []
	
	constructor(private http:HttpClientService,private dic:DictionaryService){
		
	}
	ngOnInit(){
		this.http.get('assets/config/'+this.config).then((res)=>{
			this.configDic = res;
			this.keys = this.configDic['keys'].split(',');
			this.multiple = this.configDic['multiple'];
			this.hideColumns = this.configDic['hideColumns'].split(',');
			this.http[this.configDic['method']](this.configDic['api']).then((res)=>{
				this.goodlist = res;
			})
		})
		
	}
	
	filterContext(_key,_context){
		let colAttributes = this.configDic['colAttributes'][_key];
		if(colAttributes){
			switch(colAttributes.type){
				case 'replaceReg':
					let reg = new RegExp(colAttributes['reg']);
					return _context.replace(reg,colAttributes.val);
				case 'datetime':
					let _date = new Date(_context);
					let y = _date.getFullYear();
					let M = _date.getMonth();
					let d = _date.getDate();
					//yyyy-MM-dd
					return colAttributes['format'].replace(/yyyy/ig,y).replace(/yyy/ig,y).replace(/yy/ig,String(y).substr(2)).replace(/y/ig,String(y).substr(3));
				default:
					return _context
			}
		}else{
			return _context
		}
		 
	}
	
	changeSelect(id){
		if(this.multiple){
			if(this.selectTrs.includes(id)){
				this.selectTrs.splice(this.selectTrs.indexOf(id),1);
			}else{
				this.selectTrs.push(id);
			}
		}else{
			this.selectTrs = [id];
		}
		
		
	}
	
	selectAll(num){
		if(num==0){
			this.goodlist.forEach((item,i)=>{
				if(this.selectTrs.includes(item.id)){
					
				}else{
					this.selectTrs.push(item.id);
				}
				
			})
		}else if(num==1){
			
			this.selectTrs=[]
		}
		
	}
	
	
}
