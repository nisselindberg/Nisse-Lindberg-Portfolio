import { Project } from './types';

// ==========================================
// SWEDISH CONTENT (Original)
// ==========================================

const PROJECTS_SV: Project[] = [
  {
    id: 'social-media',
    title: 'Closely',
    category: '2025 Skolprojekt',
    thumbnail: 'https://framerusercontent.com/images/B1h2NDnRM2OfZBOneHsfo08dwy4.png',
    summary: 'Insikter: Integritet, Modernt Flöde, Allt-i-ett.',
    role: 'UX/UI Designer',
    timeline: '2025',
    tools: ['Figma', 'Prototyping', 'Workshops'],
    challenge: 'Målet var att skapa en ny typ av social media anpassad för framtiden genom insikter från workshops. Vi ville komma bort från splittringen i dagens appar och skapa en mer samlad upplevelse.',
    solution: 'Vi tog fram "Closely" – en app där man når sina nära vänner enklare. Designen möjliggör att filtrera flödet smidigt mellan nära vänner, alla vänner eller att utforska fritt.',
    impact: 'En positiv och spännande "allt-i-ett"-upplevelse som känns mer personlig. Ett koncept som har potential att bli en extraordinär produkt.',
    contentBlocks: [
      {
        type: 'external-link',
        title: 'App Demo',
        content: 'https://www.youtube.com/watch?v=PU0mKxYjzQ8',
        caption: 'En genomgång av konceptet och funktionerna i Closely på YouTube.'
      },
      {
        type: 'web',
        title: 'Live Applikation',
        content: 'https://closely-friends-feed.lovable.app',
        caption: 'Klicka runt i den levande appen direkt här i webbläsaren. Byggd med Lovable.'
      },
      {
        type: 'text',
        title: 'Funktionalitet & Design',
        content: 'Med Closely ville vi skapa en stilren och enkel design. Kärnan i upplevelsen är ett flöde med möjlighet att filtrera innehållet. Användaren kan välja att se sina "Nära vänner", "Alla vänner" eller "Utforska" fritt. Målet är att ge en positiv och spännande upplevelse med allt samlat på ett ställe, men som ändå kan vara djupt personligt om man vill.'
      },
      {
        type: 'image',
        content: 'https://framerusercontent.com/images/B1h2NDnRM2OfZBOneHsfo08dwy4.png',
        caption: 'Huvudvyn för sociala flödet'
      },
      {
        type: 'text',
        title: 'Process & Research',
        content: 'Arbetet inleddes med omfattande research. Vi använde internet för att hitta relevanta undersökningar, case studies och statistik som var matnyttig för oss.\n\nDärefter skapade vi en workshop med 10 deltagare. Utifrån insikterna vi fick där byggde vi prototypen. Testerna genomfördes sedan på användare i vårt eget team, då målgruppskännedomen och domänkunskapen var stark i gruppen.'
      },
      {
        type: 'text',
        title: 'Reflektion & Analys',
        content: 'Utifrån förutsättningarna har vi gjort ett starkt arbete, men det finns lärdomar. Vi borde ha haft en dedikerad moderator på vår workshop och hunnit testa upplägget mer innan skarpt läge. Med mer tid hade vi också velat göra djupare research via enkäter och intervjuer.\n\nDet finns mycket arbete kvar för att bygga klart Closely helt, men baserat på de insikter vi fått tror jag att det skulle kunna bli en extraordinär produkt.'
      }
    ]
  },
  {
    id: 'kladbutiken',
    title: 'Klädbutiken',
    category: 'E-commerce / Hållbarhet',
    thumbnail: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
    summary: 'Hållbarhet & Miljö. Insikter: 88 % returnerar kläderna de köpt på nätet.',
    role: 'UX Designer',
    timeline: '2024',
    tools: ['Figma', 'Miro', 'Dovetail', 'Procreate'],
    challenge: '”Klädbutiken har blivit kraftigt kritiserade för allt svinn deras e-handel medför. Alla kläder som skickas tillbaka går inte att ta emot i retur och hamnar i stället på soptippen.” Uppdraget var att undersöka konsumentbeteenden för att minska svinn.',
    solution: 'Vi har skapat en prototyp för att få bukt med problemen. Genom att människor direkt kan få hjälp med att hitta rätt storlek, behöver de inte skicka tillbaka produkter. Lösningen fokuserar på beteendeförändring genom bättre UX.',
    impact: 'Ett designförslag som direkt adresserar miljöproblemet med returer genom tydligare vägledning och storlekshjälp.',
    contentBlocks: [
      {
        type: 'figma',
        title: 'Prototyp: Hitta din storlek',
        content: 'https://www.figma.com/proto/PaRN4AEO74bITA0pcLHWHu/Prototyp-Kl%C3%A4dbutiken-Projekt?page-id=0%3A1&node-id=1-208&p=f&viewport=672%2C416%2C0.06&t=fkcRxPaYKTRfw7aD-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A208',
        caption: 'Här kan du testa vår prototyp. Prova gärna den nya funktionen "HITTA DIN STORLEK".'
      },
      {
        type: 'text',
        title: 'Uppdrag & Mål',
        content: 'Vi fick i uppdrag att undersöka konsumentbeteenden i Klädbutiken för att minska svinn och skapa ett mer hållbart tänk hos människor när de handlar online.\n\nMålet var att skaffa oss kunskap och insikt om hur köp- och returvanorna hos konsumenterna ser ut samt hur hanteringen av de returnerade klädesplaggen fungerar i praktiken. Målet var att ta fram relevant information som kan användas för att förändra konsumentbeteendet.'
      },
      {
        type: 'image',
        content: 'https://images.unsplash.com/photo-1555529733-0e670560f7e1?auto=format&fit=crop&q=80&w=1200',
        caption: 'Vi ville skapa en känsla av en fysisk butik, men digitalt.'
      },
      {
        type: 'text',
        title: 'Research & Strategi',
        content: 'Efter projektets kickoff definierade vi vår forskningsstrategi. Att förstå målgruppen och deras utmaningar var vår prioritet.\n\nVi byggde en onlineenkät och delade den i olika relevanta gemenskaper. På bara några dagar fick vi 86 bidrag. Vi passade även på att fråga i enkäten om någon kunde tänka sig att ställa upp på en längre intervju vilket underlättade att hitta deltagare framöver.\n\nUtifrån svaren i enkäten identifierade vi 5 vanliga painpoints, som ledde oss vidare i processen.'
      },
      {
        type: 'text',
        title: 'Djupintervjuer',
        content: 'Under researchfasen genomförde vi användarintervjuer för att bygga nya personas och för att informera om designen. Tillsammans med teamet förberedde vi ett intervjumanus med frågor, med fokus på våra målgruppers värderingar, motivation och dagliga rutiner.\n\nVi rekryterade och intervjuade 6 användare.'
      },
      {
        type: 'text',
        title: 'Designprocess: Skisser & Wireframes',
        content: 'Vi började designprocessen med skisser och wireframes för att påskynda beslutsfattandet genom visualisering utan att förlora tid. Våra skisser baserades på de första användarintervjuerna och enkätsvaren.\n\nMed Figma översatte vi sedan våra första skisser till low-fidelity wireframes som vi förbättrade med relevanta bilder. Baserat på 4 användartester gjorde vi ändringar och gick vidare till att skapa high-fidelity prototyper.'
      },
      {
        type: 'image',
        content: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1200&auto=format&fit=crop',
        caption: 'Masstillverkning av kläder. Vårt mål är att minska onödig produktion genom smartare köp.'
      },
      {
        type: 'text',
        title: 'Resultat',
        content: 'Vi har skapat en prototyp för att få bukt med problemen. Genom att människor direkt kan få hjälp med att hitta rätt storlek, behöver de inte skicka tillbaka produkter.\n\nDet handlar om att hitta smarta enkla digitala lösningar för att minska svinnet i e-handeln genom att påverka kundernas beteende i köpprocessen.'
      }
    ]
  },
  {
    id: 'brf-se',
    title: 'BRF.SE',
    category: 'Skolprojekt / White Label',
    thumbnail: 'https://framerusercontent.com/images/LmQo71hCswj5SR8Hcar73ARf3g.png',
    summary: '”Ditt gröna hem i Frölunda” – Ett modulbaserat system för bostadsrättsföreningar.',
    role: 'UX Designer',
    timeline: '2025',
    tools: ['Figma', 'Teams', 'Office'],
    challenge: 'Målet var att skapa ett system för en bostadsrättsförening som inkluderar webbsida, mobil webb, tablett webb, app och en fast fysisk skärm.',
    solution: 'Vi har skapat BRF.SE – ett modulbaserat system som kan användas av olika bostadsrättsföreningar och ändras vid behov för att passa deras specifika önskemål.',
    impact: 'Ett flexibelt och skalbart system som binder ihop den digitala och fysiska kommunikationen i föreningen.',
    contentBlocks: [
      {
        type: 'image',
        content: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600',
        caption: 'En sömlös upplevelse över alla enheter – från digital trapphustavla till mobilapp.'
      },
      {
        type: 'external-link',
        title: 'Projektfilm',
        content: 'https://youtu.be/HjFdCCQ6uBo',
        caption: 'Se en översikt av BRF.SE konceptet på YouTube.'
      },
      {
        type: 'design-system',
        title: 'Visuell Identitet',
        content: JSON.stringify({
          fonts: [
            { name: 'Lexend', family: 'Lexend', usage: 'Rubriker & Display' },
            { name: 'Roboto', family: 'Roboto', usage: 'Brödtext & UI' },
            { name: 'SF Pro', family: 'SF Pro', usage: 'System UI (iOS)' }
          ],
          colors: [
            { name: 'Forest Green', hex: '#2F5E48' },
            { name: 'Olive Accent', hex: '#687864' },
            { name: 'Light Mint', hex: '#F2F7F2' },
            { name: 'Charcoal', hex: '#1A1A1A' },
            { name: 'Pure White', hex: '#FFFFFF' }
          ]
        })
      },
      {
        type: 'text',
        title: 'Team & Uppdrag',
        content: 'Detta var ett skolprojekt utfört av ett team på tre UX Designers. Arbetet utgick från caset "Ditt gröna hem i Frölunda".'
      },
      {
        type: 'web',
        title: 'Testa Prototypen',
        content: 'https://brfse.framer.ai/',
        caption: 'Klicka runt i prototypen live.'
      },
      {
        type: 'external-link',
        title: 'Appen',
        content: 'https://youtu.be/OKQMy4xiDSk',
        caption: 'Se genomgång av mobilapplikationen på YouTube.'
      },
      {
        type: 'external-link',
        title: 'Informationsskärm',
        content: 'https://youtu.be/1AYd8mootvw',
        caption: 'Se demo av den digitala trapphustavlan på YouTube.'
      }
    ]
  },
  {
    id: 'aireal',
    title: 'Aireal Solutions',
    category: '2025 Elva Group',
    thumbnail: 'https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&q=80&w=1200',
    summary: 'Insikter: It-system, team, kundkontakt.',
    role: 'Logo Design, UI Design',
    timeline: '2025',
    tools: ['Figma', 'UI Design', 'Logo Design', 'Branding'],
    challenge: 'Målet var att skapa en portal för en drönartjänst.',
    solution: 'Skapade förslag till ny logo, hittade designsystem & gjorde vyer och förslag på layout till en framtida portal. Gjorde även en enkät.',
    impact: 'Ett designkoncept och en prototyp som visualiserar framtidens verktyg för drönartjänster.',
    contentBlocks: [
      {
        type: 'web',
        title: 'Live Prototyp',
        content: 'https://aireel.framer.ai/',
        caption: 'Testa den interaktiva prototypen live. Öppna i nytt fönster för bästa upplevelse.'
      },
      {
        type: 'text',
        title: 'Designsystem & Portaler',
        content: 'Projektet omfattade design av tre olika portaler: Kundportalen, Operatörsportalen och Rapportörsportalen. Eftersom inbäddade prototyper kan upplevas olika beroende på skärmstorlek rekommenderar jag att öppna dem i nya fönster via länkarna nedan.'
      },
      {
        type: 'external-link',
        title: 'Kundportalen',
        content: 'https://www.figma.com/proto/vNPcElUM5o0KzQj49kvGjT/Make-Customer-Portal?node-id=0-1&t=oBEHXwpewOPIljnM-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=0%3A1',
        caption: 'Öppna prototypen för Kundportalen'
      },
      {
        type: 'external-link',
        title: 'Operatörsportalen',
        content: 'https://www.figma.com/proto/DMSmN6vhRsv1bSTvGucDRV/Make-Operator?node-id=0-1&t=oPZNELr8oPknA0iC-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=0%3A1',
        caption: 'Öppna prototypen för Operatörsportalen'
      },
      {
        type: 'external-link',
        title: 'Rapportörsportalen',
        content: 'https://www.figma.com/proto/7uOXBhiKzIwqGtyMqMncCx/Make-Reporter-System?node-id=0-1&t=tw5BssfBpcfDi5Ev-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=0%3A1',
        caption: 'Öppna prototypen för Rapportörsportalen'
      }
    ]
  },
  {
    id: 'afry-forestry',
    title: 'AFRY Smart Forestry',
    category: 'Product Design / Agile',
    thumbnail: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200',
    summary: 'Agilt arbete, Figma och presentationer. Insikter: Teamarbete, Remote work, Stakeholder management.',
    role: 'UX Designer',
    timeline: '2 Månader',
    tools: ['Figma', 'Miro', 'Teams'],
    challenge: 'Målet var att lära mig mer om hur ett agilt arbetssätt i team fungerar, vässa mina Figma-färdigheter samt bidra i det dagliga UX-arbetet.',
    solution: 'Jag arbetade tätt ihop med teamet bakom AFRY Smart Forestry under 2 månader. Arbetet skedde remote och innebar designiterationer, presentationer för Product Owners och stakeholders samt aktivt deltagande i scrum-processer.',
    impact: 'En värdefull erfarenhet av att arbeta i skarpa agila team. En av designlösningarna gällande att sälja sin skog kommer att integreras i produkten efter årsskiftet.',
    contentBlocks: [
      {
        type: 'image',
        content: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=1200',
        caption: 'Smart Forestry: Digitala lösningar för framtidens skogsbruk.'
      },
      {
        type: 'text',
        title: 'Agilt arbetssätt',
        content: 'Jag deltog i ett agilt team och lärde mig hur det är att arbeta agilt, med en scrummaster, en project owner samt utvecklare och testare. En väldigt bra och intressant erfarenhet att ha.'
      },
      {
        type: 'text',
        title: 'Figma & Designprocess',
        content: 'Vi presenterade och skissade på otaliga iterationer av design som vi presenterade för teamet. Ett av de projekt vi arbetade med handlade om en integration för att sälja sin skog, vilket kommer att implementeras i produkten.'
      },
      {
        type: 'external-link',
        title: 'ForestKIT Demo 1',
        content: 'https://youtu.be/lJE3pOpWuOU',
        caption: 'Se demonstration av gränssnittet på YouTube.'
      },
      {
        type: 'external-link',
        title: 'ForestKIT Demo 2',
        content: 'https://youtu.be/X1fjeK5KVMU',
        caption: 'Se ytterligare funktionalitet och flöden på YouTube.'
      },
      {
        type: 'text',
        title: 'Lärdomar & Nästa steg',
        content: 'Perioden har givit mig rejält med kött på benen inför framtiden, med allt vad det gäller med att arbeta i agila team och att presentera sin design, dessutom har allt varit remote. Nu är jag väldigt sugen på att hitta en ny utmaning där jag kan lära mig ännu mer. Det har varit otroligt kul på vägen och jag har lärt mig massor.'
      },
      {
        type: 'text',
        title: 'Reflektion & Analys',
        content: 'Det kan ta väldigt lång tid att komma in i projekt när en ny UX:are kommer in. Att skapa sin egen struktur som hela teamet är med på tror jag är viktigt för att göra ett bra jobb. Det är absolut ingen självklarhet för en UX Designer att få en överlämning från tidigare designer, och utvecklingen forsätter gärna utan dokumentation. Detta ställer till det för den som kommer in ny och ofta får börja från noll med gammalt material.'
      }
    ]
  },
  {
    id: 'club-afry',
    title: 'Club AFRY Sharepoint',
    category: 'Sharepoint Redesign',
    thumbnail: 'https://framerusercontent.com/images/gI5PRNYBeEEeDTljoErUNJPWpo.png',
    summary: 'Att redesigna Club AFRY´s Sharepoint-site, marknadsföra plattformen och göra den användarvänlig.',
    role: 'UX Designer',
    timeline: 'Internship',
    tools: ['Figma', 'Miro', 'Teams'],
    challenge: 'Målet var att redesigna Club AFRY´s Sharepoint-site, marknadsföra plattformen och göra den användarvänlig.',
    solution: 'Efter research genom intervjuer med användare, kom jag fram till viktiga insikter för att förbättra flödet. Jag fokuserade på att lyfta fram kommande event, återkommande aktiviteter och förenkla bokningen.',
    impact: 'Designen gjorde både kunden och AFRY internt nöjda. Testerna visade att det blev betydligt lättare för användarna att navigera och hitta det de sökte.',
    contentBlocks: [
      {
        type: 'text',
        title: 'Research - Före',
        content: 'Jag märkte ganska tidigt att visa saker på Club AFRY´s sharepoint-sida var lite dolda. Utefter den research jag gjorde valde jag att fokusera på att lyfta fram de största insikter vi fick fram. Det handlade främst om att framhäva kommande event mer, plocka fram återkommande event i ljuset, marknadsföra de största eventen tydligare, samt att göra det enklare att boka eller önska en aktivitet.'
      },
      {
        type: 'image',
        content: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
        caption: 'Persona & Målgrupp: Vi identifierade nyckelpersoner för att förstå behoven.'
      },
      {
        type: 'text',
        title: 'Resultat',
        content: 'Jag skapade en karusell för att visa de största kommande eventen som Club AFRY har. Jag lyfte också upp möjligheten att skapa eller önska event samt att boka sig på skidresan. Dessutom har kommande event fått en större plats och återkommande event har plockats fram ur mörkret.'
      },
      {
        type: 'image',
        content: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=1200',
        caption: 'Skisser & Wireframes: Utforskande av layout och struktur.'
      },
      {
        type: 'image',
        content: 'https://framerusercontent.com/images/gI5PRNYBeEEeDTljoErUNJPWpo.png',
        caption: 'Redesign av Sharepoint-sidan med fokus på event'
      },
      {
        type: 'design-system',
        title: 'Designsystem',
        content: JSON.stringify({
          fonts: [
            { name: 'Segoe UI', family: 'sans-serif', usage: 'Standard i Sharepoint' },
            { name: 'Open Sans', family: 'sans-serif', usage: 'Komplement' }
          ],
          colors: [
            { name: 'AFRY Red', hex: '#E3000F' },
            { name: 'Dark Grey', hex: '#333333' },
            { name: 'Light Grey', hex: '#F4F4F4' },
            { name: 'White', hex: '#FFFFFF' }
          ]
        })
      },
      {
        type: 'text',
        title: 'Lärdomar',
        content: 'Det har varit otroligt kul och spännande att rodda ett projekt helt själv från ax till limpa och att få ha hand om en kund helt själv, men även att bolla design och ha en dialog samt process ihop med kunden.\n\nJag har lärt mig att ta stort eget ansvar och förvalta min tid. Jag har lärt mig att göra snabb research, föra kunddialog och att tighta avstämningar är viktigt.'
      },
      {
        type: 'image',
        content: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1200',
        caption: 'Slutgiltig vy: En renare och mer inbjudande event-översikt.'
      },
      {
        type: 'text',
        title: 'Nästa steg',
        content: 'Nästa steg i processen var att implementera designen i Sharepoint och börja använda den. För att göra det ännu bättre hade de kunnat välja ett annat verktyg än Sharepoint, om det ändå bara används internt.'
      },
      {
        type: 'text',
        title: 'Reflektion & Analys',
        content: 'Hade jag haft mer tid och resurser hade jag kunnat göra en mer genomarbetad enkät och fått ett större scope på svar för att hitta mer input och göra ett ännu större intervjuarbete. Jag hade dessutom kunnat använda fler metoder. Det var dock ett bra arbete och projekt utefter de resurser som fanns.'
      }
    ]
  }
];

