export function detectPeaks(audioBuffer) {
  const threshold = 0.75;
  const channelData = audioBuffer.getChannelData(0);
  const sampleRate = audioBuffer.sampleRate;
  const peakEvents = [];

  channelData.forEach((amplitude, sampleIndex) => {
    if (sampleIndex === 0 || sampleIndex === channelData.length - 1) {
      return;
    }
    const previousAmplitude = channelData[sampleIndex - 1];
    const nextAmplitude = channelData[sampleIndex + 1];
    if (
      amplitude > threshold &&
      amplitude > previousAmplitude &&
      amplitude > nextAmplitude
    ) {
      const time = sampleIndex / sampleRate;
      peakEvents.push({
        amplitude,
        sampleIndex,
        time,
      });
    }
  });
  console.log(peakEvents);
  return peakEvents;
}
