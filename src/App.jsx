import { useState, useCallback, useEffect, useRef } from 'react';

import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  // useRef hook
  const copPasswordClip = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  };

  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'JugnRituAkshitAkshanshHari';

    if (numberAllowed) {
      str += '2390';
    }
    if (charAllowed) {
      str += '!@#$%^&*()_';
    }

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      console.log('math', char);

      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <h1 className="text-white text-center text-4xl">Password Generator</h1>
      <div className="text-center w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-700 text-orange-500">
        {' '}
        dddddd
        <div className="flex shadowrounded-lg overflow-hidden m-4 w-full p-4">
          <input
            type="text"
            value={password}
            placeholder="password"
            className="bg-gray-100 py-1 px-3 outline-none w-sm"
            ref={passwordRef}
          />
          <button
            onClick={copPasswordClip}
            className="outline-none bg-blue-800 text-white p-2 shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              value={length}
              min={6}
              max={100}
              placeholder="password"
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="">Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
              name=""
              id=""
            />
            <label htmlFor="number">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charactersInput"
              className="cursor-pointer"
              onChange={(e) => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charactersInput">character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
