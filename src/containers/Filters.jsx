import React from 'react'
import { NameFilter } from '../components/filters/NameFilter'
import { StatusFilter } from '../components/filters/StatusFilter'
import { AppliedFilters } from '../components/filters/AppliedFilters'

export const Filters = () => {
  return (
    <section>
      <div>
        <NameFilter />
        <StatusFilter />
      </div>
      <div>
        <AppliedFilters />
      </div>
    </section>
  )
}
