import './App.css'
import Homepage from './pages/Homepage'
import { setupIntersectionObserver } from './components/IntersectionObserver';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const cleanupObserver = setupIntersectionObserver();

    // Clean up the observers when the component is unmounted
    return cleanupObserver;
  }, []);

  return (
    <>
      <Homepage />
    </>
  );
}

export default App;
