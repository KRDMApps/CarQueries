import {Component, OnInit} from "angular2/core";
import {AsyncRoute, Router, RouteDefinition, RouteConfig, Location, ROUTER_DIRECTIVES} from "angular2/router";
import {StaticComponent} from "./components/static.component";

declare var System: any;

@Component({
    selector: "app",
    templateUrl: "/app/app.html",
    directives: [ROUTER_DIRECTIVES]
})

export class AppComponent implements OnInit {
    public routes: RouteDefinition[] = null;
    constructor(private router: Router,
        private location: Location) {

    }

    ngOnInit() {
        if (this.routes === null) {
            this.routes = [
                { path: "/index", component: StaticComponent, name: "Index", useAsDefault: true },
                new AsyncRoute({
                    path: "/vehicles",
                    name: "Vehicles",
                    loader: () => System.import("app/components/vehicles.component").then(c => c["ApiComponent"])
                }),
                new AsyncRoute({
                    path: "/dealers",
                    name: "Dealers",
                    loader: () => System.import("app/components/dealers.component").then(c => c["ApiComponent"])
                }),
                new AsyncRoute({
                    path: "/inventory",
                    name: "Inventory",
                    loader: () => System.import("app/components/inventory.component").then(c => c["ApiComponent"])
                }),
                new AsyncRoute({
                    path: "/editorials",
                    name: "Editorials",
                    loader: () => System.import("app/components/editorials.component").then(c => c["ApiComponent"])
                }),
                new AsyncRoute({
                    path: "/media",
                    name: "Media",
                    loader: () => System.import("app/components/media.component").then(c => c["ApiComponent"])
                })
            ];

            this.router.config(this.routes);
        }
    }

    getLinkStyle(route: RouteDefinition) {
        return this.location.path().indexOf(route.path) > -1;
    }
}