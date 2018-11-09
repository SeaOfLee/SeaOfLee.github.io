const facts = [
  'Played music on live TV in Japan - twice!',
  'Opened for Social Distortion in Honolulu, HI',
  'Born and raised on the Big Island of Hawaii',
  'My middle name (\'Iolana) means "Soaring Hawk" in Hawaiian',
  "Watched the Red Sox win the '18 World Series in person",
  'Have seen Radiohead live 5 times',
]

export const FUN_FACTS = facts.map((fact, idx) => {
  return {
    id: idx + 1,
    text: fact,
  }
})
