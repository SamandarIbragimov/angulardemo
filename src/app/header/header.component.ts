import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    title = "Hello";
    message = "Online Learning";
    display = false;

    onClick(){
        if(this.display){
            this.display = false;
        }
        else {
            this.display = true;
        }
    }
}
