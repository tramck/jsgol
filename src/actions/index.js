/**
 * CONSTANTS
 */

export const NEXT_STEP = 'NEXT_STEP';
export const HAS_STARTED_PLAYING = 'HAS_STARTED_PLAYING';
export const HAS_STOPPED_PLAYING = 'HAS_STOPPED_PLAYING';
export const SET_FPS = 'SET_FPS';
export const SET_GAME_SIZE = 'SET_GAME_SIZE';
export const TOGGLE_IS_RANDOM = 'TOGGLE_IS_RANDOM';
export const SET_RANDOM_THRESHOLD = 'SET_RANDOM_THRESHOLD';
export const CLEAR = 'CLEAR';


/**
 * ACTION CREATORS
 */

export const setFps = fps => ({ type: SET_FPS, fps });

export const setGameSize = gameSize => ({ type: SET_GAME_SIZE, gameSize });

export const nextStep = () => ({ type: NEXT_STEP });

export const clear = () => ({ type: CLEAR });

export const toggleIsRandom = () => ({ type: TOGGLE_IS_RANDOM });

export const setRandomThreshold = randomThreshold => ({ type: SET_RANDOM_THRESHOLD, randomThreshold });


/**
 * THUNK FUNCTIONS (ASYNC)
 */

export const start = () => (dispatch, getState) => {
  const { fps } = getState();
  const interval = setInterval(() => {
    dispatch(nextStep());
  }, 1000 / fps);
  dispatch({ type: HAS_STARTED_PLAYING })
};

export const stop = () => (dispatch, getState) => {
  const { interval } = getState();
  clearInterval(interval);
  dispatch({ type: HAS_STOPPED_PLAYING });
};
