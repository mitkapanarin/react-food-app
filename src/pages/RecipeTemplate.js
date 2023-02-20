import React from 'react'
import { useParams } from 'react-router-dom'

const RecipeTemplate = () => {
  const params = useParams()
  console.log(params.id)
  return (
    <div>This is the recipe template page RecipeTemplate page Name is - {params.id}</div>
  )
}

export default RecipeTemplate