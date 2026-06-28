import { loadAudioFile } from "/js/builds/resonance/audio/audio-loader.js";

import { extractAudioData } from "/js/builds/resonance/analysis/extract-audio-data.js";

import { drawWaveform } from "/js/builds/resonance/visualization/draw-waveform.js";

import { detectPeaks } from "/js/builds/resonance/analysis/detect-peaks.js";

import { drawPeakMarkers } from "/js/builds/resonance//visualization/draw-waveform.js";

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
    const peakEvents = detectPeaks(audioBuffer);

    extractAudioData(audioBuffer);

    statusElement.textContent = "Audio loaded successfully.";

    if (!canvas) {
      return;
    }

    canvas.classList.add("is-visible");

    detectPeaks(audioBuffer);

    drawWaveform(audioBuffer, canvas);
    drawPeakMarkers(audioBuffer, canvas , peakEvents);

    statusElement.textContent = "Graph generated";
  });
}
