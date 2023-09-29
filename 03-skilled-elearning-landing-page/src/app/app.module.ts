import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './atoms/button/button.component';
import { HeaderComponent } from './molecules/header/header.component';
import { ParagraphComponent } from './atoms/paragraph/paragraph.component';
import { SimpleCardComponent } from './molecules/simple-card/simple-card.component';
import { SkillsCardComponent } from './molecules/skills-card/skills-card.component';
import { ContainerBlocksComponent } from './organisms/container-blocks/container-blocks.component';
import { FooterComponent } from './molecules/footer/footer.component';
import { UpperSectionMobileComponent } from './organisms/upper-section-mobile/upper-section-mobile.component';
import { UpperSectionTabletComponent } from './organisms/upper-section-tablet/upper-section-tablet.component';
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeaderComponent,
    ParagraphComponent,
    SimpleCardComponent,
    SkillsCardComponent,
    ContainerBlocksComponent,
    FooterComponent,
    UpperSectionMobileComponent,
    UpperSectionTabletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
