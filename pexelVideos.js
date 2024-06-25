document.addEventListener("DOMContentLoaded", () => {
  async function fetchVideos(query) {
    try {
      const apikey = "EbvixQkEPE7kqKI2qHd0ackQCu5roaHHF5jiJvSykgsxxKTcf80F2vKY";
      const url = `https://api.pexels.com/videos/search?query=${query}&per_page=20`;
      const options = {
        method: "GET",
        headers: {
          Authorization: apikey,
        },
      };

      const result = await fetch(url, options);
      const data = await result.json();
      console.log(data);

      const videoArr = data.videos

      displayVideos(videoArr)

 
    } catch (err) {
      console.log(err);
    }
  }

  async function displayVideos(videoArr) {
    const targetDiv = document.getElementById("video-card");
    targetDiv.innerHTML = "";

    videoArr.forEach((video) => {
      const videoElement = document.createElement("div");
      videoElement.classList.add("video-container");

      const videoPlayer = document.createElement("video");
      videoPlayer.src = video.video_files[0].link;
      videoPlayer.controls = true;
      videoPlayer.muted = true;

      targetDiv.appendChild(videoElement);
      videoElement.appendChild(videoPlayer);
    });
  }

  document.getElementById("search-button").addEventListener("click", () => {
    const x = document.getElementById("search-input").value;
    fetchVideos(x);
  });
});
