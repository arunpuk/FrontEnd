import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ActiveQuotationsComponent } from './components/active-quotations/active-quotations.component';
import { CustomerDashboardComponent } from "./components/customer/customer-dashboard/customer-dashboard.component";

const appRoutes: Routes = [
    {path: 'Home' , component: ActiveQuotationsComponent},
    {path: 'Customer' , component: CustomerDashboardComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }