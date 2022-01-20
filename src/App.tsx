import { useState } from 'react';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';

function App() {
  const [data, setData] = useState('Söker...');
  const [scanning, setScanning] = useState(false);
  return (
    <div className='container'>
      {!scanning && (
        <button onClick={() => setScanning(true)}>Percy's knapp</button>
      )}
      {scanning && (
        <>
          <button onClick={() => setScanning(false)}>Stäng scanner</button>

          <BarcodeScannerComponent
            width={300}
            height={300}
            onUpdate={(err, result) =>
              result ? setData(result.getText()) : setData('Söker...')
            }
          />

          <h3>Resultat (filma en QR kod!!)</h3>
          <div className='results__container'>{data}</div>
        </>
      )}
    </div>
  );
}

export default App;
