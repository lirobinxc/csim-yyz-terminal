import { AcType } from '../../phaser/types/AircraftTypes';
import { RadarSceneKeys } from '../../phaser/types/SceneKeys';
import { AdjacentSectors } from '../../phaser/types/SectorTypes';
import { SidName } from '../../phaser/types/SidAndSatelliteTypes';

export interface SidData {
  name: SidName;
  acType: AcType;
  firstWp: string;
  routeWp: string;
  finalWp: string;
  furtherWp: string;
  propOrJetTurns: string;
  handoffAlt: string;
  alternateHandoffAlt: string;
  handoffSector: AdjacentSectors;
  handoffFreq: string;
}

type AcTypeSids = Record<AcType, SidData[]>;
type SidsCollection = Record<RadarSceneKeys, AcTypeSids>;

export const sidsCollection: SidsCollection = {
  Radar06sScene: {
    JET: [
      {
        name: SidName.DEDKI,
        acType: AcType.JET,
        firstWp: 'ALKUT',
        routeWp: 'KODAL',
        finalWp: 'DEDKI',
        furtherWp: '',
        propOrJetTurns: 'No turns',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.ER,
        handoffFreq: '124.92',
      },
      {
        name: SidName.VERDO,
        acType: AcType.JET,
        firstWp: 'ALKUT',
        routeWp: 'PUTON',
        finalWp: 'VERDO',
        furtherWp: '',
        propOrJetTurns: 'No turns',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.ER,
        handoffFreq: '124.92',
      },
      {
        name: SidName.KEPTA,
        acType: AcType.JET,
        firstWp: 'MOBEL',
        routeWp: '',
        finalWp: 'RIKEM',
        furtherWp: 'KEPTA',
        propOrJetTurns: '100',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.GR,
        handoffFreq: '133.3',
      },
      {
        name: SidName.ANCOL,
        acType: AcType.JET,
        firstWp: 'MOBEL',
        routeWp: 'BIRLI, VIDRA',
        finalWp: 'ANCOL',
        furtherWp: 'GGUCE',
        propOrJetTurns: '100',
        handoffAlt: '15,000',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.HM,
        handoffFreq: '132.47',
      },
      {
        name: SidName.BETES,
        acType: AcType.JET,
        firstWp: 'MOBEL',
        routeWp: 'BIRLI, VIDRA',
        finalWp: 'OAKVL',
        furtherWp: 'BETES',
        propOrJetTurns: '100',
        handoffAlt: '15,000',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.HM,
        handoffFreq: '132.47',
      },
      {
        name: SidName.MIXUT,
        acType: AcType.JET,
        firstWp: 'MOBEL',
        routeWp: 'BIRLI, VIDRA',
        finalWp: 'ANCOL',
        furtherWp: 'LETOR',
        propOrJetTurns: '100',
        handoffAlt: '15,000',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.HM,
        handoffFreq: '132.47',
      },
      {
        name: SidName.RIGUS,
        acType: AcType.JET,
        firstWp: 'MOBEL',
        routeWp: 'BIRLI, VIDRA',
        finalWp: 'DUSOM',
        furtherWp: '',
        propOrJetTurns: '100',
        handoffAlt: '15,000',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.HM,
        handoffFreq: '132.47',
      },
      {
        name: SidName.GOPUP,
        acType: AcType.JET,
        firstWp: 'KEDSI',
        routeWp: 'DUVKO',
        finalWp: 'TULEK',
        furtherWp: 'GOPUP',
        propOrJetTurns: '360',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.KF,
        handoffFreq: '135.62',
      },
      {
        name: SidName.SEDOG,
        acType: AcType.JET,
        firstWp: 'GOTIM',
        routeWp: '',
        finalWp: 'SEDOG',
        furtherWp: 'TANGI',
        propOrJetTurns: '360',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.SI,
        handoffFreq: '127.0',
      },
      {
        name: SidName.AVSEP,
        acType: AcType.JET,
        firstWp: 'KEDSI',
        routeWp: 'DUVKO',
        finalWp: 'AVSEP',
        furtherWp: 'NUGOP',
        propOrJetTurns: '360',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.VV,
        handoffFreq: '132.57',
      },
      {
        name: SidName.IKLEN,
        acType: AcType.JET,
        firstWp: 'GOTIM',
        routeWp: '',
        finalWp: 'IKLEN',
        furtherWp: 'TONNY',
        propOrJetTurns: '360',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.VV,
        handoffFreq: '124.02',
      },
      {
        name: SidName.KISEP,
        acType: AcType.JET,
        firstWp: 'GOTIM',
        routeWp: '',
        finalWp: 'EBKIN',
        furtherWp: 'KISEP',
        propOrJetTurns: '360',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.VV,
        handoffFreq: '124.02',
      },
      {
        name: SidName.URSAL,
        acType: AcType.JET,
        firstWp: 'KEDSI',
        routeWp: 'DUVKO',
        finalWp: 'URSAL',
        furtherWp: '',
        propOrJetTurns: '360',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.VV,
        handoffFreq: '132.57',
      },
    ],
    PROP: [
      {
        name: SidName.BOMET,
        acType: AcType.PROP,
        firstWp: 'AVROS',
        routeWp: '',
        finalWp: 'TESUK',
        furtherWp: 'TALEB, BOMET',
        propOrJetTurns: '360',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.ER,
        handoffFreq: '124.92',
      },
      {
        name: SidName.MAVAN,
        acType: AcType.PROP,
        firstWp: 'PERLO',
        routeWp: '',
        finalWp: 'RIKEM',
        furtherWp: '',
        propOrJetTurns: '100',
        handoffAlt: '8000',
        alternateHandoffAlt: '9000, for conflicts / landing KBUF',
        handoffSector: AdjacentSectors.GR,
        handoffFreq: '133.3',
      },
      {
        name: SidName.TEVAD,
        acType: AcType.PROP,
        firstWp: 'PERLO',
        routeWp: '',
        finalWp: 'NADUM',
        furtherWp: 'TEVAD, AHPAH',
        propOrJetTurns: '100',
        handoffAlt: '8000',
        alternateHandoffAlt: '9000, for conflicts / landing KBUF',
        handoffSector: AdjacentSectors.GR,
        handoffFreq: '133.3',
      },
      {
        name: SidName.DUSOM,
        acType: AcType.PROP,
        firstWp: 'PERLO',
        routeWp: 'OMAPA',
        finalWp: 'DUSOM',
        furtherWp: 'RIGUS',
        propOrJetTurns: '100',
        handoffAlt: '8000',
        alternateHandoffAlt: '9000, for conflicts',
        handoffSector: AdjacentSectors.HM,
        handoffFreq: '132.47',
      },
      {
        name: SidName.OAKVL,
        acType: AcType.PROP,
        firstWp: 'PERLO',
        routeWp: 'OMAPA',
        finalWp: 'OAKVL',
        furtherWp: 'BETES',
        propOrJetTurns: '100',
        handoffAlt: '8000',
        alternateHandoffAlt: '9000, for conflicts',
        handoffSector: AdjacentSectors.HM,
        handoffFreq: '132.47',
      },
      {
        name: SidName.PEMBA,
        acType: AcType.PROP,
        firstWp: 'PERLO',
        routeWp: 'OMAPA',
        finalWp: 'ANCOL',
        furtherWp: 'LETOR',
        propOrJetTurns: '100',
        handoffAlt: '8000',
        alternateHandoffAlt: '9000, for conflicts',
        handoffSector: AdjacentSectors.HM,
        handoffFreq: '132.47',
      },
      {
        name: SidName.PERLO,
        acType: AcType.PROP,
        firstWp: 'PERLO',
        routeWp: 'OMAPA',
        finalWp: 'ANCOL',
        furtherWp: 'GGUCE',
        propOrJetTurns: '100',
        handoffAlt: '8000',
        alternateHandoffAlt: '9000, for conflicts',
        handoffSector: AdjacentSectors.HM,
        handoffFreq: '132.47',
      },
      {
        name: SidName.TULEK,
        acType: AcType.PROP,
        firstWp: 'MEMPA',
        routeWp: 'SIDVU',
        finalWp: 'TULEK',
        furtherWp: 'GOPUP',
        propOrJetTurns: '330',
        handoffAlt: '8000',
        alternateHandoffAlt: '9000, for conflicts',
        handoffSector: AdjacentSectors.KF,
        handoffFreq: '135.62',
      },
      {
        name: SidName.LAKES,
        acType: AcType.PROP,
        firstWp: '',
        routeWp: '',
        finalWp: 'SEDOG',
        furtherWp: 'TANGI',
        propOrJetTurns: '360',
        handoffAlt: '8000',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.SI,
        handoffFreq: '127.0',
      },
      {
        name: SidName.EBKIN,
        acType: AcType.PROP,
        firstWp: '',
        routeWp: '',
        finalWp: 'EBKIN',
        furtherWp: 'KISEP',
        propOrJetTurns: '360',
        handoffAlt: '8000',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.VV,
        handoffFreq: '124.02',
      },
      {
        name: SidName.MATES,
        acType: AcType.PROP,
        firstWp: '',
        routeWp: '',
        finalWp: 'IKLEN',
        furtherWp: 'TONNY',
        propOrJetTurns: '360',
        handoffAlt: '8000',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.VV,
        handoffFreq: '124.02',
      },
      {
        name: SidName.NOSIK,
        acType: AcType.PROP,
        firstWp: 'MEMPA',
        routeWp: 'SIDVU',
        finalWp: 'URSAL',
        furtherWp: '',
        propOrJetTurns: '330',
        handoffAlt: '8000',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.VV,
        handoffFreq: '132.57',
      },
      {
        name: SidName.NUGOP,
        acType: AcType.PROP,
        firstWp: 'MEMPA',
        routeWp: 'SIDVU',
        finalWp: 'AVSEP',
        furtherWp: 'NUGOP',
        propOrJetTurns: '330',
        handoffAlt: '8000',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.VV,
        handoffFreq: '132.57',
      },
    ],
  },
  Radar15sScene: {
    JET: [
      {
        name: SidName.DEDKI,
        acType: AcType.JET,
        firstWp: 'ALKUT',
        routeWp: 'KODAL',
        finalWp: 'DEDKI',
        furtherWp: '',
        propOrJetTurns: '',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.ER,
        handoffFreq: '124.92',
      },
      {
        name: SidName.VERDO,
        acType: AcType.JET,
        firstWp: 'ALKUT',
        routeWp: 'PUTON',
        finalWp: 'VERDO',
        furtherWp: '',
        propOrJetTurns: '',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.ER,
        handoffFreq: '124.92',
      },
      {
        name: SidName.KEPTA,
        acType: AcType.JET,
        firstWp: '',
        routeWp: '',
        finalWp: 'RIKEM',
        furtherWp: '',
        propOrJetTurns: '',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.GR,
        handoffFreq: '133.3',
      },
      {
        name: SidName.ANCOL,
        acType: AcType.JET,
        firstWp: '',
        routeWp: '',
        finalWp: 'MIXUT',
        furtherWp: 'LETOR, GGUCE',
        propOrJetTurns: '',
        handoffAlt: '15,000',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.HM,
        handoffFreq: '132.47',
      },
      {
        name: SidName.BETES,
        acType: AcType.JET,
        firstWp: '',
        routeWp: '',
        finalWp: 'OAKVL',
        furtherWp: 'BETES',
        propOrJetTurns: '',
        handoffAlt: '15,000',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.HM,
        handoffFreq: '132.47',
      },
      {
        name: SidName.MIXUT,
        acType: AcType.JET,
        firstWp: '',
        routeWp: '',
        finalWp: 'MIXUT',
        furtherWp: 'LETOR',
        propOrJetTurns: '',
        handoffAlt: '15,000',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.HM,
        handoffFreq: '132.47',
      },
      {
        name: SidName.RIGUS,
        acType: AcType.JET,
        firstWp: '',
        routeWp: '',
        finalWp: 'DUSOM',
        furtherWp: '',
        propOrJetTurns: '',
        handoffAlt: '15,000',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.HM,
        handoffFreq: '132.47',
      },
      {
        name: SidName.GOPUP,
        acType: AcType.JET,
        firstWp: 'BOVAL',
        routeWp: 'VIBNA, IPSOT',
        finalWp: 'TULEK',
        furtherWp: 'GOPUP',
        propOrJetTurns: '',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.KF,
        handoffFreq: '135.62',
      },
      {
        name: SidName.SEDOG,
        acType: AcType.JET,
        firstWp: 'BORUX',
        routeWp: 'ETLER',
        finalWp: 'SEDOG',
        furtherWp: '',
        propOrJetTurns: '',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.SI,
        handoffFreq: '127.0',
      },
      {
        name: SidName.AVSEP,
        acType: AcType.JET,
        firstWp: 'BOVAL',
        routeWp: 'VIBNA, IPSOT',
        finalWp: 'URSAL',
        furtherWp: 'NUGOP',
        propOrJetTurns: '',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.VV,
        handoffFreq: '132.57',
      },
      {
        name: SidName.IKLEN,
        acType: AcType.JET,
        firstWp: 'BORUX',
        routeWp: 'ETLER',
        finalWp: 'IKLEN',
        furtherWp: 'TONNY',
        propOrJetTurns: '',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.VV,
        handoffFreq: '124.02',
      },
      {
        name: SidName.KISEP,
        acType: AcType.JET,
        firstWp: 'BORUX',
        routeWp: 'ETLER',
        finalWp: 'EBKIN',
        furtherWp: 'KISEP',
        propOrJetTurns: '',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.VV,
        handoffFreq: '124.02',
      },
      {
        name: SidName.URSAL,
        acType: AcType.JET,
        firstWp: 'BOVAL',
        routeWp: 'VIBNA, IPSOT',
        finalWp: 'URSAL',
        furtherWp: '',
        propOrJetTurns: '',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.VV,
        handoffFreq: '132.57',
      },
    ],
    PROP: [
      {
        name: SidName.BOMET,
        acType: AcType.PROP,
        firstWp: 'DAVSI',
        routeWp: '',
        finalWp: 'TESUK',
        furtherWp: 'TALEB, BOMET',
        propOrJetTurns: '100',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.ER,
        handoffFreq: '124.92',
      },
      {
        name: SidName.MAVAN,
        acType: AcType.PROP,
        firstWp: '',
        routeWp: '',
        finalWp: 'RIKEM',
        furtherWp: '',
        propOrJetTurns: '100',
        handoffAlt: '8000',
        alternateHandoffAlt: '9000, for conflicts / landing KBUF',
        handoffSector: AdjacentSectors.GR,
        handoffFreq: '133.3',
      },
      {
        name: SidName.TEVAD,
        acType: AcType.PROP,
        firstWp: '',
        routeWp: '',
        finalWp: 'NADUM',
        furtherWp: 'TEVAD, AHPAH',
        propOrJetTurns: '100',
        handoffAlt: '8000',
        alternateHandoffAlt: '9000, for conflicts / landing KBUF',
        handoffSector: AdjacentSectors.GR,
        handoffFreq: '133.3',
      },
      {
        name: SidName.DUSOM,
        acType: AcType.PROP,
        firstWp: '',
        routeWp: '',
        finalWp: 'DUSOM',
        furtherWp: 'RIGUS',
        propOrJetTurns: '180',
        handoffAlt: '8000',
        alternateHandoffAlt: '9000, for conflicts',
        handoffSector: AdjacentSectors.HM,
        handoffFreq: '132.47',
      },
      {
        name: SidName.OAKVL,
        acType: AcType.PROP,
        firstWp: '',
        routeWp: '',
        finalWp: 'OAKVL',
        furtherWp: 'BETES',
        propOrJetTurns: '180',
        handoffAlt: '8000',
        alternateHandoffAlt: '9000, for conflicts',
        handoffSector: AdjacentSectors.HM,
        handoffFreq: '132.47',
      },
      {
        name: SidName.PEMBA,
        acType: AcType.PROP,
        firstWp: '',
        routeWp: '',
        finalWp: 'MIXUT',
        furtherWp: 'LETOR',
        propOrJetTurns: '180',
        handoffAlt: '8000',
        alternateHandoffAlt: '9000, for conflicts',
        handoffSector: AdjacentSectors.HM,
        handoffFreq: '132.47',
      },
      {
        name: SidName.PERLO,
        acType: AcType.PROP,
        firstWp: '',
        routeWp: '',
        finalWp: 'MIXUT',
        furtherWp: 'LETOR, GGUCE',
        propOrJetTurns: '180',
        handoffAlt: '8000',
        alternateHandoffAlt: '9000, for conflicts',
        handoffSector: AdjacentSectors.HM,
        handoffFreq: '132.47',
      },
      {
        name: SidName.TULEK,
        acType: AcType.PROP,
        firstWp: 'IPSOT',
        routeWp: '',
        finalWp: 'TULEK',
        furtherWp: '',
        propOrJetTurns: '240',
        handoffAlt: '8000',
        alternateHandoffAlt: '9000, for conflicts',
        handoffSector: AdjacentSectors.KF,
        handoffFreq: '135.62',
      },
      {
        name: SidName.LAKES,
        acType: AcType.PROP,
        firstWp: 'ETLER',
        routeWp: '',
        finalWp: 'SEDOG',
        furtherWp: 'TANGI',
        propOrJetTurns: '060',
        handoffAlt: '8000',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.SI,
        handoffFreq: '127.0',
      },
      {
        name: SidName.EBKIN,
        acType: AcType.PROP,
        firstWp: 'ETLER',
        routeWp: '',
        finalWp: 'EBKIN',
        furtherWp: 'KISEP',
        propOrJetTurns: '060',
        handoffAlt: '8000',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.VV,
        handoffFreq: '124.02',
      },
      {
        name: SidName.MATES,
        acType: AcType.PROP,
        firstWp: 'ETLER',
        routeWp: '',
        finalWp: 'IKLEN',
        furtherWp: 'TONNY',
        propOrJetTurns: '060',
        handoffAlt: '8000',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.VV,
        handoffFreq: '124.02',
      },
      {
        name: SidName.NOSIK,
        acType: AcType.PROP,
        firstWp: 'IPSOT',
        routeWp: '',
        finalWp: 'URSAL',
        furtherWp: '',
        propOrJetTurns: '240',
        handoffAlt: '8000',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.VV,
        handoffFreq: '132.57',
      },
      {
        name: SidName.NUGOP,
        acType: AcType.PROP,
        firstWp: 'IPSOT',
        routeWp: '',
        finalWp: 'URSAL',
        furtherWp: 'NUGOP',
        propOrJetTurns: '240',
        handoffAlt: '8000',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.VV,
        handoffFreq: '132.57',
      },
    ],
  },
  Radar24sScene: {
    JET: [
      {
        name: SidName.DEDKI,
        acType: AcType.JET,
        firstWp: 'SAVUR',
        routeWp: 'SEKIT',
        finalWp: 'DEDKI',
        furtherWp: '',
        propOrJetTurns: '180',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.ER,
        handoffFreq: '124.92',
      },
      {
        name: SidName.VERDO,
        acType: AcType.JET,
        firstWp: 'SAVUR',
        routeWp: 'SEKIT',
        finalWp: 'VERDO',
        furtherWp: '',
        propOrJetTurns: '180',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.ER,
        handoffFreq: '124.92',
      },
      {
        name: SidName.KEPTA,
        acType: AcType.JET,
        firstWp: 'SAVUR',
        routeWp: 'SEKIT',
        finalWp: 'RIKEM',
        furtherWp: '',
        propOrJetTurns: '180',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.GR,
        handoffFreq: '133.3',
      },
      {
        name: SidName.ANCOL,
        acType: AcType.JET,
        firstWp: '',
        routeWp: '',
        finalWp: 'MIXUT',
        furtherWp: 'LETOR, GGUCE',
        propOrJetTurns: 'No turns',
        handoffAlt: '15,000',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.HM,
        handoffFreq: '132.47',
      },
      {
        name: SidName.BETES,
        acType: AcType.JET,
        firstWp: 'MURNO',
        routeWp: '',
        finalWp: 'OAKVL',
        furtherWp: 'BETES',
        propOrJetTurns: 'No turns',
        handoffAlt: '15,000',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.HM,
        handoffFreq: '132.47',
      },
      {
        name: SidName.MIXUT,
        acType: AcType.JET,
        firstWp: '',
        routeWp: '',
        finalWp: 'MIXUT',
        furtherWp: 'LETOR',
        propOrJetTurns: 'No turns',
        handoffAlt: '15,000',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.HM,
        handoffFreq: '132.47',
      },
      {
        name: SidName.RIGUS,
        acType: AcType.JET,
        firstWp: 'MURNO',
        routeWp: '',
        finalWp: 'DUSOM',
        furtherWp: '',
        propOrJetTurns: 'No turns',
        handoffAlt: '15,000',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.HM,
        handoffFreq: '132.47',
      },
      {
        name: SidName.GOPUP,
        acType: AcType.JET,
        firstWp: 'TILAM',
        routeWp: '',
        finalWp: 'TULEK',
        furtherWp: 'GOPUP',
        propOrJetTurns: '290',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.KF,
        handoffFreq: '135.62',
      },
      {
        name: SidName.SEDOG,
        acType: AcType.JET,
        firstWp: 'BISTI',
        routeWp: 'NAMGI',
        finalWp: 'SEDOG',
        furtherWp: '',
        propOrJetTurns: '290',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.SI,
        handoffFreq: '127.0',
      },
      {
        name: SidName.AVSEP,
        acType: AcType.JET,
        firstWp: 'TILAM',
        routeWp: '',
        finalWp: 'AVSEP',
        furtherWp: 'NUGOP',
        propOrJetTurns: '290',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.VV,
        handoffFreq: '132.57',
      },
      {
        name: SidName.IKLEN,
        acType: AcType.JET,
        firstWp: 'BISTI',
        routeWp: 'NAMGI',
        finalWp: 'IKLEN',
        furtherWp: 'TONNY',
        propOrJetTurns: '290',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.VV,
        handoffFreq: '124.02',
      },
      {
        name: SidName.KISEP,
        acType: AcType.JET,
        firstWp: 'BISTI',
        routeWp: 'NAMGI',
        finalWp: 'EBKIN',
        furtherWp: 'KISEP',
        propOrJetTurns: '290',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.VV,
        handoffFreq: '124.02',
      },
      {
        name: SidName.URSAL,
        acType: AcType.JET,
        firstWp: 'TILAM',
        routeWp: '',
        finalWp: 'URSAL',
        furtherWp: '',
        propOrJetTurns: '290',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.VV,
        handoffFreq: '132.57',
      },
    ],
    PROP: [
      {
        name: SidName.BOMET,
        acType: AcType.PROP,
        firstWp: 'MAVAN',
        routeWp: 'GAGPO, DAVSI',
        finalWp: 'TESUK',
        furtherWp: 'TALEB, BOMET',
        propOrJetTurns: '180',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.ER,
        handoffFreq: '124.92',
      },
      {
        name: SidName.MAVAN,
        acType: AcType.PROP,
        firstWp: 'MAVAN',
        routeWp: '',
        finalWp: 'RIKEM',
        furtherWp: '',
        propOrJetTurns: '180',
        handoffAlt: '8000',
        alternateHandoffAlt: '9000, for conflicts / landing KBUF',
        handoffSector: AdjacentSectors.GR,
        handoffFreq: '133.3',
      },
      {
        name: SidName.TEVAD,
        acType: AcType.PROP,
        firstWp: 'MAVAN',
        routeWp: '',
        finalWp: 'NADUM',
        furtherWp: 'TEVAD, AHPAH',
        propOrJetTurns: '180',
        handoffAlt: '8000',
        alternateHandoffAlt: '9000, for conflicts / landing KBUF',
        handoffSector: AdjacentSectors.GR,
        handoffFreq: '133.3',
      },
      {
        name: SidName.DUSOM,
        acType: AcType.PROP,
        firstWp: 'SAVUR',
        routeWp: '',
        finalWp: 'DUSOM',
        furtherWp: 'RIGUS',
        propOrJetTurns: '180',
        handoffAlt: '8000',
        alternateHandoffAlt: '9000, for conflicts',
        handoffSector: AdjacentSectors.HM,
        handoffFreq: '132.47',
      },
      {
        name: SidName.OAKVL,
        acType: AcType.PROP,
        firstWp: 'SAVUR',
        routeWp: '',
        finalWp: 'OAKVL',
        furtherWp: 'BETES',
        propOrJetTurns: '180',
        handoffAlt: '8000',
        alternateHandoffAlt: '9000, for conflicts',
        handoffSector: AdjacentSectors.HM,
        handoffFreq: '132.47',
      },
      {
        name: SidName.PEMBA,
        acType: AcType.PROP,
        firstWp: 'TILAM',
        routeWp: '',
        finalWp: 'MIXUT',
        furtherWp: 'LETOR',
        propOrJetTurns: '290',
        handoffAlt: '8000',
        alternateHandoffAlt: '9000, for conflicts',
        handoffSector: AdjacentSectors.HM,
        handoffFreq: '132.47',
      },
      {
        name: SidName.PERLO,
        acType: AcType.PROP,
        firstWp: 'TILAM',
        routeWp: '',
        finalWp: 'MIXUT',
        furtherWp: 'LETOR, GGUCE',
        propOrJetTurns: '290',
        handoffAlt: '8000',
        alternateHandoffAlt: '9000, for conflicts',
        handoffSector: AdjacentSectors.HM,
        handoffFreq: '132.47',
      },
      {
        name: SidName.TULEK,
        acType: AcType.PROP,
        firstWp: '',
        routeWp: '',
        finalWp: 'TULEK',
        furtherWp: '',
        propOrJetTurns: '290',
        handoffAlt: '8000',
        alternateHandoffAlt: '9000, for conflicts',
        handoffSector: AdjacentSectors.KF,
        handoffFreq: '135.62',
      },
      {
        name: SidName.LAKES,
        acType: AcType.PROP,
        firstWp: 'MATES',
        routeWp: '',
        finalWp: 'SEDOG',
        furtherWp: 'TANGI',
        propOrJetTurns: '330',
        handoffAlt: '8000',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.SI,
        handoffFreq: '127.0',
      },
      {
        name: SidName.EBKIN,
        acType: AcType.PROP,
        firstWp: 'MATES',
        routeWp: '',
        finalWp: 'EBKIN',
        furtherWp: 'KISEP',
        propOrJetTurns: '330',
        handoffAlt: '8000',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.VV,
        handoffFreq: '124.02',
      },
      {
        name: SidName.MATES,
        acType: AcType.PROP,
        firstWp: 'MATES',
        routeWp: '',
        finalWp: 'IKLEN',
        furtherWp: 'TONNY',
        propOrJetTurns: '330',
        handoffAlt: '8000',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.VV,
        handoffFreq: '124.02',
      },
      {
        name: SidName.NOSIK,
        acType: AcType.PROP,
        firstWp: '',
        routeWp: '',
        finalWp: 'URSAL',
        furtherWp: '',
        propOrJetTurns: '290',
        handoffAlt: '8000',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.VV,
        handoffFreq: '132.57',
      },
      {
        name: SidName.NUGOP,
        acType: AcType.PROP,
        firstWp: '',
        routeWp: '',
        finalWp: 'AVSEP',
        furtherWp: 'NUGOP',
        propOrJetTurns: '290',
        handoffAlt: '8000',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.VV,
        handoffFreq: '132.57',
      },
    ],
  },
  Radar33sScene: {
    JET: [
      {
        name: SidName.DEDKI,
        acType: AcType.JET,
        firstWp: 'VIVET',
        routeWp: 'DUVAK, PUTON',
        finalWp: 'DEDKI',
        furtherWp: '',
        propOrJetTurns: '',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.ER,
        handoffFreq: '124.92',
      },
      {
        name: SidName.VERDO,
        acType: AcType.JET,
        firstWp: 'VIVET',
        routeWp: 'DUVAK',
        finalWp: 'VERDO',
        furtherWp: '',
        propOrJetTurns: '',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.ER,
        handoffFreq: '124.92',
      },
      {
        name: SidName.KEPTA,
        acType: AcType.JET,
        firstWp: 'VIVET',
        routeWp: 'BOTIB',
        finalWp: 'RIKEM',
        furtherWp: '',
        propOrJetTurns: '',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.GR,
        handoffFreq: '133.3',
      },
      {
        name: SidName.ANCOL,
        acType: AcType.JET,
        firstWp: 'NUBAX',
        routeWp: 'TANGU ',
        finalWp: 'MIXUT',
        furtherWp: 'LETOR, GGUCE',
        propOrJetTurns: '',
        handoffAlt: '15,000',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.HM,
        handoffFreq: '132.47',
      },
      {
        name: SidName.BETES,
        acType: AcType.JET,
        firstWp: 'NUBAX',
        routeWp: 'TANGU',
        finalWp: 'OAKVL',
        furtherWp: 'BETES',
        propOrJetTurns: '',
        handoffAlt: '15,000',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.HM,
        handoffFreq: '132.47',
      },
      {
        name: SidName.MIXUT,
        acType: AcType.JET,
        firstWp: 'NUBAX',
        routeWp: 'TANGU',
        finalWp: 'MIXUT',
        furtherWp: 'LETOR',
        propOrJetTurns: '',
        handoffAlt: '15,000',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.HM,
        handoffFreq: '132.47',
      },
      {
        name: SidName.RIGUS,
        acType: AcType.JET,
        firstWp: 'NUBAX',
        routeWp: 'TANGU ',
        finalWp: 'DUSOM',
        furtherWp: '',
        propOrJetTurns: '',
        handoffAlt: '15,000',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.HM,
        handoffFreq: '132.47',
      },
      {
        name: SidName.GOPUP,
        acType: AcType.JET,
        firstWp: 'TETAD',
        routeWp: '',
        finalWp: 'TULEK',
        furtherWp: 'GOPUP',
        propOrJetTurns: '',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.KF,
        handoffFreq: '135.62',
      },
      {
        name: SidName.SEDOG,
        acType: AcType.JET,
        firstWp: '',
        routeWp: '',
        finalWp: 'SEDOG',
        furtherWp: '',
        propOrJetTurns: '',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.SI,
        handoffFreq: '127.0',
      },
      {
        name: SidName.AVSEP,
        acType: AcType.JET,
        firstWp: 'TETAD',
        routeWp: '',
        finalWp: 'AVSEP',
        furtherWp: 'NUGOP',
        propOrJetTurns: '',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.VV,
        handoffFreq: '132.57',
      },
      {
        name: SidName.IKLEN,
        acType: AcType.JET,
        firstWp: '',
        routeWp: '',
        finalWp: 'IKLEN',
        furtherWp: 'TONNY',
        propOrJetTurns: '',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.VV,
        handoffFreq: '124.02',
      },
      {
        name: SidName.KISEP,
        acType: AcType.JET,
        firstWp: '',
        routeWp: '',
        finalWp: 'EBKIN',
        furtherWp: 'KISEP',
        propOrJetTurns: '',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.VV,
        handoffFreq: '124.02',
      },
      {
        name: SidName.URSAL,
        acType: AcType.JET,
        firstWp: 'TETAD',
        routeWp: '',
        finalWp: 'URSAL',
        furtherWp: '',
        propOrJetTurns: '',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.VV,
        handoffFreq: '132.57',
      },
    ],
    PROP: [
      {
        name: SidName.BOMET,
        acType: AcType.PROP,
        firstWp: 'NUBAN',
        routeWp: 'AVROS',
        finalWp: 'TESUK',
        furtherWp: 'TALEB, BOMET',
        propOrJetTurns: '060',
        handoffAlt: 'FL230',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.ER,
        handoffFreq: '124.92',
      },
      {
        name: SidName.MAVAN,
        acType: AcType.PROP,
        firstWp: 'NUBAN',
        routeWp: 'IGTUL',
        finalWp: 'RIKEM',
        furtherWp: '',
        propOrJetTurns: '060',
        handoffAlt: '8000',
        alternateHandoffAlt: '9000, for conflicts / landing KBUF',
        handoffSector: AdjacentSectors.GR,
        handoffFreq: '133.3',
      },
      {
        name: SidName.TEVAD,
        acType: AcType.PROP,
        firstWp: 'NUBAN',
        routeWp: 'IGTUL',
        finalWp: 'NADUM',
        furtherWp: 'TEVAD, AHPAH',
        propOrJetTurns: '060',
        handoffAlt: '8000',
        alternateHandoffAlt: '9000, for conflicts / landing KBUF',
        handoffSector: AdjacentSectors.GR,
        handoffFreq: '133.3',
      },
      {
        name: SidName.DUSOM,
        acType: AcType.PROP,
        firstWp: 'SERPI',
        routeWp: '',
        finalWp: 'DUSOM',
        furtherWp: 'RIGUS',
        propOrJetTurns: '240',
        handoffAlt: '8000',
        alternateHandoffAlt: '9000, for conflicts',
        handoffSector: AdjacentSectors.HM,
        handoffFreq: '132.47',
      },
      {
        name: SidName.OAKVL,
        acType: AcType.PROP,
        firstWp: 'SERPI',
        routeWp: '',
        finalWp: 'OAKVL',
        furtherWp: 'BETES',
        propOrJetTurns: '240',
        handoffAlt: '8000',
        alternateHandoffAlt: '9000, for conflicts',
        handoffSector: AdjacentSectors.HM,
        handoffFreq: '132.47',
      },
      {
        name: SidName.PEMBA,
        acType: AcType.PROP,
        firstWp: 'SERPI',
        routeWp: '',
        finalWp: 'MIXUT',
        furtherWp: 'LETOR',
        propOrJetTurns: '240',
        handoffAlt: '8000',
        alternateHandoffAlt: '9000, for conflicts',
        handoffSector: AdjacentSectors.HM,
        handoffFreq: '132.47',
      },
      {
        name: SidName.PERLO,
        acType: AcType.PROP,
        firstWp: 'SERPI',
        routeWp: '',
        finalWp: 'MIXUT',
        furtherWp: 'LETOR, GGUCE',
        propOrJetTurns: '240',
        handoffAlt: '8000',
        alternateHandoffAlt: '9000, for conflicts',
        handoffSector: AdjacentSectors.HM,
        handoffFreq: '132.47',
      },
      {
        name: SidName.TULEK,
        acType: AcType.PROP,
        firstWp: '',
        routeWp: '',
        finalWp: 'TULEK',
        furtherWp: '',
        propOrJetTurns: '290',
        handoffAlt: '8000',
        alternateHandoffAlt: '9000, for conflicts',
        handoffSector: AdjacentSectors.KF,
        handoffFreq: '135.62',
      },
      {
        name: SidName.LAKES,
        acType: AcType.PROP,
        firstWp: '',
        routeWp: '',
        finalWp: 'SEDOG',
        furtherWp: 'TANGI',
        propOrJetTurns: '030',
        handoffAlt: '8000',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.SI,
        handoffFreq: '127.0',
      },
      {
        name: SidName.EBKIN,
        acType: AcType.PROP,
        firstWp: '',
        routeWp: '',
        finalWp: 'EBKIN',
        furtherWp: 'KISEP',
        propOrJetTurns: '030',
        handoffAlt: '8000',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.VV,
        handoffFreq: '124.02',
      },
      {
        name: SidName.MATES,
        acType: AcType.PROP,
        firstWp: '',
        routeWp: '',
        finalWp: 'IKLEN',
        furtherWp: 'TONNY',
        propOrJetTurns: '030',
        handoffAlt: '8000',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.VV,
        handoffFreq: '124.02',
      },
      {
        name: SidName.NOSIK,
        acType: AcType.PROP,
        firstWp: '',
        routeWp: '',
        finalWp: 'URSAL',
        furtherWp: '',
        propOrJetTurns: '290',
        handoffAlt: '8000',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.VV,
        handoffFreq: '132.57',
      },
      {
        name: SidName.NUGOP,
        acType: AcType.PROP,
        firstWp: '',
        routeWp: '',
        finalWp: 'AVSEP',
        furtherWp: 'NUGOP',
        propOrJetTurns: '290',
        handoffAlt: '8000',
        alternateHandoffAlt: '',
        handoffSector: AdjacentSectors.VV,
        handoffFreq: '132.57',
      },
    ],
  },
};
