const matches = [
  [1,"Group A","2026-06-11","13:00","UTC-6","Mexico","South Africa","Estadio Azteca","Mexico City"],
  [2,"Group A","2026-06-11","20:00","UTC-6","Korea Republic","Czechia","Estadio Akron","Guadalajara"],
  [3,"Group B","2026-06-12","15:00","UTC-4","Canada","Bosnia and Herzegovina","BMO Field","Toronto"],
  [4,"Group D","2026-06-12","18:00","UTC-7","United States","Paraguay","SoFi Stadium","Los Angeles"],
  [5,"Group C","2026-06-13","21:00","UTC-4","Haiti","Scotland","Gillette Stadium","Boston"],
  [6,"Group D","2026-06-13","21:00","UTC-7","Australia","Turkiye","BC Place","Vancouver"],
  [7,"Group C","2026-06-13","18:00","UTC-4","Brazil","Morocco","MetLife Stadium","New York New Jersey"],
  [8,"Group B","2026-06-13","12:00","UTC-7","Qatar","Switzerland","Levi's Stadium","San Francisco Bay Area"],
  [9,"Group E","2026-06-14","19:00","UTC-4","Cote d'Ivoire","Ecuador","Lincoln Financial Field","Philadelphia"],
  [10,"Group E","2026-06-14","12:00","UTC-5","Germany","Curacao","NRG Stadium","Houston"],
  [11,"Group F","2026-06-14","15:00","UTC-5","Netherlands","Japan","AT&T Stadium","Dallas"],
  [12,"Group F","2026-06-14","20:00","UTC-6","Sweden","Tunisia","Estadio BBVA","Monterrey"],
  [13,"Group H","2026-06-15","18:00","UTC-4","Saudi Arabia","Uruguay","Hard Rock Stadium","Miami"],
  [14,"Group H","2026-06-15","12:00","UTC-4","Spain","Cape Verde","Mercedes-Benz Stadium","Atlanta"],
  [15,"Group G","2026-06-15","18:00","UTC-7","IR Iran","New Zealand","SoFi Stadium","Los Angeles"],
  [16,"Group G","2026-06-15","12:00","UTC-7","Belgium","Egypt","Lumen Field","Seattle"],
  [17,"Group I","2026-06-16","15:00","UTC-4","France","Senegal","MetLife Stadium","New York New Jersey"],
  [18,"Group I","2026-06-16","18:00","UTC-4","Iraq","Norway","Gillette Stadium","Boston"],
  [19,"Group J","2026-06-16","20:00","UTC-5","Argentina","Algeria","Arrowhead Stadium","Kansas City"],
  [20,"Group J","2026-06-16","21:00","UTC-7","Austria","Jordan","Levi's Stadium","San Francisco Bay Area"],
  [21,"Group L","2026-06-17","19:00","UTC-4","Ghana","Panama","BMO Field","Toronto"],
  [22,"Group L","2026-06-17","15:00","UTC-5","England","Croatia","AT&T Stadium","Dallas"],
  [23,"Group K","2026-06-17","12:00","UTC-5","Portugal","DR Congo","NRG Stadium","Houston"],
  [24,"Group K","2026-06-17","20:00","UTC-6","Uzbekistan","Colombia","Estadio Azteca","Mexico City"],
  [25,"Group A","2026-06-18","12:00","UTC-4","Czechia","South Africa","Mercedes-Benz Stadium","Atlanta"],
  [26,"Group B","2026-06-18","12:00","UTC-7","Switzerland","Bosnia and Herzegovina","SoFi Stadium","Los Angeles"],
  [27,"Group B","2026-06-18","15:00","UTC-7","Canada","Qatar","BC Place","Vancouver"],
  [28,"Group A","2026-06-18","19:00","UTC-6","Mexico","Korea Republic","Estadio Akron","Guadalajara"],
  [29,"Group C","2026-06-19","20:30","UTC-4","Brazil","Haiti","Lincoln Financial Field","Philadelphia"],
  [30,"Group C","2026-06-19","18:00","UTC-4","Scotland","Morocco","Gillette Stadium","Boston"],
  [31,"Group D","2026-06-19","20:00","UTC-7","Turkiye","Paraguay","Levi's Stadium","San Francisco Bay Area"],
  [32,"Group D","2026-06-19","12:00","UTC-7","United States","Australia","Lumen Field","Seattle"],
  [33,"Group E","2026-06-20","16:00","UTC-4","Germany","Cote d'Ivoire","BMO Field","Toronto"],
  [34,"Group E","2026-06-20","19:00","UTC-5","Ecuador","Curacao","Arrowhead Stadium","Kansas City"],
  [35,"Group F","2026-06-20","12:00","UTC-5","Netherlands","Sweden","NRG Stadium","Houston"],
  [36,"Group F","2026-06-20","22:00","UTC-6","Tunisia","Japan","Estadio BBVA","Monterrey"],
  [37,"Group H","2026-06-21","18:00","UTC-4","Uruguay","Cape Verde","Hard Rock Stadium","Miami"],
  [38,"Group H","2026-06-21","12:00","UTC-4","Spain","Saudi Arabia","Mercedes-Benz Stadium","Atlanta"],
  [39,"Group G","2026-06-21","12:00","UTC-7","Belgium","IR Iran","SoFi Stadium","Los Angeles"],
  [40,"Group G","2026-06-21","18:00","UTC-7","New Zealand","Egypt","BC Place","Vancouver"],
  [41,"Group I","2026-06-22","20:00","UTC-4","Norway","Senegal","MetLife Stadium","New York New Jersey"],
  [42,"Group I","2026-06-22","17:00","UTC-4","France","Iraq","Lincoln Financial Field","Philadelphia"],
  [43,"Group J","2026-06-22","12:00","UTC-5","Argentina","Austria","AT&T Stadium","Dallas"],
  [44,"Group J","2026-06-22","20:00","UTC-7","Jordan","Algeria","Levi's Stadium","San Francisco Bay Area"],
  [45,"Group L","2026-06-23","16:00","UTC-4","England","Ghana","Gillette Stadium","Boston"],
  [46,"Group L","2026-06-23","19:00","UTC-4","Panama","Croatia","BMO Field","Toronto"],
  [47,"Group K","2026-06-23","12:00","UTC-5","Portugal","Uzbekistan","NRG Stadium","Houston"],
  [48,"Group K","2026-06-23","20:00","UTC-6","Colombia","DR Congo","Estadio Akron","Guadalajara"],
  [49,"Group C","2026-06-24","18:00","UTC-4","Scotland","Brazil","Hard Rock Stadium","Miami"],
  [50,"Group C","2026-06-24","18:00","UTC-4","Morocco","Haiti","Mercedes-Benz Stadium","Atlanta"],
  [51,"Group B","2026-06-24","12:00","UTC-7","Switzerland","Canada","BC Place","Vancouver"],
  [52,"Group B","2026-06-24","12:00","UTC-7","Bosnia and Herzegovina","Qatar","Lumen Field","Seattle"],
  [53,"Group A","2026-06-24","19:00","UTC-6","Czechia","Mexico","Estadio Azteca","Mexico City"],
  [54,"Group A","2026-06-24","19:00","UTC-6","South Africa","Korea Republic","Estadio BBVA","Monterrey"],
  [55,"Group E","2026-06-25","16:00","UTC-4","Curacao","Cote d'Ivoire","Lincoln Financial Field","Philadelphia"],
  [56,"Group E","2026-06-25","16:00","UTC-4","Ecuador","Germany","MetLife Stadium","New York New Jersey"],
  [57,"Group F","2026-06-25","18:00","UTC-5","Japan","Sweden","AT&T Stadium","Dallas"],
  [58,"Group F","2026-06-25","18:00","UTC-5","Tunisia","Netherlands","Arrowhead Stadium","Kansas City"],
  [59,"Group D","2026-06-25","19:00","UTC-7","Turkiye","United States","SoFi Stadium","Los Angeles"],
  [60,"Group D","2026-06-25","19:00","UTC-7","Paraguay","Australia","Levi's Stadium","San Francisco Bay Area"],
  [61,"Group I","2026-06-26","15:00","UTC-4","Norway","France","Gillette Stadium","Boston"],
  [62,"Group I","2026-06-26","15:00","UTC-4","Senegal","Iraq","BMO Field","Toronto"],
  [63,"Group G","2026-06-26","20:00","UTC-7","Egypt","IR Iran","Lumen Field","Seattle"],
  [64,"Group G","2026-06-26","20:00","UTC-7","New Zealand","Belgium","BC Place","Vancouver"],
  [65,"Group H","2026-06-26","19:00","UTC-5","Cape Verde","Saudi Arabia","NRG Stadium","Houston"],
  [66,"Group H","2026-06-26","18:00","UTC-6","Uruguay","Spain","Estadio Akron","Guadalajara"],
  [67,"Group L","2026-06-27","17:00","UTC-4","Panama","England","MetLife Stadium","New York New Jersey"],
  [68,"Group L","2026-06-27","17:00","UTC-4","Croatia","Ghana","Lincoln Financial Field","Philadelphia"],
  [69,"Group J","2026-06-27","21:00","UTC-5","Algeria","Austria","Arrowhead Stadium","Kansas City"],
  [70,"Group J","2026-06-27","21:00","UTC-5","Jordan","Argentina","AT&T Stadium","Dallas"],
  [71,"Group K","2026-06-27","19:30","UTC-4","Colombia","Portugal","Hard Rock Stadium","Miami"],
  [72,"Group K","2026-06-27","19:30","UTC-4","DR Congo","Uzbekistan","Mercedes-Benz Stadium","Atlanta"],
  [73,"Round of 32","2026-06-28","12:00","UTC-7","Runner-up Group A","Runner-up Group B","SoFi Stadium","Los Angeles"],
  [74,"Round of 32","2026-06-29","16:30","UTC-4","Winner Group E","3rd Group A/B/C/D/F","Gillette Stadium","Boston"],
  [75,"Round of 32","2026-06-29","19:00","UTC-6","Winner Group F","Runner-up Group C","Estadio BBVA","Monterrey"],
  [76,"Round of 32","2026-06-29","12:00","UTC-5","Winner Group C","Runner-up Group F","NRG Stadium","Houston"],
  [77,"Round of 32","2026-06-30","17:00","UTC-4","Winner Group I","3rd Group C/D/F/G/H","MetLife Stadium","New York New Jersey"],
  [78,"Round of 32","2026-06-30","12:00","UTC-5","Runner-up Group E","Runner-up Group I","AT&T Stadium","Dallas"],
  [79,"Round of 32","2026-06-30","19:00","UTC-6","Winner Group A","3rd Group C/E/F/H/I","Estadio Azteca","Mexico City"],
  [80,"Round of 32","2026-07-01","12:00","UTC-4","Winner Group L","3rd Group E/H/I/J/K","Mercedes-Benz Stadium","Atlanta"],
  [81,"Round of 32","2026-07-01","17:00","UTC-7","Winner Group D","3rd Group B/E/F/I/J","Levi's Stadium","San Francisco Bay Area"],
  [82,"Round of 32","2026-07-01","13:00","UTC-7","Winner Group G","3rd Group A/E/H/I/J","Lumen Field","Seattle"],
  [83,"Round of 32","2026-07-02","19:00","UTC-4","Runner-up Group K","Runner-up Group L","BMO Field","Toronto"],
  [84,"Round of 32","2026-07-02","12:00","UTC-7","Winner Group H","Runner-up Group J","SoFi Stadium","Los Angeles"],
  [85,"Round of 32","2026-07-02","20:00","UTC-7","Winner Group B","3rd Group E/F/G/I/J","BC Place","Vancouver"],
  [86,"Round of 32","2026-07-03","18:00","UTC-4","Winner Group J","Runner-up Group H","Hard Rock Stadium","Miami"],
  [87,"Round of 32","2026-07-03","20:30","UTC-5","Winner Group K","3rd Group D/E/I/J/L","Arrowhead Stadium","Kansas City"],
  [88,"Round of 32","2026-07-03","13:00","UTC-5","Runner-up Group D","Runner-up Group G","AT&T Stadium","Dallas"],
  [89,"Round of 16","2026-07-04","17:00","UTC-4","Winner Match 74","Winner Match 77","Lincoln Financial Field","Philadelphia"],
  [90,"Round of 16","2026-07-04","12:00","UTC-5","Winner Match 73","Winner Match 75","NRG Stadium","Houston"],
  [91,"Round of 16","2026-07-05","16:00","UTC-4","Winner Match 76","Winner Match 78","MetLife Stadium","New York New Jersey"],
  [92,"Round of 16","2026-07-05","18:00","UTC-6","Winner Match 79","Winner Match 80","Estadio Azteca","Mexico City"],
  [93,"Round of 16","2026-07-06","14:00","UTC-5","Winner Match 83","Winner Match 84","AT&T Stadium","Dallas"],
  [94,"Round of 16","2026-07-06","17:00","UTC-7","Winner Match 81","Winner Match 82","Lumen Field","Seattle"],
  [95,"Round of 16","2026-07-07","12:00","UTC-4","Winner Match 86","Winner Match 88","Mercedes-Benz Stadium","Atlanta"],
  [96,"Round of 16","2026-07-07","13:00","UTC-7","Winner Match 85","Winner Match 87","BC Place","Vancouver"],
  [97,"Quarter-finals","2026-07-09","16:00","UTC-4","Winner Match 89","Winner Match 90","Gillette Stadium","Boston"],
  [98,"Quarter-finals","2026-07-10","12:00","UTC-7","Winner Match 93","Winner Match 94","SoFi Stadium","Los Angeles"],
  [99,"Quarter-finals","2026-07-11","17:00","UTC-4","Winner Match 91","Winner Match 92","Hard Rock Stadium","Miami"],
  [100,"Quarter-finals","2026-07-11","20:00","UTC-5","Winner Match 95","Winner Match 96","Arrowhead Stadium","Kansas City"],
  [101,"Semi-finals","2026-07-14","14:00","UTC-5","Winner Match 97","Winner Match 98","AT&T Stadium","Dallas"],
  [102,"Semi-finals","2026-07-15","15:00","UTC-4","Winner Match 99","Winner Match 100","Mercedes-Benz Stadium","Atlanta"],
  [103,"Third place","2026-07-18","17:00","UTC-4","Loser Match 101","Loser Match 102","Hard Rock Stadium","Miami"],
  [104,"Final","2026-07-19","15:00","UTC-4","Winner Match 101","Winner Match 102","MetLife Stadium","New York New Jersey"]
].map(([id, stage, date, time, zone, home, away, venue, city]) => ({
  id, stage, group: stage.startsWith("Group ") ? stage.replace("Group ", "") : "", date, time, zone, home, away, venue, city,
  status: "scheduled", homeScore: null, awayScore: null
}));

