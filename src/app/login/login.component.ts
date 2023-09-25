import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private builder: FormBuilder, private toastr:ToastrService,
    private service:AuthService, private router:Router) {

  }
  userData : any;
  loginForm = this.builder.group({
    username:this.builder.control('', Validators.required),
    password:this.builder.control('', Validators.required)
  })

  proceedLogin(){
    if(this.loginForm.valid){
    //   console.log('inside registerForm = valid');
    //   this.service.ProceedRegister(this.registerForm.value).subscribe(res => {
    //     this.toastr.success('Please contact admin to enable access','Registered Sucessfully');
    //     this.router.navigate(['login']);
    //   });
    // } else {
    //   this.toastr.warning('Please enter valid data');
    // }
    this.service.GetByCode(this.loginForm.value.username).subscribe(res => {
      this.userData = res;
      console.log(this.userData);
      if(this.userData.password === this.loginForm.value.password){
        if(this.userData.isActive){
          sessionStorage.setItem('username', this.userData.id);
          sessionStorage.setItem('userRole', this.userData.role);
          this.router.navigate(['']); 
        } else {
          this.toastr.error('Please contact admin','Inactive user');
        }
      } else {
        this.toastr.error('Invalid credentials');
      }
    });
    }
  }
}
