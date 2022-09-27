let input = Date.parse(prompt("please enter date (YYYY-MM-DD) "));

if (isNaN(input) === true) {
  throw new Error("Please enter a valid date");
}

let timeDiff = formatTime(getTimeDiff(input));
console.log(
  `${timeDiff.year} ${timeDiff.month} ${timeDiff.day} ${timeDiff.hour} ${timeDiff.minute} ${timeDiff.second}`
);

function getTimeDiff(input) {
  let diff = Date.now() - input;
  if (diff < 0) diff *= -1;
  return diff;
}

function formatTime(Diff) {
  let time = {};
  let rem = Diff % 31556952000;
  time.year = (Diff - rem) / 31556952000;
  let rem2 = rem % 2629746000;
  time.month = (rem - rem2) / 2629746000;
  rem = rem2 % 86400000;
  time.day = (rem2 - rem) / 86400000;
  rem2 = rem % 3600000;
  time.hour = (rem - rem2) / 3600000;
  rem = rem2 % 60000;
  time.minute = (rem2 - rem) / 60000;
  time.second = rem / 1000;
  return time;
}
