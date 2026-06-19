const DATA = {
  site: {
    name: "MatchIQ",
    tagline: "Football intelligence, not just scores.",
    build: "Static MVP v1"
  },
  leagues: [
    {
      id: "epl",
      name: "Premier League",
      country: "England",
      accent: "#8a5cff",
      tier: "Top League",
      matchesToday: 3,
      teams: 20,
      description: "High tempo football, deep squads, and some of the highest attacking output in Europe.",
      table: [
        { rank: 1, teamId: "ars", played: 18, wins: 13, draws: 3, losses: 2, gf: 42, ga: 17, gd: 25, pts: 42, form: "W W D W W" },
        { rank: 2, teamId: "mci", played: 18, wins: 12, draws: 4, losses: 2, gf: 45, ga: 20, gd: 25, pts: 40, form: "W D W W D" },
        { rank: 3, teamId: "liv", played: 18, wins: 11, draws: 5, losses: 2, gf: 39, ga: 18, gd: 21, pts: 38, form: "D W W L W" },
        { rank: 4, teamId: "che", played: 18, wins: 10, draws: 4, losses: 4, gf: 34, ga: 22, gd: 12, pts: 34, form: "W L W D W" },
        { rank: 5, teamId: "tot", played: 18, wins: 9, draws: 4, losses: 5, gf: 37, ga: 28, gd: 9, pts: 31, form: "L W D W L" }
      ]
    },
    {
      id: "laliga",
      name: "LaLiga",
      country: "Spain",
      accent: "#00d4ff",
      tier: "Top League",
      matchesToday: 2,
      teams: 20,
      description: "Technical football, patient buildup, and tactical match control.",
      table: [
        { rank: 1, teamId: "rma", played: 18, wins: 14, draws: 2, losses: 2, gf: 41, ga: 15, gd: 26, pts: 44, form: "W W W D W" },
        { rank: 2, teamId: "bar", played: 18, wins: 12, draws: 3, losses: 3, gf: 43, ga: 21, gd: 22, pts: 39, form: "W D W W L" },
        { rank: 3, teamId: "atm", played: 18, wins: 10, draws: 5, losses: 3, gf: 31, ga: 17, gd: 14, pts: 35, form: "D W W D W" }
      ]
    },
    {
      id: "ucl",
      name: "Champions League",
      country: "Europe",
      accent: "#00ff95",
      tier: "Cup",
      matchesToday: 4,
      teams: 36,
      description: "Elite European nights with high pressure and knockout-level intensity.",
      table: []
    }
  ],
  teams: [
    {
      id: "ars",
      name: "Arsenal",
      shortName: "ARS",
      country: "England",
      leagueId: "epl",
      color: "#ef4444",
      stadium: "Emirates Stadium",
      manager: "Mikel Arteta",
      style: "Structured possession with aggressive counter-pressing",
      strengths: ["High press", "Set pieces", "Left-side rotations"],
      weaknesses: ["Transitions behind fullbacks", "Chance conversion in tight games"],
      stats: { goals: 42, xg: 39.8, possession: 59, shots: 16.2, ppda: 8.1, cleanSheets: 9 }
    },
    {
      id: "mci",
      name: "Manchester City",
      shortName: "MCI",
      country: "England",
      leagueId: "epl",
      color: "#38bdf8",
      stadium: "Etihad Stadium",
      manager: "Pep Guardiola",
      style: "Territorial dominance, positional play, and central overloads",
      strengths: ["Chance creation", "Rest defence", "Box occupation"],
      weaknesses: ["Direct counters", "Set-piece second balls"],
      stats: { goals: 45, xg: 43.1, possession: 65, shots: 17.8, ppda: 7.6, cleanSheets: 7 }
    },
    {
      id: "liv",
      name: "Liverpool",
      shortName: "LIV",
      country: "England",
      leagueId: "epl",
      color: "#dc2626",
      stadium: "Anfield",
      manager: "Arne Slot",
      style: "Fast vertical attacks with relentless pressure",
      strengths: ["Transitions", "Wide chance creation", "Late pressure"],
      weaknesses: ["Midfield spacing", "Conceding first"],
      stats: { goals: 39, xg: 38.6, possession: 57, shots: 15.6, ppda: 8.4, cleanSheets: 8 }
    },
    {
      id: "che",
      name: "Chelsea",
      shortName: "CHE",
      country: "England",
      leagueId: "epl",
      color: "#2563eb",
      stadium: "Stamford Bridge",
      manager: "Enzo Maresca",
      style: "Possession-first football with young attacking profiles",
      strengths: ["Ball progression", "Wide isolation", "Young depth"],
      weaknesses: ["Game management", "Defensive concentration"],
      stats: { goals: 34, xg: 35.2, possession: 61, shots: 14.1, ppda: 9.3, cleanSheets: 6 }
    },
    {
      id: "tot",
      name: "Tottenham",
      shortName: "TOT",
      country: "England",
      leagueId: "epl",
      color: "#e5e7eb",
      stadium: "Tottenham Hotspur Stadium",
      manager: "Ange Postecoglou",
      style: "High line, fast wing attacks, and brave buildup",
      strengths: ["Tempo", "Fullback involvement", "Pressing waves"],
      weaknesses: ["Space behind defence", "In-game control"],
      stats: { goals: 37, xg: 34.9, possession: 58, shots: 15.0, ppda: 8.8, cleanSheets: 5 }
    },
    {
      id: "rma",
      name: "Real Madrid",
      shortName: "RMA",
      country: "Spain",
      leagueId: "laliga",
      color: "#f8fafc",
      stadium: "Santiago Bernabéu",
      manager: "Carlo Ancelotti",
      style: "Elite transition threat with flexible attacking structure",
      strengths: ["Individual quality", "Counter attacks", "Big-game control"],
      weaknesses: ["Sustained wide defending", "Mid-block gaps"],
      stats: { goals: 41, xg: 37.9, possession: 58, shots: 15.3, ppda: 9.0, cleanSheets: 10 }
    },
    {
      id: "bar",
      name: "Barcelona",
      shortName: "BAR",
      country: "Spain",
      leagueId: "laliga",
      color: "#7c3aed",
      stadium: "Camp Nou",
      manager: "Hansi Flick",
      style: "High defensive line, central combinations, and winger isolation",
      strengths: ["Youth creativity", "Pressing", "Final-third passing"],
      weaknesses: ["Rest defence", "Aerial duels"],
      stats: { goals: 43, xg: 40.3, possession: 63, shots: 16.7, ppda: 8.3, cleanSheets: 6 }
    },
    {
      id: "atm",
      name: "Atlético Madrid",
      shortName: "ATM",
      country: "Spain",
      leagueId: "laliga",
      color: "#ef4444",
      stadium: "Metropolitano",
      manager: "Diego Simeone",
      style: "Compact defending, direct attacks, and physical duels",
      strengths: ["Defensive block", "Game state control", "Duels"],
      weaknesses: ["Low chance volume", "Away attacking rhythm"],
      stats: { goals: 31, xg: 30.2, possession: 52, shots: 12.4, ppda: 10.4, cleanSheets: 9 }
    }
  ],
  players: [
    {
      id: "saka",
      name: "Bukayo Saka",
      teamId: "ars",
      position: "RW",
      age: 24,
      nationality: "England",
      marketTag: "Elite Creator",
      stats: { goals: 9, assists: 8, xg: 7.6, xa: 6.9, shots90: 2.8, keyPasses90: 2.6, dribbles90: 2.1, rating: 8.1 },
      scout: "A right-sided creator who combines ball security with repeat final-third actions. Most dangerous when receiving wide and cutting inside."
    },
    {
      id: "haaland",
      name: "Erling Haaland",
      teamId: "mci",
      position: "ST",
      age: 25,
      nationality: "Norway",
      marketTag: "Box Monster",
      stats: { goals: 17, assists: 3, xg: 16.2, xa: 2.1, shots90: 4.2, keyPasses90: 0.9, dribbles90: 0.4, rating: 8.0 },
      scout: "A penalty-box finisher with elite shot volume and movement. Low touch count, massive impact."
    },
    {
      id: "salah",
      name: "Mohamed Salah",
      teamId: "liv",
      position: "RW",
      age: 33,
      nationality: "Egypt",
      marketTag: "Output King",
      stats: { goals: 12, assists: 7, xg: 10.1, xa: 5.8, shots90: 3.4, keyPasses90: 2.0, dribbles90: 1.4, rating: 8.0 },
      scout: "Still one of the most productive attackers in football. Combines finishing, playmaking, and transition threat."
    },
    {
      id: "bellingham",
      name: "Jude Bellingham",
      teamId: "rma",
      position: "AM",
      age: 23,
      nationality: "England",
      marketTag: "Complete Midfielder",
      stats: { goals: 10, assists: 5, xg: 8.4, xa: 4.7, shots90: 2.7, keyPasses90: 1.9, dribbles90: 1.7, rating: 8.3 },
      scout: "A high-impact attacking midfielder who arrives in the box, carries through pressure, and changes tempo."
    },
    {
      id: "yamal",
      name: "Lamine Yamal",
      teamId: "bar",
      position: "RW",
      age: 18,
      nationality: "Spain",
      marketTag: "Wonderkid Creator",
      stats: { goals: 7, assists: 9, xg: 5.5, xa: 7.8, shots90: 2.4, keyPasses90: 2.9, dribbles90: 3.3, rating: 8.2 },
      scout: "A left-footed wide creator with elite separation ability and scary decision-making for his age."
    },
    {
      id: "palmer",
      name: "Cole Palmer",
      teamId: "che",
      position: "AM/RW",
      age: 24,
      nationality: "England",
      marketTag: "Creative Hub",
      stats: { goals: 11, assists: 6, xg: 8.7, xa: 6.1, shots90: 3.0, keyPasses90: 2.7, dribbles90: 1.8, rating: 8.1 },
      scout: "Chelsea's main attacking hub. Calm in tight spaces, strong penalty-box decision maker, and excellent final pass selection."
    }
  ],
  matches: [
    {
      id: "m001",
      leagueId: "epl",
      date: "2026-06-19",
      time: "12:30",
      status: "LIVE",
      minute: "67'",
      homeId: "ars",
      awayId: "mci",
      homeScore: 2,
      awayScore: 1,
      venue: "Emirates Stadium",
      featured: true,
      prediction: { home: 39, draw: 28, away: 33 },
      stats: { possession: [54, 46], shots: [13, 9], shotsOnTarget: [6, 3], xg: [1.84, 1.12], corners: [5, 3], fouls: [8, 10], passes: [482, 427] },
      timeline: [
        { minute: 12, teamId: "ars", type: "goal", text: "Saka curls in from the right after a quick switch." },
        { minute: 31, teamId: "mci", type: "goal", text: "Haaland equalizes from close range." },
        { minute: 54, teamId: "ars", type: "goal", text: "Ødegaard finishes a cutback after sustained pressure." },
        { minute: 63, teamId: "mci", type: "yellow", text: "Rodri booked for stopping a counter." }
      ],
      lineups: {
        homeFormation: "4-3-3",
        awayFormation: "3-2-4-1",
        home: ["Raya", "White", "Saliba", "Gabriel", "Timber", "Rice", "Ødegaard", "Merino", "Saka", "Havertz", "Martinelli"],
        away: ["Ederson", "Akanji", "Dias", "Gvardiol", "Rodri", "Stones", "Foden", "De Bruyne", "Silva", "Doku", "Haaland"]
      },
      insight: "Arsenal are winning the left-half-space battle and have created better chances after turnovers. City still look dangerous when De Bruyne receives between the lines."
    },
    {
      id: "m002",
      leagueId: "epl",
      date: "2026-06-19",
      time: "15:00",
      status: "SCHEDULED",
      minute: null,
      homeId: "liv",
      awayId: "che",
      homeScore: null,
      awayScore: null,
      venue: "Anfield",
      featured: false,
      prediction: { home: 44, draw: 25, away: 31 },
      stats: { possession: [0, 0], shots: [0, 0], shotsOnTarget: [0, 0], xg: [0, 0], corners: [0, 0], fouls: [0, 0], passes: [0, 0] },
      timeline: [],
      lineups: {
        homeFormation: "4-2-3-1",
        awayFormation: "4-3-3",
        home: ["Alisson", "Bradley", "Konaté", "Van Dijk", "Robertson", "Mac Allister", "Szoboszlai", "Salah", "Elliott", "Díaz", "Núñez"],
        away: ["Sánchez", "James", "Colwill", "Fofana", "Cucurella", "Caicedo", "Fernández", "Lavia", "Palmer", "Jackson", "Nkunku"]
      },
      insight: "The key matchup is Liverpool's wide transitions against Chelsea's fullback zones. Palmer's positioning between the lines could decide Chelsea's chance quality."
    },
    {
      id: "m003",
      leagueId: "laliga",
      date: "2026-06-19",
      time: "17:30",
      status: "SCHEDULED",
      minute: null,
      homeId: "rma",
      awayId: "bar",
      homeScore: null,
      awayScore: null,
      venue: "Santiago Bernabéu",
      featured: true,
      prediction: { home: 42, draw: 24, away: 34 },
      stats: { possession: [0, 0], shots: [0, 0], shotsOnTarget: [0, 0], xg: [0, 0], corners: [0, 0], fouls: [0, 0], passes: [0, 0] },
      timeline: [],
      lineups: {
        homeFormation: "4-3-1-2",
        awayFormation: "4-2-3-1",
        home: ["Courtois", "Carvajal", "Militão", "Rüdiger", "Mendy", "Valverde", "Tchouaméni", "Camavinga", "Bellingham", "Rodrygo", "Vinícius Jr"],
        away: ["Ter Stegen", "Koundé", "Araújo", "Cubarsí", "Balde", "Pedri", "De Jong", "Yamal", "Gavi", "Raphinha", "Lewandowski"]
      },
      insight: "Madrid's transition speed versus Barcelona's high defensive line is the headline. If Barcelona lose the ball centrally, Madrid can create immediate danger."
    },
    {
      id: "m004",
      leagueId: "epl",
      date: "2026-06-18",
      time: "20:00",
      status: "FT",
      minute: "FT",
      homeId: "tot",
      awayId: "ars",
      homeScore: 1,
      awayScore: 3,
      venue: "Tottenham Hotspur Stadium",
      featured: false,
      prediction: { home: 32, draw: 27, away: 41 },
      stats: { possession: [55, 45], shots: [12, 15], shotsOnTarget: [4, 7], xg: [1.02, 2.34], corners: [7, 4], fouls: [11, 9], passes: [511, 430] },
      timeline: [
        { minute: 18, teamId: "ars", type: "goal", text: "Martinelli scores after a fast break." },
        { minute: 42, teamId: "tot", type: "goal", text: "Son levels with a first-time finish." },
        { minute: 69, teamId: "ars", type: "goal", text: "Rice scores from the edge of the box." },
        { minute: 88, teamId: "ars", type: "goal", text: "Havertz seals it from a corner routine." }
      ],
      lineups: {
        homeFormation: "4-3-3",
        awayFormation: "4-3-3",
        home: ["Vicario", "Porro", "Romero", "Van de Ven", "Udogie", "Sarr", "Bentancur", "Maddison", "Johnson", "Solanke", "Son"],
        away: ["Raya", "White", "Saliba", "Gabriel", "Timber", "Rice", "Ødegaard", "Merino", "Saka", "Havertz", "Martinelli"]
      },
      insight: "Arsenal controlled the high-value chances even with less possession. Tottenham had territory, but Arsenal's box entries were much cleaner."
    },
    {
      id: "m005",
      leagueId: "ucl",
      date: "2026-06-20",
      time: "12:00",
      status: "SCHEDULED",
      minute: null,
      homeId: "atm",
      awayId: "liv",
      homeScore: null,
      awayScore: null,
      venue: "Metropolitano",
      featured: false,
      prediction: { home: 31, draw: 29, away: 40 },
      stats: { possession: [0, 0], shots: [0, 0], shotsOnTarget: [0, 0], xg: [0, 0], corners: [0, 0], fouls: [0, 0], passes: [0, 0] },
      timeline: [],
      lineups: {
        homeFormation: "5-3-2",
        awayFormation: "4-2-3-1",
        home: ["Oblak", "Molina", "Giménez", "Witsel", "Hermoso", "Lino", "Koke", "De Paul", "Barrios", "Griezmann", "Álvarez"],
        away: ["Alisson", "Bradley", "Konaté", "Van Dijk", "Robertson", "Mac Allister", "Szoboszlai", "Salah", "Elliott", "Díaz", "Núñez"]
      },
      insight: "Atlético will try to slow the game down. Liverpool need fast switches and early shots before the block resets."
    }
  ],
  news: [
    { tag: "Tactical", title: "Why Arsenal's press is producing cleaner chances", text: "Their front three are forcing rushed passes into midfield, turning recoveries into high-value shots." },
    { tag: "Scout", title: "Yamal's creative profile keeps rising", text: "His key passes and successful dribbles per 90 place him among the most dangerous wide players in this mock dataset." },
    { tag: "Data", title: "xG gap: the table behind the table", text: "Teams overperforming expected goals can be flagged before results start to regress." }
  ]
};
