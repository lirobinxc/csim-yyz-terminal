import { AcType } from '../types/AircraftTypes';

export enum FontColors {
  Blue = '#2f81e1ff',
  Pink = '#e54e99',
}

export function genWaypointTextStyles(
  acType: AcType
): Phaser.GameObjects.TextStyle {
  const styles = {
    fontFamily: 'monospace',
    fontSize: `14px`,
    color: acType === AcType.JET ? FontColors.Blue : FontColors.Pink,
  } as Phaser.GameObjects.TextStyle;

  return styles;
}