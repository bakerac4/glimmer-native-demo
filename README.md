Follow the NativeScript Setup Guides (https://docs.nativescript.org/angular/start/quick-setup#full-setup)
Clone Repo
npm install
Run tns debug ios --bundle --debug-brk (to debug)
Open inspector (watch terminal for url to paste into chrome)
Program will pause in starter.js. Put a break point on line 2 require("./bundle")
Once it breaks on line 2 you will be able to put a break point anywhere