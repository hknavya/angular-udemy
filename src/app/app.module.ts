import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { IoComponent } from "./io/io.component";
import { FirstComponent } from "./io/first/first.component";
import { SecondComponent } from "./io/second/second.component";
import { FirstInnerComponent } from "./io/first/first-inner/first-inner.component";
import { SecondInnerComponent } from "./io/second/second-inner/second-inner.component";
import { OneComponent } from "./io/one/one.component";
import { TwoComponent } from "./io/two/two.component";
import { NestedIoComponent } from "./nested-io/nested-io.component";
import { NestedIoOneComponent } from "./nested-io/one/one.component";
import { NestedIoTwoComponent } from "./nested-io/two/two.component";
import { InnerOneComponent } from "./nested-io/one/inner-one/inner-one.component";
import { InnerTwoComponent } from "./nested-io/two/inner-two/inner-two.component";
import { GeneralComponent } from "./general/general.component";
import { ListComponent } from "./general/list/list.component";
import { BindingComponent } from "./binding/binding.component";
import { InbuiltDirectiveComponent } from "./inbuilt-directive/inbuilt-directive.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { ApplicationComponent } from "./application/application.component";
import { ShoppingListComponent } from "./application/shopping-list/shopping-list.component";
import { EditComponent } from "./application/shopping-list/edit/edit.component";
import { RecipesComponent } from "./application/recipes/recipes.component";
import { RecipeListComponent } from "./application/recipes/list/list.component";
import { RecipeListItemComponent } from "./application/recipes/list/item/item.component";
import { DetailComponent } from "./application/recipes/detail/detail.component";
import { HeaderComponent } from "./application/header/header.component";
import { ComponentCommunicationComponent } from "./component-communication/component-communication.component";
import { CompCommAddFormComponent } from "./component-communication/add-form/add-form.component";
import { CompCommDisplayFormComponent } from "./component-communication/display-form/display-form.component";
import { GameControlComponent } from "./assignment-one/game-control/game-control.component";
import { OddComponent } from "./assignment-one/odd/odd.component";
import { EvenComponent } from "./assignment-one/even/even.component";
import { DataBindingComponent } from "./assignment-one/data-binding.component";
import { DirectivesComponent } from "./directives/directives.component";
import { BasicDirective } from "./directives/basic/basic.directive";
import { BetterDirective } from "./directives/basic/better.directive";
import { DropdownDirective } from "./application/shared/dropdown.directive";
import { AngularServicesComponent } from "./angular-services/angular-services.component";
import { AccountComponent } from "./angular-services/account/account.component";
import { NewAccountComponent } from "./angular-services/new-account/new-account.component";
import { AssignmentServicesComponent } from "./assignment-services/assignment-services.component";
import { ActiveUsersComponent } from "./assignment-services/active-users/active-users.component";
import { InactiveUsersComponent } from "./assignment-services/inactive-users/inactive-users.component";
import { RoutingComponent } from "./routing/routing.component";
import { HomeRoutingComponent } from "./routing/home/home.component";
import { ServersRoutingComponent } from "./routing/servers/servers.component";
import { UsersRoutingComponent } from "./routing/users/users.component";
import { UserComponent } from "./routing/users/user/user.component";
import { UserDetailComponent } from "./routing/users/user-detail/user-detail.component";
import { ServerComponent } from "./routing/servers/server/server.component";
import { ServerDetailComponent } from "./routing/servers/server-detail/server-detail.component";
import { ServerEditComponent } from "./routing/servers/server-edit/server-edit.component";
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
import { AuthServiceService } from "./auth-service.service";
import { AngularObservablesComponent } from "./angular-observables/angular-observables.component";
import { ObsHomeComponent } from "./angular-observables/obs-home/obs-home.component";
import { ObsUserComponent } from "./angular-observables/obs-user/obs-user.component";
import { ObsUserService } from "./angular-observables/obs-user/obs-user.service";
import { ObservableUserService } from "./angular-observables/observable-user.service";
import { AngularFormsComponent } from "./angular-forms/angular-forms.component";
import { AngularFormsTddComponent } from "./angular-forms/tdd/tdd.component";
import { ReactiveFormsComponent } from "./angular-forms/reactive/reactive.component";

@NgModule({
	declarations: [
		AppComponent,
		IoComponent,
		FirstComponent,
		SecondComponent,
		FirstInnerComponent,
		SecondInnerComponent,
		OneComponent,
		TwoComponent,
		NestedIoComponent,
		NestedIoOneComponent,
		NestedIoTwoComponent,
		InnerOneComponent,
		InnerTwoComponent,
		GeneralComponent,
		ListComponent,
		BindingComponent,
		InbuiltDirectiveComponent,
		WelcomeComponent,
		ApplicationComponent,
		ShoppingListComponent,
		EditComponent,
		RecipesComponent,
		RecipeListComponent,
		RecipeListItemComponent,
		DetailComponent,
		HeaderComponent,
		ComponentCommunicationComponent,
		CompCommAddFormComponent,
		CompCommDisplayFormComponent,
		GameControlComponent,
		OddComponent,
		EvenComponent,
		DataBindingComponent,
		DirectivesComponent,
		BasicDirective,
		BetterDirective,
		DropdownDirective,
		AngularServicesComponent,
		AccountComponent,
		NewAccountComponent,
		AssignmentServicesComponent,
		ActiveUsersComponent,
		InactiveUsersComponent,
		RoutingComponent,
		HomeRoutingComponent,
		ServersRoutingComponent,
		UsersRoutingComponent,
		UserComponent,
		UserDetailComponent,
		ServerComponent,
		ServerDetailComponent,
		ServerEditComponent,
		RecipesMessageComponent,
		RecipesEditComponent,
		AngularRoutingComponent,
		HomeeeRoutingComponent,
		UsersssRoutingComponent,
		ServersssRoutingComponent,
		UsersssDetailComponent,
		ServersssDetailComponent,
		ServersssEditComponent,
		PageNotFoundComponent,
		AngularObservablesComponent,
		ObsHomeComponent,
		ObsUserComponent,
		AngularFormsComponent,
		AngularFormsTddComponent,
		ReactiveFormsComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
