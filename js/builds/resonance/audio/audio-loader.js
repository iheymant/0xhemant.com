export async function loadAudioFile(file) {

  const arrayBuffer =
    await file.arrayBuffer();

  const audioContext =
    new AudioContext();

  const audioBuffer =
    await audioContext.decodeAudioData(
      arrayBuffer
    );

  return audioBuffer;

}