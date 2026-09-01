// Ramazan Şahin Hukuk Bürosu'nun eski (avukatramazansahin.com.tr) WordPress
// sitesinden taşınan gerçek içerik. WP REST API üzerinden çekildi ve düz
// metne indirgendi — kumar/bahis spam yazısı (bkz. platform analizi) hariç
// tutuldu.

export type ArticleBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }

export interface PracticeArea {
  slug: string
  title: string
  subtitle: string
  body: string
  /** Sayfa içeriğini zenginleştiren ek bölümler (kapsam listesi, süreç bilgisi vb.) */
  details: ArticleBlock[]
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: 'ceza-hukuku',
    title: 'Ceza Hukuku',
    subtitle: 'Güçlü savunma, adil yargılanma hakkı',
    body: 'Ceza hukuku; soruşturma ve kovuşturma süreçlerinde şüpheli, sanık veya mağdur sıfatıyla yer alan kişilerin haklarının korunmasını amaçlayan temel hukuk dallarından biridir. Bu kapsamda ifade alma, gözaltı, tutuklama, arama ve el koyma gibi koruma tedbirlerine karşı hukuki güvencelerin sağlanması büyük önem taşır. Ceza yargılamasının her aşamasında etkin savunma yapılması, delillerin doğru değerlendirilmesi ve usul kurallarına uygun hareket edilmesi, adil yargılanma hakkının korunması açısından kritik rol oynar. Hukuk büromuz; soruşturma aşamasından temyiz ve istinaf süreçlerine kadar tüm ceza yargılamasında müvekkillerine kapsamlı hukuki destek sunmaktadır.',
    details: [
      { type: 'heading', text: 'Kapsamındaki Başlıca Konular' },
      {
        type: 'list',
        items: [
          'Gözaltı ve ifade aşamasında müdafilik',
          'Tutuklamaya itiraz ve adli kontrol talepleri',
          'Ağır ceza ve asliye ceza mahkemelerinde savunma',
          'İstinaf ve temyiz başvurularının hazırlanması',
          'Mağdur ve şikâyetçi vekilliği, katılma talepleri',
          'Uzlaştırma sürecinin takibi',
        ],
      },
      {
        type: 'paragraph',
        text: 'Soruşturma aşamasında alınan hatalı bir tutum, kovuşturma aşamasında telafisi güç sonuçlara yol açabilir. Bu nedenle bir şüpheli veya sanığın en başından itibaren, ifadesinin alındığı ilk andan yargılamanın kesinleşmesine kadar geçen sürecin tamamında bir müdafi ile hareket etmesi büyük önem taşır. Delillerin hukuka uygun elde edilip edilmediğinin denetlenmesi, bilirkişi raporlarına itiraz edilmesi ve savunmanın her duruşmada güncel tutulması, sonucu doğrudan etkileyen unsurlardır.',
      },
      {
        type: 'paragraph',
        text: 'Mağdur veya şikâyetçi taraf için de süreç aynı derecede hassastır; şikâyet dilekçesinin doğru hazırlanması, delillerin zamanında sunulması ve katılma talebinin usulüne uygun yapılması, mağduriyetin giderilmesi açısından belirleyicidir. Hukuk büromuz her iki taraf için de dosyanın tüm aşamalarında yakın takip sağlamaktadır.',
      },
    ],
  },
  {
    slug: 'aile-hukuku',
    title: 'Aile Hukuku',
    subtitle: 'Hassas süreçlerde güvenilir rehberlik',
    body: 'Aile hukuku; boşanma, velayet, nafaka, mal paylaşımı ve soybağı gibi bireylerin özel yaşamını doğrudan etkileyen hassas konuları kapsar. Bu süreçlerde yalnızca hukuki bilgi değil, aynı zamanda dikkatli ve özenli bir yaklaşım da gereklidir. Çekişmeli ve anlaşmalı boşanma davalarının yürütülmesi, çocukların üstün yararının gözetilmesi ve taraflar arasında adil çözümler geliştirilmesi temel önceliktir. Hukuk büromuz, aile hukukuna ilişkin tüm uyuşmazlıklarda gizlilik ve hassasiyet ilkeleri çerçevesinde destek sunmaktadır.',
    details: [
      { type: 'heading', text: 'Kapsamındaki Başlıca Konular' },
      {
        type: 'list',
        items: [
          'Anlaşmalı ve çekişmeli boşanma davaları',
          'Velayet, kişisel ilişki tesisi ve velayetin değiştirilmesi',
          'Yoksulluk, iştirak ve tedbir nafakası talepleri',
          'Mal rejiminin tasfiyesi ve katkı payı alacakları',
          'Soybağının reddi ve tanıma davaları',
          'Evlat edinme işlemleri',
        ],
      },
      {
        type: 'paragraph',
        text: 'Anlaşmalı boşanmada tarafların üzerinde uzlaştığı protokolün; nafaka, velayet, kişisel ilişki ve mal paylaşımı gibi tüm hususları eksiksiz ve hukuka uygun biçimde düzenlemesi, ileride yeni bir dava açılmasının önüne geçer. Çekişmeli süreçlerde ise delillerin (tanık, yazışma, mali kayıtlar) doğru toplanması ve sunulması, hem maddi hem manevi tazminat taleplerinin hem de mal paylaşımının sonucunu doğrudan etkiler.',
      },
      {
        type: 'paragraph',
        text: 'Velayet ve kişisel ilişki düzenlemelerinde mahkemenin temel ölçütü çocuğun üstün yararıdır; bu nedenle sürecin çocuğu yıpratmayacak şekilde, sosyal inceleme raporları ve uzman görüşleri de gözetilerek yürütülmesi gerekir. Hukuk büromuz, aile içi uyuşmazlıklarda tarafların onurunu ve mahremiyetini gözeterek çözüm odaklı bir yol izlemektedir.',
      },
    ],
  },
  {
    slug: 'icra-iflas-hukuku',
    title: 'İcra İflas Hukuku',
    subtitle: 'Alacakların güvenli ve hızlı tahsili',
    body: 'İcra ve iflas hukuku, alacakların tahsili ve borçların yapılandırılması süreçlerini düzenleyen bir alandır. İlamsız ve ilamlı icra takiplerinin başlatılması, haciz işlemleri, satış süreçleri ve itirazların yönetimi bu alanın temel konularını oluşturur. Ayrıca iflas, konkordato ve yeniden yapılandırma süreçlerinde hem alacaklıların hem de borçluların haklarının dengeli biçimde korunması gerekir. Hukuk büromuz, icra takiplerinin etkin şekilde yürütülmesi ve uyuşmazlıkların en kısa sürede çözüme kavuşturulması amacıyla profesyonel danışmanlık ve temsil hizmeti sağlamaktadır.',
    details: [
      { type: 'heading', text: 'Kapsamındaki Başlıca Konular' },
      {
        type: 'list',
        items: [
          'İlamlı ve ilamsız icra takibinin başlatılması',
          'Ödeme emrine itiraz ve itirazın iptali/kaldırılması davaları',
          'Haciz, muhafaza ve satış (icra ihalesi) işlemleri',
          'Menfi tespit ve istirdat davaları',
          'İflas ve iflasın ertelenmesi süreçleri',
          'Borca batıklık ve sıra cetveline itiraz',
        ],
      },
      {
        type: 'paragraph',
        text: 'Bir icra takibinin etkin sonuç vermesi, doğru takip türünün seçilmesine ve borçlunun mal varlığının zamanında tespit edilmesine bağlıdır. Ödeme emrine süresinde ve usulüne uygun itiraz edilmemesi, borçlu açısından ciddi hak kayıplarına yol açabilirken; alacaklı için de haciz işlemlerinin gecikmesi mal kaçırma riskini artırır. Bu nedenle takibin her aşamasının profesyonel şekilde yönetilmesi gerekir.',
      },
      {
        type: 'paragraph',
        text: 'Borçlu tarafında ise itiraz, tehiri icra ve gerektiğinde yeniden yapılandırma seçeneklerinin doğru değerlendirilmesi büyük önem taşır. Hukuk büromuz, gerek alacaklı gerekse borçlu vekilliğinde, dosyanın mali tablosunu bütün olarak değerlendirerek en uygun stratejiyi belirlemektedir.',
      },
    ],
  },
  {
    slug: 'is-hukuku',
    title: 'İş Hukuku',
    subtitle: 'Çalışma hayatında dengeli ve adil çözümler',
    body: 'İş hukuku; işçi ve işveren ilişkilerini düzenleyen, çalışma hayatının temel kurallarını belirleyen bir alandır. İş sözleşmelerinin hazırlanması, fesih süreçleri, kıdem ve ihbar tazminatı alacakları, işe iade davaları ve iş kazalarından doğan sorumluluklar bu kapsamda değerlendirilir. Taraflar arasındaki dengenin korunması ve uyuşmazlıkların en kısa sürede çözülmesi önemlidir. Hukuk büromuz, iş hukuku alanında hem danışmanlık hem dava takibi hizmeti sunmaktadır.',
    details: [
      { type: 'heading', text: 'Kapsamındaki Başlıca Konular' },
      {
        type: 'list',
        items: [
          'Haksız fesih, kıdem ve ihbar tazminatı alacakları',
          'İşe iade davaları ve arabuluculuk süreci',
          'Fazla mesai, yıllık izin ve ücret alacakları',
          'İş kazası ve meslek hastalığından doğan tazminatlar',
          'Mobbing (psikolojik taciz) iddiaları',
          'Belirli/belirsiz süreli iş sözleşmelerinin hazırlanması',
        ],
      },
      {
        type: 'paragraph',
        text: 'İş sözleşmesinin feshi öncesinde izlenen usul, sonradan açılacak davanın kaderini büyük ölçüde belirler; fesih bildiriminin yazılı ve gerekçeli yapılmaması veya savunma hakkının tanınmaması gibi eksiklikler işçi lehine sonuç doğurabilir. İşe iade davalarında dava açma süresi oldukça kısa olduğundan (fesih bildiriminin tebliğinden itibaren bir ay), zaman kaybetmeden ve önce zorunlu arabuluculuk başvurusu yapılarak hareket edilmesi gerekir.',
      },
      {
        type: 'paragraph',
        text: 'İşveren tarafında ise fesih süreçlerinin, özlük dosyalarının ve iç yönetmeliklerin mevzuata uygun hazırlanması, ileride doğabilecek tazminat risklerini büyük ölçüde azaltır. Hukuk büromuz hem işçi hem işveren vekilliğinde, çalışma hayatının pratik gerçeklerini gözeten çözümler üretmektedir.',
      },
    ],
  },
  {
    slug: 'ticaret-hukuku',
    title: 'Ticaret Hukuku',
    subtitle: 'Ticari faaliyetlerde hukuki güvence',
    body: 'Ticaret hukuku, ticari işletmelerin faaliyetlerini düzenleyen ve ticari ilişkilerden doğan uyuşmazlıkları konu alan geniş kapsamlı bir hukuk dalıdır. Ticari sözleşmelerin hazırlanması, haksız rekabet, ticari alacak davaları ve şirketler arası uyuşmazlıklar bu alanın başlıca konularındandır. Hukuk büromuz, ticari faaliyetlerin güvenli şekilde yürütülmesi için önleyici hukuk hizmetleri de sunmaktadır.',
    details: [
      { type: 'heading', text: 'Kapsamındaki Başlıca Konular' },
      {
        type: 'list',
        items: [
          'Ticari sözleşmelerin hazırlanması ve müzakeresi',
          'Cari hesap ve ticari alacak davaları',
          'Haksız rekabetin tespiti ve önlenmesi',
          'Kambiyo senetlerine (çek, bono, poliçe) dayalı takipler',
          'Acentelik, distribütörlük ve bayilik uyuşmazlıkları',
          'Ticari işletme devri ve rekabet yasağı sözleşmeleri',
        ],
      },
      {
        type: 'paragraph',
        text: 'Ticaret hukukunda uyuşmazlıkların büyük bölümü, ilişkinin başında hazırlanan sözleşmenin eksik veya belirsiz olmasından kaynaklanır. Tarafların edim, süre, cezai şart ve yetkili mahkeme gibi hususları net biçimde düzenlemesi, olası bir ihtilafta sürecin hızlı ve öngörülebilir ilerlemesini sağlar. Ticari davalarda basit yargılama usulünün uygulanması nedeniyle delillerin dava dilekçesiyle birlikte eksiksiz sunulması da ayrıca önem taşır.',
      },
      {
        type: 'paragraph',
        text: 'Hukuk büromuz, ticari ilişkinin kurulma aşamasından uyuşmazlığın çözümüne kadar geçen süreçte; sözleşme incelemesi, ihtarname düzenlenmesi ve gerektiğinde dava/icra takibi ile bütüncül bir hukuki koruma sağlamaktadır.',
      },
    ],
  },
  {
    slug: 'sirketler-hukuku',
    title: 'Şirketler Hukuku',
    subtitle: 'Kurumsal yapınıza güçlü hukuki temel',
    body: 'Şirketler hukuku; şirket kuruluşu, birleşme, bölünme, hisse devri, genel kurul işlemleri ve yöneticilerin sorumluluğu gibi konuları kapsar. Şirket yapısının doğru kurulması ve mevzuata uygun yönetilmesi, ileride doğabilecek risklerin önlenmesi açısından büyük önem taşır. Hukuk büromuz, şirketlerin tüm kurumsal süreçlerinde hukuki danışmanlık sağlamaktadır.',
    details: [
      { type: 'heading', text: 'Kapsamındaki Başlıca Konular' },
      {
        type: 'list',
        items: [
          'Şirket kuruluşu ve ana sözleşme hazırlanması',
          'Pay/hisse devri ve pay sahipliği uyuşmazlıkları',
          'Birleşme, bölünme ve tür değiştirme işlemleri',
          'Genel kurul ve yönetim kurulu kararlarının iptali',
          'Ortaklar arası uyuşmazlıklar ve haklı sebeple fesih',
          'Yönetici ve ortakların hukuki/cezai sorumluluğu',
        ],
      },
      {
        type: 'paragraph',
        text: 'Bir şirketin ana sözleşmesinin ve pay sahipleri sözleşmesinin ortaklık ilişkisinin en başında sağlam kurulması, ileride çıkabilecek ortaklar arası anlaşmazlıkların önüne geçen en etkili tedbirdir. Devir kısıtlamaları, oy hakları, kâr dağıtım esasları ve çıkış (exit) mekanizmalarının net tanımlanması, şirketin uzun vadeli istikrarı açısından kritik önemdedir.',
      },
      {
        type: 'paragraph',
        text: 'Genel kurul ve yönetim kurulu kararlarının usulüne uygun alınmaması, kararların iptali davalarına ve yöneticilerin şahsi sorumluluğuna yol açabilir. Hukuk büromuz, şirketlerin gündelik işleyişinden yapısal değişikliklere (birleşme, bölünme, devir) kadar geniş bir yelpazede hukuki danışmanlık vermektedir.',
      },
    ],
  },
  {
    slug: 'yabancilar-hukuku',
    title: 'Yabancılar Hukuku',
    subtitle: 'Uluslararası süreçlerde güvenilir destek',
    body: 'Yabancılar hukuku; ikamet izni, çalışma izni, vatandaşlık başvuruları ve sınır dışı işlemlerine karşı başvuruları kapsar. Uluslararası mevzuat ve idari uygulamaların yakından takip edilmesi gereklidir. Hukuk büromuz, yabancı gerçek ve tüzel kişilere hukuki destek sunmaktadır.',
    details: [
      { type: 'heading', text: 'Kapsamındaki Başlıca Konular' },
      {
        type: 'list',
        items: [
          'İkamet izni başvuruları ve uzatma işlemleri',
          'Çalışma izni ve muafiyet başvuruları',
          'İstisnai yolla ve yatırım yoluyla Türk vatandaşlığı',
          'Sınır dışı etme kararlarına karşı iptal davaları',
          'Uluslararası koruma (mülteci/sığınma) başvuruları',
          'Yabancıların taşınmaz edinimi işlemleri',
        ],
      },
      {
        type: 'paragraph',
        text: 'Yabancılar hukukunda işlemlerin büyük bölümü idari makamlar (Göç İdaresi, ilgili valilikler, konsolosluklar) nezdinde yürütüldüğünden, başvuru dosyasının eksiksiz hazırlanması ve sürelerin titizlikle takip edilmesi gerekir. Sınır dışı etme kararı gibi ivedi işlerde dava açma süresinin çok kısa olması, hızlı ve doğru hukuki müdahaleyi zorunlu kılar.',
      },
      {
        type: 'paragraph',
        text: 'Hukuk büromuz, yabancı gerçek kişilere ikamet ve çalışma izninden vatandaşlık başvurusuna; yabancı yatırımcı ve şirketlere ise Türkiye’deki hukuki süreçlerinde uçtan uca danışmanlık hizmeti sunmaktadır.',
      },
    ],
  },
  {
    slug: 'infaz-hukuku',
    title: 'İnfaz Hukuku',
    subtitle: 'Ceza infazında hakların korunması',
    body: 'İnfaz hukuku, kesinleşmiş ceza hükümlerinin nasıl uygulanacağını düzenler. Denetimli serbestlik, koşullu salıverilme ve infaz erteleme gibi konular bu alanın kapsamındadır. Hukuk büromuz, hükümlü ve yakınlarına infaz sürecinde danışmanlık vermektedir.',
    details: [
      { type: 'heading', text: 'Kapsamındaki Başlıca Konular' },
      {
        type: 'list',
        items: [
          'Koşullu salıverilme ve denetimli serbestlik talepleri',
          'Hapis cezasının ertelenmesi başvuruları',
          'Disiplin cezalarına karşı infaz hâkimliğine şikâyet',
          'Açık ceza infaz kurumuna ayırma talepleri',
          'Adli para cezasının taksitlendirilmesi',
          'Hastalık nedeniyle infazın ertelenmesi',
        ],
      },
      {
        type: 'paragraph',
        text: 'İnfaz sürecindeki her işlem — disiplin cezaları, kurum değişiklikleri, salıverilme tarihinin hesaplanması — infaz hâkimliği ve Cumhuriyet başsavcılığı nezdinde belirli usul ve sürelere tabidir. Bu sürelerin kaçırılması, hükümlünün haklarında telafisi güç kayıplara yol açabilir.',
      },
      {
        type: 'paragraph',
        text: 'Hukuk büromuz, ceza infaz kurumlarındaki hükümlülerin ve ailelerinin karşılaştığı idari ve hukuki sorunlarda; infaz hesabının doğru yapılmasından disiplin cezalarına itiraza kadar süreci yakından takip etmektedir.',
      },
    ],
  },
  {
    slug: 'bilisim-ve-e-ticaret-hukuku',
    title: 'Bilişim ve E-Ticaret Hukuku',
    subtitle: 'Dijital dünyada hukuki güvenlik',
    body: 'Bu alan; kişisel verilerin korunması, internet üzerinden yapılan sözleşmeler, dijital içerik ihlalleri ve siber suçları kapsar. Hukuk büromuz, dijital dünyadan doğan uyuşmazlıklarda etkin hukuki çözümler sunar.',
    details: [
      { type: 'heading', text: 'Kapsamındaki Başlıca Konular' },
      {
        type: 'list',
        items: [
          'KVKK uyum süreçleri ve veri ihlali bildirimleri',
          'Mesafeli satış ve elektronik ticaret sözleşmeleri',
          'İnternet üzerinden kişilik haklarının ihlali',
          'Siber dolandırıcılık ve yetkisiz erişim suçları',
          'İçerik ve erişim engelleme kararlarına itiraz',
          'Platform ve pazaryeri satıcı sözleşmeleri',
        ],
      },
      {
        type: 'paragraph',
        text: 'Kişisel verilerin korunması mevzuatına uyum, yalnızca büyük şirketleri değil e-ticaret yapan her işletmeyi ilgilendirir; aydınlatma metinlerinin, açık rıza formlarının ve veri saklama süreçlerinin mevzuata uygun kurgulanmaması idari para cezalarına yol açabilir. İnternet üzerinden işlenen hakaret, itibar zedeleme ve dolandırıcılık gibi fiillerde ise delillerin (ekran görüntüsü, IP kaydı, log kayıtları) zamanında ve usulüne uygun tespit ettirilmesi belirleyicidir.',
      },
      {
        type: 'paragraph',
        text: 'Hukuk büromuz, dijital ortamda faaliyet gösteren gerçek ve tüzel kişilere hem önleyici hukuk (sözleşme, aydınlatma metni, kullanım koşulları) hem de uyuşmazlık çözümü (dava, şikâyet, erişim engelleme) alanlarında hizmet vermektedir.',
      },
    ],
  },
  {
    slug: 'fikri-ve-sinai-mulkiyet-haklari',
    title: 'Fikri ve Sınai Mülkiyet Hakları',
    subtitle: 'Fikirleriniz ve markalarınız güvende',
    body: 'Marka, patent, tasarım ve telif haklarının korunması bu alanın temelini oluşturur. Tescil başvurularının hazırlanması, itiraz ve hükümsüzlük süreçlerinin yürütülmesi ile ihlallerin önlenmesine yönelik hukuki tedbirlerin alınması büyük önem taşır. Hukuk büromuz, fikri hakların etkin biçimde korunması ve ticari değerinin sürdürülebilir şekilde yönetilmesi için kapsamlı danışmanlık ve dava takibi hizmeti sunmaktadır.',
    details: [
      { type: 'heading', text: 'Kapsamındaki Başlıca Konular' },
      {
        type: 'list',
        items: [
          'Eser sahipliğinin tespiti ve telif hakkı ihlalleri',
          'Tasarım tescili ve tasarım hakkına tecavüzün önlenmesi',
          'Lisans ve devir sözleşmelerinin hazırlanması',
          'Haksız rekabet kapsamında taklit ürünlerle mücadele',
          'Gümrüklerde el koyma ve ihtiyati tedbir talepleri',
          'Fikri mülkiyet portföyünün yönetimi ve denetimi',
        ],
      },
      {
        type: 'paragraph',
        text: 'Bir eserin, tasarımın ya da yazılımın ticari değerinin korunması, hakkın zamanında ve doğru sınıflarda tescil ettirilmesiyle başlar; tescilsiz haklarda ise ihlalin ispatı çok daha güç hale gelir. İhlal tespit edildiğinde ihtiyati tedbir ve delil tespiti gibi hızlı hukuki araçların vakit kaybetmeden devreye sokulması, zararın büyümesini engeller.',
      },
      {
        type: 'paragraph',
        text: 'Hukuk büromuz, yaratıcı ve teknolojik değeri olan çalışmaların hak sahipleri adına korunmasında; tescil öncesi araştırmadan ihlal davalarına kadar sürecin tamamında hukuki destek sağlamaktadır.',
      },
    ],
  },
  {
    slug: 'miras-hukuku',
    title: 'Miras Hukuku',
    subtitle: 'Adil paylaşım, güvenli gelecek',
    body: 'Mirasın paylaşımı, vasiyetname düzenlenmesi, mirasçılık tespiti ve mirasın reddi gibi işlemler bu kapsamda değerlendirilir. Miras uyuşmazlıklarının çoğu zaman aile içi hassas dengeler barındırması nedeniyle sürecin dikkat ve özenle yürütülmesi gerekir. Hukuk büromuz, hak kayıplarını önleyerek adil ve kalıcı çözümler üretilmesi amacıyla profesyonel destek sağlamaktadır.',
    details: [
      { type: 'heading', text: 'Kapsamındaki Başlıca Konular' },
      {
        type: 'list',
        items: [
          'Mirasçılık belgesi (veraset ilamı) alınması',
          'Miras ortaklığının giderilmesi (izale-i şüyu) davaları',
          'Tenkis davaları ve saklı pay ihlalleri',
          'Vasiyetname ve miras sözleşmesi düzenlenmesi',
          'Mirasın reddi ve mirasçılıktan çıkarma',
          'Muris muvazaası (mal kaçırma) davaları',
        ],
      },
      {
        type: 'paragraph',
        text: 'Miras paylaşımında en sık karşılaşılan uyuşmazlıklardan biri, mirasbırakanın sağlığında yaptığı bazı devirlerin gerçekte mirasçılardan mal kaçırma amacı taşıyıp taşımadığıdır (muris muvazaası); bu tür davalarda devrin gerçek amacının ortaya konması titiz bir delil ve tanık çalışması gerektirir. Saklı paylı mirasçıların (eş, alt soy, ana-baba) yapılan tasarruflar nedeniyle paylarının ihlal edilmesi halinde tenkis davası açma hakkı doğar.',
      },
      {
        type: 'paragraph',
        text: 'Mirasçılar arasında ortaklığın (elbirliği mülkiyetinin) sona erdirilmesi genellikle izale-i şüyu davası yoluyla, taşınmazın satılarak bedelinin paylaştırılması ya da aynen taksim edilmesiyle sonuçlanır. Hukuk büromuz, miras süreçlerinde ailenin tüm bireylerinin haklarını gözeten, kalıcı ve adil çözümler için hukuki destek sunmaktadır.',
      },
    ],
  },
  {
    slug: 'deniz-ticaret-hukuku',
    title: 'Deniz Ticaret Hukuku',
    subtitle: 'Deniz ticaretinde güçlü temsil',
    body: 'Deniz taşımacılığı, navlun sözleşmeleri, yük hasarları, çatma ve deniz kazalarından doğan sorumluluklar bu alanın başlıca konularıdır. Uluslararası sözleşmeler ve denizcilik teamülleri dikkate alınarak yürütülen süreçlerde hızlı ve doğru müdahale büyük önem taşır. Hukuk büromuz, deniz ticaretinden kaynaklanan uyuşmazlıklarda etkin temsil ve danışmanlık hizmeti sunmaktadır.',
    details: [
      { type: 'heading', text: 'Kapsamındaki Başlıca Konular' },
      {
        type: 'list',
        items: [
          'Navlun ve charter party sözleşmelerinden doğan uyuşmazlıklar',
          'Yük hasarı ve kaybından kaynaklanan tazminat talepleri',
          'Gemi alacaklısı hakları ve gemi üzerinde ihtiyati haciz',
          'Çatma (gemi çarpışması) ve kurtarma-yardım davaları',
          'Deniz sigortası uyuşmazlıkları',
          'Gemi adamlarının iş ilişkisinden doğan talepleri',
        ],
      },
      {
        type: 'paragraph',
        text: 'Deniz ticaretinden doğan uyuşmazlıklarda hem Türk Ticaret Kanunu hem de tarafı olunan uluslararası sözleşmeler (Lahey-Visby Kuralları gibi) bir arada değerlendirilir; bu da sürecin genel ticari uyuşmazlıklara kıyasla daha teknik bir uzmanlık gerektirmesine yol açar. Yük hasarı iddialarında hasarın zamanında tespit ettirilmesi ve ihbar sürelerine uyulması, tazminat hakkının korunması açısından belirleyicidir.',
      },
      {
        type: 'paragraph',
        text: 'Gemi alacaklısı hakkı doğuran taleplerde geminin ihtiyati haciz yoluyla bağlanması gibi hızlı ve etkili tedbirlerin zamanında alınması, alacağın güvence altına alınmasını sağlar. Hukuk büromuz, armatör, taşıyan, yükleten ve sigortacılar dahil denizcilik sektörünün tüm paydaşlarına hukuki destek vermektedir.',
      },
    ],
  },
  {
    slug: 'sigorta-hukuku',
    title: 'Sigorta Hukuku',
    subtitle: 'Tazminat süreçlerinde etkin koruma',
    body: 'Sigorta sözleşmelerinden doğan hak ve yükümlülüklerin belirlenmesi, hasar tespiti, tazminat talepleri ve sigorta şirketleriyle yaşanan uyuşmazlıkların çözümü bu alanın kapsamındadır. Eksik veya hatalı değerlendirmeler ciddi hak kayıplarına yol açabileceğinden sürecin uzmanlıkla yürütülmesi gerekir. Hukuk büromuz, sigorta uyuşmazlıklarında müvekkillerinin haklarını en etkin şekilde korumayı amaçlamaktadır.',
    details: [
      { type: 'heading', text: 'Kapsamındaki Başlıca Konular' },
      {
        type: 'list',
        items: [
          'Trafik ve kasko sigortası tazminat talepleri',
          'Sigorta şirketinin haksız ret kararlarına itiraz',
          'Değer kaybı ve destekten yoksun kalma tazminatı',
          'Hayat, sağlık ve sorumluluk sigortası uyuşmazlıkları',
          'Rücuen tazminat davaları',
          'Sigorta tahkim komisyonu başvuruları',
        ],
      },
      {
        type: 'paragraph',
        text: 'Sigorta şirketleri tarafından yapılan hasar tespiti ve ödeme teklifleri çoğu zaman gerçek zararın altında kalabilmektedir; bu nedenle bağımsız bir hukuki ve teknik değerlendirme yapılmadan sunulan teklifin kabul edilmemesi önemlidir. Poliçe genel ve özel şartlarının, teminat kapsamının ve istisnaların doğru yorumlanması, talebin haklılığının ortaya konmasında belirleyici rol oynar.',
      },
      {
        type: 'paragraph',
        text: 'Sigorta şirketiyle uzlaşma sağlanamayan hallerde Sigorta Tahkim Komisyonu’na başvuru veya dava yoluna gidilebilir. Hukuk büromuz, hasar dosyasının hazırlanmasından tazminat davasının sonuçlandırılmasına kadar sigortalıların ve mağdurların haklarını takip etmektedir.',
      },
    ],
  },
  {
    slug: 'kira-hukuku',
    title: 'Kira Hukuku',
    subtitle: 'Kiracı ve mal sahibi arasında denge',
    body: 'Kira sözleşmelerinin hazırlanması, tahliye davaları, kira tespit ve uyarlama talepleri ile kira alacaklarının tahsili bu alanın temel konularını oluşturur. Taraflar arasındaki ilişkinin hukuka uygun ve dengeli biçimde yürütülmesi, uzun vadeli uyuşmazlıkların önlenmesi açısından önemlidir. Hukuk büromuz, kira hukukuna ilişkin tüm süreçlerde çözüm odaklı destek sunmaktadır.',
    details: [
      { type: 'heading', text: 'Kapsamındaki Başlıca Konular' },
      {
        type: 'list',
        items: [
          'Tahliye taahhüdüne ve temerrüde dayalı tahliye davaları',
          'İhtiyaç nedeniyle (ev sahibinin kullanımı) tahliye',
          'Kira bedelinin tespiti ve uyarlanması davaları',
          'Kira alacağı ve depozito (güvence bedeli) uyuşmazlıkları',
          'İşyeri kiralarında devir ve alt kira meseleleri',
          'Kiralananda ayıp ve kullanım kaynaklı hasar talepleri',
        ],
      },
      {
        type: 'paragraph',
        text: 'Kiracının tahliyesi, ancak kanunda sayılan sebeplere (temerrüt, tahliye taahhüdü, ihtiyaç, yeniden inşa gibi) dayanılarak ve usulüne uygun ihtarname/dava süreciyle sağlanabilir; aksi halde açılan davanın reddiyle zaman kaybı yaşanabilir. Kira bedelinin günün ekonomik koşullarına uyarlanması talepleri de sıkça gündeme gelmekte olup, bu davalarda emsal kira bedelleri ve yasal artış sınırlamaları birlikte değerlendirilir.',
      },
      {
        type: 'paragraph',
        text: 'Hukuk büromuz, hem kiracı hem kiraya veren tarafında; sözleşmenin kurulmasından tahliye ve tazminat süreçlerine kadar kira ilişkisinin her aşamasında hukuki destek sağlamaktadır.',
      },
    ],
  },
  {
    slug: 'sozlesmeler-hukuku',
    title: 'Sözleşmeler Hukuku',
    subtitle: 'Güvenli sözleşmeler, sağlam ilişkiler',
    body: 'Her türlü hukuki ve ticari ilişkinin temelini oluşturan sözleşmelerin doğru hazırlanması, ileride doğabilecek uyuşmazlıkların önlenmesini sağlar. Sözleşme ihlallerinde ise hakların etkin biçimde korunması ve zararların giderilmesi hedeflenir. Hukuk büromuz, sözleşme hazırlama, inceleme ve uyuşmazlık çözümü süreçlerinde kapsamlı danışmanlık vermektedir.',
    details: [
      { type: 'heading', text: 'Kapsamındaki Başlıca Konular' },
      {
        type: 'list',
        items: [
          'Her türlü ticari ve özel sözleşmenin hazırlanması/incelenmesi',
          'Cayma, cezai şart ve tazminat hükümlerinin düzenlenmesi',
          'Sözleşmenin ifa edilmemesinden doğan tazminat davaları',
          'Sözleşmenin uyarlanması (aşırı ifa güçlüğü) talepleri',
          'Ön sözleşme ve niyet mektuplarının hazırlanması',
          'Sözleşmeden dönme ve fesih bildirimleri',
        ],
      },
      {
        type: 'paragraph',
        text: 'Bir sözleşmenin gücü, imzalandığı anda değil ihtilaf çıktığında ortaya çıkar; bu nedenle edimlerin, sürelerin, cezai şartın ve temerrüt hükümlerinin taraflar arasında tartışmaya yer bırakmayacak netlikte kaleme alınması gerekir. Öngörülemeyen ekonomik gelişmeler nedeniyle edimler arasındaki dengenin aşırı ölçüde bozulduğu durumlarda, sözleşmenin uyarlanması veya sona erdirilmesi de hukuken talep edilebilir.',
      },
      {
        type: 'paragraph',
        text: 'Hukuk büromuz, sözleşme öncesi risk analizinden ihlal sonrası tazminat ve fesih süreçlerine kadar; bireysel ve ticari nitelikteki tüm sözleşme ilişkilerinde önleyici ve çözüm odaklı hukuki destek sunmaktadır.',
      },
    ],
  },
  {
    slug: 'gayrimenkul-hukuku',
    title: 'Gayrimenkul Hukuku',
    subtitle: 'Taşınmaz işlemlerinde tam güvence',
    body: 'Taşınmaz alım satımı, tapu iptali ve tescil davaları, kat mülkiyeti uyuşmazlıkları ve imar uygulamalarından doğan sorunlar bu alanın kapsamındadır. Yüksek maddi değer içeren işlemlerde hukuki risklerin önceden belirlenmesi büyük önem taşır. Hukuk büromuz, gayrimenkul işlemlerinin güvenli şekilde yürütülmesi için danışmanlık ve dava takibi hizmeti sunmaktadır.',
    details: [
      { type: 'heading', text: 'Kapsamındaki Başlıca Konular' },
      {
        type: 'list',
        items: [
          'Tapu iptali ve tescil davaları',
          'Kat mülkiyeti ve kat irtifakı uyuşmazlıkları',
          'Kamulaştırma ve kamulaştırmasız el atma davaları',
          'Ortaklığın giderilmesi (paylı mülkiyet) davaları',
          'İmar uygulamalarından doğan uyuşmazlıklar',
          'Ön ödemeli (kat karşılığı) inşaat sözleşmeleri',
        ],
      },
      {
        type: 'paragraph',
        text: 'Bir taşınmazın alım satımı öncesinde tapu kaydının, ipotek ve haciz şerhlerinin, imar durumunun ve varsa kat mülkiyeti kütüğünün ayrıntılı biçimde incelenmesi, ileride ortaya çıkabilecek hak kayıplarının önüne geçer. Tapu iptali ve tescil davaları genellikle hile, ehliyetsizlik veya vekalet görevinin kötüye kullanılması gibi iddialara dayanır ve uzun soluklu, delil yoğun bir süreç gerektirir.',
      },
      {
        type: 'paragraph',
        text: 'Kat karşılığı inşaat sözleşmelerinde yüklenicinin edimini zamanında ve sözleşmeye uygun ifa etmemesi, arsa sahipleri açısından ciddi zararlara yol açabilir. Hukuk büromuz, taşınmaz alım satımından kat karşılığı inşaat sözleşmelerine, imar uyuşmazlıklarından kamulaştırma davalarına kadar geniş bir yelpazede hukuki destek sunmaktadır.',
      },
    ],
  },
  {
    slug: 'idare-hukuku',
    title: 'İdare Hukuku',
    subtitle: 'Kamu işlemlerine karşı etkin başvuru',
    body: 'İdari işlemlerin iptali, tam yargı davaları, kamu cezalarına karşı başvurular ve ruhsat işlemlerinden doğan uyuşmazlıklar bu alanın konusudur. Sürelerin kısa ve usul kurallarının sıkı olması nedeniyle sürecin dikkatle takip edilmesi gerekir. Hukuk büromuz, idare hukukundan doğan uyuşmazlıklarda etkin temsil sağlamaktadır.',
    details: [
      { type: 'heading', text: 'Kapsamındaki Başlıca Konular' },
      {
        type: 'list',
        items: [
          'İdari işlemin iptali davaları (İYUK m. 2)',
          'Tam yargı (idarenin sorumluluğuna dayalı tazminat) davaları',
          'İdari para cezalarına karşı itiraz ve dava',
          'Ruhsat, lisans ve izin iptali işlemleri',
          'Memur ve kamu görevlilerinin disiplin cezalarına itiraz',
          'İhale işlemlerine karşı başvuru ve dava süreçleri',
        ],
      },
      {
        type: 'paragraph',
        text: 'İdari yargıda dava açma süresi kural olarak 60 gün olup bu süre hak düşürücü niteliktedir; sürenin kaçırılması, işlem açıkça hukuka aykırı olsa dahi iptalinin istenmesini imkânsız hale getirir. Bu nedenle idari bir işlemle karşılaşıldığında, işlemin tebliğinden itibaren vakit kaybetmeden hukuki değerlendirme yapılması büyük önem taşır.',
      },
      {
        type: 'paragraph',
        text: 'İdarenin hizmet kusuru veya kusursuz sorumluluğu nedeniyle uğranılan zararların tazmini için açılan tam yargı davalarında, zararın idarenin eylem ya da işleminden kaynaklandığının ortaya konması gerekir. Hukuk büromuz, gerçek ve tüzel kişilerin kamu kurumlarıyla yaşadığı uyuşmazlıklarda idari başvuru ve dava süreçlerinin tamamını yürütmektedir.',
      },
    ],
  },
  {
    slug: 'vergi-hukuku',
    title: 'Vergi Hukuku',
    subtitle: 'Vergi uyuşmazlıklarında doğru strateji',
    body: 'Vergi cezaları, tarhiyat işlemleri, uzlaşma başvuruları ve vergi davaları bu alanın temelini oluşturur. Mali yükümlülüklerin doğru değerlendirilmesi ve hak arama yollarının etkin kullanılması önemlidir. Hukuk büromuz, vergi uyuşmazlıklarında müvekkillerine stratejik hukuki destek sunmaktadır.',
    details: [
      { type: 'heading', text: 'Kapsamındaki Başlıca Konular' },
      {
        type: 'list',
        items: [
          'Vergi/ceza ihbarnamelerine karşı dava açılması',
          'Uzlaşma başvurusu ve uzlaşma komisyonu süreci',
          'Vergi incelemesi ve arama sırasında mükellef hakları',
          'Vergi mahkemesi ve Danıştay aşamalarında temsil',
          'Ödeme emrine karşı iptal davası',
          'Vergi suçlarına (kaçakçılık) ilişkin savunma',
        ],
      },
      {
        type: 'paragraph',
        text: 'Vergi/ceza ihbarnamesinin tebliğinden itibaren işleyen 30 günlük süre içinde ya dava açılabilir ya da uzlaşma yoluna gidilebilir; bu iki yol birbirini dışladığından hangi stratejinin izleneceğinin mükellefin somut durumuna göre dikkatle belirlenmesi gerekir. Vergi incelemesi sürecinde mükellefin bilgi ve belge isteme, tutanaklara itiraz gibi haklarının bilinmesi de tarhiyatın sonucunu etkileyebilir.',
      },
      {
        type: 'paragraph',
        text: 'Ödeme emrine karşı süresinde dava açılmaması, borcun kesinleşmesi ve doğrudan cebri icraya geçilmesi sonucunu doğurabilir. Hukuk büromuz, mükelleflerin vergi incelemesinden dava ve uzlaşma süreçlerine kadar tüm aşamalarda haklarını korumaktadır.',
      },
    ],
  },
  {
    slug: 'kooperatif-hukuku',
    title: 'Kooperatif Hukuku',
    subtitle: 'Kooperatiflerde mevzuata uygun yönetim',
    body: 'Kooperatiflerin kuruluşu, genel kurul süreçleri, ortaklık ilişkileri ve yönetsel uyuşmazlıklar bu kapsamda ele alınır. Mevzuata aykırı işlemler ciddi sorumluluklar doğurabileceğinden hukuki danışmanlık büyük önem taşır. Hukuk büromuz, kooperatiflerin sağlıklı işleyişi için kapsamlı destek sağlamaktadır.',
    details: [
      { type: 'heading', text: 'Kapsamındaki Başlıca Konular' },
      {
        type: 'list',
        items: [
          'Kooperatif ana sözleşmesi hazırlanması ve tescili',
          'Genel kurul kararlarının iptali davaları',
          'Ortaklıktan çıkarma ve ortaklık payının iadesi',
          'Yönetim ve denetim kurulu üyelerinin sorumluluğu',
          'Kooperatifin feshi ve tasfiyesi',
          'Konut yapı kooperatiflerinde tapu devri uyuşmazlıkları',
        ],
      },
      {
        type: 'paragraph',
        text: 'Özellikle konut yapı kooperatiflerinde, ortaklara taşınmaz tapusunun devredilmesi sürecinde yaşanan gecikmeler ve yönetim kurulu kararlarının usulsüzlüğü sık karşılaşılan uyuşmazlık kaynaklarıdır. Genel kurul toplantılarının kanun ve ana sözleşmede öngörülen usule uygun yapılmaması, alınan kararların iptaline yol açabilmektedir.',
      },
      {
        type: 'paragraph',
        text: 'Yönetim ve denetim kurulu üyelerinin görevlerini gereği gibi yerine getirmemesi, kooperatif ve ortaklara karşı şahsi sorumluluk doğurabilir. Hukuk büromuz, kooperatiflerin kuruluşundan tasfiyesine kadar geçen süreçte hem tüzel kişiliğe hem de ortaklarına hukuki danışmanlık vermektedir.',
      },
    ],
  },
  {
    slug: 'marka-ve-patent',
    title: 'Marka ve Patent',
    subtitle: 'Tescilden korumaya tam destek',
    body: 'Marka ve patent başvurularının hazırlanması, tescil süreçlerinin takibi, itiraz ve hükümsüzlük davaları ile ihlallerin önlenmesine yönelik hukuki işlemler bu alanın kapsamındadır. Hukuk büromuz, sınai mülkiyet haklarının korunması ve ticari değerinin artırılması için profesyonel hizmet sunmaktadır.',
    details: [
      { type: 'heading', text: 'Kapsamındaki Başlıca Konular' },
      {
        type: 'list',
        items: [
          'Marka ve patent tescil başvurularının hazırlanması',
          'Türk Patent ve Marka Kurumu nezdinde itiraz süreçleri',
          'Marka hakkına tecavüzün tespiti ve önlenmesi davaları',
          'Marka/patent hükümsüzlüğü davaları',
          'Lisans ve know-how sözleşmelerinin düzenlenmesi',
          'Uluslararası (Madrid Protokolü, PCT) başvuru süreçleri',
        ],
      },
      {
        type: 'paragraph',
        text: 'Bir markanın tescil başvurusu yapılmadan önce benzer marka araştırması yapılması, hem itiraz riskini azaltır hem de ileride yapılacak yatırımın (marka bilinirliği, reklam) korunmasını güvence altına alır. Patent başvurularında ise buluşun yenilik ve tekniğin bilinen durumunu aşma kriterlerini karşıladığının teknik ve hukuki açıdan birlikte değerlendirilmesi gerekir.',
      },
      {
        type: 'paragraph',
        text: 'Tescilli bir markaya veya patente yönelik ihlal tespit edildiğinde, ihtiyati tedbir ve gümrüklerde el koyma gibi hızlı hukuki araçlarla zararın büyümeden durdurulması mümkündür. Hukuk büromuz, sınai mülkiyet haklarının tescilinden ihlallere karşı korunmasına kadar tüm süreçte müvekkillerine profesyonel destek sunmaktadır.',
      },
    ],
  },
  {
    slug: 'spor-hukuku',
    title: 'Spor Hukuku',
    subtitle: 'Spor dünyasında hukuki güvence',
    body: 'Sporcu sözleşmeleri, transfer uyuşmazlıkları, disiplin soruşturmaları ve federasyon kararlarına karşı başvurular bu alanın konusudur. Spor hukukunun kendine özgü kuralları ve hızlı işleyen yapısı nedeniyle uzmanlık gerektirir. Hukuk büromuz, spor alanındaki uyuşmazlıklarda etkin temsil sağlamaktadır.',
    details: [
      { type: 'heading', text: 'Kapsamındaki Başlıca Konular' },
      {
        type: 'list',
        items: [
          'Sporcu ve teknik direktör sözleşmelerinin hazırlanması',
          'Transfer ve bonservis uyuşmazlıkları',
          'Kulüp-sporcu arasındaki alacak davaları',
          'Disiplin kurulu kararlarına itiraz',
          'Tahkim Kurulu ve Spor Tahkim Mahkemesi (CAS) başvuruları',
          'Menajerlik sözleşmelerinden doğan uyuşmazlıklar',
        ],
      },
      {
        type: 'paragraph',
        text: 'Spor hukukunda uyuşmazlıkların önemli bir bölümü, ilgili federasyonun kendi iç hukuku ve tahkim mekanizmaları (Tahkim Kurulu, CAS) çerçevesinde çözülür; bu nedenle sürecin genel mahkeme usullerinden farklı, kısa sürelere tabi ve teknik bir yapıya sahip olduğu unutulmamalıdır. Sporcu sözleşmelerinde ücret, imaj hakları, sakatlık durumu ve fesih şartlarının net biçimde düzenlenmesi, ileride doğabilecek uyuşmazlıkların önüne geçer.',
      },
      {
        type: 'paragraph',
        text: 'Hukuk büromuz, sporcular, teknik heyetler ve kulüpler arasındaki sözleşme müzakerelerinden disiplin ve tahkim süreçlerine kadar spor hukukunun tüm alanlarında hukuki temsil sağlamaktadır.',
      },
    ],
  },
  {
    slug: 'tazminat-hukuku',
    title: 'Tazminat Hukuku',
    subtitle: 'Zararın adil ve tam giderimi',
    body: 'Haksız fiillerden, trafik kazalarından, iş kazalarından ve sözleşme ihlallerinden doğan maddi ve manevi zararların tazmini bu alanın kapsamındadır. Zararın doğru hesaplanması ve sorumluların belirlenmesi büyük önem taşır. Hukuk büromuz, tazminat taleplerinin en etkin şekilde sonuçlandırılması için hukuki destek sunmaktadır.',
    details: [
      { type: 'heading', text: 'Kapsamındaki Başlıca Konular' },
      {
        type: 'list',
        items: [
          'Trafik kazalarından doğan maddi/manevi tazminat',
          'İş kazası ve meslek hastalığı tazminatları',
          'Malpraktis (hatalı tıbbi müdahale) tazminatı',
          'Haksız fiil ve kişilik haklarına saldırı davaları',
          'Destekten yoksun kalma tazminatı',
          'Trafik kazası değer kaybı talepleri',
        ],
      },
      {
        type: 'paragraph',
        text: 'Tazminat davalarında en kritik aşama, zararın (maddi kaybın, iş gücü kaybının, tedavi giderlerinin) bilirkişi incelemesiyle doğru ve eksiksiz hesaplanmasıdır; eksik veya hatalı bir talep, hak kaybına yol açabileceği gibi kabul edilebilir bir kısmın reddine de neden olabilir. Kusur oranının doğru tespiti de gerek dava içinde gerekse sigorta şirketleriyle yürütülen süreçlerde belirleyicidir.',
      },
      {
        type: 'paragraph',
        text: 'Manevi tazminat taleplerinde ise olayın ağırlığı, tarafların sosyal ve ekonomik durumu gibi unsurlar mahkemece takdir edilir; bu nedenle talebin somut olayın özellikleriyle desteklenmiş şekilde ortaya konması gerekir. Hukuk büromuz, zarar gören kişilerin haklarının tam ve adil biçimde tazmin edilmesi için sürecin başından itibaren aktif rol almaktadır.',
      },
    ],
  },
  {
    slug: 'insaat-hukuku',
    title: 'İnşaat Hukuku',
    subtitle: 'Projelerde hukuki sağlamlık',
    body: 'İnşaat sözleşmeleri, yüklenici ve iş sahibi uyuşmazlıkları, ayıplı imalat iddiaları ve proje gecikmelerinden doğan sorumluluklar bu alanın temelini oluşturur. Büyük ölçekli projelerde hukuki risklerin doğru yönetilmesi kritik öneme sahiptir. Hukuk büromuz, inşaat hukukuna ilişkin tüm süreçlerde danışmanlık ve dava takibi hizmeti vermektedir.',
    details: [
      { type: 'heading', text: 'Kapsamındaki Başlıca Konular' },
      {
        type: 'list',
        items: [
          'İnşaat sözleşmelerinin (eser sözleşmesi) hazırlanması',
          'Ayıplı imalat ve eksik iş bedeli talepleri',
          'İş sahibi–yüklenici arasındaki hakediş uyuşmazlıkları',
          'Proje gecikmesi nedeniyle gecikme cezası talepleri',
          'Kat karşılığı inşaat sözleşmesi uyuşmazlıkları',
          'İş güvenliği ihlallerinden doğan sorumluluk',
        ],
      },
      {
        type: 'paragraph',
        text: 'İnşaat projelerinde uyuşmazlıkların büyük bölümü, sözleşmede hakediş ödeme takviminin, iş programının ve gecikme/ceza şartlarının net düzenlenmemesinden kaynaklanır. Ayıplı imalat iddialarında bağımsız bilirkişi incelemesiyle ayıbın niteliğinin ve giderim bedelinin ortaya konması, tarafların haklarının doğru belirlenmesi açısından esastır.',
      },
      {
        type: 'paragraph',
        text: 'Büyük ölçekli projelerde iş sahibi, yüklenici ve alt yüklenici arasındaki çok taraflı ilişkilerin doğru yönetilmesi, olası bir uyuşmazlıkta sorumluluğun kime ait olduğunun tespitini kolaylaştırır. Hukuk büromuz, inşaat sözleşmelerinin hazırlanmasından hakediş ve ayıp uyuşmazlıklarına kadar sürecin tamamında hukuki destek sunmaktadır.',
      },
    ],
  },
  {
    slug: 'tip-hukuku',
    title: 'Tıp Hukuku',
    subtitle: 'Sağlık hizmetlerinde hakların korunması',
    body: 'Tıbbi müdahalelerden doğan sorumluluklar, malpraktis iddiaları, hasta hakları ihlalleri ve sağlık kuruluşlarına karşı açılan davalar bu alanın kapsamındadır. Tıbbi ve hukuki değerlendirmenin birlikte yürütülmesi gerekir. Hukuk büromuz, sağlık hukukuna ilişkin uyuşmazlıklarda titiz bir çalışma yürütmektedir.',
    details: [
      { type: 'heading', text: 'Kapsamındaki Başlıca Konular' },
      {
        type: 'list',
        items: [
          'Hatalı tıbbi müdahale (malpraktis) tazminat davaları',
          'Aydınlatılmış onam eksikliğinden doğan sorumluluk',
          'Hasta hakları ihlallerine karşı başvurular',
          'Estetik ve diş hekimliği uygulamalarından doğan uyuşmazlıklar',
          'Sağlık Bakanlığı Bilirkişilik Kurulu süreçleri',
          'Özel hastane ve hekimlerin hukuki/cezai sorumluluğu',
        ],
      },
      {
        type: 'paragraph',
        text: 'Malpraktis davalarının en kritik unsuru, gerçekleştirilen tıbbi müdahalenin güncel tıp biliminin ve mesleki özen yükümlülüğünün gerektirdiği standartlara uygun olup olmadığının bağımsız bilirkişi heyetlerince tespit edilmesidir. Hastanın işlem öncesinde risklerin tamamı konusunda usulüne uygun aydınlatılıp aydınlatılmadığı (aydınlatılmış onam) da sorumluluğun belirlenmesinde ayrı bir başlık olarak değerlendirilir.',
      },
      {
        type: 'paragraph',
        text: 'Bu tür davalarda tıbbi kayıtların (epikriz, ameliyat notu, görüntüleme sonuçları) eksiksiz temin edilmesi ve alanında uzman bilirkişilerden rapor alınması, sürecin sağlıklı ilerlemesi için vazgeçilmezdir. Hukuk büromuz, hasta ve yakınlarının haklarının tıbbi verilerle desteklenmiş, güçlü bir hukuki zeminde savunulmasını sağlamaktadır.',
      },
    ],
  },
  {
    slug: 'vakif-ve-dernekler-hukuku',
    title: 'Vakıf ve Dernekler Hukuku',
    subtitle: 'Sivil toplum için hukuki rehberlik',
    body: 'Vakıf ve derneklerin kuruluşu, yönetimi, denetimi ve faaliyetlerinden doğan hukuki süreçler bu alanın konusudur. Mevzuata uygun hareket edilmemesi idari yaptırımlara yol açabilir. Hukuk büromuz, sivil toplum kuruluşlarının güvenli ve sürdürülebilir şekilde faaliyet göstermesi için danışmanlık sunmaktadır.',
    details: [
      { type: 'heading', text: 'Kapsamındaki Başlıca Konular' },
      {
        type: 'list',
        items: [
          'Vakıf senedi ve dernek tüzüğü hazırlanması',
          'Genel kurul süreçleri ve karar iptali davaları',
          'Yönetim organlarının sorumluluğu',
          'Dernekler masası denetimlerine karşı savunma',
          'Vakıf/dernek feshi ve tasfiye işlemleri',
          'Kamu yararına çalışan dernek statüsü başvuruları',
        ],
      },
      {
        type: 'paragraph',
        text: 'Vakıf ve derneklerin faaliyetlerini sürdürebilmesi, tüzük ve senedin mevzuata uygun hazırlanmasının yanı sıra defter tutma, bildirim ve genel kurul yükümlülüklerinin de eksiksiz yerine getirilmesine bağlıdır; bu yükümlülüklerin ihmali idari para cezalarından faaliyetin durdurulmasına kadar uzanan sonuçlar doğurabilir. Denetimler sırasında tespit edilen usulsüzlüklere karşı savunma hakkının zamanında ve doğru kullanılması önemlidir.',
      },
      {
        type: 'paragraph',
        text: 'Yönetim kurulu üyelerinin görevlerini özenle yerine getirmemesi, hem tüzel kişiliğe hem üçüncü kişilere karşı şahsi sorumluluk doğurabilir. Hukuk büromuz, sivil toplum kuruluşlarının kuruluşundan güncel mevzuata uyumuna kadar geniş kapsamlı danışmanlık hizmeti vermektedir.',
      },
    ],
  },
  {
    slug: 'tuketici-hukuku',
    title: 'Tüketici Hukuku',
    subtitle: 'Tüketici haklarında güçlü savunma',
    body: 'Ayıplı mal ve hizmetler, mesafeli satış sözleşmeleri, garanti kapsamı ve tüketici uyuşmazlıklarından doğan başvurular bu alanın kapsamındadır. Hak kayıplarının önlenmesi için sürecin doğru yürütülmesi gerekir. Hukuk büromuz, tüketici haklarının korunması amacıyla etkin hukuki destek sağlamaktadır.',
    details: [
      { type: 'heading', text: 'Kapsamındaki Başlıca Konular' },
      {
        type: 'list',
        items: [
          'Ayıplı mal ve hizmetten doğan iade/tazminat talepleri',
          'Mesafeli ve kapıdan satış sözleşmelerinden cayma hakkı',
          'Tüketici hakem heyeti başvuruları',
          'Kredi, konut finansmanı ve kart sözleşmesi uyuşmazlıkları',
          'Ön ödemeli konut satışlarından doğan uyuşmazlıklar',
          'Haksız ticari uygulamalara karşı başvurular',
        ],
      },
      {
        type: 'paragraph',
        text: 'Tüketici uyuşmazlıklarında, parasal sınırın altındaki uyuşmazlıklar için tüketici hakem heyetine, üzerindekiler için ise tüketici mahkemesine başvurulması zorunludur; başvuru yolunun ve süresinin doğru belirlenmesi, hakkın kaybedilmemesi açısından önemlidir. Ayıplı mal ve hizmetlerde tüketicinin bedel iadesi, ayıpsız misliyle değişim, ücretsiz onarım veya bedel indirimi seçimlik haklarından hangisini kullanacağına karar vermesi de sürecin başında netleştirilmesi gereken bir husustur.',
      },
      {
        type: 'paragraph',
        text: 'Hukuk büromuz, tüketicilerin satıcı, sağlayıcı ve finans kuruluşlarıyla yaşadığı uyuşmazlıklarda; başvuru dilekçesinin hazırlanmasından dava sürecine kadar haklarının etkin biçimde savunulmasını sağlamaktadır.',
      },
    ],
  },
  {
    slug: 'anayasa-mahkemesi-bireysel-basvuru',
    title: 'Anayasa Mahkemesi Bireysel Başvuru',
    subtitle: 'Temel haklar için en yüksek başvuru yolu',
    body: 'Temel hak ve özgürlüklerin kamu gücü tarafından ihlal edildiği iddiasıyla yapılan bireysel başvuruların hazırlanması, kabul edilebilirlik kriterlerinin sağlanması ve başvuru sürecinin titizlikle yürütülmesi bu alanın kapsamındadır. Hukuk büromuz, Anayasa Mahkemesi nezdindeki bireysel başvurularda kapsamlı hukuki değerlendirme ve temsil hizmeti sunmaktadır.',
    details: [
      { type: 'heading', text: 'Kapsamındaki Başlıca Konular' },
      {
        type: 'list',
        items: [
          'Adil yargılanma hakkının ihlaline dayalı başvurular',
          'Makul sürede yargılanma hakkının ihlali',
          'Mülkiyet hakkı ve ifade özgürlüğü ihlalleri',
          'Kişi hürriyeti ve güvenliği hakkının ihlali',
          'Kabul edilebilirlik kriterlerinin değerlendirilmesi',
          'Başvuru sonrası tazminat ve yeniden yargılama talepleri',
        ],
      },
      {
        type: 'paragraph',
        text: 'Anayasa Mahkemesi’ne bireysel başvuru, olağan kanun yollarının (istinaf, temyiz) tüketilmiş olması ve kesin kararın öğrenilmesinden itibaren 30 gün içinde yapılmış olması şartına bağlıdır; bu süre ve şartlara uyulmaması başvurunun kabul edilemez bulunmasına yol açar. Başvuru dilekçesinde ihlal iddiasının hangi anayasal hakla ve hangi somut olayla ilişkilendirildiğinin açık ve gerekçeli biçimde ortaya konması, esas incelemeye geçilebilmesi için belirleyicidir.',
      },
      {
        type: 'paragraph',
        text: 'Bir hak ihlali tespit edildiğinde Anayasa Mahkemesi; yeniden yargılama, tazminata hükmedilmesi veya ihlalin devamının önlenmesi gibi sonuçlara karar verebilir. Hukuk büromuz, olağan kanun yollarının tüketilmesinden bireysel başvurunun hazırlanmasına kadar süreci bütüncül biçimde yürütmektedir.',
      },
    ],
  },
  {
    slug: 'konkordato',
    title: 'Konkordato',
    subtitle: 'Mali yeniden yapılanmada stratejik çözüm',
    body: 'Konkordato, mali sıkıntı yaşayan borçluların faaliyetlerini sürdürebilmesi ve alacaklıların da belirli ölçüde tatmin edilmesini amaçlayan bir yeniden yapılandırma mekanizmasıdır. Başvuru sürecinin hazırlanması, mahkeme aşamalarının takibi ve komiser raporlarının değerlendirilmesi büyük titizlik gerektirir. Doğru planlama yapılmadığı takdirde süreç başarısızlıkla sonuçlanabilir. Hukuk büromuz, konkordato başvurularının hazırlanmasından tasdik sürecine kadar tüm aşamalarda hukuki danışmanlık sağlamaktadır.',
    details: [
      { type: 'heading', text: 'Kapsamındaki Başlıca Konular' },
      {
        type: 'list',
        items: [
          'Konkordato ön projesi ve mali tablonun hazırlanması',
          'Geçici ve kesin mühlet başvurusu',
          'Komiser raporlarının incelenmesi ve itiraz',
          'Alacaklılar toplantısının yönetimi',
          'Konkordatonun tasdiki ve tasdik sonrası denetim',
          'Konkordatonun feshi ve iflasın istenmesi',
        ],
      },
      {
        type: 'paragraph',
        text: 'Konkordato başvurusunun kalbi, borçlunun borçlarını hangi oranda ve hangi vadede ödeyeceğini, bunun için gerekli mali kaynağı nasıl sağlayacağını gösteren konkordato ön projesidir; bu projenin gerçekçi ve uygulanabilir olmaması, geçici mühlet aşamasında dahi talebin reddine yol açabilir. Süreç boyunca borçlunun faaliyetlerini komiser gözetiminde sürdürmesi ve alacaklılarla şeffaf iletişim kurması, tasdik ihtimalini artıran unsurlardır.',
      },
      {
        type: 'paragraph',
        text: 'Alacaklı tarafında ise konkordato ilanı, alacağın bildirilmesi ve alacaklılar toplantısında oy kullanılması gibi süreçlerin takip edilmemesi, alacaklının nisaba katılamamasına ve hak kaybına yol açabilir. Hukuk büromuz, hem borçlu hem alacaklı vekilliğinde konkordato sürecinin teknik ve hukuki gerekliliklerini eksiksiz yönetmektedir.',
      },
    ],
  },
]