window.addEventListener("error", event => {
  const status = document.querySelector("#updateStatus");
  if (status) status.textContent = `Błąd strony: ${event.message}`;
});

const els = {
  search: document.querySelector("#searchInput"),
  stage: document.querySelector("#stageFilter"),
  group: document.querySelector("#groupFilter"),
  city: document.querySelector("#cityFilter"),
  endpoint: document.querySelector("#endpointInput"),
  refresh: document.querySelector("#refreshBtn"),
  today: document.querySelector("#todayBtn"),
  status: document.querySelector("#updateStatus"),
  visible: document.querySelector("#visibleCount"),
  played: document.querySelector("#playedCount"),
  matchList: document.querySelector("#matchList"),
  groupsGrid: document.querySelector("#groupsGrid"),
  bracketGrid: document.querySelector("#bracketGrid")
};

const defaultEndpoint = "./results.sample.json";
els.endpoint.value = localStorage.getItem("fwc26-results-endpoint") || defaultEndpoint;

function unique(values) {
  return [...new Set(values.filter(Boolean))].sort((a, b) => a.localeCompare(b));
}

function fillSelect(select, label, values) {
  select.innerHTML = [`<option value="">${label}</option>`, ...values.map(value => `<option value="${value}">${value}</option>`)].join("");
}

