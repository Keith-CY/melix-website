const copy = {
  en: {
    topline: "local AI runtime",
    hero: {
      title: "A local AI runtime for Apple Silicon.",
      subtitle: "Run models, fine-tune LoRA, benchmark, and evaluate—on one local Mac workflow.",
      pitch: "Start in minutes, keep all inference and tuning workflows on your own machine.",
      ctaHint: "Start with Quick Start (3 commands, 3 minutes).",
      metric1: "Apple Silicon-first",
      metric2: "Local-first runtime",
      metric3: "No external UI runtime",
      note: "No external frontend runtime libraries are used.",
      noteSuffix: "Configure outbound links below to enable all actions.",
    },
    cta: {
      primary: "Get started on GitHub",
      secondary: "Read setup guide",
      tertiary: "View current status",
    },
    nav: {
      problem: "Problem",
      loop: "Product Loop",
      architecture: "Architecture",
      macos: "macOS",
      getStarted: "Get Started",
      status: "Status",
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
        quick: {
          title: "Start in 3 minutes",
          copy: "Copy and run the commands below.",
          step1Label: "Step 1 · Clone and read the repo",
          nothing: "No commands to copy yet.",
          copyBtn: "Copy commands",
          resetText: "Reset quick start",
          resetHint: "Quick start progress has been reset.",
          copied: "Copied to clipboard",
          copyFailed: "Copy failed. Please select and copy manually.",
          checksPrereqText: "Please copy repository commands first.",
          runPrereqText: "Please copy check commands first.",
          manualCopyHint:
            "Clipboard write failed. Please select the command block and copy manually (Cmd/Ctrl + C).",
          copiedNextText: "Commands copied. Continue with Run checks.",
          mustCopyText: "Please copy commands first.",
          progress: {
            target1: "Next step: copy check commands.",
            target2: "Next step: copy start commands.",
            target3: "Next step: open the setup guide.",
            target3Pending: "Next step: open the setup guide.",
            targetDone: "Next step: view current status.",
            labels: {
              step1: "1/3",
              step2: "2/3",
              step3: "3/3",
            },
            phase1: "Step 1/3 · Copy commands above, then copy checks.",
            phase2: "Step 2/3 · Copy checks, then copy start command.",
            phase3: "Step 3/3 · Copy start commands, then open setup guide.",
            phase3Pending: "Step 3/3 · Start commands copied; open setup guide to complete.",
            done: "Quick start ready. Continue with your setup and check the current status.",
          },
          nextNothingText: "No check commands to copy.",
          nextCopyBtn: "Copy checks",
          nextReadyText: "Checks copied. Continue with setup.",
          step2Label: "Step 2 · Verify tooling versions",
          nextCopySuccess: "Check commands copied.",
          nextCopyFailed: "Copy checks failed. Please copy manually.",
          commands: [
            "git clone https://github.com/Keith-CY/melix.git",
            "cd melix",
            "cat README.md",
          ],
          nextLink: "Run checks",
          nextHeading: "Run your first local checks",
          nextCopy: "Run these commands after cloning to verify your environment.",
          nextCommands: [
            "swift --version",
            "python --version",
            "uv --version",
          ],
          runHeading: "Then continue with project setup",
          runCopy:
            "Go to setup guide to follow the right command for starting the service.",
          runCommands: ["make bootstrap && make proto && bash scripts/dev_up.sh"],
          step3Label: "Step 3 · Start local services",
          runCopyBtn: "Copy start commands",
          runCopySuccess: "Start commands copied.",
          runCopyFailed: "Copy start commands failed. Please copy manually.",
          runCopyNothingText: "No start commands to copy.",
          runLinkText: "Open setup guide",
          runLinkAria: "Open project setup documentation",
          runUrl: "https://github.com/Keith-CY/melix/blob/main/docs/getting-started.md",
        },
      },
      status: {
        heading: "Current Status",
        tag: "v0.1.0-alpha · developer preview",
        releaseLabel: "Deployment source",
        releaseSource: "main",
        updatedLabel: "Updated",
        branchLabel: "Branch",
        deployIdLabel: "Deployment id",
        deployIdFallback: "n/a",
        commitLabel: "Commit",
        commitFallback: "n/a",
        liveLabel: "Live deployment check",
        liveChecking: "Checking deployment now",
        liveOnline: "Online now",
        liveOffline: "Could not reach deployment",
        liveError: "Connection check failed",
        liveUnknown: "Unknown",
        liveDetailChecking: "Issuing request to verify deployment status...",
        liveDetailOnline:
          "Deployment responded normally. Traffic is flowing to the latest build.",
        liveDetailOffline:
          "Deployment returned a non-200 response. Please check Vercel logs.",
        liveDetailError:
          "Request failed before receiving headers. Check network or security headers.",
        liveCheckedLabel: "Checked",
        liveLatencyLabel: "Latency",
        liveEndpoint: "Endpoint",
        copyHint: "Click to copy",
        copiedText: "Copied",
        copyUnavailableText: "No value yet",
        copyHintRow: "Tip: click Deployment id or Commit to copy.",
        autoRefresh: "Auto refresh",
        autoRefreshOn: "Auto refresh: ON",
        autoRefreshOff: "Auto refresh: OFF",
        refreshNow: "Check now",
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
      pitch: "几分钟内启动本地 AI 工作流，推理与微调全部留在你的机器上。",
      ctaHint: "从“快速开始”入手，3 步 3 分钟起步。",
      metric1: "苹果芯片优先",
      metric2: "本地优先运行时",
      metric3: "无额外前端运行时依赖",
      note: "页面不引入任何第三方前端运行时库。",
      noteSuffix: "请先配置站点外部链接后再启用全部操作入口。",
    },
    cta: {
      primary: "GitHub 上开始",
      secondary: "查看安装教程",
      tertiary: "查看项目状态",
    },
    nav: {
      problem: "问题",
      loop: "产品循环",
      architecture: "架构",
      macos: "macOS",
      getStarted: "快速开始",
      status: "状态",
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
        quick: {
          title: "三分钟快速开始",
          copy: "复制下面命令并执行。",
          step1Label: "第 1 步 · 克隆仓库并读取说明",
          nothing: "暂无可复制命令。",
          copyBtn: "复制命令",
          resetText: "重置快速开始",
          resetHint: "已重置快速开始状态。",
          copied: "已复制到剪贴板",
          copyFailed: "复制失败，请手动选中并复制。",
          checksPrereqText: "请先复制仓库命令。",
          runPrereqText: "请先复制校验命令。",
          manualCopyHint: "复制失败。请手动选中命令块并复制（Cmd/Ctrl + C）。",
          copiedNextText: "已复制。继续执行校验。",
          mustCopyText: "请先复制命令。",
          progress: {
            target1: "下一步：复制校验命令。",
            target2: "下一步：复制启动命令。",
            target3: "下一步：打开设置文档。",
            target3Pending: "下一步：打开设置文档。",
            targetDone: "下一步：查看项目状态。",
            labels: {
              step1: "1/3",
              step2: "2/3",
              step3: "3/3",
            },
            phase1: "第 1/3 步 · 已复制仓库命令，请复制校验命令。",
            phase2: "第 2/3 步 · 已复制校验命令，请复制启动命令。",
            phase3: "第 3/3 步 · 已复制启动命令，请打开设置文档。",
            phase3Pending:
              "第 3/3 步 · 启动命令已复制，请打开设置文档后完成。",
            done: "快速开始完成。继续完成设置后查看项目状态。",
          },
          nextNothingText: "没有可复制的校验命令。",
          nextCopyBtn: "复制校验命令",
          nextReadyText: "校验命令已复制。继续设置。",
          step2Label: "第 2 步 · 核对本地工具版本",
          nextCopySuccess: "校验命令已复制。",
          nextCopyFailed: "复制校验命令失败，请手动复制。",
          commands: [
            "git clone https://github.com/Keith-CY/melix.git",
            "cd melix",
            "cat README.md",
          ],
          nextLink: "进行校验",
          nextHeading: "先做环境检查",
          nextCopy: "克隆后先执行这些命令，确认本机环境。",
          nextCommands: [
            "swift --version",
            "python --version",
            "uv --version",
          ],
          runHeading: "继续项目设置",
          runCopy: "查看仓库说明执行服务启动步骤。",
          runCommands: ["make bootstrap && make proto && bash scripts/dev_up.sh"],
          step3Label: "第 3 步 · 启动本地服务",
          runCopyBtn: "复制启动命令",
          runCopySuccess: "启动命令已复制。",
          runCopyFailed: "复制启动命令失败，请手动复制。",
          runCopyNothingText: "没有可复制的启动命令。",
          runLinkText: "打开设置文档",
          runLinkAria: "打开设置文档",
          runUrl: "https://github.com/Keith-CY/melix/blob/main/docs/getting-started.md",
        },
      },
      status: {
        heading: "当前状态",
        tag: "v0.1.0-alpha · 开发者预览",
        releaseLabel: "部署来源",
        releaseSource: "main",
        updatedLabel: "更新于",
        branchLabel: "分支",
        deployIdLabel: "部署 ID",
        deployIdFallback: "未提供",
        commitLabel: "提交",
        commitFallback: "无信息",
        liveLabel: "实时部署检查",
        liveChecking: "正在实时检查",
        liveOnline: "目前在线",
        liveOffline: "无法访问部署",
        liveError: "连接检查失败",
        liveUnknown: "未知",
        liveDetailChecking: "正在请求以确认当前部署状态...",
        liveDetailOnline: "部署返回正常响应，流量可达最新构建。",
        liveDetailOffline: "部署返回非 200 响应，请检查 Vercel 日志。",
        liveDetailError: "请求未能拿到响应头，请检查网络或安全策略。",
        liveCheckedLabel: "上次检查",
        liveLatencyLabel: "延迟",
        liveEndpoint: "检测端点",
        copyHint: "点击复制",
        copiedText: "已复制",
        copyUnavailableText: "暂无可复制值",
        copyHintRow: "提示：点击“部署 ID”或“提交”可复制。",
        autoRefresh: "自动刷新",
        autoRefreshOn: "自动刷新：开启",
        autoRefreshOff: "自动刷新：关闭",
        refreshNow: "立即检查",
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
const quickStartTitle = document.querySelector('[data-step="1"]');
const quickStartCmd = document.getElementById("quickstart-cmd");
const quickStartChecks = document.getElementById("quickstart-checks");
const quickStartCheckCmd = document.getElementById("quickstart-check-cmd");
const quickStartCheckTitle = document.getElementById("quickstart-check-heading");
const quickStartCheckIntro = document.getElementById("quickstart-check-copy");
const copyQuickStartChecks = document.getElementById("copy-quickstart-checks");
const quickStartRun = document.getElementById("quickstart-run");
const quickStartRunTitle = document.getElementById("quickstart-run-heading");
const quickStartRunIntro = document.getElementById("quickstart-run-copy");
const quickStartRunCmd = document.getElementById("quickstart-run-cmd");
const quickStartRunLink = document.getElementById("quickstart-run-link");
const copyQuickStartRun = document.getElementById("copy-quickstart-run");
const quickStartStep1Label = document.getElementById("quickstart-step1-label");
const quickStartStep2Label = document.getElementById("quickstart-step2-label");
const quickStartStep3Label = document.getElementById("quickstart-step3-label");
const copyQuickStart = document.getElementById("copy-quickstart");
const quickStartReset = document.getElementById("quickstart-reset");
const copyQuickStartFeedback = document.getElementById("quickstart-feedback");
const quickStartNext = document.getElementById("quickstart-next");
const quickStartProgressLabel = document.getElementById("quickstart-progress");
const quickStartStatusLink = document.getElementById("quickstart-status-link");
const quickStartProgressTarget = document.getElementById(
  "quickstart-progress-target"
);
const quickStartProgressSummary = document.getElementById(
  "quickstart-progress-summary"
);
const quickStartProgressStep1 = document.getElementById("quickstart-progress-step-1");
const quickStartProgressStep2 = document.getElementById("quickstart-progress-step-2");
const quickStartProgressStep3 = document.getElementById("quickstart-progress-step-3");
let quickStartFocusTimer = null;
let quickStartRevealTimer = null;
let quickStartPhaseTargetHint = "";
let quickStartPhaseHintTimer = null;
const statusSource = document.getElementById("status-source");
const statusLastUpdated = document.getElementById("status-last-updated");
const statusBranch = document.getElementById("status-branch");
const statusDeployId = document.getElementById("status-deploy-id");
const statusCommit = document.getElementById("status-commit");
const statusLivePill = document.getElementById("status-live-pill");
const statusLiveDetail = document.getElementById("status-live-detail");
const statusLiveRefresh = document.getElementById("status-live-refresh");
const statusLiveAutoRefresh = document.getElementById("status-live-autorefresh");
const statusLiveMetrics = document.getElementById("status-live-metrics");
const statusCopyToast = document.getElementById("status-copy-toast");
const langToggle = document.getElementById("lang-toggle");
const linkGithub = document.getElementById("link-github");
const linkCommunity = document.getElementById("link-community");
const linkIssue = document.getElementById("link-issue");
const linkRoadmap = document.getElementById("link-roadmap");
const footerYear = document.getElementById("footer-year");
const sectionNavLinks = Array.from(
  document.querySelectorAll('.topbar .nav-links a[href^="#"]')
);
const navLinks = document.querySelector(".topbar .nav-links");
let lang = "en";
let currentLocale = copy.en;
let commandsCopied = false;
let checksCopied = false;
let runCopied = false;
let setupGuideOpened = false;
let isRefreshingStatusLive = false;
let liveStatusRefreshTimer = null;
let isLiveAutoRefreshEnabled = true;
let activeNavRaf = null;
let activeNavId = "";
let activeNavObserver = null;
let activeNavStableTimer = null;
let activeNavStableTarget = null;
let activeNavStaleTimer = null;
let activeNavInteractionToken = 0;
let activeNavLastInteractionAt = 0;
let activeNavStrongInteractionToken = 0;
let activeNavLastStrongInteractionAt = 0;
let revealObserver = null;

let statusMetaCopyTimer = null;
let statusMetaToastTimer = null;
const quickStartStorageKey = "melixQuickStartProgressV1";
const liveRefreshEnabledStorageKey = "melixLiveAutoRefreshEnabled";
const LIVE_CHECK_INTERVAL_MS = 60 * 1000;
const LIVE_CHECK_PATHS = ["/api/health", "/api/status", "/health", "/healthz", "/"];
const MOBILE_NAV_QUERY = "(max-width: 900px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const ACTIVE_NAV_STABILITY_MS = 110;
const ACTIVE_NAV_STALE_FALLBACK_MS = 2000;
const NAV_INTERACTION_WINDOW_MS = ACTIVE_NAV_STALE_FALLBACK_MS;
const NAV_DEBUG_QUERY = "debugNav";
const NAV_DEBUG_STORAGE_KEY = "melixNavDebug";
const LANG_STORAGE_KEY = "melixLang";
const urlSearch = new URLSearchParams(window.location.search);
const debugNav = urlSearch.has(NAV_DEBUG_QUERY) || urlSearch.get("debug") === "1";
const localNavDebug = (() => {
  try {
    return localStorage.getItem(NAV_DEBUG_STORAGE_KEY) === "1";
  } catch {
    return false;
  }
})();
const shouldDebugNav = !!(debugNav || localNavDebug);
if (debugNav) {
  try {
    localStorage.setItem(NAV_DEBUG_STORAGE_KEY, "1");
  } catch {
    // ignore.
  }
}

function resolvePreferredLanguage() {
  const queryLang = urlSearch.get("lang");
  if (queryLang === "zh" || queryLang === "en") {
    return queryLang;
  }

  try {
    const persistedLang = localStorage.getItem(LANG_STORAGE_KEY);
    if (persistedLang === "zh" || persistedLang === "en") {
      return persistedLang;
    }
  } catch {
    // localStorage is unavailable in some contexts.
  }

  return navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
}

function persistQuickStartProgress() {
  try {
    const payload = {
      version: 1,
      commandsCopied,
      checksCopied: checksCopied && commandsCopied,
      runCopied: runCopied && checksCopied,
      setupGuideOpened: setupGuideOpened && runCopied,
    };
    localStorage.setItem(quickStartStorageKey, JSON.stringify(payload));
  } catch {
    // localStorage may be unavailable (Safari private mode / browser policy).
  }
}

function restoreQuickStartProgress() {
  try {
    const raw = localStorage.getItem(quickStartStorageKey);
    if (!raw) {
      return;
    }
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") {
      return;
    }
    commandsCopied = Boolean(parsed.commandsCopied);
    checksCopied = Boolean(parsed.checksCopied) && commandsCopied;
    runCopied = Boolean(parsed.runCopied) && checksCopied;
    setupGuideOpened = Boolean(parsed.setupGuideOpened) && runCopied;
  } catch {
    // Ignore corrupted storage states.
  }
}

function applyRestoredQuickStartState() {
  restoreQuickStartProgress();
  if (commandsCopied) {
    showNextPhase();
  }
  if (checksCopied) {
    showRunPhase();
  }
  setCheckLinkReady(checksCopied);
  setRunLinkReady(checksCopied && quickStartRunLink?.dataset?.readyRunUrl === "true");
  setQuickStartProgressState();
}

function resetQuickStartProgress() {
  commandsCopied = false;
  checksCopied = false;
  runCopied = false;
  setupGuideOpened = false;
  try {
    localStorage.removeItem(quickStartStorageKey);
  } catch {
    // ignore storage permission errors.
  }
  if (quickStartChecks) {
    quickStartChecks.hidden = true;
  }
  if (quickStartRun) {
    quickStartRun.hidden = true;
  }
  if (quickStartRevealTimer) {
    clearTimeout(quickStartRevealTimer);
    quickStartRevealTimer = null;
  }
  if (quickStartFocusTimer) {
    clearTimeout(quickStartFocusTimer);
    quickStartFocusTimer = null;
  }
  if (quickStartPhaseHintTimer) {
    clearTimeout(quickStartPhaseHintTimer);
    quickStartPhaseHintTimer = null;
  }
  quickStartPhaseTargetHint = "";
  setQuickStartProgressState();
}

function updateQuickStartResetVisibility() {
  if (!quickStartReset) {
    return;
  }
  const hasProgress =
    commandsCopied || checksCopied || runCopied || setupGuideOpened;
  quickStartReset.hidden = !hasProgress;
}

const defaultLinks = {
  github: "",
  discussions: "",
  issues: "",
  roadmap: "",
};

function setText(key, value) {
  document.querySelectorAll(`[data-i18n="${key}"]`).forEach((el) => {
    el.textContent = value;
  });
}

function getFallbackCopyText(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.top = "-9999px";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  textarea.focus();
  let copied = false;
  try {
    copied = document.execCommand("copy");
  } finally {
    document.body.removeChild(textarea);
  }
  return copied;
}

function setCopyFeedback(message, isError = false) {
  if (!copyQuickStartFeedback) {
    return;
  }
  copyQuickStartFeedback.textContent = message;
  copyQuickStartFeedback.style.color = isError ? "var(--danger)" : "var(--teal)";
  copyQuickStartFeedback.classList.add("visible");
  clearTimeout(setCopyFeedback._timer);
  const showMs = message && message.length >= 160 ? 4200 : 2200;
  setCopyFeedback._timer = setTimeout(() => {
    copyQuickStartFeedback.textContent = "";
    copyQuickStartFeedback.classList.remove("visible");
  }, showMs);
}

function showStatusMetaCopyToast(message, isError = false) {
  if (!statusCopyToast) {
    return;
  }
  statusCopyToast.textContent = message;
  statusCopyToast.classList.remove("is-hidden", "is-success", "is-error");
  statusCopyToast.classList.add(isError ? "is-error" : "is-success");
  if (statusMetaToastTimer) {
    clearTimeout(statusMetaToastTimer);
  }
  statusMetaToastTimer = setTimeout(() => {
    statusCopyToast.classList.add("is-hidden");
  }, 1600);
}

function showCopyDone(button, doneText) {
  if (!button) {
    return;
  }
  const restoredText = button.dataset.copyIdleText || button.textContent;
  const nextText = doneText || button.dataset.copiedText || restoredText;
  button.dataset.copyIdleText = restoredText;
  button.textContent = nextText;
  button.classList.add("copy-done");
  clearTimeout(button._copyDoneTimer);
  button._copyDoneTimer = setTimeout(() => {
    button.textContent = button.dataset.copyIdleText;
    button.classList.remove("copy-done");
  }, 1400);
}

function setLinkPhaseState(el, enabled, disabledHint = "") {
  if (!el) {
    return;
  }
  if (enabled) {
    el.classList.remove("is-disabled-link");
    el.removeAttribute("disabled");
    el.removeAttribute("aria-disabled");
    el.removeAttribute("title");
    el.removeAttribute("tabindex");
    return;
  }
  el.classList.add("is-disabled-link");
  el.setAttribute("aria-disabled", "true");
  el.setAttribute("tabindex", "-1");
  if (el.tagName && el.tagName.toLowerCase() === "button") {
    el.setAttribute("disabled", "true");
  }
  if (disabledHint) {
    el.setAttribute("title", disabledHint);
  }
}

function formatDate(locale, rawDate) {
  const modified = rawDate || document.lastModified;
  const d = new Date(modified);
  if (Number.isNaN(d.getTime())) {
    return "";
  }
  return new Intl.DateTimeFormat(locale === "zh" ? "zh-CN" : "en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    hour12: locale === "en",
  }).format(d);
}

function formatDuration(ms) {
  if (!Number.isFinite(ms) || ms <= 0) {
    return "0ms";
  }
  if (ms < 1000) {
    return `${Math.round(ms)}ms`;
  }
  return `${(ms / 1000).toFixed(2)}s`;
}

function stopLiveStatusTimer() {
  if (!liveStatusRefreshTimer) {
    return;
  }
  clearInterval(liveStatusRefreshTimer);
  liveStatusRefreshTimer = null;
}

function startLiveStatusTimer() {
  if (!isLiveAutoRefreshEnabled) {
    return;
  }
  if (document && document.visibilityState === "hidden") {
    return;
  }
  stopLiveStatusTimer();
  liveStatusRefreshTimer = setInterval(() => {
    void refreshLiveDeployment(currentLocale);
  }, LIVE_CHECK_INTERVAL_MS);
}

async function fetchLiveProbeStatus(path) {
  const url = new URL(path, window.location.origin);
  const startedAt = performance.now();
  const response = await fetch(url.toString(), {
    method: "GET",
    cache: "no-store",
    headers: { Accept: "application/json,text/plain,*/*;q=0.8" },
  });
  const finishedAt = performance.now();

  const statusCode = response.status || 0;
  const latencyMs = Math.max(0, finishedAt - startedAt);
  const checkedAt = formatDate(lang, new Date().toISOString());
  const lastModified = formatDate(lang, response.headers.get("last-modified"));
  const statusType = response.headers.get("content-type") || "";
  let probeNotes = "";

  if (response.ok && statusType.includes("application/json")) {
    try {
      const payload = await response.json();
      if (payload && typeof payload === "object") {
        const parts = [];
        if (Object.prototype.hasOwnProperty.call(payload, "status")) {
          parts.push(`status:${payload.status}`);
        }
        if (Object.prototype.hasOwnProperty.call(payload, "ok")) {
          parts.push(`ok:${payload.ok}`);
        }
        if (Object.prototype.hasOwnProperty.call(payload, "healthy")) {
          parts.push(`healthy:${payload.healthy}`);
        }
        if (parts.length) {
          probeNotes = ` · ${parts.join(", ")}`;
        }
      }
    } catch {
      // keep fallback behavior for non-json parse payloads.
    }
  }

  return {
    path,
    response,
    statusCode,
    checkedAt,
    latencyMs,
    lastModified,
    probeNotes,
    statusType,
  };
}

async function performLiveProbe() {
  let lastError = null;

  for (const path of LIVE_CHECK_PATHS) {
    try {
      const probe = await fetchLiveProbeStatus(path);
      if (probe.response.status === 404 && path !== "/") {
        lastError = new Error("Health endpoint missing");
        continue;
      }
      return probe;
    } catch (error) {
      lastError = error;
      if (path === LIVE_CHECK_PATHS[LIVE_CHECK_PATHS.length - 1]) {
        throw lastError;
      }
    }
  }
  if (lastError) {
    throw lastError;
  }
  throw new Error("No health probes available");
}

function persistLiveRefreshPreference(enabled) {
  try {
    localStorage.setItem(liveRefreshEnabledStorageKey, enabled ? "1" : "0");
  } catch {
    // localStorage not writable.
  }
}

function restoreLiveRefreshPreference() {
  try {
    const stored = localStorage.getItem(liveRefreshEnabledStorageKey);
    if (stored === "0") {
      isLiveAutoRefreshEnabled = false;
    }
  } catch {
    // localStorage may be blocked.
  }
}

function setLiveRefreshControl(localeCopy = currentLocale) {
  if (!statusLiveAutoRefresh) {
    return;
  }
  const statusLocale = getStatusLocale(localeCopy);
  statusLiveAutoRefresh.textContent = isLiveAutoRefreshEnabled
    ? statusLocale.autoRefreshOn || "Auto refresh: ON"
    : statusLocale.autoRefreshOff || "Auto refresh: OFF";
  statusLiveAutoRefresh.setAttribute(
    "aria-pressed",
    isLiveAutoRefreshEnabled ? "true" : "false"
  );
}

document.addEventListener("visibilitychange", () => {
  if (!document) {
    return;
  }
  if (document.visibilityState === "hidden") {
    stopLiveStatusTimer();
    return;
  }
  if (isLiveAutoRefreshEnabled) {
    void refreshLiveDeployment(currentLocale);
  }
  startLiveStatusTimer();
});

const navScrollTargets = sectionNavLinks
  .map((link) => {
    const href = link.getAttribute("href");
    const target = href ? document.querySelector(href) : null;
    if (!target) {
      return null;
    }
    return { link, target };
  })
  .filter(Boolean);

function getActiveNavByScrollY() {
  if (!navScrollTargets.length) {
    return null;
  }
  const offset = 150;
  const viewY = window.scrollY + offset;
  let activeItem = navScrollTargets[0];
  for (const item of navScrollTargets) {
    if (item.target.offsetTop <= viewY) {
      activeItem = item;
    }
  }
  return activeItem;
}

function logNavDebug(message, payload = {}) {
  if (!shouldDebugNav) {
    return;
  }
  console.debug("[melix-nav]", message, payload);
}

function markActiveNavInteraction(isStrong = true) {
  activeNavInteractionToken += 1;
  activeNavLastInteractionAt = performance.now();
  if (isStrong) {
    activeNavStrongInteractionToken += 1;
    activeNavLastStrongInteractionAt = activeNavLastInteractionAt;
  }
  logNavDebug("interaction", {
    token: activeNavInteractionToken,
    strongToken: activeNavStrongInteractionToken,
    isStrong,
  });
}

function getActiveNavFromEntries(entries) {
  const visibleEntries = entries.filter(
    (entry) => entry.isIntersecting && entry.target && entry.target.id
  );
  if (!visibleEntries.length) {
    return null;
  }
  return visibleEntries.reduce((best, current) => {
    const bestScore =
      best.intersectionRatio * 1000 - Math.abs(best.boundingClientRect.top);
    const currentScore =
      current.intersectionRatio * 1000 - Math.abs(current.boundingClientRect.top);
    return currentScore > bestScore ? current : best;
  });
}

function applyActiveNav(activeItem) {
  if (!navScrollTargets.length) {
    return;
  }
  if (!activeItem) {
    activeItem = getActiveNavByScrollY();
  }
  if (!activeItem) {
    return;
  }

  navScrollTargets.forEach((item) => {
    const isActive = item === activeItem;
    item.link.classList.toggle("is-active", isActive);
    if (isActive) {
      item.link.setAttribute("aria-current", "page");
      if (activeNavId !== activeItem.target.id) {
        activeNavId = activeItem.target.id;
        if (navLinks && navLinks.contains(activeItem.link)) {
          const navRect = navLinks.getBoundingClientRect();
          const linkRect = activeItem.link.getBoundingClientRect();
          const needsVisible =
            linkRect.left < navRect.left + 8 || linkRect.right > navRect.right - 8;
          const shouldAutoScroll = window.matchMedia(MOBILE_NAV_QUERY).matches;
          if (needsVisible && shouldAutoScroll) {
            const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches;
            activeItem.link.scrollIntoView({
              behavior: reducedMotion ? "auto" : "smooth",
              block: "nearest",
              inline: "nearest",
            });
          }
        }
      }
      return;
    }
    item.link.removeAttribute("aria-current");
  });
}

function updateActiveNav() {
  scheduleActiveNavCommit(getActiveNavByScrollY());
}

function scheduleActiveNavCommit(candidateItem) {
  if (!candidateItem) {
    return;
  }
  if (activeNavStableTarget === candidateItem && activeNavStableTimer) {
    return;
  }
  activeNavStableTarget = candidateItem;
  if (activeNavStableTimer) {
    clearTimeout(activeNavStableTimer);
  }
  activeNavStableTimer = setTimeout(() => {
    activeNavStableTimer = null;
    const nextActive = activeNavStableTarget;
    activeNavStableTarget = null;
    applyActiveNav(nextActive);
  }, ACTIVE_NAV_STABILITY_MS);
  logNavDebug("schedule-commit", {
    target: candidateItem?.target?.id || "unknown",
    delay: ACTIVE_NAV_STABILITY_MS,
  });
}

function scheduleActiveNavFallback() {
  if (!("requestAnimationFrame" in window)) {
    return;
  }
  const fallbackToken = activeNavInteractionToken;
  if (activeNavStaleTimer) {
    clearTimeout(activeNavStaleTimer);
  }
  activeNavStaleTimer = setTimeout(() => {
    activeNavStaleTimer = null;
    if (activeNavInteractionToken !== fallbackToken) {
      logNavDebug("fallback-aborted-token-changed");
      return;
    }
    if (
      activeNavLastStrongInteractionAt &&
      performance.now() - activeNavLastStrongInteractionAt <
        NAV_INTERACTION_WINDOW_MS
    ) {
      logNavDebug("fallback-aborted-strong-interaction-window");
      return;
    }
    const next = getActiveNavByScrollY();
    logNavDebug("fallback-commit", { target: next?.target?.id || "none" });
    scheduleActiveNavCommit(next);
  }, ACTIVE_NAV_STALE_FALLBACK_MS);
  logNavDebug("fallback-scheduled", { delay: ACTIVE_NAV_STALE_FALLBACK_MS });
}

function setupActiveNavObserver() {
  if (!("IntersectionObserver" in window)) {
    return false;
  }
  if (!navScrollTargets.length || !navLinks) {
    return false;
  }
  if (activeNavObserver) {
    activeNavObserver.disconnect();
  }
  if (activeNavStableTimer) {
    clearTimeout(activeNavStableTimer);
    activeNavStableTimer = null;
  }
  if (activeNavStaleTimer) {
    clearTimeout(activeNavStaleTimer);
    activeNavStaleTimer = null;
  }
  activeNavObserver = new IntersectionObserver(
    (entries) => {
      const activeEntry = getActiveNavFromEntries(entries);
      if (!activeEntry) {
        logNavDebug("io-empty");
        scheduleActiveNavFallback();
        return;
      }
      logNavDebug("io-active", {
        id: activeEntry.target && activeEntry.target.id,
        ratio: activeEntry.intersectionRatio,
        top: activeEntry.boundingClientRect?.top,
      });
      if (activeNavStaleTimer) {
        clearTimeout(activeNavStaleTimer);
        activeNavStaleTimer = null;
      }
      const activeItem = navScrollTargets.find(
        (item) => item.target === activeEntry.target
      );
      if (activeItem) {
        scheduleActiveNavCommit(activeItem);
      }
    },
    {
      rootMargin: "-120px 0px -45% 0px",
      threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
    }
  );

  navScrollTargets.forEach((item) => {
    activeNavObserver.observe(item.target);
  });
  return true;
}

function scheduleActiveNavUpdate() {
  if (activeNavRaf) {
    return;
  }
  activeNavRaf = requestAnimationFrame(() => {
    activeNavRaf = null;
    updateActiveNav();
  });
}

function setupRevealAnimations() {
  const revealNodes = Array.from(document.querySelectorAll(".reveal"));
  if (!revealNodes.length) {
    return;
  }
  if (!("IntersectionObserver" in window)) {
    revealNodes.forEach((node) => node.classList.add("is-revealed"));
    return;
  }

  const heroReveal = document.getElementById("hero");
  if (heroReveal && heroReveal.classList.contains("reveal")) {
    heroReveal.classList.add("is-revealed");
  }

  if (revealObserver) {
    revealObserver.disconnect();
  }
  revealNodes.forEach((node, index) => {
    node.style.setProperty("--reveal-delay", `${Math.min(index, 6) * 80}ms`);
  });
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || !entry.target) {
          return;
        }
        entry.target.classList.add("is-revealed");
        revealObserver?.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.1,
    }
  );

  revealNodes.forEach((node) => {
    revealObserver.observe(node);
  });
}

