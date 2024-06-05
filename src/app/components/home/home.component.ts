import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { NewsletterFormComponent } from '../newsletter-form/newsletter-form.component';
import { BenefitComponent } from '../benefit/benefit.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from 'express';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NgOptimizedImage, BtnPrimaryComponent, NewsletterFormComponent, BenefitComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {



  public textoPrimeiraImg = " Experimente o alívio e relaxamento com nossas massagens profissionais. Nossos terapeutas qualificados oferecem sessões personalizadas para aliviar tensões, melhorar a circulação e promover bem-estar. Contrate nossos serviços e renove seu corpo e mente."

  public textoSegundaImg = "A massoterapia promove relaxamento, alivia o estresse e reduz dores musculares. Melhora a circulação, auxilia na recuperação de lesões e fortalece o sistema imunológico. Incorporá-la à rotina contribui para um estilo de vida mais saudável e equilibrado."

  redirectToWpp(){
    window.open('https://wa.me/5531998783777?text=Ol%C3%A1%21+Gostaria+de+um+atendimento+personalizado+da+master+recovery.', '_blank');
  }
}
