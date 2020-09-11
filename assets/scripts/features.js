export function randomColorInHex(amountNumbers=6) {
  const arr = [];

  for(let i = 0; i < amountNumbers; i++){
    arr[i] = Math.floor(Math.random() * Math.floor(16));

  switch (arr[i]) {
    case 10: {
      arr[i] = 'A';
    }
    case 11: {
      arr[i] = "B";
    }
    case 12: {
      arr[i] = "C";
    }
    case 13: {
      arr[i] = "D";
    }
    case 14: {
      arr[i] = "E";
    }
    case 15: {
      arr[i] = "F";
    }
  }
}
  return '#' + arr.join('');
}