function setupStatusMetaCopyHandlers() {
  const copyItems = Array.from(document.querySelectorAll(".status-meta-item.is-copyable"));
  if (!copyItems.length) {
    return;
  }

  const canCopy = !!(
    navigator.clipboard && typeof navigator.clipboard.writeText === "function"
  );

  copyItems.forEach((item) => {
    if (item.dataset.boundStatusCopy === "1") {
      return;
    }
    item.dataset.boundStatusCopy = "1";
    item.setAttribute("tabindex", "0");
    item.setAttribute("role", "button");
    const label =
      item.querySelector("span[data-i18n], span:first-child")?.textContent?.trim() ||
      "status value";
    item.dataset.copyTargetLabel = label;

    const copyStatusMeta = async () => {
      if (item.getAttribute("aria-disabled") === "true") {
        const unavailableText = item.dataset.copyUnavailableText || "No value yet";
        showCopyFeedback(unavailableText, true);
        showStatusMetaCopyToast(unavailableText, true);
        item.classList.add("is-copyable-unavailable-pulse");
        clearTimeout(item._copyUnavailablePulseTimer);
        item._copyUnavailablePulseTimer = setTimeout(() => {
          item.classList.remove("is-copyable-unavailable-pulse");
        }, 900);
        return;
      }
      const targetId = item.dataset.copyTarget;
      const target = targetId ? document.getElementById(targetId) : null;
      const fallbackText = item.dataset.copyFallback || "n/a";
      const copyUnavailableText = item.dataset.copyUnavailableText || "No value yet";
      const text = target ? (target.textContent || "").trim() : "";

      if (!text || text === fallbackText) {
        showStatusMetaCopyToast(`${copyUnavailableText}.`, true);
        showCopyFeedback(`${copyUnavailableText}.`, true);
        return;
      }

      let copied = false;
      if (canCopy) {
        try {
          await navigator.clipboard.writeText(text);
          copied = true;
        } catch {
          copied = false;
        }
      }

      if (!copied) {
        copied = getFallbackCopyText(text);
      }

      if (!copied) {
        showManualCopyFallback(item, text);
        showStatusMetaCopyToast(item.dataset.manualCopyHint || copyUnavailableText, true);
        return;
      }

      if (statusMetaCopyTimer) {
        clearTimeout(statusMetaCopyTimer);
      }
      item.dataset.copied = "1";
      item.classList.add("is-copyable-copied");
      item.classList.add("is-copyable-just-copied");
      showStatusMetaCopyToast(item.dataset.copyDone || "Copied", false);
      statusMetaCopyTimer = setTimeout(() => {
        delete item.dataset.copied;
        item.classList.remove("is-copyable-copied");
        item.classList.remove("is-copyable-just-copied");
      }, 1300);
    };

    item.addEventListener("click", async () => {
      await copyStatusMeta();
    });

    item.addEventListener("keydown", (event) => {
      if (
        event.key !== "Enter" &&
        event.key !== " " &&
        event.key !== "Spacebar"
      ) {
        return;
      }
      event.preventDefault();
      void copyStatusMeta();
    });
  });
}

