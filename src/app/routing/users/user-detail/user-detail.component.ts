import { Component, OnInit, Input } from "@angular/core";
import { User } from "../user.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-routing-user-detail",
  templateUrl: "./user-detail.component.html"
})
export class UserDetailComponent implements OnInit {
  @Input() user: User;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // console.log(this.user, 'userssss');
  }
}
