import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { departureListActions } from '../../state/slices/departureListSlice';
import {
  selectSimOptions,
  simOptionsActions,
} from '../../state/slices/simOptionsSlice';
import DepartureFDE from './DepartureFDE/DepartureFDE';
import PendingDepartureFDE from './PendingDepartureFDE/PendingDepartureFDE';
import PendingSatelliteFDE from './PendingSatelliteFDE/PendingSatelliteFDE';
import SatelliteFDE from './SatelliteFDE/SatelliteFDE';

import styles from './DepStripPanel.module.scss';
import { DepFDE } from '../../functions/departure/genDepFDE';
import { DeparturePosition } from '../../functions/departure/departureTypes';

export enum Size {
  SM = 'Sm',
  MD = 'Md',
  LG = 'Lg',
}

export enum DepStripPanelName {
  READY_N = 'Ready - N',
  READY_S = 'Ready - S',
  IN_POSITION_N = 'In Position - N',
  IN_POSITION_S = 'In Position - S',
  AIRBORNE_N = 'Airborne - N',
  AIRBORNE_S = 'Airborne - S',
  SATELLITE_PENDING = 'Satellite Pending',
}

interface DepStripPanelProps {
  title: DepStripPanelName;
  depPosition: DeparturePosition;
  height: Size;
  strips: DepFDE[];
}

const DepStripPanel = ({
  title,
  height,
  depPosition,
  strips,
}: DepStripPanelProps) => {
  const dispatch = useAppDispatch();
  const simOptions = useAppSelector(selectSimOptions);

  function getPanelHeightClass() {
    return styles[`Size${height}`];
  }

  function handlePanelBgClick(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    if (!simOptions.selectedDepStrip) return;

    if (simOptions.selectedDepStrip.depPosition === depPosition) {
      dispatch(simOptionsActions.removeSelectedDepStrip());
      return;
    }

    dispatch(
      departureListActions.setStripDepPosition({
        uniqueKey: simOptions.selectedDepStrip.uniqueKey,
        depPosition: depPosition,
      })
    );
    dispatch(simOptionsActions.removeSelectedDepStrip());
  }

  function displayStrips() {
    if (height === Size.LG) {
      return displayAsAirborneFDE();
    }
    if (height === Size.MD) {
      return displayAsSatellitePendingFDE();
    }
    return displayAsPendingDepFDE();
  }

  function displayAsAirborneFDE() {
    return strips.map((strip) => {
      if (strip.isSatellite) {
        return <SatelliteFDE key={strip.uniqueKey} {...strip} />;
      }
      return <DepartureFDE key={strip.uniqueKey} {...strip} />;
    });
  }

  function displayAsPendingDepFDE() {
    return strips.map((strip) => {
      return <PendingDepartureFDE key={strip.uniqueKey} {...strip} />;
    });
  }

  function displayAsSatellitePendingFDE() {
    return strips.map((strip) => {
      return <PendingSatelliteFDE key={strip.uniqueKey} {...strip} />;
    });
  }

  return (
    <div className={clsx(styles.DepStripPanel, getPanelHeightClass())}>
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

export default DepStripPanel;
