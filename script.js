const hoursHand = document.querySelector(".hand.hours");
const minutesHand = document.querySelector(".hand.minutes");
const secondsHand = document.querySelector(".hand.seconds");

const setRotaion = (element, rotationPorcentage) => {
    element.style.setProperty('--rotation',rotationPorcentage * 360)
};

const setClock = () => {
  const currentDate = new Date();
  /*prcentagem em ralação a 60 */
  const secondsPercentage = currentDate.getSeconds() / 60;
  const minutesPercentage = (secondsPercentage + currentDate.getMinutes()) / 60;
  const hoursPercentage = (minutesPercentage + currentDate.getHours()) / 12;

  setRotaion(secondsHand, secondsPercentage);
  setRotaion(minutesHand, minutesPercentage);
  setRotaion(hoursHand, hoursPercentage);
};

setClock();
setInterval(setClock,1000)
