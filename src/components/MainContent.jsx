import React, { useState } from 'react';

const MainContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSytMgn, setIsSytMgn] = useState(false);
  const [issytmgn, setIssytmgn] = useState(false);
  const [isSyt, setIsSyt] = useState(false);
  const [isSytmCode, setIsSytmCode] = useState(false);
  const [isMenus, setIsMenus] = useState(false);
  const [isAPIList, setIsAPIList] = useState(false);
  const [isUsgrp, setIsUsgrp] = useState(false);
  const [isUsr, setIsUsr] = useState(false);
  const [isGrp, setIsGrp] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (value) => {
    if(value === 'isSytMgn') setIsSytMgn(!isSytMgn);
    if(value === 'issytmgn') setIssytmgn(!issytmgn);
    if(value === 'isSyt') setIsSyt(!isSyt);
    if(value === 'isSytmCode') setIsSytmCode(!isSytmCode);
    if(value === 'isMenus') setIsMenus(!isMenus);
    if(value === 'isAPIList') setIsAPIList(!isAPIList);
    if(value === 'isUsgrp') setIsUsgrp(!isUsgrp);
    if(value === 'isUsr') setIsUsr(!isUsr);
    if(value === 'isGrp') setIsGrp(!isGrp);
    if(value === 'isOpen') setIsOpen(!isOpen);
  };

  return (
    <div>
      <div class="p-4 sm:ml-64">
        <div class="bg-white rounded-lg">
            <nav class="flex justify-between pb-[40px]" aria-label="Breadcrumb">
              <ol class="inline-flex items-center mb-3 sm:mb-0">
                <li>
                  <div class="flex items-center">
                    <button>
                      <svg class="w-6 h-6 text-gray-300 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M3 6a2 2 0 0 1 2-2h5.532a2 2 0 0 1 1.536.72l1.9 2.28H3V6Zm0 3v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9H3Z" clip-rule="evenodd"/>
                      </svg>
                    </button>
                  </div>
                </li>
                <span class="mx-2 text-gray-400">/</span>
                <li aria-current="page">
                  <div class="flex items-center">
                  <button className='text-gray-900'>Menus</button>
                  </div>
                </li>
              </ol>
            </nav>

            <div className='flex items-center pb-4'>
              <div className='flex bg-blue-800 p-3 rounded-[50%] mr-3'>
                <svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857Zm10 0A1.857 1.857 0 0 0 13 14.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 19.143v-4.286A1.857 1.857 0 0 0 19.143 13h-4.286Z" clip-rule="evenodd"/>
                </svg>
              </div>
              <span className='font-bold text-2xl'>Menu</span>
            </div>
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Menu</label>
            <select style={{border: 'none', outline: 'none'}} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>system management</option>
              <option value="US">System Management</option>
              <option value="CA">System</option>
              <option value="FR">Users & Groups</option>
              <option value="DE">사용자 승인 상세</option>
            </select>

            <div class="grid lg:grid-cols-2 gap-4 my-4">
              <div class="">
                <div>
                  <div>
                    <button onClick={() => toggleDropdown('issytmgn')} type="button" class="text-white bg-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Expand All</button>
                    <button onClick={() => toggleDropdown('')} type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100">Collapse All</button>
                  </div>
                  <div onClick={() => toggleDropdown('issytmgn')} className='flex py-6 relative'>
                    <span className='pr-4'>
                      {issytmgn ?
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                        </svg> :
                          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                        </svg>
                      }
                    </span>
                    <h3>
                      system management
                    </h3>
                    {issytmgn && (
                      <div class="top-12 left-3 absolute border-l-2 border-b-2 h-10 w-4"></div>
                    )}
                  </div>
                  {issytmgn && (
                    <>
                      <div className='flex pb-6 ml-8 relative' onClick={() => toggleDropdown('isSytMgn')}>
                      <span className='pr-4'>
                        {isSytMgn ?
                          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                          </svg> :
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                          </svg>
                        }
                      </span>
                      <h3>
                        System Management
                      </h3>
                      {isSytMgn && (
                        <>
                          <div class="top-6 left-3 absolute border-l-2 border-b-2 border-gray-300 h-10 w-4"></div>
                          <div  className={"h-[518px] top-6 left-3 absolute border-l-2 border-b-2 border-gray-300 w-4 "} style={{height: ''}}></div>
                          <div style={{height: '800px'}} class="top-6 left-3 absolute border-l-2 border-b-2 border-gray-300 w-4"></div>
                        </>
                      )}
                      </div>
                      {isSytMgn && (
                          <>
                            <div style={{marginLeft: '70px'}} className='flex pb-6 relative' onClick={() => toggleDropdown('isSyt')}>
                              <span className='pr-4'>
                                {isSyt ?
                                  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                                  </svg> :
                                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                                  </svg>
                                }
                              </span>
                              <h3>
                                Systems
                              </h3>
                              {isSyt && (
                                <>
                                  <div class="top-5 left-3 absolute border-l-2 border-b-2 border-gray-300 h-10 w-4"></div>
                                  <div style={{width: '55px', height: '137px'}} class="top-5 left-3 absolute border-l-2 border-b-2 border-gray-300"></div>
                                  <div style={{width: '55px', height: '185px'}} class="top-5 left-3 absolute border-l-2 border-b-2 border-gray-300"></div>
                                  <div style={{height: '235px'}} class="top-5 left-3 absolute border-l-2 border-b-2 border-gray-300 w-4"></div>
                                  <div style={{height: '330px'}} class="top-5 left-3 absolute border-l-2 border-b-2 border-gray-300 w-4"></div>
                                </>
                              )}
                            </div>
                            {isSyt && (
                              <>
                                <div style={{marginLeft: '100px'}} className='flex pb-6 relative' onClick={() => toggleDropdown('isSytmCode')}>
                                  <span className='pr-4'>
                                    {isSytmCode ?
                                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                                      </svg> :
                                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                                      </svg>
                                    }
                                  </span>
                                  <div className='flex items-center'>
                                    <span className=''>Systems Code</span>
                                    <div className='flex bg-blue-800 p-1 rounded-[50%] ml-2'>
                                      <svg class="w-3 h-3 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
                                      </svg>
                                    </div>
                                  </div>
                                  {isSytmCode && (
                                    <div class="top-5 left-3 absolute border-l-2 border-b-2 border-gray-300 h-10 w-10"></div>
                                  )}
                                </div>
                                {isSytmCode && (
                                  <>
                                    <div style={{marginLeft: '165px'}} className='flex pb-6 relative'>
                                      <h3>
                                        Code Registration
                                      </h3>
                                    </div>
                                  </>
                                )}
                                <div style={{marginLeft: '145px'}} className='flex pb-6 relative'>
                                  <h3>
                                    Code Registration-2
                                  </h3>
                                </div>
                                <div style={{marginLeft: '145px'}} className='flex pb-6 relative'>
                                  <h3>
                                    Properties
                                  </h3>
                                </div>
                                <div style={{marginLeft: '100px'}} className='flex pb-6 relative' onClick={() => toggleDropdown('isMenus')}>
                                  <span className='pr-4'>
                                    {isMenus ?
                                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                                      </svg> :
                                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                                      </svg>
                                    }
                                  </span>
                                  <h3>
                                    Menus
                                  </h3>
                                {isMenus && (
                                  <>
                                    <div class="top-5 left-3 absolute border-l-2 border-b-2 border-gray-300 h-10 w-10"></div>
                                  </>
                                )}
                                </div>
                                {isMenus && (
                                  <>
                                    <div style={{marginLeft: '165px'}} className='flex pb-6 relative'>
                                      <h3>
                                        Menu Registration
                                      </h3>
                                    </div>
                                  </>
                                )}
                                <div style={{marginLeft: '100px'}} className='flex pb-6 relative' onClick={() => toggleDropdown('isAPIList')}>
                                  <span className='pr-4'>
                                    {isAPIList ?
                                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                                      </svg> :
                                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                                      </svg>
                                    }
                                  </span>
                                  <h3>
                                    API List
                                  </h3> 
                                  {isAPIList && (
                                    <>
                                      <div class="top-5 left-3 absolute border-l-2 border-b-2 border-gray-300 h-10 w-10"></div>
                                      <div style={{height: '89px'}} class="top-5 left-3 absolute border-l-2 border-b-2 border-gray-300 w-10"></div>
                                    </>
                                  )}
                                </div>
                                {isAPIList && (
                                  <>
                                    <div style={{marginLeft: '165px'}} className='flex pb-6 relative'>
                                      <h3>
                                        API Registration
                                      </h3>
                                    </div>
                                    <div style={{marginLeft: '165px'}} className='flex pb-6 relative'>
                                      <h3>
                                        API Edit
                                      </h3>
                                    </div>
                                  </>
                                )}
                              </>
                            )}
                            <div style={{marginLeft: '70px'}} className='flex pb-6 relative' onClick={() => toggleDropdown('isUsgrp')}>
                              <span className='pr-4'>
                                {isUsgrp ?
                                  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                                  </svg> :
                                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                                  </svg>
                                }
                              </span>
                              <h3>
                                Users & Groups
                              </h3>
                              {isUsgrp && (
                                <>
                                  <div class="top-5 left-3 absolute border-l-2 border-b-2 border-gray-300 h-10 w-4"></div>
                                  <div style={{height: '135px'}} class="top-5 left-3 absolute border-l-2 border-b-2 border-gray-300 w-4"></div>
                                  <div style={{height: '235px'}} class="top-5 left-3 absolute border-l-2 border-b-2 border-gray-300 w-4"></div>
                                </>
                              )}
                            </div>
                              {isUsgrp && (
                                <>
                                  <div style={{marginLeft: '100px'}} className='flex pb-6 relative' onClick={() => toggleDropdown('isUsr')}>
                                    <span className='pr-4'>
                                      {isUsr ?
                                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                                        </svg> :
                                          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                                        </svg>
                                      }
                                    </span>
                                    <h3>
                                      Users
                                    </h3>
                                    {isUsr && (
                                      <>
                                        <div class="top-5 left-3 absolute border-l-2 border-b-2 border-gray-300 h-10 w-10"></div>
                                      </>
                                    )}
                                  </div>
                                  {isUsr && (
                                    <>
                                      <div style={{marginLeft: '165px'}} className='flex pb-6 relative'>
                                        <h3>
                                          User Account Registration
                                        </h3>
                                      </div>
                                    </>
                                  )}
                                  <div style={{marginLeft: '100px'}} className='flex pb-6 relative' onClick={() => toggleDropdown('isGrp')}>
                                    <span className='pr-4'>
                                      {isGrp ?
                                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                                        </svg> :
                                          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                                        </svg>
                                      }
                                    </span>
                                    <h3>
                                      Group
                                    </h3>
                                    {isGrp && (
                                      <>
                                        <div class="top-5 left-3 absolute border-l-2 border-b-2 border-gray-300 h-10 w-10"></div>
                                      </>
                                    )}
                                    </div>
                                  {isGrp && (
                                    <>
                                      <div style={{marginLeft: '165px'}} className='flex pb-6 relative'>
                                        <h3>
                                          User Group Registration
                                        </h3>
                                      </div>
                                    </>
                                  )}
                                  <div style={{marginLeft: '100px'}} className='flex pb-6 relative' onClick={() => toggleDropdown('isOpen')}>
                                    <span className='pr-4'>
                                      {isOpen ?
                                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                                        </svg> :
                                          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                                        </svg>
                                      }
                                    </span>
                                    <h3>
                                      사용자 승인
                                    </h3>
                                  </div>
                                </>
                              )}
                            <div style={{marginLeft: '165px'}} className='flex pb-6 relative'>
                              <h3>
                                사용자 승인 상세
                              </h3>
                            </div>
                          </>
                        )}
                    </>
                  )}
                  
                  
                </div>
              </div>
              <div class="">
                <div className='mb-4'>
                    <label for="small-input" class="block mb-2 text-sm text-gray-900">Menu ID</label>
                    <input style={{border: 'none', outline: 'none'}} placeholder="56320ee9-6af6-11ed-a7ba-f220afe5e4a9KB" type="text" id="small-input" class="block w-full md:w-2/3 lg:w-full p-3 text-gray-900 border rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"/>
                </div>
                <div className='mb-4'>
                    <label for="small-input" class="block mb-2 text-sm text-gray-900">Depth</label>
                    <input style={{border: 'none', outline: 'none'}} placeholder="3" type="text" id="small-input" class="block w-full md:w-1/2 p-3 text-gray-900 border rounded-lg bg-gray-200 text-xs focus:ring-blue-500 focus:border-blue-500"/>
                </div>
                <div className='mb-2'>
                    <label for="small-input" class="block mb-2 text-sm text-gray-900">Parent Data</label>
                    <input style={{border: 'none', outline: 'none'}} placeholder="Systems" type="text" id="small-input" class="block w-full md:w-1/2 p-3 text-gray-900 border rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"/>
                </div>
                <div className='mb-4'>
                    <label for="small-input" class="block mb-2 text-sm text-gray-900">Name</label>
                    <input style={{border: 'none', outline: 'none'}} placeholder="System Code" type="text" id="small-input" class="block w-full md:w-1/2 p-3 text-gray-900 border rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"/>
                </div>
                <button type="button" class=" w-full md:w-1/2 text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">Save</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MainContent


