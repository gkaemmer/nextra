import type { ComponentProps } from 'react'

export const Th = (props: ComponentProps<'th'>) => (
  <th
    className="nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 nx-font-semibold dark:nx-border-gray-600"
    {...props}
  />
)
