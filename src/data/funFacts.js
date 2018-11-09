const facts = [
  'Played music on live TV in Japan - twice!',
  'My band Neural Void opened for Social Distortion back in the day',
  'Born and raised on the Big Island of Hawaii',
  'My middle name (\'Iolana) means "Soaring Hawk" in Hawaiian',
  "Watched the Red Sox win the '18 World Series in person",
  'Favorite Drink (Alcohol): Bourbon',
  'Favorite Coffee Shop in LA: The Boy & The Bear',
]

export const FUN_FACTS = facts.map((fact, idx) => {
  return {
    id: idx + 1,
    text: fact,
  }
})
