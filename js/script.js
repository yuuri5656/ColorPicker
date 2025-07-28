// colorText及びcolorPickerを定数化
const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

// colorBgという関数を作成
const colorBg = () => {
  // 背景色を入力された色に変更する
  document.body.style.backgroundColor = color.value

  // カラーコードを表示
  if (color.value === '#ffffff') {
    text.textContent = `ColorCode: ${color.value} (white)`;
  } else {
    text.textContent = `ColorCode: ${color.value`;
  }
}

color.addEventListener('input', colorBg);
