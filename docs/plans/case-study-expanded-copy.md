# Expanded case-study copy (draft for review)

Drafted 2026-07-21 as part of the SEO work: each case study grows from ~190 words without headings to ~450-550 words structured in h2 sections, FR and EN. Every fact comes from the existing published copy; nothing is invented. Metrics I could not verify are marked `[À CONFIRMER: ...]` and should be filled or the sentence dropped.

Implementation once approved: add a `sections: [{heading, body}]` array to the CaseStudy data model, render as h2 + paragraph blocks between the intro and the screenshots, and add the strings as `case_X_section_N_heading/body` messages in fr.json/en.json.

---

## Afida (FR)

**Intro (remplace la description actuelle, plus courte):**
Plateforme e-commerce B2B sur mesure pour Afida, marque britannique d'emballage éco-responsable. Construite et opérée de bout en bout par une seule personne, du schéma Postgres au flux Google Merchant.

### Le contexte
Afida fournit de l'emballage alimentaire éco-responsable à des professionnels de l'hôtellerie-restauration au Royaume-Uni. Sa clientèle commande en volume, revient à intervalles réguliers, et attend d'un fournisseur B2B ce qu'elle connaît du B2C : un site rapide, un paiement sans friction, un compte qui se souvient de tout.

### Le problème
Les plateformes e-commerce génériques modélisent mal le B2B. Les prix par paliers de quantité, la TVA britannique selon le type de produit, les commandes récurrentes et la personnalisation d'emballage à la marque du client rentrent difficilement dans un thème Shopify. Chaque contournement ajoute une extension, chaque extension ajoute de la lenteur et une dépendance de plus.

### La solution
Une application Rails 8 sur mesure, où chaque particularité du métier est du code que je contrôle plutôt qu'une extension que je subis. Le paiement passe par Stripe Checkout : pages de paiement hébergées, trois options d'expédition, TVA UK calculée automatiquement. Les clients réguliers programment des recommandes : la commande se prépare seule, avec une fenêtre de validation avant tout débit. Un configurateur de produits marqués gère l'upload de design et les paliers de quantité. La demande d'échantillons gratuits alimente la captation de leads. Et un flux Google Merchant XML expose le catalogue à Google Shopping en continu.

### La stack
Rails 8, Hotwire pour l'interactivité sans lourdeur JavaScript, Postgres, Stripe. Une seule application, un seul déploiement, pas de microservices à orchestrer : la taille de la stack correspond à la taille de l'équipe qui l'opère.

### Les résultats
La plateforme est utilisée quotidiennement par plus de 500 entreprises britanniques de l'hôtellerie-restauration, dont Mandarin Oriental, Marriott et Hawksmoor. Le site, le SEO, l'e-mail et l'analytics sont opérés par la même personne qui a écrit le code : quand quelque chose doit évoluer, il n'y a personne à convaincre entre la demande et la mise en production.

## Afida (EN)

**Intro:**
Custom B2B e-commerce platform for Afida, a British eco-responsible packaging brand. Built and operated end to end by one person, from the Postgres schema to the Google Merchant feed.

### Context
Afida supplies eco-responsible food packaging to hospitality businesses across the UK. Its customers order in volume, come back at regular intervals, and expect from a B2B supplier what they know from B2C: a fast site, frictionless payment, an account that remembers everything.

### The problem
Generic e-commerce platforms model B2B poorly. Quantity-tier pricing, UK VAT rules that vary by product type, recurring orders and client-branded packaging don't fit comfortably in a Shopify theme. Every workaround adds a plugin, and every plugin adds slowness and one more dependency.

### The solution
A custom Rails 8 application, where every business rule is code I control rather than a plugin I endure. Payments run through Stripe Checkout: hosted payment pages, three shipping options, UK VAT calculated automatically. Regular customers schedule reorders: the order prepares itself, with a validation window before any charge. A branded-product configurator handles design upload and quantity tiers. A free sample request feeds lead capture. And a Google Merchant XML feed keeps the catalogue continuously exposed to Google Shopping.

### The stack
Rails 8, Hotwire for interactivity without JavaScript weight, Postgres, Stripe. One application, one deployment, no microservices to orchestrate: the stack is sized to the team that runs it.

### Results
The platform is used daily by more than 500 British hospitality businesses, including Mandarin Oriental, Marriott and Hawksmoor. The site, SEO, email and analytics are operated by the same person who wrote the code: when something needs to change, there is nobody to convince between the request and production.

---

## Agence de la Gare (FR)

**Intro:**
Site multilingue sur mesure pour l'une des agences immobilières pionnières de Monaco, fondée en 1942 et membre de la Chambre Immobilière Monégasque.

