/**
 * Use Case: Feature Flags
 *
 * Problem:
 * Only the feature flag manager
 * should decide which features
 * are enabled.
 *
 * What You'll Learn:
 * - Module encapsulation
 * - Scope
 */

function createFeatureFlags() {
  const flags = {
    newCheckout: true,
    darkMode: false,
  };

  return {
    isEnabled(feature) {
      return flags[feature];
    },
  };
}

const features = createFeatureFlags();

console.log(features.isEnabled("newCheckout"));

console.log(features.isEnabled("darkMode"));