import { BellIcon } from "@heroicons/react/outline";

const NavBar = () => {
  return (
    <div className="navbar shadow">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" href="/">
          Awesome HR
        </a>
      </div>
      <div className="flex-none">
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <BellIcon className="h-5 w-5 text-current" />
            {/* <span className="badge badge-xs badge-primary indicator-item"></span> */}
          </div>
        </button>
        <div className="dropdown dropdown-end">
          <div
            role="menu"
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                src="https://api.lorem.space/image/face?hash=33791"
                alt="login user avatar"
              ></img>
            </div>
          </div>
          <ul
            role="menu"
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between" href="/profile">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a href="/settings">Settings</a>
            </li>
            <li>
              <a href="/logout">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