const PROFILE_SV = {
  name: "Nisse Lindberg",
  role: "UX Designer",
  bio: "— en UX Designer som förenklar komplexiteten och levererar effektfulla lösningar. Kreativa processer är min största passion.",
  avatar: "https://framerusercontent.com/images/kffLKAltEikOG9idYI1VS1cgno.jpg",
  logo: "https://framerusercontent.com/images/gPz2jnstnIdP5983wCbinKDAOU.png",
  sideProfile: "https://framerusercontent.com/images/kffLKAltEikOG9idYI1VS1cgno.jpg", 
  galleryImages: [
    "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800"
  ],
  skills: ["UX Design", "UI Design", "Figma", "User Research", "Prototyping", "Product Strategy"],
  email: "info@nisselindberg.com",
  phone: "+46 738 700 666",
  linkedin: "https://www.linkedin.com/in/nisselindberg/",
  links: []
};

// ==========================================
// ENGLISH CONTENT
// ==========================================

const PROJECTS_EN: Project[] = [
  {
    id: 'social-media',
    title: 'Closely',
    category: '2025 School Project',
    thumbnail: 'https://framerusercontent.com/images/B1h2NDnRM2OfZBOneHsfo08dwy4.png',
    summary: 'Insights: Privacy, Modern Feed, All-in-one.',
    role: 'UX/UI Designer',
    timeline: '2025',
    tools: ['Figma', 'Prototyping', 'Workshops'],
    challenge: 'The goal was to create a new type of social media adapted for the future through insights from workshops. We wanted to move away from the fragmentation in today\'s apps and create a more unified experience.',
    solution: 'We developed "Closely" – an app where you reach your close friends more easily. The design allows for smooth filtering of the feed between close friends, all friends, or free exploration.',
    impact: 'A positive and exciting "all-in-one" experience that feels more personal. A concept with potential to become an extraordinary product.',
    contentBlocks: [
      {
        type: 'external-link',
        title: 'App Demo',
        content: 'https://www.youtube.com/watch?v=PU0mKxYjzQ8',
        caption: 'A walkthrough of the concept and functions in Closely on YouTube.'
      },
      {
        type: 'web',
        title: 'Live Application',
        content: 'https://closely-friends-feed.lovable.app',
        caption: 'Click around the live app directly here in the browser. Built with Lovable.'
      },
      {
        type: 'text',
        title: 'Functionality & Design',
        content: 'With Closely, we wanted to create a stylish and simple design. The core of the experience is a feed with the ability to filter content. The user can choose to see their "Close friends", "All friends", or "Explore" freely. The goal is to provide a positive and exciting experience with everything gathered in one place, yet deeply personal if desired.'
      },
      {
        type: 'image',
        content: 'https://framerusercontent.com/images/B1h2NDnRM2OfZBOneHsfo08dwy4.png',
        caption: 'Main view for the social feed'
      },
      {
        type: 'text',
        title: 'Process & Research',
        content: 'The work began with extensive research. We used the internet to find relevant surveys, case studies, and statistics that were useful to us.\n\nThen we created a workshop with 10 participants. Based on the insights we gained there, we built the prototype. Tests were then conducted on users within our own team, as the target audience knowledge and domain expertise were strong in the group.'
      },
      {
        type: 'text',
        title: 'Reflection & Analysis',
        content: 'Given the conditions, we have done strong work, but there are lessons learned. We should have had a dedicated moderator at our workshop and had time to test the setup more before the live situation. With more time, we would also have liked to do deeper research via surveys and interviews.\n\nThere is a lot of work left to fully build Closely, but based on the insights we have gained, I believe it could become an extraordinary product.'
      }
    ]
  },
  {
    id: 'kladbutiken',
    title: 'The Clothing Store',
    category: 'E-commerce / Sustainability',
    thumbnail: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
    summary: 'Sustainability & Environment. Insights: 88% return clothes they bought online.',
    role: 'UX Designer',
    timeline: '2024',
    tools: ['Figma', 'Miro', 'Dovetail', 'Procreate'],
    challenge: '"The Clothing Store has been heavily criticized for all the waste their e-commerce entails. All clothes sent back cannot be accepted as returns and end up in the landfill instead." The assignment was to investigate consumer behaviors to reduce waste.',
    solution: 'We have created a prototype to tackle the problems. By enabling people to get help finding the right size immediately, they do not need to send back products. The solution focuses on behavioral change through better UX.',
    impact: 'A design proposal that directly addresses the environmental problem of returns through clearer guidance and size assistance.',
    contentBlocks: [
      {
        type: 'figma',
        title: 'Prototype: Find Your Size',
        content: 'https://www.figma.com/proto/PaRN4AEO74bITA0pcLHWHu/Prototyp-Kl%C3%A4dbutiken-Projekt?page-id=0%3A1&node-id=1-208&p=f&viewport=672%2C416%2C0.06&t=fkcRxPaYKTRfw7aD-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A208',
        caption: 'Here you can test our prototype. Feel free to try the new function "FIND YOUR SIZE".'
      },
      {
        type: 'text',
        title: 'Assignment & Goal',
        content: 'We were tasked with investigating consumer behaviors in The Clothing Store to reduce waste and create a more sustainable mindset among people when shopping online.\n\nThe goal was to gain knowledge and insight into what consumer buying and return habits look like and how the handling of returned clothing items works in practice. The goal was to produce relevant information that can be used to change consumer behavior.'
      },
      {
        type: 'image',
        content: 'https://images.unsplash.com/photo-1555529733-0e670560f7e1?auto=format&fit=crop&q=80&w=1200',
        caption: 'We wanted to create the feeling of a physical store, but digital.'
      },
      {
        type: 'text',
        title: 'Research & Strategy',
        content: 'After the project kickoff, we defined our research strategy. Understanding the target audience and their challenges was our priority.\n\nWe built an online survey and shared it in various relevant communities. In just a few days, we received 86 responses. We also took the opportunity to ask in the survey if anyone would be willing to participate in a longer interview, which facilitated finding participants later on.\n\nBased on the survey responses, we identified 5 common pain points, which led us further in the process.'
      },
      {
        type: 'text',
        title: 'Deep Interviews',
        content: 'During the research phase, we conducted user interviews to build new personas and to inform the design. Together with the team, we prepared an interview script with questions, focusing on our target audiences\' values, motivation, and daily routines.\n\nWe recruited and interviewed 6 users.'
      },
      {
        type: 'text',
        title: 'Design Process: Sketches & Wireframes',
        content: 'We started the design process with sketches and wireframes to speed up decision-making through visualization without losing time. Our sketches were based on the initial user interviews and survey responses.\n\nWith Figma, we then translated our first sketches into low-fidelity wireframes which we improved with relevant images. Based on 4 user tests, we made changes and moved on to creating high-fidelity prototypes.'
      },
      {
        type: 'image',
        content: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1200&auto=format&fit=crop',
        caption: 'Mass production of clothes. Our goal is to reduce unnecessary production through smarter purchases.'
      },
      {
        type: 'text',
        title: 'Result',
        content: 'We have created a prototype to tackle the problems. By enabling people to get help finding the right size immediately, they do not need to send back products.\n\nIt is about finding smart simple digital solutions to reduce waste in e-commerce by influencing customer behavior in the buying process.'
      }
    ]
  },
  {
    id: 'brf-se',
    title: 'BRF.SE',
    category: 'School Project / White Label',
    thumbnail: 'https://framerusercontent.com/images/LmQo71hCswj5SR8Hcar73ARf3g.png',
    summary: '"Your green home in Frölunda" – A modular system for housing associations.',
    role: 'UX Designer',
    timeline: '2025',
    tools: ['Figma', 'Teams', 'Office'],
    challenge: 'The goal was to create a system for a housing association that includes a website, mobile web, tablet web, app, and a fixed physical screen.',
    solution: 'We have created BRF.SE – a modular system that can be used by different housing associations and changed as needed to suit their specific wishes.',
    impact: 'A flexible and scalable system that connects the digital and physical communication within the association.',
    contentBlocks: [
      {
        type: 'image',
        content: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600',
        caption: 'A seamless experience across all devices – from digital hallway display to mobile app.'
      },
      {
        type: 'external-link',
        title: 'Project Film',
        content: 'https://youtu.be/HjFdCCQ6uBo',
        caption: 'See an overview of the BRF.SE concept on YouTube.'
      },
      {
        type: 'design-system',
        title: 'Visual Identity',
        content: JSON.stringify({
          fonts: [
            { name: 'Lexend', family: 'Lexend', usage: 'Headings & Display' },
            { name: 'Roboto', family: 'Roboto', usage: 'Body & UI' },
            { name: 'SF Pro', family: 'SF Pro', usage: 'System UI (iOS)' }
          ],
          colors: [
            { name: 'Forest Green', hex: '#2F5E48' },
            { name: 'Olive Accent', hex: '#687864' },
            { name: 'Light Mint', hex: '#F2F7F2' },
            { name: 'Charcoal', hex: '#1A1A1A' },
            { name: 'Pure White', hex: '#FFFFFF' }
          ]
        })
      },
      {
        type: 'text',
        title: 'Team & Assignment',
        content: 'This was a school project carried out by a team of three UX Designers. The work was based on the case "Your green home in Frölunda".'
      },
      {
        type: 'web',
        title: 'Test the Prototype',
        content: 'https://brfse.framer.ai/',
        caption: 'Click around in the prototype live.'
      },
      {
        type: 'external-link',
        title: 'The App',
        content: 'https://youtu.be/OKQMy4xiDSk',
        caption: 'See walkthrough of the mobile application on YouTube.'
      },
      {
        type: 'external-link',
        title: 'Information Screen',
        content: 'https://youtu.be/1AYd8mootvw',
        caption: 'See demo of the digital hallway display on YouTube.'
      }
    ]
  },
  {
    id: 'aireal',
    title: 'Aireal Solutions',
    category: '2025 Elva Group',
    thumbnail: 'https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&q=80&w=1200',
    summary: 'Insights: IT systems, teams, customer contact.',
    role: 'Logo Design, UI Design',
    timeline: '2025',
    tools: ['Figma', 'UI Design', 'Logo Design', 'Branding'],
    challenge: 'The goal was to create a portal for a drone service.',
    solution: 'Created proposals for a new logo, established a design system & made views and layout proposals for a future portal. Also conducted a survey.',
    impact: 'A design concept and a prototype visualizing future tools for drone services.',
    contentBlocks: [
      {
        type: 'web',
        title: 'Live Prototype',
        content: 'https://aireel.framer.ai/',
        caption: 'Test the interactive prototype live. Open in a new window for the best experience.'
      },
      {
        type: 'text',
        title: 'Design System & Portals',
        content: 'The project included the design of three different portals: The Customer Portal, The Operator Portal, and The Reporter Portal. Since embedded prototypes can be experienced differently depending on screen size, I recommend opening them in new windows via the links below.'
      },
      {
        type: 'external-link',
        title: 'Customer Portal',
        content: 'https://www.figma.com/proto/vNPcElUM5o0KzQj49kvGjT/Make-Customer-Portal?node-id=0-1&t=oBEHXwpewOPIljnM-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=0%3A1',
        caption: 'Open prototype for the Customer Portal'
      },
      {
        type: 'external-link',
        title: 'Operator Portal',
        content: 'https://www.figma.com/proto/DMSmN6vhRsv1bSTvGucDRV/Make-Operator?node-id=0-1&t=oPZNELr8oPknA0iC-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=0%3A1',
        caption: 'Open prototype for the Operator Portal'
      },
      {
        type: 'external-link',
        title: 'Reporter Portal',
        content: 'https://www.figma.com/proto/7uOXBhiKzIwqGtyMqMncCx/Make-Reporter-System?node-id=0-1&t=tw5BssfBpcfDi5Ev-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=0%3A1',
        caption: 'Open prototype for the Reporter Portal'
      }
    ]
  },
  {
    id: 'afry-forestry',
    title: 'AFRY Smart Forestry',
    category: 'Product Design / Agile',
    thumbnail: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200',
    summary: 'Agile work, Figma, and presentations. Insights: Teamwork, Remote work, Stakeholder management.',
    role: 'UX Designer',
    timeline: '2 Months',
    tools: ['Figma', 'Miro', 'Teams'],
    challenge: 'The goal was to learn more about how an agile way of working in teams functions, sharpen my Figma skills, and contribute to daily UX work.',
    solution: 'I worked closely with the team behind AFRY Smart Forestry for 2 months. The work was remote and involved design iterations, presentations for Product Owners and stakeholders, and active participation in scrum processes.',
    impact: 'A valuable experience of working in sharp agile teams. One of the design solutions regarding selling one\'s forest will be integrated into the product after the new year.',
    contentBlocks: [
      {
        type: 'image',
        content: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=1200',
        caption: 'Smart Forestry: Digital solutions for future forestry.'
      },
      {
        type: 'text',
        title: 'Agile Way of Working',
        content: 'I participated in an agile team and learned what it is like to work agile, with a scrum master, a project owner, as well as developers and testers. A very good and interesting experience to have.'
      },
      {
        type: 'text',
        title: 'Figma & Design Process',
        content: 'We presented and sketched on countless iterations of design that we presented to the team. One of the projects we worked on was about an integration for selling one\'s forest, which will be implemented in the product.'
      },
      {
        type: 'external-link',
        title: 'ForestKIT Demo 1',
        content: 'https://youtu.be/lJE3pOpWuOU',
        caption: 'See demonstration of the interface on YouTube.'
      },
      {
        type: 'external-link',
        title: 'ForestKIT Demo 2',
        content: 'https://youtu.be/X1fjeK5KVMU',
        caption: 'See additional functionality and flows on YouTube.'
      },
      {
        type: 'text',
        title: 'Lessons & Next Steps',
        content: 'The period has given me a lot of experience for the future, regarding everything involved in working in agile teams and presenting one\'s design, additionally, everything has been remote. Now I am very eager to find a new challenge where I can learn even more. It has been incredibly fun along the way and I have learned a lot.'
      },
      {
        type: 'text',
        title: 'Reflection & Analysis',
        content: 'It can take a very long time to get into projects when a new UX designer comes in. Creating one\'s own structure that the whole team agrees on I believe is important to do a good job. It is absolutely not a given for a UX Designer to get a handover from a previous designer, and development often continues without documentation. This causes problems for the one coming in new and often having to start from scratch with old material.'
      }
    ]
  },
  {
    id: 'club-afry',
    title: 'Club AFRY Sharepoint',
    category: 'Sharepoint Redesign',
    thumbnail: 'https://framerusercontent.com/images/gI5PRNYBeEEeDTljoErUNJPWpo.png',
    summary: 'Redesigning Club AFRY\'s Sharepoint site, marketing the platform, and making it user-friendly.',
    role: 'UX Designer',
    timeline: 'Internship',
    tools: ['Figma', 'Miro', 'Teams'],
    challenge: 'The goal was to redesign Club AFRY\'s Sharepoint site, market the platform, and make it user-friendly.',
    solution: 'After research through interviews with users, I arrived at important insights to improve the flow. I focused on highlighting upcoming events, recurring activities, and simplifying booking.',
    impact: 'The design made both the client and AFRY internally satisfied. Tests showed that it became significantly easier for users to navigate and find what they were looking for.',
    contentBlocks: [
      {
        type: 'text',
        title: 'Research - Before',
        content: 'I noticed quite early that showing things on Club AFRY\'s sharepoint site was a bit hidden. Based on the research I did, I chose to focus on highlighting the biggest insights we obtained. It was mainly about highlighting upcoming events more, bringing recurring events into the light, marketing the biggest events more clearly, and making it easier to book or request an activity.'
      },
      {
        type: 'image',
        content: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
        caption: 'Persona & Target Audience: We identified key people to understand the needs.'
      },
      {
        type: 'text',
        title: 'Result',
        content: 'I created a carousel to show the biggest upcoming events that Club AFRY has. I also highlighted the opportunity to create or request events and to book the ski trip. In addition, upcoming events have been given a larger space and recurring events have been brought out of the darkness.'
      },
      {
        type: 'image',
        content: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=1200',
        caption: 'Sketches & Wireframes: Exploration of layout and structure.'
      },
      {
        type: 'image',
        content: 'https://framerusercontent.com/images/gI5PRNYBeEEeDTljoErUNJPWpo.png',
        caption: 'Redesign of Sharepoint site with focus on events'
      },
      {
        type: 'design-system',
        title: 'Design System',
        content: JSON.stringify({
          fonts: [
            { name: 'Segoe UI', family: 'sans-serif', usage: 'Standard in Sharepoint' },
            { name: 'Open Sans', family: 'sans-serif', usage: 'Complement' }
          ],
          colors: [
            { name: 'AFRY Red', hex: '#E3000F' },
            { name: 'Dark Grey', hex: '#333333' },
            { name: 'Light Grey', hex: '#F4F4F4' },
            { name: 'White', hex: '#FFFFFF' }
          ]
        })
      },
      {
        type: 'text',
        title: 'Lessons Learned',
        content: 'It has been incredibly fun and exciting to manage a project completely myself from start to finish and to handle a client completely myself, but also to discuss design and have a dialogue and process together with the client.\n\nI have learned to take great personal responsibility and manage my time. I have learned to do quick research, conduct client dialogue, and that tight check-ins are important.'
      },
      {
        type: 'image',
        content: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1200',
        caption: 'Final View: A cleaner and more inviting event overview.'
      },
      {
        type: 'text',
        title: 'Next Steps',
        content: 'The next step in the process was to implement the design in Sharepoint and start using it. To make it even better, they could have chosen another tool than Sharepoint, if it is only used internally anyway.'
      },
      {
        type: 'text',
        title: 'Reflection & Analysis',
        content: 'Had I had more time and resources, I could have done a more thorough survey and obtained a larger scope of answers to find more input and do an even larger interview work. I could also have used more methods. However, it was a good job and project given the resources available.'
      }
    ]
  }
];

