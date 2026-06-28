export function extractAudioData(audioBuffer) {
  const channelData = audioBuffer.getChannelData(0);
  const duration = audioBuffer.duration;
  const sampleRate = audioBuffer.sampleRate;
  const numberOfChannels = audioBuffer.numberOfChannels;
  const length = audioBuffer.length;

  return {
    channelData,
    duration,
    sampleRate,
    numberOfChannels,
    length
  };
}
