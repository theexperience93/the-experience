(this["webpackJsonpthe-experience"]=this["webpackJsonpthe-experience"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo-hvit-nopadding.59b0f1e5.png"},,function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){e.exports=a.p+"static/media/AvenirLTStd-Book.ecb0c2ae.otf"},function(e,t,a){e.exports=a.p+"static/media/AvenirLTStd-Medium.4f995fa4.otf"},function(e,t,a){e.exports=a.p+"static/media/AvenirLTStd-Roman.b1d7c6e0.otf"},function(e,t,a){e.exports=a.p+"static/media/Avenir-Black.d751de38.otf"},function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(6),i=a.n(c),r=(a(14),a(15),a(16),a(17),a(18),a(4)),s=a(8),l=a(2),m=a(3),u=a.n(m),p=[{key:"country_and_team",title:"We want to know who\u2019s interested in joining this experience, which country and team are you applying for?",type:"SMALL"},{key:"motivation",title:"What is your teams motivation for playing in The Experience?",type:"LARGE"},{key:"why_interested",title:"How did you hear about the experience, and why are you interested to apply?",type:"LARGE"},{key:"why_your_team",title:"Why should we pick you to be a part of this experience with us?",type:"LARGE"},{key:"contact_information",title:"Please leave your contact information to contact you in case your team is selected to attend The Experience. Email, phone-number and name",type:"LARGE"}],d=(a(22),function(e){var t=e.numberFilled,a=e.numberOfDots;return o.a.createElement("div",{className:"progress-container"},o.a.createElement("div",{className:"progress-bar"},Array(a).fill().map((function(e,a){return o.a.createElement("div",{key:a,className:a<t?"dot filled":"dot"})}))))}),f=function(e){var t=e.inputRef,a=Object(n.useState)(0),c=Object(l.a)(a,2),i=c[0],r=c[1],m=Object(n.useState)(["","","","",""]),f=Object(l.a)(m,2),h=f[0],y=f[1],E=Object(n.useState)("INITIAL"),b=Object(l.a)(E,2),v=b[0],g=b[1],w=p[i];return o.a.createElement("form",{className:"form-wrapper"},o.a.createElement("h3",{className:"form-title"},"To give you the best volleyball experience in history, we need to ask you some questions about you and your team"),"DONE"===v?o.a.createElement("div",{className:"done-message"},"Thanks for applying! We will shortly send you a confirmation email, and require more information about your team. If you have any questions, feel free to reach out to us on facebook or Instagram!"):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"form-input-container"},o.a.createElement("label",{className:"form-inputfield-label"},w.title),o.a.createElement("textarea",{ref:t,className:"form-inputfield ".concat("LARGE"===w.type?"large":""),placeholder:"Answer...",value:h[i],onChange:function(e){var t=Object(s.a)(h);t[i]=e.target.value,y(t)}}),o.a.createElement("div",{className:"form-button-container"},i>0&&o.a.createElement("span",{className:"back-button",onClick:function(){return r(Math.max(0,i-1))}},"Back"),o.a.createElement("button",{className:"submit-button",onClick:function(){i===p.length-1?(!function(e){u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://us-central1-the-experience-262716.cloudfunctions.net/signup",t.next=3,u.a.awrap(fetch("https://us-central1-the-experience-262716.cloudfunctions.net/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({records:[{fields:{country_and_team:e[0],motivation:e[1],why_interested:e[2],why_your_team:e[3],contact_information:e[4]}}]})}));case 3:case"end":return t.stop()}}))}(h),g("DONE")):(r(i+1),t.current.focus())},disabled:""===h[i],type:"button"},i===p.length-1?"Apply":"Next")),o.a.createElement(d,{numberFilled:i+1,numberOfDots:p.length}))))},h=a(7),y=a.n(h),E=(a(23),a(24),function(){Object(n.useEffect)((function(){r.a.initialize("UA-154697902-1"),r.a.event({category:"View",action:"Page loaded"})}),[]);var e=Object(n.useRef)(null);return o.a.createElement("div",{className:"app"},o.a.createElement("div",{className:"header-container"},o.a.createElement("div",{className:"info-container"},o.a.createElement("h1",{className:"title"}," The Experience "),o.a.createElement("h2",{className:"subtitle"}," Oslo// 1-3 May 2020 "),o.a.createElement("p",{className:"description"},"For up and coming volleyball teams in Europe with a prizepool of \u20ac20\xa0000")),o.a.createElement("div",{className:"hexagon-top-yellow"}),o.a.createElement("div",{className:"hexagon-left-blue"}),o.a.createElement("div",{className:"hexagon-top-blue"}),o.a.createElement("div",{className:"hexagon-right-yellow"}),o.a.createElement("div",{className:"button-container"},o.a.createElement("button",{className:"apply-button",onClick:function(){window.scrollTo({behavior:"smooth",top:e.current.offsetTop}),e.current.focus()}},"Apply now")),o.a.createElement("img",{src:y.a,className:"x-logo",alt:"x-logo"})),o.a.createElement("div",{className:"bottom-content"},o.a.createElement(f,{inputRef:e}),o.a.createElement("h2",{className:"the-experience-quote"},"The Experience"),o.a.createElement("p",{className:"the-experience-sound"},"/\xf0\u0259 \u025bk\u02c8sp\u026a\u0259r\u026a\u0259ns/"),o.a.createElement("p",{className:"the-experience-meaning"},"the event or occurence which leads an impression on someone")))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.a433b661.chunk.js.map