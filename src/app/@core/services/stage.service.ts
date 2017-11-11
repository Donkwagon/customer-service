import { Injectable } from '@angular/core';
import { Stage } from '../classes/Stage';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class StageService {

  private url = '/apis/stage';

  constructor (private http: Http) {}

  createStage(Stage: any): Promise<Stage | void> {
    return this.http.post(this.url + '/', Stage)
                .toPromise()
                .then(response => response.json() as Stage)
                .catch(this.handleError);
  }

  getStages(): Promise<Stage[] | void> {
    return this.http.get(this.url + '/')
                .toPromise()
                .then(response => response.json() as Stage[])
                .catch(this.handleError);
  }

  getStagesByParent(parentId): Promise<Stage[] | void> {
    return this.http.get(this.url + '/parent/' + parentId)
                .toPromise()
                .then(response => response.json() as Stage[])
                .catch(this.handleError);
  }

  getStage(id: String): Promise<Stage | void> {
    return this.http.get(this.url + '/' + id)
                .toPromise()
                .then(response => response.json() as Stage)
                .catch(this.handleError);
  }

  private handleError (error: any) {
    const errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }
}
