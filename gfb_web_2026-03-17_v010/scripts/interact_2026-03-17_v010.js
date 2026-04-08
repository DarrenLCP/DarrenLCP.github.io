const versionTag = "2026-03-17_v010";

const routeFiles = {
  home: `index_${versionTag}.html`,
  about: `about_${versionTag}.html`,
  contact: `contact_${versionTag}.html`,
  partners: `partners_${versionTag}.html`,
  stations: `stations_${versionTag}.html`,
  services: `services_${versionTag}.html`,
  products: `products_${versionTag}.html`,
  resources: `resources_${versionTag}.html`
};

const siteCopy = {
  zh: {
    brandHomeLabel: "榮文生醫首頁",
    navToggleLabel: "切換導覽",
    navAriaLabel: "主導覽",
    languageSwitchLabel: "EN",
    languageSwitchAriaLabel: "切換至英文版",
    navItems: [
      ["home", "首頁"],
      ["about", "關於榮文"],
      ["services", "檢測服務"],
      ["stations", "抽血據點"],
      ["products", "產品資訊"],
      ["partners", "合作夥伴"],
      ["resources", "資源中心"],
      ["contact", "聯絡我們"]
    ],
    footerGroups: [
      {
        title: "網站導覽",
        links: [
          ["about", "關於榮文"],
          ["services", "檢測服務"],
          ["stations", "抽血據點"],
          ["contact", "聯絡我們"]
        ]
      },
      {
        title: "延伸閱讀",
        links: [
          ["products", "產品資訊"],
          ["partners", "合作夥伴"],
          ["resources", "資源中心"]
        ]
      }
    ],
    footerContactAriaLabel: "榮文生醫聯絡資訊",
    footerContact: {
      addressLabel: "地址：",
      addressValue: "333 桃園市龜山區公園路30號6樓",
      phoneLabel: "電話：",
      phoneValue: "03-3278501",
      hotlineLabel: "客服專線：",
      hotlineValue: "0800-222-260",
      emailLabel: "Email：",
      emailValue: "info@gfmed.cc"
    },
    footerLegal: "Copyright © 榮文生醫 Good Future BioMed. Inc. All Rights Reserved.",
    backToTopLabel: "回到頂端",
    station: {
      directions: "地圖導航",
      cityPlaceholder: "請選擇縣市",
      districtPlaceholder: "請選擇區域",
      radiusPlaceholder: "不限距離",
      radiusLabel: (value) => `${value} 公里內`,
      nearestButton: "查詢離我最近的據點",
      locating: "正在取得你的位置，請稍候。",
      locationReady: "已取得你的位置，結果已依距離排序。",
      locationReadyWithRadius: (value) => `已取得你的位置，目前顯示 ${value} 公里內的據點。`,
      locationUnsupported: "目前瀏覽器不支援定位功能，請改用縣市與區域查詢。",
      locationDenied: "你尚未授權定位，請允許位置存取後再試一次。",
      locationUnavailable: "暫時無法取得位置資訊，請稍後再試。",
      distanceLabel: (value) => `距離你約 ${value} 公里`,
      count: (value) => `目前顯示 ${value} 筆據點`
    },
    contact: {
      missingNameEmail: "請填寫姓名與 Email，方便榮文生醫與您聯繫。",
      invalidEmail: "請填寫有效的 Email 格式。",
      missingSubjectMessage: "請填寫主題與內容，方便榮文生醫更快了解您的需求。",
      sending: "資料送出中，請稍候。",
      success: "洽詢已送出成功，我們會盡快與您聯繫。",
      fallbackError: "送出失敗，請稍後再試或直接寄信至 info@gfmed.cc。",
      genericError: "送出失敗，請稍後再試。"
    }
  },
  en: {
    brandHomeLabel: "Good Future Home",
    navToggleLabel: "Toggle navigation",
    navAriaLabel: "Primary navigation",
    languageSwitchLabel: "繁中",
    languageSwitchAriaLabel: "Switch to Traditional Chinese",
    navItems: [
      ["home", "Home"],
      ["about", "About"],
      ["services", "Services"],
      ["stations", "Collection Sites"],
      ["products", "Products"],
      ["partners", "Partners"],
      ["resources", "Resources"],
      ["contact", "Contact"]
    ],
    footerGroups: [
      {
        title: "Site Map",
        links: [
          ["about", "About Good Future"],
          ["services", "Testing Services"],
          ["stations", "Blood Collection Sites"],
          ["contact", "Contact Us"]
        ]
      },
      {
        title: "Explore More",
        links: [
          ["products", "Products"],
          ["partners", "Partners"],
          ["resources", "Resource Center"]
        ]
      }
    ],
    footerContactAriaLabel: "Good Future contact information",
    footerContact: {
      addressLabel: "Address:",
      addressValue: "6F., No. 30, Gongyuan Rd., Guishan Dist., Taoyuan City 333, Taiwan",
      phoneLabel: "Main Line:",
      phoneValue: "03-3278501",
      hotlineLabel: "Service Hotline:",
      hotlineValue: "0800-222-260",
      emailLabel: "Email:",
      emailValue: "info@gfmed.cc"
    },
    footerLegal: "Copyright © Good Future BioMed Inc. All Rights Reserved.",
    backToTopLabel: "Back to top",
    station: {
      directions: "Directions",
      cityPlaceholder: "Select a city",
      districtPlaceholder: "Select a district",
      radiusPlaceholder: "Any distance",
      radiusLabel: (value) => `Within ${value} km`,
      nearestButton: "Find the nearest site",
      locating: "Locating you. Please wait.",
      locationReady: "Your location has been detected. Results are now sorted by distance.",
      locationReadyWithRadius: (value) => `Your location has been detected. Showing sites within ${value} km.`,
      locationUnsupported: "Geolocation is not supported in this browser. Please use the city and district filters instead.",
      locationDenied: "Location access was denied. Please allow it and try again.",
      locationUnavailable: "Your location could not be determined right now. Please try again later.",
      distanceLabel: (value) => `About ${value} km away`,
      count: (value) => `Showing ${value} sites`
    },
    contact: {
      missingNameEmail: "Please provide your name and email so Good Future can contact you.",
      invalidEmail: "Please enter a valid email address.",
      missingSubjectMessage: "Please complete the subject and message so we can understand your request.",
      sending: "Sending your inquiry. Please wait.",
      success: "Your inquiry has been sent successfully. We will contact you soon.",
      fallbackError: "Unable to send the form right now. Please try again later or email info@gfmed.cc directly.",
      genericError: "Unable to send the form right now. Please try again later."
    }
  }
};

