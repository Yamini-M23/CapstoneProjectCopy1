import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductRequest, subscriptions } from 'src/app/modules/product';
import { AddPlanServiceService } from 'src/app/service/add-plan-service.service';
import { SuperAdminServiceService } from 'src/app/service/super-admin-service.service';

@Component({
  selector: 'app-view-plans',
  templateUrl: './view-plans.component.html',
  styleUrls: ['./view-plans.component.css']
})
export class ViewPlansComponent {

  pid:any;
  plan:any;
  category:any;
	productcategory:any;
	productsubcategory:any;
	validity:any;
  billcycle:any;
	data:any;
	dataperday:any;
	voice:any;
	sms:any;
	subscriptions:String[]=[];
	addon:any;
	admin:any="";
	status:any="Not-Approved";

  products :any;

  editProducts:any[]=[];
  eprod:any[]=[];
  p:any;
  @Input() id:any;


  username:any=JSON.parse(localStorage.getItem('username')+'');
  // @Output() editproducts= new EventEmitter<any>();

  // @Input() id:any;
  
  subscripstions:any=subscriptions;
  subProductSelected:Subscription[]=[];
  deleteProducts: any;
  editedStatus:any=false;
 
  // constructor(private service:WlineserviceService,private eservice:AdminServiceService,private sService:SuperAdminService)
  
  constructor(private service:AddPlanServiceService,private aservice:SuperAdminServiceService)
  {
    this.service.getPlan(this.productcategory).subscribe((pro)=>{this.products=pro});
      let data:any = localStorage.getItem("pdata");
    // console.log(JSON.parse(data))
    this.p = JSON.parse(data);
    console.log(this.p)
  }
 
  
   getCheckboxValues() {
     const checkBoxes = document.querySelectorAll('input[type=checkbox]:checked');
     const values = Array.from(checkBoxes).map(element => (element as HTMLInputElement).value);
     console.log(values);
     return values;
   }

   onsubmit()
   {
   this.products=new ProductRequest(this.plan,this.category,this.productcategory,this.productsubcategory,this.validity,this.billcycle,this.data,this.dataperday,this.voice,this.sms,this.getCheckboxValues(),this.addon,this.admin,this.status);
  // this.products=new ProductRequest(this.plan,this.category,this.productcategory,this.productsubcategory,this.validity,this.data,this.dataperday,this.voice,this.sms,this.subscriptions,this.addon,this.admin,this.status);
   this.service.addPlan(this.products).subscribe();
  }



     
 onEditSubmit(pro:any)
 { 
  pro.subscriptions=this.getCheckboxValues();

  console.log(pro);

  this.aservice.editProducts(pro).subscribe();
  this.editedStatus=true;
 }
 editPlan(pedit:any)
 {
  console.log(pedit)
  this.editProducts=pedit;
  // this.editproducts=pedit;
 return this.products.filter((pro: { id: any; })=>pro.id==pedit);
 }
 
 deletePlan(pdelete:any)
 {
  this.aservice.deletePoducts(pdelete).subscribe();
 }

 
checkedSubscriptions(sub:any)
{
  this.subProductSelected.unshift(sub)
}
}