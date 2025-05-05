import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  sessionTimeout: boolean = false;
  timeoutDuration: number = 900000; // 15 minute in milliseconds
  timeoutTimer: any;

  ngOnInit(): void {
    this.startSessionTimer();
  }

  startSessionTimer() {
    if (this.timeoutTimer) {
      clearTimeout(this.timeoutTimer);
    }
    this.timeoutTimer = setTimeout(() => {
      this.showSessionTimeoutModal();
    }, this.timeoutDuration);
  }

  showSessionTimeoutModal() {
    this.sessionTimeout = true;
    this.freezePage();
  }
  freezePage() {
    document.body.style.pointerEvents = 'none';
  }

  @HostListener('document:mousemove')
  @HostListener('document:keydown')
  @HostListener('document:click')
  @HostListener('document:focusin')
  onUserActivity() {
    if (!this.sessionTimeout) {
      this.startSessionTimer();
    }
  }

  restartSession() {
    window.location.reload();
  }
}
