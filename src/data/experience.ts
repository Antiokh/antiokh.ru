export type ExperienceLocale = 'ru' | 'en' | 'sr';

export interface ExperienceItem {
  date: string;
  organization: string;
  role: string;
  summary: string;
  paragraphs: string[];
  responsibilities: string[];
  technologies?: string[];
}

export interface ExperienceContent {
  label: string;
  title: string;
  intro: string;
  responsibilitiesLabel: string;
  technologiesLabel: string;
  items: ExperienceItem[];
}

export const experience: Record<ExperienceLocale, ExperienceContent> = {
  ru: {
    label: 'Опыт работы / подробно',
    title: 'Не две строчки на должность. Что именно я там делал.',
    intro: 'Часть ролей шла параллельно, поэтому периоды пересекаются. Каждый блок можно свернуть, но весь текст уже находится в HTML страницы: даты, работодатели, задачи, технологии и контекст доступны поисковым системам без загрузки по клику.',
    responsibilitiesLabel: 'Что входило в работу',
    technologiesLabel: 'Технологии и среда',
    items: [
      {
        date: 'Ноябрь 2022 — сейчас',
        organization: 'NeedleBit · Белград, Сербия',
        role: 'Founder / CTO / Systems Architect / Project Manager',
        summary: 'Независимая практика вокруг внутренних систем, ERP, клиентских порталов, автоматизации и AI-assisted разработки. Работаю напрямую с владельцами бизнеса и обычно отвечаю не за отдельный слой, а за систему целиком.',
        paragraphs: [
          'После переезда в Сербию я снова стал много делать руками и перенёс привычки из enterprise-среды в более быстрые клиентские проекты. Обычно задача начинается не с выбора фреймворка, а с разбора реального процесса: кто принимает решение, где живут данные, что сотрудники делают вручную, где система теряет информацию и кто сможет поддерживать её после запуска.',
          'В проектах я совмещаю discovery, архитектуру, проектирование данных и ролей, разработку, интеграции, автоматизацию, выпуск и последующую эксплуатацию. В последние годы к этому добавился отдельный слой AI-native engineering: инструкции для агентов на уровне репозитория, архитектурные ограничения, проверяемые SQL-процессы, общие helper-слои для Edge Functions, контроль состояния генерации и воспроизводимые debug-сценарии.'
        ],
        responsibilities: [
          'разбор бизнес-процессов и перевод неформальных операций в понятную модель системы',
          'архитектура приложений, баз данных, ролей, прав доступа, интеграций и автоматизаций',
          'полный цикл разработки пользовательских интерфейсов, backend-логики и административных контуров',
          'работа напрямую с founders и владельцами бизнеса: приоритеты, компромиссы, риски и этапы внедрения',
          'выбор между SaaS, self-hosted и hybrid-подходами с учётом стоимости владения и передачи системы',
          'документация, handover и организация разработки так, чтобы проект не зависел от одного исполнителя',
          'AI-assisted delivery с guardrails, checkpoints, acceptance criteria и контролем качества'
        ],
        technologies: ['PostgreSQL', 'Supabase', 'WeWeb', 'Xano', 'n8n', 'Make', 'Bubble', 'Glide', 'JavaScript / TypeScript', 'Python', 'Vue', 'Docker', 'Cloudflare', 'OpenAI', 'fal.ai', 'Telegram API']
      },
      {
        date: 'Август 2022 — ноябрь 2022',
        organization: 'Новая Бизнес Среда · Москва',
        role: 'Куратор внедрения / Product Manager',
        summary: 'Коммерческая автоматизация на PlanFix: не просто настроить ERP/CRM, а понять, почему уже внедрённые системы не становятся рабочим инструментом для клиента.',
        paragraphs: [
          'Я пришёл в компанию в момент, когда техническая реализация сама по себе не гарантировала внедрения. Фокус был на разрыве между настроенной системой и реальной работой людей: насколько процесс понятен руководителю, кто отвечает за изменение правил, почему сотрудники возвращаются в таблицы и мессенджеры и что нужно изменить в методике внедрения.',
          'Эта роль была короткой, но хорошо соединила мой технический опыт с организационным: качество внедрения определяется не количеством настроенных сущностей, а тем, встроилась ли система в ежедневную работу.'
        ],
        responsibilities: [
          'ведение внедрений ERP/CRM на PlanFix',
          'анализ причин слабого adoption после технического запуска',
          'разработка и улучшение методологии внедрения и масштабирования',
          'коучинг руководителей и обучение сотрудников',
          'контроль качества решений и организационных изменений'
        ],
        technologies: ['PlanFix', 'ERP / CRM', 'process mapping', 'implementation', 'training']
      },
      {
        date: 'Март 2020 — июнь 2022',
        organization: 'Культурный центр ЗИЛ · Москва',
        role: 'Начальник IT-отдела / Head of IT',
        summary: 'Полная ответственность за IT-функцию большой культурной организации: команда, инфраструктура, HelpDesk, безопасность, подрядчики, закупки, активы, сайты и антикризисная работа во время пандемии.',
        paragraphs: [
          'В ЗИЛе технические и управленческие задачи невозможно было разделить. Один и тот же отдел отвечал за пользовательскую поддержку, рабочие места, серверы, сеть, видеонаблюдение, учёт техники, подрядчиков и развитие цифровых сервисов. Поэтому моя работа была одновременно про архитектуру, эксплуатацию, бюджет, регламенты и людей.',
          'В начале пандемии более ста сотрудников нужно было быстро перевести на удалённую работу, не остановив организацию. Параллельно я перестраивал внутреннюю дисциплину IT: документацию, инвентаризацию, поддержку и прозрачность заявок. HelpDesk на GLPI со временем использовался не только IT, но и ещё семью службами поддержки.'
        ],
        responsibilities: [
          'реорганизация IT-отдела, документации и рабочих регламентов',
          'управление сотрудниками, подрядчиками, закупками и техническими активами',
          'запуск HelpDesk на GLPI и автоматизированной инвентаризации оборудования',
          'перевод 100+ сотрудников на удалённую работу с VPN и общими файловыми сервисами',
          'модернизация парка компьютеров и системы видеонаблюдения',
          'улучшение действующего сайта, мобильной версии и PWA-подхода',
          'подготовка технического задания на новый сайт и контроль внешней разработки',
          'физическая инвентаризация, безопасность и операционная устойчивость инфраструктуры'
        ],
        technologies: ['GLPI', 'Active Directory', 'Windows Server', 'Linux', 'SoftEther VPN', 'Yandex Disk', 'Hikvision', 'AxxonNext', 'PWA', 'networking']
      },
      {
        date: 'Сентябрь 2019 — март 2020',
        organization: 'АНО «Московское агентство соцразвития» · Москва',
        role: 'Заместитель начальника цифрового развития и IT / и. о. руководителя IT',
        summary: 'Новая организация, где IT-функцию приходилось собирать практически с нуля: от закупок и должностных инструкций до HelpDesk, Active Directory и требований к автоматизации.',
        paragraphs: [
          'Это была задача не про обслуживание готовой инфраструктуры, а про создание рабочего контура новой организации. Нужно было одновременно понимать, какая техника и ПО понадобятся сотрудникам, как вести активы, как устроить поддержку, какие документы должен иметь отдел и как готовиться к дальнейшей автоматизации процессов.',
          'Работа дала редкий опыт формирования IT-функции до того, как привычки и технический долг успели закрепиться: можно было сразу закладывать понятные правила, учёт и зоны ответственности.'
        ],
        responsibilities: [
          'подбор оборудования и ПО для закупок: рабочие станции, МФУ, серверы и сетевое оборудование',
          'подготовка документации отдела и должностных инструкций',
          'внедрение HelpDesk на GLPI с автоматизированным учётом активов',
          'внедрение телефонного справочника с привязкой сотрудников и синхронизацией с Active Directory',
          'участие в выборе подрядчиков и подготовке требований к автоматизации бизнес-процессов',
          'организация документации по оборудованию, интернету и телефонии',
          'участие в полной физической инвентаризации'
        ],
        technologies: ['GLPI', 'Active Directory', 'Windows Server', 'network infrastructure', 'asset management', 'IT procurement']
      },
      {
        date: 'Январь 2017 — май 2023',
        organization: 'ГКУК г. Москвы «Дирекция культурных центров»',
        role: 'Ведущий менеджер / IT-архитектор / аналитик / разработчик / эксперт',
        summary: 'Отраслевая информационная система для сети из 100+ учреждений. Здесь я совмещал системный анализ, разработку, архитектуру, безопасность, внедрение, обучение и ежедневную эксплуатацию.',
        paragraphs: [
          'AIS MosRazvitie была не отдельным приложением вокруг одного процесса, а общей информационной средой для Дирекции и подведомственных учреждений. В системе жили сведения об учреждениях, филиалах, площадках и помещениях, событиях, отчётности, опросах, модерации и обменах данными. Изменение одной сущности легко затрагивало отчёты, права доступа и работу десятков организаций.',
          'Большая часть архитектурной работы проходила до кода: нужно было свести терминологию разных подразделений, формализовать правила, понять жизненный цикл данных и решить, что является источником истины. После этого я сам реализовывал изменения, сопровождал серверную часть, искал угрозы безопасности, делал генераторы форм, фильтров и выгрузок, интерактивную карту объектов и обучал пользователей через вебинары.'
        ],
        responsibilities: [
          'модель данных и модульная архитектура отраслевой информационной системы',
          'анализ существующего кода, процессов и структурных ограничений legacy-системы',
          'разработка форм, отчётных механизмов, экспортов, фильтров и сервисных функций',
          'правила доступа, поиск угроз информационной безопасности и изменение модели безопасности',
          'интерактивная карта объектов на Yandex Maps API с актуальными данными',
          'миграции, серверная эксплуатация, резервное копирование и поддержка',
          'регламенты внесения изменений, доступов и сопровождения',
          'вебинары, обучение пользователей и сбор обратной связи',
          'экспертная работа в IT-проектах Департамента культуры и взаимодействие с учреждениями'
        ],
        technologies: ['IBM Domino / Notes', 'XPages', 'Java', 'JavaScript', 'HTML', 'CSS', 'XML', 'NoSQL', 'Yandex Maps API', 'Windows / Linux servers']
      },
      {
        date: 'Январь 2013 — сентябрь 2015',
        organization: 'Банк Расчётов и Сбережений · Москва',
        role: 'Lead Software Developer / Systems Architect',
        summary: 'Внутренний электронный документооборот банка, построенный с нуля на основе реального процесса подразделений и интегрированный с 1С.',
        paragraphs: [
          'В банке я впервые в большом объёме работал не от готового технического задания, а от реального движения документов. Вместе с руководителями подразделений разбирал, кто создаёт документ, как он согласуется, как присваиваются номера, где возникают задержки и какие данные должны попадать в смежные системы.',
          'Результатом стала внутренняя система документооборота с интеграцией с 1С. Для меня это был важный переход от разработки отдельных функций к системному проектированию: автоматизация одновременно ускоряла работу и делала маршрут документа и ответственность наблюдаемыми.'
        ],
        responsibilities: [
          'сбор и формализация требований вместе с руководителями подразделений',
          'проектирование и разработка внутренней системы документооборота с нуля',
          'архитектура данных, маршрутов согласования и служебной логики',
          'интеграция с 1С и внутренними системами',
          'поддержка, развитие и внедрение системы в ежедневную работу'
        ],
        technologies: ['IBM Lotus Notes / Domino', 'LotusScript', 'JavaScript', '1C integration', 'enterprise document management']
      },
      {
        date: '2012',
        organization: 'IscTravel Law Agency · Москва',
        role: 'Проектный технический специалист',
        summary: 'Короткий проектный этап между корпоративным Lotus Notes и банковской автоматизацией; добавил опыт самостоятельного решения прикладных задач вне большой внутренней IT-команды.',
        paragraphs: [
          'Это был небольшой проектный эпизод, поэтому я не раздуваю его до полноценной карьерной главы. Он важен скорее как переход: к тому моменту я уже мог брать ограниченную техническую задачу целиком, сам разбираться в контексте и доводить её до рабочего состояния.'
        ],
        responsibilities: [
          'проектная техническая работа в небольшой организации',
          'самостоятельный анализ и реализация прикладных решений',
          'поддержка и эксплуатация результата после внедрения'
        ]
      },
      {
        date: 'Январь 2011 — апрель 2012',
        organization: 'IT-компания / отдел Lotus Notes · Москва',
        role: 'Lotus Notes Specialist',
        summary: 'Разработка и сопровождение корпоративного документооборота в интеграционной компании; здесь к Notes/Domino добавились XPages и веб-интерфейсы.',
        paragraphs: [
          'Я продолжал работать с внутренними корпоративными системами, но уже в среде системного интегратора. Помимо поддержки существующих баз, занимался модернизацией интерфейсов и переносом части логики в веб через XPages.',
          'Этот этап окончательно вывел меня из роли человека, который только исправляет отдельные формы: приходилось разбираться в чужой архитектуре, накопленном backlog и взаимосвязях между базами.'
        ],
        responsibilities: [
          'поддержка и развитие системы документооборота на Lotus Notes / Domino',
          'внедрение XPages и веб-интерфейсов',
          'разбор существующей кодовой базы и накопленных запросов на изменения',
          'унификация интерфейсов и модернизация нескольких баз',
          'закрытие большого backlog улучшений, накопленного за предыдущие годы'
        ],
        technologies: ['Lotus Notes / Domino', 'XPages', 'LotusScript', 'SSJS', 'JavaScript']
      },
      {
        date: 'Январь 2009 — январь 2011',
        organization: 'Фриланс / частная практика · Москва',
        role: 'Разработчик и технический специалист',
        summary: 'Ранний период самостоятельной работы параллельно с корпоративной карьерой: небольшие системы, сайты, автоматизация и задачи, где нужно было самому отвечать за весь технический результат.',
        paragraphs: [
          'Частная практика появилась почти сразу после входа в профессию. Масштаб задач был меньше, зато зона ответственности шире: не было отдельного аналитика, администратора и человека по внедрению, поэтому приходилось самостоятельно договариваться о задаче, выбирать решение, собирать его и потом поддерживать.',
          'Эта привычка полного владения небольшой системой позже хорошо соединилась с enterprise-опытом и стала основой нынешней работы с клиентскими продуктами.'
        ],
        responsibilities: [
          'самостоятельная разработка небольших веб- и внутренних решений',
          'скрипты, автоматизация и работа с данными',
          'настройка и сопровождение небольших систем',
          'общение с заказчиком без отдельного слоя project management',
          'ответственность за решение от постановки задачи до поддержки'
        ]
      },
      {
        date: 'Сентябрь 2008 — сентябрь 2009',
        organization: 'Московский аэропорт Домодедово',
        role: 'Junior Lotus Notes Developer',
        summary: 'Первая корпоративная IT-роль: внутренние системы документооборота крупного аэропорта на Lotus Notes / Domino.',
        paragraphs: [
          'После внутреннего обучения я начал младшим Lotus Notes-разработчиком. Это были системы, которыми сотрудники пользовались каждый день: документы, согласования, формы и поддержка. Ранний опыт сразу оказался enterprise-опытом — с действующими процессами, зависимостями и пользователями, для которых сбой был рабочей проблемой, а не учебным упражнением.',
          'Именно здесь закрепилась мысль, которая потом повторялась всю карьеру: формально работающий код недостаточен, если система плохо совпадает с процессом или её невозможно нормально сопровождать.'
        ],
        responsibilities: [
          'настройка, модернизация и поддержка корпоративных систем Lotus Notes / Domino',
          'работа с формами и маршрутами корпоративного документооборота',
          'интеграция Lotus-приложений со сторонними продуктами через OLE',
          'исправление ошибок и изменения в уже работающих системах'
        ],
        technologies: ['IBM Lotus Notes / Domino', 'LotusScript', 'OLE', 'enterprise workflow']
      }
    ]
  },
  en: {
    label: 'Professional experience / in detail',
    title: 'More than two lines per job. What I actually did.',
    intro: 'Some roles overlapped, so the dates overlap as well. Each section can be collapsed, but all of the copy is present in the server-rendered HTML: employers, dates, responsibilities, technologies, and context are available without loading anything after a click.',
    responsibilitiesLabel: 'What the work included',
    technologiesLabel: 'Technology and environment',
    items: [
      {
        date: 'Nov 2022 — present', organization: 'NeedleBit · Belgrade, Serbia', role: 'Founder / CTO / Systems Architect / Project Manager',
        summary: 'Independent work around internal systems, ERP, client portals, automation, and AI-assisted engineering. I usually own the system rather than a single implementation layer.',
        paragraphs: [
          'After moving to Serbia I returned to hands-on building and brought enterprise habits into faster client work. A project usually starts with the operating process rather than a framework: who makes decisions, where the data lives, what employees do manually, where information is lost, and who will be able to continue the system after launch.',
          'My work combines discovery, architecture, data and permission design, implementation, integrations, automation, release, and operations. More recently I added an AI-native engineering layer: repository-level agent instructions, architectural guardrails, auditable SQL workflows, shared Edge Function helpers, persisted generation state, and reproducible debugging flows.'
        ],
        responsibilities: ['business-process discovery and system modeling', 'application, database, permission, integration, and automation architecture', 'full-cycle frontend, backend, and administrative implementation', 'direct work with founders and owners on priorities, risks, and staged delivery', 'SaaS vs self-hosted vs hybrid trade-offs around ownership and cost', 'documentation, handover, and reduced key-person dependency', 'AI-assisted delivery with guardrails, checkpoints, acceptance criteria, and quality control'],
        technologies: ['PostgreSQL', 'Supabase', 'WeWeb', 'Xano', 'n8n', 'Make', 'Bubble', 'Glide', 'JavaScript / TypeScript', 'Python', 'Vue', 'Docker', 'Cloudflare', 'OpenAI', 'fal.ai', 'Telegram API']
      },
      {
        date: 'Aug 2022 — Nov 2022', organization: 'New Business Environment · Moscow', role: 'Implementation Curator / Product Manager',
        summary: 'Commercial PlanFix ERP/CRM implementation with a focus on the gap between technical delivery and actual adoption.',
        paragraphs: ['I joined an automation company to understand why technically delivered ERP/CRM systems were not always becoming real working tools for clients. The work focused on the operating gap: whether managers understood the process, who owned changes, why employees returned to spreadsheets and messengers, and what had to change in the implementation method.', 'The role was short, but it connected my technical background with organizational change very clearly: implementation quality is measured by daily use, not by the number of configured entities.'],
        responsibilities: ['ERP/CRM implementation on PlanFix', 'analysis of weak adoption after technical launch', 'implementation and scaling methodology', 'management coaching and employee training', 'quality control of solutions and organizational change'],
        technologies: ['PlanFix', 'ERP / CRM', 'process mapping', 'implementation', 'training']
      },
      {
        date: 'Mar 2020 — Jun 2022', organization: 'ZIL Cultural Center · Moscow', role: 'Head of IT Department',
        summary: 'Full responsibility for the IT function of a large cultural organization: team, infrastructure, HelpDesk, security, vendors, procurement, assets, websites, and pandemic response.',
        paragraphs: ['At ZIL, technical and management work could not be separated. The same function covered user support, workstations, servers, networking, video surveillance, asset tracking, vendors, and digital services. My role therefore combined architecture, operations, budgets, governance, and people management.', 'At the start of the pandemic more than 100 employees had to move to remote work without stopping the organization. At the same time I rebuilt IT operating discipline around documentation, inventory, support, and transparent requests. The GLPI HelpDesk later served IT and seven additional support services.'],
        responsibilities: ['IT department reorganization, documentation, and operating rules', 'staff, vendors, procurement, and technical asset management', 'GLPI HelpDesk and automated hardware inventory', 'remote-work rollout for 100+ employees using VPN and shared file services', 'computer fleet and video-surveillance modernization', 'website improvements, mobile adaptation, and PWA work', 'technical specification for a new website and supervision of external delivery', 'physical inventory, security, and infrastructure continuity'],
        technologies: ['GLPI', 'Active Directory', 'Windows Server', 'Linux', 'SoftEther VPN', 'Yandex Disk', 'Hikvision', 'AxxonNext', 'PWA', 'networking']
      },
      {
        date: 'Sep 2019 — Mar 2020', organization: 'Moscow Social Development Agency · Moscow', role: 'Deputy Head of Digital Development and IT / Acting Head of IT',
        summary: 'A newly created organization where the IT function had to be built nearly from scratch: procurement, role descriptions, HelpDesk, Active Directory, asset management, and automation requirements.',
        paragraphs: ['This was not maintenance of a mature environment. We were building the operating IT layer of a new organization while deciding what equipment and software people needed, how assets would be tracked, how support should work, which documents the department required, and how later process automation should be approached.', 'It provided a rare chance to establish IT governance before legacy habits and technical debt had fully formed.'],
        responsibilities: ['hardware and software selection for procurement', 'department documentation and role descriptions', 'GLPI HelpDesk with automated asset inventory', 'phone directory with employee mapping and Active Directory synchronization', 'vendor selection and requirements for business-process automation', 'documentation for equipment, Internet contracts, and telephony', 'full physical inventory work'],
        technologies: ['GLPI', 'Active Directory', 'Windows Server', 'network infrastructure', 'asset management', 'IT procurement']
      },
      {
        date: 'Jan 2017 — May 2023', organization: 'Directorate of Cultural Centers of Moscow', role: 'Senior Manager / IT Architect / Analyst / Developer / Expert',
        summary: 'An industry information system for a network of 100+ institutions. The role combined systems analysis, development, architecture, security, rollout, training, and day-to-day operations.',
        paragraphs: ['AIS MosRazvitie was a shared operational environment for the Directorate and subordinate institutions rather than a single-purpose application. It covered institutions, branches, locations, rooms, events, reporting, surveys, moderation, and data exchange. A change to one domain object could affect reports, permissions, and workflows across dozens of organizations.', 'Much of the architecture happened before code: aligning terminology across departments, formalizing rules, defining data lifecycles, and deciding which source should be authoritative. I then implemented changes, maintained the server side, reviewed security risks, built form/filter/export generators and an interactive object map, and trained users through webinars.'],
        responsibilities: ['data model and modular architecture for an industry information system', 'analysis of legacy code, processes, and structural constraints', 'forms, reports, exports, filters, and service functions', 'access rules, security threat analysis, and security-model redesign', 'interactive Yandex Maps object map with live data', 'migration, server operations, backups, and support', 'change, access, and maintenance regulations', 'webinars, user training, and feedback collection', 'IT expert work for Department of Culture initiatives and institutional coordination'],
        technologies: ['IBM Domino / Notes', 'XPages', 'Java', 'JavaScript', 'HTML', 'CSS', 'XML', 'NoSQL', 'Yandex Maps API', 'Windows / Linux servers']
      },
      {
        date: 'Jan 2013 — Sep 2015', organization: 'Settlement and Savings Bank · Moscow', role: 'Lead Software Developer / Systems Architect',
        summary: 'An internal bank document-management system built from scratch around the real workflows of departments and integrated with 1C.',
        paragraphs: ['This was the first stage where I worked extensively from the actual movement of documents rather than a finished technical specification. Together with department heads I reconstructed who created each document, how approval worked, how numbering was assigned, where delays occurred, and which data had to reach adjacent systems.', 'The result was an internal document workflow system with 1C integration. It marked my transition from implementing individual functions to designing systems: automation made work faster while also making the route and ownership of a document visible.'],
        responsibilities: ['requirements discovery with department leaders', 'design and development of the internal document system from scratch', 'data, approval-route, and service-logic architecture', '1C and internal-system integrations', 'support, evolution, and adoption'],
        technologies: ['IBM Lotus Notes / Domino', 'LotusScript', 'JavaScript', '1C integration', 'enterprise document management']
      },
      {
        date: '2012', organization: 'IscTravel Law Agency · Moscow', role: 'Project-based technical specialist',
        summary: 'A short project engagement between enterprise Lotus Notes work and the later banking automation role.',
        paragraphs: ['This was a small project episode, so it should not be inflated into a major career chapter. Its value is in the transition: by then I could take a bounded technical problem, understand the context independently, implement a solution, and remain responsible for the working result.'],
        responsibilities: ['project-based technical work in a small organization', 'independent analysis and implementation', 'support of the delivered solution']
      },
      {
        date: 'Jan 2011 — Apr 2012', organization: 'IT company / Lotus Notes department · Moscow', role: 'Lotus Notes Specialist',
        summary: 'Corporate document-system development and support in a systems-integration environment, adding XPages and web interfaces to Notes/Domino work.',
        paragraphs: ['I continued working with enterprise internal systems, now inside a systems integrator. Alongside existing database support, I modernized interfaces and moved parts of the workflow to the web with XPages.', 'This period pushed me beyond isolated form changes: I had to understand an inherited architecture, a large accumulated backlog, and dependencies between several databases.'],
        responsibilities: ['Lotus Notes / Domino document-system support and development', 'XPages and web-interface adoption', 'analysis of inherited code and change requests', 'interface unification and database modernization', 'resolution of a large backlog accumulated over previous years'],
        technologies: ['Lotus Notes / Domino', 'XPages', 'LotusScript', 'SSJS', 'JavaScript']
      },
      {
        date: 'Jan 2009 — Jan 2011', organization: 'Freelance / private practice · Moscow', role: 'Developer and technical specialist',
        summary: 'Early independent work alongside the corporate career: small systems, web work, automation, and assignments where I owned the complete technical result.',
        paragraphs: ['Independent work started almost immediately after I entered the profession. The projects were smaller, but the responsibility was wider: there was no separate analyst, administrator, or implementation manager, so I had to clarify the request, choose the approach, build it, and support it.', 'That habit of owning a small system end to end later combined with enterprise experience and became the basis for my current client work.'],
        responsibilities: ['small web and internal-system development', 'scripting, automation, and data work', 'setup and maintenance of small systems', 'direct client communication without a separate PM layer', 'ownership from request clarification through support']
      },
      {
        date: 'Sep 2008 — Sep 2009', organization: 'Domodedovo Airport · Moscow', role: 'Junior Lotus Notes Developer',
        summary: 'My first corporate IT role: internal document and workflow systems for a major airport on Lotus Notes / Domino.',
        paragraphs: ['After internal training I joined as a junior Lotus Notes developer. These were systems employees used every day: documents, approvals, forms, and support. My first professional role was therefore already an enterprise environment with live processes, dependencies, and users for whom a failure was an operational problem rather than a training exercise.', 'This is where an idea that followed the rest of my career first became obvious: formally correct code is not enough when the system does not match the real process or cannot be maintained properly.'],
        responsibilities: ['configuration, modernization, and support of Lotus Notes / Domino systems', 'forms and enterprise document workflows', 'integration with third-party products through OLE', 'bug fixing and changes in live internal systems'],
        technologies: ['IBM Lotus Notes / Domino', 'LotusScript', 'OLE', 'enterprise workflow']
      }
    ]
  },
  sr: {
    label: 'Radno iskustvo / detaljnije',
    title: 'Karijera kroz sisteme i odgovornost.',
    intro: 'Detaljna ruska i engleska verzija sadrže pun opis svake uloge. Ovde ostavljam sažet pregled, dok je sadržaj stranice i dalje statički renderovan.',
    responsibilitiesLabel: 'Šta je posao uključivao',
    technologiesLabel: 'Tehnologije i okruženje',
    items: [
      { date: 'Nov 2022 — danas', organization: 'NeedleBit · Beograd', role: 'Founder / CTO / Systems Architect', summary: 'Poslovni sistemi, automatizacija, arhitektura i hands-on razvoj za klijente i sopstvene proizvode.', paragraphs: ['Rad direktno sa vlasnicima biznisa, od analize procesa i arhitekture do implementacije, puštanja i handover-a.'], responsibilities: ['arhitektura sistema i podataka', 'full-stack razvoj i integracije', 'automatizacija i AI-assisted engineering'], technologies: ['Supabase', 'PostgreSQL', 'WeWeb', 'Xano', 'n8n', 'JavaScript', 'Python'] },
      { date: '2017 — 2023', organization: 'Direkcija kulturnih centara Moskve', role: 'IT arhitekta / analitičar / developer / ekspert', summary: 'Sektorski informacioni sistem za mrežu od 100+ ustanova.', paragraphs: ['Model podataka, izveštavanje, bezbednost, obuka, podrška i svakodnevna eksploatacija jednog velikog sistema.'], responsibilities: ['arhitektura i razvoj', 'prava pristupa i bezbednost', 'izveštavanje, obuka i podrška'], technologies: ['IBM Domino', 'XPages', 'JavaScript', 'Java', 'XML'] },
      { date: 'Mar 2020 — jun 2022', organization: 'Kulturni centar ZIL · Moskva', role: 'Head of IT', summary: 'Odgovornost za celu IT funkciju velike organizacije.', paragraphs: ['Tim, dobavljači, infrastruktura, HelpDesk, bezbednost, imovina i prelazak 100+ zaposlenih na rad na daljinu tokom pandemije.'], responsibilities: ['vođenje IT tima', 'GLPI HelpDesk i inventar', 'infrastruktura i bezbednost'], technologies: ['GLPI', 'Active Directory', 'Windows Server', 'Linux', 'VPN'] },
      { date: 'Jan 2013 — sep 2015', organization: 'Settlement and Savings Bank · Moskva', role: 'Lead Software Developer / Systems Architect', summary: 'Interni sistem za dokumentaciju napravljen od nule i povezan sa 1C.', paragraphs: ['Proces je rekonstruisan zajedno sa rukovodiocima odeljenja, a zatim preveden u podatke, rute odobravanja i integracije.'], responsibilities: ['analiza procesa', 'arhitektura i razvoj', '1C integracija'], technologies: ['Lotus Notes / Domino', 'LotusScript', 'JavaScript'] },
      { date: 'Sep 2008 — sep 2009', organization: 'Aerodrom Domodedovo · Moskva', role: 'Junior Lotus Notes Developer', summary: 'Prva korporativna IT uloga u enterprise dokumentacionim sistemima.', paragraphs: ['Razvoj, modernizacija i podrška živih Lotus Notes / Domino sistema.'], responsibilities: ['razvoj i podrška', 'workflow forme', 'OLE integracije'], technologies: ['Lotus Notes / Domino', 'LotusScript', 'OLE'] }
    ]
  }
};
