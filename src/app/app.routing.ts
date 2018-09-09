import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { IoComponent } from "./io/io.component";
import { NestedIoComponent } from "./nested-io/nested-io.component";
import { GeneralComponent } from "./general/general.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { ApplicationComponent } from "./application/application.component";
import { ComponentCommunicationComponent } from "./component-communication/component-communication.component";
import { GameControlComponent } from "./assignment-one/game-control/game-control.component";
import { OddComponent } from "./assignment-one/odd/odd.component";
import { EvenComponent } from "./assignment-one/even/even.component";
import { DataBindingComponent } from "./assignment-one/data-binding.component";
import { DirectivesComponent } from "./directives/directives.component";
import { AngularServicesComponent } from "./angular-services/angular-services.component";
import { AssignmentServicesComponent } from "./assignment-services/assignment-services.component";
import { RoutingComponent } from "./routing/routing.component";
import { HomeRoutingComponent } from "./routing/home/home.component";
import { ServersRoutingComponent } from "./routing/servers/servers.component";
import { UsersRoutingComponent } from "./routing/users/users.component";
import { UserComponent } from "./routing/users/user/user.component";
import { UserDetailComponent } from "./routing/users/user-detail/user-detail.component";
import { ShoppingListComponent } from "./application/shopping-list/shopping-list.component";
import { EditComponent } from "./application/shopping-list/edit/edit.component";
import { RecipesComponent } from "./application/recipes/recipes.component";
import { RecipeListComponent } from "./application/recipes/list/list.component";
import { RecipeListItemComponent } from "./application/recipes/list/item/item.component";
import { DetailComponent } from "./application/recipes/detail/detail.component";
import { HeaderComponent } from "./application/header/header.component";
import { RecipesMessageComponent } from "./application/recipes/message/message.component";
import { RecipesEditComponent } from "./application/recipes/edit/edit.component";
import { AngularRoutingComponent } from "./angular-routing/angular-routing.component";
import { HomeeeRoutingComponent } from "./angular-routing/home/home.component";
import { UsersssRoutingComponent } from "./angular-routing/usersss/usersss.component";
import { ServersssRoutingComponent } from "./angular-routing/serversss/serversss.component";
import { UsersssDetailComponent } from "./angular-routing/usersss/usersss-detail/usersss-detail.component";
import { ServersssDetailComponent } from "./angular-routing/serversss/serversss-detail/serversss-detail.component";
import { ServersssEditComponent } from "./angular-routing/serversss/serversss-edit/serversss-edit.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuardService } from "./auth-guard.service";
import { AngularObservablesComponent } from "./angular-observables/angular-observables.component";
import { ObsHomeComponent } from "./angular-observables/obs-home/obs-home.component";
import { ObsUserComponent } from "./angular-observables/obs-user/obs-user.component";
import { AngularFormsComponent } from "./angular-forms/angular-forms.component";
import { AngularFormsTddComponent } from "./angular-forms/tdd/tdd.component";
import { ReactiveFormsComponent } from "./angular-forms/reactive/reactive.component";
import { AngularPipesComponent } from "./angular-pipes/angular-pipes.component";

const routes: Routes = [
	{
		path: "",
		redirectTo: "/welcome",
		pathMatch: "full"
	},
	{ path: "io", component: IoComponent },
	{ path: "nested-io", component: NestedIoComponent },
	{ path: "general", component: GeneralComponent },
	{ path: "welcome", component: WelcomeComponent },
	{
		path: "application",
		component: ApplicationComponent,
		children: [
			{
				path: "recipes",
				component: RecipesComponent,
				children: [
					{ path: "", component: RecipesMessageComponent },
					{ path: "new", component: RecipesEditComponent },
					{ path: ":id", component: DetailComponent },
					{ path: ":id/edit", component: RecipesEditComponent }
				]
			},
			{ path: "shopping-list", component: ShoppingListComponent }
		]
	},
	{
		path: "component-communication",
		component: ComponentCommunicationComponent
	},
	{ path: "assignment-data-binding", component: DataBindingComponent },
	{ path: "directives", component: DirectivesComponent },
	{ path: "ang-services", component: AngularServicesComponent },
	{ path: "assignment-services", component: AssignmentServicesComponent },
	{
		path: "ang-routing",
		component: RoutingComponent,
		children: [
			{ path: "home", component: HomeRoutingComponent },
			{ path: "servers", component: ServersRoutingComponent },
			{ path: "users", component: UsersRoutingComponent }
		]
	},
	{
		path: "angular-routinggg",
		component: AngularRoutingComponent,
		children: [
			{ path: "homeee", component: HomeeeRoutingComponent },
			{
				path: "serversss",
				component: ServersssRoutingComponent,
				canActivate: [AuthGuardService], // Applying guard to parent here
				// canActivateChild: [AuthGuardService], // Applying guard to childs here
				children: [
					{ path: ":id", component: ServersssDetailComponent },
					{ path: ":id/edit", component: ServersssEditComponent }
				]
			},
			{
				path: "usersss",
				component: UsersssRoutingComponent,
				children: [{ path: ":id/:name", component: UsersssDetailComponent }]
			}
		]
	},
	{
		path: "ang-observables",
		component: AngularObservablesComponent,
		children: [
			{ path: "home", component: ObsHomeComponent },
			{ path: "user/:id", component: ObsUserComponent }
		]
	},
	{
		path: "ang-forms",
		component: AngularFormsComponent,
		children: [
			{ path: "tdd", component: AngularFormsTddComponent },
			{ path: "reactive", component: ReactiveFormsComponent }
		]
	},
	{ path: "ang-pipes", component: AngularPipesComponent },
	{ path: "**", component: PageNotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
