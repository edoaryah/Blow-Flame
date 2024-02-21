// // //blow flame
// (async () => {
//   let volumeCallback = null;
//   let volumeInterval = null;
//   const volumeVisualizer = document.getElementById("volume-visualizer");
//   const startButton = document.getElementById("start");
//   const stopButton = document.getElementById("stop");

//   try {
//     const audioStream = await navigator.mediaDevices.getUserMedia({
//       audio: true,
//     });
//     const audioContext = new AudioContext();
//     const audioSource = audioContext.createMediaStreamSource(audioStream);
//     const analyser = audioContext.createAnalyser();
//     analyser.fftSize = 512;
//     analyser.minDecibels = -127;
//     analyser.maxDecibels = 0;
//     analyser.smoothingTimeConstant = 0.4;
//     audioSource.connect(analyser);
//     const volumes = new Uint8Array(analyser.frequencyBinCount);
//     volumeCallback = () => {
//       analyser.getByteFrequencyData(volumes);
//       let volumeSum = 0;
//       for (const volume of volumes) volumeSum += volume;
//       const averageVolume = volumeSum / volumes.length;
//       // Value range: 127 = analyser.maxDecibels - analyser.minDecibels;
//       if (averageVolume > 100) {
//         //atur threshold value
//         document
//           .querySelectorAll(".flame, .glow, .blinking-glow")
//           .forEach(function (flame) {
//             flame.style.display = "none";
//             flame.classList.add("blow");
// const smokeP1 =
//   "M109.62 136.827C122.82 226.027 150.453 240.661 162.62 236.827C240.12 212.827 184.62 224.327 211.12 171.327C237.62 118.327 233.62 57.8275 184.62 14.8275C135.62 -28.1725 93.1197 25.3275 109.62 136.827Z";
// const smokeP2 =
//   "M96.1637 227.099C148.664 253.599 187.664 227.099 198.164 227.099C260.497 203.932 372.564 157.599 322.164 157.599C259.164 157.599 299.664 127.099 263.164 72.099C226.664 17.099 198.164 50.099 175.664 72.099C153.163 94.099 72.1637 74.599 57.6636 107.099C43.1635 139.599 96.1637 153.599 72.1637 157.599C48.1637 161.599 43.6637 200.599 96.1637 227.099Z";
// const smokeP3 =
//   "M80.0716 209.87C94.0716 217.87 141.072 250.37 200.072 242.37C244.238 226.87 328.872 186.47 314.072 148.87C295.572 101.87 269.572 67.3697 200.072 45.3697C130.572 23.3697 200.072 116.37 147.572 114.37C95.0715 112.37 133.072 122.37 56.0716 130.37C-20.9284 138.37 39.5716 189.37 80.0716 209.87Z";
// const smokeP4 =
//   "M90.7665 212.631C113.566 251.831 174.933 246.631 202.766 239.131C228.433 230.298 291.967 202.831 340.767 163.631C401.767 114.631 342.767 88.631 279.767 55.631C216.767 22.631 255.267 70.131 186.267 72.131C117.267 74.131 119.266 96.631 76.7665 112.631C34.2665 128.631 62.2665 163.631 90.7665 212.631Z";
// const smokeP5 =
//   "M69.1092 185.319C71.1092 240.319 173.109 236.319 189.109 238.319C210.776 234.319 261.009 218.119 288.609 185.319C323.109 144.319 288.609 120.319 319.109 114.319C349.609 108.319 321.109 67.3192 288.609 55.3192C256.109 43.3192 262.609 124.319 223.609 81.8192C184.609 39.3192 114.109 36.8192 103.609 81.8192C93.1092 126.819 67.1092 130.319 69.1092 185.319Z";
// const smokeP6 =
//   "M115.866 204.673C154.366 279.673 187.366 243.673 211.866 235.173C237.532 217.007 287.266 167.973 280.866 117.173C272.866 53.6732 240.366 97.1732 172.866 68.6732C105.366 40.1732 59.3656 56.1732 52.8656 117.173C46.3656 178.173 77.3656 129.673 115.866 204.673Z";
// const smokeP7 =
//   "M89.1798 217.796C108.78 222.596 150.346 237.463 168.68 244.296C177.346 244.296 204.08 238.996 241.68 217.796C288.68 191.296 219.18 91.7963 168.68 67.2963C118.18 42.7963 89.1798 108.296 89.1798 161.296C89.1798 214.296 42.1798 140.796 7.6798 173.296C-26.8202 205.796 64.6798 211.796 89.1798 217.796Z";
// const smokeP8 =
//   "M59.0102 175.277C32.5102 230.277 144.51 240.277 185.01 244.277C193.843 244.277 216.81 236.977 238.01 207.777C264.51 171.277 278.51 203.777 333.51 175.277C388.51 146.777 309.01 128.277 266.51 110.277C224.01 92.2768 185.01 93.7768 167.01 148.777C149.01 203.777 85.5102 120.277 59.0102 175.277Z";
// const smokeP9 =
//   "M263.352 176.885C245.352 210.885 190.852 236.051 165.852 244.385C140.018 234.885 82.2518 213.385 57.8518 203.385C27.3518 190.885 62.3518 136.385 88.3518 152.885C114.352 169.385 149.352 154.885 139.352 117.885C129.352 80.8847 188.352 56.8847 241.352 75.3847C294.352 93.8847 285.852 134.385 263.352 176.885Z";
// const smokeP10 =
//   "M110.167 223.762C75.7666 204.162 104.167 153.262 122.667 130.262C169.667 83.2625 205.667 130.262 234.167 148.762C262.667 167.262 291.167 130.262 295.167 144.262C299.167 158.262 277.167 177.262 224.167 223.762C171.167 270.262 153.167 248.262 110.167 223.762Z";
// const smokeP11 =
//   "M104 238.298C71.6 228.698 57.8333 192.298 55 175.298C65.1667 179.298 86.8 184.898 92 175.298C98.5 163.298 163 132.298 181 158.798C199 185.298 205.5 146.798 275 132.298C344.5 117.798 287 175.298 275 209.798C263 244.298 144.5 250.298 104 238.298Z";
// const smokeP12 =
//   "M142.677 155.36C81.6769 155.36 100.177 204.36 102.177 240.86C151.177 281.86 191.677 240.86 236.177 224.36C280.677 207.86 262.677 155.36 256.677 143.36C250.677 131.36 203.677 155.36 142.677 155.36Z";
// const smokeP13 =
//   "M106.204 229.776C108.204 270.776 165.204 243.776 189.704 245.776C218.904 227.776 256.204 188.276 271.204 170.776C244.037 158.443 182.404 143.176 153.204 180.776C116.704 227.776 104.204 188.776 106.204 229.776Z";
// const smokeP14 =
//   "M154.491 243.202C190.491 269.202 203.158 239.368 204.991 221.202C219.991 211.702 246.291 191.502 231.491 186.702C212.991 180.702 123.991 162.202 105.491 158.202C86.9912 154.202 109.491 210.702 154.491 243.202Z";
// $(".smoke").css("display", "block");
//             const timeline = anime.timeline({
//               duration: 1000,
//               easing: "easeInOutExpo",
//             });
//             timeline.add({
//               targets: "#smokepath1",
//               d: [
// { value: smokeP1 },
// { value: smokeP2 },
// { value: smokeP3 },
// { value: smokeP4 },
// { value: smokeP5 },
// { value: smokeP6 },
// { value: smokeP7 },
// { value: smokeP8 },
// { value: smokeP9 },
// { value: smokeP10 },
// { value: smokeP11 },
// { value: smokeP12 },
// { value: smokeP13 },
// { value: smokeP14 },
//               ],
//               loop: false,
//               opacity: 0,
//             });
//           });
//         document.getElementById("blowSound").play();
//       }
//     };
//   } catch (e) {
//     console.error(
//       "Failed to initialize volume visualizer, simulating instead...",
//       e
//     );
//   }

