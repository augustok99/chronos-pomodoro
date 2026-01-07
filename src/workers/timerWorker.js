let isRunning = false;

self.onmessage = function (event) {
  const state = event.data;

  if (!state || !state.activeTask) return;
  if (isRunning) return;

  isRunning = true;

  const { activeTask, secondsRemaining } = state;
  const endDate = activeTask.startDate + secondsRemaining * 1000;

  function tick() {
    const now = Date.now();
    const countDownSeconds = Math.ceil((endDate - now) / 1000);

    if (countDownSeconds <= 0) {
      self.postMessage(0);
      isRunning = false;
      return;
    }

    self.postMessage(countDownSeconds);
    setTimeout(tick, 1000);
  }

  tick();
};