function applyStatusMetaCopyLocale(localeCopy = currentLocale) {
  const statusLocale = getStatusLocale(localeCopy);
  const copyHint = statusLocale.copyHint || "Click to copy";
  const copiedText = statusLocale.copiedText || "Copied";
  const copyUnavailableText = statusLocale.copyUnavailableText || "No value yet";
  const copyItems = Array.from(document.querySelectorAll(".status-meta-item.is-copyable"));

  copyItems.forEach((item) => {
    const targetId = item.dataset.copyTarget || "";
    const fallbackMap = {
      "status-deploy-id": statusLocale.deployIdFallback || "n/a",
      "status-commit": statusLocale.commitFallback || "n/a",
    };

    item.dataset.copyHint = copyHint;
    item.dataset.copyDone = copiedText;
    item.dataset.copyUnavailableText = copyUnavailableText;
    const target = targetId
      ? document.getElementById(targetId)
      : null;
    const value = target ? (target.textContent || "").trim() : "";
    const fallback = fallbackMap[targetId] || statusLocale.deployIdFallback || "n/a";
    item.dataset.copyFallback = fallback;

    const hasValue = Boolean(value && value !== fallback);
    item.classList.toggle("is-copyable-disabled", !hasValue);
    item.setAttribute("aria-disabled", hasValue ? "false" : "true");
    item.setAttribute(
      "aria-label",
      `${copyHint} ${item.dataset.copyTargetLabel || "status value"}`
    );
    if (!hasValue) {
      item.classList.add("is-copyable-disabled");
      item.setAttribute(
        "title",
        `${copyUnavailableText}: ${item.dataset.copyTargetLabel || "status value"}`
      );
    } else {
      item.removeAttribute("title");
      item.classList.remove("is-copyable-disabled");
    }
  });
}

