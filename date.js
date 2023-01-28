module.exports = getDate;

function getDate() {

  let today = new Date();
  let options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };
  let day = today.toLocaleDateString("en-US", options);

  return day;

}
