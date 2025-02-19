import type { ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {}

export function Button({ ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      className="flex items-center justify-between px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl cursor-pointer w-full hover:bg-blue hover:text-gray-900 transition-colors duration-300"
      {...rest}
    />
  )
}
