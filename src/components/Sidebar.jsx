import React, { useState } from 'react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    return (
    <div>
      <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>
      <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-900 dark:bg-gray-800">
            <div className='flex items-center justify-between pb-[40px]'>
              <svg width="70" height="22" viewBox="0 0 70 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_56_109)">
                <path d="M47.3547 0.429688H51.6828V21.0174H47.3547V0.429688Z" fill="white" fill-opacity="0.8"/>
                <path d="M54.7659 0.429688V4.40709H60.2189V21.0167H64.547V4.40709H70V0.429688H54.7659Z" fill="white" fill-opacity="0.8"/>
                <mask id="mask0_56_109" style={{maskType: 'mask-type:luminance'}} maskUnits="userSpaceOnUse" x="0" y="0" width="70" height="22">
                <path d="M0 0.429504H70V21.5709H0V0.429504Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_56_109)">
                <path d="M26.864 15.8052V12.1029H19.6645V0.981262H15.6479V13.3748C15.6479 13.694 15.7107 14.01 15.8328 14.3049C15.9549 14.5999 16.1339 14.8678 16.3596 15.0935C16.5853 15.3192 16.8533 15.4982 17.1482 15.6203C17.4431 15.7425 17.7592 15.8053 18.0783 15.8052H26.864Z" fill="white"/>
                <path d="M35.4767 16.3591C37.0521 16.3593 38.5922 15.8922 39.9022 15.0171C41.2121 14.1419 42.2332 12.898 42.8362 11.4425C43.4391 9.98705 43.597 8.38547 43.2897 6.84031C42.9825 5.29514 42.2239 3.8758 41.11 2.76176C39.996 1.64772 38.5767 0.889033 37.0316 0.581634C35.4865 0.274234 33.8849 0.431933 32.4294 1.03479C30.9738 1.63764 29.7298 2.65857 28.8545 3.96847C27.9793 5.27838 27.5121 6.81841 27.5121 8.39383C27.512 9.43982 27.7179 10.4756 28.1182 11.442C28.5184 12.4084 29.105 13.2865 29.8446 14.0261C30.5842 14.7658 31.4622 15.3525 32.4286 15.7528C33.395 16.1531 34.4307 16.3591 35.4767 16.3591ZM35.4767 4.10913C36.5926 4.12334 37.6572 4.58021 38.4363 5.37926C39.2154 6.17831 39.6452 7.25411 39.6312 8.37003C39.6456 8.92468 39.5488 9.4766 39.3465 9.99324C39.1442 10.5099 38.8404 10.9808 38.4532 11.3782C38.066 11.7756 37.6032 12.0914 37.092 12.307C36.5807 12.5227 36.0315 12.6338 35.4767 12.6338C34.9218 12.6338 34.3726 12.5227 33.8614 12.307C33.3502 12.0914 32.8873 11.7756 32.5001 11.3782C32.1129 10.9808 31.8092 10.5099 31.6069 9.99324C31.4046 9.4766 31.3078 8.92468 31.3222 8.37003C31.3087 7.25423 31.739 6.17877 32.5183 5.38013C33.2977 4.58149 34.3623 4.12507 35.4781 4.11123" fill="white"/>
                <path d="M4.1202 11.2477C4.1202 9.5533 4.79331 7.92826 5.99147 6.7301C7.18962 5.53195 8.81466 4.85884 10.5091 4.85884H12.9689V0.982239H10.2942C7.56401 0.982239 4.94564 2.0668 3.0151 3.99734C1.08456 5.92788 0 8.54625 0 11.2764C0 14.0066 1.08456 16.625 3.0151 18.5555C4.94564 20.4861 7.56401 21.5706 10.2942 21.5706H43.442V17.6366H10.5091C8.81466 17.6366 7.18962 16.9635 5.99147 15.7654C4.79331 14.5672 4.1202 12.9422 4.1202 11.2477Z" fill="white"/>
                </g>
                </g>
                <defs>
                <clipPath id="clip0_56_109">
                <rect width="70" height="21" fill="white" transform="translate(0 0.5)"/>
                </clipPath>
                </defs>
              </svg>
              <button className='sm:hidden block' data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 18V16H16V18H3ZM19.6 17L14.6 12L19.6 7L21 8.4L17.4 12L21 15.6L19.6 17ZM3 13V11H13V13H3ZM3 8V6H16V8H3Z" fill="white"/>
                </svg>
              </button>
              <button className='hidden sm:block'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 18V16H16V18H3ZM19.6 17L14.6 12L19.6 7L21 8.4L17.4 12L21 15.6L19.6 17ZM3 13V11H13V13H3ZM3 8V6H16V8H3Z" fill="white"/>
                </svg>
              </button>
            </div>
            <ul class="space-y-2 font-medium">
              <div className="rounded-lg p-1 bg-gray-800">
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-white rounded-lg group"
                    onClick={toggleDropdown}
                  >
                    <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 8H4m0-2v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-5.032a1 1 0 0 1-.768-.36l-1.9-2.28a1 1 0 0 0-.768-.36H5a1 1 0 0 0-1 1Z"/>
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap">Systems</span>
                  </a>
                </li>
                {isOpen && (
                    <>
                      <li>
                      <a href="#" class="flex items-center p-2 rounded-lg text-gray-500 dark:text-white hover:bg-lime-400 dark:hover:bg-gray-700 dark:hover:text-white group">
                        <svg class="w-6 h-6 stroke-gray-500 dark:stroke-gray-500 group-hover:stroke-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path fill="hover:text-gray-900" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857Zm10 0A1.857 1.857 0 0 0 13 14.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 19.143v-4.286A1.857 1.857 0 0 0 19.143 13h-4.286Z"/>
                        </svg>
                        <span class="flex-1 ms-3 whitespace-nowrap">System Code</span>
                      </a>
                  </li>
                  <li>
                    <a href="#" class="flex items-center p-2 rounded-lg group text-gray-500 rounded-lg dark:text-white hover:bg-lime-400 dark:hover:bg-gray-700 group">
                      <svg class="w-6 h-6 stroke-gray-500 dark:stroke-gray-500 group-hover:stroke-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path fill-rule="evenodd" d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857Zm10 0A1.857 1.857 0 0 0 13 14.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 19.143v-4.286A1.857 1.857 0 0 0 19.143 13h-4.286Z" clip-rule="evenodd"/>
                        </svg>
                        <span class="flex-1 ms-3 whitespace-nowrap">Properties</span>
                      </a>
                  </li>
                  <li>
                    <a href="#" class="flex items-center p-2 rounded-lg group text-gray-500 rounded-lg dark:text-white hover:bg-lime-400 dark:hover:bg-gray-700 group">
                        <svg class="w-6 h-6 stroke-gray-500 dark:stroke-gray-500 group-hover:stroke-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path fill-rule="evenodd" d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857Zm10 0A1.857 1.857 0 0 0 13 14.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 19.143v-4.286A1.857 1.857 0 0 0 19.143 13h-4.286Z" clip-rule="evenodd"/>
                        </svg>
                        <span class="flex-1 ms-3 whitespace-nowrap">Menus</span>
                      </a>
                  </li>
                  <li>
                    <a href="#" class="flex items-center p-2 rounded-lg group text-gray-500 rounded-lg dark:text-white hover:bg-lime-400 dark:hover:bg-gray-700 group">
                      <svg class="w-6 h-6 stroke-gray-500 dark:stroke-gray-500 group-hover:stroke-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857Zm10 0A1.857 1.857 0 0 0 13 14.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 19.143v-4.286A1.857 1.857 0 0 0 19.143 13h-4.286Z" clip-rule="evenodd"/>
                      </svg>
                      <span class="flex-1 ms-3 whitespace-nowrap">APIList</span>
                    </a>
                  </li>
                    </>
                )}
              </div>
              <li class="relative">
                <a href="#" class="flex items-center p-2 rounded-lg group text-gray-500 rounded-lg dark:text-white dark:hover:bg-gray-700 group">
                  <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="text-gray-500" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 8H4m0-2v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-5.032a1 1 0 0 1-.768-.36l-1.9-2.28a1 1 0 0 0-.768-.36H5a1 1 0 0 0-1 1Z"/>
                    </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap">Users & Group</span>
                </a>
              </li>
              <li>
                <a href="#" class="flex items-center p-2 rounded-lg group text-gray-500 rounded-lg dark:text-white dark:hover:bg-gray-700 group">
                    <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="text-gray-500" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 8H4m0-2v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-5.032a1 1 0 0 1-.768-.36l-1.9-2.28a1 1 0 0 0-.768-.36H5a1 1 0 0 0-1 1Z"/>
                    </svg>
                    <span class="flex-1 ms-3 whitespace-nowrap">Competition</span>
                  </a>
              </li>
              
            </ul>
        </div>
      </aside>
    </div>
    );
  };

  export default Sidebar;