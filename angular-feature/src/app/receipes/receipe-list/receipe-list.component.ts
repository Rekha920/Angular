import { Component } from '@angular/core';
import { Recipe} from '../receipe.model';
@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.scss']
})
export class ReceipeListComponent {
recipe:Recipe[]=[
  new Recipe('A test Recipe' ,'This is only for the testing',"https://www.foodandwine.com/thmb/nDBGGuZzVOHIUkLT_fWorNv3nS8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Tamarind-Chicken-FT-RECIPE0522-80072d93f7bc4bc7abf1dcf5b5317b0c.jpg"),
  new Recipe('Pav Bhaji' ,'Cheese Pav Bhaji',"https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/pav-bhaji-1-280x280.jpg")

];
constructor(){

}
}
