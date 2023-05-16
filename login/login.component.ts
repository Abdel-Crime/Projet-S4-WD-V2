import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error: boolean = false;
  user: User = { login: '', password: '' };

  constructor(private userService: UserService, private router: Router) {

  }

  submit():void {
    console.log(this.user)
      this.userService.login(this.user).subscribe({
        next: () => {
          console.log("continue?")
           this.router.navigate(['voitureModif']) },
        error: () => { this.error = true;
        console.log("erreur") }
      });
  }

}