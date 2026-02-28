import React, { type ReactNode } from "react";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">samir.dev</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a
                href="https://github.com/samir-scripts"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
            </li>
            <li>
              <a>linkedin</a>
            </li>
            <li>
              <details>
                <summary>socials</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a>github</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
