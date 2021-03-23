import { Component, OnInit } from '@angular/core';
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

  constructor( private student:StudentService) { }

  ngOnInit(): void {
  }
  register()
  {
    this.student.register(this.formModel).subscribe(
      (res : any)=>{
        console.log(res)
      },
      err=>{
        console.log(err)
      }

    )
  }
}