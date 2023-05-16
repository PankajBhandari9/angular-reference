import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/profile/services/profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  error: any = {};
  userDetails: any = {};
  profile: any = {};
  constructor(private profileService: ProfileService, router: Router) {}

  // when profile exists or not this call @ the time of rendering the dashboard or not?
  // initialization of component : ngOnInit method.
  ngOnInit(): void {
    // role array
    // if role is admin ---> adminDashboard
    // if role is super admin ---> super adminDashboard
    // if role is user ---> userDashboard

    this.profileService.getProfile().subscribe(
      (res) => {
        console.log(JSON.stringify(res));
        this.profile = res;
        console.log(JSON.stringify(this.profile));
      },
      (err) => {
        console.log(JSON.stringify(err));
        this.error = err.error;
        this.profile = null;
      }
    );

    this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
  }
}
