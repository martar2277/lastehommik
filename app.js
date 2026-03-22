const routine = {
  esmaspaev: {
    name: "Esmaspäev",
    total: "10-15 min",
    segments: {
      warmup: {
        time: "3 min",
        activities: [
          {
            title: "Jänesehüpped",
            description: "Hüppa madalalt käed ette sirutatud, maandu vaikselt."
          },
          {
            title: "Karukõnd",
            description: "Kõnni pehme matt peal käte ja jalgadega, hoia puusad madalal."
          }
        ]
      },
      main: {
        time: "5-8 min",
        activities: [
          {
            title: "Kükiring",
            description: "2 x 10 madalat kükki, soovi korral pea kohal kerge pall."
          },
          {
            title: "Pallivise",
            description: "Viska ja püüa pehme pall paarilisega, sammuta viske järel."
          }
        ]
      },
      cooldown: {
        time: "2-4 min",
        activities: [
          {
            title: "Varvastel kõnd",
            description: "Kõnni saalis varvastel ja lase käsi ringutada aeglaselt."
          },
          {
            title: "Käteringid",
            description: "Seistes tee aeglased ringid ette ja taha, hingates sügavalt."
          }
        ]
      }
    }
  },
  teisipaev: {
    name: "Teisipäev",
    total: "10-15 min",
    segments: {
      warmup: {
        time: "3 min",
        activities: [
          {
            title: "Muusikaline mars",
            description: "Marsige muusika järgi, tõsta põlved kõrgele ja plaksuta."
          },
          {
            title: "Põlvetõste mäng",
            description: "Tõsta kordamööda põlvi ja puuduta vastaskäega."
          }
        ]
      },
      main: {
        time: "5-8 min",
        activities: [
          {
            title: "Tasakaalukujud",
            description: "Seisa ühe jala peal, peatu kui õpetaja hõikab."
          },
          {
            title: "Plank torn",
            description: "Hoia planguasendit 2 x 15 sek, loe üheskoos valjusti."
          }
        ]
      },
      cooldown: {
        time: "2-4 min",
        activities: [
          {
            title: "Sügav hingamine",
            description: "Istudes hingake sisse läbi nina, välja puhudes \"puhhh\"."
          },
          {
            title: "Seljarull",
            description: "Seisa jalad koos, veereta selga aeglaselt alla ja üles."
          }
        ]
      }
    }
  },
  kolmapaev: {
    name: "Kolmapäev",
    total: "12-15 min",
    segments: {
      warmup: {
        time: "3 min",
        activities: [
          {
            title: "Käteplaksu ring",
            description: "Seiske ringis, plaksutage kord ühele, kord teisele sõbrale."
          },
          {
            title: "Varvaste puudutus",
            description: "Puuduta vaheldumisi vastaskäega varbaid, siruta selg."
          }
        ]
      },
      main: {
        time: "6-8 min",
        activities: [
          {
            title: "Takistusrada",
            description: "Rooma mati alt, astu madalast redelist ja astu üle pehme tõkke."
          },
          {
            title: "Rullid ja pöörded",
            description: "Veereta matil küljele ja tee aeglased pöörded."
          }
        ]
      },
      cooldown: {
        time: "3 min",
        activities: [
          {
            title: "Puu venitus",
            description: "Seisa sirgelt, tõsta käed pea kohale ja hinga aeglaselt."
          }
        ]
      }
    }
  },
  neljapaev: {
    name: "Neljapäev",
    total: "11-15 min",
    segments: {
      warmup: {
        time: "3 min",
        activities: [
          {
            title: "Palliga paar",
            description: "Seisa paarilisega vastakuti, viska pall rinnalt ja võta kinni."
          }
        ]
      },
      main: {
        time: "6-9 min",
        activities: [
          {
            title: "Jaama ring",
            description: "1) Seinale kätekõverdus põlvedel 2) Istesse tõus mänguasjaga 3) Kohahüpped."
          },
          {
            title: "Kiirusjaam",
            description: "Tee jaamasid 30 sek tükis, korda kahes ringis."
          }
        ]
      },
      cooldown: {
        time: "2-3 min",
        activities: [
          {
            title: "Jalaringid",
            description: "Lama selili, tõsta jalad üles ja tee aeglased ringid mõlemas suunas."
          }
        ]
      }
    }
  },
  reede: {
    name: "Reede",
    total: "10-14 min",
    segments: {
      warmup: {
        time: "3 min",
        activities: [
          {
            title: "Rütmikõnd",
            description: "Kõnni rütmis, lisa varvastel tõuse ja kannale veeremisi."
          }
        ]
      },
      main: {
        time: "5-8 min",
        activities: [
          {
            title: "Jälgi liidrit",
            description: "Matki juhendaja liigutusi: kõrged põlved, pöörded, väikesed hüpped."
          },
          {
            title: "Krabi kõnd",
            description: "Toetu kätel ja jalgadel, liigu krabina edasi-tagasi."
          }
        ]
      },
      cooldown: {
        time: "2-3 min",
        activities: [
          {
            title: "Pilve sirutus",
            description: "Lama põrandal, siruta käed üles nagu puudutaks pilvi ja lõdvesta."
          }
        ]
      }
    }
  }
};

