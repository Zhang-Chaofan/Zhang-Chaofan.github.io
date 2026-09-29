(function () {
  "use strict";

  var storageKey = "academic-site-language";
  var currentLanguage = localStorage.getItem(storageKey) === "zh" ? "zh" : "en";
  var translatedNodes = [];

  var exactTranslations = {
    "Research": "研究工作",
    "Awards": "荣誉奖励",
    "About Me": "个人简介",
    "Research at a Glance": "研究方向概览",
    "Selected News": "近期动态",
    "Selected Awards": "主要荣誉",
    "Tactile Sensing": "触觉传感",
    "Simulation": "触觉仿真",
    "Manipulation": "灵巧操作",
    "Foundation Models": "触觉基础模型",
    "Visuotactile Sensing": "视触觉传感",
    "Tactile Simulation": "触觉仿真",
    "Dexterous Manipulation": "灵巧操作",
    "Dexterous Manipulation with Vision and Touch": "视触融合灵巧操作",
    "Tactile Foundation Models": "触觉基础模型",
    "Keypoints": "创新点",
    "Paper": "论文",
    "Website": "项目主页",
    "Code": "代码",
    "Beijing, China": "中国，北京",
    "Institute of Automation, Chinese Academy of Sciences": "中国科学院自动化研究所",
    "Assistant Professor, CASIA": "助理研究员，中国科学院自动化研究所",
    "was published in IEEE Robotics and Automation Letters.": "发表于 IEEE Robotics and Automation Letters。",
    "was released as an arXiv preprint for hierarchical visuo-tactile prediction and contact-aware planning.": "以 arXiv 预印本形式发布，研究分层视触觉预测与接触感知规划。",
    "was published in Biomimetic Intelligence and Robotics.": "发表于 Biomimetic Intelligence and Robotics。",
    "was published in IEEE Transactions on Robotics.": "发表于 IEEE Transactions on Robotics。",
    "Selected for the": "入选",
    "2025 CCF Technical Committee on Intelligent Robots Ph.D. Dissertation Incentive Program.": "2025 年中国计算机学会智能机器人专业委员会博士学位论文激励计划。",
    "Best Paper in AI in Robotics Finalist,": "机器人与人工智能最佳论文入围奖，",
    "IEEE ROBIO 2025.": "IEEE 机器人与仿生学国际会议（ROBIO 2025）。",
    "Toshio Fukuda Best Paper Award in Mechatronics,": "Toshio Fukuda 机电一体化最佳论文奖，",
    "IEEE ICMA 2023.": "IEEE 机电一体化与自动化国际会议（ICMA 2023）。",
    "Compact sensors and learning methods for precise contact geometry, six-axis force/torque, and high-speed dynamic tactile perception.": "面向精确接触几何、六维力/力矩与高速动态触觉感知的紧凑型传感器和学习方法。",
    "Physics-based simulation of elastomer deformation and optical tactile rendering across sensor geometries, coatings, and output modalities.": "面向不同传感器结构、涂层与输出模态，研究基于物理的弹性体形变和光学触觉渲染。",
    "Contact-aware policies that combine global visual context with local tactile feedback for precise assembly and dexterous-hand skills.": "融合全局视觉信息与局部触觉反馈，研究面向精密装配和灵巧手技能的接触感知策略。",
    "Language-aligned tactile representations and predictive world models for physical reasoning, contact-rich control, and planning.": "研究语言对齐的触觉表征与预测式世界模型，服务于物理推理、富接触控制和规划。",
    "High-resolution geometry, force/torque, and event-based tactile perception.": "高分辨率三维形变、六轴力/力矩与事件触觉传感",
    "Physics-driven, multi-mode simulation for scalable Sim2Real learning.": "面向 Sim2Real 学习的物理驱动多模式视触觉仿真",
    "Contact-aware policies that fuse vision and touch for precise interaction.": "融合视觉与触觉的接触感知策略，实现精确交互",
    "Language-aligned tactile representations, VTLA, and tactile world models.": "语言对齐的触觉表征、VTLA 与触觉世界模型"
  };

  function rememberAndSet(element, value) {
    if (!element) return;
    if (!element.dataset.i18nEn) element.dataset.i18nEn = element.textContent.trim();
    element.textContent = value;
    if (translatedNodes.indexOf(element) === -1) translatedNodes.push(element);
  }

  function rememberAndSetHtml(element, value) {
    if (!element) return;
    if (!element.dataset.i18nEnHtml) element.dataset.i18nEnHtml = element.innerHTML;
    element.innerHTML = value;
  }

  function translateExactText() {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach(function (node) {
      var raw = node.nodeValue;
      var normalized = raw.trim();
      if (!normalized || !exactTranslations[normalized]) return;
      var parent = node.parentElement;
      if (!parent || parent.closest("script, style")) return;
      if (!node.__i18nEnglish) node.__i18nEnglish = raw;
      var leading = raw.match(/^\s*/)[0];
      var trailing = raw.match(/\s*$/)[0];
      node.nodeValue = leading + exactTranslations[normalized] + trailing;
      node.__i18nTranslated = true;
    });
  }

  function translateResearch() {
    var intro = document.querySelector(".page__content > p:first-of-type");
    if (intro) rememberAndSet(intro, "聚焦具身触觉智能，涵盖高分辨率触觉传感、高保真触觉仿真、灵巧操作与触觉基础模型。下方内容按研究方向组织。");

    document.querySelectorAll(".research-paper-card__keypoints").forEach(function (box) {
      var label = box.querySelector(":scope > span");
      rememberAndSet(label, "创新点");
    });
  }

  function translateInlineData() {
    document.querySelectorAll("[data-zh]").forEach(function (element) {
      rememberAndSet(element, element.dataset.zh);
    });
  }

  function translateHome() {
    var paragraphs = document.querySelectorAll(".page__content > p");
    if (paragraphs[0]) {
      rememberAndSetHtml(paragraphs[0], "我现任<strong>中国科学院自动化研究所多模态人工智能系统全国重点实验室</strong>助理研究员。");
    }
    if (paragraphs[1]) {
      rememberAndSetHtml(paragraphs[1], "我于中南大学自动化专业获得工学学士学位，并于中国科学院自动化研究所控制理论与控制工程专业获得博士学位，导师为<a href=\"https://ia.cas.cn/rcdw/yjy/202404/t20240425_7131998.html\" target=\"_blank\" rel=\"noopener\">王硕研究员</a>。与<a href=\"https://shaoweicui.com/\" target=\"_blank\" rel=\"noopener\">崔少伟博士</a>紧密合作。研究方向包括<strong>视触觉感知、触觉仿真、机器人灵巧操作和触觉基础模型</strong>。");
    }

    document.querySelectorAll(".focus-card__description").forEach(function (item, index) {
      var translations = [
        "高分辨率三维形变、六轴力/力矩与事件触觉传感",
        "面向 Sim2Real 学习的物理驱动多模式视触觉仿真",
        "融合视觉与触觉的接触感知策略，实现精确交互",
        "语言对齐的触觉表征、VTLA 与触觉世界模型"
      ];
      if (translations[index]) rememberAndSet(item, translations[index]);
    });

    document.querySelectorAll(".news-item, .news-list li").forEach(function (item) {
      if (!item.dataset.i18nEnHtml) item.dataset.i18nEnHtml = item.innerHTML;
      item.childNodes.forEach(function (node) {
        if (node.nodeType !== Node.TEXT_NODE) return;
        if (!node.__i18nEnglish) node.__i18nEnglish = node.nodeValue;
        node.nodeValue = node.nodeValue
          .replace(" was published in ", " 发表于 ")
          .replace(" was released as an arXiv preprint for hierarchical visuo-tactile prediction and contact-aware planning.", " 以 arXiv 预印本形式发布，研究分层视触觉预测与接触感知规划。");
        node.__i18nTranslated = true;
      });
    });
  }

  function translateAwards() {
    var awardTitles = [
      "博士学位论文激励计划",
      "机器人与人工智能最佳论文入围奖",
      "Toshio Fukuda 机电一体化最佳论文奖"
    ];
    var awardDescriptions = [
      "入选中国计算机学会智能机器人专业委员会博士学位论文激励计划。",
      "IEEE 机器人与仿生学国际会议（ROBIO）。",
      "IEEE 机电一体化与自动化国际会议（ICMA）。"
    ];
    document.querySelectorAll(".award-item").forEach(function (award, index) {
      if (awardTitles[index]) rememberAndSet(award.querySelector("h2"), awardTitles[index]);
      if (awardDescriptions[index]) rememberAndSet(award.querySelector("p"), awardDescriptions[index]);
    });
  }

  function restoreEnglish() {
    document.querySelectorAll("[data-i18n-en-html]").forEach(function (element) {
      element.innerHTML = element.dataset.i18nEnHtml;
    });
    document.querySelectorAll("[data-i18n-en]").forEach(function (element) {
      element.textContent = element.dataset.i18nEn;
    });
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      var node = walker.currentNode;
      if (node.__i18nTranslated && node.__i18nEnglish) node.nodeValue = node.__i18nEnglish;
    }
  }

  function updateButton() {
    var button = document.getElementById("language-toggle");
    if (!button) return;
    button.textContent = currentLanguage === "zh" ? "EN" : "中文";
    button.setAttribute("aria-label", currentLanguage === "zh" ? "Switch to English" : "切换至中文");
  }

  function applyLanguage(language) {
    currentLanguage = language === "zh" ? "zh" : "en";
    document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";
    document.documentElement.dataset.language = currentLanguage;
    restoreEnglish();
    if (currentLanguage === "zh") {
      translateExactText();
      translateInlineData();
      if (document.querySelector(".research-paper-card")) translateResearch();
      if (document.querySelector(".focus-card, .news-list, .news-item")) translateHome();
      if (document.querySelector(".award-item")) translateAwards();
    }
    updateButton();
  }

  function addToggle() {
    var nav = document.querySelector(".masthead .greedy-nav .visible-links, .masthead ul.visible-links, #site-nav .visible-links");
    var themeControl = document.querySelector(
      ".masthead #theme-toggle, .masthead .theme-toggle, .masthead [data-theme-toggle], " +
      ".masthead button[aria-label*='theme' i], .masthead button[title*='theme' i], " +
      ".masthead .fa-sun, .masthead .fa-adjust, .masthead .fa-circle-half-stroke"
    );
    if ((!nav && !themeControl) || document.getElementById("language-toggle")) return;
    var themeItem = themeControl ? themeControl.closest("li, .masthead__menu-item") : null;
    var wrapper = document.createElement(nav || themeItem ? "li" : "span");
    wrapper.className = "masthead__menu-item language-toggle-item";
    wrapper.style.marginLeft = "0";
    wrapper.style.flex = "0 0 auto";
    if (themeItem) wrapper.style.display = getComputedStyle(themeItem).display;
    var button = document.createElement("button");
    button.id = "language-toggle";
    button.className = "language-toggle";
    button.type = "button";
    button.addEventListener("click", function () {
      var next = currentLanguage === "zh" ? "en" : "zh";
      localStorage.setItem(storageKey, next);
      applyLanguage(next);
    });
    wrapper.appendChild(button);
    if (themeItem && themeItem.parentElement) themeItem.insertAdjacentElement("afterend", wrapper);
    else if (themeControl && themeControl.parentElement) themeControl.insertAdjacentElement("afterend", wrapper);
    else nav.appendChild(wrapper);
  }

  function init() {
    addToggle();
    applyLanguage(currentLanguage);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
