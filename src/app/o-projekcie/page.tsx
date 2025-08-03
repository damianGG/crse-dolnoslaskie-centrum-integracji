
import Image from "next/image";


export default function News() {
    return (
        <>
            <section
                className="wrapper"
                style={{
                    position: 'relative',
                    backgroundPosition: 'right',
                    backgroundImage: "url('/img/flaga-ue-tlo.png')",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div
                    className="overlay"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    }}
                />
                <div
                    className="container pt-5 pb-5 pt-md-10 pb-md-10 text-center"
                    style={{ position: 'relative', zIndex: 1 }}
                >
                    <div className="row">
                        <div className="col-md-9 col-lg-7 col-xl-5 mx-auto">
                            <h1 className="display-1 mb-3" style={{ color: 'white' }}>
                                O projekcie
                            </h1>
                            <p className="lead px-xxl-10"></p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mb-15 mt-15" >
                <p className="mb-3 fw-bold lead fs-lg">Wartość projektu: 2 038 647,26 zł </p>
                <p className="mb-3 fw-bold lead fs-lg mb-15 ">Wysokość wkładu Funduszy Europejskich: 1 427 053,08 zł</p>
                <div className=" mt-4 mb-15">
                    <p className="mb-3 fw-bold lead fs-lg">
                        Centrum Rozwoju Społeczno-Ekonomicznego realizuje projekt „Dolnośląskie
                        Centrum Integracji NEET”<br /><br />
                        Projekt współfinansowany z Europejskiego Funduszu Społecznego Plus (EFS+) w
                        ramach programu Fundusze Europejskie dla Dolnego Śląska 2021-2027, Priorytet nr
                        7 Fundusze Europejskie na rzecz rynku pracy i włączenia społecznego na Dolnym
                        Śląsku, Działanie nr 7.5 Aktywna integracja.                  </p>
                    <br />

                    <br />

                    <p className="mb-3 fw-bold lead fs-lg">
                        Głównym celem projektu jest wsparcie aktywnego włączenia społecznego w celu
                        promowania równości szans, niedyskryminacji i aktywnego uczestnictwa oraz
                        zwiększenie zdolności do zatrudnienia w szczególności grup w niekorzystnej sytuacji
                        - 100 osób młodych (60 kobiet, 40 mężczyzn) w wieku 18-29 lat, pozostających poza
                        zatrudnieniem, edukacją i szkoleniem (osoby z kategorii NEET), jednocześnie
                        wpisujących się w katalog osób wskazany w podrozdziale 4.2 pkt.1) Wytycznych

                        (wsk. szczeg. str. 20-21 Regul. wyboru proj.), które zamieszkują w rozumieniu
                        przepisów KC na obszarze woj. dolnośląskiego w okresie realizacji projektu tj.
                        1.03.2025-31.12.2026.
                        <br />
                        <br />
                    </p>
                    <p className="mb-3 fw-bold lead fs-lg">
                        W ramach wyżej wymienionej grupy docelowej: <br />
                    </p>
                    <ul>
                        <li>co najmniej 60 uczestników (36 kobiet, 24 mężczyzn) będzie
                            zamieszkiwało w rozumieniu Kodeksu Cywilnego miasta średnie tracące
                            funkcje społeczno-gospodarcze i/lub obszary zagrożone trwałą
                            marginalizacją i/lub na obszarze wiejskim wg klasyfikacji DEGURBA w
                            województwie dolnośląskim,
                        </li>
                        <li>40 uczestników (24 kobiety, 16 mężczyzn) będzie stanowiło osoby
                            bezrobotne, w tym długotrwale bezrobotne,
                        </li>
                        <li>60 uczestników (36 kobiet, 24 mężczyzn) będzie stanowiło osoby bierne
                            zawodowe,
                        </li>
                        <li>co najmniej 12 uczestników (7 kobiet, 5 mężczyzn) będzie osobami
                            długotrwale bezrobotnymi,
                        </li>
                        <li>co najmniej 10 osób będą stanowiły osoby z niepełnosprawnościami (6
                            kobiet, 4 mężczyzn),
                        </li>
                    </ul>
                    <p>Główne rezultaty, które zostaną osiągnięte dzięki realizacji projektu:</p>
                    <ul>
                        <li>90 osób (54 kobiety, 36 mężczyzn) uzyska kwalifikacje po opuszczeniu
                            programu,
                        </li>
                        <li>40 osób (24 kobiety, 16 mężczyzn) których sytuacja społeczna uległa
                            poprawie po opuszczeniu programu,
                        </li>
                        <li>25 osób (15 kobiet, 10 mężczyzn) będzie osobami poszukującymi pracy
                            po opuszczeniu programu,
                        </li>
                        <li>40 osób (24 kobiety, 16 mężczyzn) będzie osobami pracującymi, łącznie z
                            prowadzącymi działalność na własny rachunek, po opuszczeniu
                            programu.
                        </li>

                    </ul>
                    <p>Projekt zakłada, że co najmniej 20% uczestników projektu tj. co najmniej 20 os. (12
                        kobiet, 8 mężczyzn) w wyniku otrzymanego wsparcia podejmie zatrudnienie na
                        podstawie umowy o pracę w wymiarze co najmniej ½etatu zawartej na okres co
                        najmniej 6 miesięcy.</p>
                    <p> Wartość projektu: 2 038 647,26 zł</p>
                    <p> Wysokość wkładu Funduszy Europejskich: 1 427 053,08 zł</p>
                </div>

                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative order-lg-1">

                        <div className="overlap-grid overlap-grid-2">

                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/doradztwo_zawodowe.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />

                        </div>
                    </div>

                    <div className="col-lg-6">



                        <p className="lead fs-lg">Identyfikacja potrzeb osób młodych oraz diagnozowanie możliwości w
                            zakresie doskonalenia zawodowego poprzez opracowanie indywidualnych
                            planów działań (IPD), w tym aktualizacja i podsumowanie</p>
                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        Uczestnik/czka projektu otrzyma śr. 4 godz. zegarowe indywidualnego
                                        wsparcia. W ramach zadania dla każdego Uczestnika/czki przewidziano
                                        identyfikację potrzeb oraz diagnozowanie możliwości w zakresie
                                        doskonalenia zawodowego poprzez opracowanie Indywidualnych
                                        Planów Działań (IPD), w tym aktualizacja i podsumowanie planu.                                   </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        IPD będzie zawierał co najmniej analizę potencjału Uczestnika/czniki,
                                        uwarunkowań zdrowotnych i społecznych Uczestnika/czki, przyczyn
                                        pozostawania bez pracy i deficytów Uczestnika/czki, predyspozycji
                                        zawodowych oraz wskazanie kierunków rozwoju Uczestnika/czki.
                                        Uczestnik/czka na podstawie wspólnej decyzji z doradcą, opartej w
                                        głównym stopniu na zdiagnozowanym profilu predyspozycji podejmie
                                        decyzję o wyborze ścieżki szkoleniowej i pozostałym wsparciu
                                        oferowanym w projekcie. Rodzaj wsparcia, w tym kursów zawodowych
                                        będzie ściśle odpowiadał na potrzeby Uczestnika/czki wskazane w IPD.
                                        IPD będzie mógł być modyfikowany w trakcie jego realizacji z powodu
                                        zmiany osobistej sytuacji Uczestnika/czki, bądź też zewnętrznych
                                        uwarunkowań – realizacja IPD będzie ciągle monitorowana. Każdy z
                                        Uczestników/czek otrzyma ofertę wsparcia, obejmującą takie formy
                                        pomocy, które zostaną zidentyfikowane u niego/niej jako niezbędne w
                                        celu poprawy sytuacji społecznej, na rynku pracy, w tym uzyskania
                                        zatrudnienia.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Wsparciem zostanie objętych 100% Uczestników/czek, średnio po 4
                                        godziny dla UP.
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative">

                        <div className="overlap-grid overlap-grid-2">

                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/posrednictwo_pracy.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />

                        </div>
                    </div>

                    <div className="col-lg-6">


                        <h2 className="display-4 mb-3"></h2>

                        <p className="lead fs-lg">
                            Usługi aktywnej integracji o charakterze społecznym - indywidualne
                            poradnictwo psychologiczne
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        Uczestnik/czka projektu otrzyma śr. 2 godz. zegarowe indywidualnego
                                        wsparcia, które będzie musiało wynikać z IPD, aczkolwiek będzie
                                        dostępne dla wszystkich Uczestników/czek. Poradnictwo psychologiczne
                                        będzie miało na celu wzmacnianie potrzeby zmiany u Uczestników/czek.
                                        UP wraz z psychologiem skupią się na indywidualnych przyczynach
                                        niekorzystnej sytuacji i wspólnie będą poszukiwać najlepszych
                                        rozwiązań. Poradnictwo przyczyni się do rozwiązania ich bieżących
                                        problemów i specyficznych trudności związanych z sytuacją życiową i
                                        podejmowaniem próby zmiany.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Wsparciem zostanie objętych 100% Uczestników/czek, średnio po 2
                                        godziny dla UP.
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative order-lg-1">

                        <div className="overlap-grid overlap-grid-2">
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />
                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/podwyzszanie_kompoetencji.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-6">


                        <h2 className="display-4 mb-3"></h2>

                        <p className="lead fs-lg">
                            Usługi aktywnej integracji o charakterze zawodowym - indywidualne
                            poradnictwo zawodowe
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">

                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Uczestnik/czka projektu otrzyma śr. 2 godz. zegarowe indywidualnego
                                        wsparcia, które będzie musiało wynikać z IPD, aczkolwiek będzie
                                        dostępne dla wszystkich Uczestników/czek.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Poradnictwo zawodowe indywidualne realizowane będzie w formie
                                        indywidualnych spotkań – porad zawodowych – polegających na
                                        bezpośrednim kontakcie doradcy zawodowego z Uczestnikiem/czką
                                        projektu. Poradnictwo zawodowe indywidualne jest formą wsparcia
                                        wspomagającą proces poszukiwania pracy, jeżeli istnieją ku temu
                                        oczywiste przesłanki, wynikające głównie z postawy Uczestnika/czki
                                        projektu, np. brak motywacji do poszukiwania pracy lub brak wiedzy na
                                        temat własnych kompetencji i zasobów. Tematyka poradnictwa
                                        zawodowego jest bardzo szeroka, ale tak naprawdę będzie skupiona na
                                        problemach i potrzebach Uczestnika/czki, zatem będzie ściśle
                                        dostosowana pod jego potrzeby. Wsparcie w ramach niniejszego
                                        Zadania nie będzie pokrywało się ze wsparciem udzielonym w ramach
                                        Zadania 1, ale będzie jego uzupełnieniem/poszerzeniem w zależności od
                                        zdiagnozowanych potrzeb.

                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Wsparciem zostanie objętych 100% Uczestników/czek, średnio po 2
                                        godziny dla UP.
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative ">

                        <div className="overlap-grid overlap-grid-2">

                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/doswiadczenie_zawodwoe.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />

                        </div>
                    </div>

                    <div className="col-lg-6">


                        <h2 className="display-4 mb-3"></h2>

                        <p className="lead fs-lg">
                            Uzupełnienie poziomu kompetencji cyfrowych osób młodych
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        Projekt zakłada udział 50 Uczestników/czek w szkoleniu, śr. 24 godz.
                                        szkolenia, którego tematyka będzie odpowiadała na zbadane &quot;luki
                                        kompetencyjne&quot; Uczestników/czek.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Czas pracy Uczestnika/czki odbywającego/j staż będzie trwał 8 godzin na
                                        dobę (40 godzin tygodniowo), w przypadku osoby z niepełnosprawnością (w
                                        stopniu znacznym lub umiarkowanym) 7 godzin na dobę (35 godzin
                                        tygodniowo), każdorazowo przez okres 3 miesięcy.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Program może obejmować np.: znajomość działania niektórych rodzajów
                                        oprogramowania użytkowego: edytory tekstu, arkusze kalkulacyjne, bazy
                                        danych, poczta elektroniczna, programy do prezentacji, przeglądarki
                                        intern., edytory zdjęć, sieci; komunikacja w środowiskach cyfrowych;
                                        zarządzanie tożsamością cyfrową; tworzenie i edytowanie nowych treści;
                                        ochrona osobista i danych osobowych; rozpoznawanie potrzeb i narzędzi
                                        do rozwiązywania problemów.                                   </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Na zakończenie szkolenia odbędzie się egzamin w zakresie
                                        przeprowadzonego kształcenia - potwierdzający zdobyte kompetencje
                                        cyfrowe.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        W czasie realizacji szkolenia Uczestnikom/czkom przysługuje
                                        stypendium szkoleniowe w wysokości 120% zasiłku, o którym mowa w
                                        art. 72 ust. 1 pkt 1 ustawy o promocji zatrudnienia i instytucjach rynku
                                        pracy, jeżeli miesięczna liczba godzin szkolenia wynosi co najmniej 150
                                        godzin zegarowych. W przypadku niższej miesięcznej liczby godzin
                                        szkolenia, wysokość stypendium ustala się proporcjonalnie, z tym, że
                                        stypendium to nie może być niższe niż 20% zasiłku, o którym mowa w
                                        art. 72 ust.1 pkt 1 ustawy o promocji zatrudnienia i instytucjach rynku
                                        pracy.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        W ramach wsparcia Uczestnicy/czki mogą ubiegać się o zwrot kosztów
                                        dojazdu, jak również o zwrot kosztów opieki nad dzieckiem lub osobą
                                        zależną.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative order-lg-1">

                        <div className="overlap-grid overlap-grid-2">
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />
                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/podwyzszanie_kompoetencji.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-6">


                        <h2 className="display-4 mb-3"></h2>

                        <p className="lead fs-lg">
                            Usługi aktywnej integracji o charakterze zawodowym - realizacja
                            wysokiej jakości szkoleń służących zdobyciu, zmianie lub podniesieniu
                            kompetencji lub kwalifikacji niezbędnych do wykonywania danego
                            zawodu lub zadań na określonym stanowisku
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">

                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        W ramach zadania każdy/a z Uczestników/czek weźmie udział w
                                        szkoleniu zawodowym nadającym kwalifikacje lub kompetencje.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Szkolenia te umożliwią Uczestnikom/czkom zdobycie zatrudnienia i
                                        polepszenie swojej sytuacji społecznej i zawodowej po zakończeniu
                                        udziału w projekcie.

                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Szkolenia będą śr. 120-godzinne, aby Uczestnicy/czki nabyli realną
                                        wiedzę i umiejętności w zakresie planowanego do wykonywania
                                        zawodu. Tematyka szkolenia (zawód) będą stricte wynikały z IPD.
                                        Uzyskanie kwalifikacji lub nabycie kompetencji będzie każdorazowo
                                        zweryfikowane poprzez przeprowadzenie odpowiedniego sprawdzenia
                                        przyswojonej wiedzy, umiejętności i kompetencji (np. w formie
                                        egzaminu). Ponadto będzie potwierdzone odpowiednim dokumentem
                                        (np. zaświadczenie, certyfikat).
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        W czasie realizacji szkolenia Uczestnikom/czkom przysługuje
                                        stypendium szkoleniowe w wysokości 120% zasiłku, o którym mowa w
                                        art. 72 ust. 1 pkt 1 ustawy o promocji zatrudnienia i instytucjach rynku
                                        pracy, jeżeli miesięczna liczba godzin szkolenia wynosi co najmniej 150
                                        godzin zegarowych. W przypadku niższej miesięcznej liczby godzin
                                        szkolenia, wysokość stypendium ustala się proporcjonalnie, z tym, że
                                        stypendium to nie może być niższe niż 20% zasiłku, o którym mowa w
                                        art. 72 ust.1 pkt 1 ustawy o promocji zatrudnienia i instytucjach rynku
                                        pracy.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        W ramach wsparcia Uczestnicy/zki mogą ubiegać się o zwrot kosztów
                                        dojazdu, jak również o zwrot kosztów opieki nad dzieckiem lub osobą
                                        zależną.
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative ">

                        <div className="overlap-grid overlap-grid-2">

                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/doswiadczenie_zawodwoe.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />

                        </div>
                    </div>

                    <div className="col-lg-6">


                        <h2 className="display-4 mb-3"></h2>

                        <p className="lead fs-lg">
                            Usługi aktywnej integracji o charakterze zawodowym - staże zawodowe
                            spełniające standardy wskazane w Europejskiej Ramie Jakości Praktyk i
                            Staży
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        Wsparciem zostanie objętych 52 Uczestników/czek projektu i będzie to
                                        wynikało z IPD (nie każdy/a Uczestnik/czka będzie wymagał/a tego typu

                                        działania); staż realizowany będzie na stanowisku związanym z tematyką
                                        odbytego przez Uczestnika/czkę szkolenia
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Czas pracy Uczestnika/czki odbywającego/j staż będzie trwał 8 godzin na
                                        dobę (40 godzin tygodniowo), w przypadku osoby z niepełnosprawnością (w
                                        stopniu znacznym lub umiarkowanym) 7 godzin na dobę (35 godzin
                                        tygodniowo), każdorazowo przez okres 3 miesięcy.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Staże odbywać się będą w firmach zlokalizowanych możliwie najbliżej
                                        miejsc zamieszkania Uczestników/czek projektu, na stanowiskach w
                                        zakresie jakich Uczestnik/czka projektu zdobył/a kwalifikacje, zgodnie
                                        z ustalonym programem stażu.                                  </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Uczestnikom/czkom projektu w ramach stażu zostaną zapewnione badania
                                        lekarskie, polisa ubezpieczeniowa NNW oraz stypendium stażowe, którego
                                        wysokość miesięcznie wyniesie 120% zasiłku dla bezrobotnych, zgodnie
                                        z obowiązującymi, w roku złożenia przez beneficjenta wniosku
                                        o dofinansowanie w odpowiedzi na ogłoszony konkurs stawkami w tym
                                        zakresie (psz.praca.gov.pl), jeżeli liczba godzin stażu w miesiącu
                                        kalendarzowym wyniesie nie mniej niż 160 godzin miesięcznie. W
                                        przypadku niższego miesięcznego wymiaru godzin, wysokość stypendium
                                        ustala się proporcjonalnie.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Każdy stażysta będzie zdobywał doświadczenie pod opieką Opiekuna
                                        stażysty.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        W ramach wsparcia Uczestnicy/czki projektu mogą ubiegać się o zwrot
                                        kosztów dojazdu.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Szczegółowe warunki dotyczące odbywania przez Uczestnika/czkę projektu
                                        stażu zawodowego reguluje odrębna umowa na organizację stażu dla
                                        Uczestnika/czki projektu.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

