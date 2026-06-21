export function detectBeats(
  audioBuffer
) {

  console.log(
    "Duration:",
    audioBuffer.duration
  );

  console.log(
    "Sample Rate:",
    audioBuffer.sampleRate
  );

  console.log(
    "Channels:",
    audioBuffer.numberOfChannels
  );

}