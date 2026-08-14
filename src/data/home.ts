export type Locale = 'ru' | 'en';

export interface HomeContent {
  lang: Locale;
  meta: { title: string; description: string; path: string };
  hero: { eyebrow: string; intro: string; name: string; role: string; storyCta: string; casesCta: string; photoNote: string };
  manifesto: { label: string; quote: string; notes: string[] };
  story: { label: string; title: string; lead: string; text: string };
  timeline: Array<{ date: string; kicker: string; title: string; text: string }>;
  metrics: Array<{ value: string; label: string }>;
  serbia: { label: string; title: string; lead: string; text: string; projects: Array<{ title: string; image: string; text: string; result: string }> };
  portfolio: { label: string; title: string; intro: string; roleLabel: string; caseCta: string; more: string; allCta: string };
  cases: Array<{ id: string; number: string; title: string; tag: string; image: string; lead: string; text: string; proof: string }>;
  testimonials: { label: string; title: string; items: Array<{ quote: string; author: string }> };
  needlebit: { label: string; title: string; lead: string; text: string; primary: string; secondary: string; primaryUrl: string; secondaryUrl: string };
  personal: { label: string; title: string; lead: string; text: string; interests: string[] };
  identity: { label: string; title: string; text: string[]; cta: string };
  contact: { label: string; title: string };
}

const sharedCases = {
  ru: [
    {
      id: 'mosrazvitie',
      number: '01',
      title: 'AIS MosRazvitie',
      tag: 'GovTech · сеть из 100+ учреждений',
      image: '/projects/mosrazvitie.png',
      lead: 'Здесь труднее всего было договориться не с кодом, а с реальностью.',
      text: 'Отраслевая система уже жила своей жизнью. Я разбирал сущности и термины с подразделениями, перестраивал модель данных и доступов, делал отчётные механизмы, обучал пользователей, вёл эксплуатацию и постепенно превращал legacy-платформу в нормальный рабочий источник данных.',
      proof: 'архитектура · анализ · разработка · внедрение · эксплуатация'
    },
    {
      id: 'andronyevskaya',
      number: '02',
      title: 'Andronyevskaya ERP',
      tag: 'Property operations · self-hosted',
      image: '/projects/andronyevskaya.png',
      lead: 'Внутренняя система, которая начинается не с dashboard, а с QR-кода на реальном оборудовании.',
      text: 'Исполнитель сканирует оборудование на объекте, видит карточку и задачу, общается с менеджером и закрывает работу. Три ролевых контура, Telegram Mini App, уведомления, realtime и self-hosted Supabase — всё вокруг реального полевого процесса.',
      proof: 'developer · DevOps · project manager'
    },
    {
      id: 'exit-lead',
      number: '03',
      title: 'Exit Lead',
      tag: 'Field operations · около 70 000 отчётов',
      image: '/projects/exitlead.png',
      lead: 'Полевые инспекции, два интерфейса, приборы, документы и очень большая миграция.',
      text: 'Внутреннее приложение для инспекторов работало в Glide, клиентская часть — в WeWeb, а данные сходились в Supabase. Я собирал workflow от выезда до PDF-отчёта и отдельно переносил около 70 000 исторических документов из Google Drive.',
      proof: 'builder · architect · designer'
    },
    {
      id: 'metafox',
      number: '04',
      title: 'MetaFox Strengths Explorer',
      tag: 'Assessment product · scoring',
      image: '/projects/metafox.png',
      lead: 'Методика менялась по ходу проекта. Система должна была меняться вместе с ней, а не рассыпаться.',
      text: 'Самооценка, peer feedback, 64 вопроса, нормализация, детерминированный скоринг и PDF-отчёты. Я вёл продукт от обсуждения модели и архитектуры до интерфейса, тестирования, релиза и общения с клиентом.',
      proof: 'product owner · full-stack builder'
    }
  ],
  en: [
    {
      id: 'mosrazvitie',
      number: '01',
      title: 'AIS MosRazvitie',
      tag: 'GovTech · network of 100+ institutions',
      image: '/projects/mosrazvitie.png',
      lead: 'The hardest part was not negotiating with code. It was negotiating with reality.',
      text: 'The industry platform was already alive and carrying years of legacy. I worked through entities and terminology with departments, rebuilt data and access logic, developed reporting tools, trained users, handled operations, and gradually turned the system into a usable source of operational data.',
      proof: 'architecture · analysis · development · adoption · operations'
    },
    {
      id: 'andronyevskaya',
      number: '02',
      title: 'Andronyevskaya ERP',
      tag: 'Property operations · self-hosted',
      image: '/projects/andronyevskaya.png',
      lead: 'An internal system that starts with a QR code on a physical asset, not a dashboard.',
      text: 'A technician scans equipment on site, opens the asset and task, talks to a manager, and completes the work. Three role surfaces, Telegram Mini App, notifications, realtime, and self-hosted Supabase — all designed around the field process itself.',
      proof: 'developer · DevOps · project manager'
    },
    {
      id: 'exit-lead',
      number: '03',
      title: 'Exit Lead',
      tag: 'Field operations · ~70,000 reports',
      image: '/projects/exitlead.png',
      lead: 'Field inspections, two interfaces, measurement devices, documents, and a very large migration.',
      text: 'Inspectors worked in Glide, clients used a WeWeb portal, and the data met in Supabase. I built the workflow from field visit to PDF report and separately migrated roughly 70,000 historical documents from Google Drive.',
      proof: 'builder · architect · designer'
    },
    {
      id: 'metafox',
      number: '04',
      title: 'MetaFox Strengths Explorer',
      tag: 'Assessment product · scoring',
      image: '/projects/metafox.png',
      lead: 'The methodology changed while we were building it. The system had to move with it instead of collapsing.',
      text: 'Self-assessment, peer feedback, 64 questions, normalization, deterministic scoring, and PDF reports. I owned the product from model discussions and architecture through interface work, testing, release, and client communication.',
      proof: 'product owner · full-stack builder'
    }
  ]
};

