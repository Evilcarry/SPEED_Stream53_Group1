import React from 'react';
import DropdownItems from './DropdownItems';

  const optionItems = DropdownItems.map((SEPractice) =>
                <option key={SEPractice.practice}>{SEPractice.practice}</option>
            );
  const Dropdown = () => {
    return (
        <div>
             <select>
                <option value="">Select an SE Practice </option>
                {optionItems}
             </select>
         </div>

    )
  }
  export default Dropdown
