import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from 'src/app/shared/student/student.service';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {

  formModel={
    name:'',
    email:'',
    password:''
  }
  id=" "
  data=""
  constructor(private toastr:ToastrService, private spinner:NgxSpinnerService, private student: StudentService,
    private router:ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.paramMap.get('id')
    //console.log(this.id)
    this.editstudent()
  }
  editstudent()
  {
    this.spinner.show()
    this.student.getStudentById(this.id).subscribe(
      (res:any)=>{
        this.spinner.hide()
        //console.log(res.response)
        this.data=res.response.data
        this.formModel.name=this.data['name']
        this.formModel.email=this.data['email']
      },
      err=>{
        this.spinner.hide()
        console.log(err)
      }
    )
  }
  updateStudent(){
    this.spinner.show()
    this.student.updateStudent(this.formModel,this.id).subscribe(
      (res:any)=>{
        this.spinner.hide()
        this.route.navigateByUrl("/layout/studentlist")
        this.toastr.success('Success',"Record Update Successfully")
      },
      err=>
      {
        this.spinner.hide()
        this.toastr.error("Error", err)
      }

    )
  }

}
