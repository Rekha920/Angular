import { Component } from "@angular/core";


@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles:[`
    .online{
      color:white
    }
    `]
})

export class ServerComponent{
serverId:Number=10;
serverStatus:String='offline'

constructor(){
    this.serverStatus=Math.random() >0.5 ?'Online' :'Offline'
}
getServerStatus(){
    return this.serverStatus;
}

getColor(){
    return this.serverStatus==='Online' ?'green':'red';
}

}