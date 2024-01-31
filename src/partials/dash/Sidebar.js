import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import SidebarLinkGroup from './SidebarLinkGroup';

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  const content = (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${ sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none' }`}
        aria-hidden='true'>
      </div>

      {/* Sidebar */}
      <div
        id='sidebar'
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-900 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-64'
        }`}
      >
        {/* Sidebar header */}
        <div className='flex justify-between mb-10 pr-3 sm:px-2'>
          {/* Close button */}
          <button
            ref={trigger}
            className='lg:hidden text-slate-500 hover:text-slate-400'
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls='sidebar'
            aria-expanded={sidebarOpen}
          >
            <span className='sr-only'>Close sidebar</span>
            <svg className='w-6 h-6 fill-current' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z' />
            </svg>
          </button>
          {/* Logo */}
          <NavLink end to='/' className='block'>
            <div className='flex items-center justify-center w-8 h-8 rounded-full bg-blue-100'>
              <img color='blue' width='16' height='16' src='/media/logos/logo-default.svg' alt='Logo' />
            </div>
          </NavLink>
        </div>

        {/* Links */}
        <div className='space-y-8'>
          {/* Pages group */}
          <div>
            <h3 className='text-xs uppercase text-slate-500 font-semibold pl-3'>
              <span className='hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6' aria-hidden='true'>
                •••
              </span>
              <span className='lg:hidden lg:sidebar-expanded:block 2xl:block'>Features</span>
            </h3>
            <ul className='mt-3'>
              {/* Dashboard */}
              <SidebarLinkGroup activecondition={pathname === '/dash'}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href='#0'
                        className={`block text-slate-200 truncate transition duration-150 ${
                          pathname === '/dash' ? 'hover:text-slate-200' : 'hover:text-white'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center'>
                            <svg className='shrink-0 h-5 w-5' viewBox='0 0 24 24'>
                              <path
                                className={`fill-current ${
                                  pathname === '/dash' ? 'text-blue-500' : 'text-slate-400'
                                }`}
                                d='M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z'
                              />
                              <path
                                className={`fill-current ${
                                  pathname === '/dash' ? 'text-blue-600' : 'text-slate-600'
                                }`}
                                d='M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z'
                              />
                              <path
                                className={`fill-current ${
                                  pathname === '/dash' ? 'text-blue-200' : 'text-slate-400'
                                }`}
                                d='M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z'
                              />
                            </svg>
                            <span className='text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                              Dashboard
                            </span>
                          </div>
                          {/* Icon */}
                          <div className='flex shrink-0 ml-2'>
                            <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'rotate-180'}`} viewBox='0 0 12 12'>
                              <path d='M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z' />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className='lg:hidden lg:sidebar-expanded:block 2xl:block'>
                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/dash'
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Welcome
                              </span>
                            </NavLink>
                          </li>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/dash/analytics'
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Analytics
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* Projects */}
              <SidebarLinkGroup activecondition={pathname.includes('projects')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href='#0'
                        className={`block text-slate-200 truncate transition duration-150 ${
                          pathname.includes('dash/projects') ? 'hover:text-slate-200' : 'hover:text-white'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center'>
                            <svg className='shrink-0 h-5 w-5' viewBox='0 0 24 24'>
                              <circle
                                className={`fill-current ${pathname.includes('projects') ? 'text-blue-500' : 'text-slate-600'}`}
                                cx='16'
                                cy='8'
                                r='8'
                              />
                              <circle
                                className={`fill-current ${pathname.includes('projects') ? 'text-blue-300' : 'text-slate-400'}`}
                                cx='8'
                                cy='16'
                                r='8'
                              />
                            </svg>
                            <span className='text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                              Projects
                            </span>
                          </div>
                          {/* Icon */}
                          <div className='flex shrink-0 ml-2'>
                            <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'rotate-180'}`} viewBox='0 0 12 12'>
                              <path d='M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z' />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className='lg:hidden lg:sidebar-expanded:block 2xl:block'>
                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/dash/projects/new'
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Add Project
                              </span>
                            </NavLink>
                          </li>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/dash/projects'
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Project List
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  )
                }}
              </SidebarLinkGroup>
              {/* Accounts */}
              <SidebarLinkGroup activecondition={pathname.includes('users')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href='#0'
                        className={`block text-slate-200 truncate transition duration-150 ${
                          pathname.includes('users') ? 'hover:text-slate-200' : 'hover:text-white'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center'>
                            <svg className='shrink-0 h-5 w-5' viewBox='0 0 24 24'>
                              <path
                                className={`fill-current ${pathname.includes('users') ? 'text-blue-500' : 'text-slate-600'}`}
                                d='M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z'
                              />
                              <path
                                className={`fill-current ${pathname.includes('users') ? 'text-blue-300' : 'text-slate-400'}`}
                                d='M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z'
                              />
                            </svg>
                            <span className='text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                              Accounts
                            </span>
                          </div>
                          {/* Icon */}
                          <div className='flex shrink-0 ml-2'>
                            <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'rotate-180'}`} viewBox='0 0 12 12'>
                              <path d='M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z' />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className='lg:hidden lg:sidebar-expanded:block 2xl:block'>
                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/dash/users/new'
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Users - New
                              </span>
                            </NavLink>
                          </li>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/dash/users'
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Users List
                              </span>
                            </NavLink>
                          </li>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/accounts/profile'
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Profile
                              </span>
                            </NavLink>
                          </li>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/accounts/feed'
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Feed
                              </span>
                            </NavLink>
                          </li>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/accounts/roles'
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Roles
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* Reports */}
              <SidebarLinkGroup activecondition={pathname.includes('reports')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href='#0'
                        className={`block text-slate-200 truncate transition duration-150 ${
                          pathname.includes('reports') ? 'hover:text-slate-200' : 'hover:text-white'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center'>
                            <svg className='shrink-0 h-5 w-5' viewBox='0 0 24 24'>
                              <path
                                className={`fill-current ${pathname.includes('reports') ? 'text-blue-300' : 'text-slate-400'}`}
                                d='M13 6.068a6.035 6.035 0 0 1 4.932 4.933H24c-.486-5.846-5.154-10.515-11-11v6.067Z'
                              />
                              <path
                                className={`fill-current ${pathname.includes('reports') ? 'text-blue-500' : 'text-slate-700'}`}
                                d='M18.007 13c-.474 2.833-2.919 5-5.864 5a5.888 5.888 0 0 1-3.694-1.304L4 20.731C6.131 22.752 8.992 24 12.143 24c6.232 0 11.35-4.851 11.857-11h-5.993Z'
                              />
                              <path
                                className={`fill-current ${pathname.includes('reports') ? 'text-blue-600' : 'text-slate-600'}`}
                                d='M6.939 15.007A5.861 5.861 0 0 1 6 11.829c0-2.937 2.167-5.376 5-5.85V0C4.85.507 0 5.614 0 11.83c0 2.695.922 5.174 2.456 7.17l4.483-3.993Z'
                              />
                            </svg>
                            <span className='text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                              Reports
                            </span>
                          </div>
                          {/* Icon */}
                          <div className='flex shrink-0 ml-2'>
                            <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'rotate-180'}`} viewBox='0 0 12 12'>
                              <path d='M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z' />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className='lg:hidden lg:sidebar-expanded:block 2xl:block'>
                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/reports/cards'
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Cards
                              </span>
                            </NavLink>
                          </li>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/reports/transactions'
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Transactions
                              </span>
                            </NavLink>
                          </li>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/reports/transaction-details'
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Transaction Details
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* Invoices */}
              <SidebarLinkGroup activecondition={pathname.includes('invoices')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href='#0'
                        className={`block text-slate-200 truncate transition duration-150 ${
                          pathname.includes('invoices') ? 'hover:text-slate-200' : 'hover:text-white'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center'>
                            <svg className='shrink-0 h-5 w-5' viewBox='0 0 24 24'>
                              <path
                                className={`fill-current ${pathname.includes('invoices') ? 'text-blue-500' : 'text-slate-600'}`}
                                d='M8 1v2H3v19h18V3h-5V1h7v23H1V1z'
                              />
                              <path
                                className={`fill-current ${pathname.includes('invoices') ? 'text-blue-500' : 'text-slate-600'}`}
                                d='M1 1h22v23H1z'
                              />
                              <path
                                className={`fill-current ${pathname.includes('invoices') ? 'text-blue-300' : 'text-slate-400'}`}
                                d='M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z'
                              />
                            </svg>
                            <span className='text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                              Invoices
                            </span>
                          </div>
                          {/* Icon */}
                          <div className='flex shrink-0 ml-2'>
                            <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'rotate-180'}`} viewBox='0 0 12 12'>
                              <path d='M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z' />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className='lg:hidden lg:sidebar-expanded:block 2xl:block'>
                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/invoices/kanban'
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Kanban
                              </span>
                            </NavLink>
                          </li>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/invoices/list'
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                List
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* Tasks */}
              <SidebarLinkGroup activecondition={pathname.includes('tasks')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href='#0'
                        className={`block text-slate-200 truncate transition duration-150 ${
                          pathname.includes('tasks') ? 'hover:text-slate-200' : 'hover:text-white'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center'>
                            <svg className='shrink-0 h-5 w-5' viewBox='0 0 24 24'>
                              <circle
                                className={`fill-current ${pathname.includes('tasks') ? 'text-blue-300' : 'text-slate-400'}`}
                                cx='18.5'
                                cy='5.5'
                                r='4.5'
                              />
                              <circle
                                className={`fill-current ${pathname.includes('tasks') ? 'text-blue-500' : 'text-slate-600'}`}
                                cx='5.5'
                                cy='5.5'
                                r='4.5'
                              />
                              <circle
                                className={`fill-current ${pathname.includes('tasks') ? 'text-blue-500' : 'text-slate-600'}`}
                                cx='18.5'
                                cy='18.5'
                                r='4.5'
                              />
                              <circle
                                className={`fill-current ${pathname.includes('tasks') ? 'text-blue-300' : 'text-slate-400'}`}
                                cx='5.5'
                                cy='18.5'
                                r='4.5'
                              />
                            </svg>
                            <span className='text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                              Tasks
                            </span>
                          </div>
                          {/* Icon */}
                          <div className='flex shrink-0 ml-2'>
                            <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'rotate-180'}`} viewBox='0 0 12 12'>
                              <path d='M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z' />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className='lg:hidden lg:sidebar-expanded:block 2xl:block'>
                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/tasks/changelog'
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Changelog
                              </span>
                            </NavLink>
                          </li>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/tasks/roadmap'
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Roadmap
                              </span>
                            </NavLink>
                          </li>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/tasks/faqs'
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                FAQs
                              </span>
                            </NavLink>
                          </li>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/tasks/empty-state'
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Empty State
                              </span>
                            </NavLink>
                          </li>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/tasks/404'
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                404
                              </span>
                            </NavLink>
                          </li>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/tasks/knowledge-base'
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Knowledge Base
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* Messages */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('messages') && 'bg-slate-900'}`}>
                <NavLink
                  end
                  to='/messages'
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes('messages') ? 'hover:text-slate-200' : 'hover:text-white'
                  }`}
                >
                  <div className='flex items-center justify-between'>
                    <div className='grow flex items-center'>
                      <svg className='shrink-0 h-5 w-5' viewBox='0 0 24 24'>
                        <path
                          className={`fill-current ${pathname.includes('messages') ? 'text-blue-500' : 'text-slate-600'}`}
                          d='M14.5 7c4.695 0 8.5 3.184 8.5 7.111 0 1.597-.638 3.067-1.7 4.253V23l-4.108-2.148a10 10 0 01-2.692.37c-4.695 0-8.5-3.184-8.5-7.11C6 10.183 9.805 7 14.5 7z'
                        />
                        <path
                          className={`fill-current ${pathname.includes('messages') ? 'text-blue-300' : 'text-slate-400'}`}
                          d='M11 1C5.477 1 1 4.582 1 9c0 1.797.75 3.45 2 4.785V19l4.833-2.416C8.829 16.85 9.892 17 11 17c5.523 0 10-3.582 10-8s-4.477-8-10-8z'
                        />
                      </svg>
                      <span className='text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                        Messages
                      </span>
                    </div>
                    {/* Badge */}
                    <div className='flex flex-shrink-0 ml-2'>
                      <span className='inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-blue-500 px-2 rounded'>4</span>
                    </div>
                  </div>
                </NavLink>
              </li>
              {/* Calendar */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('calendar') && 'bg-slate-900'}`}>
                <NavLink
                  end
                  to='/calendar'
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes('calendar') ? 'hover:text-slate-200' : 'hover:text-white'
                  }`}
                >
                  <div className='flex items-center'>
                    <svg className='shrink-0 h-5 w-5' viewBox='0 0 24 24'>
                      <path className={`fill-current ${pathname.includes('calendar') ? 'text-blue-500' : 'text-slate-600'}`} d='M1 3h22v20H1z' />
                      <path
                        className={`fill-current ${pathname.includes('calendar') ? 'text-blue-300' : 'text-slate-400'}`}
                        d='M21 3h2v4H1V3h2V1h4v2h10V1h4v2Z'
                      />
                    </svg>
                    <span className='text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                      Calendar
                    </span>
                  </div>
                </NavLink>
              </li>
              {/* Proposals */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('proposals') && 'bg-slate-900'}`}>
                <NavLink
                  end
                  to='/proposals'
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes('proposals') ? 'hover:text-slate-200' : 'hover:text-white'
                  }`}
                >
                  <div className='flex items-center'>
                    <svg className='shrink-0 h-5 w-5' viewBox='0 0 24 24'>
                      <path
                        className={`fill-current ${pathname.includes('proposals') ? 'text-blue-500' : 'text-slate-600'}`}
                        d='M20 7a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 0120 7zM4 23a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 014 23z'
                      />
                      <path
                        className={`fill-current ${pathname.includes('proposals') ? 'text-blue-300' : 'text-slate-400'}`}
                        d='M17 23a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 010-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1zM7 13a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 112 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z'
                      />
                    </svg>
                    <span className='text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                      Proposals
                    </span>
                  </div>
                </NavLink>
              </li>
              {/* Documents */}
              <SidebarLinkGroup>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href='#0'
                        className={`block text-slate-200 truncate transition duration-150 ${open ? 'hover:text-slate-200' : 'hover:text-white'}`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center'>
                            <svg className='shrink-0 h-5 w-5' viewBox='0 0 24 24'>
                              <path
                                className='fill-current text-slate-600'
                                d='M19 5h1v14h-2V7.414L5.707 19.707 5 19H4V5h2v11.586L18.293 4.293 19 5Z'
                              />
                              <path
                                className='fill-current text-slate-400'
                                d='M5 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm14 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8ZM5 23a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm14 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z'
                              />
                            </svg>
                            <span className='text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                              Documents
                            </span>
                          </div>
                          {/* Icon */}
                          <div className='flex shrink-0 ml-2'>
                            <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'rotate-180'}`} viewBox='0 0 12 12'>
                              <path d='M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z' />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className='lg:hidden lg:sidebar-expanded:block 2xl:block'>
                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                          <li className='mb-1 last:mb-0'>
                            <NavLink end to='/documents-01' className='block text-slate-400 hover:text-slate-200 transition duration-150 truncate'>
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Step 1
                              </span>
                            </NavLink>
                          </li>
                          <li className='mb-1 last:mb-0'>
                            <NavLink end to='/documents-02' className='block text-slate-400 hover:text-slate-200 transition duration-150 truncate'>
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Step 2
                              </span>
                            </NavLink>
                          </li>
                          <li className='mb-1 last:mb-0'>
                            <NavLink end to='/documents-03' className='block text-slate-400 hover:text-slate-200 transition duration-150 truncate'>
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Step 3
                              </span>
                            </NavLink>
                          </li>
                          <li className='mb-1 last:mb-0'>
                            <NavLink end to='/documents-04' className='block text-slate-400 hover:text-slate-200 transition duration-150 truncate'>
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Step 4
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* Settings */}
              <SidebarLinkGroup activecondition={pathname.includes('settings')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href='#0'
                        className={`block text-slate-200 truncate transition duration-150 ${
                          pathname.includes('settings') ? 'hover:text-slate-200' : 'hover:text-white'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center'>
                            <svg className='shrink-0 h-5 w-5' viewBox='0 0 24 24'>
                              <path
                                className={`fill-current ${pathname.includes('settings') ? 'text-blue-500' : 'text-slate-600'}`}
                                d='M19.714 14.7l-7.007 7.007-1.414-1.414 7.007-7.007c-.195-.4-.298-.84-.3-1.286a3 3 0 113 3 2.969 2.969 0 01-1.286-.3z'
                              />
                              <path
                                className={`fill-current ${pathname.includes('settings') ? 'text-blue-300' : 'text-slate-400'}`}
                                d='M10.714 18.3c.4-.195.84-.298 1.286-.3a3 3 0 11-3 3c.002-.446.105-.885.3-1.286l-6.007-6.007 1.414-1.414 6.007 6.007z'
                              />
                              <path
                                className={`fill-current ${pathname.includes('settings') ? 'text-blue-500' : 'text-slate-600'}`}
                                d='M5.7 10.714c.195.4.298.84.3 1.286a3 3 0 11-3-3c.446.002.885.105 1.286.3l7.007-7.007 1.414 1.414L5.7 10.714z'
                              />
                              <path
                                className={`fill-current ${pathname.includes('settings') ? 'text-blue-300' : 'text-slate-400'}`}
                                d='M19.707 9.292a3.012 3.012 0 00-1.415 1.415L13.286 5.7c-.4.195-.84.298-1.286.3a3 3 0 113-3 2.969 2.969 0 01-.3 1.286l5.007 5.006z'
                              />
                            </svg>
                            <span className='text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                              Settings
                            </span>
                          </div>
                          {/* Icon */}
                          <div className='flex shrink-0 ml-2'>
                            <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'rotate-180'}`} viewBox='0 0 12 12'>
                              <path d='M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z' />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className='lg:hidden lg:sidebar-expanded:block 2xl:block'>
                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/settings/account'
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                My Account
                              </span>
                            </NavLink>
                          </li>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/settings/notifications'
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                My Notifications
                              </span>
                            </NavLink>
                          </li>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/settings/apps'
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Connected Apps
                              </span>
                            </NavLink>
                          </li>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/settings/plans'
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Plans
                              </span>
                            </NavLink>
                          </li>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/settings/billing'
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Billing & Invoices
                              </span>
                            </NavLink>
                          </li>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/settings/feedback'
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Give Feedback
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* Authentication */}
              <SidebarLinkGroup>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href='#0'
                        className={`block text-slate-200 truncate transition duration-150 ${open ? 'hover:text-slate-200' : 'hover:text-white'}`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center'>
                            <svg className='shrink-0 h-5 w-5' viewBox='0 0 24 24'>
                              <path className='fill-current text-slate-600' d='M8.07 16H10V8H8.07a8 8 0 110 8z' />
                              <path className='fill-current text-slate-400' d='M15 12L8 6v5H0v2h8v5z' />
                            </svg>
                            <span className='text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                              Authentication
                            </span>
                          </div>
                          {/* Icon */}
                          <div className='flex shrink-0 ml-2'>
                            <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'rotate-180'}`} viewBox='0 0 12 12'>
                              <path d='M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z' />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className='lg:hidden lg:sidebar-expanded:block 2xl:block'>
                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                          <li className='mb-1 last:mb-0'>
                            <NavLink end to='/signin' className='block text-slate-400 hover:text-slate-200 transition duration-150 truncate'>
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Sign in
                              </span>
                            </NavLink>
                          </li>
                          <li className='mb-1 last:mb-0'>
                            <NavLink end to='/signup' className='block text-slate-400 hover:text-slate-200 transition duration-150 truncate'>
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Sign up
                              </span>
                            </NavLink>
                          </li>
                          <li className='mb-1 last:mb-0'>
                            <NavLink end to='/reset-password' className='block text-slate-400 hover:text-slate-200 transition duration-150 truncate'>
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Reset Password
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className='pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto'>
          <div className='px-3 py-2'>
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className='sr-only'>Expand / collapse sidebar</span>
              <svg className='w-6 h-6 fill-current sidebar-expanded:rotate-180' viewBox='0 0 24 24'>
                <path className='text-slate-400' d='M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z' />
                <path className='text-slate-600' d='M3 23H1V1h2z' />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
  return content
}

export default Sidebar