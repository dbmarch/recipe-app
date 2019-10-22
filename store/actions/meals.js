const actionCreator = type => payload => ({ type, payload })

export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE"

export const toggleFavorite = actionCreator(TOGGLE_FAVORITE)
