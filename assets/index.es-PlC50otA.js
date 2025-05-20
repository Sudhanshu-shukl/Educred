import{gN as i1,by as cd,gO as s1,gP as Qh,gQ as ep,gR as n1,gS as o1,gT as a1,gU as Ce,gV as c1,gW as tp,gX as ce,gY as $d,gZ as Ue,g_ as Os,g$ as lo,h0 as l1,h1 as $i,h2 as d1,h3 as u1,h4 as h1,h5 as Rd,h6 as Fr,h7 as Ri,h8 as p1,h9 as ks,ha as dt,hb as f1,hc as ke,hd as Li,he as Bt,hf as Vr,hg as Ze,hh as uo,hi as g1,hj as w1,hk as Ir,hl as Ar,hm as m1,hn as ec,ho as vn,hp as v1,hq as tc,hr as b1,hs as Nr,ht as dn,hu as y1,hv as ho,hw as Gr,hx as $s,hy as Ld,hz as Md,hA as Bd,hB as Ud,hC as Dd,hD as jd,hE as C1,hF as rp,hG as x1,hH as E1,hI as Rs,hJ as Ut,hK as Zr,hL as I1,hM as Ol,hN as A1,hO as rc,hP as zd,hQ as N1,hR as k1,hS as S1,hT as Hd,hU as _1,hV as P1,hW as T1,hX as O1,hY as $1,hZ as R1,h_ as L1,h$ as qd,i0 as M1,i1 as B1,i2 as bi,i3 as U1,i4 as ic,i5 as ip,be as po,bB as D1,i6 as Wd,i7 as Fd,i8 as j1,i9 as z1,ia as un,ib as sp,ic as sc,id as Vt,ie as Vd}from"./index-4dSMX-rY.js";const np="wc",op=2,ap="client",ld=`${np}@${op}:${ap}:`,nc={name:ap,logger:"error",controller:!1,relayUrl:"wss://relay.walletconnect.org"},Gd="WALLETCONNECT_DEEPLINK_CHOICE",H1="proposal",Zd="Proposal expired",q1="session",Mi=Ce.SEVEN_DAYS,W1="engine",Ge={wc_sessionPropose:{req:{ttl:Ce.FIVE_MINUTES,prompt:!0,tag:1100},res:{ttl:Ce.FIVE_MINUTES,prompt:!1,tag:1101},reject:{ttl:Ce.FIVE_MINUTES,prompt:!1,tag:1120},autoReject:{ttl:Ce.FIVE_MINUTES,prompt:!1,tag:1121}},wc_sessionSettle:{req:{ttl:Ce.FIVE_MINUTES,prompt:!1,tag:1102},res:{ttl:Ce.FIVE_MINUTES,prompt:!1,tag:1103}},wc_sessionUpdate:{req:{ttl:Ce.ONE_DAY,prompt:!1,tag:1104},res:{ttl:Ce.ONE_DAY,prompt:!1,tag:1105}},wc_sessionExtend:{req:{ttl:Ce.ONE_DAY,prompt:!1,tag:1106},res:{ttl:Ce.ONE_DAY,prompt:!1,tag:1107}},wc_sessionRequest:{req:{ttl:Ce.FIVE_MINUTES,prompt:!0,tag:1108},res:{ttl:Ce.FIVE_MINUTES,prompt:!1,tag:1109}},wc_sessionEvent:{req:{ttl:Ce.FIVE_MINUTES,prompt:!0,tag:1110},res:{ttl:Ce.FIVE_MINUTES,prompt:!1,tag:1111}},wc_sessionDelete:{req:{ttl:Ce.ONE_DAY,prompt:!1,tag:1112},res:{ttl:Ce.ONE_DAY,prompt:!1,tag:1113}},wc_sessionPing:{req:{ttl:Ce.ONE_DAY,prompt:!1,tag:1114},res:{ttl:Ce.ONE_DAY,prompt:!1,tag:1115}},wc_sessionAuthenticate:{req:{ttl:Ce.ONE_HOUR,prompt:!0,tag:1116},res:{ttl:Ce.ONE_HOUR,prompt:!1,tag:1117},reject:{ttl:Ce.FIVE_MINUTES,prompt:!1,tag:1118},autoReject:{ttl:Ce.FIVE_MINUTES,prompt:!1,tag:1119}}},oc={min:Ce.FIVE_MINUTES,max:Ce.SEVEN_DAYS},Zt={idle:"IDLE",active:"ACTIVE"},Kd={eth_sendTransaction:{key:""},eth_sendRawTransaction:{key:""},wallet_sendCalls:{key:""},solana_signTransaction:{key:"signature"},solana_signAllTransactions:{key:"transactions"},solana_signAndSendTransaction:{key:"signature"}},F1="request",V1=["wc_sessionPropose","wc_sessionRequest","wc_authRequest","wc_sessionAuthenticate"],G1="wc",Z1="auth",K1="authKeys",Y1="pairingTopics",J1="requests",Ua=`${G1}@${1.5}:${Z1}:`,ya=`${Ua}:PUB_KEY`;var X1=Object.defineProperty,Q1=Object.defineProperties,ef=Object.getOwnPropertyDescriptors,Yd=Object.getOwnPropertySymbols,tf=Object.prototype.hasOwnProperty,rf=Object.prototype.propertyIsEnumerable,$l=(t,e,r)=>e in t?X1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Se=(t,e)=>{for(var r in e||(e={}))tf.call(e,r)&&$l(t,r,e[r]);if(Yd)for(var r of Yd(e))rf.call(e,r)&&$l(t,r,e[r]);return t},st=(t,e)=>Q1(t,ef(e)),R=(t,e,r)=>$l(t,typeof e!="symbol"?e+"":e,r);let sf=class extends c1{constructor(e){super(e),R(this,"name",W1),R(this,"events",new tp),R(this,"initialized",!1),R(this,"requestQueue",{state:Zt.idle,queue:[]}),R(this,"sessionRequestQueue",{state:Zt.idle,queue:[]}),R(this,"requestQueueDelay",Ce.ONE_SECOND),R(this,"expectedPairingMethodMap",new Map),R(this,"recentlyDeletedMap",new Map),R(this,"recentlyDeletedLimit",200),R(this,"relayMessageCache",[]),R(this,"pendingSessions",new Map),R(this,"init",async()=>{this.initialized||(await this.cleanup(),this.registerRelayerEvents(),this.registerExpirerEvents(),this.registerPairingEvents(),await this.registerLinkModeListeners(),this.client.core.pairing.register({methods:Object.keys(Ge)}),this.initialized=!0,setTimeout(async()=>{await this.processPendingMessageEvents(),this.sessionRequestQueue.queue=this.getPendingSessionRequests(),this.processSessionRequestQueue()},Ce.toMiliseconds(this.requestQueueDelay)))}),R(this,"connect",async r=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();const i=st(Se({},r),{requiredNamespaces:r.requiredNamespaces||{},optionalNamespaces:r.optionalNamespaces||{}});await this.isValidConnect(i);const{pairingTopic:s,requiredNamespaces:n,optionalNamespaces:o,sessionProperties:a,scopedProperties:c,relays:l}=i;let d=s,u,h=!1;try{if(d){const T=this.client.core.pairing.pairings.get(d);this.client.logger.warn("connect() with existing pairing topic is deprecated and will be removed in the next major release."),h=T.active}}catch(T){throw this.client.logger.error(`connect() -> pairing.get(${d}) failed`),T}if(!d||!h){const{topic:T,uri:j}=await this.client.core.pairing.create();d=T,u=j}if(!d){const{message:T}=ce("NO_MATCHING_KEY",`connect() pairing topic: ${d}`);throw new Error(T)}const p=await this.client.core.crypto.generateKeyPair(),w=Ge.wc_sessionPropose.req.ttl||Ce.FIVE_MINUTES,f=dt(w),m=st(Se(Se({requiredNamespaces:n,optionalNamespaces:o,relays:l??[{protocol:f1}],proposer:{publicKey:p,metadata:this.client.metadata},expiryTimestamp:f,pairingTopic:d},a&&{sessionProperties:a}),c&&{scopedProperties:c}),{id:Nr()}),v=ke("session_connect",m.id),{reject:x,resolve:E,done:A}=Li(w,Zd),k=({id:T})=>{T===m.id&&(this.client.events.off("proposal_expire",k),this.pendingSessions.delete(m.id),this.events.emit(v,{error:{message:Zd,code:0}}))};return this.client.events.on("proposal_expire",k),this.events.once(v,({error:T,session:j})=>{this.client.events.off("proposal_expire",k),T?x(T):j&&E(j)}),await this.sendRequest({topic:d,method:"wc_sessionPropose",params:m,throwOnFailedPublish:!0,clientRpcId:m.id}),await this.setProposal(m.id,m),{uri:u,approval:A}}),R(this,"pair",async r=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{return await this.client.core.pairing.pair(r)}catch(i){throw this.client.logger.error("pair() failed"),i}}),R(this,"approve",async r=>{var i,s,n;const o=this.client.core.eventClient.createEvent({properties:{topic:(i=r==null?void 0:r.id)==null?void 0:i.toString(),trace:[Bt.session_approve_started]}});try{this.isInitialized(),await this.confirmOnlineStateOrThrow()}catch(_){throw o.setError(Vr.no_internet_connection),_}try{await this.isValidProposalId(r==null?void 0:r.id)}catch(_){throw this.client.logger.error(`approve() -> proposal.get(${r==null?void 0:r.id}) failed`),o.setError(Vr.proposal_not_found),_}try{await this.isValidApprove(r)}catch(_){throw this.client.logger.error("approve() -> isValidApprove() failed"),o.setError(Vr.session_approve_namespace_validation_failure),_}const{id:a,relayProtocol:c,namespaces:l,sessionProperties:d,scopedProperties:u,sessionConfig:h}=r,p=this.client.proposal.get(a);this.client.core.eventClient.deleteEvent({eventId:o.eventId});const{pairingTopic:w,proposer:f,requiredNamespaces:m,optionalNamespaces:v}=p;let x=(s=this.client.core.eventClient)==null?void 0:s.getEvent({topic:w});x||(x=(n=this.client.core.eventClient)==null?void 0:n.createEvent({type:Bt.session_approve_started,properties:{topic:w,trace:[Bt.session_approve_started,Bt.session_namespaces_validation_success]}}));const E=await this.client.core.crypto.generateKeyPair(),A=f.publicKey,k=await this.client.core.crypto.generateSharedKey(E,A),T=Se(Se(Se({relay:{protocol:c??"irn"},namespaces:l,controller:{publicKey:E,metadata:this.client.metadata},expiry:dt(Mi)},d&&{sessionProperties:d}),u&&{scopedProperties:u}),h&&{sessionConfig:h}),j=Ue.relay;x.addTrace(Bt.subscribing_session_topic);try{await this.client.core.relayer.subscribe(k,{transportType:j})}catch(_){throw x.setError(Vr.subscribe_session_topic_failure),_}x.addTrace(Bt.subscribe_session_topic_success);const M=st(Se({},T),{topic:k,requiredNamespaces:m,optionalNamespaces:v,pairingTopic:w,acknowledged:!1,self:T.controller,peer:{publicKey:f.publicKey,metadata:f.metadata},controller:E,transportType:Ue.relay});await this.client.session.set(k,M),x.addTrace(Bt.store_session);try{x.addTrace(Bt.publishing_session_settle),await this.sendRequest({topic:k,method:"wc_sessionSettle",params:T,throwOnFailedPublish:!0}).catch(_=>{throw x==null||x.setError(Vr.session_settle_publish_failure),_}),x.addTrace(Bt.session_settle_publish_success),x.addTrace(Bt.publishing_session_approve),await this.sendResult({id:a,topic:w,result:{relay:{protocol:c??"irn"},responderPublicKey:E},throwOnFailedPublish:!0}).catch(_=>{throw x==null||x.setError(Vr.session_approve_publish_failure),_}),x.addTrace(Bt.session_approve_publish_success)}catch(_){throw this.client.logger.error(_),this.client.session.delete(k,Ze("USER_DISCONNECTED")),await this.client.core.relayer.unsubscribe(k),_}return this.client.core.eventClient.deleteEvent({eventId:x.eventId}),await this.client.core.pairing.updateMetadata({topic:w,metadata:f.metadata}),await this.client.proposal.delete(a,Ze("USER_DISCONNECTED")),await this.client.core.pairing.activate({topic:w}),await this.setExpiry(k,dt(Mi)),{topic:k,acknowledged:()=>Promise.resolve(this.client.session.get(k))}}),R(this,"reject",async r=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{await this.isValidReject(r)}catch(o){throw this.client.logger.error("reject() -> isValidReject() failed"),o}const{id:i,reason:s}=r;let n;try{n=this.client.proposal.get(i).pairingTopic}catch(o){throw this.client.logger.error(`reject() -> proposal.get(${i}) failed`),o}n&&(await this.sendError({id:i,topic:n,error:s,rpcOpts:Ge.wc_sessionPropose.reject}),await this.client.proposal.delete(i,Ze("USER_DISCONNECTED")))}),R(this,"update",async r=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{await this.isValidUpdate(r)}catch(u){throw this.client.logger.error("update() -> isValidUpdate() failed"),u}const{topic:i,namespaces:s}=r,{done:n,resolve:o,reject:a}=Li(),c=Nr(),l=uo().toString(),d=this.client.session.get(i).namespaces;return this.events.once(ke("session_update",c),({error:u})=>{u?a(u):o()}),await this.client.session.update(i,{namespaces:s}),await this.sendRequest({topic:i,method:"wc_sessionUpdate",params:{namespaces:s},throwOnFailedPublish:!0,clientRpcId:c,relayRpcId:l}).catch(u=>{this.client.logger.error(u),this.client.session.update(i,{namespaces:d}),a(u)}),{acknowledged:n}}),R(this,"extend",async r=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{await this.isValidExtend(r)}catch(c){throw this.client.logger.error("extend() -> isValidExtend() failed"),c}const{topic:i}=r,s=Nr(),{done:n,resolve:o,reject:a}=Li();return this.events.once(ke("session_extend",s),({error:c})=>{c?a(c):o()}),await this.setExpiry(i,dt(Mi)),this.sendRequest({topic:i,method:"wc_sessionExtend",params:{},clientRpcId:s,throwOnFailedPublish:!0}).catch(c=>{a(c)}),{acknowledged:n}}),R(this,"request",async r=>{this.isInitialized();try{await this.isValidRequest(r)}catch(v){throw this.client.logger.error("request() -> isValidRequest() failed"),v}const{chainId:i,request:s,topic:n,expiry:o=Ge.wc_sessionRequest.req.ttl}=r,a=this.client.session.get(n);(a==null?void 0:a.transportType)===Ue.relay&&await this.confirmOnlineStateOrThrow();const c=Nr(),l=uo().toString(),{done:d,resolve:u,reject:h}=Li(o,"Request expired. Please try again.");this.events.once(ke("session_request",c),({error:v,result:x})=>{v?h(v):u(x)});const p="wc_sessionRequest",w=this.getAppLinkIfEnabled(a.peer.metadata,a.transportType);if(w)return await this.sendRequest({clientRpcId:c,relayRpcId:l,topic:n,method:p,params:{request:st(Se({},s),{expiryTimestamp:dt(o)}),chainId:i},expiry:o,throwOnFailedPublish:!0,appLink:w}).catch(v=>h(v)),this.client.events.emit("session_request_sent",{topic:n,request:s,chainId:i,id:c}),await d();const f={request:st(Se({},s),{expiryTimestamp:dt(o)}),chainId:i},m=this.shouldSetTVF(p,f);return await Promise.all([new Promise(async v=>{await this.sendRequest(Se({clientRpcId:c,relayRpcId:l,topic:n,method:p,params:f,expiry:o,throwOnFailedPublish:!0},m&&{tvf:this.getTVFParams(c,f)})).catch(x=>h(x)),this.client.events.emit("session_request_sent",{topic:n,request:s,chainId:i,id:c}),v()}),new Promise(async v=>{var x;if(!((x=a.sessionConfig)!=null&&x.disableDeepLink)){const E=await g1(this.client.core.storage,Gd);await w1({id:c,topic:n,wcDeepLink:E})}v()}),d()]).then(v=>v[2])}),R(this,"respond",async r=>{this.isInitialized(),await this.isValidRespond(r);const{topic:i,response:s}=r,{id:n}=s,o=this.client.session.get(i);o.transportType===Ue.relay&&await this.confirmOnlineStateOrThrow();const a=this.getAppLinkIfEnabled(o.peer.metadata,o.transportType);Ir(s)?await this.sendResult({id:n,topic:i,result:s.result,throwOnFailedPublish:!0,appLink:a}):Ar(s)&&await this.sendError({id:n,topic:i,error:s.error,appLink:a}),this.cleanupAfterResponse(r)}),R(this,"ping",async r=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{await this.isValidPing(r)}catch(s){throw this.client.logger.error("ping() -> isValidPing() failed"),s}const{topic:i}=r;if(this.client.session.keys.includes(i)){const s=Nr(),n=uo().toString(),{done:o,resolve:a,reject:c}=Li();this.events.once(ke("session_ping",s),({error:l})=>{l?c(l):a()}),await Promise.all([this.sendRequest({topic:i,method:"wc_sessionPing",params:{},throwOnFailedPublish:!0,clientRpcId:s,relayRpcId:n}),o()])}else this.client.core.pairing.pairings.keys.includes(i)&&(this.client.logger.warn("ping() on pairing topic is deprecated and will be removed in the next major release."),await this.client.core.pairing.ping({topic:i}))}),R(this,"emit",async r=>{this.isInitialized(),await this.confirmOnlineStateOrThrow(),await this.isValidEmit(r);const{topic:i,event:s,chainId:n}=r,o=uo().toString(),a=Nr();await this.sendRequest({topic:i,method:"wc_sessionEvent",params:{event:s,chainId:n},throwOnFailedPublish:!0,relayRpcId:o,clientRpcId:a})}),R(this,"disconnect",async r=>{this.isInitialized(),await this.confirmOnlineStateOrThrow(),await this.isValidDisconnect(r);const{topic:i}=r;if(this.client.session.keys.includes(i))await this.sendRequest({topic:i,method:"wc_sessionDelete",params:Ze("USER_DISCONNECTED"),throwOnFailedPublish:!0}),await this.deleteSession({topic:i,emitEvent:!1});else if(this.client.core.pairing.pairings.keys.includes(i))await this.client.core.pairing.disconnect({topic:i});else{const{message:s}=ce("MISMATCHED_TOPIC",`Session or pairing topic not found: ${i}`);throw new Error(s)}}),R(this,"find",r=>(this.isInitialized(),this.client.session.getAll().filter(i=>m1(i,r)))),R(this,"getPendingSessionRequests",()=>this.client.pendingRequest.getAll()),R(this,"authenticate",async(r,i)=>{var s;this.isInitialized(),this.isValidAuthenticate(r);const n=i&&this.client.core.linkModeSupportedApps.includes(i)&&((s=this.client.metadata.redirect)==null?void 0:s.linkMode),o=n?Ue.link_mode:Ue.relay;o===Ue.relay&&await this.confirmOnlineStateOrThrow();const{chains:a,statement:c="",uri:l,domain:d,nonce:u,type:h,exp:p,nbf:w,methods:f=[],expiry:m}=r,v=[...r.resources||[]],{topic:x,uri:E}=await this.client.core.pairing.create({methods:["wc_sessionAuthenticate"],transportType:o});this.client.logger.info({message:"Generated new pairing",pairing:{topic:x,uri:E}});const A=await this.client.core.crypto.generateKeyPair(),k=ec(A);if(await Promise.all([this.client.auth.authKeys.set(ya,{responseTopic:k,publicKey:A}),this.client.auth.pairingTopics.set(k,{topic:k,pairingTopic:x})]),await this.client.core.relayer.subscribe(k,{transportType:o}),this.client.logger.info(`sending request to new pairing topic: ${x}`),f.length>0){const{namespace:$}=vn(a[0]);let O=v1($,"request",f);tc(v)&&(O=b1(O,v.pop())),v.push(O)}const T=m&&m>Ge.wc_sessionAuthenticate.req.ttl?m:Ge.wc_sessionAuthenticate.req.ttl,j={authPayload:{type:h??"caip122",chains:a,statement:c,aud:l,domain:d,version:"1",nonce:u,iat:new Date().toISOString(),exp:p,nbf:w,resources:v},requester:{publicKey:A,metadata:this.client.metadata},expiryTimestamp:dt(T)},M={eip155:{chains:a,methods:[...new Set(["personal_sign",...f])],events:["chainChanged","accountsChanged"]}},_={requiredNamespaces:{},optionalNamespaces:M,relays:[{protocol:"irn"}],pairingTopic:x,proposer:{publicKey:A,metadata:this.client.metadata},expiryTimestamp:dt(Ge.wc_sessionPropose.req.ttl),id:Nr()},{done:U,resolve:D,reject:Q}=Li(T,"Request expired"),pe=Nr(),P=ke("session_connect",_.id),g=ke("session_request",pe),y=async({error:$,session:O})=>{this.events.off(g,N),$?Q($):O&&D({session:O})},N=async $=>{var O,se,de;if(await this.deletePendingAuthRequest(pe,{message:"fulfilled",code:0}),$.error){const Be=Ze("WC_METHOD_UNSUPPORTED","wc_sessionAuthenticate");return $.error.code===Be.code?void 0:(this.events.off(P,y),Q($.error.message))}await this.deleteProposal(_.id),this.events.off(P,y);const{cacaos:fe,responder:te}=$.result,ye=[],We=[];for(const Be of fe){await Ld({cacao:Be,projectId:this.client.core.projectId})||(this.client.logger.error(Be,"Signature verification failed"),Q(Ze("SESSION_SETTLEMENT_FAILED","Signature verification failed")));const{p:Re}=Be,Ve=tc(Re.resources),tt=[Md(Re.iss)],lt=Bd(Re.iss);if(Ve){const sr=Ud(Ve),co=Dd(Ve);ye.push(...sr),tt.push(...co)}for(const sr of tt)We.push(`${sr}:${lt}`)}const Xe=await this.client.core.crypto.generateSharedKey(A,te.publicKey);let Fe;ye.length>0&&(Fe={topic:Xe,acknowledged:!0,self:{publicKey:A,metadata:this.client.metadata},peer:te,controller:te.publicKey,expiry:dt(Mi),requiredNamespaces:{},optionalNamespaces:{},relay:{protocol:"irn"},pairingTopic:x,namespaces:jd([...new Set(ye)],[...new Set(We)]),transportType:o},await this.client.core.relayer.subscribe(Xe,{transportType:o}),await this.client.session.set(Xe,Fe),x&&await this.client.core.pairing.updateMetadata({topic:x,metadata:te.metadata}),Fe=this.client.session.get(Xe)),(O=this.client.metadata.redirect)!=null&&O.linkMode&&(se=te.metadata.redirect)!=null&&se.linkMode&&(de=te.metadata.redirect)!=null&&de.universal&&i&&(this.client.core.addLinkModeSupportedApp(te.metadata.redirect.universal),this.client.session.update(Xe,{transportType:Ue.link_mode})),D({auths:fe,session:Fe})};this.events.once(P,y),this.events.once(g,N);let S;try{if(n){const $=dn("wc_sessionAuthenticate",j,pe);this.client.core.history.set(x,$);const O=await this.client.core.crypto.encode("",$,{type:y1,encoding:Os});S=ho(i,x,O)}else await Promise.all([this.sendRequest({topic:x,method:"wc_sessionAuthenticate",params:j,expiry:r.expiry,throwOnFailedPublish:!0,clientRpcId:pe}),this.sendRequest({topic:x,method:"wc_sessionPropose",params:_,expiry:Ge.wc_sessionPropose.req.ttl,throwOnFailedPublish:!0,clientRpcId:_.id})])}catch($){throw this.events.off(P,y),this.events.off(g,N),$}return await this.setProposal(_.id,_),await this.setAuthRequest(pe,{request:st(Se({},j),{verifyContext:{}}),pairingTopic:x,transportType:o}),{uri:S??E,response:U}}),R(this,"approveSessionAuthenticate",async r=>{const{id:i,auths:s}=r,n=this.client.core.eventClient.createEvent({properties:{topic:i.toString(),trace:[Gr.authenticated_session_approve_started]}});try{this.isInitialized()}catch(m){throw n.setError($s.no_internet_connection),m}const o=this.getPendingAuthRequest(i);if(!o)throw n.setError($s.authenticated_session_pending_request_not_found),new Error(`Could not find pending auth request with id ${i}`);const a=o.transportType||Ue.relay;a===Ue.relay&&await this.confirmOnlineStateOrThrow();const c=o.requester.publicKey,l=await this.client.core.crypto.generateKeyPair(),d=ec(c),u={type:ic,receiverPublicKey:c,senderPublicKey:l},h=[],p=[];for(const m of s){if(!await Ld({cacao:m,projectId:this.client.core.projectId})){n.setError($s.invalid_cacao);const k=Ze("SESSION_SETTLEMENT_FAILED","Signature verification failed");throw await this.sendError({id:i,topic:d,error:k,encodeOpts:u}),new Error(k.message)}n.addTrace(Gr.cacaos_verified);const{p:v}=m,x=tc(v.resources),E=[Md(v.iss)],A=Bd(v.iss);if(x){const k=Ud(x),T=Dd(x);h.push(...k),E.push(...T)}for(const k of E)p.push(`${k}:${A}`)}const w=await this.client.core.crypto.generateSharedKey(l,c);n.addTrace(Gr.create_authenticated_session_topic);let f;if((h==null?void 0:h.length)>0){f={topic:w,acknowledged:!0,self:{publicKey:l,metadata:this.client.metadata},peer:{publicKey:c,metadata:o.requester.metadata},controller:c,expiry:dt(Mi),authentication:s,requiredNamespaces:{},optionalNamespaces:{},relay:{protocol:"irn"},pairingTopic:o.pairingTopic,namespaces:jd([...new Set(h)],[...new Set(p)]),transportType:a},n.addTrace(Gr.subscribing_authenticated_session_topic);try{await this.client.core.relayer.subscribe(w,{transportType:a})}catch(m){throw n.setError($s.subscribe_authenticated_session_topic_failure),m}n.addTrace(Gr.subscribe_authenticated_session_topic_success),await this.client.session.set(w,f),n.addTrace(Gr.store_authenticated_session),await this.client.core.pairing.updateMetadata({topic:o.pairingTopic,metadata:o.requester.metadata})}n.addTrace(Gr.publishing_authenticated_session_approve);try{await this.sendResult({topic:d,id:i,result:{cacaos:s,responder:{publicKey:l,metadata:this.client.metadata}},encodeOpts:u,throwOnFailedPublish:!0,appLink:this.getAppLinkIfEnabled(o.requester.metadata,a)})}catch(m){throw n.setError($s.authenticated_session_approve_publish_failure),m}return await this.client.auth.requests.delete(i,{message:"fulfilled",code:0}),await this.client.core.pairing.activate({topic:o.pairingTopic}),this.client.core.eventClient.deleteEvent({eventId:n.eventId}),{session:f}}),R(this,"rejectSessionAuthenticate",async r=>{this.isInitialized();const{id:i,reason:s}=r,n=this.getPendingAuthRequest(i);if(!n)throw new Error(`Could not find pending auth request with id ${i}`);n.transportType===Ue.relay&&await this.confirmOnlineStateOrThrow();const o=n.requester.publicKey,a=await this.client.core.crypto.generateKeyPair(),c=ec(o),l={type:ic,receiverPublicKey:o,senderPublicKey:a};await this.sendError({id:i,topic:c,error:s,encodeOpts:l,rpcOpts:Ge.wc_sessionAuthenticate.reject,appLink:this.getAppLinkIfEnabled(n.requester.metadata,n.transportType)}),await this.client.auth.requests.delete(i,{message:"rejected",code:0}),await this.client.proposal.delete(i,Ze("USER_DISCONNECTED"))}),R(this,"formatAuthMessage",r=>{this.isInitialized();const{request:i,iss:s}=r;return C1(i,s)}),R(this,"processRelayMessageCache",()=>{setTimeout(async()=>{if(this.relayMessageCache.length!==0)for(;this.relayMessageCache.length>0;)try{const r=this.relayMessageCache.shift();r&&await this.onRelayMessage(r)}catch(r){this.client.logger.error(r)}},50)}),R(this,"cleanupDuplicatePairings",async r=>{if(r.pairingTopic)try{const i=this.client.core.pairing.pairings.get(r.pairingTopic),s=this.client.core.pairing.pairings.getAll().filter(n=>{var o,a;return((o=n.peerMetadata)==null?void 0:o.url)&&((a=n.peerMetadata)==null?void 0:a.url)===r.peer.metadata.url&&n.topic&&n.topic!==i.topic});if(s.length===0)return;this.client.logger.info(`Cleaning up ${s.length} duplicate pairing(s)`),await Promise.all(s.map(n=>this.client.core.pairing.disconnect({topic:n.topic}))),this.client.logger.info("Duplicate pairings clean up finished")}catch(i){this.client.logger.error(i)}}),R(this,"deleteSession",async r=>{var i;const{topic:s,expirerHasDeleted:n=!1,emitEvent:o=!0,id:a=0}=r,{self:c}=this.client.session.get(s);await this.client.core.relayer.unsubscribe(s),await this.client.session.delete(s,Ze("USER_DISCONNECTED")),this.addToRecentlyDeleted(s,"session"),this.client.core.crypto.keychain.has(c.publicKey)&&await this.client.core.crypto.deleteKeyPair(c.publicKey),this.client.core.crypto.keychain.has(s)&&await this.client.core.crypto.deleteSymKey(s),n||this.client.core.expirer.del(s),this.client.core.storage.removeItem(Gd).catch(l=>this.client.logger.warn(l)),this.getPendingSessionRequests().forEach(l=>{l.topic===s&&this.deletePendingSessionRequest(l.id,Ze("USER_DISCONNECTED"))}),s===((i=this.sessionRequestQueue.queue[0])==null?void 0:i.topic)&&(this.sessionRequestQueue.state=Zt.idle),o&&this.client.events.emit("session_delete",{id:a,topic:s})}),R(this,"deleteProposal",async(r,i)=>{if(i)try{const s=this.client.proposal.get(r),n=this.client.core.eventClient.getEvent({topic:s.pairingTopic});n==null||n.setError(Vr.proposal_expired)}catch{}await Promise.all([this.client.proposal.delete(r,Ze("USER_DISCONNECTED")),i?Promise.resolve():this.client.core.expirer.del(r)]),this.addToRecentlyDeleted(r,"proposal")}),R(this,"deletePendingSessionRequest",async(r,i,s=!1)=>{await Promise.all([this.client.pendingRequest.delete(r,i),s?Promise.resolve():this.client.core.expirer.del(r)]),this.addToRecentlyDeleted(r,"request"),this.sessionRequestQueue.queue=this.sessionRequestQueue.queue.filter(n=>n.id!==r),s&&(this.sessionRequestQueue.state=Zt.idle,this.client.events.emit("session_request_expire",{id:r}))}),R(this,"deletePendingAuthRequest",async(r,i,s=!1)=>{await Promise.all([this.client.auth.requests.delete(r,i),s?Promise.resolve():this.client.core.expirer.del(r)])}),R(this,"setExpiry",async(r,i)=>{this.client.session.keys.includes(r)&&(this.client.core.expirer.set(r,i),await this.client.session.update(r,{expiry:i}))}),R(this,"setProposal",async(r,i)=>{this.client.core.expirer.set(r,dt(Ge.wc_sessionPropose.req.ttl)),await this.client.proposal.set(r,i)}),R(this,"setAuthRequest",async(r,i)=>{const{request:s,pairingTopic:n,transportType:o=Ue.relay}=i;this.client.core.expirer.set(r,s.expiryTimestamp),await this.client.auth.requests.set(r,{authPayload:s.authPayload,requester:s.requester,expiryTimestamp:s.expiryTimestamp,id:r,pairingTopic:n,verifyContext:s.verifyContext,transportType:o})}),R(this,"setPendingSessionRequest",async r=>{const{id:i,topic:s,params:n,verifyContext:o}=r,a=n.request.expiryTimestamp||dt(Ge.wc_sessionRequest.req.ttl);this.client.core.expirer.set(i,a),await this.client.pendingRequest.set(i,{id:i,topic:s,params:n,verifyContext:o})}),R(this,"sendRequest",async r=>{const{topic:i,method:s,params:n,expiry:o,relayRpcId:a,clientRpcId:c,throwOnFailedPublish:l,appLink:d,tvf:u}=r,h=dn(s,n,c);let p;const w=!!d;try{const v=w?Os:lo;p=await this.client.core.crypto.encode(i,h,{encoding:v})}catch(v){throw await this.cleanup(),this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${i} failed`),v}let f;if(V1.includes(s)){const v=$i(JSON.stringify(h)),x=$i(p);f=await this.client.core.verify.register({id:x,decryptedId:v})}const m=Ge[s].req;if(m.attestation=f,o&&(m.ttl=o),a&&(m.id=a),this.client.core.history.set(i,h),w){const v=ho(d,i,p);await global.Linking.openURL(v,this.client.name)}else{const v=Ge[s].req;o&&(v.ttl=o),a&&(v.id=a),v.tvf=st(Se({},u),{correlationId:h.id}),l?(v.internal=st(Se({},v.internal),{throwOnFailedPublish:!0}),await this.client.core.relayer.publish(i,p,v)):this.client.core.relayer.publish(i,p,v).catch(x=>this.client.logger.error(x))}return h.id}),R(this,"sendResult",async r=>{const{id:i,topic:s,result:n,throwOnFailedPublish:o,encodeOpts:a,appLink:c}=r,l=ip(i,n);let d;const u=c&&typeof(global==null?void 0:global.Linking)<"u";try{const w=u?Os:lo;d=await this.client.core.crypto.encode(s,l,st(Se({},a||{}),{encoding:w}))}catch(w){throw await this.cleanup(),this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${s} failed`),w}let h,p;try{h=await this.client.core.history.get(s,i);const w=h.request;try{this.shouldSetTVF(w.method,w.params)&&(p=this.getTVFParams(i,w.params,n))}catch(f){this.client.logger.warn("sendResult() -> getTVFParams() failed",f)}}catch(w){throw this.client.logger.error(`sendResult() -> history.get(${s}, ${i}) failed`),w}if(u){const w=ho(c,s,d);await global.Linking.openURL(w,this.client.name)}else{const w=h.request.method,f=Ge[w].res;f.tvf=st(Se({},p),{correlationId:i}),o?(f.internal=st(Se({},f.internal),{throwOnFailedPublish:!0}),await this.client.core.relayer.publish(s,d,f)):this.client.core.relayer.publish(s,d,f).catch(m=>this.client.logger.error(m))}await this.client.core.history.resolve(l)}),R(this,"sendError",async r=>{const{id:i,topic:s,error:n,encodeOpts:o,rpcOpts:a,appLink:c}=r,l=rp(i,n);let d;const u=c&&typeof(global==null?void 0:global.Linking)<"u";try{const p=u?Os:lo;d=await this.client.core.crypto.encode(s,l,st(Se({},o||{}),{encoding:p}))}catch(p){throw await this.cleanup(),this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${s} failed`),p}let h;try{h=await this.client.core.history.get(s,i)}catch(p){throw this.client.logger.error(`sendError() -> history.get(${s}, ${i}) failed`),p}if(u){const p=ho(c,s,d);await global.Linking.openURL(p,this.client.name)}else{const p=h.request.method,w=a||Ge[p].res;this.client.core.relayer.publish(s,d,w)}await this.client.core.history.resolve(l)}),R(this,"cleanup",async()=>{const r=[],i=[];this.client.session.getAll().forEach(s=>{let n=!1;Ri(s.expiry)&&(n=!0),this.client.core.crypto.keychain.has(s.topic)||(n=!0),n&&r.push(s.topic)}),this.client.proposal.getAll().forEach(s=>{Ri(s.expiryTimestamp)&&i.push(s.id)}),await Promise.all([...r.map(s=>this.deleteSession({topic:s})),...i.map(s=>this.deleteProposal(s))])}),R(this,"onProviderMessageEvent",async r=>{!this.initialized||this.relayMessageCache.length>0?this.relayMessageCache.push(r):await this.onRelayMessage(r)}),R(this,"onRelayEventRequest",async r=>{this.requestQueue.queue.push(r),await this.processRequestsQueue()}),R(this,"processRequestsQueue",async()=>{if(this.requestQueue.state===Zt.active){this.client.logger.info("Request queue already active, skipping...");return}for(this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`);this.requestQueue.queue.length>0;){this.requestQueue.state=Zt.active;const r=this.requestQueue.queue.shift();if(r)try{await this.processRequest(r)}catch(i){this.client.logger.warn(i)}}this.requestQueue.state=Zt.idle}),R(this,"processRequest",async r=>{const{topic:i,payload:s,attestation:n,transportType:o,encryptedId:a}=r,c=s.method;if(!this.shouldIgnorePairingRequest({topic:i,requestMethod:c}))switch(c){case"wc_sessionPropose":return await this.onSessionProposeRequest({topic:i,payload:s,attestation:n,encryptedId:a});case"wc_sessionSettle":return await this.onSessionSettleRequest(i,s);case"wc_sessionUpdate":return await this.onSessionUpdateRequest(i,s);case"wc_sessionExtend":return await this.onSessionExtendRequest(i,s);case"wc_sessionPing":return await this.onSessionPingRequest(i,s);case"wc_sessionDelete":return await this.onSessionDeleteRequest(i,s);case"wc_sessionRequest":return await this.onSessionRequest({topic:i,payload:s,attestation:n,encryptedId:a,transportType:o});case"wc_sessionEvent":return await this.onSessionEventRequest(i,s);case"wc_sessionAuthenticate":return await this.onSessionAuthenticateRequest({topic:i,payload:s,attestation:n,encryptedId:a,transportType:o});default:return this.client.logger.info(`Unsupported request method ${c}`)}}),R(this,"onRelayEventResponse",async r=>{const{topic:i,payload:s,transportType:n}=r,o=(await this.client.core.history.get(i,s.id)).request.method;switch(o){case"wc_sessionPropose":return this.onSessionProposeResponse(i,s,n);case"wc_sessionSettle":return this.onSessionSettleResponse(i,s);case"wc_sessionUpdate":return this.onSessionUpdateResponse(i,s);case"wc_sessionExtend":return this.onSessionExtendResponse(i,s);case"wc_sessionPing":return this.onSessionPingResponse(i,s);case"wc_sessionRequest":return this.onSessionRequestResponse(i,s);case"wc_sessionAuthenticate":return this.onSessionAuthenticateResponse(i,s);default:return this.client.logger.info(`Unsupported response method ${o}`)}}),R(this,"onRelayEventUnknownPayload",r=>{const{topic:i}=r,{message:s}=ce("MISSING_OR_INVALID",`Decoded payload on topic ${i} is not identifiable as a JSON-RPC request or a response.`);throw new Error(s)}),R(this,"shouldIgnorePairingRequest",r=>{const{topic:i,requestMethod:s}=r,n=this.expectedPairingMethodMap.get(i);return!n||n.includes(s)?!1:!!(n.includes("wc_sessionAuthenticate")&&this.client.events.listenerCount("session_authenticate")>0)}),R(this,"onSessionProposeRequest",async r=>{const{topic:i,payload:s,attestation:n,encryptedId:o}=r,{params:a,id:c}=s;try{const l=this.client.core.eventClient.getEvent({topic:i});this.client.events.listenerCount("session_proposal")===0&&(console.warn("No listener for session_proposal event"),l==null||l.setError(x1.proposal_listener_not_found)),this.isValidConnect(Se({},s.params));const d=a.expiryTimestamp||dt(Ge.wc_sessionPropose.req.ttl),u=Se({id:c,pairingTopic:i,expiryTimestamp:d},a);await this.setProposal(c,u);const h=await this.getVerifyContext({attestationId:n,hash:$i(JSON.stringify(s)),encryptedId:o,metadata:u.proposer.metadata});l==null||l.addTrace(E1.emit_session_proposal),this.client.events.emit("session_proposal",{id:c,params:u,verifyContext:h})}catch(l){await this.sendError({id:c,topic:i,error:l,rpcOpts:Ge.wc_sessionPropose.autoReject}),this.client.logger.error(l)}}),R(this,"onSessionProposeResponse",async(r,i,s)=>{const{id:n}=i;if(Ir(i)){const{result:o}=i;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",result:o});const a=this.client.proposal.get(n);this.client.logger.trace({type:"method",method:"onSessionProposeResponse",proposal:a});const c=a.proposer.publicKey;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",selfPublicKey:c});const l=o.responderPublicKey;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",peerPublicKey:l});const d=await this.client.core.crypto.generateSharedKey(c,l);this.pendingSessions.set(n,{sessionTopic:d,pairingTopic:r,proposalId:n,publicKey:c});const u=await this.client.core.relayer.subscribe(d,{transportType:s});this.client.logger.trace({type:"method",method:"onSessionProposeResponse",subscriptionId:u}),await this.client.core.pairing.activate({topic:r})}else if(Ar(i)){await this.client.proposal.delete(n,Ze("USER_DISCONNECTED"));const o=ke("session_connect",n);if(this.events.listenerCount(o)===0)throw new Error(`emitting ${o} without any listeners, 954`);this.events.emit(o,{error:i.error})}}),R(this,"onSessionSettleRequest",async(r,i)=>{const{id:s,params:n}=i;try{this.isValidSessionSettleRequest(n);const{relay:o,controller:a,expiry:c,namespaces:l,sessionProperties:d,scopedProperties:u,sessionConfig:h}=i.params,p=[...this.pendingSessions.values()].find(m=>m.sessionTopic===r);if(!p)return this.client.logger.error(`Pending session not found for topic ${r}`);const w=this.client.proposal.get(p.proposalId),f=st(Se(Se(Se({topic:r,relay:o,expiry:c,namespaces:l,acknowledged:!0,pairingTopic:p.pairingTopic,requiredNamespaces:w.requiredNamespaces,optionalNamespaces:w.optionalNamespaces,controller:a.publicKey,self:{publicKey:p.publicKey,metadata:this.client.metadata},peer:{publicKey:a.publicKey,metadata:a.metadata}},d&&{sessionProperties:d}),u&&{scopedProperties:u}),h&&{sessionConfig:h}),{transportType:Ue.relay});await this.client.session.set(f.topic,f),await this.setExpiry(f.topic,f.expiry),await this.client.core.pairing.updateMetadata({topic:p.pairingTopic,metadata:f.peer.metadata}),this.client.events.emit("session_connect",{session:f}),this.events.emit(ke("session_connect",p.proposalId),{session:f}),this.pendingSessions.delete(p.proposalId),this.deleteProposal(p.proposalId,!1),this.cleanupDuplicatePairings(f),await this.sendResult({id:i.id,topic:r,result:!0,throwOnFailedPublish:!0})}catch(o){await this.sendError({id:s,topic:r,error:o}),this.client.logger.error(o)}}),R(this,"onSessionSettleResponse",async(r,i)=>{const{id:s}=i;Ir(i)?(await this.client.session.update(r,{acknowledged:!0}),this.events.emit(ke("session_approve",s),{})):Ar(i)&&(await this.client.session.delete(r,Ze("USER_DISCONNECTED")),this.events.emit(ke("session_approve",s),{error:i.error}))}),R(this,"onSessionUpdateRequest",async(r,i)=>{const{params:s,id:n}=i;try{const o=`${r}_session_update`,a=Rs.get(o);if(a&&this.isRequestOutOfSync(a,n)){this.client.logger.warn(`Discarding out of sync request - ${n}`),this.sendError({id:n,topic:r,error:Ze("INVALID_UPDATE_REQUEST")});return}this.isValidUpdate(Se({topic:r},s));try{Rs.set(o,n),await this.client.session.update(r,{namespaces:s.namespaces}),await this.sendResult({id:n,topic:r,result:!0,throwOnFailedPublish:!0})}catch(c){throw Rs.delete(o),c}this.client.events.emit("session_update",{id:n,topic:r,params:s})}catch(o){await this.sendError({id:n,topic:r,error:o}),this.client.logger.error(o)}}),R(this,"isRequestOutOfSync",(r,i)=>i.toString().slice(0,-3)<r.toString().slice(0,-3)),R(this,"onSessionUpdateResponse",(r,i)=>{const{id:s}=i,n=ke("session_update",s);if(this.events.listenerCount(n)===0)throw new Error(`emitting ${n} without any listeners`);Ir(i)?this.events.emit(ke("session_update",s),{}):Ar(i)&&this.events.emit(ke("session_update",s),{error:i.error})}),R(this,"onSessionExtendRequest",async(r,i)=>{const{id:s}=i;try{this.isValidExtend({topic:r}),await this.setExpiry(r,dt(Mi)),await this.sendResult({id:s,topic:r,result:!0,throwOnFailedPublish:!0}),this.client.events.emit("session_extend",{id:s,topic:r})}catch(n){await this.sendError({id:s,topic:r,error:n}),this.client.logger.error(n)}}),R(this,"onSessionExtendResponse",(r,i)=>{const{id:s}=i,n=ke("session_extend",s);if(this.events.listenerCount(n)===0)throw new Error(`emitting ${n} without any listeners`);Ir(i)?this.events.emit(ke("session_extend",s),{}):Ar(i)&&this.events.emit(ke("session_extend",s),{error:i.error})}),R(this,"onSessionPingRequest",async(r,i)=>{const{id:s}=i;try{this.isValidPing({topic:r}),await this.sendResult({id:s,topic:r,result:!0,throwOnFailedPublish:!0}),this.client.events.emit("session_ping",{id:s,topic:r})}catch(n){await this.sendError({id:s,topic:r,error:n}),this.client.logger.error(n)}}),R(this,"onSessionPingResponse",(r,i)=>{const{id:s}=i,n=ke("session_ping",s);setTimeout(()=>{if(this.events.listenerCount(n)===0)throw new Error(`emitting ${n} without any listeners 2176`);Ir(i)?this.events.emit(ke("session_ping",s),{}):Ar(i)&&this.events.emit(ke("session_ping",s),{error:i.error})},500)}),R(this,"onSessionDeleteRequest",async(r,i)=>{const{id:s}=i;try{this.isValidDisconnect({topic:r,reason:i.params}),Promise.all([new Promise(n=>{this.client.core.relayer.once($d.publish,async()=>{n(await this.deleteSession({topic:r,id:s}))})}),this.sendResult({id:s,topic:r,result:!0,throwOnFailedPublish:!0}),this.cleanupPendingSentRequestsForTopic({topic:r,error:Ze("USER_DISCONNECTED")})]).catch(n=>this.client.logger.error(n))}catch(n){this.client.logger.error(n)}}),R(this,"onSessionRequest",async r=>{var i,s,n;const{topic:o,payload:a,attestation:c,encryptedId:l,transportType:d}=r,{id:u,params:h}=a;try{await this.isValidRequest(Se({topic:o},h));const p=this.client.session.get(o),w=await this.getVerifyContext({attestationId:c,hash:$i(JSON.stringify(dn("wc_sessionRequest",h,u))),encryptedId:l,metadata:p.peer.metadata,transportType:d}),f={id:u,topic:o,params:h,verifyContext:w};await this.setPendingSessionRequest(f),d===Ue.link_mode&&(i=p.peer.metadata.redirect)!=null&&i.universal&&this.client.core.addLinkModeSupportedApp((s=p.peer.metadata.redirect)==null?void 0:s.universal),(n=this.client.signConfig)!=null&&n.disableRequestQueue?this.emitSessionRequest(f):(this.addSessionRequestToSessionRequestQueue(f),this.processSessionRequestQueue())}catch(p){await this.sendError({id:u,topic:o,error:p}),this.client.logger.error(p)}}),R(this,"onSessionRequestResponse",(r,i)=>{const{id:s}=i,n=ke("session_request",s);if(this.events.listenerCount(n)===0)throw new Error(`emitting ${n} without any listeners`);Ir(i)?this.events.emit(ke("session_request",s),{result:i.result}):Ar(i)&&this.events.emit(ke("session_request",s),{error:i.error})}),R(this,"onSessionEventRequest",async(r,i)=>{const{id:s,params:n}=i;try{const o=`${r}_session_event_${n.event.name}`,a=Rs.get(o);if(a&&this.isRequestOutOfSync(a,s)){this.client.logger.info(`Discarding out of sync request - ${s}`);return}this.isValidEmit(Se({topic:r},n)),this.client.events.emit("session_event",{id:s,topic:r,params:n}),Rs.set(o,s)}catch(o){await this.sendError({id:s,topic:r,error:o}),this.client.logger.error(o)}}),R(this,"onSessionAuthenticateResponse",(r,i)=>{const{id:s}=i;this.client.logger.trace({type:"method",method:"onSessionAuthenticateResponse",topic:r,payload:i}),Ir(i)?this.events.emit(ke("session_request",s),{result:i.result}):Ar(i)&&this.events.emit(ke("session_request",s),{error:i.error})}),R(this,"onSessionAuthenticateRequest",async r=>{var i;const{topic:s,payload:n,attestation:o,encryptedId:a,transportType:c}=r;try{const{requester:l,authPayload:d,expiryTimestamp:u}=n.params,h=await this.getVerifyContext({attestationId:o,hash:$i(JSON.stringify(n)),encryptedId:a,metadata:l.metadata,transportType:c}),p={requester:l,pairingTopic:s,id:n.id,authPayload:d,verifyContext:h,expiryTimestamp:u};await this.setAuthRequest(n.id,{request:p,pairingTopic:s,transportType:c}),c===Ue.link_mode&&(i=l.metadata.redirect)!=null&&i.universal&&this.client.core.addLinkModeSupportedApp(l.metadata.redirect.universal),this.client.events.emit("session_authenticate",{topic:s,params:n.params,id:n.id,verifyContext:h})}catch(l){this.client.logger.error(l);const d=n.params.requester.publicKey,u=await this.client.core.crypto.generateKeyPair(),h=this.getAppLinkIfEnabled(n.params.requester.metadata,c),p={type:ic,receiverPublicKey:d,senderPublicKey:u};await this.sendError({id:n.id,topic:s,error:l,encodeOpts:p,rpcOpts:Ge.wc_sessionAuthenticate.autoReject,appLink:h})}}),R(this,"addSessionRequestToSessionRequestQueue",r=>{this.sessionRequestQueue.queue.push(r)}),R(this,"cleanupAfterResponse",r=>{this.deletePendingSessionRequest(r.response.id,{message:"fulfilled",code:0}),setTimeout(()=>{this.sessionRequestQueue.state=Zt.idle,this.processSessionRequestQueue()},Ce.toMiliseconds(this.requestQueueDelay))}),R(this,"cleanupPendingSentRequestsForTopic",({topic:r,error:i})=>{const s=this.client.core.history.pending;s.length>0&&s.filter(n=>n.topic===r&&n.request.method==="wc_sessionRequest").forEach(n=>{const o=n.request.id,a=ke("session_request",o);if(this.events.listenerCount(a)===0)throw new Error(`emitting ${a} without any listeners`);this.events.emit(ke("session_request",n.request.id),{error:i})})}),R(this,"processSessionRequestQueue",()=>{if(this.sessionRequestQueue.state===Zt.active){this.client.logger.info("session request queue is already active.");return}const r=this.sessionRequestQueue.queue[0];if(!r){this.client.logger.info("session request queue is empty.");return}try{this.sessionRequestQueue.state=Zt.active,this.emitSessionRequest(r)}catch(i){this.client.logger.error(i)}}),R(this,"emitSessionRequest",r=>{this.client.events.emit("session_request",r)}),R(this,"onPairingCreated",r=>{if(r.methods&&this.expectedPairingMethodMap.set(r.topic,r.methods),r.active)return;const i=this.client.proposal.getAll().find(s=>s.pairingTopic===r.topic);i&&this.onSessionProposeRequest({topic:r.topic,payload:dn("wc_sessionPropose",st(Se({},i),{requiredNamespaces:i.requiredNamespaces,optionalNamespaces:i.optionalNamespaces,relays:i.relays,proposer:i.proposer,sessionProperties:i.sessionProperties,scopedProperties:i.scopedProperties}),i.id)})}),R(this,"isValidConnect",async r=>{if(!Ut(r)){const{message:l}=ce("MISSING_OR_INVALID",`connect() params: ${JSON.stringify(r)}`);throw new Error(l)}const{pairingTopic:i,requiredNamespaces:s,optionalNamespaces:n,sessionProperties:o,scopedProperties:a,relays:c}=r;if(Zr(i)||await this.isValidPairingTopic(i),!I1(c)){const{message:l}=ce("MISSING_OR_INVALID",`connect() relays: ${c}`);throw new Error(l)}if(!Zr(s)&&Ol(s)!==0&&this.validateNamespaces(s,"requiredNamespaces"),!Zr(n)&&Ol(n)!==0&&this.validateNamespaces(n,"optionalNamespaces"),Zr(o)||this.validateSessionProps(o,"sessionProperties"),!Zr(a)){this.validateSessionProps(a,"scopedProperties");const l=Object.keys(s||{}).concat(Object.keys(n||{}));if(!Object.keys(a).every(d=>l.includes(d)))throw new Error(`Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(a)}, required/optional namespaces: ${JSON.stringify(l)}`)}}),R(this,"validateNamespaces",(r,i)=>{const s=A1(r,"connect()",i);if(s)throw new Error(s.message)}),R(this,"isValidApprove",async r=>{if(!Ut(r))throw new Error(ce("MISSING_OR_INVALID",`approve() params: ${r}`).message);const{id:i,namespaces:s,relayProtocol:n,sessionProperties:o,scopedProperties:a}=r;this.checkRecentlyDeleted(i),await this.isValidProposalId(i);const c=this.client.proposal.get(i),l=rc(s,"approve()");if(l)throw new Error(l.message);const d=zd(c.requiredNamespaces,s,"approve()");if(d)throw new Error(d.message);if(!Fr(n,!0)){const{message:u}=ce("MISSING_OR_INVALID",`approve() relayProtocol: ${n}`);throw new Error(u)}if(Zr(o)||this.validateSessionProps(o,"sessionProperties"),!Zr(a)){this.validateSessionProps(a,"scopedProperties");const u=new Set(Object.keys(s));if(!Object.keys(a).every(h=>u.has(h)))throw new Error(`Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(a)}, approved namespaces: ${Array.from(u).join(", ")}`)}}),R(this,"isValidReject",async r=>{if(!Ut(r)){const{message:n}=ce("MISSING_OR_INVALID",`reject() params: ${r}`);throw new Error(n)}const{id:i,reason:s}=r;if(this.checkRecentlyDeleted(i),await this.isValidProposalId(i),!N1(s)){const{message:n}=ce("MISSING_OR_INVALID",`reject() reason: ${JSON.stringify(s)}`);throw new Error(n)}}),R(this,"isValidSessionSettleRequest",r=>{if(!Ut(r)){const{message:l}=ce("MISSING_OR_INVALID",`onSessionSettleRequest() params: ${r}`);throw new Error(l)}const{relay:i,controller:s,namespaces:n,expiry:o}=r;if(!k1(i)){const{message:l}=ce("MISSING_OR_INVALID","onSessionSettleRequest() relay protocol should be a string");throw new Error(l)}const a=S1(s,"onSessionSettleRequest()");if(a)throw new Error(a.message);const c=rc(n,"onSessionSettleRequest()");if(c)throw new Error(c.message);if(Ri(o)){const{message:l}=ce("EXPIRED","onSessionSettleRequest()");throw new Error(l)}}),R(this,"isValidUpdate",async r=>{if(!Ut(r)){const{message:c}=ce("MISSING_OR_INVALID",`update() params: ${r}`);throw new Error(c)}const{topic:i,namespaces:s}=r;this.checkRecentlyDeleted(i),await this.isValidSessionTopic(i);const n=this.client.session.get(i),o=rc(s,"update()");if(o)throw new Error(o.message);const a=zd(n.requiredNamespaces,s,"update()");if(a)throw new Error(a.message)}),R(this,"isValidExtend",async r=>{if(!Ut(r)){const{message:s}=ce("MISSING_OR_INVALID",`extend() params: ${r}`);throw new Error(s)}const{topic:i}=r;this.checkRecentlyDeleted(i),await this.isValidSessionTopic(i)}),R(this,"isValidRequest",async r=>{if(!Ut(r)){const{message:c}=ce("MISSING_OR_INVALID",`request() params: ${r}`);throw new Error(c)}const{topic:i,request:s,chainId:n,expiry:o}=r;this.checkRecentlyDeleted(i),await this.isValidSessionTopic(i);const{namespaces:a}=this.client.session.get(i);if(!Hd(a,n)){const{message:c}=ce("MISSING_OR_INVALID",`request() chainId: ${n}`);throw new Error(c)}if(!_1(s)){const{message:c}=ce("MISSING_OR_INVALID",`request() ${JSON.stringify(s)}`);throw new Error(c)}if(!P1(a,n,s.method)){const{message:c}=ce("MISSING_OR_INVALID",`request() method: ${s.method}`);throw new Error(c)}if(o&&!T1(o,oc)){const{message:c}=ce("MISSING_OR_INVALID",`request() expiry: ${o}. Expiry must be a number (in seconds) between ${oc.min} and ${oc.max}`);throw new Error(c)}}),R(this,"isValidRespond",async r=>{var i;if(!Ut(r)){const{message:o}=ce("MISSING_OR_INVALID",`respond() params: ${r}`);throw new Error(o)}const{topic:s,response:n}=r;try{await this.isValidSessionTopic(s)}catch(o){throw(i=r==null?void 0:r.response)!=null&&i.id&&this.cleanupAfterResponse(r),o}if(!O1(n)){const{message:o}=ce("MISSING_OR_INVALID",`respond() response: ${JSON.stringify(n)}`);throw new Error(o)}}),R(this,"isValidPing",async r=>{if(!Ut(r)){const{message:s}=ce("MISSING_OR_INVALID",`ping() params: ${r}`);throw new Error(s)}const{topic:i}=r;await this.isValidSessionOrPairingTopic(i)}),R(this,"isValidEmit",async r=>{if(!Ut(r)){const{message:a}=ce("MISSING_OR_INVALID",`emit() params: ${r}`);throw new Error(a)}const{topic:i,event:s,chainId:n}=r;await this.isValidSessionTopic(i);const{namespaces:o}=this.client.session.get(i);if(!Hd(o,n)){const{message:a}=ce("MISSING_OR_INVALID",`emit() chainId: ${n}`);throw new Error(a)}if(!$1(s)){const{message:a}=ce("MISSING_OR_INVALID",`emit() event: ${JSON.stringify(s)}`);throw new Error(a)}if(!R1(o,n,s.name)){const{message:a}=ce("MISSING_OR_INVALID",`emit() event: ${JSON.stringify(s)}`);throw new Error(a)}}),R(this,"isValidDisconnect",async r=>{if(!Ut(r)){const{message:s}=ce("MISSING_OR_INVALID",`disconnect() params: ${r}`);throw new Error(s)}const{topic:i}=r;await this.isValidSessionOrPairingTopic(i)}),R(this,"isValidAuthenticate",r=>{const{chains:i,uri:s,domain:n,nonce:o}=r;if(!Array.isArray(i)||i.length===0)throw new Error("chains is required and must be a non-empty array");if(!Fr(s,!1))throw new Error("uri is required parameter");if(!Fr(n,!1))throw new Error("domain is required parameter");if(!Fr(o,!1))throw new Error("nonce is required parameter");if([...new Set(i.map(c=>vn(c).namespace))].length>1)throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");const{namespace:a}=vn(i[0]);if(a!=="eip155")throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.")}),R(this,"getVerifyContext",async r=>{const{attestationId:i,hash:s,encryptedId:n,metadata:o,transportType:a}=r,c={verified:{verifyUrl:o.verifyUrl||L1,validation:"UNKNOWN",origin:o.url||""}};try{if(a===Ue.link_mode){const d=this.getAppLinkIfEnabled(o,a);return c.verified.validation=d&&new URL(d).origin===new URL(o.url).origin?"VALID":"INVALID",c}const l=await this.client.core.verify.resolve({attestationId:i,hash:s,encryptedId:n,verifyUrl:o.verifyUrl});l&&(c.verified.origin=l.origin,c.verified.isScam=l.isScam,c.verified.validation=l.origin===new URL(o.url).origin?"VALID":"INVALID")}catch(l){this.client.logger.warn(l)}return this.client.logger.debug(`Verify context: ${JSON.stringify(c)}`),c}),R(this,"validateSessionProps",(r,i)=>{Object.values(r).forEach((s,n)=>{if(s==null){const{message:o}=ce("MISSING_OR_INVALID",`${i} must contain an existing value for each key. Received: ${s} for key ${Object.keys(r)[n]}`);throw new Error(o)}})}),R(this,"getPendingAuthRequest",r=>{const i=this.client.auth.requests.get(r);return typeof i=="object"?i:void 0}),R(this,"addToRecentlyDeleted",(r,i)=>{if(this.recentlyDeletedMap.set(r,i),this.recentlyDeletedMap.size>=this.recentlyDeletedLimit){let s=0;const n=this.recentlyDeletedLimit/2;for(const o of this.recentlyDeletedMap.keys()){if(s++>=n)break;this.recentlyDeletedMap.delete(o)}}}),R(this,"checkRecentlyDeleted",r=>{const i=this.recentlyDeletedMap.get(r);if(i){const{message:s}=ce("MISSING_OR_INVALID",`Record was recently deleted - ${i}: ${r}`);throw new Error(s)}}),R(this,"isLinkModeEnabled",(r,i)=>{var s,n,o,a,c,l,d,u,h;return!r||i!==Ue.link_mode?!1:((n=(s=this.client.metadata)==null?void 0:s.redirect)==null?void 0:n.linkMode)===!0&&((a=(o=this.client.metadata)==null?void 0:o.redirect)==null?void 0:a.universal)!==void 0&&((l=(c=this.client.metadata)==null?void 0:c.redirect)==null?void 0:l.universal)!==""&&((d=r==null?void 0:r.redirect)==null?void 0:d.universal)!==void 0&&((u=r==null?void 0:r.redirect)==null?void 0:u.universal)!==""&&((h=r==null?void 0:r.redirect)==null?void 0:h.linkMode)===!0&&this.client.core.linkModeSupportedApps.includes(r.redirect.universal)&&typeof(global==null?void 0:global.Linking)<"u"}),R(this,"getAppLinkIfEnabled",(r,i)=>{var s;return this.isLinkModeEnabled(r,i)?(s=r==null?void 0:r.redirect)==null?void 0:s.universal:void 0}),R(this,"handleLinkModeMessage",({url:r})=>{if(!r||!r.includes("wc_ev")||!r.includes("topic"))return;const i=qd(r,"topic")||"",s=decodeURIComponent(qd(r,"wc_ev")||""),n=this.client.session.keys.includes(i);n&&this.client.session.update(i,{transportType:Ue.link_mode}),this.client.core.dispatchEnvelope({topic:i,message:s,sessionExists:n})}),R(this,"registerLinkModeListeners",async()=>{var r;if(M1()||B1()&&(r=this.client.metadata.redirect)!=null&&r.linkMode){const i=global==null?void 0:global.Linking;if(typeof i<"u"){i.addEventListener("url",this.handleLinkModeMessage,this.client.name);const s=await i.getInitialURL();s&&setTimeout(()=>{this.handleLinkModeMessage({url:s})},50)}}}),R(this,"shouldSetTVF",(r,i)=>{if(!i||r!=="wc_sessionRequest")return!1;const{request:s}=i;return Object.keys(Kd).includes(s.method)}),R(this,"getTVFParams",(r,i,s)=>{var n,o;try{const a=i.request.method,c=this.extractTxHashesFromResult(a,s);return st(Se({correlationId:r,rpcMethods:[a],chainId:i.chainId},this.isValidContractData(i.request.params)&&{contractAddresses:[(o=(n=i.request.params)==null?void 0:n[0])==null?void 0:o.to]}),{txHashes:c})}catch(a){this.client.logger.warn("Error getting TVF params",a)}return{}}),R(this,"isValidContractData",r=>{var i;if(!r)return!1;try{const s=(r==null?void 0:r.data)||((i=r==null?void 0:r[0])==null?void 0:i.data);if(!s.startsWith("0x"))return!1;const n=s.slice(2);return/^[0-9a-fA-F]*$/.test(n)?n.length%2===0:!1}catch{}return!1}),R(this,"extractTxHashesFromResult",(r,i)=>{try{const s=Kd[r];if(typeof i=="string")return[i];const n=i[s.key];if(bi(n))return r==="solana_signAllTransactions"?n.map(o=>U1(o)):n;if(typeof n=="string")return[n]}catch(s){this.client.logger.warn("Error extracting tx hashes from result",s)}return[]})}async processPendingMessageEvents(){try{const e=this.client.session.keys,r=this.client.core.relayer.messages.getWithoutAck(e);for(const[i,s]of Object.entries(r))for(const n of s)try{await this.onProviderMessageEvent({topic:i,message:n,publishedAt:Date.now()})}catch{this.client.logger.warn(`Error processing pending message event for topic: ${i}, message: ${n}`)}}catch(e){this.client.logger.warn("processPendingMessageEvents failed",e)}}isInitialized(){if(!this.initialized){const{message:e}=ce("NOT_INITIALIZED",this.name);throw new Error(e)}}async confirmOnlineStateOrThrow(){await this.client.core.relayer.confirmOnlineStateOrThrow()}registerRelayerEvents(){this.client.core.relayer.on($d.message,e=>{this.onProviderMessageEvent(e)})}async onRelayMessage(e){const{topic:r,message:i,attestation:s,transportType:n}=e,{publicKey:o}=this.client.auth.authKeys.keys.includes(ya)?this.client.auth.authKeys.get(ya):{responseTopic:void 0,publicKey:void 0};try{const a=await this.client.core.crypto.decode(r,i,{receiverPublicKey:o,encoding:n===Ue.link_mode?Os:lo});l1(a)?(this.client.core.history.set(r,a),await this.onRelayEventRequest({topic:r,payload:a,attestation:s,transportType:n,encryptedId:$i(i)})):d1(a)?(await this.client.core.history.resolve(a),await this.onRelayEventResponse({topic:r,payload:a,transportType:n}),this.client.core.history.delete(r,a.id)):await this.onRelayEventUnknownPayload({topic:r,payload:a,transportType:n}),await this.client.core.relayer.messages.ack(r,i)}catch(a){this.client.logger.error(a)}}registerExpirerEvents(){this.client.core.expirer.on(u1.expired,async e=>{const{topic:r,id:i}=h1(e.target);if(i&&this.client.pendingRequest.keys.includes(i))return await this.deletePendingSessionRequest(i,ce("EXPIRED"),!0);if(i&&this.client.auth.requests.keys.includes(i))return await this.deletePendingAuthRequest(i,ce("EXPIRED"),!0);r?this.client.session.keys.includes(r)&&(await this.deleteSession({topic:r,expirerHasDeleted:!0}),this.client.events.emit("session_expire",{topic:r})):i&&(await this.deleteProposal(i,!0),this.client.events.emit("proposal_expire",{id:i}))})}registerPairingEvents(){this.client.core.pairing.events.on(Rd.create,e=>this.onPairingCreated(e)),this.client.core.pairing.events.on(Rd.delete,e=>{this.addToRecentlyDeleted(e.topic,"pairing")})}isValidPairingTopic(e){if(!Fr(e,!1)){const{message:r}=ce("MISSING_OR_INVALID",`pairing topic should be a string: ${e}`);throw new Error(r)}if(!this.client.core.pairing.pairings.keys.includes(e)){const{message:r}=ce("NO_MATCHING_KEY",`pairing topic doesn't exist: ${e}`);throw new Error(r)}if(Ri(this.client.core.pairing.pairings.get(e).expiry)){const{message:r}=ce("EXPIRED",`pairing topic: ${e}`);throw new Error(r)}}async isValidSessionTopic(e){if(!Fr(e,!1)){const{message:r}=ce("MISSING_OR_INVALID",`session topic should be a string: ${e}`);throw new Error(r)}if(this.checkRecentlyDeleted(e),!this.client.session.keys.includes(e)){const{message:r}=ce("NO_MATCHING_KEY",`session topic doesn't exist: ${e}`);throw new Error(r)}if(Ri(this.client.session.get(e).expiry)){await this.deleteSession({topic:e});const{message:r}=ce("EXPIRED",`session topic: ${e}`);throw new Error(r)}if(!this.client.core.crypto.keychain.has(e)){const{message:r}=ce("MISSING_OR_INVALID",`session topic does not exist in keychain: ${e}`);throw await this.deleteSession({topic:e}),new Error(r)}}async isValidSessionOrPairingTopic(e){if(this.checkRecentlyDeleted(e),this.client.session.keys.includes(e))await this.isValidSessionTopic(e);else if(this.client.core.pairing.pairings.keys.includes(e))this.isValidPairingTopic(e);else if(Fr(e,!1)){const{message:r}=ce("NO_MATCHING_KEY",`session or pairing topic doesn't exist: ${e}`);throw new Error(r)}else{const{message:r}=ce("MISSING_OR_INVALID",`session or pairing topic should be a string: ${e}`);throw new Error(r)}}async isValidProposalId(e){if(!p1(e)){const{message:r}=ce("MISSING_OR_INVALID",`proposal id should be a number: ${e}`);throw new Error(r)}if(!this.client.proposal.keys.includes(e)){const{message:r}=ce("NO_MATCHING_KEY",`proposal id doesn't exist: ${e}`);throw new Error(r)}if(Ri(this.client.proposal.get(e).expiryTimestamp)){await this.deleteProposal(e);const{message:r}=ce("EXPIRED",`proposal id: ${e}`);throw new Error(r)}}},nf=class extends ks{constructor(e,r){super(e,r,H1,ld),this.core=e,this.logger=r}},of=class extends ks{constructor(e,r){super(e,r,q1,ld),this.core=e,this.logger=r}},af=class extends ks{constructor(e,r){super(e,r,F1,ld,i=>i.id),this.core=e,this.logger=r}},cf=class extends ks{constructor(e,r){super(e,r,K1,Ua,()=>ya),this.core=e,this.logger=r}},lf=class extends ks{constructor(e,r){super(e,r,Y1,Ua),this.core=e,this.logger=r}},df=class extends ks{constructor(e,r){super(e,r,J1,Ua,i=>i.id),this.core=e,this.logger=r}};var uf=Object.defineProperty,hf=(t,e,r)=>e in t?uf(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,ac=(t,e,r)=>hf(t,typeof e!="symbol"?e+"":e,r);let pf=class{constructor(e,r){this.core=e,this.logger=r,ac(this,"authKeys"),ac(this,"pairingTopics"),ac(this,"requests"),this.authKeys=new cf(this.core,this.logger),this.pairingTopics=new lf(this.core,this.logger),this.requests=new df(this.core,this.logger)}async init(){await this.authKeys.init(),await this.pairingTopics.init(),await this.requests.init()}};var ff=Object.defineProperty,gf=(t,e,r)=>e in t?ff(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,ge=(t,e,r)=>gf(t,typeof e!="symbol"?e+"":e,r);let wf=class cp extends i1{constructor(e){super(e),ge(this,"protocol",np),ge(this,"version",op),ge(this,"name",nc.name),ge(this,"metadata"),ge(this,"core"),ge(this,"logger"),ge(this,"events",new cd.EventEmitter),ge(this,"engine"),ge(this,"session"),ge(this,"proposal"),ge(this,"pendingRequest"),ge(this,"auth"),ge(this,"signConfig"),ge(this,"on",(i,s)=>this.events.on(i,s)),ge(this,"once",(i,s)=>this.events.once(i,s)),ge(this,"off",(i,s)=>this.events.off(i,s)),ge(this,"removeListener",(i,s)=>this.events.removeListener(i,s)),ge(this,"removeAllListeners",i=>this.events.removeAllListeners(i)),ge(this,"connect",async i=>{try{return await this.engine.connect(i)}catch(s){throw this.logger.error(s.message),s}}),ge(this,"pair",async i=>{try{return await this.engine.pair(i)}catch(s){throw this.logger.error(s.message),s}}),ge(this,"approve",async i=>{try{return await this.engine.approve(i)}catch(s){throw this.logger.error(s.message),s}}),ge(this,"reject",async i=>{try{return await this.engine.reject(i)}catch(s){throw this.logger.error(s.message),s}}),ge(this,"update",async i=>{try{return await this.engine.update(i)}catch(s){throw this.logger.error(s.message),s}}),ge(this,"extend",async i=>{try{return await this.engine.extend(i)}catch(s){throw this.logger.error(s.message),s}}),ge(this,"request",async i=>{try{return await this.engine.request(i)}catch(s){throw this.logger.error(s.message),s}}),ge(this,"respond",async i=>{try{return await this.engine.respond(i)}catch(s){throw this.logger.error(s.message),s}}),ge(this,"ping",async i=>{try{return await this.engine.ping(i)}catch(s){throw this.logger.error(s.message),s}}),ge(this,"emit",async i=>{try{return await this.engine.emit(i)}catch(s){throw this.logger.error(s.message),s}}),ge(this,"disconnect",async i=>{try{return await this.engine.disconnect(i)}catch(s){throw this.logger.error(s.message),s}}),ge(this,"find",i=>{try{return this.engine.find(i)}catch(s){throw this.logger.error(s.message),s}}),ge(this,"getPendingSessionRequests",()=>{try{return this.engine.getPendingSessionRequests()}catch(i){throw this.logger.error(i.message),i}}),ge(this,"authenticate",async(i,s)=>{try{return await this.engine.authenticate(i,s)}catch(n){throw this.logger.error(n.message),n}}),ge(this,"formatAuthMessage",i=>{try{return this.engine.formatAuthMessage(i)}catch(s){throw this.logger.error(s.message),s}}),ge(this,"approveSessionAuthenticate",async i=>{try{return await this.engine.approveSessionAuthenticate(i)}catch(s){throw this.logger.error(s.message),s}}),ge(this,"rejectSessionAuthenticate",async i=>{try{return await this.engine.rejectSessionAuthenticate(i)}catch(s){throw this.logger.error(s.message),s}}),this.name=(e==null?void 0:e.name)||nc.name,this.metadata=s1(e==null?void 0:e.metadata),this.signConfig=e==null?void 0:e.signConfig;const r=typeof(e==null?void 0:e.logger)<"u"&&typeof(e==null?void 0:e.logger)!="string"?e.logger:Qh(ep({level:(e==null?void 0:e.logger)||nc.logger}));this.core=(e==null?void 0:e.core)||new n1(e),this.logger=o1(r,this.name),this.session=new of(this.core,this.logger),this.proposal=new nf(this.core,this.logger),this.pendingRequest=new af(this.core,this.logger),this.engine=new sf(this),this.auth=new pf(this.core,this.logger)}static async init(e){const r=new cp(e);return await r.initialize(),r}get context(){return a1(this.logger)}get pairing(){return this.core.pairing.pairings}async initialize(){this.logger.trace("Initialized");try{await this.core.start(),await this.session.init(),await this.proposal.init(),await this.pendingRequest.init(),await this.auth.init(),await this.engine.init(),this.logger.info("SignClient Initialization Success"),setTimeout(()=>{this.engine.processRelayMessageCache()},Ce.toMiliseconds(Ce.ONE_SECOND))}catch(e){throw this.logger.info("SignClient Initialization Failure"),this.logger.error(e.message),e}}};var Rl={exports:{}};(function(t,e){var r=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof po<"u"&&po,i=function(){function n(){this.fetch=!1,this.DOMException=r.DOMException}return n.prototype=r,new n}();(function(n){(function(o){var a=typeof n<"u"&&n||typeof self<"u"&&self||typeof po<"u"&&po||{},c={searchParams:"URLSearchParams"in a,iterable:"Symbol"in a&&"iterator"in Symbol,blob:"FileReader"in a&&"Blob"in a&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in a,arrayBuffer:"ArrayBuffer"in a};function l(g){return g&&DataView.prototype.isPrototypeOf(g)}if(c.arrayBuffer)var d=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],u=ArrayBuffer.isView||function(g){return g&&d.indexOf(Object.prototype.toString.call(g))>-1};function h(g){if(typeof g!="string"&&(g=String(g)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(g)||g==="")throw new TypeError('Invalid character in header field name: "'+g+'"');return g.toLowerCase()}function p(g){return typeof g!="string"&&(g=String(g)),g}function w(g){var y={next:function(){var N=g.shift();return{done:N===void 0,value:N}}};return c.iterable&&(y[Symbol.iterator]=function(){return y}),y}function f(g){this.map={},g instanceof f?g.forEach(function(y,N){this.append(N,y)},this):Array.isArray(g)?g.forEach(function(y){if(y.length!=2)throw new TypeError("Headers constructor: expected name/value pair to be length 2, found"+y.length);this.append(y[0],y[1])},this):g&&Object.getOwnPropertyNames(g).forEach(function(y){this.append(y,g[y])},this)}f.prototype.append=function(g,y){g=h(g),y=p(y);var N=this.map[g];this.map[g]=N?N+", "+y:y},f.prototype.delete=function(g){delete this.map[h(g)]},f.prototype.get=function(g){return g=h(g),this.has(g)?this.map[g]:null},f.prototype.has=function(g){return this.map.hasOwnProperty(h(g))},f.prototype.set=function(g,y){this.map[h(g)]=p(y)},f.prototype.forEach=function(g,y){for(var N in this.map)this.map.hasOwnProperty(N)&&g.call(y,this.map[N],N,this)},f.prototype.keys=function(){var g=[];return this.forEach(function(y,N){g.push(N)}),w(g)},f.prototype.values=function(){var g=[];return this.forEach(function(y){g.push(y)}),w(g)},f.prototype.entries=function(){var g=[];return this.forEach(function(y,N){g.push([N,y])}),w(g)},c.iterable&&(f.prototype[Symbol.iterator]=f.prototype.entries);function m(g){if(!g._noBody){if(g.bodyUsed)return Promise.reject(new TypeError("Already read"));g.bodyUsed=!0}}function v(g){return new Promise(function(y,N){g.onload=function(){y(g.result)},g.onerror=function(){N(g.error)}})}function x(g){var y=new FileReader,N=v(y);return y.readAsArrayBuffer(g),N}function E(g){var y=new FileReader,N=v(y),S=/charset=([A-Za-z0-9_-]+)/.exec(g.type),$=S?S[1]:"utf-8";return y.readAsText(g,$),N}function A(g){for(var y=new Uint8Array(g),N=new Array(y.length),S=0;S<y.length;S++)N[S]=String.fromCharCode(y[S]);return N.join("")}function k(g){if(g.slice)return g.slice(0);var y=new Uint8Array(g.byteLength);return y.set(new Uint8Array(g)),y.buffer}function T(){return this.bodyUsed=!1,this._initBody=function(g){this.bodyUsed=this.bodyUsed,this._bodyInit=g,g?typeof g=="string"?this._bodyText=g:c.blob&&Blob.prototype.isPrototypeOf(g)?this._bodyBlob=g:c.formData&&FormData.prototype.isPrototypeOf(g)?this._bodyFormData=g:c.searchParams&&URLSearchParams.prototype.isPrototypeOf(g)?this._bodyText=g.toString():c.arrayBuffer&&c.blob&&l(g)?(this._bodyArrayBuffer=k(g.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):c.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(g)||u(g))?this._bodyArrayBuffer=k(g):this._bodyText=g=Object.prototype.toString.call(g):(this._noBody=!0,this._bodyText=""),this.headers.get("content-type")||(typeof g=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):c.searchParams&&URLSearchParams.prototype.isPrototypeOf(g)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},c.blob&&(this.blob=function(){var g=m(this);if(g)return g;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))}),this.arrayBuffer=function(){if(this._bodyArrayBuffer){var g=m(this);return g||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else{if(c.blob)return this.blob().then(x);throw new Error("could not read as ArrayBuffer")}},this.text=function(){var g=m(this);if(g)return g;if(this._bodyBlob)return E(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(A(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},c.formData&&(this.formData=function(){return this.text().then(U)}),this.json=function(){return this.text().then(JSON.parse)},this}var j=["CONNECT","DELETE","GET","HEAD","OPTIONS","PATCH","POST","PUT","TRACE"];function M(g){var y=g.toUpperCase();return j.indexOf(y)>-1?y:g}function _(g,y){if(!(this instanceof _))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');y=y||{};var N=y.body;if(g instanceof _){if(g.bodyUsed)throw new TypeError("Already read");this.url=g.url,this.credentials=g.credentials,y.headers||(this.headers=new f(g.headers)),this.method=g.method,this.mode=g.mode,this.signal=g.signal,!N&&g._bodyInit!=null&&(N=g._bodyInit,g.bodyUsed=!0)}else this.url=String(g);if(this.credentials=y.credentials||this.credentials||"same-origin",(y.headers||!this.headers)&&(this.headers=new f(y.headers)),this.method=M(y.method||this.method||"GET"),this.mode=y.mode||this.mode||null,this.signal=y.signal||this.signal||function(){if("AbortController"in a){var O=new AbortController;return O.signal}}(),this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&N)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(N),(this.method==="GET"||this.method==="HEAD")&&(y.cache==="no-store"||y.cache==="no-cache")){var S=/([?&])_=[^&]*/;if(S.test(this.url))this.url=this.url.replace(S,"$1_="+new Date().getTime());else{var $=/\?/;this.url+=($.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}_.prototype.clone=function(){return new _(this,{body:this._bodyInit})};function U(g){var y=new FormData;return g.trim().split("&").forEach(function(N){if(N){var S=N.split("="),$=S.shift().replace(/\+/g," "),O=S.join("=").replace(/\+/g," ");y.append(decodeURIComponent($),decodeURIComponent(O))}}),y}function D(g){var y=new f,N=g.replace(/\r?\n[\t ]+/g," ");return N.split("\r").map(function(S){return S.indexOf(`
`)===0?S.substr(1,S.length):S}).forEach(function(S){var $=S.split(":"),O=$.shift().trim();if(O){var se=$.join(":").trim();try{y.append(O,se)}catch(de){console.warn("Response "+de.message)}}}),y}T.call(_.prototype);function Q(g,y){if(!(this instanceof Q))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');if(y||(y={}),this.type="default",this.status=y.status===void 0?200:y.status,this.status<200||this.status>599)throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");this.ok=this.status>=200&&this.status<300,this.statusText=y.statusText===void 0?"":""+y.statusText,this.headers=new f(y.headers),this.url=y.url||"",this._initBody(g)}T.call(Q.prototype),Q.prototype.clone=function(){return new Q(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new f(this.headers),url:this.url})},Q.error=function(){var g=new Q(null,{status:200,statusText:""});return g.ok=!1,g.status=0,g.type="error",g};var pe=[301,302,303,307,308];Q.redirect=function(g,y){if(pe.indexOf(y)===-1)throw new RangeError("Invalid status code");return new Q(null,{status:y,headers:{location:g}})},o.DOMException=a.DOMException;try{new o.DOMException}catch{o.DOMException=function(y,N){this.message=y,this.name=N;var S=Error(y);this.stack=S.stack},o.DOMException.prototype=Object.create(Error.prototype),o.DOMException.prototype.constructor=o.DOMException}function P(g,y){return new Promise(function(N,S){var $=new _(g,y);if($.signal&&$.signal.aborted)return S(new o.DOMException("Aborted","AbortError"));var O=new XMLHttpRequest;function se(){O.abort()}O.onload=function(){var te={statusText:O.statusText,headers:D(O.getAllResponseHeaders()||"")};$.url.indexOf("file://")===0&&(O.status<200||O.status>599)?te.status=200:te.status=O.status,te.url="responseURL"in O?O.responseURL:te.headers.get("X-Request-URL");var ye="response"in O?O.response:O.responseText;setTimeout(function(){N(new Q(ye,te))},0)},O.onerror=function(){setTimeout(function(){S(new TypeError("Network request failed"))},0)},O.ontimeout=function(){setTimeout(function(){S(new TypeError("Network request timed out"))},0)},O.onabort=function(){setTimeout(function(){S(new o.DOMException("Aborted","AbortError"))},0)};function de(te){try{return te===""&&a.location.href?a.location.href:te}catch{return te}}if(O.open($.method,de($.url),!0),$.credentials==="include"?O.withCredentials=!0:$.credentials==="omit"&&(O.withCredentials=!1),"responseType"in O&&(c.blob?O.responseType="blob":c.arrayBuffer&&(O.responseType="arraybuffer")),y&&typeof y.headers=="object"&&!(y.headers instanceof f||a.Headers&&y.headers instanceof a.Headers)){var fe=[];Object.getOwnPropertyNames(y.headers).forEach(function(te){fe.push(h(te)),O.setRequestHeader(te,p(y.headers[te]))}),$.headers.forEach(function(te,ye){fe.indexOf(ye)===-1&&O.setRequestHeader(ye,te)})}else $.headers.forEach(function(te,ye){O.setRequestHeader(ye,te)});$.signal&&($.signal.addEventListener("abort",se),O.onreadystatechange=function(){O.readyState===4&&$.signal.removeEventListener("abort",se)}),O.send(typeof $._bodyInit>"u"?null:$._bodyInit)})}return P.polyfill=!0,a.fetch||(a.fetch=P,a.Headers=f,a.Request=_,a.Response=Q),o.Headers=f,o.Request=_,o.Response=Q,o.fetch=P,Object.defineProperty(o,"__esModule",{value:!0}),o})({})})(i),i.fetch.ponyfill=!0,delete i.fetch.polyfill;var s=r.fetch?r:i;e=s.fetch,e.default=s.fetch,e.fetch=s.fetch,e.Headers=s.Headers,e.Request=s.Request,e.Response=s.Response,t.exports=e})(Rl,Rl.exports);var mf=Rl.exports;const Jd=D1(mf);var vf=Object.defineProperty,bf=Object.defineProperties,yf=Object.getOwnPropertyDescriptors,Xd=Object.getOwnPropertySymbols,Cf=Object.prototype.hasOwnProperty,xf=Object.prototype.propertyIsEnumerable,Qd=(t,e,r)=>e in t?vf(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,eu=(t,e)=>{for(var r in e||(e={}))Cf.call(e,r)&&Qd(t,r,e[r]);if(Xd)for(var r of Xd(e))xf.call(e,r)&&Qd(t,r,e[r]);return t},tu=(t,e)=>bf(t,yf(e));const Ef={Accept:"application/json","Content-Type":"application/json"},If="POST",ru={headers:Ef,method:If},iu=10;let Gt=class{constructor(e,r=!1){if(this.url=e,this.disableProviderPing=r,this.events=new cd.EventEmitter,this.isAvailable=!1,this.registering=!1,!Wd(e))throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);this.url=e,this.disableProviderPing=r}get connected(){return this.isAvailable}get connecting(){return this.registering}on(e,r){this.events.on(e,r)}once(e,r){this.events.once(e,r)}off(e,r){this.events.off(e,r)}removeListener(e,r){this.events.removeListener(e,r)}async open(e=this.url){await this.register(e)}async close(){if(!this.isAvailable)throw new Error("Connection already closed");this.onClose()}async send(e){this.isAvailable||await this.register();try{const r=Fd(e),i=await(await Jd(this.url,tu(eu({},ru),{body:r}))).json();this.onPayload({data:i})}catch(r){this.onError(e.id,r)}}async register(e=this.url){if(!Wd(e))throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);if(this.registering){const r=this.events.getMaxListeners();return(this.events.listenerCount("register_error")>=r||this.events.listenerCount("open")>=r)&&this.events.setMaxListeners(r+1),new Promise((i,s)=>{this.events.once("register_error",n=>{this.resetMaxListeners(),s(n)}),this.events.once("open",()=>{if(this.resetMaxListeners(),typeof this.isAvailable>"u")return s(new Error("HTTP connection is missing or invalid"));i()})})}this.url=e,this.registering=!0;try{if(!this.disableProviderPing){const r=Fd({id:1,jsonrpc:"2.0",method:"test",params:[]});await Jd(e,tu(eu({},ru),{body:r}))}this.onOpen()}catch(r){const i=this.parseError(r);throw this.events.emit("register_error",i),this.onClose(),i}}onOpen(){this.isAvailable=!0,this.registering=!1,this.events.emit("open")}onClose(){this.isAvailable=!1,this.registering=!1,this.events.emit("close")}onPayload(e){if(typeof e.data>"u")return;const r=typeof e.data=="string"?j1(e.data):e.data;this.events.emit("payload",r)}onError(e,r){const i=this.parseError(r),s=i.message||i.toString(),n=rp(e,s);this.events.emit("payload",n)}parseError(e,r=this.url){return z1(e,r,"HTTP")}resetMaxListeners(){this.events.getMaxListeners()>iu&&this.events.setMaxListeners(iu)}};const su="error",Af="wss://relay.walletconnect.org",Nf="wc",kf="universal_provider",fo=`${Nf}@2:${kf}:`,lp="https://rpc.walletconnect.org/v1/",ss="generic",Sf=`${lp}bundler`,Mt={DEFAULT_CHAIN_CHANGED:"default_chain_changed"};function _f(){}function dd(t){return t==null||typeof t!="object"&&typeof t!="function"}function ud(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Pf(t){if(dd(t))return t;if(Array.isArray(t)||ud(t)||t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer)return t.slice(0);const e=Object.getPrototypeOf(t),r=e.constructor;if(t instanceof Date||t instanceof Map||t instanceof Set)return new r(t);if(t instanceof RegExp){const i=new r(t);return i.lastIndex=t.lastIndex,i}if(t instanceof DataView)return new r(t.buffer.slice(0));if(t instanceof Error){const i=new r(t.message);return i.stack=t.stack,i.name=t.name,i.cause=t.cause,i}if(typeof File<"u"&&t instanceof File)return new r([t],t.name,{type:t.type,lastModified:t.lastModified});if(typeof t=="object"){const i=Object.create(e);return Object.assign(i,t)}return t}function nu(t){return typeof t=="object"&&t!==null}function dp(t){return Object.getOwnPropertySymbols(t).filter(e=>Object.prototype.propertyIsEnumerable.call(t,e))}function up(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const Tf="[object RegExp]",hp="[object String]",pp="[object Number]",fp="[object Boolean]",gp="[object Arguments]",Of="[object Symbol]",$f="[object Date]",Rf="[object Map]",Lf="[object Set]",Mf="[object Array]",Bf="[object ArrayBuffer]",Uf="[object Object]",Df="[object DataView]",jf="[object Uint8Array]",zf="[object Uint8ClampedArray]",Hf="[object Uint16Array]",qf="[object Uint32Array]",Wf="[object Int8Array]",Ff="[object Int16Array]",Vf="[object Int32Array]",Gf="[object Float32Array]",Zf="[object Float64Array]";function Kf(t,e){return hs(t,void 0,t,new Map,e)}function hs(t,e,r,i=new Map,s=void 0){const n=s==null?void 0:s(t,e,r,i);if(n!=null)return n;if(dd(t))return t;if(i.has(t))return i.get(t);if(Array.isArray(t)){const o=new Array(t.length);i.set(t,o);for(let a=0;a<t.length;a++)o[a]=hs(t[a],a,r,i,s);return Object.hasOwn(t,"index")&&(o.index=t.index),Object.hasOwn(t,"input")&&(o.input=t.input),o}if(t instanceof Date)return new Date(t.getTime());if(t instanceof RegExp){const o=new RegExp(t.source,t.flags);return o.lastIndex=t.lastIndex,o}if(t instanceof Map){const o=new Map;i.set(t,o);for(const[a,c]of t)o.set(a,hs(c,a,r,i,s));return o}if(t instanceof Set){const o=new Set;i.set(t,o);for(const a of t)o.add(hs(a,void 0,r,i,s));return o}if(typeof Buffer<"u"&&Buffer.isBuffer(t))return t.subarray();if(ud(t)){const o=new(Object.getPrototypeOf(t)).constructor(t.length);i.set(t,o);for(let a=0;a<t.length;a++)o[a]=hs(t[a],a,r,i,s);return o}if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer)return t.slice(0);if(t instanceof DataView){const o=new DataView(t.buffer.slice(0),t.byteOffset,t.byteLength);return i.set(t,o),fi(o,t,r,i,s),o}if(typeof File<"u"&&t instanceof File){const o=new File([t],t.name,{type:t.type});return i.set(t,o),fi(o,t,r,i,s),o}if(t instanceof Blob){const o=new Blob([t],{type:t.type});return i.set(t,o),fi(o,t,r,i,s),o}if(t instanceof Error){const o=new t.constructor;return i.set(t,o),o.message=t.message,o.name=t.name,o.stack=t.stack,o.cause=t.cause,fi(o,t,r,i,s),o}if(typeof t=="object"&&Yf(t)){const o=Object.create(Object.getPrototypeOf(t));return i.set(t,o),fi(o,t,r,i,s),o}return t}function fi(t,e,r=t,i,s){const n=[...Object.keys(e),...dp(e)];for(let o=0;o<n.length;o++){const a=n[o],c=Object.getOwnPropertyDescriptor(t,a);(c==null||c.writable)&&(t[a]=hs(e[a],a,r,i,s))}}function Yf(t){switch(up(t)){case gp:case Mf:case Bf:case Df:case fp:case $f:case Gf:case Zf:case Wf:case Ff:case Vf:case Rf:case pp:case Uf:case Tf:case Lf:case hp:case Of:case jf:case zf:case Hf:case qf:return!0;default:return!1}}function Jf(t,e){return Kf(t,(r,i,s,n)=>{if(typeof t=="object")switch(Object.prototype.toString.call(t)){case pp:case hp:case fp:{const o=new t.constructor(t==null?void 0:t.valueOf());return fi(o,t),o}case gp:{const o={};return fi(o,t),o.length=t.length,o[Symbol.iterator]=t[Symbol.iterator],o}default:return}})}function ou(t){return Jf(t)}function au(t){return t!==null&&typeof t=="object"&&up(t)==="[object Arguments]"}function Xf(t){return ud(t)}function Qf(t){var r;if(typeof t!="object"||t==null)return!1;if(Object.getPrototypeOf(t)===null)return!0;if(Object.prototype.toString.call(t)!=="[object Object]"){const i=t[Symbol.toStringTag];return i==null||!((r=Object.getOwnPropertyDescriptor(t,Symbol.toStringTag))!=null&&r.writable)?!1:t.toString()===`[object ${i}]`}let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function eg(t,...e){const r=e.slice(0,-1),i=e[e.length-1];let s=t;for(let n=0;n<r.length;n++){const o=r[n];s=Ll(s,o,i,new Map)}return s}function Ll(t,e,r,i){if(dd(t)&&(t=Object(t)),e==null||typeof e!="object")return t;if(i.has(e))return Pf(i.get(e));if(i.set(e,t),Array.isArray(e)){e=e.slice();for(let n=0;n<e.length;n++)e[n]=e[n]??void 0}const s=[...Object.keys(e),...dp(e)];for(let n=0;n<s.length;n++){const o=s[n];let a=e[o],c=t[o];if(au(a)&&(a={...a}),au(c)&&(c={...c}),typeof Buffer<"u"&&Buffer.isBuffer(a)&&(a=ou(a)),Array.isArray(a))if(typeof c=="object"&&c!=null){const d=[],u=Reflect.ownKeys(c);for(let h=0;h<u.length;h++){const p=u[h];d[p]=c[p]}c=d}else c=[];const l=r(c,a,o,t,e,i);l!=null?t[o]=l:Array.isArray(a)||nu(c)&&nu(a)?t[o]=Ll(c,a,r,i):c==null&&Qf(a)?t[o]=Ll({},a,r,i):c==null&&Xf(a)?t[o]=ou(a):(c===void 0||a!==void 0)&&(t[o]=a)}return t}function tg(t,...e){return eg(t,...e,_f)}var rg=Object.defineProperty,ig=Object.defineProperties,sg=Object.getOwnPropertyDescriptors,cu=Object.getOwnPropertySymbols,ng=Object.prototype.hasOwnProperty,og=Object.prototype.propertyIsEnumerable,lu=(t,e,r)=>e in t?rg(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,go=(t,e)=>{for(var r in e||(e={}))ng.call(e,r)&&lu(t,r,e[r]);if(cu)for(var r of cu(e))og.call(e,r)&&lu(t,r,e[r]);return t},ag=(t,e)=>ig(t,sg(e));function It(t,e,r){var i;const s=vn(t);return((i=e.rpcMap)==null?void 0:i[s.reference])||`${lp}?chainId=${s.namespace}:${s.reference}&projectId=${r}`}function Ti(t){return t.includes(":")?t.split(":")[1]:t}function wp(t){return t.map(e=>`${e.split(":")[0]}:${e.split(":")[1]}`)}function cg(t,e){const r=Object.keys(e.namespaces).filter(s=>s.includes(t));if(!r.length)return[];const i=[];return r.forEach(s=>{const n=e.namespaces[s].accounts;i.push(...n)}),i}function cc(t={},e={}){const r=du(t),i=du(e);return tg(r,i)}function du(t){var e,r,i,s;const n={};if(!Ol(t))return n;for(const[o,a]of Object.entries(t)){const c=sp(o)?[o]:a.chains,l=a.methods||[],d=a.events||[],u=a.rpcMap||{},h=un(o);n[h]=ag(go(go({},n[h]),a),{chains:sc(c,(e=n[h])==null?void 0:e.chains),methods:sc(l,(r=n[h])==null?void 0:r.methods),events:sc(d,(i=n[h])==null?void 0:i.events),rpcMap:go(go({},u),(s=n[h])==null?void 0:s.rpcMap)})}return n}function uu(t){return t.includes(":")?t.split(":")[2]:t}function hu(t){const e={};for(const[r,i]of Object.entries(t)){const s=i.methods||[],n=i.events||[],o=i.accounts||[],a=sp(r)?[r]:i.chains?i.chains:wp(i.accounts);e[r]={chains:a,methods:s,events:n,accounts:o}}return e}function lc(t){return typeof t=="number"?t:t.includes("0x")?parseInt(t,16):(t=t.includes(":")?t.split(":")[1]:t,isNaN(Number(t))?t:Number(t))}const mp={},be=t=>mp[t],dc=(t,e)=>{mp[t]=e};var lg=Object.defineProperty,dg=(t,e,r)=>e in t?lg(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Bi=(t,e,r)=>dg(t,typeof e!="symbol"?e+"":e,r);let ug=class{constructor(e){Bi(this,"name","polkadot"),Bi(this,"client"),Bi(this,"httpProviders"),Bi(this,"events"),Bi(this,"namespace"),Bi(this,"chainId"),this.namespace=e.namespace,this.events=be("events"),this.client=be("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,r){this.httpProviders[e]||this.setHttpProvider(e,r),this.chainId=e,this.events.emit(Mt.DEFAULT_CHAIN_CHANGED,`${this.name}:${e}`)}getAccounts(){const e=this.namespace.accounts;return e?e.filter(r=>r.split(":")[1]===this.chainId.toString()).map(r=>r.split(":")[2])||[]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(r=>{var i;const s=Ti(r);e[s]=this.createHttpProvider(s,(i=this.namespace.rpcMap)==null?void 0:i[r])}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,r=this.httpProviders[e];if(typeof r>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return r}setHttpProvider(e,r){const i=this.createHttpProvider(e,r);i&&(this.httpProviders[e]=i)}createHttpProvider(e,r){const i=r||It(e,this.namespace,this.client.core.projectId);if(!i)throw new Error(`No RPC url provided for chainId: ${e}`);return new Vt(new Gt(i,be("disableProviderPing")))}};var hg=Object.defineProperty,pg=Object.defineProperties,fg=Object.getOwnPropertyDescriptors,pu=Object.getOwnPropertySymbols,gg=Object.prototype.hasOwnProperty,wg=Object.prototype.propertyIsEnumerable,Ml=(t,e,r)=>e in t?hg(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,fu=(t,e)=>{for(var r in e||(e={}))gg.call(e,r)&&Ml(t,r,e[r]);if(pu)for(var r of pu(e))wg.call(e,r)&&Ml(t,r,e[r]);return t},gu=(t,e)=>pg(t,fg(e)),Ui=(t,e,r)=>Ml(t,typeof e!="symbol"?e+"":e,r);let mg=class{constructor(e){Ui(this,"name","eip155"),Ui(this,"client"),Ui(this,"chainId"),Ui(this,"namespace"),Ui(this,"httpProviders"),Ui(this,"events"),this.namespace=e.namespace,this.events=be("events"),this.client=be("client"),this.httpProviders=this.createHttpProviders(),this.chainId=parseInt(this.getDefaultChain())}async request(e){switch(e.request.method){case"eth_requestAccounts":return this.getAccounts();case"eth_accounts":return this.getAccounts();case"wallet_switchEthereumChain":return await this.handleSwitchChain(e);case"eth_chainId":return parseInt(this.getDefaultChain());case"wallet_getCapabilities":return await this.getCapabilities(e);case"wallet_getCallsStatus":return await this.getCallStatus(e)}return this.namespace.methods.includes(e.request.method)?await this.client.request(e):this.getHttpProvider().request(e.request)}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}setDefaultChain(e,r){this.httpProviders[e]||this.setHttpProvider(parseInt(e),r),this.chainId=parseInt(e),this.events.emit(Mt.DEFAULT_CHAIN_CHANGED,`${this.name}:${e}`)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId.toString();if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}createHttpProvider(e,r){const i=r||It(`${this.name}:${e}`,this.namespace,this.client.core.projectId);if(!i)throw new Error(`No RPC url provided for chainId: ${e}`);return new Vt(new Gt(i,be("disableProviderPing")))}setHttpProvider(e,r){const i=this.createHttpProvider(e,r);i&&(this.httpProviders[e]=i)}createHttpProviders(){const e={};return this.namespace.chains.forEach(r=>{var i;const s=parseInt(Ti(r));e[s]=this.createHttpProvider(s,(i=this.namespace.rpcMap)==null?void 0:i[r])}),e}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(r=>r.split(":")[1]===this.chainId.toString()).map(r=>r.split(":")[2]))]:[]}getHttpProvider(){const e=this.chainId,r=this.httpProviders[e];if(typeof r>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return r}async handleSwitchChain(e){var r,i;let s=e.request.params?(r=e.request.params[0])==null?void 0:r.chainId:"0x0";s=s.startsWith("0x")?s:`0x${s}`;const n=parseInt(s,16);if(this.isChainApproved(n))this.setDefaultChain(`${n}`);else if(this.namespace.methods.includes("wallet_switchEthereumChain"))await this.client.request({topic:e.topic,request:{method:e.request.method,params:[{chainId:s}]},chainId:(i=this.namespace.chains)==null?void 0:i[0]}),this.setDefaultChain(`${n}`);else throw new Error(`Failed to switch to chain 'eip155:${n}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);return null}isChainApproved(e){return this.namespace.chains.includes(`${this.name}:${e}`)}async getCapabilities(e){var r,i,s;const n=(i=(r=e.request)==null?void 0:r.params)==null?void 0:i[0];if(!n)throw new Error("Missing address parameter in `wallet_getCapabilities` request");const o=this.client.session.get(e.topic),a=((s=o==null?void 0:o.sessionProperties)==null?void 0:s.capabilities)||{};if(a!=null&&a[n])return a==null?void 0:a[n];const c=await this.client.request(e);try{await this.client.session.update(e.topic,{sessionProperties:gu(fu({},o.sessionProperties||{}),{capabilities:gu(fu({},a||{}),{[n]:c})})})}catch(l){console.warn("Failed to update session with capabilities",l)}return c}async getCallStatus(e){var r,i;const s=this.client.session.get(e.topic),n=(r=s.sessionProperties)==null?void 0:r.bundler_name;if(n){const a=this.getBundlerUrl(e.chainId,n);try{return await this.getUserOperationReceipt(a,e)}catch(c){console.warn("Failed to fetch call status from bundler",c,a)}}const o=(i=s.sessionProperties)==null?void 0:i.bundler_url;if(o)try{return await this.getUserOperationReceipt(o,e)}catch(a){console.warn("Failed to fetch call status from custom bundler",a,o)}if(this.namespace.methods.includes(e.request.method))return await this.client.request(e);throw new Error("Fetching call status not approved by the wallet.")}async getUserOperationReceipt(e,r){var i;const s=new URL(e),n=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(dn("eth_getUserOperationReceipt",[(i=r.request.params)==null?void 0:i[0]]))});if(!n.ok)throw new Error(`Failed to fetch user operation receipt - ${n.status}`);return await n.json()}getBundlerUrl(e,r){return`${Sf}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${r}`}};var vg=Object.defineProperty,bg=(t,e,r)=>e in t?vg(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Di=(t,e,r)=>bg(t,typeof e!="symbol"?e+"":e,r);let yg=class{constructor(e){Di(this,"name","solana"),Di(this,"client"),Di(this,"httpProviders"),Di(this,"events"),Di(this,"namespace"),Di(this,"chainId"),this.namespace=e.namespace,this.events=be("events"),this.client=be("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,r){this.httpProviders[e]||this.setHttpProvider(e,r),this.chainId=e,this.events.emit(Mt.DEFAULT_CHAIN_CHANGED,`${this.name}:${e}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(r=>r.split(":")[1]===this.chainId.toString()).map(r=>r.split(":")[2]))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(r=>{var i;const s=Ti(r);e[s]=this.createHttpProvider(s,(i=this.namespace.rpcMap)==null?void 0:i[r])}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,r=this.httpProviders[e];if(typeof r>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return r}setHttpProvider(e,r){const i=this.createHttpProvider(e,r);i&&(this.httpProviders[e]=i)}createHttpProvider(e,r){const i=r||It(e,this.namespace,this.client.core.projectId);if(!i)throw new Error(`No RPC url provided for chainId: ${e}`);return new Vt(new Gt(i,be("disableProviderPing")))}};var Cg=Object.defineProperty,xg=(t,e,r)=>e in t?Cg(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,ji=(t,e,r)=>xg(t,typeof e!="symbol"?e+"":e,r);let Eg=class{constructor(e){ji(this,"name","cosmos"),ji(this,"client"),ji(this,"httpProviders"),ji(this,"events"),ji(this,"namespace"),ji(this,"chainId"),this.namespace=e.namespace,this.events=be("events"),this.client=be("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,r){this.httpProviders[e]||this.setHttpProvider(e,r),this.chainId=e,this.events.emit(Mt.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(r=>r.split(":")[1]===this.chainId.toString()).map(r=>r.split(":")[2]))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(r=>{var i;const s=Ti(r);e[s]=this.createHttpProvider(s,(i=this.namespace.rpcMap)==null?void 0:i[r])}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,r=this.httpProviders[e];if(typeof r>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return r}setHttpProvider(e,r){const i=this.createHttpProvider(e,r);i&&(this.httpProviders[e]=i)}createHttpProvider(e,r){const i=r||It(e,this.namespace,this.client.core.projectId);if(!i)throw new Error(`No RPC url provided for chainId: ${e}`);return new Vt(new Gt(i,be("disableProviderPing")))}};var Ig=Object.defineProperty,Ag=(t,e,r)=>e in t?Ig(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,zi=(t,e,r)=>Ag(t,typeof e!="symbol"?e+"":e,r);let Ng=class{constructor(e){zi(this,"name","algorand"),zi(this,"client"),zi(this,"httpProviders"),zi(this,"events"),zi(this,"namespace"),zi(this,"chainId"),this.namespace=e.namespace,this.events=be("events"),this.client=be("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,r){if(!this.httpProviders[e]){const i=r||It(`${this.name}:${e}`,this.namespace,this.client.core.projectId);if(!i)throw new Error(`No RPC url provided for chainId: ${e}`);this.setHttpProvider(e,i)}this.chainId=e,this.events.emit(Mt.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(r=>r.split(":")[1]===this.chainId.toString()).map(r=>r.split(":")[2]))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(r=>{var i;e[r]=this.createHttpProvider(r,(i=this.namespace.rpcMap)==null?void 0:i[r])}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,r=this.httpProviders[e];if(typeof r>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return r}setHttpProvider(e,r){const i=this.createHttpProvider(e,r);i&&(this.httpProviders[e]=i)}createHttpProvider(e,r){const i=r||It(e,this.namespace,this.client.core.projectId);return typeof i>"u"?void 0:new Vt(new Gt(i,be("disableProviderPing")))}};var kg=Object.defineProperty,Sg=(t,e,r)=>e in t?kg(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Hi=(t,e,r)=>Sg(t,typeof e!="symbol"?e+"":e,r);class _g{constructor(e){Hi(this,"name","cip34"),Hi(this,"client"),Hi(this,"httpProviders"),Hi(this,"events"),Hi(this,"namespace"),Hi(this,"chainId"),this.namespace=e.namespace,this.events=be("events"),this.client=be("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,r){this.httpProviders[e]||this.setHttpProvider(e,r),this.chainId=e,this.events.emit(Mt.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(r=>r.split(":")[1]===this.chainId.toString()).map(r=>r.split(":")[2]))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(r=>{const i=this.getCardanoRPCUrl(r),s=Ti(r);e[s]=this.createHttpProvider(s,i)}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,r=this.httpProviders[e];if(typeof r>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return r}getCardanoRPCUrl(e){const r=this.namespace.rpcMap;if(r)return r[e]}setHttpProvider(e,r){const i=this.createHttpProvider(e,r);i&&(this.httpProviders[e]=i)}createHttpProvider(e,r){const i=r||this.getCardanoRPCUrl(e);if(!i)throw new Error(`No RPC url provided for chainId: ${e}`);return new Vt(new Gt(i,be("disableProviderPing")))}}var Pg=Object.defineProperty,Tg=(t,e,r)=>e in t?Pg(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,qi=(t,e,r)=>Tg(t,typeof e!="symbol"?e+"":e,r);class Og{constructor(e){qi(this,"name","elrond"),qi(this,"client"),qi(this,"httpProviders"),qi(this,"events"),qi(this,"namespace"),qi(this,"chainId"),this.namespace=e.namespace,this.events=be("events"),this.client=be("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,r){this.httpProviders[e]||this.setHttpProvider(e,r),this.chainId=e,this.events.emit(Mt.DEFAULT_CHAIN_CHANGED,`${this.name}:${e}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(r=>r.split(":")[1]===this.chainId.toString()).map(r=>r.split(":")[2]))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(r=>{var i;const s=Ti(r);e[s]=this.createHttpProvider(s,(i=this.namespace.rpcMap)==null?void 0:i[r])}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,r=this.httpProviders[e];if(typeof r>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return r}setHttpProvider(e,r){const i=this.createHttpProvider(e,r);i&&(this.httpProviders[e]=i)}createHttpProvider(e,r){const i=r||It(e,this.namespace,this.client.core.projectId);if(!i)throw new Error(`No RPC url provided for chainId: ${e}`);return new Vt(new Gt(i,be("disableProviderPing")))}}var $g=Object.defineProperty,Rg=(t,e,r)=>e in t?$g(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Wi=(t,e,r)=>Rg(t,typeof e!="symbol"?e+"":e,r);let Lg=class{constructor(e){Wi(this,"name","multiversx"),Wi(this,"client"),Wi(this,"httpProviders"),Wi(this,"events"),Wi(this,"namespace"),Wi(this,"chainId"),this.namespace=e.namespace,this.events=be("events"),this.client=be("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,r){this.httpProviders[e]||this.setHttpProvider(e,r),this.chainId=e,this.events.emit(Mt.DEFAULT_CHAIN_CHANGED,`${this.name}:${e}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(r=>r.split(":")[1]===this.chainId.toString()).map(r=>r.split(":")[2]))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(r=>{var i;const s=Ti(r);e[s]=this.createHttpProvider(s,(i=this.namespace.rpcMap)==null?void 0:i[r])}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,r=this.httpProviders[e];if(typeof r>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return r}setHttpProvider(e,r){const i=this.createHttpProvider(e,r);i&&(this.httpProviders[e]=i)}createHttpProvider(e,r){const i=r||It(e,this.namespace,this.client.core.projectId);if(!i)throw new Error(`No RPC url provided for chainId: ${e}`);return new Vt(new Gt(i,be("disableProviderPing")))}};var Mg=Object.defineProperty,Bg=(t,e,r)=>e in t?Mg(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Fi=(t,e,r)=>Bg(t,typeof e!="symbol"?e+"":e,r);let Ug=class{constructor(e){Fi(this,"name","near"),Fi(this,"client"),Fi(this,"httpProviders"),Fi(this,"events"),Fi(this,"namespace"),Fi(this,"chainId"),this.namespace=e.namespace,this.events=be("events"),this.client=be("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,r){if(this.chainId=e,!this.httpProviders[e]){const i=r||It(`${this.name}:${e}`,this.namespace);if(!i)throw new Error(`No RPC url provided for chainId: ${e}`);this.setHttpProvider(e,i)}this.events.emit(Mt.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getAccounts(){const e=this.namespace.accounts;return e?e.filter(r=>r.split(":")[1]===this.chainId.toString()).map(r=>r.split(":")[2])||[]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(r=>{var i;e[r]=this.createHttpProvider(r,(i=this.namespace.rpcMap)==null?void 0:i[r])}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,r=this.httpProviders[e];if(typeof r>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return r}setHttpProvider(e,r){const i=this.createHttpProvider(e,r);i&&(this.httpProviders[e]=i)}createHttpProvider(e,r){const i=r||It(e,this.namespace);return typeof i>"u"?void 0:new Vt(new Gt(i,be("disableProviderPing")))}};var Dg=Object.defineProperty,jg=(t,e,r)=>e in t?Dg(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Vi=(t,e,r)=>jg(t,typeof e!="symbol"?e+"":e,r);let zg=class{constructor(e){Vi(this,"name","tezos"),Vi(this,"client"),Vi(this,"httpProviders"),Vi(this,"events"),Vi(this,"namespace"),Vi(this,"chainId"),this.namespace=e.namespace,this.events=be("events"),this.client=be("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,r){if(this.chainId=e,!this.httpProviders[e]){const i=r||It(`${this.name}:${e}`,this.namespace);if(!i)throw new Error(`No RPC url provided for chainId: ${e}`);this.setHttpProvider(e,i)}this.events.emit(Mt.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getAccounts(){const e=this.namespace.accounts;return e?e.filter(r=>r.split(":")[1]===this.chainId.toString()).map(r=>r.split(":")[2])||[]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(r=>{e[r]=this.createHttpProvider(r)}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,r=this.httpProviders[e];if(typeof r>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return r}setHttpProvider(e,r){const i=this.createHttpProvider(e,r);i&&(this.httpProviders[e]=i)}createHttpProvider(e,r){const i=r||It(e,this.namespace);return typeof i>"u"?void 0:new Vt(new Gt(i))}};var Hg=Object.defineProperty,qg=(t,e,r)=>e in t?Hg(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Gi=(t,e,r)=>qg(t,typeof e!="symbol"?e+"":e,r);let Wg=class{constructor(e){Gi(this,"name",ss),Gi(this,"client"),Gi(this,"httpProviders"),Gi(this,"events"),Gi(this,"namespace"),Gi(this,"chainId"),this.namespace=e.namespace,this.events=be("events"),this.client=be("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace.chains=[...new Set((this.namespace.chains||[]).concat(e.chains||[]))],this.namespace.accounts=[...new Set((this.namespace.accounts||[]).concat(e.accounts||[]))],this.namespace.methods=[...new Set((this.namespace.methods||[]).concat(e.methods||[]))],this.namespace.events=[...new Set((this.namespace.events||[]).concat(e.events||[]))],this.httpProviders=this.createHttpProviders()}requestAccounts(){return this.getAccounts()}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider(e.chainId).request(e.request)}setDefaultChain(e,r){this.httpProviders[e]||this.setHttpProvider(e,r),this.chainId=e,this.events.emit(Mt.DEFAULT_CHAIN_CHANGED,`${this.name}:${e}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(r=>r.split(":")[1]===this.chainId.toString()).map(r=>r.split(":")[2]))]:[]}createHttpProviders(){var e,r;const i={};return(r=(e=this.namespace)==null?void 0:e.accounts)==null||r.forEach(s=>{const n=vn(s);i[`${n.namespace}:${n.reference}`]=this.createHttpProvider(s)}),i}getHttpProvider(e){const r=this.httpProviders[e];if(typeof r>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return r}setHttpProvider(e,r){const i=this.createHttpProvider(e,r);i&&(this.httpProviders[e]=i)}createHttpProvider(e,r){const i=r||It(e,this.namespace,this.client.core.projectId);if(!i)throw new Error(`No RPC url provided for chainId: ${e}`);return new Vt(new Gt(i,be("disableProviderPing")))}};var Fg=Object.defineProperty,Vg=Object.defineProperties,Gg=Object.getOwnPropertyDescriptors,wu=Object.getOwnPropertySymbols,Zg=Object.prototype.hasOwnProperty,Kg=Object.prototype.propertyIsEnumerable,Bl=(t,e,r)=>e in t?Fg(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,wo=(t,e)=>{for(var r in e||(e={}))Zg.call(e,r)&&Bl(t,r,e[r]);if(wu)for(var r of wu(e))Kg.call(e,r)&&Bl(t,r,e[r]);return t},uc=(t,e)=>Vg(t,Gg(e)),Nt=(t,e,r)=>Bl(t,typeof e!="symbol"?e+"":e,r);class Da{constructor(e){Nt(this,"client"),Nt(this,"namespaces"),Nt(this,"optionalNamespaces"),Nt(this,"sessionProperties"),Nt(this,"scopedProperties"),Nt(this,"events",new tp),Nt(this,"rpcProviders",{}),Nt(this,"session"),Nt(this,"providerOpts"),Nt(this,"logger"),Nt(this,"uri"),Nt(this,"disableProviderPing",!1),this.providerOpts=e,this.logger=typeof(e==null?void 0:e.logger)<"u"&&typeof(e==null?void 0:e.logger)!="string"?e.logger:Qh(ep({level:(e==null?void 0:e.logger)||su})),this.disableProviderPing=(e==null?void 0:e.disableProviderPing)||!1}static async init(e){const r=new Da(e);return await r.initialize(),r}async request(e,r,i){const[s,n]=this.validateChain(r);if(!this.session)throw new Error("Please call connect() before request()");return await this.getProvider(s).request({request:wo({},e),chainId:`${s}:${n}`,topic:this.session.topic,expiry:i})}sendAsync(e,r,i,s){const n=new Date().getTime();this.request(e,i,s).then(o=>r(null,ip(n,o))).catch(o=>r(o,void 0))}async enable(){if(!this.client)throw new Error("Sign Client not initialized");return this.session||await this.connect({namespaces:this.namespaces,optionalNamespaces:this.optionalNamespaces,sessionProperties:this.sessionProperties,scopedProperties:this.scopedProperties}),await this.requestAccounts()}async disconnect(){var e;if(!this.session)throw new Error("Please call connect() before enable()");await this.client.disconnect({topic:(e=this.session)==null?void 0:e.topic,reason:Ze("USER_DISCONNECTED")}),await this.cleanup()}async connect(e){if(!this.client)throw new Error("Sign Client not initialized");if(this.setNamespaces(e),await this.cleanupPendingPairings(),!e.skipPairing)return await this.pair(e.pairingTopic)}async authenticate(e,r){if(!this.client)throw new Error("Sign Client not initialized");this.setNamespaces(e),await this.cleanupPendingPairings();const{uri:i,response:s}=await this.client.authenticate(e,r);i&&(this.uri=i,this.events.emit("display_uri",i));const n=await s();if(this.session=n.session,this.session){const o=hu(this.session.namespaces);this.namespaces=cc(this.namespaces,o),await this.persist("namespaces",this.namespaces),this.onConnect()}return n}on(e,r){this.events.on(e,r)}once(e,r){this.events.once(e,r)}removeListener(e,r){this.events.removeListener(e,r)}off(e,r){this.events.off(e,r)}get isWalletConnect(){return!0}async pair(e){const{uri:r,approval:i}=await this.client.connect({pairingTopic:e,requiredNamespaces:this.namespaces,optionalNamespaces:this.optionalNamespaces,sessionProperties:this.sessionProperties,scopedProperties:this.scopedProperties});r&&(this.uri=r,this.events.emit("display_uri",r));const s=await i();this.session=s;const n=hu(s.namespaces);return this.namespaces=cc(this.namespaces,n),await this.persist("namespaces",this.namespaces),await this.persist("optionalNamespaces",this.optionalNamespaces),this.onConnect(),this.session}setDefaultChain(e,r){try{if(!this.session)return;const[i,s]=this.validateChain(e),n=this.getProvider(i);n.name===ss?n.setDefaultChain(`${i}:${s}`,r):n.setDefaultChain(s,r)}catch(i){if(!/Please call connect/.test(i.message))throw i}}async cleanupPendingPairings(e={}){this.logger.info("Cleaning up inactive pairings...");const r=this.client.pairing.getAll();if(bi(r)){for(const i of r)e.deletePairings?this.client.core.expirer.set(i.topic,0):await this.client.core.relayer.subscriber.unsubscribe(i.topic);this.logger.info(`Inactive pairings cleared: ${r.length}`)}}abortPairingAttempt(){this.logger.warn("abortPairingAttempt is deprecated. This is now a no-op.")}async checkStorage(){this.namespaces=await this.getFromStore("namespaces")||{},this.optionalNamespaces=await this.getFromStore("optionalNamespaces")||{},this.session&&this.createProviders()}async initialize(){this.logger.trace("Initialized"),await this.createClient(),await this.checkStorage(),this.registerEventListeners()}async createClient(){var e,r;if(this.client=this.providerOpts.client||await wf.init({core:this.providerOpts.core,logger:this.providerOpts.logger||su,relayUrl:this.providerOpts.relayUrl||Af,projectId:this.providerOpts.projectId,metadata:this.providerOpts.metadata,storageOptions:this.providerOpts.storageOptions,storage:this.providerOpts.storage,name:this.providerOpts.name,customStoragePrefix:this.providerOpts.customStoragePrefix,telemetryEnabled:this.providerOpts.telemetryEnabled}),this.providerOpts.session)try{this.session=this.client.session.get(this.providerOpts.session.topic)}catch(i){throw this.logger.error("Failed to get session",i),new Error(`The provided session: ${(r=(e=this.providerOpts)==null?void 0:e.session)==null?void 0:r.topic} doesn't exist in the Sign client`)}else{const i=this.client.session.getAll();this.session=i[0]}this.logger.trace("SignClient Initialized")}createProviders(){if(!this.client)throw new Error("Sign Client not initialized");if(!this.session)throw new Error("Session not initialized. Please call connect() before enable()");const e=[...new Set(Object.keys(this.session.namespaces).map(r=>un(r)))];dc("client",this.client),dc("events",this.events),dc("disableProviderPing",this.disableProviderPing),e.forEach(r=>{if(!this.session)return;const i=cg(r,this.session),s=wp(i),n=cc(this.namespaces,this.optionalNamespaces),o=uc(wo({},n[r]),{accounts:i,chains:s});switch(r){case"eip155":this.rpcProviders[r]=new mg({namespace:o});break;case"algorand":this.rpcProviders[r]=new Ng({namespace:o});break;case"solana":this.rpcProviders[r]=new yg({namespace:o});break;case"cosmos":this.rpcProviders[r]=new Eg({namespace:o});break;case"polkadot":this.rpcProviders[r]=new ug({namespace:o});break;case"cip34":this.rpcProviders[r]=new _g({namespace:o});break;case"elrond":this.rpcProviders[r]=new Og({namespace:o});break;case"multiversx":this.rpcProviders[r]=new Lg({namespace:o});break;case"near":this.rpcProviders[r]=new Ug({namespace:o});break;case"tezos":this.rpcProviders[r]=new zg({namespace:o});break;default:this.rpcProviders[ss]?this.rpcProviders[ss].updateNamespace(o):this.rpcProviders[ss]=new Wg({namespace:o})}})}registerEventListeners(){if(typeof this.client>"u")throw new Error("Sign Client is not initialized");this.client.on("session_ping",e=>{var r;const{topic:i}=e;i===((r=this.session)==null?void 0:r.topic)&&this.events.emit("session_ping",e)}),this.client.on("session_event",e=>{var r;const{params:i,topic:s}=e;if(s!==((r=this.session)==null?void 0:r.topic))return;const{event:n}=i;if(n.name==="accountsChanged"){const o=n.data;o&&bi(o)&&this.events.emit("accountsChanged",o.map(uu))}else if(n.name==="chainChanged"){const o=i.chainId,a=i.event.data,c=un(o),l=lc(o)!==lc(a)?`${c}:${lc(a)}`:o;this.onChainChanged(l)}else this.events.emit(n.name,n.data);this.events.emit("session_event",e)}),this.client.on("session_update",({topic:e,params:r})=>{var i,s;if(e!==((i=this.session)==null?void 0:i.topic))return;const{namespaces:n}=r,o=(s=this.client)==null?void 0:s.session.get(e);this.session=uc(wo({},o),{namespaces:n}),this.onSessionUpdate(),this.events.emit("session_update",{topic:e,params:r})}),this.client.on("session_delete",async e=>{var r;e.topic===((r=this.session)==null?void 0:r.topic)&&(await this.cleanup(),this.events.emit("session_delete",e),this.events.emit("disconnect",uc(wo({},Ze("USER_DISCONNECTED")),{data:e.topic})))}),this.on(Mt.DEFAULT_CHAIN_CHANGED,e=>{this.onChainChanged(e,!0)})}getProvider(e){return this.rpcProviders[e]||this.rpcProviders[ss]}onSessionUpdate(){Object.keys(this.rpcProviders).forEach(e=>{var r;this.getProvider(e).updateNamespace((r=this.session)==null?void 0:r.namespaces[e])})}setNamespaces(e){const{namespaces:r,optionalNamespaces:i,sessionProperties:s,scopedProperties:n}=e;r&&Object.keys(r).length&&(this.namespaces=r),i&&Object.keys(i).length&&(this.optionalNamespaces=i),this.sessionProperties=s,this.scopedProperties=n}validateChain(e){const[r,i]=(e==null?void 0:e.split(":"))||["",""];if(!this.namespaces||!Object.keys(this.namespaces).length)return[r,i];if(r&&!Object.keys(this.namespaces||{}).map(o=>un(o)).includes(r))throw new Error(`Namespace '${r}' is not configured. Please call connect() first with namespace config.`);if(r&&i)return[r,i];const s=un(Object.keys(this.namespaces)[0]),n=this.rpcProviders[s].getDefaultChain();return[s,n]}async requestAccounts(){const[e]=this.validateChain();return await this.getProvider(e).requestAccounts()}async onChainChanged(e,r=!1){if(!this.namespaces)return;const[i,s]=this.validateChain(e);if(!s)return;this.updateNamespaceChain(i,s),this.events.emit("chainChanged",s);const n=this.getProvider(i).getDefaultChain();r||this.getProvider(i).setDefaultChain(s),this.emitAccountsChangedOnChainChange({namespace:i,previousChainId:n,newChainId:e}),await this.persist("namespaces",this.namespaces)}emitAccountsChangedOnChainChange({namespace:e,previousChainId:r,newChainId:i}){var s,n;try{if(r===i)return;const o=(n=(s=this.session)==null?void 0:s.namespaces[e])==null?void 0:n.accounts;if(!o)return;const a=o.filter(c=>c.includes(`${i}:`)).map(uu);if(!bi(a))return;this.events.emit("accountsChanged",a)}catch(o){this.logger.warn("Failed to emit accountsChanged on chain change",o)}}updateNamespaceChain(e,r){if(!this.namespaces)return;const i=this.namespaces[e]?e:`${e}:${r}`,s={chains:[],methods:[],events:[],defaultChain:r};this.namespaces[i]?this.namespaces[i]&&(this.namespaces[i].defaultChain=r):this.namespaces[i]=s}onConnect(){this.createProviders(),this.events.emit("connect",{session:this.session})}async cleanup(){this.namespaces=void 0,this.optionalNamespaces=void 0,this.sessionProperties=void 0,await this.deleteFromStore("namespaces"),await this.deleteFromStore("optionalNamespaces"),await this.deleteFromStore("sessionProperties"),this.session=void 0,await this.cleanupPendingPairings({deletePairings:!0}),await this.cleanupStorage()}async persist(e,r){var i;const s=((i=this.session)==null?void 0:i.topic)||"";await this.client.core.storage.setItem(`${fo}/${e}${s}`,r)}async getFromStore(e){var r;const i=((r=this.session)==null?void 0:r.topic)||"";return await this.client.core.storage.getItem(`${fo}/${e}${i}`)}async deleteFromStore(e){var r;const i=((r=this.session)==null?void 0:r.topic)||"";await this.client.core.storage.removeItem(`${fo}/${e}${i}`)}async cleanupStorage(){var e;try{if(((e=this.client)==null?void 0:e.session.length)>0)return;const r=await this.client.core.storage.getKeys();for(const i of r)i.startsWith(fo)&&await this.client.core.storage.removeItem(i)}catch(r){this.logger.warn("Failed to cleanup storage",r)}}}const Yg=Da,Ea={BASE_URL:"/Educred/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_NFT_STORAGE_TOKEN:"Token ID daalde laadle",VITE_WALLET_CONNECT_PROJECT_ID:"porject ID daalo"};var Ia={};const Jg="wc",Xg="ethereum_provider",Qg=`${Jg}@2:${Xg}:`,ew="https://rpc.walletconnect.org/v1/",Ul=["eth_sendTransaction","personal_sign"],tw=["eth_accounts","eth_requestAccounts","eth_sendRawTransaction","eth_sign","eth_signTransaction","eth_signTypedData","eth_signTypedData_v3","eth_signTypedData_v4","eth_sendTransaction","personal_sign","wallet_switchEthereumChain","wallet_addEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode","wallet_sendCalls","wallet_getCapabilities","wallet_getCallsStatus","wallet_showCallsStatus"],Dl=["chainChanged","accountsChanged"],rw=["chainChanged","accountsChanged","message","disconnect","connect"];var iw=Object.defineProperty,sw=Object.defineProperties,nw=Object.getOwnPropertyDescriptors,mu=Object.getOwnPropertySymbols,ow=Object.prototype.hasOwnProperty,aw=Object.prototype.propertyIsEnumerable,jl=(t,e,r)=>e in t?iw(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,hi=(t,e)=>{for(var r in e||(e={}))ow.call(e,r)&&jl(t,r,e[r]);if(mu)for(var r of mu(e))aw.call(e,r)&&jl(t,r,e[r]);return t},Ls=(t,e)=>sw(t,nw(e)),vt=(t,e,r)=>jl(t,typeof e!="symbol"?e+"":e,r);function Aa(t){return Number(t[0].split(":")[1])}function mo(t){return`0x${t.toString(16)}`}function cw(t){const{chains:e,optionalChains:r,methods:i,optionalMethods:s,events:n,optionalEvents:o,rpcMap:a}=t;if(!bi(e))throw new Error("Invalid chains");const c={chains:e,methods:i||Ul,events:n||Dl,rpcMap:hi({},e.length?{[Aa(e)]:a[Aa(e)]}:{})},l=n==null?void 0:n.filter(p=>!Dl.includes(p)),d=i==null?void 0:i.filter(p=>!Ul.includes(p));if(!r&&!o&&!s&&!(l!=null&&l.length)&&!(d!=null&&d.length))return{required:e.length?c:void 0};const u=(l==null?void 0:l.length)&&(d==null?void 0:d.length)||!r,h={chains:[...new Set(u?c.chains.concat(r||[]):r)],methods:[...new Set(c.methods.concat(s!=null&&s.length?s:tw))],events:[...new Set(c.events.concat(o!=null&&o.length?o:rw))],rpcMap:a};return{required:e.length?c:void 0,optional:r.length?h:void 0}}class vp{constructor(){vt(this,"events",new cd.EventEmitter),vt(this,"namespace","eip155"),vt(this,"accounts",[]),vt(this,"signer"),vt(this,"chainId",1),vt(this,"modal"),vt(this,"rpc"),vt(this,"STORAGE_KEY",Qg),vt(this,"on",(e,r)=>(this.events.on(e,r),this)),vt(this,"once",(e,r)=>(this.events.once(e,r),this)),vt(this,"removeListener",(e,r)=>(this.events.removeListener(e,r),this)),vt(this,"off",(e,r)=>(this.events.off(e,r),this)),vt(this,"parseAccount",e=>this.isCompatibleChainId(e)?this.parseAccountId(e).address:e),this.signer={},this.rpc={}}static async init(e){const r=new vp;return await r.initialize(e),r}async request(e,r){return await this.signer.request(e,this.formatChainId(this.chainId),r)}sendAsync(e,r,i){this.signer.sendAsync(e,r,this.formatChainId(this.chainId),i)}get connected(){return this.signer.client?this.signer.client.core.relayer.connected:!1}get connecting(){return this.signer.client?this.signer.client.core.relayer.connecting:!1}async enable(){return this.session||await this.connect(),await this.request({method:"eth_requestAccounts"})}async connect(e){var r;if(!this.signer.client)throw new Error("Provider not initialized. Call init() first");this.loadConnectOpts(e);const{required:i,optional:s}=cw(this.rpc);try{const n=await new Promise(async(a,c)=>{var l,d;this.rpc.showQrModal&&((l=this.modal)==null||l.open(),(d=this.modal)==null||d.subscribeState(h=>{!h.open&&!this.signer.session&&(this.signer.abortPairingAttempt(),c(new Error("Connection request reset. Please try again.")))}));const u=e!=null&&e.scopedProperties?{[this.namespace]:e.scopedProperties}:void 0;await this.signer.connect(Ls(hi({namespaces:hi({},i&&{[this.namespace]:i})},s&&{optionalNamespaces:{[this.namespace]:s}}),{pairingTopic:e==null?void 0:e.pairingTopic,scopedProperties:u})).then(h=>{a(h)}).catch(h=>{var p;(p=this.modal)==null||p.showErrorMessage("Unable to connect"),c(new Error(h.message))})});if(!n)return;const o=Vd(n.namespaces,[this.namespace]);this.setChainIds(this.rpc.chains.length?this.rpc.chains:o),this.setAccounts(o),this.events.emit("connect",{chainId:mo(this.chainId)})}catch(n){throw this.signer.logger.error(n),n}finally{(r=this.modal)==null||r.close()}}async authenticate(e,r){var i;if(!this.signer.client)throw new Error("Provider not initialized. Call init() first");this.loadConnectOpts({chains:e==null?void 0:e.chains});try{const s=await new Promise(async(o,a)=>{var c,l;this.rpc.showQrModal&&((c=this.modal)==null||c.open(),(l=this.modal)==null||l.subscribeState(d=>{!d.open&&!this.signer.session&&(this.signer.abortPairingAttempt(),a(new Error("Connection request reset. Please try again.")))})),await this.signer.authenticate(Ls(hi({},e),{chains:this.rpc.chains}),r).then(d=>{o(d)}).catch(d=>{var u;(u=this.modal)==null||u.showErrorMessage("Unable to connect"),a(new Error(d.message))})}),n=s.session;if(n){const o=Vd(n.namespaces,[this.namespace]);this.setChainIds(this.rpc.chains.length?this.rpc.chains:o),this.setAccounts(o),this.events.emit("connect",{chainId:mo(this.chainId)})}return s}catch(s){throw this.signer.logger.error(s),s}finally{(i=this.modal)==null||i.close()}}async disconnect(){this.session&&await this.signer.disconnect(),this.reset()}get isWalletConnect(){return!0}get session(){return this.signer.session}registerEventListeners(){this.signer.on("session_event",e=>{const{params:r}=e,{event:i}=r;i.name==="accountsChanged"?(this.accounts=this.parseAccounts(i.data),this.events.emit("accountsChanged",this.accounts)):i.name==="chainChanged"?this.setChainId(this.formatChainId(i.data)):this.events.emit(i.name,i.data),this.events.emit("session_event",e)}),this.signer.on("accountsChanged",e=>{this.accounts=this.parseAccounts(e),this.events.emit("accountsChanged",this.accounts)}),this.signer.on("chainChanged",e=>{const r=parseInt(e);this.chainId=r,this.events.emit("chainChanged",mo(this.chainId)),this.persist()}),this.signer.on("session_update",e=>{this.events.emit("session_update",e)}),this.signer.on("session_delete",e=>{this.reset(),this.events.emit("session_delete",e),this.events.emit("disconnect",Ls(hi({},Ze("USER_DISCONNECTED")),{data:e.topic,name:"USER_DISCONNECTED"}))}),this.signer.on("display_uri",e=>{this.events.emit("display_uri",e)})}switchEthereumChain(e){this.request({method:"wallet_switchEthereumChain",params:[{chainId:e.toString(16)}]})}isCompatibleChainId(e){return typeof e=="string"?e.startsWith(`${this.namespace}:`):!1}formatChainId(e){return`${this.namespace}:${e}`}parseChainId(e){return Number(e.split(":")[1])}setChainIds(e){const r=e.filter(i=>this.isCompatibleChainId(i)).map(i=>this.parseChainId(i));r.length&&(this.chainId=r[0],this.events.emit("chainChanged",mo(this.chainId)),this.persist())}setChainId(e){if(this.isCompatibleChainId(e)){const r=this.parseChainId(e);this.chainId=r,this.switchEthereumChain(r)}}parseAccountId(e){const[r,i,s]=e.split(":");return{chainId:`${r}:${i}`,address:s}}setAccounts(e){this.accounts=e.filter(r=>this.parseChainId(this.parseAccountId(r).chainId)===this.chainId).map(r=>this.parseAccountId(r).address),this.events.emit("accountsChanged",this.accounts)}getRpcConfig(e){var r,i;const s=(r=e==null?void 0:e.chains)!=null?r:[],n=(i=e==null?void 0:e.optionalChains)!=null?i:[],o=s.concat(n);if(!o.length)throw new Error("No chains specified in either `chains` or `optionalChains`");const a=s.length?(e==null?void 0:e.methods)||Ul:[],c=s.length?(e==null?void 0:e.events)||Dl:[],l=(e==null?void 0:e.optionalMethods)||[],d=(e==null?void 0:e.optionalEvents)||[],u=(e==null?void 0:e.rpcMap)||this.buildRpcMap(o,e.projectId),h=(e==null?void 0:e.qrModalOptions)||void 0;return{chains:s==null?void 0:s.map(p=>this.formatChainId(p)),optionalChains:n.map(p=>this.formatChainId(p)),methods:a,events:c,optionalMethods:l,optionalEvents:d,rpcMap:u,showQrModal:!!(e!=null&&e.showQrModal),qrModalOptions:h,projectId:e.projectId,metadata:e.metadata}}buildRpcMap(e,r){const i={};return e.forEach(s=>{i[s]=this.getRpcUrl(s,r)}),i}async initialize(e){if(this.rpc=this.getRpcConfig(e),this.chainId=this.rpc.chains.length?Aa(this.rpc.chains):Aa(this.rpc.optionalChains),this.signer=await Yg.init({projectId:this.rpc.projectId,metadata:this.rpc.metadata,disableProviderPing:e.disableProviderPing,relayUrl:e.relayUrl,storage:e.storage,storageOptions:e.storageOptions,customStoragePrefix:e.customStoragePrefix,telemetryEnabled:e.telemetryEnabled,logger:e.logger}),this.registerEventListeners(),await this.loadPersistedSession(),this.rpc.showQrModal){let r;try{const{createAppKit:i}=await Promise.resolve().then(function(){return Sb}),{convertWCMToAppKitOptions:s}=await Promise.resolve().then(function(){return Db}),n=s(Ls(hi({},this.rpc.qrModalOptions),{chains:[...new Set([...this.rpc.chains,...this.rpc.optionalChains])],metadata:this.rpc.metadata,projectId:this.rpc.projectId}));if(!n.networks.length)throw new Error("No networks found for WalletConnect·");r=i(Ls(hi({},n),{universalProvider:this.signer,manualWCControl:!0}))}catch{throw new Error("To use QR modal, please install @reown/appkit package")}if(r)try{this.modal=r}catch(i){throw this.signer.logger.error(i),new Error("Could not generate WalletConnectModal Instance")}}}loadConnectOpts(e){if(!e)return;const{chains:r,optionalChains:i,rpcMap:s}=e;r&&bi(r)&&(this.rpc.chains=r.map(n=>this.formatChainId(n)),r.forEach(n=>{this.rpc.rpcMap[n]=(s==null?void 0:s[n])||this.getRpcUrl(n)})),i&&bi(i)&&(this.rpc.optionalChains=[],this.rpc.optionalChains=i==null?void 0:i.map(n=>this.formatChainId(n)),i.forEach(n=>{this.rpc.rpcMap[n]=(s==null?void 0:s[n])||this.getRpcUrl(n)}))}getRpcUrl(e,r){var i;return((i=this.rpc.rpcMap)==null?void 0:i[e])||`${ew}?chainId=eip155:${e}&projectId=${r||this.rpc.projectId}`}async loadPersistedSession(){if(this.session)try{const e=await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`),r=this.session.namespaces[`${this.namespace}:${e}`]?this.session.namespaces[`${this.namespace}:${e}`]:this.session.namespaces[this.namespace];this.setChainIds(e?[this.formatChainId(e)]:r==null?void 0:r.accounts),this.setAccounts(r==null?void 0:r.accounts)}catch(e){this.signer.logger.error("Failed to load persisted session, clearing state..."),this.signer.logger.error(e),await this.disconnect().catch(r=>this.signer.logger.warn(r))}}reset(){this.chainId=1,this.accounts=[]}persist(){this.session&&this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`,this.chainId)}parseAccounts(e){return typeof e=="string"||e instanceof String?[this.parseAccount(e)]:e.map(r=>this.parseAccount(r))}}var ja=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},bp={exports:{}};(function(t,e){(function(r,i){t.exports=i()})(ja,function(){var r=1e3,i=6e4,s=36e5,n="millisecond",o="second",a="minute",c="hour",l="day",d="week",u="month",h="quarter",p="year",w="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,x={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(P){var g=["th","st","nd","rd"],y=P%100;return"["+P+(g[(y-20)%10]||g[y]||g[0])+"]"}},E=function(P,g,y){var N=String(P);return!N||N.length>=g?P:""+Array(g+1-N.length).join(y)+P},A={s:E,z:function(P){var g=-P.utcOffset(),y=Math.abs(g),N=Math.floor(y/60),S=y%60;return(g<=0?"+":"-")+E(N,2,"0")+":"+E(S,2,"0")},m:function P(g,y){if(g.date()<y.date())return-P(y,g);var N=12*(y.year()-g.year())+(y.month()-g.month()),S=g.clone().add(N,u),$=y-S<0,O=g.clone().add(N+($?-1:1),u);return+(-(N+(y-S)/($?S-O:O-S))||0)},a:function(P){return P<0?Math.ceil(P)||0:Math.floor(P)},p:function(P){return{M:u,y:p,w:d,d:l,D:w,h:c,m:a,s:o,ms:n,Q:h}[P]||String(P||"").toLowerCase().replace(/s$/,"")},u:function(P){return P===void 0}},k="en",T={};T[k]=x;var j="$isDayjsObject",M=function(P){return P instanceof Q||!(!P||!P[j])},_=function P(g,y,N){var S;if(!g)return k;if(typeof g=="string"){var $=g.toLowerCase();T[$]&&(S=$),y&&(T[$]=y,S=$);var O=g.split("-");if(!S&&O.length>1)return P(O[0])}else{var se=g.name;T[se]=g,S=se}return!N&&S&&(k=S),S||!N&&k},U=function(P,g){if(M(P))return P.clone();var y=typeof g=="object"?g:{};return y.date=P,y.args=arguments,new Q(y)},D=A;D.l=_,D.i=M,D.w=function(P,g){return U(P,{locale:g.$L,utc:g.$u,x:g.$x,$offset:g.$offset})};var Q=function(){function P(y){this.$L=_(y.locale,null,!0),this.parse(y),this.$x=this.$x||y.x||{},this[j]=!0}var g=P.prototype;return g.parse=function(y){this.$d=function(N){var S=N.date,$=N.utc;if(S===null)return new Date(NaN);if(D.u(S))return new Date;if(S instanceof Date)return new Date(S);if(typeof S=="string"&&!/Z$/i.test(S)){var O=S.match(m);if(O){var se=O[2]-1||0,de=(O[7]||"0").substring(0,3);return $?new Date(Date.UTC(O[1],se,O[3]||1,O[4]||0,O[5]||0,O[6]||0,de)):new Date(O[1],se,O[3]||1,O[4]||0,O[5]||0,O[6]||0,de)}}return new Date(S)}(y),this.init()},g.init=function(){var y=this.$d;this.$y=y.getFullYear(),this.$M=y.getMonth(),this.$D=y.getDate(),this.$W=y.getDay(),this.$H=y.getHours(),this.$m=y.getMinutes(),this.$s=y.getSeconds(),this.$ms=y.getMilliseconds()},g.$utils=function(){return D},g.isValid=function(){return this.$d.toString()!==f},g.isSame=function(y,N){var S=U(y);return this.startOf(N)<=S&&S<=this.endOf(N)},g.isAfter=function(y,N){return U(y)<this.startOf(N)},g.isBefore=function(y,N){return this.endOf(N)<U(y)},g.$g=function(y,N,S){return D.u(y)?this[N]:this.set(S,y)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(y,N){var S=this,$=!!D.u(N)||N,O=D.p(y),se=function(Be,Re){var Ve=D.w(S.$u?Date.UTC(S.$y,Re,Be):new Date(S.$y,Re,Be),S);return $?Ve:Ve.endOf(l)},de=function(Be,Re){return D.w(S.toDate()[Be].apply(S.toDate("s"),($?[0,0,0,0]:[23,59,59,999]).slice(Re)),S)},fe=this.$W,te=this.$M,ye=this.$D,We="set"+(this.$u?"UTC":"");switch(O){case p:return $?se(1,0):se(31,11);case u:return $?se(1,te):se(0,te+1);case d:var Xe=this.$locale().weekStart||0,Fe=(fe<Xe?fe+7:fe)-Xe;return se($?ye-Fe:ye+(6-Fe),te);case l:case w:return de(We+"Hours",0);case c:return de(We+"Minutes",1);case a:return de(We+"Seconds",2);case o:return de(We+"Milliseconds",3);default:return this.clone()}},g.endOf=function(y){return this.startOf(y,!1)},g.$set=function(y,N){var S,$=D.p(y),O="set"+(this.$u?"UTC":""),se=(S={},S[l]=O+"Date",S[w]=O+"Date",S[u]=O+"Month",S[p]=O+"FullYear",S[c]=O+"Hours",S[a]=O+"Minutes",S[o]=O+"Seconds",S[n]=O+"Milliseconds",S)[$],de=$===l?this.$D+(N-this.$W):N;if($===u||$===p){var fe=this.clone().set(w,1);fe.$d[se](de),fe.init(),this.$d=fe.set(w,Math.min(this.$D,fe.daysInMonth())).$d}else se&&this.$d[se](de);return this.init(),this},g.set=function(y,N){return this.clone().$set(y,N)},g.get=function(y){return this[D.p(y)]()},g.add=function(y,N){var S,$=this;y=Number(y);var O=D.p(N),se=function(te){var ye=U($);return D.w(ye.date(ye.date()+Math.round(te*y)),$)};if(O===u)return this.set(u,this.$M+y);if(O===p)return this.set(p,this.$y+y);if(O===l)return se(1);if(O===d)return se(7);var de=(S={},S[a]=i,S[c]=s,S[o]=r,S)[O]||1,fe=this.$d.getTime()+y*de;return D.w(fe,this)},g.subtract=function(y,N){return this.add(-1*y,N)},g.format=function(y){var N=this,S=this.$locale();if(!this.isValid())return S.invalidDate||f;var $=y||"YYYY-MM-DDTHH:mm:ssZ",O=D.z(this),se=this.$H,de=this.$m,fe=this.$M,te=S.weekdays,ye=S.months,We=S.meridiem,Xe=function(Re,Ve,tt,lt){return Re&&(Re[Ve]||Re(N,$))||tt[Ve].slice(0,lt)},Fe=function(Re){return D.s(se%12||12,Re,"0")},Be=We||function(Re,Ve,tt){var lt=Re<12?"AM":"PM";return tt?lt.toLowerCase():lt};return $.replace(v,function(Re,Ve){return Ve||function(tt){switch(tt){case"YY":return String(N.$y).slice(-2);case"YYYY":return D.s(N.$y,4,"0");case"M":return fe+1;case"MM":return D.s(fe+1,2,"0");case"MMM":return Xe(S.monthsShort,fe,ye,3);case"MMMM":return Xe(ye,fe);case"D":return N.$D;case"DD":return D.s(N.$D,2,"0");case"d":return String(N.$W);case"dd":return Xe(S.weekdaysMin,N.$W,te,2);case"ddd":return Xe(S.weekdaysShort,N.$W,te,3);case"dddd":return te[N.$W];case"H":return String(se);case"HH":return D.s(se,2,"0");case"h":return Fe(1);case"hh":return Fe(2);case"a":return Be(se,de,!0);case"A":return Be(se,de,!1);case"m":return String(de);case"mm":return D.s(de,2,"0");case"s":return String(N.$s);case"ss":return D.s(N.$s,2,"0");case"SSS":return D.s(N.$ms,3,"0");case"Z":return O}return null}(Re)||O.replace(":","")})},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(y,N,S){var $,O=this,se=D.p(N),de=U(y),fe=(de.utcOffset()-this.utcOffset())*i,te=this-de,ye=function(){return D.m(O,de)};switch(se){case p:$=ye()/12;break;case u:$=ye();break;case h:$=ye()/3;break;case d:$=(te-fe)/6048e5;break;case l:$=(te-fe)/864e5;break;case c:$=te/s;break;case a:$=te/i;break;case o:$=te/r;break;default:$=te}return S?$:D.a($)},g.daysInMonth=function(){return this.endOf(u).$D},g.$locale=function(){return T[this.$L]},g.locale=function(y,N){if(!y)return this.$L;var S=this.clone(),$=_(y,N,!0);return $&&(S.$L=$),S},g.clone=function(){return D.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},P}(),pe=Q.prototype;return U.prototype=pe,[["$ms",n],["$s",o],["$m",a],["$H",c],["$W",l],["$M",u],["$y",p],["$D",w]].forEach(function(P){pe[P[1]]=function(g){return this.$g(g,P[0],P[1])}}),U.extend=function(P,g){return P.$i||(P(g,Q,U),P.$i=!0),U},U.locale=_,U.isDayjs=M,U.unix=function(P){return U(1e3*P)},U.en=T[k],U.Ls=T,U.p={},U})})(bp);var zl=bp.exports,yp={exports:{}};(function(t,e){(function(r,i){t.exports=i()})(ja,function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(r){var i=["th","st","nd","rd"],s=r%100;return"["+r+(i[(s-20)%10]||i[s]||i[0])+"]"}}})})(yp);var lw=yp.exports,Cp={exports:{}};(function(t,e){(function(r,i){t.exports=i()})(ja,function(){return function(r,i,s){r=r||{};var n=i.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(l,d,u,h){return n.fromToBase(l,d,u,h)}s.en.relativeTime=o,n.fromToBase=function(l,d,u,h,p){for(var w,f,m,v=u.$locale().relativeTime||o,x=r.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],E=x.length,A=0;A<E;A+=1){var k=x[A];k.d&&(w=h?s(l).diff(u,k.d,!0):u.diff(l,k.d,!0));var T=(r.rounding||Math.round)(Math.abs(w));if(m=w>0,T<=k.r||!k.r){T<=1&&A>0&&(k=x[A-1]);var j=v[k.l];p&&(T=p(""+T)),f=typeof j=="string"?j.replace("%d",T):j(T,d,k.l,m);break}}if(d)return f;var M=m?v.future:v.past;return typeof M=="function"?M(f):M.replace("%s",f)},n.to=function(l,d){return a(l,d,this,!0)},n.from=function(l,d){return a(l,d,this)};var c=function(l){return l.$u?s.utc():s()};n.toNow=function(l){return this.to(c(this),l)},n.fromNow=function(l){return this.from(c(this),l)}}})})(Cp);var dw=Cp.exports,xp={exports:{}};(function(t,e){(function(r,i){t.exports=i()})(ja,function(){return function(r,i,s){s.updateLocale=function(n,o){var a=s.Ls[n];if(a)return(o?Object.keys(o):[]).forEach(function(c){a[c]=o[c]}),a}}})})(xp);var uw=xp.exports;zl.extend(dw),zl.extend(uw);const hw={...lw,name:"en-web3-modal",relativeTime:{future:"in %s",past:"%s ago",s:"%d sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}};zl.locale("en-web3-modal",hw);const Ep={caipNetworkIdToNumber(t){return t?Number(t.split(":")[1]):void 0},parseEvmChainId(t){return typeof t=="string"?this.caipNetworkIdToNumber(t):t},getNetworksByNamespace(t,e){return(t==null?void 0:t.filter(r=>r.chainNamespace===e))||[]},getFirstNetworkByNamespace(t,e){return this.getNetworksByNamespace(t,e)[0]}};var pw=20,fw=1,Kr=1e6,vu=1e6,gw=-7,ww=21,mw=!1,bn="[big.js] ",yi=bn+"Invalid ",vo=yi+"decimal places",vw=yi+"rounding mode",bu=bn+"Division by zero",Ne={},tr=void 0,bw=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;function Ip(){function t(e){var r=this;if(!(r instanceof t))return e===tr?Ip():new t(e);if(e instanceof t)r.s=e.s,r.e=e.e,r.c=e.c.slice();else{if(typeof e!="string"){if(t.strict===!0&&typeof e!="bigint")throw TypeError(yi+"value");e=e===0&&1/e<0?"-0":String(e)}yw(r,e)}r.constructor=t}return t.prototype=Ne,t.DP=pw,t.RM=fw,t.NE=gw,t.PE=ww,t.strict=mw,t.roundDown=0,t.roundHalfUp=1,t.roundHalfEven=2,t.roundUp=3,t}function yw(t,e){var r,i,s;if(!bw.test(e))throw Error(yi+"number");for(t.s=e.charAt(0)=="-"?(e=e.slice(1),-1):1,(r=e.indexOf("."))>-1&&(e=e.replace(".","")),(i=e.search(/e/i))>0?(r<0&&(r=i),r+=+e.slice(i+1),e=e.substring(0,i)):r<0&&(r=e.length),s=e.length,i=0;i<s&&e.charAt(i)=="0";)++i;if(i==s)t.c=[t.e=0];else{for(;s>0&&e.charAt(--s)=="0";);for(t.e=r-i-1,t.c=[],r=0;i<=s;)t.c[r++]=+e.charAt(i++)}return t}function Yr(t,e,r,i){var s=t.c;if(r===tr&&(r=t.constructor.RM),r!==0&&r!==1&&r!==2&&r!==3)throw Error(vw);if(e<1)i=r===3&&(i||!!s[0])||e===0&&(r===1&&s[0]>=5||r===2&&(s[0]>5||s[0]===5&&(i||s[1]!==tr))),s.length=1,i?(t.e=t.e-e+1,s[0]=1):s[0]=t.e=0;else if(e<s.length){if(i=r===1&&s[e]>=5||r===2&&(s[e]>5||s[e]===5&&(i||s[e+1]!==tr||s[e-1]&1))||r===3&&(i||!!s[0]),s.length=e,i){for(;++s[--e]>9;)if(s[e]=0,e===0){++t.e,s.unshift(1);break}}for(e=s.length;!s[--e];)s.pop()}return t}function Jr(t,e,r){var i=t.e,s=t.c.join(""),n=s.length;if(e)s=s.charAt(0)+(n>1?"."+s.slice(1):"")+(i<0?"e":"e+")+i;else if(i<0){for(;++i;)s="0"+s;s="0."+s}else if(i>0)if(++i>n)for(i-=n;i--;)s+="0";else i<n&&(s=s.slice(0,i)+"."+s.slice(i));else n>1&&(s=s.charAt(0)+"."+s.slice(1));return t.s<0&&r?"-"+s:s}Ne.abs=function(){var t=new this.constructor(this);return t.s=1,t},Ne.cmp=function(t){var e,r=this,i=r.c,s=(t=new r.constructor(t)).c,n=r.s,o=t.s,a=r.e,c=t.e;if(!i[0]||!s[0])return i[0]?n:s[0]?-o:0;if(n!=o)return n;if(e=n<0,a!=c)return a>c^e?1:-1;for(o=(a=i.length)<(c=s.length)?a:c,n=-1;++n<o;)if(i[n]!=s[n])return i[n]>s[n]^e?1:-1;return a==c?0:a>c^e?1:-1},Ne.div=function(t){var e=this,r=e.constructor,i=e.c,s=(t=new r(t)).c,n=e.s==t.s?1:-1,o=r.DP;if(o!==~~o||o<0||o>Kr)throw Error(vo);if(!s[0])throw Error(bu);if(!i[0])return t.s=n,t.c=[t.e=0],t;var a,c,l,d,u,h=s.slice(),p=a=s.length,w=i.length,f=i.slice(0,a),m=f.length,v=t,x=v.c=[],E=0,A=o+(v.e=e.e-t.e)+1;for(v.s=n,n=A<0?0:A,h.unshift(0);m++<a;)f.push(0);do{for(l=0;l<10;l++){if(a!=(m=f.length))d=a>m?1:-1;else for(u=-1,d=0;++u<a;)if(s[u]!=f[u]){d=s[u]>f[u]?1:-1;break}if(d<0){for(c=m==a?s:h;m;){if(f[--m]<c[m]){for(u=m;u&&!f[--u];)f[u]=9;--f[u],f[m]+=10}f[m]-=c[m]}for(;!f[0];)f.shift()}else break}x[E++]=d?l:++l,f[0]&&d?f[m]=i[p]||0:f=[i[p]]}while((p++<w||f[0]!==tr)&&n--);return!x[0]&&E!=1&&(x.shift(),v.e--,A--),E>A&&Yr(v,A,r.RM,f[0]!==tr),v},Ne.eq=function(t){return this.cmp(t)===0},Ne.gt=function(t){return this.cmp(t)>0},Ne.gte=function(t){return this.cmp(t)>-1},Ne.lt=function(t){return this.cmp(t)<0},Ne.lte=function(t){return this.cmp(t)<1},Ne.minus=Ne.sub=function(t){var e,r,i,s,n=this,o=n.constructor,a=n.s,c=(t=new o(t)).s;if(a!=c)return t.s=-c,n.plus(t);var l=n.c.slice(),d=n.e,u=t.c,h=t.e;if(!l[0]||!u[0])return u[0]?t.s=-c:l[0]?t=new o(n):t.s=1,t;if(a=d-h){for((s=a<0)?(a=-a,i=l):(h=d,i=u),i.reverse(),c=a;c--;)i.push(0);i.reverse()}else for(r=((s=l.length<u.length)?l:u).length,a=c=0;c<r;c++)if(l[c]!=u[c]){s=l[c]<u[c];break}if(s&&(i=l,l=u,u=i,t.s=-t.s),(c=(r=u.length)-(e=l.length))>0)for(;c--;)l[e++]=0;for(c=e;r>a;){if(l[--r]<u[r]){for(e=r;e&&!l[--e];)l[e]=9;--l[e],l[r]+=10}l[r]-=u[r]}for(;l[--c]===0;)l.pop();for(;l[0]===0;)l.shift(),--h;return l[0]||(t.s=1,l=[h=0]),t.c=l,t.e=h,t},Ne.mod=function(t){var e,r=this,i=r.constructor,s=r.s,n=(t=new i(t)).s;if(!t.c[0])throw Error(bu);return r.s=t.s=1,e=t.cmp(r)==1,r.s=s,t.s=n,e?new i(r):(s=i.DP,n=i.RM,i.DP=i.RM=0,r=r.div(t),i.DP=s,i.RM=n,this.minus(r.times(t)))},Ne.neg=function(){var t=new this.constructor(this);return t.s=-t.s,t},Ne.plus=Ne.add=function(t){var e,r,i,s=this,n=s.constructor;if(t=new n(t),s.s!=t.s)return t.s=-t.s,s.minus(t);var o=s.e,a=s.c,c=t.e,l=t.c;if(!a[0]||!l[0])return l[0]||(a[0]?t=new n(s):t.s=s.s),t;if(a=a.slice(),e=o-c){for(e>0?(c=o,i=l):(e=-e,i=a),i.reverse();e--;)i.push(0);i.reverse()}for(a.length-l.length<0&&(i=l,l=a,a=i),e=l.length,r=0;e;a[e]%=10)r=(a[--e]=a[e]+l[e]+r)/10|0;for(r&&(a.unshift(r),++c),e=a.length;a[--e]===0;)a.pop();return t.c=a,t.e=c,t},Ne.pow=function(t){var e=this,r=new e.constructor("1"),i=r,s=t<0;if(t!==~~t||t<-vu||t>vu)throw Error(yi+"exponent");for(s&&(t=-t);t&1&&(i=i.times(e)),t>>=1,!!t;)e=e.times(e);return s?r.div(i):i},Ne.prec=function(t,e){if(t!==~~t||t<1||t>Kr)throw Error(yi+"precision");return Yr(new this.constructor(this),t,e)},Ne.round=function(t,e){if(t===tr)t=0;else if(t!==~~t||t<-Kr||t>Kr)throw Error(vo);return Yr(new this.constructor(this),t+this.e+1,e)},Ne.sqrt=function(){var t,e,r,i=this,s=i.constructor,n=i.s,o=i.e,a=new s("0.5");if(!i.c[0])return new s(i);if(n<0)throw Error(bn+"No square root");n=Math.sqrt(+Jr(i,!0,!0)),n===0||n===1/0?(e=i.c.join(""),e.length+o&1||(e+="0"),n=Math.sqrt(e),o=((o+1)/2|0)-(o<0||o&1),t=new s((n==1/0?"5e":(n=n.toExponential()).slice(0,n.indexOf("e")+1))+o)):t=new s(n+""),o=t.e+(s.DP+=4);do r=t,t=a.times(r.plus(i.div(r)));while(r.c.slice(0,o).join("")!==t.c.slice(0,o).join(""));return Yr(t,(s.DP-=4)+t.e+1,s.RM)},Ne.times=Ne.mul=function(t){var e,r=this,i=r.constructor,s=r.c,n=(t=new i(t)).c,o=s.length,a=n.length,c=r.e,l=t.e;if(t.s=r.s==t.s?1:-1,!s[0]||!n[0])return t.c=[t.e=0],t;for(t.e=c+l,o<a&&(e=s,s=n,n=e,l=o,o=a,a=l),e=new Array(l=o+a);l--;)e[l]=0;for(c=a;c--;){for(a=0,l=o+c;l>c;)a=e[l]+n[c]*s[l-c-1]+a,e[l--]=a%10,a=a/10|0;e[l]=a}for(a?++t.e:e.shift(),c=e.length;!e[--c];)e.pop();return t.c=e,t},Ne.toExponential=function(t,e){var r=this,i=r.c[0];if(t!==tr){if(t!==~~t||t<0||t>Kr)throw Error(vo);for(r=Yr(new r.constructor(r),++t,e);r.c.length<t;)r.c.push(0)}return Jr(r,!0,!!i)},Ne.toFixed=function(t,e){var r=this,i=r.c[0];if(t!==tr){if(t!==~~t||t<0||t>Kr)throw Error(vo);for(r=Yr(new r.constructor(r),t+r.e+1,e),t=t+r.e+1;r.c.length<t;)r.c.push(0)}return Jr(r,!1,!!i)},Ne[Symbol.for("nodejs.util.inspect.custom")]=Ne.toJSON=Ne.toString=function(){var t=this,e=t.constructor;return Jr(t,t.e<=e.NE||t.e>=e.PE,!!t.c[0])},Ne.toNumber=function(){var t=+Jr(this,!0,!0);if(this.constructor.strict===!0&&!this.eq(t.toString()))throw Error(bn+"Imprecise conversion");return t},Ne.toPrecision=function(t,e){var r=this,i=r.constructor,s=r.c[0];if(t!==tr){if(t!==~~t||t<1||t>Kr)throw Error(yi+"precision");for(r=Yr(new i(r),t,e);r.c.length<t;)r.c.push(0)}return Jr(r,t<=r.e||r.e<=i.NE||r.e>=i.PE,!!s)},Ne.valueOf=function(){var t=this,e=t.constructor;if(e.strict===!0)throw Error(bn+"valueOf disallowed");return Jr(t,t.e<=e.NE||t.e>=e.PE,!0)};var Ms=Ip();const bo={bigNumber(t){return t?new Ms(t):new Ms(0)},multiply(t,e){if(t===void 0||e===void 0)return new Ms(0);const r=new Ms(t),i=new Ms(e);return r.times(i)},formatNumberToLocalString(t,e=2){return t===void 0?"0.00":typeof t=="number"?t.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):parseFloat(t).toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e})},parseLocalStringToNumber(t){return t===void 0?0:parseFloat(t.replace(/,/gu,""))}},Cw=[{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],xw=[{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{type:"bool"}]}],Ew=[{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],J={WC_NAME_SUFFIX:".reown.id",WC_NAME_SUFFIX_LEGACY:".wcn.id",BLOCKCHAIN_API_RPC_URL:"https://rpc.walletconnect.org",PULSE_API_URL:"https://pulse.walletconnect.org",W3M_API_URL:"https://api.web3modal.org",CONNECTOR_ID:{WALLET_CONNECT:"walletConnect",INJECTED:"injected",WALLET_STANDARD:"announced",COINBASE:"coinbaseWallet",COINBASE_SDK:"coinbaseWalletSDK",SAFE:"safe",LEDGER:"ledger",OKX:"okx",EIP6963:"eip6963",AUTH:"ID_AUTH"},CONNECTOR_NAMES:{AUTH:"Auth"},AUTH_CONNECTOR_SUPPORTED_CHAINS:["eip155","solana"],LIMITS:{PENDING_TRANSACTIONS:99},CHAIN:{EVM:"eip155",SOLANA:"solana",POLKADOT:"polkadot",BITCOIN:"bip122"},CHAIN_NAME_MAP:{eip155:"EVM Networks",solana:"Solana",polkadot:"Polkadot",bip122:"Bitcoin"},ADAPTER_TYPES:{BITCOIN:"bitcoin",SOLANA:"solana",WAGMI:"wagmi",ETHERS:"ethers",ETHERS5:"ethers5"},USDT_CONTRACT_ADDRESSES:["0xdac17f958d2ee523a2206206994597c13d831ec7","0xc2132d05d31c914a87c6611c10748aeb04b58e8f","0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7","0x919C1c267BC06a7039e03fcc2eF738525769109c","0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e","0x55d398326f99059fF775485246999027B3197955","0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9"],HTTP_STATUS_CODES:{SERVICE_UNAVAILABLE:503,FORBIDDEN:403},UNSUPPORTED_NETWORK_NAME:"Unknown Network"},Iw={getERC20Abi:t=>J.USDT_CONTRACT_ADDRESSES.includes(t)?Ew:Cw,getSwapAbi:()=>xw},kr={validateCaipAddress(t){var e;if(((e=t.split(":"))==null?void 0:e.length)!==3)throw new Error("Invalid CAIP Address");return t},parseCaipAddress(t){const e=t.split(":");if(e.length!==3)throw new Error(`Invalid CAIP-10 address: ${t}`);const[r,i,s]=e;if(!r||!i||!s)throw new Error(`Invalid CAIP-10 address: ${t}`);return{chainNamespace:r,chainId:i,address:s}},parseCaipNetworkId(t){const e=t.split(":");if(e.length!==2)throw new Error(`Invalid CAIP-2 network id: ${t}`);const[r,i]=e;if(!r||!i)throw new Error(`Invalid CAIP-2 network id: ${t}`);return{chainNamespace:r,chainId:i}}},ue={WALLET_ID:"@appkit/wallet_id",WALLET_NAME:"@appkit/wallet_name",SOLANA_WALLET:"@appkit/solana_wallet",SOLANA_CAIP_CHAIN:"@appkit/solana_caip_chain",ACTIVE_CAIP_NETWORK_ID:"@appkit/active_caip_network_id",CONNECTED_SOCIAL:"@appkit/connected_social",CONNECTED_SOCIAL_USERNAME:"@appkit-wallet/SOCIAL_USERNAME",RECENT_WALLETS:"@appkit/recent_wallets",DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",ACTIVE_NAMESPACE:"@appkit/active_namespace",CONNECTED_NAMESPACES:"@appkit/connected_namespaces",CONNECTION_STATUS:"@appkit/connection_status",SIWX_AUTH_TOKEN:"@appkit/siwx-auth-token",SIWX_NONCE_TOKEN:"@appkit/siwx-nonce-token",TELEGRAM_SOCIAL_PROVIDER:"@appkit/social_provider",NATIVE_BALANCE_CACHE:"@appkit/native_balance_cache",PORTFOLIO_CACHE:"@appkit/portfolio_cache",ENS_CACHE:"@appkit/ens_cache",IDENTITY_CACHE:"@appkit/identity_cache",PREFERRED_ACCOUNT_TYPES:"@appkit/preferred_account_types"};function hc(t){if(!t)throw new Error("Namespace is required for CONNECTED_CONNECTOR_ID");return`@appkit/${t}:connected_connector_id`}const le={setItem(t,e){hn()&&e!==void 0&&localStorage.setItem(t,e)},getItem(t){if(hn())return localStorage.getItem(t)||void 0},removeItem(t){hn()&&localStorage.removeItem(t)},clear(){hn()&&localStorage.clear()}};function hn(){return typeof window<"u"&&typeof localStorage<"u"}function Mr(t,e){return e==="light"?{"--w3m-accent":(t==null?void 0:t["--w3m-accent"])||"hsla(231, 100%, 70%, 1)","--w3m-background":"#fff"}:{"--w3m-accent":(t==null?void 0:t["--w3m-accent"])||"hsla(230, 100%, 67%, 1)","--w3m-background":"#121313"}}const Aw=Symbol(),yu=Object.getPrototypeOf,Hl=new WeakMap,Nw=t=>t&&(Hl.has(t)?Hl.get(t):yu(t)===Object.prototype||yu(t)===Array.prototype),kw=t=>Nw(t)&&t[Aw]||null,Cu=(t,e=!0)=>{Hl.set(t,e)},pc=t=>typeof t=="object"&&t!==null,$r=new WeakMap,pn=new WeakSet,Sw=(t=Object.is,e=(l,d)=>new Proxy(l,d),r=l=>pc(l)&&!pn.has(l)&&(Array.isArray(l)||!(Symbol.iterator in l))&&!(l instanceof WeakMap)&&!(l instanceof WeakSet)&&!(l instanceof Error)&&!(l instanceof Number)&&!(l instanceof Date)&&!(l instanceof String)&&!(l instanceof RegExp)&&!(l instanceof ArrayBuffer),i=l=>{switch(l.status){case"fulfilled":return l.value;case"rejected":throw l.reason;default:throw l}},s=new WeakMap,n=(l,d,u=i)=>{const h=s.get(l);if((h==null?void 0:h[0])===d)return h[1];const p=Array.isArray(l)?[]:Object.create(Object.getPrototypeOf(l));return Cu(p,!0),s.set(l,[d,p]),Reflect.ownKeys(l).forEach(w=>{if(Object.getOwnPropertyDescriptor(p,w))return;const f=Reflect.get(l,w),{enumerable:m}=Reflect.getOwnPropertyDescriptor(l,w),v={value:f,enumerable:m,configurable:!0};if(pn.has(f))Cu(f,!1);else if(f instanceof Promise)delete v.value,v.get=()=>u(f);else if($r.has(f)){const[x,E]=$r.get(f);v.value=n(x,E(),u)}Object.defineProperty(p,w,v)}),Object.preventExtensions(p)},o=new WeakMap,a=[1,1],c=l=>{if(!pc(l))throw new Error("object required");const d=o.get(l);if(d)return d;let u=a[0];const h=new Set,p=(M,_=++a[0])=>{u!==_&&(u=_,h.forEach(U=>U(M,_)))};let w=a[1];const f=(M=++a[1])=>(w!==M&&!h.size&&(w=M,v.forEach(([_])=>{const U=_[1](M);U>u&&(u=U)})),u),m=M=>(_,U)=>{const D=[..._];D[1]=[M,...D[1]],p(D,U)},v=new Map,x=(M,_)=>{if((Ea?"production":void 0)!=="production"&&v.has(M))throw new Error("prop listener already exists");if(h.size){const U=_[3](m(M));v.set(M,[_,U])}else v.set(M,[_])},E=M=>{var _;const U=v.get(M);U&&(v.delete(M),(_=U[1])==null||_.call(U))},A=M=>(h.add(M),h.size===1&&v.forEach(([_,U],D)=>{if((Ea?"production":void 0)!=="production"&&U)throw new Error("remove already exists");const Q=_[3](m(D));v.set(D,[_,Q])}),()=>{h.delete(M),h.size===0&&v.forEach(([_,U],D)=>{U&&(U(),v.set(D,[_]))})}),k=Array.isArray(l)?[]:Object.create(Object.getPrototypeOf(l)),T=e(k,{deleteProperty(M,_){const U=Reflect.get(M,_);E(_);const D=Reflect.deleteProperty(M,_);return D&&p(["delete",[_],U]),D},set(M,_,U,D){const Q=Reflect.has(M,_),pe=Reflect.get(M,_,D);if(Q&&(t(pe,U)||o.has(U)&&t(pe,o.get(U))))return!0;E(_),pc(U)&&(U=kw(U)||U);let P=U;if(U instanceof Promise)U.then(g=>{U.status="fulfilled",U.value=g,p(["resolve",[_],g])}).catch(g=>{U.status="rejected",U.reason=g,p(["reject",[_],g])});else{!$r.has(U)&&r(U)&&(P=c(U));const g=!pn.has(P)&&$r.get(P);g&&x(_,g)}return Reflect.set(M,_,P,D),p(["set",[_],U,pe]),!0}});o.set(l,T);const j=[k,f,n,A];return $r.set(T,j),Reflect.ownKeys(l).forEach(M=>{const _=Object.getOwnPropertyDescriptor(l,M);"value"in _&&(T[M]=l[M],delete _.value,delete _.writable),Object.defineProperty(k,M,_)}),T})=>[c,$r,pn,t,e,r,i,s,n,o,a],[_w]=Sw();function Pe(t={}){return _w(t)}function it(t,e,r){const i=$r.get(t);(Ea?"production":void 0)!=="production"&&!i&&console.warn("Please use proxy object");let s;const n=[],o=i[3];let a=!1;const c=o(l=>{n.push(l),s||(s=Promise.resolve().then(()=>{s=void 0,a&&e(n.splice(0))}))});return a=!0,()=>{a=!1,c()}}function An(t,e){const r=$r.get(t);(Ea?"production":void 0)!=="production"&&!r&&console.warn("Please use proxy object");const[i,s,n]=r;return n(i,s(),e)}function Ni(t){return pn.add(t),t}function ct(t,e,r,i){let s=t[e];return it(t,()=>{const n=t[e];Object.is(s,n)||r(s=n)},i)}function Pw(t){const e=Pe({data:Array.from([]),has(r){return this.data.some(i=>i[0]===r)},set(r,i){const s=this.data.find(n=>n[0]===r);return s?s[1]=i:this.data.push([r,i]),this},get(r){var i;return(i=this.data.find(s=>s[0]===r))==null?void 0:i[1]},delete(r){const i=this.data.findIndex(s=>s[0]===r);return i===-1?!1:(this.data.splice(i,1),!0)},clear(){this.data.splice(0)},get size(){return this.data.length},toJSON(){return new Map(this.data)},forEach(r){this.data.forEach(i=>{r(i[1],i[0],this)})},keys(){return this.data.map(r=>r[0]).values()},values(){return this.data.map(r=>r[1]).values()},entries(){return new Map(this.data).entries()},get[Symbol.toStringTag](){return"Map"},[Symbol.iterator](){return this.entries()}});return Object.defineProperties(e,{data:{enumerable:!1},size:{enumerable:!1},toJSON:{enumerable:!1}}),Object.seal(e),e}const fc=(typeof process<"u"&&typeof Ia<"u"?Ia.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",Tw=[{label:"Coinbase",name:"coinbase",feeRange:"1-2%",url:"",supportedChains:["eip155"]},{label:"Meld.io",name:"meld",feeRange:"1-2%",url:"https://meldcrypto.com",supportedChains:["eip155","solana"]}],He={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,FIVE_SEC_MS:5e3,THREE_SEC_MS:3e3,ONE_SEC_MS:1e3,SECURE_SITE:fc,SECURE_SITE_DASHBOARD:`${fc}/dashboard`,SECURE_SITE_FAVICON:`${fc}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],WC_COINBASE_PAY_SDK_CHAINS:["ethereum","arbitrum","polygon","berachain","avalanche-c-chain","optimism","celo","base"],WC_COINBASE_PAY_SDK_FALLBACK_CHAIN:"ethereum",WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP:{Ethereum:"ethereum","Arbitrum One":"arbitrum",Polygon:"polygon",Berachain:"berachain",Avalanche:"avalanche-c-chain","OP Mainnet":"optimism",Celo:"celo",Base:"base"},WC_COINBASE_ONRAMP_APP_ID:"bf18c88d-495a-463b-b249-0b9d3656cf5e",SWAP_SUGGESTED_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP"],SWAP_POPULAR_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP","METAL","DAI","CHAMP","WOLF","SALE","BAL","BUSD","MUST","BTCpx","ROUTE","HEX","WELT","amDAI","VSQ","VISION","AURUM","pSP","SNX","VC","LINK","CHP","amUSDT","SPHERE","FOX","GIDDY","GFC","OMEN","OX_OLD","DE","WNT"],BALANCE_SUPPORTED_CHAINS:["eip155","solana"],SWAP_SUPPORTED_NETWORKS:["eip155:1","eip155:42161","eip155:10","eip155:324","eip155:8453","eip155:56","eip155:137","eip155:100","eip155:43114","eip155:250","eip155:8217","eip155:1313161554"],NAMES_SUPPORTED_CHAIN_NAMESPACES:["eip155"],ONRAMP_SUPPORTED_CHAIN_NAMESPACES:["eip155","solana"],ACTIVITY_ENABLED_CHAIN_NAMESPACES:["eip155"],NATIVE_TOKEN_ADDRESS:{eip155:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",solana:"So11111111111111111111111111111111111111111",polkadot:"0x",bip122:"0x"},CONVERT_SLIPPAGE_TOLERANCE:1,CONNECT_LABELS:{MOBILE:"Open and continue in a new browser tab"},DEFAULT_FEATURES:{swaps:!0,onramp:!0,receive:!0,send:!0,email:!0,emailShowWallets:!0,socials:["google","x","discord","farcaster","github","apple","facebook"],connectorTypeOrder:["walletConnect","recent","injected","featured","custom","external","recommended"],history:!0,analytics:!0,allWallets:!0,legalCheckbox:!1,smartSessions:!1,collapseWallets:!1,walletFeaturesOrder:["onramp","swaps","receive","send"],connectMethodsOrder:void 0},DEFAULT_ACCOUNT_TYPES:{bip122:"payment",eip155:"smartAccount",polkadot:"eoa",solana:"eoa"},ADAPTER_TYPES:{UNIVERSAL:"universal",SOLANA:"solana",WAGMI:"wagmi",ETHERS:"ethers",ETHERS5:"ethers5",BITCOIN:"bitcoin"}},Y={cacheExpiry:{portfolio:3e4,nativeBalance:3e4,ens:3e5,identity:3e5},isCacheExpired(t,e){return Date.now()-t>e},getActiveNetworkProps(){const t=Y.getActiveNamespace(),e=Y.getActiveCaipNetworkId(),r=e?e.split(":")[1]:void 0,i=r?isNaN(Number(r))?r:Number(r):void 0;return{namespace:t,caipNetworkId:e,chainId:i}},setWalletConnectDeepLink({name:t,href:e}){try{le.setItem(ue.DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const t=le.getItem(ue.DEEPLINK_CHOICE);if(t)return JSON.parse(t)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{le.removeItem(ue.DEEPLINK_CHOICE)}catch{console.info("Unable to delete WalletConnect deep link")}},setActiveNamespace(t){try{le.setItem(ue.ACTIVE_NAMESPACE,t)}catch{console.info("Unable to set active namespace")}},setActiveCaipNetworkId(t){try{le.setItem(ue.ACTIVE_CAIP_NETWORK_ID,t),Y.setActiveNamespace(t.split(":")[0])}catch{console.info("Unable to set active caip network id")}},getActiveCaipNetworkId(){try{return le.getItem(ue.ACTIVE_CAIP_NETWORK_ID)}catch{console.info("Unable to get active caip network id");return}},deleteActiveCaipNetworkId(){try{le.removeItem(ue.ACTIVE_CAIP_NETWORK_ID)}catch{console.info("Unable to delete active caip network id")}},deleteConnectedConnectorId(t){try{const e=hc(t);le.removeItem(e)}catch{console.info("Unable to delete connected connector id")}},setAppKitRecent(t){try{const e=Y.getRecentWallets();e.find(r=>r.id===t.id)||(e.unshift(t),e.length>2&&e.pop(),le.setItem(ue.RECENT_WALLETS,JSON.stringify(e)))}catch{console.info("Unable to set AppKit recent")}},getRecentWallets(){try{const t=le.getItem(ue.RECENT_WALLETS);return t?JSON.parse(t):[]}catch{console.info("Unable to get AppKit recent")}return[]},setConnectedConnectorId(t,e){try{const r=hc(t);le.setItem(r,e)}catch{console.info("Unable to set Connected Connector Id")}},getActiveNamespace(){try{return le.getItem(ue.ACTIVE_NAMESPACE)}catch{console.info("Unable to get active namespace")}},getConnectedConnectorId(t){if(t)try{const e=hc(t);return le.getItem(e)}catch{console.info("Unable to get connected connector id in namespace ",t)}},setConnectedSocialProvider(t){try{le.setItem(ue.CONNECTED_SOCIAL,t)}catch{console.info("Unable to set connected social provider")}},getConnectedSocialProvider(){try{return le.getItem(ue.CONNECTED_SOCIAL)}catch{console.info("Unable to get connected social provider")}},deleteConnectedSocialProvider(){try{le.removeItem(ue.CONNECTED_SOCIAL)}catch{console.info("Unable to delete connected social provider")}},getConnectedSocialUsername(){try{return le.getItem(ue.CONNECTED_SOCIAL_USERNAME)}catch{console.info("Unable to get connected social username")}},getStoredActiveCaipNetworkId(){var t,e;return(e=(t=le.getItem(ue.ACTIVE_CAIP_NETWORK_ID))==null?void 0:t.split(":"))==null?void 0:e[1]},setConnectionStatus(t){try{le.setItem(ue.CONNECTION_STATUS,t)}catch{console.info("Unable to set connection status")}},getConnectionStatus(){try{return le.getItem(ue.CONNECTION_STATUS)}catch{return}},getConnectedNamespaces(){try{const t=le.getItem(ue.CONNECTED_NAMESPACES);return t!=null&&t.length?t.split(","):[]}catch{return[]}},setConnectedNamespaces(t){try{const e=Array.from(new Set(t));le.setItem(ue.CONNECTED_NAMESPACES,e.join(","))}catch{console.info("Unable to set namespaces in storage")}},addConnectedNamespace(t){try{const e=Y.getConnectedNamespaces();e.includes(t)||(e.push(t),Y.setConnectedNamespaces(e))}catch{console.info("Unable to add connected namespace")}},removeConnectedNamespace(t){try{const e=Y.getConnectedNamespaces(),r=e.indexOf(t);r>-1&&(e.splice(r,1),Y.setConnectedNamespaces(e))}catch{console.info("Unable to remove connected namespace")}},getTelegramSocialProvider(){try{return le.getItem(ue.TELEGRAM_SOCIAL_PROVIDER)}catch{return console.info("Unable to get telegram social provider"),null}},setTelegramSocialProvider(t){try{le.setItem(ue.TELEGRAM_SOCIAL_PROVIDER,t)}catch{console.info("Unable to set telegram social provider")}},removeTelegramSocialProvider(){try{le.removeItem(ue.TELEGRAM_SOCIAL_PROVIDER)}catch{console.info("Unable to remove telegram social provider")}},getBalanceCache(){let t={};try{const e=le.getItem(ue.PORTFOLIO_CACHE);t=e?JSON.parse(e):{}}catch{console.info("Unable to get balance cache")}return t},removeAddressFromBalanceCache(t){try{const e=Y.getBalanceCache();le.setItem(ue.PORTFOLIO_CACHE,JSON.stringify({...e,[t]:void 0}))}catch{console.info("Unable to remove address from balance cache",t)}},getBalanceCacheForCaipAddress(t){try{const e=Y.getBalanceCache()[t];if(e&&!this.isCacheExpired(e.timestamp,this.cacheExpiry.portfolio))return e.balance;Y.removeAddressFromBalanceCache(t)}catch{console.info("Unable to get balance cache for address",t)}},updateBalanceCache(t){try{const e=Y.getBalanceCache();e[t.caipAddress]=t,le.setItem(ue.PORTFOLIO_CACHE,JSON.stringify(e))}catch{console.info("Unable to update balance cache",t)}},getNativeBalanceCache(){let t={};try{const e=le.getItem(ue.NATIVE_BALANCE_CACHE);t=e?JSON.parse(e):{}}catch{console.info("Unable to get balance cache")}return t},removeAddressFromNativeBalanceCache(t){try{const e=Y.getBalanceCache();le.setItem(ue.NATIVE_BALANCE_CACHE,JSON.stringify({...e,[t]:void 0}))}catch{console.info("Unable to remove address from balance cache",t)}},getNativeBalanceCacheForCaipAddress(t){try{const e=Y.getNativeBalanceCache()[t];if(e&&!this.isCacheExpired(e.timestamp,this.cacheExpiry.nativeBalance))return e;console.info("Discarding cache for address",t),Y.removeAddressFromBalanceCache(t)}catch{console.info("Unable to get balance cache for address",t)}},updateNativeBalanceCache(t){try{const e=Y.getNativeBalanceCache();e[t.caipAddress]=t,le.setItem(ue.NATIVE_BALANCE_CACHE,JSON.stringify(e))}catch{console.info("Unable to update balance cache",t)}},getEnsCache(){let t={};try{const e=le.getItem(ue.ENS_CACHE);t=e?JSON.parse(e):{}}catch{console.info("Unable to get ens name cache")}return t},getEnsFromCacheForAddress(t){try{const e=Y.getEnsCache()[t];if(e&&!this.isCacheExpired(e.timestamp,this.cacheExpiry.ens))return e.ens;Y.removeEnsFromCache(t)}catch{console.info("Unable to get ens name from cache",t)}},updateEnsCache(t){try{const e=Y.getEnsCache();e[t.address]=t,le.setItem(ue.ENS_CACHE,JSON.stringify(e))}catch{console.info("Unable to update ens name cache",t)}},removeEnsFromCache(t){try{const e=Y.getEnsCache();le.setItem(ue.ENS_CACHE,JSON.stringify({...e,[t]:void 0}))}catch{console.info("Unable to remove ens name from cache",t)}},getIdentityCache(){let t={};try{const e=le.getItem(ue.IDENTITY_CACHE);t=e?JSON.parse(e):{}}catch{console.info("Unable to get identity cache")}return t},getIdentityFromCacheForAddress(t){try{const e=Y.getIdentityCache()[t];if(e&&!this.isCacheExpired(e.timestamp,this.cacheExpiry.identity))return e.identity;Y.removeIdentityFromCache(t)}catch{console.info("Unable to get identity from cache",t)}},updateIdentityCache(t){try{const e=Y.getIdentityCache();e[t.address]={identity:t.identity,timestamp:t.timestamp},le.setItem(ue.IDENTITY_CACHE,JSON.stringify(e))}catch{console.info("Unable to update identity cache",t)}},removeIdentityFromCache(t){try{const e=Y.getIdentityCache();le.setItem(ue.IDENTITY_CACHE,JSON.stringify({...e,[t]:void 0}))}catch{console.info("Unable to remove identity from cache",t)}},clearAddressCache(){try{le.removeItem(ue.PORTFOLIO_CACHE),le.removeItem(ue.NATIVE_BALANCE_CACHE),le.removeItem(ue.ENS_CACHE),le.removeItem(ue.IDENTITY_CACHE)}catch{console.info("Unable to clear address cache")}},setPreferredAccountTypes(t){try{le.setItem(ue.PREFERRED_ACCOUNT_TYPES,JSON.stringify(t))}catch{console.info("Unable to set preferred account types",t)}},getPreferredAccountTypes(){try{const t=le.getItem(ue.PREFERRED_ACCOUNT_TYPES);return JSON.parse(t)}catch{console.info("Unable to get preferred account types")}}},z={isMobile(){var t;return this.isClient()?!!((t=window==null?void 0:window.matchMedia("(pointer:coarse)"))!=null&&t.matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},checkCaipNetwork(t,e=""){return t==null?void 0:t.caipNetworkId.toLocaleLowerCase().includes(e.toLowerCase())},isAndroid(){if(!this.isMobile())return!1;const t=window==null?void 0:window.navigator.userAgent.toLowerCase();return z.isMobile()&&t.includes("android")},isIos(){if(!this.isMobile())return!1;const t=window==null?void 0:window.navigator.userAgent.toLowerCase();return t.includes("iphone")||t.includes("ipad")},isSafari(){return this.isClient()?(window==null?void 0:window.navigator.userAgent.toLowerCase()).includes("safari"):!1},isClient(){return typeof window<"u"},isPairingExpired(t){return t?t-Date.now()<=He.TEN_SEC_MS:!0},isAllowedRetry(t,e=He.ONE_SEC_MS){return Date.now()-t>=e},copyToClopboard(t){navigator.clipboard.writeText(t)},isIframe(){try{return(window==null?void 0:window.self)!==(window==null?void 0:window.top)}catch{return!1}},getPairingExpiry(){return Date.now()+He.FOUR_MINUTES_MS},getNetworkId(t){return t==null?void 0:t.split(":")[1]},getPlainAddress(t){return t==null?void 0:t.split(":")[2]},async wait(t){return new Promise(e=>{setTimeout(e,t)})},debounce(t,e=500){let r;return(...i)=>{function s(){t(...i)}r&&clearTimeout(r),r=setTimeout(s,e)}},isHttpUrl(t){return t.startsWith("http://")||t.startsWith("https://")},formatNativeUrl(t,e){if(z.isHttpUrl(t))return this.formatUniversalUrl(t,e);let r=t;r.includes("://")||(r=t.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`),this.isTelegram()&&this.isAndroid()&&(e=encodeURIComponent(e));const i=encodeURIComponent(e);return{redirect:`${r}wc?uri=${i}`,href:r}},formatUniversalUrl(t,e){if(!z.isHttpUrl(t))return this.formatNativeUrl(t,e);let r=t;r.endsWith("/")||(r=`${r}/`);const i=encodeURIComponent(e);return{redirect:`${r}wc?uri=${i}`,href:r}},getOpenTargetForPlatform(t){return t==="popupWindow"?t:this.isTelegram()?Y.getTelegramSocialProvider()?"_top":"_blank":t},openHref(t,e,r){window==null||window.open(t,this.getOpenTargetForPlatform(e),r||"noreferrer noopener")},returnOpenHref(t,e,r){return window==null?void 0:window.open(t,this.getOpenTargetForPlatform(e),r||"noreferrer noopener")},isTelegram(){return typeof window<"u"&&(!!window.TelegramWebviewProxy||!!window.Telegram||!!window.TelegramWebviewProxyProto)},async preloadImage(t){const e=new Promise((r,i)=>{const s=new Image;s.onload=r,s.onerror=i,s.crossOrigin="anonymous",s.src=t});return Promise.race([e,z.wait(2e3)])},formatBalance(t,e){let r="0.000";if(typeof t=="string"){const i=Number(t);if(i){const s=Math.floor(i*1e3)/1e3;s&&(r=s.toString())}}return`${r}${e?` ${e}`:""}`},formatBalance2(t,e){var i;let r;if(t==="0")r="0";else if(typeof t=="string"){const s=Number(t);s&&(r=(i=s.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:i[0])}return{value:r??"0",rest:r==="0"?"000":"",symbol:e}},getApiUrl(){return J.W3M_API_URL},getBlockchainApiUrl(){return J.BLOCKCHAIN_API_RPC_URL},getAnalyticsUrl(){return J.PULSE_API_URL},getUUID(){return crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})},parseError(t){var e,r;return typeof t=="string"?t:typeof((r=(e=t==null?void 0:t.issues)==null?void 0:e[0])==null?void 0:r.message)=="string"?t.issues[0].message:t instanceof Error?t.message:"Unknown error"},sortRequestedNetworks(t,e=[]){const r={};return e&&t&&(t.forEach((i,s)=>{r[i]=s}),e.sort((i,s)=>{const n=r[i.id],o=r[s.id];return n!==void 0&&o!==void 0?n-o:n!==void 0?-1:o!==void 0?1:0})),e},calculateBalance(t){let e=0;for(const r of t)e+=r.value??0;return e},formatTokenBalance(t){const e=t.toFixed(2),[r,i]=e.split(".");return{dollars:r,pennies:i}},isAddress(t,e="eip155"){switch(e){case"eip155":if(/^(?:0x)?[0-9a-f]{40}$/iu.test(t)){if(/^(?:0x)?[0-9a-f]{40}$/iu.test(t)||/^(?:0x)?[0-9A-F]{40}$/iu.test(t))return!0}else return!1;return!1;case"solana":return/[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(t);default:return!1}},uniqueBy(t,e){const r=new Set;return t.filter(i=>{const s=i[e];return r.has(s)?!1:(r.add(s),!0)})},generateSdkVersion(t,e,r){const i=t.length===0?He.ADAPTER_TYPES.UNIVERSAL:t.map(s=>s.adapterType).join(",");return`${e}-${i}-${r}`},createAccount(t,e,r,i,s){return{namespace:t,address:e,type:r,publicKey:i,path:s}},isCaipAddress(t){if(typeof t!="string")return!1;const e=t.split(":"),r=e[0];return e.filter(Boolean).length===3&&r in J.CHAIN_NAME_MAP},isMac(){const t=window==null?void 0:window.navigator.userAgent.toLowerCase();return t.includes("macintosh")&&!t.includes("safari")},formatTelegramSocialLoginUrl(t){const e=`--${encodeURIComponent(window==null?void 0:window.location.href)}`,r="state=";if(new URL(t).host==="auth.magic.link"){const i="provider_authorization_url=",s=t.substring(t.indexOf(i)+i.length),n=this.injectIntoUrl(decodeURIComponent(s),r,e);return t.replace(s,encodeURIComponent(n))}return this.injectIntoUrl(t,r,e)},injectIntoUrl(t,e,r){const i=t.indexOf(e);if(i===-1)throw new Error(`${e} parameter not found in the URL: ${t}`);const s=t.indexOf("&",i),n=e.length,o=s!==-1?s:t.length,a=t.substring(0,i+n),c=t.substring(i+n,o),l=t.substring(s),d=c+r;return a+d+l}};async function Bs(...t){const e=await fetch(...t);if(!e.ok)throw new Error(`HTTP status code: ${e.status}`,{cause:e});return e}class za{constructor({baseUrl:e,clientId:r}){this.baseUrl=e,this.clientId=r}async get({headers:e,signal:r,cache:i,...s}){const n=this.createUrl(s);return(await Bs(n,{method:"GET",headers:e,signal:r,cache:i})).json()}async getBlob({headers:e,signal:r,...i}){const s=this.createUrl(i);return(await Bs(s,{method:"GET",headers:e,signal:r})).blob()}async post({body:e,headers:r,signal:i,...s}){const n=this.createUrl(s);return(await Bs(n,{method:"POST",headers:r,body:e?JSON.stringify(e):void 0,signal:i})).json()}async put({body:e,headers:r,signal:i,...s}){const n=this.createUrl(s);return(await Bs(n,{method:"PUT",headers:r,body:e?JSON.stringify(e):void 0,signal:i})).json()}async delete({body:e,headers:r,signal:i,...s}){const n=this.createUrl(s);return(await Bs(n,{method:"DELETE",headers:r,body:e?JSON.stringify(e):void 0,signal:i})).json()}createUrl({path:e,params:r}){const i=new URL(e,this.baseUrl);return r&&Object.entries(r).forEach(([s,n])=>{n&&i.searchParams.append(s,n)}),this.clientId&&i.searchParams.append("clientId",this.clientId),i}}const Ow={handleSolanaDeeplinkRedirect(t){if(b.state.activeChain===J.CHAIN.SOLANA){const e=window.location.href,r=encodeURIComponent(e);if(t==="Phantom"&&!("phantom"in window)){const i=e.startsWith("https")?"https":"http",s=e.split("/")[2],n=encodeURIComponent(`${i}://${s}`);window.location.href=`https://phantom.app/ul/browse/${r}?ref=${n}`}t==="Coinbase Wallet"&&!("coinbaseSolana"in window)&&(window.location.href=`https://go.cb-w.com/dapp?cb_url=${r}`)}}},bt=Pe({walletImages:{},networkImages:{},chainImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),wt={state:bt,subscribeNetworkImages(t){return it(bt.networkImages,()=>t(bt.networkImages))},subscribeKey(t,e){return ct(bt,t,e)},subscribe(t){return it(bt,()=>t(bt))},setWalletImage(t,e){bt.walletImages[t]=e},setNetworkImage(t,e){bt.networkImages[t]=e},setChainImage(t,e){bt.chainImages[t]=e},setConnectorImage(t,e){bt.connectorImages={...bt.connectorImages,[t]:e}},setTokenImage(t,e){bt.tokenImages[t]=e},setCurrencyImage(t,e){bt.currencyImages[t]=e}},$w={eip155:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",solana:"a1b58899-f671-4276-6a5e-56ca5bd59700",polkadot:"",bip122:"0b4838db-0161-4ffe-022d-532bf03dba00"},gc=Pe({networkImagePromises:{}}),qe={async fetchWalletImage(t){if(t)return await F._fetchWalletImage(t),this.getWalletImageById(t)},async fetchNetworkImage(t){return t?this.getNetworkImageById(t)||(gc.networkImagePromises[t]||(gc.networkImagePromises[t]=F._fetchNetworkImage(t)),await gc.networkImagePromises[t],this.getNetworkImageById(t)):void 0},getWalletImageById(t){if(t)return wt.state.walletImages[t]},getWalletImage(t){if(t!=null&&t.image_url)return t==null?void 0:t.image_url;if(t!=null&&t.image_id)return wt.state.walletImages[t.image_id]},getNetworkImage(t){var e,r,i;if((e=t==null?void 0:t.assets)!=null&&e.imageUrl)return(r=t==null?void 0:t.assets)==null?void 0:r.imageUrl;if((i=t==null?void 0:t.assets)!=null&&i.imageId)return wt.state.networkImages[t.assets.imageId]},getNetworkImageById(t){if(t)return wt.state.networkImages[t]},getConnectorImage(t){if(t!=null&&t.imageUrl)return t.imageUrl;if(t!=null&&t.imageId)return wt.state.connectorImages[t.imageId]},getChainImage(t){return wt.state.networkImages[$w[t]]}},Rw={getFeatureValue(t,e){const r=e==null?void 0:e[t];return r===void 0?He.DEFAULT_FEATURES[t]:r},filterSocialsByPlatform(t){if(!t||!t.length)return t;if(z.isTelegram()){if(z.isIos())return t.filter(e=>e!=="google");if(z.isMac())return t.filter(e=>e!=="x");if(z.isAndroid())return t.filter(e=>!["facebook","x"].includes(e))}return t}},ne=Pe({features:He.DEFAULT_FEATURES,projectId:"",sdkType:"appkit",sdkVersion:"html-wagmi-undefined",defaultAccountTypes:{solana:"eoa",bip122:"payment",polkadot:"eoa",eip155:"smartAccount"},enableNetworkSwitch:!0}),L={state:ne,subscribeKey(t,e){return ct(ne,t,e)},setOptions(t){Object.assign(ne,t)},setFeatures(t){if(!t)return;ne.features||(ne.features=He.DEFAULT_FEATURES);const e={...ne.features,...t};ne.features=e,ne.features.socials&&(ne.features.socials=Rw.filterSocialsByPlatform(ne.features.socials))},setProjectId(t){ne.projectId=t},setCustomRpcUrls(t){ne.customRpcUrls=t},setAllWallets(t){ne.allWallets=t},setIncludeWalletIds(t){ne.includeWalletIds=t},setExcludeWalletIds(t){ne.excludeWalletIds=t},setFeaturedWalletIds(t){ne.featuredWalletIds=t},setTokens(t){ne.tokens=t},setTermsConditionsUrl(t){ne.termsConditionsUrl=t},setPrivacyPolicyUrl(t){ne.privacyPolicyUrl=t},setCustomWallets(t){ne.customWallets=t},setIsSiweEnabled(t){ne.isSiweEnabled=t},setIsUniversalProvider(t){ne.isUniversalProvider=t},setSdkVersion(t){ne.sdkVersion=t},setMetadata(t){ne.metadata=t},setDisableAppend(t){ne.disableAppend=t},setEIP6963Enabled(t){ne.enableEIP6963=t},setDebug(t){ne.debug=t},setEnableWalletConnect(t){ne.enableWalletConnect=t},setEnableWalletGuide(t){ne.enableWalletGuide=t},setEnableAuthLogger(t){ne.enableAuthLogger=t},setEnableWallets(t){ne.enableWallets=t},setHasMultipleAddresses(t){ne.hasMultipleAddresses=t},setSIWX(t){ne.siwx=t},setConnectMethodsOrder(t){ne.features={...ne.features,connectMethodsOrder:t}},setWalletFeaturesOrder(t){ne.features={...ne.features,walletFeaturesOrder:t}},setSocialsOrder(t){ne.features={...ne.features,socials:t}},setCollapseWallets(t){ne.features={...ne.features,collapseWallets:t}},setEnableEmbedded(t){ne.enableEmbedded=t},setAllowUnsupportedChain(t){ne.allowUnsupportedChain=t},setManualWCControl(t){ne.manualWCControl=t},setEnableNetworkSwitch(t){ne.enableNetworkSwitch=t},setDefaultAccountTypes(t={}){Object.entries(t).forEach(([e,r])=>{r&&(ne.defaultAccountTypes[e]=r)})},setUniversalProviderConfigOverride(t){ne.universalProviderConfigOverride=t},getUniversalProviderConfigOverride(){return ne.universalProviderConfigOverride},getSnapshot(){return An(ne)}},Sr=Pe({message:"",variant:"info",open:!1}),Ur={state:Sr,subscribeKey(t,e){return ct(Sr,t,e)},open(t,e){const{debug:r}=L.state,{shortMessage:i,longMessage:s}=t;r&&(Sr.message=i,Sr.variant=e,Sr.open=!0),s&&console.error(typeof s=="function"?s():s)},close(){Sr.open=!1,Sr.message="",Sr.variant="info"}},Lw=z.getAnalyticsUrl(),Mw=new za({baseUrl:Lw,clientId:null}),Bw=["MODAL_CREATED"],nr=Pe({timestamp:Date.now(),reportedErrors:{},data:{type:"track",event:"MODAL_CREATED"}}),he={state:nr,subscribe(t){return it(nr,()=>t(nr))},getSdkProperties(){const{projectId:t,sdkType:e,sdkVersion:r}=L.state;return{projectId:t,st:e,sv:r||"html-wagmi-4.2.2"}},async _sendAnalyticsEvent(t){try{const e=ee.state.address;if(Bw.includes(t.data.event)||typeof window>"u")return;await Mw.post({path:"/e",params:he.getSdkProperties(),body:{eventId:z.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:t.timestamp,props:{...t.data,address:e}}}),nr.reportedErrors.FORBIDDEN=!1}catch(e){e instanceof Error&&e.cause instanceof Response&&e.cause.status===J.HTTP_STATUS_CODES.FORBIDDEN&&!nr.reportedErrors.FORBIDDEN&&(Ur.open({shortMessage:"Invalid App Configuration",longMessage:`Origin ${hn()?window.origin:"uknown"} not found on Allowlist - update configuration on cloud.reown.com`},"error"),nr.reportedErrors.FORBIDDEN=!0)}},sendEvent(t){var e;nr.timestamp=Date.now(),nr.data=t,(e=L.state.features)!=null&&e.analytics&&he._sendAnalyticsEvent(nr)}},Uw=["1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79","fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa","a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393"],Dw=z.getApiUrl(),kt=new za({baseUrl:Dw,clientId:null}),jw=40,xu=4,zw=20,Ie=Pe({promises:{},page:1,count:0,featured:[],allFeatured:[],recommended:[],allRecommended:[],wallets:[],search:[],isAnalyticsEnabled:!1,excludedWallets:[],isFetchingRecommendedWallets:!1}),F={state:Ie,subscribeKey(t,e){return ct(Ie,t,e)},_getSdkProperties(){const{projectId:t,sdkType:e,sdkVersion:r}=L.state;return{projectId:t,st:e||"appkit",sv:r||"html-wagmi-4.2.2"}},_filterOutExtensions(t){return L.state.isUniversalProvider?t.filter(e=>!!(e.mobile_link||e.desktop_link||e.webapp_link)):t},async _fetchWalletImage(t){const e=`${kt.baseUrl}/getWalletImage/${t}`,r=await kt.getBlob({path:e,params:F._getSdkProperties()});wt.setWalletImage(t,URL.createObjectURL(r))},async _fetchNetworkImage(t){const e=`${kt.baseUrl}/public/getAssetImage/${t}`,r=await kt.getBlob({path:e,params:F._getSdkProperties()});wt.setNetworkImage(t,URL.createObjectURL(r))},async _fetchConnectorImage(t){const e=`${kt.baseUrl}/public/getAssetImage/${t}`,r=await kt.getBlob({path:e,params:F._getSdkProperties()});wt.setConnectorImage(t,URL.createObjectURL(r))},async _fetchCurrencyImage(t){const e=`${kt.baseUrl}/public/getCurrencyImage/${t}`,r=await kt.getBlob({path:e,params:F._getSdkProperties()});wt.setCurrencyImage(t,URL.createObjectURL(r))},async _fetchTokenImage(t){const e=`${kt.baseUrl}/public/getTokenImage/${t}`,r=await kt.getBlob({path:e,params:F._getSdkProperties()});wt.setTokenImage(t,URL.createObjectURL(r))},async fetchNetworkImages(){var e;const t=(e=b.getAllRequestedCaipNetworks())==null?void 0:e.map(({assets:r})=>r==null?void 0:r.imageId).filter(Boolean).filter(r=>!qe.getNetworkImageById(r));t&&await Promise.allSettled(t.map(r=>F._fetchNetworkImage(r)))},async fetchConnectorImages(){const{connectors:t}=V.state,e=t.map(({imageId:r})=>r).filter(Boolean);await Promise.allSettled(e.map(r=>F._fetchConnectorImage(r)))},async fetchCurrencyImages(t=[]){await Promise.allSettled(t.map(e=>F._fetchCurrencyImage(e)))},async fetchTokenImages(t=[]){await Promise.allSettled(t.map(e=>F._fetchTokenImage(e)))},async fetchWallets(t){var r,i;const e=t.exclude??[];return F._getSdkProperties().sv.startsWith("html-core-")&&e.push(...Uw),await kt.get({path:"/getWallets",params:{...F._getSdkProperties(),...t,page:String(t.page),entries:String(t.entries),include:(r=t.include)==null?void 0:r.join(","),exclude:(i=t.exclude)==null?void 0:i.join(",")}})},async fetchFeaturedWallets(){const{featuredWalletIds:t}=L.state;if(t!=null&&t.length){const e={...F._getSdkProperties(),page:1,entries:(t==null?void 0:t.length)??xu,include:t},{data:r}=await F.fetchWallets(e);r.sort((s,n)=>t.indexOf(s.id)-t.indexOf(n.id));const i=r.map(s=>s.image_id).filter(Boolean);await Promise.allSettled(i.map(s=>F._fetchWalletImage(s))),Ie.featured=r,Ie.allFeatured=r}},async fetchRecommendedWallets(){try{Ie.isFetchingRecommendedWallets=!0;const{includeWalletIds:t,excludeWalletIds:e,featuredWalletIds:r}=L.state,i=[...e??[],...r??[]].filter(Boolean),s=b.getRequestedCaipNetworkIds().join(","),n={page:1,entries:xu,include:t,exclude:i,chains:s},{data:o,count:a}=await F.fetchWallets(n),c=Y.getRecentWallets(),l=o.map(u=>u.image_id).filter(Boolean),d=c.map(u=>u.image_id).filter(Boolean);await Promise.allSettled([...l,...d].map(u=>F._fetchWalletImage(u))),Ie.recommended=o,Ie.allRecommended=o,Ie.count=a??0}catch{}finally{Ie.isFetchingRecommendedWallets=!1}},async fetchWalletsByPage({page:t}){const{includeWalletIds:e,excludeWalletIds:r,featuredWalletIds:i}=L.state,s=b.getRequestedCaipNetworkIds().join(","),n=[...Ie.recommended.map(({id:d})=>d),...r??[],...i??[]].filter(Boolean),o={page:t,entries:jw,include:e,exclude:n,chains:s},{data:a,count:c}=await F.fetchWallets(o),l=a.slice(0,zw).map(d=>d.image_id).filter(Boolean);await Promise.allSettled(l.map(d=>F._fetchWalletImage(d))),Ie.wallets=z.uniqueBy([...Ie.wallets,...F._filterOutExtensions(a)],"id"),Ie.count=c>Ie.count?c:Ie.count,Ie.page=t},async initializeExcludedWallets({ids:t}){const e=b.getRequestedCaipNetworkIds().join(","),r={page:1,entries:t.length,include:t,chains:e},{data:i}=await F.fetchWallets(r);i&&i.forEach(s=>{Ie.excludedWallets.push({rdns:s.rdns,name:s.name})})},async searchWallet({search:t,badge:e}){const{includeWalletIds:r,excludeWalletIds:i}=L.state,s=b.getRequestedCaipNetworkIds().join(",");Ie.search=[];const n={page:1,entries:100,search:t==null?void 0:t.trim(),badge_type:e,include:r,exclude:i,chains:s},{data:o}=await F.fetchWallets(n);he.sendEvent({type:"track",event:"SEARCH_WALLET",properties:{badge:e??"",search:t??""}});const a=o.map(c=>c.image_id).filter(Boolean);await Promise.allSettled([...a.map(c=>F._fetchWalletImage(c)),z.wait(300)]),Ie.search=F._filterOutExtensions(o)},initPromise(t,e){return Ie.promises[t]||(Ie.promises[t]=e())},prefetch({fetchConnectorImages:t=!0,fetchFeaturedWallets:e=!0,fetchRecommendedWallets:r=!0,fetchNetworkImages:i=!0}={}){const s=[t&&F.initPromise("connectorImages",F.fetchConnectorImages),e&&F.initPromise("featuredWallets",F.fetchFeaturedWallets),r&&F.initPromise("recommendedWallets",F.fetchRecommendedWallets),i&&F.initPromise("networkImages",F.fetchNetworkImages)].filter(Boolean);return Promise.allSettled(s)},prefetchAnalyticsConfig(){var t;(t=L.state.features)!=null&&t.analytics&&F.fetchAnalyticsConfig()},async fetchAnalyticsConfig(){try{const{isAnalyticsEnabled:t}=await kt.get({path:"/getAnalyticsConfig",params:F._getSdkProperties()});L.setFeatures({analytics:t})}catch{L.setFeatures({analytics:!1})}},setFilterByNamespace(t){if(!t){Ie.featured=Ie.allFeatured,Ie.recommended=Ie.allRecommended;return}const e=b.getRequestedCaipNetworkIds().join(",");Ie.featured=Ie.allFeatured.filter(r=>{var i;return(i=r.chains)==null?void 0:i.some(s=>e.includes(s))}),Ie.recommended=Ie.allRecommended.filter(r=>{var i;return(i=r.chains)==null?void 0:i.some(s=>e.includes(s))})}},Ee=Pe({view:"Connect",history:["Connect"],transactionStack:[]}),W={state:Ee,subscribeKey(t,e){return ct(Ee,t,e)},pushTransactionStack(t){Ee.transactionStack.push(t)},popTransactionStack(t){var r,i;const e=Ee.transactionStack.pop();if(e)if(t)this.goBack(),(r=e==null?void 0:e.onCancel)==null||r.call(e);else{if(e.goBack)this.goBack();else if(e.replace){const s=Ee.history.indexOf("ConnectingSiwe");s>0?this.goBackToIndex(s-1):(ve.close(),Ee.history=[])}else e.view&&this.reset(e.view);(i=e==null?void 0:e.onSuccess)==null||i.call(e)}},push(t,e){t!==Ee.view&&(Ee.view=t,Ee.history.push(t),Ee.data=e)},reset(t,e){Ee.view=t,Ee.history=[t],Ee.data=e},replace(t,e){Ee.history.at(-1)===t||(Ee.view=t,Ee.history[Ee.history.length-1]=t,Ee.data=e)},goBack(){var e;const t=!b.state.activeCaipAddress&&this.state.view==="ConnectingFarcaster";if(Ee.history.length>1&&!Ee.history.includes("UnsupportedChain")){Ee.history.pop();const[r]=Ee.history.slice(-1);r&&(Ee.view=r)}else ve.close();(e=Ee.data)!=null&&e.wallet&&(Ee.data.wallet=void 0),setTimeout(()=>{var r,i,s;if(t){ee.setFarcasterUrl(void 0,b.state.activeChain);const n=V.getAuthConnector();(r=n==null?void 0:n.provider)==null||r.reload();const o=An(L.state);(s=(i=n==null?void 0:n.provider)==null?void 0:i.syncDappData)==null||s.call(i,{metadata:o.metadata,sdkVersion:o.sdkVersion,projectId:o.projectId,sdkType:o.sdkType})}},100)},goBackToIndex(t){if(Ee.history.length>1){Ee.history=Ee.history.slice(0,t+1);const[e]=Ee.history.slice(-1);e&&(Ee.view=e)}}},or=Pe({themeMode:"dark",themeVariables:{},w3mThemeVariables:void 0}),ze={state:or,subscribe(t){return it(or,()=>t(or))},setThemeMode(t){or.themeMode=t;try{const e=V.getAuthConnector();if(e){const r=ze.getSnapshot().themeVariables;e.provider.syncTheme({themeMode:t,themeVariables:r,w3mThemeVariables:Mr(r,t)})}}catch{console.info("Unable to sync theme to auth connector")}},setThemeVariables(t){or.themeVariables={...or.themeVariables,...t};try{const e=V.getAuthConnector();if(e){const r=ze.getSnapshot().themeVariables;e.provider.syncTheme({themeVariables:r,w3mThemeVariables:Mr(or.themeVariables,or.themeMode)})}}catch{console.info("Unable to sync theme to auth connector")}},getSnapshot(){return An(or)}},Ap={eip155:void 0,solana:void 0,polkadot:void 0,bip122:void 0},Ae=Pe({allConnectors:[],connectors:[],activeConnector:void 0,filterByNamespace:void 0,activeConnectorIds:{...Ap}}),V={state:Ae,subscribe(t){return it(Ae,()=>{t(Ae)})},subscribeKey(t,e){return ct(Ae,t,e)},initialize(t){t.forEach(e=>{const r=Y.getConnectedConnectorId(e);r&&this.setConnectorId(r,e)})},setActiveConnector(t){t&&(Ae.activeConnector=Ni(t))},setConnectors(t){t.filter(e=>!Ae.allConnectors.some(r=>r.id===e.id&&this.getConnectorName(r.name)===this.getConnectorName(e.name)&&r.chain===e.chain)).forEach(e=>{e.type!=="MULTI_CHAIN"&&Ae.allConnectors.push(Ni(e))}),Ae.connectors=this.mergeMultiChainConnectors(Ae.allConnectors)},removeAdapter(t){Ae.allConnectors=Ae.allConnectors.filter(e=>e.chain!==t),Ae.connectors=this.mergeMultiChainConnectors(Ae.allConnectors)},mergeMultiChainConnectors(t){const e=this.generateConnectorMapByName(t),r=[];return e.forEach(i=>{const s=i[0],n=(s==null?void 0:s.id)===J.CONNECTOR_ID.AUTH;i.length>1&&s?r.push({name:s.name,imageUrl:s.imageUrl,imageId:s.imageId,connectors:[...i],type:n?"AUTH":"MULTI_CHAIN",chain:"eip155",id:(s==null?void 0:s.id)||""}):s&&r.push(s)}),r},generateConnectorMapByName(t){const e=new Map;return t.forEach(r=>{const{name:i}=r,s=this.getConnectorName(i);if(!s)return;const n=e.get(s)||[];n.find(o=>o.chain===r.chain)||n.push(r),e.set(s,n)}),e},getConnectorName(t){return t&&({"Trust Wallet":"Trust"}[t]||t)},getUniqueConnectorsByName(t){const e=[];return t.forEach(r=>{e.find(i=>i.chain===r.chain)||e.push(r)}),e},addConnector(t){var e,r,i;if(t.id===J.CONNECTOR_ID.AUTH){const s=t,n=An(L.state),o=ze.getSnapshot().themeMode,a=ze.getSnapshot().themeVariables;(r=(e=s==null?void 0:s.provider)==null?void 0:e.syncDappData)==null||r.call(e,{metadata:n.metadata,sdkVersion:n.sdkVersion,projectId:n.projectId,sdkType:n.sdkType}),(i=s==null?void 0:s.provider)==null||i.syncTheme({themeMode:o,themeVariables:a,w3mThemeVariables:Mr(a,o)}),this.setConnectors([t])}else this.setConnectors([t])},getAuthConnector(t){var i;const e=t||b.state.activeChain,r=Ae.connectors.find(s=>s.id===J.CONNECTOR_ID.AUTH);if(r)return(i=r==null?void 0:r.connectors)!=null&&i.length?r.connectors.find(s=>s.chain===e):r},getAnnouncedConnectorRdns(){return Ae.connectors.filter(t=>t.type==="ANNOUNCED").map(t=>{var e;return(e=t.info)==null?void 0:e.rdns})},getConnectorById(t){return Ae.allConnectors.find(e=>e.id===t)},getConnector(t,e){return Ae.allConnectors.filter(r=>r.chain===b.state.activeChain).find(r=>{var i;return r.explorerId===t||((i=r.info)==null?void 0:i.rdns)===e})},syncIfAuthConnector(t){var n,o;if(t.id!=="ID_AUTH")return;const e=t,r=An(L.state),i=ze.getSnapshot().themeMode,s=ze.getSnapshot().themeVariables;(o=(n=e==null?void 0:e.provider)==null?void 0:n.syncDappData)==null||o.call(n,{metadata:r.metadata,sdkVersion:r.sdkVersion,sdkType:r.sdkType,projectId:r.projectId}),e.provider.syncTheme({themeMode:i,themeVariables:s,w3mThemeVariables:Mr(s,i)})},getConnectorsByNamespace(t){const e=Ae.allConnectors.filter(r=>r.chain===t);return this.mergeMultiChainConnectors(e)},selectWalletConnector(t){const e=V.getConnector(t.id,t.rdns);b.state.activeChain===J.CHAIN.SOLANA&&Ow.handleSolanaDeeplinkRedirect((e==null?void 0:e.name)||t.name||""),e?W.push("ConnectingExternal",{connector:e}):W.push("ConnectingWalletConnect",{wallet:t})},getConnectors(t){return t?this.getConnectorsByNamespace(t):this.mergeMultiChainConnectors(Ae.allConnectors)},setFilterByNamespace(t){Ae.filterByNamespace=t,Ae.connectors=this.getConnectors(t),F.setFilterByNamespace(t)},setConnectorId(t,e){t&&(Ae.activeConnectorIds={...Ae.activeConnectorIds,[e]:t},Y.setConnectedConnectorId(e,t))},removeConnectorId(t){Ae.activeConnectorIds={...Ae.activeConnectorIds,[t]:void 0},Y.deleteConnectedConnectorId(t)},getConnectorId(t){if(t)return Ae.activeConnectorIds[t]},isConnected(t){return t?!!Ae.activeConnectorIds[t]:Object.values(Ae.activeConnectorIds).some(e=>!!e)},resetConnectorIds(){Ae.activeConnectorIds={...Ap}}};function yo(t,e){return V.getConnectorId(t)===e}function Hw(t){const e=Array.from(b.state.chains.keys());let r=[];return t?(r.push([t,b.state.chains.get(t)]),yo(t,J.CONNECTOR_ID.WALLET_CONNECT)?e.forEach(i=>{i!==t&&yo(i,J.CONNECTOR_ID.WALLET_CONNECT)&&r.push([i,b.state.chains.get(i)])}):yo(t,J.CONNECTOR_ID.AUTH)&&e.forEach(i=>{i!==t&&yo(i,J.CONNECTOR_ID.AUTH)&&r.push([i,b.state.chains.get(i)])})):r=Array.from(b.state.chains.entries()),r}const Rr={SAFE_RPC_METHODS:["eth_accounts","eth_blockNumber","eth_call","eth_chainId","eth_estimateGas","eth_feeHistory","eth_gasPrice","eth_getAccount","eth_getBalance","eth_getBlockByHash","eth_getBlockByNumber","eth_getBlockReceipts","eth_getBlockTransactionCountByHash","eth_getBlockTransactionCountByNumber","eth_getCode","eth_getFilterChanges","eth_getFilterLogs","eth_getLogs","eth_getProof","eth_getStorageAt","eth_getTransactionByBlockHashAndIndex","eth_getTransactionByBlockNumberAndIndex","eth_getTransactionByHash","eth_getTransactionCount","eth_getTransactionReceipt","eth_getUncleCountByBlockHash","eth_getUncleCountByBlockNumber","eth_maxPriorityFeePerGas","eth_newBlockFilter","eth_newFilter","eth_newPendingTransactionFilter","eth_sendRawTransaction","eth_syncing","eth_uninstallFilter","wallet_getCapabilities","wallet_getCallsStatus","eth_getUserOperationReceipt","eth_estimateUserOperationGas","eth_getUserOperationByHash","eth_supportedEntryPoints","wallet_getAssets"],NOT_SAFE_RPC_METHODS:["personal_sign","eth_signTypedData_v4","eth_sendTransaction","solana_signMessage","solana_signTransaction","solana_signAllTransactions","solana_signAndSendTransaction","wallet_sendCalls","wallet_grantPermissions","wallet_revokePermissions","eth_sendUserOperation"],GET_CHAIN_ID:"eth_chainId",RPC_METHOD_NOT_ALLOWED_MESSAGE:"Requested RPC call is not allowed",RPC_METHOD_NOT_ALLOWED_UI_MESSAGE:"Action not allowed",ACCOUNT_TYPES:{EOA:"eoa",SMART_ACCOUNT:"smartAccount"}},pi=Object.freeze({message:"",variant:"success",svg:void 0,open:!1,autoClose:!0}),De=Pe({...pi}),_e={state:De,subscribeKey(t,e){return ct(De,t,e)},showLoading(t,e={}){this._showMessage({message:t,variant:"loading",...e})},showSuccess(t){this._showMessage({message:t,variant:"success"})},showSvg(t,e){this._showMessage({message:t,svg:e})},showError(t){const e=z.parseError(t);this._showMessage({message:e,variant:"error"})},hide(){De.message=pi.message,De.variant=pi.variant,De.svg=pi.svg,De.open=pi.open,De.autoClose=pi.autoClose},_showMessage({message:t,svg:e,variant:r="success",autoClose:i=pi.autoClose}){De.open?(De.open=!1,setTimeout(()=>{De.message=t,De.variant=r,De.svg=e,De.open=!0,De.autoClose=i},150)):(De.message=t,De.variant=r,De.svg=e,De.open=!0,De.autoClose=i)}},Dr={getSIWX(){return L.state.siwx},async initializeIfEnabled(){var n;const t=L.state.siwx,e=b.getActiveCaipAddress();if(!(t&&e))return;const[r,i,s]=e.split(":");if(b.checkIfSupportedNetwork(r))try{if((await t.getSessions(`${r}:${i}`,s)).length)return;await ve.open({view:"SIWXSignMessage"})}catch(o){console.error("SIWXUtil:initializeIfEnabled",o),he.sendEvent({type:"track",event:"SIWX_AUTH_ERROR",properties:this.getSIWXEventProperties()}),await((n=X._getClient())==null?void 0:n.disconnect().catch(console.error)),W.reset("Connect"),_e.showError("A problem occurred while trying initialize authentication")}},async requestSignMessage(){const t=L.state.siwx,e=z.getPlainAddress(b.getActiveCaipAddress()),r=b.getActiveCaipNetwork(),i=X._getClient();if(!t)throw new Error("SIWX is not enabled");if(!e)throw new Error("No ActiveCaipAddress found");if(!r)throw new Error("No ActiveCaipNetwork or client found");if(!i)throw new Error("No ConnectionController client found");try{const s=await t.createMessage({chainId:r.caipNetworkId,accountAddress:e}),n=s.toString();V.getConnectorId(r.chainNamespace)===J.CONNECTOR_ID.AUTH&&W.pushTransactionStack({view:null,goBack:!1,replace:!0});const o=await i.signMessage(n);await t.addSession({data:s,message:n,signature:o}),ve.close(),he.sendEvent({type:"track",event:"SIWX_AUTH_SUCCESS",properties:this.getSIWXEventProperties()})}catch(s){const n=this.getSIWXEventProperties();(!ve.state.open||W.state.view==="ApproveTransaction")&&await ve.open({view:"SIWXSignMessage"}),n.isSmartAccount?_e.showError("This application might not support Smart Accounts"):_e.showError("Signature declined"),he.sendEvent({type:"track",event:"SIWX_AUTH_ERROR",properties:n}),console.error("SWIXUtil:requestSignMessage",s)}},async cancelSignMessage(){var t,e;try{(e=(t=this.getSIWX())==null?void 0:t.getRequired)!=null&&e.call(t)?await X.disconnect():ve.close(),W.reset("Connect"),he.sendEvent({event:"CLICK_CANCEL_SIWX",type:"track",properties:this.getSIWXEventProperties()})}catch(r){console.error("SIWXUtil:cancelSignMessage",r)}},async getSessions(){const t=L.state.siwx,e=z.getPlainAddress(b.getActiveCaipAddress()),r=b.getActiveCaipNetwork();return t&&e&&r?t.getSessions(r.caipNetworkId,e):[]},async isSIWXCloseDisabled(){var e;const t=this.getSIWX();if(t){const r=W.state.view==="ApproveTransaction",i=W.state.view==="SIWXSignMessage";if(r||i)return((e=t.getRequired)==null?void 0:e.call(t))&&(await this.getSessions()).length===0}return!1},async universalProviderAuthenticate({universalProvider:t,chains:e,methods:r}){var a,c,l;const i=Dr.getSIWX(),s=new Set(e.map(d=>d.split(":")[0]));if(!i||s.size!==1||!s.has("eip155"))return!1;const n=await i.createMessage({chainId:((a=b.getActiveCaipNetwork())==null?void 0:a.caipNetworkId)||"",accountAddress:""}),o=await t.authenticate({nonce:n.nonce,domain:n.domain,uri:n.uri,exp:n.expirationTime,iat:n.issuedAt,nbf:n.notBefore,requestId:n.requestId,version:n.version,resources:n.resources,statement:n.statement,chainId:n.chainId,methods:r,chains:[n.chainId,...e.filter(d=>d!==n.chainId)]});if(_e.showLoading("Authenticating...",{autoClose:!1}),ee.setConnectedWalletInfo({...o.session.peer.metadata,name:o.session.peer.metadata.name,icon:(c=o.session.peer.metadata.icons)==null?void 0:c[0],type:"WALLET_CONNECT"},Array.from(s)[0]),(l=o==null?void 0:o.auths)==null?void 0:l.length){const d=o.auths.map(u=>{const h=t.client.formatAuthMessage({request:u.p,iss:u.p.iss});return{data:{...u.p,accountAddress:u.p.iss.split(":").slice(-1).join(""),chainId:u.p.iss.split(":").slice(2,4).join(":"),uri:u.p.aud,version:u.p.version||n.version,expirationTime:u.p.exp,issuedAt:u.p.iat,notBefore:u.p.nbf},message:h,signature:u.s.s,cacao:u}});try{await i.setSessions(d),he.sendEvent({type:"track",event:"SIWX_AUTH_SUCCESS",properties:Dr.getSIWXEventProperties()})}catch(u){throw console.error("SIWX:universalProviderAuth - failed to set sessions",u),he.sendEvent({type:"track",event:"SIWX_AUTH_ERROR",properties:Dr.getSIWXEventProperties()}),await t.disconnect().catch(console.error),u}finally{_e.hide()}}return!0},getSIWXEventProperties(){var e,r;const t=b.state.activeChain;return{network:((e=b.state.activeCaipNetwork)==null?void 0:e.caipNetworkId)||"",isSmartAccount:((r=ee.state.preferredAccountTypes)==null?void 0:r[t])===Rr.ACCOUNT_TYPES.SMART_ACCOUNT}},async clearSessions(){const t=this.getSIWX();t&&await t.setSessions([])}},Te=Pe({transactions:[],coinbaseTransactions:{},transactionsByYear:{},lastNetworkInView:void 0,loading:!1,empty:!1,next:void 0}),qw={state:Te,subscribe(t){return it(Te,()=>t(Te))},setLastNetworkInView(t){Te.lastNetworkInView=t},async fetchTransactions(t,e){var r,i;if(!t)throw new Error("Transactions can't be fetched without an accountAddress");Te.loading=!0;try{const s=await oe.fetchTransactions({account:t,cursor:Te.next,onramp:e,cache:e==="coinbase"?"no-cache":void 0,chainId:(r=b.state.activeCaipNetwork)==null?void 0:r.caipNetworkId}),n=this.filterSpamTransactions(s.data),o=this.filterByConnectedChain(n),a=[...Te.transactions,...o];Te.loading=!1,e==="coinbase"?Te.coinbaseTransactions=this.groupTransactionsByYearAndMonth(Te.coinbaseTransactions,s.data):(Te.transactions=a,Te.transactionsByYear=this.groupTransactionsByYearAndMonth(Te.transactionsByYear,o)),Te.empty=a.length===0,Te.next=s.next?s.next:void 0}catch{const s=b.state.activeChain;he.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:t,projectId:L.state.projectId,cursor:Te.next,isSmartAccount:((i=ee.state.preferredAccountTypes)==null?void 0:i[s])===Rr.ACCOUNT_TYPES.SMART_ACCOUNT}}),_e.showError("Failed to fetch transactions"),Te.loading=!1,Te.empty=!0,Te.next=void 0}},groupTransactionsByYearAndMonth(t={},e=[]){const r=t;return e.forEach(i=>{const s=new Date(i.metadata.minedAt).getFullYear(),n=new Date(i.metadata.minedAt).getMonth(),o=r[s]??{},a=(o[n]??[]).filter(c=>c.id!==i.id);r[s]={...o,[n]:[...a,i].sort((c,l)=>new Date(l.metadata.minedAt).getTime()-new Date(c.metadata.minedAt).getTime())}}),r},filterSpamTransactions(t){return t.filter(e=>!e.transfers.every(r=>{var i;return((i=r.nft_info)==null?void 0:i.flags.is_spam)===!0}))},filterByConnectedChain(t){var r;const e=(r=b.state.activeCaipNetwork)==null?void 0:r.caipNetworkId;return t.filter(i=>i.metadata.chain===e)},clearCursor(){Te.next=void 0},resetTransactions(){Te.transactions=[],Te.transactionsByYear={},Te.lastNetworkInView=void 0,Te.loading=!1,Te.empty=!1,Te.next=void 0}},Oe=Pe({wcError:!1,buffering:!1,status:"disconnected"});let Zi;const X={state:Oe,subscribeKey(t,e){return ct(Oe,t,e)},_getClient(){return Oe._client},setClient(t){Oe._client=Ni(t)},async connectWalletConnect(){var t,e,r,i;if(z.isTelegram()||z.isSafari()&&z.isIos()){if(Zi){await Zi,Zi=void 0;return}if(!z.isPairingExpired(Oe==null?void 0:Oe.wcPairingExpiry)){const s=Oe.wcUri;Oe.wcUri=s;return}Zi=(e=(t=this._getClient())==null?void 0:t.connectWalletConnect)==null?void 0:e.call(t).catch(()=>{}),this.state.status="connecting",await Zi,Zi=void 0,Oe.wcPairingExpiry=void 0,this.state.status="connected"}else await((i=(r=this._getClient())==null?void 0:r.connectWalletConnect)==null?void 0:i.call(r))},async connectExternal(t,e,r=!0){var i,s;await((s=(i=this._getClient())==null?void 0:i.connectExternal)==null?void 0:s.call(i,t)),r&&b.setActiveNamespace(e)},async reconnectExternal(t){var r,i;await((i=(r=this._getClient())==null?void 0:r.reconnectExternal)==null?void 0:i.call(r,t));const e=t.chain||b.state.activeChain;e&&V.setConnectorId(t.id,e)},async setPreferredAccountType(t,e){var i;ve.setLoading(!0,b.state.activeChain);const r=V.getAuthConnector();r&&(ee.setPreferredAccountType(t,e),await r.provider.setPreferredAccount(t),Y.setPreferredAccountTypes(ee.state.preferredAccountTypes??{[e]:t}),await this.reconnectExternal(r),ve.setLoading(!1,b.state.activeChain),he.sendEvent({type:"track",event:"SET_PREFERRED_ACCOUNT_TYPE",properties:{accountType:t,network:((i=b.state.activeCaipNetwork)==null?void 0:i.caipNetworkId)||""}}))},async signMessage(t){var e;return(e=this._getClient())==null?void 0:e.signMessage(t)},parseUnits(t,e){var r;return(r=this._getClient())==null?void 0:r.parseUnits(t,e)},formatUnits(t,e){var r;return(r=this._getClient())==null?void 0:r.formatUnits(t,e)},async sendTransaction(t){var e;return(e=this._getClient())==null?void 0:e.sendTransaction(t)},async getCapabilities(t){var e;return(e=this._getClient())==null?void 0:e.getCapabilities(t)},async grantPermissions(t){var e;return(e=this._getClient())==null?void 0:e.grantPermissions(t)},async walletGetAssets(t){var e;return((e=this._getClient())==null?void 0:e.walletGetAssets(t))??{}},async estimateGas(t){var e;return(e=this._getClient())==null?void 0:e.estimateGas(t)},async writeContract(t){var e;return(e=this._getClient())==null?void 0:e.writeContract(t)},async getEnsAddress(t){var e;return(e=this._getClient())==null?void 0:e.getEnsAddress(t)},async getEnsAvatar(t){var e;return(e=this._getClient())==null?void 0:e.getEnsAvatar(t)},checkInstalled(t){var e,r;return((r=(e=this._getClient())==null?void 0:e.checkInstalled)==null?void 0:r.call(e,t))||!1},resetWcConnection(){Oe.wcUri=void 0,Oe.wcPairingExpiry=void 0,Oe.wcLinking=void 0,Oe.recentWallet=void 0,Oe.status="disconnected",qw.resetTransactions(),Y.deleteWalletConnectDeepLink()},resetUri(){Oe.wcUri=void 0,Oe.wcPairingExpiry=void 0},finalizeWcConnection(){var r,i;const{wcLinking:t,recentWallet:e}=X.state;t&&Y.setWalletConnectDeepLink(t),e&&Y.setAppKitRecent(e),he.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:t?"mobile":"qrcode",name:((i=(r=W.state.data)==null?void 0:r.wallet)==null?void 0:i.name)||"Unknown"}})},setWcBasic(t){Oe.wcBasic=t},setUri(t){Oe.wcUri=t,Oe.wcPairingExpiry=z.getPairingExpiry()},setWcLinking(t){Oe.wcLinking=t},setWcError(t){Oe.wcError=t,Oe.buffering=!1},setRecentWallet(t){Oe.recentWallet=t},setBuffering(t){Oe.buffering=t},setStatus(t){Oe.status=t},async disconnect(t){try{ve.setLoading(!0,t),await Dr.clearSessions(),await b.disconnect(t),ve.setLoading(!1,t),V.setFilterByNamespace(void 0)}catch{throw new Error("Failed to disconnect")}}},Ki=Pe({loading:!1,open:!1,selectedNetworkId:void 0,activeChain:void 0,initialized:!1}),br={state:Ki,subscribe(t){return it(Ki,()=>t(Ki))},subscribeOpen(t){return ct(Ki,"open",t)},set(t){Object.assign(Ki,{...Ki,...t})}};function Qn(t,{strict:e=!0}={}){return!t||typeof t!="string"?!1:e?/^0x[0-9a-fA-F]*$/.test(t):t.startsWith("0x")}function ws(t){return Qn(t,{strict:!1})?Math.ceil((t.length-2)/2):t.length}const Np="2.27.0";let Us={getDocsUrl:({docsBaseUrl:t,docsPath:e="",docsSlug:r})=>e?`${t??"https://viem.sh"}${e}${r?`#${r}`:""}`:void 0,version:`viem@${Np}`};class we extends Error{constructor(e,r={}){var a,c;const i=r.cause instanceof we?r.cause.details:(a=r.cause)!=null&&a.message?r.cause.message:r.details,s=r.cause instanceof we&&r.cause.docsPath||r.docsPath,n=(c=Us.getDocsUrl)==null?void 0:c.call(Us,{...r,docsPath:s}),o=[e||"An error occurred.","",...r.metaMessages?[...r.metaMessages,""]:[],...n?[`Docs: ${n}`]:[],...i?[`Details: ${i}`]:[],...Us.version?[`Version: ${Us.version}`]:[]].join(`
`);super(o,r.cause?{cause:r.cause}:void 0),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseError"}),this.details=i,this.docsPath=s,this.metaMessages=r.metaMessages,this.name=r.name??this.name,this.shortMessage=e,this.version=Np}walk(e){return kp(this,e)}}function kp(t,e){return e!=null&&e(t)?t:t&&typeof t=="object"&&"cause"in t&&t.cause!==void 0?kp(t.cause,e):e?null:t}class Ww extends we{constructor({offset:e,position:r,size:i}){super(`Slice ${r==="start"?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${i}).`,{name:"SliceOffsetOutOfBoundsError"})}}class Sp extends we{constructor({size:e,targetSize:r,type:i}){super(`${i.charAt(0).toUpperCase()}${i.slice(1).toLowerCase()} size (${e}) exceeds padding size (${r}).`,{name:"SizeExceedsPaddingSizeError"})}}function Ss(t,{dir:e,size:r=32}={}){return typeof t=="string"?Fw(t,{dir:e,size:r}):Vw(t,{dir:e,size:r})}function Fw(t,{dir:e,size:r=32}={}){if(r===null)return t;const i=t.replace("0x","");if(i.length>r*2)throw new Sp({size:Math.ceil(i.length/2),targetSize:r,type:"hex"});return`0x${i[e==="right"?"padEnd":"padStart"](r*2,"0")}`}function Vw(t,{dir:e,size:r=32}={}){if(r===null)return t;if(t.length>r)throw new Sp({size:t.length,targetSize:r,type:"bytes"});const i=new Uint8Array(r);for(let s=0;s<r;s++){const n=e==="right";i[n?s:r-s-1]=t[n?s:t.length-s-1]}return i}class Gw extends we{constructor({max:e,min:r,signed:i,size:s,value:n}){super(`Number "${n}" is not in safe ${s?`${s*8}-bit ${i?"signed":"unsigned"} `:""}integer range ${e?`(${r} to ${e})`:`(above ${r})`}`,{name:"IntegerOutOfRangeError"})}}class Zw extends we{constructor({givenSize:e,maxSize:r}){super(`Size cannot exceed ${r} bytes. Given size: ${e} bytes.`,{name:"SizeOverflowError"})}}function ms(t,{dir:e="left"}={}){let r=typeof t=="string"?t.replace("0x",""):t,i=0;for(let s=0;s<r.length-1&&r[e==="left"?s:r.length-s-1].toString()==="0";s++)i++;return r=e==="left"?r.slice(i):r.slice(0,r.length-i),typeof t=="string"?(r.length===1&&e==="right"&&(r=`${r}0`),`0x${r.length%2===1?`0${r}`:r}`):r}function _s(t,{size:e}){if(ws(t)>e)throw new Zw({givenSize:ws(t),maxSize:e})}function mr(t,e={}){const{signed:r}=e;e.size&&_s(t,{size:e.size});const i=BigInt(t);if(!r)return i;const s=(t.length-2)/2,n=(1n<<BigInt(s)*8n-1n)-1n;return i<=n?i:i-BigInt(`0x${"f".padStart(s*2,"f")}`)-1n}function Na(t,e={}){return Number(mr(t,e))}const Kw=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function ae(t,e={}){return typeof t=="number"||typeof t=="bigint"?ot(t,e):typeof t=="string"?_p(t,e):typeof t=="boolean"?Yw(t,e):Er(t,e)}function Yw(t,e={}){const r=`0x${Number(t)}`;return typeof e.size=="number"?(_s(r,{size:e.size}),Ss(r,{size:e.size})):r}function Er(t,e={}){let r="";for(let s=0;s<t.length;s++)r+=Kw[t[s]];const i=`0x${r}`;return typeof e.size=="number"?(_s(i,{size:e.size}),Ss(i,{dir:"right",size:e.size})):i}function ot(t,e={}){const{signed:r,size:i}=e,s=BigInt(t);let n;i?r?n=(1n<<BigInt(i)*8n-1n)-1n:n=2n**(BigInt(i)*8n)-1n:typeof t=="number"&&(n=BigInt(Number.MAX_SAFE_INTEGER));const o=typeof n=="bigint"&&r?-n-1n:0;if(n&&s>n||s<o){const c=typeof t=="bigint"?"n":"";throw new Gw({max:n?`${n}${c}`:void 0,min:`${o}${c}`,signed:r,size:i,value:`${t}${c}`})}const a=`0x${(r&&s<0?(1n<<BigInt(i*8))+BigInt(s):s).toString(16)}`;return i?Ss(a,{size:i}):a}const Jw=new TextEncoder;function _p(t,e={}){const r=Jw.encode(t);return Er(r,e)}const Xw=new TextEncoder;function Pp(t,e={}){return typeof t=="number"||typeof t=="bigint"?em(t,e):typeof t=="boolean"?Qw(t,e):Qn(t)?ki(t,e):Tp(t,e)}function Qw(t,e={}){const r=new Uint8Array(1);return r[0]=Number(t),typeof e.size=="number"?(_s(r,{size:e.size}),Ss(r,{size:e.size})):r}const ar={zero:48,nine:57,A:65,F:70,a:97,f:102};function Eu(t){if(t>=ar.zero&&t<=ar.nine)return t-ar.zero;if(t>=ar.A&&t<=ar.F)return t-(ar.A-10);if(t>=ar.a&&t<=ar.f)return t-(ar.a-10)}function ki(t,e={}){let r=t;e.size&&(_s(r,{size:e.size}),r=Ss(r,{dir:"right",size:e.size}));let i=r.slice(2);i.length%2&&(i=`0${i}`);const s=i.length/2,n=new Uint8Array(s);for(let o=0,a=0;o<s;o++){const c=Eu(i.charCodeAt(a++)),l=Eu(i.charCodeAt(a++));if(c===void 0||l===void 0)throw new we(`Invalid byte sequence ("${i[a-2]}${i[a-1]}" in "${i}").`);n[o]=c*16+l}return n}function em(t,e){const r=ot(t,e);return ki(r)}function Tp(t,e={}){const r=Xw.encode(t);return typeof e.size=="number"?(_s(r,{size:e.size}),Ss(r,{dir:"right",size:e.size})):r}function ka(t){if(!Number.isSafeInteger(t)||t<0)throw new Error("positive integer expected, got "+t)}function tm(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"}function eo(t,...e){if(!tm(t))throw new Error("Uint8Array expected");if(e.length>0&&!e.includes(t.length))throw new Error("Uint8Array expected of length "+e+", got length="+t.length)}function rm(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");ka(t.outputLen),ka(t.blockLen)}function vs(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function Op(t,e){eo(t);const r=e.outputLen;if(t.length<r)throw new Error("digestInto() expects output buffer of length at least "+r)}const Co=BigInt(2**32-1),Iu=BigInt(32);function im(t,e=!1){return e?{h:Number(t&Co),l:Number(t>>Iu&Co)}:{h:Number(t>>Iu&Co)|0,l:Number(t&Co)|0}}function sm(t,e=!1){let r=new Uint32Array(t.length),i=new Uint32Array(t.length);for(let s=0;s<t.length;s++){const{h:n,l:o}=im(t[s],e);[r[s],i[s]]=[n,o]}return[r,i]}const nm=(t,e,r)=>t<<r|e>>>32-r,om=(t,e,r)=>e<<r|t>>>32-r,am=(t,e,r)=>e<<r-32|t>>>64-r,cm=(t,e,r)=>t<<r-32|e>>>64-r,Yi=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;function lm(t){return new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4))}function wc(t){return new DataView(t.buffer,t.byteOffset,t.byteLength)}function Kt(t,e){return t<<32-e|t>>>e}const Au=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;function dm(t){return t<<24&4278190080|t<<8&16711680|t>>>8&65280|t>>>24&255}function Nu(t){for(let e=0;e<t.length;e++)t[e]=dm(t[e])}function um(t){if(typeof t!="string")throw new Error("utf8ToBytes expected string, got "+typeof t);return new Uint8Array(new TextEncoder().encode(t))}function Ha(t){return typeof t=="string"&&(t=um(t)),eo(t),t}function hm(...t){let e=0;for(let i=0;i<t.length;i++){const s=t[i];eo(s),e+=s.length}const r=new Uint8Array(e);for(let i=0,s=0;i<t.length;i++){const n=t[i];r.set(n,s),s+=n.length}return r}class hd{clone(){return this._cloneInto()}}function $p(t){const e=i=>t().update(Ha(i)).digest(),r=t();return e.outputLen=r.outputLen,e.blockLen=r.blockLen,e.create=()=>t(),e}function pm(t=32){if(Yi&&typeof Yi.getRandomValues=="function")return Yi.getRandomValues(new Uint8Array(t));if(Yi&&typeof Yi.randomBytes=="function")return Yi.randomBytes(t);throw new Error("crypto.getRandomValues must be defined")}const Rp=[],Lp=[],Mp=[],fm=BigInt(0),Ds=BigInt(1),gm=BigInt(2),wm=BigInt(7),mm=BigInt(256),vm=BigInt(113);for(let t=0,e=Ds,r=1,i=0;t<24;t++){[r,i]=[i,(2*r+3*i)%5],Rp.push(2*(5*i+r)),Lp.push((t+1)*(t+2)/2%64);let s=fm;for(let n=0;n<7;n++)e=(e<<Ds^(e>>wm)*vm)%mm,e&gm&&(s^=Ds<<(Ds<<BigInt(n))-Ds);Mp.push(s)}const[bm,ym]=sm(Mp,!0),ku=(t,e,r)=>r>32?am(t,e,r):nm(t,e,r),Su=(t,e,r)=>r>32?cm(t,e,r):om(t,e,r);function Cm(t,e=24){const r=new Uint32Array(10);for(let i=24-e;i<24;i++){for(let o=0;o<10;o++)r[o]=t[o]^t[o+10]^t[o+20]^t[o+30]^t[o+40];for(let o=0;o<10;o+=2){const a=(o+8)%10,c=(o+2)%10,l=r[c],d=r[c+1],u=ku(l,d,1)^r[a],h=Su(l,d,1)^r[a+1];for(let p=0;p<50;p+=10)t[o+p]^=u,t[o+p+1]^=h}let s=t[2],n=t[3];for(let o=0;o<24;o++){const a=Lp[o],c=ku(s,n,a),l=Su(s,n,a),d=Rp[o];s=t[d],n=t[d+1],t[d]=c,t[d+1]=l}for(let o=0;o<50;o+=10){for(let a=0;a<10;a++)r[a]=t[o+a];for(let a=0;a<10;a++)t[o+a]^=~r[(a+2)%10]&r[(a+4)%10]}t[0]^=bm[i],t[1]^=ym[i]}r.fill(0)}class pd extends hd{constructor(e,r,i,s=!1,n=24){if(super(),this.blockLen=e,this.suffix=r,this.outputLen=i,this.enableXOF=s,this.rounds=n,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,ka(i),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=lm(this.state)}keccak(){Au||Nu(this.state32),Cm(this.state32,this.rounds),Au||Nu(this.state32),this.posOut=0,this.pos=0}update(e){vs(this);const{blockLen:r,state:i}=this;e=Ha(e);const s=e.length;for(let n=0;n<s;){const o=Math.min(r-this.pos,s-n);for(let a=0;a<o;a++)i[this.pos++]^=e[n++];this.pos===r&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:r,pos:i,blockLen:s}=this;e[i]^=r,r&128&&i===s-1&&this.keccak(),e[s-1]^=128,this.keccak()}writeInto(e){vs(this,!1),eo(e),this.finish();const r=this.state,{blockLen:i}=this;for(let s=0,n=e.length;s<n;){this.posOut>=i&&this.keccak();const o=Math.min(i-this.posOut,n-s);e.set(r.subarray(this.posOut,this.posOut+o),s),this.posOut+=o,s+=o}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return ka(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(Op(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:r,suffix:i,outputLen:s,rounds:n,enableXOF:o}=this;return e||(e=new pd(r,i,s,o,n)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=n,e.suffix=i,e.outputLen=s,e.enableXOF=o,e.destroyed=this.destroyed,e}}const xm=(t,e,r)=>$p(()=>new pd(e,t,r)),Bp=xm(1,136,256/8);function Em(t,e){const r=e,i=Bp(Qn(t,{strict:!1})?Pp(t):t);return r==="bytes"?i:ae(i)}class qr extends we{constructor({address:e}){super(`Address "${e}" is invalid.`,{metaMessages:["- Address must be a hex value of 20 bytes (40 hex characters).","- Address must match its checksum counterpart."],name:"InvalidAddressError"})}}class qa extends Map{constructor(e){super(),Object.defineProperty(this,"maxSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=e}get(e){const r=super.get(e);return super.has(e)&&r!==void 0&&(this.delete(e),super.set(e,r)),r}set(e,r){if(super.set(e,r),this.maxSize&&this.size>this.maxSize){const i=this.keys().next().value;i&&this.delete(i)}return this}}const mc=new qa(8192);function Im(t,e){if(mc.has(`${t}.${e}`))return mc.get(`${t}.${e}`);const r=t.substring(2).toLowerCase(),i=Em(Tp(r),"bytes"),s=r.split("");for(let o=0;o<40;o+=2)i[o>>1]>>4>=8&&s[o]&&(s[o]=s[o].toUpperCase()),(i[o>>1]&15)>=8&&s[o+1]&&(s[o+1]=s[o+1].toUpperCase());const n=`0x${s.join("")}`;return mc.set(`${t}.${e}`,n),n}const Am=/^0x[a-fA-F0-9]{40}$/,vc=new qa(8192);function Cr(t,e){const{strict:r=!0}=e??{},i=`${t}.${r}`;if(vc.has(i))return vc.get(i);const s=Am.test(t)?t.toLowerCase()===t?!0:r?Im(t)===t:!0:!1;return vc.set(i,s),s}function Ps(t){return`0x${t.reduce((e,r)=>e+r.replace("0x",""),"")}`}function Nm(t,e,r,{strict:i}={}){return Qn(t,{strict:!1})?Sm(t,e,r,{strict:i}):km(t,e,r,{strict:i})}function Up(t,e,r){if(ws(t)!==r-e)throw new Ww({offset:r,position:"end",size:ws(t)})}function km(t,e,r,{strict:i}={}){const s=t.slice(e,r);return i&&Up(s,e,r),s}function Sm(t,e,r,{strict:i}={}){const s=`0x${t.replace("0x","").slice(e*2,r*2)}`;return i&&Up(s,e,r),s}class _u extends we{constructor({offset:e}){super(`Offset \`${e}\` cannot be negative.`,{name:"NegativeOffsetError"})}}class _m extends we{constructor({length:e,position:r}){super(`Position \`${r}\` is out of bounds (\`0 < position < ${e}\`).`,{name:"PositionOutOfBoundsError"})}}class Pm extends we{constructor({count:e,limit:r}){super(`Recursive read limit of \`${r}\` exceeded (recursive read count: \`${e}\`).`,{name:"RecursiveReadLimitExceededError"})}}const Tm={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,positionReadCount:new Map,recursiveReadCount:0,recursiveReadLimit:Number.POSITIVE_INFINITY,assertReadLimit(){if(this.recursiveReadCount>=this.recursiveReadLimit)throw new Pm({count:this.recursiveReadCount+1,limit:this.recursiveReadLimit})},assertPosition(t){if(t<0||t>this.bytes.length-1)throw new _m({length:this.bytes.length,position:t})},decrementPosition(t){if(t<0)throw new _u({offset:t});const e=this.position-t;this.assertPosition(e),this.position=e},getReadCount(t){return this.positionReadCount.get(t||this.position)||0},incrementPosition(t){if(t<0)throw new _u({offset:t});const e=this.position+t;this.assertPosition(e),this.position=e},inspectByte(t){const e=t??this.position;return this.assertPosition(e),this.bytes[e]},inspectBytes(t,e){const r=e??this.position;return this.assertPosition(r+t-1),this.bytes.subarray(r,r+t)},inspectUint8(t){const e=t??this.position;return this.assertPosition(e),this.bytes[e]},inspectUint16(t){const e=t??this.position;return this.assertPosition(e+1),this.dataView.getUint16(e)},inspectUint24(t){const e=t??this.position;return this.assertPosition(e+2),(this.dataView.getUint16(e)<<8)+this.dataView.getUint8(e+2)},inspectUint32(t){const e=t??this.position;return this.assertPosition(e+3),this.dataView.getUint32(e)},pushByte(t){this.assertPosition(this.position),this.bytes[this.position]=t,this.position++},pushBytes(t){this.assertPosition(this.position+t.length-1),this.bytes.set(t,this.position),this.position+=t.length},pushUint8(t){this.assertPosition(this.position),this.bytes[this.position]=t,this.position++},pushUint16(t){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,t),this.position+=2},pushUint24(t){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,t>>8),this.dataView.setUint8(this.position+2,t&255),this.position+=3},pushUint32(t){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,t),this.position+=4},readByte(){this.assertReadLimit(),this._touch();const t=this.inspectByte();return this.position++,t},readBytes(t,e){this.assertReadLimit(),this._touch();const r=this.inspectBytes(t);return this.position+=e??t,r},readUint8(){this.assertReadLimit(),this._touch();const t=this.inspectUint8();return this.position+=1,t},readUint16(){this.assertReadLimit(),this._touch();const t=this.inspectUint16();return this.position+=2,t},readUint24(){this.assertReadLimit(),this._touch();const t=this.inspectUint24();return this.position+=3,t},readUint32(){this.assertReadLimit(),this._touch();const t=this.inspectUint32();return this.position+=4,t},get remaining(){return this.bytes.length-this.position},setPosition(t){const e=this.position;return this.assertPosition(t),this.position=t,()=>this.position=e},_touch(){if(this.recursiveReadLimit===Number.POSITIVE_INFINITY)return;const t=this.getReadCount();this.positionReadCount.set(this.position,t+1),t>0&&this.recursiveReadCount++}};function Dp(t,{recursiveReadLimit:e=8192}={}){const r=Object.create(Tm);return r.bytes=t,r.dataView=new DataView(t.buffer,t.byteOffset,t.byteLength),r.positionReadCount=new Map,r.recursiveReadLimit=e,r}const Ci=(t,e,r)=>JSON.stringify(t,(i,s)=>typeof s=="bigint"?s.toString():s,r),Om={ether:-9,wei:9};function jp(t,e){let r=t.toString();const i=r.startsWith("-");i&&(r=r.slice(1)),r=r.padStart(e,"0");let[s,n]=[r.slice(0,r.length-e),r.slice(r.length-e)];return n=n.replace(/(0+)$/,""),`${i?"-":""}${s||"0"}${n?`.${n}`:""}`}function ql(t,e="wei"){return jp(t,Om[e])}function $m(t){const e=Object.entries(t).map(([i,s])=>s===void 0||s===!1?null:[i,s]).filter(Boolean),r=e.reduce((i,[s])=>Math.max(i,s.length),0);return e.map(([i,s])=>`  ${`${i}:`.padEnd(r+1)}  ${s}`).join(`
`)}class Rm extends we{constructor({v:e}){super(`Invalid \`v\` value "${e}". Expected 27 or 28.`,{name:"InvalidLegacyVError"})}}class Lm extends we{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",$m(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or","- an EIP-7702 Transaction with `authorizationList`, or","- a Legacy Transaction with `gasPrice`"],name:"InvalidSerializableTransactionError"})}}class Mm extends we{constructor({storageKey:e}){super(`Size for storage key "${e}" is invalid. Expected 32 bytes. Got ${Math.floor((e.length-2)/2)} bytes.`,{name:"InvalidStorageKeySizeError"})}}const fd=t=>t;class yn extends we{constructor({body:e,cause:r,details:i,headers:s,status:n,url:o}){super("HTTP request failed.",{cause:r,details:i,metaMessages:[n&&`Status: ${n}`,`URL: ${fd(o)}`,e&&`Request body: ${Ci(e)}`].filter(Boolean),name:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=s,this.status=n,this.url=o}}class zp extends we{constructor({body:e,error:r,url:i}){super("RPC Request failed.",{cause:r,details:r.message,metaMessages:[`URL: ${fd(i)}`,`Request body: ${Ci(e)}`],name:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=r.code,this.data=r.data}}class Pu extends we{constructor({body:e,url:r}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${fd(r)}`,`Request body: ${Ci(e)}`],name:"TimeoutError"})}}const Bm=-1;class mt extends we{constructor(e,{code:r,docsPath:i,metaMessages:s,name:n,shortMessage:o}){super(o,{cause:e,docsPath:i,metaMessages:s||(e==null?void 0:e.metaMessages),name:n||"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=n||e.name,this.code=e instanceof zp?e.code:r??Bm}}class At extends mt{constructor(e,r){super(e,r),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=r.data}}class Nn extends mt{constructor(e){super(e,{code:Nn.code,name:"ParseRpcError",shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."})}}Object.defineProperty(Nn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class kn extends mt{constructor(e){super(e,{code:kn.code,name:"InvalidRequestRpcError",shortMessage:"JSON is not a valid request object."})}}Object.defineProperty(kn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class Sn extends mt{constructor(e,{method:r}={}){super(e,{code:Sn.code,name:"MethodNotFoundRpcError",shortMessage:`The method${r?` "${r}"`:""} does not exist / is not available.`})}}Object.defineProperty(Sn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class _n extends mt{constructor(e){super(e,{code:_n.code,name:"InvalidParamsRpcError",shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join(`
`)})}}Object.defineProperty(_n,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class bs extends mt{constructor(e){super(e,{code:bs.code,name:"InternalRpcError",shortMessage:"An internal error was received."})}}Object.defineProperty(bs,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class Pn extends mt{constructor(e){super(e,{code:Pn.code,name:"InvalidInputRpcError",shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join(`
`)})}}Object.defineProperty(Pn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class Tn extends mt{constructor(e){super(e,{code:Tn.code,name:"ResourceNotFoundRpcError",shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(Tn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class On extends mt{constructor(e){super(e,{code:On.code,name:"ResourceUnavailableRpcError",shortMessage:"Requested resource not available."})}}Object.defineProperty(On,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class ys extends mt{constructor(e){super(e,{code:ys.code,name:"TransactionRejectedRpcError",shortMessage:"Transaction creation failed."})}}Object.defineProperty(ys,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class mi extends mt{constructor(e,{method:r}={}){super(e,{code:mi.code,name:"MethodNotSupportedRpcError",shortMessage:`Method${r?` "${r}"`:""} is not supported.`})}}Object.defineProperty(mi,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class Cs extends mt{constructor(e){super(e,{code:Cs.code,name:"LimitExceededRpcError",shortMessage:"Request exceeds defined limit."})}}Object.defineProperty(Cs,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class $n extends mt{constructor(e){super(e,{code:$n.code,name:"JsonRpcVersionUnsupportedError",shortMessage:"Version of JSON-RPC protocol is not supported."})}}Object.defineProperty($n,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class xi extends At{constructor(e){super(e,{code:xi.code,name:"UserRejectedRequestError",shortMessage:"User rejected the request."})}}Object.defineProperty(xi,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class Rn extends At{constructor(e){super(e,{code:Rn.code,name:"UnauthorizedProviderError",shortMessage:"The requested method and/or account has not been authorized by the user."})}}Object.defineProperty(Rn,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class Ln extends At{constructor(e,{method:r}={}){super(e,{code:Ln.code,name:"UnsupportedProviderMethodError",shortMessage:`The Provider does not support the requested method${r?` " ${r}"`:""}.`})}}Object.defineProperty(Ln,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class Mn extends At{constructor(e){super(e,{code:Mn.code,name:"ProviderDisconnectedError",shortMessage:"The Provider is disconnected from all chains."})}}Object.defineProperty(Mn,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class Bn extends At{constructor(e){super(e,{code:Bn.code,name:"ChainDisconnectedError",shortMessage:"The Provider is not connected to the requested chain."})}}Object.defineProperty(Bn,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class Un extends At{constructor(e){super(e,{code:Un.code,name:"SwitchChainError",shortMessage:"An error occurred when attempting to switch chain."})}}Object.defineProperty(Un,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class Dn extends At{constructor(e){super(e,{code:Dn.code,name:"UnsupportedNonOptionalCapabilityError",shortMessage:"This Wallet does not support a capability that was not marked as optional."})}}Object.defineProperty(Dn,"code",{enumerable:!0,configurable:!0,writable:!0,value:5700});class jn extends At{constructor(e){super(e,{code:jn.code,name:"UnsupportedChainIdError",shortMessage:"This Wallet does not support the requested chain ID."})}}Object.defineProperty(jn,"code",{enumerable:!0,configurable:!0,writable:!0,value:5710});class zn extends At{constructor(e){super(e,{code:zn.code,name:"DuplicateIdError",shortMessage:"There is already a bundle submitted with this ID."})}}Object.defineProperty(zn,"code",{enumerable:!0,configurable:!0,writable:!0,value:5720});class Hn extends At{constructor(e){super(e,{code:Hn.code,name:"UnknownBundleIdError",shortMessage:"This bundle id is unknown / has not been submitted"})}}Object.defineProperty(Hn,"code",{enumerable:!0,configurable:!0,writable:!0,value:5730});class qn extends At{constructor(e){super(e,{code:qn.code,name:"BundleTooLargeError",shortMessage:"The call bundle is too large for the Wallet to process."})}}Object.defineProperty(qn,"code",{enumerable:!0,configurable:!0,writable:!0,value:5740});class Wn extends At{constructor(e){super(e,{code:Wn.code,name:"AtomicReadyWalletRejectedUpgradeError",shortMessage:"The Wallet can support atomicity after an upgrade, but the user rejected the upgrade."})}}Object.defineProperty(Wn,"code",{enumerable:!0,configurable:!0,writable:!0,value:5750});class Fn extends At{constructor(e){super(e,{code:Fn.code,name:"AtomicityNotSupportedError",shortMessage:"The wallet does not support atomic execution but the request requires it."})}}Object.defineProperty(Fn,"code",{enumerable:!0,configurable:!0,writable:!0,value:5760});class Um extends mt{constructor(e){super(e,{name:"UnknownRpcError",shortMessage:"An unknown RPC error occurred."})}}function Oi(t,e="hex"){const r=Hp(t),i=Dp(new Uint8Array(r.length));return r.encode(i),e==="hex"?Er(i.bytes):i.bytes}function Hp(t){return Array.isArray(t)?Dm(t.map(e=>Hp(e))):jm(t)}function Dm(t){const e=t.reduce((i,s)=>i+s.length,0),r=qp(e);return{length:e<=55?1+e:1+r+e,encode(i){e<=55?i.pushByte(192+e):(i.pushByte(247+r),r===1?i.pushUint8(e):r===2?i.pushUint16(e):r===3?i.pushUint24(e):i.pushUint32(e));for(const{encode:s}of t)s(i)}}}function jm(t){const e=typeof t=="string"?ki(t):t,r=qp(e.length);return{length:e.length===1&&e[0]<128?1:e.length<=55?1+e.length:1+r+e.length,encode(i){e.length===1&&e[0]<128?i.pushBytes(e):e.length<=55?(i.pushByte(128+e.length),i.pushBytes(e)):(i.pushByte(183+r),r===1?i.pushUint8(e.length):r===2?i.pushUint16(e.length):r===3?i.pushUint24(e.length):i.pushUint32(e.length),i.pushBytes(e))}}}function qp(t){if(t<2**8)return 1;if(t<2**16)return 2;if(t<2**24)return 3;if(t<2**32)return 4;throw new we("Length is too large.")}class Wl extends we{constructor({cause:e,message:r}={}){var s;const i=(s=r==null?void 0:r.replace("execution reverted: ",""))==null?void 0:s.replace("execution reverted","");super(`Execution reverted ${i?`with reason: ${i}`:"for an unknown reason"}.`,{cause:e,name:"ExecutionRevertedError"})}}Object.defineProperty(Wl,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(Wl,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class to extends we{constructor({cause:e,maxFeePerGas:r}={}){super(`The fee cap (\`maxFeePerGas\`${r?` = ${ql(r)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e,name:"FeeCapTooHighError"})}}Object.defineProperty(to,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class gd extends we{constructor({cause:e,maxPriorityFeePerGas:r,maxFeePerGas:i}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${r?` = ${ql(r)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${i?` = ${ql(i)} gwei`:""}).`].join(`
`),{cause:e,name:"TipAboveFeeCapError"})}}Object.defineProperty(gd,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});function Wa(t,e){return({exclude:r,format:i})=>({exclude:r,format:s=>{const n=e(s);if(r)for(const o of r)delete n[o];return{...n,...i(s)}},type:t})}const zm={legacy:"0x0",eip2930:"0x1",eip1559:"0x2",eip4844:"0x3",eip7702:"0x4"};function Hm(t){const e={};return typeof t.authorizationList<"u"&&(e.authorizationList=Wm(t.authorizationList)),typeof t.accessList<"u"&&(e.accessList=t.accessList),typeof t.blobVersionedHashes<"u"&&(e.blobVersionedHashes=t.blobVersionedHashes),typeof t.blobs<"u"&&(typeof t.blobs[0]!="string"?e.blobs=t.blobs.map(r=>Er(r)):e.blobs=t.blobs),typeof t.data<"u"&&(e.data=t.data),typeof t.from<"u"&&(e.from=t.from),typeof t.gas<"u"&&(e.gas=ot(t.gas)),typeof t.gasPrice<"u"&&(e.gasPrice=ot(t.gasPrice)),typeof t.maxFeePerBlobGas<"u"&&(e.maxFeePerBlobGas=ot(t.maxFeePerBlobGas)),typeof t.maxFeePerGas<"u"&&(e.maxFeePerGas=ot(t.maxFeePerGas)),typeof t.maxPriorityFeePerGas<"u"&&(e.maxPriorityFeePerGas=ot(t.maxPriorityFeePerGas)),typeof t.nonce<"u"&&(e.nonce=ot(t.nonce)),typeof t.to<"u"&&(e.to=t.to),typeof t.type<"u"&&(e.type=zm[t.type]),typeof t.value<"u"&&(e.value=ot(t.value)),e}const qm=Wa("transactionRequest",Hm);function Wm(t){return t.map(e=>({address:e.address,r:e.r?ot(BigInt(e.r)):e.r,s:e.s?ot(BigInt(e.s)):e.s,chainId:ot(e.chainId),nonce:ot(e.nonce),...typeof e.yParity<"u"?{yParity:ot(e.yParity)}:{},...typeof e.v<"u"&&typeof e.yParity>"u"?{v:ot(e.v)}:{}}))}const Fa=2n**256n-1n,Wp={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559","0x3":"eip4844","0x4":"eip7702"};function Va(t){const e={...t,blockHash:t.blockHash?t.blockHash:null,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,chainId:t.chainId?Na(t.chainId):void 0,gas:t.gas?BigInt(t.gas):void 0,gasPrice:t.gasPrice?BigInt(t.gasPrice):void 0,maxFeePerBlobGas:t.maxFeePerBlobGas?BigInt(t.maxFeePerBlobGas):void 0,maxFeePerGas:t.maxFeePerGas?BigInt(t.maxFeePerGas):void 0,maxPriorityFeePerGas:t.maxPriorityFeePerGas?BigInt(t.maxPriorityFeePerGas):void 0,nonce:t.nonce?Na(t.nonce):void 0,to:t.to?t.to:null,transactionIndex:t.transactionIndex?Number(t.transactionIndex):null,type:t.type?Wp[t.type]:void 0,typeHex:t.type?t.type:void 0,value:t.value?BigInt(t.value):void 0,v:t.v?BigInt(t.v):void 0};return t.authorizationList&&(e.authorizationList=Fm(t.authorizationList)),e.yParity=(()=>{if(t.yParity)return Number(t.yParity);if(typeof e.v=="bigint"){if(e.v===0n||e.v===27n)return 0;if(e.v===1n||e.v===28n)return 1;if(e.v>=35n)return e.v%2n===0n?1:0}})(),e.type==="legacy"&&(delete e.accessList,delete e.maxFeePerBlobGas,delete e.maxFeePerGas,delete e.maxPriorityFeePerGas,delete e.yParity),e.type==="eip2930"&&(delete e.maxFeePerBlobGas,delete e.maxFeePerGas,delete e.maxPriorityFeePerGas),e.type==="eip1559"&&delete e.maxFeePerBlobGas,e}const Fp=Wa("transaction",Va);function Fm(t){return t.map(e=>({address:e.address,chainId:Number(e.chainId),nonce:Number(e.nonce),r:e.r,s:e.s,yParity:Number(e.yParity)}))}function Vm(t){const e=(t.transactions??[]).map(r=>typeof r=="string"?r:Va(r));return{...t,baseFeePerGas:t.baseFeePerGas?BigInt(t.baseFeePerGas):null,blobGasUsed:t.blobGasUsed?BigInt(t.blobGasUsed):void 0,difficulty:t.difficulty?BigInt(t.difficulty):void 0,excessBlobGas:t.excessBlobGas?BigInt(t.excessBlobGas):void 0,gasLimit:t.gasLimit?BigInt(t.gasLimit):void 0,gasUsed:t.gasUsed?BigInt(t.gasUsed):void 0,hash:t.hash?t.hash:null,logsBloom:t.logsBloom?t.logsBloom:null,nonce:t.nonce?t.nonce:null,number:t.number?BigInt(t.number):null,size:t.size?BigInt(t.size):void 0,timestamp:t.timestamp?BigInt(t.timestamp):void 0,transactions:e,totalDifficulty:t.totalDifficulty?BigInt(t.totalDifficulty):null}}const Vp=Wa("block",Vm);function Gp(t){const{kzg:e}=t,r=t.to??(typeof t.blobs[0]=="string"?"hex":"bytes"),i=typeof t.blobs[0]=="string"?t.blobs.map(n=>ki(n)):t.blobs,s=[];for(const n of i)s.push(Uint8Array.from(e.blobToKzgCommitment(n)));return r==="bytes"?s:s.map(n=>Er(n))}function Zp(t){const{kzg:e}=t,r=t.to??(typeof t.blobs[0]=="string"?"hex":"bytes"),i=typeof t.blobs[0]=="string"?t.blobs.map(o=>ki(o)):t.blobs,s=typeof t.commitments[0]=="string"?t.commitments.map(o=>ki(o)):t.commitments,n=[];for(let o=0;o<i.length;o++){const a=i[o],c=s[o];n.push(Uint8Array.from(e.computeBlobKzgProof(a,c)))}return r==="bytes"?n:n.map(o=>Er(o))}function Gm(t,e,r,i){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,r,i);const s=BigInt(32),n=BigInt(4294967295),o=Number(r>>s&n),a=Number(r&n),c=i?4:0,l=i?0:4;t.setUint32(e+c,o,i),t.setUint32(e+l,a,i)}function Zm(t,e,r){return t&e^~t&r}function Km(t,e,r){return t&e^t&r^e&r}class Ym extends hd{constructor(e,r,i,s){super(),this.blockLen=e,this.outputLen=r,this.padOffset=i,this.isLE=s,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=wc(this.buffer)}update(e){vs(this);const{view:r,buffer:i,blockLen:s}=this;e=Ha(e);const n=e.length;for(let o=0;o<n;){const a=Math.min(s-this.pos,n-o);if(a===s){const c=wc(e);for(;s<=n-o;o+=s)this.process(c,o);continue}i.set(e.subarray(o,o+a),this.pos),this.pos+=a,o+=a,this.pos===s&&(this.process(r,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){vs(this),Op(e,this),this.finished=!0;const{buffer:r,view:i,blockLen:s,isLE:n}=this;let{pos:o}=this;r[o++]=128,this.buffer.subarray(o).fill(0),this.padOffset>s-o&&(this.process(i,0),o=0);for(let u=o;u<s;u++)r[u]=0;Gm(i,s-8,BigInt(this.length*8),n),this.process(i,0);const a=wc(e),c=this.outputLen;if(c%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const l=c/4,d=this.get();if(l>d.length)throw new Error("_sha2: outputLen bigger than state");for(let u=0;u<l;u++)a.setUint32(4*u,d[u],n)}digest(){const{buffer:e,outputLen:r}=this;this.digestInto(e);const i=e.slice(0,r);return this.destroy(),i}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:r,buffer:i,length:s,finished:n,destroyed:o,pos:a}=this;return e.length=s,e.pos=a,e.finished=n,e.destroyed=o,s%r&&e.buffer.set(i),e}}const Jm=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),_r=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Pr=new Uint32Array(64);class Xm extends Ym{constructor(){super(64,32,8,!1),this.A=_r[0]|0,this.B=_r[1]|0,this.C=_r[2]|0,this.D=_r[3]|0,this.E=_r[4]|0,this.F=_r[5]|0,this.G=_r[6]|0,this.H=_r[7]|0}get(){const{A:e,B:r,C:i,D:s,E:n,F:o,G:a,H:c}=this;return[e,r,i,s,n,o,a,c]}set(e,r,i,s,n,o,a,c){this.A=e|0,this.B=r|0,this.C=i|0,this.D=s|0,this.E=n|0,this.F=o|0,this.G=a|0,this.H=c|0}process(e,r){for(let u=0;u<16;u++,r+=4)Pr[u]=e.getUint32(r,!1);for(let u=16;u<64;u++){const h=Pr[u-15],p=Pr[u-2],w=Kt(h,7)^Kt(h,18)^h>>>3,f=Kt(p,17)^Kt(p,19)^p>>>10;Pr[u]=f+Pr[u-7]+w+Pr[u-16]|0}let{A:i,B:s,C:n,D:o,E:a,F:c,G:l,H:d}=this;for(let u=0;u<64;u++){const h=Kt(a,6)^Kt(a,11)^Kt(a,25),p=d+h+Zm(a,c,l)+Jm[u]+Pr[u]|0,w=(Kt(i,2)^Kt(i,13)^Kt(i,22))+Km(i,s,n)|0;d=l,l=c,c=a,a=o+p|0,o=n,n=s,s=i,i=p+w|0}i=i+this.A|0,s=s+this.B|0,n=n+this.C|0,o=o+this.D|0,a=a+this.E|0,c=c+this.F|0,l=l+this.G|0,d=d+this.H|0,this.set(i,s,n,o,a,c,l,d)}roundClean(){Pr.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}const Kp=$p(()=>new Xm);function Qm(t,e){const r=e,i=Kp(Qn(t,{strict:!1})?Pp(t):t);return r==="bytes"?i:ae(i)}function e2(t){const{commitment:e,version:r=1}=t,i=t.to??(typeof e=="string"?"hex":"bytes"),s=Qm(e,"bytes");return s.set([r],0),i==="bytes"?s:Er(s)}function t2(t){const{commitments:e,version:r}=t,i=t.to??(typeof e[0]=="string"?"hex":"bytes"),s=[];for(const n of e)s.push(e2({commitment:n,to:i,version:r}));return s}const Tu=6,Yp=32,wd=4096,Jp=Yp*wd,Ou=Jp*Tu-1-1*wd*Tu,Xp=1;class r2 extends we{constructor({maxSize:e,size:r}){super("Blob size is too large.",{metaMessages:[`Max: ${e} bytes`,`Given: ${r} bytes`],name:"BlobSizeTooLargeError"})}}class Qp extends we{constructor(){super("Blob data must not be empty.",{name:"EmptyBlobError"})}}class i2 extends we{constructor({hash:e,size:r}){super(`Versioned hash "${e}" size is invalid.`,{metaMessages:["Expected: 32",`Received: ${r}`],name:"InvalidVersionedHashSizeError"})}}class s2 extends we{constructor({hash:e,version:r}){super(`Versioned hash "${e}" version is invalid.`,{metaMessages:[`Expected: ${Xp}`,`Received: ${r}`],name:"InvalidVersionedHashVersionError"})}}function n2(t){const e=t.to??(typeof t.data=="string"?"hex":"bytes"),r=typeof t.data=="string"?ki(t.data):t.data,i=ws(r);if(!i)throw new Qp;if(i>Ou)throw new r2({maxSize:Ou,size:i});const s=[];let n=!0,o=0;for(;n;){const a=Dp(new Uint8Array(Jp));let c=0;for(;c<wd;){const l=r.slice(o,o+(Yp-1));if(a.pushByte(0),a.pushBytes(l),l.length<31){a.pushByte(128),n=!1;break}c++,o+=31}s.push(a)}return e==="bytes"?s.map(a=>a.bytes):s.map(a=>Er(a.bytes))}function o2(t){const{data:e,kzg:r,to:i}=t,s=t.blobs??n2({data:e,to:i}),n=t.commitments??Gp({blobs:s,kzg:r,to:i}),o=t.proofs??Zp({blobs:s,commitments:n,kzg:r,to:i}),a=[];for(let c=0;c<s.length;c++)a.push({blob:s[c],commitment:n[c],proof:o[c]});return a}function a2(t){if(t.type)return t.type;if(typeof t.authorizationList<"u")return"eip7702";if(typeof t.blobs<"u"||typeof t.blobVersionedHashes<"u"||typeof t.maxFeePerBlobGas<"u"||typeof t.sidecars<"u")return"eip4844";if(typeof t.maxFeePerGas<"u"||typeof t.maxPriorityFeePerGas<"u")return"eip1559";if(typeof t.gasPrice<"u")return typeof t.accessList<"u"?"eip2930":"legacy";throw new Lm({transaction:t})}function c2(t,{args:e,eventName:r}={}){return{...t,blockHash:t.blockHash?t.blockHash:null,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,logIndex:t.logIndex?Number(t.logIndex):null,transactionHash:t.transactionHash?t.transactionHash:null,transactionIndex:t.transactionIndex?Number(t.transactionIndex):null,...r?{args:e,eventName:r}:{}}}class ro extends we{constructor({chainId:e}){super(typeof e=="number"?`Chain ID "${e}" is invalid.`:"Chain ID is invalid.",{name:"InvalidChainIdError"})}}function l2(){let t=()=>{},e=()=>{};return{promise:new Promise((r,i)=>{t=r,e=i}),resolve:t,reject:e}}const bc=new Map;function d2({fn:t,id:e,shouldSplitBatch:r,wait:i=0,sort:s}){const n=async()=>{const d=c();o();const u=d.map(({args:h})=>h);u.length!==0&&t(u).then(h=>{s&&Array.isArray(h)&&h.sort(s);for(let p=0;p<d.length;p++){const{resolve:w}=d[p];w==null||w([h[p],h])}}).catch(h=>{for(let p=0;p<d.length;p++){const{reject:w}=d[p];w==null||w(h)}})},o=()=>bc.delete(e),a=()=>c().map(({args:d})=>d),c=()=>bc.get(e)||[],l=d=>bc.set(e,[...c(),d]);return{flush:o,async schedule(d){const{promise:u,resolve:h,reject:p}=l2();return r!=null&&r([...a(),d])&&n(),c().length>0?(l({args:d,resolve:h,reject:p}),u):(l({args:d,resolve:h,reject:p}),setTimeout(n,i),u)}}}async function e0(t){return new Promise(e=>setTimeout(e,t))}new qa(128);const Fl=256;let xo=Fl,Eo;function u2(t=11){if(!Eo||xo+t>Fl*2){Eo="",xo=0;for(let e=0;e<Fl;e++)Eo+=(256+Math.random()*256|0).toString(16).substring(1)}return Eo.substring(xo,xo+++t)}const Io=new qa(8192);function h2(t,{enabled:e=!0,id:r}){if(!e||!r)return t();if(Io.get(r))return Io.get(r);const i=t().finally(()=>Io.delete(r));return Io.set(r,i),i}function p2(t,{delay:e=100,retryCount:r=2,shouldRetry:i=()=>!0}={}){return new Promise((s,n)=>{const o=async({count:a=0}={})=>{const c=async({error:l})=>{const d=typeof e=="function"?e({count:a,error:l}):e;d&&await e0(d),o({count:a+1})};try{const l=await t();s(l)}catch(l){if(a<r&&await i({count:a,error:l}))return c({error:l});n(l)}};o()})}function f2(t,e={}){return async(r,i={})=>{var u;const{dedupe:s=!1,methods:n,retryDelay:o=150,retryCount:a=3,uid:c}={...e,...i},{method:l}=r;if((u=n==null?void 0:n.exclude)!=null&&u.includes(l))throw new mi(new Error("method not supported"),{method:l});if(n!=null&&n.include&&!n.include.includes(l))throw new mi(new Error("method not supported"),{method:l});const d=s?_p(`${c}.${Ci(r)}`):void 0;return h2(()=>p2(async()=>{try{return await t(r)}catch(h){const p=h;switch(p.code){case Nn.code:throw new Nn(p);case kn.code:throw new kn(p);case Sn.code:throw new Sn(p,{method:r.method});case _n.code:throw new _n(p);case bs.code:throw new bs(p);case Pn.code:throw new Pn(p);case Tn.code:throw new Tn(p);case On.code:throw new On(p);case ys.code:throw new ys(p);case mi.code:throw new mi(p,{method:r.method});case Cs.code:throw new Cs(p);case $n.code:throw new $n(p);case xi.code:throw new xi(p);case Rn.code:throw new Rn(p);case Ln.code:throw new Ln(p);case Mn.code:throw new Mn(p);case Bn.code:throw new Bn(p);case Un.code:throw new Un(p);case Dn.code:throw new Dn(p);case jn.code:throw new jn(p);case zn.code:throw new zn(p);case Hn.code:throw new Hn(p);case qn.code:throw new qn(p);case Wn.code:throw new Wn(p);case Fn.code:throw new Fn(p);case 5e3:throw new xi(p);default:throw h instanceof we?h:new Um(p)}}},{delay:({count:h,error:p})=>{var w;if(p&&p instanceof yn){const f=(w=p==null?void 0:p.headers)==null?void 0:w.get("Retry-After");if(f!=null&&f.match(/\d/))return Number.parseInt(f)*1e3}return~~(1<<h)*o},retryCount:a,shouldRetry:({error:h})=>g2(h)}),{enabled:s,id:d})}}function g2(t){return"code"in t&&typeof t.code=="number"?t.code===-1||t.code===Cs.code||t.code===bs.code:t instanceof yn&&t.status?t.status===403||t.status===408||t.status===413||t.status===429||t.status===500||t.status===502||t.status===503||t.status===504:!0}function t0({key:t,methods:e,name:r,request:i,retryCount:s=3,retryDelay:n=150,timeout:o,type:a},c){const l=u2();return{config:{key:t,methods:e,name:r,request:i,retryCount:s,retryDelay:n,timeout:o,type:a},request:f2(i,{methods:e,retryCount:s,retryDelay:n,uid:l}),value:c}}function $u(t,e={}){const{key:r="fallback",name:i="Fallback",rank:s=!1,shouldThrow:n=w2,retryCount:o,retryDelay:a}=e;return({chain:c,pollingInterval:l=4e3,timeout:d,...u})=>{let h=t,p=()=>{};const w=t0({key:r,name:i,async request({method:f,params:m}){let v;const x=async(E=0)=>{const A=h[E]({...u,chain:c,retryCount:0,timeout:d});try{const k=await A.request({method:f,params:m});return p({method:f,params:m,response:k,transport:A,status:"success"}),k}catch(k){if(p({error:k,method:f,params:m,transport:A,status:"error"}),n(k)||E===h.length-1||(v??(v=h.slice(E+1).some(T=>{const{include:j,exclude:M}=T({chain:c}).config.methods||{};return j?j.includes(f):M?!M.includes(f):!0})),!v))throw k;return x(E+1)}};return x()},retryCount:o,retryDelay:a,type:"fallback"},{onResponse:f=>p=f,transports:h.map(f=>f({chain:c,retryCount:0}))});if(s){const f=typeof s=="object"?s:{};m2({chain:c,interval:f.interval??l,onTransports:m=>h=m,ping:f.ping,sampleCount:f.sampleCount,timeout:f.timeout,transports:h,weights:f.weights})}return w}}function w2(t){return!!("code"in t&&typeof t.code=="number"&&(t.code===ys.code||t.code===xi.code||Wl.nodeMessage.test(t.message)||t.code===5e3))}function m2({chain:t,interval:e=4e3,onTransports:r,ping:i,sampleCount:s=10,timeout:n=1e3,transports:o,weights:a={}}){const{stability:c=.7,latency:l=.3}=a,d=[],u=async()=>{const h=await Promise.all(o.map(async f=>{const m=f({chain:t,retryCount:0,timeout:n}),v=Date.now();let x,E;try{await(i?i({transport:m}):m.request({method:"net_listening"})),E=1}catch{E=0}finally{x=Date.now()}return{latency:x-v,success:E}}));d.push(h),d.length>s&&d.shift();const p=Math.max(...d.map(f=>Math.max(...f.map(({latency:m})=>m)))),w=o.map((f,m)=>{const v=d.map(k=>k[m].latency),x=1-v.reduce((k,T)=>k+T,0)/v.length/p,E=d.map(k=>k[m].success),A=E.reduce((k,T)=>k+T,0)/E.length;return A===0?[0,m]:[l*x+c*A,m]}).sort((f,m)=>m[0]-f[0]);r(w.map(([,f])=>o[f])),await e0(e),u()};u()}class v2 extends we{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro",name:"UrlRequiredError"})}}function b2(t,{errorInstance:e=new Error("timed out"),timeout:r,signal:i}){return new Promise((s,n)=>{(async()=>{let o;try{const a=new AbortController;r>0&&(o=setTimeout(()=>{i?a.abort():n(e)},r)),s(await t({signal:(a==null?void 0:a.signal)||null}))}catch(a){(a==null?void 0:a.name)==="AbortError"&&n(e),n(a)}finally{clearTimeout(o)}})()})}function y2(){return{current:0,take(){return this.current++},reset(){this.current=0}}}const Ru=y2();function C2(t,e={}){return{async request(r){var u;const{body:i,onRequest:s=e.onRequest,onResponse:n=e.onResponse,timeout:o=e.timeout??1e4}=r,a={...e.fetchOptions??{},...r.fetchOptions??{}},{headers:c,method:l,signal:d}=a;try{const h=await b2(async({signal:w})=>{const f={...a,body:Array.isArray(i)?Ci(i.map(x=>({jsonrpc:"2.0",id:x.id??Ru.take(),...x}))):Ci({jsonrpc:"2.0",id:i.id??Ru.take(),...i}),headers:{"Content-Type":"application/json",...c},method:l||"POST",signal:d||(o>0?w:null)},m=new Request(t,f),v=await(s==null?void 0:s(m,f))??{...f,url:t};return await fetch(v.url??t,v)},{errorInstance:new Pu({body:i,url:t}),timeout:o,signal:!0});n&&await n(h);let p;if((u=h.headers.get("Content-Type"))!=null&&u.startsWith("application/json"))p=await h.json();else{p=await h.text();try{p=JSON.parse(p||"{}")}catch(w){if(h.ok)throw w;p={error:p}}}if(!h.ok)throw new yn({body:i,details:Ci(p.error)||h.statusText,headers:h.headers,status:h.status,url:t});return p}catch(h){throw h instanceof yn||h instanceof Pu?h:new yn({body:i,cause:h,url:t})}}}}function Ao(t,e={}){const{batch:r,fetchOptions:i,key:s="http",methods:n,name:o="HTTP JSON-RPC",onFetchRequest:a,onFetchResponse:c,retryDelay:l,raw:d}=e;return({chain:u,retryCount:h,timeout:p})=>{const{batchSize:w=1e3,wait:f=0}=typeof r=="object"?r:{},m=e.retryCount??h,v=p??e.timeout??1e4,x=t||(u==null?void 0:u.rpcUrls.default.http[0]);if(!x)throw new v2;const E=C2(x,{fetchOptions:i,onRequest:a,onResponse:c,timeout:v});return t0({key:s,methods:n,name:o,async request({method:A,params:k}){const T={method:A,params:k},{schedule:j}=d2({id:x,wait:f,shouldSplitBatch(D){return D.length>w},fn:D=>E.request({body:D}),sort:(D,Q)=>D.id-Q.id}),M=async D=>r?j(D):[await E.request({body:D})],[{error:_,result:U}]=await M(T);if(d)return{error:_,result:U};if(_)throw new zp({body:T,error:_,url:x});return U},retryCount:m,retryDelay:l,timeout:v,type:"http"},{fetchOptions:i,url:x})}}function Ft(t){return{formatters:void 0,fees:void 0,serializers:void 0,...t}}function x2(t){const{authorizationList:e}=t;if(e)for(const r of e){const{chainId:i}=r,s=r.address;if(!Cr(s))throw new qr({address:s});if(i<0)throw new ro({chainId:i})}md(t)}function E2(t){const{blobVersionedHashes:e}=t;if(e){if(e.length===0)throw new Qp;for(const r of e){const i=ws(r),s=Na(Nm(r,0,1));if(i!==32)throw new i2({hash:r,size:i});if(s!==Xp)throw new s2({hash:r,version:s})}}md(t)}function md(t){const{chainId:e,maxPriorityFeePerGas:r,maxFeePerGas:i,to:s}=t;if(e<=0)throw new ro({chainId:e});if(s&&!Cr(s))throw new qr({address:s});if(i&&i>Fa)throw new to({maxFeePerGas:i});if(r&&i&&r>i)throw new gd({maxFeePerGas:i,maxPriorityFeePerGas:r})}function I2(t){const{chainId:e,maxPriorityFeePerGas:r,gasPrice:i,maxFeePerGas:s,to:n}=t;if(e<=0)throw new ro({chainId:e});if(n&&!Cr(n))throw new qr({address:n});if(r||s)throw new we("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");if(i&&i>Fa)throw new to({maxFeePerGas:i})}function A2(t){const{chainId:e,maxPriorityFeePerGas:r,gasPrice:i,maxFeePerGas:s,to:n}=t;if(n&&!Cr(n))throw new qr({address:n});if(typeof e<"u"&&e<=0)throw new ro({chainId:e});if(r||s)throw new we("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");if(i&&i>Fa)throw new to({maxFeePerGas:i})}function io(t){if(!t||t.length===0)return[];const e=[];for(let r=0;r<t.length;r++){const{address:i,storageKeys:s}=t[r];for(let n=0;n<s.length;n++)if(s[n].length-2!==64)throw new Mm({storageKey:s[n]});if(!Cr(i,{strict:!1}))throw new qr({address:i});e.push([i,s])}return e}function N2(t,e){const r=a2(t);return r==="eip1559"?_2(t,e):r==="eip2930"?P2(t,e):r==="eip4844"?S2(t,e):r==="eip7702"?k2(t,e):T2(t,e)}function k2(t,e){const{authorizationList:r,chainId:i,gas:s,nonce:n,to:o,value:a,maxFeePerGas:c,maxPriorityFeePerGas:l,accessList:d,data:u}=t;x2(t);const h=io(d),p=O2(r);return Ps(["0x04",Oi([ae(i),n?ae(n):"0x",l?ae(l):"0x",c?ae(c):"0x",s?ae(s):"0x",o??"0x",a?ae(a):"0x",u??"0x",h,p,...Ts(t,e)])])}function S2(t,e){const{chainId:r,gas:i,nonce:s,to:n,value:o,maxFeePerBlobGas:a,maxFeePerGas:c,maxPriorityFeePerGas:l,accessList:d,data:u}=t;E2(t);let h=t.blobVersionedHashes,p=t.sidecars;if(t.blobs&&(typeof h>"u"||typeof p>"u")){const E=typeof t.blobs[0]=="string"?t.blobs:t.blobs.map(T=>Er(T)),A=t.kzg,k=Gp({blobs:E,kzg:A});if(typeof h>"u"&&(h=t2({commitments:k})),typeof p>"u"){const T=Zp({blobs:E,commitments:k,kzg:A});p=o2({blobs:E,commitments:k,proofs:T})}}const w=io(d),f=[ae(r),s?ae(s):"0x",l?ae(l):"0x",c?ae(c):"0x",i?ae(i):"0x",n??"0x",o?ae(o):"0x",u??"0x",w,a?ae(a):"0x",h??[],...Ts(t,e)],m=[],v=[],x=[];if(p)for(let E=0;E<p.length;E++){const{blob:A,commitment:k,proof:T}=p[E];m.push(A),v.push(k),x.push(T)}return Ps(["0x03",Oi(p?[f,m,v,x]:f)])}function _2(t,e){const{chainId:r,gas:i,nonce:s,to:n,value:o,maxFeePerGas:a,maxPriorityFeePerGas:c,accessList:l,data:d}=t;md(t);const u=io(l),h=[ae(r),s?ae(s):"0x",c?ae(c):"0x",a?ae(a):"0x",i?ae(i):"0x",n??"0x",o?ae(o):"0x",d??"0x",u,...Ts(t,e)];return Ps(["0x02",Oi(h)])}function P2(t,e){const{chainId:r,gas:i,data:s,nonce:n,to:o,value:a,accessList:c,gasPrice:l}=t;I2(t);const d=io(c),u=[ae(r),n?ae(n):"0x",l?ae(l):"0x",i?ae(i):"0x",o??"0x",a?ae(a):"0x",s??"0x",d,...Ts(t,e)];return Ps(["0x01",Oi(u)])}function T2(t,e){const{chainId:r=0,gas:i,data:s,nonce:n,to:o,value:a,gasPrice:c}=t;A2(t);let l=[n?ae(n):"0x",c?ae(c):"0x",i?ae(i):"0x",o??"0x",a?ae(a):"0x",s??"0x"];if(e){const d=(()=>{if(e.v>=35n)return(e.v-35n)/2n>0?e.v:27n+(e.v===35n?0n:1n);if(r>0)return BigInt(r*2)+BigInt(35n+e.v-27n);const p=27n+(e.v===27n?0n:1n);if(e.v!==p)throw new Rm({v:e.v});return p})(),u=ms(e.r),h=ms(e.s);l=[...l,ae(d),u==="0x00"?"0x":u,h==="0x00"?"0x":h]}else r>0&&(l=[...l,ae(r),"0x","0x"]);return Oi(l)}function Ts(t,e){const r=e??t,{v:i,yParity:s}=r;if(typeof r.r>"u")return[];if(typeof r.s>"u")return[];if(typeof i>"u"&&typeof s>"u")return[];const n=ms(r.r),o=ms(r.s);return[typeof s=="number"?s?ae(1):"0x":i===0n?"0x":i===1n?ae(1):i===27n?"0x":ae(1),n==="0x00"?"0x":n,o==="0x00"?"0x":o]}function O2(t){if(!t||t.length===0)return[];const e=[];for(const r of t){const{chainId:i,nonce:s,...n}=r,o=r.address;e.push([i?ae(i):"0x",o,s?ae(s):"0x",...Ts({},n)])}return e}const $2={"0x0":"reverted","0x1":"success"};function R2(t){const e={...t,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,contractAddress:t.contractAddress?t.contractAddress:null,cumulativeGasUsed:t.cumulativeGasUsed?BigInt(t.cumulativeGasUsed):null,effectiveGasPrice:t.effectiveGasPrice?BigInt(t.effectiveGasPrice):null,gasUsed:t.gasUsed?BigInt(t.gasUsed):null,logs:t.logs?t.logs.map(r=>c2(r)):null,to:t.to?t.to:null,transactionIndex:t.transactionIndex?Na(t.transactionIndex):null,status:t.status?$2[t.status]:null,type:t.type?Wp[t.type]||t.type:null};return t.blobGasPrice&&(e.blobGasPrice=BigInt(t.blobGasPrice)),t.blobGasUsed&&(e.blobGasUsed=BigInt(t.blobGasUsed)),e}const L2=Wa("transactionReceipt",R2),M2=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),r0=new Uint8Array(new Array(16).fill(0).map((t,e)=>e)),B2=r0.map(t=>(9*t+5)%16);let U2=[r0],D2=[B2];for(let t=0;t<4;t++)for(let e of[U2,D2])e.push(e[t].map(r=>M2[r]));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Ga=BigInt(0),Za=BigInt(1),j2=BigInt(2);function Si(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"}function so(t){if(!Si(t))throw new Error("Uint8Array expected")}function xs(t,e){if(typeof e!="boolean")throw new Error(t+" boolean expected, got "+e)}const z2=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function Es(t){so(t);let e="";for(let r=0;r<t.length;r++)e+=z2[t[r]];return e}function ps(t){const e=t.toString(16);return e.length&1?"0"+e:e}function vd(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);return t===""?Ga:BigInt("0x"+t)}const cr={_0:48,_9:57,A:65,F:70,a:97,f:102};function Lu(t){if(t>=cr._0&&t<=cr._9)return t-cr._0;if(t>=cr.A&&t<=cr.F)return t-(cr.A-10);if(t>=cr.a&&t<=cr.f)return t-(cr.a-10)}function Is(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);const e=t.length,r=e/2;if(e%2)throw new Error("hex string expected, got unpadded hex of length "+e);const i=new Uint8Array(r);for(let s=0,n=0;s<r;s++,n+=2){const o=Lu(t.charCodeAt(n)),a=Lu(t.charCodeAt(n+1));if(o===void 0||a===void 0){const c=t[n]+t[n+1];throw new Error('hex string expected, got non-hex character "'+c+'" at index '+n)}i[s]=o*16+a}return i}function Ei(t){return vd(Es(t))}function bd(t){return so(t),vd(Es(Uint8Array.from(t).reverse()))}function As(t,e){return Is(t.toString(16).padStart(e*2,"0"))}function yd(t,e){return As(t,e).reverse()}function H2(t){return Is(ps(t))}function Wt(t,e,r){let i;if(typeof e=="string")try{i=Is(e)}catch(n){throw new Error(t+" must be hex string or Uint8Array, cause: "+n)}else if(Si(e))i=Uint8Array.from(e);else throw new Error(t+" must be hex string or Uint8Array");const s=i.length;if(typeof r=="number"&&s!==r)throw new Error(t+" of length "+r+" expected, got "+s);return i}function Vn(...t){let e=0;for(let i=0;i<t.length;i++){const s=t[i];so(s),e+=s.length}const r=new Uint8Array(e);for(let i=0,s=0;i<t.length;i++){const n=t[i];r.set(n,s),s+=n.length}return r}function q2(t,e){if(t.length!==e.length)return!1;let r=0;for(let i=0;i<t.length;i++)r|=t[i]^e[i];return r===0}function W2(t){if(typeof t!="string")throw new Error("string expected");return new Uint8Array(new TextEncoder().encode(t))}const yc=t=>typeof t=="bigint"&&Ga<=t;function Ka(t,e,r){return yc(t)&&yc(e)&&yc(r)&&e<=t&&t<r}function Ii(t,e,r,i){if(!Ka(e,r,i))throw new Error("expected valid "+t+": "+r+" <= n < "+i+", got "+e)}function i0(t){let e;for(e=0;t>Ga;t>>=Za,e+=1);return e}function F2(t,e){return t>>BigInt(e)&Za}function V2(t,e,r){return t|(r?Za:Ga)<<BigInt(e)}const Cd=t=>(j2<<BigInt(t-1))-Za,Cc=t=>new Uint8Array(t),Mu=t=>Uint8Array.from(t);function s0(t,e,r){if(typeof t!="number"||t<2)throw new Error("hashLen must be a number");if(typeof e!="number"||e<2)throw new Error("qByteLen must be a number");if(typeof r!="function")throw new Error("hmacFn must be a function");let i=Cc(t),s=Cc(t),n=0;const o=()=>{i.fill(1),s.fill(0),n=0},a=(...d)=>r(s,i,...d),c=(d=Cc())=>{s=a(Mu([0]),d),i=a(),d.length!==0&&(s=a(Mu([1]),d),i=a())},l=()=>{if(n++>=1e3)throw new Error("drbg: tried 1000 values");let d=0;const u=[];for(;d<e;){i=a();const h=i.slice();u.push(h),d+=i.length}return Vn(...u)};return(d,u)=>{o(),c(d);let h;for(;!(h=u(l()));)c();return o(),h}}const G2={bigint:t=>typeof t=="bigint",function:t=>typeof t=="function",boolean:t=>typeof t=="boolean",string:t=>typeof t=="string",stringOrUint8Array:t=>typeof t=="string"||Si(t),isSafeInteger:t=>Number.isSafeInteger(t),array:t=>Array.isArray(t),field:(t,e)=>e.Fp.isValid(t),hash:t=>typeof t=="function"&&Number.isSafeInteger(t.outputLen)};function no(t,e,r={}){const i=(s,n,o)=>{const a=G2[n];if(typeof a!="function")throw new Error("invalid validator function");const c=t[s];if(!(o&&c===void 0)&&!a(c,t))throw new Error("param "+String(s)+" is invalid. Expected "+n+", got "+c)};for(const[s,n]of Object.entries(e))i(s,n,!1);for(const[s,n]of Object.entries(r))i(s,n,!0);return t}const Z2=()=>{throw new Error("not implemented")};function Vl(t){const e=new WeakMap;return(r,...i)=>{const s=e.get(r);if(s!==void 0)return s;const n=t(r,...i);return e.set(r,n),n}}var K2=Object.freeze({__proto__:null,isBytes:Si,abytes:so,abool:xs,bytesToHex:Es,numberToHexUnpadded:ps,hexToNumber:vd,hexToBytes:Is,bytesToNumberBE:Ei,bytesToNumberLE:bd,numberToBytesBE:As,numberToBytesLE:yd,numberToVarBytesBE:H2,ensureBytes:Wt,concatBytes:Vn,equalBytes:q2,utf8ToBytes:W2,inRange:Ka,aInRange:Ii,bitLen:i0,bitGet:F2,bitSet:V2,bitMask:Cd,createHmacDrbg:s0,validateObject:no,notImplemented:Z2,memoized:Vl});const Y2="0.1.1";function J2(){return Y2}class at extends Error{constructor(e,r={}){const i=(()=>{var a;if(r.cause instanceof at){if(r.cause.details)return r.cause.details;if(r.cause.shortMessage)return r.cause.shortMessage}return(a=r.cause)!=null&&a.message?r.cause.message:r.details})(),s=r.cause instanceof at&&r.cause.docsPath||r.docsPath,n=`https://oxlib.sh${s??""}`,o=[e||"An error occurred.",...r.metaMessages?["",...r.metaMessages]:[],...i||s?["",i?`Details: ${i}`:void 0,s?`See: ${n}`:void 0]:[]].filter(a=>typeof a=="string").join(`
`);super(o,r.cause?{cause:r.cause}:void 0),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:`ox@${J2()}`}),this.cause=r.cause,this.details=i,this.docs=n,this.docsPath=s,this.shortMessage=e}walk(e){return n0(this,e)}}function n0(t,e){return e!=null&&e(t)?t:t&&typeof t=="object"&&"cause"in t&&t.cause?n0(t.cause,e):e?null:t}function X2(t,e){if(Uu(t)>e)throw new ov({givenSize:Uu(t),maxSize:e})}const lr={zero:48,nine:57,A:65,F:70,a:97,f:102};function Bu(t){if(t>=lr.zero&&t<=lr.nine)return t-lr.zero;if(t>=lr.A&&t<=lr.F)return t-(lr.A-10);if(t>=lr.a&&t<=lr.f)return t-(lr.a-10)}function Q2(t,e={}){const{dir:r,size:i=32}=e;if(i===0)return t;if(t.length>i)throw new av({size:t.length,targetSize:i,type:"Bytes"});const s=new Uint8Array(i);for(let n=0;n<i;n++){const o=r==="right";s[o?n:i-n-1]=t[o?n:t.length-n-1]}return s}function xd(t,e){if(Gl(t)>e)throw new fv({givenSize:Gl(t),maxSize:e})}function o0(t,e={}){const{dir:r,size:i=32}=e;if(i===0)return t;const s=t.replace("0x","");if(s.length>i*2)throw new gv({size:Math.ceil(s.length/2),targetSize:i,type:"Hex"});return`0x${s[r==="right"?"padEnd":"padStart"](i*2,"0")}`}const ev=new TextEncoder;function tv(t){return t instanceof Uint8Array?t:typeof t=="string"?iv(t):rv(t)}function rv(t){return t instanceof Uint8Array?t:new Uint8Array(t)}function iv(t,e={}){const{size:r}=e;let i=t;r&&(xd(t,r),i=Ed(t,r));let s=i.slice(2);s.length%2&&(s=`0${s}`);const n=s.length/2,o=new Uint8Array(n);for(let a=0,c=0;a<n;a++){const l=Bu(s.charCodeAt(c++)),d=Bu(s.charCodeAt(c++));if(l===void 0||d===void 0)throw new at(`Invalid byte sequence ("${s[c-2]}${s[c-1]}" in "${s}").`);o[a]=l*16+d}return o}function sv(t,e={}){const{size:r}=e,i=ev.encode(t);return typeof r=="number"?(X2(i,r),nv(i,r)):i}function nv(t,e){return Q2(t,{dir:"right",size:e})}function Uu(t){return t.length}class ov extends at{constructor({givenSize:e,maxSize:r}){super(`Size cannot exceed \`${r}\` bytes. Given size: \`${e}\` bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Bytes.SizeOverflowError"})}}class av extends at{constructor({size:e,targetSize:r,type:i}){super(`${i.charAt(0).toUpperCase()}${i.slice(1).toLowerCase()} size (\`${e}\`) exceeds padding size (\`${r}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Bytes.SizeExceedsPaddingSizeError"})}}const cv=new TextEncoder,lv=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function a0(...t){return`0x${t.reduce((e,r)=>e+r.replace("0x",""),"")}`}function dv(t,e={}){const r=`0x${Number(t)}`;return typeof e.size=="number"?(xd(r,e.size),Sa(r,e.size)):r}function c0(t,e={}){let r="";for(let s=0;s<t.length;s++)r+=lv[t[s]];const i=`0x${r}`;return typeof e.size=="number"?(xd(i,e.size),Ed(i,e.size)):i}function uv(t,e={}){const{signed:r,size:i}=e,s=BigInt(t);let n;i?r?n=(1n<<BigInt(i)*8n-1n)-1n:n=2n**(BigInt(i)*8n)-1n:typeof t=="number"&&(n=BigInt(Number.MAX_SAFE_INTEGER));const o=typeof n=="bigint"&&r?-n-1n:0;if(n&&s>n||s<o){const c=typeof t=="bigint"?"n":"";throw new pv({max:n?`${n}${c}`:void 0,min:`${o}${c}`,signed:r,size:i,value:`${t}${c}`})}const a=`0x${(r&&s<0?(1n<<BigInt(i*8))+BigInt(s):s).toString(16)}`;return i?Sa(a,i):a}function hv(t,e={}){return c0(cv.encode(t),e)}function Sa(t,e){return o0(t,{dir:"left",size:e})}function Ed(t,e){return o0(t,{dir:"right",size:e})}function Gl(t){return Math.ceil((t.length-2)/2)}class pv extends at{constructor({max:e,min:r,signed:i,size:s,value:n}){super(`Number \`${n}\` is not in safe${s?` ${s*8}-bit`:""}${i?" signed":" unsigned"} integer range ${e?`(\`${r}\` to \`${e}\`)`:`(above \`${r}\`)`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Hex.IntegerOutOfRangeError"})}}class fv extends at{constructor({givenSize:e,maxSize:r}){super(`Size cannot exceed \`${r}\` bytes. Given size: \`${e}\` bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Hex.SizeOverflowError"})}}class gv extends at{constructor({size:e,targetSize:r,type:i}){super(`${i.charAt(0).toUpperCase()}${i.slice(1).toLowerCase()} size (\`${e}\`) exceeds padding size (\`${r}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Hex.SizeExceedsPaddingSizeError"})}}function wv(t,e={}){const{as:r=typeof t=="string"?"Hex":"Bytes"}=e,i=Bp(tv(t));return r==="Bytes"?i:c0(i)}class mv extends Map{constructor(e){super(),Object.defineProperty(this,"maxSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=e}get(e){const r=super.get(e);return super.has(e)&&r!==void 0&&(this.delete(e),super.set(e,r)),r}set(e,r){if(super.set(e,r),this.maxSize&&this.size>this.maxSize){const i=this.keys().next().value;i&&this.delete(i)}return this}}const vv={checksum:new mv(8192)},xc=vv.checksum,bv=/^0x[a-fA-F0-9]{40}$/;function l0(t,e={}){const{strict:r=!0}=e;if(!bv.test(t))throw new Du({address:t,cause:new Cv});if(r){if(t.toLowerCase()===t)return;if(yv(t)!==t)throw new Du({address:t,cause:new xv})}}function yv(t){if(xc.has(t))return xc.get(t);l0(t,{strict:!1});const e=t.substring(2).toLowerCase(),r=wv(sv(e),{as:"Bytes"}),i=e.split("");for(let n=0;n<40;n+=2)r[n>>1]>>4>=8&&i[n]&&(i[n]=i[n].toUpperCase()),(r[n>>1]&15)>=8&&i[n+1]&&(i[n+1]=i[n+1].toUpperCase());const s=`0x${i.join("")}`;return xc.set(t,s),s}class Du extends at{constructor({address:e,cause:r}){super(`Address "${e}" is invalid.`,{cause:r}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Address.InvalidAddressError"})}}class Cv extends at{constructor(){super("Address is not a 20 byte (40 hexadecimal character) value."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Address.InvalidInputError"})}}class xv extends at{constructor(){super("Address does not match its checksum counterpart."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Address.InvalidChecksumError"})}}const Ev=/^(.*)\[([0-9]*)\]$/,Iv=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,Av=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;function Zl(t,e){if(t.length!==e.length)throw new kv({expectedLength:t.length,givenLength:e.length});const r=[];for(let i=0;i<t.length;i++){const s=t[i],n=e[i];r.push(Zl.encode(s,n))}return a0(...r)}(function(t){function e(r,i,s=!1){if(r==="address"){const c=i;return l0(c),Sa(c.toLowerCase(),s?32:0)}if(r==="string")return hv(i);if(r==="bytes")return i;if(r==="bool")return Sa(dv(i),s?32:1);const n=r.match(Av);if(n){const[c,l,d="256"]=n,u=Number.parseInt(d)/8;return uv(i,{size:s?32:u,signed:l==="int"})}const o=r.match(Iv);if(o){const[c,l]=o;if(Number.parseInt(l)!==(i.length-2)/2)throw new Nv({expectedSize:Number.parseInt(l),value:i});return Ed(i,s?32:0)}const a=r.match(Ev);if(a&&Array.isArray(i)){const[c,l]=a,d=[];for(let u=0;u<i.length;u++)d.push(e(l,i[u],!0));return d.length===0?"0x":a0(...d)}throw new Sv(r)}t.encode=e})(Zl||(Zl={}));class Nv extends at{constructor({expectedSize:e,value:r}){super(`Size of bytes "${r}" (bytes${Gl(r)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiParameters.BytesSizeMismatchError"})}}class kv extends at{constructor({expectedLength:e,givenLength:r}){super(["ABI encoding parameters/values length mismatch.",`Expected length (parameters): ${e}`,`Given length (values): ${r}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiParameters.LengthMismatchError"})}}class Sv extends at{constructor(e){super(`Type \`${e}\` is not a valid ABI Type.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiParameters.InvalidTypeError"})}}class d0 extends hd{constructor(e,r){super(),this.finished=!1,this.destroyed=!1,rm(e);const i=Ha(r);if(this.iHash=e.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const s=this.blockLen,n=new Uint8Array(s);n.set(i.length>s?e.create().update(i).digest():i);for(let o=0;o<n.length;o++)n[o]^=54;this.iHash.update(n),this.oHash=e.create();for(let o=0;o<n.length;o++)n[o]^=106;this.oHash.update(n),n.fill(0)}update(e){return vs(this),this.iHash.update(e),this}digestInto(e){vs(this),eo(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){const e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));const{oHash:r,iHash:i,finished:s,destroyed:n,blockLen:o,outputLen:a}=this;return e=e,e.finished=s,e.destroyed=n,e.blockLen=o,e.outputLen=a,e.oHash=r._cloneInto(e.oHash),e.iHash=i._cloneInto(e.iHash),e}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const u0=(t,e,r)=>new d0(t,e).update(r).digest();u0.create=(t,e)=>new d0(t,e);const Je=BigInt(0),Le=BigInt(1),gi=BigInt(2),_v=BigInt(3),Kl=BigInt(4),ju=BigInt(5),zu=BigInt(8);function gt(t,e){const r=t%e;return r>=Je?r:e+r}function Pv(t,e,r){if(e<Je)throw new Error("invalid exponent, negatives unsupported");if(r<=Je)throw new Error("invalid modulus");if(r===Le)return Je;let i=Le;for(;e>Je;)e&Le&&(i=i*t%r),t=t*t%r,e>>=Le;return i}function St(t,e,r){let i=t;for(;e-- >Je;)i*=i,i%=r;return i}function Yl(t,e){if(t===Je)throw new Error("invert: expected non-zero number");if(e<=Je)throw new Error("invert: expected positive modulus, got "+e);let r=gt(t,e),i=e,s=Je,n=Le;for(;r!==Je;){const o=i/r,a=i%r,c=s-n*o;i=r,r=a,s=n,n=c}if(i!==Le)throw new Error("invert: does not exist");return gt(s,e)}function Tv(t){const e=(t-Le)/gi;let r,i,s;for(r=t-Le,i=0;r%gi===Je;r/=gi,i++);for(s=gi;s<t&&Pv(s,e,t)!==t-Le;s++)if(s>1e3)throw new Error("Cannot find square root: likely non-prime P");if(i===1){const o=(t+Le)/Kl;return function(a,c){const l=a.pow(c,o);if(!a.eql(a.sqr(l),c))throw new Error("Cannot find square root");return l}}const n=(r+Le)/gi;return function(o,a){if(o.pow(a,e)===o.neg(o.ONE))throw new Error("Cannot find square root");let c=i,l=o.pow(o.mul(o.ONE,s),r),d=o.pow(a,n),u=o.pow(a,r);for(;!o.eql(u,o.ONE);){if(o.eql(u,o.ZERO))return o.ZERO;let h=1;for(let w=o.sqr(u);h<c&&!o.eql(w,o.ONE);h++)w=o.sqr(w);const p=o.pow(l,Le<<BigInt(c-h-1));l=o.sqr(p),d=o.mul(d,p),u=o.mul(u,l),c=h}return d}}function Ov(t){if(t%Kl===_v){const e=(t+Le)/Kl;return function(r,i){const s=r.pow(i,e);if(!r.eql(r.sqr(s),i))throw new Error("Cannot find square root");return s}}if(t%zu===ju){const e=(t-ju)/zu;return function(r,i){const s=r.mul(i,gi),n=r.pow(s,e),o=r.mul(i,n),a=r.mul(r.mul(o,gi),n),c=r.mul(o,r.sub(a,r.ONE));if(!r.eql(r.sqr(c),i))throw new Error("Cannot find square root");return c}}return Tv(t)}const $v=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function Rv(t){const e={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},r=$v.reduce((i,s)=>(i[s]="function",i),e);return no(t,r)}function Lv(t,e,r){if(r<Je)throw new Error("invalid exponent, negatives unsupported");if(r===Je)return t.ONE;if(r===Le)return e;let i=t.ONE,s=e;for(;r>Je;)r&Le&&(i=t.mul(i,s)),s=t.sqr(s),r>>=Le;return i}function Mv(t,e){const r=new Array(e.length),i=e.reduce((n,o,a)=>t.is0(o)?n:(r[a]=n,t.mul(n,o)),t.ONE),s=t.inv(i);return e.reduceRight((n,o,a)=>t.is0(o)?n:(r[a]=t.mul(n,r[a]),t.mul(n,o)),s),r}function h0(t,e){const r=e!==void 0?e:t.toString(2).length,i=Math.ceil(r/8);return{nBitLength:r,nByteLength:i}}function p0(t,e,r=!1,i={}){if(t<=Je)throw new Error("invalid field: expected ORDER > 0, got "+t);const{nBitLength:s,nByteLength:n}=h0(t,e);if(n>2048)throw new Error("invalid field: expected ORDER of <= 2048 bytes");let o;const a=Object.freeze({ORDER:t,isLE:r,BITS:s,BYTES:n,MASK:Cd(s),ZERO:Je,ONE:Le,create:c=>gt(c,t),isValid:c=>{if(typeof c!="bigint")throw new Error("invalid field element: expected bigint, got "+typeof c);return Je<=c&&c<t},is0:c=>c===Je,isOdd:c=>(c&Le)===Le,neg:c=>gt(-c,t),eql:(c,l)=>c===l,sqr:c=>gt(c*c,t),add:(c,l)=>gt(c+l,t),sub:(c,l)=>gt(c-l,t),mul:(c,l)=>gt(c*l,t),pow:(c,l)=>Lv(a,c,l),div:(c,l)=>gt(c*Yl(l,t),t),sqrN:c=>c*c,addN:(c,l)=>c+l,subN:(c,l)=>c-l,mulN:(c,l)=>c*l,inv:c=>Yl(c,t),sqrt:i.sqrt||(c=>(o||(o=Ov(t)),o(a,c))),invertBatch:c=>Mv(a,c),cmov:(c,l,d)=>d?l:c,toBytes:c=>r?yd(c,n):As(c,n),fromBytes:c=>{if(c.length!==n)throw new Error("Field.fromBytes: expected "+n+" bytes, got "+c.length);return r?bd(c):Ei(c)}});return Object.freeze(a)}function f0(t){if(typeof t!="bigint")throw new Error("field order must be bigint");const e=t.toString(2).length;return Math.ceil(e/8)}function g0(t){const e=f0(t);return e+Math.ceil(e/2)}function Bv(t,e,r=!1){const i=t.length,s=f0(e),n=g0(e);if(i<16||i<n||i>1024)throw new Error("expected "+n+"-1024 bytes of input, got "+i);const o=r?bd(t):Ei(t),a=gt(o,e-Le)+Le;return r?yd(a,s):As(a,s)}const Hu=BigInt(0),No=BigInt(1);function Ec(t,e){const r=e.negate();return t?r:e}function w0(t,e){if(!Number.isSafeInteger(t)||t<=0||t>e)throw new Error("invalid window size, expected [1.."+e+"], got W="+t)}function Ic(t,e){w0(t,e);const r=Math.ceil(e/t)+1,i=2**(t-1);return{windows:r,windowSize:i}}function Uv(t,e){if(!Array.isArray(t))throw new Error("array expected");t.forEach((r,i)=>{if(!(r instanceof e))throw new Error("invalid point at index "+i)})}function Dv(t,e){if(!Array.isArray(t))throw new Error("array of scalars expected");t.forEach((r,i)=>{if(!e.isValid(r))throw new Error("invalid scalar at index "+i)})}const Ac=new WeakMap,m0=new WeakMap;function Nc(t){return m0.get(t)||1}function jv(t,e){return{constTimeNegate:Ec,hasPrecomputes(r){return Nc(r)!==1},unsafeLadder(r,i,s=t.ZERO){let n=r;for(;i>Hu;)i&No&&(s=s.add(n)),n=n.double(),i>>=No;return s},precomputeWindow(r,i){const{windows:s,windowSize:n}=Ic(i,e),o=[];let a=r,c=a;for(let l=0;l<s;l++){c=a,o.push(c);for(let d=1;d<n;d++)c=c.add(a),o.push(c);a=c.double()}return o},wNAF(r,i,s){const{windows:n,windowSize:o}=Ic(r,e);let a=t.ZERO,c=t.BASE;const l=BigInt(2**r-1),d=2**r,u=BigInt(r);for(let h=0;h<n;h++){const p=h*o;let w=Number(s&l);s>>=u,w>o&&(w-=d,s+=No);const f=p,m=p+Math.abs(w)-1,v=h%2!==0,x=w<0;w===0?c=c.add(Ec(v,i[f])):a=a.add(Ec(x,i[m]))}return{p:a,f:c}},wNAFUnsafe(r,i,s,n=t.ZERO){const{windows:o,windowSize:a}=Ic(r,e),c=BigInt(2**r-1),l=2**r,d=BigInt(r);for(let u=0;u<o;u++){const h=u*a;if(s===Hu)break;let p=Number(s&c);if(s>>=d,p>a&&(p-=l,s+=No),p===0)continue;let w=i[h+Math.abs(p)-1];p<0&&(w=w.negate()),n=n.add(w)}return n},getPrecomputes(r,i,s){let n=Ac.get(i);return n||(n=this.precomputeWindow(i,r),r!==1&&Ac.set(i,s(n))),n},wNAFCached(r,i,s){const n=Nc(r);return this.wNAF(n,this.getPrecomputes(n,r,s),i)},wNAFCachedUnsafe(r,i,s,n){const o=Nc(r);return o===1?this.unsafeLadder(r,i,n):this.wNAFUnsafe(o,this.getPrecomputes(o,r,s),i,n)},setWindowSize(r,i){w0(i,e),m0.set(r,i),Ac.delete(r)}}}function zv(t,e,r,i){if(Uv(r,t),Dv(i,e),r.length!==i.length)throw new Error("arrays of points and scalars must have equal length");const s=t.ZERO,n=i0(BigInt(r.length)),o=n>12?n-3:n>4?n-2:n?2:1,a=(1<<o)-1,c=new Array(a+1).fill(s),l=Math.floor((e.BITS-1)/o)*o;let d=s;for(let u=l;u>=0;u-=o){c.fill(s);for(let p=0;p<i.length;p++){const w=i[p],f=Number(w>>BigInt(u)&BigInt(a));c[f]=c[f].add(r[p])}let h=s;for(let p=c.length-1,w=s;p>0;p--)w=w.add(c[p]),h=h.add(w);if(d=d.add(h),u!==0)for(let p=0;p<o;p++)d=d.double()}return d}function v0(t){return Rv(t.Fp),no(t,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...h0(t.n,t.nBitLength),...t,p:t.Fp.ORDER})}function qu(t){t.lowS!==void 0&&xs("lowS",t.lowS),t.prehash!==void 0&&xs("prehash",t.prehash)}function Hv(t){const e=v0(t);no(e,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:r,Fp:i,a:s}=e;if(r){if(!i.eql(s,i.ZERO))throw new Error("invalid endomorphism, can only be defined for Koblitz curves that have a=0");if(typeof r!="object"||typeof r.beta!="bigint"||typeof r.splitScalar!="function")throw new Error("invalid endomorphism, expected beta: bigint and splitScalar: function")}return Object.freeze({...e})}const{bytesToNumberBE:qv,hexToBytes:Wv}=K2;class Fv extends Error{constructor(e=""){super(e)}}const wr={Err:Fv,_tlv:{encode:(t,e)=>{const{Err:r}=wr;if(t<0||t>256)throw new r("tlv.encode: wrong tag");if(e.length&1)throw new r("tlv.encode: unpadded data");const i=e.length/2,s=ps(i);if(s.length/2&128)throw new r("tlv.encode: long form length too big");const n=i>127?ps(s.length/2|128):"";return ps(t)+n+s+e},decode(t,e){const{Err:r}=wr;let i=0;if(t<0||t>256)throw new r("tlv.encode: wrong tag");if(e.length<2||e[i++]!==t)throw new r("tlv.decode: wrong tlv");const s=e[i++],n=!!(s&128);let o=0;if(!n)o=s;else{const c=s&127;if(!c)throw new r("tlv.decode(long): indefinite length not supported");if(c>4)throw new r("tlv.decode(long): byte length is too big");const l=e.subarray(i,i+c);if(l.length!==c)throw new r("tlv.decode: length bytes not complete");if(l[0]===0)throw new r("tlv.decode(long): zero leftmost byte");for(const d of l)o=o<<8|d;if(i+=c,o<128)throw new r("tlv.decode(long): not minimal encoding")}const a=e.subarray(i,i+o);if(a.length!==o)throw new r("tlv.decode: wrong value length");return{v:a,l:e.subarray(i+o)}}},_int:{encode(t){const{Err:e}=wr;if(t<vr)throw new e("integer: negative integers are not allowed");let r=ps(t);if(Number.parseInt(r[0],16)&8&&(r="00"+r),r.length&1)throw new e("unexpected DER parsing assertion: unpadded hex");return r},decode(t){const{Err:e}=wr;if(t[0]&128)throw new e("invalid signature integer: negative");if(t[0]===0&&!(t[1]&128))throw new e("invalid signature integer: unnecessary leading zero");return qv(t)}},toSig(t){const{Err:e,_int:r,_tlv:i}=wr,s=typeof t=="string"?Wv(t):t;so(s);const{v:n,l:o}=i.decode(48,s);if(o.length)throw new e("invalid signature: left bytes after parsing");const{v:a,l:c}=i.decode(2,n),{v:l,l:d}=i.decode(2,c);if(d.length)throw new e("invalid signature: left bytes after parsing");return{r:r.decode(a),s:r.decode(l)}},hexFromSig(t){const{_tlv:e,_int:r}=wr,i=e.encode(2,r.encode(t.r)),s=e.encode(2,r.encode(t.s)),n=i+s;return e.encode(48,n)}},vr=BigInt(0),Ke=BigInt(1);BigInt(2);const Wu=BigInt(3);BigInt(4);function Vv(t){const e=Hv(t),{Fp:r}=e,i=p0(e.n,e.nBitLength),s=e.toBytes||((f,m,v)=>{const x=m.toAffine();return Vn(Uint8Array.from([4]),r.toBytes(x.x),r.toBytes(x.y))}),n=e.fromBytes||(f=>{const m=f.subarray(1),v=r.fromBytes(m.subarray(0,r.BYTES)),x=r.fromBytes(m.subarray(r.BYTES,2*r.BYTES));return{x:v,y:x}});function o(f){const{a:m,b:v}=e,x=r.sqr(f),E=r.mul(x,f);return r.add(r.add(E,r.mul(f,m)),v)}if(!r.eql(r.sqr(e.Gy),o(e.Gx)))throw new Error("bad generator point: equation left != right");function a(f){return Ka(f,Ke,e.n)}function c(f){const{allowedPrivateKeyLengths:m,nByteLength:v,wrapPrivateKey:x,n:E}=e;if(m&&typeof f!="bigint"){if(Si(f)&&(f=Es(f)),typeof f!="string"||!m.includes(f.length))throw new Error("invalid private key");f=f.padStart(v*2,"0")}let A;try{A=typeof f=="bigint"?f:Ei(Wt("private key",f,v))}catch{throw new Error("invalid private key, expected hex or "+v+" bytes, got "+typeof f)}return x&&(A=gt(A,E)),Ii("private key",A,Ke,E),A}function l(f){if(!(f instanceof h))throw new Error("ProjectivePoint expected")}const d=Vl((f,m)=>{const{px:v,py:x,pz:E}=f;if(r.eql(E,r.ONE))return{x:v,y:x};const A=f.is0();m==null&&(m=A?r.ONE:r.inv(E));const k=r.mul(v,m),T=r.mul(x,m),j=r.mul(E,m);if(A)return{x:r.ZERO,y:r.ZERO};if(!r.eql(j,r.ONE))throw new Error("invZ was invalid");return{x:k,y:T}}),u=Vl(f=>{if(f.is0()){if(e.allowInfinityPoint&&!r.is0(f.py))return;throw new Error("bad point: ZERO")}const{x:m,y:v}=f.toAffine();if(!r.isValid(m)||!r.isValid(v))throw new Error("bad point: x or y not FE");const x=r.sqr(v),E=o(m);if(!r.eql(x,E))throw new Error("bad point: equation left != right");if(!f.isTorsionFree())throw new Error("bad point: not in prime-order subgroup");return!0});class h{constructor(m,v,x){if(this.px=m,this.py=v,this.pz=x,m==null||!r.isValid(m))throw new Error("x required");if(v==null||!r.isValid(v))throw new Error("y required");if(x==null||!r.isValid(x))throw new Error("z required");Object.freeze(this)}static fromAffine(m){const{x:v,y:x}=m||{};if(!m||!r.isValid(v)||!r.isValid(x))throw new Error("invalid affine point");if(m instanceof h)throw new Error("projective point not allowed");const E=A=>r.eql(A,r.ZERO);return E(v)&&E(x)?h.ZERO:new h(v,x,r.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(m){const v=r.invertBatch(m.map(x=>x.pz));return m.map((x,E)=>x.toAffine(v[E])).map(h.fromAffine)}static fromHex(m){const v=h.fromAffine(n(Wt("pointHex",m)));return v.assertValidity(),v}static fromPrivateKey(m){return h.BASE.multiply(c(m))}static msm(m,v){return zv(h,i,m,v)}_setWindowSize(m){w.setWindowSize(this,m)}assertValidity(){u(this)}hasEvenY(){const{y:m}=this.toAffine();if(r.isOdd)return!r.isOdd(m);throw new Error("Field doesn't support isOdd")}equals(m){l(m);const{px:v,py:x,pz:E}=this,{px:A,py:k,pz:T}=m,j=r.eql(r.mul(v,T),r.mul(A,E)),M=r.eql(r.mul(x,T),r.mul(k,E));return j&&M}negate(){return new h(this.px,r.neg(this.py),this.pz)}double(){const{a:m,b:v}=e,x=r.mul(v,Wu),{px:E,py:A,pz:k}=this;let T=r.ZERO,j=r.ZERO,M=r.ZERO,_=r.mul(E,E),U=r.mul(A,A),D=r.mul(k,k),Q=r.mul(E,A);return Q=r.add(Q,Q),M=r.mul(E,k),M=r.add(M,M),T=r.mul(m,M),j=r.mul(x,D),j=r.add(T,j),T=r.sub(U,j),j=r.add(U,j),j=r.mul(T,j),T=r.mul(Q,T),M=r.mul(x,M),D=r.mul(m,D),Q=r.sub(_,D),Q=r.mul(m,Q),Q=r.add(Q,M),M=r.add(_,_),_=r.add(M,_),_=r.add(_,D),_=r.mul(_,Q),j=r.add(j,_),D=r.mul(A,k),D=r.add(D,D),_=r.mul(D,Q),T=r.sub(T,_),M=r.mul(D,U),M=r.add(M,M),M=r.add(M,M),new h(T,j,M)}add(m){l(m);const{px:v,py:x,pz:E}=this,{px:A,py:k,pz:T}=m;let j=r.ZERO,M=r.ZERO,_=r.ZERO;const U=e.a,D=r.mul(e.b,Wu);let Q=r.mul(v,A),pe=r.mul(x,k),P=r.mul(E,T),g=r.add(v,x),y=r.add(A,k);g=r.mul(g,y),y=r.add(Q,pe),g=r.sub(g,y),y=r.add(v,E);let N=r.add(A,T);return y=r.mul(y,N),N=r.add(Q,P),y=r.sub(y,N),N=r.add(x,E),j=r.add(k,T),N=r.mul(N,j),j=r.add(pe,P),N=r.sub(N,j),_=r.mul(U,y),j=r.mul(D,P),_=r.add(j,_),j=r.sub(pe,_),_=r.add(pe,_),M=r.mul(j,_),pe=r.add(Q,Q),pe=r.add(pe,Q),P=r.mul(U,P),y=r.mul(D,y),pe=r.add(pe,P),P=r.sub(Q,P),P=r.mul(U,P),y=r.add(y,P),Q=r.mul(pe,y),M=r.add(M,Q),Q=r.mul(N,y),j=r.mul(g,j),j=r.sub(j,Q),Q=r.mul(g,pe),_=r.mul(N,_),_=r.add(_,Q),new h(j,M,_)}subtract(m){return this.add(m.negate())}is0(){return this.equals(h.ZERO)}wNAF(m){return w.wNAFCached(this,m,h.normalizeZ)}multiplyUnsafe(m){const{endo:v,n:x}=e;Ii("scalar",m,vr,x);const E=h.ZERO;if(m===vr)return E;if(this.is0()||m===Ke)return this;if(!v||w.hasPrecomputes(this))return w.wNAFCachedUnsafe(this,m,h.normalizeZ);let{k1neg:A,k1:k,k2neg:T,k2:j}=v.splitScalar(m),M=E,_=E,U=this;for(;k>vr||j>vr;)k&Ke&&(M=M.add(U)),j&Ke&&(_=_.add(U)),U=U.double(),k>>=Ke,j>>=Ke;return A&&(M=M.negate()),T&&(_=_.negate()),_=new h(r.mul(_.px,v.beta),_.py,_.pz),M.add(_)}multiply(m){const{endo:v,n:x}=e;Ii("scalar",m,Ke,x);let E,A;if(v){const{k1neg:k,k1:T,k2neg:j,k2:M}=v.splitScalar(m);let{p:_,f:U}=this.wNAF(T),{p:D,f:Q}=this.wNAF(M);_=w.constTimeNegate(k,_),D=w.constTimeNegate(j,D),D=new h(r.mul(D.px,v.beta),D.py,D.pz),E=_.add(D),A=U.add(Q)}else{const{p:k,f:T}=this.wNAF(m);E=k,A=T}return h.normalizeZ([E,A])[0]}multiplyAndAddUnsafe(m,v,x){const E=h.BASE,A=(T,j)=>j===vr||j===Ke||!T.equals(E)?T.multiplyUnsafe(j):T.multiply(j),k=A(this,v).add(A(m,x));return k.is0()?void 0:k}toAffine(m){return d(this,m)}isTorsionFree(){const{h:m,isTorsionFree:v}=e;if(m===Ke)return!0;if(v)return v(h,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:m,clearCofactor:v}=e;return m===Ke?this:v?v(h,this):this.multiplyUnsafe(e.h)}toRawBytes(m=!0){return xs("isCompressed",m),this.assertValidity(),s(h,this,m)}toHex(m=!0){return xs("isCompressed",m),Es(this.toRawBytes(m))}}h.BASE=new h(e.Gx,e.Gy,r.ONE),h.ZERO=new h(r.ZERO,r.ONE,r.ZERO);const p=e.nBitLength,w=jv(h,e.endo?Math.ceil(p/2):p);return{CURVE:e,ProjectivePoint:h,normPrivateKeyToScalar:c,weierstrassEquation:o,isWithinCurveOrder:a}}function Gv(t){const e=v0(t);return no(e,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...e})}function Zv(t){const e=Gv(t),{Fp:r,n:i}=e,s=r.BYTES+1,n=2*r.BYTES+1;function o(P){return gt(P,i)}function a(P){return Yl(P,i)}const{ProjectivePoint:c,normPrivateKeyToScalar:l,weierstrassEquation:d,isWithinCurveOrder:u}=Vv({...e,toBytes(P,g,y){const N=g.toAffine(),S=r.toBytes(N.x),$=Vn;return xs("isCompressed",y),y?$(Uint8Array.from([g.hasEvenY()?2:3]),S):$(Uint8Array.from([4]),S,r.toBytes(N.y))},fromBytes(P){const g=P.length,y=P[0],N=P.subarray(1);if(g===s&&(y===2||y===3)){const S=Ei(N);if(!Ka(S,Ke,r.ORDER))throw new Error("Point is not on curve");const $=d(S);let O;try{O=r.sqrt($)}catch(de){const fe=de instanceof Error?": "+de.message:"";throw new Error("Point is not on curve"+fe)}const se=(O&Ke)===Ke;return(y&1)===1!==se&&(O=r.neg(O)),{x:S,y:O}}else if(g===n&&y===4){const S=r.fromBytes(N.subarray(0,r.BYTES)),$=r.fromBytes(N.subarray(r.BYTES,2*r.BYTES));return{x:S,y:$}}else{const S=s,$=n;throw new Error("invalid Point, expected length of "+S+", or uncompressed "+$+", got "+g)}}}),h=P=>Es(As(P,e.nByteLength));function p(P){const g=i>>Ke;return P>g}function w(P){return p(P)?o(-P):P}const f=(P,g,y)=>Ei(P.slice(g,y));class m{constructor(g,y,N){this.r=g,this.s=y,this.recovery=N,this.assertValidity()}static fromCompact(g){const y=e.nByteLength;return g=Wt("compactSignature",g,y*2),new m(f(g,0,y),f(g,y,2*y))}static fromDER(g){const{r:y,s:N}=wr.toSig(Wt("DER",g));return new m(y,N)}assertValidity(){Ii("r",this.r,Ke,i),Ii("s",this.s,Ke,i)}addRecoveryBit(g){return new m(this.r,this.s,g)}recoverPublicKey(g){const{r:y,s:N,recovery:S}=this,$=T(Wt("msgHash",g));if(S==null||![0,1,2,3].includes(S))throw new Error("recovery id invalid");const O=S===2||S===3?y+e.n:y;if(O>=r.ORDER)throw new Error("recovery id 2 or 3 invalid");const se=S&1?"03":"02",de=c.fromHex(se+h(O)),fe=a(O),te=o(-$*fe),ye=o(N*fe),We=c.BASE.multiplyAndAddUnsafe(de,te,ye);if(!We)throw new Error("point at infinify");return We.assertValidity(),We}hasHighS(){return p(this.s)}normalizeS(){return this.hasHighS()?new m(this.r,o(-this.s),this.recovery):this}toDERRawBytes(){return Is(this.toDERHex())}toDERHex(){return wr.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return Is(this.toCompactHex())}toCompactHex(){return h(this.r)+h(this.s)}}const v={isValidPrivateKey(P){try{return l(P),!0}catch{return!1}},normPrivateKeyToScalar:l,randomPrivateKey:()=>{const P=g0(e.n);return Bv(e.randomBytes(P),e.n)},precompute(P=8,g=c.BASE){return g._setWindowSize(P),g.multiply(BigInt(3)),g}};function x(P,g=!0){return c.fromPrivateKey(P).toRawBytes(g)}function E(P){const g=Si(P),y=typeof P=="string",N=(g||y)&&P.length;return g?N===s||N===n:y?N===2*s||N===2*n:P instanceof c}function A(P,g,y=!0){if(E(P))throw new Error("first arg must be private key");if(!E(g))throw new Error("second arg must be public key");return c.fromHex(g).multiply(l(P)).toRawBytes(y)}const k=e.bits2int||function(P){if(P.length>8192)throw new Error("input is too large");const g=Ei(P),y=P.length*8-e.nBitLength;return y>0?g>>BigInt(y):g},T=e.bits2int_modN||function(P){return o(k(P))},j=Cd(e.nBitLength);function M(P){return Ii("num < 2^"+e.nBitLength,P,vr,j),As(P,e.nByteLength)}function _(P,g,y=U){if(["recovered","canonical"].some(Fe=>Fe in y))throw new Error("sign() legacy options not supported");const{hash:N,randomBytes:S}=e;let{lowS:$,prehash:O,extraEntropy:se}=y;$==null&&($=!0),P=Wt("msgHash",P),qu(y),O&&(P=Wt("prehashed msgHash",N(P)));const de=T(P),fe=l(g),te=[M(fe),M(de)];if(se!=null&&se!==!1){const Fe=se===!0?S(r.BYTES):se;te.push(Wt("extraEntropy",Fe))}const ye=Vn(...te),We=de;function Xe(Fe){const Be=k(Fe);if(!u(Be))return;const Re=a(Be),Ve=c.BASE.multiply(Be).toAffine(),tt=o(Ve.x);if(tt===vr)return;const lt=o(Re*o(We+tt*fe));if(lt===vr)return;let sr=(Ve.x===tt?0:2)|Number(Ve.y&Ke),co=lt;return $&&p(lt)&&(co=w(lt),sr^=1),new m(tt,co,sr)}return{seed:ye,k2sig:Xe}}const U={lowS:e.lowS,prehash:!1},D={lowS:e.lowS,prehash:!1};function Q(P,g,y=U){const{seed:N,k2sig:S}=_(P,g,y),$=e;return s0($.hash.outputLen,$.nByteLength,$.hmac)(N,S)}c.BASE._setWindowSize(8);function pe(P,g,y,N=D){var lt;const S=P;g=Wt("msgHash",g),y=Wt("publicKey",y);const{lowS:$,prehash:O,format:se}=N;if(qu(N),"strict"in N)throw new Error("options.strict was renamed to lowS");if(se!==void 0&&se!=="compact"&&se!=="der")throw new Error("format must be compact or der");const de=typeof S=="string"||Si(S),fe=!de&&!se&&typeof S=="object"&&S!==null&&typeof S.r=="bigint"&&typeof S.s=="bigint";if(!de&&!fe)throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");let te,ye;try{if(fe&&(te=new m(S.r,S.s)),de){try{se!=="compact"&&(te=m.fromDER(S))}catch(sr){if(!(sr instanceof wr.Err))throw sr}!te&&se!=="der"&&(te=m.fromCompact(S))}ye=c.fromHex(y)}catch{return!1}if(!te||$&&te.hasHighS())return!1;O&&(g=e.hash(g));const{r:We,s:Xe}=te,Fe=T(g),Be=a(Xe),Re=o(Fe*Be),Ve=o(We*Be),tt=(lt=c.BASE.multiplyAndAddUnsafe(ye,Re,Ve))==null?void 0:lt.toAffine();return tt?o(tt.x)===We:!1}return{CURVE:e,getPublicKey:x,getSharedSecret:A,sign:Q,verify:pe,ProjectivePoint:c,Signature:m,utils:v}}function Kv(t){return{hash:t,hmac:(e,...r)=>u0(t,e,hm(...r)),randomBytes:pm}}function Yv(t,e){const r=i=>Zv({...t,...Kv(i)});return{...r(e),create:r}}const b0=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),Fu=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),Jv=BigInt(1),Jl=BigInt(2),Vu=(t,e)=>(t+e/Jl)/e;function Xv(t){const e=b0,r=BigInt(3),i=BigInt(6),s=BigInt(11),n=BigInt(22),o=BigInt(23),a=BigInt(44),c=BigInt(88),l=t*t*t%e,d=l*l*t%e,u=St(d,r,e)*d%e,h=St(u,r,e)*d%e,p=St(h,Jl,e)*l%e,w=St(p,s,e)*p%e,f=St(w,n,e)*w%e,m=St(f,a,e)*f%e,v=St(m,c,e)*m%e,x=St(v,a,e)*f%e,E=St(x,r,e)*d%e,A=St(E,o,e)*w%e,k=St(A,i,e)*l%e,T=St(k,Jl,e);if(!Xl.eql(Xl.sqr(T),t))throw new Error("Cannot find square root");return T}const Xl=p0(b0,void 0,void 0,{sqrt:Xv});Yv({a:BigInt(0),b:BigInt(7),Fp:Xl,n:Fu,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:t=>{const e=Fu,r=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),i=-Jv*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),s=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),n=r,o=BigInt("0x100000000000000000000000000000000"),a=Vu(n*t,e),c=Vu(-i*t,e);let l=gt(t-a*r-c*s,e),d=gt(-a*i-c*n,e);const u=l>o,h=d>o;if(u&&(l=e-l),h&&(d=e-d),l>o||d>o)throw new Error("splitScalar: Endomorphism failed, k="+t);return{k1neg:u,k1:l,k2neg:h,k2:d}}}},Kp),BigInt(0);const kc={createBalance(t,e){const r={name:t.metadata.name||"",symbol:t.metadata.symbol||"",decimals:t.metadata.decimals||0,value:t.metadata.value||0,price:t.metadata.price||0,iconUrl:t.metadata.iconUrl||""};return{name:r.name,symbol:r.symbol,chainId:e,address:t.address==="native"?void 0:this.convertAddressToCAIP10Address(t.address,e),value:r.value,price:r.price,quantity:{decimals:r.decimals.toString(),numeric:this.convertHexToBalance({hex:t.balance,decimals:r.decimals})},iconUrl:r.iconUrl}},convertHexToBalance({hex:t,decimals:e}){return jp(BigInt(t),e)},convertAddressToCAIP10Address(t,e){return`${e}:${t}`},createCAIP2ChainId(t,e){return`${e}:${parseInt(t,16)}`},getChainIdHexFromCAIP2ChainId(t){const e=t.split(":");if(e.length<2||!e[1])return"0x0";const r=e[1],i=parseInt(r,10);return isNaN(i)?"0x0":`0x${i.toString(16)}`},isWalletGetAssetsResponse(t){return typeof t!="object"||t===null?!1:Object.values(t).every(e=>Array.isArray(e)&&e.every(r=>this.isValidAsset(r)))},isValidAsset(t){return typeof t=="object"&&t!==null&&typeof t.address=="string"&&typeof t.balance=="string"&&(t.type==="ERC20"||t.type==="NATIVE")&&typeof t.metadata=="object"&&t.metadata!==null&&typeof t.metadata.name=="string"&&typeof t.metadata.symbol=="string"&&typeof t.metadata.decimals=="number"&&typeof t.metadata.price=="number"&&typeof t.metadata.iconUrl=="string"}},Gu={async getMyTokensWithBalance(t){const e=ee.state.address,r=b.state.activeCaipNetwork;if(!e||!r)return[];if(r.chainNamespace==="eip155"){const s=await this.getEIP155Balances(e,r);if(s)return this.filterLowQualityTokens(s)}const i=await oe.getBalance(e,r.caipNetworkId,t);return this.filterLowQualityTokens(i.balances)},async getEIP155Balances(t,e){var r,i,s;try{const n=kc.getChainIdHexFromCAIP2ChainId(e.caipNetworkId);if(!((s=(i=(r=await X.getCapabilities(t))==null?void 0:r[n])==null?void 0:i.assetDiscovery)!=null&&s.supported))return null;const o=await X.walletGetAssets({account:t,chainFilter:[n]});return kc.isWalletGetAssetsResponse(o)?(o[n]||[]).map(a=>kc.createBalance(a,e.caipNetworkId)):null}catch{return null}},filterLowQualityTokens(t){return t.filter(e=>e.quantity.decimals!=="0")},mapBalancesToSwapTokens(t){return(t==null?void 0:t.map(e=>({...e,address:e!=null&&e.address?e.address:b.getActiveNetworkTokenAddress(),decimals:parseInt(e.quantity.decimals,10),logoUri:e.iconUrl,eip2612:!1})))||[]}},me=Pe({tokenBalances:[],loading:!1}),Zu={state:me,subscribe(t){return it(me,()=>t(me))},subscribeKey(t,e){return ct(me,t,e)},setToken(t){t&&(me.token=Ni(t))},setTokenAmount(t){me.sendTokenAmount=t},setReceiverAddress(t){me.receiverAddress=t},setReceiverProfileImageUrl(t){me.receiverProfileImageUrl=t},setReceiverProfileName(t){me.receiverProfileName=t},setGasPrice(t){me.gasPrice=t},setGasPriceInUsd(t){me.gasPriceInUSD=t},setNetworkBalanceInUsd(t){me.networkBalanceInUSD=t},setLoading(t){me.loading=t},sendToken(){var t;switch((t=b.state.activeCaipNetwork)==null?void 0:t.chainNamespace){case"eip155":this.sendEvmToken();return;case"solana":this.sendSolanaToken();return;default:throw new Error("Unsupported chain")}},sendEvmToken(){var r,i,s,n,o,a;const t=b.state.activeChain,e=(r=ee.state.preferredAccountTypes)==null?void 0:r[t];(i=this.state.token)!=null&&i.address&&this.state.sendTokenAmount&&this.state.receiverAddress?(he.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:e===Rr.ACCOUNT_TYPES.SMART_ACCOUNT,token:this.state.token.address,amount:this.state.sendTokenAmount,network:((s=b.state.activeCaipNetwork)==null?void 0:s.caipNetworkId)||""}}),this.sendERC20Token({receiverAddress:this.state.receiverAddress,tokenAddress:this.state.token.address,sendTokenAmount:this.state.sendTokenAmount,decimals:this.state.token.quantity.decimals})):this.state.receiverAddress&&this.state.sendTokenAmount&&this.state.gasPrice&&((n=this.state.token)!=null&&n.quantity.decimals)&&(he.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:e===Rr.ACCOUNT_TYPES.SMART_ACCOUNT,token:(o=this.state.token)==null?void 0:o.symbol,amount:this.state.sendTokenAmount,network:((a=b.state.activeCaipNetwork)==null?void 0:a.caipNetworkId)||""}}),this.sendNativeToken({receiverAddress:this.state.receiverAddress,sendTokenAmount:this.state.sendTokenAmount,gasPrice:this.state.gasPrice,decimals:this.state.token.quantity.decimals}))},async fetchTokenBalance(t){var n,o;me.loading=!0;const e=(n=b.state.activeCaipNetwork)==null?void 0:n.caipNetworkId,r=(o=b.state.activeCaipNetwork)==null?void 0:o.chainNamespace,i=b.state.activeCaipAddress,s=i?z.getPlainAddress(i):void 0;if(me.lastRetry&&!z.isAllowedRetry(me.lastRetry,30*He.ONE_SEC_MS))return me.loading=!1,[];try{if(s&&e&&r){const a=await Gu.getMyTokensWithBalance();return me.tokenBalances=a,me.lastRetry=void 0,a}}catch(a){me.lastRetry=Date.now(),t==null||t(a),_e.showError("Token Balance Unavailable")}finally{me.loading=!1}return[]},fetchNetworkBalance(){if(me.tokenBalances.length===0)return;const t=Gu.mapBalancesToSwapTokens(me.tokenBalances);if(!t)return;const e=t.find(r=>r.address===b.getActiveNetworkTokenAddress());e&&(me.networkBalanceInUSD=e?bo.multiply(e.quantity.numeric,e.price).toString():"0")},isInsufficientNetworkTokenForGas(t,e){const r=e||"0";return bo.bigNumber(t).eq(0)?!0:bo.bigNumber(bo.bigNumber(r)).gt(t)},hasInsufficientGasFunds(){var r;const t=b.state.activeChain;let e=!0;return((r=ee.state.preferredAccountTypes)==null?void 0:r[t])===Rr.ACCOUNT_TYPES.SMART_ACCOUNT?e=!1:me.networkBalanceInUSD&&(e=this.isInsufficientNetworkTokenForGas(me.networkBalanceInUSD,me.gasPriceInUSD)),e},async sendNativeToken(t){var o,a,c,l,d,u;const e=b.state.activeChain;W.pushTransactionStack({view:"Account",goBack:!1});const r=t.receiverAddress,i=ee.state.address,s=X.parseUnits(t.sendTokenAmount.toString(),Number(t.decimals)),n="0x";try{await X.sendTransaction({chainNamespace:"eip155",to:r,address:i,data:n,value:s??BigInt(0),gasPrice:t.gasPrice}),_e.showSuccess("Transaction started"),he.sendEvent({type:"track",event:"SEND_SUCCESS",properties:{isSmartAccount:((o=ee.state.preferredAccountTypes)==null?void 0:o[e])===Rr.ACCOUNT_TYPES.SMART_ACCOUNT,token:((a=this.state.token)==null?void 0:a.symbol)||"",amount:t.sendTokenAmount,network:((c=b.state.activeCaipNetwork)==null?void 0:c.caipNetworkId)||""}}),this.resetSend()}catch(h){console.error("SendController:sendERC20Token - failed to send native token",h);const p=h instanceof Error?h.message:"Unknown error";he.sendEvent({type:"track",event:"SEND_ERROR",properties:{message:p,isSmartAccount:((l=ee.state.preferredAccountTypes)==null?void 0:l[e])===Rr.ACCOUNT_TYPES.SMART_ACCOUNT,token:((d=this.state.token)==null?void 0:d.symbol)||"",amount:t.sendTokenAmount,network:((u=b.state.activeCaipNetwork)==null?void 0:u.caipNetworkId)||""}}),_e.showError("Something went wrong")}},async sendERC20Token(t){var r,i,s;W.pushTransactionStack({view:"Account",goBack:!1});const e=X.parseUnits(t.sendTokenAmount.toString(),Number(t.decimals));try{if(ee.state.address&&t.sendTokenAmount&&t.receiverAddress&&t.tokenAddress){const n=z.getPlainAddress(t.tokenAddress);await X.writeContract({fromAddress:ee.state.address,tokenAddress:n,args:[t.receiverAddress,e??BigInt(0)],method:"transfer",abi:Iw.getERC20Abi(n),chainNamespace:"eip155"}),_e.showSuccess("Transaction started"),this.resetSend()}}catch(n){console.error("SendController:sendERC20Token - failed to send erc20 token",n);const o=n instanceof Error?n.message:"Unknown error";he.sendEvent({type:"track",event:"SEND_ERROR",properties:{message:o,isSmartAccount:((r=ee.state.preferredAccountTypes)==null?void 0:r.eip155)===Rr.ACCOUNT_TYPES.SMART_ACCOUNT,token:((i=this.state.token)==null?void 0:i.symbol)||"",amount:t.sendTokenAmount,network:((s=b.state.activeCaipNetwork)==null?void 0:s.caipNetworkId)||""}}),_e.showError("Something went wrong")}},sendSolanaToken(){if(!this.state.sendTokenAmount||!this.state.receiverAddress){_e.showError("Please enter a valid amount and receiver address");return}W.pushTransactionStack({view:"Account",goBack:!1}),X.sendTransaction({chainNamespace:"solana",to:this.state.receiverAddress,value:this.state.sendTokenAmount}).then(()=>{this.resetSend(),ee.fetchTokenBalance()}).catch(t=>{_e.showError("Failed to send transaction. Please try again."),console.error("SendController:sendToken - failed to send solana transaction",t)})},resetSend(){me.token=void 0,me.sendTokenAmount=void 0,me.receiverAddress=void 0,me.receiverProfileImageUrl=void 0,me.receiverProfileName=void 0,me.loading=!1,me.tokenBalances=[]}},Sc={currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[],user:void 0},ko={caipNetwork:void 0,supportsAllNetworks:!0,smartAccountEnabledNetworks:[]},q=Pe({chains:Pw(),activeCaipAddress:void 0,activeChain:void 0,activeCaipNetwork:void 0,noAdapters:!1,universalAdapter:{networkControllerClient:void 0,connectionControllerClient:void 0},isSwitchingNamespace:!1}),b={state:q,subscribe(t){return it(q,()=>{t(q)})},subscribeKey(t,e){return ct(q,t,e)},subscribeChainProp(t,e,r){let i;return it(q.chains,()=>{var n;const s=r||q.activeChain;if(s){const o=(n=q.chains.get(s))==null?void 0:n[t];i!==o&&(i=o,e(o))}})},initialize(t,e,r){const{chainId:i,namespace:s}=Y.getActiveNetworkProps(),n=e==null?void 0:e.find(c=>c.id.toString()===(i==null?void 0:i.toString())),o=t.find(c=>(c==null?void 0:c.namespace)===s)||(t==null?void 0:t[0]),a=new Set([...(e==null?void 0:e.map(c=>c.chainNamespace))??[]]);((t==null?void 0:t.length)===0||!o)&&(q.noAdapters=!0),q.noAdapters||(q.activeChain=o==null?void 0:o.namespace,q.activeCaipNetwork=n,this.setChainNetworkData(o==null?void 0:o.namespace,{caipNetwork:n}),q.activeChain&&br.set({activeChain:o==null?void 0:o.namespace})),a.forEach(c=>{const l=e==null?void 0:e.filter(d=>d.chainNamespace===c);b.state.chains.set(c,{namespace:c,networkState:Pe({...ko,caipNetwork:l==null?void 0:l[0]}),accountState:Pe(Sc),caipNetworks:l??[],...r}),this.setRequestedCaipNetworks(l??[],c)})},removeAdapter(t){var e,r;if(q.activeChain===t){const i=Array.from(q.chains.entries()).find(([s])=>s!==t);if(i){const s=(r=(e=i[1])==null?void 0:e.caipNetworks)==null?void 0:r[0];s&&this.setActiveCaipNetwork(s)}}q.chains.delete(t)},addAdapter(t,{networkControllerClient:e,connectionControllerClient:r},i){q.chains.set(t.namespace,{namespace:t.namespace,networkState:{...ko,caipNetwork:i[0]},accountState:Sc,caipNetworks:i,connectionControllerClient:r,networkControllerClient:e}),this.setRequestedCaipNetworks((i==null?void 0:i.filter(s=>s.chainNamespace===t.namespace))??[],t.namespace)},addNetwork(t){var r;const e=q.chains.get(t.chainNamespace);if(e){const i=[...e.caipNetworks||[]];(r=e.caipNetworks)!=null&&r.find(s=>s.id===t.id)||i.push(t),q.chains.set(t.chainNamespace,{...e,caipNetworks:i}),this.setRequestedCaipNetworks(i,t.chainNamespace)}},removeNetwork(t,e){var i,s,n;const r=q.chains.get(t);if(r){const o=((i=q.activeCaipNetwork)==null?void 0:i.id)===e,a=[...((s=r.caipNetworks)==null?void 0:s.filter(c=>c.id!==e))||[]];o&&((n=r==null?void 0:r.caipNetworks)!=null&&n[0])&&this.setActiveCaipNetwork(r.caipNetworks[0]),q.chains.set(t,{...r,caipNetworks:a}),this.setRequestedCaipNetworks(a||[],t)}},setAdapterNetworkState(t,e){const r=q.chains.get(t);r&&(r.networkState={...r.networkState||ko,...e},q.chains.set(t,r))},setChainAccountData(t,e,r=!0){if(!t)throw new Error("Chain is required to update chain account data");const i=q.chains.get(t);if(i){const s={...i.accountState||Sc,...e};q.chains.set(t,{...i,accountState:s}),(q.chains.size===1||q.activeChain===t)&&(e.caipAddress&&(q.activeCaipAddress=e.caipAddress),ee.replaceState(s))}},setChainNetworkData(t,e){if(!t)return;const r=q.chains.get(t);if(r){const i={...r.networkState||ko,...e};q.chains.set(t,{...r,networkState:i})}},setAccountProp(t,e,r,i=!0){this.setChainAccountData(r,{[t]:e},i),t==="status"&&e==="disconnected"&&r&&V.removeConnectorId(r)},setActiveNamespace(t){var i,s;q.activeChain=t;const e=t?q.chains.get(t):void 0,r=(i=e==null?void 0:e.networkState)==null?void 0:i.caipNetwork;r!=null&&r.id&&t&&(q.activeCaipAddress=(s=e==null?void 0:e.accountState)==null?void 0:s.caipAddress,q.activeCaipNetwork=r,this.setChainNetworkData(t,{caipNetwork:r}),Y.setActiveCaipNetworkId(r==null?void 0:r.caipNetworkId),br.set({activeChain:t,selectedNetworkId:r==null?void 0:r.caipNetworkId}))},setActiveCaipNetwork(t){var r,i,s;if(!t)return;q.activeChain!==t.chainNamespace&&this.setIsSwitchingNamespace(!0);const e=q.chains.get(t.chainNamespace);q.activeChain=t.chainNamespace,q.activeCaipNetwork=t,this.setChainNetworkData(t.chainNamespace,{caipNetwork:t}),(r=e==null?void 0:e.accountState)!=null&&r.address?q.activeCaipAddress=`${t.chainNamespace}:${t.id}:${(i=e==null?void 0:e.accountState)==null?void 0:i.address}`:q.activeCaipAddress=void 0,this.setAccountProp("caipAddress",q.activeCaipAddress,t.chainNamespace),e&&ee.replaceState(e.accountState),Zu.resetSend(),br.set({activeChain:q.activeChain,selectedNetworkId:(s=q.activeCaipNetwork)==null?void 0:s.caipNetworkId}),Y.setActiveCaipNetworkId(t.caipNetworkId),!this.checkIfSupportedNetwork(t.chainNamespace)&&L.state.enableNetworkSwitch&&!L.state.allowUnsupportedChain&&!X.state.wcBasic&&this.showUnsupportedChainUI()},addCaipNetwork(t){var r;if(!t)return;const e=q.chains.get(t.chainNamespace);e&&((r=e==null?void 0:e.caipNetworks)==null||r.push(t))},async switchActiveNamespace(t){var s;if(!t)return;const e=t!==b.state.activeChain,r=(s=b.getNetworkData(t))==null?void 0:s.caipNetwork,i=b.getCaipNetworkByNamespace(t,r==null?void 0:r.id);e&&i&&await b.switchActiveNetwork(i)},async switchActiveNetwork(t){var r,i;!((i=(r=b.state.chains.get(b.state.activeChain))==null?void 0:r.caipNetworks)!=null&&i.some(s=>{var n;return s.id===((n=q.activeCaipNetwork)==null?void 0:n.id)}))&&W.goBack();const e=this.getNetworkControllerClient(t.chainNamespace);e&&(await e.switchCaipNetwork(t),he.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:t.caipNetworkId}}))},getNetworkControllerClient(t){const e=t||q.activeChain,r=q.chains.get(e);if(!r)throw new Error("Chain adapter not found");if(!r.networkControllerClient)throw new Error("NetworkController client not set");return r.networkControllerClient},getConnectionControllerClient(t){const e=t||q.activeChain;if(!e)throw new Error("Chain is required to get connection controller client");const r=q.chains.get(e);if(!(r!=null&&r.connectionControllerClient))throw new Error("ConnectionController client not set");return r.connectionControllerClient},getAccountProp(t,e){var s;let r=q.activeChain;if(e&&(r=e),!r)return;const i=(s=q.chains.get(r))==null?void 0:s.accountState;if(i)return i[t]},getNetworkProp(t,e){var i;const r=(i=q.chains.get(e))==null?void 0:i.networkState;if(r)return r[t]},getRequestedCaipNetworks(t){const e=q.chains.get(t),{approvedCaipNetworkIds:r=[],requestedCaipNetworks:i=[]}=(e==null?void 0:e.networkState)||{};return z.sortRequestedNetworks(r,i)},getAllRequestedCaipNetworks(){const t=[];return q.chains.forEach(e=>{const r=this.getRequestedCaipNetworks(e.namespace);t.push(...r)}),t},setRequestedCaipNetworks(t,e){this.setAdapterNetworkState(e,{requestedCaipNetworks:t})},getAllApprovedCaipNetworkIds(){const t=[];return q.chains.forEach(e=>{const r=this.getApprovedCaipNetworkIds(e.namespace);t.push(...r)}),t},getActiveCaipNetwork(){return q.activeCaipNetwork},getActiveCaipAddress(){return q.activeCaipAddress},getApprovedCaipNetworkIds(t){var e,r;return((r=(e=q.chains.get(t))==null?void 0:e.networkState)==null?void 0:r.approvedCaipNetworkIds)||[]},async setApprovedCaipNetworksData(t){var r;const e=await((r=this.getNetworkControllerClient())==null?void 0:r.getApprovedCaipNetworksData());this.setAdapterNetworkState(t,{approvedCaipNetworkIds:e==null?void 0:e.approvedCaipNetworkIds,supportsAllNetworks:e==null?void 0:e.supportsAllNetworks})},checkIfSupportedNetwork(t,e){const r=e||q.activeCaipNetwork,i=this.getRequestedCaipNetworks(t);return i.length?i==null?void 0:i.some(s=>s.id===(r==null?void 0:r.id)):!0},checkIfSupportedChainId(t){var e;return q.activeChain?(e=this.getRequestedCaipNetworks(q.activeChain))==null?void 0:e.some(r=>r.id===t):!0},setSmartAccountEnabledNetworks(t,e){this.setAdapterNetworkState(e,{smartAccountEnabledNetworks:t})},checkIfSmartAccountEnabled(){var r,i;const t=Ep.caipNetworkIdToNumber((r=q.activeCaipNetwork)==null?void 0:r.caipNetworkId),e=q.activeChain;return!e||!t?!1:!!((i=this.getNetworkProp("smartAccountEnabledNetworks",e))!=null&&i.includes(Number(t)))},getActiveNetworkTokenAddress(){var i,s;const t=((i=q.activeCaipNetwork)==null?void 0:i.chainNamespace)||"eip155",e=((s=q.activeCaipNetwork)==null?void 0:s.id)||1,r=He.NATIVE_TOKEN_ADDRESS[t];return`${t}:${e}:${r}`},showUnsupportedChainUI(){ve.open({view:"UnsupportedChain"})},checkIfNamesSupported(){const t=q.activeCaipNetwork;return!!(t!=null&&t.chainNamespace&&He.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(t.chainNamespace))},resetNetwork(t){this.setAdapterNetworkState(t,{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0,smartAccountEnabledNetworks:[]})},resetAccount(t){const e=t;if(!e)throw new Error("Chain is required to set account prop");q.activeCaipAddress=void 0,this.setChainAccountData(e,{smartAccountDeployed:!1,currentTab:0,caipAddress:void 0,address:void 0,balance:void 0,balanceSymbol:void 0,profileName:void 0,profileImage:void 0,addressExplorerUrl:void 0,tokenBalance:[],connectedWalletInfo:void 0,preferredAccountTypes:void 0,socialProvider:void 0,socialWindow:void 0,farcasterUrl:void 0,allAccounts:[],user:void 0,status:"disconnected"}),V.removeConnectorId(e)},async disconnect(t){const e=Hw(t);try{Zu.resetSend();const r=await Promise.allSettled(e.map(async([s,n])=>{var o;try{const{caipAddress:a}=this.getAccountData(s)||{};a&&((o=n.connectionControllerClient)!=null&&o.disconnect)&&await n.connectionControllerClient.disconnect(s),this.resetAccount(s),this.resetNetwork(s)}catch(a){throw new Error(`Failed to disconnect chain ${s}: ${a.message}`)}}));X.resetWcConnection();const i=r.filter(s=>s.status==="rejected");if(i.length>0)throw new Error(i.map(s=>s.reason.message).join(", "));Y.deleteConnectedSocialProvider(),t?V.removeConnectorId(t):V.resetConnectorIds(),he.sendEvent({type:"track",event:"DISCONNECT_SUCCESS",properties:{namespace:t||"all"}})}catch(r){console.error(r.message||"Failed to disconnect chains"),he.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:r.message||"Failed to disconnect chains"}})}},setIsSwitchingNamespace(t){q.isSwitchingNamespace=t},getFirstCaipNetworkSupportsAuthConnector(){var r,i;const t=[];let e;if(q.chains.forEach(s=>{J.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(n=>n===s.namespace)&&s.namespace&&t.push(s.namespace)}),t.length>0){const s=t[0];return e=s?(i=(r=q.chains.get(s))==null?void 0:r.caipNetworks)==null?void 0:i[0]:void 0,e}},getAccountData(t){var e;return t?(e=b.state.chains.get(t))==null?void 0:e.accountState:ee.state},getNetworkData(t){var r;const e=t||q.activeChain;if(e)return(r=b.state.chains.get(e))==null?void 0:r.networkState},getCaipNetworkByNamespace(t,e){var s,n,o;if(!t)return;const r=b.state.chains.get(t);return((s=r==null?void 0:r.caipNetworks)==null?void 0:s.find(a=>a.id===e))||((n=r==null?void 0:r.networkState)==null?void 0:n.caipNetwork)||((o=r==null?void 0:r.caipNetworks)==null?void 0:o[0])},getRequestedCaipNetworkIds(){const t=V.state.filterByNamespace;return(t?[q.chains.get(t)]:Array.from(q.chains.values())).flatMap(e=>(e==null?void 0:e.caipNetworks)||[]).map(e=>e.caipNetworkId)},getCaipNetworks(t){return t?b.getRequestedCaipNetworks(t):b.getAllRequestedCaipNetworks()}},Qv={purchaseCurrencies:[{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"Ether",symbol:"ETH",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]}],paymentCurrencies:[{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},{id:"EUR",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]}]},y0=z.getBlockchainApiUrl(),yt=Pe({clientId:null,api:new za({baseUrl:y0,clientId:null}),supportedChains:{http:[],ws:[]}}),oe={state:yt,async get(t){const{st:e,sv:r}=oe.getSdkProperties(),i=L.state.projectId,s={...t.params||{},st:e,sv:r,projectId:i};return yt.api.get({...t,params:s})},getSdkProperties(){const{sdkType:t,sdkVersion:e}=L.state;return{st:t||"unknown",sv:e||"unknown"}},async isNetworkSupported(t){if(!t)return!1;try{yt.supportedChains.http.length||await oe.getSupportedNetworks()}catch{return!1}return yt.supportedChains.http.includes(t)},async getSupportedNetworks(){const t=await oe.get({path:"v1/supported-chains"});return yt.supportedChains=t,t},async fetchIdentity({address:t,caipNetworkId:e}){if(!await oe.isNetworkSupported(e))return{avatar:"",name:""};const r=Y.getIdentityFromCacheForAddress(t);if(r)return r;const i=await oe.get({path:`/v1/identity/${t}`,params:{sender:b.state.activeCaipAddress?z.getPlainAddress(b.state.activeCaipAddress):void 0}});return Y.updateIdentityCache({address:t,identity:i,timestamp:Date.now()}),i},async fetchTransactions({account:t,cursor:e,onramp:r,signal:i,cache:s,chainId:n}){var o;return await oe.isNetworkSupported((o=b.state.activeCaipNetwork)==null?void 0:o.caipNetworkId)?oe.get({path:`/v1/account/${t}/history`,params:{cursor:e,onramp:r,chainId:n},signal:i,cache:s}):{data:[],next:void 0}},async fetchSwapQuote({amount:t,userAddress:e,from:r,to:i,gasPrice:s}){var n;return await oe.isNetworkSupported((n=b.state.activeCaipNetwork)==null?void 0:n.caipNetworkId)?oe.get({path:"/v1/convert/quotes",headers:{"Content-Type":"application/json"},params:{amount:t,userAddress:e,from:r,to:i,gasPrice:s}}):{quotes:[]}},async fetchSwapTokens({chainId:t}){var e;return await oe.isNetworkSupported((e=b.state.activeCaipNetwork)==null?void 0:e.caipNetworkId)?oe.get({path:"/v1/convert/tokens",params:{chainId:t}}):{tokens:[]}},async fetchTokenPrice({addresses:t}){var e;return await oe.isNetworkSupported((e=b.state.activeCaipNetwork)==null?void 0:e.caipNetworkId)?yt.api.post({path:"/v1/fungible/price",body:{currency:"usd",addresses:t,projectId:L.state.projectId},headers:{"Content-Type":"application/json"}}):{fungibles:[]}},async fetchSwapAllowance({tokenAddress:t,userAddress:e}){var r;return await oe.isNetworkSupported((r=b.state.activeCaipNetwork)==null?void 0:r.caipNetworkId)?oe.get({path:"/v1/convert/allowance",params:{tokenAddress:t,userAddress:e},headers:{"Content-Type":"application/json"}}):{allowance:"0"}},async fetchGasPrice({chainId:t}){var i;const{st:e,sv:r}=oe.getSdkProperties();if(!await oe.isNetworkSupported((i=b.state.activeCaipNetwork)==null?void 0:i.caipNetworkId))throw new Error("Network not supported for Gas Price");return oe.get({path:"/v1/convert/gas-price",headers:{"Content-Type":"application/json"},params:{chainId:t,st:e,sv:r}})},async generateSwapCalldata({amount:t,from:e,to:r,userAddress:i,disableEstimate:s}){var n;if(!await oe.isNetworkSupported((n=b.state.activeCaipNetwork)==null?void 0:n.caipNetworkId))throw new Error("Network not supported for Swaps");return yt.api.post({path:"/v1/convert/build-transaction",headers:{"Content-Type":"application/json"},body:{amount:t,eip155:{slippage:He.CONVERT_SLIPPAGE_TOLERANCE},projectId:L.state.projectId,from:e,to:r,userAddress:i,disableEstimate:s}})},async generateApproveCalldata({from:t,to:e,userAddress:r}){var n;const{st:i,sv:s}=oe.getSdkProperties();if(!await oe.isNetworkSupported((n=b.state.activeCaipNetwork)==null?void 0:n.caipNetworkId))throw new Error("Network not supported for Swaps");return oe.get({path:"/v1/convert/build-approve",headers:{"Content-Type":"application/json"},params:{userAddress:r,from:t,to:e,st:i,sv:s}})},async getBalance(t,e,r){var c;const{st:i,sv:s}=oe.getSdkProperties();if(!await oe.isNetworkSupported((c=b.state.activeCaipNetwork)==null?void 0:c.caipNetworkId))return _e.showError("Token Balance Unavailable"),{balances:[]};const n=`${e}:${t}`,o=Y.getBalanceCacheForCaipAddress(n);if(o)return o;const a=await oe.get({path:`/v1/account/${t}/balance`,params:{currency:"usd",chainId:e,forceUpdate:r,st:i,sv:s}});return Y.updateBalanceCache({caipAddress:n,balance:a,timestamp:Date.now()}),a},async lookupEnsName(t){var e;return await oe.isNetworkSupported((e=b.state.activeCaipNetwork)==null?void 0:e.caipNetworkId)?oe.get({path:`/v1/profile/account/${t}`,params:{apiVersion:"2"}}):{addresses:{},attributes:[]}},async reverseLookupEnsName({address:t}){var e;return await oe.isNetworkSupported((e=b.state.activeCaipNetwork)==null?void 0:e.caipNetworkId)?oe.get({path:`/v1/profile/reverse/${t}`,params:{sender:ee.state.address,apiVersion:"2"}}):[]},async getEnsNameSuggestions(t){var e;return await oe.isNetworkSupported((e=b.state.activeCaipNetwork)==null?void 0:e.caipNetworkId)?oe.get({path:`/v1/profile/suggestions/${t}`,params:{zone:"reown.id"}}):{suggestions:[]}},async registerEnsName({coinType:t,address:e,message:r,signature:i}){var s;return await oe.isNetworkSupported((s=b.state.activeCaipNetwork)==null?void 0:s.caipNetworkId)?yt.api.post({path:"/v1/profile/account",body:{coin_type:t,address:e,message:r,signature:i},headers:{"Content-Type":"application/json"}}):{success:!1}},async generateOnRampURL({destinationWallets:t,partnerUserId:e,defaultNetwork:r,purchaseAmount:i,paymentAmount:s}){var n;return await oe.isNetworkSupported((n=b.state.activeCaipNetwork)==null?void 0:n.caipNetworkId)?(await yt.api.post({path:"/v1/generators/onrampurl",params:{projectId:L.state.projectId},body:{destinationWallets:t,defaultNetwork:r,partnerUserId:e,defaultExperience:"buy",presetCryptoAmount:i,presetFiatAmount:s}})).url:""},async getOnrampOptions(){var t;if(!await oe.isNetworkSupported((t=b.state.activeCaipNetwork)==null?void 0:t.caipNetworkId))return{paymentCurrencies:[],purchaseCurrencies:[]};try{return await oe.get({path:"/v1/onramp/options"})}catch{return Qv}},async getOnrampQuote({purchaseCurrency:t,paymentCurrency:e,amount:r,network:i}){var s;try{return await oe.isNetworkSupported((s=b.state.activeCaipNetwork)==null?void 0:s.caipNetworkId)?await yt.api.post({path:"/v1/onramp/quote",params:{projectId:L.state.projectId},body:{purchaseCurrency:t,paymentCurrency:e,amount:r,network:i}}):null}catch{return{coinbaseFee:{amount:r,currency:e.id},networkFee:{amount:r,currency:e.id},paymentSubtotal:{amount:r,currency:e.id},paymentTotal:{amount:r,currency:e.id},purchaseAmount:{amount:r,currency:e.id},quoteId:"mocked-quote-id"}}},async getSmartSessions(t){var e;return await oe.isNetworkSupported((e=b.state.activeCaipNetwork)==null?void 0:e.caipNetworkId)?oe.get({path:`/v1/sessions/${t}`}):[]},async revokeSmartSession(t,e,r){var i;return await oe.isNetworkSupported((i=b.state.activeCaipNetwork)==null?void 0:i.caipNetworkId)?yt.api.post({path:`/v1/sessions/${t}/revoke`,params:{projectId:L.state.projectId},body:{pci:e,signature:r}}):{success:!1}},setClientId(t){yt.clientId=t,yt.api=new za({baseUrl:y0,clientId:t})}},_t=Pe({currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[]}),ee={state:_t,replaceState(t){t&&Object.assign(_t,Ni(t))},subscribe(t){return b.subscribeChainProp("accountState",e=>{if(e)return t(e)})},subscribeKey(t,e,r){let i;return b.subscribeChainProp("accountState",s=>{if(s){const n=s[t];i!==n&&(i=n,e(n))}},r)},setStatus(t,e){b.setAccountProp("status",t,e)},getCaipAddress(t){return b.getAccountProp("caipAddress",t)},setCaipAddress(t,e){const r=t?z.getPlainAddress(t):void 0;e===b.state.activeChain&&(b.state.activeCaipAddress=t),b.setAccountProp("caipAddress",t,e),b.setAccountProp("address",r,e)},setBalance(t,e,r){b.setAccountProp("balance",t,r),b.setAccountProp("balanceSymbol",e,r)},setProfileName(t,e){b.setAccountProp("profileName",t,e)},setProfileImage(t,e){b.setAccountProp("profileImage",t,e)},setUser(t,e){b.setAccountProp("user",t,e)},setAddressExplorerUrl(t,e){b.setAccountProp("addressExplorerUrl",t,e)},setSmartAccountDeployed(t,e){b.setAccountProp("smartAccountDeployed",t,e)},setCurrentTab(t){b.setAccountProp("currentTab",t,b.state.activeChain)},setTokenBalance(t,e){t&&b.setAccountProp("tokenBalance",t,e)},setShouldUpdateToAddress(t,e){b.setAccountProp("shouldUpdateToAddress",t,e)},setAllAccounts(t,e){b.setAccountProp("allAccounts",t,e)},addAddressLabel(t,e,r){const i=b.getAccountProp("addressLabels",r)||new Map;i.set(t,e),b.setAccountProp("addressLabels",i,r)},removeAddressLabel(t,e){const r=b.getAccountProp("addressLabels",e)||new Map;r.delete(t),b.setAccountProp("addressLabels",r,e)},setConnectedWalletInfo(t,e){b.setAccountProp("connectedWalletInfo",t,e,!1)},setPreferredAccountType(t,e){b.setAccountProp("preferredAccountTypes",{..._t.preferredAccountTypes,[e]:t},e)},setPreferredAccountTypes(t){_t.preferredAccountTypes=t},setSocialProvider(t,e){t&&b.setAccountProp("socialProvider",t,e)},setSocialWindow(t,e){b.setAccountProp("socialWindow",t?Ni(t):void 0,e)},setFarcasterUrl(t,e){b.setAccountProp("farcasterUrl",t,e)},async fetchTokenBalance(t){var n,o;_t.balanceLoading=!0;const e=(n=b.state.activeCaipNetwork)==null?void 0:n.caipNetworkId,r=(o=b.state.activeCaipNetwork)==null?void 0:o.chainNamespace,i=b.state.activeCaipAddress,s=i?z.getPlainAddress(i):void 0;if(_t.lastRetry&&!z.isAllowedRetry(_t.lastRetry,30*He.ONE_SEC_MS))return _t.balanceLoading=!1,[];try{if(s&&e&&r){const a=(await oe.getBalance(s,e)).balances.filter(c=>c.quantity.decimals!=="0");return this.setTokenBalance(a,r),_t.lastRetry=void 0,_t.balanceLoading=!1,a}}catch(a){_t.lastRetry=Date.now(),t==null||t(a),_e.showError("Token Balance Unavailable")}finally{_t.balanceLoading=!1}return[]},resetAccount(t){b.resetAccount(t)}},ut=Pe({loading:!1,loadingNamespaceMap:new Map,open:!1,shake:!1,namespace:void 0}),ve={state:ut,subscribe(t){return it(ut,()=>t(ut))},subscribeKey(t,e){return ct(ut,t,e)},async open(t){var i;const e=ee.state.status==="connected";X.state.wcBasic?F.prefetch({fetchNetworkImages:!1,fetchConnectorImages:!1}):await F.prefetch({fetchConnectorImages:!e,fetchFeaturedWallets:!e,fetchRecommendedWallets:!e}),t!=null&&t.namespace?(await b.switchActiveNamespace(t.namespace),ve.setLoading(!0,t.namespace)):ve.setLoading(!0),V.setFilterByNamespace(t==null?void 0:t.namespace);const r=(i=b.getAccountData(t==null?void 0:t.namespace))==null?void 0:i.caipAddress;b.state.noAdapters&&!r?z.isMobile()?W.reset("AllWallets"):W.reset("ConnectingWalletConnectBasic"):t!=null&&t.view?W.reset(t.view,t.data):r?W.reset("Account"):W.reset("Connect"),ut.open=!0,br.set({open:!0}),he.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:!!r}})},close(){const t=L.state.enableEmbedded,e=!!b.state.activeCaipAddress;ut.open&&he.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:e}}),ut.open=!1,ve.clearLoading(),t?e?W.replace("Account"):W.push("Connect"):br.set({open:!1}),X.resetUri()},setLoading(t,e){e&&ut.loadingNamespaceMap.set(e,t),ut.loading=t,br.set({loading:t})},clearLoading(){ut.loadingNamespaceMap.clear(),ut.loading=!1},shake(){ut.shake||(ut.shake=!0,setTimeout(()=>{ut.shake=!1},500))}},Ku={id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},e3={id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},t3={providers:Tw,selectedProvider:null,error:null,purchaseCurrency:Ku,paymentCurrency:e3,purchaseCurrencies:[Ku],paymentCurrencies:[],quotesLoading:!1};Pe(t3);const r3={initializing:!1,initialized:!1,loadingPrices:!1,loadingQuote:!1,loadingApprovalTransaction:!1,loadingBuildTransaction:!1,loadingTransaction:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",networkTokenSymbol:"",inputError:void 0,slippage:He.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:"0",gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0};Pe(r3);const Dt=Pe({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),ns={state:Dt,subscribe(t){return it(Dt,()=>t(Dt))},subscribeKey(t,e){return ct(Dt,t,e)},showTooltip({message:t,triggerRect:e,variant:r}){Dt.open=!0,Dt.message=t,Dt.triggerRect=e,Dt.variant=r},hide(){Dt.open=!1,Dt.message="",Dt.triggerRect={width:0,height:0,top:0,left:0}}},Yu=2147483648,i3={convertEVMChainIdToCoinType(t){if(t>=Yu)throw new Error("Invalid chainId");return(Yu|t)>>>0}},Pt=Pe({suggestions:[],loading:!1}),C0={state:Pt,subscribe(t){return it(Pt,()=>t(Pt))},subscribeKey(t,e){return ct(Pt,t,e)},async resolveName(t){var e,r;try{return await oe.lookupEnsName(t)}catch(i){const s=i;throw new Error(((r=(e=s==null?void 0:s.reasons)==null?void 0:e[0])==null?void 0:r.description)||"Error resolving name")}},async isNameRegistered(t){try{return await oe.lookupEnsName(t),!0}catch{return!1}},async getSuggestions(t){try{Pt.loading=!0,Pt.suggestions=[];const e=await oe.getEnsNameSuggestions(t);return Pt.suggestions=e.suggestions.map(r=>({...r,name:r.name}))||[],Pt.suggestions}catch(e){const r=this.parseEnsApiError(e,"Error fetching name suggestions");throw new Error(r)}finally{Pt.loading=!1}},async getNamesForAddress(t){try{if(!b.state.activeCaipNetwork)return[];const e=Y.getEnsFromCacheForAddress(t);if(e)return e;const r=await oe.reverseLookupEnsName({address:t});return Y.updateEnsCache({address:t,ens:r,timestamp:Date.now()}),r}catch(e){const r=this.parseEnsApiError(e,"Error fetching names for address");throw new Error(r)}},async registerName(t){const e=b.state.activeCaipNetwork;if(!e)throw new Error("Network not found");const r=ee.state.address,i=V.getAuthConnector();if(!r||!i)throw new Error("Address or auth connector not found");Pt.loading=!0;try{const s=JSON.stringify({name:t,attributes:{},timestamp:Math.floor(Date.now()/1e3)});W.pushTransactionStack({view:"RegisterAccountNameSuccess",goBack:!1,replace:!0,onCancel(){Pt.loading=!1}});const n=await X.signMessage(s),o=e.id;if(!o)throw new Error("Network not found");const a=i3.convertEVMChainIdToCoinType(Number(o));await oe.registerEnsName({coinType:a,address:r,signature:n,message:s}),ee.setProfileName(t,e.chainNamespace),W.replace("RegisterAccountNameSuccess")}catch(s){const n=this.parseEnsApiError(s,`Error registering name ${t}`);throw W.replace("RegisterAccountName"),new Error(n)}finally{Pt.loading=!1}},validateName(t){return/^[a-zA-Z0-9-]{4,}$/u.test(t)},parseEnsApiError(t,e){var r,i;return((i=(r=t==null?void 0:t.reasons)==null?void 0:r[0])==null?void 0:i.description)||e}};Pe({isLegalCheckboxChecked:!1});const je={METMASK_CONNECTOR_NAME:"MetaMask",TRUST_CONNECTOR_NAME:"Trust Wallet",SOLFLARE_CONNECTOR_NAME:"Solflare",PHANTOM_CONNECTOR_NAME:"Phantom",COIN98_CONNECTOR_NAME:"Coin98",MAGIC_EDEN_CONNECTOR_NAME:"Magic Eden",BACKPACK_CONNECTOR_NAME:"Backpack",BITGET_CONNECTOR_NAME:"Bitget Wallet",FRONTIER_CONNECTOR_NAME:"Frontier",XVERSE_CONNECTOR_NAME:"Xverse Wallet",LEATHER_CONNECTOR_NAME:"Leather",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet",coinbaseWalletSDK:"com.coinbase.wallet"},CONNECTOR_TYPE_EXTERNAL:"EXTERNAL",CONNECTOR_TYPE_WALLET_CONNECT:"WALLET_CONNECT",CONNECTOR_TYPE_INJECTED:"INJECTED",CONNECTOR_TYPE_ANNOUNCED:"ANNOUNCED",CONNECTOR_TYPE_AUTH:"AUTH",CONNECTOR_TYPE_MULTI_CHAIN:"MULTI_CHAIN",CONNECTOR_TYPE_W3M_AUTH:"ID_AUTH"},_a={ConnectorExplorerIds:{[J.CONNECTOR_ID.COINBASE]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[J.CONNECTOR_ID.COINBASE_SDK]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[J.CONNECTOR_ID.SAFE]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[J.CONNECTOR_ID.LEDGER]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927",[J.CONNECTOR_ID.OKX]:"971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",[je.METMASK_CONNECTOR_NAME]:"c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",[je.TRUST_CONNECTOR_NAME]:"4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",[je.SOLFLARE_CONNECTOR_NAME]:"1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",[je.PHANTOM_CONNECTOR_NAME]:"a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",[je.COIN98_CONNECTOR_NAME]:"2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01",[je.MAGIC_EDEN_CONNECTOR_NAME]:"8b830a2b724a9c3fbab63af6f55ed29c9dfa8a55e732dc88c80a196a2ba136c6",[je.BACKPACK_CONNECTOR_NAME]:"2bd8c14e035c2d48f184aaa168559e86b0e3433228d3c4075900a221785019b0",[je.BITGET_CONNECTOR_NAME]:"38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662",[je.FRONTIER_CONNECTOR_NAME]:"85db431492aa2e8672e93f4ea7acf10c88b97b867b0d373107af63dc4880f041",[je.XVERSE_CONNECTOR_NAME]:"2a87d74ae02e10bdd1f51f7ce6c4e1cc53cd5f2c0b6b5ad0d7b3007d2b13de7b",[je.LEATHER_CONNECTOR_NAME]:"483afe1df1df63daf313109971ff3ef8356ddf1cc4e45877d205eee0b7893a13"},NetworkImageIds:{1:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",42161:"3bff954d-5cb0-47a0-9a23-d20192e74600",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",5e3:"e86fae9b-b770-4eea-e520-150e12c81100",295:"6a97d510-cac8-4e58-c7ce-e8681b044c00",11155111:"e909ea0a-f92a-4512-c8fc-748044ea6800",84532:"a18a7ecd-e307-4360-4746-283182228e00",1301:"4eeea7ef-0014-4649-5d1d-07271a80f600",130:"2257980a-3463-48c6-cbac-a42d2a956e00",10143:"0a728e83-bacb-46db-7844-948f05434900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100",2020:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",2021:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",80094:"e329c2c9-59b0-4a02-83e4-212ff3779900",2741:"fc2427d1-5af9-4a9c-8da5-6f94627cd900","5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":"a1b58899-f671-4276-6a5e-56ca5bd59700","4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z":"a1b58899-f671-4276-6a5e-56ca5bd59700",EtWTRABZaYq6iMfeYKouRu166VU2xqa1:"a1b58899-f671-4276-6a5e-56ca5bd59700","000000000019d6689c085ae165831e93":"0b4838db-0161-4ffe-022d-532bf03dba00","000000000933ea01ad0ee984209779ba":"39354064-d79b-420b-065d-f980c4b78200"},ConnectorImageIds:{[J.CONNECTOR_ID.COINBASE]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[J.CONNECTOR_ID.COINBASE_SDK]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[J.CONNECTOR_ID.SAFE]:"461db637-8616-43ce-035a-d89b8a1d5800",[J.CONNECTOR_ID.LEDGER]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[J.CONNECTOR_ID.WALLET_CONNECT]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[J.CONNECTOR_ID.INJECTED]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[J.CONNECTOR_ID.INJECTED]:"Browser Wallet",[J.CONNECTOR_ID.WALLET_CONNECT]:"WalletConnect",[J.CONNECTOR_ID.COINBASE]:"Coinbase",[J.CONNECTOR_ID.COINBASE_SDK]:"Coinbase",[J.CONNECTOR_ID.LEDGER]:"Ledger",[J.CONNECTOR_ID.SAFE]:"Safe"},ConnectorTypesMap:{[J.CONNECTOR_ID.INJECTED]:"INJECTED",[J.CONNECTOR_ID.WALLET_CONNECT]:"WALLET_CONNECT",[J.CONNECTOR_ID.EIP6963]:"ANNOUNCED",[J.CONNECTOR_ID.AUTH]:"AUTH"},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]},Id={getCaipTokens(t){if(!t)return;const e={};return Object.entries(t).forEach(([r,i])=>{e[`${je.EIP155}:${r}`]=i}),e},isLowerCaseMatch(t,e){return(t==null?void 0:t.toLowerCase())===(e==null?void 0:e.toLowerCase())}},So={UniversalProviderErrors:{UNAUTHORIZED_DOMAIN_NOT_ALLOWED:{message:"Unauthorized: origin not allowed",alertErrorKey:"INVALID_APP_CONFIGURATION"},JWT_VALIDATION_ERROR:{message:"JWT validation error: JWT Token is not yet valid",alertErrorKey:"JWT_TOKEN_NOT_VALID"},INVALID_KEY:{message:"Unauthorized: invalid key",alertErrorKey:"INVALID_PROJECT_ID"}},ALERT_ERRORS:{SWITCH_NETWORK_NOT_FOUND:{shortMessage:"Network Not Found",longMessage:"Network not found - please make sure it is included in 'networks' array in createAppKit function"},INVALID_APP_CONFIGURATION:{shortMessage:"Invalid App Configuration",longMessage:()=>`Origin ${s3()?window.origin:"unknown"} not found on Allowlist - update configuration on cloud.reown.com`},SOCIALS_TIMEOUT:{shortMessage:"Invalid App Configuration",longMessage:()=>"There was an issue loading the embedded wallet. Please verify that your domain is allowed at cloud.reown.com"},JWT_TOKEN_NOT_VALID:{shortMessage:"Session Expired",longMessage:"Invalid session found on UniversalProvider - please check your time settings and connect again"},INVALID_PROJECT_ID:{shortMessage:"Invalid App Configuration",longMessage:"Invalid Project ID - update configuration"},PROJECT_ID_NOT_CONFIGURED:{shortMessage:"Project ID Not Configured",longMessage:"Project ID Not Configured - update configuration on cloud.reown.com"}}};function s3(){return typeof window<"u"}function n3(t){try{return JSON.stringify(t)}catch{return'"[Circular]"'}}var o3=a3;function a3(t,e,r){var i=r&&r.stringify||n3,s=1;if(typeof t=="object"&&t!==null){var n=e.length+s;if(n===1)return t;var o=new Array(n);o[0]=i(t);for(var a=1;a<n;a++)o[a]=i(e[a]);return o.join(" ")}if(typeof t!="string")return t;var c=e.length;if(c===0)return t;for(var l="",d=1-s,u=-1,h=t&&t.length||0,p=0;p<h;){if(t.charCodeAt(p)===37&&p+1<h){switch(u=u>-1?u:0,t.charCodeAt(p+1)){case 100:case 102:if(d>=c||e[d]==null)break;u<p&&(l+=t.slice(u,p)),l+=Number(e[d]),u=p+2,p++;break;case 105:if(d>=c||e[d]==null)break;u<p&&(l+=t.slice(u,p)),l+=Math.floor(Number(e[d])),u=p+2,p++;break;case 79:case 111:case 106:if(d>=c||e[d]===void 0)break;u<p&&(l+=t.slice(u,p));var w=typeof e[d];if(w==="string"){l+="'"+e[d]+"'",u=p+2,p++;break}if(w==="function"){l+=e[d].name||"<anonymous>",u=p+2,p++;break}l+=i(e[d]),u=p+2,p++;break;case 115:if(d>=c)break;u<p&&(l+=t.slice(u,p)),l+=String(e[d]),u=p+2,p++;break;case 37:u<p&&(l+=t.slice(u,p)),l+="%",u=p+2,p++,d--;break}++d}++p}return u===-1?t:(u<h&&(l+=t.slice(u)),l)}const Ju=o3;var wi=ir;const Gn=m3().console||{},c3={mapHttpRequest:_o,mapHttpResponse:_o,wrapRequestSerializer:_c,wrapResponseSerializer:_c,wrapErrorSerializer:_c,req:_o,res:_o,err:p3};function l3(t,e){return Array.isArray(t)?t.filter(function(r){return r!=="!stdSerializers.err"}):t===!0?Object.keys(e):!1}function ir(t){t=t||{},t.browser=t.browser||{};const e=t.browser.transmit;if(e&&typeof e.send!="function")throw Error("pino: transmit option must have a send function");const r=t.browser.write||Gn;t.browser.write&&(t.browser.asObject=!0);const i=t.serializers||{},s=l3(t.browser.serialize,i);let n=t.browser.serialize;Array.isArray(t.browser.serialize)&&t.browser.serialize.indexOf("!stdSerializers.err")>-1&&(n=!1);const o=["error","fatal","warn","info","debug","trace"];typeof r=="function"&&(r.error=r.fatal=r.warn=r.info=r.debug=r.trace=r),t.enabled===!1&&(t.level="silent");const a=t.level||"info",c=Object.create(r);c.log||(c.log=Zn),Object.defineProperty(c,"levelVal",{get:d}),Object.defineProperty(c,"level",{get:u,set:h});const l={transmit:e,serialize:s,asObject:t.browser.asObject,levels:o,timestamp:f3(t)};c.levels=ir.levels,c.level=a,c.setMaxListeners=c.getMaxListeners=c.emit=c.addListener=c.on=c.prependListener=c.once=c.prependOnceListener=c.removeListener=c.removeAllListeners=c.listeners=c.listenerCount=c.eventNames=c.write=c.flush=Zn,c.serializers=i,c._serialize=s,c._stdErrSerialize=n,c.child=p,e&&(c._logEvent=Ql());function d(){return this.level==="silent"?1/0:this.levels.values[this.level]}function u(){return this._level}function h(w){if(w!=="silent"&&!this.levels.values[w])throw Error("unknown level "+w);this._level=w,Ji(l,c,"error","log"),Ji(l,c,"fatal","error"),Ji(l,c,"warn","error"),Ji(l,c,"info","log"),Ji(l,c,"debug","log"),Ji(l,c,"trace","log")}function p(w,f){if(!w)throw new Error("missing bindings for child Pino");f=f||{},s&&w.serializers&&(f.serializers=w.serializers);const m=f.serializers;if(s&&m){var v=Object.assign({},i,m),x=t.browser.serialize===!0?Object.keys(v):s;delete w.serializers,Ya([w],x,v,this._stdErrSerialize)}function E(A){this._childLevel=(A._childLevel|0)+1,this.error=Xi(A,w,"error"),this.fatal=Xi(A,w,"fatal"),this.warn=Xi(A,w,"warn"),this.info=Xi(A,w,"info"),this.debug=Xi(A,w,"debug"),this.trace=Xi(A,w,"trace"),v&&(this.serializers=v,this._serialize=x),e&&(this._logEvent=Ql([].concat(A._logEvent.bindings,w)))}return E.prototype=this,new E(this)}return c}ir.levels={values:{fatal:60,error:50,warn:40,info:30,debug:20,trace:10},labels:{10:"trace",20:"debug",30:"info",40:"warn",50:"error",60:"fatal"}},ir.stdSerializers=c3,ir.stdTimeFunctions=Object.assign({},{nullTime:x0,epochTime:E0,unixTime:g3,isoTime:w3});function Ji(t,e,r,i){const s=Object.getPrototypeOf(e);e[r]=e.levelVal>e.levels.values[r]?Zn:s[r]?s[r]:Gn[r]||Gn[i]||Zn,d3(t,e,r)}function d3(t,e,r){!t.transmit&&e[r]===Zn||(e[r]=function(i){return function(){const s=t.timestamp(),n=new Array(arguments.length),o=Object.getPrototypeOf&&Object.getPrototypeOf(this)===Gn?Gn:this;for(var a=0;a<n.length;a++)n[a]=arguments[a];if(t.serialize&&!t.asObject&&Ya(n,this._serialize,this.serializers,this._stdErrSerialize),t.asObject?i.call(o,u3(this,r,n,s)):i.apply(o,n),t.transmit){const c=t.transmit.level||e.level,l=ir.levels.values[c],d=ir.levels.values[r];if(d<l)return;h3(this,{ts:s,methodLevel:r,methodValue:d,transmitLevel:c,transmitValue:ir.levels.values[t.transmit.level||e.level],send:t.transmit.send,val:e.levelVal},n)}}}(e[r]))}function u3(t,e,r,i){t._serialize&&Ya(r,t._serialize,t.serializers,t._stdErrSerialize);const s=r.slice();let n=s[0];const o={};i&&(o.time=i),o.level=ir.levels.values[e];let a=(t._childLevel|0)+1;if(a<1&&(a=1),n!==null&&typeof n=="object"){for(;a--&&typeof s[0]=="object";)Object.assign(o,s.shift());n=s.length?Ju(s.shift(),s):void 0}else typeof n=="string"&&(n=Ju(s.shift(),s));return n!==void 0&&(o.msg=n),o}function Ya(t,e,r,i){for(const s in t)if(i&&t[s]instanceof Error)t[s]=ir.stdSerializers.err(t[s]);else if(typeof t[s]=="object"&&!Array.isArray(t[s]))for(const n in t[s])e&&e.indexOf(n)>-1&&n in r&&(t[s][n]=r[n](t[s][n]))}function Xi(t,e,r){return function(){const i=new Array(1+arguments.length);i[0]=e;for(var s=1;s<i.length;s++)i[s]=arguments[s-1];return t[r].apply(this,i)}}function h3(t,e,r){const i=e.send,s=e.ts,n=e.methodLevel,o=e.methodValue,a=e.val,c=t._logEvent.bindings;Ya(r,t._serialize||Object.keys(t.serializers),t.serializers,t._stdErrSerialize===void 0?!0:t._stdErrSerialize),t._logEvent.ts=s,t._logEvent.messages=r.filter(function(l){return c.indexOf(l)===-1}),t._logEvent.level.label=n,t._logEvent.level.value=o,i(n,t._logEvent,a),t._logEvent=Ql(c)}function Ql(t){return{ts:0,messages:[],bindings:t||[],level:{label:"",value:0}}}function p3(t){const e={type:t.constructor.name,msg:t.message,stack:t.stack};for(const r in t)e[r]===void 0&&(e[r]=t[r]);return e}function f3(t){return typeof t.timestamp=="function"?t.timestamp:t.timestamp===!1?x0:E0}function _o(){return{}}function _c(t){return t}function Zn(){}function x0(){return!1}function E0(){return Date.now()}function g3(){return Math.round(Date.now()/1e3)}function w3(){return new Date(Date.now()).toISOString()}function m3(){function t(e){return typeof e<"u"&&e}try{return typeof globalThis<"u"||Object.defineProperty(Object.prototype,"globalThis",{get:function(){return delete Object.prototype.globalThis,this.globalThis=this},configurable:!0}),globalThis}catch{return t(self)||t(window)||t(this)||{}}}const v3=t=>JSON.stringify(t,(e,r)=>typeof r=="bigint"?r.toString()+"n":r);function Xu(t){return typeof t=="string"?t:v3(t)||""}const b3={level:"info"},Ad=1e3*1024;class y3{constructor(e){this.nodeValue=e,this.sizeInBytes=new TextEncoder().encode(this.nodeValue).length,this.next=null}get value(){return this.nodeValue}get size(){return this.sizeInBytes}}class Qu{constructor(e){this.head=null,this.tail=null,this.lengthInNodes=0,this.maxSizeInBytes=e,this.sizeInBytes=0}append(e){const r=new y3(e);if(r.size>this.maxSizeInBytes)throw new Error(`[LinkedList] Value too big to insert into list: ${e} with size ${r.size}`);for(;this.size+r.size>this.maxSizeInBytes;)this.shift();this.head?(this.tail&&(this.tail.next=r),this.tail=r):(this.head=r,this.tail=r),this.lengthInNodes++,this.sizeInBytes+=r.size}shift(){if(!this.head)return;const e=this.head;this.head=this.head.next,this.head||(this.tail=null),this.lengthInNodes--,this.sizeInBytes-=e.size}toArray(){const e=[];let r=this.head;for(;r!==null;)e.push(r.value),r=r.next;return e}get length(){return this.lengthInNodes}get size(){return this.sizeInBytes}toOrderedArray(){return Array.from(this)}[Symbol.iterator](){let e=this.head;return{next:()=>{if(!e)return{done:!0,value:null};const r=e.value;return e=e.next,{done:!1,value:r}}}}}class I0{constructor(e,r=Ad){this.level=e??"error",this.levelValue=wi.levels.values[this.level],this.MAX_LOG_SIZE_IN_BYTES=r,this.logs=new Qu(this.MAX_LOG_SIZE_IN_BYTES)}forwardToConsole(e,r){r===wi.levels.values.error?console.error(e):r===wi.levels.values.warn?console.warn(e):r===wi.levels.values.debug?console.debug(e):r===wi.levels.values.trace?console.trace(e):console.log(e)}appendToLogs(e){this.logs.append(Xu({timestamp:new Date().toISOString(),log:e}));const r=typeof e=="string"?JSON.parse(e).level:e.level;r>=this.levelValue&&this.forwardToConsole(e,r)}getLogs(){return this.logs}clearLogs(){this.logs=new Qu(this.MAX_LOG_SIZE_IN_BYTES)}getLogArray(){return Array.from(this.logs)}logsToBlob(e){const r=this.getLogArray();return r.push(Xu({extraMetadata:e})),new Blob(r,{type:"application/json"})}}class C3{constructor(e,r=Ad){this.baseChunkLogger=new I0(e,r)}write(e){this.baseChunkLogger.appendToLogs(e)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(e){return this.baseChunkLogger.logsToBlob(e)}downloadLogsBlobInBrowser(e){const r=URL.createObjectURL(this.logsToBlob(e)),i=document.createElement("a");i.href=r,i.download=`walletconnect-logs-${new Date().toISOString()}.txt`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r)}}class x3{constructor(e,r=Ad){this.baseChunkLogger=new I0(e,r)}write(e){this.baseChunkLogger.appendToLogs(e)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(e){return this.baseChunkLogger.logsToBlob(e)}}var E3=Object.defineProperty,I3=Object.defineProperties,A3=Object.getOwnPropertyDescriptors,eh=Object.getOwnPropertySymbols,N3=Object.prototype.hasOwnProperty,k3=Object.prototype.propertyIsEnumerable,th=(t,e,r)=>e in t?E3(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Pa=(t,e)=>{for(var r in e||(e={}))N3.call(e,r)&&th(t,r,e[r]);if(eh)for(var r of eh(e))k3.call(e,r)&&th(t,r,e[r]);return t},Ta=(t,e)=>I3(t,A3(e));function S3(t){return Ta(Pa({},t),{level:(t==null?void 0:t.level)||b3.level})}function _3(t){var e,r;const i=new C3((e=t.opts)==null?void 0:e.level,t.maxSizeInBytes);return{logger:wi(Ta(Pa({},t.opts),{level:"trace",browser:Ta(Pa({},(r=t.opts)==null?void 0:r.browser),{write:s=>i.write(s)})})),chunkLoggerController:i}}function P3(t){var e;const r=new x3((e=t.opts)==null?void 0:e.level,t.maxSizeInBytes);return{logger:wi(Ta(Pa({},t.opts),{level:"trace"})),chunkLoggerController:r}}function T3(t){return typeof t.loggerOverride<"u"&&typeof t.loggerOverride!="string"?{logger:t.loggerOverride,chunkLoggerController:null}:typeof window<"u"?_3(t):P3(t)}const O3={createLogger(t,e="error"){const r=S3({level:e}),{logger:i}=T3({opts:r});return i.error=(...s)=>{for(const n of s)if(n instanceof Error){t(n,...s);return}t(void 0,...s)},i}},$3="rpc.walletconnect.org";function rh(t,e){const r=new URL("https://rpc.walletconnect.org/v1/");return r.searchParams.set("chainId",t),r.searchParams.set("projectId",e),r.toString()}const Pc=["near:mainnet","solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp","eip155:1101","eip155:56","eip155:42161","eip155:7777777","eip155:59144","eip155:324","solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1","eip155:5000","solana:4sgjmw1sunhzsxgspuhpqldx6wiyjntz","eip155:80084","eip155:5003","eip155:100","eip155:8453","eip155:42220","eip155:1313161555","eip155:17000","eip155:1","eip155:300","eip155:1313161554","eip155:1329","eip155:84532","eip155:421614","eip155:11155111","eip155:8217","eip155:43114","solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z","eip155:999999999","eip155:11155420","eip155:80002","eip155:97","eip155:43113","eip155:137","eip155:10","eip155:1301","bip122:000000000019d6689c085ae165831e93","bip122:000000000933ea01ad0ee984209779ba"],os={extendRpcUrlWithProjectId(t,e){let r=!1;try{r=new URL(t).host===$3}catch{r=!1}if(r){const i=new URL(t);return i.searchParams.has("projectId")||i.searchParams.set("projectId",e),i.toString()}return t},isCaipNetwork(t){return"chainNamespace"in t&&"caipNetworkId"in t},getChainNamespace(t){return this.isCaipNetwork(t)?t.chainNamespace:J.CHAIN.EVM},getCaipNetworkId(t){return this.isCaipNetwork(t)?t.caipNetworkId:`${J.CHAIN.EVM}:${t.id}`},getDefaultRpcUrl(t,e,r){var s,n,o;const i=(o=(n=(s=t.rpcUrls)==null?void 0:s.default)==null?void 0:n.http)==null?void 0:o[0];return Pc.includes(e)?rh(e,r):i||""},extendCaipNetwork(t,{customNetworkImageUrls:e,projectId:r,customRpcUrls:i}){var h,p,w,f,m;const s=this.getChainNamespace(t),n=this.getCaipNetworkId(t),o=(h=t.rpcUrls.default.http)==null?void 0:h[0],a=this.getDefaultRpcUrl(t,n,r),c=((f=(w=(p=t==null?void 0:t.rpcUrls)==null?void 0:p.chainDefault)==null?void 0:w.http)==null?void 0:f[0])||o,l=((m=i==null?void 0:i[n])==null?void 0:m.map(v=>v.url))||[],d=[...l,a],u=[...l];return c&&!u.includes(c)&&u.push(c),{...t,chainNamespace:s,caipNetworkId:n,assets:{imageId:_a.NetworkImageIds[t.id],imageUrl:e==null?void 0:e[t.id]},rpcUrls:{...t.rpcUrls,default:{http:d},chainDefault:{http:u}}}},extendCaipNetworks(t,{customNetworkImageUrls:e,projectId:r,customRpcUrls:i}){return t.map(s=>os.extendCaipNetwork(s,{customNetworkImageUrls:e,customRpcUrls:i,projectId:r}))},getViemTransport(t,e,r){var s,n,o;const i=[];return r==null||r.forEach(a=>{i.push(Ao(a.url,a.config))}),Pc.includes(t.caipNetworkId)&&i.push(Ao(rh(t.caipNetworkId,e),{fetchOptions:{headers:{"Content-Type":"text/plain"}}})),(o=(n=(s=t==null?void 0:t.rpcUrls)==null?void 0:s.default)==null?void 0:n.http)==null||o.forEach(a=>{i.push(Ao(a))}),$u(i)},extendWagmiTransports(t,e,r){if(Pc.includes(t.caipNetworkId)){const i=this.getDefaultRpcUrl(t,t.caipNetworkId,e);return $u([r,Ao(i)])}return r},getUnsupportedNetwork(t){return{id:t.split(":")[1],caipNetworkId:t,name:J.UNSUPPORTED_NETWORK_NAME,chainNamespace:t.split(":")[0],nativeCurrency:{name:"",decimals:0,symbol:""},rpcUrls:{default:{http:[]}}}},getCaipNetworkFromStorage(t){var a;const e=Y.getActiveCaipNetworkId(),r=b.getAllRequestedCaipNetworks(),i=Array.from(((a=b.state.chains)==null?void 0:a.keys())||[]),s=e==null?void 0:e.split(":")[0],n=s?i.includes(s):!1,o=r==null?void 0:r.find(c=>c.caipNetworkId===e);return n&&!o&&e?this.getUnsupportedNetwork(e):o||t||(r==null?void 0:r[0])}},Oa={eip155:void 0,solana:void 0,polkadot:void 0,bip122:void 0},ht=Pe({providers:{...Oa},providerIds:{...Oa}}),$e={state:ht,subscribeKey(t,e){return ct(ht,t,e)},subscribe(t){return it(ht,()=>{t(ht)})},subscribeProviders(t){return it(ht.providers,()=>t(ht.providers))},setProvider(t,e){e&&(ht.providers[t]=Ni(e))},getProvider(t){return ht.providers[t]},setProviderId(t,e){e&&(ht.providerIds[t]=e)},getProviderId(t){if(t)return ht.providerIds[t]},reset(){ht.providers={...Oa},ht.providerIds={...Oa}},resetChain(t){ht.providers[t]=void 0,ht.providerIds[t]=void 0}};var ih;(function(t){t.Google="google",t.Github="github",t.Apple="apple",t.Facebook="facebook",t.X="x",t.Discord="discord",t.Farcaster="farcaster"})(ih||(ih={}));const Br={ACCOUNT_TABS:[{label:"Tokens"},{label:"NFTs"},{label:"Activity"}],SECURE_SITE_ORIGIN:(typeof process<"u"&&typeof Ia<"u"?Ia.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",VIEW_DIRECTION:{Next:"next",Prev:"prev"},DEFAULT_CONNECT_METHOD_ORDER:["email","social","wallet"],ANIMATION_DURATIONS:{HeaderText:120,ModalHeight:150,ViewTransition:150}},_i={filterOutDuplicatesByRDNS(t){const e=L.state.enableEIP6963?V.state.connectors:[],r=Y.getRecentWallets(),i=e.map(o=>{var a;return(a=o.info)==null?void 0:a.rdns}).filter(Boolean),s=r.map(o=>o.rdns).filter(Boolean),n=i.concat(s);if(n.includes("io.metamask.mobile")&&z.isMobile()){const o=n.indexOf("io.metamask.mobile");n[o]="io.metamask"}return t.filter(o=>!n.includes(String(o==null?void 0:o.rdns)))},filterOutDuplicatesByIds(t){const e=V.state.connectors.filter(o=>o.type==="ANNOUNCED"||o.type==="INJECTED"),r=Y.getRecentWallets(),i=e.map(o=>o.explorerId),s=r.map(o=>o.id),n=i.concat(s);return t.filter(o=>!n.includes(o==null?void 0:o.id))},filterOutDuplicateWallets(t){const e=this.filterOutDuplicatesByRDNS(t);return this.filterOutDuplicatesByIds(e)},markWalletsAsInstalled(t){const{connectors:e}=V.state,r=e.filter(i=>i.type==="ANNOUNCED").reduce((i,s)=>{var n;return(n=s.info)!=null&&n.rdns&&(i[s.info.rdns]=!0),i},{});return t.map(i=>({...i,installed:!!i.rdns&&!!r[i.rdns??""]})).sort((i,s)=>Number(s.installed)-Number(i.installed))},getConnectOrderMethod(t,e){var c;const r=(t==null?void 0:t.connectMethodsOrder)||((c=L.state.features)==null?void 0:c.connectMethodsOrder),i=e||V.state.connectors;if(r)return r;const{injected:s,announced:n}=yr.getConnectorsByType(i,F.state.recommended,F.state.featured),o=s.filter(yr.showConnector),a=n.filter(yr.showConnector);return o.length||a.length?["wallet","email","social"]:Br.DEFAULT_CONNECT_METHOD_ORDER},isExcluded(t){const e=!!t.rdns&&F.state.excludedWallets.some(i=>i.rdns===t.rdns),r=!!t.name&&F.state.excludedWallets.some(i=>Id.isLowerCaseMatch(i.name,t.name));return e||r}},yr={getConnectorsByType(t,e,r){const{customWallets:i}=L.state,s=Y.getRecentWallets(),n=_i.filterOutDuplicateWallets(e),o=_i.filterOutDuplicateWallets(r),a=t.filter(u=>u.type==="MULTI_CHAIN"),c=t.filter(u=>u.type==="ANNOUNCED"),l=t.filter(u=>u.type==="INJECTED"),d=t.filter(u=>u.type==="EXTERNAL");return{custom:i,recent:s,external:d,multiChain:a,announced:c,injected:l,recommended:n,featured:o}},showConnector(t){var s;const e=(s=t.info)==null?void 0:s.rdns,r=!!e&&F.state.excludedWallets.some(n=>!!n.rdns&&n.rdns===e),i=!!t.name&&F.state.excludedWallets.some(n=>Id.isLowerCaseMatch(n.name,t.name));return!(t.type==="INJECTED"&&(!z.isMobile()&&t.name==="Browser Wallet"||!e&&!X.checkInstalled()||r||i)||(t.type==="ANNOUNCED"||t.type==="EXTERNAL")&&(r||i))},getIsConnectedWithWC(){return Array.from(b.state.chains.values()).some(t=>V.getConnectorId(t.namespace)===J.CONNECTOR_ID.WALLET_CONNECT)},getConnectorTypeOrder({recommended:t,featured:e,custom:r,recent:i,announced:s,injected:n,multiChain:o,external:a,overriddenConnectors:c=(l=>(l=L.state.features)==null?void 0:l.connectorTypeOrder)()??[]}){const d=yr.getIsConnectedWithWC(),u=[{type:"walletConnect",isEnabled:L.state.enableWalletConnect&&!d},{type:"recent",isEnabled:i.length>0},{type:"injected",isEnabled:[...n,...s,...o].length>0},{type:"featured",isEnabled:e.length>0},{type:"custom",isEnabled:r&&r.length>0},{type:"external",isEnabled:a.length>0},{type:"recommended",isEnabled:t.length>0}].filter(f=>f.isEnabled),h=new Set(u.map(f=>f.type)),p=c.filter(f=>h.has(f)).map(f=>({type:f,isEnabled:!0})),w=u.filter(({type:f})=>!p.some(({type:m})=>m===f));return Array.from(new Set([...p,...w].map(({type:f})=>f)))}};/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Ca=globalThis,Nd=Ca.ShadowRoot&&(Ca.ShadyCSS===void 0||Ca.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,kd=Symbol(),sh=new WeakMap;class A0{constructor(e,r,i){if(this._$cssResult$=!0,i!==kd)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Nd&&e===void 0){const i=r!==void 0&&r.length===1;i&&(e=sh.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&sh.set(r,e))}return e}toString(){return this.cssText}}const Lt=t=>new A0(typeof t=="string"?t:t+"",void 0,kd),ie=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1],t[0]);return new A0(r,t,kd)},R3=(t,e)=>{if(Nd)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const i=document.createElement("style"),s=Ca.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=r.cssText,t.appendChild(i)}},nh=Nd?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const i of e.cssRules)r+=i.cssText;return Lt(r)})(t):t;/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{is:L3,defineProperty:M3,getOwnPropertyDescriptor:B3,getOwnPropertyNames:U3,getOwnPropertySymbols:D3,getPrototypeOf:j3}=Object,jr=globalThis,oh=jr.trustedTypes,z3=oh?oh.emptyScript:"",Tc=jr.reactiveElementPolyfillSupport,Cn=(t,e)=>t,$a={toAttribute(t,e){switch(e){case Boolean:t=t?z3:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Sd=(t,e)=>!L3(t,e),ah={attribute:!0,type:String,converter:$a,reflect:!1,useDefault:!1,hasChanged:Sd};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),jr.litPropertyMetadata??(jr.litPropertyMetadata=new WeakMap);class as extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=ah){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(e,r),!r.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,r);s!==void 0&&M3(this.prototype,e,s)}}static getPropertyDescriptor(e,r,i){const{get:s,set:n}=B3(this.prototype,e)??{get(){return this[r]},set(o){this[r]=o}};return{get:s,set(o){const a=s==null?void 0:s.call(this);n==null||n.call(this,o),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ah}static _$Ei(){if(this.hasOwnProperty(Cn("elementProperties")))return;const e=j3(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Cn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Cn("properties"))){const r=this.properties,i=[...U3(r),...D3(r)];for(const s of i)this.createProperty(s,r[s])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[i,s]of r)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const s=this._$Eu(r,i);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)r.unshift(nh(s))}else e!==void 0&&r.push(nh(e));return r}static _$Eu(e,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return R3(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostConnected)==null?void 0:i.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostDisconnected)==null?void 0:i.call(r)})}attributeChangedCallback(e,r,i){this._$AK(e,i)}_$ET(e,r){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:$a).toAttribute(r,i.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,r){var n,o;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const a=i.getPropertyOptions(s),c=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:$a;this._$Em=s,this[s]=c.fromAttribute(r,a.type)??((o=this._$Ej)==null?void 0:o.get(s))??null,this._$Em=null}}requestUpdate(e,r,i){var s;if(e!==void 0){const n=this.constructor,o=this[e];if(i??(i=n.getPropertyOptions(e)),!((i.hasChanged??Sd)(o,r)||i.useDefault&&i.reflect&&o===((s=this._$Ej)==null?void 0:s.get(e))&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,r,{useDefault:i,reflect:s,wrapped:n},o){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,o??r??this[e]),n!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(r=void 0),this._$AL.set(e,r)),s===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,o]of s){const{wrapped:a}=o,c=this[n];a!==!0||this._$AL.has(n)||c===void 0||this.C(n,void 0,o,c)}}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(r)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(r=>this._$ET(r,this[r]))),this._$EM()}updated(e){}firstUpdated(e){}}as.elementStyles=[],as.shadowRootOptions={mode:"open"},as[Cn("elementProperties")]=new Map,as[Cn("finalized")]=new Map,Tc==null||Tc({ReactiveElement:as}),(jr.reactiveElementVersions??(jr.reactiveElementVersions=[])).push("2.1.0");/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const xn=globalThis,Ra=xn.trustedTypes,ch=Ra?Ra.createPolicy("lit-html",{createHTML:t=>t}):void 0,N0="$lit$",Lr=`lit$${Math.random().toFixed(9).slice(2)}$`,k0="?"+Lr,H3=`<${k0}>`,Pi=document,Kn=()=>Pi.createComment(""),Yn=t=>t===null||typeof t!="object"&&typeof t!="function",_d=Array.isArray,q3=t=>_d(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Oc=`[ 	
\f\r]`,js=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,lh=/-->/g,dh=/>/g,Xr=RegExp(`>|${Oc}(?:([^\\s"'>=/]+)(${Oc}*=${Oc}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),uh=/'/g,hh=/"/g,S0=/^(?:script|style|textarea|title)$/i,_0=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),C=_0(1),H=_0(2),xr=Symbol.for("lit-noChange"),Me=Symbol.for("lit-nothing"),ph=new WeakMap,vi=Pi.createTreeWalker(Pi,129);function P0(t,e){if(!_d(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return ch!==void 0?ch.createHTML(e):e}const W3=(t,e)=>{const r=t.length-1,i=[];let s,n=e===2?"<svg>":e===3?"<math>":"",o=js;for(let a=0;a<r;a++){const c=t[a];let l,d,u=-1,h=0;for(;h<c.length&&(o.lastIndex=h,d=o.exec(c),d!==null);)h=o.lastIndex,o===js?d[1]==="!--"?o=lh:d[1]!==void 0?o=dh:d[2]!==void 0?(S0.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=Xr):d[3]!==void 0&&(o=Xr):o===Xr?d[0]===">"?(o=s??js,u=-1):d[1]===void 0?u=-2:(u=o.lastIndex-d[2].length,l=d[1],o=d[3]===void 0?Xr:d[3]==='"'?hh:uh):o===hh||o===uh?o=Xr:o===lh||o===dh?o=js:(o=Xr,s=void 0);const p=o===Xr&&t[a+1].startsWith("/>")?" ":"";n+=o===js?c+H3:u>=0?(i.push(l),c.slice(0,u)+N0+c.slice(u)+Lr+p):c+Lr+(u===-2?a:p)}return[P0(t,n+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class Jn{constructor({strings:e,_$litType$:r},i){let s;this.parts=[];let n=0,o=0;const a=e.length-1,c=this.parts,[l,d]=W3(e,r);if(this.el=Jn.createElement(l,i),vi.currentNode=this.el.content,r===2||r===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(s=vi.nextNode())!==null&&c.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const u of s.getAttributeNames())if(u.endsWith(N0)){const h=d[o++],p=s.getAttribute(u).split(Lr),w=/([.?@])?(.*)/.exec(h);c.push({type:1,index:n,name:w[2],strings:p,ctor:w[1]==="."?V3:w[1]==="?"?G3:w[1]==="@"?Z3:Ja}),s.removeAttribute(u)}else u.startsWith(Lr)&&(c.push({type:6,index:n}),s.removeAttribute(u));if(S0.test(s.tagName)){const u=s.textContent.split(Lr),h=u.length-1;if(h>0){s.textContent=Ra?Ra.emptyScript:"";for(let p=0;p<h;p++)s.append(u[p],Kn()),vi.nextNode(),c.push({type:2,index:++n});s.append(u[h],Kn())}}}else if(s.nodeType===8)if(s.data===k0)c.push({type:2,index:n});else{let u=-1;for(;(u=s.data.indexOf(Lr,u+1))!==-1;)c.push({type:7,index:n}),u+=Lr.length-1}n++}}static createElement(e,r){const i=Pi.createElement("template");return i.innerHTML=e,i}}function Ns(t,e,r=t,i){var o,a;if(e===xr)return e;let s=i!==void 0?(o=r._$Co)==null?void 0:o[i]:r._$Cl;const n=Yn(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),n===void 0?s=void 0:(s=new n(t),s._$AT(t,r,i)),i!==void 0?(r._$Co??(r._$Co=[]))[i]=s:r._$Cl=s),s!==void 0&&(e=Ns(t,s._$AS(t,e.values),s,i)),e}class F3{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??Pi).importNode(r,!0);vi.currentNode=s;let n=vi.nextNode(),o=0,a=0,c=i[0];for(;c!==void 0;){if(o===c.index){let l;c.type===2?l=new oo(n,n.nextSibling,this,e):c.type===1?l=new c.ctor(n,c.name,c.strings,this,e):c.type===6&&(l=new K3(n,this,e)),this._$AV.push(l),c=i[++a]}o!==(c==null?void 0:c.index)&&(n=vi.nextNode(),o++)}return vi.currentNode=Pi,s}p(e){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,r),r+=i.strings.length-2):i._$AI(e[r])),r++}}class oo{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,i,s){this.type=2,this._$AH=Me,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Ns(this,e,r),Yn(e)?e===Me||e==null||e===""?(this._$AH!==Me&&this._$AR(),this._$AH=Me):e!==this._$AH&&e!==xr&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):q3(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Me&&Yn(this._$AH)?this._$AA.nextSibling.data=e:this.T(Pi.createTextNode(e)),this._$AH=e}$(e){var n;const{values:r,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Jn.createElement(P0(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(r);else{const o=new F3(s,this),a=o.u(this.options);o.p(r),this.T(a),this._$AH=o}}_$AC(e){let r=ph.get(e.strings);return r===void 0&&ph.set(e.strings,r=new Jn(e)),r}k(e){_d(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,s=0;for(const n of e)s===r.length?r.push(i=new oo(this.O(Kn()),this.O(Kn()),this,this.options)):i=r[s],i._$AI(n),s++;s<r.length&&(this._$AR(i&&i._$AB.nextSibling,s),r.length=s)}_$AR(e=this._$AA.nextSibling,r){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,r);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}class Ja{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,i,s,n){this.type=1,this._$AH=Me,this._$AN=void 0,this.element=e,this.name=r,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Me}_$AI(e,r=this,i,s){const n=this.strings;let o=!1;if(n===void 0)e=Ns(this,e,r,0),o=!Yn(e)||e!==this._$AH&&e!==xr,o&&(this._$AH=e);else{const a=e;let c,l;for(e=n[0],c=0;c<n.length-1;c++)l=Ns(this,a[i+c],r,c),l===xr&&(l=this._$AH[c]),o||(o=!Yn(l)||l!==this._$AH[c]),l===Me?e=Me:e!==Me&&(e+=(l??"")+n[c+1]),this._$AH[c]=l}o&&!s&&this.j(e)}j(e){e===Me?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class V3 extends Ja{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Me?void 0:e}}class G3 extends Ja{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Me)}}class Z3 extends Ja{constructor(e,r,i,s,n){super(e,r,i,s,n),this.type=5}_$AI(e,r=this){if((e=Ns(this,e,r,0)??Me)===xr)return;const i=this._$AH,s=e===Me&&i!==Me||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==Me&&(i===Me||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}class K3{constructor(e,r,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Ns(this,e)}}const $c=xn.litHtmlPolyfillSupport;$c==null||$c(Jn,oo),(xn.litHtmlVersions??(xn.litHtmlVersions=[])).push("3.3.0");const Y3=(t,e,r)=>{const i=(r==null?void 0:r.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(r==null?void 0:r.renderBefore)??null;i._$litPart$=s=new oo(e.insertBefore(Kn(),n),n,void 0,r??{})}return s._$AI(t),s};/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Ai=globalThis;class K extends as{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Y3(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return xr}}var Xh;K._$litElement$=!0,K.finalized=!0,(Xh=Ai.litElementHydrateSupport)==null||Xh.call(Ai,{LitElement:K});const Rc=Ai.litElementPolyfillSupport;Rc==null||Rc({LitElement:K}),(Ai.litElementVersions??(Ai.litElementVersions=[])).push("4.2.0");let En,zr,Hr;function J3(t,e){En=document.createElement("style"),zr=document.createElement("style"),Hr=document.createElement("style"),En.textContent=fs(t).core.cssText,zr.textContent=fs(t).dark.cssText,Hr.textContent=fs(t).light.cssText,document.head.appendChild(En),document.head.appendChild(zr),document.head.appendChild(Hr),T0(e)}function T0(t){zr&&Hr&&(t==="light"?(zr.removeAttribute("media"),Hr.media="enabled"):(Hr.removeAttribute("media"),zr.media="enabled"))}function X3(t){En&&zr&&Hr&&(En.textContent=fs(t).core.cssText,zr.textContent=fs(t).dark.cssText,Hr.textContent=fs(t).light.cssText)}function fs(t){return{core:ie`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --w3m-modal-width: 360px;
        --w3m-color-mix-strength: ${Lt(t!=null&&t["--w3m-color-mix-strength"]?`${t["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${Lt((t==null?void 0:t["--w3m-font-family"])||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${Lt((t==null?void 0:t["--w3m-font-size-master"])||"10px")};
        --w3m-border-radius-master: ${Lt((t==null?void 0:t["--w3m-border-radius-master"])||"4px")};
        --w3m-z-index: ${Lt((t==null?void 0:t["--w3m-z-index"])||999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-title-6: calc(var(--w3m-font-size-master) * 2.2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-title-6: -0.88px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;
        --wui-spacing-5xl: 95px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-mdl: 36px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-2lg: 48px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;
        --wui-icon-size-xxl: 28px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-success-125: var(--wui-color-success-base-125);

        --wui-color-warning-100: var(--wui-color-warning-base-100);

        --wui-color-error-100: var(--wui-color-error-base-100);
        --wui-color-error-125: var(--wui-color-error-base-125);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-90: var(--wui-color-blue-base-90);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-wallet-button-bg: var(--wui-wallet-button-bg-base);

        --wui-box-shadow-blue: var(--wui-color-accent-glass-020);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 20%, transparent);

          --wui-color-accent-100: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 100%,
            transparent
          );
          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-color-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-color-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-color-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-300)
          );
          --wui-color-fg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-325)
          );
          --wui-color-fg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-350)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-300)
          );
          --wui-color-bg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-325)
          );
          --wui-color-bg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-350)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-success-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-125)
          );

          --wui-color-warning-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-warning-base-100)
          );

          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );
          --wui-color-blue-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-100)
          );
          --wui-color-blue-90: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-90)
          );
          --wui-color-error-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-125)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );

          --wui-wallet-button-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-wallet-button-bg-base)
          );
        }
      }
    `,light:ie`
      :root {
        --w3m-color-mix: ${Lt((t==null?void 0:t["--w3m-color-mix"])||"#fff")};
        --w3m-accent: ${Lt(Mr(t,"dark")["--w3m-accent"])};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: ${Lt(Mr(t,"dark")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(230, 100%, 67%, 1);
        --wui-color-blueberry-090: hsla(231, 76%, 61%, 1);
        --wui-color-blueberry-080: hsla(230, 59%, 55%, 1);
        --wui-color-blueberry-050: hsla(231, 100%, 70%, 0.1);

        --wui-color-fg-100: #e4e7e7;
        --wui-color-fg-125: #d0d5d5;
        --wui-color-fg-150: #a8b1b1;
        --wui-color-fg-175: #a8b0b0;
        --wui-color-fg-200: #949e9e;
        --wui-color-fg-225: #868f8f;
        --wui-color-fg-250: #788080;
        --wui-color-fg-275: #788181;
        --wui-color-fg-300: #6e7777;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #363636;

        --wui-color-bg-100: #141414;
        --wui-color-bg-125: #191a1a;
        --wui-color-bg-150: #1e1f1f;
        --wui-color-bg-175: #222525;
        --wui-color-bg-200: #272a2a;
        --wui-color-bg-225: #2c3030;
        --wui-color-bg-250: #313535;
        --wui-color-bg-275: #363b3b;
        --wui-color-bg-300: #3b4040;
        --wui-color-bg-325: #252525;
        --wui-color-bg-350: #ffffff;

        --wui-color-success-base-100: #26d962;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f25a67;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-color-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-color-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-color-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-color-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-color-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-color-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-color-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-color-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-color-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-color-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-color-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-color-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-color-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-color-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-color-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-color-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-color-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-color-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-color-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-color-gray-glass-090: rgba(255, 255, 255, 0.9);

        --wui-color-dark-glass-100: rgba(42, 42, 42, 1);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --w3m-card-embedded-shadow-color: rgb(17 17 18 / 25%);
      }
    `,dark:ie`
      :root {
        --w3m-color-mix: ${Lt((t==null?void 0:t["--w3m-color-mix"])||"#000")};
        --w3m-accent: ${Lt(Mr(t,"light")["--w3m-accent"])};
        --w3m-default: #000;

        --wui-color-modal-bg-base: ${Lt(Mr(t,"light")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(231, 100%, 70%, 1);
        --wui-color-blueberry-090: hsla(231, 97%, 72%, 1);
        --wui-color-blueberry-080: hsla(231, 92%, 74%, 1);

        --wui-color-fg-100: #141414;
        --wui-color-fg-125: #2d3131;
        --wui-color-fg-150: #474d4d;
        --wui-color-fg-175: #636d6d;
        --wui-color-fg-200: #798686;
        --wui-color-fg-225: #828f8f;
        --wui-color-fg-250: #8b9797;
        --wui-color-fg-275: #95a0a0;
        --wui-color-fg-300: #9ea9a9;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #d0d0d0;

        --wui-color-bg-100: #ffffff;
        --wui-color-bg-125: #f5fafa;
        --wui-color-bg-150: #f3f8f8;
        --wui-color-bg-175: #eef4f4;
        --wui-color-bg-200: #eaf1f1;
        --wui-color-bg-225: #e5eded;
        --wui-color-bg-250: #e1e9e9;
        --wui-color-bg-275: #dce7e7;
        --wui-color-bg-300: #d8e3e3;
        --wui-color-bg-325: #f3f3f3;
        --wui-color-bg-350: #202020;

        --wui-color-success-base-100: #26b562;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f05142;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-color-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-color-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-color-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-color-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-color-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-color-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-color-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-color-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-color-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --wui-color-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-color-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-color-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-color-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-color-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-color-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-color-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-color-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-color-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-color-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-color-gray-glass-090: rgba(0, 0, 0, 0.9);

        --wui-color-dark-glass-100: rgba(233, 233, 233, 1);

        --w3m-card-embedded-shadow-color: rgb(224 225 233 / 25%);
      }
    `}}const xe=ie`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,et=ie`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border, box-shadow, border-radius;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  wui-flex {
    transition: border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }
  }

  button:disabled > wui-icon-box {
    opacity: 0.5;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,ao=ie`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-blue-100 {
    color: var(--wui-color-blue-100);
  }

  .wui-color-blue-90 {
    color: var(--wui-color-blue-90);
  }

  .wui-color-error-125 {
    color: var(--wui-color-error-125);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-success-125 {
    color: var(--wui-color-success-125);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    color: var(--wui-color-fg-350);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-error-125 {
    background-color: var(--wui-color-error-125);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-success-125 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    background-color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    background-color: var(--wui-color-fg-350);
  }
`,Ye={getSpacingStyles(t,e){if(Array.isArray(t))return t[e]?`var(--wui-spacing-${t[e]})`:void 0;if(typeof t=="string")return`var(--wui-spacing-${t})`},getFormattedDate(t){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)},getHostName(t){try{return new URL(t).hostname}catch{return""}},getTruncateString({string:t,charsStart:e,charsEnd:r,truncate:i}){return t.length<=e+r?t:i==="end"?`${t.substring(0,e)}...`:i==="start"?`...${t.substring(t.length-r)}`:`${t.substring(0,Math.floor(e))}...${t.substring(t.length-Math.floor(r))}`},generateAvatarColors(t){const e=t.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),r=this.hexToRgb(e),i=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),s=100-3*Number(i==null?void 0:i.replace("px","")),n=`${s}% ${s}% at 65% 40%`,o=[];for(let a=0;a<5;a+=1){const c=this.tintColor(r,.15*a);o.push(`rgb(${c[0]}, ${c[1]}, ${c[2]})`)}return`
    --local-color-1: ${o[0]};
    --local-color-2: ${o[1]};
    --local-color-3: ${o[2]};
    --local-color-4: ${o[3]};
    --local-color-5: ${o[4]};
    --local-radial-circle: ${n}
   `},hexToRgb(t){const e=parseInt(t,16),r=e>>16&255,i=e>>8&255,s=e&255;return[r,i,s]},tintColor(t,e){const[r,i,s]=t,n=Math.round(r+(255-r)*e),o=Math.round(i+(255-i)*e),a=Math.round(s+(255-s)*e);return[n,o,a]},isNumber(t){return/^[0-9]+$/u.test(t)},getColorTheme(t){var e;return t||(typeof window<"u"&&window.matchMedia?(e=window.matchMedia("(prefers-color-scheme: dark)"))!=null&&e.matches?"dark":"light":"dark")},splitBalance(t){const e=t.split(".");return e.length===2?[e[0],e[1]]:["0","00"]},roundNumber(t,e,r){return t.toString().length>=e?Number(t).toFixed(r):t},formatNumberToLocalString(t,e=2){return t===void 0?"0.00":typeof t=="number"?t.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):parseFloat(t).toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e})}};function Q3(t,e){const{kind:r,elements:i}=e;return{kind:r,elements:i,finisher(s){customElements.get(t)||customElements.define(t,s)}}}function eb(t,e){return customElements.get(t)||customElements.define(t,e),e}function Z(t){return function(e){return typeof e=="function"?eb(t,e):Q3(t,e)}}function tb(t){if(t.length>=255)throw new TypeError("Alphabet too long");const e=new Uint8Array(256);for(let l=0;l<e.length;l++)e[l]=255;for(let l=0;l<t.length;l++){const d=t.charAt(l),u=d.charCodeAt(0);if(e[u]!==255)throw new TypeError(d+" is ambiguous");e[u]=l}const r=t.length,i=t.charAt(0),s=Math.log(r)/Math.log(256),n=Math.log(256)/Math.log(r);function o(l){if(l instanceof Uint8Array||(ArrayBuffer.isView(l)?l=new Uint8Array(l.buffer,l.byteOffset,l.byteLength):Array.isArray(l)&&(l=Uint8Array.from(l))),!(l instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(l.length===0)return"";let d=0,u=0,h=0;const p=l.length;for(;h!==p&&l[h]===0;)h++,d++;const w=(p-h)*n+1>>>0,f=new Uint8Array(w);for(;h!==p;){let x=l[h],E=0;for(let A=w-1;(x!==0||E<u)&&A!==-1;A--,E++)x+=256*f[A]>>>0,f[A]=x%r>>>0,x=x/r>>>0;if(x!==0)throw new Error("Non-zero carry");u=E,h++}let m=w-u;for(;m!==w&&f[m]===0;)m++;let v=i.repeat(d);for(;m<w;++m)v+=t.charAt(f[m]);return v}function a(l){if(typeof l!="string")throw new TypeError("Expected String");if(l.length===0)return new Uint8Array;let d=0,u=0,h=0;for(;l[d]===i;)u++,d++;const p=(l.length-d)*s+1>>>0,w=new Uint8Array(p);for(;d<l.length;){const x=l.charCodeAt(d);if(x>255)return;let E=e[x];if(E===255)return;let A=0;for(let k=p-1;(E!==0||A<h)&&k!==-1;k--,A++)E+=r*w[k]>>>0,w[k]=E%256>>>0,E=E/256>>>0;if(E!==0)throw new Error("Non-zero carry");h=A,d++}let f=p-h;for(;f!==p&&w[f]===0;)f++;const m=new Uint8Array(u+(p-f));let v=u;for(;f!==p;)m[v++]=w[f++];return m}function c(l){const d=a(l);if(d)return d;throw new Error("Non-base"+r+" character")}return{encode:o,decodeUnsafe:a,decode:c}}var rb="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",ib=tb(rb);const Po={ERROR_CODE_UNRECOGNIZED_CHAIN_ID:4902,ERROR_CODE_DEFAULT:5e3,ERROR_INVALID_CHAIN_ID:32603},O0={gasPriceOracle:{address:"0x420000000000000000000000000000000000000F"},l1Block:{address:"0x4200000000000000000000000000000000000015"},l2CrossDomainMessenger:{address:"0x4200000000000000000000000000000000000007"},l2Erc721Bridge:{address:"0x4200000000000000000000000000000000000014"},l2StandardBridge:{address:"0x4200000000000000000000000000000000000010"},l2ToL1MessagePasser:{address:"0x4200000000000000000000000000000000000016"}},sb={block:Vp({format(t){var e;return{transactions:(e=t.transactions)==null?void 0:e.map(r=>{if(typeof r=="string")return r;const i=Va(r);return i.typeHex==="0x7e"&&(i.isSystemTx=r.isSystemTx,i.mint=r.mint?mr(r.mint):void 0,i.sourceHash=r.sourceHash,i.type="deposit"),i}),stateRoot:t.stateRoot}}}),transaction:Fp({format(t){const e={};return t.type==="0x7e"&&(e.isSystemTx=t.isSystemTx,e.mint=t.mint?mr(t.mint):void 0,e.sourceHash=t.sourceHash,e.type="deposit"),e}}),transactionReceipt:L2({format(t){return{l1GasPrice:t.l1GasPrice?mr(t.l1GasPrice):null,l1GasUsed:t.l1GasUsed?mr(t.l1GasUsed):null,l1Fee:t.l1Fee?mr(t.l1Fee):null,l1FeeScalar:t.l1FeeScalar?Number(t.l1FeeScalar):null}}})};function $0(t,e){return ab(t)?ob(t):N2(t,e)}const nb={transaction:$0};function ob(t){cb(t);const{sourceHash:e,data:r,from:i,gas:s,isSystemTx:n,mint:o,to:a,value:c}=t,l=[e,i,a??"0x",o?ae(o):"0x",c?ae(c):"0x",s?ae(s):"0x",n?"0x1":"0x",r??"0x"];return Ps(["0x7e",Oi(l)])}function ab(t){return t.type==="deposit"||typeof t.sourceHash<"u"}function cb(t){const{from:e,to:r}=t;if(e&&!Cr(e))throw new qr({address:e});if(r&&!Cr(r))throw new qr({address:r})}const B={contracts:O0,formatters:sb,serializers:nb},Lc=1;({...B,contracts:{...B.contracts,l2OutputOracle:Lc+"",portal:Lc+"",l1StandardBridge:Lc+""}});const Mc=11155111;({...B,contracts:{...B.contracts,l2OutputOracle:Mc+"",portal:Mc+"",l1StandardBridge:Mc+""}});const To=1;({...B,contracts:{...B.contracts,disputeGameFactory:To+"",l2OutputOracle:To+"",portal:To+"",l1StandardBridge:To+""}});const Bc=5;({...B,contracts:{...B.contracts,l2OutputOracle:Bc+"",portal:Bc+"",l1StandardBridge:Bc+""}});const Oo=11155111;({...B,contracts:{...B.contracts,disputeGameFactory:Oo+"",l2OutputOracle:Oo+"",portal:Oo+"",l1StandardBridge:Oo+""}},Ft({id:53456,name:"BirdLayer",nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},rpcUrls:{default:{http:["https://rpc.birdlayer.xyz","https://rpc1.birdlayer.xyz"],webSocket:["wss://rpc.birdlayer.xyz/ws"]}},blockExplorers:{default:{name:"BirdLayer Explorer",url:"https://scan.birdlayer.xyz"}}}));({...B,contracts:{...B.contracts}});const Uc=1;Ft({...B,id:60808,name:"BOB",nativeCurrency:{decimals:18,name:"ETH",symbol:"ETH"},rpcUrls:{default:{http:["https://rpc.gobob.xyz"],webSocket:["wss://rpc.gobob.xyz"]}},blockExplorers:{default:{name:"BOB Explorer",url:"https://explorer.gobob.xyz"}},contracts:{...B.contracts,multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:23131},l2OutputOracle:{[Uc]:{address:"0xdDa53E23f8a32640b04D7256e651C1db98dB11C1",blockCreated:4462615}},portal:{[Uc]:{address:"0x8AdeE124447435fE03e3CD24dF3f4cAE32E65a3E",blockCreated:4462615}}},sourceId:Uc});const Dc=11155111;Ft({...B,id:808813,name:"BOB Sepolia",nativeCurrency:{decimals:18,name:"ETH",symbol:"ETH"},rpcUrls:{default:{http:["https://bob-sepolia.rpc.gobob.xyz"],webSocket:["wss://bob-sepolia.rpc.gobob.xyz"]}},blockExplorers:{default:{name:"BOB Sepolia Explorer",url:"https://bob-sepolia.explorer.gobob.xyz"}},contracts:{...B.contracts,multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:35677},l2OutputOracle:{[Dc]:{address:"0x14D0069452b4AE2b250B395b8adAb771E4267d2f",blockCreated:4462615}},portal:{[Dc]:{address:"0x867B1Aa872b9C8cB5E9F7755feDC45BB24Ad0ae4",blockCreated:4462615}}},testnet:!0,sourceId:Dc});const lb={estimateFeesPerGas:async t=>{var i;if(!((i=t.request)!=null&&i.feeCurrency))return null;const[e,r]=await Promise.all([db(t.client,t.request.feeCurrency),ub(t.client,t.request.feeCurrency)]);return{maxFeePerGas:t.multiply(e-r)+r,maxPriorityFeePerGas:r}}};async function db(t,e){const r=await t.request({method:"eth_gasPrice",params:[e]});return BigInt(r)}async function ub(t,e){const r=await t.request({method:"eth_maxPriorityFeePerGas",params:[e]});return BigInt(r)}function R0(t){return t===0||t===0n||t===void 0||t===null||t==="0"||t===""||typeof t=="string"&&(ms(t).toLowerCase()==="0x"||ms(t).toLowerCase()==="0x00")}function fn(t){return!R0(t)}function hb(t){return typeof t.maxFeePerGas<"u"&&typeof t.maxPriorityFeePerGas<"u"}function L0(t){return t.type==="cip64"?!0:hb(t)&&fn(t.feeCurrency)}const pb={block:Vp({format(t){var e;return{transactions:(e=t.transactions)==null?void 0:e.map(r=>typeof r=="string"?r:{...Va(r),...r.gatewayFee?{gatewayFee:mr(r.gatewayFee),gatewayFeeRecipient:r.gatewayFeeRecipient}:{},feeCurrency:r.feeCurrency}),...t.randomness?{randomness:t.randomness}:{}}}}),transaction:Fp({format(t){if(t.type==="0x7e")return{isSystemTx:t.isSystemTx,mint:t.mint?mr(t.mint):void 0,sourceHash:t.sourceHash,type:"deposit"};const e={feeCurrency:t.feeCurrency};return t.type==="0x7b"?e.type="cip64":(t.type==="0x7c"&&(e.type="cip42"),e.gatewayFee=t.gatewayFee?mr(t.gatewayFee):null,e.gatewayFeeRecipient=t.gatewayFeeRecipient),e}}),transactionRequest:qm({format(t){const e={};return t.feeCurrency&&(e.feeCurrency=t.feeCurrency),L0(t)&&(e.type="0x7b"),e}})};function fb(t,e){return L0(t)?wb(t,e):$0(t,e)}const gb={transaction:fb};function wb(t,e){vb(t);const{chainId:r,gas:i,nonce:s,to:n,value:o,maxFeePerGas:a,maxPriorityFeePerGas:c,accessList:l,feeCurrency:d,data:u}=t,h=[ae(r),s?ae(s):"0x",c?ae(c):"0x",a?ae(a):"0x",i?ae(i):"0x",n??"0x",o?ae(o):"0x",u??"0x",io(l),d,...Ts(t,e)];return Ps(["0x7b",Oi(h)])}const mb=Fa;function vb(t){const{chainId:e,maxPriorityFeePerGas:r,gasPrice:i,maxFeePerGas:s,to:n,feeCurrency:o}=t;if(e<=0)throw new ro({chainId:e});if(n&&!Cr(n))throw new qr({address:n});if(i)throw new we("`gasPrice` is not a valid CIP-64 Transaction attribute.");if(fn(s)&&s>mb)throw new to({maxFeePerGas:s});if(fn(r)&&fn(s)&&r>s)throw new gd({maxFeePerGas:s,maxPriorityFeePerGas:r});if(fn(o)&&!Cr(o))throw new we("`feeCurrency` MUST be a token address for CIP-64 transactions.");if(R0(o))throw new we("`feeCurrency` must be provided for CIP-64 transactions.")}const fh={contracts:O0,formatters:pb,serializers:gb,fees:lb},$o=17e3;({...fh,contracts:{...fh.contracts,portal:$o+"",disputeGameFactory:$o+"",l2OutputOracle:$o+"",l1StandardBridge:$o+""}},Ft({id:44,name:"Crab Network",nativeCurrency:{decimals:18,name:"Crab Network Native Token",symbol:"CRAB"},rpcUrls:{default:{http:["https://crab-rpc.darwinia.network"],webSocket:["wss://crab-rpc.darwinia.network"]}},blockExplorers:{default:{name:"Blockscout",url:"https://crab-scan.darwinia.network"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:3032593}}})),Ft({id:66665,name:"Creator",nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},rpcUrls:{default:{http:["https://rpc.creatorchain.io"]}},blockExplorers:{default:{name:"Explorer",url:"https://explorer.creatorchain.io"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11"}},testnet:!0}),{...B,contracts:{...B.contracts}},{...B,contracts:{...B.contracts}},Ft({id:53457,name:"DODOchain Testnet",nativeCurrency:{decimals:18,name:"DODO",symbol:"DODO"},rpcUrls:{default:{http:["https://dodochain-testnet.alt.technology"],webSocket:["wss://dodochain-testnet.alt.technology/ws"]}},blockExplorers:{default:{name:"DODOchain Testnet (Sepolia) Explorer",url:"https://testnet-scan.dodochain.com"}},testnet:!0});const zs=1;({...B.contracts,addressManager:zs+"",l1CrossDomainMessenger:zs+"",l2OutputOracle:zs+"",portal:zs+"",l1StandardBridge:zs+""});const Hs=11155111;({...B.contracts,addressManager:Hs+"",l1CrossDomainMessenger:Hs+"",l2OutputOracle:Hs+"",portal:Hs+"",l1StandardBridge:Hs+""});const jc=1;({...B,contracts:{...B.contracts,l2OutputOracle:jc+"",portal:jc+"",l1StandardBridge:jc+""}});const zc=17e3;({...B,contracts:{...B.contracts,l2OutputOracle:zc+"",portal:zc+"",l1StandardBridge:zc+""}});({...B,contracts:{...B.contracts}});const bb=11155111;Ft({...B,id:3397901,network:"funkiSepolia",name:"Funki Sepolia Sandbox",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://funki-testnet.alt.technology"]}},blockExplorers:{default:{name:"Funki Sepolia Sandbox Explorer",url:"https://sepolia-sandbox.funkichain.com/"}},testnet:!0,contracts:{...B.contracts,multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:1620204}},sourceId:bb});const Ro=17e3;Ft({...B,name:"Garnet Testnet",testnet:!0,id:17069,sourceId:Ro,nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc.garnetchain.com"],webSocket:["wss://rpc.garnetchain.com"]}},blockExplorers:{default:{name:"Blockscout",url:"https://explorer.garnetchain.com"}},contracts:{...B.contracts,multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11"},portal:{[Ro]:{address:"0x57ee40586fbE286AfC75E67cb69511A6D9aF5909",blockCreated:1274684}},l2OutputOracle:{[Ro]:{address:"0xCb8E7AC561b8EF04F2a15865e9fbc0766FEF569B",blockCreated:1274684}},l1StandardBridge:{[Ro]:{address:"0x09bcDd311FE398F80a78BE37E489f5D440DB95DE",blockCreated:1274684}}}});const Hc=1;({...B,contracts:{...B.contracts,disputeGameFactory:Hc+"",portal:Hc+"",l1StandardBridge:Hc+""}});const qc=11155111;({...B,contracts:{...B.contracts,disputeGameFactory:qc+"",portal:qc+"",l1StandardBridge:qc+""}},Ft({id:701,name:"Koi Network",nativeCurrency:{decimals:18,name:"Koi Network Native Token",symbol:"KRING"},rpcUrls:{default:{http:["https://koi-rpc.darwinia.network"],webSocket:["wss://koi-rpc.darwinia.network"]}},blockExplorers:{default:{name:"Blockscout",url:"https://koi-scan.darwinia.network"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:180001}},testnet:!0}));const Wc=1;({...B,contracts:{...B.contracts,l2OutputOracle:Wc+"",portal:Wc+"",l1StandardBridge:Wc+""}});const Fc=11155111;({...B,contracts:{...B.contracts,l2OutputOracle:Fc+"",portal:Fc+"",l1StandardBridge:Fc+""}});const Vc=1;({...B,contracts:{...B.contracts,l2OutputOracle:Vc+"",portal:Vc+"",l1StandardBridge:Vc+""}});const Gc=1;({...B,contracts:{...B.contracts,l2OutputOracle:Gc+"",portal:Gc+"",l1StandardBridge:Gc+""}});const Zc=11155111;({...B,contracts:{...B.contracts,l2OutputOracle:Zc+"",portal:Zc+"",l1StandardBridge:Zc+""}});const Kc=56;({...B.contracts,l2OutputOracle:Kc+"",portal:Kc+"",l1StandardBridge:Kc+""});const Yc=97;({...B.contracts,l2OutputOracle:Yc+"",portal:Yc+"",l1StandardBridge:Yc+""});const Lo=1;({...B,contracts:{...B.contracts,disputeGameFactory:Lo+"",l2OutputOracle:Lo+"",portal:Lo+"",l1StandardBridge:Lo+""}});const Jc=5;({...B,contracts:{...B.contracts,l2OutputOracle:Jc+"",portal:Jc+"",l1StandardBridge:Jc+""}});const Mo=11155111;({...B,contracts:{...B.contracts,disputeGameFactory:Mo+"",l2OutputOracle:Mo+"",portal:Mo+"",l1StandardBridge:Mo+""}});const gh=11155111;Ft({...B,name:"Pyrope Testnet",testnet:!0,id:695569,sourceId:gh,nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc.pyropechain.com"],webSocket:["wss://rpc.pyropechain.com"]}},blockExplorers:{default:{name:"Blockscout",url:"https://pyrope.blockscout.com"}},contracts:{...B.contracts,l1StandardBridge:{[gh]:{address:"0xC24932c31D9621aE9e792576152B7ef010cFC2F8"}}}});const Bo=1;Ft({...B,name:"Redstone",id:690,sourceId:Bo,nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},rpcUrls:{default:{http:["https://rpc.redstonechain.com"],webSocket:["wss://rpc.redstonechain.com"]}},blockExplorers:{default:{name:"Blockscout",url:"https://explorer.redstone.xyz"}},contracts:{...B.contracts,multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11"},portal:{[Bo]:{address:"0xC7bCb0e8839a28A1cFadd1CF716de9016CdA51ae",blockCreated:19578329}},l2OutputOracle:{[Bo]:{address:"0xa426A052f657AEEefc298b3B5c35a470e4739d69",blockCreated:19578337}},l1StandardBridge:{[Bo]:{address:"0xc473ca7E02af24c129c2eEf51F2aDf0411c1Df69",blockCreated:19578331}}}});const Xc=1;({...B,contracts:{...B.contracts,l2OutputOracle:Xc+"",portal:Xc+"",l1StandardBridge:Xc+""}});const Qc=11155111;({...B,contracts:{...B.contracts,l2OutputOracle:Qc+"",portal:Qc+"",l1StandardBridge:Qc+""}});const el=1;({...B,contracts:{...B.contracts,l2OutputOracle:el+"",portal:el+"",l1StandardBridge:el+""}});({...B,contracts:{...B.contracts}});const Uo=1;({...B,contracts:{...B.contracts,disputeGameFactory:Uo+"",l2OutputOracle:Uo+"",portal:Uo+"",l1StandardBridge:Uo+""}});const Do=11155111;({...B,contracts:{...B.contracts,disputeGameFactory:Do+"",l2OutputOracle:Do+"",portal:Do+"",l1StandardBridge:Do+""}});const jo=1;({...B,contracts:{...B.contracts,disputeGameFactory:jo+"",l2OutputOracle:jo+"",portal:jo+"",l1StandardBridge:jo+""}});const zo=11155111;({...B,contracts:{...B.contracts,disputeGameFactory:zo+"",l2OutputOracle:zo+"",portal:zo+"",l1StandardBridge:zo+""}});const Ho=1;({...B,contracts:{...B.contracts,disputeGameFactory:Ho+"",l2OutputOracle:Ho+"",portal:Ho+"",l1StandardBridge:Ho+""}});const wh=11155111;({...B,contracts:{...B.contracts,portal:wh+"",l1StandardBridge:wh+""}},{...B,contracts:{...B.contracts}}),{...B,contracts:{...B.contracts}};const tl=1;({...B,contracts:{...B.contracts,disputeGameFactory:tl+"",portal:tl+"",l1StandardBridge:tl+""}});const rl=11155111;({...B,contracts:{...B.contracts,portal:rl+"",l1StandardBridge:rl+"",disputeGameFactory:rl+""}});const qo=1;({...B,contracts:{...B.contracts,disputeGameFactory:qo+"",l2OutputOracle:qo+"",portal:qo+"",l1StandardBridge:qo+""}});const Wo=11155111;({...B,contracts:{...B.contracts,disputeGameFactory:Wo+"",l2OutputOracle:Wo+"",portal:Wo+"",l1StandardBridge:Wo+""}});const il=1;({...B,contracts:{...B.contracts,l2OutputOracle:il+"",portal:il+"",l1StandardBridge:il+""}});const sl=11155111;({...B,contracts:{...B.contracts,l2OutputOracle:sl+"",portal:sl+"",l1StandardBridge:sl+""}});const yb=5;({...B,contracts:{...B.contracts,portal:yb+""}});function gs(t){return{formatters:void 0,fees:void 0,serializers:void 0,...t}}const mh=gs({id:"5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",name:"Solana",network:"solana-mainnet",nativeCurrency:{name:"Solana",symbol:"SOL",decimals:9},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},blockExplorers:{default:{name:"Solscan",url:"https://solscan.io"}},testnet:!1,chainNamespace:"solana",caipNetworkId:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",deprecatedCaipNetworkId:"solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ"}),vh=gs({id:"EtWTRABZaYq6iMfeYKouRu166VU2xqa1",name:"Solana Devnet",network:"solana-devnet",nativeCurrency:{name:"Solana",symbol:"SOL",decimals:9},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},blockExplorers:{default:{name:"Solscan",url:"https://solscan.io"}},testnet:!0,chainNamespace:"solana",caipNetworkId:"solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",deprecatedCaipNetworkId:"solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K"});gs({id:"4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",name:"Solana Testnet",network:"solana-testnet",nativeCurrency:{name:"Solana",symbol:"SOL",decimals:9},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},blockExplorers:{default:{name:"Solscan",url:"https://solscan.io"}},testnet:!0,chainNamespace:"solana",caipNetworkId:"solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z"}),gs({id:"000000000019d6689c085ae165831e93",caipNetworkId:"bip122:000000000019d6689c085ae165831e93",chainNamespace:"bip122",name:"Bitcoin",nativeCurrency:{name:"Bitcoin",symbol:"BTC",decimals:8},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}}}),gs({id:"000000000933ea01ad0ee984209779ba",caipNetworkId:"bip122:000000000933ea01ad0ee984209779ba",chainNamespace:"bip122",name:"Bitcoin Testnet",nativeCurrency:{name:"Bitcoin",symbol:"BTC",decimals:8},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},testnet:!0});const Cb={solana:["solana_signMessage","solana_signTransaction","solana_requestAccounts","solana_getAccounts","solana_signAllTransactions","solana_signAndSendTransaction"],eip155:["eth_accounts","eth_requestAccounts","eth_sendRawTransaction","eth_sign","eth_signTransaction","eth_signTypedData","eth_signTypedData_v3","eth_signTypedData_v4","eth_sendTransaction","personal_sign","wallet_switchEthereumChain","wallet_addEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode","wallet_getCallsStatus","wallet_showCallsStatus","wallet_sendCalls","wallet_getCapabilities","wallet_grantPermissions","wallet_revokePermissions","wallet_getAssets"],bip122:["sendTransfer","signMessage","signPsbt","getAccountAddresses"]},M0={getMethodsByChainNamespace(t){return Cb[t]||[]},createDefaultNamespace(t){return{methods:this.getMethodsByChainNamespace(t),events:["accountsChanged","chainChanged"],chains:[],rpcMap:{}}},applyNamespaceOverrides(t,e){if(!e)return{...t};const r={...t},i=new Set;if(e.methods&&Object.keys(e.methods).forEach(s=>i.add(s)),e.chains&&Object.keys(e.chains).forEach(s=>i.add(s)),e.events&&Object.keys(e.events).forEach(s=>i.add(s)),e.rpcMap&&Object.keys(e.rpcMap).forEach(s=>{const[n]=s.split(":");n&&i.add(n)}),i.forEach(s=>{r[s]||(r[s]=this.createDefaultNamespace(s))}),e.methods&&Object.entries(e.methods).forEach(([s,n])=>{r[s]&&(r[s].methods=n)}),e.chains&&Object.entries(e.chains).forEach(([s,n])=>{r[s]&&(r[s].chains=n)}),e.events&&Object.entries(e.events).forEach(([s,n])=>{r[s]&&(r[s].events=n)}),e.rpcMap){const s=new Set;Object.entries(e.rpcMap).forEach(([n,o])=>{const[a,c]=n.split(":");!a||!c||!r[a]||(r[a].rpcMap||(r[a].rpcMap={}),s.has(a)||(r[a].rpcMap={},s.add(a)),r[a].rpcMap[c]=o)})}return r},createNamespaces(t,e){const r=t.reduce((i,s)=>{const{id:n,chainNamespace:o,rpcUrls:a}=s,c=a.default.http[0];i[o]||(i[o]=this.createDefaultNamespace(o));const l=`${o}:${n}`,d=i[o];switch(d.chains.push(l),l){case mh.caipNetworkId:d.chains.push(mh.deprecatedCaipNetworkId);break;case vh.caipNetworkId:d.chains.push(vh.deprecatedCaipNetworkId);break}return d!=null&&d.rpcMap&&c&&(d.rpcMap[n]=c),i},{});return this.applyNamespaceOverrides(r,e)},resolveReownName:async t=>{var r;const e=await C0.resolveName(t);return((r=(Object.values(e==null?void 0:e.addresses)||[])[0])==null?void 0:r.address)||!1},getChainsFromNamespaces(t={}){return Object.values(t).flatMap(e=>{const r=e.chains||[],i=e.accounts.map(s=>{const[n,o]=s.split(":");return`${n}:${o}`});return Array.from(new Set([...r,...i]))})},isSessionEventData(t){return typeof t=="object"&&t!==null&&"id"in t&&"topic"in t&&"params"in t&&typeof t.params=="object"&&t.params!==null&&"chainId"in t.params&&"event"in t.params&&typeof t.params.event=="object"&&t.params.event!==null}};class B0{constructor({provider:e,namespace:r}){this.id=J.CONNECTOR_ID.WALLET_CONNECT,this.name=_a.ConnectorNamesMap[J.CONNECTOR_ID.WALLET_CONNECT],this.type="WALLET_CONNECT",this.imageId=_a.ConnectorImageIds[J.CONNECTOR_ID.WALLET_CONNECT],this.getCaipNetworks=b.getCaipNetworks.bind(b),this.caipNetworks=this.getCaipNetworks(),this.provider=e,this.chain=r}get chains(){return this.getCaipNetworks()}async connectWalletConnect(){if(!await this.authenticate()){const e=this.getCaipNetworks(),r=L.state.universalProviderConfigOverride,i=M0.createNamespaces(e,r);await this.provider.connect({optionalNamespaces:i})}return{clientId:await this.provider.client.core.crypto.getClientId(),session:this.provider.session}}async disconnect(){await this.provider.disconnect()}async authenticate(){const e=this.chains.map(r=>r.caipNetworkId);return Dr.universalProviderAuthenticate({universalProvider:this.provider,chains:e,methods:xb})}}const xb=["eth_accounts","eth_requestAccounts","eth_sendRawTransaction","eth_sign","eth_signTransaction","eth_signTypedData","eth_signTypedData_v3","eth_signTypedData_v4","eth_sendTransaction","personal_sign","wallet_switchEthereumChain","wallet_addEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode","wallet_getCallsStatus","wallet_sendCalls","wallet_getCapabilities","wallet_grantPermissions","wallet_revokePermissions","wallet_getAssets"];class Eb{constructor(e){this.availableConnectors=[],this.eventListeners=new Map,this.getCaipNetworks=r=>b.getCaipNetworks(r),e&&this.construct(e)}construct(e){this.projectId=e.projectId,this.namespace=e.namespace,this.adapterType=e.adapterType}get connectors(){return this.availableConnectors}get networks(){return this.getCaipNetworks(this.namespace)}setAuthProvider(e){this.addConnector({id:J.CONNECTOR_ID.AUTH,type:"AUTH",name:J.CONNECTOR_NAMES.AUTH,provider:e,imageId:_a.ConnectorImageIds[J.CONNECTOR_ID.AUTH],chain:this.namespace,chains:[]})}addConnector(...e){const r=new Set;this.availableConnectors=[...e,...this.availableConnectors].filter(i=>r.has(i.id)?!1:(r.add(i.id),!0)),this.emit("connectors",this.availableConnectors)}setStatus(e,r){ee.setStatus(e,r)}on(e,r){var i;this.eventListeners.has(e)||this.eventListeners.set(e,new Set),(i=this.eventListeners.get(e))==null||i.add(r)}off(e,r){const i=this.eventListeners.get(e);i&&i.delete(r)}removeAllEventListeners(){this.eventListeners.forEach(e=>{e.clear()})}emit(e,r){const i=this.eventListeners.get(e);i&&i.forEach(s=>s(r))}async connectWalletConnect(e){return{clientId:(await this.getWalletConnectConnector().connectWalletConnect()).clientId}}async switchNetwork(e){var n;const{caipNetwork:r,providerType:i}=e;if(!e.provider)return;const s="provider"in e.provider?e.provider.provider:e.provider;if(i==="WALLET_CONNECT"){s.setDefaultChain(r.caipNetworkId);return}if(s&&i==="AUTH"){const o=s,a=(n=ee.state.preferredAccountTypes)==null?void 0:n[r.chainNamespace];await o.switchNetwork(r.caipNetworkId);const c=await o.getUser({chainId:r.caipNetworkId,preferredAccountType:a});this.emit("switchNetwork",c)}}getWalletConnectConnector(){const e=this.connectors.find(r=>r instanceof B0);if(!e)throw new Error("WalletConnectConnector not found");return e}}class Ib extends Eb{setUniversalProvider(e){this.addConnector(new B0({provider:e,caipNetworks:this.getCaipNetworks(),namespace:this.namespace}))}async connect(e){return Promise.resolve({id:"WALLET_CONNECT",type:"WALLET_CONNECT",chainId:Number(e.chainId),provider:this.provider,address:""})}async disconnect(){try{await this.getWalletConnectConnector().disconnect()}catch(e){console.warn("UniversalAdapter:disconnect - error",e)}}async getAccounts({namespace:e}){var i,s,n,o,a;const r=((a=(o=(n=(s=(i=this.provider)==null?void 0:i.session)==null?void 0:s.namespaces)==null?void 0:n[e])==null?void 0:o.accounts)==null?void 0:a.map(c=>{const[,,l]=c.split(":");return l}).filter((c,l,d)=>d.indexOf(c)===l))||[];return Promise.resolve({accounts:r.map(c=>z.createAccount(e,c,e==="bip122"?"payment":"eoa"))})}async syncConnectors(){return Promise.resolve()}async getBalance(e){var i,s,n,o,a;if(!(e.caipNetwork&&He.BALANCE_SUPPORTED_CHAINS.includes((i=e.caipNetwork)==null?void 0:i.chainNamespace))||(s=e.caipNetwork)!=null&&s.testnet)return{balance:"0.00",symbol:((n=e.caipNetwork)==null?void 0:n.nativeCurrency.symbol)||""};if(ee.state.balanceLoading&&e.chainId===((o=b.state.activeCaipNetwork)==null?void 0:o.id))return{balance:ee.state.balance||"0.00",symbol:ee.state.balanceSymbol||""};const r=(await ee.fetchTokenBalance()).find(c=>{var l,d;return c.chainId===`${(l=e.caipNetwork)==null?void 0:l.chainNamespace}:${e.chainId}`&&c.symbol===((d=e.caipNetwork)==null?void 0:d.nativeCurrency.symbol)});return{balance:(r==null?void 0:r.quantity.numeric)||"0.00",symbol:(r==null?void 0:r.symbol)||((a=e.caipNetwork)==null?void 0:a.nativeCurrency.symbol)||""}}async signMessage(e){var o,a,c;const{provider:r,message:i,address:s}=e;if(!r)throw new Error("UniversalAdapter:signMessage - provider is undefined");let n="";return((o=b.state.activeCaipNetwork)==null?void 0:o.chainNamespace)===J.CHAIN.SOLANA?n=(await r.request({method:"solana_signMessage",params:{message:ib.encode(new TextEncoder().encode(i)),pubkey:s}},(a=b.state.activeCaipNetwork)==null?void 0:a.caipNetworkId)).signature:n=await r.request({method:"personal_sign",params:[i,s]},(c=b.state.activeCaipNetwork)==null?void 0:c.caipNetworkId),{signature:n}}async estimateGas(){return Promise.resolve({gas:BigInt(0)})}async getProfile(){return Promise.resolve({profileImage:"",profileName:""})}async sendTransaction(){return Promise.resolve({hash:""})}walletGetAssets(e){return Promise.resolve({})}async writeContract(){return Promise.resolve({hash:""})}async getEnsAddress(){return Promise.resolve({address:!1})}parseUnits(){return 0n}formatUnits(){return"0"}async getCapabilities(){return Promise.resolve({})}async grantPermissions(){return Promise.resolve({})}async revokePermissions(){return Promise.resolve("0x")}async syncConnection(){return Promise.resolve({id:"WALLET_CONNECT",type:"WALLET_CONNECT",chainId:1,provider:this.provider,address:""})}async switchNetwork(e){var s,n,o,a,c,l;const{caipNetwork:r}=e,i=this.getWalletConnectConnector();if(r.chainNamespace===J.CHAIN.EVM)try{await((s=i.provider)==null?void 0:s.request({method:"wallet_switchEthereumChain",params:[{chainId:ae(r.id)}]}))}catch(d){if(d.code===Po.ERROR_CODE_UNRECOGNIZED_CHAIN_ID||d.code===Po.ERROR_INVALID_CHAIN_ID||d.code===Po.ERROR_CODE_DEFAULT||((o=(n=d==null?void 0:d.data)==null?void 0:n.originalError)==null?void 0:o.code)===Po.ERROR_CODE_UNRECOGNIZED_CHAIN_ID)try{await((l=i.provider)==null?void 0:l.request({method:"wallet_addEthereumChain",params:[{chainId:ae(r.id),rpcUrls:[(a=r==null?void 0:r.rpcUrls.chainDefault)==null?void 0:a.http],chainName:r.name,nativeCurrency:r.nativeCurrency,blockExplorerUrls:[(c=r.blockExplorers)==null?void 0:c.default.url]}]}))}catch{throw new Error("Chain is not supported")}}i.provider.setDefaultChain(r.caipNetworkId)}getWalletConnectProvider(){var e;return(e=this.connectors.find(r=>r.type==="WALLET_CONNECT"))==null?void 0:e.provider}}class Ab{constructor(e){this.chainNamespaces=[],this.reportedAlertErrors={},this.getCaipNetwork=(r,i)=>{var s,n,o,a;if(r){const c=(n=(s=b.getNetworkData(r))==null?void 0:s.requestedCaipNetworks)==null?void 0:n.find(d=>d.id===i);return c||((o=b.getNetworkData(r))==null?void 0:o.caipNetwork)||((a=b.getRequestedCaipNetworks(r).filter(d=>d.chainNamespace===r))==null?void 0:a[0])}return b.state.activeCaipNetwork||this.defaultCaipNetwork},this.getCaipNetworkId=()=>{const r=this.getCaipNetwork();if(r)return r.id},this.getCaipNetworks=r=>b.getCaipNetworks(r),this.getActiveChainNamespace=()=>b.state.activeChain,this.setRequestedCaipNetworks=(r,i)=>{b.setRequestedCaipNetworks(r,i)},this.getApprovedCaipNetworkIds=()=>b.getAllApprovedCaipNetworkIds(),this.getCaipAddress=r=>b.state.activeChain===r||!r?b.state.activeCaipAddress:b.getAccountProp("caipAddress",r),this.setClientId=r=>{oe.setClientId(r)},this.getProvider=r=>$e.getProvider(r),this.getProviderType=r=>$e.getProviderId(r),this.getPreferredAccountType=r=>{var i;return(i=ee.state.preferredAccountTypes)==null?void 0:i[r]},this.setCaipAddress=(r,i)=>{ee.setCaipAddress(r,i)},this.setBalance=(r,i,s)=>{ee.setBalance(r,i,s)},this.setProfileName=(r,i)=>{ee.setProfileName(r,i)},this.setProfileImage=(r,i)=>{ee.setProfileImage(r,i)},this.setUser=(r,i)=>{ee.setUser(r,i),L.state.enableEmbedded&&ve.close()},this.resetAccount=r=>{ee.resetAccount(r)},this.setCaipNetwork=r=>{b.setActiveCaipNetwork(r)},this.setCaipNetworkOfNamespace=(r,i)=>{b.setChainNetworkData(i,{caipNetwork:r})},this.setAllAccounts=(r,i)=>{ee.setAllAccounts(r,i),L.setHasMultipleAddresses((r==null?void 0:r.length)>1)},this.setStatus=(r,i)=>{ee.setStatus(r,i),V.isConnected()?Y.setConnectionStatus("connected"):Y.setConnectionStatus("disconnected")},this.getAddressByChainNamespace=r=>b.getAccountProp("address",r),this.setConnectors=r=>{const i=[...V.state.allConnectors,...r];V.setConnectors(i)},this.fetchIdentity=r=>oe.fetchIdentity(r),this.getReownName=r=>C0.getNamesForAddress(r),this.getConnectors=()=>V.getConnectors(),this.getConnectorImage=r=>qe.getConnectorImage(r),this.setConnectedWalletInfo=(r,i)=>{const s=$e.getProviderId(i),n=r?{...r,type:s}:void 0;ee.setConnectedWalletInfo(n,i)},this.getIsConnectedState=()=>!!b.state.activeCaipAddress,this.addAddressLabel=(r,i,s)=>{ee.addAddressLabel(r,i,s)},this.removeAddressLabel=(r,i)=>{ee.removeAddressLabel(r,i)},this.getAddress=r=>b.state.activeChain===r||!r?ee.state.address:b.getAccountProp("address",r),this.setApprovedCaipNetworksData=r=>b.setApprovedCaipNetworksData(r),this.resetNetwork=r=>{b.resetNetwork(r)},this.addConnector=r=>{V.addConnector(r)},this.resetWcConnection=()=>{X.resetWcConnection()},this.setAddressExplorerUrl=(r,i)=>{ee.setAddressExplorerUrl(r,i)},this.setSmartAccountDeployed=(r,i)=>{ee.setSmartAccountDeployed(r,i)},this.setSmartAccountEnabledNetworks=(r,i)=>{b.setSmartAccountEnabledNetworks(r,i)},this.setPreferredAccountType=(r,i)=>{ee.setPreferredAccountType(r,i)},this.setEIP6963Enabled=r=>{L.setEIP6963Enabled(r)},this.handleUnsafeRPCRequest=()=>{if(this.isOpen()){if(this.isTransactionStackEmpty())return;this.redirect("ApproveTransaction")}else this.open({view:"ApproveTransaction"})},this.options=e,this.version=e.sdkVersion,this.caipNetworks=this.extendCaipNetworks(e),this.chainNamespaces=this.getChainNamespacesSet(e.adapters,this.caipNetworks),this.defaultCaipNetwork=this.extendDefaultCaipNetwork(e),this.chainAdapters=this.createAdapters(e.adapters),this.initialize(e)}getChainNamespacesSet(e,r){const i=e==null?void 0:e.map(n=>n.namespace).filter(n=>!!n);if(i!=null&&i.length)return[...new Set(i)];const s=r==null?void 0:r.map(n=>n.chainNamespace);return[...new Set(s)]}async initialize(e){this.initControllers(e),await this.initChainAdapters(),await this.injectModalUi(),this.sendInitializeEvent(e),br.set({initialized:!0}),await this.syncExistingConnection()}sendInitializeEvent(e){var i;const{...r}=e;delete r.adapters,delete r.universalProvider,he.sendEvent({type:"track",event:"INITIALIZE",properties:{...r,networks:e.networks.map(s=>s.id),siweConfig:{options:((i=e.siweConfig)==null?void 0:i.options)||{}}}})}initControllers(e){this.initializeOptionsController(e),this.initializeChainController(e),this.initializeThemeController(e),this.initializeConnectionController(e),this.initializeConnectorController()}initializeThemeController(e){e.themeMode&&ze.setThemeMode(e.themeMode),e.themeVariables&&ze.setThemeVariables(e.themeVariables)}initializeChainController(e){if(!this.connectionControllerClient||!this.networkControllerClient)throw new Error("ConnectionControllerClient and NetworkControllerClient must be set");b.initialize(e.adapters??[],this.caipNetworks,{connectionControllerClient:this.connectionControllerClient,networkControllerClient:this.networkControllerClient});const r=this.getDefaultNetwork();r&&b.setActiveCaipNetwork(r)}initializeConnectionController(e){X.setWcBasic(e.basic??!1)}initializeConnectorController(){V.initialize(this.chainNamespaces)}initializeOptionsController(e){var n;L.setDebug(e.debug!==!1),L.setEnableWalletConnect(e.enableWalletConnect!==!1),L.setEnableWalletGuide(e.enableWalletGuide!==!1),L.setEnableWallets(e.enableWallets!==!1),L.setEIP6963Enabled(e.enableEIP6963!==!1),L.setEnableNetworkSwitch(e.enableNetworkSwitch!==!1),L.setEnableAuthLogger(e.enableAuthLogger!==!1),L.setCustomRpcUrls(e.customRpcUrls),L.setSdkVersion(e.sdkVersion),L.setProjectId(e.projectId),L.setEnableEmbedded(e.enableEmbedded),L.setAllWallets(e.allWallets),L.setIncludeWalletIds(e.includeWalletIds),L.setExcludeWalletIds(e.excludeWalletIds),L.setFeaturedWalletIds(e.featuredWalletIds),L.setTokens(e.tokens),L.setTermsConditionsUrl(e.termsConditionsUrl),L.setPrivacyPolicyUrl(e.privacyPolicyUrl),L.setCustomWallets(e.customWallets),L.setFeatures(e.features),L.setAllowUnsupportedChain(e.allowUnsupportedChain),L.setUniversalProviderConfigOverride(e.universalProviderConfigOverride),L.setDefaultAccountTypes(e.defaultAccountTypes);const r=Y.getPreferredAccountTypes(),i={...L.state.defaultAccountTypes,...r};ee.setPreferredAccountTypes(i);const s=this.getDefaultMetaData();if(!e.metadata&&s&&(e.metadata=s),L.setMetadata(e.metadata),L.setDisableAppend(e.disableAppend),L.setEnableEmbedded(e.enableEmbedded),L.setSIWX(e.siwx),!e.projectId){Ur.open(So.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED,"error");return}if((n=e.adapters)!=null&&n.find(o=>o.namespace===J.CHAIN.EVM)&&e.siweConfig){if(e.siwx)throw new Error("Cannot set both `siweConfig` and `siwx` options");L.setSIWX(e.siweConfig.mapToSIWX())}}getDefaultMetaData(){var e,r,i,s;return typeof window<"u"&&typeof document<"u"?{name:((r=(e=document.getElementsByTagName("title"))==null?void 0:e[0])==null?void 0:r.textContent)||"",description:((i=document.querySelector('meta[property="og:description"]'))==null?void 0:i.content)||"",url:window.location.origin,icons:[((s=document.querySelector('link[rel~="icon"]'))==null?void 0:s.href)||""]}:null}setUnsupportedNetwork(e){const r=this.getActiveChainNamespace();if(r){const i=os.getUnsupportedNetwork(`${r}:${e}`);b.setActiveCaipNetwork(i)}}getDefaultNetwork(){return os.getCaipNetworkFromStorage(this.defaultCaipNetwork)}extendCaipNetwork(e,r){return os.extendCaipNetwork(e,{customNetworkImageUrls:r.chainImages,projectId:r.projectId})}extendCaipNetworks(e){return os.extendCaipNetworks(e.networks,{customNetworkImageUrls:e.chainImages,customRpcUrls:e.customRpcUrls,projectId:e.projectId})}extendDefaultCaipNetwork(e){const r=e.networks.find(i=>{var s;return i.id===((s=e.defaultNetwork)==null?void 0:s.id)});return r?os.extendCaipNetwork(r,{customNetworkImageUrls:e.chainImages,customRpcUrls:e.customRpcUrls,projectId:e.projectId}):void 0}createClients(){this.connectionControllerClient={connectWalletConnect:async()=>{var n;const e=b.state.activeChain,r=this.getAdapter(e),i=(n=this.getCaipNetwork(e))==null?void 0:n.id;if(!r)throw new Error("Adapter not found");const s=await r.connectWalletConnect(i);this.close(),this.setClientId((s==null?void 0:s.clientId)||null),Y.setConnectedNamespaces([...b.state.chains.keys()]),this.chainNamespaces.forEach(o=>{V.setConnectorId(je.CONNECTOR_TYPE_WALLET_CONNECT,o)}),await this.syncWalletConnectAccount()},connectExternal:async({id:e,info:r,type:i,provider:s,chain:n,caipNetwork:o})=>{var p,w,f,m,v,x;const a=b.state.activeChain,c=n||a,l=this.getAdapter(c);if(n&&n!==a&&!o){const E=this.getCaipNetworks().find(A=>A.chainNamespace===n);E&&this.setCaipNetwork(E)}if(!l)throw new Error("Adapter not found");const d=this.getCaipNetwork(c),u=await l.connect({id:e,info:r,type:i,provider:s,chainId:(o==null?void 0:o.id)||(d==null?void 0:d.id),rpcUrl:((f=(w=(p=o==null?void 0:o.rpcUrls)==null?void 0:p.default)==null?void 0:w.http)==null?void 0:f[0])||((x=(v=(m=d==null?void 0:d.rpcUrls)==null?void 0:m.default)==null?void 0:v.http)==null?void 0:x[0])});if(!u)return;Y.addConnectedNamespace(c),this.syncProvider({...u,chainNamespace:c});const{accounts:h}=await l.getAccounts({namespace:c,id:e});this.setAllAccounts(h,c),this.setStatus("connected",c)},reconnectExternal:async({id:e,info:r,type:i,provider:s})=>{var a;const n=b.state.activeChain,o=this.getAdapter(n);o!=null&&o.reconnect&&(await(o==null?void 0:o.reconnect({id:e,info:r,type:i,provider:s,chainId:(a=this.getCaipNetwork())==null?void 0:a.id})),Y.addConnectedNamespace(n))},disconnect:async e=>{const r=e||b.state.activeChain,i=this.getAdapter(r),s=$e.getProvider(r),n=$e.getProviderId(r);await(i==null?void 0:i.disconnect({provider:s,providerType:n})),Y.removeConnectedNamespace(r),$e.resetChain(r),this.setUser(void 0,r),this.setStatus("disconnected",r)},checkInstalled:e=>e?e.some(r=>{var i;return!!((i=window.ethereum)!=null&&i[String(r)])}):!!window.ethereum,signMessage:async e=>{var r,i;return((i=await((r=this.getAdapter(b.state.activeChain))==null?void 0:r.signMessage({message:e,address:ee.state.address,provider:$e.getProvider(b.state.activeChain)})))==null?void 0:i.signature)||""},sendTransaction:async e=>{var r;if(e.chainNamespace===J.CHAIN.EVM){const i=this.getAdapter(b.state.activeChain),s=$e.getProvider(b.state.activeChain);return((r=await(i==null?void 0:i.sendTransaction({...e,caipNetwork:this.getCaipNetwork(),provider:s})))==null?void 0:r.hash)||""}return""},estimateGas:async e=>{var r;if(e.chainNamespace===J.CHAIN.EVM){const i=this.getAdapter(b.state.activeChain),s=$e.getProvider(b.state.activeChain),n=this.getCaipNetwork();if(!n)throw new Error("CaipNetwork is undefined");return((r=await(i==null?void 0:i.estimateGas({...e,provider:s,caipNetwork:n})))==null?void 0:r.gas)||0n}return 0n},getEnsAvatar:async()=>{var e,r,i;return((i=await((r=this.getAdapter(b.state.activeChain))==null?void 0:r.getProfile({address:ee.state.address,chainId:Number((e=this.getCaipNetwork())==null?void 0:e.id)})))==null?void 0:i.profileImage)||!1},getEnsAddress:async e=>{var s;const r=this.getAdapter(b.state.activeChain),i=this.getCaipNetwork();return i&&((s=await(r==null?void 0:r.getEnsAddress({name:e,caipNetwork:i})))==null?void 0:s.address)||!1},writeContract:async e=>{var o;const r=this.getAdapter(b.state.activeChain),i=this.getCaipNetwork(),s=this.getCaipAddress(),n=$e.getProvider(b.state.activeChain);if(!i||!s)throw new Error("CaipNetwork or CaipAddress is undefined");return(o=await(r==null?void 0:r.writeContract({...e,caipNetwork:i,provider:n,caipAddress:s})))==null?void 0:o.hash},parseUnits:(e,r)=>{var i;return((i=this.getAdapter(b.state.activeChain))==null?void 0:i.parseUnits({value:e,decimals:r}))??0n},formatUnits:(e,r)=>{var i;return((i=this.getAdapter(b.state.activeChain))==null?void 0:i.formatUnits({value:e,decimals:r}))??"0"},getCapabilities:async e=>{var r;return await((r=this.getAdapter(b.state.activeChain))==null?void 0:r.getCapabilities(e))},grantPermissions:async e=>{var r;return await((r=this.getAdapter(b.state.activeChain))==null?void 0:r.grantPermissions(e))},revokePermissions:async e=>{const r=this.getAdapter(b.state.activeChain);return r!=null&&r.revokePermissions?await r.revokePermissions(e):"0x"},walletGetAssets:async e=>{var r;return await((r=this.getAdapter(b.state.activeChain))==null?void 0:r.walletGetAssets(e))??{}}},this.networkControllerClient={switchCaipNetwork:async e=>await this.switchCaipNetwork(e),getApprovedCaipNetworksData:async()=>this.getApprovedCaipNetworksData()},X.setClient(this.connectionControllerClient)}getApprovedCaipNetworksData(){var e,r,i,s,n;if($e.getProviderId(b.state.activeChain)===je.CONNECTOR_TYPE_WALLET_CONNECT){const o=(r=(e=this.universalProvider)==null?void 0:e.session)==null?void 0:r.namespaces;return{supportsAllNetworks:((n=(s=(i=this.universalProvider)==null?void 0:i.session)==null?void 0:s.peer)==null?void 0:n.metadata.name)==="MetaMask Wallet",approvedCaipNetworkIds:this.getChainsFromNamespaces(o)}}return{supportsAllNetworks:!0,approvedCaipNetworkIds:[]}}async switchCaipNetwork(e){var i;if(!e)return;const r=e.chainNamespace;if(this.getAddressByChainNamespace(e.chainNamespace)){const s=$e.getProvider(r),n=$e.getProviderId(r);if(e.chainNamespace===b.state.activeChain)await((i=this.getAdapter(r))==null?void 0:i.switchNetwork({caipNetwork:e,provider:s,providerType:n}));else if(this.setCaipNetwork(e),n===je.CONNECTOR_TYPE_WALLET_CONNECT)this.syncWalletConnectAccount();else{const o=this.getAddressByChainNamespace(r);o&&this.syncAccount({address:o,chainId:e.id,chainNamespace:r})}}else this.setCaipNetwork(e)}getChainsFromNamespaces(e={}){return Object.values(e).flatMap(r=>{const i=r.chains||[],s=r.accounts.map(n=>{const{chainId:o,chainNamespace:a}=kr.parseCaipAddress(n);return`${a}:${o}`});return Array.from(new Set([...i,...s]))})}createAdapters(e){return this.createClients(),this.chainNamespaces.reduce((r,i)=>{var n;const s=e==null?void 0:e.find(o=>o.namespace===i);return s?(s.construct({namespace:i,projectId:(n=this.options)==null?void 0:n.projectId,networks:this.getCaipNetworks()}),r[i]=s):r[i]=new Ib({namespace:i,networks:this.getCaipNetworks()}),r},{})}async initChainAdapter(e){var r;this.onConnectors(e),this.listenAdapter(e),(r=this.chainAdapters)==null||r[e].syncConnectors(this.options,this),await this.createUniversalProviderForAdapter(e)}async initChainAdapters(){await Promise.all(this.chainNamespaces.map(async e=>{await this.initChainAdapter(e)}))}onConnectors(e){var r;(r=this.getAdapter(e))==null||r.on("connectors",this.setConnectors.bind(this))}listenAdapter(e){const r=this.getAdapter(e);if(!r)return;const i=Y.getConnectionStatus();i==="connected"?this.setStatus("connecting",e):i==="disconnected"?(Y.clearAddressCache(),this.setStatus(i,e)):this.setStatus(i,e),r.on("switchNetwork",({address:s,chainId:n})=>{const o=this.getCaipNetworks().find(l=>l.id===n||l.caipNetworkId===n),a=b.state.activeChain===e,c=b.getAccountProp("address",e);if(o){const l=a&&s?s:c;l&&this.syncAccount({address:l,chainId:o.id,chainNamespace:e})}else this.setUnsupportedNetwork(n)}),r.on("disconnect",this.disconnect.bind(this,e)),r.on("pendingTransactions",()=>{const s=ee.state.address,n=b.state.activeCaipNetwork;!s||!(n!=null&&n.id)||this.updateNativeBalance(s,n.id,n.chainNamespace)}),r.on("accountChanged",({address:s,chainId:n})=>{var a,c;const o=b.state.activeChain===e;o&&n?this.syncAccount({address:s,chainId:n,chainNamespace:e}):o&&((a=b.state.activeCaipNetwork)!=null&&a.id)?this.syncAccount({address:s,chainId:(c=b.state.activeCaipNetwork)==null?void 0:c.id,chainNamespace:e}):this.syncAccountInfo(s,n,e)})}async createUniversalProviderForAdapter(e){var r,i,s;await this.getUniversalProvider(),this.universalProvider&&((s=(i=(r=this.chainAdapters)==null?void 0:r[e])==null?void 0:i.setUniversalProvider)==null||s.call(i,this.universalProvider))}async syncExistingConnection(){await Promise.allSettled(this.chainNamespaces.map(e=>this.syncNamespaceConnection(e)))}async syncNamespaceConnection(e){try{const r=V.getConnectorId(e);switch(this.setStatus("connecting",e),r){case J.CONNECTOR_ID.WALLET_CONNECT:await this.syncWalletConnectAccount();break;case J.CONNECTOR_ID.AUTH:break;default:await this.syncAdapterConnection(e)}}catch(r){console.warn("AppKit couldn't sync existing connection",r),this.setStatus("disconnected",e)}}async syncAdapterConnection(e){var o,a,c;const r=this.getAdapter(e),i=V.getConnectorId(e),s=this.getCaipNetwork(e),n=V.getConnectors(e).find(l=>l.id===i);try{if(!r||!n)throw new Error(`Adapter or connector not found for namespace ${e}`);if(!(s!=null&&s.id))throw new Error("CaipNetwork not found");const l=await(r==null?void 0:r.syncConnection({namespace:e,id:n.id,chainId:s.id,rpcUrl:(c=(a=(o=s==null?void 0:s.rpcUrls)==null?void 0:o.default)==null?void 0:a.http)==null?void 0:c[0]}));if(l){const d=await(r==null?void 0:r.getAccounts({namespace:e,id:n.id}));d&&d.accounts.length>0?this.setAllAccounts(d.accounts,e):this.setAllAccounts([z.createAccount(e,l.address,"eoa")],e),this.syncProvider({...l,chainNamespace:e}),await this.syncAccount({...l,chainNamespace:e}),this.setStatus("connected",e)}else this.setStatus("disconnected",e)}catch{this.setStatus("disconnected",e)}}async syncWalletConnectAccount(){const e=this.chainNamespaces.map(async r=>{var a,c,l,d,u;const i=this.getAdapter(r),s=((d=(l=(c=(a=this.universalProvider)==null?void 0:a.session)==null?void 0:c.namespaces)==null?void 0:l[r])==null?void 0:d.accounts)||[],n=(u=b.state.activeCaipNetwork)==null?void 0:u.id,o=s.find(h=>{const{chainId:p}=kr.parseCaipAddress(h);return p===(n==null?void 0:n.toString())})||s[0];if(o){const h=kr.validateCaipAddress(o),{chainId:p,address:w}=kr.parseCaipAddress(h);if($e.setProviderId(r,je.CONNECTOR_TYPE_WALLET_CONNECT),this.caipNetworks&&b.state.activeCaipNetwork&&(i==null?void 0:i.namespace)!==J.CHAIN.EVM){const f=i==null?void 0:i.getWalletConnectProvider({caipNetworks:this.getCaipNetworks(),provider:this.universalProvider,activeCaipNetwork:b.state.activeCaipNetwork});$e.setProvider(r,f)}else $e.setProvider(r,this.universalProvider);V.setConnectorId(J.CONNECTOR_ID.WALLET_CONNECT,r),Y.addConnectedNamespace(r),this.syncWalletConnectAccounts(r),await this.syncAccount({address:w,chainId:p,chainNamespace:r})}else this.setStatus("disconnected",r);await b.setApprovedCaipNetworksData(r)});await Promise.all(e)}syncWalletConnectAccounts(e){var i,s,n,o,a;const r=(a=(o=(n=(s=(i=this.universalProvider)==null?void 0:i.session)==null?void 0:s.namespaces)==null?void 0:n[e])==null?void 0:o.accounts)==null?void 0:a.map(c=>{const{address:l}=kr.parseCaipAddress(c);return l}).filter((c,l,d)=>d.indexOf(c)===l);r&&this.setAllAccounts(r.map(c=>z.createAccount(e,c,e==="bip122"?"payment":"eoa")),e)}syncProvider({type:e,provider:r,id:i,chainNamespace:s}){$e.setProviderId(s,e),$e.setProvider(s,r),V.setConnectorId(i,s)}async syncAccount(e){var u,h;const r=e.chainNamespace===b.state.activeChain,i=b.getCaipNetworkByNamespace(e.chainNamespace,e.chainId),{address:s,chainId:n,chainNamespace:o}=e,{chainId:a}=Y.getActiveNetworkProps(),c=n||a,l=((u=b.state.activeCaipNetwork)==null?void 0:u.name)===J.UNSUPPORTED_NETWORK_NAME,d=b.getNetworkProp("supportsAllNetworks",o);if(this.setStatus("connected",o),!(l&&!d)&&c){let p=this.getCaipNetworks().find(m=>m.id.toString()===c.toString()),w=this.getCaipNetworks().find(m=>m.chainNamespace===o);if(!d&&!p&&!w){const m=this.getApprovedCaipNetworkIds()||[],v=m.find(E=>{var A;return((A=kr.parseCaipNetworkId(E))==null?void 0:A.chainId)===c.toString()}),x=m.find(E=>{var A;return((A=kr.parseCaipNetworkId(E))==null?void 0:A.chainNamespace)===o});p=this.getCaipNetworks().find(E=>E.caipNetworkId===v),w=this.getCaipNetworks().find(E=>E.caipNetworkId===x||"deprecatedCaipNetworkId"in E&&E.deprecatedCaipNetworkId===x)}const f=p||w;(f==null?void 0:f.chainNamespace)===b.state.activeChain?L.state.enableNetworkSwitch&&!L.state.allowUnsupportedChain&&((h=b.state.activeCaipNetwork)==null?void 0:h.name)===J.UNSUPPORTED_NETWORK_NAME?b.showUnsupportedChainUI():this.setCaipNetwork(f):r||i&&this.setCaipNetworkOfNamespace(i,o),this.syncConnectedWalletInfo(o),Id.isLowerCaseMatch(s,ee.state.address)||this.syncAccountInfo(s,f==null?void 0:f.id,o),r?await this.syncBalance({address:s,chainId:f==null?void 0:f.id,chainNamespace:o}):await this.syncBalance({address:s,chainId:i==null?void 0:i.id,chainNamespace:o})}}async syncAccountInfo(e,r,i){const s=this.getCaipAddress(i),n=r||(s==null?void 0:s.split(":")[1]);if(!n)return;const o=`${i}:${n}:${e}`;this.setCaipAddress(o,i),await this.syncIdentity({address:e,chainId:n,chainNamespace:i})}async syncReownName(e,r){try{const i=await this.getReownName(e);if(i[0]){const s=i[0];this.setProfileName(s.name,r)}else this.setProfileName(null,r)}catch{this.setProfileName(null,r)}}syncConnectedWalletInfo(e){var s;const r=V.getConnectorId(e),i=$e.getProviderId(e);if(i===je.CONNECTOR_TYPE_ANNOUNCED||i===je.CONNECTOR_TYPE_INJECTED){if(r){const n=this.getConnectors().find(o=>o.id===r);if(n){const{info:o,name:a,imageUrl:c}=n,l=c||this.getConnectorImage(n);this.setConnectedWalletInfo({name:a,icon:l,...o},e)}}}else if(i===je.CONNECTOR_TYPE_WALLET_CONNECT){const n=$e.getProvider(e);n!=null&&n.session&&this.setConnectedWalletInfo({...n.session.peer.metadata,name:n.session.peer.metadata.name,icon:(s=n.session.peer.metadata.icons)==null?void 0:s[0]},e)}else if(r)if(r===J.CONNECTOR_ID.COINBASE){const n=this.getConnectors().find(o=>o.id===J.CONNECTOR_ID.COINBASE);this.setConnectedWalletInfo({name:"Coinbase Wallet",icon:this.getConnectorImage(n)},e)}else this.setConnectedWalletInfo({name:r},e)}async syncBalance(e){!Ep.getNetworksByNamespace(this.getCaipNetworks(),e.chainNamespace).find(r=>{var i;return r.id.toString()===((i=e.chainId)==null?void 0:i.toString())})||!e.chainId||await this.updateNativeBalance(e.address,e.chainId,e.chainNamespace)}async updateNativeBalance(e,r,i){const s=this.getAdapter(i),n=b.getCaipNetworkByNamespace(i,r);if(s){const o=await s.getBalance({address:e,chainId:r,caipNetwork:n,tokens:this.options.tokens});this.setBalance(o.balance,o.symbol,i)}}async initializeUniversalAdapter(){var i,s,n,o,a,c,l,d,u,h;const e=O3.createLogger((p,...w)=>{p&&this.handleAlertError(p),console.error(...w)}),r={projectId:(i=this.options)==null?void 0:i.projectId,metadata:{name:(s=this.options)!=null&&s.metadata?(n=this.options)==null?void 0:n.metadata.name:"",description:(o=this.options)!=null&&o.metadata?(a=this.options)==null?void 0:a.metadata.description:"",url:(c=this.options)!=null&&c.metadata?(l=this.options)==null?void 0:l.metadata.url:"",icons:(d=this.options)!=null&&d.metadata?(u=this.options)==null?void 0:u.metadata.icons:[""]},logger:e};L.setManualWCControl(!!((h=this.options)!=null&&h.manualWCControl)),this.universalProvider=this.options.universalProvider??await Da.init(r),this.listenWalletConnect()}listenWalletConnect(){this.universalProvider&&(this.universalProvider.on("display_uri",e=>{X.setUri(e)}),this.universalProvider.on("connect",X.finalizeWcConnection),this.universalProvider.on("disconnect",()=>{this.chainNamespaces.forEach(e=>{this.resetAccount(e)}),X.resetWcConnection()}),this.universalProvider.on("chainChanged",e=>{const r=this.getCaipNetworks().find(s=>s.id==e),i=this.getCaipNetwork();if(!r){this.setUnsupportedNetwork(e);return}(i==null?void 0:i.id)!==(r==null?void 0:r.id)&&this.setCaipNetwork(r)}),this.universalProvider.on("session_event",e=>{if(M0.isSessionEventData(e)){const{name:r,data:i}=e.params.event;r==="accountsChanged"&&Array.isArray(i)&&z.isCaipAddress(i[0])&&this.syncAccount(kr.parseCaipAddress(i[0]))}}))}createUniversalProvider(){var e;return!this.universalProviderInitPromise&&z.isClient()&&((e=this.options)!=null&&e.projectId)&&(this.universalProviderInitPromise=this.initializeUniversalAdapter()),this.universalProviderInitPromise}async getUniversalProvider(){if(!this.universalProvider)try{await this.createUniversalProvider()}catch(e){he.sendEvent({type:"error",event:"INTERNAL_SDK_ERROR",properties:{errorType:"UniversalProviderInitError",errorMessage:e instanceof Error?e.message:"Unknown",uncaught:!1}}),console.error("AppKit:getUniversalProvider - Cannot create provider",e)}return this.universalProvider}handleAlertError(e){const r=Object.entries(So.UniversalProviderErrors).find(([,{message:a}])=>e.message.includes(a)),[i,s]=r??[],{message:n,alertErrorKey:o}=s??{};if(i&&n&&!this.reportedAlertErrors[i]){const a=So.ALERT_ERRORS[o];a&&(Ur.open(a,"error"),this.reportedAlertErrors[i]=!0)}}getAdapter(e){var r;if(e)return(r=this.chainAdapters)==null?void 0:r[e]}createAdapter(e){var s;if(!e)return;const r=e.namespace;if(!r)return;this.createClients();const i=e;i.namespace=r,i.construct({namespace:r,projectId:(s=this.options)==null?void 0:s.projectId,networks:this.getCaipNetworks()}),this.chainNamespaces.includes(r)||this.chainNamespaces.push(r),this.chainAdapters&&(this.chainAdapters[r]=i)}async open(e){if(await this.injectModalUi(),e!=null&&e.uri&&X.setUri(e.uri),e==null?void 0:e.arguments)switch(e==null?void 0:e.view){case"Swap":return ve.open({...e,data:{swap:e.arguments}})}return ve.open(e)}async close(){await this.injectModalUi(),ve.close()}setLoading(e,r){ve.setLoading(e,r)}async disconnect(e){await X.disconnect(e)}getError(){return""}getChainId(){var e;return(e=b.state.activeCaipNetwork)==null?void 0:e.id}async switchNetwork(e){const r=this.getCaipNetworks().find(i=>i.id===e.id);if(!r){Ur.open(So.ALERT_ERRORS.SWITCH_NETWORK_NOT_FOUND,"error");return}await b.switchActiveNetwork(r)}getWalletProvider(){return b.state.activeChain?$e.state.providers[b.state.activeChain]:null}getWalletProviderType(){return $e.getProviderId(b.state.activeChain)}subscribeProviders(e){return $e.subscribeProviders(e)}getThemeMode(){return ze.state.themeMode}getThemeVariables(){return ze.state.themeVariables}setThemeMode(e){ze.setThemeMode(e),T0(ze.state.themeMode)}setTermsConditionsUrl(e){L.setTermsConditionsUrl(e)}setPrivacyPolicyUrl(e){L.setPrivacyPolicyUrl(e)}setThemeVariables(e){ze.setThemeVariables(e),X3(ze.state.themeVariables)}subscribeTheme(e){return ze.subscribe(e)}getWalletInfo(){return ee.state.connectedWalletInfo}getAccount(e){var n;const r=V.getAuthConnector(e),i=b.getAccountData(e),s=b.state.activeChain;if(i)return{allAccounts:i.allAccounts,caipAddress:i.caipAddress,address:z.getPlainAddress(i.caipAddress),isConnected:!!i.caipAddress,status:i.status,embeddedWalletInfo:r?{user:i.user?{...i.user,username:Y.getConnectedSocialUsername()}:void 0,authProvider:i.socialProvider||"email",accountType:(n=i.preferredAccountTypes)==null?void 0:n[e||s],isSmartAccountDeployed:!!i.smartAccountDeployed}:void 0}}subscribeAccount(e,r){const i=()=>{const s=this.getAccount(r);s&&e(s)};r?b.subscribeChainProp("accountState",i,r):b.subscribe(i),V.subscribe(i)}subscribeNetwork(e){return b.subscribe(({activeCaipNetwork:r})=>{e({caipNetwork:r,chainId:r==null?void 0:r.id,caipNetworkId:r==null?void 0:r.caipNetworkId})})}subscribeWalletInfo(e){return ee.subscribeKey("connectedWalletInfo",e)}subscribeShouldUpdateToAddress(e){ee.subscribeKey("shouldUpdateToAddress",e)}subscribeCaipNetworkChange(e){b.subscribeKey("activeCaipNetwork",e)}getState(){return br.state}subscribeState(e){return br.subscribe(e)}showErrorMessage(e){_e.showError(e)}showSuccessMessage(e){_e.showSuccess(e)}getEvent(){return{...he.state}}subscribeEvents(e){return he.subscribe(e)}replace(e){W.replace(e)}redirect(e){W.push(e)}popTransactionStack(e){W.popTransactionStack(e)}isOpen(){return ve.state.open}isTransactionStackEmpty(){return W.state.transactionStack.length===0}isTransactionShouldReplaceView(){var e;return(e=W.state.transactionStack[W.state.transactionStack.length-1])==null?void 0:e.replace}static getInstance(){return this.instance}updateFeatures(e){L.setFeatures(e)}updateOptions(e){const r={...L.state||{},...e};L.setOptions(r)}setConnectMethodsOrder(e){L.setConnectMethodsOrder(e)}setWalletFeaturesOrder(e){L.setWalletFeaturesOrder(e)}setCollapseWallets(e){L.setCollapseWallets(e)}setSocialsOrder(e){L.setSocialsOrder(e)}getConnectMethodsOrder(){return _i.getConnectOrderMethod(L.state.features,V.getConnectors())}addNetwork(e,r){if(this.chainAdapters&&!this.chainAdapters[e])throw new Error(`Adapter for namespace ${e} doesn't exist`);const i=this.extendCaipNetwork(r,this.options);this.getCaipNetworks().find(s=>s.id===i.id)||b.addNetwork(i)}removeNetwork(e,r){if(this.chainAdapters&&!this.chainAdapters[e])throw new Error(`Adapter for namespace ${e} doesn't exist`);this.getCaipNetworks().find(i=>i.id===r)&&b.removeNetwork(e,r)}}let bh=!1;class U0 extends Ab{async open(e){V.isConnected()||await super.open(e)}async close(){await super.close(),this.options.manualWCControl&&X.finalizeWcConnection()}async syncIdentity(e){return Promise.resolve()}async syncBalance(e){return Promise.resolve()}async injectModalUi(){if(!bh&&z.isClient()){if(await Promise.resolve().then(function(){return By}),await Promise.resolve().then(function(){return Qy}),!document.querySelector("w3m-modal")){const e=document.createElement("w3m-modal");!L.state.disableAppend&&!L.state.enableEmbedded&&document.body.insertAdjacentElement("beforeend",e)}bh=!0}}}const Nb="1.7.3";function kb(t){return new U0({...t,basic:!0,sdkVersion:`html-core-${Nb}`})}var Sb=Object.freeze({__proto__:null,createAppKit:kb,AppKit:U0}),_b=Object.defineProperty,Pb=Object.defineProperties,Tb=Object.getOwnPropertyDescriptors,yh=Object.getOwnPropertySymbols,Ob=Object.prototype.hasOwnProperty,$b=Object.prototype.propertyIsEnumerable,Ch=(t,e,r)=>e in t?_b(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Rb=(t,e)=>{for(var r in e||(e={}))Ob.call(e,r)&&Ch(t,r,e[r]);if(yh)for(var r of yh(e))$b.call(e,r)&&Ch(t,r,e[r]);return t},Lb=(t,e)=>Pb(t,Tb(e));function Mb(t){if(t)return{"--w3m-font-family":t["--wcm-font-family"],"--w3m-accent":t["--wcm-accent-color"],"--w3m-color-mix":t["--wcm-background-color"],"--w3m-z-index":t["--wcm-z-index"]?Number(t["--wcm-z-index"]):void 0,"--w3m-qr-color":t["--wcm-accent-color"],"--w3m-font-size-master":t["--wcm-text-medium-regular-size"],"--w3m-border-radius-master":t["--wcm-container-border-radius"],"--w3m-color-mix-strength":0}}const Bb=t=>{const[e,r]=t.split(":");return gs({id:r,caipNetworkId:t,chainNamespace:e,name:"",nativeCurrency:{name:"",symbol:"",decimals:8},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}}})};function Ub(t){var e,r,i,s,n,o,a;const c=(e=t.chains)==null?void 0:e.map(Bb).filter(Boolean);if(c.length===0)throw new Error("At least one chain must be specified");const l=c.find(u=>{var h;return u.id===((h=t.defaultChain)==null?void 0:h.id)}),d={projectId:t.projectId,networks:c,themeMode:t.themeMode,themeVariables:Mb(t.themeVariables),chainImages:t.chainImages,connectorImages:t.walletImages,defaultNetwork:l,metadata:Lb(Rb({},t.metadata),{name:((r=t.metadata)==null?void 0:r.name)||"WalletConnect",description:((i=t.metadata)==null?void 0:i.description)||"Connect to WalletConnect-compatible wallets",url:((s=t.metadata)==null?void 0:s.url)||"https://walletconnect.org",icons:((n=t.metadata)==null?void 0:n.icons)||["https://walletconnect.org/walletconnect-logo.png"]}),showWallets:!0,featuredWalletIds:t.explorerRecommendedWalletIds==="NONE"?[]:Array.isArray(t.explorerRecommendedWalletIds)?t.explorerRecommendedWalletIds:[],excludeWalletIds:t.explorerExcludedWalletIds==="ALL"?[]:Array.isArray(t.explorerExcludedWalletIds)?t.explorerExcludedWalletIds:[],enableEIP6963:!1,enableInjected:!1,enableCoinbase:!0,enableWalletConnect:!0,features:{email:!1,socials:!1}};if((o=t.mobileWallets)!=null&&o.length||(a=t.desktopWallets)!=null&&a.length){const u=[...(t.mobileWallets||[]).map(w=>({id:w.id,name:w.name,links:w.links})),...(t.desktopWallets||[]).map(w=>({id:w.id,name:w.name,links:{native:w.links.native,universal:w.links.universal}}))],h=[...d.featuredWalletIds||[],...d.excludeWalletIds||[]],p=u.filter(w=>!h.includes(w.id));p.length&&(d.customWallets=p)}return d}var Db=Object.freeze({__proto__:null,convertWCMToAppKitOptions:Ub});/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const jb={attribute:!0,type:String,converter:$a,reflect:!1,hasChanged:Sd},zb=(t=jb,e,r)=>{const{kind:i,metadata:s}=r;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),n.set(r.name,t),i==="accessor"){const{name:o}=r;return{set(a){const c=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,c,t)},init(a){return a!==void 0&&this.C(o,void 0,t,a),a}}}if(i==="setter"){const{name:o}=r;return function(a){const c=this[o];e.call(this,a),this.requestUpdate(o,c,t)}}throw Error("Unsupported decorator location: "+i)};function I(t){return(e,r)=>typeof r=="object"?zb(t,e,r):((i,s,n)=>{const o=s.hasOwnProperty(n);return s.constructor.createProperty(n,i),o?Object.getOwnPropertyDescriptor(s,n):void 0})(t,e,r)}/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function G(t){return I({...t,state:!0,attribute:!1})}var Hb=ie`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`,Ct=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let nt=class extends K{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&Ye.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&Ye.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&Ye.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&Ye.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&Ye.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&Ye.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&Ye.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&Ye.getSpacingStyles(this.margin,3)};
    `,C`<slot></slot>`}};nt.styles=[xe,Hb],Ct([I()],nt.prototype,"flexDirection",void 0),Ct([I()],nt.prototype,"flexWrap",void 0),Ct([I()],nt.prototype,"flexBasis",void 0),Ct([I()],nt.prototype,"flexGrow",void 0),Ct([I()],nt.prototype,"flexShrink",void 0),Ct([I()],nt.prototype,"alignItems",void 0),Ct([I()],nt.prototype,"justifyContent",void 0),Ct([I()],nt.prototype,"columnGap",void 0),Ct([I()],nt.prototype,"rowGap",void 0),Ct([I()],nt.prototype,"gap",void 0),Ct([I()],nt.prototype,"padding",void 0),Ct([I()],nt.prototype,"margin",void 0),nt=Ct([Z("wui-flex")],nt);/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const re=t=>t??Me;/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const qb=t=>t===null||typeof t!="object"&&typeof t!="function",Wb=t=>t.strings===void 0;/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const D0={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Pd=t=>(...e)=>({_$litDirective$:t,values:e});class j0{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,i){this._$Ct=e,this._$AM=r,this._$Ci=i}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const In=(t,e)=>{var i;const r=t._$AN;if(r===void 0)return!1;for(const s of r)(i=s._$AO)==null||i.call(s,e,!1),In(s,e);return!0},La=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while((r==null?void 0:r.size)===0)},z0=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),Gb(e)}};function Fb(t){this._$AN!==void 0?(La(this),this._$AM=t,z0(this)):this._$AM=t}function Vb(t,e=!1,r=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let n=r;n<i.length;n++)In(i[n],!1),La(i[n]);else i!=null&&(In(i,!1),La(i));else In(this,t)}const Gb=t=>{t.type==D0.CHILD&&(t._$AP??(t._$AP=Vb),t._$AQ??(t._$AQ=Fb))};class H0 extends j0{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,i){super._$AT(e,r,i),z0(this),this.isConnected=e._$AU}_$AO(e,r=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),r&&(In(this,e),La(this))}setValue(e){if(Wb(this._$Ct))this._$Ct._$AI(e,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/class Zb{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class Kb{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??(this.Y=new Promise(e=>this.Z=e))}resume(){var e;(e=this.Z)==null||e.call(this),this.Y=this.Z=void 0}}/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const xh=t=>!qb(t)&&typeof t.then=="function",Eh=1073741823;class Yb extends H0{constructor(){super(...arguments),this._$Cwt=Eh,this._$Cbt=[],this._$CK=new Zb(this),this._$CX=new Kb}render(...e){return e.find(r=>!xh(r))??xr}update(e,r){const i=this._$Cbt;let s=i.length;this._$Cbt=r;const n=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<r.length&&!(a>this._$Cwt);a++){const c=r[a];if(!xh(c))return this._$Cwt=a,c;a<s&&c===i[a]||(this._$Cwt=Eh,s=0,Promise.resolve(c).then(async l=>{for(;o.get();)await o.get();const d=n.deref();if(d!==void 0){const u=d._$Cbt.indexOf(c);u>-1&&u<d._$Cwt&&(d._$Cwt=u,d.setValue(l))}}))}return xr}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const Jb=Pd(Yb);class Xb{constructor(){this.cache=new Map}set(e,r){this.cache.set(e,r)}get(e){return this.cache.get(e)}has(e){return this.cache.has(e)}delete(e){this.cache.delete(e)}clear(){this.cache.clear()}}const nl=new Xb;var Qb=ie`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`,qs=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};const Ih={add:async()=>(await Promise.resolve().then(function(){return t4})).addSvg,allWallets:async()=>(await Promise.resolve().then(function(){return i4})).allWalletsSvg,arrowBottomCircle:async()=>(await Promise.resolve().then(function(){return n4})).arrowBottomCircleSvg,appStore:async()=>(await Promise.resolve().then(function(){return a4})).appStoreSvg,apple:async()=>(await Promise.resolve().then(function(){return l4})).appleSvg,arrowBottom:async()=>(await Promise.resolve().then(function(){return u4})).arrowBottomSvg,arrowLeft:async()=>(await Promise.resolve().then(function(){return p4})).arrowLeftSvg,arrowRight:async()=>(await Promise.resolve().then(function(){return g4})).arrowRightSvg,arrowTop:async()=>(await Promise.resolve().then(function(){return m4})).arrowTopSvg,bank:async()=>(await Promise.resolve().then(function(){return b4})).bankSvg,browser:async()=>(await Promise.resolve().then(function(){return C4})).browserSvg,card:async()=>(await Promise.resolve().then(function(){return E4})).cardSvg,checkmark:async()=>(await Promise.resolve().then(function(){return A4})).checkmarkSvg,checkmarkBold:async()=>(await Promise.resolve().then(function(){return k4})).checkmarkBoldSvg,chevronBottom:async()=>(await Promise.resolve().then(function(){return _4})).chevronBottomSvg,chevronLeft:async()=>(await Promise.resolve().then(function(){return T4})).chevronLeftSvg,chevronRight:async()=>(await Promise.resolve().then(function(){return $4})).chevronRightSvg,chevronTop:async()=>(await Promise.resolve().then(function(){return L4})).chevronTopSvg,chromeStore:async()=>(await Promise.resolve().then(function(){return B4})).chromeStoreSvg,clock:async()=>(await Promise.resolve().then(function(){return D4})).clockSvg,close:async()=>(await Promise.resolve().then(function(){return z4})).closeSvg,compass:async()=>(await Promise.resolve().then(function(){return q4})).compassSvg,coinPlaceholder:async()=>(await Promise.resolve().then(function(){return F4})).coinPlaceholderSvg,copy:async()=>(await Promise.resolve().then(function(){return G4})).copySvg,cursor:async()=>(await Promise.resolve().then(function(){return K4})).cursorSvg,cursorTransparent:async()=>(await Promise.resolve().then(function(){return J4})).cursorTransparentSvg,desktop:async()=>(await Promise.resolve().then(function(){return Q4})).desktopSvg,disconnect:async()=>(await Promise.resolve().then(function(){return t6})).disconnectSvg,discord:async()=>(await Promise.resolve().then(function(){return i6})).discordSvg,etherscan:async()=>(await Promise.resolve().then(function(){return n6})).etherscanSvg,extension:async()=>(await Promise.resolve().then(function(){return a6})).extensionSvg,externalLink:async()=>(await Promise.resolve().then(function(){return l6})).externalLinkSvg,facebook:async()=>(await Promise.resolve().then(function(){return u6})).facebookSvg,farcaster:async()=>(await Promise.resolve().then(function(){return p6})).farcasterSvg,filters:async()=>(await Promise.resolve().then(function(){return g6})).filtersSvg,github:async()=>(await Promise.resolve().then(function(){return m6})).githubSvg,google:async()=>(await Promise.resolve().then(function(){return b6})).googleSvg,helpCircle:async()=>(await Promise.resolve().then(function(){return C6})).helpCircleSvg,image:async()=>(await Promise.resolve().then(function(){return E6})).imageSvg,id:async()=>(await Promise.resolve().then(function(){return A6})).idSvg,infoCircle:async()=>(await Promise.resolve().then(function(){return k6})).infoCircleSvg,lightbulb:async()=>(await Promise.resolve().then(function(){return _6})).lightbulbSvg,mail:async()=>(await Promise.resolve().then(function(){return T6})).mailSvg,mobile:async()=>(await Promise.resolve().then(function(){return $6})).mobileSvg,more:async()=>(await Promise.resolve().then(function(){return L6})).moreSvg,networkPlaceholder:async()=>(await Promise.resolve().then(function(){return B6})).networkPlaceholderSvg,nftPlaceholder:async()=>(await Promise.resolve().then(function(){return D6})).nftPlaceholderSvg,off:async()=>(await Promise.resolve().then(function(){return z6})).offSvg,playStore:async()=>(await Promise.resolve().then(function(){return q6})).playStoreSvg,plus:async()=>(await Promise.resolve().then(function(){return F6})).plusSvg,qrCode:async()=>(await Promise.resolve().then(function(){return G6})).qrCodeIcon,recycleHorizontal:async()=>(await Promise.resolve().then(function(){return K6})).recycleHorizontalSvg,refresh:async()=>(await Promise.resolve().then(function(){return J6})).refreshSvg,search:async()=>(await Promise.resolve().then(function(){return Q6})).searchSvg,send:async()=>(await Promise.resolve().then(function(){return t8})).sendSvg,swapHorizontal:async()=>(await Promise.resolve().then(function(){return i8})).swapHorizontalSvg,swapHorizontalMedium:async()=>(await Promise.resolve().then(function(){return n8})).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await Promise.resolve().then(function(){return a8})).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await Promise.resolve().then(function(){return l8})).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await Promise.resolve().then(function(){return u8})).swapVerticalSvg,telegram:async()=>(await Promise.resolve().then(function(){return p8})).telegramSvg,threeDots:async()=>(await Promise.resolve().then(function(){return g8})).threeDotsSvg,twitch:async()=>(await Promise.resolve().then(function(){return m8})).twitchSvg,twitter:async()=>(await Promise.resolve().then(function(){return Jh})).xSvg,twitterIcon:async()=>(await Promise.resolve().then(function(){return y8})).twitterIconSvg,verify:async()=>(await Promise.resolve().then(function(){return x8})).verifySvg,verifyFilled:async()=>(await Promise.resolve().then(function(){return I8})).verifyFilledSvg,wallet:async()=>(await Promise.resolve().then(function(){return N8})).walletSvg,walletConnect:async()=>(await Promise.resolve().then(function(){return Tl})).walletConnectSvg,walletConnectLightBrown:async()=>(await Promise.resolve().then(function(){return Tl})).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await Promise.resolve().then(function(){return Tl})).walletConnectBrownSvg,walletPlaceholder:async()=>(await Promise.resolve().then(function(){return T8})).walletPlaceholderSvg,warningCircle:async()=>(await Promise.resolve().then(function(){return $8})).warningCircleSvg,x:async()=>(await Promise.resolve().then(function(){return Jh})).xSvg,info:async()=>(await Promise.resolve().then(function(){return L8})).infoSvg,exclamationTriangle:async()=>(await Promise.resolve().then(function(){return B8})).exclamationTriangleSvg,reown:async()=>(await Promise.resolve().then(function(){return D8})).reownSvg};async function e5(t){if(nl.has(t))return nl.get(t);const e=(Ih[t]??Ih.copy)();return nl.set(t,e),e}let Qr=class extends K{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `,C`${Jb(e5(this.name),C`<div class="fallback"></div>`)}`}};Qr.styles=[xe,ao,Qb],qs([I()],Qr.prototype,"size",void 0),qs([I()],Qr.prototype,"name",void 0),qs([I()],Qr.prototype,"color",void 0),qs([I()],Qr.prototype,"aspectRatio",void 0),Qr=qs([Z("wui-icon")],Qr);/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const q0=Pd(class extends j0{constructor(t){var e;if(super(t),t.type!==D0.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,s;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((i=this.nt)!=null&&i.has(n))&&this.st.add(n);return this.render(e)}const r=t.element.classList;for(const n of this.st)n in e||(r.remove(n),this.st.delete(n));for(const n in e){const o=!!e[n];o===this.st.has(n)||(s=this.nt)!=null&&s.has(n)||(o?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return xr}});var t5=ie`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`,Ws=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let ei=class extends K{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,C`<slot class=${q0(t)}></slot>`}};ei.styles=[xe,t5],Ws([I()],ei.prototype,"variant",void 0),Ws([I()],ei.prototype,"color",void 0),Ws([I()],ei.prototype,"align",void 0),Ws([I()],ei.prototype,"lineClamp",void 0),ei=Ws([Z("wui-text")],ei);var r5=ie`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`,dr=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let jt=class extends K{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const t=this.iconSize||this.size,e=this.size==="lg",r=this.size==="xl",i=e?"12%":"16%",s=e?"xxs":r?"s":"3xl",n=this.background==="gray",o=this.background==="opaque",a=this.backgroundColor==="accent-100"&&o||this.backgroundColor==="success-100"&&o||this.backgroundColor==="error-100"&&o||this.backgroundColor==="inverse-100"&&o;let c=`var(--wui-color-${this.backgroundColor})`;return a?c=`var(--wui-icon-box-bg-${this.backgroundColor})`:n&&(c=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${c};
       --local-bg-mix: ${a||n?"100%":i};
       --local-border-radius: var(--wui-border-radius-${s});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,C` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `}};jt.styles=[xe,et,r5],dr([I()],jt.prototype,"size",void 0),dr([I()],jt.prototype,"backgroundColor",void 0),dr([I()],jt.prototype,"iconColor",void 0),dr([I()],jt.prototype,"iconSize",void 0),dr([I()],jt.prototype,"background",void 0),dr([I({type:Boolean})],jt.prototype,"border",void 0),dr([I()],jt.prototype,"borderColor",void 0),dr([I()],jt.prototype,"icon",void 0),jt=dr([Z("wui-icon-box")],jt);var i5=ie`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`,Fo=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Qi=class extends K{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,C`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};Qi.styles=[xe,ao,i5],Fo([I()],Qi.prototype,"src",void 0),Fo([I()],Qi.prototype,"alt",void 0),Fo([I()],Qi.prototype,"size",void 0),Qi=Fo([Z("wui-image")],Qi);var s5=ie`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`,ti=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let ur=class extends K{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let t="xxs";return this.size==="lg"?t="m":this.size==="md"?t="xs":t="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${t});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),C`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?C`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?C`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:C`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};ur.styles=[et,xe,s5],ti([I()],ur.prototype,"size",void 0),ti([I()],ur.prototype,"name",void 0),ti([I()],ur.prototype,"imageSrc",void 0),ti([I()],ur.prototype,"walletIcon",void 0),ti([I({type:Boolean})],ur.prototype,"installed",void 0),ti([I()],ur.prototype,"badgeSize",void 0),ur=ti([Z("wui-wallet-image")],ur);var n5=ie`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`,Ah=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};const ol=4;let Vo=class extends K{constructor(){super(...arguments),this.walletImages=[]}render(){const t=this.walletImages.length<ol;return C`${this.walletImages.slice(0,ol).map(({src:e,walletName:r})=>C`
            <wui-wallet-image
              size="inherit"
              imageSrc=${e}
              name=${re(r)}
            ></wui-wallet-image>
          `)}
      ${t?[...Array(ol-this.walletImages.length)].map(()=>C` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};Vo.styles=[xe,n5],Ah([I({type:Array})],Vo.prototype,"walletImages",void 0),Vo=Ah([Z("wui-all-wallets-image")],Vo);var o5=ie`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`,al=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Fs=class extends K{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const t=this.size==="md"?"mini-700":"micro-700";return C`
      <wui-text data-variant=${this.variant} variant=${t} color="inherit">
        <slot></slot>
      </wui-text>
    `}};Fs.styles=[xe,o5],al([I()],Fs.prototype,"variant",void 0),al([I()],Fs.prototype,"size",void 0),Fs=al([Z("wui-tag")],Fs);var a5=ie`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`,pt=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let rt=class extends K{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.tabIdx=void 0,this.installed=!1,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return C`
      <button ?disabled=${this.disabled} tabindex=${re(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?C` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?C` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?C`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?C`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.loading?C`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?C`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?C`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};rt.styles=[xe,et,a5],pt([I({type:Array})],rt.prototype,"walletImages",void 0),pt([I()],rt.prototype,"imageSrc",void 0),pt([I()],rt.prototype,"name",void 0),pt([I()],rt.prototype,"tagLabel",void 0),pt([I()],rt.prototype,"tagVariant",void 0),pt([I()],rt.prototype,"icon",void 0),pt([I()],rt.prototype,"walletIcon",void 0),pt([I()],rt.prototype,"tabIdx",void 0),pt([I({type:Boolean})],rt.prototype,"installed",void 0),pt([I({type:Boolean})],rt.prototype,"disabled",void 0),pt([I({type:Boolean})],rt.prototype,"showAllWallets",void 0),pt([I({type:Boolean})],rt.prototype,"loading",void 0),pt([I({type:String})],rt.prototype,"loadingSpinnerColor",void 0),rt=pt([Z("wui-list-wallet")],rt);var Vs=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let es=class extends K{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.state.connectors,this.count=F.state.count,this.isFetchingRecommendedWallets=F.state.isFetchingRecommendedWallets,this.unsubscribe.push(V.subscribeKey("connectors",t=>this.connectors=t),F.subscribeKey("count",t=>this.count=t),F.subscribeKey("isFetchingRecommendedWallets",t=>this.isFetchingRecommendedWallets=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.find(o=>o.id==="walletConnect"),{allWallets:e}=L.state;if(!t||e==="HIDE"||e==="ONLY_MOBILE"&&!z.isMobile())return null;const r=F.state.featured.length,i=this.count+r,s=i<10?i:Math.floor(i/10)*10,n=s<i?`${s}+`:`${s}`;return C`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${n}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${re(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets?"fg-300":"accent-100"}
      ></wui-list-wallet>
    `}onAllWallets(){he.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),W.push("AllWallets")}};Vs([I()],es.prototype,"tabIdx",void 0),Vs([G()],es.prototype,"connectors",void 0),Vs([G()],es.prototype,"count",void 0),Vs([G()],es.prototype,"isFetchingRecommendedWallets",void 0),es=Vs([Z("w3m-all-wallets-widget")],es);var cl=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Go=class extends K{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.state.connectors,this.unsubscribe.push(V.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.filter(e=>e.type==="ANNOUNCED");return t!=null&&t.length?C`
      <wui-flex flexDirection="column" gap="xs">
        ${t.filter(yr.showConnector).map(e=>C`
              <wui-list-wallet
                imageSrc=${re(qe.getConnectorImage(e))}
                name=${e.name??"Unknown"}
                @click=${()=>this.onConnector(e)}
                tagVariant="success"
                tagLabel="installed"
                data-testid=${`wallet-selector-${e.id}`}
                .installed=${!0}
                tabIdx=${re(this.tabIdx)}
              >
              </wui-list-wallet>
            `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){t.id==="walletConnect"?z.isMobile()?W.push("AllWallets"):W.push("ConnectingWalletConnect"):W.push("ConnectingExternal",{connector:t})}};cl([I()],Go.prototype,"tabIdx",void 0),cl([G()],Go.prototype,"connectors",void 0),Go=cl([Z("w3m-connect-announced-widget")],Go);var Zo=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Gs=class extends K{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.state.connectors,this.loading=!1,this.unsubscribe.push(V.subscribeKey("connectors",t=>this.connectors=t)),z.isTelegram()&&z.isIos()&&(this.loading=!X.state.wcUri,this.unsubscribe.push(X.subscribeKey("wcUri",t=>this.loading=!t)))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{customWallets:t}=L.state;if(!(t!=null&&t.length))return this.style.cssText="display: none",null;const e=this.filterOutDuplicateWallets(t);return C`<wui-flex flexDirection="column" gap="xs">
      ${e.map(r=>C`
          <wui-list-wallet
            imageSrc=${re(qe.getWalletImage(r))}
            name=${r.name??"Unknown"}
            @click=${()=>this.onConnectWallet(r)}
            data-testid=${`wallet-selector-${r.id}`}
            tabIdx=${re(this.tabIdx)}
            ?loading=${this.loading}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(t){const e=Y.getRecentWallets(),r=this.connectors.map(n=>{var o;return(o=n.info)==null?void 0:o.rdns}).filter(Boolean),i=e.map(n=>n.rdns).filter(Boolean),s=r.concat(i);if(s.includes("io.metamask.mobile")&&z.isMobile()){const n=s.indexOf("io.metamask.mobile");s[n]="io.metamask"}return t.filter(n=>!s.includes(String(n==null?void 0:n.rdns)))}onConnectWallet(t){this.loading||W.push("ConnectingWalletConnect",{wallet:t})}};Zo([I()],Gs.prototype,"tabIdx",void 0),Zo([G()],Gs.prototype,"connectors",void 0),Zo([G()],Gs.prototype,"loading",void 0),Gs=Zo([Z("w3m-connect-custom-widget")],Gs);var ll=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Ko=class extends K{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.state.connectors,this.unsubscribe.push(V.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.filter(e=>e.type==="EXTERNAL").filter(yr.showConnector).filter(e=>e.id!==J.CONNECTOR_ID.COINBASE_SDK);return t!=null&&t.length?C`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(e=>C`
            <wui-list-wallet
              imageSrc=${re(qe.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              data-testid=${`wallet-selector-external-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${re(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){W.push("ConnectingExternal",{connector:t})}};ll([I()],Ko.prototype,"tabIdx",void 0),ll([G()],Ko.prototype,"connectors",void 0),Ko=ll([Z("w3m-connect-external-widget")],Ko);var dl=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Yo=class extends K{constructor(){super(...arguments),this.tabIdx=void 0,this.wallets=[]}render(){return this.wallets.length?C`
      <wui-flex flexDirection="column" gap="xs">
        ${this.wallets.map(t=>C`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${t.id}`}
              imageSrc=${re(qe.getWalletImage(t))}
              name=${t.name??"Unknown"}
              @click=${()=>this.onConnectWallet(t)}
              tabIdx=${re(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){V.selectWalletConnector(t)}};dl([I()],Yo.prototype,"tabIdx",void 0),dl([I()],Yo.prototype,"wallets",void 0),Yo=dl([Z("w3m-connect-featured-widget")],Yo);var ul=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Jo=class extends K{constructor(){super(...arguments),this.tabIdx=void 0,this.connectors=[]}render(){var e;const t=this.connectors;return!(t!=null&&t.length)||t.length===1&&((e=t[0])==null?void 0:e.name)==="Browser Wallet"&&!z.isMobile()?(this.style.cssText="display: none",null):C`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(r=>{var s;const i=(s=r.info)==null?void 0:s.rdns;return!z.isMobile()&&r.name==="Browser Wallet"?null:!i&&!X.checkInstalled()?(this.style.cssText="display: none",null):yr.showConnector(r)?C`
            <wui-list-wallet
              imageSrc=${re(qe.getConnectorImage(r))}
              .installed=${!0}
              name=${r.name??"Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${r.id}`}
              @click=${()=>this.onConnector(r)}
              tabIdx=${re(this.tabIdx)}
            >
            </wui-list-wallet>
          `:null})}
      </wui-flex>
    `}onConnector(t){V.setActiveConnector(t),W.push("ConnectingExternal",{connector:t})}};ul([I()],Jo.prototype,"tabIdx",void 0),ul([I()],Jo.prototype,"connectors",void 0),Jo=ul([Z("w3m-connect-injected-widget")],Jo);var hl=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Xo=class extends K{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.state.connectors,this.unsubscribe.push(V.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.filter(e=>e.type==="MULTI_CHAIN"&&e.name!=="WalletConnect");return t!=null&&t.length?C`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(e=>C`
            <wui-list-wallet
              imageSrc=${re(qe.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${re(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){V.setActiveConnector(t),W.push("ConnectingMultiChain")}};hl([I()],Xo.prototype,"tabIdx",void 0),hl([G()],Xo.prototype,"connectors",void 0),Xo=hl([Z("w3m-connect-multi-chain-widget")],Xo);var Qo=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Zs=class extends K{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.state.connectors,this.loading=!1,this.unsubscribe.push(V.subscribeKey("connectors",t=>this.connectors=t)),z.isTelegram()&&z.isIos()&&(this.loading=!X.state.wcUri,this.unsubscribe.push(X.subscribeKey("wcUri",t=>this.loading=!t)))}render(){const t=Y.getRecentWallets().filter(e=>!_i.isExcluded(e)).filter(e=>!this.hasWalletConnector(e)).filter(e=>this.isWalletCompatibleWithCurrentChain(e));return t.length?C`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(e=>C`
            <wui-list-wallet
              imageSrc=${re(qe.getWalletImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${re(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){this.loading||V.selectWalletConnector(t)}hasWalletConnector(t){return this.connectors.some(e=>e.id===t.id||e.name===t.name)}isWalletCompatibleWithCurrentChain(t){const e=b.state.activeChain;return e&&t.chains?t.chains.some(r=>{const i=r.split(":")[0];return e===i}):!0}};Qo([I()],Zs.prototype,"tabIdx",void 0),Qo([G()],Zs.prototype,"connectors",void 0),Qo([G()],Zs.prototype,"loading",void 0),Zs=Qo([Z("w3m-connect-recent-widget")],Zs);var ea=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Ks=class extends K{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.wallets=[],this.loading=!1,z.isTelegram()&&z.isIos()&&(this.loading=!X.state.wcUri,this.unsubscribe.push(X.subscribeKey("wcUri",t=>this.loading=!t)))}render(){const{connectors:t}=V.state,{customWallets:e,featuredWalletIds:r}=L.state,i=Y.getRecentWallets(),s=t.find(l=>l.id==="walletConnect"),n=t.filter(l=>l.type==="INJECTED"||l.type==="ANNOUNCED"||l.type==="MULTI_CHAIN").filter(l=>l.name!=="Browser Wallet");if(!s)return null;if(r||e||!this.wallets.length)return this.style.cssText="display: none",null;const o=n.length+i.length,a=Math.max(0,2-o),c=_i.filterOutDuplicateWallets(this.wallets).slice(0,a);return c.length?C`
      <wui-flex flexDirection="column" gap="xs">
        ${c.map(l=>C`
            <wui-list-wallet
              imageSrc=${re(qe.getWalletImage(l))}
              name=${(l==null?void 0:l.name)??"Unknown"}
              @click=${()=>this.onConnectWallet(l)}
              tabIdx=${re(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){if(this.loading)return;const e=V.getConnector(t.id,t.rdns);e?W.push("ConnectingExternal",{connector:e}):W.push("ConnectingWalletConnect",{wallet:t})}};ea([I()],Ks.prototype,"tabIdx",void 0),ea([I()],Ks.prototype,"wallets",void 0),ea([G()],Ks.prototype,"loading",void 0),Ks=ea([Z("w3m-connect-recommended-widget")],Ks);var ta=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Ys=class extends K{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.state.connectors,this.connectorImages=wt.state.connectorImages,this.unsubscribe.push(V.subscribeKey("connectors",t=>this.connectors=t),wt.subscribeKey("connectorImages",t=>this.connectorImages=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(z.isMobile())return this.style.cssText="display: none",null;const t=this.connectors.find(r=>r.id==="walletConnect");if(!t)return this.style.cssText="display: none",null;const e=t.imageUrl||this.connectorImages[(t==null?void 0:t.imageId)??""];return C`
      <wui-list-wallet
        imageSrc=${re(e)}
        name=${t.name??"Unknown"}
        @click=${()=>this.onConnector(t)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${re(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `}onConnector(t){V.setActiveConnector(t),W.push("ConnectingWalletConnect")}};ta([I()],Ys.prototype,"tabIdx",void 0),ta([G()],Ys.prototype,"connectors",void 0),ta([G()],Ys.prototype,"connectorImages",void 0),Ys=ta([Z("w3m-connect-walletconnect-widget")],Ys);var c5=ie`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`,Js=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let ri=class extends K{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.state.connectors,this.recommended=F.state.recommended,this.featured=F.state.featured,this.unsubscribe.push(V.subscribeKey("connectors",t=>this.connectors=t),F.subscribeKey("recommended",t=>this.recommended=t),F.subscribeKey("featured",t=>this.featured=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return C`
      <wui-flex flexDirection="column" gap="xs"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){const{custom:t,recent:e,announced:r,injected:i,multiChain:s,recommended:n,featured:o,external:a}=yr.getConnectorsByType(this.connectors,this.recommended,this.featured);return yr.getConnectorTypeOrder({custom:t,recent:e,announced:r,injected:i,multiChain:s,recommended:n,featured:o,external:a}).map(c=>{switch(c){case"injected":return C`
            ${s.length?C`<w3m-connect-multi-chain-widget
                  tabIdx=${re(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`:null}
            ${r.length?C`<w3m-connect-announced-widget
                  tabIdx=${re(this.tabIdx)}
                ></w3m-connect-announced-widget>`:null}
            ${i.length?C`<w3m-connect-injected-widget
                  .connectors=${i}
                  tabIdx=${re(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return C`<w3m-connect-walletconnect-widget
            tabIdx=${re(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return C`<w3m-connect-recent-widget
            tabIdx=${re(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return C`<w3m-connect-featured-widget
            .wallets=${o}
            tabIdx=${re(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return C`<w3m-connect-custom-widget
            tabIdx=${re(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return C`<w3m-connect-external-widget
            tabIdx=${re(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return C`<w3m-connect-recommended-widget
            .wallets=${n}
            tabIdx=${re(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:return console.warn(`Unknown connector type: ${c}`),null}})}};ri.styles=c5,Js([I()],ri.prototype,"tabIdx",void 0),Js([G()],ri.prototype,"connectors",void 0),Js([G()],ri.prototype,"recommended",void 0),Js([G()],ri.prototype,"featured",void 0),ri=Js([Z("w3m-connector-list")],ri);var l5=ie`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`,Tr=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Yt=class extends K{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((t,e)=>{var i;const r=e===this.activeTab;return C`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(e)}
          data-active=${r}
          data-testid="tab-${(i=t.label)==null?void 0:i.toLowerCase()}"
        >
          ${this.iconTemplate(t)}
          <wui-text variant="small-600" color="inherit"> ${t.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(t){return t.icon?C`<wui-icon size="xs" color="inherit" name=${t.icon}></wui-icon>`:null}onTabClick(t){this.buttons&&this.animateTabs(t,!1),this.activeTab=t,this.onTabChange(t)}animateTabs(t,e){const r=this.buttons[this.activeTab],i=this.buttons[t],s=r==null?void 0:r.querySelector("wui-text"),n=i==null?void 0:i.querySelector("wui-text"),o=i==null?void 0:i.getBoundingClientRect(),a=n==null?void 0:n.getBoundingClientRect();r&&s&&!e&&t!==this.activeTab&&(s.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),i&&o&&a&&n&&(t!==this.activeTab||e)&&(this.localTabWidth=`${Math.round(o.width+a.width)+6}px`,i.animate([{width:`${o.width+a.width}px`}],{duration:e?0:500,fill:"forwards",easing:"ease"}),n.animate([{opacity:1}],{duration:e?0:125,delay:e?0:200,fill:"forwards",easing:"ease"}))}};Yt.styles=[xe,et,l5],Tr([I({type:Array})],Yt.prototype,"tabs",void 0),Tr([I()],Yt.prototype,"onTabChange",void 0),Tr([I({type:Array})],Yt.prototype,"buttons",void 0),Tr([I({type:Boolean})],Yt.prototype,"disabled",void 0),Tr([I()],Yt.prototype,"localTabWidth",void 0),Tr([G()],Yt.prototype,"activeTab",void 0),Tr([G()],Yt.prototype,"isDense",void 0),Yt=Tr([Z("wui-tabs")],Yt);var ra=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Xs=class extends K{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(X.subscribeKey("buffering",t=>this.buffering=t))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.generateTabs();return C`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${t}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const t=this.platforms.map(e=>e==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:e==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:e==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:e==="web"?{label:"Webapp",icon:"browser",platform:"web"}:e==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=t.map(({platform:e})=>e),t}onTabChange(t){var r;const e=this.platformTabs[t];e&&((r=this.onSelectPlatfrom)==null||r.call(this,e))}};ra([I({type:Array})],Xs.prototype,"platforms",void 0),ra([I()],Xs.prototype,"onSelectPlatfrom",void 0),ra([G()],Xs.prototype,"buffering",void 0),Xs=ra([Z("w3m-connecting-header")],Xs);var d5=ie`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`,pl=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Qs=class extends K{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: ${this.color==="inherit"?"inherit":`var(--wui-color-${this.color})`}`,this.dataset.size=this.size,C`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};Qs.styles=[xe,d5],pl([I()],Qs.prototype,"color",void 0),pl([I()],Qs.prototype,"size",void 0),Qs=pl([Z("wui-loading-spinner")],Qs);var u5=ie`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`,Jt=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};const Nh={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},h5={lg:"paragraph-600",md:"small-600"},p5={lg:"md",md:"md"};let Tt=class extends K{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;const t=this.textVariant??h5[this.size];return C`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${t} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const t=p5[this.size],e=this.disabled?Nh.disabled:Nh[this.variant];return C`<wui-loading-spinner color=${e} size=${t}></wui-loading-spinner>`}return C``}};Tt.styles=[xe,et,u5],Jt([I()],Tt.prototype,"size",void 0),Jt([I({type:Boolean})],Tt.prototype,"disabled",void 0),Jt([I({type:Boolean})],Tt.prototype,"fullWidth",void 0),Jt([I({type:Boolean})],Tt.prototype,"loading",void 0),Jt([I()],Tt.prototype,"variant",void 0),Jt([I({type:Boolean})],Tt.prototype,"hasIconLeft",void 0),Jt([I({type:Boolean})],Tt.prototype,"hasIconRight",void 0),Jt([I()],Tt.prototype,"borderRadius",void 0),Jt([I()],Tt.prototype,"textVariant",void 0),Tt=Jt([Z("wui-button")],Tt);var f5=ie`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`,ia=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let ts=class extends K{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return C`
      <button ?disabled=${this.disabled} tabindex=${re(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};ts.styles=[xe,et,f5],ia([I()],ts.prototype,"tabIdx",void 0),ia([I({type:Boolean})],ts.prototype,"disabled",void 0),ia([I()],ts.prototype,"color",void 0),ts=ia([Z("wui-link")],ts);var g5=ie`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,kh=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let sa=class extends K{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const t=this.radius>50?50:this.radius,e=36-t,r=116+e,i=245+e,s=360+e*1.75;return C`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${r} ${i}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};sa.styles=[xe,g5],kh([I({type:Number})],sa.prototype,"radius",void 0),sa=kh([Z("wui-loading-thumbnail")],sa);var w5=ie`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`,ii=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let hr=class extends K{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){const t=this.size==="sm"?"small-600":"paragraph-600";return C`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?C`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${t} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};hr.styles=[xe,et,w5],ii([I()],hr.prototype,"variant",void 0),ii([I()],hr.prototype,"imageSrc",void 0),ii([I({type:Boolean})],hr.prototype,"disabled",void 0),ii([I()],hr.prototype,"icon",void 0),ii([I()],hr.prototype,"size",void 0),ii([I()],hr.prototype,"text",void 0),hr=ii([Z("wui-chip-button")],hr);var m5=ie`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,na=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let rs=class extends K{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return C`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};rs.styles=[xe,et,m5],na([I({type:Boolean})],rs.prototype,"disabled",void 0),na([I()],rs.prototype,"label",void 0),na([I()],rs.prototype,"buttonLabel",void 0),rs=na([Z("wui-cta-button")],rs);var v5=ie`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`,Sh=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let oa=class extends K{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:t,app_store:e,play_store:r,chrome_store:i,homepage:s}=this.wallet,n=z.isMobile(),o=z.isIos(),a=z.isAndroid(),c=[e,r,s,i].filter(Boolean).length>1,l=Ye.getTruncateString({string:t,charsStart:12,charsEnd:0,truncate:"end"});return c&&!n?C`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${()=>W.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!c&&s?C`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:e&&o?C`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&a?C`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var t;(t=this.wallet)!=null&&t.app_store&&z.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var t;(t=this.wallet)!=null&&t.play_store&&z.openHref(this.wallet.play_store,"_blank")}onHomePage(){var t;(t=this.wallet)!=null&&t.homepage&&z.openHref(this.wallet.homepage,"_blank")}};oa.styles=[v5],Sh([I({type:Object})],oa.prototype,"wallet",void 0),oa=Sh([Z("w3m-mobile-download-links")],oa);var b5=ie`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`,zt=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};class Qe extends K{constructor(){var e,r,i,s,n;super(),this.wallet=(e=W.state.data)==null?void 0:e.wallet,this.connector=(r=W.state.data)==null?void 0:r.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=qe.getWalletImage(this.wallet)??qe.getConnectorImage(this.connector),this.name=((i=this.wallet)==null?void 0:i.name)??((s=this.connector)==null?void 0:s.name)??"Wallet",this.isRetrying=!1,this.uri=X.state.wcUri,this.error=X.state.wcError,this.ready=!1,this.showRetry=!1,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.buffering=!1,this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(X.subscribeKey("wcUri",o=>{var a;this.uri=o,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(a=this.onConnect)==null||a.call(this))}),X.subscribeKey("wcError",o=>this.error=o),X.subscribeKey("buffering",o=>this.buffering=o)),(z.isTelegram()||z.isSafari())&&z.isIos()&&X.state.wcUri&&((n=this.onConnect)==null||n.call(this))}firstUpdated(){var e;(e=this.onAutoConnect)==null||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){var i;(i=this.onRender)==null||i.call(this),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let r=`Continue in ${this.name}`;return this.buffering&&(r="Connecting..."),this.error&&(r="Connection declined"),C`
      <wui-flex
        data-error=${re(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${re(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${r}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?C`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying||!this.error&&this.buffering||this.isLoading}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `:null}
      </wui-flex>

      ${this.isWalletConnect?C`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){var e,r;this.error&&!this.showRetry&&(this.showRetry=!0,(r=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button"))==null||r.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){var e,r;this.buffering||(X.setWcError(!1),this.onRetry?(this.isRetrying=!0,(e=this.onRetry)==null||e.call(this)):(r=this.onConnect)==null||r.call(this))}loaderTemplate(){const e=ze.state.themeVariables["--w3m-border-radius-master"],r=e?parseInt(e.replace("px",""),10):4;return C`<wui-loading-thumbnail radius=${r*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(z.copyToClopboard(this.uri),_e.showSuccess("Link copied"))}catch{_e.showError("Failed to copy")}}}Qe.styles=b5,zt([G()],Qe.prototype,"isRetrying",void 0),zt([G()],Qe.prototype,"uri",void 0),zt([G()],Qe.prototype,"error",void 0),zt([G()],Qe.prototype,"ready",void 0),zt([G()],Qe.prototype,"showRetry",void 0),zt([G()],Qe.prototype,"secondaryBtnLabel",void 0),zt([G()],Qe.prototype,"secondaryLabel",void 0),zt([G()],Qe.prototype,"buffering",void 0),zt([G()],Qe.prototype,"isLoading",void 0),zt([I({type:Boolean})],Qe.prototype,"isMobile",void 0),zt([I()],Qe.prototype,"onRetry",void 0);var y5=function(t,e,r,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let _h=class extends Qe{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),he.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){var t;try{this.error=!1;const{connectors:e}=V.state,r=e.find(i=>{var s,n,o;return i.type==="ANNOUNCED"&&((s=i.info)==null?void 0:s.rdns)===((n=this.wallet)==null?void 0:n.rdns)||i.type==="INJECTED"||i.name===((o=this.wallet)==null?void 0:o.name)});if(r)await X.connectExternal(r,r.chain);else throw new Error("w3m-connecting-wc-browser: No connector found");ve.close(),he.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:((t=this.wallet)==null?void 0:t.name)||"Unknown"}})}catch(e){he.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}};_h=y5([Z("w3m-connecting-wc-browser")],_h);var C5=function(t,e,r,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Ph=class extends Qe{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),he.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){var t;!this.ready&&this.uri&&(this.ready=!0,(t=this.onConnect)==null||t.call(this))}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:e,name:r}=this.wallet,{redirect:i,href:s}=z.formatNativeUrl(e,this.uri);X.setWcLinking({name:r,href:s}),X.setRecentWallet(this.wallet),z.openHref(i,"_blank")}catch{this.error=!0}}};Ph=C5([Z("w3m-connecting-wc-desktop")],Ph);var x5=function(t,e,r,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Th=class extends Qe{constructor(){if(super(),this.btnLabelTimeout=void 0,this.labelTimeout=void 0,this.onRender=()=>{var t;!this.ready&&this.uri&&(this.ready=!0,(t=this.onConnect)==null||t.call(this))},this.onConnect=()=>{var t;if((t=this.wallet)!=null&&t.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:e,name:r}=this.wallet,{redirect:i,href:s}=z.formatNativeUrl(e,this.uri);X.setWcLinking({name:r,href:s}),X.setRecentWallet(this.wallet);const n=z.isIframe()?"_top":"_self";z.openHref(i,n),clearTimeout(this.labelTimeout),this.secondaryLabel=He.CONNECT_LABELS.MOBILE}catch(e){he.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:e instanceof Error?e.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.initializeStateAndTimers(),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),he.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this)),clearTimeout(this.btnLabelTimeout),clearTimeout(this.labelTimeout)}initializeStateAndTimers(){this.secondaryBtnLabel=void 0,this.secondaryLabel=He.CONNECT_LABELS.MOBILE,this.btnLabelTimeout=setTimeout(()=>{this.secondaryBtnLabel="Try again",this.secondaryLabel=He.CONNECT_LABELS.MOBILE},He.FIVE_SEC_MS),this.labelTimeout=setTimeout(()=>{this.secondaryLabel="Hold tight... it's taking longer than expected"},He.THREE_SEC_MS)}onBuffering(){const t=z.isIos();(document==null?void 0:document.visibilityState)==="visible"&&!this.error&&t&&(X.setBuffering(!0),setTimeout(()=>{X.setBuffering(!1)},5e3))}onTryAgain(){this.buffering||(clearTimeout(this.btnLabelTimeout),clearTimeout(this.labelTimeout),this.initializeStateAndTimers(),X.setWcError(!1),this.onConnect())}};Th=x5([Z("w3m-connecting-wc-mobile")],Th);var gn={},E5=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},W0={},Et={};let fl;const I5=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];Et.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17},Et.getSymbolTotalCodewords=function(t){return I5[t]},Et.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e},Et.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');fl=t},Et.isKanjiModeEnabled=function(){return typeof fl<"u"},Et.toSJIS=function(t){return fl(t)};var Xa={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+r)}}t.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},t.from=function(r,i){if(t.isValid(r))return r;try{return e(r)}catch{return i}}})(Xa);function F0(){this.buffer=[],this.length=0}F0.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let r=0;r<e;r++)this.putBit((t>>>e-r-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var A5=F0;function wn(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}wn.prototype.set=function(t,e,r,i){const s=t*this.size+e;this.data[s]=r,i&&(this.reservedBit[s]=!0)},wn.prototype.get=function(t,e){return this.data[t*this.size+e]},wn.prototype.xor=function(t,e,r){this.data[t*this.size+e]^=r},wn.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var N5=wn,V0={};(function(t){const e=Et.getSymbolSize;t.getRowColCoords=function(r){if(r===1)return[];const i=Math.floor(r/7)+2,s=e(r),n=s===145?26:Math.ceil((s-13)/(2*i-2))*2,o=[s-7];for(let a=1;a<i-1;a++)o[a]=o[a-1]-n;return o.push(6),o.reverse()},t.getPositions=function(r){const i=[],s=t.getRowColCoords(r),n=s.length;for(let o=0;o<n;o++)for(let a=0;a<n;a++)o===0&&a===0||o===0&&a===n-1||o===n-1&&a===0||i.push([s[o],s[a]]);return i}})(V0);var G0={};const k5=Et.getSymbolSize,Oh=7;G0.getPositions=function(t){const e=k5(t);return[[0,0],[e-Oh,0],[0,e-Oh]]};var Z0={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},t.from=function(i){return t.isValid(i)?parseInt(i,10):void 0},t.getPenaltyN1=function(i){const s=i.size;let n=0,o=0,a=0,c=null,l=null;for(let d=0;d<s;d++){o=a=0,c=l=null;for(let u=0;u<s;u++){let h=i.get(d,u);h===c?o++:(o>=5&&(n+=e.N1+(o-5)),c=h,o=1),h=i.get(u,d),h===l?a++:(a>=5&&(n+=e.N1+(a-5)),l=h,a=1)}o>=5&&(n+=e.N1+(o-5)),a>=5&&(n+=e.N1+(a-5))}return n},t.getPenaltyN2=function(i){const s=i.size;let n=0;for(let o=0;o<s-1;o++)for(let a=0;a<s-1;a++){const c=i.get(o,a)+i.get(o,a+1)+i.get(o+1,a)+i.get(o+1,a+1);(c===4||c===0)&&n++}return n*e.N2},t.getPenaltyN3=function(i){const s=i.size;let n=0,o=0,a=0;for(let c=0;c<s;c++){o=a=0;for(let l=0;l<s;l++)o=o<<1&2047|i.get(c,l),l>=10&&(o===1488||o===93)&&n++,a=a<<1&2047|i.get(l,c),l>=10&&(a===1488||a===93)&&n++}return n*e.N3},t.getPenaltyN4=function(i){let s=0;const n=i.data.length;for(let o=0;o<n;o++)s+=i.data[o];return Math.abs(Math.ceil(s*100/n/5)-10)*e.N4};function r(i,s,n){switch(i){case t.Patterns.PATTERN000:return(s+n)%2===0;case t.Patterns.PATTERN001:return s%2===0;case t.Patterns.PATTERN010:return n%3===0;case t.Patterns.PATTERN011:return(s+n)%3===0;case t.Patterns.PATTERN100:return(Math.floor(s/2)+Math.floor(n/3))%2===0;case t.Patterns.PATTERN101:return s*n%2+s*n%3===0;case t.Patterns.PATTERN110:return(s*n%2+s*n%3)%2===0;case t.Patterns.PATTERN111:return(s*n%3+(s+n)%2)%2===0;default:throw new Error("bad maskPattern:"+i)}}t.applyMask=function(i,s){const n=s.size;for(let o=0;o<n;o++)for(let a=0;a<n;a++)s.isReserved(a,o)||s.xor(a,o,r(i,a,o))},t.getBestMask=function(i,s){const n=Object.keys(t.Patterns).length;let o=0,a=1/0;for(let c=0;c<n;c++){s(c),t.applyMask(c,i);const l=t.getPenaltyN1(i)+t.getPenaltyN2(i)+t.getPenaltyN3(i)+t.getPenaltyN4(i);t.applyMask(c,i),l<a&&(a=l,o=c)}return o}})(Z0);var Ma={};const Or=Xa,aa=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],ca=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Ma.getBlocksCount=function(t,e){switch(e){case Or.L:return aa[(t-1)*4+0];case Or.M:return aa[(t-1)*4+1];case Or.Q:return aa[(t-1)*4+2];case Or.H:return aa[(t-1)*4+3];default:return}},Ma.getTotalCodewordsCount=function(t,e){switch(e){case Or.L:return ca[(t-1)*4+0];case Or.M:return ca[(t-1)*4+1];case Or.Q:return ca[(t-1)*4+2];case Or.H:return ca[(t-1)*4+3];default:return}};var K0={},la={};const en=new Uint8Array(512),da=new Uint8Array(256);(function(){let t=1;for(let e=0;e<255;e++)en[e]=t,da[t]=e,t<<=1,t&256&&(t^=285);for(let e=255;e<512;e++)en[e]=en[e-255]})(),la.log=function(t){if(t<1)throw new Error("log("+t+")");return da[t]},la.exp=function(t){return en[t]},la.mul=function(t,e){return t===0||e===0?0:en[da[t]+da[e]]},function(t){const e=la;t.mul=function(r,i){const s=new Uint8Array(r.length+i.length-1);for(let n=0;n<r.length;n++)for(let o=0;o<i.length;o++)s[n+o]^=e.mul(r[n],i[o]);return s},t.mod=function(r,i){let s=new Uint8Array(r);for(;s.length-i.length>=0;){const n=s[0];for(let a=0;a<i.length;a++)s[a]^=e.mul(i[a],n);let o=0;for(;o<s.length&&s[o]===0;)o++;s=s.slice(o)}return s},t.generateECPolynomial=function(r){let i=new Uint8Array([1]);for(let s=0;s<r;s++)i=t.mul(i,new Uint8Array([1,e.exp(s)]));return i}}(K0);const $h=K0;function ed(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}ed.prototype.initialize=function(t){this.degree=t,this.genPoly=$h.generateECPolynomial(this.degree)},ed.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const e=new Uint8Array(t.length+this.degree);e.set(t);const r=$h.mod(e,this.genPoly),i=this.degree-r.length;if(i>0){const s=new Uint8Array(this.degree);return s.set(r,i),s}return r};var S5=ed,Y0={},Wr={},td={};td.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var rr={};const J0="[0-9]+",_5="[A-Z $%*+\\-./:]+";let Xn="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Xn=Xn.replace(/u/g,"\\u");const P5="(?:(?![A-Z0-9 $%*+\\-./:]|"+Xn+`)(?:.|[\r
]))+`;rr.KANJI=new RegExp(Xn,"g"),rr.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),rr.BYTE=new RegExp(P5,"g"),rr.NUMERIC=new RegExp(J0,"g"),rr.ALPHANUMERIC=new RegExp(_5,"g");const T5=new RegExp("^"+Xn+"$"),O5=new RegExp("^"+J0+"$"),$5=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");rr.testKanji=function(t){return T5.test(t)},rr.testNumeric=function(t){return O5.test(t)},rr.testAlphanumeric=function(t){return $5.test(t)},function(t){const e=td,r=rr;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(s,n){if(!s.ccBits)throw new Error("Invalid mode: "+s);if(!e.isValid(n))throw new Error("Invalid version: "+n);return n>=1&&n<10?s.ccBits[0]:n<27?s.ccBits[1]:s.ccBits[2]},t.getBestModeForData=function(s){return r.testNumeric(s)?t.NUMERIC:r.testAlphanumeric(s)?t.ALPHANUMERIC:r.testKanji(s)?t.KANJI:t.BYTE},t.toString=function(s){if(s&&s.id)return s.id;throw new Error("Invalid mode")},t.isValid=function(s){return s&&s.bit&&s.ccBits};function i(s){if(typeof s!="string")throw new Error("Param is not a string");switch(s.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+s)}}t.from=function(s,n){if(t.isValid(s))return s;try{return i(s)}catch{return n}}}(Wr),function(t){const e=Et,r=Ma,i=Xa,s=Wr,n=td,o=7973,a=e.getBCHDigit(o);function c(h,p,w){for(let f=1;f<=40;f++)if(p<=t.getCapacity(f,w,h))return f}function l(h,p){return s.getCharCountIndicator(h,p)+4}function d(h,p){let w=0;return h.forEach(function(f){const m=l(f.mode,p);w+=m+f.getBitsLength()}),w}function u(h,p){for(let w=1;w<=40;w++)if(d(h,w)<=t.getCapacity(w,p,s.MIXED))return w}t.from=function(h,p){return n.isValid(h)?parseInt(h,10):p},t.getCapacity=function(h,p,w){if(!n.isValid(h))throw new Error("Invalid QR Code version");typeof w>"u"&&(w=s.BYTE);const f=e.getSymbolTotalCodewords(h),m=r.getTotalCodewordsCount(h,p),v=(f-m)*8;if(w===s.MIXED)return v;const x=v-l(w,h);switch(w){case s.NUMERIC:return Math.floor(x/10*3);case s.ALPHANUMERIC:return Math.floor(x/11*2);case s.KANJI:return Math.floor(x/13);case s.BYTE:default:return Math.floor(x/8)}},t.getBestVersionForData=function(h,p){let w;const f=i.from(p,i.M);if(Array.isArray(h)){if(h.length>1)return u(h,f);if(h.length===0)return 1;w=h[0]}else w=h;return c(w.mode,w.getLength(),f)},t.getEncodedBits=function(h){if(!n.isValid(h)||h<7)throw new Error("Invalid QR Code version");let p=h<<12;for(;e.getBCHDigit(p)-a>=0;)p^=o<<e.getBCHDigit(p)-a;return h<<12|p}}(Y0);var X0={};const rd=Et,Q0=1335,R5=21522,Rh=rd.getBCHDigit(Q0);X0.getEncodedBits=function(t,e){const r=t.bit<<3|e;let i=r<<10;for(;rd.getBCHDigit(i)-Rh>=0;)i^=Q0<<rd.getBCHDigit(i)-Rh;return(r<<10|i)^R5};var e1={};const L5=Wr;function cs(t){this.mode=L5.NUMERIC,this.data=t.toString()}cs.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},cs.prototype.getLength=function(){return this.data.length},cs.prototype.getBitsLength=function(){return cs.getBitsLength(this.data.length)},cs.prototype.write=function(t){let e,r,i;for(e=0;e+3<=this.data.length;e+=3)r=this.data.substr(e,3),i=parseInt(r,10),t.put(i,10);const s=this.data.length-e;s>0&&(r=this.data.substr(e),i=parseInt(r,10),t.put(i,s*3+1))};var M5=cs;const B5=Wr,gl=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function ls(t){this.mode=B5.ALPHANUMERIC,this.data=t}ls.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)},ls.prototype.getLength=function(){return this.data.length},ls.prototype.getBitsLength=function(){return ls.getBitsLength(this.data.length)},ls.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let r=gl.indexOf(this.data[e])*45;r+=gl.indexOf(this.data[e+1]),t.put(r,11)}this.data.length%2&&t.put(gl.indexOf(this.data[e]),6)};var U5=ls,D5=function(t){for(var e=[],r=t.length,i=0;i<r;i++){var s=t.charCodeAt(i);if(s>=55296&&s<=56319&&r>i+1){var n=t.charCodeAt(i+1);n>=56320&&n<=57343&&(s=(s-55296)*1024+n-56320+65536,i+=1)}if(s<128){e.push(s);continue}if(s<2048){e.push(s>>6|192),e.push(s&63|128);continue}if(s<55296||s>=57344&&s<65536){e.push(s>>12|224),e.push(s>>6&63|128),e.push(s&63|128);continue}if(s>=65536&&s<=1114111){e.push(s>>18|240),e.push(s>>12&63|128),e.push(s>>6&63|128),e.push(s&63|128);continue}e.push(239,191,189)}return new Uint8Array(e).buffer};const j5=D5,z5=Wr;function ds(t){this.mode=z5.BYTE,typeof t=="string"&&(t=j5(t)),this.data=new Uint8Array(t)}ds.getBitsLength=function(t){return t*8},ds.prototype.getLength=function(){return this.data.length},ds.prototype.getBitsLength=function(){return ds.getBitsLength(this.data.length)},ds.prototype.write=function(t){for(let e=0,r=this.data.length;e<r;e++)t.put(this.data[e],8)};var H5=ds;const q5=Wr,W5=Et;function us(t){this.mode=q5.KANJI,this.data=t}us.getBitsLength=function(t){return t*13},us.prototype.getLength=function(){return this.data.length},us.prototype.getBitsLength=function(){return us.getBitsLength(this.data.length)},us.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let r=W5.toSJIS(this.data[e]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);r=(r>>>8&255)*192+(r&255),t.put(r,13)}};var F5=us,Lh={exports:{}};(function(t){var e={single_source_shortest_paths:function(r,i,s){var n={},o={};o[i]=0;var a=e.PriorityQueue.make();a.push(i,0);for(var c,l,d,u,h,p,w,f,m;!a.empty();){c=a.pop(),l=c.value,u=c.cost,h=r[l]||{};for(d in h)h.hasOwnProperty(d)&&(p=h[d],w=u+p,f=o[d],m=typeof o[d]>"u",(m||f>w)&&(o[d]=w,a.push(d,w),n[d]=l))}if(typeof s<"u"&&typeof o[s]>"u"){var v=["Could not find a path from ",i," to ",s,"."].join("");throw new Error(v)}return n},extract_shortest_path_from_predecessor_list:function(r,i){for(var s=[],n=i;n;)s.push(n),r[n],n=r[n];return s.reverse(),s},find_path:function(r,i,s){var n=e.single_source_shortest_paths(r,i,s);return e.extract_shortest_path_from_predecessor_list(n,s)},PriorityQueue:{make:function(r){var i=e.PriorityQueue,s={},n;r=r||{};for(n in i)i.hasOwnProperty(n)&&(s[n]=i[n]);return s.queue=[],s.sorter=r.sorter||i.default_sorter,s},default_sorter:function(r,i){return r.cost-i.cost},push:function(r,i){var s={value:r,cost:i};this.queue.push(s),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(Lh),function(t){const e=Wr,r=M5,i=U5,s=H5,n=F5,o=rr,a=Et,c=Lh.exports;function l(v){return unescape(encodeURIComponent(v)).length}function d(v,x,E){const A=[];let k;for(;(k=v.exec(E))!==null;)A.push({data:k[0],index:k.index,mode:x,length:k[0].length});return A}function u(v){const x=d(o.NUMERIC,e.NUMERIC,v),E=d(o.ALPHANUMERIC,e.ALPHANUMERIC,v);let A,k;return a.isKanjiModeEnabled()?(A=d(o.BYTE,e.BYTE,v),k=d(o.KANJI,e.KANJI,v)):(A=d(o.BYTE_KANJI,e.BYTE,v),k=[]),x.concat(E,A,k).sort(function(T,j){return T.index-j.index}).map(function(T){return{data:T.data,mode:T.mode,length:T.length}})}function h(v,x){switch(x){case e.NUMERIC:return r.getBitsLength(v);case e.ALPHANUMERIC:return i.getBitsLength(v);case e.KANJI:return n.getBitsLength(v);case e.BYTE:return s.getBitsLength(v)}}function p(v){return v.reduce(function(x,E){const A=x.length-1>=0?x[x.length-1]:null;return A&&A.mode===E.mode?(x[x.length-1].data+=E.data,x):(x.push(E),x)},[])}function w(v){const x=[];for(let E=0;E<v.length;E++){const A=v[E];switch(A.mode){case e.NUMERIC:x.push([A,{data:A.data,mode:e.ALPHANUMERIC,length:A.length},{data:A.data,mode:e.BYTE,length:A.length}]);break;case e.ALPHANUMERIC:x.push([A,{data:A.data,mode:e.BYTE,length:A.length}]);break;case e.KANJI:x.push([A,{data:A.data,mode:e.BYTE,length:l(A.data)}]);break;case e.BYTE:x.push([{data:A.data,mode:e.BYTE,length:l(A.data)}])}}return x}function f(v,x){const E={},A={start:{}};let k=["start"];for(let T=0;T<v.length;T++){const j=v[T],M=[];for(let _=0;_<j.length;_++){const U=j[_],D=""+T+_;M.push(D),E[D]={node:U,lastCount:0},A[D]={};for(let Q=0;Q<k.length;Q++){const pe=k[Q];E[pe]&&E[pe].node.mode===U.mode?(A[pe][D]=h(E[pe].lastCount+U.length,U.mode)-h(E[pe].lastCount,U.mode),E[pe].lastCount+=U.length):(E[pe]&&(E[pe].lastCount=U.length),A[pe][D]=h(U.length,U.mode)+4+e.getCharCountIndicator(U.mode,x))}}k=M}for(let T=0;T<k.length;T++)A[k[T]].end=0;return{map:A,table:E}}function m(v,x){let E;const A=e.getBestModeForData(v);if(E=e.from(x,A),E!==e.BYTE&&E.bit<A.bit)throw new Error('"'+v+'" cannot be encoded with mode '+e.toString(E)+`.
 Suggested mode is: `+e.toString(A));switch(E===e.KANJI&&!a.isKanjiModeEnabled()&&(E=e.BYTE),E){case e.NUMERIC:return new r(v);case e.ALPHANUMERIC:return new i(v);case e.KANJI:return new n(v);case e.BYTE:return new s(v)}}t.fromArray=function(v){return v.reduce(function(x,E){return typeof E=="string"?x.push(m(E,null)):E.data&&x.push(m(E.data,E.mode)),x},[])},t.fromString=function(v,x){const E=u(v,a.isKanjiModeEnabled()),A=w(E),k=f(A,x),T=c.find_path(k.map,"start","end"),j=[];for(let M=1;M<T.length-1;M++)j.push(k.table[T[M]].node);return t.fromArray(p(j))},t.rawSplit=function(v){return t.fromArray(u(v,a.isKanjiModeEnabled()))}}(e1);const Qa=Et,wl=Xa,V5=A5,G5=N5,Z5=V0,K5=G0,id=Z0,sd=Ma,Y5=S5,Ba=Y0,J5=X0,X5=Wr,ml=e1;function Q5(t,e){const r=t.size,i=K5.getPositions(e);for(let s=0;s<i.length;s++){const n=i[s][0],o=i[s][1];for(let a=-1;a<=7;a++)if(!(n+a<=-1||r<=n+a))for(let c=-1;c<=7;c++)o+c<=-1||r<=o+c||(a>=0&&a<=6&&(c===0||c===6)||c>=0&&c<=6&&(a===0||a===6)||a>=2&&a<=4&&c>=2&&c<=4?t.set(n+a,o+c,!0,!0):t.set(n+a,o+c,!1,!0))}}function ey(t){const e=t.size;for(let r=8;r<e-8;r++){const i=r%2===0;t.set(r,6,i,!0),t.set(6,r,i,!0)}}function ty(t,e){const r=Z5.getPositions(e);for(let i=0;i<r.length;i++){const s=r[i][0],n=r[i][1];for(let o=-2;o<=2;o++)for(let a=-2;a<=2;a++)o===-2||o===2||a===-2||a===2||o===0&&a===0?t.set(s+o,n+a,!0,!0):t.set(s+o,n+a,!1,!0)}}function ry(t,e){const r=t.size,i=Ba.getEncodedBits(e);let s,n,o;for(let a=0;a<18;a++)s=Math.floor(a/3),n=a%3+r-8-3,o=(i>>a&1)===1,t.set(s,n,o,!0),t.set(n,s,o,!0)}function vl(t,e,r){const i=t.size,s=J5.getEncodedBits(e,r);let n,o;for(n=0;n<15;n++)o=(s>>n&1)===1,n<6?t.set(n,8,o,!0):n<8?t.set(n+1,8,o,!0):t.set(i-15+n,8,o,!0),n<8?t.set(8,i-n-1,o,!0):n<9?t.set(8,15-n-1+1,o,!0):t.set(8,15-n-1,o,!0);t.set(i-8,8,1,!0)}function iy(t,e){const r=t.size;let i=-1,s=r-1,n=7,o=0;for(let a=r-1;a>0;a-=2)for(a===6&&a--;;){for(let c=0;c<2;c++)if(!t.isReserved(s,a-c)){let l=!1;o<e.length&&(l=(e[o]>>>n&1)===1),t.set(s,a-c,l),n--,n===-1&&(o++,n=7)}if(s+=i,s<0||r<=s){s-=i,i=-i;break}}}function sy(t,e,r){const i=new V5;r.forEach(function(c){i.put(c.mode.bit,4),i.put(c.getLength(),X5.getCharCountIndicator(c.mode,t)),c.write(i)});const s=Qa.getSymbolTotalCodewords(t),n=sd.getTotalCodewordsCount(t,e),o=(s-n)*8;for(i.getLengthInBits()+4<=o&&i.put(0,4);i.getLengthInBits()%8!==0;)i.putBit(0);const a=(o-i.getLengthInBits())/8;for(let c=0;c<a;c++)i.put(c%2?17:236,8);return ny(i,t,e)}function ny(t,e,r){const i=Qa.getSymbolTotalCodewords(e),s=sd.getTotalCodewordsCount(e,r),n=i-s,o=sd.getBlocksCount(e,r),a=i%o,c=o-a,l=Math.floor(i/o),d=Math.floor(n/o),u=d+1,h=l-d,p=new Y5(h);let w=0;const f=new Array(o),m=new Array(o);let v=0;const x=new Uint8Array(t.buffer);for(let j=0;j<o;j++){const M=j<c?d:u;f[j]=x.slice(w,w+M),m[j]=p.encode(f[j]),w+=M,v=Math.max(v,M)}const E=new Uint8Array(i);let A=0,k,T;for(k=0;k<v;k++)for(T=0;T<o;T++)k<f[T].length&&(E[A++]=f[T][k]);for(k=0;k<h;k++)for(T=0;T<o;T++)E[A++]=m[T][k];return E}function oy(t,e,r,i){let s;if(Array.isArray(t))s=ml.fromArray(t);else if(typeof t=="string"){let l=e;if(!l){const d=ml.rawSplit(t);l=Ba.getBestVersionForData(d,r)}s=ml.fromString(t,l||40)}else throw new Error("Invalid data");const n=Ba.getBestVersionForData(s,r);if(!n)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=n;else if(e<n)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+n+`.
`);const o=sy(e,r,s),a=Qa.getSymbolSize(e),c=new G5(a);return Q5(c,e),ey(c),ty(c,e),vl(c,r,0),e>=7&&ry(c,e),iy(c,o),isNaN(i)&&(i=id.getBestMask(c,vl.bind(null,c,r))),id.applyMask(i,c),vl(c,r,i),{modules:c,version:e,errorCorrectionLevel:r,maskPattern:i,segments:s}}W0.create=function(t,e){if(typeof t>"u"||t==="")throw new Error("No input text");let r=wl.M,i,s;return typeof e<"u"&&(r=wl.from(e.errorCorrectionLevel,wl.M),i=Ba.from(e.version),s=id.from(e.maskPattern),e.toSJISFunc&&Qa.setToSJISFunction(e.toSJISFunc)),oy(t,i,r,s)};var t1={},nd={};(function(t){function e(r){if(typeof r=="number"&&(r=r.toString()),typeof r!="string")throw new Error("Color should be defined as hex string");let i=r.slice().replace("#","").split("");if(i.length<3||i.length===5||i.length>8)throw new Error("Invalid hex color: "+r);(i.length===3||i.length===4)&&(i=Array.prototype.concat.apply([],i.map(function(n){return[n,n]}))),i.length===6&&i.push("F","F");const s=parseInt(i.join(""),16);return{r:s>>24&255,g:s>>16&255,b:s>>8&255,a:s&255,hex:"#"+i.slice(0,6).join("")}}t.getOptions=function(r){r||(r={}),r.color||(r.color={});const i=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,s=r.width&&r.width>=21?r.width:void 0,n=r.scale||4;return{width:s,scale:s?4:n,margin:i,color:{dark:e(r.color.dark||"#000000ff"),light:e(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},t.getScale=function(r,i){return i.width&&i.width>=r+i.margin*2?i.width/(r+i.margin*2):i.scale},t.getImageWidth=function(r,i){const s=t.getScale(r,i);return Math.floor((r+i.margin*2)*s)},t.qrToImageData=function(r,i,s){const n=i.modules.size,o=i.modules.data,a=t.getScale(n,s),c=Math.floor((n+s.margin*2)*a),l=s.margin*a,d=[s.color.light,s.color.dark];for(let u=0;u<c;u++)for(let h=0;h<c;h++){let p=(u*c+h)*4,w=s.color.light;if(u>=l&&h>=l&&u<c-l&&h<c-l){const f=Math.floor((u-l)/a),m=Math.floor((h-l)/a);w=d[o[f*n+m]?1:0]}r[p++]=w.r,r[p++]=w.g,r[p++]=w.b,r[p]=w.a}}})(nd),function(t){const e=nd;function r(s,n,o){s.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=o,n.width=o,n.style.height=o+"px",n.style.width=o+"px"}function i(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(s,n,o){let a=o,c=n;typeof a>"u"&&(!n||!n.getContext)&&(a=n,n=void 0),n||(c=i()),a=e.getOptions(a);const l=e.getImageWidth(s.modules.size,a),d=c.getContext("2d"),u=d.createImageData(l,l);return e.qrToImageData(u.data,s,a),r(d,c,l),d.putImageData(u,0,0),c},t.renderToDataURL=function(s,n,o){let a=o;typeof a>"u"&&(!n||!n.getContext)&&(a=n,n=void 0),a||(a={});const c=t.render(s,n,a),l=a.type||"image/png",d=a.rendererOpts||{};return c.toDataURL(l,d.quality)}}(t1);var r1={};const ay=nd;function Mh(t,e){const r=t.a/255,i=e+'="'+t.hex+'"';return r<1?i+" "+e+'-opacity="'+r.toFixed(2).slice(1)+'"':i}function bl(t,e,r){let i=t+e;return typeof r<"u"&&(i+=" "+r),i}function cy(t,e,r){let i="",s=0,n=!1,o=0;for(let a=0;a<t.length;a++){const c=Math.floor(a%e),l=Math.floor(a/e);!c&&!n&&(n=!0),t[a]?(o++,a>0&&c>0&&t[a-1]||(i+=n?bl("M",c+r,.5+l+r):bl("m",s,0),s=0,n=!1),c+1<e&&t[a+1]||(i+=bl("h",o),o=0)):s++}return i}r1.render=function(t,e,r){const i=ay.getOptions(e),s=t.modules.size,n=t.modules.data,o=s+i.margin*2,a=i.color.light.a?"<path "+Mh(i.color.light,"fill")+' d="M0 0h'+o+"v"+o+'H0z"/>':"",c="<path "+Mh(i.color.dark,"stroke")+' d="'+cy(n,s,i.margin)+'"/>',l='viewBox="0 0 '+o+" "+o+'"',d='<svg xmlns="http://www.w3.org/2000/svg" '+(i.width?'width="'+i.width+'" height="'+i.width+'" ':"")+l+' shape-rendering="crispEdges">'+a+c+`</svg>
`;return typeof r=="function"&&r(null,d),d};const ly=E5,od=W0,Bh=t1,dy=r1;function yl(t,e,r,i,s){const n=[].slice.call(arguments,1),o=n.length,a=typeof n[o-1]=="function";if(!a&&!ly())throw new Error("Callback required as last argument");if(a){if(o<2)throw new Error("Too few arguments provided");o===2?(s=r,r=e,e=i=void 0):o===3&&(e.getContext&&typeof s>"u"?(s=i,i=void 0):(s=i,i=r,r=e,e=void 0))}else{if(o<1)throw new Error("Too few arguments provided");return o===1?(r=e,e=i=void 0):o===2&&!e.getContext&&(i=r,r=e,e=void 0),new Promise(function(c,l){try{const d=od.create(r,i);c(t(d,e,i))}catch(d){l(d)}})}try{const c=od.create(r,i);s(null,t(c,e,i))}catch(c){s(c)}}gn.create=od.create,gn.toCanvas=yl.bind(null,Bh.render),gn.toDataURL=yl.bind(null,Bh.renderToDataURL),gn.toString=yl.bind(null,function(t,e,r){return dy.render(t,r)});const uy=.1,Uh=2.5,pr=7;function Cl(t,e,r){return t===e?!1:(t-e<0?e-t:t-e)<=r+uy}function hy(t,e){const r=Array.prototype.slice.call(gn.create(t,{errorCorrectionLevel:e}).modules.data,0),i=Math.sqrt(r.length);return r.reduce((s,n,o)=>(o%i===0?s.push([n]):s[s.length-1].push(n))&&s,[])}const py={generate({uri:t,size:e,logoSize:r,dotColor:i="#141414"}){const s="transparent",n=[],o=hy(t,"Q"),a=e/o.length,c=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];c.forEach(({x:w,y:f})=>{const m=(o.length-pr)*a*w,v=(o.length-pr)*a*f,x=.45;for(let E=0;E<c.length;E+=1){const A=a*(pr-E*2);n.push(H`
            <rect
              fill=${E===2?i:s}
              width=${E===0?A-5:A}
              rx= ${E===0?(A-5)*x:A*x}
              ry= ${E===0?(A-5)*x:A*x}
              stroke=${i}
              stroke-width=${E===0?5:0}
              height=${E===0?A-5:A}
              x= ${E===0?v+a*E+5/2:v+a*E}
              y= ${E===0?m+a*E+5/2:m+a*E}
            />
          `)}});const l=Math.floor((r+25)/a),d=o.length/2-l/2,u=o.length/2+l/2-1,h=[];o.forEach((w,f)=>{w.forEach((m,v)=>{if(o[f][v]&&!(f<pr&&v<pr||f>o.length-(pr+1)&&v<pr||f<pr&&v>o.length-(pr+1))&&!(f>d&&f<u&&v>d&&v<u)){const x=f*a+a/2,E=v*a+a/2;h.push([x,E])}})});const p={};return h.forEach(([w,f])=>{var m;p[w]?(m=p[w])==null||m.push(f):p[w]=[f]}),Object.entries(p).map(([w,f])=>{const m=f.filter(v=>f.every(x=>!Cl(v,x,a)));return[Number(w),m]}).forEach(([w,f])=>{f.forEach(m=>{n.push(H`<circle cx=${w} cy=${m} fill=${i} r=${a/Uh} />`)})}),Object.entries(p).filter(([w,f])=>f.length>1).map(([w,f])=>{const m=f.filter(v=>f.some(x=>Cl(v,x,a)));return[Number(w),m]}).map(([w,f])=>{f.sort((v,x)=>v<x?-1:1);const m=[];for(const v of f){const x=m.find(E=>E.some(A=>Cl(v,A,a)));x?x.push(v):m.push([v])}return[w,m.map(v=>[v[0],v[v.length-1]])]}).forEach(([w,f])=>{f.forEach(([m,v])=>{n.push(H`
              <line
                x1=${w}
                x2=${w}
                y1=${m}
                y2=${v}
                stroke=${i}
                stroke-width=${a/(Uh/2)}
                stroke-linecap="round"
              />
            `)})}),n}};var fy=ie`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: var(--local-icon-color) !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`,fr=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};const gy="#3396ff";let Ht=class extends K{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`
     --local-size: ${this.size}px;
     --local-icon-color: ${this.color??gy}
    `,C`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const t=this.theme==="light"?this.size:this.size-32;return H`
      <svg height=${t} width=${t}>
        ${py.generate({uri:this.uri,size:t,logoSize:this.arenaClear?0:t/4,dotColor:this.color})}
      </svg>
    `}templateVisual(){return this.imageSrc?C`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?C`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:C`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};Ht.styles=[xe,fy],fr([I()],Ht.prototype,"uri",void 0),fr([I({type:Number})],Ht.prototype,"size",void 0),fr([I()],Ht.prototype,"theme",void 0),fr([I()],Ht.prototype,"imageSrc",void 0),fr([I()],Ht.prototype,"alt",void 0),fr([I()],Ht.prototype,"color",void 0),fr([I({type:Boolean})],Ht.prototype,"arenaClear",void 0),fr([I({type:Boolean})],Ht.prototype,"farcaster",void 0),Ht=fr([Z("wui-qr-code")],Ht);var wy=ie`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`,tn=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let si=class extends K{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,C`<slot></slot>`}};si.styles=[wy],tn([I()],si.prototype,"width",void 0),tn([I()],si.prototype,"height",void 0),tn([I()],si.prototype,"borderRadius",void 0),tn([I()],si.prototype,"variant",void 0),si=tn([Z("wui-shimmer")],si);var my=ie`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }
`,vy=function(t,e,r,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let xl=class extends K{render(){return C`
      <wui-flex
        justifyContent="center"
        alignItems="center"
        gap="xs"
        .padding=${["0","0","l","0"]}
      >
        <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
        <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
      </wui-flex>
    `}};xl.styles=[xe,et,my],xl=vy([Z("wui-ux-by-reown")],xl);var by=ie`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`,yy=function(t,e,r,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let El=class extends Qe{constructor(){var t;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),he.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((t=this.wallet)==null?void 0:t.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.unsubscribe)==null||t.forEach(e=>e()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),C`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","xl","xl","xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const t=this.getBoundingClientRect().width-40,e=this.wallet?this.wallet.name:void 0;return X.setWcLinking(void 0),X.setRecentWallet(this.wallet),C` <wui-qr-code
      size=${t}
      theme=${ze.state.themeMode}
      uri=${this.uri}
      imageSrc=${re(qe.getWalletImage(this.wallet))}
      color=${re(ze.state.themeVariables["--w3m-qr-color"])}
      alt=${re(e)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const t=!this.uri||!this.ready;return C`<wui-link
      .disabled=${t}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};El.styles=by,El=yy([Z("w3m-connecting-wc-qrcode")],El);var Cy=function(t,e,r,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Dh=class extends K{constructor(){var t;if(super(),this.wallet=(t=W.state.data)==null?void 0:t.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");he.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return C`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${re(qe.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};Dh=Cy([Z("w3m-connecting-wc-unsupported")],Dh);var jh=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Il=class extends Qe{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(X.subscribeKey("wcUri",()=>{this.updateLoadingState()})),he.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:e,name:r}=this.wallet,{redirect:i,href:s}=z.formatUniversalUrl(e,this.uri);X.setWcLinking({name:r,href:s}),X.setRecentWallet(this.wallet),z.openHref(i,"_blank")}catch{this.error=!0}}};jh([G()],Il.prototype,"isLoading",void 0),Il=jh([Z("w3m-connecting-wc-web")],Il);var ua=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let rn=class extends K{constructor(){var t;super(),this.wallet=(t=W.state.data)==null?void 0:t.wallet,this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!L.state.siwx,this.determinePlatforms(),this.initializeConnection()}render(){return C`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      <wui-ux-by-reown></wui-ux-by-reown>
    `}async initializeConnection(t=!1){if(!(this.platform==="browser"||L.state.manualWCControl&&!t))try{const{wcPairingExpiry:e,status:r}=X.state;(t||L.state.enableEmbedded||z.isPairingExpired(e)||r==="connecting")&&(await X.connectWalletConnect(),this.isSiwxEnabled||ve.close())}catch(e){he.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),X.setWcError(!0),_e.showError(e.message??"Connection error"),X.resetWcConnection(),W.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;const{mobile_link:t,desktop_link:e,webapp_link:r,injected:i,rdns:s}=this.wallet,n=i==null?void 0:i.map(({injected_id:p})=>p).filter(Boolean),o=[...s?[s]:n??[]],a=L.state.isUniversalProvider?!1:o.length,c=t,l=r,d=X.checkInstalled(o),u=a&&d,h=e&&!z.isMobile();u&&!b.state.noAdapters&&this.platforms.push("browser"),c&&this.platforms.push(z.isMobile()?"mobile":"qrcode"),l&&this.platforms.push("web"),h&&this.platforms.push("desktop"),!u&&a&&!b.state.noAdapters&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return C`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return C`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return C`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return C`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return C`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return C`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?C`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(t){var r;const e=(r=this.shadowRoot)==null?void 0:r.querySelector("div");e&&(await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=t,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};ua([G()],rn.prototype,"platform",void 0),ua([G()],rn.prototype,"platforms",void 0),ua([G()],rn.prototype,"isSiwxEnabled",void 0),rn=ua([Z("w3m-connecting-wc-view")],rn);var zh=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let xa=class extends K{constructor(){super(...arguments),this.isMobile=z.isMobile()}render(){if(this.isMobile){const{featured:t,recommended:e}=F.state,{customWallets:r}=L.state,i=Y.getRecentWallets(),s=t.length||e.length||(r==null?void 0:r.length)||i.length;return C`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${["3xs","s","s","s"]}
      >
        ${s?C`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return C`<wui-flex flexDirection="column" .padding=${["0","0","l","0"]}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${["0","m","0","m"]}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`}};zh([G()],xa.prototype,"isMobile",void 0),xa=zh([Z("w3m-connecting-wc-basic-view")],xa);/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Td=()=>new xy;class xy{}const Al=new WeakMap,Od=Pd(class extends H0{render(t){return Me}update(t,[e]){var i;const r=e!==this.G;return r&&this.G!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=e,this.ht=(i=t.options)==null?void 0:i.host,this.rt(this.ct=t.element)),Me}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let r=Al.get(e);r===void 0&&(r=new WeakMap,Al.set(e,r)),r.get(this.G)!==void 0&&this.G.call(this.ht,void 0),r.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){var t,e;return typeof this.G=="function"?(t=Al.get(this.ht??globalThis))==null?void 0:t.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Ey=ie`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`,Hh=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let ha=class extends K{constructor(){super(...arguments),this.inputElementRef=Td(),this.checked=void 0}render(){return C`
      <label>
        <input
          ${Od(this.inputElementRef)}
          type="checkbox"
          ?checked=${re(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){var t;this.dispatchEvent(new CustomEvent("switchChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.checked,bubbles:!0,composed:!0}))}};ha.styles=[xe,et,ao,Ey],Hh([I({type:Boolean})],ha.prototype,"checked",void 0),ha=Hh([Z("wui-switch")],ha);var Iy=ie`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`,qh=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let pa=class extends K{constructor(){super(...arguments),this.checked=void 0}render(){return C`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${re(this.checked)}></wui-switch>
      </button>
    `}};pa.styles=[xe,et,Iy],qh([I({type:Boolean})],pa.prototype,"checked",void 0),pa=qh([Z("wui-certified-switch")],pa);var Ay=ie`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`,Wh=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let fa=class extends K{constructor(){super(...arguments),this.icon="copy"}render(){return C`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};fa.styles=[xe,et,Ay],Wh([I()],fa.prototype,"icon",void 0),fa=Wh([Z("wui-input-element")],fa);var Ny=ie`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`,Xt=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Ot=class extends K{constructor(){super(...arguments),this.inputElementRef=Td(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){const t=`wui-padding-right-${this.inputRightPadding}`,e={[`wui-size-${this.size}`]:!0,[t]:!!this.inputRightPadding};return C`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${Od(this.inputElementRef)}
        class=${q0(e)}
        type=${this.type}
        enterkeyhint=${re(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
        tabindex=${re(this.tabIdx)}
      />
      <slot></slot>`}templateIcon(){return this.icon?C`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var t;this.dispatchEvent(new CustomEvent("inputChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.value,bubbles:!0,composed:!0}))}};Ot.styles=[xe,et,Ny],Xt([I()],Ot.prototype,"size",void 0),Xt([I()],Ot.prototype,"icon",void 0),Xt([I({type:Boolean})],Ot.prototype,"disabled",void 0),Xt([I()],Ot.prototype,"placeholder",void 0),Xt([I()],Ot.prototype,"type",void 0),Xt([I()],Ot.prototype,"keyHint",void 0),Xt([I()],Ot.prototype,"value",void 0),Xt([I()],Ot.prototype,"inputRightPadding",void 0),Xt([I()],Ot.prototype,"tabIdx",void 0),Ot=Xt([Z("wui-input-text")],Ot);var ky=ie`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`,Sy=function(t,e,r,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Nl=class extends K{constructor(){super(...arguments),this.inputComponentRef=Td()}render(){return C`
      <wui-input-text
        ${Od(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){var e;const t=(e=this.inputComponentRef.value)==null?void 0:e.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};Nl.styles=[xe,ky],Nl=Sy([Z("wui-search-bar")],Nl);const _y=H`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;var Py=ie`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`,Fh=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let ga=class extends K{constructor(){super(...arguments),this.type="wallet"}render(){return C`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?C` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${_y}`:C`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};ga.styles=[xe,et,Py],Fh([I()],ga.prototype,"type",void 0),ga=Fh([Z("wui-card-select-loader")],ga);var Ty=ie`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`,$t=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let ft=class extends K{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&Ye.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&Ye.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&Ye.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&Ye.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&Ye.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&Ye.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&Ye.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&Ye.getSpacingStyles(this.margin,3)};
    `,C`<slot></slot>`}};ft.styles=[xe,Ty],$t([I()],ft.prototype,"gridTemplateRows",void 0),$t([I()],ft.prototype,"gridTemplateColumns",void 0),$t([I()],ft.prototype,"justifyItems",void 0),$t([I()],ft.prototype,"alignItems",void 0),$t([I()],ft.prototype,"justifyContent",void 0),$t([I()],ft.prototype,"alignContent",void 0),$t([I()],ft.prototype,"columnGap",void 0),$t([I()],ft.prototype,"rowGap",void 0),$t([I()],ft.prototype,"gap",void 0),$t([I()],ft.prototype,"padding",void 0),$t([I()],ft.prototype,"margin",void 0),ft=$t([Z("wui-grid")],ft);var Oy=ie`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`,sn=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let ni=class extends K{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var e,r;const t=((e=this.wallet)==null?void 0:e.badge_type)==="certified";return C`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${re(t?"certified":void 0)}
            >${(r=this.wallet)==null?void 0:r.name}</wui-text
          >
          ${t?C`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){var t,e;return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():C`
      <wui-wallet-image
        size="md"
        imageSrc=${re(this.imageSrc)}
        name=${(t=this.wallet)==null?void 0:t.name}
        .installed=${(e=this.wallet)==null?void 0:e.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return C`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=qe.getWalletImage(this.wallet),!this.imageSrc&&(this.imageLoading=!0,this.imageSrc=await qe.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};ni.styles=Oy,sn([G()],ni.prototype,"visible",void 0),sn([G()],ni.prototype,"imageSrc",void 0),sn([G()],ni.prototype,"imageLoading",void 0),sn([I()],ni.prototype,"wallet",void 0),ni=sn([Z("w3m-all-wallets-list-item")],ni);var $y=ie`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`,nn=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};const Vh="local-paginator";let oi=class extends K{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!F.state.wallets.length,this.wallets=F.state.wallets,this.recommended=F.state.recommended,this.featured=F.state.featured,this.unsubscribe.push(F.subscribeKey("wallets",t=>this.wallets=t),F.subscribeKey("recommended",t=>this.recommended=t),F.subscribeKey("featured",t=>this.featured=t))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var t;this.unsubscribe.forEach(e=>e()),(t=this.paginationObserver)==null||t.disconnect()}render(){return C`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var e;this.loading=!0;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-grid");t&&(await F.fetchWalletsByPage({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(t,e){return[...Array(t)].map(()=>C`
        <wui-card-select-loader type="wallet" id=${re(e)}></wui-card-select-loader>
      `)}walletsTemplate(){const t=z.uniqueBy([...this.featured,...this.recommended,...this.wallets],"id");return _i.markWalletsAsInstalled(t).map(e=>C`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(e)}
          .wallet=${e}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:t,recommended:e,featured:r,count:i}=F.state,s=window.innerWidth<352?3:4,n=t.length+e.length;let o=Math.ceil(n/s)*s-n+s;return o-=t.length?r.length%s:0,i===0&&r.length>0?null:i===0||[...r,...t,...e].length<i?this.shimmerTemplate(o,Vh):null}createPaginationObserver(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector(`#${Vh}`);t&&(this.paginationObserver=new IntersectionObserver(([r])=>{if(r!=null&&r.isIntersecting&&!this.loading){const{page:i,count:s,wallets:n}=F.state;n.length<s&&F.fetchWalletsByPage({page:i+1})}}),this.paginationObserver.observe(t))}onConnectWallet(t){V.selectWalletConnector(t)}};oi.styles=$y,nn([G()],oi.prototype,"loading",void 0),nn([G()],oi.prototype,"wallets",void 0),nn([G()],oi.prototype,"recommended",void 0),nn([G()],oi.prototype,"featured",void 0),oi=nn([Z("w3m-all-wallets-list")],oi);var Ry=ie`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`,wa=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let is=class extends K{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?C`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await F.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:t}=F.state,e=_i.markWalletsAsInstalled(t);return t.length?C`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","s","s","s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${e.map(r=>C`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(r)}
              .wallet=${r}
              data-testid="wallet-search-item-${r.id}"
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:C`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(t){V.selectWalletConnector(t)}};is.styles=Ry,wa([G()],is.prototype,"loading",void 0),wa([I()],is.prototype,"query",void 0),wa([I()],is.prototype,"badge",void 0),is=wa([Z("w3m-all-wallets-search")],is);var kl=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let mn=class extends K{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=z.debounce(t=>{this.search=t})}render(){const t=this.search.length>=2;return C`
      <wui-flex .padding=${["0","s","s","s"]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${t||this.badge?C`<w3m-all-wallets-search
            query=${this.search}
            badge=${re(this.badge)}
          ></w3m-all-wallets-search>`:C`<w3m-all-wallets-list badge=${re(this.badge)}></w3m-all-wallets-list>`}
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}onClick(){if(this.badge==="certified"){this.badge=void 0;return}this.badge="certified",_e.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})}qrButtonTemplate(){return z.isMobile()?C`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){W.push("ConnectingWalletConnect")}};kl([G()],mn.prototype,"search",void 0),kl([G()],mn.prototype,"badge",void 0),mn=kl([Z("w3m-all-wallets-view")],mn);var Ly=ie`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`,qt=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let xt=class extends K{constructor(){super(...arguments),this.tabIdx=void 0,this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return C`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${re(this.iconVariant)}
        tabindex=${re(this.tabIdx)}
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return C`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return C`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const t=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",e=this.iconVariant==="square-blue"?"mdl":"md",r=this.iconSize?this.iconSize:e;return C`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${t}
          backgroundColor=${t}
          size=${e}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?C`<wui-loading-spinner
        data-testid="wui-list-item-loading-spinner"
        color="fg-300"
      ></wui-loading-spinner>`:C``}chevronTemplate(){return this.chevron?C`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};xt.styles=[xe,et,Ly],qt([I()],xt.prototype,"icon",void 0),qt([I()],xt.prototype,"iconSize",void 0),qt([I()],xt.prototype,"tabIdx",void 0),qt([I()],xt.prototype,"variant",void 0),qt([I()],xt.prototype,"iconVariant",void 0),qt([I({type:Boolean})],xt.prototype,"disabled",void 0),qt([I()],xt.prototype,"imageSrc",void 0),qt([I()],xt.prototype,"alt",void 0),qt([I({type:Boolean})],xt.prototype,"chevron",void 0),qt([I({type:Boolean})],xt.prototype,"loading",void 0),xt=qt([Z("wui-list-item")],xt);var My=function(t,e,r,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let ad=class extends K{constructor(){var t;super(...arguments),this.wallet=(t=W.state.data)==null?void 0:t.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return C`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var t;return(t=this.wallet)!=null&&t.chrome_store?C`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var t;return(t=this.wallet)!=null&&t.app_store?C`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var t;return(t=this.wallet)!=null&&t.play_store?C`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var t;return(t=this.wallet)!=null&&t.homepage?C`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var t;(t=this.wallet)!=null&&t.chrome_store&&z.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var t;(t=this.wallet)!=null&&t.app_store&&z.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var t;(t=this.wallet)!=null&&t.play_store&&z.openHref(this.wallet.play_store,"_blank")}onHomePage(){var t;(t=this.wallet)!=null&&t.homepage&&z.openHref(this.wallet.homepage,"_blank")}};ad=My([Z("w3m-downloads-view")],ad);var By=Object.freeze({__proto__:null,get W3mConnectingWcBasicView(){return xa},get W3mAllWalletsView(){return mn},get W3mDownloadsView(){return ad}}),Uy=ie`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }

  :host([data-embedded='true']) {
    box-shadow:
      0 0 0 1px var(--wui-color-gray-glass-005),
      0px 4px 12px 4px var(--w3m-card-embedded-shadow-color);
  }
`,Dy=function(t,e,r,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Sl=class extends K{render(){return C`<slot></slot>`}};Sl.styles=[xe,Uy],Sl=Dy([Z("wui-card")],Sl);var jy=ie`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-dark-glass-100);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-325);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: var(--wui-border-radius-3xs);
    background-color: var(--local-icon-bg-value);
  }
`,on=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let ai=class extends K{constructor(){super(...arguments),this.message="",this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="info"}render(){return this.style.cssText=`
      --local-icon-bg-value: var(--wui-color-${this.backgroundColor});
   `,C`
      <wui-flex flexDirection="row" justifyContent="space-between" alignItems="center">
        <wui-flex columnGap="xs" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color=${this.iconColor} size="md" name=${this.icon}></wui-icon>
          </wui-flex>
          <wui-text variant="small-500" color="bg-350" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="bg-350"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){Ur.close()}};ai.styles=[xe,jy],on([I()],ai.prototype,"message",void 0),on([I()],ai.prototype,"backgroundColor",void 0),on([I()],ai.prototype,"iconColor",void 0),on([I()],ai.prototype,"icon",void 0),ai=on([Z("wui-alertbar")],ai);var zy=ie`
  :host {
    display: block;
    position: absolute;
    top: var(--wui-spacing-s);
    left: var(--wui-spacing-l);
    right: var(--wui-spacing-l);
    opacity: 0;
    pointer-events: none;
  }
`,Gh=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};const Hy={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"exclamationTriangle"}};let ma=class extends K{constructor(){super(),this.unsubscribe=[],this.open=Ur.state.open,this.onOpen(!0),this.unsubscribe.push(Ur.subscribeKey("open",t=>{this.open=t,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{message:t,variant:e}=Ur.state,r=Hy[e];return C`
      <wui-alertbar
        message=${t}
        backgroundColor=${r==null?void 0:r.backgroundColor}
        iconColor=${r==null?void 0:r.iconColor}
        icon=${r==null?void 0:r.icon}
      ></wui-alertbar>
    `}onOpen(t){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):t||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};ma.styles=zy,Gh([G()],ma.prototype,"open",void 0),ma=Gh([Z("w3m-alertbar")],ma);var qy=ie`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`,an=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let ci=class extends K{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const t=this.size==="lg"?"--wui-border-radius-xs":"--wui-border-radius-xxs",e=this.size==="lg"?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${t});
    --local-padding: var(${e});
`,C`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};ci.styles=[xe,et,ao,qy],an([I()],ci.prototype,"size",void 0),an([I({type:Boolean})],ci.prototype,"disabled",void 0),an([I()],ci.prototype,"icon",void 0),an([I()],ci.prototype,"iconColor",void 0),ci=an([Z("wui-icon-link")],ci);var Wy=ie`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`,Zh=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let va=class extends K{constructor(){super(...arguments),this.imageSrc=""}render(){return C`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`}imageTemplate(){return this.imageSrc?C`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`:C`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`}};va.styles=[xe,et,ao,Wy],Zh([I()],va.prototype,"imageSrc",void 0),va=Zh([Z("wui-select")],va);var Fy=ie`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards var(--wui-ease-out-power-2),
      slide-down-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards var(--wui-ease-out-power-2),
      slide-up-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`,Qt=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};const Vy=["SmartSessionList"];function _l(){var n,o,a,c,l,d,u;const t=(o=(n=W.state.data)==null?void 0:n.connector)==null?void 0:o.name,e=(c=(a=W.state.data)==null?void 0:a.wallet)==null?void 0:c.name,r=(d=(l=W.state.data)==null?void 0:l.network)==null?void 0:d.name,i=e??t,s=V.getConnectors();return{Connect:`Connect ${s.length===1&&((u=s[0])==null?void 0:u.id)==="w3m-email"?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:i??"Connect Wallet",ConnectingWalletConnect:i??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview convert",Downloads:i?`Get ${i}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Profile:void 0,SwitchNetwork:r??"Switch Network",SwitchAddress:"Switch Address",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select token",SwapPreview:"Preview swap",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",ConnectWallets:"Connect wallet",ConnectSocials:"All socials",ConnectingSocial:ee.state.socialProvider?ee.state.socialProvider:"Connect Social",ConnectingMultiChain:"Select chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In"}}let Rt=class extends K{constructor(){super(),this.unsubscribe=[],this.heading=_l()[W.state.view],this.network=b.state.activeCaipNetwork,this.networkImage=qe.getNetworkImage(this.network),this.buffering=!1,this.showBack=!1,this.prevHistoryLength=1,this.view=W.state.view,this.viewDirection="",this.headerText=_l()[W.state.view],this.unsubscribe.push(wt.subscribeNetworkImages(()=>{this.networkImage=qe.getNetworkImage(this.network)}),W.subscribeKey("view",t=>{setTimeout(()=>{this.view=t,this.headerText=_l()[t]},Br.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),X.subscribeKey("buffering",t=>this.buffering=t),b.subscribeKey("activeCaipNetwork",t=>{this.network=t,this.networkImage=qe.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){return C`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){he.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),W.push("WhatIsAWallet")}async onClose(){W.state.view==="UnsupportedChain"||await Dr.isSIWXCloseDisabled()?ve.shake():ve.close()}rightHeaderTemplate(){var e,r;const t=(r=(e=L==null?void 0:L.state)==null?void 0:e.features)==null?void 0:r.smartSessions;return W.state.view!=="Account"||!t?this.closeButtonTemplate():C`<wui-flex>
      <wui-icon-link
        icon="clock"
        @click=${()=>W.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-link>
      ${this.closeButtonTemplate()}
    </wui-flex> `}closeButtonTemplate(){return C`
      <wui-icon-link
        ?disabled=${this.buffering}
        icon="close"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `}titleTemplate(){const t=Vy.includes(this.view);return C`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="xs"
      >
        <wui-text variant="paragraph-700" color="fg-100" data-testid="w3m-header-text"
          >${this.headerText}</wui-text
        >
        ${t?C`<wui-tag variant="main">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){var c;const{view:t}=W.state,e=t==="Connect",r=L.state.enableEmbedded,i=t==="ApproveTransaction",s=t==="ConnectingSiwe",n=t==="Account",o=L.state.enableNetworkSwitch,a=i||s||e&&r;return n&&o?C`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${re((c=this.network)==null?void 0:c.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${re(this.networkImage)}
      ></wui-select>`:this.showBack&&!a?C`<wui-icon-link
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:C`<wui-icon-link
      data-hidden=${!e}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}onNetworks(){this.isAllowedNetworkSwitch()&&(he.sendEvent({type:"track",event:"CLICK_NETWORKS"}),W.push("Networks"))}isAllowedNetworkSwitch(){const t=b.getAllRequestedCaipNetworks(),e=t?t.length>1:!1,r=t==null?void 0:t.find(({id:i})=>{var s;return i===((s=this.network)==null?void 0:s.id)});return e||!r}getPadding(){return this.heading?["l","2l","l","2l"]:["0","2l","0","2l"]}onViewChange(){const{history:t}=W.state;let e=Br.VIEW_DIRECTION.Next;t.length<this.prevHistoryLength&&(e=Br.VIEW_DIRECTION.Prev),this.prevHistoryLength=t.length,this.viewDirection=e}async onHistoryChange(){var r;const{history:t}=W.state,e=(r=this.shadowRoot)==null?void 0:r.querySelector("#dynamic");t.length>1&&!this.showBack&&e?(await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):t.length<=1&&this.showBack&&e&&(await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){W.goBack()}};Rt.styles=Fy,Qt([G()],Rt.prototype,"heading",void 0),Qt([G()],Rt.prototype,"network",void 0),Qt([G()],Rt.prototype,"networkImage",void 0),Qt([G()],Rt.prototype,"buffering",void 0),Qt([G()],Rt.prototype,"showBack",void 0),Qt([G()],Rt.prototype,"prevHistoryLength",void 0),Qt([G()],Rt.prototype,"view",void 0),Qt([G()],Rt.prototype,"viewDirection",void 0),Qt([G()],Rt.prototype,"headerText",void 0),Rt=Qt([Z("w3m-header")],Rt);var Gy=ie`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);

    max-width: 300px;
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`,li=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let gr=class extends K{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message="",this.loading=!1,this.iconType="default"}render(){return C`
      ${this.templateIcon()}
      <wui-text variant="paragraph-500" color="fg-100" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return this.loading?C`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:this.iconType==="default"?C`<wui-icon size="xl" color=${this.iconColor} name=${this.icon}></wui-icon>`:C`<wui-icon-box
      size="sm"
      iconSize="xs"
      iconColor=${this.iconColor}
      backgroundColor=${this.backgroundColor}
      icon=${this.icon}
      background="opaque"
    ></wui-icon-box>`}};gr.styles=[xe,Gy],li([I()],gr.prototype,"backgroundColor",void 0),li([I()],gr.prototype,"iconColor",void 0),li([I()],gr.prototype,"icon",void 0),li([I()],gr.prototype,"message",void 0),li([I()],gr.prototype,"loading",void 0),li([I()],gr.prototype,"iconType",void 0),gr=li([Z("wui-snackbar")],gr);var Zy=ie`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`,Kh=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};const Ky={loading:void 0,success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let ba=class extends K{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=_e.state.open,this.unsubscribe.push(_e.subscribeKey("open",t=>{this.open=t,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(t=>t())}render(){const{message:t,variant:e,svg:r}=_e.state,i=Ky[e],{icon:s,iconColor:n}=r??i??{};return C`
      <wui-snackbar
        message=${t}
        backgroundColor=${i==null?void 0:i.backgroundColor}
        iconColor=${n}
        icon=${s}
        .loading=${e==="loading"}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),_e.state.autoClose&&(this.timeout=setTimeout(()=>_e.hide(),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};ba.styles=Zy,Kh([G()],ba.prototype,"open",void 0),ba=Kh([Z("w3m-snackbar")],ba);var Yy=ie`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`,cn=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let di=class extends K{constructor(){super(),this.unsubscribe=[],this.open=ns.state.open,this.message=ns.state.message,this.triggerRect=ns.state.triggerRect,this.variant=ns.state.variant,this.unsubscribe.push(ns.subscribe(t=>{this.open=t.open,this.message=t.message,this.triggerRect=t.triggerRect,this.variant=t.variant}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){this.dataset.variant=this.variant;const t=this.triggerRect.top,e=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${t}px;
    --w3m-tooltip-left: ${e}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${this.open?1:0};
    `,C`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};di.styles=[Yy],cn([G()],di.prototype,"open",void 0),cn([G()],di.prototype,"message",void 0),cn([G()],di.prototype,"triggerRect",void 0),cn([G()],di.prototype,"variant",void 0),di=cn([Z("w3m-tooltip"),Z("w3m-tooltip")],di);var Jy=ie`
  :host {
    --prev-height: 0px;
    --new-height: 0px;
    display: block;
  }

  div.w3m-router-container {
    transform: translateY(0);
    opacity: 1;
  }

  div.w3m-router-container[view-direction='prev'] {
    animation:
      slide-left-out 150ms forwards ease,
      slide-left-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  div.w3m-router-container[view-direction='next'] {
    animation:
      slide-right-out 150ms forwards ease,
      slide-right-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(-10px);
      opacity: 0;
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`,Pl=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let ln=class extends K{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=W.state.view,this.viewDirection="",this.unsubscribe.push(W.subscribeKey("view",t=>this.onViewChange(t)))}firstUpdated(){var t;this.resizeObserver=new ResizeObserver(([e])=>{const r=`${e==null?void 0:e.contentRect.height}px`;this.prevHeight!=="0px"&&(this.style.setProperty("--prev-height",this.prevHeight),this.style.setProperty("--new-height",r),this.style.animation="w3m-view-height 150ms forwards ease",this.style.height="auto"),setTimeout(()=>{this.prevHeight=r,this.style.animation="unset"},Br.ANIMATION_DURATIONS.ModalHeight)}),(t=this.resizeObserver)==null||t.observe(this.getWrapper())}disconnectedCallback(){var t;(t=this.resizeObserver)==null||t.unobserve(this.getWrapper()),this.unsubscribe.forEach(e=>e())}render(){return C`<div class="w3m-router-container" view-direction="${this.viewDirection}">
      ${this.viewTemplate()}
    </div>`}viewTemplate(){switch(this.view){case"AccountSettings":return C`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return C`<w3m-account-view></w3m-account-view>`;case"AllWallets":return C`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return C`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return C`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return C`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":return C`<w3m-connect-view></w3m-connect-view>`;case"Create":return C`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return C`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return C`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return C`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return C`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return C`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return C`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return C`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"Downloads":return C`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return C`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return C`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return C`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return C`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return C`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return C`<w3m-network-switch-view></w3m-network-switch-view>`;case"Profile":return C`<w3m-profile-view></w3m-profile-view>`;case"SwitchAddress":return C`<w3m-switch-address-view></w3m-switch-address-view>`;case"Transactions":return C`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return C`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return C`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return C`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return C`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return C`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return C`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return C`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return C`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return C`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return C`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return C`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return C`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return C`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return C`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return C`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WhatIsABuy":return C`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return C`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return C`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return C`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return C`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return C`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return C`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return C`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return C`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return C`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return C`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return C`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return C`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;default:return C`<w3m-connect-view></w3m-connect-view>`}}onViewChange(t){ns.hide();let e=Br.VIEW_DIRECTION.Next;const{history:r}=W.state;r.length<this.prevHistoryLength&&(e=Br.VIEW_DIRECTION.Prev),this.prevHistoryLength=r.length,this.viewDirection=e,setTimeout(()=>{this.view=t},Br.ANIMATION_DURATIONS.ViewTransition)}getWrapper(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("div")}};ln.styles=Jy,Pl([G()],ln.prototype,"view",void 0),Pl([G()],ln.prototype,"viewDirection",void 0),ln=Pl([Z("w3m-router")],ln);var Xy=ie`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  :host(.embedded) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host(.embedded) wui-card {
    max-width: 400px;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);
      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`,ui=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};const Yh="scroll-lock";let er=class extends K{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=L.state.enableEmbedded,this.open=ve.state.open,this.caipAddress=b.state.activeCaipAddress,this.caipNetwork=b.state.activeCaipNetwork,this.shake=ve.state.shake,this.filterByNamespace=V.state.filterByNamespace,this.initializeTheming(),F.prefetchAnalyticsConfig(),this.unsubscribe.push(ve.subscribeKey("open",t=>t?this.onOpen():this.onClose()),ve.subscribeKey("shake",t=>this.shake=t),b.subscribeKey("activeCaipNetwork",t=>this.onNewNetwork(t)),b.subscribeKey("activeCaipAddress",t=>this.onNewAddress(t)),L.subscribeKey("enableEmbedded",t=>this.enableEmbedded=t),V.subscribeKey("filterByNamespace",t=>{var e;this.filterByNamespace!==t&&!((e=b.getAccountData(t))!=null&&e.caipAddress)&&(F.fetchRecommendedWallets(),this.filterByNamespace=t)}))}firstUpdated(){if(this.caipAddress){if(this.enableEmbedded){ve.close(),this.prefetch();return}this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),this.onRemoveKeyboardListener()}render(){return this.style.cssText=`
      --local-border-bottom-mobile-radius: ${this.enableEmbedded?"clamp(0px, var(--wui-border-radius-l), 44px)":"0px"};
    `,this.enableEmbedded?C`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?C`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return C` <wui-card
      shake="${this.shake}"
      data-embedded="${re(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(t){t.target===t.currentTarget&&await this.handleClose()}async handleClose(){W.state.view==="UnsupportedChain"||await Dr.isSIWXCloseDisabled()?ve.shake():ve.close()}initializeTheming(){const{themeVariables:t,themeMode:e}=ze.state,r=Ye.getColorTheme(e);J3(t,r)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),_e.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const t=document.createElement("style");t.dataset.w3m=Yh,t.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(t)}onScrollUnlock(){const t=document.head.querySelector(`style[data-w3m="${Yh}"]`);t&&t.remove()}onAddKeyboardListener(){var e;this.abortController=new AbortController;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-card");t==null||t.focus(),window.addEventListener("keydown",r=>{if(r.key==="Escape")this.handleClose();else if(r.key==="Tab"){const{tagName:i}=r.target;i&&!i.includes("W3M-")&&!i.includes("WUI-")&&(t==null||t.focus())}},this.abortController)}onRemoveKeyboardListener(){var t;(t=this.abortController)==null||t.abort(),this.abortController=void 0}async onNewAddress(t){const e=b.state.isSwitchingNamespace,r=z.getPlainAddress(t);!r&&!e?ve.close():e&&r&&W.goBack(),await Dr.initializeIfEnabled(),this.caipAddress=t,b.setIsSwitchingNamespace(!1)}onNewNetwork(t){var w,f;const e=this.caipNetwork,r=(w=e==null?void 0:e.caipNetworkId)==null?void 0:w.toString(),i=e==null?void 0:e.chainNamespace,s=(f=t==null?void 0:t.caipNetworkId)==null?void 0:f.toString(),n=t==null?void 0:t.chainNamespace,o=r!==s,a=o&&i===n,c=(e==null?void 0:e.name)===J.UNSUPPORTED_NETWORK_NAME,l=W.state.view==="ConnectingExternal",d=!this.caipAddress,u=W.state.view==="UnsupportedChain",h=ve.state.open;let p=!1;h&&!l&&(d?o&&(p=!0):(u||a&&!c)&&(p=!0)),p&&W.state.view!=="SIWXSignMessage"&&W.goBack(),this.caipNetwork=t}prefetch(){this.hasPrefetched||(F.prefetch(),F.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}};er.styles=Xy,ui([I({type:Boolean})],er.prototype,"enableEmbedded",void 0),ui([G()],er.prototype,"open",void 0),ui([G()],er.prototype,"caipAddress",void 0),ui([G()],er.prototype,"caipNetwork",void 0),ui([G()],er.prototype,"shake",void 0),ui([G()],er.prototype,"filterByNamespace",void 0),er=ui([Z("w3m-modal")],er);var Qy=Object.freeze({__proto__:null,get W3mModal(){return er}});const e4=H`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.0023 0.875C7.48571 0.875 7.8776 1.26675 7.8776 1.75V6.125H12.2541C12.7375 6.125 13.1294 6.51675 13.1294 7C13.1294 7.48325 12.7375 7.875 12.2541 7.875H7.8776V12.25C7.8776 12.7332 7.48571 13.125 7.0023 13.125C6.51889 13.125 6.12701 12.7332 6.12701 12.25V7.875H1.75054C1.26713 7.875 0.875244 7.48325 0.875244 7C0.875244 6.51675 1.26713 6.125 1.75054 6.125H6.12701V1.75C6.12701 1.26675 6.51889 0.875 7.0023 0.875Z"
    fill="#667dff"
  /></svg
>`;var t4=Object.freeze({__proto__:null,addSvg:e4});const r4=H`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`;var i4=Object.freeze({__proto__:null,allWalletsSvg:r4});const s4=H`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10.5 2.42908C6.31875 2.42908 2.92859 5.81989 2.92859 10.0034C2.92859 14.1869 6.31875 17.5777 10.5 17.5777C14.6813 17.5777 18.0714 14.1869 18.0714 10.0034C18.0714 5.81989 14.6813 2.42908 10.5 2.42908ZM0.928589 10.0034C0.928589 4.71596 5.21355 0.429077 10.5 0.429077C15.7865 0.429077 20.0714 4.71596 20.0714 10.0034C20.0714 15.2908 15.7865 19.5777 10.5 19.5777C5.21355 19.5777 0.928589 15.2908 0.928589 10.0034ZM10.5 5.75003C11.0523 5.75003 11.5 6.19774 11.5 6.75003L11.5 10.8343L12.7929 9.54137C13.1834 9.15085 13.8166 9.15085 14.2071 9.54137C14.5976 9.9319 14.5976 10.5651 14.2071 10.9556L11.2071 13.9556C10.8166 14.3461 10.1834 14.3461 9.79291 13.9556L6.79291 10.9556C6.40239 10.5651 6.40239 9.9319 6.79291 9.54137C7.18343 9.15085 7.8166 9.15085 8.20712 9.54137L9.50002 10.8343L9.50002 6.75003C9.50002 6.19774 9.94773 5.75003 10.5 5.75003Z"
    clip-rule="evenodd"
  /></svg
>`;var n4=Object.freeze({__proto__:null,arrowBottomCircleSvg:s4});const o4=H`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`;var a4=Object.freeze({__proto__:null,appStoreSvg:o4});const c4=H`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`;var l4=Object.freeze({__proto__:null,appleSvg:c4});const d4=H`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`;var u4=Object.freeze({__proto__:null,arrowBottomSvg:d4});const h4=H`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`;var p4=Object.freeze({__proto__:null,arrowLeftSvg:h4});const f4=H`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`;var g4=Object.freeze({__proto__:null,arrowRightSvg:f4});const w4=H`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`;var m4=Object.freeze({__proto__:null,arrowTopSvg:w4});const v4=H`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.61391 1.57124C5.85142 1.42873 6.14813 1.42873 6.38564 1.57124L11.0793 4.38749C11.9179 4.89067 11.5612 6.17864 10.5832 6.17864H9.96398V10.0358H10.2854C10.6996 10.0358 11.0354 10.3716 11.0354 10.7858C11.0354 11.2 10.6996 11.5358 10.2854 11.5358H1.71416C1.29995 11.5358 0.964172 11.2 0.964172 10.7858C0.964172 10.3716 1.29995 10.0358 1.71416 10.0358H2.03558L2.03558 6.17864H1.41637C0.438389 6.17864 0.0816547 4.89066 0.920263 4.38749L5.61391 1.57124ZM3.53554 6.17864V10.0358H5.24979V6.17864H3.53554ZM6.74976 6.17864V10.0358H8.46401V6.17864H6.74976ZM8.64913 4.67864H3.35043L5.99978 3.089L8.64913 4.67864Z"
    fill="currentColor"
  /></svg
>`;var b4=Object.freeze({__proto__:null,bankSvg:v4});const y4=H`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`;var C4=Object.freeze({__proto__:null,browserSvg:y4});const x4=H`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.16072 2C4.17367 2 4.18665 2 4.19968 2L7.83857 2C8.36772 1.99998 8.82398 1.99996 9.19518 2.04018C9.5895 2.0829 9.97577 2.17811 10.3221 2.42971C10.5131 2.56849 10.6811 2.73647 10.8198 2.92749C11.0714 3.27379 11.1666 3.66007 11.2094 4.0544C11.2496 4.42561 11.2496 4.88188 11.2495 5.41105V7.58896C11.2496 8.11812 11.2496 8.57439 11.2094 8.94561C11.1666 9.33994 11.0714 9.72621 10.8198 10.0725C10.6811 10.2635 10.5131 10.4315 10.3221 10.5703C9.97577 10.8219 9.5895 10.9171 9.19518 10.9598C8.82398 11 8.36772 11 7.83856 11H4.16073C3.63157 11 3.17531 11 2.80411 10.9598C2.40979 10.9171 2.02352 10.8219 1.67722 10.5703C1.48621 10.4315 1.31824 10.2635 1.17946 10.0725C0.927858 9.72621 0.832652 9.33994 0.78993 8.94561C0.749713 8.5744 0.749733 8.11813 0.749757 7.58896L0.749758 5.45C0.749758 5.43697 0.749758 5.42399 0.749757 5.41104C0.749733 4.88188 0.749713 4.42561 0.78993 4.0544C0.832652 3.66007 0.927858 3.27379 1.17946 2.92749C1.31824 2.73647 1.48621 2.56849 1.67722 2.42971C2.02352 2.17811 2.40979 2.0829 2.80411 2.04018C3.17531 1.99996 3.63157 1.99998 4.16072 2ZM2.96567 3.53145C2.69897 3.56034 2.60687 3.60837 2.55888 3.64324C2.49521 3.6895 2.43922 3.74549 2.39296 3.80916C2.35809 3.85715 2.31007 3.94926 2.28117 4.21597C2.26629 4.35335 2.25844 4.51311 2.25431 4.70832H9.74498C9.74085 4.51311 9.733 4.35335 9.71812 4.21597C9.68922 3.94926 9.6412 3.85715 9.60633 3.80916C9.56007 3.74549 9.50408 3.6895 9.44041 3.64324C9.39242 3.60837 9.30031 3.56034 9.03362 3.53145C8.75288 3.50103 8.37876 3.5 7.79961 3.5H4.19968C3.62053 3.5 3.24641 3.50103 2.96567 3.53145ZM9.74956 6.20832H2.24973V7.55C2.24973 8.12917 2.25076 8.5033 2.28117 8.78404C2.31007 9.05074 2.35809 9.14285 2.39296 9.19084C2.43922 9.25451 2.49521 9.31051 2.55888 9.35677C2.60687 9.39163 2.69897 9.43966 2.96567 9.46856C3.24641 9.49897 3.62053 9.5 4.19968 9.5H7.79961C8.37876 9.5 8.75288 9.49897 9.03362 9.46856C9.30032 9.43966 9.39242 9.39163 9.44041 9.35677C9.50408 9.31051 9.56007 9.25451 9.60633 9.19084C9.6412 9.14285 9.68922 9.05075 9.71812 8.78404C9.74854 8.5033 9.74956 8.12917 9.74956 7.55V6.20832ZM6.74963 8C6.74963 7.58579 7.08541 7.25 7.49961 7.25H8.2496C8.6638 7.25 8.99958 7.58579 8.99958 8C8.99958 8.41422 8.6638 8.75 8.2496 8.75H7.49961C7.08541 8.75 6.74963 8.41422 6.74963 8Z"
    fill="currentColor"
  /></svg
>`;var E4=Object.freeze({__proto__:null,cardSvg:x4});const I4=H`<svg
  width="28"
  height="28"
  viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M25.5297 4.92733C26.1221 5.4242 26.1996 6.30724 25.7027 6.89966L12.2836 22.8997C12.0316 23.2001 11.6652 23.3811 11.2735 23.3986C10.8817 23.4161 10.5006 23.2686 10.2228 22.9919L2.38218 15.1815C1.83439 14.6358 1.83268 13.7494 2.37835 13.2016C2.92403 12.6538 3.81046 12.6521 4.35825 13.1978L11.1183 19.9317L23.5573 5.10036C24.0542 4.50794 24.9372 4.43047 25.5297 4.92733Z"
    fill="currentColor"/>
</svg>
`;var A4=Object.freeze({__proto__:null,checkmarkSvg:I4});const N4=H`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.9576 2.23383C13.3807 2.58873 13.4361 3.21947 13.0812 3.64263L6.37159 11.6426C6.19161 11.8572 5.92989 11.9865 5.65009 11.999C5.3703 12.0115 5.09808 11.9062 4.89965 11.7085L0.979321 7.80331C0.588042 7.41354 0.586817 6.78038 0.976585 6.3891C1.36635 5.99782 1.99952 5.99659 2.3908 6.38636L5.53928 9.52268L11.5488 2.35742C11.9037 1.93426 12.5344 1.87893 12.9576 2.23383Z"
    clip-rule="evenodd"
  />
</svg>`;var k4=Object.freeze({__proto__:null,checkmarkBoldSvg:N4});const S4=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`;var _4=Object.freeze({__proto__:null,chevronBottomSvg:S4});const P4=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`;var T4=Object.freeze({__proto__:null,chevronLeftSvg:P4});const O4=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`;var $4=Object.freeze({__proto__:null,chevronRightSvg:O4});const R4=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`;var L4=Object.freeze({__proto__:null,chevronTopSvg:R4});const M4=H`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`;var B4=Object.freeze({__proto__:null,chromeStoreSvg:M4});const U4=H`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M7.00235 2C4.24 2 2.00067 4.23858 2.00067 7C2.00067 9.76142 4.24 12 7.00235 12C9.7647 12 12.004 9.76142 12.004 7C12.004 4.23858 9.7647 2 7.00235 2ZM0 7C0 3.13401 3.13506 0 7.00235 0C10.8696 0 14.0047 3.13401 14.0047 7C14.0047 10.866 10.8696 14 7.00235 14C3.13506 14 0 10.866 0 7ZM7.00235 3C7.55482 3 8.00269 3.44771 8.00269 4V6.58579L9.85327 8.43575C10.2439 8.82627 10.2439 9.45944 9.85327 9.84996C9.46262 10.2405 8.82924 10.2405 8.43858 9.84996L6.29501 7.70711C6.10741 7.51957 6.00201 7.26522 6.00201 7V4C6.00201 3.44771 6.44988 3 7.00235 3Z" 
    fill="currentColor"
  />
</svg>`;var D4=Object.freeze({__proto__:null,clockSvg:U4});const j4=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`;var z4=Object.freeze({__proto__:null,closeSvg:j4});const H4=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`;var q4=Object.freeze({__proto__:null,compassSvg:H4});const W4=H`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`;var F4=Object.freeze({__proto__:null,coinPlaceholderSvg:W4});const V4=H`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9.21498 1.28565H10.5944C11.1458 1.28562 11.6246 1.2856 12.0182 1.32093C12.4353 1.35836 12.853 1.44155 13.2486 1.66724C13.7005 1.92498 14.0749 2.29935 14.3326 2.75122C14.5583 3.14689 14.6415 3.56456 14.6789 3.9817C14.7143 4.37531 14.7142 4.85403 14.7142 5.40545V6.78489C14.7142 7.33631 14.7143 7.81503 14.6789 8.20865C14.6415 8.62578 14.5583 9.04345 14.3326 9.43912C14.0749 9.89099 13.7005 10.2654 13.2486 10.5231C12.853 10.7488 12.4353 10.832 12.0182 10.8694C11.7003 10.8979 11.3269 10.9034 10.9045 10.9045C10.9034 11.3269 10.8979 11.7003 10.8694 12.0182C10.832 12.4353 10.7488 12.853 10.5231 13.2486C10.2654 13.7005 9.89099 14.0749 9.43912 14.3326C9.04345 14.5583 8.62578 14.6415 8.20865 14.6789C7.81503 14.7143 7.33631 14.7142 6.78489 14.7142H5.40545C4.85403 14.7142 4.37531 14.7143 3.9817 14.6789C3.56456 14.6415 3.14689 14.5583 2.75122 14.3326C2.29935 14.0749 1.92498 13.7005 1.66724 13.2486C1.44155 12.853 1.35836 12.4353 1.32093 12.0182C1.2856 11.6246 1.28562 11.1458 1.28565 10.5944V9.21498C1.28562 8.66356 1.2856 8.18484 1.32093 7.79122C1.35836 7.37409 1.44155 6.95642 1.66724 6.56074C1.92498 6.10887 2.29935 5.73451 2.75122 5.47677C3.14689 5.25108 3.56456 5.16789 3.9817 5.13045C4.2996 5.10192 4.67301 5.09645 5.09541 5.09541C5.09645 4.67302 5.10192 4.2996 5.13045 3.9817C5.16789 3.56456 5.25108 3.14689 5.47676 2.75122C5.73451 2.29935 6.10887 1.92498 6.56074 1.66724C6.95642 1.44155 7.37409 1.35836 7.79122 1.32093C8.18484 1.2856 8.66356 1.28562 9.21498 1.28565ZM5.09541 7.09552C4.68397 7.09667 4.39263 7.10161 4.16046 7.12245C3.88053 7.14757 3.78516 7.18949 3.74214 7.21403C3.60139 7.29431 3.48478 7.41091 3.4045 7.55166C3.37997 7.59468 3.33804 7.69005 3.31292 7.96999C3.28659 8.26345 3.28565 8.65147 3.28565 9.25708V10.5523C3.28565 11.1579 3.28659 11.5459 3.31292 11.8394C3.33804 12.1193 3.37997 12.2147 3.4045 12.2577C3.48478 12.3985 3.60139 12.5151 3.74214 12.5954C3.78516 12.6199 3.88053 12.6618 4.16046 12.6869C4.45393 12.7133 4.84195 12.7142 5.44755 12.7142H6.74279C7.3484 12.7142 7.73641 12.7133 8.02988 12.6869C8.30981 12.6618 8.40518 12.6199 8.44821 12.5954C8.58895 12.5151 8.70556 12.3985 8.78584 12.2577C8.81038 12.2147 8.8523 12.1193 8.87742 11.8394C8.89825 11.6072 8.90319 11.3159 8.90435 10.9045C8.48219 10.9034 8.10898 10.8979 7.79122 10.8694C7.37409 10.832 6.95641 10.7488 6.56074 10.5231C6.10887 10.2654 5.73451 9.89099 5.47676 9.43912C5.25108 9.04345 5.16789 8.62578 5.13045 8.20865C5.10194 7.89089 5.09645 7.51767 5.09541 7.09552ZM7.96999 3.31292C7.69005 3.33804 7.59468 3.37997 7.55166 3.4045C7.41091 3.48478 7.29431 3.60139 7.21403 3.74214C7.18949 3.78516 7.14757 3.88053 7.12245 4.16046C7.09611 4.45393 7.09517 4.84195 7.09517 5.44755V6.74279C7.09517 7.3484 7.09611 7.73641 7.12245 8.02988C7.14757 8.30981 7.18949 8.40518 7.21403 8.4482C7.29431 8.58895 7.41091 8.70556 7.55166 8.78584C7.59468 8.81038 7.69005 8.8523 7.96999 8.87742C8.26345 8.90376 8.65147 8.9047 9.25708 8.9047H10.5523C11.1579 8.9047 11.5459 8.90376 11.8394 8.87742C12.1193 8.8523 12.2147 8.81038 12.2577 8.78584C12.3985 8.70556 12.5151 8.58895 12.5954 8.4482C12.6199 8.40518 12.6618 8.30981 12.6869 8.02988C12.7133 7.73641 12.7142 7.3484 12.7142 6.74279V5.44755C12.7142 4.84195 12.7133 4.45393 12.6869 4.16046C12.6618 3.88053 12.6199 3.78516 12.5954 3.74214C12.5151 3.60139 12.3985 3.48478 12.2577 3.4045C12.2147 3.37997 12.1193 3.33804 11.8394 3.31292C11.5459 3.28659 11.1579 3.28565 10.5523 3.28565H9.25708C8.65147 3.28565 8.26345 3.28659 7.96999 3.31292Z"
    fill="#788181"
  /></svg
>`;var G4=Object.freeze({__proto__:null,copySvg:V4});const Z4=H` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`;var K4=Object.freeze({__proto__:null,cursorSvg:Z4});const Y4=H`<svg fill="none" viewBox="0 0 14 6">
  <path style="fill: var(--wui-color-bg-150);" d="M0 1h14L9.21 5.12a3.31 3.31 0 0 1-4.49 0L0 1Z" />
  <path
    style="stroke: var(--wui-color-inverse-100);"
    stroke-opacity=".05"
    d="M1.33 1.5h11.32L8.88 4.75l-.01.01a2.81 2.81 0 0 1-3.8 0l-.02-.01L1.33 1.5Z"
  />
  <path
    style="fill: var(--wui-color-bg-150);"
    d="M1.25.71h11.5L9.21 3.88a3.31 3.31 0 0 1-4.49 0L1.25.71Z"
  />
</svg> `;var J4=Object.freeze({__proto__:null,cursorTransparentSvg:Y4});const X4=H`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`;var Q4=Object.freeze({__proto__:null,desktopSvg:X4});const e6=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`;var t6=Object.freeze({__proto__:null,disconnectSvg:e6});const r6=H`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`;var i6=Object.freeze({__proto__:null,discordSvg:r6});const s6=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`;var n6=Object.freeze({__proto__:null,etherscanSvg:s6});const o6=H`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`;var a6=Object.freeze({__proto__:null,extensionSvg:o6});const c6=H`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`;var l6=Object.freeze({__proto__:null,externalLinkSvg:c6});const d6=H`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`;var u6=Object.freeze({__proto__:null,facebookSvg:d6});const h6=H`<svg style="border-radius: 9999px; overflow: hidden;"  fill="none" viewBox="0 0 1000 1000">
  <rect width="1000" height="1000" rx="9999" ry="9999" fill="#855DCD"/>
  <path fill="#855DCD" d="M0 0h1000v1000H0V0Z" />
  <path
    fill="#fff"
    d="M320 248h354v504h-51.96V521.13h-.5c-5.76-63.8-59.31-113.81-124.54-113.81s-118.78 50-124.53 113.81h-.5V752H320V248Z"
  />
  <path
    fill="#fff"
    d="m225 320 21.16 71.46h17.9v289.09a16.29 16.29 0 0 0-16.28 16.24v19.49h-3.25a16.3 16.3 0 0 0-16.28 16.24V752h182.26v-19.48a16.22 16.22 0 0 0-16.28-16.24h-3.25v-19.5a16.22 16.22 0 0 0-16.28-16.23h-19.52V320H225Zm400.3 360.55a16.3 16.3 0 0 0-15.04 10.02 16.2 16.2 0 0 0-1.24 6.22v19.49h-3.25a16.29 16.29 0 0 0-16.27 16.24V752h182.24v-19.48a16.23 16.23 0 0 0-16.27-16.24h-3.25v-19.5a16.2 16.2 0 0 0-10.04-15 16.3 16.3 0 0 0-6.23-1.23v-289.1h17.9L775 320H644.82v360.55H625.3Z"
  />
</svg>`;var p6=Object.freeze({__proto__:null,farcasterSvg:h6});const f6=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`;var g6=Object.freeze({__proto__:null,filtersSvg:f6});const w6=H`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`;var m6=Object.freeze({__proto__:null,githubSvg:w6});const v6=H`<svg fill="none" viewBox="0 0 40 40">
  <path
    fill="#4285F4"
    d="M32.74 20.3c0-.93-.08-1.81-.24-2.66H20.26v5.03h7a6 6 0 0 1-2.62 3.91v3.28h4.22c2.46-2.27 3.88-5.6 3.88-9.56Z"
  />
  <path
    fill="#34A853"
    d="M20.26 33a12.4 12.4 0 0 0 8.6-3.14l-4.22-3.28a7.74 7.74 0 0 1-4.38 1.26 7.76 7.76 0 0 1-7.28-5.36H8.65v3.36A12.99 12.99 0 0 0 20.26 33Z"
  />
  <path
    fill="#FBBC05"
    d="M12.98 22.47a7.79 7.79 0 0 1 0-4.94v-3.36H8.65a12.84 12.84 0 0 0 0 11.66l3.37-2.63.96-.73Z"
  />
  <path
    fill="#EA4335"
    d="M20.26 12.18a7.1 7.1 0 0 1 4.98 1.93l3.72-3.72A12.47 12.47 0 0 0 20.26 7c-5.08 0-9.47 2.92-11.6 7.17l4.32 3.36a7.76 7.76 0 0 1 7.28-5.35Z"
  />
</svg>`;var b6=Object.freeze({__proto__:null,googleSvg:v6});const y6=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`;var C6=Object.freeze({__proto__:null,helpCircleSvg:y6});const x6=H`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M4.98926 3.73932C4.2989 3.73932 3.73926 4.29896 3.73926 4.98932C3.73926 5.67968 4.2989 6.23932 4.98926 6.23932C5.67962 6.23932 6.23926 5.67968 6.23926 4.98932C6.23926 4.29896 5.67962 3.73932 4.98926 3.73932Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.60497 0.500001H6.39504C5.41068 0.499977 4.59185 0.499958 3.93178 0.571471C3.24075 0.64634 2.60613 0.809093 2.04581 1.21619C1.72745 1.44749 1.44749 1.72745 1.21619 2.04581C0.809093 2.60613 0.64634 3.24075 0.571471 3.93178C0.499958 4.59185 0.499977 5.41065 0.500001 6.39501V7.57815C0.499998 8.37476 0.499995 9.05726 0.534869 9.62725C0.570123 10.2034 0.644114 10.7419 0.828442 11.2302C0.925651 11.4877 1.05235 11.7287 1.21619 11.9542C1.44749 12.2726 1.72745 12.5525 2.04581 12.7838C2.60613 13.1909 3.24075 13.3537 3.93178 13.4285C4.59185 13.5001 5.41066 13.5 6.39503 13.5H7.60496C8.58933 13.5 9.40815 13.5001 10.0682 13.4285C10.7593 13.3537 11.3939 13.1909 11.9542 12.7838C12.2726 12.5525 12.5525 12.2726 12.7838 11.9542C13.1909 11.3939 13.3537 10.7593 13.4285 10.0682C13.5 9.40816 13.5 8.58935 13.5 7.60497V6.39505C13.5 5.41068 13.5 4.59185 13.4285 3.93178C13.3537 3.24075 13.1909 2.60613 12.7838 2.04581C12.5525 1.72745 12.2726 1.44749 11.9542 1.21619C11.3939 0.809093 10.7593 0.64634 10.0682 0.571471C9.40816 0.499958 8.58933 0.499977 7.60497 0.500001ZM3.22138 2.83422C3.38394 2.71612 3.62634 2.61627 4.14721 2.55984C4.68679 2.50138 5.39655 2.5 6.45 2.5H7.55C8.60345 2.5 9.31322 2.50138 9.8528 2.55984C10.3737 2.61627 10.6161 2.71612 10.7786 2.83422C10.9272 2.94216 11.0578 3.07281 11.1658 3.22138C11.2839 3.38394 11.3837 3.62634 11.4402 4.14721C11.4986 4.68679 11.5 5.39655 11.5 6.45V6.49703C10.9674 6.11617 10.386 5.84936 9.74213 5.81948C8.40536 5.75745 7.3556 6.73051 6.40509 7.84229C6.33236 7.92737 6.27406 7.98735 6.22971 8.02911L6.1919 8.00514L6.17483 7.99427C6.09523 7.94353 5.98115 7.87083 5.85596 7.80302C5.56887 7.64752 5.18012 7.4921 4.68105 7.4921C4.66697 7.4921 4.6529 7.49239 4.63884 7.49299C3.79163 7.52878 3.09922 8.1106 2.62901 8.55472C2.58751 8.59392 2.54594 8.6339 2.50435 8.6745C2.50011 8.34653 2.5 7.97569 2.5 7.55V6.45C2.5 5.39655 2.50138 4.68679 2.55984 4.14721C2.61627 3.62634 2.71612 3.38394 2.83422 3.22138C2.94216 3.07281 3.07281 2.94216 3.22138 2.83422ZM10.3703 8.14825C10.6798 8.37526 11.043 8.71839 11.4832 9.20889C11.4744 9.44992 11.4608 9.662 11.4402 9.8528C11.3837 10.3737 11.2839 10.6161 11.1658 10.7786C11.0578 10.9272 10.9272 11.0578 10.7786 11.1658C10.6161 11.2839 10.3737 11.3837 9.8528 11.4402C9.31322 11.4986 8.60345 11.5 7.55 11.5H6.45C5.39655 11.5 4.68679 11.4986 4.14721 11.4402C3.62634 11.3837 3.38394 11.2839 3.22138 11.1658C3.15484 11.1174 3.0919 11.0645 3.03298 11.0075C3.10126 10.9356 3.16806 10.8649 3.23317 10.7959L3.29772 10.7276C3.55763 10.4525 3.78639 10.2126 4.00232 10.0087C4.22016 9.80294 4.39412 9.66364 4.53524 9.57742C4.63352 9.51738 4.69022 9.49897 4.71275 9.49345C4.76387 9.49804 4.81803 9.51537 4.90343 9.56162C4.96409 9.59447 5.02355 9.63225 5.11802 9.69238L5.12363 9.69595C5.20522 9.74789 5.32771 9.82587 5.46078 9.89278C5.76529 10.0459 6.21427 10.186 6.74977 10.0158C7.21485 9.86796 7.59367 9.52979 7.92525 9.14195C8.91377 7.98571 9.38267 7.80495 9.64941 7.81733C9.7858 7.82366 10.0101 7.884 10.3703 8.14825Z" fill="currentColor"/>
</svg>`;var E6=Object.freeze({__proto__:null,imageSvg:x6});const I6=H`<svg
 xmlns="http://www.w3.org/2000/svg"
 width="28"
 height="28"
 viewBox="0 0 28 28"
 fill="none">
  <path
    fill="#949E9E"
    fill-rule="evenodd"
    d="M7.974 2.975h12.052c1.248 0 2.296 0 3.143.092.89.096 1.723.307 2.461.844a4.9 4.9 0 0 1 1.084 1.084c.537.738.748 1.57.844 2.461.092.847.092 1.895.092 3.143v6.802c0 1.248 0 2.296-.092 3.143-.096.89-.307 1.723-.844 2.461a4.9 4.9 0 0 1-1.084 1.084c-.738.537-1.57.748-2.461.844-.847.092-1.895.092-3.143.092H7.974c-1.247 0-2.296 0-3.143-.092-.89-.096-1.723-.307-2.461-.844a4.901 4.901 0 0 1-1.084-1.084c-.537-.738-.748-1.571-.844-2.461C.35 19.697.35 18.649.35 17.4v-6.802c0-1.248 0-2.296.092-3.143.096-.89.307-1.723.844-2.461A4.9 4.9 0 0 1 2.37 3.91c.738-.537 1.571-.748 2.461-.844.847-.092 1.895-.092 3.143-.092ZM5.133 5.85c-.652.071-.936.194-1.117.326a2.1 2.1 0 0 0-.465.465c-.132.181-.255.465-.325 1.117-.074.678-.076 1.573-.076 2.917v6.65c0 1.344.002 2.239.076 2.917.07.652.193.936.325 1.117a2.1 2.1 0 0 0 .465.465c.181.132.465.255 1.117.326.678.073 1.574.075 2.917.075h11.9c1.344 0 2.239-.002 2.917-.075.652-.071.936-.194 1.117-.326.179-.13.335-.286.465-.465.132-.181.255-.465.326-1.117.073-.678.075-1.573.075-2.917v-6.65c0-1.344-.002-2.239-.075-2.917-.071-.652-.194-.936-.326-1.117a2.1 2.1 0 0 0-.465-.465c-.181-.132-.465-.255-1.117-.326-.678-.073-1.573-.075-2.917-.075H8.05c-1.343 0-2.239.002-2.917.075Zm.467 7.275a3.15 3.15 0 1 1 6.3 0 3.15 3.15 0 0 1-6.3 0Zm8.75-1.75a1.4 1.4 0 0 1 1.4-1.4h3.5a1.4 1.4 0 0 1 0 2.8h-3.5a1.4 1.4 0 0 1-1.4-1.4Zm0 5.25a1.4 1.4 0 0 1 1.4-1.4H21a1.4 1.4 0 1 1 0 2.8h-5.25a1.4 1.4 0 0 1-1.4-1.4Z"
    clip-rule="evenodd"/>
</svg>`;var A6=Object.freeze({__proto__:null,idSvg:I6});const N6=H`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`;var k6=Object.freeze({__proto__:null,infoCircleSvg:N6});const S6=H`<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.00177 1.78569C3.8179 1.78569 2.85819 2.74508 2.85819 3.92855C2.85819 4.52287 3.09928 5.05956 3.49077 5.4485L3.5005 5.45817C3.64381 5.60054 3.76515 5.72108 3.85631 5.81845C3.93747 5.90512 4.05255 6.03218 4.12889 6.1805C4.16999 6.26034 4.19 6.30843 4.21768 6.39385C4.22145 6.40546 4.22499 6.41703 4.22833 6.42855H5.77521C5.77854 6.41703 5.78208 6.40547 5.78585 6.39385C5.81353 6.30843 5.83354 6.26034 5.87464 6.1805C5.95098 6.03218 6.06606 5.90512 6.14722 5.81845C6.23839 5.72108 6.35973 5.60053 6.50304 5.45816L6.51276 5.4485C6.90425 5.05956 7.14534 4.52287 7.14534 3.92855C7.14534 2.74508 6.18563 1.78569 5.00177 1.78569ZM5.71629 7.85712H4.28724C4.28724 8.21403 4.28876 8.40985 4.30703 8.54571C4.30727 8.54748 4.30751 8.54921 4.30774 8.55091C4.30944 8.55115 4.31118 8.55138 4.31295 8.55162C4.44884 8.56989 4.64474 8.5714 5.00177 8.5714C5.3588 8.5714 5.55469 8.56989 5.69059 8.55162C5.69236 8.55138 5.69409 8.55115 5.69579 8.55091C5.69603 8.54921 5.69627 8.54748 5.6965 8.54571C5.71477 8.40985 5.71629 8.21403 5.71629 7.85712ZM2.85819 7.14283C2.85819 6.9948 2.85796 6.91114 2.8548 6.85032C2.85461 6.84656 2.85441 6.84309 2.85421 6.83988C2.84393 6.8282 2.83047 6.81334 2.81301 6.79469C2.74172 6.71856 2.63908 6.61643 2.48342 6.46178C1.83307 5.81566 1.42914 4.91859 1.42914 3.92855C1.42914 1.9561 3.02866 0.357117 5.00177 0.357117C6.97487 0.357117 8.57439 1.9561 8.57439 3.92855C8.57439 4.91859 8.17047 5.81566 7.52012 6.46178C7.36445 6.61643 7.26182 6.71856 7.19053 6.79469C7.17306 6.81334 7.1596 6.8282 7.14932 6.83988C7.14912 6.84309 7.14892 6.84656 7.14873 6.85032C7.14557 6.91114 7.14534 6.9948 7.14534 7.14283V7.85712C7.14534 7.87009 7.14535 7.88304 7.14535 7.89598C7.14541 8.19889 7.14547 8.49326 7.11281 8.73606C7.076 9.00978 6.98631 9.32212 6.72678 9.58156C6.46726 9.841 6.15481 9.93065 5.881 9.96745C5.63813 10.0001 5.34365 10 5.04064 9.99998C5.0277 9.99998 5.01474 9.99998 5.00177 9.99998C4.98879 9.99998 4.97583 9.99998 4.96289 9.99998C4.65988 10 4.36541 10.0001 4.12253 9.96745C3.84872 9.93065 3.53628 9.841 3.27675 9.58156C3.01722 9.32212 2.92753 9.00978 2.89072 8.73606C2.85807 8.49326 2.85812 8.19889 2.85818 7.89598C2.85819 7.88304 2.85819 7.87008 2.85819 7.85712V7.14283ZM7.1243 6.86977C7.12366 6.87069 7.1233 6.87116 7.12327 6.87119C7.12323 6.87123 7.12356 6.87076 7.1243 6.86977ZM2.88027 6.8712C2.88025 6.87119 2.87988 6.8707 2.87921 6.86975C2.87995 6.87072 2.88028 6.8712 2.88027 6.8712Z" fill="#949E9E"/>
</svg>`;var _6=Object.freeze({__proto__:null,lightbulbSvg:S6});const P6=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`;var T6=Object.freeze({__proto__:null,mailSvg:P6});const O6=H`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`;var $6=Object.freeze({__proto__:null,mobileSvg:O6});const R6=H`<svg fill="none" viewBox="0 0 41 40">
  <path
    style="fill: var(--wui-color-fg-100);"
    fill-opacity=".05"
    d="M.6 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z"
  />
  <path
    fill="#949E9E"
    d="M15.6 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM23.1 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM28.1 22.81a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
  />
</svg>`;var L6=Object.freeze({__proto__:null,moreSvg:R6});const M6=H`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`;var B6=Object.freeze({__proto__:null,networkPlaceholderSvg:M6});const U6=H`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`;var D6=Object.freeze({__proto__:null,nftPlaceholderSvg:U6});const j6=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`;var z6=Object.freeze({__proto__:null,offSvg:j6});const H6=H` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`;var q6=Object.freeze({__proto__:null,playStoreSvg:H6});const W6=H`<svg
  width="13"
  height="12"
  viewBox="0 0 13 12"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0.794373 5.99982C0.794373 5.52643 1.17812 5.14268 1.6515 5.14268H5.643V1.15109C5.643 0.677701 6.02675 0.293946 6.50012 0.293945C6.9735 0.293946 7.35725 0.677701 7.35725 1.15109V5.14268H11.3488C11.8221 5.14268 12.2059 5.52643 12.2059 5.99982C12.2059 6.47321 11.8221 6.85696 11.3488 6.85696H7.35725V10.8486C7.35725 11.3219 6.9735 11.7057 6.50012 11.7057C6.02675 11.7057 5.643 11.3219 5.643 10.8486V6.85696H1.6515C1.17812 6.85696 0.794373 6.47321 0.794373 5.99982Z"
  /></svg
>`;var F6=Object.freeze({__proto__:null,plusSvg:W6});const V6=H`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`;var G6=Object.freeze({__proto__:null,qrCodeIcon:V6});const Z6=H`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    d="M8.8071 0.292893C9.19763 0.683417 9.19763 1.31658 8.8071 1.70711L6.91421 3.6H11.8404C14.3368 3.6 16.5533 5.1975 17.3427 7.56588L17.4487 7.88377C17.6233 8.40772 17.3402 8.97404 16.8162 9.14868C16.2923 9.32333 15.726 9.04017 15.5513 8.51623L15.4453 8.19834C14.9281 6.64664 13.476 5.6 11.8404 5.6H6.91421L8.8071 7.49289C9.19763 7.88342 9.19763 8.51658 8.8071 8.90711C8.41658 9.29763 7.78341 9.29763 7.39289 8.90711L3.79289 5.30711C3.40236 4.91658 3.40236 4.28342 3.79289 3.89289L7.39289 0.292893C7.78341 -0.0976311 8.41658 -0.0976311 8.8071 0.292893ZM4.18377 10.8513C4.70771 10.6767 5.27403 10.9598 5.44868 11.4838L5.55464 11.8017C6.07188 13.3534 7.52401 14.4 9.15964 14.4L14.0858 14.4L12.1929 12.5071C11.8024 12.1166 11.8024 11.4834 12.1929 11.0929C12.5834 10.7024 13.2166 10.7024 13.6071 11.0929L17.2071 14.6929C17.5976 15.0834 17.5976 15.7166 17.2071 16.1071L13.6071 19.7071C13.2166 20.0976 12.5834 20.0976 12.1929 19.7071C11.8024 19.3166 11.8024 18.6834 12.1929 18.2929L14.0858 16.4L9.15964 16.4C6.66314 16.4 4.44674 14.8025 3.65728 12.4341L3.55131 12.1162C3.37667 11.5923 3.65983 11.026 4.18377 10.8513Z"
  /></svg
>`;var K6=Object.freeze({__proto__:null,recycleHorizontalSvg:Z6});const Y6=H`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`;var J6=Object.freeze({__proto__:null,refreshSvg:Y6});const X6=H`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`;var Q6=Object.freeze({__proto__:null,searchSvg:X6});const e8=H`<svg fill="none" viewBox="0 0 21 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.3808 4.34812C13.72 4.47798 12.8501 4.7587 11.5748 5.17296L9.00869 6.00646C6.90631 6.68935 5.40679 7.17779 4.38121 7.63178C3.87166 7.85734 3.5351 8.05091 3.32022 8.22035C3.11183 8.38466 3.07011 8.48486 3.05969 8.51817C2.98058 8.77103 2.98009 9.04195 3.05831 9.29509C3.06861 9.32844 3.10998 9.42878 3.31777 9.59384C3.53205 9.76404 3.86792 9.95881 4.37667 10.1862C5.29287 10.5957 6.58844 11.0341 8.35529 11.6164L10.8876 8.59854C11.2426 8.17547 11.8733 8.12028 12.2964 8.47528C12.7195 8.83029 12.7746 9.46104 12.4196 9.88412L9.88738 12.9019C10.7676 14.5408 11.4244 15.7406 11.9867 16.5718C12.299 17.0333 12.5491 17.3303 12.7539 17.5117C12.9526 17.6877 13.0586 17.711 13.0932 17.7154C13.3561 17.7484 13.6228 17.7009 13.8581 17.5791C13.8891 17.563 13.9805 17.5046 14.1061 17.2708C14.2357 17.0298 14.3679 16.6647 14.5015 16.1237C14.7705 15.0349 14.9912 13.4733 15.2986 11.2843L15.6738 8.61249C15.8603 7.28456 15.9857 6.37917 15.9989 5.7059C16.012 5.03702 15.9047 4.8056 15.8145 4.69183C15.7044 4.55297 15.5673 4.43792 15.4114 4.35365C15.2837 4.28459 15.0372 4.2191 14.3808 4.34812ZM7.99373 13.603C6.11919 12.9864 4.6304 12.4902 3.5606 12.0121C2.98683 11.7557 2.4778 11.4808 2.07383 11.1599C1.66337 10.8339 1.31312 10.4217 1.14744 9.88551C0.949667 9.24541 0.950886 8.56035 1.15094 7.92096C1.31852 7.38534 1.67024 6.97442 2.08185 6.64985C2.48697 6.33041 2.99697 6.05734 3.57166 5.80295C4.70309 5.3021 6.30179 4.78283 8.32903 4.12437L11.0196 3.25042C12.2166 2.86159 13.2017 2.54158 13.9951 2.38566C14.8065 2.22618 15.6202 2.19289 16.3627 2.59437C16.7568 2.80747 17.1035 3.09839 17.3818 3.4495C17.9062 4.111 18.0147 4.91815 17.9985 5.74496C17.9827 6.55332 17.8386 7.57903 17.6636 8.82534L17.2701 11.6268C16.9737 13.7376 16.7399 15.4022 16.4432 16.6034C16.2924 17.2135 16.1121 17.7632 15.8678 18.2176C15.6197 18.6794 15.2761 19.0971 14.7777 19.3551C14.1827 19.6632 13.5083 19.7833 12.8436 19.6997C12.2867 19.6297 11.82 19.3563 11.4277 19.0087C11.0415 18.6666 10.6824 18.213 10.3302 17.6925C9.67361 16.722 8.92648 15.342 7.99373 13.603Z"
    clip-rule="evenodd"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
  ></svg></svg
>`;var t8=Object.freeze({__proto__:null,sendSvg:e8});const r8=H`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`;var i8=Object.freeze({__proto__:null,swapHorizontalSvg:r8});const s8=H`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.7306 3.24213C14.0725 3.58384 14.0725 4.13786 13.7306 4.47957L10.7418 7.46737C10.4 7.80908 9.84581 7.80908 9.50399 7.46737C9.16216 7.12567 9.16216 6.57165 9.50399 6.22994L10.9986 4.73585H5.34082C4.85741 4.73585 4.46553 4.3441 4.46553 3.86085C4.46553 3.3776 4.85741 2.98585 5.34082 2.98585L10.9986 2.98585L9.50399 1.49177C9.16216 1.15006 9.16216 0.596037 9.50399 0.254328C9.84581 -0.0873803 10.4 -0.0873803 10.7418 0.254328L13.7306 3.24213ZM9.52515 10.1352C9.52515 10.6185 9.13327 11.0102 8.64986 11.0102L2.9921 11.0102L4.48669 12.5043C4.82852 12.846 4.82852 13.4001 4.48669 13.7418C4.14487 14.0835 3.59066 14.0835 3.24884 13.7418L0.26003 10.754C0.0958806 10.5899 0.0036621 10.3673 0.00366211 10.1352C0.00366212 9.90318 0.0958806 9.68062 0.26003 9.51652L3.24884 6.52872C3.59066 6.18701 4.14487 6.18701 4.48669 6.52872C4.82851 6.87043 4.82851 7.42445 4.48669 7.76616L2.9921 9.26024L8.64986 9.26024C9.13327 9.26024 9.52515 9.65199 9.52515 10.1352Z"
    fill="currentColor"
  />
</svg>

`;var n8=Object.freeze({__proto__:null,swapHorizontalMediumSvg:s8});const o8=H`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`;var a8=Object.freeze({__proto__:null,swapHorizontalBoldSvg:o8});const c8=H`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path 
    fill="currentColor"
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M8.3071 0.292893C8.69763 0.683417 8.69763 1.31658 8.3071 1.70711L6.41421 3.6H11.3404C13.8368 3.6 16.0533 5.1975 16.8427 7.56588L16.9487 7.88377C17.1233 8.40772 16.8402 8.97404 16.3162 9.14868C15.7923 9.32333 15.226 9.04017 15.0513 8.51623L14.9453 8.19834C14.4281 6.64664 12.976 5.6 11.3404 5.6H6.41421L8.3071 7.49289C8.69763 7.88342 8.69763 8.51658 8.3071 8.90711C7.91658 9.29763 7.28341 9.29763 6.89289 8.90711L3.29289 5.30711C2.90236 4.91658 2.90236 4.28342 3.29289 3.89289L6.89289 0.292893C7.28341 -0.0976311 7.91658 -0.0976311 8.3071 0.292893ZM3.68377 10.8513C4.20771 10.6767 4.77403 10.9598 4.94868 11.4838L5.05464 11.8017C5.57188 13.3534 7.024 14.4 8.65964 14.4L13.5858 14.4L11.6929 12.5071C11.3024 12.1166 11.3024 11.4834 11.6929 11.0929C12.0834 10.7024 12.7166 10.7024 13.1071 11.0929L16.7071 14.6929C17.0976 15.0834 17.0976 15.7166 16.7071 16.1071L13.1071 19.7071C12.7166 20.0976 12.0834 20.0976 11.6929 19.7071C11.3024 19.3166 11.3024 18.6834 11.6929 18.2929L13.5858 16.4L8.65964 16.4C6.16314 16.4 3.94674 14.8025 3.15728 12.4341L3.05131 12.1162C2.87667 11.5923 3.15983 11.026 3.68377 10.8513Z" 
  />
</svg>`;var l8=Object.freeze({__proto__:null,swapHorizontalRoundedBoldSvg:c8});const d8=H`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`;var u8=Object.freeze({__proto__:null,swapVerticalSvg:d8});const h8=H`<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <g clip-path="url(#a)">
    <path fill="url(#b)" d="M0 0h32v32H0z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.034 15.252c4.975-2.167 8.293-3.596 9.953-4.287 4.74-1.971 5.725-2.314 6.366-2.325.142-.002.457.033.662.198.172.14.22.33.243.463.022.132.05.435.028.671-.257 2.7-1.368 9.248-1.933 12.27-.24 1.28-.71 1.708-1.167 1.75-.99.091-1.743-.655-2.703-1.284-1.502-.985-2.351-1.598-3.81-2.558-1.684-1.11-.592-1.721.368-2.718.252-.261 4.619-4.233 4.703-4.594.01-.045.02-.213-.08-.301-.1-.09-.246-.059-.353-.035-.15.034-2.55 1.62-7.198 4.758-.682.468-1.298.696-1.851.684-.61-.013-1.782-.344-2.653-.628-1.069-.347-1.918-.53-1.845-1.12.039-.308.462-.623 1.27-.944Z" fill="#fff"/>
  </g>
  <path d="M.5 16C.5 7.44 7.44.5 16 .5 24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16Z" stroke="#141414" stroke-opacity=".05"/>
  <defs>
    <linearGradient id="b" x1="1600" y1="0" x2="1600" y2="3176.27" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2AABEE"/>
      <stop offset="1" stop-color="#229ED9"/>
    </linearGradient>
    <clipPath id="a">
      <path d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16Z" fill="#fff"/>
    </clipPath>
  </defs>
</svg>`;var p8=Object.freeze({__proto__:null,telegramSvg:h8});const f8=H`<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 3.71875C6.0335 3.71875 5.25 2.93525 5.25 1.96875C5.25 1.00225 6.0335 0.21875 7 0.21875C7.9665 0.21875 8.75 1.00225 8.75 1.96875C8.75 2.93525 7.9665 3.71875 7 3.71875Z" fill="#949E9E"/>
  <path d="M7 8.96875C6.0335 8.96875 5.25 8.18525 5.25 7.21875C5.25 6.25225 6.0335 5.46875 7 5.46875C7.9665 5.46875 8.75 6.25225 8.75 7.21875C8.75 8.18525 7.9665 8.96875 7 8.96875Z" fill="#949E9E"/>
  <path d="M5.25 12.4688C5.25 13.4352 6.0335 14.2187 7 14.2187C7.9665 14.2187 8.75 13.4352 8.75 12.4688C8.75 11.5023 7.9665 10.7188 7 10.7188C6.0335 10.7188 5.25 11.5023 5.25 12.4688Z" fill="#949E9E"/>
</svg>`;var g8=Object.freeze({__proto__:null,threeDotsSvg:f8});const w8=H`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`;var m8=Object.freeze({__proto__:null,twitchSvg:w8});const v8=H`<svg fill="none" viewBox="0 0 41 40">
  <g clip-path="url(#a)">
    <path fill="#000" d="M.8 0h40v40H.8z" />
    <path
      fill="#fff"
      d="m22.63 18.46 7.14-8.3h-1.69l-6.2 7.2-4.96-7.2H11.2l7.5 10.9-7.5 8.71h1.7l6.55-7.61 5.23 7.61h5.72l-7.77-11.31Zm-9.13-7.03h2.6l11.98 17.13h-2.6L13.5 11.43Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M.8 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z" /></clipPath>
  </defs>
</svg>`;var Jh=Object.freeze({__proto__:null,xSvg:v8});const b8=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`;var y8=Object.freeze({__proto__:null,twitterIconSvg:b8});const C8=H`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`;var x8=Object.freeze({__proto__:null,verifySvg:C8});const E8=H`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`;var I8=Object.freeze({__proto__:null,verifyFilledSvg:E8});const A8=H`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`;var N8=Object.freeze({__proto__:null,walletSvg:A8});const k8=H`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,S8=H`
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_22274_4692)">
<path d="M0 6.64C0 4.17295 0 2.93942 0.525474 2.01817C0.880399 1.39592 1.39592 0.880399 2.01817 0.525474C2.93942 0 4.17295 0 6.64 0H9.36C11.8271 0 13.0606 0 13.9818 0.525474C14.6041 0.880399 15.1196 1.39592 15.4745 2.01817C16 2.93942 16 4.17295 16 6.64V9.36C16 11.8271 16 13.0606 15.4745 13.9818C15.1196 14.6041 14.6041 15.1196 13.9818 15.4745C13.0606 16 11.8271 16 9.36 16H6.64C4.17295 16 2.93942 16 2.01817 15.4745C1.39592 15.1196 0.880399 14.6041 0.525474 13.9818C0 13.0606 0 11.8271 0 9.36V6.64Z" fill="#C7B994"/>
<path d="M4.49038 5.76609C6.42869 3.86833 9.5713 3.86833 11.5096 5.76609L11.7429 5.99449C11.8398 6.08938 11.8398 6.24323 11.7429 6.33811L10.9449 7.11942C10.8964 7.16686 10.8179 7.16686 10.7694 7.11942L10.4484 6.80512C9.09617 5.48119 6.90381 5.48119 5.5516 6.80512L5.20782 7.14171C5.15936 7.18915 5.08079 7.18915 5.03234 7.14171L4.23434 6.3604C4.13742 6.26552 4.13742 6.11167 4.23434 6.01678L4.49038 5.76609ZM13.1599 7.38192L13.8702 8.07729C13.9671 8.17217 13.9671 8.32602 13.8702 8.4209L10.6677 11.5564C10.5708 11.6513 10.4137 11.6513 10.3168 11.5564L8.04388 9.33105C8.01965 9.30733 7.98037 9.30733 7.95614 9.33105L5.6833 11.5564C5.58638 11.6513 5.42925 11.6513 5.33234 11.5564L2.12982 8.42087C2.0329 8.32598 2.0329 8.17213 2.12982 8.07724L2.84004 7.38188C2.93695 7.28699 3.09408 7.28699 3.191 7.38188L5.46392 9.60726C5.48815 9.63098 5.52743 9.63098 5.55166 9.60726L7.82447 7.38188C7.92138 7.28699 8.07851 7.28699 8.17543 7.38187L10.4484 9.60726C10.4726 9.63098 10.5119 9.63098 10.5361 9.60726L12.809 7.38192C12.9059 7.28703 13.063 7.28703 13.1599 7.38192Z" fill="#202020"/>
</g>
<defs>
<clipPath id="clip0_22274_4692">
<path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="white"/>
</clipPath>
</defs>
</svg>
`,_8=H`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="11" transform="matrix(-1 0 0 1 23 1)" fill="#202020"/>
<circle cx="11" cy="11" r="11.5" transform="matrix(-1 0 0 1 23 1)" stroke="#C7B994" stroke-opacity="0.7"/>
<path d="M15.4523 11.0686L16.7472 9.78167C13.8205 6.87297 10.1838 6.87297 7.25708 9.78167L8.55201 11.0686C10.7779 8.85645 13.2279 8.85645 15.4538 11.0686H15.4523Z" fill="#C7B994"/>
<path d="M15.0199 14.067L12 11.0656L8.98 14.067L5.96004 11.0656L4.66663 12.3511L8.98 16.6393L12 13.638L15.0199 16.6393L19.3333 12.3511L18.0399 11.0656L15.0199 14.067Z" fill="#C7B994"/>
</svg>
`;var Tl=Object.freeze({__proto__:null,walletConnectSvg:k8,walletConnectLightBrownSvg:S8,walletConnectBrownSvg:_8});const P8=H`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`;var T8=Object.freeze({__proto__:null,walletPlaceholderSvg:P8});const O8=H`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`;var $8=Object.freeze({__proto__:null,warningCircleSvg:O8});const R8=H`<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.125 6.875C9.125 6.57833 9.21298 6.28832 9.3778 6.04165C9.54262 5.79497 9.77689 5.60271 10.051 5.48918C10.3251 5.37565 10.6267 5.34594 10.9176 5.40382C11.2086 5.4617 11.4759 5.60456 11.6857 5.81434C11.8954 6.02412 12.0383 6.29139 12.0962 6.58236C12.1541 6.87334 12.1244 7.17494 12.0108 7.44903C11.8973 7.72311 11.705 7.95738 11.4584 8.1222C11.2117 8.28703 10.9217 8.375 10.625 8.375C10.2272 8.375 9.84565 8.21696 9.56434 7.93566C9.28304 7.65436 9.125 7.27282 9.125 6.875ZM21.125 11C21.125 13.0025 20.5312 14.9601 19.4186 16.6251C18.3061 18.2902 16.7248 19.5879 14.8747 20.3543C13.0246 21.1206 10.9888 21.3211 9.02471 20.9305C7.06066 20.5398 5.25656 19.5755 3.84055 18.1595C2.42454 16.7435 1.46023 14.9393 1.06955 12.9753C0.678878 11.0112 0.879387 8.97543 1.64572 7.12533C2.41206 5.27523 3.70981 3.69392 5.37486 2.58137C7.0399 1.46882 8.99747 0.875 11 0.875C13.6844 0.877978 16.258 1.94567 18.1562 3.84383C20.0543 5.74199 21.122 8.3156 21.125 11ZM18.875 11C18.875 9.44247 18.4131 7.91992 17.5478 6.62488C16.6825 5.32985 15.4526 4.32049 14.0136 3.72445C12.5747 3.12841 10.9913 2.97246 9.46367 3.27632C7.93607 3.58017 6.53288 4.3302 5.43154 5.43153C4.3302 6.53287 3.58018 7.93606 3.27632 9.46366C2.97246 10.9913 3.12841 12.5747 3.72445 14.0136C4.32049 15.4526 5.32985 16.6825 6.62489 17.5478C7.91993 18.4131 9.44248 18.875 11 18.875C13.0879 18.8728 15.0896 18.0424 16.566 16.566C18.0424 15.0896 18.8728 13.0879 18.875 11ZM12.125 14.4387V11.375C12.125 10.8777 11.9275 10.4008 11.5758 10.0492C11.2242 9.69754 10.7473 9.5 10.25 9.5C9.98433 9.4996 9.72708 9.59325 9.52383 9.76435C9.32058 9.93544 9.18444 10.173 9.13952 10.4348C9.09461 10.6967 9.14381 10.966 9.27843 11.195C9.41304 11.4241 9.62438 11.5981 9.875 11.6863V14.75C9.875 15.2473 10.0725 15.7242 10.4242 16.0758C10.7758 16.4275 11.2527 16.625 11.75 16.625C12.0157 16.6254 12.2729 16.5318 12.4762 16.3607C12.6794 16.1896 12.8156 15.952 12.8605 15.6902C12.9054 15.4283 12.8562 15.159 12.7216 14.93C12.587 14.7009 12.3756 14.5269 12.125 14.4387Z" fill="currentColor"/>
</svg>`;var L8=Object.freeze({__proto__:null,infoSvg:R8});const M8=H`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0162 11.6312L9.55059 2.13937C9.39228 1.86862 9.16584 1.64405 8.8938 1.48798C8.62176 1.33192 8.3136 1.2498 7.99997 1.2498C7.68634 1.2498 7.37817 1.33192 7.10613 1.48798C6.83409 1.64405 6.60765 1.86862 6.44934 2.13937L0.983716 11.6312C0.830104 11.894 0.749146 12.1928 0.749146 12.4972C0.749146 12.8015 0.830104 13.1004 0.983716 13.3631C1.14027 13.6352 1.3664 13.8608 1.63889 14.0166C1.91139 14.1725 2.22044 14.253 2.53434 14.25H13.4656C13.7793 14.2528 14.0881 14.1721 14.3603 14.0163C14.6326 13.8604 14.8585 13.635 15.015 13.3631C15.1688 13.1005 15.2499 12.8017 15.2502 12.4973C15.2504 12.193 15.1696 11.8941 15.0162 11.6312ZM13.7162 12.6125C13.6908 12.6558 13.6541 12.6914 13.6101 12.7157C13.5661 12.7399 13.5164 12.7517 13.4662 12.75H2.53434C2.48415 12.7517 2.43442 12.7399 2.39042 12.7157C2.34641 12.6914 2.30976 12.6558 2.28434 12.6125C2.26278 12.5774 2.25137 12.5371 2.25137 12.4959C2.25137 12.4548 2.26278 12.4144 2.28434 12.3794L7.74997 2.88749C7.77703 2.84583 7.81408 2.8116 7.85774 2.7879C7.9014 2.7642 7.95029 2.75178 7.99997 2.75178C8.04964 2.75178 8.09854 2.7642 8.1422 2.7879C8.18586 2.8116 8.2229 2.84583 8.24997 2.88749L13.715 12.3794C13.7367 12.4143 13.7483 12.4546 13.7486 12.4958C13.7488 12.5369 13.7376 12.5773 13.7162 12.6125ZM7.24997 8.49999V6.49999C7.24997 6.30108 7.32898 6.11031 7.46964 5.96966C7.61029 5.82901 7.80105 5.74999 7.99997 5.74999C8.19888 5.74999 8.38964 5.82901 8.5303 5.96966C8.67095 6.11031 8.74997 6.30108 8.74997 6.49999V8.49999C8.74997 8.6989 8.67095 8.88967 8.5303 9.03032C8.38964 9.17097 8.19888 9.24999 7.99997 9.24999C7.80105 9.24999 7.61029 9.17097 7.46964 9.03032C7.32898 8.88967 7.24997 8.6989 7.24997 8.49999ZM8.99997 11C8.99997 11.1978 8.94132 11.3911 8.83144 11.5556C8.72155 11.72 8.56538 11.8482 8.38265 11.9239C8.19992 11.9996 7.99886 12.0194 7.80488 11.9808C7.6109 11.9422 7.43271 11.847 7.29286 11.7071C7.15301 11.5672 7.05777 11.3891 7.01918 11.1951C6.9806 11.0011 7.0004 10.8 7.07609 10.6173C7.15177 10.4346 7.27995 10.2784 7.4444 10.1685C7.60885 10.0586 7.80219 9.99999 7.99997 9.99999C8.26518 9.99999 8.51954 10.1053 8.70707 10.2929C8.89461 10.4804 8.99997 10.7348 8.99997 11Z" fill="currentColor"/>
</svg>
`;var B8=Object.freeze({__proto__:null,exclamationTriangleSvg:M8});const U8=H`<svg width="60" height="16" viewBox="0 0 60 16" fill="none"">
  <path d="M9.3335 4.66667C9.3335 2.08934 11.4229 0 14.0002 0H20.6669C23.2442 0 25.3335 2.08934 25.3335 4.66667V11.3333C25.3335 13.9106 23.2442 16 20.6669 16H14.0002C11.4229 16 9.3335 13.9106 9.3335 11.3333V4.66667Z" fill="#363636"/>
  <path d="M15.6055 11.0003L17.9448 4.66699H18.6316L16.2923 11.0003H15.6055Z" fill="#F6F6F6"/>
  <path d="M0 4.33333C0 1.9401 1.9401 0 4.33333 0C6.72657 0 8.66669 1.9401 8.66669 4.33333V11.6667C8.66669 14.0599 6.72657 16 4.33333 16C1.9401 16 0 14.0599 0 11.6667V4.33333Z" fill="#363636"/>
  <path d="M3.9165 9.99934V9.16602H4.74983V9.99934H3.9165Z" fill="#F6F6F6"/>
  <path d="M26 8C26 3.58172 29.3517 0 33.4863 0H52.5137C56.6483 0 60 3.58172 60 8C60 12.4183 56.6483 16 52.5137 16H33.4863C29.3517 16 26 12.4183 26 8Z" fill="#363636"/>
  <path d="M49.3687 9.95834V6.26232H50.0213V6.81966C50.256 6.40899 50.7326 6.16699 51.2606 6.16699C52.0599 6.16699 52.6173 6.67299 52.6173 7.65566V9.95834H51.972V7.69234C51.972 7.04696 51.6053 6.70966 51.07 6.70966C50.4906 6.70966 50.0213 7.17168 50.0213 7.82433V9.95834H49.3687Z" fill="#F6F6F6"/>
  <path d="M45.2538 9.95773L44.5718 6.26172H45.1877L45.6717 9.31242L46.3098 7.30306H46.9184L47.5491 9.29041L48.0404 6.26172H48.6564L47.9744 9.95773H47.2411L46.6178 8.03641L45.9871 9.95773H45.2538Z" fill="#F6F6F6"/>
  <path d="M42.3709 10.0536C41.2489 10.0536 40.5889 9.21765 40.5889 8.1103C40.5889 7.01035 41.2489 6.16699 42.3709 6.16699C43.4929 6.16699 44.1529 7.01035 44.1529 8.1103C44.1529 9.21765 43.4929 10.0536 42.3709 10.0536ZM42.3709 9.51096C43.1775 9.51096 43.4856 8.82164 43.4856 8.10296C43.4856 7.39163 43.1775 6.70966 42.3709 6.70966C41.5642 6.70966 41.2562 7.39163 41.2562 8.10296C41.2562 8.82164 41.5642 9.51096 42.3709 9.51096Z" fill="#F6F6F6"/>
  <path d="M38.2805 10.0536C37.1952 10.0536 36.5132 9.22499 36.5132 8.1103C36.5132 7.00302 37.1952 6.16699 38.2805 6.16699C39.1972 6.16699 40.0038 6.68766 39.9159 8.27896H37.1805C37.2319 8.96103 37.5472 9.5183 38.2805 9.5183C38.7718 9.5183 39.0945 9.21765 39.2045 8.87299H39.8499C39.7472 9.48903 39.1679 10.0536 38.2805 10.0536ZM37.1952 7.78765H39.2852C39.2338 7.04696 38.8892 6.70232 38.2805 6.70232C37.6132 6.70232 37.2832 7.18635 37.1952 7.78765Z" fill="#F6F6F6"/>
  <path d="M33.3828 9.95773V6.26172H34.0501V6.88506C34.2848 6.47439 34.6882 6.26172 35.1061 6.26172H35.9935V6.88506H35.0548C34.4682 6.88506 34.0501 7.26638 34.0501 8.00706V9.95773H33.3828Z" fill="#F6F6F6"/>
</svg>`;var D8=Object.freeze({__proto__:null,reownSvg:U8});export{rw as OPTIONAL_EVENTS,tw as OPTIONAL_METHODS,Dl as REQUIRED_EVENTS,Ul as REQUIRED_METHODS,vp as default};
