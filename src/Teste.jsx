import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Teste(){
    const [percentage, setPercentage] = useState(0);
 
  useEffect(() => {
      if (percentage < 100) {
        setPercentage(percentage + 1);
      }
  }, [percentage]);

    return(
       
        <div style={{ width: 150, marginLeft: 70 }}>
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </div>
      
    );
}