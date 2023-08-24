


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { SupplierService } from '../supplier.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  errorMessage!: string;
  useremail: any;
  userid: any;
  user: User = new User(); 

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private supplierService: SupplierService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  getsupplierdetails(){
    const email = localStorage.getItem('useremail');
    this.useremail = email;
    this.supplierService.getsupplierdetails(this.useremail).subscribe((data:any)=>{
      this.user = data;
      this.userid = this.user.id;
      localStorage.setItem('userid',this.userid);
    })
    
  }

  onLogin() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.authService.login(email, password).subscribe(
      (response) => {
        // Assuming the response contains the token
        const token = response.token;
        this.authService.saveToken(token);
        const decodedToken = this.authService.decodeToken();
        const userRole = decodedToken.role;
        console.log(userRole[0].authority);

        localStorage.setItem('useremail', email);

        localStorage.setItem('userrole',userRole[0].authority );

        this.getsupplierdetails();

        // Redirect according to the role
        if (userRole[0].authority === 'ROLE_ADMIN') {
          this.router.navigate(['/admin']); // Replace '/admin' with your admin page route
        } else if (userRole[0].authority === 'ROLE_FARMER') {
          this.router.navigate(['/farmer']); // Replace '/farmer' with your farmer page route
        } else if (userRole[0].authority === 'ROLE_SUPPLIER') {
          this.router.navigate(['/supplier']); // Replace '/supplier' with your supplier page route
        }
      },
      (error) => {
        // this.errorMessage = 'Invalid email or password.';

        alert("invalid email or password");
        
        // return "invalid mail or password";
      }
    );
  }

 
}
