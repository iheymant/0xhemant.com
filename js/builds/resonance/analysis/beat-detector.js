export function detectBeats(audioBuffer) {
  const channelData = audioBuffer.getChannelData(0);

  console.log(channelData);

  console.log("Duration:", audioBuffer.duration);

  console.log("Sample Rate:", audioBuffer.sampleRate);

  console.log("Channels:", audioBuffer.numberOfChannels);
}
