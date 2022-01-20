import { useState } from 'react';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';

function App() {
  const [data, setData] = useState('Söker...');
  const [scanning, setScanning] = useState(false);
  return (
    <div className='container'>
      {!scanning && <button onClick={() => setScanning(true)}>Scanna</button>}
      {scanning && (
        <>
          <button onClick={() => setScanning(false)}>Stäng scanner</button>

          <BarcodeScannerComponent
            width={500}
            height={500}
            onUpdate={(err, result) =>
              result ? setData(result.getText()) : setData('Söker...')
            }
          />

          <h3>Scannar och hittar</h3>
          <p>{data}</p>
        </>
      )}
    </div>
  );
}

export default App;
