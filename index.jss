function introduction(Aki) {
  return (`Hi, my name is ${Aki}.`);
}
function introduction(Samip) {
  return (`Hi, my name is ${Samip}.`);
}
function introductionWithLanguage(Aki, Emberjs) {
  return (`Hi, my name is ${Aki} and I am learning to program in ${Emberjs}.`);
}
function introductionWithLanguageOptional(Gracie, language = "JavaScript") {
  console.log (`Hi, my name is ${Gracie} and I am learning to program in ${language}.`);
}
function introductionWithLanguageOptional(Gracie, Python = "JavaScript") {
  return (`Hi, my name is ${Gracie} and I am learning to program in ${Python}.`);
}