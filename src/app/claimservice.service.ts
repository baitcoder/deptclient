import { Injectable } from '@angular/core';
import { IClaim } from './claim';
import {HttpClient} from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClaimserviceService {
  url='http://localhost:10095/api/Claim'
  httpOptions={headers:new HttpHeaders({'content-type':'application/json'})}
  constructor(private httpclient:HttpClient) { }
  getClaimList():Observable<any>{
    return this.httpclient.get<any[]>(this.url+'/ClaimList').pipe(catchError(this.handleError))
  }
  approveClaimTable(claimdata:IClaim):Observable<IClaim>{
    return this.httpclient.put<IClaim>(this.url,this.httpOptions).pipe(catchError(this.handleError))
    alert("Approved Success")
  }

  handleError(error:HttpErrorResponse){
    let errormessage=''
    errormessage=error.status+'\n'+error.statusText+'\n'+error.error
    alert(errormessage)
    return throwError(errormessage)
  }
}

