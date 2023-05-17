import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
 // styleUrls: ['./success-alert.component.scss']
 styles:[`
  p{
    color:green;
    padding:10px;
    border:1px solid black;
    background-color:light-green
  }
 `]
})
export class SuccessAlertComponent {

}