### Le contexte
L'Agence de la Gare vend et loue de l'immobilier monégasque à une clientèle internationale. Une clientèle qui arrive en neuf langues, compare en plusieurs devises, et attend des brochures propres à transmettre. Le portefeuille de biens, lui, vit dans Immotoolbox, l'outil métier de l'agence.

### Le problème
Un site immobilier multilingue échoue généralement sur deux points. D'abord la traduction : traduire l'interface ne suffit pas, il faut des routes traduites pour que chaque langue soit indexée proprement par les moteurs de recherche. Ensuite la synchronisation : si le site ne reflète pas l'outil métier automatiquement, quelqu'un ressaisit les biens à la main, et le site finit par mentir.

### La solution
Une application Rails 8 dont l'i18n couvre neuf langues (FR, EN, IT, DE, SV, NO, DA, FI, RU) avec routes traduites : chaque bien a une URL propre dans chaque langue. Les quartiers, immeubles et biens se synchronisent chaque jour depuis l'API Immotoolbox, orchestrés par Solid Queue : personne ne ressaisit rien. Chaque bien génère sa brochure PDF, rendue avec Typst, prête à envoyer à un client. Les prix s'affichent en plusieurs devises, adossés à une mise à jour quotidienne des taux de la BCE, et la chaîne YouTube de l'agence alimente le site en continu.

### La stack
Rails 8, Hotwire, Postgres, Solid Queue pour les tâches de fond, Typst pour le rendu PDF, déploiement avec Kamal. Pas de CMS à maintenir à côté : le site est l'application.

### Les résultats
L'agence publie une fois, dans son outil métier, et le site suit : neuf langues, brochures et devises comprises. Une agence fondée en 1942 avec une présence web que ses concurrentes récentes n'ont pas.

## Agence de la Gare (EN)

**Intro:**
Custom multilingual site for one of Monaco's pioneering real estate agencies, founded in 1942 and a member of the Chambre Immobilière Monégasque.

### Context
Agence de la Gare sells and rents Monaco real estate to an international clientele. A clientele that arrives in nine languages, compares in several currencies, and expects clean brochures it can forward. The property portfolio, meanwhile, lives in Immotoolbox, the agency's line-of-business tool.

### The problem
Multilingual real estate sites usually fail on two points. First, translation: translating the interface is not enough, you need translated routes so each language gets indexed properly by search engines. Second, synchronisation: if the site doesn't mirror the business tool automatically, someone re-enters listings by hand, and the site ends up lying.

### The solution
A Rails 8 application whose i18n covers nine languages (FR, EN, IT, DE, SV, NO, DA, FI, RU) with translated routes: every property has a proper URL in every language. Districts, buildings and properties sync daily from the Immotoolbox API, orchestrated by Solid Queue: nobody re-enters anything. Every property generates its own PDF brochure, rendered with Typst, ready to send to a client. Prices display in multiple currencies backed by daily ECB rate updates, and the agency's YouTube channel feeds the site continuously.

### The stack
Rails 8, Hotwire, Postgres, Solid Queue for background jobs, Typst for PDF rendering, deployed with Kamal. No CMS to maintain on the side: the site is the application.

### Results
The agency publishes once, in its own tool, and the site follows: nine languages, brochures and currencies included. An agency founded in 1942 with a web presence its younger competitors don't have.

---

## Maison de Bacon (FR)

**Intro:**
Refonte visuelle et remédiation de performance pour une institution gastronomique face à la mer au Cap d'Antibes, ouverte depuis 1948.

### Le contexte
La Maison de Bacon est une table emblématique de la Côte d'Azur. Son site WordPress bilingue FR / EN portait des années d'ajouts successifs : une identité visuelle datée, un menu devenu illisible, et une accumulation d'extensions qui pesait sur chaque chargement de page.

### Le problème
Pour un restaurant de cette réputation, le site est la première salle à manger : c'est là que le client décide de réserver. Un site lent et daté coûte des réservations, silencieusement. Et sur WordPress, la lenteur a presque toujours la même cause : trop d'extensions, un cache mal réglé, des images trop lourdes.

### La solution
Côté design, une refonte complète sous Elementor : page d'accueil repensée, identité terracotta dédiée pour le Roof Top, mega-menu restructuré pour redevenir lisible, avis vérifiés Zenchef intégrés, et un bouton de réservation fixe présent sur chaque page, en français comme en anglais. Côté performance, un audit puis sa remédiation : le parc d'extensions est passé de 41 à 17, le cache WP Rocket a été remis d'aplomb, et les images sont désormais compressées et converties en WebP automatiquement à l'upload.

### La stack
WordPress, Elementor, WP Rocket, Zenchef. Pas de refonte technique imposée : le client garde l'outil que son équipe sait utiliser, débarrassé de ce qui le ralentissait.