//   $(document).ready(function () {
//     if (volumeCallback !== null && volumeInterval === null)
//       volumeInterval = setInterval(volumeCallback, 100);
//   });
// })();

// ------------

//confetti
// document
//   .getElementsByClassName("confetti-button")[0]
//   .addEventListener("click", () => {
//     var count = 250;
//     var defaults = {
//       origin: { y: 0.7 },
//     };

//     function fire(particleRatio, opts) {
//       confetti({
//         ...defaults,
//         ...opts,
//         particleCount: Math.floor(count * particleRatio),
//       });
//     }

//     fire(0.25, {
//       spread: 26,
//       startVelocity: 55,
//     });
//     fire(0.2, {
//       spread: 60,
//     });
//     fire(0.35, {
//       spread: 100,
//       decay: 0.91,
//       scalar: 0.8,
//     });
//     fire(0.1, {
//       spread: 120,
//       startVelocity: 25,
//       decay: 0.92,
//       scalar: 1.2,
//     });
//     fire(0.1, {
//       spread: 120,
//       startVelocity: 45,
//     });
//   });

// ------------

// Fungsi untuk menembakkan confetti
function fireConfetti() {
  var count = 250;
  var defaults = {
    origin: { y: 0.7 },
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}

(async () => {
  let volumeCallback = null;
  let volumeInterval = null;
  let confettiFired = false; // Tambahkan variabel ini

  try {
    const audioStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });
    const audioContext = new AudioContext();
    const audioSource = audioContext.createMediaStreamSource(audioStream);
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 512;
    analyser.minDecibels = -127;
    analyser.maxDecibels = 0;
    analyser.smoothingTimeConstant = 0.4;
    audioSource.connect(analyser);
    const volumes = new Uint8Array(analyser.frequencyBinCount);
    volumeCallback = () => {
      analyser.getByteFrequencyData(volumes);
      let volumeSum = 0;
      for (const volume of volumes) volumeSum += volume;
      const averageVolume = volumeSum / volumes.length;
      if (averageVolume > 100 && !confettiFired) {
        // Cek jika confetti belum ditembakkan
        document
          .querySelectorAll(".flame, .glow, .blinking-glow")
          .forEach(function (flame) {
            flame.style.display = "none";
            flame.classList.add("blow");
            const smokeP1 =
              "M109.62 136.827C122.82 226.027 150.453 240.661 162.62 236.827C240.12 212.827 184.62 224.327 211.12 171.327C237.62 118.327 233.62 57.8275 184.62 14.8275C135.62 -28.1725 93.1197 25.3275 109.62 136.827Z";
            const smokeP2 =
              "M96.1637 227.099C148.664 253.599 187.664 227.099 198.164 227.099C260.497 203.932 372.564 157.599 322.164 157.599C259.164 157.599 299.664 127.099 263.164 72.099C226.664 17.099 198.164 50.099 175.664 72.099C153.163 94.099 72.1637 74.599 57.6636 107.099C43.1635 139.599 96.1637 153.599 72.1637 157.599C48.1637 161.599 43.6637 200.599 96.1637 227.099Z";
            const smokeP3 =
              "M80.0716 209.87C94.0716 217.87 141.072 250.37 200.072 242.37C244.238 226.87 328.872 186.47 314.072 148.87C295.572 101.87 269.572 67.3697 200.072 45.3697C130.572 23.3697 200.072 116.37 147.572 114.37C95.0715 112.37 133.072 122.37 56.0716 130.37C-20.9284 138.37 39.5716 189.37 80.0716 209.87Z";
            const smokeP4 =
              "M90.7665 212.631C113.566 251.831 174.933 246.631 202.766 239.131C228.433 230.298 291.967 202.831 340.767 163.631C401.767 114.631 342.767 88.631 279.767 55.631C216.767 22.631 255.267 70.131 186.267 72.131C117.267 74.131 119.266 96.631 76.7665 112.631C34.2665 128.631 62.2665 163.631 90.7665 212.631Z";
            const smokeP5 =
              "M69.1092 185.319C71.1092 240.319 173.109 236.319 189.109 238.319C210.776 234.319 261.009 218.119 288.609 185.319C323.109 144.319 288.609 120.319 319.109 114.319C349.609 108.319 321.109 67.3192 288.609 55.3192C256.109 43.3192 262.609 124.319 223.609 81.8192C184.609 39.3192 114.109 36.8192 103.609 81.8192C93.1092 126.819 67.1092 130.319 69.1092 185.319Z";
            const smokeP6 =
              "M115.866 204.673C154.366 279.673 187.366 243.673 211.866 235.173C237.532 217.007 287.266 167.973 280.866 117.173C272.866 53.6732 240.366 97.1732 172.866 68.6732C105.366 40.1732 59.3656 56.1732 52.8656 117.173C46.3656 178.173 77.3656 129.673 115.866 204.673Z";
            const smokeP7 =
              "M89.1798 217.796C108.78 222.596 150.346 237.463 168.68 244.296C177.346 244.296 204.08 238.996 241.68 217.796C288.68 191.296 219.18 91.7963 168.68 67.2963C118.18 42.7963 89.1798 108.296 89.1798 161.296C89.1798 214.296 42.1798 140.796 7.6798 173.296C-26.8202 205.796 64.6798 211.796 89.1798 217.796Z";
            const smokeP8 =
              "M59.0102 175.277C32.5102 230.277 144.51 240.277 185.01 244.277C193.843 244.277 216.81 236.977 238.01 207.777C264.51 171.277 278.51 203.777 333.51 175.277C388.51 146.777 309.01 128.277 266.51 110.277C224.01 92.2768 185.01 93.7768 167.01 148.777C149.01 203.777 85.5102 120.277 59.0102 175.277Z";
            const smokeP9 =
              "M263.352 176.885C245.352 210.885 190.852 236.051 165.852 244.385C140.018 234.885 82.2518 213.385 57.8518 203.385C27.3518 190.885 62.3518 136.385 88.3518 152.885C114.352 169.385 149.352 154.885 139.352 117.885C129.352 80.8847 188.352 56.8847 241.352 75.3847C294.352 93.8847 285.852 134.385 263.352 176.885Z";
            const smokeP10 =
              "M110.167 223.762C75.7666 204.162 104.167 153.262 122.667 130.262C169.667 83.2625 205.667 130.262 234.167 148.762C262.667 167.262 291.167 130.262 295.167 144.262C299.167 158.262 277.167 177.262 224.167 223.762C171.167 270.262 153.167 248.262 110.167 223.762Z";
            const smokeP11 =
              "M104 238.298C71.6 228.698 57.8333 192.298 55 175.298C65.1667 179.298 86.8 184.898 92 175.298C98.5 163.298 163 132.298 181 158.798C199 185.298 205.5 146.798 275 132.298C344.5 117.798 287 175.298 275 209.798C263 244.298 144.5 250.298 104 238.298Z";
            const smokeP12 =
              "M142.677 155.36C81.6769 155.36 100.177 204.36 102.177 240.86C151.177 281.86 191.677 240.86 236.177 224.36C280.677 207.86 262.677 155.36 256.677 143.36C250.677 131.36 203.677 155.36 142.677 155.36Z";
            const smokeP13 =
              "M106.204 229.776C108.204 270.776 165.204 243.776 189.704 245.776C218.904 227.776 256.204 188.276 271.204 170.776C244.037 158.443 182.404 143.176 153.204 180.776C116.704 227.776 104.204 188.776 106.204 229.776Z";
            const smokeP14 =
              "M154.491 243.202C190.491 269.202 203.158 239.368 204.991 221.202C219.991 211.702 246.291 191.502 231.491 186.702C212.991 180.702 123.991 162.202 105.491 158.202C86.9912 154.202 109.491 210.702 154.491 243.202Z";
            $(".smoke").css("display", "block");
            $(".smoke").css("display", "block");
            const timeline = anime.timeline({
              duration: 1000,
              easing: "easeInOutExpo",
              complete: function (anim) {
                if (!confettiFired) {
                  // Tambahkan pengecekan ini
                  fireConfetti(); // Panggil fungsi confetti setelah animasi selesai
                  confettiFired = true;
                }
              },
            });
            timeline.add({
              targets: "#smokepath1",
              d: [
                { value: smokeP1 },
                { value: smokeP2 },
                { value: smokeP3 },
                { value: smokeP4 },
                { value: smokeP5 },
                { value: smokeP6 },
                { value: smokeP7 },
                { value: smokeP8 },
                { value: smokeP9 },
                { value: smokeP10 },
                { value: smokeP11 },
                { value: smokeP12 },
                { value: smokeP13 },
                { value: smokeP14 },
              ],
              loop: false,
              opacity: 0,
            });
            // fireConfetti(); // Panggil fungsi confetti di sini
            // confettiFired = true; // Setel variabel ini menjadi true
          });
        document.getElementById("blowSound").play();
      } else if (averageVolume <= 100 && confettiFired) {
        // Jika volume turun dan confetti sudah ditembakkan
        document
          .querySelectorAll(".flame, .glow, .blinking-glow")
          .forEach(function (flame) {
            flame.style.display = "none"; // Pastikan efek tetap tidak muncul
          });
      }
    };
  } catch (e) {
    console.error(
      "Failed to initialize volume visualizer, simulating instead...",
      e
    );
  }

  $(document).ready(function () {
    if (volumeCallback !== null && volumeInterval === null)
      volumeInterval = setInterval(volumeCallback, 100);
  });
})();
