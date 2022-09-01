import { Component, OnInit } from '@angular/core';
import { DeptserviceService } from '../deptservice.service';
import { Idept } from '../idept';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'; 


@Component({
  selector: 'app-editdept',
  templateUrl: './editdept.component.html',
  styleUrls: ['./editdept.component.css']
})
export class EditdeptComponent implements OnInit {
  deptdata:Idept={id:0,name:'',location:''}
  id:number=0
  
  constructor(private deptservice:DeptserviceService,private router:Router ,private activateroute:ActivatedRoute) { }
  ngOnInit(): void {
    const tid=this.activateroute.snapshot.paramMap.get('id')
    this.id=Number(tid)
    this.deptservice.getDept(this.id).subscribe((data:Idept)=>{this.deptdata=data})
  }
  saveDept(dept:Idept){
    this.deptdata=dept
    this.deptservice.editDept(this.deptdata).subscribe(
      ()=>{
        alert("Edited Succefull")
        this.router.navigate(['/list'])
      }
    )
  }

}
