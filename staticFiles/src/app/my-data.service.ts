import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MyDataService {

  constructor(private http: Http) { }

  fetchList(){
    return this.http.get('/api')
      .map(res => res.json());
  }
}
