import { isElectron } from '@/lib/electron';

/**
 * Check if a connector type string identifies a Local FS connector.
 * Matches the backend identifiers: LOCAL_FS, local-fs, localfs, localfilesystem.
 */
export function isLocalFsConnectorType(connectorType: string): boolean {
  const normalized = connectorType.trim().replace(/[-_\s]+/g, '').toLowerCase();
  return (
    normalized === 'localfs' ||
    normalized === 'localfilesystem'
  );
}

/** Finder/Explorer reveal is only available in the Electron desktop app. */
export function canOpenLocalFsInNativeFileManager(): boolean {
  return isElectron();
}
