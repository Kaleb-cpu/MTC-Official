// Childcare age dropdown menu

import { useEffect, useState } from 'react';

type DropDownProps = {
    // residentPricing: string[];
    // nonResidentPricing: string[];
    ageGroups: string[];
    showDropDown: boolean;
    toggleDropDown: Function;
    ageGroupSelection: Function;
  };

  const DropDown = ({
    ageGroups,
    // residentPricing,
    ageGroupSelection,
  }: DropDownProps): JSX.Element => {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);
   
    const onClickHandler = (ageGroup: string): void => {
        ageGroupSelection(ageGroup);
      };
    
      useEffect(() => {
        setShowDropDown(showDropDown);
      }, [showDropDown]);
    
      return (
        <>
          <div className={showDropDown ? 'dropDown' : 'dropDown active'}>
            {ageGroups.map(
              (ageGroup: string, index: number): JSX.Element => {
                return (
                  <p
                    key={index}
                    onClick={(): void => {
                      onClickHandler(ageGroup);
                    }}
                  >
                    {ageGroup}
                  </p>
                );
              }
            )}
          </div>
        </>
      );
    };
    
    export default DropDown;
    