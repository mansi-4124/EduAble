import React, { ChangeEvent } from "react";
interface RoleSelectorProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}
function RoleSelector({ value, onChange }: RoleSelectorProps) {
  return (
    <div className="space-y-2">
      <label htmlFor="role" className="block text-sm font-medium text-gray-700">
        Role
      </label>
      <select
        id="role"
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
        required
      >
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
        <option value="parent">Parent</option>
      </select>
    </div>
  );
}

export default RoleSelector;
