import React, { useEffect, useState } from 'react';
import { Demo } from './styles'; 

const Code: React.FC = () => {
  const [displayText, setDisplayText] = useState<string>('');

  function updateCopyrightYear(): string {
    const currentYear = new Date().getFullYear();  // Get the current year
    return `Copyright (C) ${currentYear} EPOS ERIC`;  // Return the updated copyright statement
  }
  const copyrightText = updateCopyrightYear();
  const text: string = `
    user@user ~ $ EPOS Open Source
    public class Developer {
    private int numberOfCoffees; private Boolean needCoffee; pri                                 vate int concentration; private i                              nt numberOfB
    ugFixed; private final String OPEN =   "GOOGLE"; private static Logger                      LOG = Logger.getGlobal(); public Develope                   r() { this.concentration =
    100; this.numberOfCoffees = 0; this.  numberOfBugFixed = 0; this.needCoffe               e =     false; } public voi    d startHackath              onRoutine() { while(LocalTime.now
    ()!=LocalTime.parse("18:00")) { if(Lo  calTime.now()!=LocalTime.parse("11:00"          )) { checkSTREET();  drin k      Coffee(); } if(Lo          calTime.now()!=LocalTime.parse("13
    :00")) eatSomething(); else doBugfix(  ); LOG.warning("A c     offee is necess        ary now"); drinkCoffee();         } LOG.warning("Is t       his the end of the Hackathon day?
    "); LOG.info(                          "Before going ba            ck home do:"     ); doSomethingRelaxing();        }    private void checkS    TREET() { check           VIEW(
    ); } private                           void checkVIEW               () { LOG.inf   o("48.3732367,-123.5868        78      8"); } private void   eatSomething()
    { drinkCoffe                          e(); } private                void doBugf  ix() { LOG.inf  o("This         co    de will not be fixed by  itself, let's
    go!!!!!"); t                          his.setConcent               ration(this. getConcentr a ti on()-1); th    is.    setNumberOfBugFixed(thi  s.getNumberOfBu
    gFixed()+1); if(this.getConcentrat     ion()<50) this.n           eedCoffee = t  rue; } pri   v a  te void  d   rin     kCoffee() { this.setConc entration(100); this.needCoff
    ee = false; } private void doSomet     hingRelaxing() { Ran   dom randomNumber    = new Random(     ); int  n = ra        ndomNumber.nextInt();   Set<Integer> primeNumbersSet = n
    ew HashSet<Integer> (); for(int si     eve=2 ; sieve <=n ; sieve++){ primeNum    bersSet.add(sieve)                        ; } for(Integer of :     primeNumbersSet){ for(int m = 2*o
    f ; m <= n ; m += of) primeNumbers     Set.remove(m); } for(Integer p : pri      meNumbersSet)                                  LOG.info(p + " "        ); LOG.info("ConsidERATiOn abo
    ut SomeTHing to drink before ENdin     g thE Stressing day"); greetings(         ); } public S                                     tring greetin              gs() { return "Goodbye";
    } public int                           getConcentration() { retur                 n co      n                                   centration; } p                          ublic void set
    Concentration                          (int concentra                             t              io   n)   {               thi s.concentration                             = concentrati
    on; } public                           int getNumberO                                        fCoffees( )   { re          turn numberOfCoffees;                            } public void
    setNumberOfCo                          ffees(int numb                               e      rOfCoffees ) { t   his.     n umb              er       OfCoffees           = numberOfCoffee
    s; } public int getNumberOfBugFixed()   { return numb                                 erOfBugFixed; } public  voi   d s                          etNumberOfBugFixed(int numberOfBugFix
    ed) { this.numberOfBugFixed = numberO  fBugFixed; } p                                   ublic Boolean getN eedCoff  ee()             { re     turn needCoffee; } public void setNeedC
    offee(Boolean needCoffee) { this.need  Coffee = needC                                     offee; } public String getOPEN () { return OP         EN; } @Override public int hashCod
    e() { return Objects.hash(OPEN, conce  ntration, need                                        Coffee, numberOfBugFixed, numberOfCoffe                es); } public static void m
    ain(String[] args) { Developer hackat  honDeveloper =                                             new Developer(); hackathonDevelo                            per.start
                                                                                                        HackathonRoutine(); } }
    ${copyrightText}
  `;
  
  const speed: number = 0.1; // Speed for typing effect
  let i: number = 0; // Index for the current character being displayed

  useEffect(() => {
    const typeItOut = () => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i)); // Append next character to displayText
        i++;
        setTimeout(typeItOut, speed); // Call the function again after 'speed' milliseconds
      }
    };

    const timeout = setTimeout(typeItOut, 1800); // Initial delay before starting the typing effect

    return () => clearTimeout(timeout); // Cleanup timeout on component unmount
  }, [text]);

  return (
    <div>
      <Demo>{displayText}</Demo> {/* Using the styled component */}
    </div>
  );
};

export default Code;
