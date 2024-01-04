import { Component } from '@angular/core';
import { AddPlanServiceService } from 'src/app/service/add-plan-service.service';
import { SuperAdminServiceService } from 'src/app/service/super-admin-service.service';

@Component({
  selector: 'app-saproducts',
  templateUrl: './saproducts.component.html',
  styleUrls: ['./saproducts.component.css']
})
export class SaproductsComponent {

  product:any;

  Products:any;

  productcategory:any;

  productcategory1 : any="WireLess";

  productcategory2:any="WiredLine";

  list:any;

  statuses:any="Not-Approved"

 

  constructor(private service:SuperAdminServiceService, private eservice:AddPlanServiceService)
  {
    // this.eservice.getPlan(this.productcategory).subscribe((pro)=>{this.products=pro});

    this.eservice.getPlan(this.productcategory1).subscribe((pro)=>{this.product=pro});

    this.eservice.getPlan(this.productcategory2).subscribe((pro)=>{this.Products=pro});
  }


  onApproveWireline(pro: any)
  {

    this.list=pro;

    // this.list=new wlineResponse(this.list.id,this.pr,this.pv,this.tot,this.voi,this.sms,this.add,this.fam,this.sup,this.an,this.st)

    this.list.status="Approved";

    this.service.editWirelineProducts(this.list).subscribe();

  //  this.list=new wlineResponse(this.id,this.pr,this.pv,this.tot,this.voi,this.sms,this.add,this.fam,this.sup,this.an,this.st)

  }

  onDeleteWireline(pro:any)
  {
    this.service.deleteWirelineProducts(pro).subscribe();
  }

 

 

  onApproveWireless(pro:any)
  {
     this.list=pro;
     pro.status="Approved"
     this.service.editWirelessProducts(pro).subscribe();
  }

  onDeleteWireless(pro:any)
  {
    this.list=pro;
    this.service.deleteWirelessProducts(pro).subscribe();
  }

 

// ---------------------wireline---------------------

 

 

 

// onApproveWLinePRe(pro:WlinePrepaidRequest)

// {

//   this.list=pro;

//      this.list.status="Approved"

//    this.service.editWirelinePrepaid(this.list).subscribe();

// }

// ondeleteWLinePRe(pro:any)

// {

//   this.list=pro;

//   this.service.deleteWirelinePrepaid(pro).subscribe();

// }

 

// onApproveWLinePost(pro:any)

// {

//   this.list=pro;

//      this.list.status="Approved"

//    this.service.editWirelinePostpaid(this.list).subscribe();

// }

// ondeleteWLinePost(pro:any)

// {

//   this.list=pro;

//   this.service.deleteWirelinePostpaid(pro).subscribe();

// }

 

 

// customItems: string[] = ['Custom Item 1', 'Custom Item 2', 'Custom Item 3'];

// customIndices: number[] = this.customItems.map((_, index) => index + 1);

 

// customBulletPoints: string[] = ['Custom Bullet A', 'Custom Bullet B', 'Custom Bullet C'];

 

}
