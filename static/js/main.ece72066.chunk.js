(this["webpackJsonphealth-tracker"]=this["webpackJsonphealth-tracker"]||[]).push([[0],{109:function(e,t,s){e.exports={spinner:"styles_spinner__1uiLu"}},23:function(e,t,s){e.exports={question:"styles_question__sgw-d",answers:"styles_answers__VaB2-",answer:"styles_answer__31oYN",selected:"styles_selected__19zw0",sendAnswer:"styles_sendAnswer__3ZQ9w"}},269:function(e,t,s){},270:function(e,t,s){"use strict";s.r(t);var a=s(26),r=s(11),c=s(10),l=s(5),n=s(15),i=s(6),o=s(115),d=s(1),j=s(13),b=s.n(j),O=s(9),u=s.n(O),h=s(108),m=s.n(h),_=s(109),p=s.n(_),g=s(0);const x=e=>{let{isLoading:t}=e;const s=t&&Object(g.jsx)("div",{className:p.a.spinner,children:Object(g.jsx)(m.a,{type:"Triangle",color:"#FD0E35",height:60,width:60})});return Object(g.jsx)(g.Fragment,{children:s})};class y{constructor(e){this.root=void 0,this.root=e,Object(c.d)(this,{},{autoBind:!0})}}class v{constructor(e){this.root=void 0,this.root=e,Object(c.d)(this,{},{autoBind:!0})}}class w{constructor(){this.isLoading=void 0,this.isLoading=!1,Object(c.d)(this,{},{autoBind:!0})}}const f=new class{constructor(){this.trackerStore=void 0,this.userStore=void 0,this.uiStore=void 0,this.trackerStore=new y(this),this.userStore=new v(this),this.uiStore=new w}},E=Object(d.createContext)(f),S=Object.freeze({SET_TOKEN:"SET_TOKEN",SET_ERROR:"SET_ERROR",RESET_ERROR:"RESET_ERROR"}),R=Object.freeze({setToken:e=>({type:S.SET_TOKEN,payload:e}),setError:e=>({type:S.SET_ERROR,error:!0,payload:e}),resetError:()=>({type:S.RESET_ERROR})});var N=s(20),k=s.n(N);const T="https://lab.lectrum.io/rtx/api/fitness",L={getMe:async e=>{if(!e)throw new Error("\u0442\u043e\u043a\u0435\u043d \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d");const t=await k.a.get(`${T}/profile`,{headers:{authorization:`Bearer ${e}`}});return null===t||void 0===t?void 0:t.data},create:async e=>{const{data:t}=await k.a.post(`${T}/users`,e);return t.data},updateMe:async(e,t)=>{if(!t)throw new Error("\u0442\u043e\u043a\u0435\u043d \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d");const{data:s}=await k.a.put(`${T}/users`,e,{headers:{authorization:`Bearer ${t}`}});return s},login:async e=>{const{email:t,password:s}=e,{data:a}=await k.a.get(`${T}/login`,{headers:{authorization:`Basic ${window.btoa(`${t}:${s}`)}`}});return a.data},logout:async e=>{if(!e)throw new Error("\u0442\u043e\u043a\u0435\u043d \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d");await k.a.get(`${T}/logout`,{headers:{authorization:`Bearer ${e}`}})}},$={getScore:async e=>{if(!e)throw new Error("\u0442\u043e\u043a\u0435\u043d \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d");const{data:t}=await k.a.get(`${T}/reports`,{headers:{authorization:`Bearer ${e}`}});return t.data},getRecord:async(e,t)=>{if(!t)throw new Error("\u0442\u043e\u043a\u0435\u043d \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d");const s=new URLSearchParams({kind:e}),{data:a}=await k.a.get(`${T}/records?${s}`,{headers:{authorization:`Bearer ${t}`}});return a},createRecord:async(e,t)=>{let{type:s,record:a}=e;if(!t)throw new Error("\u0442\u043e\u043a\u0435\u043d \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d");const r=new URLSearchParams({kind:s}),{data:c}=await k.a.post(`${T}/records?${r}`,{value:a},{headers:{authorization:`Bearer ${t}`}});return c},updateRecord:async(e,t,s)=>{let{type:a,record:r}=e;if(!s)throw new Error("\u0442\u043e\u043a\u0435\u043d \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d");const c=new URLSearchParams({kind:a}),{data:l}=await k.a.put(`${T}/records/${t}/?${c}`,{value:r},{headers:{authorization:`Bearer ${s}`}});return l},removeAllRecords:async e=>{if(!e)throw new Error("\u0442\u043e\u043a\u0435\u043d \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d");await k.a.delete(`${T}/reports/reset`,{method:"DELETE",headers:{authorization:`Bearer ${e}`}})}},I=Object.freeze({users:L,tracker:$}),C=Object.freeze({SET_SCORE:"SET_SCORE",SET_SCORE_ISLOADING:"SET_SCORE_ISLOADING",SET_RECORD_SCORE:"SET_RECORD_SCORE",GET_RECORD_SCORE:"GET_RECORD_SCORE",SET_UPDATE_SCORE:"SET_UPDATE_SCORE"}),q=Object.freeze({setScore:e=>({type:C.SET_SCORE,payload:e}),scoreIsLoading:e=>({type:C.SET_SCORE_ISLOADING,payload:e}),setRecordScore:e=>({type:C.SET_RECORD_SCORE,payload:e}),getRecordScore:e=>({type:C.GET_RECORD_SCORE,payload:e}),setUpdateScore:e=>({type:C.SET_UPDATE_SCORE,payload:e})}),F=()=>async e=>{try{e(q.scoreIsLoading(!0));const t=localStorage.getItem("token"),s=await I.tracker.getScore(t);e(q.setScore(s))}catch(t){const{message:s}=t;e(R.setError(s))}finally{e(q.scoreIsLoading(!1))}},A=(e,t)=>async s=>{try{s(q.scoreIsLoading(!0));const a=await I.tracker.createRecord(e,t);s(q.setRecordScore(a))}catch(a){const{message:e}=a;s(R.setError(e))}finally{s(q.scoreIsLoading(!1))}},D=(e,t)=>async s=>{try{s(q.scoreIsLoading(!0));const a=localStorage.getItem("token"),r=await I.tracker.updateRecord(e,t,a);s(q.setUpdateScore(r))}catch(a){const{message:e}=a;s(R.setError(e))}finally{s(q.scoreIsLoading(!1))}},P=e=>e.auth.token,z=e=>e.score.score,B=e=>e.score.recordedScore,M=Object.freeze({SET_PROFILE:"SET_PROFILE",IS_LOADING:"IS_LOADING",UPDATE_PROFILE:"UPDATE_PROFILE"}),U=Object.freeze({setProfile:e=>({type:M.SET_PROFILE,payload:e}),setIsLoading:e=>({type:M.IS_LOADING,payload:e}),updateProfile:e=>({type:M.UPDATE_PROFILE,payload:e})}),G=()=>async e=>{try{e(U.setIsLoading(!0));const t=localStorage.getItem("token"),s=await I.users.getMe(t);e(U.setProfile(s))}catch(t){const{message:s}=t;e(R.setError(s))}finally{e(U.setIsLoading(!1))}},K=e=>e.profile.user;var V=s(33),Q=s.n(V);const W=()=>{const e=Object(l.b)(),t=Object(i.h)(),s=localStorage.getItem("token"),a=(()=>{const e=Object(i.h)(),t=Object(l.b)(),s=Object(n.useMutation)((e=>I.users.logout(e)));return Object(d.useEffect)((()=>{s.isSuccess&&(t(R.setToken("")),t(U.setProfile(null)),e("/login"))}),[s.isSuccess]),s})(),c=Object(l.c)(K),o=b()([Q.a.avatar,{[Q.a.male]:"m"===(null===c||void 0===c?void 0:c.sex),[Q.a.female]:"f"===(null===c||void 0===c?void 0:c.sex)}]),j=c?`${c.fname}  ${c.lname}`:"";return Object(d.useEffect)((()=>{e(G())}),[]),Object(g.jsx)("div",{className:o,children:Object(g.jsxs)("div",{className:Q.a.column,children:[Object(g.jsx)(r.b,{className:Q.a.name,to:"/profile",children:j}),Object(g.jsx)("button",{onClick:async()=>{await a.mutateAsync(s),t("/login")},className:Q.a.logout,children:"\u0412\u044b\u0439\u0442\u0438"})]})})},Z=e=>{const t=Object(i.h)(),s=Object(l.b)(),a=Object(l.c)(P),c=Object(l.c)(z),n=Object(l.c)(K),{pathname:o}=Object(i.g)(),{uiStore:j}=Object(d.useContext)(E),{isLoading:O}=j,{children:h,center:m,disabledWidget:_}=e,p=Object(i.e)(Be.root.url,o),y=c,v=b()([u.a.sidebar,{[u.a.male]:"m"===(null===n||void 0===n?void 0:n.sex),[u.a.female]:"f"===(null===n||void 0===n?void 0:n.sex)}]),w=b()(u.a.content,{[u.a.center]:m}),f=O&&Object(g.jsx)(x,{isLoading:O}),S=null!==y&&!_&&Object(g.jsxs)("div",{className:u.a.widget,children:[Object(g.jsx)("span",{className:u.a.title,children:"Life Score"}),Object(g.jsxs)("div",{className:u.a.module,children:[Object(g.jsx)("span",{className:u.a.score,style:{bottom:`${y}%`},children:y}),Object(g.jsx)("div",{className:u.a.progress,children:Object(g.jsx)("div",{className:u.a.fill,style:{height:`${y}%`}})}),Object(g.jsx)("span",{className:b()([u.a.label,u.a.level1]),children:"Off Track"}),Object(g.jsx)("span",{className:b()([u.a.label,u.a.level2]),children:"Imbalanced"}),Object(g.jsx)("span",{className:b()([u.a.label,u.a.level3]),children:"Balanced"}),Object(g.jsx)("span",{className:b()([u.a.label,u.a.level4]),children:"Healthy"}),Object(g.jsx)("span",{className:b()([u.a.label,u.a.level5]),children:"Perfect Fit"})]})]}),R=!p&&Object(g.jsx)(r.b,{to:Be.root.url,className:u.a.homeLink,children:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"});return Object(d.useEffect)((()=>{a||t("/login"),s(F()),s(G())}),[c]),Object(g.jsxs)("section",{className:u.a.profile,children:[Object(g.jsx)("div",{className:v,children:f}),Object(g.jsxs)("div",{className:u.a.wrap,children:[Object(g.jsxs)("div",{className:u.a.header,children:[Object(g.jsx)("div",{children:R}),Object(g.jsx)(W,{})]}),Object(g.jsxs)("div",{className:w,children:[h,S]})]})]})};var J=s(4),Y=s.n(J);const H=()=>Object(g.jsx)("div",{className:Y.a.dashboard,children:Object(g.jsxs)("div",{className:Y.a.navigation,children:[Object(g.jsx)("h1",{children:"\u041a\u0430\u043a \u0443 \u0442\u0435\u0431\u044f \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442 \u0434\u0435\u043d\u044c?"}),Object(g.jsxs)("div",{className:Y.a.items,children:[Object(g.jsxs)(r.b,{className:`${Y.a.link} ${Y.a.category0}`,to:"/breakfast",children:[Object(g.jsx)("span",{className:Y.a.title,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0432\u0442\u0440\u0430\u043a"}),Object(g.jsx)("span",{className:Y.a.description,children:"\u0425\u043e\u0440\u043e\u0448\u0438\u0439 \u0437\u0430\u0432\u0442\u0440\u0430 \u043e\u0447\u0435\u043d\u044c \u0432\u0430\u0436\u0435\u043d "})]}),Object(g.jsxs)(r.b,{className:`${Y.a.link} ${Y.a.category1}`,to:"/lunch",children:[Object(g.jsx)("span",{className:Y.a.title,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0431\u0435\u0434"}),Object(g.jsx)("span",{className:Y.a.description,children:"\u0423\u0441\u043f\u0435\u0448\u043d\u044b\u0435 \u043b\u044e\u0434\u0438 \u043e\u0431\u0435\u0434\u0430\u044e\u0442"})]}),Object(g.jsxs)(r.b,{className:`${Y.a.link} ${Y.a.category2}`,to:"/dinner",children:[Object(g.jsx)("span",{className:Y.a.title,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0443\u0436\u0438\u043d"}),Object(g.jsx)("span",{className:Y.a.description,children:"\u041b\u0443\u0447\u0448\u0435 \u043d\u0435 \u0443\u0436\u0438\u043d\u0430\u0442\u044c \u0432\u043e\u043e\u0431\u0449\u0435"})]}),Object(g.jsxs)(r.b,{className:`${Y.a.link} ${Y.a.category3}`,to:"/steps",children:[Object(g.jsx)("span",{className:Y.a.title,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"}),Object(g.jsx)("span",{className:Y.a.description,children:"\u041f\u0435\u0448\u0438\u0435 \u043f\u0440\u043e\u0433\u0443\u043b\u043a\u0438 \u044d\u0442\u043e \u043c\u0438\u043d\u0438\u043c\u0443\u043c"})]}),Object(g.jsxs)(r.b,{className:`${Y.a.link} ${Y.a.category4}`,to:"/fruits",children:[Object(g.jsx)("span",{className:Y.a.title,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u0440\u0443\u043a\u0442\u044b"}),Object(g.jsx)("span",{className:Y.a.description,children:"\u0424\u0440\u0443\u043a\u0442\u044b \u043f\u043e\u0434\u043d\u0438\u043c\u0430\u044e\u0442 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435"})]}),Object(g.jsxs)(r.b,{className:`${Y.a.link} ${Y.a.category5}`,to:"/vegetables",children:[Object(g.jsx)("span",{className:Y.a.title,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0432\u043e\u0449\u0438"}),Object(g.jsx)("span",{className:Y.a.description,children:"\u041e\u0432\u043e\u0449\u0438 \u043e\u0447\u0435\u043d\u044c \u0432\u0430\u0436\u043d\u044b"})]}),Object(g.jsxs)(r.b,{className:`${Y.a.link} ${Y.a.category6}`,to:"/junk",children:[Object(g.jsx)("span",{className:Y.a.title,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u0430\u0441\u0442\u0444\u0443\u0434"}),Object(g.jsx)("span",{className:Y.a.description,children:"\u042d\u0442\u0430 \u0435\u0434\u0430 \u043e\u0447\u0435\u043d\u044c \u0432\u0440\u0435\u0434\u043d\u0430\u044f"})]}),Object(g.jsxs)(r.b,{className:`${Y.a.link} ${Y.a.category7}`,to:"/water",children:[Object(g.jsx)("span",{className:Y.a.title,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u043e\u0434\u0443"}),Object(g.jsx)("span",{className:Y.a.description,children:"\u0412\u043e\u0434\u0430 \u044d\u0442\u043e \u0436\u0438\u0437\u043d\u044c"})]}),Object(g.jsxs)(r.b,{className:`${Y.a.link} ${Y.a.category8}`,to:"/sleep",children:[Object(g.jsx)("span",{className:Y.a.title,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u043d"}),Object(g.jsx)("span",{className:Y.a.description,children:"\u0421\u043f\u0430\u0442\u044c \u043d\u0443\u0436\u043d\u043e \u0432\u0441\u0435\u043c"})]}),Object(g.jsxs)(r.b,{className:`${Y.a.link} ${Y.a.category9}`,to:"/coffee",children:[Object(g.jsx)("span",{className:Y.a.title,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u0444\u0435"}),Object(g.jsx)("span",{className:Y.a.description,children:"\u041c\u043e\u0436\u043d\u043e \u0438 \u0431\u0435\u0437 \u043d\u0435\u0433\u043e"})]})]})]})}),X=Object(o.a)((()=>Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(Z,{children:Object(g.jsx)(H,{})})})));var ee=s(19),te=s(36),se=s(38),ae=s.n(se),re=s(12);const ce=re.b().shape({email:re.c().email().required("*"),password:re.c().min(8,"\u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 = ${min} \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").max(16,"\u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 = ${min} \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("*")});var le=s(37),ne=s.n(le);const ie=e=>{let{placeholder:t,type:s,register:a,options:r,tag:c,error:l,label:n}=e,i=Object(g.jsx)("input",{placeholder:t,type:s,...a});if("textarea"===c&&(i=Object(g.jsx)("textarea",{placeholder:t,...a})),"select"===c){const e=null===r||void 0===r?void 0:r.map((e=>Object(g.jsx)("option",{value:e.value,children:e.name},e.value)));i=Object(g.jsx)("select",{...a,children:e})}return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("label",{children:[Object(g.jsx)("div",{children:Object(g.jsx)("span",{className:ne.a.error,children:null===l||void 0===l?void 0:l.message})}),n]}),i]})};ie.defaultProps={type:"text",tag:"input"};const oe=()=>{const e=(()=>{const e=Object(l.b)(),t=Object(i.h)(),s=Object(n.useMutation)((e=>I.users.login(e)),{onError(t){const{response:s}=t;401===(null===s||void 0===s?void 0:s.status)?e(R.setError("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c. \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0441\u0442\u044c \u0432\u0432\u0435\u0434\u0451\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445.")):e(R.setError("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u0447\u0435\u0440\u0435\u0437 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043c\u0438\u043d\u0443\u0442 \u0438\u043b\u0438 \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c \u043a \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0443."))}});return Object(d.useEffect)((()=>{if(s.isSuccess){const a=null===s||void 0===s?void 0:s.data;e(R.setToken(a)),localStorage.setItem("token",a),t("/")}}),[s.isSuccess]),s})(),t=Object(ee.d)({mode:"onTouched",resolver:Object(te.a)(ce)}),s=t.handleSubmit((async s=>{await e.mutateAsync(s),t.reset()}));return Object(g.jsx)("section",{className:ae.a.login,children:Object(g.jsxs)("div",{className:ae.a.content,children:[Object(g.jsx)("h1",{children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!"}),Object(g.jsx)("div",{className:ae.a.inputRow,children:Object(g.jsx)(ie,{label:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043f\u043e\u0447\u0442\u0430",error:t.formState.errors.email,register:t.register("email"),type:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u044e \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043f\u043e\u0447\u0442\u0443"})}),Object(g.jsx)("div",{className:ae.a.inputRow,children:Object(g.jsx)(ie,{label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",error:t.formState.errors.password,register:t.register("password"),placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"})}),Object(g.jsxs)("div",{children:[Object(g.jsx)("button",{type:"submit",onClick:s,children:"\u0412\u043e\u0439\u0442\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443"}),Object(g.jsx)("div",{className:ae.a.loginLink,children:Object(g.jsxs)("span",{children:["\u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u043d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430",Object(g.jsx)(r.b,{to:"/registration",children:" \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c"})]})})]})]})})},de="\u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 = ${min} \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",je="\u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 = ${min} \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",be=re.b().shape({fname:re.c().min(5,de).max(40,je).required("*"),lname:re.c().min(5,de).max(40,je).required("*"),email:re.c().email().required("*"),password:re.c().min(8,de).max(16,je).required("*"),age:re.a().required("*").max(99),height:re.a().required("*"),weight:re.a().required("*")});var Oe=s(7),ue=s.n(Oe);const he=()=>{const e=(()=>{const e=Object(l.b)(),t=Object(i.h)(),s=Object(n.useMutation)((e=>I.users.create(e)));return Object(d.useEffect)((()=>{if(s.isSuccess){const a=null===s||void 0===s?void 0:s.data;e(R.setToken(a)),localStorage.setItem("token",a),t("/")}}),[s.isSuccess]),s})(),[t,s]=Object(d.useState)(""),a=Object(ee.d)({mode:"onTouched",resolver:Object(te.a)(be)}),r=a.handleSubmit((async s=>{const r={sex:t,fname:s.fname,lname:s.lname,password:s.password,age:s.age,email:s.email,height:s.height,weight:s.weight};await e.mutateAsync(r),a.reset()})),c=b()(ue.a.female,{[ue.a.selected]:"f"===t}),o=b()(ue.a.male,{[ue.a.selected]:"m"===t});return Object(g.jsxs)("section",{className:ne.a.registration,children:[Object(g.jsx)("div",{className:ne.a.left,children:Object(g.jsxs)("div",{className:ue.a.profile,children:[Object(g.jsx)("h1",{children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"}),Object(g.jsxs)("div",{className:ue.a.gender,children:[Object(g.jsx)("div",{onClick:()=>s("f"),className:c,children:Object(g.jsx)("span",{children:"\u0416\u0435\u043d\u0449\u0438\u043d\u0430"})}),Object(g.jsx)("div",{onClick:()=>s("m"),className:o,children:Object(g.jsx)("span",{children:"\u041c\u0443\u0436\u0447\u0438\u043d\u0430"})})]}),Object(g.jsx)("div",{className:ue.a.inputRow,children:Object(g.jsx)(ie,{label:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043f\u043e\u0447\u0442\u0430",type:"text",register:a.register("email"),error:a.formState.errors.email,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 email"})}),Object(g.jsx)("div",{className:ue.a.inputRow,children:Object(g.jsx)(ie,{label:"\u0418\u043c\u044f",type:"text",register:a.register("fname"),error:a.formState.errors.fname,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0435 \u0438\u043c\u044f"})}),Object(g.jsx)("div",{className:ue.a.inputRow,children:Object(g.jsx)(ie,{label:"\u0418\u043c\u044f",type:"text",register:a.register("lname"),error:a.formState.errors.lname,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u044e \u0444\u0430\u043c\u0438\u043b\u0438\u044e"})}),Object(g.jsx)("div",{className:ue.a.inputRow,children:Object(g.jsx)(ie,{label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",register:a.register("password"),error:a.formState.errors.password,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"})}),Object(g.jsx)("div",{className:ue.a.inputRow,children:Object(g.jsx)(ie,{label:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442",type:"number",register:a.register("age"),error:a.formState.errors.age,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u0432\u043e\u0437\u0440\u0430\u0441\u0442"})}),Object(g.jsx)("div",{className:ue.a.inputRow,children:Object(g.jsx)(ie,{label:"\u0420\u043e\u0441\u0442",type:"number",register:a.register("height"),error:a.formState.errors.height,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u0440\u043e\u0441\u0442"})}),Object(g.jsx)("div",{className:ue.a.inputRow,children:Object(g.jsx)(ie,{label:"\u0412\u0435\u0441",type:"number",register:a.register("weight"),error:a.formState.errors.weight,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u0432\u0435\u0441"})}),Object(g.jsxs)("div",{className:ue.a.controls,children:[Object(g.jsx)("button",{className:ue.a.clearData,children:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c"}),Object(g.jsx)("button",{type:"submit",onClick:r,children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})]})}),Object(g.jsx)("div",{className:ne.a.right})]})};var me=s(23),_e=s.n(me);const pe=e=>{let{question:t,answer1:s,answer2:a,answer3:r,value1:c,value2:n,value3:i}=e;const o=Object(l.b)(),j=Object(l.c)(B),O=Object(l.c)(P),u=null===j||void 0===j?void 0:j.hash,h=null===j||void 0===j?void 0:j.value,[m,_]=Object(d.useState)(),p=b()(_e.a.answer,{[_e.a.selected]:m===c}),x=b()(_e.a.answer,{[_e.a.selected]:m===n}),y=b()(_e.a.answer,{[_e.a.selected]:m===i});return Object(d.useEffect)((()=>{j&&o(F()),u&&_(h)}),[j]),Object(g.jsxs)("div",{className:_e.a.question,children:[Object(g.jsx)("h1",{children:t}),Object(g.jsxs)("div",{className:_e.a.answers,children:[Object(g.jsx)("span",{className:p,onClick:()=>_(c),children:s}),Object(g.jsx)("span",{className:x,onClick:()=>_(n),defaultValue:"light",children:a}),r?Object(g.jsx)("span",{className:y,onClick:()=>_(i),defaultValue:"heavy",children:r}):null]}),Object(g.jsx)("button",{onClick:()=>(()=>{if(m){const e={type:window.location.pathname.slice(1),record:m};o(u?D(e,u):A(e,O))}})(),disabled:!m,className:_e.a.sendAnswer,children:"\u041e\u0442\u0432\u0435\u0442\u0438\u0442\u044c"})]})},ge=e=>e.score.getRecord,xe=e=>{const t=Object(l.b)(),s=Object(l.c)(ge);Object(d.useEffect)((()=>{var a;"undefined"===typeof s&&t((a=e,async e=>{try{e(q.scoreIsLoading(!0));const t=localStorage.getItem("token"),{data:s}=await I.tracker.getRecord(a,t);e(q.getRecordScore(s))}catch(t){const{message:s}=t;e(R.setError(s))}finally{e(q.scoreIsLoading(!1))}}))}),[s,e])},ye=()=>(xe("breakfast"),Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(pe,{question:"\u0422\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u0437\u0430\u0432\u0442\u0440\u0430\u043a\u0430\u043b?",answer1:"\u042f \u043d\u0435 \u0437\u0430\u0432\u0442\u0440\u0430\u043a\u0430\u043b",value1:"none",answer2:"\u0423 \u043c\u0435\u043d\u044f \u0431\u044b\u043b \u043b\u0435\u0433\u043a\u0438\u0439 \u0437\u0430\u0432\u0442\u0440\u0430\u043a",value2:"light",answer3:"\u042f \u043e\u0447\u0435\u043d\u044c \u043f\u043b\u043e\u0442\u043d\u043e \u043f\u043e\u043a\u0443\u0448\u0430\u043b",value3:"heavy"})})),ve=()=>(xe("lunch"),Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(pe,{question:"\u0422\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043e\u0431\u0435\u0434\u0430\u043b?",answer1:"\u042f \u043d\u0435 \u043e\u0431\u0435\u0434\u0430\u043b",value1:"none",answer2:"\u0423 \u043c\u0435\u043d\u044f \u0431\u044b\u043b \u043b\u0435\u0433\u043a\u0438\u0439 \u043e\u0431\u0435\u0434",value2:"light",answer3:"\u042f \u043e\u0447\u0435\u043d\u044c \u043f\u043b\u043e\u0442\u043d\u043e \u043f\u043e\u043a\u0443\u0448\u0430\u043b",value3:"heavy"})})),we=()=>(xe("dinner"),Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(pe,{question:"\u0422\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u0443\u0436\u0438\u043d\u0430\u043b?",answer1:"\u042f \u043d\u0435 \u0443\u0436\u0438\u043d\u0430\u043b",value1:"none",answer2:"\u0423 \u043c\u0435\u043d\u044f \u0431\u044b\u043b \u043b\u0435\u0433\u043a\u0438\u0439 \u0443\u0436\u0438\u043d",value2:"light",answer3:"\u042f \u043e\u0447\u0435\u043d\u044c \u043f\u043b\u043e\u0442\u043d\u043e \u043f\u043e\u043a\u0443\u0448\u0430\u043b",value3:"heavy"})})),fe=()=>(xe("fruits"),Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(pe,{question:"\u0422\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043a\u0443\u0448\u0430\u043b \u0444\u0440\u0443\u043a\u0442\u044b?",answer1:"\u0414\u0430",value1:!0,answer2:"\u041d\u0435\u0442",value2:!1})})),Ee=()=>(xe("vegetables"),Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(pe,{question:"\u0422\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043a\u0443\u0448\u0430\u043b \u043e\u0432\u043e\u0449\u0438?",answer1:"\u0414\u0430",value1:!0,answer2:"\u041d\u0435\u0442",value2:!1})})),Se=()=>(xe("junk"),Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(pe,{question:"\u0422\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043a\u0443\u0448\u0430\u043b \u0444\u0430\u0441\u0442-\u0444\u0443\u0434?",answer1:"\u0414\u0430",value1:!0,answer2:"\u041d\u0435\u0442",value2:!1})}));var Re=s(34),Ne=s.n(Re);const ke=e=>{let{title:t}=e;const s=Object(l.b)(),a=Object(l.c)(P),r=Object(l.c)(B),[c,n]=Object(d.useState)(0),i=null===r||void 0===r?void 0:r.hash,o=null===r||void 0===r?void 0:r.value,j=[...new Array(13)].map(((e,t)=>{const s=c>t,a=b()(Ne.a.element,{[Ne.a.selected]:s});return Object(g.jsx)("button",{className:a,onClick:()=>{const e=t+1;n(c===e?t-1:e)}},String(t))})),O=c&&250*c;return Object(d.useEffect)((()=>{i&&n(o),r&&s(F())}),[r]),Object(g.jsxs)("div",{className:Ne.a.question,children:[Object(g.jsx)("h1",{children:t}),Object(g.jsxs)("div",{className:Ne.a.elements,children:[j,Object(g.jsxs)("span",{className:Ne.a.size,children:[O," \u043c\u043b"]})]}),Object(g.jsx)("button",{onClick:()=>{const e={type:window.location.pathname.slice(1),record:c};s(i?D(e,a):A(e,a))},className:Ne.a.sendAnswer,children:"\u041e\u0442\u0432\u0435\u0442\u0438\u0442\u044c"})]})},Te=()=>(xe("water"),Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(ke,{title:"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u043e\u0434\u044b \u0442\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u0432\u044b\u043f\u0438\u043b?"})}));var Le=s(57),$e=s.n(Le);const Ie=e=>{let{questions:t,type:s,placeholder:a}=e;const[r,c]=Object(d.useState)(""),n=Object(l.b)(),i=Object(l.c)(B),o=Object(l.c)(P),j=null===i||void 0===i?void 0:i.hash,b=null===i||void 0===i?void 0:i.value;return Object(d.useEffect)((()=>{i&&n(F()),j&&c(b)}),[i]),Object(g.jsxs)("div",{className:$e.a.question,children:[Object(g.jsx)("h1",{children:t}),Object(g.jsx)("div",{className:$e.a.inputRow,children:Object(g.jsx)("input",{type:s,onChange:e=>c(e.target.value),placeholder:a})}),Object(g.jsx)("button",{onClick:()=>{const e={type:window.location.pathname.slice(1),record:r};n(j?D(e,o):A(e,o))},className:$e.a.sendAnswer,children:"\u041e\u0442\u0432\u0435\u0442\u0438\u0442\u044c"})]})},Ce=()=>(xe("sleep"),Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(Ie,{questions:"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0447\u0430\u0441\u043e\u0432 \u0442\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u0441\u043f\u0430\u043b?",type:"number",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0435 \u0447\u0438\u0441\u043b\u043e"})})),qe="\u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 = ${min} \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",Fe="\u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 = ${min} \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",Ae=re.b().shape({fname:re.c().min(5,qe).max(40,Fe).required("*"),lname:re.c().min(5,qe).max(40,Fe).required("*"),sex:re.c().required("*"),email:re.c().email().required("*"),age:re.a().required("*").max(99),height:re.a().required("*"),weight:re.a().required("*"),password:re.c().min(9,qe).max(16,Fe)}),De=()=>{const e=Object(l.c)(K),t=(()=>{const e=Object(l.b)(),t=Object(i.h)(),s=Object(n.useMutation)((e=>{const t=localStorage.getItem("token");return I.users.updateMe(e,t)}));return Object(d.useEffect)((()=>{var a,r;(null===(a=s.data)||void 0===a?void 0:a.data)&&(e(U.updateProfile(null===(r=s.data)||void 0===r?void 0:r.data)),t("/"))}),[s.isSuccess]),s})(),s=Object(l.b)(),a=Object(n.useMutation)((e=>I.tracker.removeAllRecords(e))),r=Object(ee.d)({mode:"onTouched",resolver:Object(te.a)(Ae),defaultValues:{sex:null===e||void 0===e?void 0:e.sex,fname:null===e||void 0===e?void 0:e.fname,lname:null===e||void 0===e?void 0:e.lname,email:null===e||void 0===e?void 0:e.email,password:"",age:null===e||void 0===e?void 0:e.age,height:null===e||void 0===e?void 0:e.height,weight:null===e||void 0===e?void 0:e.weight}}),c=b()("m"===(null===e||void 0===e?void 0:e.sex)?ue.a.male:ue.a.female,{[ue.a.selected]:null===e||void 0===e?void 0:e.sex}),o=r.handleSubmit((async e=>{await t.mutateAsync(e)}));return Object(g.jsxs)("div",{className:ue.a.profile,children:[Object(g.jsx)("h1",{children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"}),Object(g.jsx)("div",{className:ue.a.gender,children:Object(g.jsx)("div",{className:c})}),Object(g.jsx)("div",{className:ue.a.inputRow,children:Object(g.jsx)(ie,{label:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043f\u043e\u0447\u0442\u0430",type:"text",register:r.register("email"),error:r.formState.errors.email,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 email"})}),Object(g.jsx)("div",{className:ue.a.inputRow,children:Object(g.jsx)(ie,{label:"\u0418\u043c\u044f",type:"text",register:r.register("fname"),error:r.formState.errors.fname,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0435 \u0438\u043c\u044f"})}),Object(g.jsx)("div",{className:ue.a.inputRow,children:Object(g.jsx)(ie,{label:"\u0418\u043c\u044f",type:"text",register:r.register("lname"),error:r.formState.errors.lname,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u044e \u0444\u0430\u043c\u0438\u043b\u0438\u044e"})}),Object(g.jsx)("div",{className:ue.a.inputRow,children:Object(g.jsx)(ie,{label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",register:r.register("password"),error:r.formState.errors.password,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"})}),Object(g.jsx)("div",{className:ue.a.inputRow,children:Object(g.jsx)(ie,{label:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442",type:"number",register:r.register("age"),error:r.formState.errors.age,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u0432\u043e\u0437\u0440\u0430\u0441\u0442"})}),Object(g.jsx)("div",{className:ue.a.inputRow,children:Object(g.jsx)(ie,{label:"\u0420\u043e\u0441\u0442",type:"number",register:r.register("height"),error:r.formState.errors.height,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u0440\u043e\u0441\u0442"})}),Object(g.jsx)("div",{className:ue.a.inputRow,children:Object(g.jsx)(ie,{label:"\u0412\u0435\u0441",type:"number",register:r.register("weight"),error:r.formState.errors.weight,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u0432\u0435\u0441"})}),Object(g.jsxs)("div",{className:ue.a.controls,children:[Object(g.jsx)("button",{disabled:!r.watch("password"),className:ue.a.clearData,children:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c"}),Object(g.jsx)("button",{onClick:o,disabled:!r.watch("password"),children:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"})]}),Object(g.jsx)("button",{onClick:async()=>{const e=localStorage.getItem("token");await a.mutateAsync(e),s(q.setScore(0)),s(q.setRecordScore(null))},className:ue.a.clearAllRecords,children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0432\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"})]})},Pe=()=>(xe("coffee"),Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(pe,{question:"\u0422\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043f\u0438\u043b \u043a\u043e\u0444\u0435?",answer1:"\u042f \u043d\u0435 \u043f\u0438\u043b \u0441\u043e\u0432\u0441\u0435\u043c",value1:"none",answer2:"\u0412\u044b\u043f\u0438\u043b 1 \u0441\u0442\u0430\u043a\u0430\u043d",value2:"light",answer3:"\u0412\u044b\u043f\u0438\u043b 2 \u0438\u043b\u0438 \u0431\u043e\u043b\u044c\u0448\u0435 \u0441\u0442\u0430\u043a\u0430\u043d\u043e\u0432",value3:"heavy"})})),ze=()=>(xe("steps"),Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(Ie,{questions:"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0448\u0430\u0433\u043e\u0432 \u0442\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043f\u0440\u043e\u0448\u0435\u043b?",type:"number",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0435 \u0447\u0438\u0441\u043b\u043e"})})),Be=Object.freeze({root:{url:"/",page:X},login:{url:"/login",page:()=>Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(oe,{})})},registration:{url:"/registration",page:()=>Object(g.jsx)(he,{})},profile:{url:"/profile",page:()=>Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(Z,{center:!0,disabledWidget:!0,children:Object(g.jsx)(De,{})})})},breakfast:{url:"/breakfast",page:()=>Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(Z,{children:Object(g.jsx)(ye,{})})})},coffee:{url:"/coffee",page:()=>Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(Z,{children:Object(g.jsx)(Pe,{})})})},dinner:{url:"/dinner",page:()=>Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(Z,{children:Object(g.jsx)(we,{})})})},fruits:{url:"/fruits",page:()=>Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(Z,{children:Object(g.jsx)(fe,{})})})},junk:{url:"/junk",page:()=>Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(Z,{children:Object(g.jsx)(Se,{})})})},lunch:{url:"/lunch",page:()=>Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(Z,{children:Object(g.jsx)(ve,{})})})},sleep:{url:"/sleep",page:()=>Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(Z,{children:Object(g.jsx)(Ce,{})})})},steps:{url:"/steps",page:()=>Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(Z,{children:Object(g.jsx)(ze,{})})})},vegetables:{url:"/vegetables",page:()=>Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(Z,{children:Object(g.jsx)(Ee,{})})})},water:{url:"/water",page:()=>Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(Z,{children:Object(g.jsx)(Te,{})})})}}),Me=()=>{const e=Object.values(Be).map((e=>{let{url:t,page:s}=e;return Object(g.jsx)(i.b,{path:t,element:Object(g.jsx)(s,{})},t)}));return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(i.d,{children:[e,Object(g.jsx)(i.b,{path:"*",element:Object(g.jsx)(i.a,{to:Be.login.url,replace:!0})})]})})};var Ue=s(32);const Ge={token:"",errorMessage:"",error:!1},Ke={score:null,isLoading:!1,recordedScore:null,getRecord:null},Ve={user:null,isLoading:!1},Qe=Object(Ue.b)({auth:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S.SET_TOKEN:return{...e,token:t.payload,error:!1,errorMessage:""};case S.RESET_ERROR:return{...e,error:!1,errorMessage:""};case S.SET_ERROR:return{...e,error:!0,errorMessage:t.payload};default:return e}},score:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C.SET_SCORE:return{...e,score:t.payload};case C.SET_SCORE_ISLOADING:return{...e,isLoading:t.payload};case C.SET_RECORD_SCORE:case C.GET_RECORD_SCORE:return{...e,recordedScore:t.payload};default:return e}},profile:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M.SET_PROFILE:return{...e,user:t.payload};case M.IS_LOADING:return{...e,isLoading:t.payload};case M.UPDATE_PROFILE:return{...e,user:t.payload};default:return e}}});var We=s(113),Ze=s(114);Object(We.createLogger)({duration:!0,collapsed:!0,colors:{title:e=>e.error?"firebrick":"deepskyblue",prevState:()=>"#1C5FAF",action:()=>"#149945",nextState:()=>"#A47104",error:()=>"#ff0005"}}),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;const Je=Ue.c,Ye=[Ze.a];const He=Object(Ue.d)(Qe,Je(Object(Ue.a)(...Ye)));l.c;s(268),s(269);const Xe=new n.QueryClient({defaultOptions:{queries:{refetchOnWindowFocus:!1}}});Object(c.b)({enforceActions:"always",computedRequiresReaction:!0,observableRequiresReaction:!0,reactionRequiresObservable:!0}),Object(a.render)(Object(g.jsx)(l.a,{store:He,children:Object(g.jsx)(n.QueryClientProvider,{client:Xe,children:Object(g.jsx)(r.a,{children:Object(g.jsx)(Me,{})})})}),document.getElementById("root"))},33:function(e,t,s){e.exports={avatar:"styles_avatar__2mM1O",column:"styles_column__jaBUK",name:"styles_name__2ZU3D",logout:"styles_logout__1P3xt",male:"styles_male__1tzfZ",female:"styles_female___yY_M"}},34:function(e,t,s){e.exports={question:"styles_question__29rEQ",elements:"styles_elements__vcOj2",size:"styles_size__-ED2A",element:"styles_element__30CMO",selected:"styles_selected__3DhNz",sendAnswer:"styles_sendAnswer__8KK7w"}},37:function(e,t,s){e.exports={registration:"styles_registration__2Q5dV",left:"styles_left__1xOKe",error:"styles_error__Zto3d",right:"styles_right__rNge6"}},38:function(e,t,s){e.exports={login:"styles_login__2ixsa",loginLink:"styles_loginLink__1Vm10",error:"styles_error__1y07b",content:"styles_content__39i_H",inputRow:"styles_inputRow__3VBwL"}},4:function(e,t,s){e.exports={dashboard:"styles_dashboard__xIU44",navigation:"styles_navigation__GOETL",items:"styles_items__Seqo3",link:"styles_link__1B0Ib",category0:"styles_category0__RBrxS",category1:"styles_category1__1pEIx",category2:"styles_category2__3h2uW",category3:"styles_category3__3jdSM",category4:"styles_category4__2xG17",category5:"styles_category5__1qnLZ",category6:"styles_category6__1Qu_Z",category7:"styles_category7__2bSV0",category8:"styles_category8__3lzHk",category9:"styles_category9__2c_6W",title:"styles_title__3od5F",description:"styles_description__2jbj-"}},57:function(e,t,s){e.exports={question:"styles_question__2-KTD",inputRow:"styles_inputRow__3tY49",sendAnswer:"styles_sendAnswer__1z1KB"}},7:function(e,t,s){e.exports={profile:"styles_profile__2V7uj",error:"styles_error__MEdlZ",gender:"styles_gender__3RL80",female:"styles_female__3Dev5",male:"styles_male__3Tsp4",selected:"styles_selected__1yGO2",inputRow:"styles_inputRow__1tqJG",controls:"styles_controls__1jpFc",clearData:"styles_clearData__29yUt",clearAllRecords:"styles_clearAllRecords__3rLK4"}},9:function(e,t,s){e.exports={profile:"styles_profile__1buE1",sidebar:"styles_sidebar__318_W",female:"styles_female__1TdUM",male:"styles_male__2oM3k",wrap:"styles_wrap__1vpk0",header:"styles_header__1Dcw2",homeLink:"styles_homeLink__2VkPX",content:"styles_content__1C4tB",center:"styles_center__1JZvj",widget:"styles_widget__2Y3Ma",title:"styles_title__3BY0k",module:"styles_module__3LKEk",score:"styles_score__2IKrT",progress:"styles_progress__2qp6l",fill:"styles_fill__7FQ4P",label:"styles_label__3PQA_",level1:"styles_level1__1Wcjq",level2:"styles_level2__2Amah",level3:"styles_level3__-BpJL",level4:"styles_level4__3cWqp",level5:"styles_level5__27Nvg"}}},[[270,1,2]]]);
//# sourceMappingURL=main.ece72066.chunk.js.map