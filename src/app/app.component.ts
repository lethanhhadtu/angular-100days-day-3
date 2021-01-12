import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  //DATA BINDING
  //EVENT BINDING
  user = {
    name: "Ha",
    age: 23
  };
  handler() {
    console.log("clicked");
  }
}
