(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{40:function(e,t,r){},41:function(e,t,r){"use strict";r.r(t);var n=r(2),s=r.n(n),c=r(12),o=r.n(c),a=r(0),i=function(){return Object(a.jsxs)("header",{children:[Object(a.jsx)("h1",{children:"Employee Directory"}),Object(a.jsx)("p",{children:"Click arrows on columns to filter, or use the search bar to narrow your results."})]})},l=r(13),d=r(16),j=r(15),h=r(14),m=r.n(h),u=function(){return m.a.get("https://randomuser.me/api/?nat=us&results=30")},b=function(e){var t=function(e){var t=e.slice(0,10).split("-");return t[1]+"-"+t[2]+"-"+t[0]}(e.dob);return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsx)("img",{alt:e.firstName,src:e.icon})}),Object(a.jsxs)("td",{children:[e.firstName," ",e.lastName]}),Object(a.jsx)("td",{children:e.email}),Object(a.jsx)("td",{children:e.phone}),Object(a.jsx)("td",{children:t}),Object(a.jsx)("td",{children:e.address})]})};var p=function(e){return Object(a.jsx)("form",{children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"search",children:"Search:"}),Object(a.jsx)("input",{onChange:function(t){return e.sort(t)},name:"search",type:"text",className:"form-control",placeholder:"Search For an Employee"})]})})},O=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(){var e;Object(l.a)(this,r);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={search:"",employees:[],employeesSorted:[],sorted:!1},e.componentDidMount=function(){u().then((function(t){e.setState({employees:t.data.results})})).catch((function(e){return console.log(e)}))},e.sortEmployees=function(){var t=e.state,r=t.employees,n=t.search,s=r.filter((function(e){return e.name.first.toLowerCase().includes(n.toLowerCase())||e.name.last.toLowerCase().includes(n.toLowerCase())||e.email.toLowerCase().includes(n.toLowerCase())}));e.setState({employeesSorted:s})},e.sort=function(t){e.setState({search:t.target.value},(function(){e.sortEmployees(),e.setState({sorted:!0})}))},e.render=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(p,{name:"search",sort:e.sort,label:"Search"}),Object(a.jsxs)("table",{children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Image"}),Object(a.jsx)("th",{children:"Name"}),Object(a.jsx)("th",{children:"Email"}),Object(a.jsx)("th",{children:"Phone #"}),Object(a.jsx)("th",{children:"Date of Birth"}),Object(a.jsx)("th",{children:"Address"})]})}),Object(a.jsx)("tbody",{children:e.state.sorted?e.state.employeesSorted.map((function(e){return Object(a.jsx)(b,{icon:e.picture.thumbnail,firstName:e.name.first,lastName:e.name.last,email:e.email,phone:e.cell,dob:e.dob.date,address:e.location.street.number+" "+e.location.street.name+", "+e.location.city+", "+e.location.state+" "+e.location.postcode},e.id.value)})):e.state.employees.map((function(e){return Object(a.jsx)(b,{icon:e.picture.thumbnail,firstName:e.name.first,lastName:e.name.last,email:e.email,phone:e.cell,dob:e.dob.date,address:e.location.street.number+" "+e.location.street.name+", "+e.location.city+", "+e.location.state+" "+e.location.postcode},e.id.value)}))})]})]})},e}return r}(n.Component);r(40);var f=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(i,{}),Object(a.jsx)(O,{})]})};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.550ccf2d.chunk.js.map