const text = document.querySelector('#colorText');

const color = document.querySelector('#colorPicker');

const colorBg = () => {

    text.textContent = `カラーコード:${color.value}`
}
 
color.addEventListener('input', colorBg);

const message = (name, weather) => {

    return `${name}さま、ご機嫌麗しゅう！本日は${weather}ですよ。`;
}

console.log(message('Ashika', '大雨'));

alert(message('知子', 'ド晴天'));