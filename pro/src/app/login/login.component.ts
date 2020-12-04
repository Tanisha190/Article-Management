import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  details:any;
  email:string;
  password:string;
  
 formGroup;
  input: any;
  value: any;
  constructor(private router: Router,private http: HttpClient,private formBuilder: FormBuilder) { }

  ngOnInit()     {
    this.formGroup = this.formBuilder.group({
     
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
    
  this.http.get('http://localhost:3000/')
.subscribe(res => {
  console.log(res);
  this.details=res;
  console.log(this.details);
}, (err) => {
  console.log(err);
});
  }
  login()
   {
    for (let index=0;index<this.details.length;index++)
    {
    console.log(this.details[index].email);
    
    
 if(this.details[index].email==this.input  && this.details[index].password==this.value){
     this.router.navigate(['article']);
     //console.log("jhsbjdhfvbj");
    }
//  else{
//    alert("Please enter a valid email or password");
//  }
  }

    //console.log(this.formGroup.get('email').value);
    this.input=this.formGroup.get('email').value;
    sessionStorage.setItem('name',this.input);
 // console.log(this.formGroup.get('password').value);
  this.value=this.formGroup.get('password').value;
  // console.log(this.input);
  //  console.log(this.value);
  



  }
  logout(){
    this.router.navigate(['']);
  }
 


}