function getStatusLocale(localeCopy) {
  return localeCopy && localeCopy.section && localeCopy.section.status
    ? localeCopy.section.status
    : copy.en.section.status;
}

function renderStatusLive(state, pillText, detailText) {
  if (!statusLivePill || !statusLiveDetail) {
    return;
  }
  statusLivePill.classList.remove(
    "status-live-pill-checking",
    "status-live-pill-online",
    "status-live-pill-offline",
    "status-live-pill-error",
    "status-live-pill-unknown"
  );
  statusLivePill.classList.add(`status-live-pill-${state}`);
  statusLivePill.textContent = pillText;
  statusLiveDetail.textContent = detailText;
}

function renderStatusLiveMetrics(statusLocale, checkedAt, latencyMs = null) {
  if (!statusLiveMetrics) {
    return;
  }
  const checkedLabel =
    statusLocale.liveCheckedLabel || copy.en.section.status.liveCheckedLabel || "Checked";
  const latencyLabel =
    statusLocale.liveLatencyLabel || copy.en.section.status.liveLatencyLabel || "Latency";
  const latencyValue =
    typeof latencyMs === "number"
      ? formatDuration(latencyMs)
      : statusLocale.liveUnknown || copy.en.section.status.liveUnknown || "Unknown";
  const checkedValue = checkedAt || statusLocale.liveUnknown || copy.en.section.status.liveUnknown || "Unknown";
  statusLiveMetrics.textContent = `${checkedLabel}: ${checkedValue} · ${latencyLabel}: ${latencyValue}`;
}

