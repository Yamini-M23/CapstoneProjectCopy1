import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../modules/product';
import { AddPlanServiceService } from '../service/add-plan-service.service';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(product:Product[],categoryFilter:any) {
      console.log(product)
    console.log(JSON.stringify(categoryFilter))
    return product.filter((pro)=>pro.category==categoryFilter);
  }

  // private service: AddPlanServiceService| any;

  //   if(choice=='Enterprise')

  //   return enterprise;

  //   elseif(choice=='Business'){
  //     return business;
  //   }


  //   else

  //   return products.filter((pro)=>pro.category==choice);

  //     }


}
