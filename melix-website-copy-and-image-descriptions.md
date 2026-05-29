# Melix 网站文案与图片描述（最终版）

> 目标：确认并整理出当前网站可用的“全部文案”和“全部图片描述”。
> 说明：当前工作区未发现完整源码可反推现有页面，所以该版本按“Melix 落地网站 v1（本地模型运行/运维）”的主站结构整理。你可直接作为最终文案使用。

## 0) 目标确认

- **核心定位（主词）**：`local AI runtime`
- **辅助定位**：`local AI operations workspace`
- **价值承诺**：本地模型运行、LoRA 微调、基准测试、评测、CLI 与 macOS 入口一体化。

---

## 1) 全站文案（可直接落地）

### A. 站点基础文案

- **页面标题（title）**：`Melix · Local AI runtime for Apple Silicon`
- **SEO 描述（description）**：`Melix is a local AI runtime for Apple Silicon. Run models, train LoRA locally, benchmark, evaluate, and operate through CLI and macOS tools with a single workflow.`
- **Open Graph 标题（og:title）**：`Melix - Local AI Runtime`
- **Open Graph 描述（og:description）**：`Build local AI workflows in one place on your Mac.`
- **页脚版权**：`© 2026 Melix. All rights reserved.`

### B. Hero 区

- **标题**
  - English: `A local AI runtime for Apple Silicon.`
  - 中文: `一款面向 Apple Silicon 的本地 AI 运行时。`
- **副标题**
  - English: `Run models, fine-tune LoRA, benchmark, and evaluate—on one local Mac workflow.`
  - 中文: `在一套本地化流程中完成模型运行、LoRA 微调、基准测试与评测。`
- **主按钮（CTA）**
  - English: `Get started on GitHub`
  - 中文: `GitHub 上开始`
- **副按钮 1（CTA）**
  - English: `Read setup guide`
  - 中文: `查看安装教程`
- **副按钮 2（CTA）**
  - English: `View current status`
  - 中文: `查看项目状态`

### C. Problem 区

- **标题**
  - English: `Local AI is powerful. Operating it is fragmented.`
  - 中文: `本地 AI 很强大，但操作链路往往支离破碎。`
- **说明**
  - English: `Model serving, tuning, benchmarking, and evaluation are usually split across terminals, scripts, and notebooks. Melix compresses them into one local-first runtime.`
  - 中文: `模型服务、微调、基准和评测常被拆散到终端、脚本、Notebook。Melix 将它们压缩为一个本地优先运行时。`

### D. Product Loop 区

- **区块标题**
  - English: `Product Loop`
  - 中文: `产品循环`
- **副标题**
  - English: `Serve. Fine-tune. Benchmark. Evaluate.`
  - 中文: `服务化、微调、基准测试、评测`

- **卡片 1**
  - **标签**：`Serve` / `服务化`
  - **文案**：
    - EN: `Run local model sessions on Apple Silicon.`
    - ZH: `在 Apple Silicon 上启动本地模型会话。`

- **卡片 2**
  - **标签**：`Fine-tune` / `微调`
  - **文案**：
    - EN: `Train and manage LoRA adapters locally.`
    - ZH: `在本地训练并管理 LoRA 适配器。`

- **卡片 3**
  - **标签**：`Benchmark` / `基准测试`
  - **文案**：
    - EN: `Measure model and adapter behavior with repeatable runs.`
    - ZH: `通过可复现的运行过程测量模型与适配器行为。`

- **卡片 4**
  - **标签**：`Evaluate` / `评测`
  - **文案**：
    - EN: `Compare outputs, results, and workflow quality over time.`
    - ZH: `持续对比输出结果与工作流质量。`

### E. Architecture 区

- **标题**
  - EN: `A runtime layer between models and workflows.`
  - ZH: `连接模型与工作流的运行时层。`
- **一句话说明**
  - EN: `Serve → Fine-tune → Benchmark → Evaluate`
  - ZH: `服务化 → 微调 → 基准测试 → 评测`
- **补充文案**
  - EN: `Define your model stack once and reuse it across CLI and UI operations.`
  - ZH: `先定义模型栈后复用到 CLI 与界面操作。`

### F. macOS Experience 区

- **标题**
  - EN: `Built for local operators.`
  - ZH: `为本地实践者而生。`