async function refreshLiveDeployment(localeCopy = currentLocale) {
  if (!statusLiveRefresh || isRefreshingStatusLive) {
    return;
  }
  const statusLocale = getStatusLocale(localeCopy);
  const checking = statusLocale.liveChecking || copy.en.section.status.liveChecking;
  const checkingDetail =
    statusLocale.liveDetailChecking || copy.en.section.status.liveDetailChecking;
  isRefreshingStatusLive = true;
  statusLiveRefresh.disabled = true;
  const originalText = statusLiveRefresh.textContent;
  statusLiveRefresh.textContent = statusLocale.refreshNow || "Checking...";
  renderStatusLiveMetrics(statusLocale, "Checking", null);

  renderStatusLive("checking", checking, checkingDetail);
  try {
    const probe = await performLiveProbe();
    const { response, statusCode, checkedAt, latencyMs, lastModified, path, probeNotes } =
      probe;
    renderStatusLiveMetrics(statusLocale, checkedAt, latencyMs);
    const sourceSuffix =
      path && path !== "/"
        ? ` · ${statusLocale.liveEndpoint || "Endpoint"}: ${path}`
        : "";
    if (response.ok) {
      renderStatusLive(
        "online",
        `${statusLocale.liveOnline || "Online"} (HTTP ${statusCode})`,
        `${statusLocale.liveDetailOnline || "Deployment responded normally."}${
          lastModified ? ` · ${lastModified}` : ""
        }${sourceSuffix}${probeNotes}`
      );
    } else {
      renderStatusLive(
        "offline",
        `${statusLocale.liveOffline || "Offline"} (HTTP ${statusCode})`,
        `${statusLocale.liveDetailOffline || "Deployment returned a non-200 response."}${
          lastModified ? ` · ${lastModified}` : ""
        }${sourceSuffix}`
      );
    }
  } catch {
    const checkedAt = formatDate(lang, new Date().toISOString());
    renderStatusLiveMetrics(statusLocale, checkedAt, null);
    renderStatusLive(
      "error",
      statusLocale.liveError || "Connection check failed",
      `${statusLocale.liveDetailError || "Request failed before receiving headers."}${
        checkedAt ? ` · ${checkedAt}` : ""
      }`
    );
  } finally {
    isRefreshingStatusLive = false;
    statusLiveRefresh.disabled = false;
    statusLiveRefresh.textContent =
      statusLocale.refreshNow || originalText || "Check now";
    if (!liveStatusRefreshTimer) {
      startLiveStatusTimer();
    }
  }
}

function updateNextPhase(localeCopy) {
  if (!quickStartChecks || !quickStartCheckCmd) {
    return;
  }

  if (quickStartCheckTitle) {
    quickStartCheckTitle.textContent = localeCopy.section.get.quick.nextHeading;
  }
  if (quickStartCheckIntro) {
    quickStartCheckIntro.textContent = localeCopy.section.get.quick.nextCopy;
  }
  if (quickStartCheckCmd) {
    quickStartCheckCmd.textContent = localeCopy.section.get.quick.nextCommands.join(
      "\n"
    );
  }
}

function showNextPhase() {
  if (!quickStartChecks) {
    return;
  }
  quickStartChecks.hidden = false;
}

function showRunPhase() {
  if (!quickStartRun) {
    return;
  }
  quickStartRun.hidden = false;
}

function setRunLinkReady(isReady) {
  if (!quickStartRunLink) {
    return;
  }
  const waitHint = copyQuickStartChecks?.dataset?.readyHint || "Copy check commands first.";
  const urlReady =
    quickStartRunLink.dataset.readyRunUrl === "true" && quickStartRunLink.href;
  if (!urlReady) {
    const missingHint =
      quickStartRunLink.dataset.missingRunUrlHint ||
      "Setup guide link is not configured.";
    setLinkPhaseState(quickStartRunLink, false, missingHint);
    return;
  }
  if (isReady) {
    setLinkPhaseState(quickStartRunLink, true, waitHint);
    return;
  }
  setLinkPhaseState(quickStartRunLink, false, waitHint);
}

function setCheckLinkReady(isReady) {
  if (!quickStartNext) {
    return;
  }
  const waitHint = copyQuickStart?.dataset?.mustCopyText || "Copy commands first.";
  setLinkPhaseState(quickStartNext, isReady, waitHint);
}

function setQuickStartStepState(el, state) {
  if (!el) {
    return;
  }
  el.classList.remove("step-pending", "step-active", "step-complete");
  el.classList.add(`step-${state}`);
}

function setQuickStartProgressState() {
  if (!quickStartTitle || !quickStartCheckTitle || !quickStartRunTitle) {
    return;
  }
  const isCompleted = runCopied && setupGuideOpened;
  if (quickStartStatusLink) {
    quickStartStatusLink.hidden = !isCompleted;
    if (isCompleted && quickStartStatusLink.dataset.autoFocused !== "1") {
      requestAnimationFrame(() => {
        if (quickStartStatusLink.hidden) {
          return;
        }
        quickStartStatusLink.dataset.autoFocused = "1";
        quickStartStatusLink.classList.add("quickstart-status-link-ready");
        quickStartStatusLink.focus({ preventScroll: true });
      });
    } else if (!isCompleted) {
      quickStartStatusLink.dataset.autoFocused = "0";
      quickStartStatusLink.classList.remove("quickstart-status-link-ready");
    }
  }
  const quickStartCards = [
    quickStartTitle.closest(".command-card"),
    quickStartCheckTitle.closest(".command-card"),
    quickStartRunTitle.closest(".command-card"),
  ];
  const setActiveCard = (index) => {
    quickStartCards.forEach((card, cardIndex) => {
      if (!card) {
        return;
      }
      card.classList.toggle("step-active", cardIndex === index);
    });
  };

  if (isCompleted) {
    setActiveCard(-1);
    setQuickStartStepState(quickStartTitle, "complete");
    setQuickStartStepState(quickStartCheckTitle, "complete");
    setQuickStartStepState(quickStartRunTitle, "complete");
  } else if (checksCopied) {
    setActiveCard(2);
    setQuickStartStepState(quickStartTitle, "complete");
    setQuickStartStepState(quickStartCheckTitle, "complete");
    setQuickStartStepState(quickStartRunTitle, "active");
  } else if (commandsCopied) {
    setActiveCard(1);
    setQuickStartStepState(quickStartTitle, "complete");
    setQuickStartStepState(quickStartCheckTitle, "active");
    setQuickStartStepState(quickStartRunTitle, "pending");
  } else {
    setActiveCard(0);
    setQuickStartStepState(quickStartTitle, "active");
    setQuickStartStepState(quickStartCheckTitle, "pending");
    setQuickStartStepState(quickStartRunTitle, "pending");
  }
  const checkNeedHint =
    copyQuickStartChecks?.dataset?.mustCopyText || "Please copy commands first.";
  const runNeedHint =
    copyQuickStartRun?.dataset?.mustCopyText || "Please copy checks first.";
  setLinkPhaseState(
    copyQuickStartChecks,
    Boolean(commandsCopied),
    checkNeedHint
  );
  setLinkPhaseState(
    copyQuickStartRun,
    Boolean(checksCopied),
    runNeedHint
  );
  setQuickStartProgressText();
  updateQuickStartResetVisibility();
}

