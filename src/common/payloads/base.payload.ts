export interface BasePayload<T = unknown, P = unknown> {
  node?: T;

  problem?: P;
}
