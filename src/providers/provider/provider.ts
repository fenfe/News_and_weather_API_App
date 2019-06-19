import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import { checkNoChangesView } from '@angular/core/src/view/view';

/*
  Generated class for the Provider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Provider {
  name: string = 'Soweto';
  constructor(public http: Http) {
    console.log('Hello Provider Provider');
  }
  weather(town)
  {
    const weather = this.http.get(`http://api.apixu.com/v1/current.json?key=7c077aac751142b6aed85336191806&q=`+town).map(res => res.json());

    return weather;
  }

  news()
  {
    const news = this.http.get(`https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=d0a80ca1a14642ab9e8d8dad9751206b`).map(res => res.json());

    return news;
  }
}

