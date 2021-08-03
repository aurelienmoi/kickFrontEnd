import { Component, OnInit } from '@angular/core';
import { Keyboard } from "@ionic-native/keyboard/ngx";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [Keyboard]
})
export class FooterComponent implements OnInit {

  footerMessage: string;
  isKeyboardHide: boolean
  constructor(public keyboard:Keyboard) {
    this.footerMessage = "© Kick 2019. Tous droits réservés.";
  }

  ngOnInit() { this.isKeyboardHide = true; }

  keyboardCheck() {
    this.keyboard.onKeyboardShow().subscribe(() => {
      this.isKeyboardHide = false;
      alert("Keyboard is showing ffs")
      

    });

    this.keyboard.onKeyboardHide().subscribe(() => {
      this.isKeyboardHide = true;

    })
  }
}