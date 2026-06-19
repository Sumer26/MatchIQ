const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const teamById = (id) => DATA.teams.find((team) => team.id === id);
const leagueById = (id) => DATA.leagues.find((league) => league.id === id);
const playerById = (id) => DATA.players.find((player) => player.id === id);
const matchById = (id) => DATA.matches.find((match) => match.id === id);

function teamBadge(team) {
  if (!team) return "";
  return `<span class="team-badge" style="--badge:${team.color}">${team.shortName}</span>`;
}

function statusPill(status) {
  const labels = { LIVE: "Live", FT: "Full time", SCHEDULED: "Upcoming" };
  return `<span class="status-pill ${status.toLowerCase()}">${labels[status] || status}</span>`;
}

function scoreText(match) {
  if (match.status === "SCHEDULED") return `<span class="match-time">${match.time}</span>`;
  return `<span class="score">${match.homeScore} - ${match.awayScore}</span>`;
}

function renderMatchCard(match, compact = false) {
  const home = teamById(match.homeId);
  const away = teamById(match.awayId);
  const league = leagueById(match.leagueId);
  return `
    <a class="match-card ${compact ? "compact" : ""}" href="match.html?id=${match.id}">
      <div class="match-meta">
        ${statusPill(match.status)}
        <span>${league?.name || "Football"}</span>
        <span>${match.status === "LIVE" ? match.minute : match.date}</span>
      </div>
      <div class="match-row">
        <div class="team-line">${teamBadge(home)}<strong>${home.name}</strong></div>
        ${scoreText(match)}
        <div class="team-line away"><strong>${away.name}</strong>${teamBadge(away)}</div>
      </div>
      <p>${match.venue}</p>
      ${!compact ? `<div class="mini-prob"><span style="width:${match.prediction.home}%"></span><span style="width:${match.prediction.draw}%"></span><span style="width:${match.prediction.away}%"></span></div>` : ""}
    </a>
  `;
}

function renderStatBar(label, homeValue, awayValue, format = (v) => v) {
  const total = Number(homeValue) + Number(awayValue);
  const homePct = total === 0 ? 50 : (Number(homeValue) / total) * 100;
  return `
    <div class="stat-bar">
      <div class="stat-values"><strong>${format(homeValue)}</strong><span>${label}</span><strong>${format(awayValue)}</strong></div>
      <div class="bar-track"><span style="width:${homePct}%"></span></div>
    </div>
  `;
}

function renderHeaderActiveState() {
  const page = document.body.dataset.page;
  $$('[data-nav]').forEach((link) => {
    if (link.dataset.nav === page) link.classList.add('active');
  });
}

