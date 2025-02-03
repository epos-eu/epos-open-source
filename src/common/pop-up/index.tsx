import React, { ReactNode, useEffect } from "react";
import { PopupContainer, PopupInnerContainer } from "./styles"; // Adjust import paths as necessary


interface PopupProps {
  trigger: boolean; // Determines if the popup is shown
  setTrigger: (value: boolean) => void; // Function to close the popup
  children: ReactNode; // Content to be displayed inside the popup
}

const Popup: React.FC<PopupProps> = ({ trigger, setTrigger, children }) => {
  // Add event listener for the Escape key
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setTrigger(false); // Close the popup
      }
    };

    // Add the event listener
    document.addEventListener("keydown", handleEscKey);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [setTrigger]);

  // Return null if popup is not triggered
  if (!trigger) {
    return null;
  }

  // Handle clicks on the background
  const handleBackgroundClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).dataset.popupBackground) {
      setTrigger(false); // Close popup if clicked on the background
    }
  };

  return (
    <PopupContainer data-popup-background onClick={handleBackgroundClick}>
      <PopupInnerContainer onClick={(e) => e.stopPropagation()}>
        {React.isValidElement(children)
          ? React.cloneElement(children) // Pass setTrigger to children
          : children}
      </PopupInnerContainer>
    </PopupContainer>
  );
};

export default Popup;


