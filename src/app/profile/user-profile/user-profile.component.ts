import { Component, OnInit } from '@angular/core';
import { faFemale, faMale, faBirthdayCake, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  femaleIcon = faFemale;
  maleIcon = faMale;
  cakeIcon = faBirthdayCake;
  adminIcon = faUserAlt;
  constructor() { }

  ngOnInit(): void {
    
  }

  
}
