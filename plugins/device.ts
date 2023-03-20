import { defineNuxtPlugin, useRequestHeaders } from "#app";
import MobileDetect from "mobile-detect";

export default defineNuxtPlugin(() => {
  const headers = useRequestHeaders();

  const md = process.server ? new MobileDetect(headers["user-agent"] as string) : new MobileDetect(navigator.userAgent);
  const isMobile = md.phone() !== null || md.mobile() === "UnknownMobile";
  const isTablet = md.tablet() !== null || md.mobile() === "UnknownTablet";
  const isDesktop = !isMobile && !isTablet;

  return {
    provide: {
      isMobile: () => isMobile,
      isTablet: () => isTablet,
      isDesktop: () => isDesktop,
    },
  };
});
