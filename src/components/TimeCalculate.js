const TimeCalculate = (updatedDateTime) => {
  let today = new Date();
  let date =
    today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let currentDateTime = date + " " + time;
  let differnce = Math.abs(
    new Date(currentDateTime) - new Date(updatedDateTime.replace(/-/g, "/"))
  );
  return msToTime(differnce);
};

const msToTime = (milliseconds) => {
  let ms = milliseconds % 1000;
  milliseconds = (milliseconds - ms) / 1000;
  let secs = milliseconds % 60;
  milliseconds = (milliseconds - secs) / 60;
  let mins = milliseconds % 60;
  milliseconds = (milliseconds - mins) / 60;
  let hrs = milliseconds % 24;
  let days = (milliseconds - hrs) / 24;

  return days > 0
    ? days > 1
      ? days + " days"
      : days + " day"
    : hrs > 0
    ? hrs > 1
      ? hrs + " hours"
      : hrs + " hour"
    : mins > 0
    ? mins > 1
      ? mins + " minutes"
      : mins + " minute"
    : secs + " seconds";
};

export default TimeCalculate;
