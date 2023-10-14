const AccountOptions = () =>{
    return (<div className="absolute bottom-full left-0 z-20 mb-1 w-full overflow-hidden rounded-md bg-gray-600 pb-1.5 pt-1 outline-none dark:bg-gray-950 opacity-100 translate-y-0" >
    <nav >
      <a  className="flex px-3 min-h-[44px] py-1 text-white  items-center gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm hover:bg-gray-500 dark:hover:bg-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" className="h-4 w-4 shrink-0" fill="none">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21.44 15.707a2 2 0 0 1-2 2h-12l-4 4v-16a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z"></path>
          <path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" d="M7.825 11.375a.687.687 0 1 0 0-1.375.687.687 0 0 0 0 1.375ZM12.5 11.375a.687.687 0 1 0 0-1.375.687.687 0 0 0 0 1.375ZM17.175 11.375a.687.687 0 1 0 0-1.375.687.687 0 0 0 0 1.375Z"></path>
        </svg>Custom instructions
      </a>
      <a  className="flex px-3 min-h-[44px] py-1 text-white items-center gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33a1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09a1.65 1.65 0 0 0-1-1.51a1.65 1.65 0 0 0-.33-1.82a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09a1.65 1.65 0 0 0 1.51 1a1.65 1.65 0 0 0 .33 1.82a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51a1.65 1.65 0 0 0 1.82-.33a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>Settings
      </a>
      <div className="my-1.5 h-px dark:bg-white/20 bg-black/20" role="none"></div>
      <a  className="flex px-3 min-h-[44px] text-white py-1 items-center gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>Log out
      </a>
    </nav>
  </div>
  );
}

export default AccountOptions