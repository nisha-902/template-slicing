import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/student/student.service';

@Component({
  selector: 'app-liststudent',
  templateUrl: './liststudent.component.html',
  styleUrls: ['./liststudent.component.css']
})
export class ListstudentComponent implements OnInit {
  students=[]

  constructor(private student:StudentService) { }

  ngOnInit(): void {
   // console.log("hello")
    this.getStudent()
  }
  getStudent(){
    this.student.getStudent().subscribe(
      (res:any)=>{
        //console.log(res)
        
        this.students=res.response.data
      
      },
      err=>{
       // console.log(err)
       this.students=[]
      }
    )
  }

}
