export function findMostFrequentIntegers(array) {
  const frequencyMap = {};

  // Compter la fréquence de chaque élément
  array.forEach((item) => {
    frequencyMap[item] = (frequencyMap[item] || 0) + 1;
  });

  // Créer un tableau à partir des entrées de l'objet et le trier par fréquence
  const sortedFrequencyArray = Object.entries(frequencyMap).sort(
    (a, b) => b[1] - a[1]
  );

  // Récupérer les deux premiers éléments (les plus fréquents)
  const mostFrequent = sortedFrequencyArray
    .slice(0, 2)
    .map((item) => parseInt(item[0]));

  return mostFrequent;
}
