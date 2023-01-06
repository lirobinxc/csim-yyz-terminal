import Phaser from 'phaser';

import { Rwy06sWaypointList } from '../config/Rwy06sWaypointConfig';
import RadarBg from '../objects/RadarBg';
import Waypoint from '../objects/Waypoint';
import type { GameObjectOptions } from '../types/GameObjectOptions';
import { OtherSceneKeys, RadarSceneKeys } from '../types/SceneKeys';
import { AssetKeys } from '../types/AssetKeys';
import PointerCoordinateLogger from '../utils/PointerCoordinates';
import RunwayOrigins from '../config/RunwayOrigins';
import Plane from '../objects/Plane/Plane';
import { AcModel, AcType, AcWTC } from '../types/AircraftTypes';
import { DomEvents } from '../types/DomEvents';
import { AdjacentSectors } from '../types/SectorTypes';

import img_Radar06s from '../assets/Radar06s.png';
import img_PpsSymbol from '../assets/PpsSymbol.png';
import fontTexture_DejaVuMonoBold from '../assets/font/FontDejaVuMonoBold.png';
import fontXml_DejaVuMonoBold from '../assets/font/FontDejaVuMonoBold.xml';
import cursor_PlaneCursor from '../assets/PlaneCursor.cur';
import { convertRadiansToHeading } from '../utils/convertRadiansToHeading';
import DebugButton from '../objects/DebugButton';
import { SidName } from '../types/SidTypes';
import { SidRoute06s } from '../config/Rwy06sSidConfig';
import { DepRunwayYYZ } from '../types/AirportTypes';
import { PhaserCustomEvents, ReactCustomEvents } from '../types/CustomEvents';
import { PlaneProperties } from '../types/PlaneInterfaces';
import { DepFDE } from '../../react/functions/genDepFdeData';
import { genPlanePropsFromFDE } from '../utils/genPlanePropsFromFDE';
import SpeechSynth from '../objects/SpeechSynth';
import FiledRouteLine from '../objects/FiledRouteLine';

export default class RadarScene extends Phaser.Scene {
  public Waypoints!: Waypoint[];
  public PlaneList!: Plane[];
  public RunwayOrigins!: RunwayOrigins;
  public Options: GameObjectOptions;
  public Speech: SpeechSynth;
  private SpeechQueue: { text: string; plane: Plane; isCheckIn: boolean }[];
  private FiledRouteLine: FiledRouteLine | null;

  public RUNWAY_CONFIG: RadarSceneKeys;
  public SELECTED_PLANE: Plane | null;
  public CURRENTLY_SPEAKING_PLANE: Plane | null;

  // Template props
  private SCENE_KEY: RadarSceneKeys;
  private ASSET_KEY: AssetKeys;

  // Subcomponents
  private RadarBg!: RadarBg;

  constructor(sceneKey: RadarSceneKeys, options: GameObjectOptions) {
    super(OtherSceneKeys.RADAR_BASE);

    this.Waypoints = [];
    // this.PlaneList = new Phaser.GameObjects.Group(this);
    this.Options = options;
    this.Speech = new SpeechSynth();
    this.SpeechQueue = [];
    this.FiledRouteLine = null;

    // Init: Template props
    this.SCENE_KEY = sceneKey;
    this.ASSET_KEY = AssetKeys.RADAR_06s; // fallback value

    // Init: Constants
    this.RUNWAY_CONFIG = sceneKey;
    this.SELECTED_PLANE = null;
    this.CURRENTLY_SPEAKING_PLANE = null;
  }

  init() {
    this.Waypoints = [];
    this.PlaneList = [];
    this.SpeechQueue = [];
    this.SELECTED_PLANE = null;
    this.CURRENTLY_SPEAKING_PLANE = null;
  }

