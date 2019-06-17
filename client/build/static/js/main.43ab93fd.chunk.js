(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t){var n="https://www.googleapis.com/books/v1";e.exports={searchBooks:function(e,t){var a=encodeURIComponent(e),o="".concat(n,"/volumes?q=").concat(a,"&startIndex=").concat(t,"&projection=lite"),r=new Error;return fetch(o).then(function(t){if(t.ok)return t.json();throw r.message="Error searching for books with term: ".concat(e),r}).then(function(e){return e.items||[]})},getBook:function(e){var t="".concat(n,"/volumes/").concat(e),a=new Error;return fetch(t).then(function(t){if(t.ok)return t.json();throw a.message="Error getting a book with id: ".concat(e),a}).then(function(e){return e||{}})}}},25:function(e,t,n){e.exports=n(36)},30:function(e,t,n){},31:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(20),c=n.n(r),l=(n(30),n(13)),s=n(10);n(31);var u=function(e){var t=e.children;return o.a.createElement("header",{className:""},t)};var i=function(){return o.a.createElement("div",{className:"container mx-auto"},o.a.createElement(u,{className:""},o.a.createElement("h1",null,"Book Lovers Delite!"),o.a.createElement("p",null,"Search and Save!")))},h=n(5),m=n(6),f=n(8),b=n(7),v=n(9),d=n(21),p=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).state={search:""},n.handleSearchChange=function(e){var t=e.target,a=t.name,o=t.value;n.setState(Object(d.a)({},a,o))},n.handleSearchSubmit=function(e){e.preventDefault(),n.state.search&&(console.log("this.state.search",n.state.search),n.props.doSearch(n.state.search))},n}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{className:"search-form",onSubmit:this.handleSearchSubmit},o.a.createElement("label",{className:""},"Search"),o.a.createElement("input",{id:"search",name:"search",onChange:this.handleSearchChange,value:this.state.search}),o.a.createElement("input",{type:"button",value:"Search"}))}}]),t}(a.Component),k=n(22),E=n.n(k),g=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(f.a)(this,Object(b.a)(t).call(this,e))).getThumbnail=function(e){var t=e&&e.imageLinks&&e.imageLinks.smallThumbnail;return t?t.replace(/^http:\/\//i,"https://"):""},n.getAuthors=function(e){var t=e&&e.authors&&e.authors;return t?t.map(function(e,n){return o.a.createElement("span",{key:n},e,n+1!==t.length?", ":"")}):o.a.createElement("span",null,"No authors to display")},n.bookInfo=n.props.bookInfo,n.smallThumb=n.getThumbnail(n.bookInfo),n.authors=n.getAuthors(n.bookInfo),n}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"border-b flex"},o.a.createElement("img",{src:this.smallThumb,alt:this.bookInfo.title}),o.a.createElement("h3",{className:"text-xl"},this.bookInfo.title),o.a.createElement("h4",{className:"text-lg"},this.bookInfo.subtitle),o.a.createElement("p",null,"Author(s): ",this.authors),o.a.createElement("p",null,this.bookInfo.description),o.a.createElement("p",null,this.bookInfo.infoLink))}}]),t}(a.Component);var S=function(e){var t=e.children;return o.a.createElement("div",null,t)},j=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={search:"",foundBooks:[]},n.doSearch=function(e){e&&(E.a.searchBooks(e,1).then(function(e){n.setState({foundBooks:n.createSearchResult(e)})}),console.log("this.state.foundBooks",n.state.foundBooks))},n.handleBookSave=function(e){return"hello"},n.createSearchResult=function(e){for(var t=[],a=e.length?e.length:10,r=0;r<a;r++)console.log("books[i].volumeInfo",e[r].volumeInfo),t.push(o.a.createElement(g,{bookInfo:e[r].volumeInfo,key:"x"+r,handleSave:n.handleBookSave}));return t},n}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container mx-auto"},o.a.createElement(p,{doSearch:this.doSearch}),o.a.createElement(S,null,this.state.foundBooks?this.state.foundBooks:o.a.createElement("p",null,"No books found")))}}]),t}(a.Component),O=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).state={search:""},n}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("h3",null,"Saved")}}]),t}(a.Component);var w=function(){return o.a.createElement("div",null,o.a.createElement(i,null),o.a.createElement(l.a,null,o.a.createElement(l.b,{to:"/"},"Search"),o.a.createElement(l.b,{to:"/saved"},"Saved"),o.a.createElement(s.a,{path:"/",exact:!0,component:j}),o.a.createElement(s.a,{path:"/saved",component:O})))};c.a.render(o.a.createElement(w,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.43ab93fd.chunk.js.map