function renderHome() {
  const liveMatches = DATA.matches.filter((m) => m.status === "LIVE");
  const featured = DATA.matches.find((m) => m.featured && m.status === "LIVE") || DATA.matches.find((m) => m.featured) || DATA.matches[0];
  const topPlayers = [...DATA.players].sort((a, b) => b.stats.rating - a.stats.rating).slice(0, 4);

  $("#featured-match").innerHTML = renderMatchCard(featured);
  $("#live-list").innerHTML = (liveMatches.length ? liveMatches : DATA.matches.slice(0, 3)).map((m) => renderMatchCard(m, true)).join("");
  $("#league-strip").innerHTML = DATA.leagues.map((league) => `
    <a class="league-tile" href="leagues.html#${league.id}" style="--accent:${league.accent}">
      <span>${league.tier}</span>
      <strong>${league.name}</strong>
      <small>${league.country} · ${league.teams} teams</small>
    </a>
  `).join("");
  $("#player-spotlight").innerHTML = topPlayers.map((player) => {
    const team = teamById(player.teamId);
    return `
      <a class="player-mini" href="players.html#${player.id}">
        ${teamBadge(team)}
        <div><strong>${player.name}</strong><span>${player.position} · ${player.marketTag}</span></div>
        <b>${player.stats.rating.toFixed(1)}</b>
      </a>
    `;
  }).join("");
  $("#news-grid").innerHTML = DATA.news.map((item) => `
    <article class="news-card">
      <span>${item.tag}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join("");
}

function renderMatches() {
  const leagueFilter = $("#league-filter");
  const statusFilter = $("#status-filter");
  leagueFilter.innerHTML = `<option value="all">All leagues</option>` + DATA.leagues.map((league) => `<option value="${league.id}">${league.name}</option>`).join("");

  function update() {
    const league = leagueFilter.value;
    const status = statusFilter.value;
    let matches = DATA.matches;
    if (league !== "all") matches = matches.filter((m) => m.leagueId === league);
    if (status !== "all") matches = matches.filter((m) => m.status === status);
    $("#matches-list").innerHTML = matches.map((m) => renderMatchCard(m)).join("") || `<div class="empty-state">No matches found for this filter.</div>`;
  }

  leagueFilter.addEventListener("change", update);
  statusFilter.addEventListener("change", update);
  update();
}

function renderMatchDetail() {
  const params = new URLSearchParams(window.location.search);
  const match = matchById(params.get("id")) || DATA.matches[0];
  const home = teamById(match.homeId);
  const away = teamById(match.awayId);
  const league = leagueById(match.leagueId);

  $("#match-hero").innerHTML = `
    <div class="match-detail-card">
      <div class="match-meta center-meta">${statusPill(match.status)} <span>${league.name}</span> <span>${match.venue}</span></div>
      <div class="detail-scoreboard">
        <div>${teamBadge(home)}<h2>${home.name}</h2></div>
        <div class="big-score">${match.status === "SCHEDULED" ? match.time : `${match.homeScore} - ${match.awayScore}`}</div>
        <div>${teamBadge(away)}<h2>${away.name}</h2></div>
      </div>
      <p class="insight"><strong>MatchIQ read:</strong> ${match.insight}</p>
    </div>
  `;

  const statFormat = {
    possession: (v) => `${v}%`,
    xg: (v) => Number(v).toFixed(2)
  };
  const labels = [
    ["Possession", "possession"],
    ["Shots", "shots"],
    ["Shots on target", "shotsOnTarget"],
    ["Expected goals", "xg"],
    ["Corners", "corners"],
    ["Fouls", "fouls"],
    ["Passes", "passes"]
  ];
  $("#match-stats").innerHTML = labels.map(([label, key]) => {
    const values = match.stats[key] || [0, 0];
    return renderStatBar(label, values[0], values[1], statFormat[key] || ((v) => v));
  }).join("");

  $("#timeline").innerHTML = match.timeline.length ? match.timeline.map((event) => {
    const team = teamById(event.teamId);
    return `
      <div class="timeline-item ${event.teamId === match.awayId ? "away-event" : ""}">
        <span>${event.minute}'</span>
        <div><strong>${event.type.toUpperCase()}</strong><p>${team.shortName} · ${event.text}</p></div>
      </div>
    `;
  }).join("") : `<div class="empty-state">Timeline will populate when the match starts.</div>`;

  $("#lineups").innerHTML = `
    <div class="lineup-card"><h3>${home.name} <span>${match.lineups.homeFormation}</span></h3>${match.lineups.home.map((name) => `<p>${name}</p>`).join("")}</div>
    <div class="lineup-card"><h3>${away.name} <span>${match.lineups.awayFormation}</span></h3>${match.lineups.away.map((name) => `<p>${name}</p>`).join("")}</div>
  `;
}

function renderLeagues() {
  $("#league-list").innerHTML = DATA.leagues.map((league) => {
    const tableRows = league.table.length ? league.table.map((row) => {
      const team = teamById(row.teamId);
      return `
        <tr>
          <td>${row.rank}</td>
          <td><span class="table-team">${teamBadge(team)} ${team.name}</span></td>
          <td>${row.played}</td><td>${row.wins}</td><td>${row.draws}</td><td>${row.losses}</td>
          <td>${row.gd}</td><td><strong>${row.pts}</strong></td><td>${row.form}</td>
        </tr>
      `;
    }).join("") : `<tr><td colspan="9">Cup table coming soon in the next build.</td></tr>`;

    return `
      <section class="league-section" id="${league.id}">
        <div class="section-title"><div><span>${league.country}</span><h2>${league.name}</h2></div><p>${league.description}</p></div>
        <div class="table-shell">
          <table>
            <thead><tr><th>#</th><th>Team</th><th>P</th><th>W</th><th>D</th><th>L</th><th>GD</th><th>Pts</th><th>Form</th></tr></thead>
            <tbody>${tableRows}</tbody>
          </table>
        </div>
      </section>
    `;
  }).join("");
}

function renderTeams() {
  $("#team-grid").innerHTML = DATA.teams.map((team) => {
    const league = leagueById(team.leagueId);
    return `
      <article class="team-card" style="--badge:${team.color}">
        <div class="team-card-head">${teamBadge(team)}<div><h3>${team.name}</h3><span>${league.name} · ${team.country}</span></div></div>
        <p>${team.style}</p>
        <div class="metric-row"><span>Goals</span><strong>${team.stats.goals}</strong></div>
        <div class="metric-row"><span>xG</span><strong>${team.stats.xg}</strong></div>
        <div class="metric-row"><span>Possession</span><strong>${team.stats.possession}%</strong></div>
        <div class="tag-wrap">${team.strengths.map((s) => `<span>${s}</span>`).join("")}</div>
      </article>
    `;
  }).join("");
}

function renderPlayers() {
  const playerSelect = $("#player-compare-a");
  const compareSelect = $("#player-compare-b");
  const options = DATA.players.map((p) => `<option value="${p.id}">${p.name}</option>`).join("");
  playerSelect.innerHTML = options;
  compareSelect.innerHTML = options;
  compareSelect.value = DATA.players[1].id;

  function playerCard(player) {
    const team = teamById(player.teamId);
    const s = player.stats;
    return `
      <article class="player-card" id="${player.id}">
        <div class="player-top"><div>${teamBadge(team)}<h3>${player.name}</h3><span>${player.position} · ${team.name}</span></div><b>${s.rating.toFixed(1)}</b></div>
        <p>${player.scout}</p>
        <div class="player-stats">
          <span><strong>${s.goals}</strong>Goals</span>
          <span><strong>${s.assists}</strong>Assists</span>
          <span><strong>${s.xg}</strong>xG</span>
          <span><strong>${s.xa}</strong>xA</span>
        </div>
      </article>
    `;
  }

  $("#players-grid").innerHTML = DATA.players.map(playerCard).join("");

  function updateCompare() {
    const a = playerById(playerSelect.value);
    const b = playerById(compareSelect.value);
    const metrics = [
      ["Goals", "goals"],
      ["Assists", "assists"],
      ["xG", "xg"],
      ["xA", "xa"],
      ["Shots/90", "shots90"],
      ["Key passes/90", "keyPasses90"],
      ["Dribbles/90", "dribbles90"],
      ["Rating", "rating"]
    ];
    $("#compare-output").innerHTML = `
      <div class="compare-head"><strong>${a.name}</strong><span>vs</span><strong>${b.name}</strong></div>
      ${metrics.map(([label, key]) => renderStatBar(label, a.stats[key], b.stats[key], (v) => Number(v).toFixed(key === "goals" || key === "assists" ? 0 : 1))).join("")}
    `;
  }

  playerSelect.addEventListener("change", updateCompare);
  compareSelect.addEventListener("change", updateCompare);
  updateCompare();
}

function boot() {
  renderHeaderActiveState();
  const page = document.body.dataset.page;
  if (page === "home") renderHome();
  if (page === "matches") renderMatches();
  if (page === "match") renderMatchDetail();
  if (page === "leagues") renderLeagues();
  if (page === "teams") renderTeams();
  if (page === "players") renderPlayers();

  const mobileToggle = $("#mobile-toggle");
  const nav = $(".site-nav");
  if (mobileToggle && nav) {
    mobileToggle.addEventListener("click", () => nav.classList.toggle("open"));
  }
}

document.addEventListener("DOMContentLoaded", boot);
