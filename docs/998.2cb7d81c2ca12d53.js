"use strict";(self.webpackChunkcountryApp=self.webpackChunkcountryApp||[]).push([[998],{3998:(ie,C,a)=>{a.r(C),a.d(C,{CountriesModule:()=>te});var c=a(6814),h=a(601),e=a(4946),b=a(6306),Z=a(2096),A=a(7398),l=a(9397),S=a(9862);let g=(()=>{var n;class o{constructor(t){this.http=t,this.apiUrl="https://restcountries.com/v3.1",this.cacheStore={byCapital:{term:"",countries:[]},byCountries:{term:"",countries:[]},byRegion:{region:"",countries:[]}},this.loadFromLocalStorage()}saveToLocalStorage(){localStorage.setItem("cacheStore",JSON.stringify(this.cacheStore))}loadFromLocalStorage(){localStorage.getItem("cacheStore")&&(this.cacheStore=JSON.parse(localStorage.getItem("cacheStore")))}getCountryRequest(t){return this.http.get(t).pipe((0,b.K)(r=>(0,Z.of)([])))}searchCountryByAlphacode(t){return this.http.get(`${this.apiUrl}/alpha/${t}`).pipe((0,A.U)(r=>r.length>0?r[0]:null),(0,b.K)(r=>(0,Z.of)(null)))}searchByCapital(t){return this.getCountryRequest(`${this.apiUrl}/capital/${t}`).pipe((0,l.b)(s=>this.cacheStore.byCapital={term:t,countries:s}),(0,l.b)(()=>this.saveToLocalStorage()))}searchByRegion(t){return this.getCountryRequest(`${this.apiUrl}/region/${t}`).pipe((0,l.b)(s=>this.cacheStore.byRegion={region:t,countries:s}),(0,l.b)(()=>this.saveToLocalStorage()))}searchByCountry(t){return this.getCountryRequest(`${this.apiUrl}/name/${t}`).pipe((0,l.b)(s=>this.cacheStore.byCountries={term:t,countries:s}),(0,l.b)(()=>this.saveToLocalStorage()))}}return(n=o).\u0275fac=function(t){return new(t||n)(e.LFG(S.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),o})();var U=a(8645),B=a(7394);class w extends B.w0{constructor(o,i){super()}schedule(o,i=0){return this}}const m={setInterval(n,o,...i){const{delegate:t}=m;return t?.setInterval?t.setInterval(n,o,...i):setInterval(n,o,...i)},clearInterval(n){const{delegate:o}=m;return(o?.clearInterval||clearInterval)(n)},delegate:void 0};var q=a(9039);const _={now:()=>(_.delegate||Date).now(),delegate:void 0};class d{constructor(o,i=d.now){this.schedulerActionCtor=o,this.now=i}schedule(o,i=0,t){return new this.schedulerActionCtor(this,o).schedule(t,i)}}d.now=_.now;const J=new class P extends d{constructor(o,i=d.now){super(o,i),this.actions=[],this._active=!1}flush(o){const{actions:i}=this;if(this._active)return void i.push(o);let t;this._active=!0;do{if(t=o.execute(o.state,o.delay))break}while(o=i.shift());if(this._active=!1,t){for(;o=i.shift();)o.unsubscribe();throw t}}}(class I extends w{constructor(o,i){super(o,i),this.scheduler=o,this.work=i,this.pending=!1}schedule(o,i=0){var t;if(this.closed)return this;this.state=o;const r=this.id,s=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(s,r,i)),this.pending=!0,this.delay=i,this.id=null!==(t=this.id)&&void 0!==t?t:this.requestAsyncId(s,this.id,i),this}requestAsyncId(o,i,t=0){return m.setInterval(o.flush.bind(o,this),t)}recycleAsyncId(o,i,t=0){if(null!=t&&this.delay===t&&!1===this.pending)return i;null!=i&&m.clearInterval(i)}execute(o,i){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const t=this._execute(o,i);if(t)return t;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(o,i){let r,t=!1;try{this.work(o)}catch(s){t=!0,r=s||new Error("Scheduled action threw falsy error")}if(t)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){const{id:o,scheduler:i}=this,{actions:t}=i;this.work=this.state=this.scheduler=null,this.pending=!1,(0,q.P)(t,this),null!=o&&(this.id=this.recycleAsyncId(i,o,null)),this.delay=null,super.unsubscribe()}}});var L=a(9360),O=a(8251);let x=(()=>{var n;class o{constructor(){this.debouncer=new U.x,this.placeholder="",this.initialValue="",this.onValue=new e.vpe,this.onDebounce=new e.vpe}ngOnInit(){this.debouncerSubcription=this.debouncer.pipe(function R(n,o=J){return(0,L.e)((i,t)=>{let r=null,s=null,u=null;const y=()=>{if(r){r.unsubscribe(),r=null;const p=s;s=null,t.next(p)}};function ne(){const p=u+n,T=o.now();if(T<p)return r=this.schedule(void 0,p-T),void t.add(r);y()}i.subscribe((0,O.x)(t,p=>{s=p,u=o.now(),r||(r=o.schedule(ne,n),t.add(r))},()=>{y(),t.complete()},void 0,()=>{s=r=null}))})}(1e3)).subscribe(t=>{this.onDebounce.emit(t)})}ngOnDestroy(){this.debouncerSubcription?.unsubscribe()}emitValue(t){this.onValue.emit(t)}onKeyPress(t){this.debouncer.next(t)}}return(n=o).\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["shared-search-box"]],inputs:{placeholder:"placeholder",initialValue:"initialValue"},outputs:{onValue:"onValue",onDebounce:"onDebounce"},decls:5,vars:2,consts:[[1,"input-group","mb-3"],["id","search-input",1,"input-group-text"],["type","text","aria-describedby","search-input",1,"form-control",3,"placeholder","value","keyup"],["txtSearchInput",""]],template:function(t,r){if(1&t){const s=e.EpF();e.TgZ(0,"div",0)(1,"span",1),e._uU(2,"\u{1f50d}"),e.qZA(),e.TgZ(3,"input",2,3),e.NdJ("keyup",function(){e.CHM(s);const y=e.MAs(4);return e.KtG(r.onKeyPress(y.value))}),e.qZA()()}2&t&&(e.xp6(3),e.Q6J("placeholder",r.placeholder)("value",r.initialValue))},encapsulation:2}),o})(),f=(()=>{var n;class o{}return(n=o).\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["shared-loading-spinner"]],inputs:{page:"page"},decls:15,vars:1,consts:[[1,"spinner-container","bg-dark","text-center"],["width","30","height","30","viewBox","0 0 45 45","xmlns","http://www.w3.org/2000/svg","stroke","#fff"],["fill","none","fill-rule","evenodd","transform","translate(1 1)","stroke-width","2"],["cx","22","cy","22","r","6","stroke-opacity","0"],["attributeName","r","begin","1.5s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","1.5s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","1.5s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["attributeName","r","begin","3s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","3s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","3s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["cx","22","cy","22","r","8"],["attributeName","r","begin","0s","dur","1.5s","values","6;1;2;3;4;5;6","calcMode","linear","repeatCount","indefinite"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"span"),e._uU(2),e.qZA(),e.O4$(),e.TgZ(3,"svg",1)(4,"g",2)(5,"circle",3),e._UZ(6,"animate",4)(7,"animate",5)(8,"animate",6),e.qZA(),e.TgZ(9,"circle",3),e._UZ(10,"animate",7)(11,"animate",8)(12,"animate",9),e.qZA(),e.TgZ(13,"circle",10),e._UZ(14,"animate",11),e.qZA()()()()),2&t&&(e.xp6(2),e.hij("Buscando ",r.page,""))},styles:[".spinner-container[_ngcontent-%COMP%]{align-items:center;background-color:#000;border-radius:20px;bottom:15px;color:#fff;display:flex;padding:5px 10px;position:fixed;right:15px;box-shadow:0 3px 5px #0003}span[_ngcontent-%COMP%]{margin-left:5px}"]}),o})();function F(n,o){1&n&&(e.TgZ(0,"div",2),e._uU(1," No hay pa\xedses que mostrar\n"),e.qZA())}const D=function(n){return["/countries/by",n]};function N(n,o){if(1&n&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._UZ(4,"img",6),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.ALo(11,"number"),e.qZA(),e.TgZ(12,"td")(13,"a",7),e._uU(14,"Info \u2139\ufe0f"),e.qZA()()()),2&n){const i=o.$implicit,t=o.index;e.xp6(2),e.Oqu(t+1),e.xp6(2),e.Q6J("src",i.flags.svg,e.LSH)("alt",i.name.common),e.xp6(2),e.Oqu(i.name.common),e.xp6(2),e.Oqu(i.capital),e.xp6(2),e.Oqu(e.lcZ(11,7,i.population)),e.xp6(3),e.Q6J("routerLink",e.VKq(9,D,i.cca3))}}function V(n,o){if(1&n&&(e.TgZ(0,"div",3)(1,"table",4)(2,"thead")(3,"tr")(4,"th"),e._uU(5,"#"),e.qZA(),e.TgZ(6,"th"),e._uU(7,"Bandera"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Nombre"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Cap\xedtal"),e.qZA(),e.TgZ(12,"th"),e._uU(13,"Poblaci\xf3n"),e.qZA(),e.TgZ(14,"th"),e._uU(15,"Acciones"),e.qZA()()(),e.TgZ(16,"tbody"),e.YNc(17,N,15,11,"tr",5),e.qZA()()()),2&n){const i=e.oxw();e.xp6(17),e.Q6J("ngForOf",i.countries)}}let v=(()=>{var n;class o{constructor(){this.countries=[]}}return(n=o).\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],["table",""],[1,"alert","alert-warning","text-center"],[1,"table-responsive"],[1,"table","table-hover","table-bordered","text-center"],[4,"ngFor","ngForOf"],["width","45",3,"src","alt"],["role","button",1,"btn","btn-outline-secondary","btn-sm","rounded",3,"routerLink"]],template:function(t,r){if(1&t&&(e.YNc(0,F,2,0,"div",0),e.YNc(1,V,18,1,"ng-template",null,1,e.W1O)),2&t){const s=e.MAs(2);e.Q6J("ngIf",0===r.countries.length)("ngIfElse",s)}},dependencies:[c.sg,c.O5,h.rH,c.JJ],encapsulation:2}),o})();function M(n,o){1&n&&e._UZ(0,"shared-loading-spinner",5),2&n&&e.Q6J("page","capital")}let E=(()=>{var n;class o{constructor(t){this.countriesService=t,this.countries=[],this.isLoading=!1,this.initialValue=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byCapital.countries,this.initialValue=this.countriesService.cacheStore.byCapital.term}searchByCapital(t){this.isLoading=!0,this.countriesService.searchByCapital(t).subscribe(r=>{this.countries=r,this.isLoading=!1})}}return(n=o).\u0275fac=function(t){return new(t||n)(e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["countries-by-capital-page"]],decls:11,vars:4,consts:[[1,"row"],[1,"col"],[3,"initialValue","placeholder","onDebounce"],[3,"page",4,"ngIf"],[3,"countries"],[3,"page"]],template:function(t,r){1&t&&(e.TgZ(0,"h2"),e._uU(1,"Por Capital"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),e.NdJ("onDebounce",function(u){return r.searchByCapital(u)}),e.qZA()()(),e.TgZ(6,"div",0)(7,"div",1),e._UZ(8,"hr"),e.YNc(9,M,1,1,"shared-loading-spinner",3),e._UZ(10,"countries-table",4),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("initialValue",r.initialValue)("placeholder","Buscar por capital"),e.xp6(4),e.Q6J("ngIf",r.isLoading),e.xp6(1),e.Q6J("countries",r.countries))},dependencies:[c.O5,x,f,v],encapsulation:2}),o})();function Q(n,o){1&n&&e._UZ(0,"shared-loading-spinner",5),2&n&&e.Q6J("page","pa\xeds")}let j=(()=>{var n;class o{constructor(t){this.countriesService=t,this.countries=[],this.isLoading=!1,this.initialValue=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byCountries.countries,this.initialValue=this.countriesService.cacheStore.byCountries.term}searchByCountry(t){this.isLoading=!0,this.countriesService.searchByCountry(t).subscribe(r=>{this.countries=r,this.isLoading=!1})}}return(n=o).\u0275fac=function(t){return new(t||n)(e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["countries-by-country-page"]],decls:11,vars:4,consts:[[1,"row"],[1,"col"],[3,"initialValue","placeholder","onDebounce"],[3,"page",4,"ngIf"],[3,"countries"],[3,"page"]],template:function(t,r){1&t&&(e.TgZ(0,"h2"),e._uU(1,"Por Pa\xeds"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),e.NdJ("onDebounce",function(u){return r.searchByCountry(u)}),e.qZA()()(),e.TgZ(6,"div",0)(7,"div",1),e._UZ(8,"hr"),e.YNc(9,Q,1,1,"shared-loading-spinner",3),e._UZ(10,"countries-table",4),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("initialValue",r.initialValue)("placeholder","Buscar por pa\xeds"),e.xp6(4),e.Q6J("ngIf",r.isLoading),e.xp6(1),e.Q6J("countries",r.countries))},dependencies:[c.O5,x,f,v],encapsulation:2}),o})();const Y=function(n){return{"btn-primary":n}};function k(n,o){if(1&n){const i=e.EpF();e.TgZ(0,"button",7),e.NdJ("click",function(){const s=e.CHM(i).$implicit,u=e.oxw();return e.KtG(u.searchByRegion(s))}),e._uU(1),e.qZA()}if(2&n){const i=o.$implicit,t=e.oxw();e.Q6J("ngClass",e.VKq(2,Y,t.selectRegion===i)),e.xp6(1),e.hij(" ",i," ")}}function $(n,o){1&n&&e._UZ(0,"shared-loading-spinner",8),2&n&&e.Q6J("page","reg\xedon")}let K=(()=>{var n;class o{constructor(t){this.countriesService=t,this.countries=[],this.isLoading=!1,this.regions=["Africa","Americas","Oceania","Europe","Asia"]}ngOnInit(){this.countries=this.countriesService.cacheStore.byRegion.countries,this.selectRegion=this.countriesService.cacheStore.byRegion.region}searchByRegion(t){this.isLoading=!0,this.selectRegion=t,this.countriesService.searchByRegion(t).subscribe(r=>{this.countries=r,this.isLoading=!1})}}return(n=o).\u0275fac=function(t){return new(t||n)(e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["countries-by-region-page"]],decls:12,vars:3,consts:[[1,"row"],[1,"col","text-center"],["role","group","aria-label","Basic outlined example",1,"btn-group"],["class","btn rounded-pill mx-1",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col"],[3,"page",4,"ngIf"],[3,"countries"],[1,"btn","rounded-pill","mx-1",3,"ngClass","click"],[3,"page"]],template:function(t,r){1&t&&(e.TgZ(0,"h2"),e._uU(1,"Por Reg\xedon"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1)(5,"div",2),e.YNc(6,k,2,4,"button",3),e.qZA()()(),e.TgZ(7,"div",0)(8,"div",4),e._UZ(9,"hr"),e.YNc(10,$,1,1,"shared-loading-spinner",5),e._UZ(11,"countries-table",6),e.qZA()()),2&t&&(e.xp6(6),e.Q6J("ngForOf",r.regions),e.xp6(4),e.Q6J("ngIf",r.isLoading),e.xp6(1),e.Q6J("countries",r.countries))},dependencies:[c.mk,c.sg,c.O5,f,v],encapsulation:2}),o})();var X=a(4664);function z(n,o){1&n&&(e.TgZ(0,"div",2),e._uU(1,"Espere por favor"),e.qZA())}function H(n,o){if(1&n&&(e.TgZ(0,"div")(1,"div",3)(2,"div",4)(3,"h3"),e._uU(4," Pa\xeds: "),e.TgZ(5,"strong"),e._uU(6),e.qZA(),e._UZ(7,"hr"),e.qZA()()(),e.TgZ(8,"div",5)(9,"div",6)(10,"h3"),e._uU(11,"Bandera"),e.qZA(),e._UZ(12,"img",7),e.qZA(),e.TgZ(13,"div",8)(14,"h3"),e._uU(15,"Informaci\xf3n"),e.qZA(),e.TgZ(16,"ul",9)(17,"li",10)(18,"strong"),e._uU(19,"Poblaci\xf3n: "),e.qZA(),e._uU(20),e.ALo(21,"number"),e.qZA(),e.TgZ(22,"li",10)(23,"strong"),e._uU(24,"C\xf3digo: "),e.qZA(),e._uU(25),e.qZA(),e.TgZ(26,"li",10)(27,"strong"),e._uU(28,"Cap\xedtal: "),e.qZA(),e._uU(29),e.qZA()()(),e.TgZ(30,"div",11)(31,"h3"),e._uU(32,"Traducciones"),e.qZA(),e.TgZ(33,"div",12)(34,"span",13),e._uU(35),e.qZA(),e.TgZ(36,"span",13),e._uU(37),e.qZA(),e.TgZ(38,"span",13),e._uU(39),e.qZA(),e.TgZ(40,"span",13),e._uU(41),e.qZA(),e.TgZ(42,"span",13),e._uU(43),e.qZA(),e.TgZ(44,"span",13),e._uU(45),e.qZA(),e.TgZ(46,"span",13),e._uU(47),e.qZA(),e.TgZ(48,"span",13),e._uU(49),e.qZA()()()()()),2&n){const i=e.oxw();e.xp6(6),e.Oqu(i.country.name.common),e.xp6(6),e.Q6J("src",i.country.flags.svg,e.LSH)("alt",i.country.name.common),e.xp6(8),e.hij(" ",e.lcZ(21,14,i.country.population)," "),e.xp6(5),e.hij(" ",i.country.cca3," "),e.xp6(4),e.hij(" ",i.country.capital," "),e.xp6(6),e.hij(" ",i.country.translations.ara.common," "),e.xp6(2),e.hij(" ",i.country.translations.spa.common," "),e.xp6(2),e.hij(" ",i.country.translations.bre.common," "),e.xp6(2),e.hij(" ",i.country.translations.ces.common," "),e.xp6(2),e.hij(" ",i.country.translations.fra.common," "),e.xp6(2),e.hij(" ",i.country.translations.ita.common," "),e.xp6(2),e.hij(" ",i.country.translations.kor.common," "),e.xp6(2),e.hij(" ",i.country.translations.zho.common," ")}}const G=[{path:"by-capital",component:E},{path:"by-country",component:j},{path:"by-region",component:K},{path:"by/:id",component:(()=>{var n;class o{constructor(t,r,s){this.activatedRoute=t,this.router=r,this.countriesService=s}ngOnInit(){this.activatedRoute.params.pipe((0,X.w)(({id:t})=>this.countriesService.searchCountryByAlphacode(t))).subscribe(t=>t?this.country=t:this.router.navigateByUrl(""))}}return(n=o).\u0275fac=function(t){return new(t||n)(e.Y36(h.gz),e.Y36(h.F0),e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["countries-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center","mt-2","rounded"],[1,"row","container-fluid"],[1,"col-12","mt-2"],[1,"row"],[1,"col-4"],[1,"img-thumbnail","rounded-3","border-0",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1","p-2","align-items-center","rounded-pill"]],template:function(t,r){if(1&t&&(e.YNc(0,z,2,0,"ng-template",null,0,e.W1O),e.YNc(2,H,50,16,"div",1)),2&t){const s=e.MAs(1);e.xp6(2),e.Q6J("ngIf",r.country)("ngIfElse",s)}},dependencies:[c.O5,c.JJ],encapsulation:2}),o})()},{path:"**",redirectTo:"by-capital"}];let W=(()=>{var n;class o{}return(n=o).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[h.Bz.forChild(G),h.Bz]}),o})();var ee=a(6208);let te=(()=>{var n;class o{}return(n=o).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,W,ee.m]}),o})()}}]);