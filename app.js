const copy = {
  en: {
    topline: "local AI runtime",
    hero: {
      title: "A local AI runtime for Apple Silicon.",
      subtitle: "Run models, fine-tune LoRA, benchmark, and evaluate—on one local Mac workflow.",
      note: "No external frontend runtime libraries are used.",
      noteSuffix: "Configure outbound links below to enable all actions.",
    },
    cta: {
      primary: "Get started on GitHub",
      secondary: "Read setup guide",
      tertiary: "View current status",
    },
    section: {
      problem: {
        title: "Local AI is powerful. Operating it is fragmented.",
        heading: "Why this exists",
        copy: "Model serving, tuning, benchmarking, and evaluation are usually split across terminals, scripts, and notebooks. Melix compresses them into one local-first runtime.",
      },
      loop: {
        heading: "Product Loop",
        subheading: "Serve. Fine-tune. Benchmark. Evaluate.",
        cards: [
          { title: "Serve", body: "Run local model sessions on Apple Silicon." },
          { title: "Fine-tune", body: "Train and manage LoRA adapters locally." },
          { title: "Benchmark", body: "Measure model and adapter behavior with repeatable runs." },
          { title: "Evaluate", body: "Compare outputs, results, and workflow quality over time." },
        ],
      },
      arch: {
        heading: "A runtime layer between models and workflows.",
        flow: "Serve → Fine-tune → Benchmark → Evaluate",
        providers: "Model Providers",
        runtime: "Melix Runtime",
        workflows: "Workflows",
        supporting: "Define your model stack once and reuse it across CLI and UI operations.",
      },
      macos: {
        heading: "Built for local operators.",
        copy: "Melix is designed for developers and AI builders who operate local models daily—from CLI workflows to native macOS surfaces and menubar-level control.",
        cli: "Scriptable command flows",
        app: "Native surface, session visibility, and status monitoring",
        menu: "Quick controls and operation snapshots",
      },
      get: {
        heading: "Start from the repo.",
        requirements: "Requirements",
        steps: "Quick Start",
      },
      status: {
        heading: "Current Status",
        tag: "v0.1.0-alpha · developer preview",
        available: {
          title: "v0.1.0-alpha / Available now",
          body: "v0.1.0-alpha · local model workflow, LoRA, benchmark/eval, CLI and macOS surfaces",
        },
        progress: {
          title: "v0.2.0-beta / In progress",
          body: "v0.2.0-beta · stronger workflow state, agent/tool orchestration, long-running automation",
        },
        planned: {
          title: "v0.3.0 / Not yet",
          body: "v0.3.0 · production-grade autonomous agent orchestration, cloud collaboration, hosted service",
        },
      },
    },
    footer: {
      roadmap: "View roadmap",
      community: "Join community",
      issue: "Report an issue",
    },
  },
  zh: {
    topline: "本地 AI 运行时",
    hero: {
      title: "一款面向 Apple Silicon 的本地 AI 运行时。",
      subtitle: "在一套本地化流程中完成模型运行、LoRA 微调、基准测试与评测。",
      note: "页面不引入任何第三方前端运行时库。",
      noteSuffix: "请先配置站点外部链接后再启用全部操作入口。",
    },
    cta: {
      primary: "GitHub 上开始",
      secondary: "查看安装教程",
      tertiary: "查看项目状态",
    },
    section: {
      problem: {
        title: "本地 AI 很强大，但操作链路往往支离破碎。",
        heading: "我们解决什么问题",
        copy: "模型服务、微调、基准和评测常被拆散到终端、脚本、Notebook。Melix 将它们压缩为一个本地优先运行时。",
      },
      loop: {
        heading: "产品循环",
        subheading: "服务化、微调、基准测试、评测",
        cards: [
          { title: "服务化", body: "在 Apple Silicon 上启动本地模型会话。" },
          { title: "微调", body: "在本地训练并管理 LoRA 适配器。" },
          { title: "基准测试", body: "通过可复现运行测量模型与适配器行为。" },
          { title: "评测", body: "持续对比输出结果与工作流质量。" },
        ],
      },
      arch: {
        heading: "连接模型与工作流的运行时层。",
        flow: "服务化 → 微调 → 基准测试 → 评测",
        providers: "模型来源",
        runtime: "Melix Runtime",
        workflows: "工作流",
        supporting: "先定义模型栈后复用到 CLI 与界面操作。",
      },
      macos: {
        heading: "为本地实践者而生。",
        copy: "Melix 面向日常使用本地模型的开发者和 AI 构建者，覆盖 CLI、原生 macOS 界面到菜单栏级控制。",
        cli: "可脚本化的命令化流程",
        app: "原生界面、会话可见性与状态监控",
        menu: "快捷入口与关键指标快照",
      },
      get: {
        heading: "从仓库开始。",
        requirements: "要求 / Requirements",
        steps: "快速开始",
      },
      status: {
        heading: "当前状态",
        tag: "v0.1.0-alpha · 开发者预览",
        available: {
          title: "v0.1.0-alpha / 已支持",
          body: "v0.1.0-alpha · 本地模型工作流、LoRA、基准与评测、CLI 与 macOS 界面",
        },
        progress: {
          title: "v0.2.0-beta / 进行中",
          body: "v0.2.0-beta · 更完整的状态编排、智能体/工具编排、长时运行自动化",
        },
        planned: {
          title: "v0.3.0 / 尚未支持",
          body: "v0.3.0 · 生产级自治智能体编排、云协作、托管服务",
        },
      },
    },
    footer: {
      roadmap: "查看路线图",
      community: "加入讨论",
      issue: "提交问题",
    },
  },
};

