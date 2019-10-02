function newDateByMilliSeconds(milliSecs) {
  return new Date(null, null, null, null, null, null, milliSecs);
}

function dateToHHMMSS(date) {
  return date.toTimeString().substr(0, 8);
}

function secondsToHHMMSS(milliSecs) {
  const milliSecsDate = newDateByMilliSeconds(milliSecs);
  const HHMMSS = dateToHHMMSS(milliSecsDate);
  return HHMMSS;
}

export function timeDifferenceMilliSecondsToHHMMSS(start, end) {
  return secondsToHHMMSS(end - start);
}

export function durationUntilNowMilliSecondsToHHMMSS(start) {
  return timeDifferenceMilliSecondsToHHMMSS(start, Date.now());
}

export function makeGetterWithDefault(object, defaultValue) {
  return key => (key in object ? object[key] : defaultValue);
}
