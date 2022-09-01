import { Component, OnInit } from '@angular/core';
import { Idept } from '../idept';
import { DeptserviceService } from '../deptservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adddept',
  templateUrl: './adddept.component.html',
  styleUrls: ['./adddept.component.css']
})
export class AdddeptComponent implements OnInit {
  deptdata:Idept={id:0,name:'',location:''}
  
  constructor(private deptservice:DeptserviceService,private router:Router) { }
    saveDept(dept:Idept){
      this.deptdata=dept
      this.deptservice.addDept(this.deptdata).subscribe(
        ()=>{
          alert("record saved success")
          this.router.navigate(['/List'])
        }
      )
    }
  ngOnInit(): void {
  }
}