const requirementsEn = document.getElementById("requirements-en");
const requirementsZh = document.getElementById("requirements-zh");
const stepsEn = document.getElementById("steps-en");
const stepsZh = document.getElementById("steps-zh");
const langToggle = document.getElementById("lang-toggle");
const linkGithub = document.getElementById("link-github");
const linkCommunity = document.getElementById("link-community");
const linkIssue = document.getElementById("link-issue");
let lang = "en";

const defaultLinks = {
  github: "",
  discussions: "",
  issues: "",
};

function setText(key, value) {
  document.querySelectorAll(`[data-i18n="${key}"]`).forEach((el) => {
    el.textContent = value;
  });
}

function getLinksConfig() {
  try {
    const el = document.getElementById("site-links");
    if (!el) {
      return defaultLinks;
    }
    const raw = el.textContent && el.textContent.trim();
    if (!raw) {
      return defaultLinks;
    }
    const parsed = JSON.parse(raw);
    return {
      ...defaultLinks,
      ...parsed,
    };
  } catch (e) {
    return defaultLinks;
  }
}

function setLinkState(el, href) {
  if (!el) return false;

  const trimmed = typeof href === "string" ? href.trim() : "";
  if (!trimmed || !/^https?:\/\/[A-Za-z0-9.-]+\.[A-Za-z]{2,}/.test(trimmed)) {
    el.href = "#";
    el.classList.add("is-disabled-link");
    el.setAttribute("aria-disabled", "true");
    return false;
  }

  el.href = trimmed;
  el.target = "_blank";
  el.rel = "noreferrer noopener";
  el.classList.remove("is-disabled-link");
  el.removeAttribute("aria-disabled");
  return true;
}

function applyLinkConfig() {
  const links = getLinksConfig();
  const githubReady = setLinkState(linkGithub, links.github);
  const communityReady = setLinkState(linkCommunity, links.discussions);
  const issueReady = setLinkState(linkIssue, links.issues);
  return {
    githubReady,
    communityReady,
    issueReady,
  };
}

function setLang(next) {
  lang = next;
  const locale = copy[lang];
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

  setText("topline", locale.topline);
  setText("hero.title", locale.hero.title);
  setText("hero.subtitle", locale.hero.subtitle);
  setText("cta.primary", locale.cta.primary);
  setText("cta.secondary", locale.cta.secondary);
  setText("cta.tertiary", locale.cta.tertiary);

  setText("section.problem.title", locale.section.problem.title);
  setText("section.problem.heading", locale.section.problem.heading);
  setText("section.problem.copy", locale.section.problem.copy);

  setText("section.loop.heading", locale.section.loop.heading);
  setText("section.loop.subheading", locale.section.loop.subheading);
  locale.section.loop.cards.forEach((card, i) => {
    setText(`section.loop.cards.${i}.title`, card.title);
    setText(`section.loop.cards.${i}.body`, card.body);
  });

  setText("section.arch.heading", locale.section.arch.heading);
  setText("section.arch.flow", locale.section.arch.flow);
  setText("section.arch.providers", locale.section.arch.providers);
  setText("section.arch.runtime", locale.section.arch.runtime);
  setText("section.arch.workflows", locale.section.arch.workflows);
  setText("section.arch.supporting", locale.section.arch.supporting);

  setText("section.macos.heading", locale.section.macos.heading);
  setText("section.macos.copy", locale.section.macos.copy);
  setText("section.macos.cli", locale.section.macos.cli);
  setText("section.macos.app", locale.section.macos.app);
  setText("section.macos.menu", locale.section.macos.menu);

  setText("section.get.heading", locale.section.get.heading);
  setText("section.get.requirements", locale.section.get.requirements);
  setText("section.get.steps", locale.section.get.steps);

  setText("section.status.heading", locale.section.status.heading);
  setText("section.status.tag", locale.section.status.tag);
  setText("section.status.available.title", locale.section.status.available.title);
  setText("section.status.available.body", locale.section.status.available.body);
  setText("section.status.progress.title", locale.section.status.progress.title);
  setText("section.status.progress.body", locale.section.status.progress.body);
  setText("section.status.planned.title", locale.section.status.planned.title);
  setText("section.status.planned.body", locale.section.status.planned.body);

  setText("footer.roadmap", locale.footer.roadmap);
  setText("footer.community", locale.footer.community);
  setText("footer.issue", locale.footer.issue);

  requirementsEn.hidden = lang === "zh";
  requirementsZh.hidden = lang !== "zh";
  stepsEn.hidden = lang === "zh";
  stepsZh.hidden = lang !== "zh";

  const linkState = applyLinkConfig();
  if (linkState.githubReady && linkState.communityReady && linkState.issueReady) {
    setText("hero.note", locale.hero.note);
  } else {
    setText("hero.note", `${locale.hero.note} ${locale.hero.noteSuffix}`);
  }

  langToggle.textContent = lang === "en" ? "中文" : "EN";
}

langToggle.addEventListener("click", () => {
  setLang(lang === "en" ? "zh" : "en");
  langToggle.setAttribute("aria-pressed", lang === "zh" ? "true" : "false");
});

const preferred = navigator.language.toLowerCase();
if (preferred.startsWith("zh")) {
  setLang("zh");
} else {
  setLang("en");
}

langToggle.setAttribute("aria-pressed", lang === "zh" ? "true" : "false");
