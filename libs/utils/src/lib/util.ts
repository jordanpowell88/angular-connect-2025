// Dynamic import to avoid circular dependency issues during build
let FEATURE_ONE_FLAG = true;

export const util = () => {
    if (FEATURE_ONE_FLAG) {
        return 'special util';
    }

  return 'util';
};

// This creates a circular dependency that Nx Cloud can detect
export const getFeatureFlag = async () => {
  const { FEATURE_ONE_FLAG: flag } = await import('@angular-connect/feature-flag');
  return flag;
};