const locationLabels = {
  city: {
    台北市: "Taipei City",
    新北市: "New Taipei City",
    桃園市: "Taoyuan City",
    新竹市: "Hsinchu City",
    苗栗縣: "Miaoli County",
    台中市: "Taichung City",
    彰化縣: "Changhua County",
    南投縣: "Nantou County",
    雲林縣: "Yunlin County",
    高雄市: "Kaohsiung City",
    屏東縣: "Pingtung County",
    宜蘭縣: "Yilan County",
    花蓮縣: "Hualien County",
    台東縣: "Taitung County",
    澎湖縣: "Penghu County",
    台南市: "Tainan City",
    嘉義市: "Chiayi City",
    基隆市: "Keelung City"
  },
  district: {
    信義區: "Xinyi District",
    內湖區: "Neihu District",
    大安區: "Da’an District",
    萬華區: "Wanhua District",
    士林區: "Shilin District",
    松山區: "Songshan District",
    中正區: "Zhongzheng District",
    板橋區: "Banqiao District",
    三重區: "Sanchong District",
    新莊區: "Xinzhuang District",
    蘆洲區: "Luzhou District",
    土城區: "Tucheng District",
    五股區: "Wugu District",
    中壢區: "Zhongli District",
    桃園區: "Taoyuan District",
    蘆竹區: "Luzhu District",
    龜山區: "Guishan District",
    平鎮區: "Pingzhen District",
    東區: "East District",
    北區: "North District",
    苗栗市: "Miaoli City",
    北屯區: "Beitun District",
    大里區: "Dali District",
    西屯區: "Xitun District",
    后里區: "Houli District",
    豐原區: "Fengyuan District",
    清水區: "Qingshui District",
    彰化市: "Changhua City",
    南投市: "Nantou City",
    虎尾鎮: "Huwei Township",
    四湖鄉: "Sihu Township",
    三民區: "Sanmin District",
    鼓山區: "Gushan District",
    前金區: "Qianjin District",
    左營區: "Zuoying District",
    新興區: "Xinxing District",
    橋頭區: "Qiaotou District",
    屏東市: "Pingtung City",
    宜蘭市: "Yilan City",
    羅東鎮: "Luodong Township",
    花蓮市: "Hualien City",
    東河鄉: "Donghe Township",
    馬公市: "Magong City",
    善化區: "Shanhua District",
    新營區: "Xinying District"
  }
};

