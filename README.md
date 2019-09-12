# hacknight5

### Meet Misty, your new best friend / robot overlord

She's the greatest. Someone from marketing will hopefully fill this in shortly

### About this repo

The goal is to provide a REST api that is somewhat similar to Misty's request/response cycle, and then provide an interface to "see" those actions happening on your virtual Misty via the browser. 

Obviously not everything can be implemented / virtualized, and the first attempts are pretty basic. But, it's a simple model to contribute to / code against, allowing you to poke at a Misty locally even if your new best friend is out conquering the resistance foreign lands.

The code is separated into two `npm`-powered projects:
- `misty` - the `Vue.js` powered web interface to your virtualized Misty
- `server` - the stateful `Node.js` dev server that emulates Misty's API and communicates with the browser-Misty via websockets

You can ignore most of `server`'s code, even if you want to implement missing / stubbed Misty features in the emulator. Misty's emulated commands can be found in the corresponding `server/commands/[category]/[command].js` file, and are bootstrapped with a `context` of the environment. Said `context` has some useful items on it, including the following: 
- `state` - the current state of the virtualized Misty. See the top section of `misty-state.js` for an idea of what status she could be in. 
- `_` - we bundled in `lodash` as `_` for helpful methods
- `busEvent` - API Commands leverage an event bus, and this is the event emitted when a command _should_ be executed. Don't dig to deep (it's ugly still) but know that you've got the following args:
   - `req` - The HTTP request representing the Command
   - `res` - The HTTP response for the Command - it's your job to implement it correctly according to docs :) 
   - `args` - The parsed arguments, *after* validation (more on that below)
- `helpers` - We reserved this namespace for utils to help. So far, it contains
   - `timers` - Because Misty's state needs to be simple JSON-friendly objects, we can't put Node's `Timer` construct on the state. And since `setTimeout` doesn't return numbers, we cooked this stupid utility up for easily tracking actions while they're happening. Instead of `setTimeout`, `setInterval`, `clearXYZ`, use `timers.timeout(..)`, `timers.interval(..)`, and `timers.clear(id)`

An example of a simple Command is this `Drive` implementation that just sets her velocities accordingly. 
```js
module.exports = ctx => {
  const {
    _,
    state,
    busEvent: { req, res, args }
  } = ctx

  state.drive = {
    linearVelocity: 0,
    angularVelocity: 0,
    ...state.drive,
    ..._.pick(args, 'linearVelocity,angularVelocity')
  }

  res.send({ message: 'ok' })
}
```


### IMPORTANT NOTES

Some important things to note:
  - If you update the `misty-state` object, the updated object will be sent over the websocket automagically.
  - When the state comes to Vue, it's automatically bound for the UI to update
  - This means, hopefully, any dev can be isolated to `<command>.js` and `misty-state.js`


# Getting Started

In terminal one: 
 - cd into `server`
 - run `npm install` and wait for half the internet to download
 - run `npm start` to start your server. You should see `Listening on port 3000` if all goes to plan

In terminal two:
 - cd into `misty`
 - run `npm install` and wait for the other half of the internet to download
 - run `npm start` to start your server. You should see the following if all goes to plan ```  App running at:
  - Local:   http://localhost:8080/ 
  - Network: http://xxx.yyy.zzz.fml:8080/
```

At this point, hit http://localhost:8080 and you should be greated by the virtual Misty. We're still polishing the UI, but you can see what her state is below her simple picture. We're also working on a SVG-based render, which volunteers are welcome for. 