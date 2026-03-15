const routeFiles = {
  home: "index_2026-03-15_v009.html",
  about: "about_2026-03-15_v009.html",
  contact: "contact_2026-03-15_v009.html",
  partners: "partners_2026-03-15_v009.html",
  stations: "stations_2026-03-15_v009.html",
  services: "services_2026-03-15_v009.html",
  products: "products_2026-03-15_v009.html",
  resources: "resources_2026-03-15_v009.html",
  productCtcsystem: "product-ctcsystem_2026-03-15_v009.html",
  productConsumables: "product-consumables_2026-03-15_v009.html",
  productMag: "product-mag_2026-03-15_v009.html",
  productFloraup: "product-floraup_2026-03-15_v009.html",
  productFlora8: "product-flora8_2026-03-15_v009.html",
  productFloraz: "product-floraz_2026-03-15_v009.html",
  productFlorac: "product-florac_2026-03-15_v009.html",
  productFlorag: "product-florag_2026-03-15_v009.html",
  productFiberup: "product-fiberup_2026-03-15_v009.html"
};

const navItems = [
  ["home", "首頁"],
  ["about", "關於榮文"],
  ["services", "檢測服務"],
  ["stations", "抽血據點"],
  ["products", "產品資訊"],
  ["partners", "合作夥伴"],
  ["resources", "資源中心"],
  ["contact", "聯絡我們"]
];

const footerGroups = [
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
];

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

function getPathPrefix() {
  return document.body.dataset.page === "home" ? "" : "../";
}

function resolveRoute(key) {
  const isHomePage = document.body.dataset.page === "home";
  if (isHomePage) {
    return key === "home" ? routeFiles.home : `pages/${routeFiles[key]}`;
  }

  return key === "home" ? `../${routeFiles.home}` : routeFiles[key];
}

function asset(fileName) {
  return `${getPathPrefix()}assets/${fileName}`;
}

function buildHeader(currentPage) {
  const nav = navItems
    .map(
      ([key, label]) =>
        `<li><a class="nav__link" href="${resolveRoute(key)}"${key === currentPage ? ' aria-current="page"' : ""}>${label}</a></li>`
    )
    .join("");

  return `
    <header class="page-header">
      <div class="container page-header__inner">
        <a class="brand" href="${resolveRoute("home")}" aria-label="榮文生醫首頁">
          <img class="brand__logo" src="${asset("brand_logo_top_2026-03-15_v009.png")}" alt="榮文生醫 Good Future BioMed" />
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-label="切換導覽">
          <span class="nav-toggle__bar" aria-hidden="true"></span>
        </button>
        <nav class="nav" aria-label="主導覽">
          <ul class="nav__list">${nav}</ul>
        </nav>
      </div>
    </header>
  `;
}

function buildFooter() {
  const groups = footerGroups
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
            <p class="footer__copy">榮文生醫精準醫學實驗室提供循環腫瘤細胞檢測、合作抽血據點查詢與健康產品資訊。</p>
            <p class="footer__copy">333 桃園市龜山區公園路30號6樓｜03-3278501｜0800-222-260｜info@gfmed.cc</p>
          </div>
          ${groups}
        </div>
        <div class="footer__legal">Copyright © 榮文生醫 Good Future BioMed. Inc. All Rights Reserved.</div>
      </div>
    </footer>
    <button class="back-to-top" type="button" aria-label="回到頂端"></button>
  `;
}

function initChrome() {
  const shell = document.querySelector("[data-site-shell]");
  if (!shell) return;

  const page = document.body.dataset.page || "home";
  shell.insertAdjacentHTML("afterbegin", buildHeader(page));
  shell.insertAdjacentHTML("beforeend", buildFooter());

  const header = shell.querySelector(".page-header");
  const toggle = shell.querySelector(".nav-toggle");
  toggle?.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    header?.classList.toggle("is-open", !expanded);
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
      row.hidden = !row.dataset.search.includes(keyword);
    });
  });
}

function buildStationCard(station) {
  const mapHref = `https://maps.google.com/?q=${encodeURIComponent(station.address)}`;
  return `
    <article class="result-card">
      <div class="result-card__meta">
        <span class="pill pill--primary">${station.city}</span>
        <span class="pill">${station.district}</span>
      </div>
      <h3 class="result-card__title">${station.name}</h3>
      <p class="card__body">${station.address}</p>
      <div class="result-card__actions">
        <a class="btn btn--secondary" href="${mapHref}" target="_blank" rel="noreferrer">地圖導航</a>
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

function populateSelect(select, options, placeholder, disabled) {
  select.innerHTML = [`<option value="">${placeholder}</option>`, ...options.map((value) => `<option value="${value}">${value}</option>`)].join("");
  select.disabled = disabled;
}

function initStationDirectory() {
  const citySelect = document.querySelector("[data-station-city]");
  const districtSelect = document.querySelector("[data-station-district]");
  const results = document.querySelector("[data-station-results]");
  const empty = document.querySelector("[data-station-empty]");
  const count = document.querySelector("[data-station-count]");

  if (!citySelect || !districtSelect || !results || !empty || !count) return;

  const cities = uniqueValues(stationData, "city");
  populateSelect(citySelect, cities, "請選擇縣市", false);
  populateSelect(districtSelect, [], "請選擇區域", true);

  const getDistricts = (city) => {
    if (!city) return [];
    return uniqueValues(stationData.filter((item) => item.city === city), "district");
  };

  const render = () => {
    const city = citySelect.value;
    const district = districtSelect.value;

    const filtered = stationData.filter((item) => {
      const matchesCity = !city || item.city === city;
      const matchesDistrict = !district || item.district === district;
      return matchesCity && matchesDistrict;
    });

    results.innerHTML = filtered.map((station) => buildStationCard(station)).join("");
    count.textContent = `目前顯示 ${filtered.length} 筆據點`;
    empty.hidden = filtered.length !== 0;
  };

  citySelect.addEventListener("change", () => {
    const districts = getDistricts(citySelect.value);
    populateSelect(districtSelect, districts, "請選擇區域", districts.length === 0);
    render();
  });

  districtSelect.addEventListener("change", render);

  render();
}

function initContactComposer() {
  const form = document.querySelector("[data-contact-form]");
  const status = document.querySelector("[data-contact-status]");
  const submitButton = form?.querySelector('button[type="submit"]');
  if (!form || !status || !submitButton) return;

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
      status.textContent = "請填寫姓名與 Email，方便榮文生醫與您聯繫。";
      return;
    }

    if (!emailPattern.test(email)) {
      status.hidden = false;
      status.dataset.state = "error";
      status.textContent = "請填寫有效的 Email 格式。";
      return;
    }

    if (!subject || !message) {
      status.hidden = false;
      status.dataset.state = "error";
      status.textContent = "請填寫主題與內容，方便榮文生醫更快了解您的需求。";
      return;
    }

    status.hidden = false;
    status.dataset.state = "info";
    status.textContent = "資料送出中，請稍候。";
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
        throw new Error(typeof result.message === "string" ? result.message : "送出失敗，請稍後再試。");
      }

      status.dataset.state = "success";
      status.textContent = "洽詢已送出成功，我們會盡快與您聯繫。";
      form.reset();
    } catch (error) {
      status.dataset.state = "error";
      status.textContent =
        error instanceof Error && error.message
          ? error.message
          : "送出失敗，請稍後再試或直接寄信至 info@gfmed.cc。";
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






