const faceColor = document.getElementById('face-color');
const borderColor = document.getElementById('border-color');
const linesColor = document.getElementById('lines-color');
const largeHandsColor = document.getElementById('l-hand-color');
const secHandColor = document.getElementById('s-hand-color');
const canvas = document.getElementById('canvas');

function clock() {
  const currentTime = new Date();
  const ctx = canvas.getContext('2d');

  // Setup canvas
  ctx.save();
  ctx.clearRect(0, 0, 500, 500);
  ctx.translate(250, 250); // put 0, 0 in the middle
  ctx.rotate(-Math.PI / 2); // rotate clock -90deg

  // Set default styles
  ctx.strokeStyle = '#000000';
  ctx.fillStyle = '#f4f4f4';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';

  // Draw clock face/border
  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = borderColor.value;
  ctx.fillStyle = faceColor.value;
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fill();
  ctx.restore();

  // Draw hour lines
  ctx.save();
  ctx.strokeStyle = linesColor.value;
  for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }
  ctx.restore();

  // Draw minutes lines
  ctx.save();
  ctx.lineWidth = 4;
  ctx.strokeStyle = linesColor.value;
  for (let i = 0; i < 60; i++) {
    if (i % 5 !== 0) {
      ctx.beginPath();
      ctx.moveTo(117, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();

  // Get current time
  const hr = currentTime.getHours() % 12;
  const min = currentTime.getMinutes();
  const sec = currentTime.getSeconds();
  

  // Draw hour hand
  ctx.save();
  ctx.rotate(
    (Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec
  );
  ctx.strokeStyle = largeHandsColor.value;
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.restore();

  // Draw min hand
  ctx.save();
  ctx.rotate(
    (Math.PI / 30) * min + (Math.PI / 1800) * sec
  );
  ctx.strokeStyle = largeHandsColor.value;
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(112, 0);
  ctx.stroke();
  ctx.restore();

  // Draw sec hand
  ctx.save();
  ctx.rotate(
    (sec * Math.PI / 30)
  );
  ctx.strokeStyle = secHandColor.value;
  ctx.fillStyle = secHandColor.value;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(100, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();


  ctx.restore();
  requestAnimationFrame(clock);
}

requestAnimationFrame(clock);

document.getElementById('save-btn').addEventListener('click', () => {
  const dataURL = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.download = 'clock.png';
  link.href = dataURL;
  link.click();
})