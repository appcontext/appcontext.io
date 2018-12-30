let Context: { [name: string]: any; } = {};

export const AppContext = {
  contains: (name: string): boolean => Context.hasOwnProperty(name),
  get: <T = any>(name: string): T => Context[name],
  reset: () => Context = {},
  set: <T = any>(name: string, resource: T) => Context[name] = resource,
};
