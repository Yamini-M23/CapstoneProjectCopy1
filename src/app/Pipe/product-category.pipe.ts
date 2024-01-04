import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../modules/product';

@Pipe({
  name: 'productCategory'
})
export class ProductCategoryPipe implements PipeTransform {

    transform(product:Product[], productCategory: any){
      console.log(product.filter((pro)=>pro.productcategory==productCategory))
      return product.filter((pro)=>pro.productcategory==productCategory);
        }
  }


