import React, { useState } from "react";
import { ChevronDown, ChevronUp, Star } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, toggleArrayFilter } from "../../ReduxStore/counter/filterbar";
import { productData } from "../../api/productData";
import RangeSlider from "./RangeSlider";
import {
  FormGroup,
  FormControlLabel,
  FormControl,
  Checkbox,
  Radio,
  RadioGroup,
} from "@mui/material";

const FilterSidebar = ({ filterCategory = "Electronics" }) => {
  const filtertype = useSelector((state) => state.filterbar.producttype);
  const dispatch = useDispatch();

  // 1️⃣ Prepare unique filter options from products
  const categoryItems = productData.filter(
    (item) => item.category === filterCategory
  );

  const subcategories = [...new Set(categoryItems.map((item) => item.subcategory))];
  const brand = [...new Set(categoryItems.map((item) => item.brand))];
  const features = [...new Set(categoryItems.map((item) => item.feature))];

  // 2️⃣ State to manage all filters
  const [filters, setFilters] = useState({
    subcategories: [],
    brands: [],
    features: [],
    condition: "any",
    rating: null,
    priceRange: [0, 1000],
  });

  // 3️⃣ Expand/collapse UI sections
  const [expanded, setExpanded] = useState({
    category: true,
    brands: true,
    features: true,
    priceRange: true,
    condition: true,
    ratings: true,
  });

  const toggleSection = (section) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // 4️⃣ Generic checkbox toggle handler
  const handleCheckboxChange = (key, value) => {
    setFilters((prev) => {
      const newArray = prev[key].includes(value)
        ? prev[key].filter((v) => v !== value)
        : [...prev[key], value];
      return { ...prev, [key]: newArray };
    });

    dispatch(toggleArrayFilter({ key, value }));
  };

  // 5️⃣ Condition & Rating
  const handleConditionChange = (e) => {
    const value = e.target.value;
    setFilters((prev) => ({ ...prev, condition: value }));
    dispatch(setFilter({ key: "condition", value }));
  };


  const handleRatingChange = (rating) => {
    const newValue = filters.rating === rating ? null : rating;
    setFilters((prev) => ({ ...prev, rating: newValue }));
    dispatch(setFilter({ key: "rating", value: newValue }));
  };

  // 6️⃣ Price Range
  const handlePriceChange = (range) => {
    setFilters((prev) => ({ ...prev, priceRange: range }));
    dispatch(setFilter({ key: "priceRange", value: range }));
  };

  // ⭐ Utility for rendering stars
  const renderStars = (rating) => (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-3.5 h-3.5 ${star <= rating
            ? "fill-orange-400 text-orange-400"
            : "fill-gray-200 text-gray-200"
            }`}
        />
      ))}
    </div>
  );

  // 📦 Reusable Filter Section
  const FilterSection = ({ title, sectionKey, children }) => (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="flex justify-between items-center w-full text-left py-3 px-1 hover:bg-gray-50 rounded"
      >
        <span className="text-sm font-medium text-gray-900">{title}</span>
        {expanded[sectionKey] ? (
          <ChevronUp className="w-4 h-4 text-gray-500" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-500" />
        )}
      </button>
      {expanded[sectionKey] && <div className="pb-3">{children}</div>}
    </div>
  );

  return (
    <div className="w-full overflow-hidden border-r border-gray-200 overflow-y-auto">
      <div className="p-4 space-y-3">

        {/* Subcategories */}
        <FilterSection title="Category" sectionKey="category">
          {subcategories.map((sub) => (
            <FormGroup key={sub}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.subcategories.includes(sub)}
                    onChange={() => handleCheckboxChange("subcategories", sub)}
                  />
                }
                label={sub}
              />
            </FormGroup>
          ))}
        </FilterSection>


        {/* Brands */}
        <FilterSection title="Brands" sectionKey="brands">
          {brand.map((brandItem,i) => (
            <FormGroup key={i}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.brands.includes(brandItem)}
                    onChange={() => handleCheckboxChange("brands", brandItem)}
                  />
                }
                label={brandItem}
              />
            </FormGroup>
          ))}
        </FilterSection>

        {/* Features */}
        <FilterSection title="Features" sectionKey="features">
          {features.map((feature) => (
            <FormGroup key={feature}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.features.includes(feature)}
                    onChange={() => handleCheckboxChange("features", feature)}
                  />
                }
                label={feature}
              />
            </FormGroup>
          ))}
        </FilterSection>

        {/* Price Range */}
        <FilterSection title="Price Range" sectionKey="priceRange">
          <RangeSlider value={filters.priceRange} onChange={handlePriceChange} />
        </FilterSection>

        {/* Condition */}
        <FilterSection title="Condition" sectionKey="condition">
          <FormControl>
            <RadioGroup
              value={filters.condition}
              onChange={(e) => handleConditionChange(e)}
            >
              {[
                { value: "any", label: "Any" },
                { value: "Refurbish", label: "Refurbished" },
                { value: "New", label: "Brand new" },
                { value: "Old", label: "Old items" },
              ].map((option) => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={<Radio />}
                  label={option.label}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </FilterSection>

        {/* Ratings */}
        <FilterSection title="Ratings" sectionKey="ratings">
          {[5, 4, 3, 2, 1].map((rating) => (
            <button
              key={rating}
              onClick={() => handleRatingChange(rating)}
              className={`flex items-center w-full p-2 rounded hover:bg-blue-100 ${filters.rating === rating
                ? "bg-blue-50 border border-blue-200"
                : ""
                }`}
            >
              {renderStars(rating)}
            </button>
          ))}
        </FilterSection>
      </div>
    </div>
  );
};

export default FilterSidebar;
