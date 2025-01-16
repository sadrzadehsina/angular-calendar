import { Component, Input } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./app-header.component.html",
  styleUrl: "./app-header.component.css"
})
export class AppHeader {

  @Input() title: string = '';

}