const address =
  'Hacı İlyas Mahallesi 4. Tan Sokak No:6 Kanburoğlu Kardeşler İş Hanı Kat: 3 Daire: 10 No: 302 Osmangazi/Bursa'

export const firmInfo = {
  name: 'Ramazan Şahin Hukuk Bürosu',
  founder: 'Avukat Ramazan Şahin',
  phone: '+90 541 383 62 44',
  email: 'info@avukatramazansahin.com.tr',
  address,
  // Google'ın evrensel harita bağlantısı: telefonda Google Maps uygulaması
  // yüklüyse otomatik olarak onu açar, yoksa tarayıcıda haritayı gösterir.
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
  // Gömülü harita (iframe) için sadeleştirilmiş sorgu — tam adresteki
  // kat/daire detayları Google'ın geocoding'ini şaşırtıp haritayı tüm
  // Türkiye'yi kapsayacak şekilde uzaklaştırıyordu.
  mapQuery: 'Kanburoğlu Kardeşler İş Hanı, Osmangazi, Bursa',
  // Yalnızca gerçekten var olan hesaplar eklenir — eski sitedeki
  // Facebook/Twitter/YouTube/LinkedIn ikonları hiçbir zaman gerçek bir
  // hesaba bağlanmamış, boş şablon ikonlarıydı.
  social: {
    instagram: 'https://www.instagram.com/av.ramazansahintr/',
  },
}

