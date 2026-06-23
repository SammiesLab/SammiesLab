const clocks = [...document.querySelectorAll(".clock-card")];
const updatedLabel = document.querySelector("#last-updated");
const toggleButton = document.querySelector("#toggle-format");

let use24HourTime = false;

const formatters = new Map();

function getFormatter(timeZone, options) {
  const key = JSON.stringify({ timeZone, use24HourTime, ...options });

  if (!formatters.has(key)) {
    formatters.set(
      key,
      new Intl.DateTimeFormat("en-US", {
        timeZone,
        ...options
      })
    );
  }

  return formatters.get(key);
}

function formatTime(date, timeZone) {
  return getFormatter(timeZone, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: !use24HourTime
  }).format(date);
}

function formatDate(date, timeZone) {
  return getFormatter(timeZone, {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(date);
}

function formatOffset(date, timeZone) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    timeZoneName: "shortOffset"
  }).formatToParts(date);

  return parts.find((part) => part.type === "timeZoneName")?.value ?? "UTC";
}

function updateClocks() {
  const now = new Date();

  clocks.forEach((clock) => {
    const timeZone = clock.dataset.timezone;

    clock.querySelector(".time").textContent = formatTime(now, timeZone);
    clock.querySelector(".date").textContent = formatDate(now, timeZone);
    clock.querySelector(".offset").textContent = formatOffset(now, timeZone);
  });

  updatedLabel.textContent = `Last updated ${formatTime(now, "America/New_York")} Maine time`;
}

function toggleTimeFormat() {
  use24HourTime = !use24HourTime;
  formatters.clear();

  toggleButton.textContent = use24HourTime ? "Use 12-hour time" : "Use 24-hour time";
  toggleButton.setAttribute("aria-pressed", String(use24HourTime));

  updateClocks();
}

toggleButton.addEventListener("click", toggleTimeFormat);

updateClocks();
setInterval(updateClocks, 1000);
