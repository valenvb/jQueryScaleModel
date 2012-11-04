jQueryScaleModel
================
A jQuery implemetation of Avgrund (http://lab.hakim.se/avgrund/)

============================
||IMPORTANT INFORMATION!!!||
============================
for now, use the version in /(selector)-version, it works.

==
usage (the js/jsm.js version)
==
You MUST call $.jsm('init') before you use it on your page.
if you want to change settings(currently not working, not sure why), use $.jsm({ method: 'init', options: 'here'});

Then, use call it using $.jsm('your text here'); it will display the text in a model. You can also pass an id or class to use as the content for the model(currently very sketchy). Then add $.jsm('close'); to close the model.

======
TODO
- fix options not working.
- add auto detection of #jsm-close
- bugfixes...