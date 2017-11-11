import { Injectable } from '@angular/core';
import { Flow } from '../classes/flow';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class FlowService {

  private url = '/apis/flow';

  constructor (private http: Http) {}

  createFlow(Flow: any): Promise<Flow | void> {
    return this.http.post(this.url + '/', Flow)
                .toPromise()
                .then(response => response.json() as Flow)
                .catch(this.handleError);
  }

  getFlows(): Promise<Flow[] | void> {
    return this.http.get(this.url + '/')
                .toPromise()
                .then(response => response.json() as Flow[])
                .catch(this.handleError);
  }

  getFlowsByUser(id): Promise<Flow[] | void> {
    return this.http.get(this.url + '/u/' + id)
                .toPromise()
                .then(response => response.json() as Flow[])
                .catch(this.handleError);
  }


  getFlow(id: String): Promise<Flow | void> {
    return this.http.get(this.url + '/' + id)
                .toPromise()
                .then(response => response.json() as Flow)
                .catch(this.handleError);
  }


  private handleError (error: any) {
    const errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }
}