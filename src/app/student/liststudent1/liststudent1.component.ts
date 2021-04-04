import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/student/student.service';

@Component({
  selector: 'app-liststudent1',
  templateUrl: './liststudent1.component.html',
  styleUrls: ['./liststudent1.component.css']
})
export class Liststudent1Component implements OnInit {
  students=[]

  constructor( private student:StudentService) { }

  ngOnInit(): void {
    this.getProduct()
  }
  getProduct(){
    this.student.getProduct().subscribe(
      (res:any)=>{
        this.students=res.response.data
      },
      err=>{
        this.students=[]
      }
    )
  }

}
