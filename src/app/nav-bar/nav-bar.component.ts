import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { Subscription } from "rxjs";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"],
})
export class NavBarComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  isAdmin = false;
  private userSub: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
      if (user.id == environment.adminUserId) this.isAdmin = true;
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  displayArtwork() {
    var x = document.getElementById("paintings-link");
    this.toggle(x);
    x = document.getElementById("geodes-link");
    this.toggle(x);
    x = document.getElementById("etc-link");
    this.toggle(x);
  }

  toggle(x) {
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
}
