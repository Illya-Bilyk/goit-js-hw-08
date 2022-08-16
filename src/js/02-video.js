import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const refs = {
  iframe: document.querySelector('iframe'),
};

const player = new Player(refs.iframe);

const onPlay = data => {
  const setTime = JSON.stringify(data);
  localStorage.setItem('videoplayer-current-time', setTime);
};

function getLastTimeOnPlayer() {
  const lastTimeValue = JSON.parse(
    localStorage.getItem('videoplayer-current-time')
  );

  if (lastTimeValue) player.setCurrentTime(lastTimeValue.seconds);
}

player.on('timeupdate', throttle(onPlay, 1000));
getLastTimeOnPlayer();
