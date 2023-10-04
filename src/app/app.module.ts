import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';




import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
// import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthService } from './auth.service';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './auth.guard';
import { SupplierDashboardComponent } from './supplier-dashboard/supplier-dashboard.component';
import { FarmerDashboardComponent } from './farmer-dashboard/farmer-dashboard.component';
import { LoginComponent } from './login/login.component';
import { ViewComplaintComponent } from './view-complaint/view-complaint.component';
import { UpdateComplaintComponent } from './update-complaint/update-complaint.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ProfileeditComponent } from './profileedit/profileedit.component';
import { ComplaintService } from './complaint.service';
import { AddAdvertisementComponent } from './add-advertisement/add-advertisement.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { TestComponent } from './test/test.component';
import { ViewAdvertisementsComponent } from './view-advertisements/view-advertisements.component';
import { ViewAllAdvertisementsComponent } from './view-all-advertisements/view-all-advertisements.component';
import { OrderComponent } from './order/order.component';
import { AddcomplaintComponent } from './addcomplaint/addcomplaint.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CartStatusComponent } from './cart-status/cart-status.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';

// import { MyproductsComponent } from './myproducts/myproducts.component';


// import { AuthInterceptor } from './auth.interceptor';
// import { AppRoutingModule } from './app.module';
// import { AuthGuard } from './auth.guard';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test', component: TestComponent},
  { path: 'cart-details', component: CartDetailsComponent},
  { path: 'addproduct', component: AddproductComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'add-complaint', component: AddcomplaintComponent},
  { path: 'addadvertisement', component: AddAdvertisementComponent},
  { path: 'view-advertisements', component: ViewAdvertisementsComponent},
  { path: 'allAdvertisements', component: ViewAllAdvertisementsComponent},
  { path: 'order', component: OrderComponent},
  { path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard], data : {role: 'ROLE_ADMIN'} },
  { path: 'farmer', component: FarmerDashboardComponent, canActivate: [AuthGuard], data : {role: 'ROLE_FARMER'} },
  { path: 'supplier', component: SupplierDashboardComponent, canActivate: [AuthGuard], data : {role: 'ROLE_SUPPLIER'} },
  { path: 'view-complaint', component: ViewComplaintComponent, canActivate: [AuthGuard], data : {role: 'ROLE_ADMIN'} },
  { path: 'update-complaint', component: UpdateComplaintComponent, canActivate: [AuthGuard], data : {role: 'ROLE_ADMIN'} },
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
 
  { path: 'add-advertisement', component: AddAdvertisementComponent, canActivate: [AuthGuard], data : {role: 'ROLE_SUPPLIER'} },

  {path: 'edit-profile', component: EditprofileComponent},
  {path: 'edit-profile2', component: ProfileeditComponent},
  { path: '**', redirectTo: '/login' },
  // { path: 'view-complaint/:id', component: ViewComplaintComponent },
  // { path: 'update-complaint', component: UpdateComplaintComponent, canActivate: [AuthGuard], data : {role: 'ROLE_ADMIN'} },
];

@NgModule({
  declarations: [
   AppComponent,
   SignupComponent,
   LoginComponent,
   HomeComponent,
   FooterComponent,
   NavbarComponent,
   AboutUsComponent,
   AdminDashboardComponent,
   SupplierDashboardComponent,
   FarmerDashboardComponent,
   ViewComplaintComponent,
   UpdateComplaintComponent,
   EditprofileComponent,
   ProfileeditComponent,
   AddAdvertisementComponent,
   AddproductComponent,
   TestComponent,
   ViewAdvertisementsComponent,
   ViewAllAdvertisementsComponent,
   OrderComponent,
   AddcomplaintComponent,
   ContactUsComponent,
   CartStatusComponent,
   CartDetailsComponent,

   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),

     // Add ReactiveFormsModule to the imports array
  ],

  exports: [RouterModule],

  providers: [

    ComplaintService,
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }



