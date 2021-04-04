import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/student/student.service';

@Component({
  selector: 'app-myproduct',
  templateUrl: './myproduct.component.html',
  styleUrls: ['./myproduct.component.css']
})
export class MyproductComponent implements OnInit {
  formModel={
    brand_name:" ",
    category_name:'',
    product_name:" ",
    price:" ",
    quantity:" "
  }

  constructor(private student :StudentService) { }

  ngOnInit(): void {
  }
  addProduct(){
    this.student.addProduct(this.formModel).subscribe(
      (res:any)=>{
        console.log(res)
      },
      err=>
      {
        console.log(err)
      }

    )
  }

}
