import { AcWTC } from '../types/AircraftTypes';

export function convertAcWtcToSymbol(acWtc: AcWTC) {
  switch (acWtc) {
    case AcWTC.S:
      return '$';
    case AcWTC.H:
      return '+';
    case AcWTC.L:
      return '-';
    default:
      return '';
  }
}