const stationData = [
  { city: "台北市", district: "信義區", name: "永吉聯合診所", address: "台北市信義區永吉路329號" },
  { city: "台北市", district: "內湖區", name: "全康醫事檢驗所", address: "台北市內湖區內湖路二段363號" },
  { city: "台北市", district: "內湖區", name: "高峰診所", address: "台北市內湖區內湖路二段39號" },
  { city: "台北市", district: "大安區", name: "伊生診所", address: "台北市大安區忠孝東路四段216巷32弄15號" },
  { city: "台北市", district: "大安區", name: "大安聯合醫事檢驗所", address: "台北市大安區復興南路二段151巷33號" },
  { city: "台北市", district: "萬華區", name: "萬華衛康内科診所", address: "台北市萬華區萬大路217號" },
  { city: "台北市", district: "士林區", name: "高醫師家庭醫學科診所", address: "台北市士林區中山北路七段17號" },
  { city: "台北市", district: "士林區", name: "愛林診所", address: "台北市士林區承德路四段222號" },
  { city: "台北市", district: "松山區", name: "立人醫事檢驗所", address: "台北市松山區敦化北路153-2號2樓" },
  { city: "台北市", district: "中正區", name: "杏聯醫事檢驗所", address: "台北市中正區汀州路二段38號B1" },
  { city: "新北市", district: "板橋區", name: "中一醫事檢驗所", address: "新北市板橋區館前西路6號7樓之1" },
  { city: "新北市", district: "三重區", name: "健詮醫事檢驗所", address: "新北市三重區光復路二段80號10樓" },
  { city: "新北市", district: "新莊區", name: "亞東醫事檢驗所", address: "新北市新莊區復興路一段111號" },
  { city: "新北市", district: "蘆洲區", name: "愛林鑫北診所", address: "新北市蘆洲區長榮路75號" },
  { city: "新北市", district: "土城區", name: "桀新醫事檢驗所", address: "新北市土城區青雲路258號" },
  { city: "新北市", district: "五股區", name: "翔展診所", address: "新北市五股區成泰路二段162號" },
  { city: "桃園市", district: "中壢區", name: "中壢亞東醫事檢驗所", address: "桃園市中壢區裕民街26號5樓" },
  { city: "桃園市", district: "桃園區", name: "優品醫事檢驗所", address: "桃園市桃園區介壽路286號6樓" },
  { city: "桃園市", district: "桃園區", name: "聯合醫事檢驗所", address: "桃園市桃園區萬壽路三段178號" },
  { city: "桃園市", district: "蘆竹區", name: "旭康醫事檢驗所", address: "桃園市蘆竹區南順七街39號1樓" },
  { city: "桃園市", district: "龜山區", name: "榮文醫事檢驗所", address: "桃園市龜山區公園路32號5樓" },
  { city: "桃園市", district: "平鎮區", name: "聯恩診所", address: "桃園市平鎮區中豐路南勢二段102號" },
  { city: "新竹市", district: "東區", name: "聯合醫事檢驗所", address: "新竹市東區自由路95巷18弄26號" },
  { city: "新竹市", district: "北區", name: "新竹劍橋醫事檢驗所", address: "新竹市北區光華東一街12號2樓" },
  { city: "苗栗縣", district: "苗栗市", name: "蕭銘賢聯合診所", address: "苗栗縣苗栗市中正路236號" },
  { city: "苗栗縣", district: "苗栗市", name: "天恩診所", address: "苗栗縣苗栗市中正路29號" },
  { city: "台中市", district: "東區", name: "三光醫事檢驗所", address: "台中市東區十甲路346號" },
  { city: "台中市", district: "東區", name: "品心診所", address: "台中市東區台中路131號3樓" },
  { city: "台中市", district: "北屯區", name: "東山家庭醫學科診所", address: "台中市北屯區東山路一段308號" },
  { city: "台中市", district: "大里區", name: "健証醫事檢驗所", address: "台中市大里區德芳路二段133號" },
  { city: "台中市", district: "西屯區", name: "愛鄰醫事檢驗所", address: "台中市西屯區漢口路二段10號" },
  { city: "台中市", district: "后里區", name: "國泰診所", address: "台中市后里區甲后路一段255號" },
  { city: "台中市", district: "豐原區", name: "永福診所", address: "台中市豐原區中正路701號" },
  { city: "台中市", district: "清水區", name: "向陽耳鼻喉科診所", address: "台中市清水區中山路243-2號" },
  { city: "彰化縣", district: "彰化市", name: "大華醫事檢驗所", address: "彰化縣彰化市崙平南路532號" },
  { city: "南投縣", district: "南投市", name: "貝爾醫事檢驗所", address: "南投縣南投市彰南路二段27號" },
  { city: "雲林縣", district: "虎尾鎮", name: "永安醫事檢驗所", address: "雲林縣虎尾鎮福民路75號" },
  { city: "雲林縣", district: "四湖鄉", name: "俊賢診所", address: "雲林縣四湖鄉中正路376號" },
  { city: "高雄市", district: "三民區", name: "優品醫事檢驗所", address: "高雄市三民區民族一路80號17樓" },
  { city: "高雄市", district: "三民區", name: "正中診所", address: "高雄市三民區正忠路18號" },
  { city: "高雄市", district: "鼓山區", name: "信東醫事檢驗所", address: "高雄市鼓山區裕誠路1188號" },
  { city: "高雄市", district: "前金區", name: "聯興醫事檢驗所", address: "高雄市前金區七賢二路330號" },
  { city: "高雄市", district: "左營區", name: "國聖診所", address: "高雄市左營區文慈路150號" },
  { city: "高雄市", district: "新興區", name: "三和醫事檢驗所", address: "高雄市新興區民族二路80號" },
  { city: "高雄市", district: "橋頭區", name: "孫琮淵診所", address: "高雄市橋頭區成功南路79號" },
  { city: "屏東縣", district: "屏東市", name: "龍安醫事檢驗所", address: "屏東縣屏東市濟南街8-8號" },
  { city: "宜蘭縣", district: "宜蘭市", name: "李國賢內科診所", address: "宜蘭縣宜蘭市中山路三段42-1號" },
  { city: "宜蘭縣", district: "宜蘭市", name: "勝安醫事檢驗所", address: "宜蘭縣宜蘭市自強路107號" },
  { city: "宜蘭縣", district: "羅東鎮", name: "王維昌診所", address: "宜蘭縣羅東鎮公正路167之3號" },
  { city: "花蓮縣", district: "花蓮市", name: "聯合醫學檢驗所", address: "花蓮縣花蓮市中華路373-7號" },
  { city: "台東縣", district: "東河鄉", name: "都蘭診所", address: "台東縣東河鄉都蘭96號" },
  { city: "澎湖縣", district: "馬公市", name: "公仁診所", address: "澎湖縣馬公市民生路27-3號" },
  { city: "台南市", district: "東區", name: "博仕醫事檢驗所", address: "台南市東區東門路二段203號" },
  { city: "台南市", district: "北區", name: "尚捷醫事檢驗所", address: "台南市北區海安路三段247號" },
  { city: "台南市", district: "善化區", name: "南光醫事檢驗所", address: "台南市善化區和平路179號" },
  { city: "台南市", district: "新營區", name: "現代醫事檢驗所", address: "台南市新營區中山路236號" },
  { city: "嘉義市", district: "東區", name: "嘉義祐健醫事檢驗所", address: "嘉義市東區民族路268巷7號" },
  { city: "基隆市", district: "中正區", name: "晉安診所", address: "基隆市中正區義一路39號1樓" },
  { city: "基隆市", district: "中正區", name: "中台X光醫事檢驗所", address: "基隆市中正區義一路50號" }
];

