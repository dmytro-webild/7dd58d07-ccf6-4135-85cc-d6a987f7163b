"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="large"
        background="blurBottom"
        cardStyle="gradient-mesh"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Accueil",
          id: "hero",
        },
        {
          name: "À propos",
          id: "about",
        },
        {
          name: "Fonctionnalités",
          id: "features",
        },
        {
          name: "FAQ",
          id: "faq",
        },
      ]}
      brandName="TalkAvatar AI"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "sparkles-gradient",
      }}
      title="Donne vie à tes images en quelques secondes."
      description="Transforme n’importe quelle image en avatar parlant gratuitement avec TalkAvatar AI. Importe ta photo, ajoute ton texte, et laisse la magie opérer."
      buttons={[
        {
          text: "Commencer gratuitement",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/3d-rendering-holographic-layering_23-2150491111.jpg"
      imageAlt="Interface TalkAvatar AI"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/digital-art-ai-technology-background_23-2151719561.jpg",
          alt: "Digital art of ai technology background",
        },
        {
          src: "http://img.b2bpic.net/free-photo/rendering-bee-anime-character_23-2150963706.jpg",
          alt: "Rendering of bee anime character",
        },
        {
          src: "http://img.b2bpic.net/free-photo/face-recognition-personal-identification-collage_23-2150165593.jpg",
          alt: "Face recognition and personal identification collage",
        },
        {
          src: "http://img.b2bpic.net/free-photo/3d-rendering-online-avatar-design_23-2149699879.jpg",
          alt: "3d rendering of online avatar design",
        },
        {
          src: "http://img.b2bpic.net/free-photo/abstract-portrait-with-light-effects_23-2151118184.jpg",
          alt: "Abstract portrait with light effects",
        },
      ]}
      avatarText="Rejoint par plus de 5000 créateurs."
      marqueeItems={[
        {
          type: "text",
          text: "Synchronisation Labiale",
        },
        {
          type: "text",
          text: "IA Haute Performance",
        },
        {
          type: "text",
          text: "Export Ultra-Rapide",
        },
        {
          type: "text",
          text: "Compatible TikTok",
        },
        {
          type: "text",
          text: "Zéro Configuration",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Une technologie IA à la portée de tous"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      negativeCard={{
        items: [
          "Sans abonnement obligatoire",
          "100% gratuit",
          "Utilisation illimitée",
          "Aucune expertise requise",
          "Pas de watermark",
        ],
      }}
      positiveCard={{
        items: [
          "Synchronisation labiale automatique",
          "Export vidéo HD",
          "Sous-titres automatiques",
          "Voix IA naturelles",
          "Mise en forme intelligente",
        ],
      }}
      title="Fonctionnalités Puissantes"
      description="Découvre les outils qui rendent ton contenu viral instantanément."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Importe ta photo",
          price: "Étape 1",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-hands-holding-smartphone_23-2149711474.jpg",
        },
        {
          id: "2",
          name: "Ajoute ton texte/audio",
          price: "Étape 2",
          imageSrc: "http://img.b2bpic.net/free-photo/hand-holding-smartphone-with-abstract-wallpaper-coming-out-screen_23-2151033668.jpg",
        },
        {
          id: "3",
          name: "Sélectionne ta voix IA",
          price: "Étape 3",
          imageSrc: "http://img.b2bpic.net/free-photo/view-3d-videographer-with-camera_23-2151067068.jpg",
        },
        {
          id: "4",
          name: "Génère en un clic",
          price: "Étape 4",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-blurry-man-holding-smartphone_23-2148845386.jpg",
        },
        {
          id: "5",
          name: "Partage sur les réseaux",
          price: "Étape 5",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-people-avatars-zoom-call_23-2149576736.jpg",
        },
        {
          id: "6",
          name: "Obtiens des résultats pros",
          price: "Étape 6",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-character-emerging-from-smartphone_23-2151336538.jpg",
        },
      ]}
      title="Comment ça marche ?"
      description="En seulement quelques étapes simples, crée ton premier avatar parlant."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          handle: "@sarah_create",
          testimonial: "TalkAvatar AI a littéralement transformé ma stratégie de contenu.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-woman-posing-turtleneck-with-flower_23-2149020760.jpg",
        },
        {
          id: "2",
          name: "Marc L.",
          handle: "@marc_coach",
          testimonial: "Simple, gratuit et incroyablement rapide. Un indispensable.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-businessman-with-crossed-arms_23-2147955274.jpg",
        },
        {
          id: "3",
          name: "Julie D.",
          handle: "@julie_student",
          testimonial: "Idéal pour mes projets académiques et mes vidéos TikTok.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-joyful-woman-with-dark-curly-hair-sitting-table-happily-showing-fashion-illustrations-laptop-spending-time-modern-cozy-workshop-with-big-windows_574295-521.jpg",
        },
        {
          id: "4",
          name: "Thomas K.",
          handle: "@tom_tech",
          testimonial: "La qualité de synchronisation labiale est bluffante.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/business-entrepreneurship-marketing-plan-word_53876-15845.jpg",
        },
        {
          id: "5",
          name: "Sophie M.",
          handle: "@sophie_mark",
          testimonial: "Je recommande vivement cet outil pour tout entrepreneur.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/business-woman-walking-down-stairs-using-phone_1303-31362.jpg",
        },
      ]}
      showRating={true}
      title="Ce qu'en disent nos utilisateurs"
      description="Une solution plébiscitée par les créateurs."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "Est-ce vraiment gratuit ?",
          content: "Oui, TalkAvatar AI est entièrement gratuit.",
        },
        {
          id: "2",
          title: "Puis-je exporter en HD ?",
          content: "Oui, tous les exports se font en qualité HD.",
        },
        {
          id: "3",
          title: "Quels réseaux sont supportés ?",
          content: "TikTok, Instagram et YouTube Shorts sont optimisés.",
        },
        {
          id: "4",
          title: "Quelle est la limite de durée ?",
          content: "Chaque vidéo peut durer jusqu'à 30 secondes.",
        },
        {
          id: "5",
          title: "Mes données sont-elles privées ?",
          content: "Absolument, nous supprimons vos fichiers après traitement.",
        },
      ]}
      title="Questions fréquentes"
      description="Tout ce qu'il faut savoir sur TalkAvatar AI."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Démarrage"
      title="Donne vie à tes images dès maintenant."
      description="Inscris-toi pour recevoir nos conseils exclusifs sur la création de contenu."
      imageSrc="http://img.b2bpic.net/free-vector/background-abstract-pixel-rain_23-2148364591.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="TalkAvatar AI"
      columns={[
        {
          title: "Produit",
          items: [
            {
              label: "Fonctionnalités",
              href: "#features",
            },
            {
              label: "Tarifs",
              href: "#",
            },
          ],
        },
        {
          title: "Ressources",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Support",
              href: "#",
            },
          ],
        },
        {
          title: "Légal",
          items: [
            {
              label: "Mentions légales",
              href: "#",
            },
            {
              label: "Confidentialité",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
