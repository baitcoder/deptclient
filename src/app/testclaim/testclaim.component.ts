import { Component, OnInit } from '@angular/core';
import { ClaimserviceService } from '../claimservice.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'; 
import { IClaim } from '../claim';

@Component({
  selector: 'app-testclaim',
  templateUrl: './testclaim.component.html',
  styleUrls: ['./testclaim.component.css']
})
export class TestclaimComponent implements OnInit {

  claimList:any[]=[]
  claimdata:IClaim={id:0,date:'',amount:0,approvestatus:''}
  id:number=0
  constructor(private claimservice:ClaimserviceService,private router:Router ,private activateroute:ActivatedRoute) { 
    this.claimservice.getClaimList().subscribe(data=>{
      this.claimList=data
      //console.log(this.claimList)
    })
  }

  ngOnInit(): void {
   
  }

}