const stationCoordinates = {
  "台北市信義區永吉路329號": { lat: 25.045667, lng: 121.575742 },
  "台北市內湖區內湖路二段363號": { lat: 25.083768, lng: 121.592298 },
  "台北市內湖區內湖路二段39號": { lat: 25.078963, lng: 121.579888 },
  "台北市大安區忠孝東路四段216巷32弄15號": { lat: 25.040024, lng: 121.552131 },
  "台北市大安區復興南路二段151巷33號": { lat: 25.028459, lng: 121.54491 },
  "台北市萬華區萬大路217號": { lat: 25.026834, lng: 121.500602 },
  "台北市士林區中山北路七段17號": { lat: 25.119121, lng: 121.53049 },
  "台北市士林區承德路四段222號": { lat: 25.088456, lng: 121.521499 },
  "台北市松山區敦化北路153-2號2樓": { lat: 25.054211, lng: 121.549539 },
  "台北市中正區汀州路二段38號B1": { lat: 25.02537, lng: 121.517494 },
  "新北市板橋區館前西路6號7樓之1": { lat: 25.007125, lng: 121.459123 },
  "新北市三重區光復路二段80號10樓": { lat: 25.056961, lng: 121.471945 },
  "新北市新莊區復興路一段111號": { lat: 25.043111, lng: 121.449311 },
  "新北市蘆洲區長榮路75號": { lat: 25.083603, lng: 121.462062 },
  "新北市土城區青雲路258號": { lat: 24.979727, lng: 121.458962 },
  "新北市五股區成泰路二段162號": { lat: 25.084146, lng: 121.438416 },
  "桃園市中壢區裕民街26號5樓": { lat: 24.957721, lng: 121.224934 },
  "桃園市桃園區介壽路286號6樓": { lat: 24.98191, lng: 121.307331 },
  "桃園市桃園區萬壽路三段178號": { lat: 24.990446, lng: 121.317102 },
  "桃園市蘆竹區南順七街39號1樓": { lat: 25.039597, lng: 121.290981 },
  "桃園市龜山區公園路32號5樓": { lat: 25.054865, lng: 121.36689 },
  "桃園市平鎮區中豐路南勢二段102號": { lat: 24.916787, lng: 121.210644 },
  "新竹市東區自由路95巷18弄26號": { lat: 24.813498, lng: 120.979098 },
  "新竹市北區光華東一街12號2樓": { lat: 24.816993, lng: 120.976198 },
  "苗栗縣苗栗市中正路236號": { lat: 24.564482, lng: 120.823921 },
  "苗栗縣苗栗市中正路29號": { lat: 24.569223, lng: 120.824623 },
  "台中市東區十甲路346號": { lat: 24.144288, lng: 120.706407 },
  "台中市東區台中路131號3樓": { lat: 24.132569, lng: 120.684041 },
  "台中市北屯區東山路一段308號": { lat: 24.176084, lng: 120.724812 },
  "台中市大里區德芳路二段133號": { lat: 24.103485, lng: 120.677416 },
  "台中市西屯區漢口路二段10號": { lat: 24.163115, lng: 120.657786 },
  "台中市后里區甲后路一段255號": { lat: 24.309036, lng: 120.726955 },
  "台中市豐原區中正路701號": { lat: 24.249116, lng: 120.701513 },
  "台中市清水區中山路243-2號": { lat: 24.26891, lng: 120.575172 },
  "彰化縣彰化市崙平南路532號": { lat: 24.065128, lng: 120.528915 },
  "南投縣南投市彰南路二段27號": { lat: 23.836203, lng: 120.704783 },
  "雲林縣虎尾鎮福民路75號": { lat: 23.710095, lng: 120.435915 },
  "雲林縣四湖鄉中正路376號": { lat: 23.635864, lng: 120.225217 },
  "高雄市三民區民族一路80號17樓": { lat: 22.643121, lng: 120.314658 },
  "高雄市三民區正忠路18號": { lat: 22.641315, lng: 120.330396 },
  "高雄市鼓山區裕誠路1188號": { lat: 22.666011, lng: 120.297278 },
  "高雄市前金區七賢二路330號": { lat: 22.631628, lng: 120.290593 },
  "高雄市左營區文慈路150號": { lat: 22.681855, lng: 120.318086 },
  "高雄市新興區民族二路80號": { lat: 22.633155, lng: 120.313784 },
  "高雄市橋頭區成功南路79號": { lat: 22.753955, lng: 120.311864 },
  "屏東縣屏東市濟南街8-8號": { lat: 22.676988, lng: 120.491125 },
  "宜蘭縣宜蘭市中山路三段42-1號": { lat: 24.756084, lng: 121.752353 },
  "宜蘭縣宜蘭市自強路107號": { lat: 24.743051, lng: 121.75176 },
  "宜蘭縣羅東鎮公正路167之3號": { lat: 24.678883, lng: 121.768331 },
  "花蓮縣花蓮市中華路373-7號": { lat: 23.974585, lng: 121.595169 },
  "台東縣東河鄉都蘭96號": { lat: 22.875982, lng: 121.225755 },
  "澎湖縣馬公市民生路27-3號": { lat: 23.567572, lng: 119.565374 },
  "台南市東區東門路二段203號": { lat: 22.984812, lng: 120.2247 },
  "台南市北區海安路三段247號": { lat: 23.00699, lng: 120.199736 },
  "台南市善化區和平路179號": { lat: 23.131886, lng: 120.297887 },
  "台南市新營區中山路236號": { lat: 23.303261, lng: 120.31482 },
  "嘉義市東區民族路268巷7號": { lat: 23.47678, lng: 120.45424 },
  "基隆市中正區義一路39號1樓": { lat: 25.133178, lng: 121.745636 },
  "基隆市中正區義一路50號": { lat: 25.132884, lng: 121.745747 }
};

