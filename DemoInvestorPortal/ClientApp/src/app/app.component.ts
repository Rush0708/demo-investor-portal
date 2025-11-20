import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  sessionTimeout: boolean = false;
  sessionTimeoutWarning: boolean = false;
  countdownDisplay: string = '';
  warningTimer: any;
  sessionTimer: any;
  countdownInterval: any;

  countdownSeconds: number = 300; 
  sessionDuration: number = 20 * 60 * 1000;
  warningDuration: number = 15 * 60 * 1000;

  ngOnInit(): void {
    this.startSessionTimers();
  }

  startSessionTimers() {
    this.clearAllTimers();

    // Trigger final expiration
    this.sessionTimer = setTimeout(() => {
      this.handleSessionExpired();
    }, this.sessionDuration);

    // Trigger warning
    this.warningTimer = setTimeout(() => {
      this.startCountdown();
    }, this.warningDuration);
  }

  startCountdown() {
    this.sessionTimeoutWarning = true;
    this.updateCountdownDisplay();

    this.countdownInterval = setInterval(() => {
      this.countdownSeconds--;
      this.updateCountdownDisplay();

      if (this.countdownSeconds <= 0) {
        clearInterval(this.countdownInterval);
        this.handleSessionExpired();
      }
    }, 1000);
  }

  updateCountdownDisplay() {
    if (this.countdownSeconds > 0) {
      const minutes = Math.floor(this.countdownSeconds / 60);
      const seconds = this.countdownSeconds % 60;
      this.countdownDisplay = `${minutes}m:${seconds < 10 ? '0' : ''}${seconds}s remaining`;
    } else {
      this.countdownDisplay = 'Your session has expired due to inactivity. You will be redirected to the first page to restart the process.';
    }
  }

  @HostListener('document:mousemove')
  @HostListener('document:keydown')
  @HostListener('document:click')
  @HostListener('document:focusin')
  onUserActivity() {
    if (!this.sessionTimeout) {
      this.countdownSeconds = 300;
      this.sessionTimeoutWarning = false;
      this.startSessionTimers();
    }
  }

  handleSessionExpired() {
    this.clearAllTimers();
    this.sessionTimeoutWarning = false;
    this.sessionTimeout = true;
    this.countdownDisplay = 'Your session has expired due to inactivity. You will be redirected to the first page to restart the process.';
    document.body.style.pointerEvents = 'none';

    setTimeout(() => {
      window.location.reload();
    }, 10000);
  }

  clearAllTimers() {
    clearTimeout(this.sessionTimer);
    clearTimeout(this.warningTimer);
    clearInterval(this.countdownInterval);
  }
}