- **说明**
  - EN: `Melix is designed for developers and AI builders who operate local models daily — from CLI workflows to native macOS surfaces and menubar-level control.`
  - ZH: `Melix 面向日常使用本地模型的开发者和 AI 构建者，覆盖 CLI、原生 macOS 界面到菜单栏级控制。`

### G. Get Started 区

- **标题**
  - EN: `Start from the repo.`
  - ZH: `从仓库开始。`

- **要求 / Requirements 列表**
  - EN:
    - `Apple Silicon Mac`
    - `Supported macOS version`
    - `Swift`
    - `Python`
    - `uv`
  - ZH:
    - `Apple Silicon Mac`
    - `已支持的 macOS 版本`
    - `Swift`
    - `Python`
    - `uv`

- **快速开始流程**
  - EN:
    1. `Clone the repository.`
    2. `Install dependencies.`
    3. `Start the local service.`
    4. `Open the app or run CLI workflow.`
    5. `Run your first model / benchmark / evaluation.`
  - ZH:
    1. `克隆仓库。`
    2. `安装依赖。`
    3. `启动本地服务。`
    4. `打开 App 或执行 CLI 工作流。`
    5. `运行首次模型推理 / 基准测试 / 评测。`

### H. Current Status 区

- **标题**
  - EN: `Current Status`
  - ZH: `当前状态`

- **状态标签（可复用）**
  - EN/ZH: `v0.1.0-alpha / Available now` / `v0.2.0-beta / In progress` / `v0.3.0 / Not yet`

- **状态内容**
  - **Available now / 已支持**
    - EN: `v0.1.0-alpha · local model workflow, LoRA, benchmark/eval, CLI and macOS surfaces`
    - ZH: `v0.1.0-alpha · 本地模型工作流、LoRA、基准与评测、CLI 与 macOS 界面`
  - **In progress / 进行中**
    - EN: `v0.2.0-beta · stronger workflow state, agent/tool orchestration, long-running automation`
    - ZH: `v0.2.0-beta · 更完整的状态编排、智能体/工具编排、长时运行自动化`
  - **Not yet / 尚未支持**
    - EN: `v0.3.0 · production-grade autonomous agent orchestration, cloud collaboration, hosted service`
    - ZH: `v0.3.0 · 生产级自治智能体编排、云协作、托管服务`

- **发行标签（页面固定）**
  - EN: `developer preview`
  - ZH: `开发者预览`

### I. 页面发布按钮与提示（Footer/CTA 附件）

- **按钮文案**
  - EN: `View roadmap`
  - ZH: `查看路线图`
  - EN: `Join community`
  - ZH: `加入讨论`
  - EN: `Report an issue`
  - ZH: `提交问题`

### J. 术语收敛（防误导）

- **建议保留（可公开承诺）**
  - EN: `local AI runtime`, `local-first`, `model serving`, `LoRA`, `benchmark`, `evaluation`, `macOS`
  - ZH: `本地 AI 运行时`, `本地优先`, `模型服务`, `LoRA`, `基准测试`, `评测`, `macOS`
- **建议暂不主张（仅内部计划）**
  - EN: `AI studio`, `AI workstation`, `agentic platform`, `full-stack infra platform`, `cloud platform`
  - ZH: `AI 工作室`, `AI 工作站`, `智能体平台`, `全栈基础设施平台`, `云平台`

---

## 2) 图片描述（Image Description）

> 字段定义：
> - `Block`：归属页面模块
> - `中文描述`：中文主描述
> - `英文描述`：英文可读版
> - `Alt`：图片 alt 文本（建议最短）
> - `用途`：出现在页面中的具体用途
> - `建议尺寸`：便于交付排版的尺寸建议

### 2.1 统一列表

1. **Block**: Hero 背景图
   - **中文描述**：深色渐变背景，左侧有轻量化芯片与数据节点图形，右侧向中心汇聚出工作流箭头。
   - **英文描述**：Dark gradient hero backdrop with subtle chip and node graphics, converging flow arrows to the center.
   - **Alt**: `Dark gradient hero with AI workflow nodes`
   - **用途**：Hero 主视觉
   - **建议尺寸**：1920×1080（桌面）、1125×2436（移动）

2. **Block**: Problem 插画
   - **中文描述**：大量零散小窗口、脚本与终端图标错落，中央被一条高亮路径串起，突出“碎片化到统一”。
   - **英文描述**：Scattered mini windows, scripts, and terminal icons connected by one highlighted path.
   - **Alt**: `Fragmented workflows connected into one path`
   - **用途**：Problem 区点缀插画
   - **建议尺寸**：1600×900（桌面）、1200×1200（移动）

