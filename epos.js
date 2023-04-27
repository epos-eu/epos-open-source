// utilities
var get = function (selector, scope) {
  scope = scope ? scope : document;
  return scope.querySelector(selector);
};

var getAll = function (selector, scope) {
  scope = scope ? scope : document;
  return scope.querySelectorAll(selector);
};

// setup typewriter effect in the terminal demo
if (document.getElementsByClassName('demo').length > 0) {
  var i = 0;

  var txt = `EPOS Open Source

                                                                                                        public class Developer {
    private int numberOfCoffees; private   Boolean needCoffee; pri                                 vate int concentration; private i                              nt numberOfB
   ugFixed; private final String OPEN =   "GOOGLE"; private static Logger                      LOG = Logger.getGlobal(); public Develope                   r() { this.concentration =
    100; this.numberOfCoffees = 0; this.  numberOfBugFixed = 0; this.needCoffe               e =     false; } public voi    d startHackath              onRoutine() { while(LocalTime.now
   ()!=LocalTime.parse("18:00")) { if(Lo  calTime.now()!=LocalTime.parse("11:00"          )) { checkSTREET();  drin k      Coffee(); } if(Lo          calTime.now()!=LocalTime.parse("13
   :00")) eatSomething(); else doBugfix(  ); LOG.warning("A c     offee is necess        ary now"); drinkCoffee();         } LOG.warning("Is t       his the end of the Hackathon day?
   "); LOG.info(                          "Before going ba            ck home do:"     ); doSomethingRelaxing();        }    private void checkS    TREET() { check           VIEW(
   ); } private                           void checkVIEW               () { LOG.inf   o("48.3732367,-123.5868        78      8"); } private void   eatSomething()
    { drinkCoffe                          e(); } private                void doBugf  ix() { LOG.inf  o("This         co    de will not be fixed by  itself, let's
    go!!!!!"); t                          his.setConcent               ration(this. getConcentr a ti on()-1); th    is.    setNumberOfBugFixed(thi  s.getNumberOfBu
   gFixed()+1); if(this.getConcentrat     ion()<50) this.n           eedCoffee = t  rue; } pri   v a  te void  d   rin     kCoffee() { this.setConc entration(100); this.needCoff
   ee = false; } private void doSomet     hingRelaxing() { Ran   dom randomNumber    = new Random(     ); int  n = ra        ndomNumber.nextInt();   Set<Integer> primeNumbersSet = n
   ew HashSet<Integer> (); for(int si     eve=2 ; sieve <=n ; sieve++){ primeNum    bersSet.add(sieve)                        ; } for(Integer of :     primeNumbersSet){ for(int m = 2*o
   f ; m <= n ; m += of) primeNumbers     Set.remove(m); } for(Integer p : pri      meNumbersSet)                                  LOG.info(p + " "        ); LOG.info("ConsidERATiOn abo
   ut SomeTHing to drink before ENdin     g thE Stressing day"); greetings(         ); } public S                                     tring greetin              gs() { return "Goodbye";
   } public int                           getConcentration() { retur                 n co      n                                   centration; } p                          ublic void set
   Concentration                          (int concentra                             t              io   n)   {               thi s.concentration                             = concentrati
   on; } public                           int getNumberO                                        fCoffees( )   { re          turn numberOfCoffees;                            } public void
   setNumberOfCo                          ffees(int numb                               e      rOfCoffees ) { t   his.     n umb              er       OfCoffees           = numberOfCoffee
   s; } public int getNumberOfBugFixed()   { return numb                                 erOfBugFixed; } public  voi   d s                          etNumberOfBugFixed(int numberOfBugFix
   ed) { this.numberOfBugFixed = numberO  fBugFixed; } p                                   ublic Boolean getN eedCoff  ee()             { re     turn needCoffee; } public void setNeedC
   offee(Boolean needCoffee) { this.need  Coffee = needC                                     offee; } public String getOPEN () { return OP         EN; } @Override public int hashCod
   e() { return Objects.hash(OPEN, conce  ntration, need                                        Coffee, numberOfBugFixed, numberOfCoffe                es); } public static void m
   ain(String[] args) { Developer hackat  honDeveloper =                                             new Developer(); hackathonDevelo                            per.start
                                                                                                        HackathonRoutine(); } }
  Copyright (C) 2023  EPOS ERIC
  `;
  var speed = 1;

  function typeItOut () {
    if (i < txt.length) {
      document.getElementsByClassName('demo')[0].innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeItOut, speed);
    }
  }

  setTimeout(typeItOut, 1800);
}


// toggle tabs on codeblock
window.addEventListener("load", function() {
  // get all tab_containers in the document
  var tabContainers = getAll(".tab__container");

  // bind click event to each tab container
  for (var i = 0; i < tabContainers.length; i++) {
    get('.tab__menu', tabContainers[i]).addEventListener("click", tabClick);
  }

  // each click event is scoped to the tab_container
  function tabClick (event) {
    var scope = event.currentTarget.parentNode;
    var clickedTab = event.target;
    var tabs = getAll('.tab', scope);
    var panes = getAll('.tab__pane', scope);
    var activePane = get(`.${clickedTab.getAttribute('data-tab')}`, scope);

    // remove all active tab classes
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');
    }

    // remove all active pane classes
    for (var i = 0; i < panes.length; i++) {
      panes[i].classList.remove('active');
    }

    // apply active classes on desired tab and pane
    clickedTab.classList.add('active');
    activePane.classList.add('active');
  }
});

//in page scrolling for documentaiton page
var btns = getAll('.js-btn');
var sections = getAll('.js-section');

function setActiveLink(event) {
  // remove all active tab classes
  for (var i = 0; i < btns.length; i++) {
    btns[i].classList.remove('selected');
  }

  event.target.classList.add('selected');
}

function smoothScrollTo(i, event) {
  var element = sections[i];
  setActiveLink(event);

  window.scrollTo({
    'behavior': 'smooth',
    'top': element.offsetTop - 20,
    'left': 0
  });
}

if (btns.length && sections.length > 0) {
  for (var i = 0; i<btns.length; i++) {
    btns[i].addEventListener('click', smoothScrollTo.bind(this,i));
  }
}

// fix menu to page-top once user starts scrolling
window.addEventListener('scroll', function () {
  var docNav = get('.doc__nav > ul');

  if( docNav) {
    if (window.pageYOffset > 63) {
      docNav.classList.add('fixed');
    } else {
      docNav.classList.remove('fixed');
    }
  }
});

// responsive navigation
var topNav = get('.menu');
var icon = get('.toggle');

window.addEventListener('load', function(){
  function showNav() {
    if (topNav.className === 'menu') {
      topNav.className += ' responsive';
      icon.className += ' open';
    } else {
      topNav.className = 'menu';
      icon.classList.remove('open');
    }
  }
  icon.addEventListener('click', showNav);
});

