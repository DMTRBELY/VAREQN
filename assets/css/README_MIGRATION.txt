VAREQN CSS SPLIT — MIGRATION PACKAGE

Files:
- base.css: design tokens, reset, typography, global layout and accessibility
- header-footer.css: shared desktop header/navigation/buttons/footer styles
- home.css: home page sections
- portfolio.css: portfolio listing and filters
- project.css: individual portfolio project page
- services.css: services overview
- photography.css: photography service page
- video-production.css: video production service page
- creative-projects.css: creative projects service page
- social-media-content.css: social media content page
- about.css: about page
- contact.css: contact page

Important:
1. This package does NOT modify any HTML files.
2. Keep the original style.css as a backup until all pages have been checked.
3. The old, superseded first SOCIAL MEDIA CONTENT PAGE block was excluded.
   The later CORRECTED LAYOUT block is retained.
4. Shared responsive foundation rules (including mobile navigation and some
   home-page responsive rules) remain in base.css to preserve original behavior.
   Page-specific responsive rules stay with their page styles.
5. Add stylesheet links to each page in this order:
   base.css, header-footer.css, then that page's own CSS.
6. Use relative paths according to page depth:
   Home: ./assets/css/
   Portfolio/Services/About/Contact: ../assets/css/
   Nested service pages and project detail: ../../assets/css/
7. Do not delete the original style.css until the migration and visual QA pass.
