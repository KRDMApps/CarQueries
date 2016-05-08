import {Component, OnInit} from "angular2/core";
import {CORE_DIRECTIVES} from "angular2/src/common/directives/core_directives";
import {ApiService} from "./api.service";
import "../models";
//import {Column} from "./grid.component";

@Component({
    selector: "vehicles",
    templateUrl: "/partial/vehicles",
    providers: [ApiService],
    directives: CORE_DIRECTIVES
})

export class ApiComponent implements OnInit {
    isLoading: boolean = false;
    makes: carQueryModels.Make[];
    models: carQueryModels.Model[];
    years: carQueryModels.Year[];
    //details: carQueryModels.Style[];
    selectedMake: string = "0";
    selectedModel: string = "0";
    selectedYear: string = "0";
    //columns: any[];

    constructor(private service: ApiService) {
        //this.columns.push(new Column("name", "Name"));
        //this.columns.push(new Column("equipmentType", "Equipment Type"));
        //this.columns.push(new Column("compressionRatio", "Compression Ratio"));
        //this.columns.push(new Column("cylinder", "Cylinder"));
        //this.columns.push(new Column("size", "Size"));
        //this.columns.push(new Column("displacement", "Displacement"));
        //this.columns.push(new Column("configuration", "Configuration"));
        //this.columns.push(new Column("fuelType", "Fuel Type"));
        //this.columns.push(new Column("horsepower", "Horsepower"));
        //this.columns.push(new Column("torque", "Torque"));
        //this.columns.push(new Column("totalValves", "Total Valves"));
        //this.columns.push(new Column("manufacturerEngineCode", "Manufacturer Engine Code"));
        //this.columns.push(new Column("type", "Type"));
        //this.columns.push(new Column("code", "Code"));
        //this.columns.push(new Column("compressorType", "Compressor Type"));
        //this.columns.push(new Column("rpm", "Rpm"));
        //this.columns.push(new Column("valve", "Valve"));
    }

    onMakeSelect(selectedMake) {
        this.models = this.makes.filter((item) => item.name == selectedMake)[0].models;
    }

    onModelSelect(selectedModel) {
        this.years = this.models.filter((item) => item.name == selectedModel)[0].years;
    }

    ngOnInit() {
        this.getAllMakes();
    }

    getAllMakes() {
        this.isLoading = true;
        this.service.getAllMakes(json => {
            if (json) {
                this.makes = json.makes;
                this.isLoading = false;
            }
        });
    }

    getVehicleDetails() {
        this.isLoading = true;
        this.service.getVehicleDetails(json => {
            if (json) {
                //this.details = json.styles;
                this.isLoading = false;
            }
        });
    }
}