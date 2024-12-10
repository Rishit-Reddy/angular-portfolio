import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  dynamicText: string = 'Full-Stack Developer';

  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/resume.pdf'; 
    link.download = 'Rishit_Reddy_Palle_Resume.pdf'; 
    link.click();
  }

}
