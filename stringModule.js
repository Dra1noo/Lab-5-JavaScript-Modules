// string utilities, nothing wild

export function toUpperCase(str) {
  // force to string then upper it
  return String(str).toUpperCase();
}

export function toLowerCase(str) {
  return String(str).toLowerCase();
}

// (optional) tiny helper to trim and normalize spaces
export function tidy(str) {
  return String(str).trim().replace(/\s+/g, ' ');
}