  preload() {
    switch (this.SCENE_KEY) {
      case RadarSceneKeys.RADAR_06s:
        this.load.image(AssetKeys.RADAR_06s, img_Radar06s);
        this.ASSET_KEY = AssetKeys.RADAR_06s;
        break;
      default:
        throw new Error(
          `There is a problem with the SCENE_KEY provided for the RadarScene: ${this.SCENE_KEY}`
        );
    }
    this.load.image(AssetKeys.PPS_SYMBOL, img_PpsSymbol);
    this.load.bitmapFont(
      AssetKeys.FONT_DEJAVU_MONO_BOLD,
      fontTexture_DejaVuMonoBold,
      fontXml_DejaVuMonoBold
    );
  }

  create() {
    // Create: Background Image
    this.RadarBg = new RadarBg(this, this.ASSET_KEY);
    this.RadarBg.setInteractive();

    // Create: Waypoints Layer
    switch (this.SCENE_KEY) {
      case RadarSceneKeys.RADAR_06s:
        Rwy06sWaypointList.forEach((waypointData) => {
          this.Waypoints.push(new Waypoint(this, waypointData));
        });
        break;
      default:
        throw new Error(
          `There is a problem with the SCENE_KEY provided for the RadarScene: ${this.SCENE_KEY}`
        );
    }

    // Create: RunwayOrigins
    this.RunwayOrigins = new RunwayOrigins(this);

    // Create: Buttons
    const debugButton = new DebugButton(this);

    // Create: Developer components
    const pointerCoordLogger = new PointerCoordinateLogger(this);

    // TEMP Create: Test Plane
    // const newPlane = new Plane(this, testPlaneProps, this.Options);
    // this.PlaneList.addMultiple([newPlane]);

    // On CustomPhaserEvent: PLANE_SELECTED
    this.events.on(PhaserCustomEvents.PLANE_SELECTED, (plane: Plane) => {
      if (plane instanceof Plane) {
        if (this.SELECTED_PLANE) {
          this.SELECTED_PLANE.IS_SELECTED = false;
          this.SELECTED_PLANE.setDepth(10);
          this.SELECTED_PLANE = null;
        }
        this.SELECTED_PLANE = plane;
        plane.IS_SELECTED = true;
        plane.setDepth(999);
      } else {
        throw new Error(
          `A Plane object was not passed to the PLANE_SELECTED event emitter. Argument "${plane}" is of type ${typeof plane}`
        );
      }
    });

    // On CustomPhaserEvent: PILOT_SPEECH
    this.events.on(
      PhaserCustomEvents.PILOT_SPEECH,
      (speechData: { text: string; plane: Plane; isCheckIn: boolean }) => {
        const isTextString = typeof speechData.text === 'string';
        const isPlane = speechData.plane instanceof Plane;
        if (isTextString && isPlane) {
          this.SpeechQueue.push(speechData);
        } else {
          throw new Error(
            `Incorrect PILOT_SPEECH data was emitted: ${
              (speechData.text, speechData.plane)
            }`
          );
        }
      }
    );

    // On CustomPhaserEvent: ACID_CLICKED
    this.events.on(
      PhaserCustomEvents.ACID_CLICKED,
      ({ plane, pointer }: { plane: Plane; pointer: Phaser.Input.Pointer }) => {
        if (pointer.rightButtonDown()) return;
        if (pointer.middleButtonDown()) return;

        if (this.FiledRouteLine) {
          this.FiledRouteLine.customDestroy();
        }

        this.FiledRouteLine = new FiledRouteLine(plane);
      }
    );

    // On Input: Clicked RadarBg
    this.RadarBg.on(DomEvents.POINTER_DOWN, (pointer: Phaser.Input.Pointer) => {
      if (pointer.rightButtonDown()) {
        if (this.FiledRouteLine) {
          this.FiledRouteLine.customDestroy();
          this.FiledRouteLine = null;
        }

        if (this.SELECTED_PLANE instanceof Plane) {
          this.SELECTED_PLANE.IS_SELECTED = false;
          this.SELECTED_PLANE.setDepth(10);
        }
        this.SELECTED_PLANE = null;
      }

      if (this.SELECTED_PLANE instanceof Plane) {
        if (!this.SELECTED_PLANE.CommandMenu.SELECTED_BUTTON) {
          this.SELECTED_PLANE.IS_SELECTED = false;
          this.SELECTED_PLANE = null;
        }
      }
    });

    // On React Event: AIRBORNE
    this.events.on(ReactCustomEvents.AIRBORNE, (fde: DepFDE) => {
      const planeProps = genPlanePropsFromFDE(fde);

      const airbornePlane = new Plane(this, planeProps, this.Options);
      this.PlaneList.push(airbornePlane);
    });

    // On React Event: REFRESH
    this.events.on(ReactCustomEvents.REFRESH, () => {
      window.location.reload();
    });

    // On React Event: PAUSE
    this.events.on(ReactCustomEvents.PAUSE, () => {
      this.scene.pause();
    });
    // On React Event: UNPAUSE
    this.events.on(ReactCustomEvents.UNPAUSE, () => {
      this.scene.resume();
    });
  }

