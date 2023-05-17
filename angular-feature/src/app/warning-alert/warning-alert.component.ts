import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styles:[`
  p{
    color:red;
    padding:10px;
    border:1px solid black;
    background-color:pink
  }
 `]
 // styleUrls: ['./warning-alert.component.scss']
})
export class WarningAlertComponent {

}
