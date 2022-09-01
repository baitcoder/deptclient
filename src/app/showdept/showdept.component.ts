import { Component, OnInit } from '@angular/core';
import { DeptserviceService } from '../deptservice.service';




@Component({
  selector: 'app-showdept',
  templateUrl: './showdept.component.html',
  styleUrls: ['./showdept.component.css']
})
export class ShowdeptComponent implements OnInit {
  showdept:any[]=[]
  
  constructor(private deptservice:DeptserviceService) { 
    this.deptservice.showDeptinfo().subscribe(data=>{
      this.showdept=data
    })
  }
  

  ngOnInit(): void {
  }

}
