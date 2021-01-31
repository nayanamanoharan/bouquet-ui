import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  form: FormGroup;
  public loginInvalid: boolean;
  private returnUrl: string;
  constructor(
    private router: Router,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    var defUsername:string = "nayanapm@gmail.com"
    var defPassword:string = "pwd@123"
    this.loginInvalid = false;
    if (this.form.valid) {
      const username = this.form.get('username').value;
      const password = this.form.get('password').value;
      if (username == defUsername && password == defPassword) {
        this.router.navigateByUrl("/home")
      }
    }
  }
}
