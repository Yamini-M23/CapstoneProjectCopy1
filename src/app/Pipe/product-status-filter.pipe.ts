import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productStatusFilter'
})
export class ProductStatusFilterPipe implements PipeTransform {

  transform(list: any[], status:any) {

    return list.filter((pro)=>pro.status==status);

  }

}
