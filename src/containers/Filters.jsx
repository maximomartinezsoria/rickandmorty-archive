import React from 'react'
import { NameFilter } from '../components/filters/NameFilter'
import { StatusFilter } from '../components/filters/StatusFilter'
import { AppliedFilters } from '../components/filters/AppliedFilters'
import { OrderSelect } from '../components/filters/OrderSelect'

export const Filters = () => {
  return (
    <section className="Filters">
      <div className="Filters__row">
        <NameFilter />
        <StatusFilter />
      </div>
      <div className="Filters__row">
        <AppliedFilters />
        <OrderSelect />
      </div>
    </section>
  )
}
