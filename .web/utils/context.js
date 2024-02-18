import { createContext, useContext, useMemo, useReducer, useState } from "react"
import { applyDelta, Event, hydrateClientStorage, useEventLoop, refs } from "/utils/state.js"

export const initialState = {"state": {"is_hydrated": false, "router": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": ""}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}}}, "state.cond_simple_state": {"show": true}, "state.progress_example_state": {"show_progress": false}, "state.form_input_state": {"form_data": {}, "product_brand": "", "product_materials": "", "product_name": "", "roast_text": []}}

export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {
  state: createContext(null),
  state__cond_simple_state: createContext(null),
  state__progress_example_state: createContext(null),
  state__form_input_state: createContext(null),
}
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}}

export const onLoadInternalEvent = () => [Event('state.on_load_internal')]

export const initialEvents = () => [
    Event('state.hydrate', hydrateClientStorage(clientStorage)),
    ...onLoadInternalEvent()
]

export const isDevMode = true

export function UploadFilesProvider({ children }) {
  const [filesById, setFilesById] = useState({})
  refs["__clear_selected_files"] = (id) => setFilesById(filesById => {
    const newFilesById = {...filesById}
    delete newFilesById[id]
    return newFilesById
  })
  return (
    <UploadFilesContext.Provider value={[filesById, setFilesById]}>
      {children}
    </UploadFilesContext.Provider>
  )
}

export function EventLoopProvider({ children }) {
  const dispatch = useContext(DispatchContext)
  const [addEvents, connectError] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  return (
    <EventLoopContext.Provider value={[addEvents, connectError]}>
      {children}
    </EventLoopContext.Provider>
  )
}

export function StateProvider({ children }) {
  const [state, dispatch_state] = useReducer(applyDelta, initialState["state"])
  const [state__cond_simple_state, dispatch_state__cond_simple_state] = useReducer(applyDelta, initialState["state.cond_simple_state"])
  const [state__progress_example_state, dispatch_state__progress_example_state] = useReducer(applyDelta, initialState["state.progress_example_state"])
  const [state__form_input_state, dispatch_state__form_input_state] = useReducer(applyDelta, initialState["state.form_input_state"])
  const dispatchers = useMemo(() => {
    return {
      "state": dispatch_state,
      "state.cond_simple_state": dispatch_state__cond_simple_state,
      "state.progress_example_state": dispatch_state__progress_example_state,
      "state.form_input_state": dispatch_state__form_input_state,
    }
  }, [])

  return (
    <StateContexts.state.Provider value={ state }>
    <StateContexts.state__cond_simple_state.Provider value={ state__cond_simple_state }>
    <StateContexts.state__progress_example_state.Provider value={ state__progress_example_state }>
    <StateContexts.state__form_input_state.Provider value={ state__form_input_state }>
      <DispatchContext.Provider value={dispatchers}>
        {children}
      </DispatchContext.Provider>
    </StateContexts.state__form_input_state.Provider>
    </StateContexts.state__progress_example_state.Provider>
    </StateContexts.state__cond_simple_state.Provider>
    </StateContexts.state.Provider>
  )
}