3. **Block**: Product Loop 卡片图
   - **中文描述**：4 张风格一致卡片，图标分别对应 Serve、Fine-tune、Benchmark、Evaluate，卡片通过箭头形成闭环。
   - **英文描述**：Four consistent cards for Serve, Fine-tune, Benchmark, Evaluate linked by arrows.
   - **Alt**: `Product loop cards for serve, fine-tune, benchmark, evaluate`
   - **用途**：Product Loop 区段信息图
   - **建议尺寸**：2200×900（桌面）

4. **Block**: Architecture 架构图
   - **中文描述**：三层架构：上层 Model Providers，下层 Melix Runtime，中层 Workflows，并用双向箭头表达控制流与数据流。
   - **英文描述**: Three-layer architecture chart with model providers, Melix runtime, and workflows using bidirectional arrows.
   - **Alt**: `Three-layer melix architecture diagram`
   - **用途**：Architecture 区主图
   - **建议尺寸**：2400×1350（桌面）、1080×1350（移动）

5. **Block**: Workflow Loop 图（可选替代）
   - **中文描述**：环形图显示 `Register → Serve → Fine-tune → Benchmark → Evaluate → Iterate`，每个节点用简洁图标。
   - **英文描述**: Circular workflow loop showing Register, Serve, Fine-tune, Benchmark, Evaluate, Iterate with simple icons.
   - **Alt**: `Melix lifecycle loop diagram`
   - **用途**：Architecture 补充图/流程解释
   - **建议尺寸**：1400×1400（桌面）、1200×1200（移动）

6. **Block**: macOS Experience 截图（App）
   - **中文描述**：macOS 主界面截图，包含菜单、会话列表、模型列表、日志与当前状态。
   - **英文描述**: macOS app screenshot showing sidebar, session list, model list, logs, and runtime status.
   - **Alt**: `Melix macOS interface screenshot`
   - **用途**：macOS Experience 区
   - **建议尺寸**：2880×1800（通用截图）

7. **Block**: CLI 截图（终端）
   - **中文描述**：终端连续展示依赖安装、启动服务、模型运行、基准测试输出的完整命令流。
   - **英文描述**: Terminal command flow showing dependency setup, service start, and benchmark output.
   - **Alt**: `Melix CLI workflow in terminal`
   - **用途**：Get Started 区步骤验证
   - **建议尺寸**：1920×1080

8. **Block**: Menubar 控制截图
   - **中文描述**：菜单栏下拉展示会话状态、快捷操作入口和关键指标数值。
   - **英文描述**: Menubar dropdown with live session status, quick actions, and core metrics.
   - **Alt**: `Melix menubar quick controls`
   - **用途**：macOS Experience 或功能亮点区
   - **建议尺寸**：1200×600（局部）

9. **Block**: Get Started 流程图
   - **中文描述**：五步时间线示意：Clone → Install → Start service → Open app / CLI → Run first model.
   - **英文描述**: Five-step onboarding timeline from clone to first run.
   - **Alt**: `Onboarding timeline 1 to 5`
   - **用途**：Get Started 区流程图
   - **建议尺寸**：1800×900

10. **Block**: Current Status 状态图标
   - **中文描述**：三列卡片分别用绿色、黄色、灰色标识“已支持、进行中、尚未支持”。
   - **英文描述**: Three-column status cards with green, yellow, and neutral labels.
   - **Alt**: `Current status matrix cards`
   - **用途**：Current Status 区
   - **建议尺寸**：2400×1200

---

## 3) 上线前口径确认（可直接用于评审）

### 一页页校验清单

1. 所有首页主句均对应 `local AI runtime` 的主定位，不扩展到“托管云平台”承诺。
2. Requirements 明确且真实可执行。
3. Quick start 提供 3–5 分钟可复现路径。
4. 图片资产有 alt、用途、尺寸、风格约束，避免空缺。
5. 对外文案使用统一术语，避免 `AI studio`、`AI workstation` 这类扩展承诺。

---

## 4) 交付建议（你可直接复制）

- 先用此文件作为“文案主表”。
- 图片清单中每一项至少产出一张 PNG/JPG（不低于建议尺寸），并导出 WebP 作为可选 Web 格式。
- 所有图片文件命名建议统一为：`melix-[section]-[lang?]-[index].png`。
