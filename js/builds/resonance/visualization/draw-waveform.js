export function drawWaveform(audioBuffer, canvas) {
  const context = canvas.getContext("2d");

  const channelData = audioBuffer.getChannelData(0);

  context.clearRect(0, 0, canvas.width, canvas.height);

  const step = Math.ceil(channelData.length / canvas.width);

  context.beginPath();

  for (let x = 0; x < canvas.width; x++) {
    const sample = channelData[x * step];

    const y = (sample * 0.5 + 0.5) * canvas.height;

    if (x === 0) {
      context.moveTo(x, y);
    } else {
      context.lineTo(x, y);
    }
  }

  context.stroke();
}