  update() {
    this.handleSpeechQueue();
    this.toggleDebug();
  }

  private resetRadar(radarScene: RadarSceneKeys) {
    this.Waypoints.forEach((wp) => wp.destroy());
    this.PlaneList.forEach((plane) => {
      plane.destroy(true);
    });

    this.SCENE_KEY = radarScene;
    this.ASSET_KEY = AssetKeys.RADAR_06s; // fallback value

    this.RUNWAY_CONFIG = radarScene;
    this.SELECTED_PLANE = null;
    this.CURRENTLY_SPEAKING_PLANE = null;
    this.scene.restart({ radarScene });
  }

  private handleSpeechQueue() {
    if (this.Speech.IS_TALKING) return;

    if (this.SpeechQueue.length === 0) {
      this.CURRENTLY_SPEAKING_PLANE = null;
      return;
    }

    const currSpeechData = this.SpeechQueue.shift();
    if (currSpeechData === undefined) return;

    this.CURRENTLY_SPEAKING_PLANE = currSpeechData.plane;

    // On Check-ins only
    if (currSpeechData.isCheckIn) {
      this.Speech.speak(currSpeechData.text, currSpeechData.plane);
      return;
    }

    // Create combined sentence
    const combinedSentence = [];
    combinedSentence.push(currSpeechData.text);

    while (
      this.SpeechQueue[0] &&
      currSpeechData.plane.name === this.SpeechQueue[0].plane.name
    ) {
      const nextSpeechData = this.SpeechQueue.shift();
      combinedSentence.push(nextSpeechData?.text);
      continue;
    }

    combinedSentence.push(currSpeechData.plane.Properties.acId.spoken);

    const finalSpokenSentence = combinedSentence.join(' ');

    this.Speech.speak(finalSpokenSentence, currSpeechData.plane);
  }

  elevateWaypointsIfDirectToCommandIsSelected() {
    if (this.SELECTED_PLANE) {
      if (this.SELECTED_PLANE.IS_PENDING_DIRECT_TO_COMMAND) {
        this.Waypoints.forEach((wp) => {
          wp.setDepth(1000000);
        });
      }
      return;
    } else {
      this.Waypoints.forEach((wp) => {
        wp.setDepth(1);
      });
    }
  }

  private toggleDebug() {
    if (this.Options.isDebug) {
      this.RunwayOrigins.showDots();
      return;
    }
    this.RunwayOrigins.hideDots();
  }
}

// Create object: Plane
const testPlaneProps: PlaneProperties = {
  acId: { code: 'ACA123', spoken: 'Air Canada 1 2 3' },
  acType: AcType.JET,
  acModel: AcModel.A343,
  acWtc: AcWTC.M,
  filedData: {
    alt: 300,
    sidName: SidName.AVSEP,
    speed: 300,
    destination: 'CYOW',
  },
  takeoffData: {
    depRunway: DepRunwayYYZ.RWY_05,
    assignedAlt: 5000,
    assignedHeading: 330,
    sidOrPropTurnHeading: null,
    isNADP1: false,
  },
  handoffData: {
    alt: 150,
    sector: AdjacentSectors.HM,
  },
};
