// Dynamic import to avoid circular dependency issues during build
export const feature = () => {
  return 'feature';
};

// This creates a circular dependency that Nx Cloud can detect
export const getUtilResult = async () => {
  const { util } = await import('@angular-connect/utils');
  return util();
};