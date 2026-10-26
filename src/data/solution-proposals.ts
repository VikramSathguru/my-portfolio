import type { AppLocale } from "@/i18n/routing";
import type { SolutionSlug } from "@/data/solutions";

type L10n = Record<AppLocale, string>;

export type ProposalItem = { title: L10n; body: L10n };
export type ProposalStep = { title: L10n; body: L10n; time: L10n };
export type ProposalFaq = { q: L10n; a: L10n };

export type SolutionProposal = {
  intro: L10n;
  gets: ProposalItem[];
  steps: ProposalStep[];
  proof: L10n;
  investment: L10n;
  next: L10n;
  terms: L10n[];
  guarantee: L10n;
  faq: ProposalFaq[];
};

function t(en: string, pt: string, es: string, ja: string, zh: string): L10n {
  return { en, pt, es, ja, zh };
}

const proposals: Record<SolutionSlug, SolutionProposal> = {
  websites: {
    intro: t(
      "You need a site that sells the offer before anyone picks up the phone. Ads, referrals, and search all land on the same page — if that page is slow or vague, the money you already spent is wasted.",
      "Você precisa de um site que venda a oferta antes de qualquer ligação. Anúncios, indicações e busca caem na mesma página — se ela for lenta ou vaga, o dinheiro que você já gastou se perde.",
      "Necesitas un sitio que venda la oferta antes de que nadie llame. Anuncios, referidos y búsqueda llegan a la misma página — si es lenta o vaga, el dinero que ya gastaste se pierde.",
      "電話の前に、提案を売るサイトが必要です。広告も紹介も検索も同じページに着きます。遅くて曖昧なら、すでに使った費用が無駄になります。",
      "你需要一个在任何人打电话之前就把报价卖出去的网站。广告、转介绍和搜索都会落到同一页上——如果这页又慢又含糊，已经花掉的钱就浪费了。",
    ),
    gets: [
      {
        title: t("A first screen that states the offer", "Uma primeira tela que diz a oferta", "Una primera pantalla que dice la oferta", "提案が分かる最初の画面", "第一屏就把报价说清楚"),
        body: t(
          "A stranger sees who it is for, what changes for them, and the one action you want — without a call.",
          "Um estranho vê para quem é, o que muda para ele e a única ação que você quer — sem uma ligação.",
          "Un desconocido ve para quién es, qué cambia para él y la única acción que quieres — sin una llamada.",
          "知らない人が、誰向けか、何が変わるか、取ってほしい行動を、電話なしで理解します。",
          "陌生人不用打电话，就能看出给谁、对他们有什么变化、以及你希望他们做的那一步。",
        ),
      },
      {
        title: t("A path, not a pile of pages", "Um caminho, não um monte de páginas", "Un camino, no un montón de páginas", "ページの山ではなく、一本の道", "一条路径，而不是一堆页面"),
        body: t(
          "Proof, services, and contact sit where a buyer actually looks. Extra pages only exist if they help that path.",
          "Prova, serviços e contato ficam onde o comprador olha. Páginas extras só existem se ajudam esse caminho.",
          "La prueba, los servicios y el contacto quedan donde el comprador mira. Las páginas extra solo existen si ayudan a ese camino.",
          "証拠、サービス、連絡先は、買い手が実際に見る場所に置きます。その道に役立つページ以外は作りません。",
          "证明、服务和联系方式放在买家真正会看的地方。额外页面只有在帮这条路径时才存在。",
        ),
      },
      {
        title: t("A site that holds up on a phone", "Um site que aguenta o celular", "Un sitio que aguanta en el móvil", "スマホでも落ちないサイト", "在手机上也能站住的网站"),
        body: t(
          "Most first visits are on a phone. The page stays light enough that the headline finishes loading before the person leaves.",
          "A maioria das primeiras visitas é no celular. A página fica leve o bastante para o título carregar antes da pessoa sair.",
          "La mayoría de las primeras visitas son en el móvil. La página se queda lo bastante ligera para que el título cargue antes de que la persona se vaya.",
          "最初の訪問の多くはスマホです。見出しが読み終わる前に人が去らない軽さにします。",
          "大多数第一次访问发生在手机上。页面要轻到标题加载完之前人还在。",
        ),
      },
    ],
    steps: [
      {
        title: t("Agree the offer", "Fechar a oferta", "Acordar la oferta", "提案を決める", "先定报价"),
        body: t(
          "We name who it is for, what they should do next, and what proof belongs on the page.",
          "Definimos para quem é, o que a pessoa deve fazer em seguida e qual prova entra na página.",
          "Definimos para quién es, qué debe hacer después y qué prueba entra en la página.",
          "誰向けか、次に何をしてほしいか、ページに置く証拠を決めます。",
          "先定给谁、下一步做什么、页面上放什么证明。",
        ),
        time: t("About a week", "Cerca de uma semana", "Cerca de una semana", "およそ1週間", "大约一周"),
      },
      {
        title: t("Design and build the path", "Desenhar e construir o caminho", "Diseñar y construir el camino", "道を設計して作る", "设计并做出这条路径"),
        body: t(
          "The first screen, the proof, and the action are built together. If you already run on WordPress, the same standard is applied there.",
          "A primeira tela, a prova e a ação são feitas juntas. Se você já usa WordPress, o mesmo padrão vale ali.",
          "La primera pantalla, la prueba y la acción se construyen juntas. Si ya usas WordPress, el mismo estándar vale ahí.",
          "最初の画面、証拠、行動をまとめて作ります。すでに WordPress なら、同じ基準をそこに適用します。",
          "第一屏、证明和行动一起做。如果已经在用 WordPress，同一套标准也用在那里。",
        ),
        time: t("Two to four weeks", "Duas a quatro semanas", "Dos a cuatro semanas", "2〜4週間", "两到四周"),
      },
      {
        title: t("Launch and hand it over", "Publicar e entregar", "Publicar y entregar", "公開して引き渡す", "上线并交接"),
        body: t(
          "Analytics is on before launch. You leave with a site you can explain, and a short handover of how to change the words.",
          "A análise entra antes do lançamento. Você sai com um site que consegue explicar e uma entrega curta de como mudar os textos.",
          "La analítica entra antes del lanzamiento. Sales con un sitio que puedes explicar y una entrega corta de cómo cambiar los textos.",
          "公開前に計測を入れます。説明できるサイトと、文言の変え方の短い引き渡しで終わります。",
          "上线前先接上统计。你带走一个能讲清楚的网站，以及怎么改文字的简短交接。",
        ),
        time: t("About a week", "Cerca de uma semana", "Cerca de una semana", "およそ1週間", "大约一周"),
      },
    ],
    proof: t(
      "The card on this page opens a site already shipped in this line of work — fashion and retail pages built to convert, not a placeholder.",
      "O cartão nesta página abre um site já entregue nesta linha — páginas de moda e varejo feitas para converter, não um espaço vazio.",
      "La tarjeta de esta página abre un sitio ya entregado en esta línea — páginas de moda y retail hechas para convertir, no un hueco vacío.",
      "このページのカードから、この分野ですでに納品したサイトを開けます。空の見本ではなく、成約のためのファッションと小売のページです。",
      "本页的卡片会打开一条已经交付的网站——时装和零售页面，用来转化，不是占位。",
    ),
    investment: t(
      "A fixed project fee, set after a short scoping call. It covers design, build, and handover. Hosting, ads, and later pages stay separate so the first number stays honest.",
      "Um valor fechado, definido depois de uma chamada curta de escopo. Cobre design, construção e entrega. Hospedagem, anúncios e páginas futuras ficam de fora para o primeiro número ser honesto.",
      "Un precio cerrado, definido tras una llamada corta de alcance. Cubre diseño, construcción y entrega. Hosting, anuncios y páginas posteriores quedan fuera para que el primer número sea honesto.",
      "短い範囲確認のあとで決める固定料金です。デザイン、制作、引き渡しを含みます。ホスティング、広告、後から足すページは別にして、最初の数字を正直に保ちます。",
      "短通话确认范围后定一个固定项目费。包含设计、制作和交接。托管、广告和之后的页面分开，这样第一个数字是诚实的。",
    ),
    next: t(
      "Send the offer you want sold and the one action a visitor should take. I reply with a written scope before any build starts.",
      "Envie a oferta que quer vender e a única ação que o visitante deve tomar. Respondo com um escopo escrito antes de qualquer construção.",
      "Envía la oferta que quieres vender y la única acción que el visitante debe tomar. Respondo con un alcance escrito antes de construir nada.",
      "売りたい提案と、訪問者に取ってほしい一つの行動を送ってください。制作の前に、書面の範囲で返します。",
      "把你想卖的报价，以及访客该做的那一步发过来。开工前我会先回一份书面范围。",
    ),
    terms: [
      t(
        "You own the site and the content.",
        "O site e o conteúdo são seus.",
        "El sitio y el contenido son tuyos.",
        "サイトとコンテンツの所有はあなたです。",
        "网站和内容归你所有。",
      ),
      t(
        "One primary action. A second goal is a different scope.",
        "Uma ação principal. Um segundo objetivo é outro escopo.",
        "Una acción principal. Un segundo objetivo es otro alcance.",
        "主となる行動は一つです。二つ目の目標は別の範囲です。",
        "一个主要行动。第二个目标是另一份范围。",
      ),
      t(
        "Extra pages or languages are agreed before they start.",
        "Páginas ou idiomas extras são combinados antes de começar.",
        "Páginas o idiomas extra se acuerdan antes de empezar.",
        "追加のページや言語は、始める前に合意します。",
        "额外页面或语言在开始前先说定。",
      ),
    ],
    guarantee: t(
      "If the first screen does not make the offer obvious to someone who has never heard of you, I revise it before we call the work finished.",
      "Se a primeira tela não deixa a oferta óbvia para quem nunca ouviu falar de você, eu reviso antes de chamar o trabalho de pronto.",
      "Si la primera pantalla no deja la oferta obvia para quien nunca oyó de ti, la reviso antes de dar el trabajo por terminado.",
      "初めて知る人に提案が明白でなければ、完了とする前に直します。",
      "如果第一屏不能让没听说过你的人看懂报价，在我们说做完之前我会改。",
    ),
    faq: [
      {
        q: t("We already have WordPress. Do we start over?", "Já temos WordPress. Começamos do zero?", "Ya tenemos WordPress. ¿Empezamos de cero?", "すでに WordPress があります。最初からですか？", "我们已经有 WordPress。要从头做吗？"),
        a: t(
          "No. If the business already runs there, the same standard — offer, path, speed — is applied to what you have.",
          "Não. Se o negócio já roda ali, o mesmo padrão — oferta, caminho, velocidade — entra no que você tem.",
          "No. Si el negocio ya corre ahí, el mismo estándar — oferta, camino, velocidad — se aplica a lo que tienes.",
          "いいえ。そこで動いているなら、提案・道・速さという同じ基準を今のものに適用します。",
          "不用。如果业务已经跑在那里，同一套标准——报价、路径、速度——用在现有站点上。",
        ),
      },
      {
        q: t("Can we change the words ourselves?", "Podemos mudar os textos sozinhos?", "¿Podemos cambiar los textos nosotros?", "文言は自分で変えられますか？", "文字我们可以自己改吗？"),
        a: t(
          "Yes. The handover includes how to change the copy without breaking the path.",
          "Sim. A entrega inclui como mudar o texto sem quebrar o caminho.",
          "Sí. La entrega incluye cómo cambiar el texto sin romper el camino.",
          "はい。引き渡しに、道を壊さず文言を変える方法を含めます。",
          "可以。交接里包括怎么改文案而不把路径改坏。",
        ),
      },
      {
        q: t("How do we know it is fast enough?", "Como sabemos que está rápido o bastante?", "¿Cómo sabemos que es lo bastante rápido?", "十分速いとどう分かりますか？", "怎么知道够快？"),
        a: t(
          "The page is built for a phone on an ordinary connection, and analytics is on before launch so the first week of traffic is measurable.",
          "A página é feita para celular numa conexão comum, e a análise entra antes do lançamento para a primeira semana de tráfego ser medida.",
          "La página se hace para móvil en una conexión normal, y la analítica entra antes del lanzamiento para medir la primera semana de tráfico.",
          "普通の回線のスマホ向けに作り、公開前に計測を入れるので、最初の一週間の流入を測れます。",
          "按普通网络上的手机来做，上线前接上统计，第一周的访问可以衡量。",
        ),
      },
      {
        q: t("What do you need from us to start?", "O que você precisa da gente para começar?", "¿Qué necesitas de nosotros para empezar?", "始めるのに何が必要ですか？", "开工需要我们提供什么？"),
        a: t(
          "The offer, who it is for, and the one action you want. Proof — a result, a client, a product — can follow in the first week.",
          "A oferta, para quem é e a única ação que você quer. A prova — um resultado, um cliente, um produto — pode vir na primeira semana.",
          "La oferta, para quién es y la única acción que quieres. La prueba — un resultado, un cliente, un producto — puede llegar en la primera semana.",
          "提案、誰向けか、取ってほしい一つの行動です。証拠（結果、顧客、商品）は最初の週に後からで構いません。",
          "报价、给谁、以及你希望的那一步。证明——一个结果、一个客户、一个产品——可以在第一周补上。",
        ),
      },
    ],
  },
  "online-stores": {
    intro: t(
      "You want sales, not a catalog. A store earns the order when someone trusts the price, the payment, and the fact that the parcel will arrive.",
      "Você quer venda, não um catálogo. A loja ganha o pedido quando alguém confia no preço, no pagamento e em que o pacote vai chegar.",
      "Quieres ventas, no un catálogo. La tienda gana el pedido cuando alguien confía en el precio, el pago y en que el paquete va a llegar.",
      "欲しいのはカタログではなく売上です。価格と支払いと、荷物が届くことを信じたときに注文が生まれます。",
      "你要的是销售，不是一本目录。当有人相信价格、支付，以及包裹会送到时，店才赢得订单。",
    ),
    gets: [
      {
        title: t("A first screen that sells", "Uma primeira tela que vende", "Una primera pantalla que vende", "売る最初の画面", "会卖的第一屏"),
        body: t(
          "The collection, the price story, and the buy button are the point. Decoration that does not sell is left out.",
          "A coleção, a história do preço e o botão de compra são o ponto. Decoração que não vende fica de fora.",
          "La colección, la historia del precio y el botón de compra son el punto. La decoración que no vende se queda fuera.",
          "コレクション、価格の話、購入ボタンが中心です。売れない装飾は入れません。",
          "系列、价格故事和购买按钮才是重点。不促成销售的装饰去掉。",
        ),
      },
      {
        title: t("Checkout people already trust", "Um checkout em que as pessoas já confiam", "Un checkout en el que la gente ya confía", "すでに信頼されている決済", "人们已经信任的结账"),
        body: t(
          "Real gateways — cards, local methods such as Pix, wallets. Card data stays off your server. Declined, pending, and paid are unambiguous.",
          "Gateways reais — cartões, métodos locais como Pix, carteiras. Os dados do cartão ficam fora do seu servidor. Recusado, pendente e pago ficam claros.",
          "Pasarelas reales — tarjetas, métodos locales como Pix, billeteras. Los datos de la tarjeta quedan fuera de tu servidor. Rechazado, pendiente y pagado quedan claros.",
          "実際の決済です。カード、Pix などの現地手段、ウォレット。カード情報はサーバーに置きません。拒否、保留、支払済が明確です。",
          "真实网关——银行卡、Pix 这类本地方式、钱包。卡数据不进你的服务器。拒绝、待支付、已支付分得清楚。",
        ),
      },
      {
        title: t("A store that keeps selling after the visit", "Uma loja que continua vendendo depois da visita", "Una tienda que sigue vendiendo después de la visita", "訪問のあとも売り続ける店", "访问结束后还在卖的店"),
        body: t(
          "Email follows real store events. Social posts open the exact product. Shipping and search are part of the same system, not add-ons after launch.",
          "O e-mail segue eventos reais da loja. Posts abrem o produto certo. Frete e busca fazem parte do mesmo sistema, não de um extra depois do lançamento.",
          "El email sigue eventos reales de la tienda. Las publicaciones abren el producto exacto. El envío y la búsqueda son parte del mismo sistema, no un extra después del lanzamiento.",
          "メールは店の実際の出来事に従います。投稿は該当商品を開きます。配送と検索は公開後の付け足しではなく、同じ仕組みです。",
          "邮件跟着店里的真实事件走。社交帖打开对应商品。物流和搜索是同一套系统，不是上线后的附加。",
        ),
      },
    ],
    steps: [
      {
        title: t("Name what has to sell", "Dizer o que precisa vender", "Decir qué tiene que venderse", "何を売るか決める", "先定卖什么"),
        body: t(
          "The offer, the markets you ship to, and the payment methods your buyers already use.",
          "A oferta, os mercados para onde você envia e os pagamentos que seus compradores já usam.",
          "La oferta, los mercados a los que envías y los pagos que tus compradores ya usan.",
          "提案、届ける市場、買い手がすでに使っている支払い方法です。",
          "报价、你发货的市场，以及买家已经在用的支付方式。",
        ),
        time: t("About a week", "Cerca de uma semana", "Cerca de una semana", "およそ1週間", "大约一周"),
      },
      {
        title: t("Build the sale, not only the catalog", "Construir a venda, não só o catálogo", "Construir la venta, no solo el catálogo", "カタログではなく販売を作る", "做销售，不只做目录"),
        body: t(
          "Design, checkout, and the first follow-up are built together so a paid order has a real next state.",
          "Design, checkout e o primeiro acompanhamento nascem juntos para o pedido pago ter um próximo estado real.",
          "Diseño, checkout y el primer seguimiento nacen juntos para que el pedido pagado tenga un siguiente estado real.",
          "デザイン、決済、最初のフォローを一緒に作り、支払済の注文に次の状態があるようにします。",
          "设计、结账和第一次跟进一起做，让已付款订单有真实的下一状态。",
        ),
        time: t("Three to six weeks", "Três a seis semanas", "Tres a seis semanas", "3〜6週間", "三到六周"),
      },
      {
        title: t("Connect shipping, mail, and search", "Ligar frete, e-mail e busca", "Conectar envío, email y búsqueda", "配送、メール、検索をつなぐ", "接上物流、邮件和搜索"),
        body: t(
          "The buyer sees a real shipping option. You can see which posts and which pages produced orders.",
          "O comprador vê uma opção real de frete. Você vê quais posts e quais páginas geraram pedidos.",
          "El comprador ve una opción real de envío. Tú ves qué publicaciones y qué páginas generaron pedidos.",
          "買い手は実際の配送を見ます。どの投稿とページが注文を生んだかが見えます。",
          "买家看到真实的配送选项。你能看见哪些帖子和页面产生了订单。",
        ),
        time: t("Inside the same build", "Dentro da mesma construção", "Dentro de la misma construcción", "同じ制作の中で", "在同一次制作里"),
      },
    ],
    proof: t(
      "The card on this page opens a store already taking orders in this line of work.",
      "O cartão nesta página abre uma loja que já recebe pedidos nesta linha.",
      "La tarjeta de esta página abre una tienda que ya toma pedidos en esta línea.",
      "このページのカードから、この分野ですでに注文を受けている店を開けます。",
      "本页的卡片会打开一家已经在接单的店。",
    ),
    investment: t(
      "A fixed project fee after a scoping call. It covers the storefront, checkout, and the connections named in the scope. Ad spend, payment-provider fees, and shipping contracts stay yours.",
      "Um valor fechado depois da chamada de escopo. Cobre a vitrine, o checkout e as ligações citadas no escopo. Mídia, taxas do meio de pagamento e contratos de frete continuam seus.",
      "Un precio cerrado tras la llamada de alcance. Cubre el escaparate, el checkout y las conexiones citadas en el alcance. La pauta, las comisiones del medio de pago y los contratos de envío siguen siendo tuyos.",
      "範囲確認のあとの固定料金です。店頭、決済、範囲に書いた接続を含みます。広告費、決済手数料、配送契約はあなたの側です。",
      "范围通话后的固定项目费。包含店面、结账，以及范围里写明的连接。广告花费、支付手续费和物流合同仍由你承担。",
    ),
    next: t(
      "Send what you sell, where you ship, and how buyers pay today. I reply with a written scope before the store is built.",
      "Envie o que você vende, para onde envia e como os compradores pagam hoje. Respondo com um escopo escrito antes de construir a loja.",
      "Envía qué vendes, a dónde envías y cómo pagan hoy. Respondo con un alcance escrito antes de construir la tienda.",
      "何を売り、どこへ届け、今どう支払われているかを送ってください。店を作る前に書面の範囲で返します。",
      "发来你卖什么、发到哪里、买家现在怎么付款。建店之前我会先回一份书面范围。",
    ),
    terms: [
      t("You own the store and the catalog.", "A loja e o catálogo são seus.", "La tienda y el catálogo son tuyos.", "店とカタログの所有はあなたです。", "商店和目录归你所有。"),
      t(
        "Coupons, extra markets, and extra languages are scoped before they start.",
        "Cupons, mercados extras e idiomas extras entram no escopo antes de começar.",
        "Cupones, mercados extra e idiomas extra se acuerdan antes de empezar.",
        "クーポン、追加市場、追加言語は始める前に範囲へ入れます。",
        "优惠券、额外市场和额外语言在开始前先纳入范围。",
      ),
      t(
        "Payment and shipping accounts stay in your name.",
        "As contas de pagamento e frete ficam no seu nome.",
        "Las cuentas de pago y envío quedan a tu nombre.",
        "決済と配送のアカウントはあなたの名義です。",
        "支付和物流账户用你的名义。",
      ),
    ],
    guarantee: t(
      "If a test order cannot be paid, confirmed, and given a real next state, the store is not called finished.",
      "Se um pedido de teste não puder ser pago, confirmado e ter um próximo estado real, a loja não é chamada de pronta.",
      "Si un pedido de prueba no se puede pagar, confirmar y dejar con un siguiente estado real, la tienda no se da por terminada.",
      "テスト注文が支払えず、確定できず、次の状態を持てないなら、完成とは呼びません。",
      "如果一笔测试订单不能付款、确认，并进入真实的下一状态，商店不算完成。",
    ),
    faq: [
      {
        q: t("Do you invent a custom checkout?", "Você inventa um checkout próprio?", "¿Inventas un checkout propio?", "独自の決済を作りますか？", "你会自己发明结账吗？"),
        a: t(
          "No. Checkout uses gateways buyers already trust. Card data does not sit on your server.",
          "Não. O checkout usa gateways em que o comprador já confia. Os dados do cartão não ficam no seu servidor.",
          "No. El checkout usa pasarelas en las que el comprador ya confía. Los datos de la tarjeta no quedan en tu servidor.",
          "いいえ。買い手がすでに信頼する決済を使います。カード情報はサーバーに置きません。",
          "不会。结账用买家已经信任的网关。卡数据不放在你的服务器上。",
        ),
      },
      {
        q: t("Can TikTok or Instagram open the right product?", "TikTok ou Instagram abrem o produto certo?", "¿TikTok o Instagram abren el producto correcto?", "TikTok や Instagram から正しい商品を開けますか？", "TikTok 或 Instagram 能打开对应商品吗？"),
        a: t(
          "Yes. Product links are part of the build, so a post lands on the item in the video and the visit can be measured.",
          "Sim. Os links de produto fazem parte da construção, então o post cai no item do vídeo e a visita pode ser medida.",
          "Sí. Los enlaces de producto son parte de la construcción, así la publicación cae en el artículo del video y la visita se puede medir.",
          "はい。商品リンクは制作に含まれ、投稿は動画の商品へ着地し、訪問を測れます。",
          "可以。商品链接是制作的一部分，帖子落到视频里的商品，访问可以衡量。",
        ),
      },
      {
        q: t("What about shipping and coupons?", "E o frete e os cupons?", "¿Y el envío y los cupones?", "配送とクーポンは？", "物流和优惠券呢？"),
        a: t(
          "Shipping is part of checkout, not a spreadsheet afterwards. Coupons get an end date, a purpose, and rules you can see.",
          "O frete faz parte do checkout, não de uma planilha depois. Cupons têm data de fim, um propósito e regras que você vê.",
          "El envío es parte del checkout, no una hoja de cálculo después. Los cupones tienen fecha de fin, un propósito y reglas que puedes ver.",
          "配送は決済の一部で、後からの表ではありません。クーポンには終了日、目的、見えるルールがあります。",
          "物流是结账的一部分，不是事后的表格。优惠券有结束日期、用途，以及你能看见的规则。",
        ),
      },
      {
        q: t("Will the products be findable after ads stop?", "Os produtos continuam encontráveis quando o anúncio para?", "¿Los productos se siguen encontrando cuando el anuncio para?", "広告が止まったあとも商品は見つかりますか？", "广告停了之后商品还能被找到吗？"),
        a: t(
          "Titles, clean URLs, and product data are part of the build, so the same pages can be found and measured in search.",
          "Títulos, URLs limpas e dados de produto fazem parte da construção, então as mesmas páginas podem ser encontradas e medidas na busca.",
          "Títulos, URLs limpias y datos de producto son parte de la construcción, así las mismas páginas se pueden encontrar y medir en búsqueda.",
          "タイトル、きれいな URL、商品データは制作に含まれ、同じページを検索で見つけて測れます。",
          "标题、干净的网址和商品数据是制作的一部分，同一批页面可以在搜索里被找到并衡量。",
        ),
      },
    ],
  },
  crm: {
    intro: t(
      "You are losing people between a form, an order, an email, and a follow-up. A CRM is how sales and support see the next action before the lead goes cold.",
      "Você está perdendo gente entre um formulário, um pedido, um e-mail e um acompanhamento. O CRM é como vendas e suporte veem a próxima ação antes de o lead esfriar.",
      "Estás perdiendo gente entre un formulario, un pedido, un email y un seguimiento. El CRM es cómo ventas y soporte ven la siguiente acción antes de que el lead se enfríe.",
      "フォーム、注文、メール、フォローのあいだで人を失っています。CRM は、リードが冷える前に次の行動を営業とサポートが見るためのものです。",
      "人在表单、订单、邮件和跟进之间丢失。CRM 是销售和支持在线索变冷之前看见下一步的方式。",
    ),
    gets: [
      {
        title: t("One record per person", "Um registro por pessoa", "Un registro por persona", "一人につき一つの記録", "每个人一条记录"),
        body: t(
          "Who they are, what they wanted, and where they came from — written once, whether they arrived from a form, a store, or a chat.",
          "Quem é, o que queria e de onde veio — escrito uma vez, venha de um formulário, da loja ou de um chat.",
          "Quién es, qué quería y de dónde vino — escrito una vez, venga de un formulario, de la tienda o de un chat.",
          "誰か、何を求めたか、どこから来たか。フォーム、店、チャットのどれから来ても一度だけ書きます。",
          "是谁、想要什么、从哪来——无论来自表单、商店还是聊天，只写一次。",
        ),
      },
      {
        title: t("A pipeline with an owner", "Um funil com dono", "Un embudo con dueño", "担当のあるパイプライン", "有负责人的流程"),
        body: t(
          "The next owner is a stage, not a forwarded email. You can see who is waiting and who went quiet.",
          "O próximo dono é uma etapa, não um e-mail encaminhado. Dá para ver quem espera e quem ficou em silêncio.",
          "El siguiente dueño es una etapa, no un email reenviado. Se puede ver quién espera y quién se quedó en silencio.",
          "次の担当は段階であり、転送メールではありません。誰が待っていて、誰が黙ったかが見えます。",
          "下一个负责人是一个阶段，不是一封转发邮件。能看见谁在等、谁没声了。",
        ),
      },
      {
        title: t("Operators who can run it", "Operadores que conseguem usar", "Operadores que pueden usarlo", "現場が回せる画面", "运营人员能用的界面"),
        body: t(
          "The people who follow up can do it without a developer. Status, notes, and the next step are on the record.",
          "Quem faz o acompanhamento consegue fazer sem um desenvolvedor. Status, notas e o próximo passo estão no registro.",
          "Quien hace el seguimiento puede hacerlo sin un desarrollador. Estado, notas y el siguiente paso están en el registro.",
          "フォローする人が開発者なしでできます。状態、メモ、次の一歩が記録にあります。",
          "做跟进的人不用找开发就能操作。状态、备注和下一步都在记录上。",
        ),
      },
    ],
    steps: [
      {
        title: t("Map how a lead arrives", "Mapear como o lead chega", "Mapear cómo llega el lead", "リードの入り方を描く", "画清线索怎么进来"),
        body: t("Forms, store orders, and messages that must become the same kind of record.", "Formulários, pedidos e mensagens que precisam virar o mesmo tipo de registro.", "Formularios, pedidos y mensajes que deben volverse el mismo tipo de registro.", "フォーム、注文、メッセージを同じ種類の記録にします。", "表单、订单和消息要变成同一种记录。"),
        time: t("About a week", "Cerca de uma semana", "Cerca de una semana", "およそ1週間", "大约一周"),
      },
      {
        title: t("Build the record and the stages", "Construir o registro e as etapas", "Construir el registro y las etapas", "記録と段階を作る", "做出记录和阶段"),
        body: t("Only the stages your team actually uses. A pipeline nobody updates is not delivered as finished.", "Só as etapas que o time realmente usa. Um funil que ninguém atualiza não é entregue como pronto.", "Solo las etapas que el equipo realmente usa. Un embudo que nadie actualiza no se entrega como terminado.", "チームが実際に使う段階だけです。誰も更新しないパイプラインは完成としません。", "只做团队真正会用的阶段。没人更新的流程不算交付完成。"),
        time: t("Three to five weeks", "Três a cinco semanas", "Tres a cinco semanas", "3〜5週間", "三到五周"),
      },
      {
        title: t("Hand it to the people who follow up", "Entregar a quem faz o acompanhamento", "Entregarlo a quien hace el seguimiento", "フォローする人に渡す", "交给做跟进的人"),
        body: t("A short handover so sales and support can run the next day without you in the room.", "Uma entrega curta para vendas e suporte rodarem no dia seguinte sem você na sala.", "Una entrega corta para que ventas y soporte operen al día siguiente sin ti en la sala.", "翌日、あなたがその場にいなくても営業とサポートが回せる短い引き渡しです。", "一次简短交接，让销售和支持第二天不用你在场也能跑。"),
        time: t("About a week", "Cerca de uma semana", "Cerca de una semana", "およそ1週間", "大约一周"),
      },
    ],
    proof: t(
      "The card on this page opens a CRM already used by operators, not a slide of fields.",
      "O cartão nesta página abre um CRM já usado por operadores, não um slide de campos.",
      "La tarjeta de esta página abre un CRM ya usado por operadores, no una diapositiva de campos.",
      "このページのカードから、項目の見本ではなく、現場が使っている CRM を開けます。",
      "本页的卡片会打开一套运营人员已经在用的 CRM，不是一页字段示意图。",
    ),
    investment: t(
      "A fixed project fee after we name the sources and the stages. Extra objects and extra teams are a later scope.",
      "Um valor fechado depois de nomearmos as fontes e as etapas. Objetos extras e times extras são um escopo posterior.",
      "Un precio cerrado después de nombrar las fuentes y las etapas. Objetos extra y equipos extra son un alcance posterior.",
      "流入元と段階を決めたあとの固定料金です。追加の対象やチームは後の範囲です。",
      "定下来源和阶段之后是固定项目费。额外对象和额外团队是之后的范围。",
    ),
    next: t(
      "Send where leads arrive today and who is supposed to answer. I reply with the stages and a written scope.",
      "Envie onde os leads chegam hoje e quem deve responder. Respondo com as etapas e um escopo escrito.",
      "Envía dónde llegan hoy los leads y quién debe responder. Respondo con las etapas y un alcance escrito.",
      "今リードがどこに入り、誰が返すことになっているかを送ってください。段階と書面の範囲で返します。",
      "发来线索现在从哪进、谁该回复。我会回阶段和一份书面范围。",
    ),
    terms: [
      t("You own the data.", "Os dados são seus.", "Los datos son tuyos.", "データの所有はあなたです。", "数据归你所有。"),
      t("The first release covers the sources named in the scope.", "A primeira entrega cobre as fontes citadas no escopo.", "La primera entrega cubre las fuentes citadas en el alcance.", "最初の納品は範囲に書いた流入元です。", "第一次交付覆盖范围里写明的来源。"),
      t("A stage nobody will update is not added.", "Uma etapa que ninguém vai atualizar não entra.", "Una etapa que nadie va a actualizar no se añade.", "誰も更新しない段階は入れません。", "没人会更新的阶段不加。"),
    ],
    guarantee: t(
      "If the people who follow up cannot find the next action without a developer, the handover is not finished.",
      "Se quem faz o acompanhamento não achar a próxima ação sem um desenvolvedor, a entrega não está pronta.",
      "Si quien hace el seguimiento no encuentra la siguiente acción sin un desarrollador, la entrega no está terminada.",
      "フォローする人が開発者なしで次の行動を見つけられなければ、引き渡しは終わっていません。",
      "如果做跟进的人离开开发就找不到下一步，交接就不算完成。",
    ),
    faq: [
      {
        q: t("Is this a spreadsheet with a login?", "Isso é uma planilha com login?", "¿Esto es una hoja de cálculo con login?", "ログイン付きの表ですか？", "这是带登录的表格吗？"),
        a: t("No. A form, an order, and a message write the same record, and the next owner is a stage.", "Não. Um formulário, um pedido e uma mensagem escrevem o mesmo registro, e o próximo dono é uma etapa.", "No. Un formulario, un pedido y un mensaje escriben el mismo registro, y el siguiente dueño es una etapa.", "いいえ。フォーム、注文、メッセージが同じ記録を書き、次の担当は段階です。", "不是。表单、订单和消息写入同一条记录，下一个负责人是一个阶段。"),
      },
      {
        q: t("Will our team actually use it?", "O time vai usar de verdade?", "¿El equipo lo va a usar de verdad?", "チームは本当に使いますか？", "团队真的会用吗？"),
        a: t("Only stages they already work. The handover is with the people who follow up, not only with a manager.", "Só etapas que eles já trabalham. A entrega é com quem faz o acompanhamento, não só com um gestor.", "Solo etapas que ya trabajan. La entrega es con quien hace el seguimiento, no solo con un gerente.", "すでにやっている段階だけです。引き渡しは管理者だけでなく、フォローする人とします。", "只做他们已经在做的阶段。交接对象是做跟进的人，不只是经理。"),
      },
      {
        q: t("Can it sit next to the store?", "Pode ficar ao lado da loja?", "¿Puede quedar junto a la tienda?", "店の横に置けますか？", "能和商店放在一起吗？"),
        a: t("Yes. Store orders can open the same kind of record as a form, so sales is not copying emails.", "Sim. Pedidos da loja podem abrir o mesmo tipo de registro que um formulário, então vendas não copia e-mails.", "Sí. Los pedidos de la tienda pueden abrir el mismo tipo de registro que un formulario, así ventas no copia emails.", "はい。店の注文はフォームと同じ種類の記録を開けるので、営業がメールを写す必要はありません。", "可以。商店订单可以打开和表单同一种记录，销售不用再抄邮件。"),
      },
      {
        q: t("Who owns the contacts if we stop?", "De quem são os contatos se pararmos?", "¿De quién son los contactos si paramos?", "やめたら連絡先は誰のものですか？", "如果停了，联系人归谁？"),
        a: t("You do. The data is yours, including an export of the records.", "Seus. Os dados são seus, inclusive uma exportação dos registros.", "Tuyos. Los datos son tuyos, incluida una exportación de los registros.", "あなたです。記録の書き出しを含めて、データはあなたのものです。", "归你。数据是你的，包括记录的导出。"),
      },
    ],
  },
  acquisition: {
    intro: t(
      "You are paying for attention that does not become a conversation. Acquisition here means an offer, a channel, and a place the person lands that can actually capture them.",
      "Você está pagando por atenção que não vira conversa. Aquisição aqui é uma oferta, um canal e um lugar onde a pessoa cai e pode ser capturada de verdade.",
      "Estás pagando por atención que no se vuelve conversación. Adquisición aquí es una oferta, un canal y un lugar donde la persona cae y puede capturarse de verdad.",
      "会話にならない注意にお金を使っています。ここでの獲得は、提案、チャネル、そして人を本当に受け止める着地です。",
      "你在为变不成对话的注意力付钱。这里的获客是：一个报价、一个渠道，以及人落地后真能被接住的地方。",
    ),
    gets: [
      {
        title: t("One offer worth answering", "Uma oferta que vale responder", "Una oferta que vale la pena responder", "返す価値のある一つの提案", "值得回复的一个报价"),
        body: t("A clear promise a stranger can judge in seconds, not a list of everything the company does.", "Uma promessa clara que um estranho julga em segundos, não uma lista de tudo que a empresa faz.", "Una promesa clara que un desconocido juzga en segundos, no una lista de todo lo que hace la empresa.", "知らない人が数秒で判断できる約束です。会社がすることの一覧ではありません。", "陌生人几秒内能判断的清楚承诺，不是公司做什么的清单。"),
      },
      {
        title: t("A channel tied to that offer", "Um canal ligado a essa oferta", "Un canal atado a esa oferta", "その提案につながったチャネル", "和这个报价绑在一起的渠道"),
        body: t("The post, the ad, or the page says the same thing, so the click is not a surprise.", "O post, o anúncio ou a página dizem a mesma coisa, então o clique não é uma surpresa.", "La publicación, el anuncio o la página dicen lo mismo, así el clic no es una sorpresa.", "投稿、広告、ページが同じことを言うので、クリックが予想外になりません。", "帖子、广告和页面说的是同一件事，点击不会是意外。"),
      },
      {
        title: t("A capture you can follow", "Uma captura que dá para acompanhar", "Una captura que se puede seguir", "追える取り込み", "能跟下去的收集"),
        body: t("The person lands in a record with the campaign that sent them, not in a shared inbox.", "A pessoa cai num registro com a campanha que a enviou, não numa caixa compartilhada.", "La persona cae en un registro con la campaña que la envió, no en una bandeja compartida.", "人は共有受信箱ではなく、送ったキャンペーン付きの記録に着地します。", "人落到一条带渠道的记录里，不是一个共用收件箱。"),
      },
    ],
    steps: [
      {
        title: t("Choose the offer", "Escolher a oferta", "Elegir la oferta", "提案を選ぶ", "选定报价"),
        body: t("One promise, one audience, one action. Everything else waits.", "Uma promessa, um público, uma ação. O resto espera.", "Una promesa, un público, una acción. Lo demás espera.", "一つの約束、一つの相手、一つの行動。残りは待ちます。", "一个承诺、一类人、一个行动。其余先等。"),
        time: t("About a week", "Cerca de uma semana", "Cerca de una semana", "およそ1週間", "大约一周"),
      },
      {
        title: t("Put the channel and the landing in one line", "Colocar canal e página na mesma linha", "Poner el canal y la página en la misma línea", "チャネルと着地を一本にする", "把渠道和落地页对齐"),
        body: t("The message matches the page. The page matches the record that gets created.", "A mensagem combina com a página. A página combina com o registro que nasce.", "El mensaje coincide con la página. La página coincide con el registro que nace.", "メッセージはページと一致し、ページは作られる記録と一致します。", "信息和页面一致。页面和生成的记录一致。"),
        time: t("Two to four weeks", "Duas a quatro semanas", "Dos a cuatro semanas", "2〜4週間", "两到四周"),
      },
      {
        title: t("Measure the conversation, not the click", "Medir a conversa, não o clique", "Medir la conversación, no el clic", "クリックではなく会話を測る", "衡量对话，不是点击"),
        body: t("You can see which source produced a person you can answer, not only a visit.", "Dá para ver qual fonte produziu uma pessoa que você pode responder, não só uma visita.", "Se puede ver qué fuente produjo una persona a la que puedes responder, no solo una visita.", "訪問だけでなく、返せる人を生んだ流入元が見えます。", "能看见哪个来源带来了你可以回复的人，而不只是一次访问。"),
        time: t("Before anything is called live", "Antes de chamar qualquer coisa de no ar", "Antes de dar nada por publicado", "公開と呼ぶ前に", "在称为上线之前"),
      },
    ],
    proof: t(
      "The card on this page opens work where the offer, the page, and the follow-up already sit in one line.",
      "O cartão nesta página abre um trabalho em que a oferta, a página e o acompanhamento já estão na mesma linha.",
      "La tarjeta de esta página abre un trabajo donde la oferta, la página y el seguimiento ya están en la misma línea.",
      "このページのカードから、提案、ページ、フォローがすでに一本になっている仕事を開けます。",
      "本页的卡片会打开一份报价、页面和跟进已经对齐的工作。",
    ),
    investment: t(
      "A fixed fee for the offer, the landing, and the capture named in the scope. Media spend stays yours.",
      "Um valor fechado para a oferta, a página e a captura citadas no escopo. A mídia continua sua.",
      "Un precio cerrado para la oferta, la página y la captura citadas en el alcance. La pauta sigue siendo tuya.",
      "範囲に書いた提案、着地、取り込みの固定料金です。広告費はあなたの側です。",
      "范围里写明的报价、落地和收集是固定费用。广告花费仍由你出。",
    ),
    next: t(
      "Send the offer you are already spending on, and where the replies go today. I reply with what should change first.",
      "Envie a oferta em que você já gasta e para onde as respostas vão hoje. Respondo com o que deve mudar primeiro.",
      "Envía la oferta en la que ya gastas y a dónde van hoy las respuestas. Respondo con lo que debe cambiar primero.",
      "すでに費用をかけている提案と、今返信がどこへ行くかを送ってください。最初に変えるべきことで返します。",
      "发来你已经在花钱的报价，以及回复现在去了哪里。我会先回应该先改什么。",
    ),
    terms: [
      t("Ad accounts stay in your name.", "As contas de anúncio ficam no seu nome.", "Las cuentas de anuncios quedan a tu nombre.", "広告アカウントはあなたの名義です。", "广告账户用你的名义。"),
      t("One offer in the first release.", "Uma oferta na primeira entrega.", "Una oferta en la primera entrega.", "最初の納品は一つの提案です。", "第一次交付一个报价。"),
      t("A new channel is a new scope.", "Um canal novo é um escopo novo.", "Un canal nuevo es un alcance nuevo.", "新しいチャネルは新しい範囲です。", "新渠道是新范围。"),
    ],
    guarantee: t(
      "If a person who answers cannot be found with the campaign that sent them, the capture is not called finished.",
      "Se uma pessoa que responde não puder ser encontrada com a campanha que a enviou, a captura não é chamada de pronta.",
      "Si una persona que responde no se puede encontrar con la campaña que la envió, la captura no se da por terminada.",
      "返信した人を、送ったキャンペーン付きで見つけられなければ、取り込みは完成としません。",
      "如果回复的人找不到是哪个活动带来的，收集就不算完成。",
    ),
    faq: [
      {
        q: t("Is this an ads retainer?", "Isso é uma mensalidade de anúncios?", "¿Esto es una mensualidad de anuncios?", "広告の月額ですか？", "这是广告月费吗？"),
        a: t("No. This is the offer, the page, and the capture. You keep paying the platforms yourself.", "Não. É a oferta, a página e a captura. Você continua pagando as plataformas.", "No. Es la oferta, la página y la captura. Tú sigues pagando las plataformas.", "いいえ。提案、ページ、取り込みです。プラットフォームへの支払いはあなたのままです。", "不是。这是报价、页面和收集。平台费用仍由你付。"),
      },
      {
        q: t("We already run ads. Why is this different?", "Já rodamos anúncios. Por que isto é diferente?", "Ya corremos anuncios. ¿Por qué esto es distinto?", "すでに広告を出しています。何が違いますか？", "我们已经在投广告。这有什么不同？"),
        a: t("Because the click has to land on the same offer and create a record someone can answer.", "Porque o clique precisa cair na mesma oferta e criar um registro que alguém possa responder.", "Porque el clic tiene que caer en la misma oferta y crear un registro que alguien pueda responder.", "クリックが同じ提案に着地し、誰かが返せる記録を作る必要があるからです。", "因为点击必须落到同一个报价上，并生成一条有人能回复的记录。"),
      },
      {
        q: t("Can this feed the CRM?", "Isso pode alimentar o CRM?", "¿Esto puede alimentar el CRM?", "CRM に渡せますか？", "能进 CRM 吗？"),
        a: t("Yes. The capture is written so the next owner is a stage, not a forwarded email.", "Sim. A captura é escrita para o próximo dono ser uma etapa, não um e-mail encaminhado.", "Sí. La captura se escribe para que el siguiente dueño sea una etapa, no un email reenviado.", "はい。次の担当が転送メールではなく段階になるように書きます。", "可以。收集写成下一个负责人是阶段，不是转发邮件。"),
      },
      {
        q: t("What if we have three offers?", "E se tivermos três ofertas?", "¿Y si tenemos tres ofertas?", "提案が三つある場合は？", "如果我们有三个报价呢？"),
        a: t("We start with the one you are already spending on. The others are a later scope.", "Começamos pela que você já está gastando. As outras são um escopo posterior.", "Empezamos por la que ya estás gastando. Las otras son un alcance posterior.", "すでに費用をかけている一つから始めます。残りは後の範囲です。", "先做你已经在花钱的那一个。其余是之后的范围。"),
      },
    ],
  },
  automation: {
    intro: t(
      "Your team is repeating status updates, emails, and follow-ups a person would forget. Automation is how sales and service keep moving when nobody is watching the inbox.",
      "O time está repetindo status, e-mails e acompanhamentos que uma pessoa esqueceria. Automação é como venda e atendimento continuam quando ninguém olha a caixa de entrada.",
      "El equipo repite estados, emails y seguimientos que una persona olvidaría. La automatización es cómo la venta y el servicio siguen cuando nadie mira la bandeja.",
      "チームが、人が忘れる状態更新、メール、フォローを繰り返しています。自動化は、誰も受信箱を見ていなくても販売と対応が進むためのものです。",
      "团队在重复人会忘掉的状态更新、邮件和跟进。自动化是没人盯着收件箱时，销售和服务仍能往前走的方式。",
    ),
    gets: [
      {
        title: t("Orders that update themselves", "Pedidos que se atualizam", "Pedidos que se actualizan solos", "自分で更新される注文", "会自己更新的订单"),
        body: t("A payment or a tracking scan updates the order, the warehouse view, and the message that should go out.", "Um pagamento ou um rastreio atualiza o pedido, a visão do armazém e a mensagem que deve sair.", "Un pago o un rastreo actualiza el pedido, la vista del almacén y el mensaje que debe salir.", "支払いまたは追跡が、注文、倉庫の画面、出すべきメッセージを更新します。", "一笔付款或一次物流扫描会更新订单、仓库视图，以及该发出的消息。"),
      },
      {
        title: t("Follow-up that stops when they reply", "Acompanhamento que para quando respondem", "Seguimiento que para cuando responden", "返信したら止まるフォロー", "对方回复就停止的跟进"),
        body: t("Sequences run on real events, by email or WhatsApp, and stop when the person buys or answers.", "Sequências correm em eventos reais, por e-mail ou WhatsApp, e param quando a pessoa compra ou responde.", "Las secuencias corren en eventos reales, por email o WhatsApp, y paran cuando la persona compra o responde.", "メールか WhatsApp で実イベントに沿い、購入または返信で止まります。", "序列按真实事件走，用邮件或 WhatsApp，对方购买或回复就停。"),
      },
      {
        title: t("People left on the exceptions", "Pessoas só nas exceções", "Personas solo en las excepciones", "人は例外だけ", "人只处理例外"),
        body: t("The team steps in when a rule fails, not for every parcel and every email.", "O time entra quando uma regra falha, não em cada pacote e cada e-mail.", "El equipo entra cuando una regla falla, no en cada paquete y cada email.", "ルールが失敗したときだけ人が入ります。すべての荷物とメールではありません。", "规则失败时人才介入，不是每一件包裹和每一封邮件。"),
      },
    ],
    steps: [
      {
        title: t("Name the repeated work", "Nomear o trabalho repetido", "Nombrar el trabajo repetido", "繰り返しを挙げる", "列出重复的工作"),
        body: t("The messages and status changes a person does by hand more than once a day.", "As mensagens e mudanças de status que uma pessoa faz à mão mais de uma vez por dia.", "Los mensajes y cambios de estado que una persona hace a mano más de una vez al día.", "人が一日に何度も手でやるメッセージと状態変更です。", "一个人一天里用手做不止一次的消息和状态变更。"),
        time: t("About a week", "Cerca de uma semana", "Cerca de una semana", "およそ1週間", "大约一周"),
      },
      {
        title: t("Automate one path end to end", "Automatizar um caminho inteiro", "Automatizar un camino de punta a punta", "一本の道を最後まで自動化する", "把一条路径从头到尾自动化"),
        body: t("One flow that a test event can run without a person, before a second flow is added.", "Um fluxo que um evento de teste percorre sem uma pessoa, antes de um segundo fluxo.", "Un flujo que un evento de prueba recorre sin una persona, antes de un segundo flujo.", "二つ目を足す前に、テストの出来事が人なしで通る一つの流れです。", "先做一条测试事件不用人就能跑通的流程，再加第二条。"),
        time: t("Two to four weeks", "Duas a quatro semanas", "Dos a cuatro semanas", "2〜4週間", "两到四周"),
      },
      {
        title: t("Leave a way to see failures", "Deixar um jeito de ver as falhas", "Dejar una forma de ver los fallos", "失敗が見えるようにする", "留下能看见失败的方式"),
        body: t("When a rule fails, a person sees it. Silent automation is not delivered.", "Quando uma regra falha, uma pessoa vê. Automação silenciosa não é entregue.", "Cuando una regla falla, una persona lo ve. La automatización silenciosa no se entrega.", "ルールが失敗したら人が見ます。黙った自動化は納品しません。", "规则失败时有人能看见。沉默的自动化不算交付。"),
        time: t("Inside the same build", "Dentro da mesma construção", "Dentro de la misma construcción", "同じ制作の中で", "在同一次制作里"),
      },
    ],
    proof: t(
      "The card on this page opens automation already running on orders, support, and scheduling — not a diagram of arrows.",
      "O cartão nesta página abre automação que já roda em pedidos, suporte e agenda — não um diagrama de setas.",
      "La tarjeta de esta página abre automatización que ya corre en pedidos, soporte y agenda — no un diagrama de flechas.",
      "このページのカードから、矢印の図ではなく、注文、サポート、予定ですでに動いている自動化を開けます。",
      "本页的卡片会打开已经跑在订单、支持和排期上的自动化，不是一张箭头图。",
    ),
    investment: t(
      "A fixed fee for the flows named in the scope. Message-provider fees and extra flows are separate.",
      "Um valor fechado para os fluxos citados no escopo. Taxas do provedor de mensagem e fluxos extras ficam de fora.",
      "Un precio cerrado para los flujos citados en el alcance. Las comisiones del proveedor de mensajes y los flujos extra quedan fuera.",
      "範囲に書いた流れの固定料金です。メッセージ事業者の費用と追加の流れは別です。",
      "范围里写明的流程是固定费用。消息服务商费用和额外流程分开。",
    ),
    next: t(
      "Send the message or status your team repeats every day. I reply with the one flow to automate first.",
      "Envie a mensagem ou o status que o time repete todo dia. Respondo com o único fluxo para automatizar primeiro.",
      "Envía el mensaje o el estado que el equipo repite cada día. Respondo con el único flujo para automatizar primero.",
      "チームが毎日繰り返すメッセージか状態を送ってください。最初に自動化する一つの流れで返します。",
      "发来团队每天重复的那条消息或状态。我会回应该先自动化的那一条流程。",
    ),
    terms: [
      t("Accounts for email and WhatsApp stay in your name.", "As contas de e-mail e WhatsApp ficam no seu nome.", "Las cuentas de email y WhatsApp quedan a tu nombre.", "メールと WhatsApp のアカウントはあなたの名義です。", "邮件和 WhatsApp 账户用你的名义。"),
      t("The first release is one path, proven with a test event.", "A primeira entrega é um caminho, provado com um evento de teste.", "La primera entrega es un camino, probado con un evento de prueba.", "最初の納品は一つの道で、テストの出来事で確かめます。", "第一次交付一条路径，用一次测试事件证明。"),
      t("A new flow is a new scope.", "Um fluxo novo é um escopo novo.", "Un flujo nuevo es un alcance nuevo.", "新しい流れは新しい範囲です。", "新流程是新范围。"),
    ],
    guarantee: t(
      "If a test event does not update the record and send the right message — or stop when the person replies — that flow is not called finished.",
      "Se um evento de teste não atualizar o registro e enviar a mensagem certa — ou parar quando a pessoa responde — esse fluxo não é chamado de pronto.",
      "Si un evento de prueba no actualiza el registro y envía el mensaje correcto — o no para cuando la persona responde — ese flujo no se da por terminado.",
      "テストが記録を更新して正しいメッセージを送らない、または返信で止まらないなら、その流れは完成としません。",
      "如果测试事件没有更新记录并发出正确消息——或对方回复后没有停止——这条流程不算完成。",
    ),
    faq: [
      {
        q: t("Will this replace the team?", "Isso substitui o time?", "¿Esto reemplaza al equipo?", "チームの代わりになりますか？", "这会取代团队吗？"),
        a: t("No. It takes the repeated messages. People stay on exceptions, judgment, and the relationship.", "Não. Ele tira as mensagens repetidas. As pessoas ficam nas exceções, no julgamento e na relação.", "No. Quita los mensajes repetidos. Las personas se quedan en las excepciones, el juicio y la relación.", "いいえ。繰り返しのメッセージを外します。人は例外、判断、関係に残ります。", "不会。它拿走重复的消息。人留在例外、判断和关系上。"),
      },
      {
        q: t("Email or WhatsApp?", "E-mail ou WhatsApp?", "¿Email o WhatsApp?", "メールですか、WhatsApp ですか？", "邮件还是 WhatsApp？"),
        a: t("Whichever your buyers already answer. The sequence stops when they buy or reply.", "O que seus compradores já respondem. A sequência para quando compram ou respondem.", "El que tus compradores ya responden. La secuencia para cuando compran o responden.", "買い手がすでに返す方です。購入または返信で止まります。", "买家已经在回复的那个。购买或回复就停。"),
      },
      {
        q: t("What if a rule fails at night?", "E se uma regra falhar de noite?", "¿Y si una regla falla de noche?", "夜にルールが失敗したら？", "规则夜里失败怎么办？"),
        a: t("The failure is visible the next time a person looks. It does not fail in silence.", "A falha fica visível na próxima vez que uma pessoa olhar. Ela não falha em silêncio.", "El fallo queda visible la próxima vez que una persona mira. No falla en silencio.", "次に人が見たときに失敗が見えます。黙って失敗しません。", "下次有人看时失败是可见的。它不会静默失败。"),
      },
      {
        q: t("Can we add more flows later?", "Dá para adicionar fluxos depois?", "¿Se pueden añadir flujos después?", "後から流れを足せますか？", "以后能加更多流程吗？"),
        a: t("Yes. Each new flow is scoped after the first one is proven.", "Sim. Cada fluxo novo entra no escopo depois que o primeiro está provado.", "Sí. Cada flujo nuevo se acuerda después de que el primero está probado.", "はい。最初の一つが確かになってから、次の流れを範囲にします。", "可以。第一条被证明之后，再为新流程定范围。"),
      },
    ],
  },
  mobile: {
    intro: t(
      "You need the product in someone's pocket: the same account, the same order, and a reason to come back — not a second website squeezed into a screen.",
      "Você precisa do produto no bolso de alguém: a mesma conta, o mesmo pedido e um motivo para voltar — não um segundo site espremido na tela.",
      "Necesitas el producto en el bolsillo de alguien: la misma cuenta, el mismo pedido y un motivo para volver — no un segundo sitio apretado en la pantalla.",
      "必要なのはポケットの中の製品です。同じアカウント、同じ注文、戻る理由。画面に押し込んだ二つ目のサイトではありません。",
      "你需要产品在别人口袋里：同一个账户、同一笔订单，以及回来的理由——不是挤进屏幕的第二个网站。",
    ),
    gets: [
      {
        title: t("The job the phone is for", "O trabalho que o celular faz", "El trabajo que hace el móvil", "スマホが担う仕事", "手机要完成的那件事"),
        body: t("One repeated action — buy, book, check an order — that is easier on a phone than on the site.", "Uma ação repetida — comprar, reservar, ver um pedido — mais fácil no celular do que no site.", "Una acción repetida — comprar, reservar, ver un pedido — más fácil en el móvil que en el sitio.", "買う、予約する、注文を見る、という繰り返しがサイトよりスマホで簡単です。", "一件重复的事——购买、预约、查看订单——在手机上比在网站上更容易。"),
      },
      {
        title: t("The same account as the store or CRM", "A mesma conta da loja ou do CRM", "La misma cuenta de la tienda o del CRM", "店や CRM と同じアカウント", "和商店或 CRM 同一个账户"),
        body: t("A person does not register twice, and an order does not live in a separate list.", "A pessoa não se cadastra duas vezes, e o pedido não vive numa lista separada.", "La persona no se registra dos veces, y el pedido no vive en una lista aparte.", "二度登録せず、注文は別リストに住みません。", "人不用注册两次，订单也不住在另一张清单里。"),
      },
      {
        title: t("A reason to open it again", "Um motivo para abrir de novo", "Un motivo para abrirlo otra vez", "もう一度開く理由", "再次打开的理由"),
        body: t("A status, a message, or a return path that is useful after the first session.", "Um status, uma mensagem ou um caminho de volta útil depois da primeira sessão.", "Un estado, un mensaje o un camino de vuelta útil después de la primera sesión.", "最初の利用のあとに役立つ状態、メッセージ、戻り道です。", "第一次使用之后仍然有用的状态、消息或返回路径。",
        ),
      },
    ],
    steps: [
      {
        title: t("Name the one job", "Nomear o único trabalho", "Nombrar el único trabajo", "一つの仕事を決める", "先定那一件事"),
        body: t("If it is not easier on a phone, it stays on the site.", "Se não for mais fácil no celular, fica no site.", "Si no es más fácil en el móvil, se queda en el sitio.", "スマホの方が簡単でなければ、サイトに残します。", "如果在手机上并不更容易，就留在网站上。"),
        time: t("About a week", "Cerca de uma semana", "Cerca de una semana", "およそ1週間", "大约一周"),
      },
      {
        title: t("Build against the same data", "Construir sobre os mesmos dados", "Construir sobre los mismos datos", "同じデータの上に作る", "在同一套数据上做"),
        body: t("Account, catalog, and orders are shared. The app is not a copy that drifts.", "Conta, catálogo e pedidos são compartilhados. O app não é uma cópia que se separa.", "Cuenta, catálogo y pedidos se comparten. La app no es una copia que se separa.", "アカウント、カタログ、注文は共有です。ずれていくコピーにはしません。", "账户、目录和订单是共享的。应用不是一份会走样的拷贝。"),
        time: t("Four to eight weeks", "Quatro a oito semanas", "Cuatro a ocho semanas", "4〜8週間", "四到八周"),
      },
      {
        title: t("Ship a return path", "Entregar um caminho de volta", "Entregar un camino de vuelta", "戻る道を出す", "交出返回路径"),
        body: t("Status or a message that gives a reason to open the app again, tested before release.", "Status ou uma mensagem que dá motivo para abrir de novo, testado antes do lançamento.", "Estado o un mensaje que da motivo para abrir de nuevo, probado antes del lanzamiento.", "もう一度開く理由になる状態かメッセージを、公開前に試します。", "状态或一条消息，给出再次打开的理由，发布前先测过。"),
        time: t("Inside the same build", "Dentro da mesma construção", "Dentro de la misma construcción", "同じ制作の中で", "在同一次制作里"),
      },
    ],
    proof: t(
      "The card on this page opens a retail product already used on a phone, tied to the same orders as the store.",
      "O cartão nesta página abre um produto de varejo já usado no celular, ligado aos mesmos pedidos da loja.",
      "La tarjeta de esta página abre un producto de retail ya usado en el móvil, atado a los mismos pedidos de la tienda.",
      "このページのカードから、店と同じ注文につながり、すでにスマホで使われている小売製品を開けます。",
      "本页的卡片会打开一个已经在手机上使用、并和商店同一批订单相连的零售产品。",
    ),
    investment: t(
      "A fixed fee for the one job, the shared account, and the return path. Store fees for Apple or Google stay yours.",
      "Um valor fechado para o único trabalho, a conta compartilhada e o caminho de volta. As taxas da Apple ou do Google continuam suas.",
      "Un precio cerrado para el único trabajo, la cuenta compartida y el camino de vuelta. Las tarifas de Apple o Google siguen siendo tuyas.",
      "一つの仕事、共有アカウント、戻り道の固定料金です。Apple や Google の手数料はあなたの側です。",
      "那一件事、共享账户和返回路径是固定费用。Apple 或 Google 的商店费用仍由你出。",
    ),
    next: t(
      "Send the action people repeat, and whether they already have an account on the site or store. I reply with whether an app is the right shape.",
      "Envie a ação que as pessoas repetem e se elas já têm conta no site ou na loja. Respondo se um app é a forma certa.",
      "Envía la acción que la gente repite y si ya tienen cuenta en el sitio o la tienda. Respondo si una app es la forma correcta.",
      "人が繰り返す行動と、サイトや店にすでにアカウントがあるかを送ってください。アプリが正しい形か返します。",
      "发来人们重复的动作，以及他们是否已有网站或商店账户。我会回应用是不是合适的形态。",
    ),
    terms: [
      t("You own the product and the accounts.", "O produto e as contas são seus.", "El producto y las cuentas son tuyos.", "製品とアカウントの所有はあなたです。", "产品与账户归你所有。"),
      t("Store listing fees are not part of the project fee.", "Taxas das lojas de app não entram no valor do projeto.", "Las tarifas de las tiendas de apps no entran en el precio del proyecto.", "アプリストアの手数料はプロジェクト料金に含みません。", "应用商店上架费用不包含在项目费里。"),
      t("A second job on the phone is a new scope.", "Um segundo trabalho no celular é um escopo novo.", "Un segundo trabajo en el móvil es un alcance nuevo.", "スマホ上の二つ目の仕事は新しい範囲です。", "手机上的第二件事是新范围。"),
    ],
    guarantee: t(
      "If the same person cannot see the same order on the phone and on the store, the app is not called finished.",
      "Se a mesma pessoa não puder ver o mesmo pedido no celular e na loja, o app não é chamado de pronto.",
      "Si la misma persona no puede ver el mismo pedido en el móvil y en la tienda, la app no se da por terminada.",
      "同じ人がスマホと店で同じ注文を見られなければ、アプリは完成としません。",
      "如果同一个人在手机和商店上看不到同一笔订单，应用不算完成。",
    ),
    faq: [
      {
        q: t("Do we need an app, or a faster site?", "Precisamos de um app ou de um site mais rápido?", "¿Necesitamos una app o un sitio más rápido?", "アプリですか、それとも速いサイトですか？", "我们需要应用，还是一个更快的网站？"),
        a: t("If the job is not easier in a pocket, it stays a site. I will say so before a build starts.", "Se o trabalho não for mais fácil no bolso, continua um site. Eu digo isso antes de construir.", "Si el trabajo no es más fácil en el bolsillo, sigue siendo un sitio. Lo digo antes de construir.", "ポケットの方が簡単でなければサイトのままです。制作の前にそう言います。", "如果这件事在口袋里并不更容易，就继续做网站。开工前我会直说。"),
      },
      {
        q: t("iPhone and Android?", "iPhone e Android?", "¿iPhone y Android?", "iPhone と Android？", "iPhone 和 Android？"),
        a: t("Both, against the same account and the same orders, unless the scope says one store first.", "Os dois, na mesma conta e nos mesmos pedidos, a menos que o escopo diga uma loja primeiro.", "Los dos, con la misma cuenta y los mismos pedidos, salvo que el alcance diga una tienda primero.", "範囲が一方のストアからと書かない限り、同じアカウントと同じ注文で両方です。", "两边都做，同一账户、同一批订单，除非范围写明先上一个商店。"),
      },
      {
        q: t("Will people have to register again?", "As pessoas vão precisar se cadastrar de novo?", "¿La gente tendrá que registrarse otra vez?", "もう一度登録が必要ですか？", "人们要再注册一次吗？"),
        a: t("No. The account is the one they already have on the site or store.", "Não. A conta é a que elas já têm no site ou na loja.", "No. La cuenta es la que ya tienen en el sitio o la tienda.", "いいえ。サイトや店ですでにあるアカウントです。", "不用。账户就是他们在网站或商店上已有的那个。"),
      },
      {
        q: t("How do they come back?", "Como elas voltam?", "¿Cómo vuelven?", "どうやって戻りますか？", "他们怎么回来？"),
        a: t("A status or a message that is useful after the first session, not a badge with nothing behind it.", "Um status ou uma mensagem útil depois da primeira sessão, não um selo sem nada atrás.", "Un estado o un mensaje útil después de la primera sesión, no una insignia sin nada detrás.", "最初の利用のあとに役立つ状態かメッセージです。中身のない印ではありません。", "第一次使用之后仍然有用的状态或消息，不是空的角标。"),
      },
    ],
  },
  blockchain: {
    intro: t(
      "You need a record more than one party can trust, or a payment that does not depend on a single platform. A chain is the tool only when that is the actual problem.",
      "Você precisa de um registro em que mais de uma parte confia, ou de um pagamento que não depende de uma única plataforma. A rede só é a ferramenta quando esse é o problema de verdade.",
      "Necesitas un registro en el que más de una parte confía, o un pago que no depende de una sola plataforma. La red es la herramienta solo cuando ese es el problema real.",
      "複数の当事者が信頼できる記録か、一つの基盤に依存しない支払いが必要です。それが本当の問題のときだけ、チェーンが道具です。",
      "你需要多方都能信任的记录，或不依赖单一平台的支付。只有这才是真正的问题时，链才是工具。",
    ),
    gets: [
      {
        title: t("A record the other party can verify", "Um registro que a outra parte verifica", "Un registro que la otra parte puede verificar", "相手が確かめられる記録", "对方能核验的记录"),
        body: t("What was agreed, and when, without asking you to be the only copy.", "O que foi combinado, e quando, sem você ser a única cópia.", "Qué se acordó, y cuándo, sin que tú seas la única copia.", "何をいつ合意したか。あなたが唯一のコピーである必要はありません。", "约定了什么、何时约定，而不必只有你手里一份。"),
      },
      {
        title: t("A payment path that matches the deal", "Um pagamento que combina com o acordo", "Un pago que coincide con el acuerdo", "取引に合う支払い", "和交易匹配的支付"),
        body: t("Only if a wallet or an on-chain payment is how this buyer already settles. Otherwise it stays a normal gateway.", "Só se uma carteira ou um pagamento on-chain for como esse comprador já liquida. Senão, continua um gateway comum.", "Solo si una billetera o un pago on-chain es como ese comprador ya liquida. Si no, sigue siendo una pasarela normal.", "その買い手がすでにウォレットやオンチェーンで決済する場合だけです。そうでなければ通常の決済のままです。", "只有当这个买家本来就用钱包或链上支付结算时才做。否则仍用普通网关。"),
      },
      {
        title: t("An experience a person can finish", "Uma experiência que uma pessoa termina", "Una experiencia que una persona puede terminar", "人が最後までできる体験", "一个人能做完的体验"),
        body: t("The screen explains the step. A failed transaction has a visible state, not a spinner.", "A tela explica o passo. Uma transação que falha tem um estado visível, não uma espera infinita.", "La pantalla explica el paso. Una transacción que falla tiene un estado visible, no una espera infinita.", "画面が手順を説明します。失敗した取引には見える状態があり、回り続ける表示ではありません。", "界面说明这一步。失败的交易有可见状态，不是一直转圈。"),
      },
    ],
    steps: [
      {
        title: t("Say the problem in one sentence", "Dizer o problema numa frase", "Decir el problema en una frase", "問題を一文で言う", "用一句话写出问题"),
        body: t("If a normal database and a normal gateway solve it, that is the recommendation.", "Se um banco comum e um gateway comum resolvem, essa é a recomendação.", "Si una base normal y una pasarela normal lo resuelven, esa es la recomendación.", "普通のデータベースと普通の決済で足りるなら、それが提案です。", "如果普通数据库和普通网关能解决，那就是建议。"),
        time: t("A few days", "Alguns dias", "Unos días", "数日", "几天"),
      },
      {
        title: t("Build the smallest record", "Construir o menor registro", "Construir el registro más pequeño", "最小の記録を作る", "做最小的记录"),
        body: t("One fact both parties need to verify. Not a platform.", "Um fato que as duas partes precisam verificar. Não uma plataforma.", "Un hecho que las dos partes necesitan verificar. No una plataforma.", "双方が確かめる一つの事実です。基盤ではありません。", "双方需要核验的一个事实。不是一个平台。"),
        time: t("Three to six weeks", "Três a seis semanas", "Tres a seis semanas", "3〜6週間", "三到六周"),
      },
      {
        title: t("Make the failure visible", "Deixar a falha visível", "Dejar el fallo visible", "失敗を見えるようにする", "让失败可见"),
        body: t("A person can see pending, confirmed, or failed without reading a hash.", "Uma pessoa vê pendente, confirmado ou falhou sem ler um hash.", "Una persona ve pendiente, confirmado o fallido sin leer un hash.", "ハッシュを読まずに、保留、確定、失敗が見えます。", "人不用读哈希就能看见待确认、已确认或失败。"),
        time: t("Inside the same build", "Dentro da mesma construção", "Dentro de la misma construcción", "同じ制作の中で", "在同一次制作里"),
      },
    ],
    proof: t(
      "The card on this page opens shipped product work. A chain is proposed only when the record or the payment actually needs one.",
      "O cartão nesta página abre produto já entregue. Uma rede só é proposta quando o registro ou o pagamento realmente precisa.",
      "La tarjeta de esta página abre producto ya entregado. Una red solo se propone cuando el registro o el pago realmente la necesita.",
      "このページのカードから、すでに納品した製品を開けます。記録か支払いが本当に必要なときだけチェーンを提案します。",
      "本页的卡片会打开已经交付的产品。只有记录或支付确实需要时，才会提议用链。",
    ),
    investment: t(
      "A fixed fee after the problem is stated. Network fees are yours. If a chain is the wrong tool, you are told before the build, and you are not charged for one.",
      "Um valor fechado depois de o problema estar dito. As taxas da rede são suas. Se a rede for a ferramenta errada, você fica sabendo antes da construção e não paga por uma.",
      "Un precio cerrado después de dicho el problema. Las tarifas de la red son tuyas. Si la red es la herramienta incorrecta, se te dice antes de construir y no pagas por una.",
      "問題を述べたあとの固定料金です。ネットワーク手数料はあなたの側です。チェーンが違う道具なら、制作の前に伝え、その費用は取りません。",
      "问题说清之后是固定费用。网络手续费由你出。如果链不是合适的工具，开工前会告诉你，并且不会为此收费。",
    ),
    next: t(
      "Send the fact both parties must trust, or the payment that a normal gateway cannot take. I reply with whether a chain belongs in the scope.",
      "Envie o fato em que as duas partes precisam confiar, ou o pagamento que um gateway comum não recebe. Respondo se uma rede entra no escopo.",
      "Envía el hecho en el que las dos partes deben confiar, o el pago que una pasarela normal no puede tomar. Respondo si una red entra en el alcance.",
      "双方が信頼すべき事実か、通常の決済が受け取れない支払いを送ってください。チェーンが範囲に入るか返します。",
      "发来双方必须信任的那个事实，或普通网关收不了的那种支付。我会回链是否该进入范围。",
    ),
    terms: [
      t("You own the product. Network fees are separate.", "O produto é seu. As taxas da rede são separadas.", "El producto es tuyo. Las tarifas de la red son aparte.", "製品はあなたのものです。ネットワーク手数料は別です。", "产品归你。网络费用分开。"),
      t("No token, no marketplace, unless that is the problem you sent.", "Nenhum token, nenhum marketplace, a menos que esse seja o problema que você enviou.", "Ningún token, ningún marketplace, salvo que ese sea el problema que enviaste.", "送った問題がそれでなければ、トークンもマーケットも作りません。", "除非你发来的问题就是这个，否则不做代币、不做市场。"),
      t("A normal database is an acceptable outcome of the first conversation.", "Um banco de dados comum é um resultado aceitável da primeira conversa.", "Una base de datos normal es un resultado aceptable de la primera conversación.", "最初の会話の結果が普通のデータベースでも構いません。", "第一次谈话的结果可以是一个普通数据库。"),
    ],
    guarantee: t(
      "If a test cannot be confirmed or failed in a way a person understands, the work is not called finished.",
      "Se um teste não puder ser confirmado ou falhar de um jeito que uma pessoa entenda, o trabalho não é chamado de pronto.",
      "Si una prueba no se puede confirmar o fallar de un modo que una persona entienda, el trabajo no se da por terminado.",
      "人が理解できる形でテストを確定または失敗させられなければ、完成とは呼びません。",
      "如果一次测试不能以人能看懂的方式确认或失败，工作不算完成。",
    ),
    faq: [
      {
        q: t("Do we need a token?", "Precisamos de um token?", "¿Necesitamos un token?", "トークンは必要ですか？", "我们需要代币吗？"),
        a: t("Only if the problem you sent is a token. Otherwise it is out of scope.", "Só se o problema que você enviou for um token. Senão, fica fora do escopo.", "Solo si el problema que enviaste es un token. Si no, queda fuera del alcance.", "送った問題がトークンのときだけです。そうでなければ範囲外です。", "只有你发来的问题本身是代币时才需要。否则不在范围内。"),
      },
      {
        q: t("What if a normal payment is enough?", "E se um pagamento comum bastar?", "¿Y si un pago normal basta?", "普通の支払いで足りる場合は？", "如果普通支付就够呢？"),
        a: t("Then that is the proposal. You are not sold a chain you do not need.", "Então essa é a proposta. Você não compra uma rede de que não precisa.", "Entonces esa es la propuesta. No se te vende una red que no necesitas.", "それが提案です。不要なチェーンは売りません。", "那就是方案。不会卖给你不需要的链。"),
      },
      {
        q: t("Who pays network fees?", "Quem paga as taxas da rede?", "¿Quién paga las tarifas de la red?", "ネットワーク手数料は誰が払いますか？", "网络费用谁付？"),
        a: t("You do. They are not inside the project fee.", "Você. Elas não entram no valor do projeto.", "Tú. No entran en el precio del proyecto.", "あなたです。プロジェクト料金には入りません。", "你付。它们不在项目费里。"),
      },
      {
        q: t("Can a buyer see what happened?", "O comprador consegue ver o que aconteceu?", "¿El comprador puede ver qué pasó?", "買い手は何が起きたか見えますか？", "买家能看见发生了什么吗？"),
        a: t("Yes. Pending, confirmed, and failed are states on the screen, not a raw hash.", "Sim. Pendente, confirmado e falhou são estados na tela, não um hash cru.", "Sí. Pendiente, confirmado y fallido son estados en la pantalla, no un hash crudo.", "はい。保留、確定、失敗は画面の状態で、生のハッシュではありません。", "能。待确认、已确认和失败是界面上的状态，不是一串原始哈希。"),
      },
    ],
  },
  seo: {
    intro: t(
      "Ads stop when the budget stops. You want pages that can be found, and a way to see which of those pages become enquiries or orders.",
      "O anúncio para quando o orçamento para. Você quer páginas que possam ser encontradas e um jeito de ver quais viram contato ou pedido.",
      "El anuncio para cuando el presupuesto para. Quieres páginas que se puedan encontrar y una forma de ver cuáles se vuelven consultas o pedidos.",
      "予算が終わると広告も終わります。見つかるページと、そのうちどれが問い合わせや注文になるかを見る方法が必要です。",
      "预算停了，广告就停。你要的是能被找到的页面，以及看见哪些页面变成了咨询或订单。",
    ),
    gets: [
      {
        title: t("Pages a search can understand", "Páginas que a busca entende", "Páginas que la búsqueda entiende", "検索が理解できるページ", "搜索能看懂的页面"),
        body: t("Titles, descriptions, clean URLs, and structured data on the pages that should rank — not a plugin bolted on after launch.", "Títulos, descrições, URLs limpas e dados estruturados nas páginas que devem ranquear — não um plugin grudado depois do lançamento.", "Títulos, descripciones, URLs limpias y datos estructurados en las páginas que deben posicionar — no un plugin pegado después del lanzamiento.", "上位に来るべきページのタイトル、説明、きれいな URL、構造化データです。公開後に付けるプラグインではありません。", "该被找到的页面有标题、描述、干净网址和结构化数据——不是上线后贴上的插件。"),
      },
      {
        title: t("Measurement before the traffic", "Medição antes do tráfego", "Medición antes del tráfico", "流入の前の計測", "流量到来之前的衡量"),
        body: t("Analytics is on before launch, so the first weeks teach you which page does the work.", "A análise entra antes do lançamento, então as primeiras semanas ensinam qual página faz o trabalho.", "La analítica entra antes del lanzamiento, así las primeras semanas enseñan qué página hace el trabajo.", "公開前に計測を入れるので、最初の数週間でどのページが働いているか分かります。", "上线前接上统计，头几周就能看出哪一页在起作用。"),
      },
      {
        title: t("A site that stays healthy", "Um site que continua saudável", "Un sitio que se mantiene sano", "健全なままのサイト", "保持健康的网站"),
        body: t("Speed, indexable pages, and a way to see what broke after a change — so search does not die quietly.", "Velocidade, páginas indexáveis e um jeito de ver o que quebrou depois de uma mudança — para a busca não morrer em silêncio.", "Velocidad, páginas indexables y una forma de ver qué se rompió después de un cambio — para que la búsqueda no muera en silencio.", "速さ、索引できるページ、変更のあと何が壊れたかが見えること。検索が黙って死なないようにします。", "速度、可索引的页面，以及改动之后能看见坏了什么——搜索不会悄悄死掉。"),
      },
    ],
    steps: [
      {
        title: t("Name the pages that should be found", "Nomear as páginas que devem ser encontradas", "Nombrar las páginas que deben encontrarse", "見つかるべきページを挙げる", "列出该被找到的页面"),
        body: t("Offers, categories, or products — not every URL on the site.", "Ofertas, categorias ou produtos — não toda URL do site.", "Ofertas, categorías o productos — no cada URL del sitio.", "提案、カテゴリ、商品です。サイトのすべての URL ではありません。", "报价、分类或产品——不是站上每一个网址。"),
        time: t("About a week", "Cerca de uma semana", "Cerca de una semana", "およそ1週間", "大约一周"),
      },
      {
        title: t("Make those pages readable to search", "Deixar essas páginas legíveis para a busca", "Dejar esas páginas legibles para la búsqueda", "そのページを検索に読めるようにする", "让这些页面能被搜索读懂"),
        body: t("Titles, URLs, and structured data are part of the build, with analytics already recording.", "Títulos, URLs e dados estruturados fazem parte da construção, com a análise já gravando.", "Títulos, URLs y datos estructurados son parte de la construcción, con la analítica ya registrando.", "タイトル、URL、構造化データは制作の一部で、計測はすでに記録しています。", "标题、网址和结构化数据是制作的一部分，统计已经在记录。"),
        time: t("Two to four weeks", "Duas a quatro semanas", "Dos a cuatro semanas", "2〜4週間", "两到四周"),
      },
      {
        title: t("Leave a check you can repeat", "Deixar uma checagem que você repete", "Dejar una revisión que puedes repetir", "繰り返せる確認を残す", "留下你可以重复的检查"),
        body: t("What to look at after a month: which pages are indexed, which enquiries they produced, what slowed down.", "O que olhar depois de um mês: quais páginas estão indexadas, quais contatos produziram, o que ficou lento.", "Qué mirar después de un mes: qué páginas están indexadas, qué consultas produjeron, qué se volvió lento.", "一か月後に見るもの：索引されたページ、生んだ問い合わせ、遅くなった箇所です。", "一个月后看什么：哪些页面被索引、带来了哪些咨询、哪里变慢了。"),
        time: t("Before launch", "Antes do lançamento", "Antes del lanzamiento", "公開の前", "上线之前"),
      },
    ],
    proof: t(
      "The card on this page opens a site where pages, product data, and measurement were part of the build.",
      "O cartão nesta página abre um site em que páginas, dados de produto e medição fizeram parte da construção.",
      "La tarjeta de esta página abre un sitio donde páginas, datos de producto y medición fueron parte de la construcción.",
      "このページのカードから、ページ、商品データ、計測が制作の一部だったサイトを開けます。",
      "本页的卡片会打开一个把页面、商品数据和衡量做进制作里的网站。",
    ),
    investment: t(
      "A fixed fee for the pages named in the scope and the measurement around them. Ongoing content writing and ad spend are separate. Rankings are not sold as a date.",
      "Um valor fechado para as páginas citadas no escopo e a medição em volta delas. Textos contínuos e mídia ficam de fora. Posição não é vendida como uma data.",
      "Un precio cerrado para las páginas citadas en el alcance y la medición a su alrededor. La redacción continua y la pauta quedan fuera. El posicionamiento no se vende como una fecha.",
      "範囲のページと、その周りの計測の固定料金です。継続の原稿と広告費は別です。順位を日付として売りません。",
      "范围里的页面及其衡量是固定费用。持续写稿和广告花费分开。排名不会被当成一个日期来卖。",
    ),
    next: t(
      "Send the pages you want found, and whether anyone can already see enquiries in analytics. I reply with what is missing before any rewrite.",
      "Envie as páginas que quer encontradas e se alguém já vê os contatos na análise. Respondo o que falta antes de qualquer reescrita.",
      "Envía las páginas que quieres encontrar y si alguien ya ve las consultas en la analítica. Respondo qué falta antes de cualquier reescritura.",
      "見つかってほしいページと、問い合わせがすでに計測で見えるかを送ってください。書き換える前に、足りないものを返します。",
      "发来你希望被找到的页面，以及现在是否已能在统计里看见咨询。改写之前我会先回缺什么。",
    ),
    terms: [
      t("No promise of a ranking on a date.", "Nenhuma promessa de posição numa data.", "Ninguna promesa de posición en una fecha.", "日付つきの順位は約束しません。", "不承诺某一天的排名。"),
      t("The fee covers the pages in the scope, not a content retainer.", "O valor cobre as páginas do escopo, não uma mensalidade de conteúdo.", "El precio cubre las páginas del alcance, no una mensualidad de contenido.", "料金は範囲のページであり、原稿の月額ではありません。", "费用覆盖范围内的页面，不是内容月费。"),
      t("You own the pages and the analytics property.", "As páginas e a propriedade da análise são suas.", "Las páginas y la propiedad de analítica son tuyas.", "ページと計測の所有はあなたです。", "页面和统计财产归你所有。"),
    ],
    guarantee: t(
      "If the pages in scope cannot be indexed and the enquiries cannot be tied back to a page, the measurement is not called finished.",
      "Se as páginas do escopo não puderem ser indexadas e os contatos não puderem ser ligados a uma página, a medição não é chamada de pronta.",
      "Si las páginas del alcance no se pueden indexar y las consultas no se pueden atar a una página, la medición no se da por terminada.",
      "範囲のページが索引できず、問い合わせをページに結びつけられなければ、計測は完成としません。",
      "如果范围内的页面不能被索引，咨询也不能回到某一页，衡量就不算完成。",
    ),
    faq: [
      {
        q: t("Will we rank in a month?", "Vamos ranquear em um mês?", "¿Vamos a posicionar en un mes?", "一か月で順位は付きますか？", "一个月内会有排名吗？"),
        a: t("That is not what is sold. What you get is pages search can read, and measurement of which ones produce enquiries.", "Não é isso que se vende. Você recebe páginas que a busca lê e a medição de quais produzem contato.", "Eso no es lo que se vende. Recibes páginas que la búsqueda puede leer y la medición de cuáles producen consultas.", "それは売り物ではありません。受け取るのは検索が読めるページと、どれが問い合わせを生むかの計測です。", "卖的不是这个。你得到的是搜索能读的页面，以及哪些页面产生咨询的衡量。"),
      },
      {
        q: t("Is this a monthly SEO retainer?", "Isso é uma mensalidade de SEO?", "¿Esto es una mensualidad de SEO?", "SEO の月額ですか？", "这是 SEO 月费吗？"),
        a: t("No. It is the pages and the measurement in one project. Ongoing writing is a separate agreement.", "Não. São as páginas e a medição num projeto. Texto contínuo é um acordo separado.", "No. Son las páginas y la medición en un proyecto. La redacción continua es un acuerdo aparte.", "いいえ。一つのプロジェクトのページと計測です。継続の原稿は別の合意です。", "不是。这是一个项目里的页面和衡量。持续写稿是另一份约定。"),
      },
      {
        q: t("We already have analytics. Is that enough?", "Já temos análise. Isso basta?", "Ya tenemos analítica. ¿Eso basta?", "すでに計測があります。それで足りますか？", "我们已经有统计。够吗？"),
        a: t("Only if an enquiry can be tied to a page. If it cannot, that connection is part of the work.", "Só se um contato puder ser ligado a uma página. Se não puder, essa ligação faz parte do trabalho.", "Solo si una consulta se puede atar a una página. Si no, esa conexión es parte del trabajo.", "問い合わせをページに結びつけられるときだけです。できなければ、その接続が仕事に入ります。", "只有咨询能回到某一页时才够。如果不能，这个连接就是工作的一部分。"),
      },
      {
        q: t("What happens after a redesign?", "O que acontece depois de um redesign?", "¿Qué pasa después de un rediseño?", "作り直したあとは？", "改版之后呢？"),
        a: t("The check covers what slowed down and what stopped being indexable, so search does not die quietly.", "A checagem cobre o que ficou lento e o que deixou de ser indexável, para a busca não morrer em silêncio.", "La revisión cubre qué se volvió lento y qué dejó de ser indexable, para que la búsqueda no muera en silencio.", "遅くなったものと、索引できなくなったものを確認し、検索が黙って死なないようにします。", "检查包括变慢的部分和不再可索引的部分，搜索不会悄悄停掉。"),
      },
    ],
  },
};

export function getSolutionProposal(slug: SolutionSlug): SolutionProposal {
  return proposals[slug];
}
