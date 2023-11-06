export function sessionSaveData(key, data) {
  sessionStorage.setItem(key, JSON.stringify(data));
}
export function sessionRecoveryData(key) {
  return sessionStorage.getItem(key);
}
