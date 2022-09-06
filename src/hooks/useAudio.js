import { useRef, useEffect } from 'react';

/**
 * Donne la capacité à un composant de jouer un son
 * chaque fois qu'une dépendance change
 * @param {string} sound - un fichier audio déjà importé
 * @param {Array} deps - le tableau de dépendances pour déterminer après quels rendus jouer le son
 */

export default function useAudio(sound, deps) {
  // je crée une ref : une boite pour mémoriser des choses liées à mon composant
  // qui persisteront au fil des rendues
  const audioElement = useRef(null);

  // au rendu initial
  useEffect(() => {
    // je mémorise un élement audio que je crée
    audioElement.current = new Audio(sound);
  }, []);

  // aux rendus où la liste des messages change
  useEffect(() => {
    // je rembobine mon son
    audioElement.current.currentTime = 0;
    // pour le jouer
    audioElement.current.play();
  }, deps);
}