stationData.forEach((item) => {
  Object.assign(item, stationCoordinates[item.address] || {});
});

function getLang() {
  return document.body.dataset.lang === "en" ? "en" : "zh";
}

function getPathPrefix() {
  return document.body.dataset.page === "home" ? "" : "../";
}

function toLangFile(fileName, lang) {
  if (lang === "en") {
    return fileName.replace(`_${versionTag}.html`, `_en_${versionTag}.html`);
  }

  return fileName;
}

function resolveRoute(key, lang = getLang()) {
  const isHomePage = document.body.dataset.page === "home";
  const routeFile = toLangFile(routeFiles[key], lang);
  if (isHomePage) {
    return key === "home" ? routeFile : `pages/${routeFile}`;
  }

  return key === "home" ? `../${routeFile}` : routeFile;
}

function asset(fileName) {
  return `${getPathPrefix()}assets/${fileName}`;
}

function getCurrentHtmlFileName() {
  const pathName = window.location.pathname || "";
  return decodeURIComponent(pathName.split("/").pop() || "");
}

function resolveLanguageSwitchHref() {
  const currentFile = getCurrentHtmlFileName();
  const lang = getLang();
  if (!currentFile) return resolveRoute("home", lang === "en" ? "zh" : "en");

  if (lang === "en") {
    const pairedZhFile = currentFile.replace(/_en_(\d{4}-\d{2}-\d{2}_v\d{3}\.html)$/, "_$1");
    return pairedZhFile !== currentFile ? pairedZhFile : currentFile.replace(`_en_${versionTag}.html`, `_${versionTag}.html`);
  }

  const pairedEnFile = currentFile.replace(/_(\d{4}-\d{2}-\d{2}_v\d{3}\.html)$/, "_en_$1");
  return pairedEnFile !== currentFile ? pairedEnFile : currentFile.replace(`_${versionTag}.html`, `_en_${versionTag}.html`);
}

