import React, { useState } from 'react';
import './Folder.css';

function Folder({ explorer }) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (e) => {
    e.preventDefault(); // Prevent the default behavior of the click event
    e.stopPropagation();
    
    // Your other logic here
  };

  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className='folder' onClick={() => setExpand(!expand)}>
          <span>
            📁{explorer.name}
          </span>
          <div>
            <button onClick={(e) => handleNewFolder(e)}>
              Folder+
            </button>
            <button onClick={(e) => handleNewFolder(e)}>
              File+
            </button>
          </div>
        </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {showInput.visible && (
            <div className='inputContainer'>
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                type='text'
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                className='inputContainer__input'
                autoFocus
              />
            </div>
          )}
          {explorer.items.map((exp) => (
            <Folder explorer={exp} key={exp.id} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <span className='file'>
        📄{explorer.name}
      </span>
    );
  }
}

export default Folder;
