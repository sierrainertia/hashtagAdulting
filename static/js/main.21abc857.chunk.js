(this["webpackJsonpsierra-macdonald-project-5"]=this["webpackJsonpsierra-macdonald-project-5"]||[]).push([[0],{17:function(e,t,a){e.exports=a(40)},22:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),o=a.n(l),i=(a(22),a(2)),c=a(3),s=a(5),u=a(4),m=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState({userInput:t.target.value})},e.handleClick=function(t){t.preventDefault(),e.state.list.push(e.state.userInput),e.setState({userInput:""})},e.state={list:[],userInput:""},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("form",{onSubmit:this.addItem},r.a.createElement("input",{type:"text",placeholder:"Type in an errand","aria-label":"Type in an errand",value:this.state.userInput,onChange:this.handleChange}),r.a.createElement("button",{onClick:this.handleClick},"Add Task!")),r.a.createElement("ul",null,this.state.list.map((function(e,t){return r.a.createElement("li",{key:t},e)}))))}}]),a}(n.Component),d=a(16),h=a.n(d),p=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).getGiphyImage=function(){h()({method:"GET",url:"https://api.giphy.com/v1/gifs/random?api_key=KMdcSvJCsU4GSHGjdYnTVOfeQkyqAIJ9&tag=motivational&rating=pg",dataResponse:"json"}).then((function(t){console.log(t),e.setState({imageUrl:t.data.data.image_url,title:t.data.data.title})}))},e.state={giphy:[]},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,"Hashtag Adulting"),r.a.createElement("p",null,"Use this app to record all your tedius adult tasks that were thrust upon you without your consent. Remember: The best time to do something you don't want to do is yesterday."))),r.a.createElement("main",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("section",{className:"toDoList"},r.a.createElement("h2",null,"Errands I can't ignore anymore:"),r.a.createElement(m,null)),r.a.createElement("section",{className:"motivation"},r.a.createElement("button",{onClick:this.getGiphyImage},"I need some motivation!"),r.a.createElement("img",{src:this.state.imageUrl,alt:this.state.title})))),r.a.createElement("footer",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("p",null,"Copyright\xa9 Sierra MacDonald | Created at Juno College "))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.21abc857.chunk.js.map