const dayButtons = document.querySelectorAll(".day-btn");
const activityTemplate = document.getElementById("activity-template");
const notesField = document.getElementById("notes");
const resetDayBtn = document.getElementById("reset-day");
const shuffleBtn = document.getElementById("shuffle");

const titleEl = document.getElementById("day-title");
const totalTimeEl = document.getElementById("total-time");
const warmupList = document.getElementById("warmup-list");
const mainList = document.getElementById("main-list");
const cooldownList = document.getElementById("cooldown-list");
const warmupTimeEl = document.getElementById("warmup-time");
const mainTimeEl = document.getElementById("main-time");
const cooldownTimeEl = document.getElementById("cooldown-time");

const todayKey = () => new Date().toISOString().slice(0, 10);

function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function storageKey(day, type) {
  return `routine:${day}:${todayKey()}:${type}`;
}

function renderDay(dayKey, shouldShuffle = false) {
  const day = routine[dayKey];
  if (!day) return;

  dayButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.day === dayKey);
  });

  titleEl.textContent = day.name;
  totalTimeEl.textContent = day.total;
  warmupTimeEl.textContent = day.segments.warmup.time;
  mainTimeEl.textContent = day.segments.main.time;
  cooldownTimeEl.textContent = day.segments.cooldown.time;

  const segments = [
    { key: "warmup", listEl: warmupList },
    { key: "main", listEl: mainList },
    { key: "cooldown", listEl: cooldownList }
  ];

  segments.forEach(({ key, listEl }) => {
    listEl.innerHTML = "";
    const activities = [...day.segments[key].activities];
    if (shouldShuffle) {
      activities.sort(() => Math.random() - 0.5);
    }
    const completed = JSON.parse(localStorage.getItem(storageKey(dayKey, `${key}:done`)) || "{}");

    activities.forEach((activity) => {
      const node = activityTemplate.content.cloneNode(true);
      const checkbox = node.querySelector(".activity-check");
      const title = node.querySelector(".activity-title");
      const description = node.querySelector(".activity-description");

      const itemId = `${key}-${slugify(activity.title)}`;
      checkbox.id = itemId;
      checkbox.checked = Boolean(completed[itemId]);
      checkbox.addEventListener("change", () => handleCheck(dayKey, key, itemId, checkbox.checked));

      title.textContent = activity.title;
      description.textContent = activity.description;

      listEl.appendChild(node);
    });
  });

  loadNotes(dayKey);
  localStorage.setItem("routine:lastDay", dayKey);
}

function handleCheck(dayKey, segmentKey, itemId, checked) {
  const key = storageKey(dayKey, `${segmentKey}:done`);
  const state = JSON.parse(localStorage.getItem(key) || "{}");
  state[itemId] = checked;
  localStorage.setItem(key, JSON.stringify(state));
}

function loadNotes(dayKey) {
  const saved = localStorage.getItem(storageKey(dayKey, "notes"));
  notesField.value = saved || "";
}

function saveNotes(dayKey, value) {
  localStorage.setItem(storageKey(dayKey, "notes"), value);
}

function resetDay(dayKey) {
  ["warmup", "main", "cooldown"].forEach((segment) => {
    localStorage.removeItem(storageKey(dayKey, `${segment}:done`));
  });
  localStorage.removeItem(storageKey(dayKey, "notes"));
  renderDay(dayKey);
}

function preferredDayKey() {
  const stored = localStorage.getItem("routine:lastDay");
  if (stored && routine[stored]) {
    return stored;
  }

  const weekday = new Date().getDay();
  switch (weekday) {
    case 1:
      return "esmaspaev";
    case 2:
      return "teisipaev";
    case 3:
      return "kolmapaev";
    case 4:
      return "neljapaev";
    case 5:
      return "reede";
    default:
      return "esmaspaev";
  }
}

let activeDay = preferredDayKey();
renderDay(activeDay);

dayButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    activeDay = btn.dataset.day;
    renderDay(activeDay);
  });
});

notesField.addEventListener("input", (event) => {
  saveNotes(activeDay, event.target.value);
});

resetDayBtn.addEventListener("click", () => {
  resetDay(activeDay);
});

shuffleBtn.addEventListener("click", () => {
  renderDay(activeDay, true);
});

const isLocalhost = ["localhost", "127.0.0.1", ""].includes(location.hostname);

if ("serviceWorker" in navigator && (window.isSecureContext || isLocalhost)) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {
      // Vaikne tõrke logimine pole vajalik
    });
  });
}