function buildHeader(currentPage) {
  const lang = getLang();
  const copy = siteCopy[lang];
  const nav = copy.navItems
    .map(
      ([key, label]) =>
        `<a href="${resolveRoute(key)}"${key === currentPage ? ' aria-current="page"' : ""}>${label}</a>`
    )
    .join("");

  return `
    <header class="site-header" data-site-header>
      <div class="container site-header__inner">
        <a class="brand" href="${resolveRoute("home")}" aria-label="${copy.brandHomeLabel}">
          <img class="brand__logo" src="${asset("brand_logo_top_2026-03-15_v009.png")}" alt="榮文生醫 Good Future BioMed" />
        </a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="${copy.navToggleLabel}" data-menu-toggle>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
        <nav class="site-nav" id="site-nav" aria-label="${copy.navAriaLabel}">
          ${nav}
          <a class="lang-link" href="${resolveLanguageSwitchHref()}" aria-label="${copy.languageSwitchAriaLabel}">${copy.languageSwitchLabel}</a>
        </nav>
      </div>
    </header>
  `;
}

function buildFooter() {
  const lang = getLang();
  const copy = siteCopy[lang];
  const groups = copy.footerGroups
    .map(
      (group) => `
        <div>
          <h2 class="footer__title">${group.title}</h2>
          <ul class="footer__list">
            ${group.links.map(([key, label]) => `<li><a href="${resolveRoute(key)}">${label}</a></li>`).join("")}
          </ul>
        </div>
      `
    )
    .join("");

  return `
    <footer class="footer">
      <div class="container">
          <div class="footer__grid">
            <div class="footer__brand">
              <img class="footer__brand-logo" src="${asset("brand_logo_bottom_2026-03-15_v009.png")}" alt="榮文生醫 Good Future BioMed" />
              <ul class="footer__contact-list" aria-label="${copy.footerContactAriaLabel}">
                <li class="footer__contact-item">
                  <span class="footer__contact-label">${copy.footerContact.addressLabel}</span>
                  <span class="footer__contact-value">${copy.footerContact.addressValue}</span>
                </li>
                <li class="footer__contact-item">
                  <span class="footer__contact-label">${copy.footerContact.phoneLabel}</span>
                  <a class="footer__contact-link" href="tel:033278501">${copy.footerContact.phoneValue}</a>
                </li>
                <li class="footer__contact-item">
                  <span class="footer__contact-label">${copy.footerContact.hotlineLabel}</span>
                  <a class="footer__contact-link" href="tel:0800222260">${copy.footerContact.hotlineValue}</a>
                </li>
                <li class="footer__contact-item">
                  <span class="footer__contact-label">${copy.footerContact.emailLabel}</span>
                  <a class="footer__contact-link" href="mailto:info@gfmed.cc">${copy.footerContact.emailValue}</a>
                </li>
              </ul>
            </div>
            ${groups}
          </div>
        <div class="footer__legal">${copy.footerLegal}</div>
      </div>
    </footer>
    <button class="back-to-top" type="button" aria-label="${copy.backToTopLabel}"></button>
  `;
}

function initChrome() {
  const shell = document.querySelector("[data-site-shell]");
  if (!shell) return;

  const page = document.body.dataset.page || "home";
  shell.insertAdjacentHTML("afterbegin", buildHeader(page));
  shell.insertAdjacentHTML("beforeend", buildFooter());

  const header = shell.querySelector(".site-header");
  const toggle = shell.querySelector("[data-menu-toggle]");
  const navLinks = [...shell.querySelectorAll(".site-nav a")];
  toggle?.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    header?.classList.toggle("is-open", !expanded);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      toggle?.setAttribute("aria-expanded", "false");
      header?.classList.remove("is-open");
    });
  });
}

function initTabs() {
  document.querySelectorAll("[data-tabs]").forEach((group) => {
    const buttons = [...group.querySelectorAll('[role="tab"]')];
    const panels = [...group.querySelectorAll('[role="tabpanel"]')];

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.getAttribute("aria-controls");
        buttons.forEach((item) => item.setAttribute("aria-selected", String(item === button)));
        panels.forEach((panel) => {
          panel.hidden = panel.id !== target;
        });
      });
    });
  });
}

function initFaqs() {
  document.querySelectorAll(".faq__button").forEach((button) => {
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      const panelId = button.getAttribute("aria-controls");
      const panel = panelId ? document.getElementById(panelId) : null;
      button.setAttribute("aria-expanded", String(!expanded));
      if (panel) panel.hidden = expanded;
    });
  });
}

function initPartnerFilter() {
  const input = document.querySelector("[data-partner-search]");
  if (!input) return;

  const rows = [...document.querySelectorAll("[data-partner-row]")];
  input.addEventListener("input", () => {
    const keyword = input.value.trim().toLowerCase();
    rows.forEach((row) => {
      const haystack = `${row.dataset.search || ""} ${row.textContent || ""}`.toLowerCase();
      row.hidden = !haystack.includes(keyword);
    });
  });
}

