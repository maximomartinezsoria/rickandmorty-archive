import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNameQuery, setStatusQuery } from '../../store/actions/charactersActions'

export const AppliedFilters = () => {
  const nameQuery = useSelector((state) => state.characters.nameQuery)
  const statusQuery = useSelector((state) => state.characters.statusQuery)
  const dispatch = useDispatch()

  const clearNameQuery = () => {
    dispatch(setNameQuery(''))
  }

  const clearStatusQuery = () => {
    dispatch(setStatusQuery(''))
  }

  return (
    <div className="AppliedFilters">
      <p className="AppliedFilters__title">Filters:</p>

      {nameQuery && (
        <button className="AppliedFilters__button" onClick={clearNameQuery}>
          <span className="AppliedFilters__label">{nameQuery}</span>
          &times;
        </button>
      )}
      {statusQuery && (
        <button className="AppliedFilters__button" onClick={clearStatusQuery}>
          <span className="AppliedFilters__label">{statusQuery}</span>
          &times;
        </button>
      )}
    </div>
  )
}
