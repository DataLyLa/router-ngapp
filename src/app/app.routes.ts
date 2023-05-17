import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const ROUTES: Routes =[
     {path: '', component: UserProfileComponent},
     {path: 'user', component: UserProfileComponent},
     {path : 'home', component : HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'signup', component: SignUpComponent}
]

export {ROUTES};