export default function addWeightToLocalStorage(key) {
  const savedData = JSON.parse(localStorage.getItem(key)) || [];
  savedData.push(
    localStorage.setItem("bodyweightDataArray", JSON.stringify(key))
  );
}

export function getItemsFromLocalStorage(key) {
  const data = JSON.parse(localStorage.getItem(key)) || [];
  return data;
}

export function addItemtoLocalStorage(key, item) {
  const data = getItemsFromLocalStorage(key);

  data.push(item);
  localStorage.setItem(key, JSON.stringify(item));
}

export function getExerciseNameFromLocalStorage(key) {
  const data = JSON.parse(localStorage.getItem(key));
  return data;
}

export function createItemInLocalStorage(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
}

// export function removeItemFromLocalStorageByName(key, itemId) {
//   const data = getItemsFromLocalStorage(key);

//   const newData = data.filter((item) => {
//     return item.setId !== itemId;
//   });
//   localStorage.setItem(key, JSON.stringify(newData));
// }

// export function updateLocalStorage(key, item) {
//     const data = getItemsFromLocalStorage(key);

//     data.push(item);
//     localStorage.setItem(key, JSON.stringify(data));
//   }
