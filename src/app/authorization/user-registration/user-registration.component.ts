import { Component, OnInit } from '@angular/core';
import {} from "@fortawesome/fontawesome-svg-core";
import { } from '@fortawesome/free-regular-svg-icons'
import { faMale, faFemale } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  maleIcon = faMale;
  femaleIcon = faFemale;
  maleSelected :boolean = true;
  constructor() { }
  selectMale() {
    this.maleSelected = true;
  }
  selectFemale() {
    this.maleSelected = false;
  }
  ngOnInit(): void {

  }

}
