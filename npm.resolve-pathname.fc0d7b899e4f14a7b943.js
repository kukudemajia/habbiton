(window.webpackJsonphabbiton=window.webpackJsonphabbiton||[]).push([[779],{8273:(n,t,o)=>{"use strict";function r(n){return"/"===n.charAt(0)}function i(n,t){for(var o=t,r=o+1,i=n.length;r<i;o+=1,r+=1)n[o]=n[r];n.pop()}o.d(t,{Z:()=>e});const e=function(n,t){void 0===t&&(t="");var o,e=n&&n.split("/")||[],s=t&&t.split("/")||[],a=n&&r(n),h=t&&r(t),f=a||h;if(n&&r(n)?s=e:e.length&&(s.pop(),s=s.concat(e)),!s.length)return"/";if(s.length){var p=s[s.length-1];o="."===p||".."===p||""===p}else o=!1;for(var u=0,c=s.length;c>=0;c--){var l=s[c];"."===l?i(s,c):".."===l?(i(s,c),u++):u&&(i(s,c),u--)}if(!f)for(;u--;u)s.unshift("..");!f||""===s[0]||s[0]&&r(s[0])||s.unshift("");var b=s.join("/");return o&&"/"!==b.substr(-1)&&(b+="/"),b}}}]);