import { Injectable } from "@angular/core";
import {
	CanActivate,
	CanActivateChild,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	Router
} from "@angular/router";
import { AuthServiceService } from "./auth-service.service";
import { Observable } from "rxjs/Observable";

@Injectable({
	providedIn: "root"
})
export class AuthGuardService implements CanActivate, CanActivateChild {
	constructor(
		private authServiceService: AuthServiceService,
		private router: Router
	) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		return this.authServiceService
			.isAuthenticated()
			.then((authenticated: boolean) => {
				console.log(authenticated, "authenticated");
				if (authenticated) {
					return true;
				} else {
					this.router.navigate(["/"]);
				}
			});
	}

	canActivateChild(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		return this.canActivate(route, state);
	}
}
