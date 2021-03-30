import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { UserdataService } from '../userdata.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  BaseUrl=" "
  token=" "

  constructor( private http:HttpClient, @Inject('BaseUrl')_baseUrl , private userdata:UserdataService) { 
    this.BaseUrl=_baseUrl
    this.token =this.userdata.getData()
  }
  public register(form){
    var header_object = new HttpHeaders().set('Authorization','Bearer '+this.token)
return this.http.post(this.BaseUrl+"/register",form,{headers:header_object})

  }
  public getStudent(){
    var header_object = new HttpHeaders().set('Authorization','Bearer '+this.token)
return this.http.get(this.BaseUrl+"/getStudent",{headers:header_object})
}

}

