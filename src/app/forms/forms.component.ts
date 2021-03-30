import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from '../shared/student/student.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  formModel={
    name:" ",
    email:'',
    password:" "
  }

  constructor( private student:StudentService, private spinner:NgxSpinnerService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  register()
  {
    this.spinner.show()
    this.student.register(this.formModel).subscribe(
      (res : any)=>{
        this.spinner.hide()
        console.log(res)
        if(res.response.msg=="User Registered"){
        this.toastr.success('Success', res.response.msg)
        }
        else{
          this.toastr.error("Error", res.response.msg)
        }
      },
      err=>{
        this.spinner.hide()
        console.log(err)
        this.toastr.error('Error', err)
      }

    )
  }
}