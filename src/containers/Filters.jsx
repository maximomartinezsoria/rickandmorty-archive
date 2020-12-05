import React from 'react'
import { NameFilter } from '../components/filters/NameFilter'
import { StatusFilter } from '../components/filters/StatusFilter'

export const Filters = () => {
  return (
    <section>
      <NameFilter />
      <StatusFilter />
    </section>
  )
}
