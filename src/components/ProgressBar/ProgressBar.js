import React from 'react'

const ProgressBar = (props) => {
    const { bgcolor, completed } = props;
  
    const containerStyles = {
      height: 10,
      width: '94%',
      backgroundColor: "#fff",
      borderRadius: 50,
      marginTop: 20,
      marginLeft: 'auto',
      overflow: 'hidden'
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor ?? '#cbcdff',
      borderRadius: 50,
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;