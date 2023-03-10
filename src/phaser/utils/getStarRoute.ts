import { ArrivalPosition } from '../types/ArrivalTypes';
import { ArrFDE } from '../../react/functions/arrival/genArrFDE';
import {
  ArrBedpost,
  StarName,
} from '../../react/functions/arrival/genArrRoute';
import { STAR_ROUTES_06s } from '../config/RouteConfigArr/RouteConfigStars06s';
import { SID_ROUTES_06s } from '../config/RouteConfigDep/RouteConfigSids06s';
import { SID_ROUTES_15s } from '../config/RouteConfigDep/RouteConfigSids15s';
import { SID_ROUTES_24s } from '../config/RouteConfigDep/RouteConfigSids24s';
import { SID_ROUTES_33s } from '../config/RouteConfigDep/RouteConfigSids33s';
import { RadarSceneKeys } from '../types/SceneKeys';
import { STAR_ROUTES_24s } from '../config/RouteConfigArr/RouteConfigStars24s';
import { STAR_ROUTES_33s } from '../config/RouteConfigArr/RouteConfigStars33s';
import { STAR_ROUTES_15s } from '../config/RouteConfigArr/RouteConfigStars15s';

export function getStarRoute(
  runwayConfig: RadarSceneKeys,
  arrBedpost: ArrBedpost,
  arrPosition: ArrivalPosition
) {
  switch (runwayConfig) {
    case RadarSceneKeys.RADAR_06s:
      return STAR_ROUTES_06s[arrBedpost][arrPosition];
    case RadarSceneKeys.RADAR_24s:
      return STAR_ROUTES_24s[arrBedpost][arrPosition];
    case RadarSceneKeys.RADAR_33s:
      return STAR_ROUTES_33s[arrBedpost][arrPosition];
    case RadarSceneKeys.RADAR_15s:
      return STAR_ROUTES_15s[arrBedpost][arrPosition];
    default:
      throw new Error(`Could not get STAR Route for scene: ${runwayConfig}`);
  }
}
