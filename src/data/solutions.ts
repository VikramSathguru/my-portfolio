import type { AppLocale } from "@/i18n/routing";
import { solutionDepth } from "@/data/solution-depth";

export const solutionSlugs = [
  "websites",
  "online-stores",
  "crm",
  "acquisition",
  "automation",
  "mobile",
  "blockchain",
  "seo",
] as const;

export type SolutionSlug = (typeof solutionSlugs)[number];

export type ArtId =
  | "websites"
  | "stores"
  | "crm"
  | "acquisition"
  | "automation"
  | "mobile"
  | "blockchain"
  | "seo"
  | "design"
  | "payments"
  | "email"
  | "coupons"
  | "social"
  | "logistics"
  | "analytics"
  | "pipeline";

type L10n = Record<AppLocale, string>;

export type SolutionPart = {
  id: string;
  art: ArtId;
  title: L10n;
  necessity: L10n;
  importance: L10n;
};

export type Solution = {
  slug: SolutionSlug;
  art: ArtId;
  related: SolutionSlug[];
  name: L10n;
  tagline: L10n;
  overview: L10n;
  projectSlug: string;
  promise: L10n;
  outcomes: L10n[];
  standard: L10n;
  parts: SolutionPart[];
};

function t(en: string, pt: string, es: string, ja: string, zh: string): L10n {
  return { en, pt, es, ja, zh };
}

export function localeText(value: L10n, locale: string): string {
  if (locale in value) return value[locale as AppLocale];
  return value.en;
}

