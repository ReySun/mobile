export type jsType = 'Null' | 'Undefined' | 'String' | 'Number' | 'Boolean' | 'Array' | 'Object' | 'Function';
export function typeOf(variable?: any) {
  return Object.prototype.toString.call(variable).slice(8, -1);
}

export function isType(variable: any, type: jsType) {
  return typeOf(variable) === type;
}