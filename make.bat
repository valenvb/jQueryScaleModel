@echo off

echo Building ...
java -jar bin/closure-compiler.jar --js js/jsm.src.js --js_output_file js/jsm.js