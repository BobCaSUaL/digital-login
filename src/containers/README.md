
# Containers

To be not confused with pages, a container is mainly a wrapper for the business
logic, wired with it's layout.

Note: *A page is a composition of one or more containers served at a specific route*

## Principles and patterns

Refer to the App container.

The entire project is based only on react withot any onther state management library.
Despite that all the containers should use the flux pattern, implemented via hooks.
In addiction a trivial saga implementation is provided.

### About flux implementation

As I had developed this project without redux or any other state management library, I
used the React hooks to implement the flux pattern. Within the App container you can
find the AppFlux file and see the specific implementation. Basically it contains:
- the `AppContext` context. That could be used by any container mounted within the App.
- the `initialState`
- the `actionTypes` map
- the `reducer` function

The `reduce` function is wired to the app throught the (App container)[App/App.js] with
the `useReducer` hook.
The entire App state is the provided to the other app components via the the context API
throught the `useContext` hook.

### About saga implementation

Tecnically a trivial implementation of the saga pattern. The example provided in the App
container is a working proposal on how to manage side-effects with only React hooks utilities.
The core of the feature is within the dispatch wrapper of the (App container)[App/App.js]
in the (App Saga)[App/Saga.js] there are all the stuffs needed to manange the LOGIN_* side effects
as well as the request to the server.

NOTE: a special `$REDIRECT_TO` action is provided to perform a redirect from within the saga.

## Routing

The routing is implemented with the mostly known react-router. The routing logic is wired within
the (AppRouter container)[AppRouter/AppRouter.js]. To make the **login redirect** work, a 
(PrivateRoute component)[../PrivateRoute/PrivateRoute.js] has been provided.
