import { Component,HostListener, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { CourasalComponent } from "../../components/courasal/courasal.component";
import { AboutComponent } from "../about/about.component";
import { WhyComponent } from '../../components/why/why.component';
import { AboutCComponent } from '../../components/about-c/about-c.component';
import { HistoryComponent } from "../../components/history/history.component";
import { ProjectComponent } from "../../components/project/project.component";
import { SkillsComponent } from '../../components/skills/skills.component'; // Adjust path as needed
import { NomobileComponent } from '../../components/nomobile/nomobile.component'; // Adjust path as needed


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    CourasalComponent, 
    AboutComponent, 
    WhyComponent, 
    AboutCComponent, 
    HistoryComponent, 
    ProjectComponent, 
    SkillsComponent,
    NomobileComponent
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {
  isDarkMode: boolean = false;
  isMobile = false;

ngOnInit() {
    if (typeof window !== 'undefined') {
        this.checkScreen();
        window.addEventListener('resize', this.checkScreen.bind(this));
    }
}


 @HostListener('window:resize')
  onResize() {
    this.checkScreen();
  }

checkScreen() {
    if (typeof window !== 'undefined') {
        if(window.innerWidth < 768) {
            this.isMobile = true;
            console.log('Mobile view');
            
        }else
        {
            this.isMobile = false;
            console.log('Desktop view');
        }
    }
}



 


}
