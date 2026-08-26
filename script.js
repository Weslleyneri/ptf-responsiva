const projects = [
  {
    id: "01",
    title: "Centro de Comando",
    color: "#74f7ff",
    description: "Portal executivo para transformar um backlog complexo em decisões rápidas, com leitura de SLA, chamados críticos, histórico e priorização operacional.",
    challenge: "Centralizar diferentes recortes do backlog e evitar que chamados críticos se perdessem na rotina operacional.",
    solution: "Uma experiência única com cards acionáveis, filtros, histórico de tratativas, alertas de prazo e apoio de IA para síntese de cenário.",
    tags: ["React", "IA", "API", "Analytics"],
  },
  {
    id: "02",
    title: "Estoque ATP",
    color: "#a987ff",
    description: "Ecossistema de monitoramento para valor de estoque, limites segurados, urnas e ATPs críticas, conectando Databricks à visão executiva no Power BI.",
    challenge: "Transformar uma base extensa de peças e ATPs em uma leitura financeira clara, confiável e acionável.",
    solution: "Modelo analítico conectado ao datalake, com cálculo de valor, limite por ATP, atingimento, excedentes e recortes executivos.",
    tags: ["Power BI", "Databricks", "DAX", "SQL"],
  },
  {
    id: "03",
    title: "Projeto Cervelo",
    color: "#b8ff65",
    description: "Automação da roteirização de técnicos de campo para reduzir quilômetros, respeitar prioridades e dar à gestão uma visão clara da operação.",
    challenge: "Substituir a roteirização manual, sem visão consolidada de quilômetros, localização e prioridade dos chamados.",
    solution: "Fluxo automatizado que organiza a jornada do técnico e estrutura dados para acompanhamento e tomada de decisão.",
    tags: ["Automação", "Geodados", "BI", "Field Service"],
  },
  {
    id: "04",
    title: "Brilha Mais",
    color: "#ff7ecb",
    description: "Assistente operacional para interagir com técnicos em campo, acompanhar indicadores e automatizar cobranças e escalonamentos.",
    challenge: "Ganhar proximidade com a rotina do técnico sem depender de cobranças e consolidações totalmente manuais.",
    solution: "Conversação automatizada, acompanhamento de lotes e indicadores, comunicações por e-mail e escalonamento inteligente.",
    tags: ["LLM", "WhatsApp", "Automação", "NPS"],
  },
  {
    id: "05",
    title: "Peças Backup",
    color: "#ffad66",
    description: "Portal para acompanhar cada envio e consumo de peças backup, dando visibilidade sobre saldo, uso e comportamento por técnico.",
    challenge: "Controlar kits enviados a campo e identificar rapidamente desvios de consumo ou necessidade de reposição.",
    solution: "Rastreabilidade de remessas e uso por técnico, visão de estoque e análise comparativa de quem utiliza mais ou menos peças.",
    tags: ["React", "PostgreSQL", "Dashboard", "Logística"],
  },
  {
    id: "06",
    title: "RAT Digital",
    color: "#7aa7ff",
    description: "Jornada mobile para assinatura digital do cliente e do técnico, geração do PDF padrão e compartilhamento direto pelo celular.",
    challenge: "Eliminar atrito no encerramento do atendimento e garantir que o documento final fosse gerado no padrão correto.",
    solution: "Assinatura em tela, preenchimento automatizado do PDF, download imediato e compartilhamento pelo menu nativo do aparelho.",
    tags: ["PDF", "Assinatura", "Mobile", "UX"],
  },
];

const root = document.documentElement;
const header = document.querySelector("#site-header");
const dialog = document.querySelector("#project-dialog");
const closeButton = document.querySelector("#dialog-close");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function updatePointer(event) {
  root.style.setProperty("--pointer-x", `${event.clientX}px`);
  root.style.setProperty("--pointer-y", `${event.clientY}px`);
}

let scrollFrame = 0;
function updateScroll() {
  if (scrollFrame) return;
  scrollFrame = requestAnimationFrame(() => {
    const max = root.scrollHeight - window.innerHeight;
    root.style.setProperty("--scroll", `${max > 0 ? (window.scrollY / max) * 100 : 0}%`);
    header.classList.toggle("is-scrolled", window.scrollY > 24);
    scrollFrame = 0;
  });
}

function updateTilt(event) {
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width;
  const y = (event.clientY - rect.top) / rect.height;
  card.style.setProperty("--rx", `${(0.5 - y) * 9}deg`);
  card.style.setProperty("--ry", `${(x - 0.5) * 11}deg`);
  card.style.setProperty("--mx", `${x * 100}%`);
  card.style.setProperty("--my", `${y * 100}%`);
}

function resetTilt(event) {
  event.currentTarget.style.setProperty("--rx", "0deg");
  event.currentTarget.style.setProperty("--ry", "0deg");
}

function openProject(projectIndex) {
  const project = projects[projectIndex];
  if (!project) return;

  document.querySelector("#dialog-index").textContent = `${project.id} // CASE FILE`;
  document.querySelector("#dialog-index").style.color = project.color;
  document.querySelector("#dialog-title").textContent = project.title;
  document.querySelector("#dialog-description").textContent = project.description;
  document.querySelector("#dialog-challenge").textContent = project.challenge;
  document.querySelector("#dialog-solution").textContent = project.solution;
  document.querySelector("#dialog-tags").innerHTML = project.tags.map((tag) => `<span>${tag}</span>`).join("");

  dialog.showModal();
  document.body.classList.add("dialog-open");
}

function closeProject() {
  if (dialog.open) dialog.close();
}

document.querySelectorAll(".tilt-card").forEach((card) => {
  if (!reduceMotion) card.addEventListener("pointermove", updateTilt);
  card.addEventListener("pointerleave", resetTilt);
});

document.querySelectorAll("[data-project]").forEach((card) => {
  card.addEventListener("click", () => openProject(Number(card.dataset.project)));
});

closeButton.addEventListener("click", closeProject);
dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));
dialog.addEventListener("click", (event) => {
  const rect = dialog.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) closeProject();
});

const revealObserver = new IntersectionObserver(
  (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

window.addEventListener("pointermove", updatePointer, { passive: true });
window.addEventListener("scroll", updateScroll, { passive: true });
updateScroll();
