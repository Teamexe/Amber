import { useState, useEffect } from 'react';

const useScript= (src) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;

    const onScriptLoad = () => {
      setLoaded(true);
    };

    script.addEventListener('load', onScriptLoad);

    document.body.appendChild(script);

    return () => {
      script.removeEventListener('load', onScriptLoad);
      document.body.removeChild(script);
    };
  }, [src]);

  return loaded;
}

export default useScript;
