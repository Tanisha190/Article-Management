import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewarticle',
  templateUrl: './viewarticle.component.html',
  styleUrls: ['./viewarticle.component.css']
})
export class ViewarticleComponent implements OnInit {

articles;

constructor(private http: HttpClient) { 
  
}

  ngOnInit() {
  
  }
  getarticles(){
    this.http.get('http://localhost:3000/article')
    .subscribe(res => {
      this.articles=res;
      console.log(this.articles);
      
    }, (err) => {
      console.log(err);
    });
}
}