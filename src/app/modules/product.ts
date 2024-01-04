export class Product{
    constructor (public id:number,public plan:String,public category:String,public productcategory:String,public productsubcategory:String,public validity:String,public billcycle:String,public data:String,public dataperday:String,public voice:String,public sms:String,public subscriptions:String[],public addon:String,public admin:String,public status:String)
{ 
}
}
export let products:Product[] = [new Product(1,'239 Plan','consumer','wired','prepaid','28 days','Monthly','42GB','1.5 GB/day','Unlimited','100 SMS/day',["NetFlix"],"1","ProVueAdmin1","Not Approved"),
                                   new Product(2,'388 Plan','consumer','wired','prepaid','28 days','weekly','56GB','2 GB/day','Unlimited','100 SMS/day',["Disney+Hotstar"],"1","ProVueAdmin2","Not Approved"),
                                   new Product(3,'3662 Plan','Business','wired','prepaid','28 days','','912.5GB','32.5 GB/day','Unlimited','100 SMS/day',["SonyLiv","Zee5"],"2","ProVueAdmin3","Not Approved")
          
                                  ];
// export let category:string[] = ['Mobile','Laptop','TV','NoteBook','Watch']

export let productsubcategory:String[]=["ALL","prePaid","PostPaid"];

export class ProductRequest{
  constructor (public plan:String,public category:String,public productcategory:String,public productsubcategory:String,public validity:String,public billcycle:String,public data:String,public dataperday:String,public voice:String,public sms:String,public subscriptions:String[],public addon:String,public admin:String,public status:String)
{ 
}
}

export class subscriptions
{
  constructor(public subscriptionFeatures:String[]){}
}
