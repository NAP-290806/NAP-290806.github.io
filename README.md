# Naufal Abiyyu Permana, portfolio

Live site: https://nap-290806.github.io/

A static, single-page portfolio with a liquid glass 3D scene over black batik.

- Three.js for the glass (MeshPhysicalMaterial with transmission, simplex noise vertex displacement)
- GSAP for scroll and spring-style motion
- Tailwind CSS v4 for styling
- Fonts: Fraunces and Geist (SIL Open Font License)
- Intro sound: an original cue synthesized in the browser with the Web Audio API (no audio files, no third-party music)
- Backsound: an original piece for piano and strings (D major, 68 BPM) written for this site and rendered offline (music/backsound.py in the source) with the Versilian Studios Chamber Orchestra 2 Community Edition samples (CC0 1.0); it plays only after "Enter with sound", loops without a seam, and stops when the sound is muted or the tab is hidden
- Entry screen: a silver frame of leaves, vines and curls built as real 3D geometry (src/frame.js); while the portfolio loads the frame turns and comes closer, and at 100% the camera passes through it
- Batik: five original motifs generated as SVG by src/batik.mjs (Mega Mendung on the entry screen, Garuda wings and lotus in the hero, then Kawung, Parang and Truntum section by section), over a gringsing ground, lit as a relief in the 3D scene

The files here are the built site, served as they are by GitHub Pages. To change a sentence, edit index.html. The detail panels of the research cards live in the template elements near the middle of that file.

Author: Naufal Abiyyu Permana
