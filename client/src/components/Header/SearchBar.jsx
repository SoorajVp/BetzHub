import SearchIcon from '../../assets/search2line.svg';

const SearchBar = () => {
  return (
      <div className='py-1'>
          <label className='mb-2 text-sm font-medium text-gray-900 sr-only '>
              Search
          </label>
          <div className='relative'>
              <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                  <img src={SearchIcon} alt='Search' className='w-4 h-4' />
              </div>
              <input
                  type='search'
                  id='default-search'
                  className='block w-full p-2 ps-10 text-xs text-gray-300 border border-gray-300 rounded-lg bg-slate-800'
                  placeholder='Events market, and more'
                  />
          </div>
      </div>
  )
}

export default SearchBar