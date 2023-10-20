import { useCallback, useState } from "react";

function useGeolocation() {
  const [position, setPosition] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getPosition = useCallback(function () {
    setIsLoading(true);
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition((pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      });
  }, []);

  return { position, getPosition, isLoading };
}

export default useGeolocation;
