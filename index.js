function shout(string) {
  return string.toUpperCase();
}
shout(hello);

//whisper
function whisper(WELCOME) {
  return WELCOME.toLowerCase();
}
whisper(WELCOME);

//logShout
function logShout(mission) {
  console.log(mission.toUpperCase());
}
logShout(mission_accomplished);

//logWhisper
function logWhisper(functions) {
  console.log(functions.toLowerCase());
}
logWhisper(JAVASCRIPT_FUNCTIONS);

function sayHiToHeadphonedRoommate(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string === string.toUpperCase() ) {
    return "YES INDEED!";
  } else if (string === "Let's have dinner together!") {
    return "I would love to!";
  }
}

console.log(sayHiToHeadphonedRoomate());