export const home: Record<Locale, HomeContent> = {
  ru: {
    lang: 'ru',
    meta: {
      title: 'Антон Назаров (Antiokh) — IT, системы, продукты и люди',
      description: 'Личный сайт Антона Назарова: путь от Lotus Notes-разработчика в Домодедово до Head of IT, системного архитектора и основателя NeedleBit. Белград, Сербия.',
      path: '/'
    },
    hero: {
      eyebrow: 'Белград · профессионально в IT с 2008 · Antiokh',
      intro: 'Привет, я',
      name: 'Антон\nНазаров.',
      role: 'Я начал с корпоративного документооборота, дошёл до руководства IT и теперь снова много строю руками. Больше всего люблю задачи, где нужно одновременно понять людей, процесс и систему.',
      storyCta: 'Как я до этого дошёл ↓',
      casesCta: 'Проекты и доказательства',
      photoNote: 'Antiokh · Belgrade'
    },
    manifesto: {
      label: 'Если коротко',
      quote: '«Моя карьера — не лестница из должностей. Скорее последовательность систем, за которые приходилось отвечать всё глубже».',
      notes: [
        'В 2008 году я пришёл в Домодедово младшим Lotus Notes-разработчиком. Мне нравился код, но довольно быстро стало интереснее другое: почему процесс устроен именно так, где он ломается и почему люди обходят систему через Excel, почту и личные договорённости.',
        'Постепенно к разработке добавились анализ, архитектура, внедрение, обучение, управление людьми и ответственность за IT целиком. Поэтому сегодня я одинаково нормально чувствую себя на встрече с руководством и в SQL-консоли.'
      ]
    },
    story: {
      label: 'Профессиональный путь / 2008—сейчас',
      title: 'Не «из разработчика в менеджеры». Из одной ответственности в следующую.',
      lead: 'Я не перестал быть технарём, когда начал управлять. Просто масштаб задачи рос: сначала форма и workflow, потом подразделения, бюджеты, безопасность, сотни пользователей и решения, последствия которых нельзя откатить кнопкой Undo.',
      text: 'Сейчас я называю себя technology leader и systems architect не ради титула. Это просто самое короткое описание работы на стыке бизнеса, людей и инженерии.'
    },
    timeline: [
      {
        date: '2008—2012',
        kicker: 'Первая профессия',
        title: 'Домодедово → enterprise Lotus Notes',
        text: 'Начал с разработки и поддержки внутренних систем, которыми сотрудники пользовались каждый день. Потом принёс XPages в следующую команду, переписывал ядро корпоративного workflow под web и постепенно вышел за рамки «просто написать функцию».'
      },
      {
        date: '2013—2015',
        kicker: 'Процесс важнее формы',
        title: 'Банк Расчётов и Сбережений',
        text: 'С руководителями подразделений разобрал реальный документооборот и построил внутреннюю систему с нуля, включая интеграцию с 1С. Именно там я впервые увидел, как автоматизация делает не только работу быстрее, но и ответственность — видимой.'
      },
      {
        date: '2017—2023',
        kicker: 'Масштаб и институции',
        title: 'Дирекция культурных центров Москвы',
        text: 'Развивал отраслевую систему для сети более чем ста учреждений. Здесь архитектура означала не только код: терминология, права, регламенты, отчётность, обучение, поддержка, серверы и договорённости между людьми, у которых были разные задачи и разные версии правды.'
      },
      {
        date: '2020—2022',
        kicker: 'Ответственность целиком',
        title: 'Культурный центр ЗИЛ · Head of IT',
        text: 'Вёл IT-функцию большой организации: команда, подрядчики, инфраструктура, безопасность, HelpDesk, активы и регламенты. В начале пандемии перевёл более ста сотрудников на удалённую работу и параллельно перестраивал операционную дисциплину отдела.'
      },
      {
        date: '2022—сейчас',
        kicker: 'Новая среда',
        title: 'Белград · NeedleBit · продукты',
        text: 'Переезд обнулил привычный контекст. Я вернулся к маленьким быстрым продуктам, современному стеку и прямой работе с владельцами бизнеса. За несколько лет собрал проекты на Supabase, WeWeb, Xano, n8n и AI-инструментах — уже с enterprise-привычкой думать об архитектуре, эксплуатации и последствиях.'
      }
    ],
    metrics: [
      { value: '18', label: 'лет профессионально в IT' },
      { value: '100+', label: 'учреждений в одной отраслевой системе' },
      { value: '100+', label: 'сотрудников переведены на удалёнку в пандемию' },
      { value: '≈70 000', label: 'исторических отчётов перенесено в одном из последних проектов' }
    ],
    serbia: {
      label: 'Белград / 2022—сейчас',
      title: 'Переезд вернул мне привычку быстро делать и проверять.',
      lead: 'После больших организаций я оказался в новой стране без привычного административного веса. Пришлось снова доказывать ценность не должностью, а работающей штукой.',
      text: 'Это оказалось полезно. В Сербии я делал сервисы для визаранов и туров, приложение для нетворкинга, маркетплейс домашней еды, внутренние системы для клиентов и собственные эксперименты. Часть сработала, часть нет — и провалы тоже стали нормальной частью профессионального опыта.',
      projects: [
        {
          title: 'Dobri Visarun',
          image: '/projects/dobri-visarun.png',
          text: 'У клиента заявки жили в Facebook, почте и мессенджерах. Я собрал регистрацию, поездки и уведомления в одном мобильном PWA и убрал большую часть ручной коммуникации.',
          result: 'Около ×10 выручки примерно за три месяца без рекламы.'
        },
        {
          title: 'Dobri Tours',
          image: '/projects/dobri-tours.png',
          text: 'Из потока сообщений и ручных анонсов получился каталог поездок с записью, отзывами, бонусами и повторными продажами.',
          result: 'Клиенты стали отмечать удобство записи через приложение, а операционная рутина заметно сократилась.'
        },
        {
          title: 'Serbia Networking',
          image: '/projects/serbia-networking.png',
          text: 'На офлайн-встрече невозможно поговорить со всеми. Я сделал приложение, где участники и события оставались доступны после того, как встреча закончилась.',
          result: 'Небольшой рабочий продукт из собственной бытовой проблемы.'
        },
        {
          title: 'RuskaJela',
          image: '/projects/ruskajela.png',
          text: 'Маркетплейс домашней еды с геопоиском. Технически всё работало, но денег и плотности рынка для одновременного привлечения продавцов и покупателей не хватило.',
          result: 'Полезный провал: marketplace начинается не с кода.'
        }
      ]
    },
    portfolio: {
      label: 'Работа, которую можно показать',
      title: 'Четыре разных масштаба\nодного подхода.',
      intro: 'Мне важнее показывать не стек, а ситуацию: что было сломано или не определено, за что отвечал я, какое решение пришлось принять и что в итоге стало работать.',
      roleLabel: 'Моя роль',
      caseCta: 'Разобрать кейс →',
      more: 'В полном портфолио — ещё проекты про AI-генерацию, assessment, туризм, внутренний учёт, ERP, локальные сервисы и эксперименты. Не все были коммерческими победами; зато у каждого есть конкретный контекст и моя роль.',
      allCta: 'Открыть все кейсы ↗'
    },
    cases: sharedCases.ru,
    testimonials: {
      label: 'Чужими словами',
      title: 'Как это выглядело\nс другой стороны.',
      items: [
        {
          quote: '«Понравился подход к ведению проекта, проактивное участие в формировании технического задания, внимательность к визуальному оформлению».',
          author: 'Anton Bukin · AIS MosRazvitie'
        },
        {
          quote: '«Антон полностью отвечал за наш технический стек — от WeWeb до структуры Xano и API для расчёта результатов. Параллельно он помогал формировать продуктовое видение».',
          author: 'Tobias Weghorn · MetaFox'
        },
        {
          quote: '«Время, которое я тратил на общение с клиентами, сократилось до минимума, а бизнес значительно вырос».',
          author: 'Dobrosav J. · Dobri Visarun / Dobri Tours'
        }
      ]
    },
    needlebit: {
      label: 'Сейчас / NeedleBit',
      title: 'NeedleBit — не финал истории, а моя рабочая мастерская.',
      lead: 'Независимая практика постепенно выросла в маленькую команду и отдельный бренд.',
      text: 'Там я продолжаю делать то, что делал всю карьеру: разбирать реальный процесс, проектировать систему, собирать решение и отвечать за то, чтобы оно пережило первый релиз. Просто теперь это происходит на современном стеке и всё чаще с AI как частью инженерного процесса. Этот сайт — про меня, поэтому коммерческую часть оставляю NeedleBit.',
      primary: 'NeedleBit по-русски ↗',
      secondary: 'NeedleBit in English ↗',
      primaryUrl: 'https://needlebit.ru/',
      secondaryUrl: 'https://needlebit.dev/'
    },
    personal: {
      label: 'Вне резюме',
      title: 'Я не живу только внутри экранов.',
      lead: 'Танцы, музыка и события были рядом с работой почти всю взрослую жизнь.',
      text: 'Я танцую hustle / discofox и иногда учу других; играю на гитаре, клавишах и аккордеоне, пою; организовывал фестивали, концерты и городские события — от маленьких встреч до проектов на тысячи людей. Люблю фотографию и дизайн, хорошее кино, путешествия и длинные разговоры о психологии, философии и том, почему люди делают то, что делают.',
      interests: ['Hustle / Discofox', 'Музыка', 'События', 'Фотография', 'Дизайн', 'Психология', 'Путешествия']
    },
    identity: {
      label: 'P.S. для поисковиков',
      title: 'И да: у меня есть полный тёзка.',
      text: [
        'Mortimer, связанный с проектом «Осознанная меркантильность», — другой Антон Владиславович Назаров.',
        'Я — Antiokh: живу в Белграде, работаю в IT и веду GitHub-профиль Antiokh. Ссылки ниже ведут на мои подтверждённые профили.'
      ],
      cta: 'Мой LinkedIn ↗'
    },
    contact: {
      label: 'Контакты',
      title: 'Можно просто написать.\nБез формы на семь экранов.'
    }
  },
  en: {} as HomeContent
};

