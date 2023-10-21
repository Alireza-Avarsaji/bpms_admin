import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SignInService } from './service/sign-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  form!:FormGroup

  constructor(
    private fb: FormBuilder,
    private signInService: SignInService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.initForm();
    
  }

  initForm() {
    this.form = this.fb.group({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  signIn() {
    const formValue = this.form.value;
    this.signInService.signIn(formValue.username, formValue.password).subscribe(res => {
      if(res.access_token){
        this.router.navigate(['/layout']);
      }
    })

  }

}
