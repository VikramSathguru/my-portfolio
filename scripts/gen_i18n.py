# -*- coding: utf-8 -*-
import json
from pathlib import Path
from copy import deepcopy

en = json.loads(Path("messages/en.json").read_text(encoding="utf-8"))

translations = {
  "pt": {
    "Meta": {
      "title": "Vikram Sathguru — Desenvolvedor Full Stack Sênior",
      "description": "Desenvolvedor Full Stack Sênior com mais de 10 anos de experiência criando plataformas web escaláveis, e-commerce, CRMs e automação com IA. PolarSync · NUS."
    },
    "Nav": {
      "portfolio": "Portfólio",
      "about": "Sobre mim",
      "contact": "Fale conosco",
      "openMenu": "Abrir menu",
      "home": "Vikram Sathguru — início",
      "language": "Idioma"
    },
    "Hero": {
      "role": "Desenvolvedor Full Stack Sênior",
      "company": "PolarSync",
      "headline": "Entregando software de qualidade com desempenho incomparável.",
      "tagline": "Eu projetoo e desenvolvo plataformas web escaláveis, soluções de e-commerce, sistemas CRM e automação com IA que geram valor duradouro.",
      "ctaTalk": "Vamos conversar",
      "ctaPortfolio": "Ver portfólio",
      "bannerAlt": "Banner do portfólio de Vikram Sathguru"
    },
    "Portfolio": {
      "eyebrow": "Portfólio",
      "title": "Nosso trabalho",
      "description": "Explore plataformas e sistemas selecionados em web, mobile, e-commerce e automação com IA.",
      "empty": "Ainda não há projetos nesta categoria.",
      "filters": {
        "all": "Todos",
        "web": "Desenvolvimento Web",
        "mobile": "App Mobile",
        "uiux": "UI/UX Design",
        "ecommerce": "E-Commerce",
        "ai": "IA e Automação"
      },
      "projects": {
        "crm-platforms": {"title": "Plataformas CRM personalizadas", "summary": "Gestão de clientes, fluxos e automação de processos"},
        "ai-chatbots": {"title": "Assistentes chatbot com IA", "summary": "Comunicação inteligente com integrações OpenAI"},
        "marketplace-platforms": {"title": "Plataformas de marketplace", "summary": "Pagamentos, catálogos, usuários e backends escaláveis"},
        "ecommerce-solutions": {"title": "Soluções de e-commerce", "summary": "Shopify, WooCommerce, pagamentos e pedidos"},
        "saas-platforms": {"title": "Plataformas web SaaS", "summary": "Aplicações de negócios escaláveis com Next.js e Node.js"},
        "marketing-automation": {"title": "Automação de marketing", "summary": "Google Ads, APIs Meta e integrações de analytics"},
        "customer-data-systems": {"title": "Sistemas de dados de clientes", "summary": "Design de banco de dados e migrações em larga escala"},
        "business-automation": {"title": "Ferramentas de automação", "summary": "Otimização de processos que gera valor após o lançamento"}
      }
    },
    "Expertise": {
      "eyebrow": "Habilidades técnicas",
      "title": "Expertise em toda a stack",
      "description": "Do frontend aos sistemas backend, e-commerce, CRM e automação com IA — feitos para confiabilidade e escala.",
      "areas": {
        "frontend": {"title": "Frontend", "description": "Interfaces responsivas e intuitivas com arquiteturas React modernas."},
        "backend": {"title": "Backend", "description": "APIs e serviços para SaaS, marketplaces e automação de negócios."},
        "database": {"title": "Banco de dados", "description": "Modelos confiáveis, migrações e arquiteturas multi-banco."},
        "ecommerce": {"title": "E-Commerce", "description": "Lojas e operações — de catálogos e checkout à gestão de pedidos."},
        "ai": {"title": "IA e Automação", "description": "Assistentes inteligentes e automação que reduzem trabalho manual."},
        "business": {"title": "Sistemas de negócios", "description": "CRMs, integrações de marketing e automação operacional."}
      }
    },
    "About": {
      "eyebrow": "Sobre mim",
      "title": "Sistemas que continuam gerando valor após o lançamento",
      "p1": "Desenvolvedor Full Stack Sênior com mais de 10 anos de experiência projetando e desenvolvendo plataformas web escaláveis, sistemas de gestão, e-commerce e ferramentas de automação.",
      "p2": "Especializo-me em produtos digitais confiáveis com React, Next.js, Node.js, Python, PostgreSQL, MySQL e cloud. Minha experiência inclui CRMs personalizados, integrações de API, gestão de clientes, automação de marketing e aplicações com IA.",
      "p3": "Trabalhei com empresas internacionais e times remotos, entregando soluções que melhoram eficiência, automatizam processos e criam melhores experiências. Minha abordagem une arquitetura limpa, UX intuitiva, integrações seguras e escalabilidade de longo prazo.",
      "stats": {
        "years": "Anos de experiência",
        "education": "Mestrado e Bacharelado em Ciência da Computação",
        "reach": "Times remotos e internacionais"
      },
      "experienceEyebrow": "Experiência profissional",
      "jobTitle": "Desenvolvedor Full Stack Sênior",
      "company": "PolarSync",
      "highlights": {
        "h1": "Projetei e desenvolvi plataformas web escaláveis, SaaS, marketplaces e automação com React, Next.js, Node.js, TypeScript, Python e PostgreSQL.",
        "h2": "Construí CRMs personalizados para gestão de clientes, organização de dados, automação de fluxos e otimização de processos.",
        "h3": "Desenvolvi chatbots com IA e assistentes inteligentes que automatizam comunicação e geram respostas personalizadas.",
        "h4": "Entreguei marketplaces com gestão de usuários, pagamentos, catálogos e backends escaláveis.",
        "h5": "Desenhei estruturas de banco e migrações para grandes conjuntos de dados com PostgreSQL, MySQL e MongoDB."
      },
      "processEyebrow": "Como eu trabalho",
      "process": {
        "01": {"title": "Ideias", "text": "Esclareço objetivos, usuários e restrições antes de construir."},
        "02": {"title": "Design", "text": "Defino arquitetura e UX intuitivas, confiáveis e prontas para escalar."},
        "03": {"title": "Desenvolver", "text": "Entrego sistemas confiáveis com React, Next.js, Node.js e APIs limpas."},
        "04": {"title": "Impacto real", "text": "Lanço soluções que melhoram eficiência e continuam gerando valor."}
      },
      "educationEyebrow": "Formação",
      "masters": "Mestrado em Ciência da Computação",
      "bachelors": "Bacharelado em Ciência da Computação",
      "school": "National University of Singapore (NUS)",
      "mastersPeriod": "Ago 2017 – Jun 2019",
      "bachelorsPeriod": "Ago 2013 – Jun 2017",
      "singapore": "Singapura",
      "location": "Singapura · Remoto"
    },
    "Contact": {
      "eyebrow": "Contato",
      "title": "Vamos falar do seu projeto",
      "description": "Conte-me sobre sua plataforma web, loja, CRM ou ideia de automação — eu ajudo a transformá-la em um produto que gera valor.",
      "email": "E-mail",
      "phone": "Telefone",
      "location": "Localização",
      "name": "Nome completo",
      "namePlaceholder": "Seu nome",
      "emailLabel": "E-mail",
      "emailPlaceholder": "voce@empresa.com",
      "phoneLabel": "Telefone",
      "phonePlaceholder": "+55 ...",
      "message": "Detalhes do projeto",
      "messagePlaceholder": "Compartilhe objetivos, prazo e preferências de stack...",
      "submit": "Enviar mensagem",
      "sent": "Abrindo seu cliente de e-mail… Se nada abrir, escreva para",
      "mailSubject": "Contato do portfólio de {name}"
    },
    "Footer": {
      "blurb": "Desenvolvedor Full Stack Sênior criando plataformas web escaláveis, e-commerce, CRM e automação com IA.",
      "navigate": "Navegar",
      "connect": "Conectar",
      "contact": "Contato",
      "rights": "Todos os direitos reservados.",
      "backToTop": "Voltar ao topo"
    }
  },
  "es": {
    "Meta": {
      "title": "Vikram Sathguru — Desarrollador Full Stack Senior",
      "description": "Desarrollador Full Stack Senior con más de 10 años de experiencia creando plataformas web escalables, e-commerce, CRM y automatización con IA. PolarSync · NUS."
    },
    "Nav": {
      "portfolio": "Portafolio",
      "about": "Sobre mí",
      "contact": "Contáctanos",
      "openMenu": "Abrir menú",
      "home": "Vikram Sathguru — inicio",
      "language": "Idioma"
    },
    "Hero": {
      "role": "Desarrollador Full Stack Senior",
      "company": "PolarSync",
      "headline": "Entregando software de calidad con un rendimiento inigualable.",
      "tagline": "Diseño y desarrollo plataformas web escalables, soluciones de e-commerce, sistemas CRM y automatización con IA que crean valor duradero.",
      "ctaTalk": "Hablemos",
      "ctaPortfolio": "Ver portafolio",
      "bannerAlt": "Banner del portafolio de Vikram Sathguru"
    },
    "Portfolio": {
      "eyebrow": "Portafolio",
      "title": "Nuestro trabajo",
      "description": "Explora plataformas y sistemas seleccionados en web, móvil, e-commerce y automatización con IA.",
      "empty": "Aún no hay proyectos en esta categoría.",
      "filters": {
        "all": "Todo",
        "web": "Desarrollo Web",
        "mobile": "App Móvil",
        "uiux": "Diseño UI/UX",
        "ecommerce": "E-Commerce",
        "ai": "IA y Automatización"
      },
      "projects": {
        "crm-platforms": {"title": "Plataformas CRM personalizadas", "summary": "Gestión de clientes, flujos y automatización de procesos"},
        "ai-chatbots": {"title": "Asistentes chatbot con IA", "summary": "Comunicación inteligente con integraciones OpenAI"},
        "marketplace-platforms": {"title": "Plataformas marketplace", "summary": "Pagos, catálogos, usuarios y backends escalables"},
        "ecommerce-solutions": {"title": "Soluciones de e-commerce", "summary": "Shopify, WooCommerce, pagos y pedidos"},
        "saas-platforms": {"title": "Plataformas web SaaS", "summary": "Aplicaciones empresariales escalables con Next.js y Node.js"},
        "marketing-automation": {"title": "Automatización de marketing", "summary": "Google Ads, APIs de Meta e integraciones de analytics"},
        "customer-data-systems": {"title": "Sistemas de datos de clientes", "summary": "Diseño de bases de datos y migraciones a gran escala"},
        "business-automation": {"title": "Herramientas de automatización", "summary": "Optimización de procesos que genera valor tras el lanzamiento"}
      }
    },
    "Expertise": {
      "eyebrow": "Habilidades técnicas",
      "title": "Experiencia en toda la stack",
      "description": "Desde el frontend hasta sistemas backend, e-commerce, CRM y automatización con IA — hechos para fiabilidad y escala.",
      "areas": {
        "frontend": {"title": "Frontend", "description": "Interfaces responsivas e intuitivas con arquitecturas React modernas."},
        "backend": {"title": "Backend", "description": "APIs y servicios para SaaS, marketplaces y automatización de negocio."},
        "database": {"title": "Base de datos", "description": "Modelos fiables, migraciones y arquitecturas multi-base."},
        "ecommerce": {"title": "E-Commerce", "description": "Tiendas y operaciones — de catálogos y checkout a pedidos."},
        "ai": {"title": "IA y Automatización", "description": "Asistentes inteligentes y automatización que reducen trabajo manual."},
        "business": {"title": "Sistemas de negocio", "description": "CRMs, integraciones de marketing y automatización operativa."}
      }
    },
    "About": {
      "eyebrow": "Sobre mí",
      "title": "Sistemas que siguen creando valor después del lanzamiento",
      "p1": "Desarrollador Full Stack Senior con más de 10 años de experiencia diseñando y desarrollando plataformas web escalables, sistemas de gestión, e-commerce y herramientas de automatización.",
      "p2": "Me especializo en productos digitales fiables con React, Next.js, Node.js, Python, PostgreSQL, MySQL y cloud. Mi experiencia incluye CRMs personalizados, integraciones API, gestión de clientes, automatización de marketing y aplicaciones con IA.",
      "p3": "He trabajado con empresas internacionales y equipos remotos, entregando soluciones que mejoran la eficiencia, automatizan procesos y crean mejores experiencias. Mi enfoque combina arquitectura limpia, UX intuitiva, integraciones seguras y escalabilidad a largo plazo.",
      "stats": {
        "years": "Años de experiencia",
        "education": "Máster y Grado en Ciencias de la Computación",
        "reach": "Equipos remotos e internacionales"
      },
      "experienceEyebrow": "Experiencia laboral",
      "jobTitle": "Desarrollador Full Stack Senior",
      "company": "PolarSync",
      "highlights": {
        "h1": "Diseñé y desarrollé plataformas web escalables, SaaS, marketplaces y automatización con React, Next.js, Node.js, TypeScript, Python y PostgreSQL.",
        "h2": "Construí CRMs personalizados para gestión de clientes, organización de datos, automatización de flujos y optimización de procesos.",
        "h3": "Desarrollé chatbots con IA y asistentes inteligentes que automatizan la comunicación y generan respuestas personalizadas.",
        "h4": "Entregué marketplaces con gestión de usuarios, pagos, catálogos y backends escalables.",
        "h5": "Diseñé estructuras de base de datos y migraciones para grandes conjuntos de datos con PostgreSQL, MySQL y MongoDB."
      },
      "processEyebrow": "Cómo trabajo",
      "process": {
        "01": {"title": "Ideas", "text": "Clarifico objetivos, usuarios y restricciones antes de construir."},
        "02": {"title": "Diseño", "text": "Defino arquitectura y UX intuitivas, confiables y listas para escalar."},
        "03": {"title": "Desarrollar", "text": "Entrego sistemas fiables con React, Next.js, Node.js y APIs limpias."},
        "04": {"title": "Impacto real", "text": "Lanzo soluciones que mejoran la eficiencia y siguen creando valor."}
      },
      "educationEyebrow": "Educación",
      "masters": "Máster en Ciencias de la Computación",
      "bachelors": "Grado en Ciencias de la Computación",
      "school": "National University of Singapore (NUS)",
      "mastersPeriod": "Ago 2017 – Jun 2019",
      "bachelorsPeriod": "Ago 2013 – Jun 2017",
      "singapore": "Singapur",
      "location": "Singapur · Remoto"
    },
    "Contact": {
      "eyebrow": "Contacto",
      "title": "Hablemos de tu proyecto",
      "description": "Cuéntame sobre tu plataforma web, tienda, CRM o idea de automatización — te ayudo a convertirla en un producto que crea valor.",
      "email": "Correo",
      "phone": "Teléfono",
      "location": "Ubicación",
      "name": "Nombre completo",
      "namePlaceholder": "Tu nombre",
      "emailLabel": "Correo electrónico",
      "emailPlaceholder": "tu@empresa.com",
      "phoneLabel": "Teléfono",
      "phonePlaceholder": "+34 ...",
      "message": "Detalles del proyecto",
      "messagePlaceholder": "Comparte objetivos, plazos y preferencias de stack...",
      "submit": "Enviar mensaje",
      "sent": "Abriendo tu cliente de correo… Si no se abre nada, escribe a",
      "mailSubject": "Consulta del portafolio de {name}"
    },
    "Footer": {
      "blurb": "Desarrollador Full Stack Senior creando plataformas web escalables, e-commerce, CRM y automatización con IA.",
      "navigate": "Navegar",
      "connect": "Conectar",
      "contact": "Contacto",
      "rights": "Todos los derechos reservados.",
      "backToTop": "Volver arriba"
    }
  },
  "ja": {
    "Meta": {
      "title": "Vikram Sathguru — シニアフルスタック開発者",
      "description": "スケーラブルなWebプラットフォーム、EC、CRM、AI自動化を構築する10年以上の経験を持つシニアフルスタック開発者。PolarSync · NUS。"
    },
    "Nav": {
      "portfolio": "ポートフォリオ",
      "about": "自己紹介",
      "contact": "お問い合わせ",
      "openMenu": "メニューを開く",
      "home": "Vikram Sathguru — ホーム",
      "language": "言語"
    },
    "Hero": {
      "role": "シニアフルスタック開発者",
      "company": "PolarSync",
      "headline": "卓越したパフォーマンスで高品質なソフトウェアを届けます。",
      "tagline": "持続的なビジネス価値を生む、スケーラブルなWebプラットフォーム、EC、CRM、AI自動化を設計・開発しています。",
      "ctaTalk": "相談する",
      "ctaPortfolio": "実績を見る",
      "bannerAlt": "Vikram Sathguru ポートフォリオバナー"
    },
    "Portfolio": {
      "eyebrow": "ポートフォリオ",
      "title": "実績紹介",
      "description": "Web、モバイル、EC、AI自動化にわたる厳選プロジェクトをご覧ください。",
      "empty": "このカテゴリのプロジェクトはまだありません。",
      "filters": {
        "all": "すべて",
        "web": "Web開発",
        "mobile": "モバイルアプリ",
        "uiux": "UI/UXデザイン",
        "ecommerce": "EC",
        "ai": "AI・自動化"
      },
      "projects": {
        "crm-platforms": {"title": "カスタムCRMプラットフォーム", "summary": "顧客管理、ワークフロー、業務プロセス自動化"},
        "ai-chatbots": {"title": "AIチャットボット", "summary": "OpenAI連携によるインテリジェントな顧客対応"},
        "marketplace-platforms": {"title": "マーケットプレイス", "summary": "決済、カタログ、ユーザー管理、スケーラブルなバックエンド"},
        "ecommerce-solutions": {"title": "ECソリューション", "summary": "Shopify、WooCommerce、決済、注文管理"},
        "saas-platforms": {"title": "SaaS Webプラットフォーム", "summary": "Next.jsとNode.jsによるスケーラブルな業務アプリ"},
        "marketing-automation": {"title": "マーケティング自動化", "summary": "Google Ads、Meta API、分析連携"},
        "customer-data-systems": {"title": "顧客データシステム", "summary": "データベース設計と大規模移行"},
        "business-automation": {"title": "業務自動化ツール", "summary": "ローンチ後も価値を積み上げるプロセス最適化"}
      }
    },
    "Expertise": {
      "eyebrow": "技術スキル",
      "title": "フルスタックの専門性",
      "description": "フロントエンドからバックエンド、EC、CRM、AI自動化まで — 信頼性と拡張性を重視して構築します。",
      "areas": {
        "frontend": {"title": "フロントエンド", "description": "モダンなReactアーキテクチャによる直感的でレスポンシブなUI。"},
        "backend": {"title": "バックエンド", "description": "SaaS、マーケットプレイス、業務自動化を支えるAPIとサービス。"},
        "database": {"title": "データベース", "description": "信頼性の高いデータモデル、移行、マルチDB構成。"},
        "ecommerce": {"title": "EC", "description": "カタログからチェックアウト、注文管理までのコマース運用。"},
        "ai": {"title": "AI・自動化", "description": "手作業を減らしサポートを強化するインテリジェントな仕組み。"},
        "business": {"title": "業務システム", "description": "CRM、マーケティング連携、運用を支える自動化。"}
      }
    },
    "About": {
      "eyebrow": "自己紹介",
      "title": "ローンチ後も価値を生み続けるシステム",
      "p1": "スケーラブルなWebプラットフォーム、業務管理システム、EC、自動化ツールの設計・開発に10年以上携わるシニアフルスタック開発者です。",
      "p2": "React、Next.js、Node.js、Python、PostgreSQL、MySQL、モダンなクラウド技術で信頼性の高いプロダクトを構築。カスタムCRM、API連携、顧客管理、マーケティング自動化、AIアプリの経験があります。",
      "p3": "国際企業やリモートチームと協力し、業務効率の向上、プロセス自動化、より良い顧客体験を届けてきました。クリーンな設計、直感的なUX、安全な連携、長期的な拡張性を重視します。",
      "stats": {
        "years": "年の経験",
        "education": "コンピュータサイエンス修士・学士",
        "reach": "リモート・国際チーム"
      },
      "experienceEyebrow": "職務経歴",
      "jobTitle": "シニアフルスタック開発者",
      "company": "PolarSync",
      "highlights": {
        "h1": "React、Next.js、Node.js、TypeScript、Python、PostgreSQLでスケーラブルなWeb、SaaS、マーケットプレイス、自動化システムを設計・開発。",
        "h2": "顧客管理、データ整理、ワークフロー自動化、業務最適化のためのカスタムCRMを構築。",
        "h3": "顧客対応を自動化しパーソナライズされた応答を生成するAIチャットボットを開発。",
        "h4": "ユーザー管理、決済、カタログ、スケーラブルなバックエンドを備えたマーケットプレイスを提供。",
        "h5": "PostgreSQL、MySQL、MongoDBで大規模顧客データのDB設計と移行を実施。"
      },
      "processEyebrow": "進め方",
      "process": {
        "01": {"title": "アイデア", "text": "構築前に目標・ユーザー・制約を明確にします。"},
        "02": {"title": "デザイン", "text": "直感的で信頼でき、拡張可能な設計とUXを形にします。"},
        "03": {"title": "開発", "text": "React、Next.js、Node.jsとクリーンなAPIで堅実に実装します。"},
        "04": {"title": "実インパクト", "text": "効率を高め、ローンチ後も価値を生み続ける解決策を届けます。"}
      },
      "educationEyebrow": "学歴",
      "masters": "コンピュータサイエンス修士",
      "bachelors": "コンピュータサイエンス学士",
      "school": "シンガポール国立大学（NUS）",
      "mastersPeriod": "2017年8月 – 2019年6月",
      "bachelorsPeriod": "2013年8月 – 2017年6月",
      "singapore": "シンガポール",
      "location": "シンガポール · リモート対応"
    },
    "Contact": {
      "eyebrow": "お問い合わせ",
      "title": "プロジェクトについて相談しましょう",
      "description": "Webプラットフォーム、EC、CRM、自動化のアイデアをお聞かせください。価値を生み続けるプロダクトにします。",
      "email": "メール",
      "phone": "電話",
      "location": "所在地",
      "name": "お名前",
      "namePlaceholder": "お名前",
      "emailLabel": "メールアドレス",
      "emailPlaceholder": "you@company.com",
      "phoneLabel": "電話番号",
      "phonePlaceholder": "+81 ...",
      "message": "プロジェクト詳細",
      "messagePlaceholder": "目標、スケジュール、希望技術スタックなどをご記入ください...",
      "submit": "送信する",
      "sent": "メールアプリを開いています… 開かない場合は次の宛先へ",
      "mailSubject": "{name} 様からのポートフォリオ問い合わせ"
    },
    "Footer": {
      "blurb": "スケーラブルなWeb、EC、CRM、AI自動化を構築するシニアフルスタック開発者。",
      "navigate": "ナビ",
      "connect": "つながる",
      "contact": "連絡先",
      "rights": "All rights reserved.",
      "backToTop": "ページ上部へ"
    }
  },
  "zh": {
    "Meta": {
      "title": "Vikram Sathguru — 高级全栈开发工程师",
      "description": "拥有10年以上经验的高级全栈开发工程师，专注于可扩展的 Web 平台、电商、CRM 与 AI 自动化。PolarSync · NUS。"
    },
    "Nav": {
      "portfolio": "作品集",
      "about": "关于我",
      "contact": "联系我们",
      "openMenu": "打开菜单",
      "home": "Vikram Sathguru — 首页",
      "language": "语言"
    },
    "Hero": {
      "role": "高级全栈开发工程师",
      "company": "PolarSync",
      "headline": "以卓越性能交付高质量软件。",
      "tagline": "我设计并开发可扩展的 Web 平台、电商解决方案、CRM 系统与 AI 自动化，持续创造业务价值。",
      "ctaTalk": "开始沟通",
      "ctaPortfolio": "查看作品",
      "bannerAlt": "Vikram Sathguru 作品集横幅"
    },
    "Portfolio": {
      "eyebrow": "作品集",
      "title": "精选作品",
      "description": "探索涵盖 Web、移动端、电商与 AI 自动化的精选平台与系统。",
      "empty": "该分类下暂无项目。",
      "filters": {
        "all": "全部",
        "web": "Web 开发",
        "mobile": "移动应用",
        "uiux": "UI/UX 设计",
        "ecommerce": "电商",
        "ai": "AI 与自动化"
      },
      "projects": {
        "crm-platforms": {"title": "定制 CRM 平台", "summary": "客户管理、工作流与业务流程自动化"},
        "ai-chatbots": {"title": "AI 聊天助手", "summary": "基于 OpenAI 的智能客户沟通"},
        "marketplace-platforms": {"title": "电商市场平台", "summary": "支付、目录、用户管理与可扩展后端"},
        "ecommerce-solutions": {"title": "电商解决方案", "summary": "Shopify、WooCommerce、支付与订单管理"},
        "saas-platforms": {"title": "SaaS Web 平台", "summary": "基于 Next.js 与 Node.js 的可扩展业务应用"},
        "marketing-automation": {"title": "营销自动化", "summary": "Google Ads、Meta API 与分析集成"},
        "customer-data-systems": {"title": "客户数据系统", "summary": "数据库设计与大规模迁移"},
        "business-automation": {"title": "业务自动化工具", "summary": "上线后持续产生价值的流程优化"}
      }
    },
    "Expertise": {
      "eyebrow": "技术能力",
      "title": "全栈专业能力",
      "description": "从前端到后端、电商、CRM 与 AI 自动化 — 以可靠性与可扩展性为核心。",
      "areas": {
        "frontend": {"title": "前端", "description": "基于现代 React 架构的响应式、直观界面。"},
        "backend": {"title": "后端", "description": "支撑 SaaS、市场平台与业务自动化的 API 与服务。"},
        "database": {"title": "数据库", "description": "可靠的数据模型、迁移与多数据库架构。"},
        "ecommerce": {"title": "电商", "description": "从目录、结账到订单管理的完整电商运营。"},
        "ai": {"title": "AI 与自动化", "description": "减少手工劳动、提升支持效率的智能助手与自动化。"},
        "business": {"title": "业务系统", "description": "CRM、营销集成与保障团队高效运转的自动化。"}
      }
    },
    "About": {
      "eyebrow": "关于我",
      "title": "上线后仍持续创造价值的系统",
      "p1": "拥有10年以上经验的高级全栈开发工程师，专注于可扩展 Web 平台、业务管理系统、电商解决方案与自动化工具的设计与开发。",
      "p2": "擅长使用 React、Next.js、Node.js、Python、PostgreSQL、MySQL 与现代云技术构建可靠数字产品。经验涵盖定制 CRM、API 集成、客户管理、营销自动化与 AI 应用。",
      "p3": "曾与国际公司与远程团队合作，交付提升运营效率、自动化流程并改善客户体验的解决方案。我的方法结合清晰架构、直观体验、安全集成与长期可扩展性。",
      "stats": {
        "years": "年经验",
        "education": "计算机科学硕士与学士",
        "reach": "远程与国际团队"
      },
      "experienceEyebrow": "工作经历",
      "jobTitle": "高级全栈开发工程师",
      "company": "PolarSync",
      "highlights": {
        "h1": "使用 React、Next.js、Node.js、TypeScript、Python 与 PostgreSQL 设计并开发可扩展 Web 平台、SaaS、市场与业务自动化系统。",
        "h2": "构建用于客户管理、数据组织、工作流自动化与流程优化的定制 CRM。",
        "h3": "开发可自动化客户沟通并生成个性化回复的 AI 聊天机器人。",
        "h4": "交付具备用户管理、支付集成、产品目录与可扩展后端的市场平台。",
        "h5": "使用 PostgreSQL、MySQL 与 MongoDB 为大规模客户数据集设计数据库结构与迁移流程。"
      },
      "processEyebrow": "工作方式",
      "process": {
        "01": {"title": "想法", "text": "在动手前明确目标、用户与约束。"},
        "02": {"title": "设计", "text": "打造直观、可信且可扩展的架构与体验。"},
        "03": {"title": "开发", "text": "用 React、Next.js、Node.js 与清晰 API 交付可靠系统。"},
        "04": {"title": "真实影响", "text": "上线能提升效率、并持续创造价值的解决方案。"}
      },
      "educationEyebrow": "教育背景",
      "masters": "计算机科学硕士",
      "bachelors": "计算机科学学士",
      "school": "新加坡国立大学（NUS）",
      "mastersPeriod": "2017年8月 – 2019年6月",
      "bachelorsPeriod": "2013年8月 – 2017年6月",
      "singapore": "新加坡",
      "location": "新加坡 · 支持远程"
    },
    "Contact": {
      "eyebrow": "联系",
      "title": "一起讨论你的项目",
      "description": "告诉我你的 Web 平台、电商店铺、CRM 或自动化想法 — 我会帮你把它做成持续创造价值的产品。",
      "email": "邮箱",
      "phone": "电话",
      "location": "地点",
      "name": "姓名",
      "namePlaceholder": "您的姓名",
      "emailLabel": "邮箱地址",
      "emailPlaceholder": "you@company.com",
      "phoneLabel": "电话号码",
      "phonePlaceholder": "+86 ...",
      "message": "项目详情",
      "messagePlaceholder": "请分享目标、时间表与技术栈偏好...",
      "submit": "发送消息",
      "sent": "正在打开邮件客户端… 如未打开，请写邮件至",
      "mailSubject": "来自 {name} 的作品集咨询"
    },
    "Footer": {
      "blurb": "专注可扩展 Web、电商、CRM 与 AI 自动化的高级全栈开发工程师。",
      "navigate": "导航",
      "connect": "社交",
      "contact": "联系",
      "rights": "保留所有权利。",
      "backToTop": "回到顶部"
    }
  }
}

def deep_merge(base, overlay):
    result = deepcopy(base)
    for k, v in overlay.items():
        if isinstance(v, dict) and isinstance(result.get(k), dict):
            result[k] = deep_merge(result[k], v)
        else:
            result[k] = v
    return result

out = Path("messages")
for locale, overlay in translations.items():
    data = deep_merge(en, overlay)
    (out / f"{locale}.json").write_text(
        json.dumps(data, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print("wrote", locale)

print("done")
