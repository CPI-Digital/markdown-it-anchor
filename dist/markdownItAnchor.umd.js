!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):n.markdownItAnchor=e()}(this,function(){var n={false:"push",true:"unshift"},e=Object.prototype.hasOwnProperty,t=function(n,r){r=Object.assign({},t.defaults,r),n.core.ruler.push("anchor",function(n){var t,i={},o=n.tokens,u=Array.isArray(r.level)?(t=r.level,function(n){return t.includes(n)}):function(n){return function(e){return e>=n}}(r.level);o.filter(function(n){return"heading_open"===n.type}).filter(function(n){return u(Number(n.tag.substr(1)))}).forEach(function(t){var u=o[o.indexOf(t)+1].children.filter(function(n){return"text"===n.type||"code_inline"===n.type}).reduce(function(n,e){return n+e.content},""),c=t.attrGet("id");null==c&&(c=function(n,t){for(var r=n,i=2;e.call(t,r);)r=n+"-"+i++;return t[r]=!0,r}(r.slugify(u),i)),r.permalink&&r.renderPermalink(c,r,n,o.indexOf(t)),r.callback&&r.callback(t,{slug:c,title:u})})})};return t.defaults={level:1,slugify:function(n){return encodeURIComponent(String(n).trim().toLowerCase().replace(/\s+/g,"-"))},permalink:!1,renderPermalink:function(e,t,r,i){var o,u=[Object.assign(new r.Token("link_open","a",1),{attrs:[["class",t.permalinkClass],["href",t.permalinkHref(e,r)],["id",e]]}),Object.assign(new r.Token("html_block","",0),{content:t.permalinkSymbol}),new r.Token("link_close","a",-1)];t.permalinkSpace&&u[n[!t.permalinkBefore]](Object.assign(new r.Token("text","",0),{content:" "})),(o=r.tokens[i+1].children)[n[t.permalinkBefore]].apply(o,u)},permalinkClass:"header-anchor",permalinkSpace:!0,permalinkSymbol:"¶",permalinkBefore:!1,permalinkHref:function(n){return"#"+n}},t});
//# sourceMappingURL=markdownItAnchor.umd.js.map
