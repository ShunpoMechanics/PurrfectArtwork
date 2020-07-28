import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { map, take } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  isAdmin = false;
  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree> {
    return this.authService.user.pipe(
      take(1),
      map((user) => {
        if (user && user.id == environment.adminUserId) this.isAdmin = true;
        const isUser = !!user;
        if (this.isAdmin || (isUser && route.routeConfig.path != "inventory"))
          return true;
        if (route.routeConfig.path == "inventory")
          return this.router.createUrlTree(["/"]);
        return this.router.createUrlTree(["/auth"]);
      })
    );
  }
}