home.en = {
  ...home.ru,
  lang: 'en',
  meta: {
    title: 'Anton Nazarov (Antiokh) — technology, systems, products, people',
    description: 'Anton Nazarov’s personal site: from Lotus Notes developer at Domodedovo Airport to Head of IT, systems architect, and founder of NeedleBit. Based in Belgrade, Serbia.',
    path: '/en/'
  },
  hero: {
    eyebrow: 'Belgrade · working in IT professionally since 2008 · Antiokh',
    intro: 'Hi, I’m',
    name: 'Anton\nNazarov.',
    role: 'I started in corporate document systems, eventually ran IT for a large public institution, and now spend much of my time building again. The work I enjoy most sits where people, process, and technology refuse to line up neatly.',
    storyCta: 'How I got here ↓',
    casesCta: 'Projects and evidence',
    photoNote: 'Antiokh · Belgrade'
  },
  manifesto: {
    label: 'The short version',
    quote: '“My career was never a clean ladder of titles. It was a sequence of systems I was asked to understand — and then take more responsibility for.”',
    notes: [
      'I joined Domodedovo Airport as a junior Lotus Notes developer in 2008. I liked code, but pretty quickly I became more interested in why a process worked the way it did, where it broke, and why people escaped the official system into spreadsheets, email, and private agreements.',
      'Development gradually accumulated analysis, architecture, implementation, training, people management, and responsibility for IT as a whole. That is why I am equally comfortable in an executive discussion and inside a SQL console.'
    ]
  },
  story: {
    label: 'Professional path / 2008—now',
    title: 'Not “developer to manager.” One layer of responsibility after another.',
    lead: 'I did not stop being technical when I started managing. The scale simply changed: first a form and a workflow, then departments, budgets, security, hundreds of users, and decisions whose consequences cannot be undone with Ctrl+Z.',
    text: 'Today I use technology leader and systems architect because they are the shortest labels for work that sits between business, people, and engineering.'
  },
  timeline: [
    {
      date: '2008—2012',
      kicker: 'The first profession',
      title: 'Domodedovo → enterprise Lotus Notes',
      text: 'I started with development and support for internal systems people used every day. In my next team I introduced XPages, rewrote core workflow code for the web, and gradually moved beyond the boundary of “just implement the function.”'
    },
    {
      date: '2013—2015',
      kicker: 'Process before form',
      title: 'Settlement and Savings Bank',
      text: 'I worked with department leaders to reconstruct the real document flow and built an internal system from scratch, including 1C integration. This was where I first saw automation make not only work faster, but responsibility visible.'
    },
    {
      date: '2017—2023',
      kicker: 'Scale and institutions',
      title: 'Directorate of Cultural Centers of Moscow',
      text: 'I developed an industry platform used across a network of more than 100 institutions. Architecture here meant more than code: terminology, permissions, rules, reporting, training, support, servers, and agreements among people with different goals and different versions of the truth.'
    },
    {
      date: '2020—2022',
      kicker: 'Full responsibility',
      title: 'ZIL Cultural Center · Head of IT',
      text: 'I ran the IT function of a large public organization: team, vendors, infrastructure, security, HelpDesk, assets, and operating rules. At the start of the pandemic I moved more than 100 employees to remote work while rebuilding the department’s operating discipline.'
    },
    {
      date: '2022—now',
      kicker: 'A new environment',
      title: 'Belgrade · NeedleBit · products',
      text: 'Relocation reset the familiar context. I went back to small, fast products, a modern stack, and direct work with business owners. Over the next few years I built systems with Supabase, WeWeb, Xano, n8n, and AI tools — carrying enterprise habits around architecture, operations, and consequences into much faster delivery.'
    }
  ],
  metrics: [
    { value: '18', label: 'years working professionally in IT' },
    { value: '100+', label: 'institutions connected through one industry platform' },
    { value: '100+', label: 'employees moved to remote work during the pandemic' },
    { value: '~70,000', label: 'historical reports migrated in one recent project' }
  ],
  serbia: {
    label: 'Belgrade / 2022—now',
    title: 'Moving to Belgrade made me build small things quickly again.',
    lead: 'After years inside large organizations, I landed in a new country without the authority that came with an established role. I had to prove value with a working thing rather than a title.',
    text: 'That turned out to be useful. In Serbia I built products for visa runs and tours, a networking app, a home-food marketplace, internal client systems, and my own experiments. Some worked commercially, some did not. Failure became normal evidence too.',
    projects: [
      {
        title: 'Dobri Visarun',
        image: '/projects/dobri-visarun.png',
        text: 'The client’s requests lived across Facebook, email, and messengers. I put registration, trips, and notifications into one mobile PWA and removed much of the manual communication.',
        result: 'Roughly 10× revenue growth in about three months without advertising.'
      },
      {
        title: 'Dobri Tours',
        image: '/projects/dobri-tours.png',
        text: 'A stream of messages and manual announcements became a trip catalog with booking, reviews, rewards, and repeat sales.',
        result: 'Clients started praising the booking flow and the operational routine dropped substantially.'
      },
      {
        title: 'Serbia Networking',
        image: '/projects/serbia-networking.png',
        text: 'You cannot meet everyone in a room. I built a small app that kept events and participant cards available after the event ended.',
        result: 'A working product grown directly out of an everyday problem.'
      },
      {
        title: 'RuskaJela',
        image: '/projects/ruskajela.png',
        text: 'A geolocation marketplace for home-cooked food. The software worked, but there was not enough budget or market density to acquire sellers and buyers at the same time.',
        result: 'A useful failure: marketplaces do not start with code.'
      }
    ]
  },
  portfolio: {
    label: 'Work I can actually show',
    title: 'Four different scales\nof the same approach.',
    intro: 'I would rather show the situation than the stack: what was broken or undefined, what I personally owned, which decision had to be made, and what finally started working.',
    roleLabel: 'My role',
    caseCta: 'Read the case →',
    more: 'The full portfolio also includes AI generation, assessment products, tourism, internal accounting, ERP, local services, and experiments. Not all of them were commercial wins; every one has a concrete context and a clear account of my role.',
    allCta: 'Open the full portfolio ↗'
  },
  cases: sharedCases.en,
  testimonials: {
    label: 'In other people’s words',
    title: 'How the work looked\nfrom the other side.',
    items: [
      {
        quote: '“I liked his approach to project management, proactive participation in shaping the technical specification, and attention to visual design.”',
        author: 'Anton Bukin · AIS MosRazvitie'
      },
      {
        quote: '“Anton owned our full tech stack from WeWeb frontend to structuring the backend on Xano and building APIs for score calculation. Next to the tech he contributed to shaping the product vision.”',
        author: 'Tobias Weghorn · MetaFox'
      },
      {
        quote: '“My time spent on client interactions was minimized, and my business grew significantly.”',
        author: 'Dobrosav J. · Dobri Visarun / Dobri Tours'
      }
    ]
  },
  needlebit: {
    label: 'Now / NeedleBit',
    title: 'NeedleBit is not the ending. It is my current workshop.',
    lead: 'Independent practice gradually grew into a small team and a separate brand.',
    text: 'I keep doing what I have done throughout my career: understand the real process, design the system, build the solution, and stay responsible for what happens after the first release. The difference is a modern stack and, increasingly, AI as part of the engineering process. This site is about me, so I leave the commercial side to NeedleBit.',
    primary: 'NeedleBit in English ↗',
    secondary: 'NeedleBit по-русски ↗',
    primaryUrl: 'https://needlebit.dev/',
    secondaryUrl: 'https://needlebit.ru/'
  },
  personal: {
    label: 'Outside the résumé',
    title: 'I do have a life outside screens.',
    lead: 'Dance, music, and events have run alongside work for most of my adult life.',
    text: 'I dance hustle / discofox and sometimes teach; play guitar, keyboards, and accordion, and sing; and I have organized festivals, concerts, and city events ranging from small gatherings to projects with thousands of participants. I like photography and design, good cinema, travel, and long conversations about psychology, philosophy, and why people do what they do.',
    interests: ['Hustle / Discofox', 'Music', 'Events', 'Photography', 'Design', 'Psychology', 'Travel']
  },
  identity: {
    label: 'P.S. for search engines',
    title: 'And yes: I have an exact namesake.',
    text: [
      'Mortimer, associated with the Russian project “Conscious Mercantilism,” is a different Anton Vladislavovich Nazarov.',
      'I am Antiokh: I live in Belgrade, work in technology, and own the GitHub profile Antiokh. The links below point to my verified profiles.'
    ],
    cta: 'My LinkedIn ↗'
  },
  contact: {
    label: 'Contact',
    title: 'You can just write.\nNo seven-screen form required.'
  }
};
