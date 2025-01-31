import React, { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ToggleButton , StyledCodeBlock } from "./styles";

interface CodeBlockProps {
  code: string;
  initialNightMode?: boolean; // Optional prop to set initial mode
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, initialNightMode = false }) => {
  const [isNightMode, setIsNightMode] = useState(initialNightMode);

  const toggleNightMode = () => {
    setIsNightMode((prev) => !prev);
  };

  return (
    <div>
      <StyledCodeBlock isNightMode={isNightMode}>
      <ToggleButton onClick={toggleNightMode} aria-label="Toggle Night Mode">
        {isNightMode ? <FaSun color="#ffdd57" /> : <FaMoon color="#555" />}
      </ToggleButton>
        {code}
        </StyledCodeBlock>
    </div>
  );
};

export default CodeBlock;
