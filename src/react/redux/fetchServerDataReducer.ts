export interface Player {
  name: string
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
}

export interface DispatchFunctions {
  setDataAC: Function
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

export function fetchDataReducer(
  state = initialState,
  action: FetchDataActionCreator
) {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, ...action.payload.data }
    default:
      return state
  }
}

export const setDataAC = (payload: FetchDataActionCreator) => ({
  type: 'SET_DATA',
  payload,
})