const PROFILE_EN = {
  name: "Nisse Lindberg",
  role: "UX Designer",
  bio: "— a UX Designer who simplifies complexity and delivers impactful solutions. Creative processes are my greatest passion.",
  avatar: "https://framerusercontent.com/images/kffLKAltEikOG9idYI1VS1cgno.jpg",
  logo: "https://framerusercontent.com/images/gPz2jnstnIdP5983wCbinKDAOU.png",
  sideProfile: "https://framerusercontent.com/images/kffLKAltEikOG9idYI1VS1cgno.jpg", 
  galleryImages: [
    "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800"
  ],
  skills: ["UX Design", "UI Design", "Figma", "User Research", "Prototyping", "Product Strategy"],
  email: "info@nisselindberg.com",
  phone: "+46 738 700 666",
  linkedin: "https://www.linkedin.com/in/nisselindberg/",
  links: []
};

// ==========================================
// EXPORTS & UI STRINGS
// ==========================================

export const UI = {
  sv: {
    nav_start: 'Start',
    nav_about: 'Om mig',
    nav_contact: 'Kontakt',
    hero_title: 'Designing',
    hero_subtitle: 'Digital Clarity.',
    hero_greeting: 'Hej! Jag är',
    hero_btn_work: 'Se mina case',
    hero_btn_contact: 'Kontakta mig',
    home_selected_work: 'Utvalda Case',
    home_latest: 'Senaste projekt 2024-2025',
    home_view_case: 'Se Case',
    about_title: 'Hej, det är jag som är Nisse.',
    about_bio_extended: 'Som UX Designer strävar jag alltid efter att skapa intuitiva och engagerande upplevelser. Jag tror på att sätta användaren i centrum och låta insikter driva designprocessen framåt.',
    about_more: 'Mer om mig',
    about_hobbies: 'När jag inte jobbar med design gillar jag att utforska nya kreativa uttryck och hämta inspiration från omgivningen.',
    back_to_home: 'Tillbaka till startsidan',
    contact_title: 'Kontakt',
    contact_intro: 'Jag är en kreativ problemlösare som älskar att ta mig an nya utmaningar. Oavsett om det handlar om ett nytt UX-projekt, en designstrategi eller bara en kaffe för att bolla idéer, så ser jag fram emot att höra från dig.',
    contact_location: 'Jag utgår från Göteborg men jobbar gärna med projekt över hela världen.',
    contact_email_me: 'Maila mig',
    contact_call_me: 'Ring mig',
    contact_place: 'Plats',
    contact_form_title: 'Skicka ett meddelande',
    contact_form_name: 'Namn',
    contact_form_email: 'Email',
    contact_form_message: 'Meddelande',
    contact_form_send: 'Skicka Meddelande',
    cta_title: 'Vill du komma i kontakt?',
    cta_text: 'Oavsett om du har en idé, ett projekt eller bara vill ta en kaffe – hör gärna av dig!',
    cta_btn: 'Kontakta mig',
    project_role: 'Roll',
    project_timeline: 'Tidslinje',
    project_tools: 'Verktyg',
    project_challenge: 'Utmaningen',
    project_solution: 'Lösningen',
    project_result: 'Resultat',
    project_more_coming: 'Fler detaljer, bilder och videos för detta case kommer snart...',
    interact_web: 'Klicka för att interagera med appen',
    interact_figma: 'Klicka för att interagera med prototypen',
    open_fullscreen: 'Öppna i fullskärm',
    open_figma: 'Öppna i Figma',
    open_link: 'Öppna länk',
    video_youtube_fallback: 'Om videon inte startar, klicka här',
    video_youtube_title: 'Video tillgänglig på YouTube',
    video_youtube_desc: 'Klicka på länken nedan för att öppna videon i ett nytt fönster.',
    video_watch: 'Se på YouTube'
  },
  en: {
    nav_start: 'Start',
    nav_about: 'About',
    nav_contact: 'Contact',
    hero_title: 'Designing',
    hero_subtitle: 'Digital Clarity.',
    hero_greeting: 'Hi! I am',
    hero_btn_work: 'View my work',
    hero_btn_contact: 'Contact me',
    home_selected_work: 'Selected Cases',
    home_latest: 'Latest projects 2024-2025',
    home_view_case: 'View Case Study',
    about_title: 'Hi, I\'m Nisse.',
    about_bio_extended: 'As a UX Designer, I always strive to create intuitive and engaging experiences. I believe in putting the user at the center and allowing insights to drive the design process forward.',
    about_more: 'More about me',
    about_hobbies: 'When I\'m not designing, I enjoy exploring new creative expressions and finding inspiration in my surroundings.',
    back_to_home: 'Back to home',
    contact_title: 'Contact',
    contact_intro: 'I am a creative problem solver who loves taking on new challenges. Whether it\'s a new UX project, a design strategy, or just a coffee to bounce ideas around, I look forward to hearing from you.',
    contact_location: 'I am based in Gothenburg but am happy to work with projects worldwide.',
    contact_email_me: 'Email me',
    contact_call_me: 'Call me',
    contact_place: 'Location',
    contact_form_title: 'Send a message',
    contact_form_name: 'Name',
    contact_form_email: 'Email',
    contact_form_message: 'Message',
    contact_form_send: 'Send Message',
    cta_title: 'Want to get in touch?',
    cta_text: 'Whether you have an idea, a project, or just want to grab a coffee – feel free to reach out!',
    cta_btn: 'Contact me',
    project_role: 'Role',
    project_timeline: 'Timeline',
    project_tools: 'Tools',
    project_challenge: 'The Challenge',
    project_solution: 'The Solution',
    project_result: 'Result',
    project_more_coming: 'More details, images, and videos for this case are coming soon...',
    interact_web: 'Click to interact with the app',
    interact_figma: 'Click to interact with the prototype',
    open_fullscreen: 'Open in fullscreen',
    open_figma: 'Open in Figma',
    open_link: 'Open link',
    video_youtube_fallback: 'If the video doesn\'t start, click here',
    video_youtube_title: 'Video available on YouTube',
    video_youtube_desc: 'Click the link below to open the video in a new window.',
    video_watch: 'Watch on YouTube'
  }
};

export const CONTENT = {
  sv: { projects: PROJECTS_SV, profile: PROFILE_SV },
  en: { projects: PROJECTS_EN, profile: PROFILE_EN }
};