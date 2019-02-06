This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Installation
1. Open terminal and type in the following command:
2. `echo "@chromium https://megasoft.biz/vending/subvending --start-fullscreen" >> ~/.config/lxsession/LXDE-pi/autostart`
3. Restart
4. After booting up, there should be a prompt asking the vending machine number. This would be needed only once. the later reboots will automatically launch for provided machine number. (NOTE: to reset and reconfigure, just clear browser cache data as you do on a standard chrome browser and restart the pi)


things to try:
1. `sudo nano ~/.config/lxsession/LXDE/autostart`

2. `echo "@chromium https://megasoft.biz/vending/subvending --start-fullscreen" > ~/.config/lxsession/LXDE-pi/autostart`

3. `echo "@chromium https://megasoft.biz/vending/subvending --start-fullscreen" > /etc/xdg/lxsession/LXDE/autostart`

4. `echo "@chromium https://megasoft.biz/vending/subvending --start-fullscreen" >> /etc/xdg/lxsession/LXDE/autostart`

5. `sudo nano ~/.config/lxsession/LXDE/autostart`

6. `@chromium https://megasoft.biz/vending/subvending --start-fullscreen`
