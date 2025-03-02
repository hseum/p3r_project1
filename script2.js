let player;
let isMuted = false;

// YouTube IFrame API 로드
function loadYouTubeAPI() {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// YouTube API가 준비되면 자동으로 호출되는 함수
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: 't9TdQCdtUeo',  // Persona 3 BGM
        playerVars: {
            'autoplay': 1,
            'loop': 1,
            'playlist': 't9TdQCdtUeo',
            'controls': 0,
            'origin': window.location.origin,
            'enablejsapi': 1,
            'mute': 1  // 처음에는 음소거 상태로 시작
        },
        events: {
            'onReady': onPlayerReady,
            'onError': onPlayerError,
            'onStateChange': onPlayerStateChange  // 상태 변경 이벤트 추가
        }
    });
}

function onPlayerReady(event) {
    try {
        event.target.playVideo();
        player.setVolume(50);
        console.log("플레이어 준비 완료");
        
        // 자동 재생을 위해 처음에는 음소거 상태로 시작
        isMuted = true;
        const muteButton = document.getElementById('mute-button');
        muteButton.innerHTML = '🔇';
    } catch (error) {
        console.error("플레이어 준비 중 오류:", error);
    }
}

function onPlayerStateChange(event) {
    // 재생이 멈추면 다시 시작
    if (event.data === YT.PlayerState.ENDED) {
        player.playVideo();
    }
    console.log("플레이어 상태:", event.data);
}

function onPlayerError(event) {
    console.error("YouTube 플레이어 에러:", event.data);
}

function toggleMute() {
    isMuted = !isMuted;
    if (isMuted) {
        player.mute();
    } else {
        player.unMute();
    }
    
    const muteButton = document.getElementById('mute-button');
    muteButton.innerHTML = isMuted ? '🔇' : '🔊';
}

// 페이지 로드 시 초기화
window.addEventListener('load', loadYouTubeAPI);

// 디버깅을 위한 콘솔 출력
window.addEventListener('load', () => {
    console.log("페이지 로드됨");
});

function showMessage(text) {
    let messageBox = document.getElementById("message-box");
    let messageText = document.getElementById("message-text");

    messageText.textContent = text;
    messageBox.classList.remove("hidden");

    // 2초 후 메시지 숨기기
    setTimeout(() => {
        messageBox.classList.add("hidden");
    }, 2000);
}
