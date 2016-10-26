# Deployer6000

If you've got a Raspberry Pi and have built your self a Deployer6000 look no futher ! This code will deploy your project.

Things you need to do to get this running for your project:

1. Raspberry PI
2. Button and a switch
3. Some LEDs
4. Wire it all up correctly.
4. create a deploy script and name it `deploy.sh` and keep it in the root of this folder
5. set URL to codeship build status badge as `PROJECT_URL` in your env variable on the Raspberry PI
  * example (https://codeship.com/projects/28f492c0-26c2-0134-435a-0ee1950dc067/status?branch=master)
6. run `node index.js` (I recomend using [forever](https://www.npmjs.com/package/forever) to run this script forever)
7. Arm the deployer (flip the switch) and press deploy once the light is green.

Here is a picture of my deployer:

![](http://i.imgur.com/Tla9afT.jpg)


This is how I wired up the switches and lights using Raspberry PI gen2:
```
SWITCH_PIN = PIN_3
DEPLOY_BUTTON_PIN = PIN_5

RED_LIGHT_PIN = PIN_11
YELLOW_LIGHT_PIN = PIN_13
GREEN_LIGHT_PIN = PIN_12
```

If you intend to use any other pin # just set the correct pin # in `index.js` and `lights.js`