export const values = [
  {
    title: 'Güven ve Sadakat',
    text: 'Müvekkil ile avukat arasındaki ilişkinin temelinin "sır saklama" ve "sadakat" olduğuna inanıyoruz. Dosyanız bizimle tam güvendedir.',
  },
  {
    title: 'Şeffaflık',
    text: 'Sürecin her aşamasında müvekkillerimizi bilgilendiriyor; ihtimalleri, riskleri ve beklentileri tüm çıplaklığıyla paylaşıyoruz.',
  },
  {
    title: 'Titizlik ve Detaycılık',
    text: 'Hukukta bir kelimenin, bir tarihin veya bir detayın tüm gidişatı değiştirebileceğini biliyoruz. Bu yüzden her vakayı bir "proje" disipliniyle inceliyoruz.',
  },
  {
    title: 'Bağımsızlık',
    text: 'Meslek onurunu her türlü menfaatin üzerinde tutarak, yargı bağımsızlığına ve savunma hakkının kutsallığına ödün vermeden bağlı kalıyoruz.',
  },
]

export const faq: { q: string; a: string }[] = [
  {
    q: 'Vekaletname nasıl çıkartılır ve nelere dikkat etmek gerekir?',
    a: 'Bir avukata vekâlet verebilmek için, kimlik kartı ya da yerine geçebilen ehliyet veya pasaport gibi resmi bir belgeyle bizzat notere başvurulması gerekmektedir. Yurt dışında bulunan kişiler ise vekâletname düzenleme işlemini konsolosluklar aracılığıyla gerçekleştirebilir. Vekâletin hazırlanabilmesi için, yetki verilecek avukatın T.C. kimlik numarası ile adı ve soyadının ibraz edilmesi zorunludur. Hukuki ihtiyaçlara göre, tüm süreçleri kapsayan genel dava vekâletnamesi düzenlenebileceği gibi yalnızca belirli bir işlem veya dava için geçerli özel vekâletname de hazırlanabilir.',
  },
  {
    q: 'Dava açarken para yatırılır mı?',
    a: 'Dava açılırken, dava türüne göre belirlenen nispi veya maktu harçların ödenmesi zorunludur. Ayrıca yargılama sürecinde yapılacak tebligat ve diğer işlemler için kullanılmak üzere gider avansının mahkemeye yatırılması gerekmektedir.',
  },
  {
    q: 'Dava masrafları geri alınabilir mi?',
    a: 'Davanın kabul edilmesi halinde yatırılan harç ve giderler dava sonunda haksız çıkan taraftan tahsil edilmektedir. Ancak avukatınıza ödediğiniz vekalet ücreti, noter ücreti, dava sırasında yapmış olduğunuz ulaşım vb. kişisel harcamalar bu kapsamda değildir.',
  },
  {
    q: 'Avukatlık ücreti ne kadardır ve neye göre belirlenir?',
    a: 'Avukatlık ücreti, Türkiye Barolar Birliği tarafından her yıl yayımlanan Avukatlık Asgari Ücret Tarifesi\'nde belirlenen asgari tutarın altında olmamak kaydıyla serbestçe kararlaştırılabilir. Ücret; davanın veya hukuki işlemin niteliğine, karmaşıklığına, süresine ve gerektirdiği emek ile sorumluluğa göre farklılık gösterebilir.',
  },
  {
    q: 'Danışma ücretli midir?',
    a: 'Avukat-müvekkil ilişkisinin temelini güven ve şeffaflık oluşturur. Bu doğrultuda sunulan hukuki danışmanlık hizmetleri ücrete tabidir. Danışma ücreti; hukuki sorunun niteliğine, görüşme süresine ve harcanacak emek ile uzmanlığa göre belirlenir.',
  },
  {
    q: 'Avukat tutmak zorunlu mudur?',
    a: 'Türk hukukunda, kural olarak avukatla temsil zorunluluğu bulunmamaktadır. Bununla birlikte hukuki süreçlerin niteliği gereği dava ve işlemlerin doğru şekilde yürütülmesi uzmanlık ve deneyim gerektirir. Sürecin başlangıcında yapılan küçük bir hata veya kaçırılan bir süre, telafisi güç hatta mümkün olmayan hak kayıplarına yol açabilir.',
  },
]

