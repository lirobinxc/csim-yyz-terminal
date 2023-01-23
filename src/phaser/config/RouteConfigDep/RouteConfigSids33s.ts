import { WaypointDataDep33s } from '../../types/WaypointTypesDep';
import { SidName } from '../../types/SidAndSatelliteTypes';
import { WP_DICT_DEP_33s } from '../WaypointConfigDep/WaypointConfigDep33s';

export const SID_ROUTES_33s: {
  [key in SidName]: WaypointDataDep33s[];
} = {
  'ANCOL DEP': [
    WP_DICT_DEP_33s.NUBAX,
    WP_DICT_DEP_33s.TANGU,
    WP_DICT_DEP_33s.MIXUT,
    WP_DICT_DEP_33s.LETOR,
  ],
  'AVSEP DEP': [
    WP_DICT_DEP_33s.TETAD,
    WP_DICT_DEP_33s.AVSEP,
    WP_DICT_DEP_33s.NUGOP,
  ],
  'BETES DEP': [
    WP_DICT_DEP_33s.NUBAX,
    WP_DICT_DEP_33s.TANGU,
    WP_DICT_DEP_33s.OAKVL,
    WP_DICT_DEP_33s.BETES,
  ],
  'BOMET DEP': [
    WP_DICT_DEP_33s.NUBAN,
    WP_DICT_DEP_33s.AVROS,
    WP_DICT_DEP_33s.TESUK,
  ],
  'DEDKI DEP': [
    WP_DICT_DEP_33s.VIVET,
    WP_DICT_DEP_33s.DUVAK,
    WP_DICT_DEP_33s.PUTON,
    WP_DICT_DEP_33s.DEDKI,
  ],
  'DUSOM DEP': [
    WP_DICT_DEP_33s.SERPI,
    WP_DICT_DEP_33s.DUSOM,
    WP_DICT_DEP_33s.RIGUS,
  ],
  'EBKIN DEP': [WP_DICT_DEP_33s.EBKIN, WP_DICT_DEP_33s.KISEP],
  'GOPUP DEP': [WP_DICT_DEP_33s.TETAD, WP_DICT_DEP_33s.TULEK],
  'IKLEN DEP': [WP_DICT_DEP_33s.IKLEN, WP_DICT_DEP_33s.TONNY],
  'KEPTA DEP': [
    WP_DICT_DEP_33s.VIVET,
    WP_DICT_DEP_33s.BOTIB,
    WP_DICT_DEP_33s.RIKEM,
    WP_DICT_DEP_33s.KEPTA,
  ],
  'KISEP DEP': [WP_DICT_DEP_33s.EBKIN, WP_DICT_DEP_33s.KISEP],
  'LAKES DEP': [WP_DICT_DEP_33s.SEDOG, WP_DICT_DEP_33s.TANGI],
  'MATES DEP': [WP_DICT_DEP_33s.IKLEN, WP_DICT_DEP_33s.TONNY],
  'MAVAN DEP': [
    WP_DICT_DEP_33s.NUBAN,
    WP_DICT_DEP_33s.IGTUL,
    WP_DICT_DEP_33s.RIKEM,
    WP_DICT_DEP_33s.KEPTA,
  ],
  'MIXUT DEP': [
    WP_DICT_DEP_33s.NUBAX,
    WP_DICT_DEP_33s.TANGU,
    WP_DICT_DEP_33s.MIXUT,
    WP_DICT_DEP_33s.LETOR,
  ],
  'NOSIK DEP': [WP_DICT_DEP_33s.URSAL, WP_DICT_DEP_33s.NOSIK],
  'NUGOP DEP': [WP_DICT_DEP_33s.AVSEP, WP_DICT_DEP_33s.NUGOP],
  'OAKVL DEP': [
    WP_DICT_DEP_33s.SERPI,
    WP_DICT_DEP_33s.OAKVL,
    WP_DICT_DEP_33s.BETES,
  ],
  'PEMBA DEP': [
    WP_DICT_DEP_33s.SERPI,
    WP_DICT_DEP_33s.MIXUT,
    WP_DICT_DEP_33s.LETOR,
  ],
  'PERLO DEP': [
    WP_DICT_DEP_33s.SERPI,
    WP_DICT_DEP_33s.MIXUT,
    WP_DICT_DEP_33s.LETOR,
  ],
  'RIGUS DEP': [
    WP_DICT_DEP_33s.NUBAX,
    WP_DICT_DEP_33s.TANGU,
    WP_DICT_DEP_33s.DUSOM,
    WP_DICT_DEP_33s.RIGUS,
  ],
  'SEDOG DEP': [WP_DICT_DEP_33s.SEDOG, WP_DICT_DEP_33s.TANGI],
  'TEVAD DEP': [
    WP_DICT_DEP_33s.NUBAN,
    WP_DICT_DEP_33s.IGTUL,
    WP_DICT_DEP_33s.NADUM,
    WP_DICT_DEP_33s.TEVAD,
  ],
  'TULEK DEP': [WP_DICT_DEP_33s.TULEK],
  'URSAL DEP': [
    WP_DICT_DEP_33s.TETAD,
    WP_DICT_DEP_33s.URSAL,
    WP_DICT_DEP_33s.NOSIK,
  ],
  'VERDO DEP': [
    WP_DICT_DEP_33s.VIVET,
    WP_DICT_DEP_33s.DUVAK,
    WP_DICT_DEP_33s.VERDO,
  ],
};
