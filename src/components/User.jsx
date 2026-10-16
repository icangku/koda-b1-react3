import React from "react";

function User({ user }) {
  return (
    <div className="relative border border-blue-700 rounded-md p-1 shadow-xs overflow-hidden flex flex-col justify-end text-white hover:cursor-pointer">
      <h4 className="text-md font-bold tracking-wide text-blue-400">
        {user.name}
      </h4>
      <span className="text-lg font-semibold text-blue-500">
        {user.username.toLowerCase()}
      </span>
      <span className="text-lg font-semibold text-blue-500">
        {user.email.toLowerCase()}
      </span>
    </div>
  );
}

export default User;