export const konkordatoArticle: {
  title: string
  slug: string
  intro: string
  blocks: ArticleBlock[]
} = {
  title: 'Konkordato Sürecinde Alacaklıların Akıbeti',
  slug: 'konkordato-surecinde-alacaklilarin-akibeti',
  intro:
    'Konkordato ilan eden bir borçlu karşısında alacaklıların hakları ne olur, süreç nasıl işler? Alacak bildirimi, kayıt kabul davası ve kesin mühlet sürecine dair bilinmesi gerekenler.',
  blocks: [
    {
      type: 'paragraph',
      text: 'Konkordato, borçlunun mali durumunun bozulması hâlinde alacaklılarla uzlaşarak borçlarını yeniden yapılandırmasına olanak tanıyan hukuki bir koruma mekanizmasıdır. Ancak bu süreç sadece borçluyu değil, alacaklıları da doğrudan etkilemektedir. Alacaklılar, borçlunun ödeme yükümlülüklerini ertelemesi veya azaltması nedeniyle ciddi risklerle karşı karşıya kalmaktadır.',
    },
    {
      type: 'paragraph',
      text: 'Son yıllarda Türkiye\'de yaşanan ekonomik dalgalanmalar, döviz kurlarındaki artış, enflasyon oranlarındaki yükselme ve faiz oranlarının dengesizliği, birçok işletmeyi mali açıdan zor duruma düşürmüştür. Bu kapsamda, borçlarını ödemekte güçlük çeken şirketlerin konkordato ilan etme taleplerinde ciddi bir artış yaşanmıştır. Her ne kadar konkordato süreci esasen borçlu şirketin korunması amacıyla yürütülse de, bu sürecin alacaklılar üzerindeki etkileri de oldukça büyüktür.',
    },
    {
      type: 'paragraph',
      text: 'Konkordato süreci genellikle borçlu tarafından gizli ve sessiz şekilde başlatılmakta, ilan edilene kadar kamuya duyurulmamaktadır. Bu durum, alacaklıların hazırlıksız yakalanmasına ve panik havasının oluşmasına neden olmaktadır. Sürecin ilan edilmesiyle birlikte alacaklılar, alacaklarının tahsili konusunda belirsizlik yaşamaya başlar. Özellikle küçük ve orta ölçekli işletmeler, bu belirsizlikten en çok etkilenen gruplar arasında yer alır.',
    },
    {
      type: 'paragraph',
      text: 'Konkordato uygulaması, Türk İcra ve İflas Hukuku çerçevesinde hem borçlunun hem de alacaklının haklarını dengelemeye çalışan istisnai bir yol olsa da uygulamada bazı yapısal sorunlar söz konusudur:',
    },
    {
      type: 'list',
      items: [
        'Sürecin başlangıcında alacaklıların haberdar olmaması',
        'Geçici mühlet sürecinde alacaklıların icra yollarının kapanması',
        'Komiser raporlarının yeterli denetimden geçmemesi',
        'Kötü niyetli borçluların konkordato kurumunu suistimal edebilmesi',
      ],
    },
    { type: 'heading', text: 'Alacaklı olduğum firma konkordato ilan ettiğinde ne yapmalıyım?' },
    {
      type: 'paragraph',
      text: 'Bilindiği üzere geçici mühlet süresi üç ay olup, mahkeme kararıyla iki aya kadar uzatılabilir. Bu sürede borçlunun malvarlığı koruma altına alınır, icra takipleri durdurulur ve konkordato komiseri görevlendirilir. Alacaklıların ilk olarak yapması gereken şey, işin uzmanı olan bir avukat aracılığıyla vakit kaybetmeden geçici mühlet kararına itiraz edip ilgili mahkemeye müdahillik talebinde bulunarak davaya müdahil olmalıdır.',
    },
    {
      type: 'paragraph',
      text: 'Alacaklı, davaya müdahil olduktan sonra ilk olarak konkordato ilanı için başvuru şartlarının en önemli unsuru olan Konkordato Ön Projesini incelemelidir. Bu proje, borçlunun borçlarını hangi oranda veya vadede ödeyeceğini, alacaklıların alacaklarından hangi oranda vazgeçmiş olacaklarını ve ödemeler için gerekli mali kaynağın nasıl sağlanacağını gösterir. Alacaklının dikkat etmesi gereken en önemli husus, kendi alacağının ön projede doğru şekilde yer alıp almadığıdır.',
    },
    {
      type: 'paragraph',
      text: 'Alacaklı, bu aşamaları tamamladıktan sonra kesin mühlet hakkında karar duruşması için hazırlık yapmalıdır. Konkordato başvurusunun yasal şartlara uygun olup olmadığının dosya üzerinden detaylı biçimde incelenmesi büyük önem taşır. Şartların eksik olduğu kanaati oluşursa, alacaklının mahkemeye başvurarak konkordato talebinin reddini istemesi mümkündür.',
    },
    { type: 'heading', text: 'Duruşma ne zaman gerçekleşir ve karar sonrası ne yapılmalı?' },
    {
      type: 'paragraph',
      text: 'Mahkeme, "kesin mühlet" kararını geçici mühlet süresi içerisinde verir (İİK m. 289/1) — yani üç aylık geçici mühletin ve gerektiğinde verilen iki aylık ek sürenin sonunda duruşma gerçekleştirilir. Bu duruşmada; geçici mühlet süresince borçlunun sürece katılımı, konkordato komiseri tarafından hazırlanan raporlar ile alacaklıların itiraz gerekçeleri birlikte değerlendirilir.',
    },
    {
      type: 'paragraph',
      text: 'Borçlu iflasa tabi bir borçlu ise ve kesin mühlet sırasında konkordato talebi reddedilirse, mahkeme doğrudan iflas kararı verir; bu durumda alacaklılar konkordato hükümlerine tabi olmaksızın alacaklarının ve işleyen faizlerin tamamını borçludan talep edebilir, icra takibi başlatabilir. Red sebeplerinin geçici mühlet sonrasında ortaya çıkması hâlinde ise komiser durumu asliye ticaret mahkemesine bildirir ve mahkeme geçici mühleti kaldırarak resen iflasa karar verebilir; bu durumda alacaklıların iflas dairesine alacak bildiriminde bulunması gerekir.',
    },
    { type: 'heading', text: 'Mahkeme 1 yıllık kesin mühlet verirse ne olur?' },
    {
      type: 'paragraph',
      text: 'Kesin mühlet süresinin başlamasıyla konkordato komiseri, yapılacak ilanla birlikte alacaklıları 15 gün içinde alacaklarını bildirmeye davet eder (İİK m. 299). Komiser, 1 yıllık kesin mühlet içerisinde bir alacaklılar toplantısı düzenler; bu toplantıya kesinlikle bir vekil aracılığıyla katılım sağlanmalıdır.',
    },
    {
      type: 'paragraph',
      text: 'Alacaklıların süresi içinde alacak bildiriminde bulunmamaları önemli hak kayıplarına yol açabilir: kayıt yaptırmayan alacaklı, konkordato nisabına ve oylamaya dahil edilmez. Ancak bu durum alacaklının alacak hakkını maddi hukuk açısından kaybettiği anlamına gelmez — yalnızca konkordato görüşmelerine katılma ve oy kullanma hakkının kaybı söz konusudur. Süresi içinde kayıt yaptırmamış olsa dahi, alacağını ticaret mahkemesi kararıyla ispat eden alacaklı, konkordatonun tasdikine itiraz etme ve feshini talep etme hakkını korur.',
    },
    { type: 'heading', text: 'Konkordato sürecinde herhangi bir dava açmalı mıyım?' },
    {
      type: 'paragraph',
      text: 'Konkordato sürecinde alacaklılar arasında tapu iptal tescil, sözleşmeye dayalı fesih, sebepsiz zenginleşme gibi davalar açılması yönünde bilgiler yaygın olsa da bunun bir doğruluğu bulunmamaktadır. Bu tarz davalar açılırsa ilgili mahkeme, konkordato süreci sebebiyle davayı "bekletici mesele" yapar ve süreç devam ettiği müddetçe herhangi bir sonuç alınmaz; konkordato yargılaması boyunca borçluya karşı yürütülecek icra takipleri de durdurulur.',
    },
    { type: 'heading', text: 'Hangi dava açılmalı ve ne zaman açılmalı?' },
    {
      type: 'paragraph',
      text: 'Konkordato komiserleri tarafından İİK m. 299 uyarınca yapılan ilan sonrasında alacaklılar 15 gün içinde alacaklarını bildirir. Borçlunun bildirilen alacağı kabul etmemesi halinde, söz konusu alacak "çekişmeli alacak" olarak değerlendirilir. Alacaklı, reddedilen kısım için İİK m. 308/b uyarınca kayıt kabul davası açma hakkına sahiptir — ancak bu dava hakkı, konkordato projesinin tasdikine ilişkin kararın verilmesinden itibaren yalnızca bir ay içinde kullanılabilir.',
    },
    {
      type: 'paragraph',
      text: 'Bu bir aylık süre alacaklılar bakımından büyük önem taşır. Konkordato süreci çok kapsamlı ve hukuki açıdan karmaşık bir süreç olduğundan, alacaklıların hakkının korunması için sürecin işin uzmanı hukukçular tarafından sıkı sıkıya takip edilmesi önerilmektedir.',
    },
  ],
}
