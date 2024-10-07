import React, { useEffect, useRef, useState } from 'react'

const Mnew = () => {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);
  
    useEffect(() => {
      count.current = count.current + 1;
      console.log(count.current)
    });
    return (
      <div>
            <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h1>Render Count: {count.current}</h1>
      </div>
    )
}

export default Mnew