function setQuickStartProgressText() {
  if (!quickStartProgressLabel || !quickStartProgressSummary) {
    return;
  }
  const setStepTarget = (targetText) => {
    if (!quickStartProgressTarget) {
      return;
    }
    quickStartProgressTarget.textContent = targetText || "";
  };
  const setTargetAndAnnounce = (targetText) => {
    setStepTarget(targetText);
    maybeHintQuickStartPhaseTarget(targetText || "");
  };
  const stepNodes = [
    quickStartProgressStep1,
    quickStartProgressStep2,
    quickStartProgressStep3,
  ];
  const clearStepState = (node) => {
    if (!node) {
      return;
    }
    node.classList.remove(
      "quickstart-progress-step-complete",
      "quickstart-progress-step-active",
      "quickstart-progress-step-pending"
    );
  };
  const setStepState = (node, state) => {
    if (!node) {
      return;
    }
    clearStepState(node);
    node.classList.add(`quickstart-progress-step-${state}`);
  };
  stepNodes.forEach((node) => setStepState(node, "pending"));

  const isCompleted = runCopied && setupGuideOpened;

  if (isCompleted) {
    setStepState(quickStartProgressStep1, "complete");
    setStepState(quickStartProgressStep2, "complete");
    setStepState(quickStartProgressStep3, "complete");
    quickStartProgressLabel.classList.remove(
      "quickstart-progress-state-1",
      "quickstart-progress-state-2",
      "quickstart-progress-state-3"
    );
    quickStartProgressLabel.classList.add("quickstart-progress-state-done");
    quickStartProgressSummary.textContent =
      quickStartProgressLabel.dataset.done ||
      "Quick start ready. Continue with your setup.";
    setTargetAndAnnounce(
      quickStartProgressLabel.dataset.targetDone ||
        "Next step: continue reading docs."
    );
    return;
  }

  if (runCopied && !setupGuideOpened) {
    setStepState(quickStartProgressStep1, "complete");
    setStepState(quickStartProgressStep2, "complete");
    setStepState(quickStartProgressStep3, "active");
    quickStartProgressLabel.classList.remove(
      "quickstart-progress-state-done",
      "quickstart-progress-state-3"
    );
    quickStartProgressLabel.classList.add("quickstart-progress-state-3");
    quickStartProgressSummary.textContent =
      quickStartProgressLabel.dataset.phase3Pending ||
      quickStartProgressLabel.dataset.phase3 ||
      "Step 3/3 · Start commands copied; open setup guide to complete.";
    setTargetAndAnnounce(
      quickStartProgressLabel.dataset.target3Pending ||
        quickStartProgressLabel.dataset.target3 ||
        "Next step: open the setup guide."
    );
    return;
  }

  if (checksCopied) {
    setStepState(quickStartProgressStep1, "complete");
    setStepState(quickStartProgressStep2, "complete");
    setStepState(quickStartProgressStep3, "active");
    quickStartProgressLabel.classList.remove(
      "quickstart-progress-state-1",
      "quickstart-progress-state-2",
      "quickstart-progress-state-done"
    );
    quickStartProgressLabel.classList.add("quickstart-progress-state-3");
    quickStartProgressSummary.textContent =
      quickStartProgressLabel.dataset.phase3 ||
      "Step 3/3 · Copy start commands, then open setup guide.";
    setTargetAndAnnounce(
      quickStartProgressLabel.dataset.target3 || "Next step: open the setup guide."
    );
    return;
  }

  if (commandsCopied) {
    setStepState(quickStartProgressStep1, "complete");
    setStepState(quickStartProgressStep2, "active");
    quickStartProgressLabel.classList.remove(
      "quickstart-progress-state-1",
      "quickstart-progress-state-3",
      "quickstart-progress-state-done"
    );
    quickStartProgressLabel.classList.add("quickstart-progress-state-2");
    quickStartProgressSummary.textContent =
      quickStartProgressLabel.dataset.phase2 ||
      "Step 2/3 · Copy checks, then copy start command.";
    setTargetAndAnnounce(
      quickStartProgressLabel.dataset.target2 || "Next step: copy start commands."
    );
    return;
  }

  setStepState(quickStartProgressStep1, "active");
  quickStartProgressLabel.classList.remove(
    "quickstart-progress-state-2",
    "quickstart-progress-state-3",
    "quickstart-progress-state-done"
  );
  quickStartProgressLabel.classList.add("quickstart-progress-state-1");
  quickStartProgressSummary.textContent =
    quickStartProgressLabel.dataset.phase1 ||
    "Step 1/3 · Copy commands above, then copy checks.";
  setTargetAndAnnounce(
    quickStartProgressLabel.dataset.target1 ||
      "Next step: copy check commands."
  );
}

function showManualCopyFallback(button, text) {
  if (!button) {
    return;
  }
  const hint = button.dataset.manualCopyHint || "Copy failed. Please copy manually.";
  const fallbackText = text ? `\n${text}` : "";
  setCopyFeedback(`${hint}${fallbackText}`, true);
}

function shouldAutoRevealQuickStartPhase() {
  return (
    !window.matchMedia(MOBILE_NAV_QUERY).matches &&
    !window.matchMedia(REDUCED_MOTION_QUERY).matches
  );
}

function maybeHintQuickStartPhaseTarget(targetText) {
  if (!targetText || shouldAutoRevealQuickStartPhase()) {
    return;
  }
  const normalized = targetText.trim();
  if (!normalized || quickStartPhaseTargetHint === normalized) {
    return;
  }
  quickStartPhaseTargetHint = normalized;
  if (quickStartPhaseHintTimer) {
    clearTimeout(quickStartPhaseHintTimer);
  }
  quickStartPhaseHintTimer = setTimeout(() => {
    setCopyFeedback(normalized);
  }, 300);
}

function isInQuickStartViewport(target) {
  if (!target) {
    return false;
  }
  const rect = target.getBoundingClientRect();
  const top = 120;
  const bottom = window.innerHeight - 120;
  return rect.top >= 0 && rect.top <= bottom && rect.bottom >= top;
}

function revealQuickStartPhase(target) {
  if (!target) {
    return;
  }
  if (!shouldAutoRevealQuickStartPhase()) {
    quickStartPhaseTargetHint = "";
    return;
  }
  if (quickStartRevealTimer) {
    clearTimeout(quickStartRevealTimer);
    quickStartRevealTimer = null;
  }
  if (quickStartFocusTimer) {
    clearTimeout(quickStartFocusTimer);
    quickStartFocusTimer = null;
  }
  const runReveal = () => {
    if (target.hidden) {
      return;
    }
    if (isInQuickStartViewport(target)) {
      target.classList.add("quickstart-focus");
      quickStartFocusTimer = setTimeout(() => {
        target.classList.remove("quickstart-focus");
        quickStartFocusTimer = null;
      }, 1500);
      return;
    }
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    target.classList.add("quickstart-focus");
    quickStartFocusTimer = setTimeout(() => {
      target.classList.remove("quickstart-focus");
      quickStartFocusTimer = null;
    }, 1500);
  };
  const isCompleted = runCopied && setupGuideOpened;
  if (isCompleted) {
    runReveal();
    return;
  }
  quickStartRevealTimer = setTimeout(runReveal, 2000);
}

function updateRunPhase(localeCopy) {
  if (!quickStartRun) {
    return;
  }
  if (quickStartRunTitle) {
    quickStartRunTitle.textContent = localeCopy.section.get.quick.runHeading;
  }
  if (quickStartRunIntro) {
    quickStartRunIntro.textContent = localeCopy.section.get.quick.runCopy;
  }
  if (quickStartRunCmd && Array.isArray(localeCopy.section.get.quick.runCommands)) {
    quickStartRunCmd.textContent = localeCopy.section.get.quick.runCommands.join("\n");
  }
  if (quickStartRunLink) {
    const runUrl = localeCopy.section.get.quick.runUrl || "";
    quickStartRunLink.dataset.readyRunUrl = runUrl ? "true" : "false";
    quickStartRunLink.textContent = localeCopy.section.get.quick.runLinkText || "Open setup guide";
    quickStartRunLink.setAttribute(
      "aria-label",
      localeCopy.section.get.quick.runLinkAria || "Open setup guide"
    );
    if (runUrl) {
      quickStartRunLink.href = runUrl;
    } else {
      quickStartRunLink.href = "#";
    }
    setRunLinkReady(checksCopied && quickStartRunLink.dataset.readyRunUrl === "true");
  }
}

async function fetchDeploymentMeta() {
  try {
    const response = await fetch(window.location.href, {
      method: "HEAD",
      cache: "no-store",
    });
    const deploymentId = response.headers.get("x-vercel-id") || "";
    const lastModified = response.headers.get("last-modified") || "";
    return {
      deploymentId,
      lastModified,
    };
  } catch {
    return { deploymentId: "", lastModified: "" };
  }
}

function getDeploymentContext() {
  const context = {
    branch: "",
    commit: "",
    source: "",
  };

  try {
    const buildMeta = document.getElementById("build-meta");
    if (buildMeta && buildMeta.textContent) {
      const parsed = JSON.parse(buildMeta.textContent);
      context.branch = typeof parsed.branch === "string" ? parsed.branch.trim() : "";
      context.commit = typeof parsed.commit === "string" ? parsed.commit.trim() : "";
      context.source = typeof parsed.source === "string" ? parsed.source.trim() : "";
    }
  } catch {
    // ignore invalid meta JSON
  }

  const query = new URLSearchParams(window.location.search);
  if (!context.branch) {
    const branch = query.get("branch");
    if (branch) {
      context.branch = branch.trim();
    }
  }
  if (!context.commit) {
    const commit = query.get("commit");
    if (commit) {
      context.commit = commit.trim();
    }
  }
  if (!context.source) {
    const source = query.get("source");
    if (source) {
      context.source = source.trim();
    }
  }

  return context;
}

async function refreshStatusMeta(localeCopy) {
  if (!statusSource || !statusLastUpdated) {
    return;
  }
  const deploymentContext = getDeploymentContext();
  statusSource.textContent =
    deploymentContext.source || localeCopy.section.status.releaseSource || "main";
  if (statusBranch) {
    statusBranch.textContent =
      deploymentContext.branch || localeCopy.section.status.releaseSource || "main";
  }
  const deploymentMeta = await fetchDeploymentMeta();
  statusLastUpdated.textContent =
    formatDate(lang, deploymentMeta.lastModified) || formatDate(lang);
  if (statusCommit) {
    const commitText = deploymentContext.commit || localeCopy.section.status.commitFallback || "n/a";
    statusCommit.textContent = commitText;
  }
  if (statusDeployId) {
    const deployId = deploymentMeta.deploymentId
      ? deploymentMeta.deploymentId.split("::").pop()
      : "";
    statusDeployId.textContent =
      deployId || localeCopy.section.status.deployIdFallback || "n/a";
  }
  if (!statusLastUpdated.textContent) {
    statusLastUpdated.textContent = "--";
  }
  applyStatusMetaCopyLocale(localeCopy);
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
  const roadmapReady = setLinkState(linkRoadmap, links.roadmap);
  return {
    githubReady,
    communityReady,
    issueReady,
    roadmapReady,
  };
}

