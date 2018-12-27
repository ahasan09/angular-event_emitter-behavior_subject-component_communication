import { Component, OnInit } from "@angular/core";
import { CommunicationService } from "../communication.service";

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    counter: number = 0;
    subscribeCounter: number = 0;
    parentData = '';
    public childData:string;

    constructor(private comService: CommunicationService) {
    }

    ngOnInit(): void {
        this.comService.increaseCountEvent.subscribe((resposne: boolean) => {
            if (resposne)
                this.counter++;
        });

        this.comService.decreaseCountEvent.subscribe((resposne: boolean) => {
            if (resposne)
                this.counter--;
        });

        this.comService.currentCounter.subscribe((response: number) => {
            this.subscribeCounter = response;
        });
    }

    parentEvent() {
        this.parentData = 'Data pass from Parent ' + Math.floor(Math.random() * 10);
    }
}