import { lazy, Suspense } from "react";

// Lazy load 3D components for performance
const FloatingRocketLazy = lazy(() => import("./FloatingRocket"));
const AnalyticsCubeLazy = lazy(() => import("./AnalyticsCube"));
const GrowthGraphLazy = lazy(() => import("./GrowthGraph"));

// Wrapper components with Suspense
export const FloatingRocket = ({ className = "" }: { className?: string }) => (
  <Suspense fallback={<div className={`w-full h-full ${className}`} />}>
    <FloatingRocketLazy className={className} />
  </Suspense>
);

export const AnalyticsCube = ({ className = "" }: { className?: string }) => (
  <Suspense fallback={<div className={`w-full h-full ${className}`} />}>
    <AnalyticsCubeLazy className={className} />
  </Suspense>
);

export const GrowthGraph = ({ className = "" }: { className?: string }) => (
  <Suspense fallback={<div className={`w-full h-full ${className}`} />}>
    <GrowthGraphLazy className={className} />
  </Suspense>
);