function toRadians(value) {
  return (value * Math.PI) / 180;
}

function calculateDistanceKm(from, to) {
  if (!from || !to || typeof to.lat !== "number" || typeof to.lng !== "number") return null;
  const earthRadiusKm = 6371;
  const dLat = toRadians(to.lat - from.lat);
  const dLng = toRadians(to.lng - from.lng);
  const lat1 = toRadians(from.lat);
  const lat2 = toRadians(to.lat);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return earthRadiusKm * c;
}

function formatDistanceKm(value) {
  if (typeof value !== "number") return "";
  return value < 10 ? value.toFixed(1) : value.toFixed(0);
}

function buildStationCard(station) {
  const lang = getLang();
  const stationCopy = siteCopy[lang].station;
  const mapHref = `https://maps.google.com/?q=${encodeURIComponent(station.address)}`;
  const distancePill =
    typeof station.distanceKm === "number"
      ? `<span class="pill pill--gold">${stationCopy.distanceLabel(formatDistanceKm(station.distanceKm))}</span>`
      : "";
  return `
    <article class="result-card">
      <div class="result-card__meta">
        <span class="pill pill--primary">${formatLocationLabel("city", station.city)}</span>
        <span class="pill">${formatLocationLabel("district", station.district)}</span>
        ${distancePill}
      </div>
      <h3 class="result-card__title">${station.name}</h3>
      <p class="card__body">${station.address}</p>
      <div class="result-card__actions">
        <a class="btn btn--secondary" href="${mapHref}" target="_blank" rel="noreferrer">${stationCopy.directions}</a>
      </div>
    </article>
  `;
}

function uniqueValues(items, key) {
  const values = [];
  items.forEach((item) => {
    if (!values.includes(item[key])) values.push(item[key]);
  });
  return values;
}

function formatLocationLabel(type, value) {
  if (getLang() !== "en") return value;
  return locationLabels[type]?.[value] || value;
}

function populateSelect(select, options, placeholder, disabled, type) {
  select.innerHTML = [
    `<option value="">${placeholder}</option>`,
    ...options.map((value) => `<option value="${value}">${formatLocationLabel(type, value)}</option>`)
  ].join("");
  select.disabled = disabled;
}

function initStationDirectory() {
  const citySelect = document.querySelector("[data-station-city]");
  const districtSelect = document.querySelector("[data-station-district]");
  const nearestButton = document.querySelector("[data-station-nearest]");
  const radiusSelect = document.querySelector("[data-station-radius]");
  const status = document.querySelector("[data-station-status]");
  const results = document.querySelector("[data-station-results]");
  const empty = document.querySelector("[data-station-empty]");
  const count = document.querySelector("[data-station-count]");

  if (!citySelect || !districtSelect || !nearestButton || !radiusSelect || !status || !results || !empty || !count) return;

  const lang = getLang();
  const stationCopy = siteCopy[lang].station;
  const radiusOptions = ["", "5", "10", "20", "50"];
  const state = {
    userLocation: null
  };
  const cities = uniqueValues(stationData, "city");
  populateSelect(citySelect, cities, stationCopy.cityPlaceholder, false, "city");
  populateSelect(districtSelect, [], stationCopy.districtPlaceholder, true, "district");
  radiusSelect.innerHTML = radiusOptions
    .map((value) =>
      `<option value="${value}">${value ? stationCopy.radiusLabel(value) : stationCopy.radiusPlaceholder}</option>`
    )
    .join("");
  radiusSelect.disabled = true;
  nearestButton.textContent = stationCopy.nearestButton;

  const getDistricts = (city) => {
    if (!city) return [];
    return uniqueValues(stationData.filter((item) => item.city === city), "district");
  };

  const setStatus = (message, stateName = "info") => {
    if (!message) {
      status.hidden = true;
      status.textContent = "";
      status.dataset.state = "info";
      return;
    }

    status.hidden = false;
    status.dataset.state = stateName;
    status.textContent = message;
  };

  const render = () => {
    const city = citySelect.value;
    const district = districtSelect.value;
    const radiusKm = Number(radiusSelect.value || 0);

    let filtered = stationData.filter((item) => {
      const matchesCity = !city || item.city === city;
      const matchesDistrict = !district || item.district === district;
      return matchesCity && matchesDistrict;
    });

    filtered = filtered.map((item) => ({
      ...item,
      distanceKm: state.userLocation ? calculateDistanceKm(state.userLocation, item) : null
    }));

    if (state.userLocation && radiusKm > 0) {
      filtered = filtered.filter((item) => typeof item.distanceKm === "number" && item.distanceKm <= radiusKm);
    }

    if (state.userLocation) {
      filtered.sort((a, b) => {
        const aDistance = typeof a.distanceKm === "number" ? a.distanceKm : Number.POSITIVE_INFINITY;
        const bDistance = typeof b.distanceKm === "number" ? b.distanceKm : Number.POSITIVE_INFINITY;
        return aDistance - bDistance;
      });
      setStatus(
        radiusKm > 0 ? stationCopy.locationReadyWithRadius(radiusKm) : stationCopy.locationReady,
        "info"
      );
    } else {
      setStatus("");
    }

    results.innerHTML = filtered.map((station) => buildStationCard(station)).join("");
    count.textContent = stationCopy.count(filtered.length);
    empty.hidden = filtered.length !== 0;
  };

  citySelect.addEventListener("change", () => {
    const districts = getDistricts(citySelect.value);
    populateSelect(districtSelect, districts, stationCopy.districtPlaceholder, districts.length === 0, "district");
    render();
  });

  districtSelect.addEventListener("change", render);
  radiusSelect.addEventListener("change", render);

  nearestButton.addEventListener("click", () => {
    if (!navigator.geolocation) {
      setStatus(stationCopy.locationUnsupported, "error");
      return;
    }

    nearestButton.disabled = true;
    setStatus(stationCopy.locating, "info");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        state.userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        radiusSelect.disabled = false;
        nearestButton.disabled = false;
        render();
      },
      (error) => {
        radiusSelect.disabled = true;
        nearestButton.disabled = false;
        if (error.code === error.PERMISSION_DENIED) {
          setStatus(stationCopy.locationDenied, "error");
          return;
        }
        setStatus(stationCopy.locationUnavailable, "error");
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000
      }
    );
  });

  render();
}

