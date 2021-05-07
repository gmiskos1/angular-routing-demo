import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";


//LOAD THE SERVER IN ADVANCE
interface Server{
      id:number;
      name:string;
      status:string;
}
@Injectable()
export class ServerResolver implements Resolve<{id:number, name:string, status:string}>{

      constructor(private serverService:ServersService){}
      resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): { id: number; name: string; status: string; } | Observable<{ id: number; name: string; status: string; }> | Promise<{ id: number; name: string; status: string; }> | Server {
            return this.serverService.getServer(+route.params['id']);
      }
      
}