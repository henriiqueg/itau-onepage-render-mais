import { useState, useEffect } from 'react';

const useScript = (resourceUrl) => {
  const [pipwerks, setPipwerks] = useState();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = resourceUrl;
    script.async = false;
    script.onload = () => {
      console.log('SCORM API Wrapper loaded successfully');
      setPipwerks(window.pipwerks);
    };
    document.body.appendChild(script);
  }, [resourceUrl]);

  return { pipwerks };
};
export default useScript;
