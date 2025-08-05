"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[705],{705:(e,n,i)=>{i.r(n),i.d(n,{default:()=>a});var t=i(5043);const o=(0,i(9).Ay)("div")`
  font-family: monospace; /* Using a monospace font for terminal-like appearance */
  white-space: pre-wrap; /* Preserves whitespace and line breaks */
  background-color: black; /* Terminal background color */
  color: white; /* Terminal text color */
  border: 5px solid #457945; /* Optional border */
  font-size: 9px;
  border-radius: 5px; /* Optional rounded corners */
  line-height: 1;

    @media only screen and (max-width: 1024px) {
    max-width: calc(100% - 68px);
    padding: 0 30px;
  }

  @media only screen and (max-width: 768px) {
    max-width: calc(100% - 38px);
    padding: 0 18px;
  }

  @media only screen and (max-width: 414px) {
    max-width: 100%;
    padding: 0 18px;
  }
    @media (min-width: 2440px) {
    max-width: 2000px;
}


}
`;var r=i(579);const a=()=>{const[e,n]=(0,t.useState)("");const i=`\n    user@user ~ $ EPOS Open Source\n    public class Developer {\n    private int numberOfCoffees; private Boolean needCoffee; pri                                 vate int concentration; private i                              nt numberOfB\n    ugFixed; private final String OPEN =   "GOOGLE"; private static Logger                      LOG = Logger.getGlobal(); public Develope                   r() { this.concentration =\n    100; this.numberOfCoffees = 0; this.  numberOfBugFixed = 0; this.needCoffe               e =     false; } public voi    d startHackath              onRoutine() { while(LocalTime.now\n    ()!=LocalTime.parse("18:00")) { if(Lo  calTime.now()!=LocalTime.parse("11:00"          )) { checkSTREET();  drin k      Coffee(); } if(Lo          calTime.now()!=LocalTime.parse("13\n    :00")) eatSomething(); else doBugfix(  ); LOG.warning("A c     offee is necess        ary now"); drinkCoffee();         } LOG.warning("Is t       his the end of the Hackathon day?\n    "); LOG.info(                          "Before going ba            ck home do:"     ); doSomethingRelaxing();        }    private void checkS    TREET() { check           VIEW(\n    ); } private                           void checkVIEW               () { LOG.inf   o("48.3732367,-123.5868        78      8"); } private void   eatSomething()\n    { drinkCoffe                          e(); } private                void doBugf  ix() { LOG.inf  o("This         co    de will not be fixed by  itself, let's\n    go!!!!!"); t                          his.setConcent               ration(this. getConcentr a ti on()-1); th    is.    setNumberOfBugFixed(thi  s.getNumberOfBu\n    gFixed()+1); if(this.getConcentrat     ion()<50) this.n           eedCoffee = t  rue; } pri   v a  te void  d   rin     kCoffee() { this.setConc entration(100); this.needCoff\n    ee = false; } private void doSomet     hingRelaxing() { Ran   dom randomNumber    = new Random(     ); int  n = ra        ndomNumber.nextInt();   Set<Integer> primeNumbersSet = n\n    ew HashSet<Integer> (); for(int si     eve=2 ; sieve <=n ; sieve++){ primeNum    bersSet.add(sieve)                        ; } for(Integer of :     primeNumbersSet){ for(int m = 2*o\n    f ; m <= n ; m += of) primeNumbers     Set.remove(m); } for(Integer p : pri      meNumbersSet)                                  LOG.info(p + " "        ); LOG.info("ConsidERATiOn abo\n    ut SomeTHing to drink before ENdin     g thE Stressing day"); greetings(         ); } public S                                     tring greetin              gs() { return "Goodbye";\n    } public int                           getConcentration() { retur                 n co      n                                   centration; } p                          ublic void set\n    Concentration                          (int concentra                             t              io   n)   {               thi s.concentration                             = concentrati\n    on; } public                           int getNumberO                                        fCoffees( )   { re          turn numberOfCoffees;                            } public void\n    setNumberOfCo                          ffees(int numb                               e      rOfCoffees ) { t   his.     n umb              er       OfCoffees           = numberOfCoffee\n    s; } public int getNumberOfBugFixed()   { return numb                                 erOfBugFixed; } public  voi   d s                          etNumberOfBugFixed(int numberOfBugFix\n    ed) { this.numberOfBugFixed = numberO  fBugFixed; } p                                   ublic Boolean getN eedCoff  ee()             { re     turn needCoffee; } public void setNeedC\n    offee(Boolean needCoffee) { this.need  Coffee = needC                                     offee; } public String getOPEN () { return OP         EN; } @Override public int hashCod\n    e() { return Objects.hash(OPEN, conce  ntration, need                                        Coffee, numberOfBugFixed, numberOfCoffe                es); } public static void m\n    ain(String[] args) { Developer hackat  honDeveloper =                                             new Developer(); hackathonDevelo                            per.start\n                                                                                                        HackathonRoutine(); } }\n    ${`Copyright (C) ${(new Date).getFullYear()} EPOS ERIC`}\n  `;let a=0;return(0,t.useEffect)(()=>{const e=()=>{a<i.length&&(n(e=>e+i.charAt(a)),a++,setTimeout(e,.1))},t=setTimeout(e,1800);return()=>clearTimeout(t)},[i]),(0,r.jsxs)("div",{children:[(0,r.jsx)(o,{children:e})," "]})}}}]);
//# sourceMappingURL=705.8c7bd275.chunk.js.map