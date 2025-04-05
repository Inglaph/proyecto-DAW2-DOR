import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectFocusComponent } from './components/project-focus/project-focus.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
    CommonModule,
    HeroComponent,
    ProjectFocusComponent,
    CalculatorComponent,
    ContactInfoComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
