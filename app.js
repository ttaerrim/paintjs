const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d'); //픽셀 컨트롤
const colors = document.getElementsByClassName('jsColor');
const range = document.getElementById('jsRange');
const mode = document.getElementById('jsMode');

//canvas 사이즈 설정해야 함 그래야 그려짐
canvas.width = 500;
canvas.height = 500;

ctx.strokeStyle = 'black';
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        ctx.beginPath(); //path는 line
        ctx.moveTo(x, y);
    } else {
        // 마우스를 움직이는 내내 발생
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function onMouseUp(event) {
    stopPainting();
}

if (canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', startPainting);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mouseleave', stopPainting);
}

function handleColor(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
}

function handleRangeChange(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handleModeClick() {
    if (filling == true) {
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling = true;
        mode.innerText = 'Paint';
    }
}

if (colors) {
    Array.from(colors).forEach(color => color.addEventListener('click', handleColor));
    // colors는 배열이 아니라서 (HTMLCollection인가 그거임) 배열로 바꿔 주고 forEach로 모든 색당 하나씩 이벤트리스너 달아줌
}

if (range) {
    range.addEventListener('input', handleRangeChange);
}

if (mode) {
    mode.addEventListener('click', handleModeClick);
}