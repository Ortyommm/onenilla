export interface Player {
  name: string
  id: string
}

export interface Players {
  max: number
  now: number
  sample: Player[]
}

export interface Server {
  name: string
}

export interface ServerDataState {
  players: Players
  online: boolean
  server: Server
  isFetching: boolean
}

export interface DispatchFunctions {
  setDataAC: Function
  toggleIsFetchingAC: Function
}

const initialState = {
  players: {
    max: 0,
    now: 0,
    sample: [],
  },
  online: false,
  server: {
    name: '',
  },
  isFetching: false,
}

interface FetchDataActionCreator {
  readonly type: string
  payload: {
    data: {
      players: Players
      online: boolean
      server: object
    }
  }
}

interface IsFetchingPayload {
  isFetching: boolean
}

interface IsFetching {
  readonly type: string
  payload: {
    data: {
      isFetching: boolean
    }
  }
}

export function fetchDataReducer(
  state = initialState,
  action: FetchDataActionCreator & IsFetching
) {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, ...action.payload.data }
    case 'TOGGLE_IS_FETCHING':
      const newState = { ...state, ...action.payload }
      return newState
    default:
      return state
  }
}

export const setDataAC = (payload: FetchDataActionCreator) => ({
  type: 'SET_DATA',
  payload,
})

export const toggleIsFetchingAC = (payload: IsFetchingPayload) => ({
  type: 'TOGGLE_IS_FETCHING',
  payload,
})
