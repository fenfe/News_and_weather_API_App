import { Component} from '@angular/core';
import { Provider } from '../../providers/provider/provider';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
   // temp : any;
  weather : any;
  icon:any;
  localtime:any;
  temp_c:any;
  name: any;
  region: any;
  country: any;
 // localtime:DateTimeData;
  location: any;

text: string;
  
  
  article1: any;
  article2: any;
  town: string = 'soweto';
  //news contents variables
  title: any;
  news : any;
article : any;
publishedAt: any;
content:any;
description2:any;
  constructor(public navCtrl: NavController, private provider: Provider) {

  }

  fifi1(){
    this.navCtrl.push(ListPage);
  }

  searchLocation() {
    this.provider.weather(this.town).subscribe( weather =>{
      this.icon = weather;
      this.country = weather.location.country;
      this.region = weather.location.region;
      this.localtime = weather.location.localtime;
      this.text = weather.current.condition.text;
      this.name = weather.location.name;
      this.temp_c = weather.current.temp_c;
  });
}

  ionViewDidLoad() 
    //function to get country
  {    
    this.provider.weather(this.town).subscribe( weather =>{
    
      
      this.icon = weather;
      this.country = weather.location.country;
      this.region = weather.location.region;
      this.localtime = weather.location.localtime;
      this.text = weather.current.condition.text;
      this.name = weather.location.name;
      this.temp_c = weather.current.temp_c;
        
       
   console.log(weather);
   
});


  //function to get the news
  this.provider.news().subscribe(news => {
    this.news = news;
    //image
    this.article1 = news.articles[0].urlToImage;
    //title
    this.title = news.articles.title;
    //content
    this.content = news.articles.content;

//image 2 and its contents
    this.article2= news.articles[1].urlToImage;


//image 3 and its contents
    this.article = news.articles[2].urlToImage;
    
    console.log(news);
    
  });



  }

}
