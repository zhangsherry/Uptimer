export const PUBLIC_SNAPSHOT_IDLE_RECONCILIATION_SECONDS = 8 * 60;

export function shouldReconcilePublicSnapshot(
  lastRefreshAt: number | null,
  now: number,
): boolean {
  if (!Number.isInteger(now) || now < 0) {
    return true;
  }
  if (lastRefreshAt === null || !Number.isInteger(lastRefreshAt) || lastRefreshAt > now) {
    return true;
  }
  return now - lastRefreshAt >= PUBLIC_SNAPSHOT_IDLE_RECONCILIATION_SECONDS;
}
