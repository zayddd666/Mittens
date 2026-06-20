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
---

<style>
/* --- HOMEPAGE LAYOUT --- */
@media (min-width: 960px) {
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

.VPHero .image::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;  
  height: 500px;
  background: radial-gradient(
    circle, 
    rgba(0, 240, 255, 0.75) 0%,   /* Bright Neon Cyan Core */
    rgba(0, 140, 255, 0.35) 45%,  /* Electric Blue Mid-glow */
    rgba(10, 35, 80, 0.1) 70%,    /* Deep Midnight Blue Blend */
    rgba(0, 0, 0, 0) 85%          /* Flawless alpha fade */
  );
  filter: blur(90px);              
  z-index: -1;
  pointer-events: none;
}

.VPHero .image-src {
  max-height: 360px !important;
  max-width: 360px !important;
  width: 100% !important;
  height: auto !important;
  z-index: 2;
  filter: drop-shadow(0 0 45px rgba(0, 210, 255, 0.3)); 
}
</style>