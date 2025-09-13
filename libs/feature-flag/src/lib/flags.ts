// Dynamic import to avoid circular dependency issues during build
export const FEATURE_ONE_FLAG = true;

export const getFeatureResult = () => {
  return 'feature result';
};

// This creates a circular dependency that Nx Cloud can detect
export const getFeatureFromOne = async () => {
  const { feature } = await import('@angular-connect/feature-one');
  return feature();
};