/* eslint-disable import/prefer-default-export */

// exemple :
// Action type : une variable qui mémorise une string représentant un type d'action
// export const CHANGE_LAST_COLOR = 'CHANGE_LAST_COLOR';

// Action creator : une fonction paramétrable qui retourne un objet action
// export function changeLastColor(color) {
//   return {
//     type: CHANGE_LAST_COLOR,
//     newColor: color,
//   };
// }

// partout ou je veux faire référence à un type d'action ou à un objet action
// je peux passer par ces outils pour éviter les fautes de frappe et donc les erreurs

// export const CHANGE_DIRECTION = 'CHANGE_DIRECTION';

// export function changeDirection(direction) {
//   return {
//     type: 'CHANGE_DIRECTION',
//     direction: direction,
//   };
// }

export const TOGGLE_OPEN = 'TOGGLE_OPEN';

export const toggleOpen = () => ({
  type: TOGGLE_OPEN,
});

export const TOGGLE_SETTINGS_OPEN = 'TOGGLE_SETTINGS_OPEN';

export const toggleSettingsOpen = () => ({
  type: TOGGLE_SETTINGS_OPEN,
});
