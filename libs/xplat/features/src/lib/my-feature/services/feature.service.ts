import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFeature, IFeatureController } from '@theinterview/core-types';
import { Observable } from 'rxjs';
@Injectable()
export class FeatureService implements IFeatureController {
  url = '/api';
  constructor(private http: HttpClient) {}

  get(): Observable<IFeature> {
    return this.http.get<IFeature>(this.url);
  }
}
