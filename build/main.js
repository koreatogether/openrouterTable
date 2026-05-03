"use strict";
const reports = {
    v2: {
        key: "v2",
        tabId: "tab-v2",
        title: "Artificial Analysis Coding Index",
        subtitle: "복합 코딩 점수 기준, 같은 모델의 평가 설정 중 최고 점수만 표시",
        metric: "Coding Index",
        updated: "2026-05-03",
        warning: "AA 점수의 xhigh/high 등은 OpenRouter 별도 모델이 아닌 평가 설정일 수 있습니다.",
        rows: [
            row(1, "openai/gpt-5.5", "GPT-5.5 (xhigh)", "2026-04-24", 59.1, "xhigh", 5, 30, "1,050,000"),
            row(2, "openai/gpt-5.4", "GPT-5.4 (xhigh)", "2026-03-05", 57.3, "xhigh", 2.5, 15, "1,050,000"),
            row(3, "google/gemini-3.1-pro-preview", "Gemini 3.1 Pro Preview", "2026-02-19", 55.5, "default", 2, 12, "1,048,576"),
            row(4, "anthropic/claude-opus-4.7", "Claude Opus 4.7", "2026-04-16", 53.1, "non-reasoning, high effort", 5, 25, "1,000,000"),
            row(5, "openai/gpt-5.3-codex", "GPT-5.3 Codex (xhigh)", "2026-02-24", 53.1, "xhigh", 1.75, 14, "400,000"),
            row(6, "openai/gpt-5.4-mini", "GPT-5.4 mini (xhigh)", "2026-03-17", 51.5, "xhigh", 0.75, 4.5, "400,000"),
            row(7, "anthropic/claude-sonnet-4.6", "Claude Sonnet 4.6", "2026-02-17", 50.9, "adaptive reasoning, max effort", 3, 15, "1,000,000"),
            row(8, "openai/gpt-5.2", "GPT-5.2 (xhigh)", "2025-12-10", 48.7, "xhigh", 1.75, 14, "400,000"),
            row(9, "anthropic/claude-opus-4.6", "Claude Opus 4.6", "2026-02-04", 48.1, "adaptive reasoning, max effort", 5, 25, "1,000,000"),
            row(10, "anthropic/claude-opus-4.5", "Claude Opus 4.5", "2025-11-24", 47.8, "reasoning", 5, 25, "200,000"),
            row(11, "deepseek/deepseek-v4-pro", "DeepSeek V4 Pro", "2026-04-24", 47.5, "reasoning, max effort", 0.435, 0.87, "1,048,576"),
            row(12, "moonshotai/kimi-k2.6", "Kimi K2.6", "2026-04-20", 47.1, "default", 0.74, 3.49, "262,142"),
            row(13, "google/gemini-2.5-pro-preview", "Gemini 2.5 Pro Preview", "2025-06-05", 46.7, "Mar 2025 preview", 1.25, 10, "1,048,576"),
            row(14, "kwaipilot/kat-coder-pro-v2", "KAT Coder Pro V2", "2026-03-27", 45.6, "default", 0.3, 1.2, "256,000"),
            row(15, "xiaomi/mimo-v2.5-pro", "MiMo-V2.5-Pro", "2026-04-22", 45.5, "default", 1, 3, "1,048,576"),
            row(16, "qwen/qwen3.6-max-preview", "Qwen3.6 Max Preview", "2026-04-27", 44.9, "default", 1.04, 6.24, "262,144"),
            row(17, "z-ai/glm-5", "GLM-5", "2026-02-11", 44.2, "reasoning", 0.6, 2.08, "202,752"),
            row(18, "openai/gpt-5.4-nano", "GPT-5.4 nano (xhigh)", "2026-03-17", 43.9, "xhigh", 0.2, 1.25, "400,000"),
            row(19, "z-ai/glm-5.1", "GLM-5.1", "2026-04-07", 43.4, "reasoning", 1.05, 3.5, "202,752"),
            row(20, "qwen/qwen3.6-plus", "Qwen3.6 Plus", "2026-04-02", 42.9, "default", 0.325, 1.95, "1,000,000")
        ],
        recommendations: [
            rec("deepseek/deepseek-v4-pro", "47.5", "$0.435 / $0.870", "상위권 점수와 낮은 출력 단가"),
            rec("kwaipilot/kat-coder-pro-v2", "45.6", "$0.300 / $1.200", "코딩 특화 고가성비"),
            rec("openai/gpt-5.4-nano", "43.9", "$0.200 / $1.250", "OpenAI 계열 저비용"),
            rec("minimax/minimax-m2.7", "41.9", "$0.300 / $1.200", "대량 처리 후보"),
            rec("qwen/qwen3.6-plus", "42.9", "$0.325 / $1.950", "1M context")
        ],
        sources: [
            source("Artificial Analysis Coding Index", "https://artificialanalysis.ai/models/capabilities/coding"),
            source("Easy Benchmarks snapshot", "https://easy-benchmarks.com/benchmarks/artificial_analysis_coding_index"),
            source("OpenRouter Models API", "https://openrouter.ai/api/v1/models")
        ]
    },
    v1: {
        key: "v1",
        tabId: "tab-v1",
        title: "SWE-bench Verified",
        subtitle: "실제 GitHub 이슈 해결률 기준, 2차 확인 상태 포함",
        metric: "SWE-bench",
        updated: "2026-05-03",
        warning: "사이트별 집계 시점과 평가 하네스 차이로 일부 점수는 다를 수 있습니다.",
        rows: [
            row(1, "anthropic/claude-opus-4.7", "Claude Opus 4.7", "2026-04-16", 87.6, "", 5, 25, "1,000,000", "BenchLM 확인, LMMarketCap 미등재"),
            row(2, "openai/gpt-5.3-codex", "GPT-5.3 Codex", "2026-02-24", 85, "", 1.75, 14, "400,000", "BenchLM 확인, LMMarketCap 미등재"),
            row(3, "anthropic/claude-opus-4.6", "Claude Opus 4.6", "2026-02-04", 80.8, "", 5, 25, "1,000,000", "LMMarketCap 83.7"),
            row(4, "deepseek/deepseek-v4-pro", "DeepSeek V4 Pro", "2026-04-24", 80.6, "", 0.435, 0.87, "1,048,576", "BenchLM 확인"),
            row(5, "moonshotai/kimi-k2.6", "Kimi K2.6", "2026-04-20", 80.2, "", 0.74, 3.49, "262,142", "출시 기사 재확인"),
            row(6, "openai/gpt-5.2", "GPT-5.2", "2025-12-10", 80, "", 1.75, 14, "400,000", "LMMarketCap 78.0"),
            row(7, "anthropic/claude-sonnet-4.6", "Claude Sonnet 4.6", "2026-02-17", 79.6, "", 3, 15, "1,000,000", "LMMarketCap 일치"),
            row(8, "deepseek/deepseek-v4-flash", "DeepSeek V4 Flash", "2026-04-24", 79, "", 0.14, 0.28, "1,048,576", "BenchLM 확인"),
            row(9, "qwen/qwen3.6-plus", "Qwen3.6 Plus", "2026-04-02", 78.8, "", 0.325, 1.95, "1,000,000", "BenchLM 확인"),
            row(10, "xiaomi/mimo-v2-pro", "MiMo-V2-Pro", "2026-03-18", 78, "", 1, 3, "1,048,576", "BenchLM 확인"),
            row(11, "z-ai/glm-5", "GLM-5", "2026-02-11", 77.8, "", 0.6, 2.08, "202,752", "LMMarketCap 72.8"),
            row(12, "mistralai/mistral-medium-3.1", "Mistral Medium 3.1", "2025-08-13", 77.6, "", 0.4, 2, "131,072", "BenchLM 확인"),
            row(13, "qwen/qwen3.6-27b", "Qwen3.6 27B", "2026-04-27", 77.2, "", 0.32, 3.2, "262,144", "BenchLM 확인"),
            row(14, "moonshotai/kimi-k2.5", "Kimi K2.5", "2026-01-27", 76.8, "", 0.44, 2, "262,144", "LMMarketCap 70.8"),
            row(15, "x-ai/grok-4.20", "Grok 4.20", "2026-03-31", 76.7, "", 1.25, 2.5, "2,000,000", "BenchLM 확인"),
            row(16, "qwen/qwen3.5-397b-a17b", "Qwen3.5 397B A17B", "2026-02-16", 76.2, "", 0.39, 2.34, "262,144", "BenchLM 확인"),
            row(17, "xiaomi/mimo-v2-omni", "MiMo-V2-Omni", "2026-03-18", 74.8, "", 0.4, 2, "262,144", "BenchLM 확인"),
            row(18, "z-ai/glm-4.7", "GLM-4.7", "2025-12-22", 73.8, "", 0.38, 1.74, "202,752", "BenchLM 확인"),
            row(19, "qwen/qwen3.6-35b-a3b", "Qwen3.6 35B A3B", "2026-04-27", 73.4, "", 0.161, 0.965, "262,144", "BenchLM 확인"),
            row(20, "xiaomi/mimo-v2-flash", "MiMo-V2-Flash", "2025-12-14", 73.4, "", 0.09, 0.29, "262,144", "BenchLM 확인")
        ],
        recommendations: [
            rec("deepseek/deepseek-v4-flash", "79.0", "$0.140 / $0.280", "대량 코딩 작업 후보"),
            rec("xiaomi/mimo-v2-flash", "73.4", "$0.090 / $0.290", "초저가 실험용"),
            rec("qwen/qwen3.6-35b-a3b", "73.4", "$0.161 / $0.965", "저비용 70점대"),
            rec("deepseek/deepseek-v4-pro", "80.6", "$0.435 / $0.870", "균형형 추천"),
            rec("qwen/qwen3.6-plus", "78.8", "$0.325 / $1.950", "1M context")
        ],
        sources: [
            source("BenchLM SWE-bench Verified", "https://benchlm.ai/benchmarks/sweVerified"),
            source("LMMarketCap SWE-bench Verified", "https://lmmarketcap.com/benchmarks/swe_bench_verified"),
            source("OpenRouter Models API", "https://openrouter.ai/api/v1/models")
        ]
    }
};
let currentReport = "v2";
function row(rank, id, name, date, score, setting, input, output, context, check = "") {
    return { rank, id, name, date, score, scoreLabel: String(score), setting, input, output, context, check };
}
function rec(id, score, price, note) {
    return { id, score, price, note };
}
function source(label, href) {
    return { label, href };
}
function render() {
    const report = reports[currentReport];
    const query = getInput("search").value.trim().toLowerCase();
    const rows = report.rows.filter((item) => {
        const text = [item.id, item.name, item.date, item.setting, item.check].join(" ").toLowerCase();
        return text.includes(query);
    });
    setTabs(report);
    renderSummary(report, rows.length);
    renderTable(report, rows);
    renderRecommendations(report);
    renderSources(report);
}
function setTabs(report) {
    for (const key of Object.keys(reports)) {
        const tab = getButton(reports[key].tabId);
        tab.setAttribute("aria-selected", String(key === report.key));
    }
    getElement("panel").setAttribute("aria-labelledby", report.tabId);
}
function renderSummary(report, visibleCount) {
    getElement("summary").innerHTML = `
    <div>
      <h2>${escapeHtml(report.title)}</h2>
      <p>${escapeHtml(report.subtitle)}</p>
    </div>
    <dl>
      <div><dt>Updated</dt><dd>${report.updated}</dd></div>
      <div><dt>Models</dt><dd>${visibleCount} / ${report.rows.length}</dd></div>
      <div><dt>Metric</dt><dd>${escapeHtml(report.metric)}</dd></div>
    </dl>
    <p class="mini-warning">${escapeHtml(report.warning)}</p>
  `;
}
function renderTable(report, rows) {
    const extraHead = report.key === "v2" ? "평가 설정" : "2차 확인";
    getElement("table-head").innerHTML = `
    <tr>
      <th>#</th>
      <th>Model ID</th>
      <th>Model</th>
      <th>Date</th>
      <th>${escapeHtml(report.metric)}</th>
      <th>${extraHead}</th>
      <th>Input</th>
      <th>Output</th>
      <th>Context</th>
    </tr>
  `;
    getElement("table-body").innerHTML = rows.map((item) => {
        const extra = report.key === "v2" ? item.setting : item.check;
        return `
      <tr>
        <td class="rank">${item.rank}</td>
        <td><code>${escapeHtml(item.id)}</code></td>
        <td class="model-name">${escapeHtml(item.name)}</td>
        <td>${item.date}</td>
        <td><span class="score">${item.scoreLabel}</span></td>
        <td>${escapeHtml(extra ?? "")}</td>
        <td>$${formatPrice(item.input)}</td>
        <td>$${formatPrice(item.output)}</td>
        <td>${item.context}</td>
      </tr>
    `;
    }).join("");
}
function renderRecommendations(report) {
    getElement("recommend-subtitle").textContent = report.metric;
    getElement("recommendations").innerHTML = report.recommendations.map((item, index) => `
    <article class="card">
      <b>${index + 1}</b>
      <code>${escapeHtml(item.id)}</code>
      <span>${escapeHtml(item.score)}</span>
      <span>${escapeHtml(item.price)}</span>
      <p>${escapeHtml(item.note)}</p>
    </article>
  `).join("");
}
function renderSources(report) {
    getElement("sources").innerHTML = report.sources.map((item) => (`<a href="${item.href}" target="_blank" rel="noreferrer">${escapeHtml(item.label)}</a>`)).join("");
}
function formatPrice(value) {
    return value >= 1 ? value.toFixed(3).replace(/0+$/, "").replace(/\.$/, "") : value.toFixed(3);
}
function getElement(id) {
    const element = document.getElementById(id);
    if (!element)
        throw new Error(`Missing element #${id}`);
    return element;
}
function getButton(id) {
    const element = getElement(id);
    if (!(element instanceof HTMLButtonElement))
        throw new Error(`#${id} is not a button`);
    return element;
}
function getInput(id) {
    const element = getElement(id);
    if (!(element instanceof HTMLInputElement))
        throw new Error(`#${id} is not an input`);
    return element;
}
function escapeHtml(value) {
    return value.replace(/[&<>"']/g, (char) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }[char] ?? char));
}
function setTheme(theme) {
    document.body.dataset.theme = theme;
    localStorage.setItem("openrouter-table-theme", theme);
    document.querySelectorAll("[data-theme-option]").forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.themeOption === theme));
    });
}
document.querySelectorAll("[data-theme-option]").forEach((button) => {
    button.addEventListener("click", () => setTheme((button.dataset.themeOption ?? "comfort")));
});
getButton("tab-v2").addEventListener("click", () => {
    currentReport = "v2";
    render();
});
getButton("tab-v1").addEventListener("click", () => {
    currentReport = "v1";
    render();
});
getInput("search").addEventListener("input", render);
const savedTheme = localStorage.getItem("openrouter-table-theme");
setTheme(savedTheme ?? "comfort");
render();
