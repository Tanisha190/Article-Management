import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
 
 articlename:string;
 content:string;
 articleauthor:string;
 articleForm:FormGroup;
  constructor(private http: HttpClient,private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
    
    
    this.articleForm = this.formBuilder.group({
      articlename: [''],
      content: [''],
      articleauthor:['']
  });
  
    }
  
  submit(){
    
    this.http.post('http://localhost:3000/article',this.articleForm.value)
.subscribe(res => {
  console.log(res);
  
}, (err) => {
  console.log(err);
});
this.router.navigate(['viewarticle']);
  }


}
