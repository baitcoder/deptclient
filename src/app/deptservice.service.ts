import { Injectable } from '@angular/core';
import { Idept } from './idept';
import {HttpClient} from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { IDeptinfo } from './deptinfo';

@Injectable({
  providedIn: 'root'
})
export class DeptserviceService {
  url='http://localhost:25876/api/Dept'
  httpOptions={headers:new HttpHeaders({'content-type':'application/json'})}
  constructor(private httpclient:HttpClient) { }
  getDeptList():Observable<any>{
    return this.httpclient.get<any[]>(this.url+'/ListDept').pipe(catchError(this.handleError))
  }
  getDept(id:number):Observable<Idept>{
    return this.httpclient.get<Idept>(this.url+'/ListDept/'+id).pipe(catchError(this.handleError))
  }
  addDept(deptdata:Idept):Observable<Idept>{
    return this.httpclient.post<Idept>(this.url+'/AddDept/',deptdata,this.httpOptions).pipe(catchError(this.handleError))
  }
  editDept(deptdata:Idept):Observable<Idept>{
    return this.httpclient.put<Idept>(this.url+'/EditDept/'+deptdata.id,deptdata,this.httpOptions).pipe(catchError(this.handleError))
  }
  showDeptinfo():Observable<any>{
    return this.httpclient.get<any[]>(this.url+'/ShowDept')
  }
  handleError(error:HttpErrorResponse){
    let errormessage=''
    errormessage=error.status+'\n'+error.statusText+'\n'+error.error
    alert(errormessage)
    return throwError(errormessage)
  }
}
