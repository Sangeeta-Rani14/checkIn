import React from 'react'

const Input = ({ 
  type = "text", 
  placeholder, 
  value, 
  onChange, 
  label,
  error,
  disabled = false,
  ...props 
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-primary-text font-inter text-labels font-medium mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="w-full px-4 py-3 bg-surface border border-gray-300 rounded-lg font-inter text-body-text text-primary-text placeholder:text-muted-text focus:outline-none focus:ring-2 focus:ring-primary-color focus:border-transparent disabled:bg-light-gray disabled:cursor-not-allowed transition-all"
        {...props}
      />
      {error && (
        <p className="text-error font-inter text-labels mt-1">
          {error}
        </p>
      )}
    </div>
  )
}

export default Input