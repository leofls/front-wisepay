import React  from 'react';
import ReactDOM  from 'react-dom';
import { calendar } from 'react-date-range';

import '../../node_modules/react-date-range/dist/styles.css'; // main style file
import '../../node_modules/react-date-range/dist/theme/default.css'; // theme css file



function DatePick(){
  const handleSelect = data => {
    console.log(date)
  };
  return (
    <div>
      <Calendar date={new Date()} onchange = {handleSelect} />;
    </div>
  );
}

ReactDOM.render(<DatePick />, document.getElementById("data-piker") );

