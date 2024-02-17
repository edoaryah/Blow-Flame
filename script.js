// window.addEventListener('DOMContentLoaded', () => {
//     const candle = document.getElementById('candle');
//     const flame = document.createElement('div');
//     flame.classList.add('flame');
//     candle.appendChild(flame);

//     let audioContext;
//     let mediaStreamSource;
//     let analyser;

//     // Request access to microphone
//     navigator.mediaDevices.getUserMedia({ audio: true })
//         .then(stream => {
//             // Create audio context
//             audioContext = new (window.AudioContext || window.webkitAudioContext)();
//             analyser = audioContext.createAnalyser();
//             mediaStreamSource = audioContext.createMediaStreamSource(stream);
//             mediaStreamSource.connect(analyser);

//             // Start detecting blow
//             detectBlow();
//         })
//         .catch(error => console.error('Error accessing microphone:', error));

//     function detectBlow() {
//         // Set the buffer size
//         const bufferSize = 2048;
//         analyser.fftSize = bufferSize;

//         // Get the audio data
//         const bufferLength = analyser.frequencyBinCount;
//         const dataArray = new Uint8Array(bufferLength);

//         // Get the sound energy level
//         analyser.getByteTimeDomainData(dataArray);

//         let values = 0;
//         for (let i = 0; i < bufferLength; i++) {
//             values += Math.pow(dataArray[i] - 128, 2);
//         }

//         const average = Math.sqrt(values / bufferLength);
//         const threshold = 20; // Adjust this threshold as needed

//         // If sound energy level exceeds threshold, extinguish the candle
//         if (average > threshold) {
//             extinguishCandle();
//         }

//         // Loop the detection
//         requestAnimationFrame(detectBlow);
//     }

//     // Function to extinguish the candle
//     function extinguishCandle() {
//         // Stop the flame animation
//         flame.style.animation = 'none';

//         // Remove the flame after a short delay
//         setTimeout(() => {
//             candle.removeChild(flame);
//         }, 1000);
//     }
// });

//KEDUA
// window.onload = function() {
//     const flame = document.getElementById('flame');

//     let audioContext;
//     let mediaStreamSource;
//     let analyser;

//     // Request access to microphone
//     navigator.mediaDevices.getUserMedia({ audio: true })
//         .then(stream => {
//             // Create audio context
//             audioContext = new (window.AudioContext || window.webkitAudioContext)();
//             analyser = audioContext.createAnalyser();
//             mediaStreamSource = audioContext.createMediaStreamSource(stream);
//             mediaStreamSource.connect(analyser);

//             // Start detecting blow
//             detectBlow();
//         })
//         .catch(error => console.error('Error accessing microphone:', error));

//     function detectBlow() {
//         // Set the buffer size
//         const bufferSize = 2048;
//         analyser.fftSize = bufferSize;

//         // Get the audio data
//         const bufferLength = analyser.frequencyBinCount;
//         const dataArray = new Uint8Array(bufferLength);

//         // Get the sound energy level
//         analyser.getByteFrequencyData(dataArray);

//         let sum = 0;
//         for (let i = 0; i < bufferLength; i++) {
//             sum += dataArray[i];
//         }
//         const average = sum / bufferLength;
//         const threshold = 100; // Adjust this threshold as needed

//         // If sound energy level exceeds threshold, extinguish the candle
//         if (average > threshold) {
//             extinguishCandle();
//         }

//         // Loop the detection
//         requestAnimationFrame(detectBlow);
//     }

//     // Function to extinguish the candle
//     function extinguishCandle() {
//         // Stop the flame animation
//         flame.style.animation = 'none';

//         // Add blow animation
//         flame.style.animation = 'blow 0.5s ease-in-out';

//         // Remove the flame after a short delay
//         setTimeout(() => {
//             flame.style.animation = '';
//         }, 500);
//     }
// };

//KETIGA (FIX BUT WITH BUTTON)
// document.getElementById('blowButton').addEventListener('click', function() {
//     document.querySelectorAll('.flame').forEach(function(flame) {
//       flame.classList.add('blow');
//     });
//     document.getElementById('blowSound').play();
//   });

//KELIMA (SUKSES TAPI DENGAN NGOMONG BLOW)
// window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// const recognition = new SpeechRecognition();
// recognition.interimResults = true;

// recognition.addEventListener('result', e => {
//   const transcript = Array.from(e.results)
//     .map(result => result[0])
//     .map(result => result.transcript)
//     .join('');

