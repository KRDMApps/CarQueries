﻿import {Component, OnInit} from "@angular/core";
import {ApiService} from "./api.service";

@Component({
    selector: "media",
    templateUrl: "/partial/media",
    providers: [ApiService]
})
export class MediaComponent implements OnInit {
    apiOccurances: number = 0;
    data: number[];
    isLoading: boolean = false;

    constructor(private service: ApiService) { }

    ngOnInit() {
        this.get();
    }

    get() {
        this.isLoading = true;
        this.service.get(json => {
            if (json) {
                this.data = json.numbers;
                this.isLoading = false;
                this.apiOccurances++;
            }
        });
    }
}