const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d'); //픽셀 컨트롤

//canvas 사이즈 설정해야 함 그래야 그려짐
canvas.width = 500;
canvas.height = 500;

ctx.strokeStyle = 'black';
ctx.lineWidth = 2.5;

let painting = false;

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

function onMouseDown(event) {
    painting = true;
    console.log(event);
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