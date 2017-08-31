import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="Angular Medellín" class="action-bar"></ActionBar>
    <!-- Your UI components go here -->
    <Image src="~/images/ng-mde-log.png"></Image>
  `,
  styles: [`
    @keyframes spin {
      from { transform: rotate(0); } to { transform: rotate(360); }
    }
    Image {
      animation-name: spin; animation-duration: 3s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  `]
})
export class AppComponent {
  // Your TypeScript logic goes here
}