function setLang(next) {
  lang = next;
  try {
    localStorage.setItem(LANG_STORAGE_KEY, next);
  } catch {
    // Local storage may be unavailable in constrained browsers.
  }
  try {
    const nextUrl = new URL(window.location.href);
    nextUrl.searchParams.set("lang", lang);
    history.replaceState({}, "", nextUrl);
  } catch {
    // Keep language switch functional even when history API is blocked.
  }
  const locale = copy[lang];
  currentLocale = locale;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

  setText("topline", locale.topline);
  setText("hero.title", locale.hero.title);
  setText("hero.subtitle", locale.hero.subtitle);
  setText("hero.pitch", locale.hero.pitch);
  setText("hero.ctaHint", locale.hero.ctaHint);
  setText("hero.metric1", locale.hero.metric1);
  setText("hero.metric2", locale.hero.metric2);
  setText("hero.metric3", locale.hero.metric3);
  setText("cta.primary", locale.cta.primary);
  setText("cta.secondary", locale.cta.secondary);
  setText("cta.tertiary", locale.cta.tertiary);

  setText("nav.problem", locale.nav.problem);
  setText("nav.loop", locale.nav.loop);
  setText("nav.architecture", locale.nav.architecture);
  setText("nav.macos", locale.nav.macos);
  setText("nav.getStarted", locale.nav.getStarted);
  setText("nav.status", locale.nav.status);

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
  setText("section.get.quick.title", locale.section.get.quick.title);
  setText("section.get.quick.copy", locale.section.get.quick.copy);
  setText("section.get.quick.step1Label", locale.section.get.quick.step1Label);
  setText("section.get.quick.step2Label", locale.section.get.quick.step2Label);
  setText("section.get.quick.step3Label", locale.section.get.quick.step3Label);
  setText("section.get.quick.nextLink", locale.section.get.quick.nextLink);

  if (quickStartStep1Label) {
    quickStartStep1Label.textContent =
      locale.section.get.quick.step1Label || "Step 1";
  }
  if (quickStartStep2Label) {
    quickStartStep2Label.textContent =
      locale.section.get.quick.step2Label || "Step 2";
  }
  if (quickStartStep3Label) {
    quickStartStep3Label.textContent =
      locale.section.get.quick.step3Label || "Step 3";
  }

  if (quickStartCmd) {
    quickStartCmd.textContent = locale.section.get.quick.commands.join("\n");
  }
  if (copyQuickStart) {
    copyQuickStart.dataset.manualCopyHint =
      locale.section.get.quick.manualCopyHint ||
      "Clipboard write failed. Please select the command block and copy manually (Cmd/Ctrl + C).";
    copyQuickStart.textContent = locale.section.get.quick.copyBtn;
    copyQuickStart.dataset.copyIdleText = locale.section.get.quick.copyBtn || "Copy commands";
    copyQuickStart.dataset.copiedText = locale.section.get.quick.copied;
    copyQuickStart.dataset.copiedNextText =
      locale.section.get.quick.copiedNextText || "Commands copied. Continue with Run checks.";
    copyQuickStart.dataset.copyFailedText = locale.section.get.quick.copyFailed;
    copyQuickStart.dataset.nothingText = locale.section.get.quick.nothing;
    copyQuickStart.dataset.mustCopyText = locale.section.get.quick.mustCopyText;
    if (quickStartNext) {
      quickStartNext.textContent = locale.section.get.quick.nextLink;
      quickStartNext.dataset.waitHint =
        locale.section.get.quick.mustCopyText || "Copy commands first.";
    }
  }
  if (quickStartReset) {
    quickStartReset.textContent =
      locale.section.get.quick.resetText || "Reset quick start";
    quickStartReset.dataset.resetHint =
      locale.section.get.quick.resetHint || "Quick start progress has been reset.";
  }
  if (copyQuickStartChecks) {
    copyQuickStartChecks.dataset.manualCopyHint =
      locale.section.get.quick.manualCopyHint ||
      "Clipboard write failed. Please select the command block and copy manually (Cmd/Ctrl + C).";
    copyQuickStartChecks.textContent =
      locale.section.get.quick.nextCopyBtn || "Copy checks";
    copyQuickStartChecks.dataset.copyIdleText =
      locale.section.get.quick.nextCopyBtn || "Copy checks";
    copyQuickStartChecks.dataset.nothingText =
      locale.section.get.quick.nextNothingText || "No check commands to copy.";
    copyQuickStartChecks.dataset.copiedText =
      locale.section.get.quick.nextCopySuccess || "Check commands copied.";
    copyQuickStartChecks.dataset.copyFailedText =
      locale.section.get.quick.nextCopyFailed || "Copy checks failed. Please copy manually.";
    copyQuickStartChecks.dataset.mustCopyText =
      locale.section.get.quick.checksPrereqText ||
      locale.section.get.quick.mustCopyText ||
      "Please copy repository commands first.";
    copyQuickStartChecks.dataset.readyHint =
      locale.section.get.quick.mustCopyText || "Please copy checks first.";
    copyQuickStartChecks.dataset.copiedNextText =
      locale.section.get.quick.nextReadyText || "Checks copied. Continue with setup.";
  }
  if (copyQuickStartRun) {
    copyQuickStartRun.dataset.manualCopyHint =
      locale.section.get.quick.manualCopyHint ||
      "Clipboard write failed. Please select the command block and copy manually (Cmd/Ctrl + C).";
    copyQuickStartRun.textContent =
      locale.section.get.quick.runCopyBtn || "Copy start commands";
    copyQuickStartRun.dataset.copyIdleText =
      locale.section.get.quick.runCopyBtn || "Copy start commands";
    copyQuickStartRun.dataset.nothingText =
      locale.section.get.quick.runCopyNothingText || "No start commands to copy.";
    copyQuickStartRun.dataset.copiedText =
      locale.section.get.quick.runCopySuccess || "Start commands copied.";
    copyQuickStartRun.dataset.copyFailedText =
      locale.section.get.quick.runCopyFailed || "Copy start commands failed. Please copy manually.";
    copyQuickStartRun.dataset.mustCopyText =
      locale.section.get.quick.runPrereqText ||
      "Please copy checks first.";
  }
  if (quickStartProgressLabel) {
    const progressText = locale.section.get.quick.progress || {};
    const labels = progressText.labels || {};
    quickStartProgressLabel.dataset.phase1 =
      progressText.phase1 || "Step 1/3 · Copy commands above, then copy checks.";
    quickStartProgressLabel.dataset.phase2 =
      progressText.phase2 || "Step 2/3 · Copy checks, then copy start command.";
    quickStartProgressLabel.dataset.phase3 =
      progressText.phase3 || "Step 3/3 · Copy start commands, then open setup guide.";
    quickStartProgressLabel.dataset.phase3Pending =
      progressText.phase3Pending ||
      "Step 3/3 · Start commands copied; open setup guide to complete.";
    quickStartProgressLabel.dataset.done =
      progressText.done || "Quick start ready. Continue with your setup.";
    quickStartProgressLabel.dataset.target1 =
      progressText.target1 || "Next step: copy check commands.";
    quickStartProgressLabel.dataset.target2 =
      progressText.target2 || "Next step: copy start commands.";
    quickStartProgressLabel.dataset.target3 =
      progressText.target3 || "Next step: open the setup guide.";
    quickStartProgressLabel.dataset.target3Pending =
      progressText.target3Pending || "Next step: open the setup guide.";
    quickStartProgressLabel.dataset.targetDone =
      progressText.targetDone || "Next step: view current status.";
    if (quickStartProgressStep1) {
      quickStartProgressStep1.textContent = labels.step1 || "1/3";
      quickStartProgressStep1.setAttribute("aria-label", progressText.phase1 || "Step 1");
    }
    if (quickStartProgressStep2) {
      quickStartProgressStep2.textContent = labels.step2 || "2/3";
      quickStartProgressStep2.setAttribute("aria-label", progressText.phase2 || "Step 2");
    }
    if (quickStartProgressStep3) {
      quickStartProgressStep3.textContent = labels.step3 || "3/3";
      quickStartProgressStep3.setAttribute("aria-label", progressText.phase3 || "Step 3");
    }
  }
  if (quickStartRun) {
    if (quickStartRunLink) {
      quickStartRunLink.textContent =
        locale.section.get.quick.runLinkText || "Open setup guide";
      quickStartRunLink.setAttribute(
        "aria-label",
        locale.section.get.quick.runLinkAria || "Open setup guide"
      );
      quickStartRunLink.dataset.missingRunUrlHint =
        locale.section.get.quick.runCopyNothingText ||
        "Setup guide link is not configured.";
    }
  }
  setText(
    "section.get.quick.nextHeading",
    locale.section.get.quick.nextHeading
  );
  setText("section.get.quick.nextCopy", locale.section.get.quick.nextCopy);
  setText("section.get.quick.runHeading", locale.section.get.quick.runHeading);
  setText("section.get.quick.runCopy", locale.section.get.quick.runCopy);
  setText("section.status.deployIdLabel", locale.section.status.deployIdLabel);
  setText("section.status.branchLabel", locale.section.status.branchLabel);
  setText("section.status.commitLabel", locale.section.status.commitLabel);
  setText("section.status.copyHintRow", locale.section.status.copyHintRow);
  if (quickStartCheckCmd) {
    quickStartCheckCmd.textContent = locale.section.get.quick.nextCommands.join("\n");
  }
  updateNextPhase(locale);
  updateRunPhase(locale);

  setText("section.status.heading", locale.section.status.heading);
  setText("section.status.tag", locale.section.status.tag);
  setText("section.status.releaseLabel", locale.section.status.releaseLabel);
  setText("section.status.updatedLabel", locale.section.status.updatedLabel);
  setText("section.status.liveLabel", locale.section.status.liveLabel);
  setText("section.status.autoRefresh", locale.section.status.autoRefresh);
  setText("section.status.refreshNow", locale.section.status.refreshNow);
  setLiveRefreshControl(locale);
  setText("section.status.available.title", locale.section.status.available.title);
  setText("section.status.available.body", locale.section.status.available.body);
  setText("section.status.progress.title", locale.section.status.progress.title);
  setText("section.status.progress.body", locale.section.status.progress.body);
  setText("section.status.planned.title", locale.section.status.planned.title);
  setText("section.status.planned.body", locale.section.status.planned.body);

  setText("footer.roadmap", locale.footer.roadmap);
  setText("footer.community", locale.footer.community);
  setText("footer.issue", locale.footer.issue);
  if (footerYear) {
    footerYear.textContent = String(new Date().getFullYear());
  }

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

  void refreshStatusMeta(locale);
  void refreshLiveDeployment(locale);
  startLiveStatusTimer();

  langToggle.textContent = lang === "en" ? "中文" : "EN";
  langToggle.setAttribute(
    "aria-label",
    lang === "en"
      ? "Switch language to 中文"
      : "Switch language to English"
  );

  const runReady = quickStartRunLink?.dataset?.readyRunUrl === "true";
  setRunLinkReady(checksCopied && runReady);
  setCheckLinkReady(checksCopied);
  setQuickStartProgressState();
}

