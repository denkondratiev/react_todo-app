(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{11:function(e,t,a){e.exports=a(20)},16:function(e,t,a){},17:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(9),r=a.n(c),l=(a(16),a(17),a(6)),i=a(10),d=a(2),s=a(3),u=a(5),m=a(4),p=a(1),f=a.n(p),h=(f.a.shape({addTodo:f.a.func}),f.a.shape({id:f.a.number,title:f.a.string,completed:f.a.bool,checkedTodo:f.a.func,deleteTodo:f.a.func})),g=(f.a.shape({addTodo:f.a.func}),f.a.shape({todos:f.a.arrayOf(h.isRequired),checkedTodo:f.a.func,deleteTodo:f.a.func}),f.a.shape({toggleAll:f.a.func}),f.a.shape({setActiveTab:f.a.func,activeTab:f.a.string}),f.a.shape({todos:f.a.arrayOf(h.isRequired),clearCompleted:f.a.func,setActiveTab:f.a.func,activeTab:f.a.string}),a(22)),b=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={title:"",error:!1},e.setTitle=function(t){e.setState({title:t.replace(/\s/g," ").replace(/^\s/,""),error:!1})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.title,n=e.props.addTodo;return a&&""!==a.trim()?(n({title:a,id:Object(g.a)(),completed:!1}),e.setState({title:"",error:!1}),!0):(e.setState({error:!0}),!1)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.title,n=t.error;return o.a.createElement(o.a.Fragment,null,n&&o.a.createElement("div",{className:"form-error"},"Please add something"),o.a.createElement("form",{className:"form",onSubmit:function(t){return e.handleSubmit(t)}},o.a.createElement("input",{type:"text",name:"todo",maxLength:"100",className:"new-todo",placeholder:"What needs to be done?",value:a,onChange:function(t){return e.setTitle(t.target.value)}})))}}]),a}(o.a.Component),v=function(e){var t=e.addTodo;return o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,"todos"),o.a.createElement(b,{addTodo:t}))},T=a(7),E=a.n(T),k=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={isEdit:!1,editingTitle:e.props.title,tempTitle:null,editId:null},e.focusInput=o.a.createRef(),e.setEditingTitle=function(t){var a=t.target.value;e.setState({editingTitle:a.replace(/\s/g," ").replace(/^\s/,"")})},e.onDoubleClick=function(t){e.setState((function(e){return{isEdit:!e.isEdit,editId:t,tempTitle:e.editingTitle}}))},e.onBlurInput=function(){e.setState((function(e){return{editingTitle:e.tempTitle,isEdit:!1}}))},e.onKeyPressed=function(t){var a=e.state,n=a.editId,o=a.editingTitle,c=e.props.deleteTodo;13===t.keyCode&&(o&&""!==o.trim()||c(n),e.onDoubleClick(n)),27===t.keyCode&&e.onBlurInput()},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(){this.focusInput&&this.focusInput.current.focus()}},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.completed,c=t.checkedTodo,r=t.deleteTodo,l=this.state,i=l.isEdit,d=l.editingTitle,s=E()({editing:i,completed:n});return o.a.createElement("li",{className:s},o.a.createElement("div",{className:"view"},o.a.createElement("input",{type:"checkbox",name:"todo",className:"toggle",checked:n,id:a,onChange:function(e){return c(e.target.id)}}),o.a.createElement("label",{htmlFor:a,onDoubleClick:function(t){return e.onDoubleClick(t.target.htmlFor)}},d),o.a.createElement("button",{type:"button",className:"destroy",id:a,onClick:function(e){return r(e.target.id)}})),o.a.createElement("input",{type:"text",name:"editInput",className:"edit",value:d,ref:this.focusInput,onChange:function(t){return e.setEditingTitle(t)},onKeyUp:function(t){return e.onKeyPressed(t)},onBlur:this.onBlurInput}))}}]),a}(o.a.Component),y=function(e){var t=e.todos,a=e.checkedTodo,n=e.deleteTodo;return o.a.createElement("ul",{className:"todo-list"},t.map((function(e){return o.a.createElement(k,{key:e.id,id:e.id,completed:e.completed,title:e.title,checkedTodo:a,deleteTodo:n})})))},C=function(e){var t=e.setActiveTab,a=e.activeTab;return o.a.createElement("ul",{className:"filters"},["all","active","completed"].map((function(e){return o.a.createElement("li",{key:e},o.a.createElement("a",{href:"#/",name:e,className:E()({selected:a===e}),onClick:function(e){return t(e.target.name)}},e.toUpperCase()))})))},O=function(e){var t=e.todos,a=e.clearCompleted,n=e.setActiveTab,c=e.activeTab,r=t.filter((function(e){return e.completed})).length,l=t.length-r;return o.a.createElement("footer",{className:"footer"},o.a.createElement("span",{className:"todo-count"},"".concat(l," items left")),o.a.createElement(C,{setActiveTab:n,activeTab:c}),r>0&&o.a.createElement("button",{type:"button",className:"clear-completed",onClick:a},"Clear completed"))},S=function(e){var t=e.toggleAll,a=e.allSelected;return o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",checked:a,onChange:function(e){return t(e)}}),o.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"))},N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={todos:JSON.parse(localStorage.getItem("storage"))||[],activeTab:"all"},e.addTodo=function(t){e.setState((function(e){return{todos:[].concat(Object(i.a)(e.todos),[t])}}))},e.deleteTodo=function(t){e.setState((function(e){return{todos:e.todos.filter((function(e){return e.id!==t}))}}))},e.checkedTodo=function(t){e.setState((function(e){return{todos:e.todos.map((function(e){return e.id===t?Object(l.a)(Object(l.a)({},e),{},{completed:!e.completed}):e}))}}))},e.toggleAll=function(t){var a=t.target.checked;e.setState((function(e){return{todos:e.todos.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{completed:a})}))}}))},e.clearCompleted=function(){e.setState((function(e){return{todos:e.todos.filter((function(e){return!e.completed}))}}))},e.setActiveTab=function(t){e.setState({activeTab:t})},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(){var e=this.state.todos;localStorage.setItem("storage",JSON.stringify(e))}},{key:"render",value:function(){var e=this.state,t=e.todos,a=e.activeTab,n=t.every((function(e){return e.completed})),c=[];switch(a){case"active":c=t.filter((function(e){return!e.completed}));break;case"completed":c=t.filter((function(e){return e.completed}));break;default:c=t}return o.a.createElement("section",{className:"todoapp"},o.a.createElement(v,{addTodo:this.addTodo}),o.a.createElement("section",{className:"main"},t.length>0&&o.a.createElement(S,{toggleAll:this.toggleAll,allSelected:n}),o.a.createElement(y,{todos:c,checkedTodo:this.checkedTodo,deleteTodo:this.deleteTodo})),t.length>0&&o.a.createElement(O,{todos:t,clearCompleted:this.clearCompleted,setActiveTab:this.setActiveTab,activeTab:a}))}}]),a}(o.a.Component);r.a.render(o.a.createElement(N,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.66b7753e.chunk.js.map