import { AcType } from '../types/AircraftTypes';
import { GameConfig } from './GameConfig';
import { WP_LIST_COMMON } from './WaypointConfigCommon';
import type {
  WaypointData06s,
  WaypointDataAll,
  WaypointKeys06s,
  WaypointNamesAll,
  WaypointNamesRwy06s,
} from '../types/WaypointTypes';

const gameHeight = GameConfig.height;

export const WP_LIST_RWY06s: WaypointData06s[] = [
  ...WP_LIST_COMMON,
  {
    name: 'BIRLI',
    relativeCoord: new Phaser.Math.Vector2(0.609, 0.652),
    getDisplayCoord: function () {
      return new Phaser.Math.Vector2(
        this.relativeCoord.x,
        this.relativeCoord.y
      ).scale(gameHeight);
    },
    type: AcType.JET,
  },
  {
    name: 'DUVKO',
    relativeCoord: new Phaser.Math.Vector2(0.348, 0.336),
    getDisplayCoord: function () {
      return new Phaser.Math.Vector2(
        this.relativeCoord.x,
        this.relativeCoord.y
      ).scale(gameHeight);
    },
    type: AcType.JET,
  },
  {
    name: 'GOTIM',
    relativeCoord: new Phaser.Math.Vector2(0.576, 0.279),
    getDisplayCoord: function () {
      return new Phaser.Math.Vector2(
        this.relativeCoord.x,
        this.relativeCoord.y
      ).scale(gameHeight);
    },
    type: AcType.JET,
  },
  {
    name: 'KEDSI',
    relativeCoord: new Phaser.Math.Vector2(0.509, 0.333),
    getDisplayCoord: function () {
      return new Phaser.Math.Vector2(
        this.relativeCoord.x,
        this.relativeCoord.y
      ).scale(gameHeight);
    },
    type: AcType.JET,
  },
  {
    name: 'KODAL',
    relativeCoord: new Phaser.Math.Vector2(0.937, 0.605),
    getDisplayCoord: function () {
      return new Phaser.Math.Vector2(
        this.relativeCoord.x,
        this.relativeCoord.y
      ).scale(gameHeight);
    },
    type: AcType.JET,
  },
  {
    name: 'MEMPA',
    relativeCoord: new Phaser.Math.Vector2(0.452, 0.375),
    getDisplayCoord: function () {
      return new Phaser.Math.Vector2(
        this.relativeCoord.x,
        this.relativeCoord.y
      ).scale(gameHeight);
    },
    type: AcType.PROP,
  },
  {
    name: 'MOBEL',
    relativeCoord: new Phaser.Math.Vector2(0.687, 0.554),
    getDisplayCoord: function () {
      return new Phaser.Math.Vector2(
        this.relativeCoord.x,
        this.relativeCoord.y
      ).scale(gameHeight);
    },
    type: AcType.JET,
  },
  {
    name: 'OMAPA',
    relativeCoord: new Phaser.Math.Vector2(0.581, 0.657),
    getDisplayCoord: function () {
      return new Phaser.Math.Vector2(
        this.relativeCoord.x,
        this.relativeCoord.y
      ).scale(gameHeight);
    },
    type: AcType.PROP,
  },
  {
    name: 'PERLO',
    relativeCoord: new Phaser.Math.Vector2(0.604, 0.564),
    getDisplayCoord: function () {
      return new Phaser.Math.Vector2(
        this.relativeCoord.x,
        this.relativeCoord.y
      ).scale(gameHeight);
    },
    type: AcType.PROP,
  },
  {
    name: 'SIDVU',
    relativeCoord: new Phaser.Math.Vector2(0.36, 0.362),

    getDisplayCoord: function () {
      return new Phaser.Math.Vector2(
        this.relativeCoord.x,
        this.relativeCoord.y
      ).scale(gameHeight);
    },
    type: AcType.PROP,
  },
  {
    name: 'VIDRA',
    relativeCoord: new Phaser.Math.Vector2(0.554, 0.702),
    getDisplayCoord: function () {
      return new Phaser.Math.Vector2(
        this.relativeCoord.x,
        this.relativeCoord.y
      ).scale(gameHeight);
    },
    type: AcType.JET,
  },
];

export const WP_DICT_Rwy06s = genDictFromWaypointList(WP_LIST_RWY06s);

function genDictFromWaypointList(wpArr: WaypointData06s[]) {
  const wpDict = wpArr.reduce((acc, item) => {
    acc[item.name] = {
      name: item.name,
      type: item.type,
      relativeCoord: item.relativeCoord,
      getDisplayCoord: item.getDisplayCoord,
    };
    return acc;
  }, {} as WaypointKeys06s);

  return wpDict;
}
