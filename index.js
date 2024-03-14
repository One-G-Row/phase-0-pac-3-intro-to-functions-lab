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

/*function sayHiToHeadphonedRoomate(string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you";
  } else if (string.toUpperCase() === string) {
    return "YES INDEED!";
  } else if (string === "Let's have dinner together!") {
    return "I would love to!";
  }
}*/

function sayHiToHeadphonedRoommate(string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you!";
  } else if (string.toUpperCase() === string) {
    return "YES INDEED!";
  } else if (string === "Let's have dinner together!") {
    return "I would love to!";
  }
}

console.log(sayHiToHeadphonedRoomate());

/*//sayHiToHeadphonedRoommate.toLowerCase
function sayHiToHeadphonedRoomateLower(string) {
  return "I can't hear you!";
}
console.log(sayHiToHeadphonedRoomate("hello"));

//sayHiToHeadphonedRoomate.toUpperCase
function sayHiToHeadphonedRoomateUpper(string) {
  return "YES INDEED!";
}
console.log(sayHiToHeadphonedRoomateUpper("HELLO"));

//default
function sayHiToHeadphonedRoomateDinner(string) {
  return "I would love to!";
}
console.log(sayHiToHeadphonedRoomateDinner("Let's have dinner together"));*/
