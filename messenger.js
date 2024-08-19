// messenger.js

const helplineNumbers = [
  { name: "NATIONAL EMERGENCY NUMBER", number: "112" },
  { name: "POLICE", number: "100 or 112" },
  { name: "FIRE", number: "101" },
  { name: "AMBULANCE", number: "102" },
  { name: "Disaster Management Services", number: "108" },
  { name: "Women Helpline", number: "1091" },
  { name: "Women Helpline - ( Domestic Abuse )", number: "181" },
  { name: "Air Ambulance", number: "9540161344" },
  { name: "Aids Helpline", number: "1097" },
  { name: "Anti Poison ( New Delhi )", number: "1066 or 011-1066" },
  { name: "Disaster Management ( N.D.M.A )", number: "1078, 011-26701700" },
  {
    name: "EARTHQUAKE / FLOOD / DISASTER ( N.D.R.F Headquaters )",
    number: "011-24363260 , 9711077372",
  },
  { name: "Railway Enquiry", number: "139" },
  { name: "Senior Citizen Helpline", number: "14567" },
  { name: "Road Accident Emergency Service", number: "1073" },
  {
    name: "Road Accident Emergency Service On National Highway For Private Operators",
    number: "1033",
  },
  { name: "ORBO Centre, AIIMS (For Donation Of Organ) Delhi", number: "1060" },
  { name: "Kisan Call Centre", number: "18001801551" },
  { name: "Relief Commissioner For Natural Calamities", number: "1070" },
  { name: "Children In Difficult Situation", number: "1098" },
  {
    name: "National Poisions Information Centre - AIIMS NEW DELHI ( 24*7 )",
    number: "1800116117 , 011-26593677, 26589391",
  },
  {
    name: "Poision Information Centre ( CMC , Vellore )",
    number: "18004251213",
  },
  { name: "Tourist Helpline", number: "1363 or 1800111363" },
  { name: "LPG Leak Helpline", number: "1906" },
  { name: "KIRAN MENTAL HEALTH Helpline", number: "18005990019" },
  { name: "CYBER CRIME HELPLINE", number: "155620" },
  { name: "COVID 19 HELPLINE", number: "011-23978046 OR 1075" },
];

const chatContainer = document.getElementById("chat-container");

document
  .getElementById("messenger-search-bar")
  .addEventListener("input", function (event) {
    const query = event.target.value.toLowerCase();
    chatContainer.innerHTML = "";

    if (query) {
      const filteredNumbers = helplineNumbers.filter(
        (helpline) =>
          helpline.name.toLowerCase().includes(query) ||
          helpline.number.includes(query)
      );

      filteredNumbers.forEach((helpline) => {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.innerHTML = `<strong>${helpline.name}:</strong> ${helpline.number}`;
        chatContainer.appendChild(messageElement);
      });
    }
  });
