(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(e,t,n){e.exports={listButtons:"FeedbackOptions_listButtons__9MO9u",listItem:"FeedbackOptions_listItem__3rxMg",button:"FeedbackOptions_button__15RG1"}},,function(e,t,n){e.exports={listItem:"StatisticsItem_listItem__3tPGT",itemTitle:"StatisticsItem_itemTitle__NpQF4",itemValue:"StatisticsItem_itemValue__3d7Jt"}},,function(e,t,n){e.exports={container:"Section_container__E5Ty5",title:"Section_title__2_G44"}},,,,function(e,t,n){e.exports={App:"App_App__3n5eN"}},,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(2),s=n.n(c),i=n(6),r=n.n(i),o=(n(17),n(7)),l=n(8),u=n(11),b=n(10),d=n(5),j=n.n(d),m=function(e){var t=e.title,n=e.children;return Object(a.jsxs)("div",{className:j.a.container,children:[Object(a.jsx)("span",{className:j.a.title,children:t}),n]})},h=n(1),O=n.n(h),f=function(e){var t=e.onLeaveFeedback;return Object(a.jsxs)("ul",{className:O.a.listButtons,children:[Object(a.jsx)("li",{className:O.a.listItem,children:Object(a.jsx)("button",{className:O.a.button,onClick:function(){return t("good")},children:"Good"})}),Object(a.jsx)("li",{className:O.a.listItem,children:Object(a.jsx)("button",{className:O.a.button,onClick:function(){return t("neutral")},children:"Neutral"})}),Object(a.jsx)("li",{className:O.a.listItem,children:Object(a.jsx)("button",{className:O.a.button,onClick:function(){return t("bad")},children:"Bad"})})]})},v=function(e){var t=e.onLeaveFeedback;return Object(a.jsx)(m,{title:"Feedback",children:Object(a.jsx)(f,{onLeaveFeedback:t})})},x=n(3),p=n.n(x),k=function(e){var t=e.name,n=e.value,c=e.isPercent;return Object(a.jsxs)("li",{className:p.a.listItem,children:[Object(a.jsxs)("span",{className:p.a.itemTitle,children:[t,":"]}),Object(a.jsxs)("span",{className:p.a.itemValue,children:[n," ",c?"%":null]})]})};k.defaultProps={value:0,isPercent:!1};var _=k,g=function(e){var t=e.message;return Object(a.jsx)("h2",{children:t})},F=function(e){var t=e.good,n=e.neutral,c=e.bad,s=e.total,i=e.percent;return Object(a.jsx)(m,{title:"Statistics",children:s?Object(a.jsxs)("ul",{children:[Object(a.jsx)(_,{name:"Good",value:t}),Object(a.jsx)(_,{name:"Neutral",value:n}),Object(a.jsx)(_,{name:"Bad",value:c}),Object(a.jsx)(_,{name:"Total",value:s}),Object(a.jsx)(_,{name:"Positive feedback",value:i,isPercent:!0})]}):Object(a.jsx)(g,{message:"No feedback given"})})},N=n(9),I=n.n(N),P=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.increment=function(t){switch(t){case"good":e.setState((function(e){return{good:e.good+1}}));break;case"neutral":e.setState((function(e){return{neutral:e.neutral+1}}));break;case"bad":e.setState((function(e){return{bad:e.bad+1}}));break;default:console.log("Criminal value! =)")}},e}return Object(l.a)(n,[{key:"countTotalFeedback",value:function(){return Object.values(this.state).reduce((function(e,t){return e+t}),0)}},{key:"countPositiveFeedbackPercentage",value:function(){return Math.floor(100*this.state.good/this.countTotalFeedback())}},{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad;return Object(a.jsxs)("div",{className:I.a.App,children:[Object(a.jsx)(v,{onLeaveFeedback:this.increment}),Object(a.jsx)(F,{good:t,neutral:n,bad:c,total:this.countTotalFeedback(),percent:this.countPositiveFeedbackPercentage()})]})}}]),n}(c.Component),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(P,{})}),document.getElementById("root")),S()}],[[18,1,2]]]);
//# sourceMappingURL=main.443aacff.chunk.js.map