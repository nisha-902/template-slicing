import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/user/auth.service';
import { UserdataService } from '../shared/userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userdata:UserdataService, private router:Router,  private userauth:AuthService ,
    private spinner:NgxSpinnerService, private toastr:ToastrService){ }
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
    this.spinner.show()
    this.userauth.login(this.loginForm.value).subscribe(
      (res:any)=>{

        if(res.response.status==true){
          this.spinner.hide()
        //console.log(res.response.token)
        this.userdata.setData(res.response.token)
        this.router.navigateByUrl('layout/dash')
        }
        else{
          this.spinner.hide()
          this.router.navigateByUrl('login')
          this.toastr.error('invalid email or password')
        }
      },
      err =>{
        this.spinner.hide()
        console.log(err)
      }
    )
  }
    
  }


  