//   if (transcript.includes('blow')) {
//     document.querySelectorAll('.flame').forEach(function(flame) {
//       flame.classList.add('blow');
//     });
//     document.getElementById('blowSound').play();
//   }
// });

// recognition.addEventListener('end', recognition.start);
// recognition.start();

//KEENAM (FIX)
navigator.mediaDevices
  .getUserMedia({ audio: true, video: false })
  .then(function (stream) {
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    const microphone = audioContext.createMediaStreamSource(stream);
    const javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);

    analyser.smoothingTimeConstant = 0.8;
    analyser.fftSize = 1024;

    microphone.connect(analyser);
    analyser.connect(javascriptNode);
    javascriptNode.connect(audioContext.destination);
    javascriptNode.onaudioprocess = function () {
      const array = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(array);
      let values = 0;

      const length = array.length;
      for (let i = 0; i < length; i++) {
        values += array[i];
      }

      const average = values / length;

      if (average > 100) {
        // you may want to change this threshold value
        document.querySelectorAll(".flame").forEach(function (flame) {
          flame.classList.add("blow");
        });
        document.getElementById("blowSound").play();
      }
    };
  })
  .catch(function (err) {
    /* handle the error */
  });

//TUJUH
// navigator.mediaDevices
//   .getUserMedia({ audio: true, video: false })
//   .then(function (stream) {
//     const audioContext = new (window.AudioContext ||
//       window.webkitAudioContext)();
//     const analyser = audioContext.createAnalyser();
//     const microphone = audioContext.createMediaStreamSource(stream);
//     const javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);

//     analyser.smoothingTimeConstant = 0.8;
//     analyser.fftSize = 1024;

//     microphone.connect(analyser);
//     analyser.connect(javascriptNode);
//     javascriptNode.connect(audioContext.destination);
//     javascriptNode.onaudioprocess = function () {
//       const array = new Uint8Array(analyser.frequencyBinCount);
//       analyser.getByteFrequencyData(array);
//       let values = 0;

//       const length = array.length;
//       for (let i = 0; i < length; i++) {
//         values += array[i];
//       }

//       const average = values / length;

//       // Change the size and intensity of the flame based on the amplitude
//       const flames = document.querySelectorAll(".flame");
//       flames.forEach(function (flame) {
//         flame.style.height = `${35 + average / 3}px`; // Change the size of the flame
//         flame.style.boxShadow = `0 0 ${
//           10 + average / 3
//         }px rgba(255, 165, 0, 0.5),
//                                0 0 ${20 + average / 3}px rgba(255, 165, 0, 0.5),
//                                0 0 ${
//                                  60 + average / 3
//                                }px rgba(255, 165, 0, 0.5),
//                                0 0 ${
//                                  80 + average / 3
//                                }px rgba(255, 165, 0, 0.5)`; // Change the intensity of the flame
//       });

//       if (average > 70) {
//         // you may want to change this threshold value
//         flames.forEach(function (flame) {
//           flame.classList.add("blow");
//         });
//         document.getElementById("blowSound").play();
//       }
//     };
//   })
//   .catch(function (err) {
//     /* handle the error */
//   });

//DELAPAN
// navigator.mediaDevices
//   .getUserMedia({ audio: true, video: false })
//   .then(function (stream) {
//     const audioContext = new (window.AudioContext ||
//       window.webkitAudioContext)();
//     const analyser = audioContext.createAnalyser();
//     const microphone = audioContext.createMediaStreamSource(stream);
//     const javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);

//     analyser.smoothingTimeConstant = 0.8;
//     analyser.fftSize = 1024;

//     microphone.connect(analyser);
//     analyser.connect(javascriptNode);
//     javascriptNode.connect(audioContext.destination);
//     javascriptNode.onaudioprocess = function () {
//       const array = new Uint8Array(analyser.frequencyBinCount);
//       analyser.getByteFrequencyData(array);
//       let values = 0;

//       const length = array.length;
//       for (let i = 0; i < length; i++) {
//         values += array[i];
//       }

//       const average = values / length;

//       // Change the height of the flame based on the amplitude
//       const flames = document.querySelectorAll(".flame");
//       flames.forEach(function (flame) {
//         flame.style.height = `${35 + average / -3}px`; // Change the height of the flame
//       });

//       if (average > 70) {
//         // you may want to change this threshold value
//         flames.forEach(function (flame) {
//           flame.classList.add("blow");
//         });
//         document.getElementById("blowSound").play();
//       }
//     };
//   })
//   .catch(function (err) {
//     /* handle the error */
//   });
