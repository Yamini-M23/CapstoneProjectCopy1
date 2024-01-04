import { Component } from '@angular/core';
import { EmailServiceService } from 'src/app/service/email-service.service';
import { SuperAdminServiceService } from 'src/app/service/super-admin-service.service';

@Component({
  selector: 'app-saadmins',
  templateUrl: './saadmins.component.html',
  styleUrls: ['./saadmins.component.css']
})
export class SAadminsComponent {

  admins:any;
  // statuss:any="Not-Approved";
  list:any;
  // status:any="Not-Approved";

  constructor(private service:SuperAdminServiceService,private eservice:EmailServiceService)
  {
  this.service.getAdmins().subscribe((admins)=>{this.admins=admins});
 console.log(this.admins);
 }

 onApprove(admins:any)
  {
     this.list=admins;
     this.list.status="Approved";
     console.log(this.list);
     this.eservice.sendEmailToCustomer(this.list.adminId).subscribe(response => {
      console.log(response); // Handle the response as needed
      // Optionally, you can update the customer status or show a notification to the user

    });
     this.service.approveAdmins(this.list).subscribe();

     
  }

  onDelete(admins:any)
  {
    console.log(admins);
    this.list=admins;
    this.service.deleteAdmins(this.list).subscribe();
  }

}
