import { Component } from '@angular/core';
import { Provider } from '../../providers/provider/provider';
import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  news: any;
   content: any;
   article: any;

   //article 1 variables
  article1: any;
 title1: any;
 content1: any;
 
 //article 2 variables
  article2: any;
  title2: any;
  content2: any;

  //article 3 varaibles
  article3: any;
  title3: any;
  content3: any;

  //article 4 var
  article4: any;
  title4: any;
  content4: any;

  //article 5 var
  article5: any;
  title5: any;
  content5: any;

  //article 6 var
  article6: any;
  title6: any;
  content6: any;

  //article 7 var
  article7: any;
  title7: any;
  content7: any;

  //article 8 var
  article8: any;
  title8: any;
  content8: any;

  //article 9 var
  article9: any;
  title9: any;
  content9: any;

  //article 10 var
  article10: any;
  title10: any;
  content10: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider:Provider) {
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for(let i = 1; i < 11; i++) {
     
    }
  }
    ionViewDidLoad() 
    //function to get country
  {    
    
   //function to get title
  this.provider.news().subscribe(news => {
    this.news = news;
    //image
    this.article1= news.articles[0].urlToImage;
    //title
    this.title1 = news.articles[0].title;
    //content
    this.content1 = news.articles[0].content;

//image 2 and its contents
    this.article2= news.articles[1].urlToImage;
//title
this.title2 = news.articles[1].title;
//content
this.content2 = news.articles[1].content;

//image 3 and its contents
    this.article3 = news.articles[2].urlToImage;
    //title
    this.title3 = news.articles[2].title;
    //content
    this.content3 = news.articles[2].content;

//image 4 and content
this.article4 = news.articles[3].urlToImage;
//title
this.title4 = news.articles[3].title;
//content
this.content4 = news.articles[3].content;

//image 5 and content
this.article5 = news.articles[4].urlToImage;
//title
this.title5 = news.articles[4].title;
//content
this.content5 = news.articles[4].content;

//image 6 and content
this.article6 = news.articles[5].urlToImage;
//title
this.title6 = news.articles[5].title;
//content
this.content6 = news.articles[5].content;

//image 7 and content
this.article7 = news.articles[6].urlToImage;
//title
this.title7 = news.articles[6].title;
//content
this.content7 = news.articles[6].content;

//image 8 and content
this.article8 = news.articles[7].urlToImage;
//title
this.title8 = news.articles[7].title;
//content
this.content8 = news.articles[7].content;

//image 9 and content
this.article9 = news.articles[8].urlToImage;
//title
this.title9 = news.articles[8].title;
//content
this.content9 = news.articles[8].content;

//image 10 and content
this.article10 = news.articles[9].urlToImage;
//title
this.title10 = news.articles[9].title;
//content
this.content10 = news.articles[9].content;
    console.log(news);
    
});
  }


  
}