function initContactComposer() {
  const form = document.querySelector("[data-contact-form]");
  const status = document.querySelector("[data-contact-status]");
  const submitButton = form?.querySelector('button[type="submit"]');
  if (!form || !status || !submitButton) return;
  const copy = siteCopy[getLang()].contact;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const organization = String(formData.get("organization") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email) {
      status.hidden = false;
      status.dataset.state = "error";
      status.textContent = copy.missingNameEmail;
      return;
    }

    if (!emailPattern.test(email)) {
      status.hidden = false;
      status.dataset.state = "error";
      status.textContent = copy.invalidEmail;
      return;
    }

    if (!subject || !message) {
      status.hidden = false;
      status.dataset.state = "error";
      status.textContent = copy.missingSubjectMessage;
      return;
    }

    status.hidden = false;
    status.dataset.state = "info";
    status.textContent = copy.sending;
    submitButton.disabled = true;

    formData.set("name", name);
    formData.set("email", email);
    formData.set("phone", phone);
    formData.set("organization", organization);
    formData.set("subject", subject);
    formData.set("message", message);

    try {
      const response = await fetch(form.action, {
        method: form.method || "POST",
        headers: {
          Accept: "application/json"
        },
        body: formData
      });

      const result = await response.json().catch(() => ({}));
      const isSuccess =
        response.ok &&
        (result.success === true ||
          result.success === "true" ||
          result.success === "success" ||
          Object.keys(result).length === 0);

      if (!isSuccess) {
        throw new Error(typeof result.message === "string" ? result.message : copy.genericError);
      }

      status.dataset.state = "success";
      status.textContent = copy.success;
      form.reset();
    } catch (error) {
      status.dataset.state = "error";
      status.textContent =
        error instanceof Error && error.message
          ? error.message
          : copy.fallbackError;
    } finally {
      status.hidden = false;
      submitButton.disabled = false;
    }
  });
}

function initBackToTop() {
  const button = document.querySelector(".back-to-top");
  if (!button) return;

  const sync = () => button.classList.toggle("is-visible", window.scrollY > 520);
  sync();
  window.addEventListener("scroll", sync, { passive: true });
  button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function initLoadMore() {
  document.querySelectorAll("[data-load-more-group]").forEach((group) => {
    const items = [...group.querySelectorAll("[data-load-more-item]")];
    const button = group.querySelector("[data-load-more-button]");
    const step = Number.parseInt(group.dataset.step || "", 10);
    const pageSize = Number.isFinite(step) && step > 0 ? step : items.length;
    let visibleCount = 0;

    items.forEach((item, index) => {
      const shouldShow = index < pageSize;
      item.hidden = !shouldShow;
      if (shouldShow) visibleCount += 1;
    });

    if (!button) return;

    const syncButton = () => {
      button.hidden = visibleCount >= items.length;
    };

    syncButton();

    button.addEventListener("click", () => {
      const nextCount = Math.min(visibleCount + pageSize, items.length);
      items.slice(visibleCount, nextCount).forEach((item) => {
        item.hidden = false;
      });
      visibleCount = nextCount;
      syncButton();
    });
  });
}

function initObserver() {
  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".fade-in").forEach((node) => observer.observe(node));
}

document.addEventListener("DOMContentLoaded", () => {
  initChrome();
  initTabs();
  initFaqs();
  initPartnerFilter();
  initStationDirectory();
  initContactComposer();
  initBackToTop();
  initLoadMore();
  initObserver();
});






