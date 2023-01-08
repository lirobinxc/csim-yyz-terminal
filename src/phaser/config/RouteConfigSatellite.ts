import { WaypointDataCommon } from '../types/WaypointTypes';
import { SatelliteName } from '../types/SidAndSatelliteTypes';
import { WP_DICT_COMMON } from './CommonWaypointConfig';

export const SAT_ROUTES: {
  [key in SatelliteName]: WaypointDataCommon[];
} = {
  YHM_ARR_MUXIG: [
    WP_DICT_COMMON.ILUSI,
    WP_DICT_COMMON.YYZ,
    WP_DICT_COMMON.MUXIG,
    WP_DICT_COMMON.BIMTI,
    WP_DICT_COMMON.SAXIL,
    WP_DICT_COMMON.YHM,
  ],
  YHM_ARR_UDMIK: [
    WP_DICT_COMMON.ILUSI,
    WP_DICT_COMMON.YYZ,
    WP_DICT_COMMON.UDMIK,
    WP_DICT_COMMON.BIMTI,
    WP_DICT_COMMON.SAXIL,
    WP_DICT_COMMON.YHM,
  ],
  YHM_DEP_TESUK: [WP_DICT_COMMON.YHM, WP_DICT_COMMON.TESUK],
  YHM_DEP_UKPAG: [WP_DICT_COMMON.YHM, WP_DICT_COMMON.UKPAG],
  YKF_DEP_DAVSI: [
    WP_DICT_COMMON.YKF,
    WP_DICT_COMMON.YWT,
    WP_DICT_COMMON.ROKTO,
    WP_DICT_COMMON.YYZ,
    WP_DICT_COMMON.DAVSI,
    WP_DICT_COMMON.TESUK,
  ],
  YKF_DEP_SANIN: [
    WP_DICT_COMMON.YKF,
    WP_DICT_COMMON.YWT,
    WP_DICT_COMMON.ROKTO,
    WP_DICT_COMMON.YYZ,
    WP_DICT_COMMON.SANIN,
  ],
  YKZ_ARR: [WP_DICT_COMMON.YKF, WP_DICT_COMMON.YKZ],
  YKZ_DEP_ANCOL: [WP_DICT_COMMON.ANCOL, WP_DICT_COMMON.LETOR],
  YKZ_DEP_BETES: [WP_DICT_COMMON.OAKVL, WP_DICT_COMMON.BETES],
  YKZ_DEP_GOPUP: [WP_DICT_COMMON.TULEK],
  YKZ_DEP_RIGUS: [WP_DICT_COMMON.DUSOM],
  YKZ_DEP_KEPTA: [WP_DICT_COMMON.RIKEM, WP_DICT_COMMON.KEPTA],
  YKZ_DEP_TONNY: [WP_DICT_COMMON.TONNY],
  YKZ_DEP_SEDOG: [WP_DICT_COMMON.SEDOG, WP_DICT_COMMON.TANGI],
  YOO_ARR: [
    WP_DICT_COMMON.YWT,
    WP_DICT_COMMON.ROKTO,
    WP_DICT_COMMON.YYZ,
    WP_DICT_COMMON.OO,
  ],
  YPQ_ARR: [
    WP_DICT_COMMON.YWT,
    WP_DICT_COMMON.ROKTO,
    WP_DICT_COMMON.DAVSI,
    WP_DICT_COMMON.TALEB,
  ],
  YTZ_DEP_DAVSI: [WP_DICT_COMMON.DAVSI, WP_DICT_COMMON.TESUK],
  YTZ_DEP_IKLEN: [WP_DICT_COMMON.IKLEN, WP_DICT_COMMON.TONNY],
  YTZ_DEP_MAVAN: [WP_DICT_COMMON.RIKEM, WP_DICT_COMMON.KEPTA],
  YTZ_DEP_PERLO: [WP_DICT_COMMON.ANCOL, WP_DICT_COMMON.LETOR],
  YTZ_DEP_TEVAD: [WP_DICT_COMMON.NADUM, WP_DICT_COMMON.TEVAD],
  YZD_DEP_SEDOG: [WP_DICT_COMMON.SEDOG, WP_DICT_COMMON.TANGI],
};
