import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { departureListActions } from '../state/slices/departureListSlice';
import {
  selectSimOptions,
  simOptionsActions,
} from '../state/slices/simOptionsSlice';
import Modal from 'react-modal';

import styles from './SimOptionsModal.module.scss';
import React, { useState } from 'react';
import { RadarSceneKeys } from '../../phaser/types/SceneKeys';

interface SimOptionsModalProps {
  isOpen: boolean;
  requestCloseModal: () => void;
}

Modal.setAppElement('#root');

const SimOptionsModal = ({
  isOpen,
  requestCloseModal: closeModal,
}: SimOptionsModalProps) => {
  const dispatch = useAppDispatch();
  const simOptions = useAppSelector(selectSimOptions);
  const [tempOptions, setTempOptions] = useState(simOptions);

  function applyOptions() {
    dispatch(simOptionsActions.applyOptions(tempOptions));
    dispatch(departureListActions.restartSim());
  }

  function setRadarScene(e: React.FormEvent) {
    const target = e.target as HTMLOptionElement;
    const value = target.value as RadarSceneKeys;
    setTempOptions({ ...tempOptions, radarScene: value });
  }

  function setIsSingleOps(e: React.FormEvent) {
    setTempOptions({ ...tempOptions, isSingleOps: !tempOptions.isSingleOps });
  }

  function setStartingCount(e: React.FormEvent) {
    const target = e.target as HTMLTextAreaElement;
    let value = Number(target.value);

    if (isNaN(value)) value = simOptions.startingCount;
    if (value > 99) value = 99;
    if (value < 1) value = 1;

    setTempOptions({ ...tempOptions, startingCount: value });
  }

  function restoreDefaults() {
    dispatch(simOptionsActions.resetLocalStorageToDefaults());
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="SimOptions Modal"
      portalClassName={styles.SimOptionsModal}
    >
      <h2>CSiM Options</h2>
      <section className={styles.formContainer}>
        <form>
          <label>
            CYYZ Runway Config
            <select onChange={setRadarScene}>
              <option value={RadarSceneKeys.RADAR_06s}>Rwy 05/06LR</option>
            </select>
          </label>
          <label>
            Single runway operations
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={tempOptions.isSingleOps}
              onChange={setIsSingleOps}
            />
          </label>
          <label>
            Starting # of strips
            <input
              type="number"
              name="totalItems"
              value={tempOptions.startingCount}
              onChange={setStartingCount}
            />
          </label>
          <button className={styles.applyButton} onClick={applyOptions}>
            APPLY OPTIONS
          </button>
          <button
            className={styles.restoreDefaultsButton}
            onClick={restoreDefaults}
          >
            Restore Defaults
          </button>
        </form>
      </section>
    </Modal>
  );
};

export default SimOptionsModal;
