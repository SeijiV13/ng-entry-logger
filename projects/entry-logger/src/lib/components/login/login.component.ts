import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CryptojsService } from '../../services/cryptojs.service';
import { UserService } from '../../services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'entry-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  formState = 'login';
  errorMessage = '';
  successMessage = '';
  colorArray = ['#1f4787', '#f23513', '#6e281b', '#0a5d61', '#610a2e', '#1a7a5f'];
  @Output() loggedIn = new EventEmitter();
  constructor(private cryptoJs: CryptojsService,
    private userService: UserService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmpassword: [''],
    });
  }

  registerUser() {
    this.clearMessages();
    const username = this.form.controls['username'].value;
    const password = this.form.controls['password'].value;
    const confirmpassword = this.form.controls['confirmpassword'].value;
    const enUsername = this.cryptoJs.encryptUsingAES256(username);
    const enPassword = this.cryptoJs.encryptUsingAES256(password);
    this.userService.getUserOnce(this.cryptoJs.encryptUsingAES256(username)).subscribe((data) => {
      if (data.length !== 0) {
        this.errorMessage = 'User already exists';
      } else {

        if (password !== confirmpassword) {
          this.errorMessage = 'Your Password does not match';
        } else {
          this.userService.addUser({
            username: enUsername,
            password: enPassword,
            color: this.colorArray[Math.floor(Math.random() * this.colorArray.length)]
          });
          this.successMessage = 'User successfully added';

        }
      }
    });
  }

  switch() {
    this.clearMessages();
    if (this.formState === 'login') {
       this.formState = 'register';
    } else {
      this.formState = 'login';
    }
  }

  clearMessages() {
    this.errorMessage = '';
    this.successMessage = '';
  }

  login() {
    this.clearMessages();
    const username = this.form.controls['username'].value;
    const password = this.form.controls['password'].value;
    this.userService.getUser(this.cryptoJs.encryptUsingAES256(username)).subscribe((data) => {

      if (data.length === 0) {
        this.errorMessage = 'User does not exist';
      } else {
        const user: any = data[0].payload.doc.data();

        if (this.cryptoJs.encryptUsingAES256(password) === user.password) {
           this.loggedIn.emit({status: true, username: username});
        } else {
          this.errorMessage = 'Invalid Username/Password';
        }
      }
    });
  }

}
