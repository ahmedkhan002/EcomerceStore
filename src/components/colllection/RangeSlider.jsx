import React, { useState } from "react";
import Slider from "@mui/material/Slider";

export default function RangeSlider({ value = [0, 1000], onChange }) {
  const [range, setRange] = useState(value);
  const [inputMin, setInputMin] = useState(value[0]);
  const [inputMax, setInputMax] = useState(value[1]);

  const handleSliderChange = (event, newValue) => {
    setRange(newValue);
    setInputMin(newValue[0]);
    setInputMax(newValue[1]);
  };

  const handleApply = () => {
    const min = Math.max(0, Math.min(Number(inputMin), 1000));
    const max = Math.max(min, Math.min(Number(inputMax), 1000));
    const newRange = [min, max];
    setRange(newRange);
    setInputMin(min);
    setInputMax(max);

    if (onChange) onChange(newRange); 
  };

  return (
    <div className="w-full mx-auto space-y-4">
      <h2 className="text-lg font-semibold text-gray-800">Select Price Range</h2>

      <Slider
        value={range}
        onChange={handleSliderChange} 
        valueLabelDisplay="auto"
        min={0}
        max={1000}
        className=""
      />

      <div className="flex justify-between gap-4">
        <div className="flex flex-col w-1/2">
          <label className="text-sm text-gray-600 mb-1">Min</label>
          <input
            type="number"
            className="border border-gray-200 bg-white rounded px-2 py-1"
            value={inputMin}
            onChange={(e) => setInputMin(Number(e.target.value))}
            min={0}
            max={1000}
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label className="text-sm text-gray-600 mb-1">Max</label>
          <input
            type="number"
            className="border border-gray-200 bg-white rounded px-2 py-1"
            value={inputMax}
            onChange={(e) => setInputMax(Number(e.target.value))}
            min={0}
            max={1000}
          />
        </div>
      </div>

      <button
        className="w-full bg-white font-semibold border border-gray-200 cursor-pointer hover:text-white text-blue-500 py-2 rounded-sm hover:bg-blue-500 transition"
        onClick={handleApply}
      >
        Apply
      </button>
    </div>
  );
}
