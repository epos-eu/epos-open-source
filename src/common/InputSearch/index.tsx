import React, { useState, ChangeEvent , useEffect , useRef } from 'react';
import { StyledInput, IconWrapper } from './styles'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
interface InputProps {
  onChangeCallback?: (inputValue: string) => void; // Optional callback for handling input changes
}

const SearchInput: React.FC<InputProps> = ({ onChangeCallback }) => {
  const [value, setValue] = useState<string>(''); // State to hold the input value
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Automatically focus the input field when the component is mounted
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  // Handler function to update state and invoke the callback
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    // Call the callback if provided
    if (onChangeCallback) {
      onChangeCallback(inputValue);
    }
  };
  return (
    <div style={{ position: 'relative' }}>
      <StyledInput
        type="text"
        value={value}
        ref={inputRef} 
        onChange={handleChange}
        placeholder="Type to search"
      />
      <IconWrapper>
        <FontAwesomeIcon icon={faSearch} />
      </IconWrapper>
    </div>
  );
};

export default SearchInput;

