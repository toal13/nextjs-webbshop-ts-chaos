export default function createRandomId() {
  return `id_${Date.now()}_${Math.random().toString(10)}`;
}
