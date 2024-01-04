import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(list: any[], search: any)  {
    return list.filter(pro=>pro.plan.includes(search));
  }

}
