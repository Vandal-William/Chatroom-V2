function getNextId(list) {
  // récupérer le plus grand id
  // on crée un tableau de nombre
  const ids = list.map((item) => item.id);
  // qu'on derverse dans la fonction Math.max
  const id = Math.max(...ids);
  // et ajouter 1
  return id + 1;
}

// eslint-disable-next-line import/prefer-default-export
export { getNextId };
