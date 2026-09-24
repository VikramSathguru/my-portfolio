type L10n = Record<"en" | "pt" | "es" | "ja" | "zh", string>;

function t(en: string, pt: string, es: string, ja: string, zh: string): L10n {
  return { en, pt, es, ja, zh };
}

export type SolutionDepth = {
  projectSlug: string;
  promise: L10n;
  outcomes: L10n[];
  standard: L10n;
};

export const solutionDepth = {
  websites: {
    projectSlug: "marry-miele",
    promise: t(
      "If the business is going to grow, the website has to sell before anyone picks up the phone. It holds attention, proves the offer, and moves a stranger to one next step — day and night, in every language you actually serve. A slow or generic site wastes the introduction, the ad, and the referral you already paid for.",
      "Se o negócio vai crescer, o site precisa vender antes de qualquer telefonema. Ele segura a atenção, prova a oferta e leva um estranho a um único próximo passo — de dia e de noite, em cada idioma que você realmente atende. Um site lento ou genérico desperdiça a apresentação, o anúncio e a indicação que você já pagou.",
      "Si el negocio va a crecer, el sitio tiene que vender antes de que alguien conteste el teléfono. Sostiene la atención, prueba la oferta y lleva a un desconocido a un solo siguiente paso — de día y de noche, en cada idioma que realmente atiendes. Un sitio lento o genérico desperdicia la presentación, el anuncio y la referencia que ya pagaste.",
      "事業を伸ばすなら、電話の前にサイトが売る必要があります。注意を引き、提案を証明し、知らない人を一つの次の一歩へ進める。昼も夜も、実際に対応する言語で。遅い、または凡庸なサイトは、すでに払った紹介も広告も無駄にします。",
      "如果业务要增长，网站必须在任何人接电话之前就完成销售。它抓住注意力、证明报价，并把陌生人带到唯一下一步——白天和夜里，用你真正服务的每一种语言。慢或套模板的网站，会浪费你已经付过钱的介绍、广告和转介。",
    ),
    outcomes: [
      t("First visits understand the offer without a call.", "A primeira visita entende a oferta sem uma ligação.", "La primera visita entiende la oferta sin una llamada.", "最初の訪問が、電話なしで提案を理解する。", "第一次访问不用打电话就看懂报价。"),
      t("The page stays fast on a phone, where most people arrive.", "A página continua rápida no celular, onde a maioria chega.", "La página sigue rápida en el móvil, donde llega la mayoría.", "ほとんどの人が来るスマホでも速い。", "大多数人从手机进来时，页面仍然很快。"),
      t("Campaigns land on a page that can convert, not a placeholder.", "Campanhas caem numa página que converte, não num espaço vazio.", "Las campañas caen en una página que convierte, no en un hueco.", "キャンペーンは、穴ではなく転換できるページに着地する。", "投放落在能转化的页面上，而不是一块空白。"),
    ],
    standard: t(
      "Best practice is a single path: who it is for, what changes for them, proof, and one action. Type, contrast, and motion earn attention; they do not decorate a weak offer. Pages are light, readable, and reachable by keyboard and by search. Forms say what happens next. Analytics is on before launch, so the first week of traffic already teaches you which section does the work.",
      "A boa prática é um único caminho: para quem é, o que muda para essa pessoa, a prova e uma ação. Tipo, contraste e movimento conquistam atenção; não decoram uma oferta fraca. As páginas são leves, legíveis e alcançáveis pelo teclado e pela busca. O formulário diz o que acontece depois. A análise entra antes do lançamento, para a primeira semana de tráfego já ensinar qual seção trabalha.",
      "La buena práctica es un solo camino: para quién es, qué cambia para esa persona, la prueba y una acción. Tipo, contraste y movimiento ganan atención; no decoran una oferta débil. Las páginas son ligeras, legibles y alcanzables por teclado y por búsqueda. El formulario dice qué pasa después. La analítica entra antes del lanzamiento, para que la primera semana de tráfico ya enseñe qué sección trabaja.",
      "標準は一つの道です。誰向けか、その人に何が変わるか、証拠、そして一つの行動。文字、コントラスト、動きは注意を得るもので、弱い提案の飾りではありません。ページは軽く、読め、キーボードと検索から届きます。フォームは次に何が起きるかを言います。分析は公開前に入れ、最初の一週間の流入が、どの節が働いているかを教えます。",
      "标准做法是一条路径：给谁、对他们有什么改变、证明，以及一个动作。字体、对比和动效是为了抓住注意力，不是给薄弱报价做装饰。页面要轻、可读，键盘和搜索都能到达。表单要说明下一步会发生什么。分析在上线前就接上，这样第一周的流量已经能告诉你哪一块在起作用。",
    ),
  },
  "online-stores": {
    projectSlug: "shanelle-store",
    promise: t(
      "Sales do not begin at checkout. They begin when someone stops, trusts the price, and believes the parcel will arrive. A store that only lists products looks finished and stays quiet. From the first day it needs design that holds attention, payments people already use, a reason to come back, a door from TikTok and Instagram, logistics that tell the truth, and pages search can still find after the ad budget pauses.",
      "A venda não começa no checkout. Começa quando alguém para, confia no preço e acredita que o pacote chega. Uma loja que só lista produto parece pronta e fica em silêncio. Desde o primeiro dia precisa de design que segura a atenção, pagamentos que as pessoas já usam, um motivo para voltar, uma porta vinda do TikTok e do Instagram, logística que diz a verdade e páginas que a busca ainda encontra quando o anúncio para.",
      "La venta no empieza en el checkout. Empieza cuando alguien se detiene, confía en el precio y cree que el paquete llega. Una tienda que solo lista productos parece lista y se queda en silencio. Desde el primer día necesita diseño que sostenga la atención, pagos que la gente ya usa, una razón para volver, una puerta desde TikTok e Instagram, logística que diga la verdad y páginas que la búsqueda aún encuentre cuando el anuncio pare.",
      "売上は決済から始まりません。人が立ち止まり、価格を信じ、荷物が届くと信じるところから始まります。商品を並べただけの店は完成に見えて静かです。初日から、注意を保つデザイン、人がすでに使う決済、戻る理由、TikTokとInstagramからの入口、嘘をつかない物流、広告が止まった後も検索が見つけるページが要ります。",
      "销售不是从结账开始的。它从有人停下、相信价格、并相信包裹会到达开始。只罗列商品的店看起来完成了，却一直安静。从第一天起，它需要抓住注意力的设计、人们已经在用的支付、回来的理由、从 TikTok 和 Instagram 进来的门、说实话的物流，以及广告预算暂停后搜索仍能找到的页面。",
    ),
    outcomes: [
      t("The first screen sells the offer, not the decoration.", "A primeira tela vende a oferta, não a decoração.", "La primera pantalla vende la oferta, no la decoración.", "最初の画面は飾りではなく提案を売る。", "第一屏卖的是报价，不是装饰。"),
      t("Checkout uses real gateways, and the order state is unambiguous.", "O checkout usa gateways reais, e o estado do pedido é inequívoco.", "El checkout usa pasarelas reales, y el estado del pedido es inequívoco.", "決済は実際のゲートウェイで、注文の状態は曖昧でない。", "结账走真正的网关，订单状态没有歧义。"),
      t("Email, social, shipping, and search work as one sales system.", "E-mail, social, envio e busca funcionam como um sistema de venda.", "Email, social, envío y búsqueda funcionan como un sistema de venta.", "メール、ソーシャル、配送、検索が一つの販売システムとして動く。", "邮件、社交、发货和搜索作为一个销售系统一起工作。"),
    ],
    standard: t(
      "Standard commerce practice is to remove friction, not to add tricks. Show price, shipping, and returns before the card form. Keep card data with the gateway. Use coupons with an end date, a purpose, and a report — a permanent public discount trains people to wait. Connect the product in the video to the product in the cart. Write tracking back to the order. Give every product a real title, a stable URL, and structured data, then measure add-to-cart and purchase in Google Analytics so you know which page earns its keep.",
      "A prática padrão de comércio é tirar atrito, não somar truques. Mostre preço, frete e trocas antes do formulário do cartão. Deixe os dados do cartão no gateway. Use cupom com data final, um propósito e um relatório — desconto público permanente ensina a esperar. Ligue o produto do vídeo ao produto do carrinho. Escreva o rastreio de volta no pedido. Dê a cada produto um título real, uma URL estável e dados estruturados, e meça adicionar ao carrinho e compra no Google Analytics para saber qual página se paga.",
      "La práctica estándar del comercio es quitar fricción, no sumar trucos. Muestra precio, envío y cambios antes del formulario de la tarjeta. Deja los datos de la tarjeta en la pasarela. Usa cupones con fecha final, un propósito y un informe — un descuento público permanente enseña a esperar. Conecta el producto del video con el producto del carrito. Escribe el rastreo de vuelta en el pedido. Da a cada producto un título real, una URL estable y datos estructurados, y mide añadir al carrito y compra en Google Analytics.",
      "標準的な商習慣は、仕掛けを足すことではなく、摩擦を消すことです。カードフォームの前に価格、配送、返品を見せます。カード情報はゲートウェイに置きます。クーポンには終了日、目的、レポートを付けます。ずっと公開の割引は待つことを教えます。動画の商品をカートの商品へ繋ぎ、追跡を注文へ書き戻します。各商品に本当のタイトル、安定したURL、構造化データを与え、Google アナリティクスでカート追加と購入を測り、どのページが元を取っているかを見ます。",
      "标准的商业做法是去掉摩擦，而不是堆技巧。在银行卡表单之前就显示价格、运费和退换。卡数据留在网关。优惠券要有结束日期、目的和报表——长期公开折扣会教人等待。把视频里的商品连到购物车里的商品。把物流单号写回订单。每个商品都有真实标题、稳定网址和结构化数据，然后在 Google Analytics 里衡量加购和购买，知道哪个页面在赚钱。",
    ),
  },
  crm: {
    projectSlug: "crm-imp",
    promise: t(
      "Growth leaks between conversations. A lead in one inbox, an order in another, and a promise in someone's memory is how customers go cold. A CRM puts the person, the history, and the next action in one place, so the team sells and supports from the same truth — and a new teammate can continue without asking the customer to start again.",
      "O crescimento vaza entre conversas. Um lead numa caixa, um pedido em outra e uma promessa na memória de alguém é como o cliente esfria. Um CRM põe a pessoa, o histórico e a próxima ação num lugar, para a equipe vender e atender a partir da mesma verdade — e um colega novo continuar sem pedir ao cliente para recomeçar.",
      "El crecimiento se fuga entre conversaciones. Un lead en una bandeja, un pedido en otra y una promesa en la memoria de alguien es cómo el cliente se enfría. Un CRM pone a la persona, el historial y la siguiente acción en un lugar, para que el equipo venda y atienda desde la misma verdad.",
      "成長は会話のあいだで漏れます。ある受信箱のリード、別の場所の注文、誰かの記憶の中の約束。そうして顧客は冷えます。CRMは人、履歴、次の行動を一つの場所に置き、チームが同じ事実から販売し、サポートします。新しいメンバーは、顧客に最初から話させずに続けられます。",
      "增长漏在对话之间。一个收件箱里的线索、另一个地方的订单、某个人记忆里的承诺，客户就是这样变冷的。CRM 把人、历史和下一步放在同一个地方，团队用同一套事实销售和支持——新同事可以接着做，不必让客户从头再说。",
    ),
    outcomes: [
      t("Every customer has one record, not three versions.", "Cada cliente tem um registro, não três versões.", "Cada cliente tiene un registro, no tres versiones.", "顧客は三つの版ではなく、一つの記録を持つ。", "每个客户只有一份记录，而不是三个版本。"),
      t("Follow-up has a date, so deals do not depend on memory.", "O follow-up tem data, então o negócio não depende de memória.", "El seguimiento tiene fecha, así el negocio no depende de la memoria.", "追客に日付があり、記憶に頼らない。", "跟进有日期，生意不靠记忆。"),
      t("Sales, support, and the store see the same next step.", "Vendas, suporte e a loja veem o mesmo próximo passo.", "Ventas, soporte y la tienda ven el mismo siguiente paso.", "営業、サポート、店が同じ次の一歩を見る。", "销售、客服和店铺看到的是同下一步。"),
    ],
    standard: t(
      "A CRM people avoid is an empty database. The daily screen has to be faster than a chat thread. Stages match how you really sell. Overdue work stays visible. Permissions stop one client from seeing another. Orders and form leads write into the same record automatically, with the source attached, so acquisition spend can be tied to a closed customer — not only to a click.",
      "CRM que a equipe evita é banco vazio. A tela do dia tem que ser mais rápida que um fio de chat. As etapas seguem como você realmente vende. O atraso fica visível. A permissão impede um cliente de ver outro. Pedidos e leads de formulário entram no mesmo registro, com a origem, para o gasto de aquisição ligar a um cliente fechado — não só a um clique.",
      "Un CRM que el equipo evita es una base vacía. La pantalla del día tiene que ser más rápida que un hilo de chat. Las etapas siguen cómo realmente vendes. Lo vencido queda visible. El permiso impide que un cliente vea a otro. Pedidos y leads de formulario entran en el mismo registro, con el origen, para que el gasto de adquisición se ate a un cliente cerrado — no solo a un clic.",
      "チームが避けるCRMは空のデータベースです。毎日の画面はチャットより速くなければなりません。段階は実際の売り方に合わせ、遅れた仕事は見えるようにします。権限で、ある顧客が別の顧客を見ないようにします。注文とフォームのリードは、流入元付きで同じ記録へ自動で入り、獲得費をクリックではなく成約した顧客へ結びます。",
      "团队躲开的 CRM 就是空数据库。日常界面必须比聊天更快。阶段按真实销售方式来，过期工作保持可见。权限保证一个客户看不到另一个。订单和表单线索带着来源自动写入同一条记录，这样获客花费能对上成交的客户，而不只是一次点击。",
    ),
  },
  acquisition: {
    projectSlug: "marry-miele",
    promise: t(
      "Attention is not a customer. If you want growth, acquisition is the system that turns a view — search, TikTok, Instagram, a partner — into a lead or an order you can follow, and shows which path paid for itself. A post without a landing page, a form without a CRM, and spend without measurement are three separate wastes.",
      "Atenção não é cliente. Se você quer crescimento, aquisição é o sistema que transforma uma visualização — busca, TikTok, Instagram, um parceiro — em lead ou pedido que você consegue acompanhar, e mostra qual caminho se pagou. Post sem página, formulário sem CRM e gasto sem medida são três desperdícios separados.",
      "La atención no es un cliente. Si quieres crecimiento, la adquisición es el sistema que convierte una vista — búsqueda, TikTok, Instagram, un socio — en un lead o un pedido al que puedes seguir, y muestra qué camino se pagó. Un post sin página, un formulario sin CRM y gasto sin medición son tres desperdicios distintos.",
      "注意は顧客ではありません。成長が欲しいなら、獲得とは、検索、TikTok、Instagram、提携の閲覧を、追えるリードや注文に変え、どの道が元を取ったかを示す仕組みです。着地ページのない投稿、CRMのないフォーム、測定のない支出は、三つの別々の無駄です。",
      "注意力不是客户。如果要增长，获客就是把一次浏览——搜索、TikTok、Instagram、一个合作伙伴——变成你可以跟进的线索或订单，并显示哪条路径赚回了成本的系统。没有落地页的帖子、没有 CRM 的表单、没有衡量的花费，是三笔分开的浪费。",
    ),
    outcomes: [
      t("Each campaign opens the offer that was promised.", "Cada campanha abre a oferta que foi prometida.", "Cada campaña abre la oferta que se prometió.", "各キャンペーンは、約束した提案を開く。", "每个活动打开的是当时承诺的报价。"),
      t("Leads arrive in the CRM with their source attached.", "Leads chegam ao CRM com a origem.", "Los leads llegan al CRM con su origen.", "リードは流入元付きでCRMに着く。", "线索带着来源进入 CRM。"),
      t("Spend moves toward what returns customers, not only views.", "O gasto vai para o que devolve cliente, não só visualização.", "El gasto va a lo que devuelve clientes, no solo vistas.", "支出は閲覧ではなく、顧客が戻るものへ移る。", "花费转向能带回客户的渠道，而不只是浏览。"),
    ],
    standard: t(
      "Best practice is message match: the sentence in the ad is the sentence on the page, and the button does the one job the campaign was bought for. Capture name, intent, and source in the same record. Retarget people who viewed and did not buy, and stop showing the ad to people who already purchased. Review cost per lead and cost per order weekly. Creative that cannot be tied to a product or a form is entertainment, not acquisition.",
      "A boa prática é o recado bater: a frase do anúncio é a frase da página, e o botão faz o único trabalho para o qual a campanha foi comprada. Capture nome, intenção e origem no mesmo registro. Reimpacte quem viu e não comprou, e pare de mostrar o anúncio para quem já comprou. Revise custo por lead e custo por pedido toda semana. Criativo que não se liga a um produto ou a um formulário é entretenimento, não aquisição.",
      "La buena práctica es que el mensaje coincida: la frase del anuncio es la frase de la página, y el botón hace el único trabajo para el que se compró la campaña. Captura nombre, intención y origen en el mismo registro. Vuelve a impactar a quien vio y no compró, y deja de mostrar el anuncio a quien ya compró. Revisa costo por lead y costo por pedido cada semana.",
      "標準はメッセージの一致です。広告の文はページの文であり、ボタンはキャンペーンが買った一つの仕事をします。名前、意図、流入元を同じ記録に取ります。見て買わなかった人へ再表示し、すでに買った人への広告は止めます。リード単価と注文単価を毎週見ます。商品やフォームに結びつかないクリエイティブは、獲得ではなく娯楽です。",
      "标准做法是信息一致：广告里的那句话就是页面上的那句话，按钮只做这次投放要买的那一个动作。姓名、意图和来源写入同一条记录。对看了没买的人再触达，对已经购买的人停止投放。每周看线索成本和订单成本。不能连到商品或表单的创意是娱乐，不是获客。",
    ),
  },
  automation: {
    projectSlug: "ops-automation",
    promise: t(
      "If you want true business growth, automate. It increases sales by following up when a person would forget, serves customers 24/7 on the questions that repeat, and maximizes the efficiency of a small team. Status, email, and handoff run themselves. People stay on exceptions, judgment, and relationships — the work that actually needs them.",
      "Se você quer crescimento de verdade, automatize. Aumenta a venda ao fazer o follow-up quando uma pessoa esqueceria, atende o cliente 24 horas nas perguntas que se repetem e maximiza a eficiência de uma equipe pequena. Status, e-mail e passagem rodam sozinhos. As pessoas ficam nas exceções, no julgamento e no relacionamento — o trabalho que realmente precisa delas.",
      "Si quieres un crecimiento de verdad, automatiza. Aumenta la venta al hacer el seguimiento cuando una persona lo olvidaría, atiende al cliente 24 horas en las preguntas que se repiten y maximiza la eficiencia de un equipo pequeño. Estado, email y entrega corren solos. Las personas se quedan en las excepciones, el juicio y la relación.",
      "本当の事業成長が欲しいなら、自動化してください。人が忘れるタイミングで追客して売上を伸ばし、繰り返される質問に24時間応え、少人数の効率を最大化します。状態、メール、引き渡しは自分で回ります。人は例外、判断、関係に残ります。本当に人が必要な仕事です。",
      "如果要真正的业务增长，就自动化。它在人会忘记的时候继续跟进，从而增加销售；对重复的问题提供 24 小时服务；并把小团队的效率放到最大。状态、邮件和交接自己运转。人留在例外、判断和关系上——那才是真正需要人的工作。",
    ),
    outcomes: [
      t("Follow-up happens when the event happens, not when someone remembers.", "O follow-up acontece quando o evento acontece, não quando alguém lembra.", "El seguimiento ocurre cuando pasa el evento, no cuando alguien recuerda.", "追客は、誰かが思い出したときではなく、イベントのときに起きる。", "跟进发生在事件发生时，而不是有人想起来时。"),
      t("Repeated questions are answered from the order and the catalog.", "Perguntas repetidas são respondidas a partir do pedido e do catálogo.", "Las preguntas repetidas se responden desde el pedido y el catálogo.", "繰り返される質問は、注文とカタログから答える。", "重复问题根据订单和目录来回答。"),
      t("The team handles exceptions, not every parcel and every email.", "A equipe cuida da exceção, não de cada pacote e cada e-mail.", "El equipo atiende la excepción, no cada paquete y cada email.", "チームはすべての荷物とメールではなく、例外を扱う。", "团队处理例外，而不是每一件包裹和每一封邮件。"),
    ],
    standard: t(
      "Automate the rule, and leave a person the failure. A payment, a tracking scan, a new lead, or an abandoned cart should update the order, the warehouse, the CRM, and the message that must go out. Sequences stop when the person buys or replies. Support answers shipping, sizing, and status from live data, and hands over when the question is new. If someone still retypes the same status into three tools, the system is not finished — and the team cannot grow without hiring a copy of themselves.",
      "Automatize a regra e deixe a pessoa na falha. Um pagamento, um scan de rastreio, um lead novo ou um carrinho abandonado deve atualizar o pedido, o estoque, o CRM e a mensagem que precisa sair. A sequência para quando a pessoa compra ou responde. O suporte responde frete, tamanho e status com dados vivos, e passa adiante quando a pergunta é nova. Se alguém ainda redigita o mesmo status em três ferramentas, o sistema não está pronto — e a equipe não cresce sem contratar uma cópia de si mesma.",
      "Automatiza la regla y deja a la persona en el fallo. Un pago, un escaneo, un lead nuevo o un carrito abandonado debe actualizar el pedido, el almacén, el CRM y el mensaje que debe salir. La secuencia para cuando la persona compra o responde. El soporte responde envío, talla y estado con datos vivos, y pasa la conversación cuando la pregunta es nueva.",
      "ルールを自動化し、失敗のときだけ人を残します。支払い、追跡スキャン、新しいリード、カゴ落ちは、注文、倉庫、CRM、出すべきメッセージを更新します。購入または返信でシーケンスは止まります。サポートは配送、サイズ、状態を生きたデータから答え、質問が新しいときに人へ渡します。同じ状態を三つの道具へ打ち直しているなら、システムは未完成で、チームは自分の複製を雇わなければ成長できません。",
      "把规则自动化，人只留在失败的时候。一次支付、一次物流扫描、一条新线索或一个弃购购物车，应该更新订单、仓库、CRM 和必须发出的消息。对方购买或回复，序列就停止。支持用实时数据回答配送、尺码和状态，问题是新的时候再交给人。如果还有人把同一状态敲进三个工具，系统就没完成——团队不雇一个自己的复制品就无法增长。",
    ),
  },
  mobile: {
    projectSlug: "shanelle-store",
    promise: t(
      "The phone is where customers come back. An app increases repeat sales when reorder, tracking, or field work is faster in the hand than on a website — and only if the account, the stock, and the payment are the same truth as the store. A second, weaker catalog is deleted in a week. A useful one becomes the habit.",
      "O celular é onde o cliente volta. Um app aumenta a recompra quando refazer o pedido, rastrear ou trabalhar em campo é mais rápido na mão do que no site — e só se a conta, o estoque e o pagamento forem a mesma verdade da loja. Um segundo catálogo mais fraco é apagado em uma semana. Um útil vira hábito.",
      "El móvil es donde el cliente vuelve. Una app aumenta la recompra cuando repetir el pedido, rastrear o trabajar en campo es más rápido en la mano que en el sitio — y solo si la cuenta, el stock y el pago son la misma verdad de la tienda. Un segundo catálogo más débil se borra en una semana. Uno útil se vuelve hábito.",
      "顧客が戻る場所はスマホです。再注文、追跡、現場の仕事がサイトより手の中で速いとき、アプリはリピートを増やします。ただしアカウント、在庫、決済が店と同じ事実である場合だけです。弱い二つ目のカタログは一週間で消されます。役に立つものは習慣になります。",
      "客户回来的地方是手机。当复购、查物流或现场工作在手里比在网站上更快时，应用会提高重复销售——而且只有账户、库存和支付与店铺是同一套事实时才成立。第二个更弱的目录一周内会被删掉。有用的那个会变成习惯。",
    ),
    outcomes: [
      t("The app does a job the phone is better at.", "O app faz um trabalho em que o celular é melhor.", "La app hace un trabajo en el que el móvil es mejor.", "アプリは、スマホが得意な仕事をする。", "应用做的是手机更擅长的事。"),
      t("A purchase on the phone is a purchase in the warehouse.", "Compra no celular é compra no estoque.", "Una compra en el móvil es una compra en el almacén.", "スマホの購入は倉庫の購入である。", "手机上的购买就是仓库里的购买。"),
      t("Push is a real event, not a broadcast they mute.", "O push é um evento real, não um disparo que eles silenciam.", "El push es un evento real, no un envío que silencian.", "通知は、消される一斉送信ではなく、実イベントである。", "推送是真实事件，不是他们会关掉的群发。"),
    ],
    standard: t(
      "Ship the smallest loop that brings them back: account, the one task, and a notification tied to that task. Share login, catalog, and payments with the website so price and stock cannot disagree. Ask for notification permission after a value moment, not on the first screen. Measure install-to-order, not downloads. If the website already does the job well on a phone, do not build an app to repeat it.",
      "Entregue o menor ciclo que faz a pessoa voltar: conta, a tarefa, e uma notificação ligada a essa tarefa. Compartilhe login, catálogo e pagamento com o site para preço e estoque não discordarem. Peça permissão de notificação depois de um momento de valor, não na primeira tela. Meça instalação até pedido, não download. Se o site já faz o trabalho bem no celular, não faça um app para repetir.",
      "Entrega el ciclo más pequeño que hace volver: cuenta, la tarea y una notificación atada a esa tarea. Comparte login, catálogo y pago con el sitio para que precio y stock no discrepen. Pide permiso de notificación después de un momento de valor, no en la primera pantalla. Mide de instalación a pedido, no descargas.",
      "戻ってもらう最小の循環を出します。アカウント、その一つの仕事、その仕事に結び付いた通知。ログイン、カタログ、決済をサイトと共有し、価格と在庫が食い違わないようにします。通知の許可は最初の画面ではなく、価値を感じた後に求めます。ダウンロードではなく、インストールから注文までを測ります。サイトがスマホでその仕事をすでに良くしているなら、繰り返すアプリは作りません。",
      "先交付能让人回来的最小循环：账户、那一件事，以及和这件事绑定的通知。登录、目录和支付与网站共用，价格和库存不能互相矛盾。在用户感到价值之后再请求通知权限，而不是第一屏。衡量的是从安装到下单，不是下载量。如果网站在手机上已经把这件事做好了，就不要再做一个应用去重复它。",
    ),
  },
  blockchain: {
    projectSlug: "painel-gods",
    promise: t(
      "Use a shared record when several parties must trust the same history and none of them should be able to rewrite it alone — settlement, proof, loyalty that can be checked, or access that has to be verified. Done properly, it increases trust without making the customer study wallets. Done as decoration, it adds cost, slows checkout, and loses the sale. The store, the CRM, and ordinary payments stay in place; the ledger sits under the one rule that must remain inspectable.",
      "Use um registro compartilhado quando várias partes precisam confiar no mesmo histórico e nenhuma deve reescrevê-lo sozinha — liquidação, prova, fidelidade que se confere, ou acesso que precisa ser verificado. Bem feito, aumenta a confiança sem obrigar o cliente a estudar carteira. Como decoração, soma custo, atrasa o checkout e perde a venda. A loja, o CRM e o pagamento comum continuam; o ledger fica sob a única regra que precisa seguir auditável.",
      "Usa un registro compartido cuando varias partes deben confiar en el mismo historial y ninguna debe reescribirlo sola — liquidación, prueba, fidelidad que se puede comprobar, o acceso que hay que verificar. Bien hecho, aumenta la confianza sin obligar al cliente a estudiar una billetera. Como decoración, suma costo, retrasa el checkout y pierde la venta.",
      "複数の当事者が同じ履歴を信頼し、誰か一人では書き換えられないときに、共有記録を使います。決済、証明、確認できるロイヤルティ、検証が必要なアクセス。正しくやれば、顧客にウォレットを学ばせず信頼を増やします。飾りとしてやれば、コストを足し、決済を遅くし、売上を失います。店、CRM、通常の支払いは残し、台帳は検査できるべき一つのルールの下に置きます。",
      "当多方必须信任同一段历史、而且任何一方都不能单独改写它时，才使用共享记录——结算、证明、可核验的会员，或必须被验证的访问。做得对，它增加信任，而不强迫客户去研究钱包。当作装饰，它增加成本、拖慢结账、丢掉销售。店铺、CRM 和普通支付留在原处；账本只放在那一条必须能被检查的规则下面。",
    ),
    outcomes: [
      t("The chain stores the proof, not the whole operation.", "A cadeia guarda a prova, não a operação inteira.", "La cadena guarda la prueba, no toda la operación.", "チェーンは証明を保管し、運用全体は保管しない。", "链上保存的是证明，不是整套运营。"),
      t("The customer completes a business action, not a tutorial.", "O cliente completa uma ação de negócio, não um tutorial.", "El cliente completa una acción de negocio, no un tutorial.", "顧客が終えるのは事業の行動であり、教程ではない。", "客户完成的是一个业务动作，不是一堂课。"),
      t("Failed transactions are explained in plain language.", "Transação que falha é explicada em linguagem simples.", "Una transacción fallida se explica en lenguaje simple.", "失敗した取引は平易な言葉で説明される。", "失败的交易用白话解释。"),
    ],
    standard: t(
      "Do not put names, support notes, or card data on a public chain. Store the proof; keep the working record where operators already are. Confirm the action in the product language — pay, claim, prove, unlock — and hide keys and fees behind that confirmation. If a normal database with permissions already solves the trust problem, a chain is the wrong tool. The closest shipped example here is a marketplace where several parties share money movement and each side has to see a result they can rely on.",
      "Não ponha nomes, notas de suporte ou dados de cartão numa cadeia pública. Guarde a prova; deixe o registro de trabalho onde a operação já está. Confirme a ação na linguagem do produto — pagar, resgatar, provar, liberar — e esconda chaves e taxas atrás dessa confirmação. Se um banco normal com permissão já resolve a confiança, a cadeia é a ferramenta errada. O exemplo mais próximo já entregue aqui é um marketplace em que várias partes compartilham o movimento do dinheiro e cada lado precisa ver um resultado em que pode confiar.",
      "No pongas nombres, notas de soporte o datos de tarjeta en una cadena pública. Guarda la prueba; deja el registro de trabajo donde la operación ya está. Confirma la acción en el lenguaje del producto. Si una base normal con permisos ya resuelve la confianza, la cadena es la herramienta incorrecta.",
      "名前、サポートメモ、カード情報を公開チェーンに置かないでください。証明を保管し、作業記録は運用がすでにいる場所に残します。支払う、受け取る、証明する、開く、という製品の言葉で確認し、鍵と手数料はその確認の後ろに隠します。権限のある普通のデータベースで信頼がすでに解けるなら、チェーンは間違った道具です。ここで最も近い納品例は、複数の当事者がお金の動きを共有し、各方が頼れる結果を見る必要があるマーケットプレイスです。",
      "不要把姓名、支持备注或卡数据放上公链。保存证明；工作记录留在运营人员已经在的地方。用产品的语言确认动作——支付、领取、证明、解锁——把密钥和费用藏在这次确认后面。如果一套带权限的普通数据库已经解决了信任问题，链就是错误的工具。这里最接近的已交付例子，是一个多方共享资金流动、每一方都要看到可以依赖的结果的市场。",
    ),
  },
  seo: {
    projectSlug: "marry-miele",
    promise: t(
      "Campaigns end. Search does not, if the pages deserve to be found. SEO is how the site and the store keep receiving people after the budget pauses, and Google Analytics is how you know whether those people — and the ones from TikTok and Instagram — became revenue. Rankings without measurement, or dashboards without pages worth ranking, both waste the work. Growth you cannot see is growth you cannot repeat.",
      "Campanha acaba. A busca não, se as páginas merecem ser encontradas. SEO é como o site e a loja continuam recebendo gente depois que o orçamento pausa, e o Google Analytics é como você sabe se essas pessoas — e as do TikTok e do Instagram — viraram receita. Ranking sem medida, ou painel sem página que mereça rankear, os dois desperdiçam o trabalho. Crescimento que você não vê é crescimento que você não repete.",
      "La campaña termina. La búsqueda no, si las páginas merecen ser encontradas. El SEO es cómo el sitio y la tienda siguen recibiendo gente cuando el presupuesto pausa, y Google Analytics es cómo sabes si esas personas — y las de TikTok e Instagram — se volvieron ingresos. Posiciones sin medición, o un panel sin páginas que merezcan posicionar, ambos desperdician el trabajo.",
      "キャンペーンは終わります。ページが見つかる価値があるなら、検索は終わりません。SEOは、予算が止まった後もサイトと店が人を受け取り続ける方法です。Google アナリティクスは、その人たちや TikTok・Instagram からの人たちが売上になったかを知る方法です。測定のない順位も、順位に値しないページのダッシュボードも、仕事を無駄にします。見えない成長は、繰り返せない成長です。",
      "活动会结束。如果页面值得被找到，搜索不会结束。SEO 是预算暂停之后网站和店铺仍然能接到人的方式，Google Analytics 是你知道这些人——以及来自 TikTok 和 Instagram 的人——是否变成收入的方式。没有衡量的排名，或没有值得排名的页面的仪表盘，都会浪费工作。看不见的增长是无法重复的增长。",
    ),
    outcomes: [
      t("Product and service pages can be read by search, not only by people.", "Páginas de produto e serviço podem ser lidas pela busca, não só por pessoas.", "Las páginas de producto y servicio pueden ser leídas por la búsqueda, no solo por personas.", "商品とサービスのページは、人だけでなく検索が読める。", "商品和服务页不仅人能读，搜索也能读。"),
      t("Analytics shows revenue by page and by channel.", "A análise mostra receita por página e por canal.", "La analítica muestra ingresos por página y por canal.", "分析は、ページ別とチャネル別の売上を示す。", "分析按页面和渠道显示收入。"),
      t("Speed and one address per page protect the words you already wrote.", "Velocidade e um endereço por página protegem o texto que você já escreveu.", "La velocidad y una dirección por página protegen el texto que ya escribiste.", "速さと、ページごとの一つの住所が、すでに書いた文章を守る。", "速度和每个页面一个地址，保护你已经写好的内容。"),
    ],
    standard: t(
      "Give every indexable page one title, one description, one URL, and text that matches real searches — including product name, price, and availability in structured data. Do not publish copies of the same page. Fix speed and mobile layout before you buy more content. Connect Google Analytics to view, add to cart, purchase, and lead, and check Search Console for queries you already rank for but do not win. SEO is a publishing habit, not a plugin installed on launch day.",
      "Dê a cada página indexável um título, uma descrição, uma URL e um texto que combine com buscas reais — inclusive nome, preço e disponibilidade do produto em dados estruturados. Não publique cópias da mesma página. Corrija velocidade e layout mobile antes de comprar mais conteúdo. Ligue o Google Analytics a ver, adicionar ao carrinho, comprar e lead, e olhe o Search Console pelas consultas em que você já aparece e não ganha. SEO é um hábito de publicação, não um plugin no dia do lançamento.",
      "Da a cada página indexable un título, una descripción, una URL y un texto que coincida con búsquedas reales — incluido nombre, precio y disponibilidad del producto en datos estructurados. No publiques copias de la misma página. Corrige velocidad y layout móvil antes de comprar más contenido. Conecta Google Analytics a ver, añadir al carrito, comprar y lead.",
      "索引できる各ページに、一つのタイトル、一つの説明、一つのURL、実際の検索に合う文章を与えます。商品名、価格、在庫を構造化データに含めます。同じページの複製は出しません。コンテンツを足す前に、速さとモバイルのレイアウトを直します。Google アナリティクスを閲覧、カート追加、購入、リードに繋ぎ、すでに表示されているのに勝てていない検索語を Search Console で見ます。SEOは公開日のプラグインではなく、公開の習慣です。",
      "每个可索引页面只有一个标题、一段描述、一个网址，以及和真实搜索相符的正文——商品名、价格和库存写进结构化数据。不要发布同一页面的副本。在购买更多内容之前，先修好速度和移动布局。把 Google Analytics 接到浏览、加购、购买和线索，并在 Search Console 里查看你已经有排名但没有赢下的查询。SEO 是一种发布习惯，不是上线当天安装的插件。",
    ),
  },
};
