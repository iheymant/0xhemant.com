import { loadAudioFile } from "/js/builds/resonance/audio/audio-loader.js";

import { detectBeats } from "/js/builds/resonance/analysis/beat-detector.js";

import { drawWaveform } from "/js/builds/resonance/visualization/draw-waveform.js";

export function initializeResonance() {
  const uploadInput = document.querySelector(".audio-upload-input");

  const analyzeButton = document.querySelector(".analyze-audio-button");

  const statusElement = document.querySelector(".analysis-status");

  const canvas = document.querySelector(".waveform-canvas");

  if (!uploadInput || !analyzeButton) {
    return;
  }

  analyzeButton.addEventListener("click", async () => {
    const file = uploadInput.files[0];

    if (!file) {
      statusElement.textContent = "Select an audio file.";

      return;
    }

    statusElement.textContent = "Loading audio...";

    const audioBuffer = await loadAudioFile(file);

    detectBeats(audioBuffer);

    statusElement.textContent = "Audio loaded successfully.";

    if (!canvas) {
      return;
    }

    statusElement.textContent = "Generating Graph....";

    drawWaveform(audioBuffer, canvas);

    statusElement.textContent = "Graph generated";
  });
}
