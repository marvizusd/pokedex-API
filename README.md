```
git clone https://github.com/marvizusd/pokedex-API.git
```

```
yarn install && yarn start
```
# Code Challenge

### Pokedex
This is a simple front-end code challenge created to serve two purposes:
- [x] 1. Show off your skills,
- [x] 2. Give us a better understanding of your skills.

### Instructions

- [x] Consume the public Pokedex API to retrieve a list of Pokemons.
- [ ] Display a grid of Pokemon.
- [x] Allow selecting a Pokemon and show its individual data

### Optional

- [x] Use a state management library (Redux, MobX, Unstated).
- [ ] Add pagination or infinite scrolling.
- [ ] Implement animated transitions.
- [ ] Route-based navigation.
- [ ] Flow or TypeScript annotations.
- [ ] Unit testing


You have ~1 hour to implement the basic Pokedex using React. You can start from scratch or you can use a
starter kit (i.e. create-react-app, Next.js). For the UI you can use whatever Material UI implementation you
prefer,
You're not expected to finish the tasks in the Optional section, like most real-world projects there are more
deliverables than time. As such we're not just interested in your code quality, but also in seeing how you
allocate limited resources, so choose wisely!



------Here are at the step I took to approach this technical challenge.-----

Working with API's in the past gave me a good understanding on how I wanted to intitially tackle this challenge.

First was deciding what technologies to use, for this project I am using Node.js, Express and React. I started with a solid React boilerplate by using 'create-react-app' then I added an echo-server that would act as a proxy server to handle the HTTP requests. Using an echo-server boilerplate, that I had used for past projects, eliminated some of the time spent setting that up. My priority was to make sure the proxy server had all the correct routes set up and that the axios calls were connecting to the Pokedex API and returning data. I tested the API urls with POSTMAN to take a look at the data I would be working with. I determined that I would be needing to make two HTTP requests to GET all the data I would want to use.

First to get all the pokemon using https://pokeapi.co/api/v2/pokemon/ returns an array of object with the keys name and url. Once I was receiving the response data and set up the axios request to catch any errors, I then create an empty array to push the response array of data objects, a better approach would have been to eliminate the need to create a new array and use the array of data objects given from the API.

I used the response data url value from one of the pokemons to create the second HTTP request, I would then later create a more dynamic way to change the endpoint of that url to get a specific pokemons details. Comfirming that I got a 200 status and receiving the response data. I created an object with the keys to hold only the information I was going to be using on the front end of the app. I filled those keys values with the response data specific info, name, weight, height,experience and abilities. I then send that object to the front end were react will use that data object to display info for individually selected pokemon.

On the front end with react I used axios to make calls to the proxy server to get the data I had organized. ComponentWillMount is set to make an axios call to get all the initial pokemons and stores that array into the state of the component. A rerender is triggered and the app maps through this.state.pokemon array to display all the pokemons names in a button and name attribute of the unique number assigned to pokemon from the API, this is the number we will use to identify the specific pokemon the use selects. This number is sent to the proxy server HTTP endpoint responsible for getting specific pokemon info. The response data we get from the proxy server is then store in the state of the component and on the rerender the app maps through this.state.pokemonInfo to display selected Pokemon Info. After clicking the handler created for the onClick of the button.

I will continue to finish building out and styling this application.
