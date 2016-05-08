import "rxjs/Rx"
import {Http} from "angular2/http";
import {Injectable} from "angular2/core";

@Injectable()
export class ApiService {
    constructor(private http: Http) { }

    get(onNext: (json: any) => void) {
        this.http.get("api/EdmundsAPI/GetAllMakes").map(response => response.json()).subscribe(onNext);
    }
    getAllMakes(onNext: (json: any) => void) {
        this.http.get("api/EdmundsAPI/GetAllMakes").map(response => response.json()).subscribe(onNext);
    }
    getVehicleDetails(onNext: (json: any) => void) {
        this.http.get("api/EdmundsAPI/GetVehicleDetails").map(response => response.json()).subscribe(onNext);
    }
}