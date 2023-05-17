import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent {
  allowNewServer = false;
  serverStatus="No Server is Created.!"
  serverName="Rekha Dodani";
  serverStatusShown=false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onServerCreated(){
  this.serverStatusShown=true;

    this.serverName='Server Created.!'+this.serverName;
  }

  onUpdateServerName(event:any){
    console.log(event.target.value)
  }
}
