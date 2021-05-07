import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Data, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(
    private serversService: ServersService,
    private route:ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // get with params
    // const id = +this.route.snapshot.params['id']; //to convert '1' to number
    // this.server = this.serversService.getServer(1);
    // this.route.params.subscribe(
    //   (params:Params)=>{
    //     this.server = this.serversService.getServer(+params['id']);
    //   }
    // )

    //get with resolver
    this.route.data.subscribe(
      (data:Data)=>{
        this.server = data['server']; // 'server' has to patch the name at resolve: {server:ServerResolver}
      }
     );
  }

  onEdit(){
    this.router.navigate(['edit'], {relativeTo:this.route, queryParamsHandling: 'preserve'}); //relative. Append to our currently route
  }

}
