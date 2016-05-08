import {Component, OnInit} from "@angular/core";
import {Route, Router, Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {Location} from "@angular/common";
import {StaticComponent} from "./components/static.component";
import {VehiclesComponent} from "./components/vehicles.component";
import {DealersComponent} from "./components/dealers.component";
import {InventoryComponent} from "./components/inventory.component";
import {EditorialsComponent} from "./components/editorials.component";
import {MediaComponent} from "./components/media.component";

declare var System: any;

@Component({
    selector: "app",
    templateUrl: "/app/app.html",
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
        { path: '/', component: StaticComponent },
        { path: '/vehicles', component: VehiclesComponent },
        { path: '/dealers', component: DealersComponent },
        { path: '/inventory', component: InventoryComponent },
        { path: '/editorials', component: EditorialsComponent },
        { path: '/media', component: MediaComponent }
])

export class AppComponent implements OnInit {
    constructor(private router: Router, private location: Location) { }

    ngOnInit() {
        this.router.navigate(['/']);
    }

    getLinkStyle(route: Route) {
        return this.location.path().indexOf(route.path) > -1;
    }
}