### Les résultats
Un site qui ressemble enfin à la maison qu'il représente, avec la réservation à portée de main sur chaque page. [À CONFIRMER : gain mesuré de performance, par exemple score PageSpeed ou temps de chargement avant / après l'intervention.]

## Maison de Bacon (EN)

**Intro:**
Visual redesign and performance remediation for a seafront gastronomic institution at Cap d'Antibes, open since 1948.

### Context
Maison de Bacon is an emblematic table of the French Riviera. Its bilingual FR / EN WordPress site carried years of successive additions: a dated visual identity, a menu that had become unreadable, and an accumulation of plugins weighing on every page load.

### The problem
For a restaurant of this reputation, the website is the first dining room: it's where the guest decides to book. A slow, dated site costs reservations, silently. And on WordPress, slowness almost always has the same cause: too many plugins, a misconfigured cache, oversized images.

### The solution
On the design side, a complete redesign in Elementor: a rethought homepage, a dedicated terracotta identity for the Roof Top, a restructured mega-menu that reads clearly again, verified Zenchef reviews, and a fixed booking button present on every page, in French and in English. On the performance side, an audit followed by its remediation: the plugin count went from 41 to 17, the WP Rocket cache was set right, and images are now compressed and converted to WebP automatically on upload.

### The stack
WordPress, Elementor, WP Rocket, Zenchef. No forced technical rebuild: the client keeps the tool their team knows how to use, stripped of what was slowing it down.

### Results
A site that finally looks like the house it represents, with booking within reach on every page. [TO CONFIRM: measured performance gain, e.g. PageSpeed score or load time before / after.]

---

## Christian Curau Architecte (FR)

**Intro:**
Deux livrables pour un cabinet d'architecture monégasque fondé en 1984, Conservateur du Palais Princier : un portfolio éditorial et un outil de partage de fichiers sur mesure.

### Le contexte
Un cabinet d'architecture vit de deux choses que le numérique sert mal par défaut : montrer son travail avec justesse, et échanger des fichiers CAO volumineux avec ses partenaires. Le cabinet avait besoin des deux, sans complexité superflue.

### Le site
Un portfolio éditorial Rails volontairement sobre, centré sur les pages projets. La typographie fait le gros du travail ; les images respirent. L'ordre d'affichage en page d'accueil est curé plutôt que chronologique : le cabinet choisit ce qu'il met en avant, comme on compose une exposition.

### CCA-FTP
Le second livrable est un outil interne : CCA-FTP, un client FTP/FTPS accessible depuis n'importe quel navigateur, construit pour partager des fichiers CAO volumineux en sécurité sans installer de logiciel. Sa particularité : il est sans état. Pas de base de données à sauvegarder ni à fuiter ; les sessions vivent dans un cookie chiffré, le protocole se sélectionne automatiquement selon l'identifiant, les noms de fichiers sont sanitisés, et un CAPTCHA invisible bloque l'abus automatisé. Moins il y a de pièces, moins il y a de surface d'attaque et de maintenance.

### La stack
Rails 8 pour les deux applications, déployées avec Kamal. Deux apps distinctes, chacune réduite à son essentiel.

### Les résultats
Le cabinet montre son travail comme il l'entend et échange ses fichiers sans dépendre d'un service tiers ni d'un logiciel desktop. Deux outils précis, à la taille exacte du besoin, opérés par la personne qui les a construits.

## Christian Curau Architecte (EN)

**Intro:**
Two deliverables for a Monaco architecture firm founded in 1984, Conservator of the Prince's Palace: an editorial portfolio and a custom file-sharing tool.

### Context
An architecture firm lives off two things that digital tools serve poorly by default: showing its work faithfully, and exchanging large CAD files with its partners. The firm needed both, without superfluous complexity.

### The site
A deliberately restrained Rails editorial portfolio, centred on project pages. Typography does the heavy lifting; the images breathe. The homepage display order is curated rather than chronological: the firm chooses what to put forward, the way one composes an exhibition.

### CCA-FTP
The second deliverable is an internal tool: CCA-FTP, an FTP/FTPS client accessible from any browser, built to share large CAD files securely without installing software. Its distinctive trait: it is stateless. No database to back up or leak; sessions live in an encrypted cookie, the protocol is auto-selected from the identifier, filenames are sanitised, and an invisible CAPTCHA blocks automated abuse. Fewer moving parts means less attack surface and less maintenance.

### The stack
Rails 8 for both applications, deployed with Kamal. Two distinct apps, each reduced to its essentials.

### Results
The firm shows its work the way it intends and exchanges files without depending on a third-party service or desktop software. Two precise tools, sized exactly to the need, operated by the person who built them.
