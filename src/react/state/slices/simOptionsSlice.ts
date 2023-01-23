import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import PhaserGame from '../../../phaser/PhaserGameConfig';
import RadarScene from '../../../phaser/scenes/RadarScene';
import { ReactCustomEvents } from '../../../phaser/types/CustomEvents';
import {
  OtherSceneKeys,
  RadarSceneKeys,
} from '../../../phaser/types/SceneKeys';
import { TerminalPosition } from '../../../phaser/types/SimTypes';
import { ArrFDE } from '../../functions/arrival/genArrFDE';
import { DepFDE } from '../../functions/departure/genDepFDE';
import {
  defaultSimOptions,
  genSimOptions,
  LocalStorageKeys,
} from '../genSimOptions';

import type { RootState } from '../store';

export interface SimOptions {
  radarScene: RadarSceneKeys;
  terminalPosition: TerminalPosition;
  startingCount: number;
  isSingleOps: boolean;
  allowVdp: boolean;
  newStripInterval: [number, number]; // [min, max] in milliseconds
  intervalBetweenNormalDeps: number; // ms
  intervalBetweenVisualDeps: number; // ms
  intervalBetweenSatelliteDeps: number; // ms
  intervalBetweenArrivals: number;
  isModalOpen: boolean;
  selectedDepStrip: DepFDE | null;
  selectedArrStrip: ArrFDE | null;
  isPaused: boolean;
}

function pausePhaser() {
  const RADAR_SCENE = PhaserGame.scene.keys[
    OtherSceneKeys.RADAR_BASE
  ] as RadarScene;
  RADAR_SCENE.events.emit(ReactCustomEvents.PAUSE);
}

function unpausePhaser() {
  const RADAR_SCENE = PhaserGame.scene.keys[
    OtherSceneKeys.RADAR_BASE
  ] as RadarScene;
  RADAR_SCENE.events.emit(ReactCustomEvents.UNPAUSE);
}

const initialState: SimOptions = genSimOptions();

export const simOptions = createSlice({
  name: 'simOptions',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    openModal: (state) => {
      const newOptions: SimOptions = { ...state, isModalOpen: true };
      return newOptions;
    },
    closeModal: (state) => {
      const newOptions: SimOptions = { ...state, isModalOpen: false };
      return newOptions;
    },
    applyOptions: (state, action: PayloadAction<SimOptions>) => {
      const newOptions: SimOptions = { ...state, ...action.payload };
      localStorage.setItem(
        LocalStorageKeys.SIM_OPTIONS,
        JSON.stringify(newOptions)
      );
      console.log({ newOptions });

      return newOptions;
    },
    setSelectedDepStrip: (state, action: PayloadAction<DepFDE>) => {
      const newOptions: SimOptions = {
        ...state,
        selectedDepStrip: action.payload,
      };
      return newOptions;
    },
    removeSelectedDepStrip: (state) => {
      const newOptions: SimOptions = { ...state, selectedDepStrip: null };
      return newOptions;
    },
    setSelectedArrStrip: (state, action: PayloadAction<ArrFDE>) => {
      const newOptions: SimOptions = {
        ...state,
        selectedArrStrip: action.payload,
      };
      return newOptions;
    },
    removeSelectedArrStrip: (state) => {
      const newOptions: SimOptions = { ...state, selectedArrStrip: null };
      return newOptions;
    },
    enableVdp: (state) => {
      const newOptions: SimOptions = { ...state, allowVdp: true };
      return newOptions;
    },
    disableVdp: (state) => {
      const newOptions: SimOptions = { ...state, allowVdp: false };
      return newOptions;
    },
    pauseSim: (state) => {
      pausePhaser();
      const newOptions: SimOptions = { ...state, isPaused: true };
      return newOptions;
    },
    unpauseSim: (state) => {
      unpausePhaser();
      const newOptions: SimOptions = { ...state, isPaused: false };
      return newOptions;
    },
    resetLocalStorageToDefaults: () => {
      console.log('resetLocalStorage');

      localStorage.setItem(
        LocalStorageKeys.SIM_OPTIONS,
        JSON.stringify(defaultSimOptions)
      );
      return defaultSimOptions;
    },
  },
});

export const simOptionsActions = simOptions.actions;
export const simOptionsReducer = simOptions.reducer;

// Other code such as selectors can use the imported `RootState` type
export const selectSimOptions = (state: RootState) => state.simOptions;
