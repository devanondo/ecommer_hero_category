import React, { useEffect } from "react";

type useMediaQueryProps = {
  query: "minWidth" | "maxWidth";
  value: number;
};

export function useMediaQuery({ query, value }: useMediaQueryProps) {
  const [screenSize, setScreenSize] = React.useState<boolean>(false);

  const getScreenSizeWithQuery = (
    srt: "minWidth" | "maxWidth",
    value: number,
    screenSize: number
  ) => {
    switch (srt) {
      case "minWidth":
        if (Number(value) < Number(screenSize)) {
          return true;
        } else {
          return false;
        }

      case "maxWidth":
        if (Number(value) > Number(screenSize)) {
          return true;
        } else {
          return false;
        }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSizeWithQuery(query, value, window.innerWidth));
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return screenSize;
}
