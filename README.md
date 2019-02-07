This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Installation
1. Open terminal and type in the following command:
2. `echo "@chromium https://megasoft.biz/vending/subvending --start-fullscreen" >> ~/.config/lxsession/LXDE-pi/autostart`
3. Restart
4. After booting up, there should be a prompt asking the vending machine number. This would be needed only once. the later reboots will automatically launch for provided machine number. (NOTE: to reset and reconfigure, just clear browser cache data as you do on a standard chrome browser and restart the pi)


things to try:
1. `mkdir -p ~/.config/lxsession/LXDE-pi`

2. `sudo nano ~/.config/lxsession/LXDE-pi/autostart`

3. Copy paste the following:

`@lxpanel --profile LXDE-pi`<br/>
`@pcmanfm --desktop --profile LXDE-pi`<br/>
`@xscreensaver -no-splash`<br/>
`@point-rpi`<br/>
`@chromium-browser https://megasoft.biz/vending/subvending --start-fullscreen --no-startup-window`

4. Now press ctrl + X, press shift + Y, press Enter.

5. Restart your pi
