export const srHome = {
  lang: 'sr' as const,
  meta: {
    title: 'Anton Nazarov (Antiokh) — IT, sistemi, proizvodi i ljudi',
    description: 'Lični sajt Antona Nazarova: od Lotus Notes developera na aerodromu Domodedovo do Head of IT, sistemskog arhitekte i osnivača NeedleBit-a. Beograd, Srbija.',
    path: '/sr/'
  },
  hero: {
    eyebrow: 'Beograd · profesionalno u IT-u od 2008 · Antiokh',
    intro: 'Zdravo, ja sam',
    name: 'Anton\nNazarov.',
    role: 'Počeo sam sa korporativnim sistemima za dokumentaciju, stigao do vođenja kompletnog IT-a, a danas ponovo mnogo toga gradim svojim rukama. Najviše volim zadatke u kojima istovremeno treba razumeti ljude, proces i sistem.',
    storyCta: 'Kako sam stigao dovde ↓',
    casesCta: 'Projekti i dokazi',
    photoNote: 'Antiokh · Beograd'
  },
  manifesto: {
    label: 'Ukratko',
    quote: '„Moja karijera nije lestvica titula. Više je niz sistema za koje sam vremenom preuzimao sve dublju odgovornost.“',
    notes: [
      'Godine 2008. došao sam na aerodrom Domodedovo kao junior Lotus Notes developer. Voleo sam kod, ali me je vrlo brzo počelo više zanimati nešto drugo: zašto proces izgleda baš tako, gde puca i zašto ljudi zaobilaze zvanični sistem preko Excela, mejla i ličnih dogovora.',
      'Razvoju su se postepeno dodali analiza, arhitektura, implementacija, obuka, vođenje ljudi i odgovornost za IT u celini. Zato mi je danas podjednako prirodno da budem na sastanku sa rukovodstvom ili u SQL konzoli.'
    ]
  },
  story: {
    label: 'Profesionalni put / 2008—danas',
    title: 'Ne „od developera do menadžera“. Iz jednog nivoa odgovornosti u sledeći.',
    lead: 'Nisam prestao da budem tehnički čovek kada sam počeo da vodim ljude. Samo je rasla skala problema: prvo forma i workflow, zatim odeljenja, budžeti, bezbednost, stotine korisnika i odluke čije posledice ne mogu da se ponište jednim Undo.',
    text: 'Danas koristim izraze technology leader i systems architect ne zbog titule, već zato što su to najkraći opisi posla na preseku biznisa, ljudi i inženjeringa.'
  },
  timeline: [
    {
      date: '2008—2012',
      kicker: 'Prva profesija',
      title: 'Domodedovo → enterprise Lotus Notes',
      text: 'Počeo sam razvojem i podrškom internih sistema koje su zaposleni koristili svakog dana. U sledećem timu sam uveo XPages, prepisivao jezgro korporativnog workflow-a za web i postepeno izašao iz okvira „samo napravi funkciju“.'
    },
    {
      date: '2013—2015',
      kicker: 'Proces pre forme',
      title: 'Banka obračuna i štednje',
      text: 'Sa rukovodiocima odeljenja rekonstruisao sam stvarni tok dokumenata i napravio interni sistem od nule, uključujući integraciju sa 1C. Tu sam prvi put jasno video kako automatizacija ne čini samo posao bržim, već i odgovornost vidljivom.'
    },
    {
      date: '2017—2023',
      kicker: 'Skala i institucije',
      title: 'Direkcija kulturnih centara Moskve',
      text: 'Razvijao sam sektorsku platformu za mrežu od više od 100 ustanova. Arhitektura ovde nije značila samo kod: terminologija, prava pristupa, pravila, izveštavanje, obuka, podrška, serveri i dogovori među ljudima koji imaju različite ciljeve i različite verzije istine.'
    },
    {
      date: '2020—2022',
      kicker: 'Odgovornost u celini',
      title: 'Kulturni centar ZIL · Head of IT',
      text: 'Vodio sam IT funkciju velike organizacije: tim, dobavljače, infrastrukturu, bezbednost, HelpDesk, opremu i procedure. Na početku pandemije prebacio sam više od 100 zaposlenih na rad na daljinu, dok sam paralelno sređivao operativnu disciplinu IT odeljenja.'
    },
    {
      date: '2022—danas',
      kicker: 'Novo okruženje',
      title: 'Beograd · NeedleBit · proizvodi',
      text: 'Preseljenje je resetovalo poznati kontekst. Vratio sam se manjim i bržim proizvodima, modernom stack-u i direktnom radu sa vlasnicima biznisa. Tokom narednih godina napravio sam sisteme na Supabase-u, WeWeb-u, Xano-u, n8n-u i AI alatima — uz enterprise naviku da mislim o arhitekturi, radu u produkciji i posledicama odluka.'
    }
  ],
  metrics: [
    { value: '18', label: 'godina profesionalno u IT-u' },
    { value: '100+', label: 'ustanova u jednom sektorskom sistemu' },
    { value: '100+', label: 'zaposlenih prebačeno na rad na daljinu tokom pandemije' },
    { value: '≈70.000', label: 'istorijskih izveštaja migrirano u jednom novijem projektu' }
  ],
  serbia: {
    label: 'Beograd / 2022—danas',
    title: 'Preseljenje me je vratilo navici da brzo napravim, pustim i proverim.',
    lead: 'Posle velikih organizacija našao sam se u novoj zemlji bez autoriteta koji dolazi sa poznatom funkcijom. Ponovo sam morao da dokazujem vrednost ne titulom, već nečim što stvarno radi.',
    text: 'To je bilo korisno. U Srbiji sam pravio servise za visa run i ture, aplikaciju za networking, marketplace domaće hrane, interne sisteme za klijente i sopstvene eksperimente. Neki su komercijalno uspeli, neki nisu — i neuspeh je postao normalan deo profesionalnog iskustva.',
    projects: [
      {
        title: 'Dobri Visarun',
        image: '/projects/dobri-visarun.png',
        text: 'Zahtevi klijenta bili su rasuti između Facebook-a, mejla i messengera. Registraciju, putovanja i obaveštenja spojio sam u jedan mobilni PWA i uklonio veliki deo ručne komunikacije.',
        result: 'Približno 10× rast prihoda za oko tri meseca, bez oglašavanja.'
      },
      {
        title: 'Dobri Tours',
        image: '/projects/dobri-tours.png',
        text: 'Tok poruka i ručnih najava pretvoren je u katalog izleta sa prijavom, recenzijama, bonusima i ponovnim prodajama.',
        result: 'Klijenti su počeli da ističu jednostavnost rezervacije, a operativna rutina se primetno smanjila.'
      },
      {
        title: 'Serbia Networking',
        image: '/projects/serbia-networking.png',
        text: 'Na događaju uživo nije moguće razgovarati sa svima. Napravio sam malu aplikaciju u kojoj su učesnici i događaji ostajali dostupni i nakon završetka susreta.',
        result: 'Mali radni proizvod nastao direktno iz svakodnevnog problema.'
      },
      {
        title: 'RuskaJela',
        image: '/projects/ruskajela.png',
        text: 'Marketplace domaće hrane sa geografskom pretragom. Softver je radio, ali nije bilo dovoljno budžeta ni gustine tržišta da se istovremeno privuku prodavci i kupci.',
        result: 'Koristan neuspeh: marketplace ne počinje kodom.'
      }
    ]
  },
  portfolio: {
    label: 'Rad koji mogu da pokažem',
    title: 'Četiri različite skale\nistog pristupa.',
    intro: 'Radije pokazujem situaciju nego stack: šta je bilo pokvareno ili nedefinisano, za šta sam lično odgovarao, koju odluku je trebalo doneti i šta je na kraju počelo da radi.',
    roleLabel: 'Moja uloga',
    caseCta: 'Pogledaj projekat →',
    more: 'U kompletnom portfoliju su i AI generisanje, assessment proizvodi, turizam, interni obračun, ERP, lokalni servisi i eksperimenti. Nisu svi bili komercijalne pobede; svaki ima konkretan kontekst i jasno opisanu moju ulogu.',
    allCta: 'Otvori ceo portfolio ↗'
  },
  cases: [
    {
      id: 'mosrazvitie', number: '01', title: 'AIS MosRazvitie', tag: 'GovTech · mreža 100+ ustanova', image: '/projects/mosrazvitie.png',
      lead: 'Najteži deo ovde nije bio dogovor sa kodom, nego dogovor sa realnošću.',
      text: 'Sektorski sistem je već godinama živeo svoj život. Sa odeljenjima sam razjašnjavao entitete i terminologiju, menjao model podataka i prava pristupa, razvijao izveštavanje, obučavao korisnike, vodio eksploataciju i postepeno pretvarao legacy platformu u upotrebljiv izvor operativnih podataka.',
      proof: 'arhitektura · analiza · razvoj · implementacija · eksploatacija'
    },
    {
      id: 'andronyevskaya', number: '02', title: 'Andronyevskaya ERP', tag: 'Property operations · self-hosted', image: '/projects/andronyevskaya.png',
      lead: 'Interni sistem koji počinje QR kodom na stvarnoj opremi, a ne dashboard-om.',
      text: 'Tehničar skenira opremu na objektu, otvara karticu i zadatak, komunicira sa menadžerom i završava posao. Tri korisničke uloge, Telegram Mini App, obaveštenja, realtime i self-hosted Supabase — sve je projektovano oko stvarnog terenskog procesa.',
      proof: 'developer · DevOps · project manager'
    },
    {
      id: 'exit-lead', number: '03', title: 'Exit Lead', tag: 'Field operations · oko 70.000 izveštaja', image: '/projects/exitlead.png',
      lead: 'Terenske inspekcije, dva interfejsa, merni uređaji, dokumenti i veoma velika migracija.',
      text: 'Inspektori su radili u Glide-u, klijenti u WeWeb portalu, a podaci su se spajali u Supabase-u. Napravio sam workflow od izlaska na teren do PDF izveštaja i zasebno migrirao oko 70.000 istorijskih dokumenata sa Google Drive-a.',
      proof: 'builder · architect · designer'
    },
    {
      id: 'metafox', number: '04', title: 'MetaFox Strengths Explorer', tag: 'Assessment product · scoring', image: '/projects/metafox.png',
      lead: 'Metodologija se menjala dok smo gradili proizvod. Sistem je morao da se menja zajedno s njom, a ne da se raspadne.',
      text: 'Samoprocena, peer feedback, 64 pitanja, normalizacija, deterministički scoring i PDF izveštaji. Vodio sam proizvod od razgovora o modelu i arhitekturi do interfejsa, testiranja, puštanja i komunikacije sa klijentom.',
      proof: 'product owner · full-stack builder'
    }
  ],
  testimonials: {
    label: 'Tuđim rečima',
    title: 'Kako je taj rad izgledao\nsa druge strane.',
    items: [
      {
        quote: '„Dopao mi se pristup vođenju projekta, proaktivno učešće u formiranju tehničkog zadatka i pažnja prema vizuelnom delu.“',
        author: 'Anton Bukin · AIS MosRazvitie'
      },
      {
        quote: '„Anton je u potpunosti vodio naš tehnički stack — od WeWeb frontenda do strukture Xano backenda i API-ja za izračunavanje rezultata. Uz to je pomagao u oblikovanju vizije proizvoda.“',
        author: 'Tobias Weghorn · MetaFox'
      },
      {
        quote: '„Vreme koje sam trošio na komunikaciju sa klijentima svedeno je na minimum, a biznis je značajno porastao.“',
        author: 'Dobrosav J. · Dobri Visarun / Dobri Tours'
      }
    ]
  },
  needlebit: {
    label: 'Danas / NeedleBit',
    title: 'NeedleBit nije kraj priče. To je moja sadašnja radionica.',
    lead: 'Nezavisna praksa je postepeno prerasla u mali tim i poseban brend.',
    text: 'I dalje radim ono što sam radio tokom cele karijere: razumem stvarni proces, projektujem sistem, sastavljam rešenje i ostajem odgovoran za ono što se dešava posle prvog release-a. Razlika je moderan stack i sve češće AI kao deo inženjerskog procesa. Ovaj sajt je o meni, pa komercijalni deo ostavljam NeedleBit-u.',
    primary: 'NeedleBit in English ↗',
    secondary: 'NeedleBit na ruskom ↗',
    primaryUrl: 'https://needlebit.dev/',
    secondaryUrl: 'https://needlebit.ru/'
  },
  personal: {
    label: 'Van CV-ja',
    title: 'Ne živim samo unutar ekrana.',
    lead: 'Ples, muzika i događaji prate posao skoro ceo moj odrasli život.',
    text: 'Plešem hustle / discofox i ponekad podučavam druge; sviram gitaru, klavijature i harmoniku i pevam; organizovao sam festivale, koncerte i gradske događaje — od malih okupljanja do projekata sa hiljadama ljudi. Volim fotografiju i dizajn, dobar film, putovanja i duge razgovore o psihologiji, filozofiji i tome zašto ljudi rade ono što rade.',
    interests: ['Hustle / Discofox', 'Muzika', 'Događaji', 'Fotografija', 'Dizajn', 'Psihologija', 'Putovanja']
  },
  identity: {
    label: 'P.S. za pretraživače',
    title: 'I da: imam potpunog imenjaka.',
    text: [
      'Mortimer, povezan sa ruskim projektom „Осознанная меркантильность“, drugi je Anton Vladislavovich Nazarov.',
      'Ja sam Antiokh: živim u Beogradu, radim u IT-u i vodim GitHub profil Antiokh. Linkovi ispod vode do mojih potvrđenih profila.'
    ],
    cta: 'Moj LinkedIn ↗'
  },
  contact: {
    label: 'Kontakt',
    title: 'Možeš jednostavno da mi pišeš.\nBez forme na sedam ekrana.'
  }
};
