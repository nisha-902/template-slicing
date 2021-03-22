import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/user/auth.service';
import { UserdataService } from '../shared/userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userdata:UserdataService, private router:Router,  private userauth:AuthService ){ }
  loginForm=new FormGroup({
    'email':new FormControl(''),
    'password':new FormControl('')
  })

  ngOnInit(): void {
    if(this.userdata.getData() !=null)
    {this.router.navigateByUrl('layout/dash')
  }
  }
  onclick(){
    this.userauth.login(this.loginForm.value).subscribe(
      (res:any)=>{
        console.log(res)
      },
      err =>{
        console.log(err)
      }
    )
  }
    
  }


  


