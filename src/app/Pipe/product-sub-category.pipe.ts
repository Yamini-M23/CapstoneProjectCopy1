import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../modules/product';

@Pipe({
  name: 'productSubCategory'
})
export class ProductSubCategoryPipe implements PipeTransform {


    transform(product:Product[], productsubcategory: any){

      if(productsubcategory=='ALL')
  
      return product;
  
      else
  
      return product.filter((pro)=>pro.productsubcategory==productsubcategory);
  
        }
  }


