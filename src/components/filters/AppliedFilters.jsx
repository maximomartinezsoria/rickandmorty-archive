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
    <div>
      Filters:
      {nameQuery && (
        <p>
          {nameQuery}
          <button onClick={clearNameQuery}>&times;</button>
        </p>
      )}
      {statusQuery && (
        <p>
          {statusQuery}
          <button onClick={clearStatusQuery}>&times;</button>
        </p>
      )}
    </div>
  )
}
