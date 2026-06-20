---
layout: home
hero:
  name: ShellUI
  text: UI Framework
  tagline: A clean custom UI framework for Roblox.
  image:
    src: /logo.png
    alt: ShellUI Logo
  actions:
    - theme: brand
      text: Getting Started
      link: /getting-started
    - theme: alt
features:
    - title: Easy to use
      details: Functions simple, you only need one LocalScript for it!
    - title: Powerful
      details: Uses the mosd advanced and powerful luau functions and types!
    - title: Modular
      details: uses a module so it provides the easiest requirements to use!
---

<style>
/* --- HOMEPAGE LAYOUT --- */
@media (min-width: 1700px) {
  .VPHero .container {
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    justify-content: space-between !important;
  }
  
  .VPHero .main {
    flex: 1 !important;
    text-align: left !important;
    padding-right: 40px !important;
  }

  .VPHero .image {
    flex: 1 !important;
    display: flex !important;
    justify-content: center !important;
  }
}

/* --- ULTRA-SMOOTH BLUE CYBER GLOW EFFECT --- */
.VPHero .image {
  position: relative;
}

/* Expanded to 650px to fit perfectly behind the larger logo asset */
.VPHero .image::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 650px;  
  height: 650px;
  background: radial-gradient(
    circle, 
    rgba(0, 240, 255, 0.75) 0%,   /* Bright Neon Cyan Core */
    rgba(0, 140, 255, 0.35) 45%,  /* Electric Blue Mid-glow */
    rgba(10, 35, 80, 0.1) 70%,    /* Deep Midnight Blue Blend */
    rgba(0, 0, 0, 0) 85%          /* Flawless alpha fade */
  );
  filter: blur(100px);              
  z-index: -1;
  pointer-events: none;
}

/* --- LOGO SIZE BOOST --- */
.VPHero .image-src {
  /* Cranked up from 360px to 520px for a prominent look */
  max-height: 520px !important; 
  max-width: 520px !important;  
  width: 100% !important;
  height: auto !important;
  z-index: 2;
  filter: drop-shadow(0 0 55px rgba(0, 210, 255, 0.35)); 
}
</style>