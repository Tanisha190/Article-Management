import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  firstName:string;
  lastName:string;
  email:string;
  password:string;
  
  registerForm: FormGroup;
  
  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient) { }

  ngOnInit() {this.registerForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
});
  }
  


  onSubmit() {
    this.submitted = true;
 
    // stop the process here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    console.log( this.registerForm.get('firstName').value);
console.log( this.registerForm.get('lastName').value);

console.log( this.registerForm.get('email').value);
console.log( this.registerForm.get('password').value);

 this.http.post('http://localhost:3000/',this.registerForm.value)
.subscribe(res => {
  console.log(res);
  
}, (err) => {
  console.log(err);
});


    this.router.navigate(['login']);
   
 }
}

