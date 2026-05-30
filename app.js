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
        quick: {
          title: "Start in 3 minutes",
          copy: "Copy and run the commands below.",
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
            targetDone: "Next step: continue reading docs.",
            labels: {
              step1: "1/3",
              step2: "2/3",
              step3: "3/3",
            },
            phase1: "Step 1/3 · Copy commands above, then copy checks.",
            phase2: "Step 2/3 · Copy checks, then copy start command.",
            phase3: "Step 3/3 · Copy start commands, then open setup guide.",
            done: "Quick start ready. Continue with your setup.",
          },
          nextNothingText: "No check commands to copy.",
          nextCopyBtn: "Copy checks",
          nextReadyText: "Checks copied. Continue with setup.",
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
        quick: {
          title: "三分钟快速开始",
          copy: "复制下面命令并执行。",
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
            targetDone: "下一步：继续阅读文档。",
            labels: {
              step1: "1/3",
              step2: "2/3",
              step3: "3/3",
            },
            phase1: "第 1/3 步 · 已复制仓库命令，请复制校验命令。",
            phase2: "第 2/3 步 · 已复制校验命令，请复制启动命令。",
            phase3: "第 3/3 步 · 已复制启动命令，请打开设置文档。",
            done: "快速开始完成，可继续项目设置。",
          },
          nextNothingText: "没有可复制的校验命令。",
          nextCopyBtn: "复制校验命令",
          nextReadyText: "校验命令已复制。继续设置。",
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
const copyQuickStart = document.getElementById("copy-quickstart");
const quickStartReset = document.getElementById("quickstart-reset");
const copyQuickStartFeedback = document.getElementById("quickstart-feedback");
const quickStartNext = document.getElementById("quickstart-next");
const quickStartProgressLabel = document.getElementById("quickstart-progress");
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
const statusSource = document.getElementById("status-source");
const statusLastUpdated = document.getElementById("status-last-updated");
const statusBranch = document.getElementById("status-branch");
const statusDeployId = document.getElementById("status-deploy-id");
const statusCommit = document.getElementById("status-commit");
const langToggle = document.getElementById("lang-toggle");
const linkGithub = document.getElementById("link-github");
const linkCommunity = document.getElementById("link-community");
const linkIssue = document.getElementById("link-issue");
let lang = "en";
let commandsCopied = false;
let checksCopied = false;
let runCopied = false;
let setupGuideOpened = false;
const quickStartStorageKey = "melixQuickStartProgressV1";

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

  if (isCompleted) {
    setQuickStartStepState(quickStartTitle, "complete");
    setQuickStartStepState(quickStartCheckTitle, "complete");
    setQuickStartStepState(quickStartRunTitle, "complete");
  } else if (checksCopied) {
    setQuickStartStepState(quickStartTitle, "complete");
    setQuickStartStepState(quickStartCheckTitle, "complete");
    setQuickStartStepState(quickStartRunTitle, "active");
  } else if (commandsCopied) {
    setQuickStartStepState(quickStartTitle, "complete");
    setQuickStartStepState(quickStartCheckTitle, "active");
    setQuickStartStepState(quickStartRunTitle, "pending");
  } else {
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
    setStepTarget(
      quickStartProgressLabel.dataset.targetDone ||
        "Next step: continue reading docs."
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
    setStepTarget(
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
    setStepTarget(
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
  setStepTarget(
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

function revealQuickStartPhase(target) {
  if (!target) {
    return;
  }
  if (quickStartFocusTimer) {
    clearTimeout(quickStartFocusTimer);
  }
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  target.classList.add("quickstart-focus");
  quickStartFocusTimer = setTimeout(() => {
    target.classList.remove("quickstart-focus");
  }, 1500);
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
  setText("section.get.quick.title", locale.section.get.quick.title);
  setText("section.get.quick.copy", locale.section.get.quick.copy);
  setText("section.get.quick.nextLink", locale.section.get.quick.nextLink);

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
    quickStartProgressLabel.dataset.done =
      progressText.done || "Quick start ready. Continue with your setup.";
    quickStartProgressLabel.dataset.target1 =
      progressText.target1 || "Next step: copy check commands.";
    quickStartProgressLabel.dataset.target2 =
      progressText.target2 || "Next step: copy start commands.";
    quickStartProgressLabel.dataset.target3 =
      progressText.target3 || "Next step: open the setup guide.";
    quickStartProgressLabel.dataset.targetDone =
      progressText.targetDone || "Next step: continue reading docs.";
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
  if (quickStartCheckCmd) {
    quickStartCheckCmd.textContent = locale.section.get.quick.nextCommands.join("\n");
  }
  updateNextPhase(locale);
  updateRunPhase(locale);

  setText("section.status.heading", locale.section.status.heading);
  setText("section.status.tag", locale.section.status.tag);
  setText("section.status.releaseLabel", locale.section.status.releaseLabel);
  setText("section.status.updatedLabel", locale.section.status.updatedLabel);
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

  void refreshStatusMeta(locale);

  langToggle.textContent = lang === "en" ? "中文" : "EN";

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

const preferred = navigator.language.toLowerCase();
applyRestoredQuickStartState();
if (preferred.startsWith("zh")) {
  setLang("zh");
} else {
  setLang("en");
}

langToggle.setAttribute("aria-pressed", lang === "zh" ? "true" : "false");
