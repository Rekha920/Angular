import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html'
  //styleUrls: ['./assignment3.component.scss']
})
export class Assignment3Component {
  secreatPassword="tune";
  status=false;
  array:Number[]=[];
  number=0;
  onUpdateButton(){
    this.number=this.number+1;
    this.status=true;
    this.array.push(this.number);
    console.log("i AM wORKFNFNDIFH",this.array);
  }
}
