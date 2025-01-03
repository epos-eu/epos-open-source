import React, { ReactNode } from "react";
import { PopupContainer, PopupInnerContainer, PopupCloseBtn } from "./styles"; // Adjust import paths as necessary

interface PopupProps {
  trigger: boolean; // Determines if the popup is shown
  setTrigger: (value: boolean) => void; // Function to close the popup
  children: ReactNode; // Content to be displayed inside the popup
}

const Popup: React.FC<PopupProps> = ({ trigger, setTrigger, children }) => {
  if (!trigger) {
    return null; // Return null when the popup should not be displayed
  }
  const handleBackgroundClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).dataset.popupBackground) {
      setTrigger(false); // Close popup if clicked on the background
    }
  };
  return (
    <PopupContainer data-popup-background onClick={handleBackgroundClick}>
      <PopupInnerContainer>
        <PopupCloseBtn>
          <button onClick={() => setTrigger(false)}>X</button>
        </PopupCloseBtn>
        {children}
      </PopupInnerContainer>
    </PopupContainer>
  );
};

export default Popup;