fillSelect(els.stage, "Wszystkie", unique(matches.map(match => match.stage)));
fillSelect(els.group, "Wszystkie", unique(matches.map(match => match.group)));
fillSelect(els.city, "Wszystkie", unique(matches.map(match => match.city)));
els.search.value = "";
els.stage.value = "";
els.group.value = "";
els.city.value = "";

const polishDateFormatter = new Intl.DateTimeFormat("pl-PL", { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
const polishTimeFormatter = new Intl.DateTimeFormat("pl-PL", { hour: "2-digit", minute: "2-digit", timeZone: "UTC" });

function zoneOffsetHours(zone) {
  return Number(zone.match(/UTC([+-]\d+)/)?.[1] || 0);
}

function kickoffUtc(match) {
  const [year, month, day] = match.date.split("-").map(Number);
  const [hour, minute] = match.time.split(":").map(Number);
  return new Date(Date.UTC(year, month - 1, day, hour - zoneOffsetHours(match.zone), minute));
}

function kickoffPoland(match) {
  return new Date(kickoffUtc(match).getTime() + 2 * 60 * 60 * 1000);
}

function formatPolishDate(match) {
  return polishDateFormatter.format(kickoffPoland(match));
}

function formatPolishTime(match) {
  return polishTimeFormatter.format(kickoffPoland(match));
}

function matchText(match) {
  return `${match.home} ${match.away} ${match.city} ${match.venue} ${match.stage}`.toLowerCase();
}

function filteredMatches() {
  const q = els.search.value.trim().toLowerCase();
  return matches.filter(match => {
    return (!q || matchText(match).includes(q)) &&
      (!els.stage.value || match.stage === els.stage.value) &&
      (!els.group.value || match.group === els.group.value) &&
      (!els.city.value || match.city === els.city.value);
  }).sort((a, b) => kickoffUtc(a) - kickoffUtc(b));
}

function renderMatches() {
  const list = filteredMatches();
  els.visible.textContent = list.length;
  els.played.textContent = matches.filter(match => match.homeScore !== null && match.awayScore !== null).length;

  let lastDate = "";
  els.matchList.innerHTML = list.map(match => {
    const polishDate = formatPolishDate(match);
    const day = polishDate !== lastDate ? `<div class="day-band">${polishDate}</div>` : "";
    lastDate = polishDate;
    const hasScore = match.homeScore !== null && match.awayScore !== null;
    const score = hasScore
      ? `${match.homeScore} : ${match.awayScore}`
      : `<span class="time-main">${formatPolishTime(match)} PL</span><span class="time-sub">${match.time} ${match.zone} lokalnie</span>`;
    const liveClass = match.status === "live" ? " live" : "";
    return `${day}
      <article class="match-card">
        <div class="match-no"><span>Mecz</span><strong>${match.id}</strong></div>
        <div class="team">${match.home}</div>
        <div class="score${liveClass}">${score}</div>
        <div class="team">${match.away}</div>
        <div class="meta">
          <span class="pill">${match.stage}</span>
          <span>${match.venue}</span>
          <span>${match.city}</span>
        </div>
      </article>`;
  }).join("") || `<div class="day-band">Brak meczów dla wybranych filtrów</div>`;
}

function calculateGroupTables() {
  const tables = {};
  for (const match of matches.filter(m => m.group)) {
    tables[match.group] ??= {};
    for (const team of [match.home, match.away]) {
      tables[match.group][team] ??= { team, p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 };
    }
    if (match.homeScore === null || match.awayScore === null) continue;
    const home = tables[match.group][match.home];
    const away = tables[match.group][match.away];
    home.p++; away.p++;
    home.gf += match.homeScore; home.ga += match.awayScore;
    away.gf += match.awayScore; away.ga += match.homeScore;
    if (match.homeScore > match.awayScore) { home.w++; away.l++; home.pts += 3; }
    else if (match.homeScore < match.awayScore) { away.w++; home.l++; away.pts += 3; }
    else { home.d++; away.d++; home.pts++; away.pts++; }
  }
  return tables;
}

function renderGroups() {
  const tables = calculateGroupTables();
  els.groupsGrid.innerHTML = Object.entries(tables).map(([group, teams]) => {
    const rows = Object.values(teams).sort((a, b) => b.pts - a.pts || (b.gf - b.ga) - (a.gf - a.ga) || b.gf - a.gf || a.team.localeCompare(b.team));
    return `<article class="group-card">
      <h2>Grupa ${group}</h2>
      <table class="standings">
        <thead><tr><th>Drużyna</th><th>M</th><th>+/-</th><th>PKT</th></tr></thead>
        <tbody>${rows.map(team => `<tr><td>${team.team}</td><td>${team.p}</td><td>${team.gf - team.ga}</td><td><strong>${team.pts}</strong></td></tr>`).join("")}</tbody>
      </table>
    </article>`;
  }).join("");
}

function renderBracket() {
  const rounds = ["Round of 32", "Round of 16", "Quarter-finals", "Semi-finals", "Third place", "Final"];
  els.bracketGrid.innerHTML = rounds.map(round => {
    const items = matches.filter(match => match.stage === round);
    return `<article class="bracket-round">
      <h2>${round}</h2>
      ${items.map(match => `<div class="bracket-item"><strong>Mecz ${match.id}: ${match.home} vs ${match.away}</strong><span>${formatPolishDate(match)}, ${formatPolishTime(match)} PL · lokalnie ${match.date}, ${match.time} ${match.zone} · ${match.city}</span></div>`).join("")}
    </article>`;
  }).join("");
}

function firstNumber(...values) {
  for (const value of values) {
    if (value === null || value === undefined || value === "") continue;
    const number = Number(value);
    if (Number.isFinite(number)) return number;
  }
  return null;
}

function normalizeUpdate(update) {
  return {
    id: Number(update.id ?? update.matchId ?? update.matchID ?? update.matchNumber ?? update.match_no),
    homeScore: firstNumber(
      update.homeScore,
      update.home_score,
      update.homeGoals,
      update.home_goals,
      update.score?.home,
      update.score?.homeScore,
      update.score?.fullTime?.home,
      update.score?.regularTime?.home,
      update.home?.score,
      update.teams?.home?.score
    ),
    awayScore: firstNumber(
      update.awayScore,
      update.away_score,
      update.awayGoals,
      update.away_goals,
      update.score?.away,
      update.score?.awayScore,
      update.score?.fullTime?.away,
      update.score?.regularTime?.away,
      update.away?.score,
      update.teams?.away?.score
    ),
    status: update.status || update.matchStatus || update.state
  };
}

async function refreshResults() {
  const endpoint = els.endpoint.value.trim();
  if (!endpoint) return;
  localStorage.setItem("fwc26-results-endpoint", endpoint);
  els.status.textContent = "Pobieram wyniki...";
  try {
    const response = await fetch(endpoint, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    const updates = Array.isArray(payload) ? payload : payload.matches;
    if (!Array.isArray(updates)) throw new Error("Nieprawidłowy format JSON");
    let matched = 0;
    let scored = 0;
    for (const rawUpdate of updates) {
      const update = normalizeUpdate(rawUpdate);
      const match = matches.find(item => item.id === update.id);
      if (!match) continue;
      matched++;
      if (update.homeScore !== null && update.awayScore !== null) {
        match.homeScore = update.homeScore;
        match.awayScore = update.awayScore;
        match.status = update.status || "finished";
        scored++;
      } else if (update.status) {
        match.status = update.status;
      }
    }
    els.status.textContent = scored
      ? `Wczytano wyniki: ${scored} / ${matched} meczów`
      : `Pobrano ${matched} meczów, ale bez bramek`;
    renderAll();
  } catch (error) {
    els.status.textContent = `Nie udało się pobrać wyników: ${error.message}`;
  }
}

function showNearest() {
  const now = new Date();
  const nearest = matches.find(match => kickoffUtc(match) >= now) || matches[0];
  els.search.value = "";
  els.stage.value = "";
  els.group.value = "";
  els.city.value = "";
  renderMatches();
  const card = [...document.querySelectorAll(".match-card")].find(node => node.querySelector(".match-no strong")?.textContent === String(nearest.id));
  card?.scrollIntoView({ behavior: "smooth", block: "center" });
}

function renderAll() {
  renderMatches();
  renderGroups();
  renderBracket();
}

for (const input of [els.search, els.stage, els.group, els.city]) {
  input.addEventListener("input", renderMatches);
}

els.refresh.addEventListener("click", refreshResults);
els.today.addEventListener("click", showNearest);

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(item => item.classList.remove("active"));
    document.querySelectorAll(".view").forEach(item => item.classList.remove("active"));
    tab.classList.add("active");
    document.querySelector(`#${tab.dataset.view}View`).classList.add("active");
  });
});

renderAll();
