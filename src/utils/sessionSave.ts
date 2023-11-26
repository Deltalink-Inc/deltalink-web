export function sessionSaveData(key: string, data: any) {
  sessionStorage.setItem(key, JSON.stringify(data));
}
export function sessionRecoveryData(key: string) {
  return sessionStorage.getItem(key);
}
