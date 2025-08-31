import React, { useMemo, useState, useEffect, useRef, useCallback } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { ChevronDown, Filter, X } from 'lucide-react';
import alignjustify from '../assets/collection/icons/alignjustify.png';
import layoutgrid from '../assets/collection/icons/layoutgrid.png';
import FilterSidebar from '../components/colllection/FilterSidebar';
import ProductCard from '../components/colllection/ProductCard';
import NewsLetter from '../components/home/NewsLetter';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, removefilter } from '../ReduxStore/counter/filterbar';
import { productData } from '../api/productData';

export default function Collection() {
  const filtervalue = useSelector((state) => state.filterbar.activefilter);
  const category = useSelector((state) => state.filterbar.currentCateory);
  const productLength = useSelector((state) => state.filterbar.productLength);
  const dispatch = useDispatch();

  const [activeDropdown, setActiveDropdown] = useState(false);
  const [filterCategory, setfilterCategory] = useState('Electronics');
  const [productValue, setproductValue] = useState('subcategory');
  const [productKey, seproductKey] = useState('quantity');
  const [layout, setlayout] = useState(true);

  const productlength = useMemo(
    () => productData?.filter((item) => item[productKey] === productValue).length,
    [productKey, productValue]
  );

  // ✅ Properly handle category change (side effects out of useMemo)
  useEffect(() => {
    if (category !== null) {
      seproductKey('category');
      setproductValue(category);
      // setfilterCategory(category);
    }
  }, [category]);

  // ✅ Handle filter changes
  useEffect(() => {
    if (filtervalue && filtervalue.length > 0) {
      setproductValue(filtervalue[0]);
      seproductKey('subcategory');
    } else {
      seproductKey('quantity');
      setproductValue(1);
    }
  }, [filtervalue]);

  // ✅ Pure derived value (no state updates here)
  const activeCategory = useMemo(
    () => (category !== null ? category : 'Featured'),
    [category]
  );

  // Handlers optimized with useCallback
  const toggleDropdown = useCallback(
    (dropdown) => {
      setActiveDropdown((prev) => (prev === dropdown ? false : dropdown));
    },
    []
  );

  const handleFilterCat = useCallback(
    (item) => {
      if (item === 'All Categories') {
        setfilterCategory('Electronics');
        seproductKey('quantity');
        setproductValue(1);
        dispatch(setFilter({ key: 'category', value: null }));
      } else {
        seproductKey('category');
        setproductValue(item);
        setfilterCategory(item);
        dispatch(setFilter({ key: 'category', value: item }));
      }
      setActiveDropdown(true);
    },
    [dispatch]
  );

  const handleSort = useCallback(() => {
    setActiveDropdown((prev) => !prev);
  }, []);

  // Scroll drag effect
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - scrollEl.offsetLeft;
      const walk = (x - startX) * 1;
      scrollEl.scrollLeft = scrollLeft - walk;
    };

    const stopDragging = () => setIsDragging(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', stopDragging);
    document.addEventListener('mouseleave', stopDragging);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', stopDragging);
      document.removeEventListener('mouseleave', stopDragging);
    };
  }, [isDragging, startX, scrollLeft]);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {/* Sidebar */}
          <Grid className="max-lg:hidden w-[24%]">
            <Stack spacing={2}>
              <FilterSidebar filterCategory={filterCategory} />
            </Stack>
          </Grid>

          {/* Main Content */}
          <Grid className="max-lg:w-full w-[74%]">
            {/* Top Bar */}
            <div className="flex flex-row items-center max-md:px-10 max-sm:px-5 max-sm:-mx-[4vw] sm:-mx-[5vw] md:mx-[0] lg:mx-[0] justify-between bg-white p-2 border max-md:border-y border-gray-200 rounded-md">
              <div className="text-nowrap max-md:hidden">
                <p>
                  {productLength} items in{' '}
                  <span className="text-black font-semibold">
                    {productValue == 1 ? 'All Categories' : filterCategory }
                  </span>
                </p>
              </div>

              <div className="flex items-center md:justify-end gap-4 w-[60%] max-md:w-full">
                <label className="flex items-center max-md:hidden cursor-pointer text-nowrap" htmlFor="check">
                  <input id="check" type="checkbox" className="size-4 mx-3" />
                  <p className="select-none">Verified only</p>
                </label>

                {/* Dropdown */}
                <div className="relative border border-gray-300 rounded-sm max-md:w-1/2">
                  <button
                    onClick={() => toggleDropdown('Featured')}
                    className="flex items-center cursor-pointer justify-between gap-2 max-md:space-x-0 space-x-12 py-1 w-full px-2 hover:text-gray-900 transition-colors"
                  >
                    <span className="text-nowrap max-sm:text-sm">
                      {productKey === 'All Categories' ? productValue : activeCategory}
                    </span>
                    <span className="flex">
                      <ChevronDown className="size-4 max-md:hidden" />
                      <Filter className="size-4 text-gray-500 md:hidden" />
                    </span>
                  </button>
                  {activeDropdown === 'Featured' && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                      <div className="py-1">
                        {['All Categories', 'Electronics', 'Fashion', 'Sports', 'Furniture', 'Books', 'Health & Beauty'].map(
                          (item) => (
                            <button
                              key={item}
                              onClick={() => handleFilterCat(item)}
                              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                            >
                              {item}
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Layout Switch */}
                <div className="flex border border-gray-300 cursor-pointer rounded-sm min-w-max">
                  <img
                    src={layoutgrid}
                    onClick={() => setlayout(false)}
                    alt=""
                    className={`p-1 border-r ${layout === false ? 'bg-gray-200' : ''}`}
                  />
                  <img
                    src={alignjustify}
                    onClick={() => setlayout(true)}
                    alt=""
                    className={`p-1 ${layout === true ? 'bg-gray-200' : ''}`}
                  />
                </div>
              </div>
            </div>

            {/* Active Filters */}
            <div
              ref={scrollRef}
              onMouseDown={(e) => {
                setIsDragging(true);
                setStartX(e.pageX - scrollRef.current.offsetLeft);
                setScrollLeft(scrollRef.current.scrollLeft);
              }}
              className={`${
                filtervalue == '' ? 'hidden' : 'flex flex-row gap-2 py-4 overflow-x-scroll cursor-grab active:cursor-grabbing select-none'
              }`}
            >
              {filtervalue &&
                filtervalue.map((item, index) => (
                  <p
                    key={index}
                    className="py-1 px-4 bg-white border-2 border-blue-400 cursor-pointer rounded-lg text-nowrap text-gray-600"
                  >
                    {item}{' '}
                    <X onClick={() => dispatch(removefilter(item))} className="inline size-4" />
                  </p>
                ))}
            </div>

            {/* Product List */}
            <div className="mt-5 flex flex-col">
              <ProductCard productKey={productKey} productValue={productValue} layout={layout} />
            </div>
          </Grid>
        </Grid>
      </Box>
      <NewsLetter />
    </>
  );
}
