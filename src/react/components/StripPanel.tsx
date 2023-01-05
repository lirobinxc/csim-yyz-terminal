import clsx from 'clsx';
import { DepFDE } from '../functions/genDepFdeData';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { selectSimOptions } from '../state/slices/simOptionsSlice';
import DepartureFDE from './DepartureFDE/DepartureFDE';
import PendingDepartureFDE from './PendingDepartureFDE/PendingDepartureFDE';

import styles from './StripPanel.module.scss';

export enum Size {
  SM = 'Sm',
  MD = 'Md',
  LG = 'Lg',
}

export enum StripPanelName {
  READY_N = 'Ready - N',
  READY_S = 'Ready - S',
  IN_POSITION_N = 'In Position - N',
  IN_POSITION_S = 'In Position - S',
  AIRBORNE_N = 'Airborne - N',
  AIRBORNE_S = 'Airborne - S',
  SATELLITE_PENDING = 'Satellite Pending',
}

interface StripPanelProps {
  title: StripPanelName;
  height: Size;
  strips: DepFDE[];
}

const StripPanel = ({ title, height, strips }: StripPanelProps) => {
  const dispatch = useAppDispatch();
  const simOptions = useAppSelector(selectSimOptions);

  function getPanelHeightClass() {
    return styles[`Size${height}`];
  }

  function handlePanelBgClick() {
    if (!simOptions.selectedStrip) return;
  }

  function displayStrips() {
    if (height === Size.LG) {
      return displayAsAirborneFDE();
    }
    return displayAsPendingFDE();
  }

  function displayAsAirborneFDE() {
    return strips.map((strip) => {
      return <DepartureFDE key={strip.uniqueKey} {...strip} />;
    });
  }

  function displayAsPendingFDE() {
    return strips.map((strip) => {
      return <PendingDepartureFDE key={strip.uniqueKey} {...strip} />;
    });
  }

  return (
    <div className={clsx(styles.StripPanel, getPanelHeightClass())}>
      <header className={clsx(styles.Header)}>
        <div className={clsx(styles.title)}>{title}</div>
        <div className={clsx(styles.stripCount)}>{strips?.length || 0}</div>
      </header>
      <section className={clsx(styles.Strips)} onClick={handlePanelBgClick}>
        {displayStrips()}
      </section>
    </div>
  );
};

export default StripPanel;
