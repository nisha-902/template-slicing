import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from 'src/app/shared/student/student.service';

@Component({
  selector: 'app-liststudent',
  templateUrl: './liststudent.component.html',
  styleUrls: ['./liststudent.component.css']
})
export class ListstudentComponent implements OnInit {
  students=[]

  constructor(private student:StudentService, private spinner:NgxSpinnerService,
     private toastr:ToastrService ) { }

  ngOnInit(): void {
   // console.log("hello")
    this.getStudent()
  }
  getStudent(){
    this.student.getStudent().subscribe(
      (res:any)=>{
        // console.log(res)
        
        this.students=res.response.data
      
      },
      err=>{
       // console.log(err)
       this.students=[]
      }
    )
  }
  delete(id){
    //alert(id)
    this.spinner.show()
    this.student.deleteStudent(id).subscribe(
      (res:any)=>{
        this.spinner.hide()
        this.toastr.success('Success',"Record Deleted Successfully")
        this.getStudent()
      },
      err=>{
        this.spinner.hide()
        this.toastr.error('Error',"Something went wrong")

      }
    )
  }

}
