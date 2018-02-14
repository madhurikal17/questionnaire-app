import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
;
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class AppService{
    //Dummy url created using mocky.io with the required json response
	private questionnaireUrl = 'http://www.mocky.io/v2/5a83d62b2f00007a0074bf1d';

	constructor(private http : Http){}
	getQuestionnaire(): Observable<any>{
		return this.http.get(this.questionnaireUrl)
		.map(this.extractData);	
	}
	private extractData(res: Response){
		//let body = res.json();
        //return body.data || {};
        return res || {};
			
	}
}