const solutionBase = [
  {
    slug: "websites",
    art: "websites",
    related: ["online-stores", "seo", "acquisition"],
    name: t(
      "Website development",
      "Desenvolvimento de sites",
      "Desarrollo de sitios web",
      "ウェブサイト制作",
      "网站开发",
    ),
    tagline: t(
      "A site that explains the offer, holds attention, and is ready to be found.",
      "Um site que explica a oferta, segura a atenção e está pronto para ser encontrado.",
      "Un sitio que explica la oferta, sostiene la atención y está listo para ser encontrado.",
      "提案を伝え、注意を引き、見つけてもらえるサイト。",
      "把报价讲清楚、抓住注意力，并且能被找到的网站。",
    ),
    overview: t(
      "A website is the public face of the business. It has to look deliberate, load fast on a phone, and make the next step obvious — contact, catalog, or booking — before any campaign spends money sending people to it. When the business already runs on WordPress, the same standard applies there.",
      "O site é a face pública do negócio. Precisa parecer intencional, abrir rápido no celular e deixar o próximo passo óbvio — contato, catálogo ou reserva — antes de qualquer campanha gastar dinheiro enviando gente para ele. Quando o negócio já roda em WordPress, o mesmo padrão vale ali.",
      "El sitio es la cara pública del negocio. Tiene que verse deliberado, abrir rápido en el móvil y dejar el siguiente paso obvio — contacto, catálogo o reserva — antes de que una campaña gaste dinero enviando gente. Si el negocio ya corre en WordPress, el mismo estándar vale ahí.",
      "サイトは事業の公の顔です。意図が見え、スマホで速く開き、問い合わせ・カタログ・予約の次の一歩が明白である必要があります。広告費を使う前に、その受け皿が要ります。すでに WordPress で動いている事業にも、同じ基準を適用します。",
      "网站是业务的公开门面。它必须看起来是有意设计的，在手机上打开很快，并且下一步很清楚——联系、目录或预约——然后才值得花钱把人送来。如果业务已经跑在 WordPress 上，同一套标准也适用。",
    ),
    parts: [
      {
        id: "design",
        art: "design",
        title: t("Attention-grabbing design", "Design que prende a atenção", "Diseño que capta la atención", "注意を引くデザイン", "抓住注意力的设计"),
        necessity: t(
          "People decide in seconds whether a business looks serious. A generic template does not hold a first visit, and a beautiful page that hides the offer does not either.",
          "As pessoas decidem em segundos se o negócio parece sério. Um template genérico não segura a primeira visita, e uma página bonita que esconde a oferta também não.",
          "La gente decide en segundos si el negocio parece serio. Una plantilla genérica no sostiene la primera visita, y una página bonita que esconde la oferta tampoco.",
          "人は数秒で、その事業が本気かどうかを判断します。ありきたりなテンプレートは初回訪問を保てません。見た目だけ良くて提案が隠れるページも同じです。",
          "人们几秒内就会判断这家生意是否认真。套模板留不住第一次访问，好看但把报价藏起来的页面也一样。",
        ),
        importance: t(
          "Design here is the hierarchy: what the visitor sees first, what they trust, and which action is the one you want. It is how a studio, a shop, or a service looks like the company it claims to be.",
          "Design aqui é hierarquia: o que o visitante vê primeiro, em que confia e qual ação você quer. É assim que um estúdio, uma loja ou um serviço parece a empresa que diz ser.",
          "El diseño aquí es jerarquía: qué ve primero el visitante, en qué confía y qué acción quieres. Así un estudio, una tienda o un servicio se ve como la empresa que dice ser.",
          "ここでのデザインは階層です。最初に何を見せ、何を信頼させ、どの行動を取らせるか。スタジオ、店、サービスが、名乗るとおりの会社に見える方法です。",
          "这里的设计是层次：访客先看到什么、信任什么、你希望他们做哪一步。工作室、店铺或服务因此看起来像它所声称的那家公司。",
        ),
      },
      {
        id: "structure",
        art: "websites",
        title: t("Clear structure", "Estrutura clara", "Estructura clara", "明確な構成", "清晰的结构"),
        necessity: t(
          "If the offer, the proof, and the next step are scattered, the visit ends. A site needs a path: who it is for, what you do, and how to start.",
          "Se a oferta, a prova e o próximo passo estão espalhados, a visita acaba. O site precisa de um caminho: para quem é, o que você faz e como começar.",
          "Si la oferta, la prueba y el siguiente paso están dispersos, la visita termina. El sitio necesita un camino: para quién es, qué haces y cómo empezar.",
          "提案、証拠、次の一歩が散らばっていると、訪問は終わります。誰向けか、何をするか、どう始めるかの道が要ります。",
          "如果报价、证明和下一步是散的，访问就结束了。网站需要一条路径：给谁、做什么、如何开始。",
        ),
        importance: t(
          "I structure pages so a stranger can understand the business without a call. Case studies, services, and contact sit where a buyer actually looks.",
          "Estruturo as páginas para um estranho entender o negócio sem uma chamada. Cases, serviços e contato ficam onde o comprador realmente olha.",
          "Estructuro las páginas para que un desconocido entienda el negocio sin una llamada. Casos, servicios y contacto quedan donde el comprador realmente mira.",
          "知らない人が電話なしで事業を理解できるようページを組みます。事例、サービス、連絡先は、買い手が実際に見る場所に置きます。",
          "我把页面组织成陌生人不用打电话也能看懂业务。案例、服务和联系方式放在买家真正会看的地方。",
        ),
      },
      {
        id: "mobile",
        art: "mobile",
        title: t("Speed on a phone", "Velocidade no celular", "Velocidad en el móvil", "スマホでの速さ", "手机上的速度"),
        necessity: t(
          "Most first visits are on a phone, often on a slow connection. A site that stutters loses the person before the headline finishes loading.",
          "A maioria das primeiras visitas é no celular, muitas vezes numa conexão lenta. Um site que trava perde a pessoa antes do título terminar de carregar.",
          "La mayoría de las primeras visitas son en el móvil, a menudo con una conexión lenta. Un sitio que se traba pierde a la persona antes de que cargue el título.",
          "最初の訪問の多くはスマホで、回線が遅いことも多いです。見出しが読み終わる前に止まるサイトは人を失います。",
          "大多数第一次访问发生在手机上，而且常常网速一般。页面一卡，标题还没加载完人就走了。",
        ),
        importance: t(
          "Pages are built to stay light: images that fit the screen, type that can be read, and actions that are easy to tap. That is what makes the design survive outside a desktop mockup.",
          "As páginas ficam leves: imagens no tamanho da tela, texto legível e ações fáceis de tocar. É isso que faz o design sobreviver fora de um mockup de desktop.",
          "Las páginas se mantienen ligeras: imágenes al tamaño de la pantalla, texto legible y acciones fáciles de tocar. Eso hace que el diseño sobreviva fuera de un mockup de escritorio.",
          "画面に合う画像、読める文字、押しやすい操作でページを軽くします。デスクトップの見本の外でもデザインが生きる理由です。",
          "页面保持轻：图片适配屏幕、文字可读、按钮好点。设计因此不会只存在于桌面稿里。",
        ),
      },
    ],
  },
  {
    slug: "online-stores",
    art: "stores",
    related: ["acquisition", "automation", "seo"],
    name: t("Online stores", "Lojas online", "Tiendas online", "オンラインストア", "网上商店"),
    tagline: t(
      "A store that can create sales from the first visit — not only take an order.",
      "Uma loja que gera venda desde a primeira visita — não só recebe o pedido.",
      "Una tienda que genera ventas desde la primera visita — no solo toma el pedido.",
      "最初の訪問から売上を作る店。注文を受けるだけでは足りない。",
      "从第一次访问就能产生销售的店，而不只是接下订单。",
    ),
    overview: t(
      "An online store fails when it is only a catalog. From the first day it needs a design people stop for, payments they trust, a reason to come back, a path from TikTok or Instagram, a way to ship, and pages search engines can find. Those pieces work together. Missing one of them is why a pretty shop stays quiet.",
      "Uma loja online falha quando é só um catálogo. Desde o primeiro dia precisa de um design em que as pessoas parem, pagamentos em que confiem, um motivo para voltar, um caminho vindo do TikTok ou Instagram, um jeito de enviar e páginas que o buscador encontre. Essas peças funcionam juntas. Faltar uma é o motivo de uma loja bonita ficar em silêncio.",
      "Una tienda online falla cuando es solo un catálogo. Desde el primer día necesita un diseño en el que la gente se detenga, pagos en los que confíe, una razón para volver, un camino desde TikTok o Instagram, una forma de enviar y páginas que el buscador encuentre. Esas piezas trabajan juntas.",
      "オンラインストアはカタログだけでは失敗します。初日から、人が立ち止まるデザイン、信頼できる決済、戻る理由、TikTokやInstagramからの道、配送、検索で見つかるページが要ります。これらはセットです。一つ欠けると、きれいな店は静かです。",
      "网上商店如果只是一个目录就会失败。从第一天起，它需要让人停下的设计、让人放心的支付、回来的理由、从 TikTok 或 Instagram 进来的路径、发货方式，以及搜索引擎能找到的页面。这些是一起工作的。少一块，好看的店也会安静。",
    ),
    parts: [
      {
        id: "design",
        art: "design",
        title: t("Attention-grabbing design", "Design que prende a atenção", "Diseño que capta la atención", "注意を引くデザイン", "抓住注意力的设计"),
        necessity: t(
          "The first screen has to stop the scroll. If the product, the price story, and the reason to buy are weak, traffic from any channel bounces before checkout exists as a thought.",
          "A primeira tela tem que parar o scroll. Se o produto, a história do preço e o motivo de comprar são fracos, o tráfego de qualquer canal sai antes de o checkout existir como ideia.",
          "La primera pantalla tiene que parar el scroll. Si el producto, la historia del precio y el motivo de compra son débiles, el tráfico de cualquier canal se va antes de que el checkout exista como idea.",
          "最初の画面はスクロールを止める必要があります。商品、価格の意味、買う理由が弱いと、どの経路の流入も、決済を考える前に去ります。",
          "第一屏必须让人停下滑动。如果商品、价格故事和购买理由很弱，任何渠道来的人都会在想到结账之前离开。",
        ),
        importance: t(
          "I design the store so the collection, the offer, and the buy button are the point — fashion, retail, or marketplace. Decoration that does not sell is removed.",
          "Desenho a loja para a coleção, a oferta e o botão de compra serem o ponto — moda, varejo ou marketplace. Decoração que não vende sai.",
          "Diseño la tienda para que la colección, la oferta y el botón de compra sean el punto — moda, retail o marketplace. La decoración que no vende se quita.",
          "コレクション、オファー、購入ボタンが中心になるように店を設計します。ファッション、小売、マーケットプレイス。売れない装飾は外します。",
          "我把店铺设计成系列、优惠和购买按钮才是重点——时尚、零售或市场。不能卖货的装饰会拿掉。",
        ),
      },
      {
        id: "payments",
        art: "payments",
        title: t("Secure payment gateways", "Gateways de pagamento seguros", "Pasarelas de pago seguras", "安全な決済ゲートウェイ", "安全的支付网关"),
        necessity: t(
          "A buyer will not type a card into a page they do not trust, and a store cannot invent its own payments. Checkout has to use real gateways — cards, local methods such as Pix, wallets — with the security those providers already enforce.",
          "O comprador não digita o cartão numa página em que não confia, e a loja não inventa o próprio pagamento. O checkout usa gateways reais — cartão, métodos locais como Pix, carteiras — com a segurança que esses provedores já exigem.",
          "El comprador no escribe la tarjeta en una página en la que no confía, y la tienda no inventa su propio pago. El checkout usa pasarelas reales — tarjeta, métodos locales como Pix, billeteras — con la seguridad que esos proveedores ya exigen.",
          "買い手は信頼できないページにカードを入力しません。店が独自決済を作ることもできません。カード、Pixのような現地手段、ウォレットを、提供者の安全基準のまま使います。",
          "买家不会在不信任的页面里输入卡号，店铺也不能自己发明支付。结账必须走真正的网关——银行卡、Pix 这类本地方式、钱包——并沿用这些服务商已经要求的安全。",
        ),
        importance: t(
          "I integrate the gateways the market actually uses, keep card data off your server, and make the failure states clear: declined, pending, paid. A sale that cannot be confirmed is not a sale.",
          "Integro os gateways que o mercado realmente usa, deixo os dados do cartão fora do seu servidor e deixo os estados claros: recusado, pendente, pago. Venda que não se confirma não é venda.",
          "Integro las pasarelas que el mercado realmente usa, dejo los datos de la tarjeta fuera de tu servidor y dejo los estados claros: rechazado, pendiente, pagado. Una venta que no se confirma no es una venta.",
          "市場が実際に使うゲートウェイを接続し、カード情報はあなたのサーバーに置かず、拒否・保留・支払済を明確にします。確認できない売上は売上ではありません。",
          "我接入市场真正在用的网关，卡数据不落在你的服务器上，并把状态写清楚：拒绝、待支付、已支付。无法确认的销售不是销售。",
        ),
      },
      {
        id: "email",
        art: "email",
        title: t("Email marketing", "E-mail marketing", "Email marketing", "メールマーケティング", "邮件营销"),
        necessity: t(
          "Most people do not buy on the first visit. Without a list and a sequence — welcome, abandoned cart, back in stock — the store pays for attention and then forgets the person.",
          "A maioria não compra na primeira visita. Sem lista e sequência — boas-vindas, carrinho abandonado, voltou ao estoque — a loja paga pela atenção e esquece a pessoa.",
          "La mayoría no compra en la primera visita. Sin lista y secuencia — bienvenida, carrito abandonado, volvió al stock — la tienda paga por la atención y olvida a la persona.",
          "ほとんどの人は初回では買いません。リストと流れ（歓迎、カゴ落ち、再入荷）がなければ、店は注意を買って人を忘れます。",
          "大多数人第一次不会买。没有名单和序列——欢迎、弃购、补货——店铺花钱买来注意力，然后把人忘了。",
        ),
        importance: t(
          "Email is wired to real store events, not a newsletter bolted on later. The message knows what they viewed or left in the cart, so the follow-up is about that product.",
          "O e-mail liga a eventos reais da loja, não a uma newsletter colocada depois. A mensagem sabe o que a pessoa viu ou deixou no carrinho, então o follow-up é sobre aquele produto.",
          "El email se conecta a eventos reales de la tienda, no a un boletín pegado después. El mensaje sabe qué vio o dejó en el carrito, así el seguimiento es sobre ese producto.",
          "メールは後付けのニュースレターではなく、店の実イベントに繋がります。何を見たか、カートに何を残したかを知っているので、追客はその商品の話になります。",
          "邮件接的是店铺里的真实事件，不是事后贴上去的通讯。邮件知道他们看过什么、购物车里留下什么，跟进才是关于那件商品。",
        ),
      },
      {
        id: "coupons",
        art: "coupons",
        title: t("Coupons used on purpose", "Cupons com propósito", "Cupones con propósito", "意図のあるクーポン", "有目的的优惠券"),
        necessity: t(
          "A coupon is a tool: first order, a slow collection, a partner code, a recovery offer. A permanent public discount trains people to wait and hides whether the product can sell at full price.",
          "Cupom é ferramenta: primeiro pedido, coleção parada, código de parceiro, oferta de recuperação. Desconto público permanente ensina a esperar e esconde se o produto vende no preço cheio.",
          "El cupón es una herramienta: primer pedido, colección lenta, código de socio, oferta de recuperación. Un descuento público permanente enseña a esperar y esconde si el producto vende a precio lleno.",
          "クーポンは道具です。初回、動きの悪いコレクション、提携コード、復帰オファー。ずっと公開の割引は待つことを教え、定価で売れるかを隠します。",
          "优惠券是工具：首单、滞销系列、合作码、挽回优惠。长期公开折扣会教人等待，也看不出商品能不能按原价卖。",
        ),
        importance: t(
          "Rules live in the store: who can use the code, what it applies to, when it ends, and whether it stacks with another offer. Operators can see which codes produced orders instead of only margin loss.",
          "As regras ficam na loja: quem usa, no que vale, quando acaba e se acumula com outra oferta. A operação vê quais códigos geraram pedido, não só perda de margem.",
          "Las reglas viven en la tienda: quién puede usarlo, a qué aplica, cuándo termina y si se acumula. La operación ve qué códigos generaron pedidos, no solo pérdida de margen.",
          "ルールは店の中にあります。誰が使えるか、何に適用か、いつ終わるか、他のオファーと重なるか。どのコードが注文を生んだか、粗利を削っただけかを運用が見られます。",
          "规则写在店里：谁能用、用于什么、何时结束、能否与其他优惠叠加。运营能看到哪些码带来了订单，而不只是利润变薄。",
        ),
      },
      {
        id: "social",
        art: "social",
        title: t("TikTok and Instagram", "TikTok e Instagram", "TikTok e Instagram", "TikTokとInstagram", "TikTok 与 Instagram"),
        necessity: t(
          "For many products the sale starts in a video, not on the homepage. If that video cannot open the exact product, the attention dies in the app.",
          "Para muitos produtos a venda começa num vídeo, não na homepage. Se o vídeo não abre o produto certo, a atenção morre no aplicativo.",
          "Para muchos productos la venta empieza en un video, no en la homepage. Si el video no abre el producto correcto, la atención muere en la app.",
          "多くの商品で、売上はホームページではなく動画から始まります。その動画が正しい商品を開けなければ、注意はアプリの中で死にます。",
          "很多商品的销售从一条视频开始，而不是首页。如果视频打不开对应商品，注意力就死在 App 里。",
        ),
        importance: t(
          "Catalog, pixel, and product links are connected so a TikTok or Instagram post lands on the item in the video. The store can tell which posts produced visits and which produced orders.",
          "Catálogo, pixel e links de produto se conectam para um post do TikTok ou Instagram cair no item do vídeo. A loja vê quais posts geraram visita e quais geraram pedido.",
          "Catálogo, pixel y links de producto se conectan para que un post de TikTok o Instagram caiga en el artículo del video. La tienda ve qué posts generaron visitas y cuáles pedidos.",
          "カタログ、ピクセル、商品リンクを繋ぎ、TikTokやInstagramの投稿が動画の商品へ着地します。どの投稿が訪問を生み、どの投稿が注文を生んだか分かります。",
          "目录、像素和商品链接接在一起，TikTok 或 Instagram 的帖子会落到视频里的那件商品。店铺能分辨哪些帖子带来访问，哪些带来订单。",
        ),
      },
      {
        id: "logistics",
        art: "logistics",
        title: t("Logistics systems", "Sistemas de logística", "Sistemas de logística", "物流システム", "物流系统"),
        necessity: t(
          "A paid order that cannot say when it ships, or that loses the tracking number, creates support load and refunds. Shipping is part of checkout, not a spreadsheet after the fact.",
          "Pedido pago que não diz quando sai, ou que perde o rastreio, gera suporte e estorno. Envio faz parte do checkout, não de uma planilha depois.",
          "Un pedido pagado que no dice cuándo sale, o que pierde el rastreo, genera soporte y reembolsos. El envío es parte del checkout, no una hoja después.",
          "いつ発送するか言えず、追跡番号を失う支払済注文は、サポートと返金を生みます。配送は事後の表ではなく、決済の一部です。",
          "已付款的订单如果说不清何时发出，或丢了物流单号，就会变成客服和退款。发货是结账的一部分，不是事后一张表格。",
        ),
        importance: t(
          "Rates, zones, and carriers are integrated so the buyer sees a real option and the warehouse receives a real label. Status flows back to the order and, when it should, to the customer email.",
          "Tarifas, zonas e transportadoras entram para o comprador ver uma opção real e o estoque receber uma etiqueta real. O status volta ao pedido e, quando deve, ao e-mail do cliente.",
          "Tarifas, zonas y transportistas entran para que el comprador vea una opción real y el almacén reciba una etiqueta real. El estado vuelve al pedido y, cuando corresponde, al email del cliente.",
          "料金、地域、配送会社を繋ぎ、買い手は実際の選択肢を見て、倉庫は実際のラベルを受け取ります。状態は注文へ戻り、必要なときは顧客のメールへ戻ります。",
          "运费、区域和承运商接进来，买家看到的是真实选项，仓库拿到的是真实面单。状态回到订单，该通知时再进客户邮件。",
        ),
      },
      {
        id: "seo",
        art: "seo",
        title: t("SEO", "SEO", "SEO", "SEO", "SEO"),
        necessity: t(
          "Ads stop when the budget stops. Product and category pages have to be understandable to search, or the store only exists for people you already paid to send.",
          "Anúncio para quando o orçamento para. Páginas de produto e categoria precisam ser compreensíveis para a busca, ou a loja só existe para quem você já pagou para enviar.",
          "El anuncio para cuando el presupuesto para. Las páginas de producto y categoría tienen que ser comprensibles para la búsqueda, o la tienda solo existe para quien ya pagaste por enviar.",
          "広告は予算が終わると止まります。商品とカテゴリのページが検索に理解できなければ、店はお金を払って送った人にしか存在しません。",
          "广告预算一停，流量就停。商品页和分类页必须能被搜索理解，否则店铺只对你已经花钱请来的人存在。",
        ),
        importance: t(
          "Titles, descriptions, clean URLs, and structured product data are part of the build, not a plugin added after launch. The same pages are measured in analytics so you see which searches become orders.",
          "Títulos, descrições, URLs limpas e dados estruturados do produto fazem parte da construção, não de um plugin depois do lançamento. As mesmas páginas são medidas na análise para ver quais buscas viram pedido.",
          "Títulos, descripciones, URLs limpias y datos estructurados del producto son parte de la construcción, no un plugin después del lanzamiento. Las mismas páginas se miden en analítica para ver qué búsquedas se vuelven pedidos.",
          "タイトル、説明、きれいなURL、商品の構造化データは、公開後のプラグインではなく構築の一部です。同じページを分析で測り、どの検索が注文になるかを見ます。",
          "标题、描述、干净的网址和商品结构化数据是构建的一部分，不是上线后才装的插件。同一批页面会在分析里衡量，看出哪些搜索变成了订单。",
        ),
      },
    ],
  },
  {
    slug: "crm",
    art: "crm",
    related: ["acquisition", "automation", "online-stores"],
    name: t("CRM", "CRM", "CRM", "CRM", "CRM"),
    tagline: t(
      "One place where the team can see the customer and what has to happen next.",
      "Um lugar onde a equipe vê o cliente e o que precisa acontecer depois.",
      "Un lugar donde el equipo ve al cliente y qué tiene que pasar después.",
      "チームが顧客と、次に何をすべきかを見る一つの場所。",
      "团队能看见客户、以及下一步该做什么的同一个地方。",
    ),
    overview: t(
      "A CRM is not a contact spreadsheet. It is how sales and support stop losing people between a form, a store order, an email, and a follow-up. If the next action is not visible, the lead goes cold.",
      "CRM não é planilha de contatos. É como vendas e suporte param de perder gente entre um formulário, um pedido, um e-mail e um follow-up. Se a próxima ação não está visível, o lead esfria.",
      "Un CRM no es una hoja de contactos. Es cómo ventas y soporte dejan de perder gente entre un formulario, un pedido, un email y un seguimiento. Si la siguiente acción no se ve, el lead se enfría.",
      "CRMは連絡先の表ではありません。フォーム、注文、メール、追客のあいだで人を失わないための仕組みです。次の行動が見えなければ、リードは冷えます。",
      "CRM 不是一张联系人表格。它让销售和支持不会在表单、订单、邮件和跟进之间把人弄丢。如果下一步看不见，线索就会冷掉。",
    ),
    parts: [
      {
        id: "record",
        art: "crm",
        title: t("One customer record", "Um registro do cliente", "Un registro del cliente", "一人の顧客記録", "一份客户记录"),
        necessity: t(
          "When the shop, the inbox, and the salesperson each have a different version of the customer, nobody knows what was promised.",
          "Quando a loja, a caixa de entrada e o vendedor têm versões diferentes do cliente, ninguém sabe o que foi prometido.",
          "Cuando la tienda, la bandeja y el vendedor tienen versiones distintas del cliente, nadie sabe qué se prometió.",
          "店、受信箱、営業がそれぞれ違う顧客像を持っていると、何を約束したか誰にも分かりません。",
          "店铺、收件箱和销售各有一版客户时，没人知道答应过什么。",
        ),
        importance: t(
          "Orders, notes, and messages attach to the same person. A new teammate can open the record and continue the conversation instead of asking the customer to start again.",
          "Pedidos, notas e mensagens ficam na mesma pessoa. Um colega novo abre o registro e continua a conversa, sem pedir ao cliente para começar de novo.",
          "Pedidos, notas y mensajes quedan en la misma persona. Un compañero nuevo abre el registro y sigue la conversación, sin pedir al cliente que empiece de nuevo.",
          "注文、メモ、メッセージが同じ人に付きます。新しいメンバーが記録を開いて会話を続けられ、顧客に最初から話させません。",
          "订单、备注和消息挂在同一个人身上。新同事打开记录就能接着谈，不必让客户从头再说一遍。",
        ),
      },
      {
        id: "pipeline",
        art: "pipeline",
        title: t("Pipeline and follow-up", "Funil e follow-up", "Embudo y seguimiento", "パイプラインと追客", "管道与跟进"),
        necessity: t(
          "A lead without a stage and a next date is a name in a list. Work only moves when someone can see what is waiting.",
          "Lead sem etapa e sem data seguinte é um nome numa lista. O trabalho só anda quando alguém vê o que está esperando.",
          "Un lead sin etapa y sin fecha siguiente es un nombre en una lista. El trabajo solo avanza cuando alguien ve qué está esperando.",
          "段階も次の日付もないリードは、リストの名前です。待っているものが見えて、初めて仕事は進みます。",
          "没有阶段、没有下次日期的线索只是名单上的一个名字。只有看得见谁在等，工作才会往前走。",
        ),
        importance: t(
          "Stages match how you actually sell — new, talking, proposal, won, lost — and overdue follow-ups stay visible so deals do not depend on memory.",
          "As etapas seguem como você realmente vende — novo, conversa, proposta, ganho, perdido — e follow-ups atrasados ficam visíveis. O negócio não depende de memória.",
          "Las etapas siguen cómo realmente vendes — nuevo, conversación, propuesta, ganado, perdido — y los seguimientos vencidos quedan visibles. El negocio no depende de la memoria.",
          "段階は実際の売り方に合わせます。新規、会話、提案、成約、失注。遅れた追客は見えるので、記憶に頼りません。",
          "阶段按你真实的销售方式来——新线索、沟通中、提案、成交、丢失——过期跟进一直可见，生意不靠记忆。",
        ),
      },
      {
        id: "operators",
        art: "pipeline",
        title: t("Screens operators can run", "Telas que a operação usa", "Pantallas que la operación usa", "運用が使える画面", "运营人员能用的界面"),
        necessity: t(
          "A CRM the team avoids is an empty database. The daily screen has to be faster than a chat thread and a spreadsheet.",
          "CRM que a equipe evita é banco vazio. A tela do dia tem que ser mais rápida que um fio de chat e uma planilha.",
          "Un CRM que el equipo evita es una base vacía. La pantalla del día tiene que ser más rápida que un hilo de chat y una hoja.",
          "チームが避けるCRMは空のデータベースです。毎日の画面は、チャットと表より速くなければなりません。",
          "团队躲开的 CRM 就是空数据库。日常界面必须比聊天记录加表格更快。",
        ),
        importance: t(
          "I build the views the role needs: a seller sees their pipeline, support sees open issues, a manager sees what stalled. Permissions keep one client from seeing another.",
          "Construo as visões de cada papel: o vendedor vê o funil, o suporte vê o que está aberto, o gestor vê o que parou. A permissão impede um cliente de ver outro.",
          "Construyo las vistas de cada rol: el vendedor ve su embudo, soporte ve lo abierto, el gerente ve lo que se detuvo. El permiso impide que un cliente vea a otro.",
          "役割ごとの画面を作ります。営業は自分のパイプライン、サポートは未完了、管理者は止まったもの。権限で、ある顧客が別の顧客を見ないようにします。",
          "我按角色做界面：销售看自己的管道，客服看未关闭的问题，管理者看卡住的单。权限保证一个客户看不到另一个客户。",
        ),
      },
    ],
  },
  {
    slug: "acquisition",
    art: "acquisition",
    related: ["online-stores", "seo", "crm"],
    name: t(
      "Customer acquisition",
      "Aquisição de clientes",
      "Adquisición de clientes",
      "顧客獲得",
      "客户获取",
    ),
    tagline: t(
      "A path from attention to a lead or an order — and a way to see which path paid.",
      "Um caminho da atenção até o lead ou o pedido — e um jeito de ver qual caminho pagou.",
      "Un camino de la atención al lead o al pedido — y una forma de ver qué camino pagó.",
      "注意からリードや注文までの道。どの道が元を取ったかが見える。",
      "从注意力到线索或订单的路径，并且能看见哪条路径赚回了钱。",
    ),
    overview: t(
      "Acquisition is the system that turns TikTok, Instagram, search, or a partner into a customer you can follow. A post without a landing page, a form without a CRM, and spend without measurement are three separate wastes.",
      "Aquisição é o sistema que transforma TikTok, Instagram, busca ou um parceiro em cliente que você consegue acompanhar. Post sem página, formulário sem CRM e gasto sem medida são três desperdícios separados.",
      "La adquisición es el sistema que convierte TikTok, Instagram, búsqueda o un socio en un cliente al que puedes seguir. Un post sin página, un formulario sin CRM y gasto sin medición son tres desperdicios distintos.",
      "獲得とは、TikTok、Instagram、検索、提携を、追える顧客に変える仕組みです。着地ページのない投稿、CRMのないフォーム、測定のない支出は、三つの別々の無駄です。",
      "获客是把 TikTok、Instagram、搜索或合作伙伴变成你可以继续跟进的客户的系统。没有落地页的帖子、没有 CRM 的表单、没有衡量的花费，是三笔分开的浪费。",
    ),
    parts: [
      {
        id: "offer",
        art: "design",
        title: t("An offer people can act on", "Uma oferta em que dá para agir", "Una oferta sobre la que se puede actuar", "行動できるオファー", "让人能行动的报价"),
        necessity: t(
          "Traffic needs a page with one job: the product, the lead, or the booking. A homepage that tries to say everything converts no one.",
          "Tráfego precisa de uma página com um trabalho: o produto, o lead ou a reserva. Homepage que tenta dizer tudo não converte ninguém.",
          "El tráfico necesita una página con un trabajo: el producto, el lead o la reserva. Una homepage que intenta decir todo no convierte a nadie.",
          "流入には仕事が一つのページが要ります。商品、リード、予約。全部を言おうとするホームページは誰も転換しません。",
          "流量需要一个只做一件事的页面：商品、线索或预约。想把所有话都说完的首页转化不了任何人。",
        ),
        importance: t(
          "Landing pages match the ad or the video that sent the person. The promise on TikTok is the promise on the page, and the button does the one thing the campaign was bought for.",
          "A landing combina com o anúncio ou o vídeo que trouxe a pessoa. A promessa no TikTok é a promessa na página, e o botão faz a única coisa para a qual a campanha foi comprada.",
          "La landing coincide con el anuncio o el video que trajo a la persona. La promesa en TikTok es la promesa en la página, y el botón hace lo único para lo que se compró la campaña.",
          "ランディングは、人を連れてきた広告や動画と一致します。TikTokの約束はページの約束で、ボタンはキャンペーンが買ったその一つの行動をします。",
          "落地页和把人带来的广告或视频一致。TikTok 上的承诺就是页面上的承诺，按钮只做这次投放要买的那一个动作。",
        ),
      },
      {
        id: "channels",
        art: "social",
        title: t("Social and search channels", "Canais sociais e de busca", "Canales sociales y de búsqueda", "ソーシャルと検索", "社交与搜索渠道"),
        necessity: t(
          "Customers do not start on your domain. They start on Instagram, TikTok, Google, or a message. The store or the form has to be ready to receive that click with the right product attached.",
          "O cliente não começa no seu domínio. Começa no Instagram, TikTok, Google ou numa mensagem. A loja ou o formulário tem que receber esse clique com o produto certo.",
          "El cliente no empieza en tu dominio. Empieza en Instagram, TikTok, Google o un mensaje. La tienda o el formulario tiene que recibir ese clic con el producto correcto.",
          "顧客はあなたのドメインから始まりません。Instagram、TikTok、Google、メッセージからです。店やフォームは、正しい商品を付けてそのクリックを受ける必要があります。",
          "客户不是从你的域名开始的。他们从 Instagram、TikTok、Google 或一条消息开始。店铺或表单必须带着正确的商品接住那一次点击。",
        ),
        importance: t(
          "Links, catalogs, and pixels are set so each channel is identifiable. You can raise spend on what returns customers and stop what only returns views.",
          "Links, catálogos e pixels ficam marcados para cada canal ser identificável. Dá para aumentar o que devolve cliente e parar o que só devolve visualização.",
          "Links, catálogos y pixels quedan marcados para que cada canal sea identificable. Se puede subir lo que devuelve clientes y parar lo que solo devuelve vistas.",
          "リンク、カタログ、ピクセルで各チャネルを識別できます。顧客が戻るものに予算を足し、閲覧しか戻らないものを止められます。",
          "链接、目录和像素让每个渠道可识别。可以把预算加到能带回客户的渠道，停掉只带回浏览的渠道。",
        ),
      },
      {
        id: "capture",
        art: "crm",
        title: t("Capture and handoff", "Captura e passagem", "Captura y entrega", "獲得と引き渡し", "捕获与交接"),
        necessity: t(
          "A lead that lands in a personal inbox disappears when that person is busy. Acquisition only works if the lead arrives in the CRM with its source attached.",
          "Lead que cai num inbox pessoal some quando a pessoa está ocupada. Aquisição só funciona se o lead chega ao CRM com a origem.",
          "Un lead que cae en una bandeja personal desaparece cuando esa persona está ocupada. La adquisición solo funciona si el lead llega al CRM con su origen.",
          "個人の受信箱に落ちたリードは、その人が忙しいと消えます。獲得が機能するのは、リードが流入元付きでCRMに着くときだけです。",
          "落在私人邮箱里的线索，那个人一忙就消失。获客只有在线索带着来源进入 CRM 时才成立。",
        ),
        importance: t(
          "Forms, chats, and store checkouts write the same kind of record: who they are, what they wanted, and which campaign sent them. The next owner is a stage in the pipeline, not a forwarded email.",
          "Formulários, chats e checkouts escrevem o mesmo tipo de registro: quem é, o que queria e qual campanha enviou. O próximo dono é uma etapa do funil, não um e-mail encaminhado.",
          "Formularios, chats y checkouts escriben el mismo tipo de registro: quién es, qué quería y qué campaña lo envió. El siguiente dueño es una etapa del embudo, no un email reenviado.",
          "フォーム、チャット、決済は同じ種類の記録を書きます。誰か、何を欲しかったか、どのキャンペーンが送ったか。次の担当は転送メールではなく、パイプラインの段階です。",
          "表单、聊天和结账写入同一种记录：是谁、想要什么、哪个活动送来的。下一个负责人是管道里的一个阶段，不是一封转发邮件。",
        ),
      },
    ],
  },
  {
    slug: "automation",
    art: "automation",
    related: ["online-stores", "crm", "acquisition"],
    name: t("Automation", "Automação", "Automatización", "自動化", "自动化"),
    tagline: t(
      "The repetitive work runs itself, so the team handles exceptions.",
      "O trabalho repetido roda sozinho, e a equipe cuida da exceção.",
      "El trabajo repetido corre solo, y el equipo atiende la excepción.",
      "繰り返しは自分で回り、チームは例外を扱う。",
      "重复的工作自己运转，团队只处理例外。",
    ),
    overview: t(
      "Automation is how a small team operates a store, a CRM, and a support inbox without copying the same status into three tools. Make.com and Zapier carry the routine between those systems, and WhatsApp is where many of the messages land. If a paid order, a new lead, or a shipping scan still needs a person to retype it, the system is not finished.",
      "Automação é como uma equipe pequena opera loja, CRM e inbox de suporte sem copiar o mesmo status em três ferramentas. Make.com e Zapier levam a rotina entre esses sistemas, e o WhatsApp é onde muitas mensagens chegam. Se pedido pago, lead novo ou scan de envio ainda precisa de alguém redigitando, o sistema não está pronto.",
      "La automatización es cómo un equipo pequeño opera tienda, CRM y bandeja de soporte sin copiar el mismo estado en tres herramientas. Make.com y Zapier llevan la rutina entre esos sistemas, y WhatsApp es donde llegan muchos mensajes. Si un pedido pagado, un lead nuevo o un escaneo de envío aún necesita que alguien lo reescriba, el sistema no está listo.",
      "自動化とは、少人数が店、CRM、サポート受信箱を、同じ状態を三つの道具へ写さずに回す方法です。Make.com と Zapier がそのあいだの日常を運び、多くのメッセージは WhatsApp に着きます。支払済注文、新しいリード、配送スキャンを人が打ち直すなら、システムは未完成です。",
      "自动化是让小团队运转店铺、CRM 和支持收件箱，而不把同一状态抄进三个工具。Make.com 和 Zapier 承担这些系统之间的日常流转，很多消息落在 WhatsApp 上。如果已付款订单、新线索或物流扫描还要人再敲一遍，系统就还没完成。",
    ),
    parts: [
      {
        id: "orders",
        art: "logistics",
        title: t("Orders and status", "Pedidos e status", "Pedidos y estado", "注文と状態", "订单与状态"),
        necessity: t(
          "Paid, packed, shipped, and delivered are facts. If they live only in a carrier portal, the store and the customer stay wrong.",
          "Pago, embalado, enviado e entregue são fatos. Se só existem no portal da transportadora, a loja e o cliente ficam errados.",
          "Pagado, empacado, enviado y entregado son hechos. Si solo existen en el portal del transportista, la tienda y el cliente quedan mal.",
          "支払済、梱包、発送、配達は事実です。配送会社の画面にしかなければ、店と顧客の表示は間違ったままです。",
          "已支付、已打包、已发出、已送达是事实。如果它们只存在于承运商后台，店铺和客户看到的就是错的。",
        ),
        importance: t(
          "A payment or a tracking scan updates the order, the warehouse view, and the message that should go out — email or WhatsApp. People step in when a rule fails, not for every parcel.",
          "Um pagamento ou um scan de rastreio atualiza o pedido, a visão do estoque e a mensagem que deve sair — e-mail ou WhatsApp. Pessoas entram quando a regra falha, não em cada pacote.",
          "Un pago o un escaneo de rastreo actualiza el pedido, la vista del almacén y el mensaje que debe salir — email o WhatsApp. Las personas entran cuando la regla falla, no en cada paquete.",
          "支払いまたは追跡スキャンが、注文、倉庫の表示、出すべきメッセージ（メールまたは WhatsApp）を更新します。人はルールが失敗したときだけ入り、すべての荷物には入りません。",
          "一次支付或一次物流扫描会更新订单、仓库视图和该发出的消息——邮件或 WhatsApp。人只在规则失败时介入，而不是每一件包裹。",
        ),
      },
      {
        id: "connectors",
        art: "automation",
        title: t(
          "Make.com, Zapier, and WhatsApp",
          "Make.com, Zapier e WhatsApp",
          "Make.com, Zapier y WhatsApp",
          "Make.com、Zapier、WhatsApp",
          "Make.com、Zapier 与 WhatsApp",
        ),
        necessity: t(
          "Not every handoff deserves a custom service. When the rule is that an event in the store or the CRM should update another tool and message the customer, a scenario in Make.com or Zapier changes faster than a deploy.",
          "Nem toda passagem merece um serviço sob medida. Quando a regra é que um evento na loja ou no CRM atualize outra ferramenta e avise o cliente, um cenário no Make.com ou no Zapier muda mais rápido que um deploy.",
          "No todo traspaso merece un servicio a medida. Cuando la regla es que un evento en la tienda o en el CRM actualice otra herramienta y avise al cliente, un escenario en Make.com o Zapier cambia más rápido que un despliegue.",
          "すべての引き渡しに専用サービスは要りません。店や CRM の出来事が別の道具を更新し、顧客へ知らせるルールなら、Make.com や Zapier のシナリオはデプロイより速く直せます。",
          "不是每一次交接都值得写一个专门的服务。当规则是店铺或 CRM 里的事件要更新另一个工具并通知客户时，Make.com 或 Zapier 里的场景比重新部署改得更快。",
        ),
        importance: t(
          "I connect those scenarios to the systems I build, including WhatsApp for the messages customers already answer. Operators can edit the flow. The customer record still lives in one place.",
          "Eu ligo esses cenários aos sistemas que construo, inclusive o WhatsApp nas mensagens que o cliente já responde. Quem opera pode editar o fluxo. O registro do cliente continua num só lugar.",
          "Conecto esos escenarios a los sistemas que construyo, incluido WhatsApp en los mensajes que el cliente ya contesta. Quien opera puede editar el flujo. El registro del cliente sigue en un solo lugar.",
          "そのシナリオを、私が作るシステムへ繋ぎます。顧客がすでに返信する WhatsApp も含みます。運用する人はフローを編集でき、顧客の記録は一つの場所に残ります。",
          "我把这些场景接到我搭建的系统上，包括客户已经会回复的 WhatsApp。运营人员可以改流程。客户记录仍然只在一个地方。",
        ),
      },
      {
        id: "messages",
        art: "email",
        title: t("Messages that fire on events", "Mensagens que disparam em eventos", "Mensajes que se disparan con eventos", "イベントで送るメッセージ", "由事件触发的消息"),
        necessity: t(
          "Welcome, cart, shipping, and review requests only work if they leave when the event happens. A calendar reminder is not the same thing.",
          "Boas-vindas, carrinho, envio e pedido de avaliação só funcionam se saem quando o evento acontece. Lembrete de calendário não é a mesma coisa.",
          "Bienvenida, carrito, envío y pedido de reseña solo funcionan si salen cuando ocurre el evento. Un recordatorio de calendario no es lo mismo.",
          "歓迎、カート、発送、レビュー依頼は、イベントのときに送られて初めて機能します。カレンダーのリマインダーとは違います。",
          "欢迎、购物车、发货和评价请求，只有在事件发生时发出才有用。日历提醒不是一回事。",
        ),
        importance: t(
          "Sequences run on store and CRM events, by email or WhatsApp, and stop when the person buys or replies. The team is not sending the same five messages by hand.",
          "As sequências rodam em eventos da loja e do CRM, por e-mail ou WhatsApp, e param quando a pessoa compra ou responde. A equipe não manda as mesmas cinco mensagens na mão.",
          "Las secuencias corren en eventos de la tienda y del CRM, por email o WhatsApp, y paran cuando la persona compra o responde. El equipo no envía los mismos cinco mensajes a mano.",
          "シーケンスは店と CRM のイベントで、メールまたは WhatsApp から走り、購入または返信で止まります。チームが同じ五通を手で送りません。",
          "序列在店铺和 CRM 事件上运行，通过邮件或 WhatsApp 发出，对方购买或回复就停止。团队不用手工发同样的五条消息。",
        ),
      },
      {
        id: "support",
        art: "automation",
        title: t("Support that does not need a person every time", "Suporte que nem sempre precisa de uma pessoa", "Soporte que no siempre necesita una persona", "毎回人を必要としないサポート", "不是每次都需要人的支持"),
        necessity: t(
          "Shipping, sizing, and order status are repeated questions. If every one waits for a human, response time becomes the product.",
          "Frete, tamanho e status do pedido são perguntas repetidas. Se cada uma espera um humano, o tempo de resposta vira o produto.",
          "Envío, talla y estado del pedido son preguntas repetidas. Si cada una espera a un humano, el tiempo de respuesta se vuelve el producto.",
          "配送、サイズ、注文状況は繰り返される質問です。すべてが人を待つなら、応答時間が商品になります。",
          "配送、尺码和订单状态是重复问题。如果每一个都等人，响应时间就变成了产品本身。",
        ),
        importance: t(
          "Answers come from the catalog, the order, and the policy — not from a generic script. A person takes the conversation when the question is new or the customer is stuck.",
          "As respostas vêm do catálogo, do pedido e da política — não de um script genérico. Uma pessoa assume quando a pergunta é nova ou o cliente travou.",
          "Las respuestas vienen del catálogo, del pedido y de la política — no de un guion genérico. Una persona toma la conversación cuando la pregunta es nueva o el cliente se atascó.",
          "答えはカタログ、注文、方針から来ます。一般的な台本からではありません。質問が新しいとき、または顧客が詰まったときに人が会話を受けます。",
          "回答来自目录、订单和政策，而不是一段通用脚本。问题是新的，或客户卡住时，才由人接手。",
        ),
      },
    ],
  },
  {
    slug: "mobile",
    art: "mobile",
    related: ["online-stores", "crm", "automation"],
    name: t(
      "Mobile app development",
      "Desenvolvimento de apps",
      "Desarrollo de apps móviles",
      "モバイルアプリ開発",
      "移动应用开发",
    ),
    tagline: t(
      "The product in the customer's hand, tied to the same orders and accounts as the web.",
      "O produto na mão do cliente, ligado aos mesmos pedidos e contas da web.",
      "El producto en la mano del cliente, atado a los mismos pedidos y cuentas de la web.",
      "顧客の手の中の製品。Webと同じ注文とアカウントに繋がる。",
      "产品在客户手里，并且和网站上的订单与账户是同一套。",
    ),
    overview: t(
      "A mobile app is justified when the customer comes back often enough that a home-screen icon and a push matter — retail, orders, loyalty, or a field team. I build those apps in React Native and Flutter. Accounts, catalog, and payments have to be the same truth as the website.",
      "Um app se justifica quando o cliente volta o bastante para o ícone e o push importarem — varejo, pedidos, fidelidade ou equipe de campo. Eu construo esses apps em React Native e Flutter. Conta, catálogo e pagamento têm que ser a mesma verdade do site.",
      "Una app se justifica cuando el cliente vuelve lo bastante para que el icono y el push importen — retail, pedidos, fidelidad o un equipo de campo. Construyo esas apps en React Native y Flutter. Cuenta, catálogo y pago tienen que ser la misma verdad del sitio.",
      "アプリが意味を持つのは、ホーム画面のアイコンと通知が効くほど顧客が戻るときです。小売、注文、ロイヤルティ、現場チーム。React Native と Flutter で作ります。アカウント、カタログ、決済はサイトと同じ事実です。",
      "当客户会经常回来，主屏幕图标和推送才有意义——零售、订单、会员或一线团队。我用 React Native 和 Flutter 做这些应用。账户、目录和支付必须与网站是同一套事实。",
    ),
    parts: [
      {
        id: "product",
        art: "mobile",
        title: t("A product, not a brochure", "Um produto, não um folheto", "Un producto, no un folleto", "パンフレットではない製品", "是产品，不是宣传册"),
        necessity: t(
          "An app that only restates the homepage will be deleted. It has to do a job the phone is better at: repeat orders, scanning, notifications, or work away from a desk.",
          "App que só repete a homepage será apagado. Ele precisa fazer um trabalho em que o celular é melhor: pedido repetido, leitura, notificação ou trabalho fora da mesa.",
          "Una app que solo repite la homepage será borrada. Tiene que hacer un trabajo en el que el móvil es mejor: pedido repetido, escaneo, notificación o trabajo fuera del escritorio.",
          "ホームページを繰り返すだけのアプリは消されます。スマホが得意な仕事が要ります。再注文、読み取り、通知、デスクの外の作業。",
          "只会重复首页的应用会被删掉。它必须做手机更擅长的事：复购、扫码、通知，或离开办公桌的工作。",
        ),
        importance: t(
          "I scope the app around that job — a shopper reordering, a customer tracking a parcel, a seller updating a lead — and leave the long reading on the website.",
          "Defino o app em volta desse trabalho — recompra, rastreio, vendedor atualizando um lead — e deixo a leitura longa no site.",
          "Defino la app alrededor de ese trabajo — recompra, rastreo, un vendedor actualizando un lead — y dejo la lectura larga en el sitio.",
          "その仕事の周りにアプリを切ります。再購入、荷物追跡、リードを更新する営業。長い文章はサイトに残します。",
          "我按这个任务来定应用的范围——复购、查物流、销售更新一条线索——长文阅读留在网站上。",
        ),
      },
      {
        id: "shared",
        art: "stores",
        title: t("The same account and orders", "A mesma conta e os mesmos pedidos", "La misma cuenta y los mismos pedidos", "同じアカウントと注文", "同一套账户和订单"),
        necessity: t(
          "If the app and the website disagree about price, stock, or order status, the customer stops trusting both.",
          "Se o app e o site discordam de preço, estoque ou status, o cliente deixa de confiar nos dois.",
          "Si la app y el sitio no coinciden en precio, stock o estado, el cliente deja de confiar en ambos.",
          "アプリとサイトで価格、在庫、状態が違えば、顧客は両方を信じなくなります。",
          "如果应用和网站在价格、库存或订单状态上不一致，客户会对两边都失去信任。",
        ),
        importance: t(
          "Login, catalog, cart, and payments talk to the same services as the store. A purchase on the phone is a purchase in the warehouse, not a separate list.",
          "Login, catálogo, carrinho e pagamento falam com os mesmos serviços da loja. Compra no celular é compra no estoque, não uma lista separada.",
          "Login, catálogo, carrito y pago hablan con los mismos servicios de la tienda. Una compra en el móvil es una compra en el almacén, no una lista aparte.",
          "ログイン、カタログ、カート、決済は店と同じサービスと話します。スマホの購入は倉庫の購入であり、別リストではありません。",
          "登录、目录、购物车和支付走的是店铺同一套服务。手机上的购买就是仓库里的购买，不是另一份清单。",
        ),
      },
      {
        id: "return",
        art: "email",
        title: t("A reason to return", "Um motivo para voltar", "Una razón para volver", "戻る理由", "回来的理由"),
        necessity: t(
          "The icon only matters if something happens after install: an order update, a restock, a message that is actually about them.",
          "O ícone só importa se algo acontece depois da instalação: atualização de pedido, reposição, uma mensagem que é de fato sobre a pessoa.",
          "El icono solo importa si algo pasa después de instalar: una actualización de pedido, una reposición, un mensaje que de verdad es sobre la persona.",
          "アイコンが意味を持つのは、インストール後に何かが起きるときです。注文の更新、再入荷、その人についてのメッセージ。",
          "图标只有在安装之后还有事情发生时才有意义：订单更新、补货、一条确实关于他们的消息。",
        ),
        importance: t(
          "Push is tied to real events and can be turned off per type. It is not a broadcast the customer mutes on day two.",
          "O push liga a eventos reais e pode ser desligado por tipo. Não é um disparo que o cliente silencia no segundo dia.",
          "El push se ata a eventos reales y se puede apagar por tipo. No es un envío que el cliente silencia al segundo día.",
          "通知は実イベントに結び、種類ごとに止められます。二日目に消される一斉送信ではありません。",
          "推送绑在真实事件上，并且可以按类型关闭。它不是客户第二天就会关掉的群发。",
        ),
      },
    ],
  },
  {
    slug: "blockchain",
    art: "blockchain",
    related: ["online-stores", "crm"],
    name: t("Blockchain", "Blockchain", "Blockchain", "ブロックチェーン", "区块链"),
    tagline: t(
      "A shared record when the point is that no single party can quietly change it.",
      "Um registro compartilhado quando o ponto é que ninguém muda isso em silêncio.",
      "Un registro compartido cuando el punto es que nadie lo cambia en silencio.",
      "誰か一人が静かに書き換えられないことが要点の、共有された記録。",
      "当重点是没有单一方能悄悄改掉它时，用一份共享记录。",
    ),
    overview: t(
      "Blockchain belongs in a product when several parties need the same history and none of them should be able to edit it alone — settlement, proof of ownership, loyalty that can be verified, or access that has to be checked. That work is on Solana and Ethereum, in Solidity. It does not replace the store, the CRM, or normal payments.",
      "Blockchain entra no produto quando várias partes precisam do mesmo histórico e nenhuma deve editá-lo sozinha — liquidação, prova de posse, fidelidade verificável ou acesso que precisa ser checado. Esse trabalho é em Solana e Ethereum, em Solidity. Não substitui a loja, o CRM ou o pagamento normal.",
      "Blockchain entra en el producto cuando varias partes necesitan el mismo historial y ninguna debe editarlo sola — liquidación, prueba de posesión, fidelidad verificable o acceso que hay que comprobar. Ese trabajo es en Solana y Ethereum, en Solidity. No reemplaza la tienda, el CRM ni el pago normal.",
      "ブロックチェーンが製品に入るのは、複数の当事者が同じ履歴を必要とし、誰か一人では書き換えられないときです。決済、所有の証明、検証できるロイヤルティ、確認が必要なアクセス。Solana と Ethereum 上で、Solidity を使います。店、CRM、通常の支払いの代わりではありません。",
      "区块链进入产品，是在多方需要同一段历史、而且任何一方都不能单独修改它的时候——结算、所有权证明、可验证的会员，或必须被核验的访问。这些工作在 Solana 和 Ethereum 上，用 Solidity 完成。它不取代店铺、CRM 或普通支付。",
    ),
    parts: [
      {
        id: "record",
        art: "blockchain",
        title: t("A record that stays checkable", "Um registro que continua verificável", "Un registro que sigue siendo verificable", "検証できる記録", "始终可核验的记录"),
        necessity: t(
          "If one company can change the history in a private database, a shared ledger adds cost and no trust. Use it when the other party must be able to verify the entry without asking you.",
          "Se uma empresa pode mudar o histórico num banco privado, um ledger compartilhado só adiciona custo. Use quando a outra parte precisa verificar o lançamento sem pedir a você.",
          "Si una empresa puede cambiar el historial en una base privada, un libro compartido solo añade costo. Úsalo cuando la otra parte debe verificar el asiento sin pedírtelo.",
          "一社が非公開のデータベースで履歴を変えられるなら、共有台帳はコストを足すだけです。相手があなたに聞かずに記入を検証できる必要があるときに使います。",
          "如果一家公司能在私有数据库里改历史，共享账本只是增加成本。只有当对方必须不经你同意就能核验这条记录时才用它。",
        ),
        importance: t(
          "The chain stores the proof. The product still stores what operators need to work — names, orders, support notes — in the systems they already open every day.",
          "A cadeia guarda a prova. O produto continua guardando o que a operação precisa — nomes, pedidos, notas — nos sistemas que ela já abre todo dia.",
          "La cadena guarda la prueba. El producto sigue guardando lo que la operación necesita — nombres, pedidos, notas — en los sistemas que ya abre cada día.",
          "チェーンは証明を保管します。製品は、運用が毎日開くシステムに、名前、注文、メモを置き続けます。",
          "链上保存的是证明。产品仍然把运营每天要看的东西——姓名、订单、备注——放在他们已经打开的系统里。",
        ),
      },
      {
        id: "experience",
        art: "payments",
        title: t("A simple step for the user", "Um passo simples para o usuário", "Un paso simple para el usuario", "ユーザーには簡単な一歩", "对用户来说是简单的一步"),
        necessity: t(
          "Wallets, keys, and gas are not a storefront. If the customer has to understand the chain to finish the action, the feature will not be used.",
          "Carteira, chave e gas não são uma vitrine. Se o cliente precisa entender a cadeia para terminar a ação, a função não será usada.",
          "Billetera, clave y gas no son un escaparate. Si el cliente necesita entender la cadena para terminar la acción, la función no se usará.",
          "ウォレット、鍵、ガスは店頭ではありません。行動を終えるためにチェーンを理解する必要があるなら、その機能は使われません。",
          "钱包、密钥和 gas 不是店面。如果客户必须先懂链才能完成动作，这个功能就不会被使用。",
        ),
        importance: t(
          "The screen talks about the business action — claim, pay, prove, unlock — and the chain work stays behind a clear confirmation. Failed transactions are explained in plain language.",
          "A tela fala da ação de negócio — resgatar, pagar, provar, liberar — e o trabalho da cadeia fica atrás de uma confirmação clara. Transação que falha é explicada em linguagem simples.",
          "La pantalla habla de la acción de negocio — reclamar, pagar, probar, liberar — y el trabajo de la cadena queda detrás de una confirmación clara. Una transacción fallida se explica en lenguaje simple.",
          "画面は事業の行動を話します。受け取る、支払う、証明する、開く。チェーンの作業は明確な確認の後ろに置きます。失敗した取引は平易な言葉で説明します。",
          "界面说的是业务动作——领取、支付、证明、解锁——链上的工作放在一次清楚的确认后面。失败的交易用白话解释。",
        ),
      },
    ],
  },
  {
    slug: "seo",
    art: "seo",
    related: ["websites", "online-stores", "acquisition"],
    name: t(
      "SEO and analytics",
      "SEO e análise",
      "SEO y analítica",
      "SEOと分析",
      "SEO 与分析",
    ),
    tagline: t(
      "Pages search can understand, and Google Analytics so you know what produced the sale.",
      "Páginas que a busca entende, e o Google Analytics para saber o que gerou a venda.",
      "Páginas que la búsqueda entiende, y Google Analytics para saber qué generó la venta.",
      "検索が理解できるページと、何が売上を生んだかを見る Google アナリティクス。",
      "搜索能读懂的页面，以及用 Google Analytics 知道是什么带来了销售。",
    ),
    overview: t(
      "SEO is how the store and the site keep receiving people after a campaign ends. Analytics — Google Analytics — is how you know whether those people, or the people from TikTok and Instagram, actually bought. Google Search Console shows which queries already reach the page. One without the other is either invisible traffic or traffic you cannot explain.",
      "SEO é como a loja e o site continuam recebendo gente depois que a campanha acaba. A análise — Google Analytics — é como você sabe se essas pessoas, ou as do TikTok e do Instagram, realmente compraram. O Google Search Console mostra quais consultas já chegam à página. Um sem o outro é tráfego invisível ou tráfego que você não explica.",
      "El SEO es cómo la tienda y el sitio siguen recibiendo gente después de que la campaña termina. La analítica — Google Analytics — es cómo sabes si esas personas, o las de TikTok e Instagram, realmente compraron. Google Search Console muestra qué consultas ya llegan a la página. Uno sin el otro es tráfico invisible o tráfico que no se puede explicar.",
      "SEOは、キャンペーンが終わった後も店とサイトが人を受け取り続ける方法です。分析、つまり Google アナリティクスは、その人たちや TikTok・Instagram からの人たちが実際に買ったかを知る方法です。Google Search Console は、どの検索語がすでにページへ届いているかを示します。片方だけでは、見えない流入か、説明できない流入です。",
      "SEO 是活动结束后店铺和网站仍然能接到人的方式。分析——Google Analytics——是你知道这些人，或来自 TikTok 和 Instagram 的人，是否真的购买的方式。Google Search Console 显示哪些查询已经到达页面。只有其中一个，要么是看不见的流量，要么是解释不了的流量。",
    ),
    parts: [
      {
        id: "pages",
        art: "seo",
        title: t("Pages search can read", "Páginas que a busca lê", "Páginas que la búsqueda lee", "検索が読めるページ", "搜索能读的页面"),
        necessity: t(
          "A product, a category, or a service page that is an image with no text will not be found. Search needs a title, a description, a stable URL, and content that matches what people type.",
          "Produto, categoria ou página de serviço que é só imagem sem texto não será encontrada. A busca precisa de título, descrição, URL estável e conteúdo que combina com o que as pessoas digitam.",
          "Un producto, una categoría o una página de servicio que es solo una imagen sin texto no se encontrará. La búsqueda necesita título, descripción, URL estable y contenido que coincida con lo que la gente escribe.",
          "文字のない画像だけの商品、カテゴリ、サービスページは見つかりません。検索にはタイトル、説明、安定したURL、人が入力する言葉に合う内容が要ります。",
          "只有图片、没有文字的商品、分类或服务页不会被找到。搜索需要标题、描述、稳定的网址，以及和人们输入内容相符的正文。",
        ),
        importance: t(
          "Those fields are part of every page from the start, including product data search engines expect. Fixing this after a year of empty pages means starting the wait again.",
          "Esses campos fazem parte de cada página desde o início, inclusive os dados de produto que o buscador espera. Corrigir isso depois de um ano de páginas vazias é recomeçar a espera.",
          "Esos campos son parte de cada página desde el inicio, incluidos los datos de producto que el buscador espera. Corregirlo después de un año de páginas vacías es empezar la espera de nuevo.",
          "これらの項目は最初から各ページの一部です。検索が期待する商品データも含みます。空のページを一年続けてから直すのは、待ち時間のやり直しです。",
          "这些字段从第一天起就是每个页面的一部分，包括搜索引擎期望的商品数据。空页面放了一年再补，等于重新开始等待。",
        ),
      },
      {
        id: "analytics",
        art: "analytics",
        title: t("Google Analytics", "Google Analytics", "Google Analytics", "Google アナリティクス", "Google Analytics"),
        necessity: t(
          "Without measurement you cannot tell a winning product page from a page that only looks busy. Spend on ads, coupons, and content stays a guess.",
          "Sem medida você não separa uma página de produto que vende de uma página que só parece movimentada. Gasto em anúncio, cupom e conteúdo continua chute.",
          "Sin medición no separas una página de producto que vende de una página que solo parece ocupada. El gasto en anuncios, cupones y contenido sigue siendo una suposición.",
          "測定がなければ、売れている商品ページと、忙しく見えるだけのページを分けられません。広告、クーポン、コンテンツへの支出は推測のままです。",
          "没有衡量，你分不清哪个商品页在卖货，哪个只是看起来热闹。广告、优惠券和内容上的花费就一直是猜测。",
        ),
        importance: t(
          "Google Analytics is connected to the events that matter: product view, add to cart, purchase, and lead. Reports answer which channel and which page produced revenue, not only sessions.",
          "O Google Analytics liga aos eventos que importam: ver produto, adicionar ao carrinho, compra e lead. O relatório responde qual canal e qual página geraram receita, não só sessões.",
          "Google Analytics se conecta a los eventos que importan: ver producto, añadir al carrito, compra y lead. El informe responde qué canal y qué página generaron ingresos, no solo sesiones.",
          "Google アナリティクスは重要なイベントに繋がります。商品閲覧、カート追加、購入、リード。レポートはセッションだけでなく、どのチャネルとどのページが売上を生んだかを答えます。",
          "Google Analytics 接到真正重要的事件：查看商品、加入购物车、购买和线索。报表回答的是哪个渠道、哪个页面带来了收入，而不只是会话数。",
        ),
      },
      {
        id: "health",
        art: "websites",
        title: t("Technical health", "Saúde técnica", "Salud técnica", "技術的な健全性", "技术健康"),
        necessity: t(
          "Slow pages, broken links, and copies of the same URL split the result and waste the work already done on the words.",
          "Páginas lentas, links quebrados e cópias da mesma URL dividem o resultado e desperdiçam o trabalho já feito no texto.",
          "Páginas lentas, links rotos y copias de la misma URL parten el resultado y desperdician el trabajo ya hecho en el texto.",
          "遅いページ、切れたリンク、同じURLの複製は結果を分割し、すでに書いた文章の仕事を無駄にします。",
          "慢页面、坏链接和同一网址的副本会把结果拆开，浪费已经写好的内容。",
        ),
        importance: t(
          "Speed, mobile layout, indexable routes, and a single address per page are checked as part of delivery. Analytics then shows whether the fix changed sales, not only a score.",
          "Velocidade, layout mobile, rotas indexáveis e um endereço por página entram na entrega. A análise mostra se o ajuste mudou a venda, não só uma nota.",
          "Velocidad, layout móvil, rutas indexables y una dirección por página entran en la entrega. La analítica muestra si el ajuste cambió la venta, no solo una nota.",
          "速さ、モバイルのレイアウト、索引できるルート、ページごとの一つの住所は納品の一部です。分析は、修正が点数だけでなく売上を変えたかを示します。",
          "速度、移动布局、可索引的路由、每个页面一个地址，都是交付的一部分。分析随后显示的是修改有没有改变销售，而不只是一个分数。",
        ),
      },
    ],
  },
];

const bySlug = new Map(
  solutionBase.map((item) => {
    const extra = solutionDepth[item.slug as SolutionSlug];
    const solution = { ...item, ...extra } as Solution;
    return [solution.slug, solution] as const;
  }),
);

export const solutions: Solution[] = [...bySlug.values()];

export function getSolution(slug: string): Solution | undefined {
  return bySlug.get(slug as SolutionSlug);
}
