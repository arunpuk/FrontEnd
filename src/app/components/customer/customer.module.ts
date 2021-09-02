import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared.module";

import { CustomerDetailComponent } from "./customer-detail/customer-detail.component";
import { CustomerAddComponent } from "./customer-add/customer-add.component";
import { CustomerDashboardComponent } from "./customer-dashboard/customer-dashboard.component";

@NgModule({
    declarations: [
        CustomerDetailComponent,
        CustomerAddComponent,
        CustomerDashboardComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        CustomerDetailComponent,
        CustomerAddComponent,
        CustomerDashboardComponent
    ]
})

export class CustomerModule { }