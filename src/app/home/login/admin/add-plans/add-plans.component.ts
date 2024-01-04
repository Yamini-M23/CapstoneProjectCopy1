import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductRequest } from 'src/app/modules/product';
import { AddPlanServiceService } from 'src/app/service/add-plan-service.service';

@Component({
  selector: 'app-add-plans',
  templateUrl: './add-plans.component.html',
  styleUrls: ['./add-plans.component.css']
})
export class AddPlansComponent {

  id:any;
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
  addedStatus:any=false;
  products :any;


  

 isProductAdded:boolean=false;

 isProductNotAdded:boolean = false;

  constructor(private service:AddPlanServiceService)
  {
 
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
   this.addedStatus=true;
  }
 
  // onSubmit(form: NgForm)
  // {
  //   this.service.addPlan(this.products).subscribe();
  //   const productAddedSuccessfully=false;
  //   if(!productAddedSuccessfully)
  //   {
  //     this.isProductAdded=true;

  //   }
  //   else{
  //     this.handleProductNotAddedError();
  //   }
  //   setTimeout(() => {
  //     this.isProductAdded=false;
  //   },2000);

  // }

  // handleProductNotAddedError()
  // {
  //   this.isProductNotAdded=true;

  //   setTimeout(() => {
  //     this.clearMessages();
  //   },2000);

  // }
  // clearMessages(){
  //   this.isProductAdded=false;
  //   this.isProductNotAdded=false;
  // }
 }
 



