import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  login(){
    this.route.navigate(['/login'])
  }
}