langToggle.addEventListener("click", () => {
  setLang(lang === "en" ? "zh" : "en");
  langToggle.setAttribute("aria-pressed", lang === "zh" ? "true" : "false");
});

if (copyQuickStart) {
  copyQuickStart.addEventListener("click", async () => {
    const text = quickStartCmd ? quickStartCmd.textContent.trim() : "";
    if (!text) {
      const nothingText =
        copyQuickStart.dataset.nothingText || "Nothing to copy yet.";
      setCopyFeedback(nothingText, true);
      return;
    }

    const copiedText = copyQuickStart.dataset.copiedText || "Copied";
    const copiedNextText =
      copyQuickStart.dataset.copiedNextText || copiedText;
    const runReady = quickStartRunLink?.dataset?.readyRunUrl === "true";

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        throw new Error("clipboard-api-not-available");
      }
      setCopyFeedback(copiedNextText);
      showCopyDone(copyQuickStart, copiedNextText);
      commandsCopied = true;
      persistQuickStartProgress();
      showNextPhase();
      revealQuickStartPhase(quickStartChecks);
      setCheckLinkReady(true);
      setQuickStartProgressState();
      setRunLinkReady(checksCopied && runReady);
    } catch (err) {
      if (getFallbackCopyText(text)) {
        setCopyFeedback(copiedNextText);
        showCopyDone(copyQuickStart, copiedNextText);
        commandsCopied = true;
        persistQuickStartProgress();
        showNextPhase();
        revealQuickStartPhase(quickStartChecks);
        setCheckLinkReady(true);
        setQuickStartProgressState();
        setRunLinkReady(checksCopied && runReady);
      } else {
        showManualCopyFallback(copyQuickStart, text);
        setQuickStartProgressState();
      }
    }
  });
}

if (copyQuickStartChecks) {
  copyQuickStartChecks.addEventListener("click", async () => {
    if (!commandsCopied) {
      setCopyFeedback(
        copyQuickStartChecks.dataset.mustCopyText ||
          copyQuickStart?.dataset?.mustCopyText ||
          "Please copy commands first.",
        true
      );
      return;
    }
    const text = quickStartCheckCmd ? quickStartCheckCmd.textContent.trim() : "";
    if (!text) {
      const nothingText = copyQuickStartChecks.dataset.nothingText || "No check commands to copy.";
      setCopyFeedback(nothingText);
      return;
    }

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        throw new Error("clipboard-api-not-available");
      }
      checksCopied = true;
      persistQuickStartProgress();
      const copiedText =
        copyQuickStartChecks.dataset.copiedText || "Check commands copied.";
      const copiedNextText =
        copyQuickStartChecks.dataset.copiedNextText || copiedText;
      setCopyFeedback(copiedNextText);
      showCopyDone(copyQuickStartChecks, copiedNextText);
      checksCopied = true;
      setQuickStartProgressState();
      showRunPhase();
      revealQuickStartPhase(quickStartRun);
      setRunLinkReady(true);
    } catch (err) {
      if (getFallbackCopyText(text)) {
        const copiedText =
          copyQuickStartChecks.dataset.copiedText || "Check commands copied.";
        const copiedNextText =
          copyQuickStartChecks.dataset.copiedNextText || copiedText;
        setCopyFeedback(copiedNextText);
        showCopyDone(copyQuickStartChecks, copiedNextText);
        checksCopied = true;
        persistQuickStartProgress();
        setQuickStartProgressState();
        showRunPhase();
        revealQuickStartPhase(quickStartRun);
        setRunLinkReady(true);
      } else {
        showManualCopyFallback(copyQuickStartChecks, text);
      }
    }
  });
}

if (copyQuickStartRun) {
  copyQuickStartRun.addEventListener("click", async () => {
    if (!checksCopied) {
      setCopyFeedback(
        copyQuickStartRun.dataset.mustCopyText ||
          copyQuickStartChecks?.dataset?.mustCopyText ||
          "Please copy check commands first.",
        true
      );
      return;
    }
    const text = quickStartRunCmd ? quickStartRunCmd.textContent.trim() : "";
    if (!text) {
      const nothingText = copyQuickStartRun.dataset.nothingText || "No start commands to copy.";
      setCopyFeedback(nothingText);
      return;
    }

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        throw new Error("clipboard-api-not-available");
      }
      runCopied = true;
      persistQuickStartProgress();
      setQuickStartProgressState();
      const copiedText = copyQuickStartRun.dataset.copiedText || "Start commands copied.";
      showCopyDone(copyQuickStartRun, copiedText);
      setCopyFeedback(copiedText);
    } catch (err) {
      if (getFallbackCopyText(text)) {
        runCopied = true;
        persistQuickStartProgress();
        setQuickStartProgressState();
        const copiedText = copyQuickStartRun.dataset.copiedText || "Start commands copied.";
        showCopyDone(copyQuickStartRun, copiedText);
        setCopyFeedback(copiedText);
      } else {
        showManualCopyFallback(copyQuickStartRun, text);
      }
    }
  });
}

if (quickStartReset) {
  quickStartReset.addEventListener("click", () => {
    resetQuickStartProgress();
    setCopyFeedback(
      quickStartReset.dataset.resetHint || "Quick start progress has been reset."
    );
  });
}

if (statusLiveRefresh) {
  statusLiveRefresh.addEventListener("click", () => {
    void refreshLiveDeployment(currentLocale);
  });
}

if (statusLiveAutoRefresh) {
  statusLiveAutoRefresh.addEventListener("click", () => {
    isLiveAutoRefreshEnabled = !isLiveAutoRefreshEnabled;
    persistLiveRefreshPreference(isLiveAutoRefreshEnabled);
    setLiveRefreshControl();
    if (!isLiveAutoRefreshEnabled) {
      stopLiveStatusTimer();
      return;
    }
    startLiveStatusTimer();
    void refreshLiveDeployment(currentLocale);
  });
}

if (quickStartNext) {
  quickStartNext.addEventListener("click", (event) => {
    if (quickStartNext.getAttribute("aria-disabled") === "true") {
      event.preventDefault();
      const message =
        quickStartNext.dataset.waitHint ||
        copyQuickStart?.dataset.mustCopyText ||
        "Please copy commands first.";
      setCopyFeedback(message, true);
    }
  });
}

if (quickStartRunLink) {
  quickStartRunLink.addEventListener("click", (event) => {
    if (quickStartRunLink.getAttribute("aria-disabled") === "true") {
      event.preventDefault();
      const message =
        copyQuickStartRun?.dataset?.mustCopyText ||
        "Copy checks first, then open setup guide.";
      setCopyFeedback(message, true);
      return;
    }
    if (!setupGuideOpened) {
      setupGuideOpened = true;
      persistQuickStartProgress();
      setQuickStartProgressState();
    }
  });
}

sectionNavLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");
    const target = href ? document.querySelector(href) : null;
    const matchedNavItem = target
      ? navScrollTargets.find((item) => item.target === target)
      : null;
    markActiveNavInteraction(true);
    if (target) {
      event.preventDefault();
      if (matchedNavItem) {
        applyActiveNav(matchedNavItem);
      }
      const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches;
      target.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "start",
      });
      markActiveNavInteraction(true);
    }
  });
});
window.addEventListener("scroll", () => markActiveNavInteraction(true), {
  passive: true,
});
window.addEventListener("resize", () => markActiveNavInteraction(false));

applyRestoredQuickStartState();
restoreLiveRefreshPreference();
const preferredLang = resolvePreferredLanguage();
setLang(preferredLang);
setupRevealAnimations();
setupStatusMetaCopyHandlers();

langToggle.setAttribute("aria-pressed", lang === "zh" ? "true" : "false");
langToggle.setAttribute(
  "aria-label",
  lang === "en" ? "Switch language to 中文" : "Switch language to English"
);
if (setupActiveNavObserver()) {
  markActiveNavInteraction();
  requestAnimationFrame(() => {
    scheduleActiveNavUpdate();
  });
} else {
  markActiveNavInteraction();
  window.addEventListener("scroll", scheduleActiveNavUpdate, { passive: true });
  window.addEventListener("resize", scheduleActiveNavUpdate);
  scheduleActiveNavUpdate();
}
