# khop-theme [![Build Status][status-img]][status]

## TODO
 - `logo.svg` - font problem: the original font used for logo in `logo.svg` was "Yu Gothic". Sadly,
   I can't include it in the project. I'm trying different fonts Like "Hiragino Sans". I also
   tried to get "Yasashisa Gothic" - ``*.ttf` was in the `/_site/assets/font`. I added `@font-family`
   in `/css/0-tools/fonts.scss` and did testing, but no characters where showing up, so I decided to
   figure out different approach. The worst case scenario is leaving the `*.png` file as a logo.
 - `gulpfile.js` - needs a complete rewriting. It's messy but for now it's working.
 - `package.json` - something's wrong on my Arch Build - some of `devDependencies` aren't built 
   properly, and they're returning run-time errors.

## License
 This software is available under the MIT license.


[status]: https://travis-ci.org/kh0p/khop-theme
[status-img]: https://travis-ci.org/kh0p/khop-theme.svg?branch=master
