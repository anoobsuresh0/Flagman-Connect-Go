import React, { useState } from 'react';

const Test = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <div className="col-span-2 grid">
      <h1 className="text-[25px] font-semibold mt-[8px]">Flagman Connect Go</h1>
      <p className="text-[15px]">Select the commands from the dropdown</p>

      <div className="mt-[100px] singleSearch flex items-center gap-2">
        <label className="text-[#808080] font-semibold">Enter Command :</label>
        <select
          name=""
          id="relevance"
          className="bg-white rounded-[3px] px-4 py-1"
          value={selectedOption || ''}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="">Select...</option>
          <option value="Connect">Connect</option>
          <option value="Status">Status</option>
          <option value="Download">Download</option>
          <option value="Update">Update</option>
        </select>
        {selectedOption === 'Connect' && (
          <input
            type="text"
            placeholder="Enter IP Address"
            className="bg-white rounded-[3px] px-4 py-1"
          />
        )}
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-[10px]">
          Send
        </button>
      </div>
    </div>
  );
};

export default Test;
