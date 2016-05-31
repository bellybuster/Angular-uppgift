# Webapplikation med MV*

## Uppgift
Bygga en webbapplikation som har stöd för CRUD och inloggning via CWP. Sidorna som ska finnas:

    - Login
    - Alla Konton(Arbetsgivare) (Landing page)
    - Alla Kontakter
    - En specifik kontakt
    - Ett specifikt konto
​
Komponenter vi vill få med oss av respektive ramverk är

    - [ ] One Way Binding
    - [ ] Two Way Binding (input)
    - [ ] Loops (i vyn)
    - [ ] Events (från vyn)
    - [ ] Conditional elements
    - [ ] Conditional CSS/Classes
    - [ ] Komponent-rendering (Custom-element)
    - [ ] Form Validation
    - [ ] Imports / Requires

## Miljöer
    - CRM: http://cint-crm-2013.cintutv.local/main.aspx
    - CWP: http://crmweb.cintutv.se/CWP2
    - Server: Kör lokalt

## Innehåll på sidor:
### Login
Denna sida ska innehålla följande fält:

    - Användarnamn  (validera på tomt)
    - Lösenord      (validera på tomt)
    - Login-knapp
    - Inloggning sker med en användare från CWP Login


### Alla Konton
Denna sida ska innehålla:

    - Klickbar lista över alla konton som visar Kontonamn [name]


### Ett Konto
Denna sida ska innehålla:

    - Information av företag med fälten:
        - Kontonamn     [name]
        - Telefon       [telephone1]
        - Bransch       [industrycode]
        - Adress        [address1_line1]
        - Ort           [address1_city]
        - Postnummer    [address1_postalcode]

    - Lista på alla anställda med Förnamn & Efternamn [firstname] [lastname]
        - Varje person ska vara klickbar till dess specifika sida


### Alla Kontakter
Denna sida ska innehålla:

    - Klickbar lista med alla kontakter ex: (Arne Svensson - Företaget AB)
    - Val att sortera på Förnamn, Efteramn eller Företagsnamn [firtname, lastname, parentcustomerid]*
    - "Ny Kontakt"-knapp som visar en modal dialog där man får skapa en kontakt kopplad till ett konto:
        - Personnummer  [new_securitynumber]    (Obligatorisk | Endast Siffror | Valid Personnummer*)
        - Förnamn       [firstname]             (Obligatorisk)
        - Efternamn     [lastname]              (Obligatorisk)
        - E-Post        [emailaddress1]         (Valid E-post)
        - Mobiltelefon  [mobilephone]
        - Företag       [parentcustomerid]      (Obligatorisk | Sökbar dropdown på Företagsnamn(Select2/Selectize/Valfritt)(Custom Element?))
    - Vid skapande ska listan över kontakter uppdateras


### En Kontakt
Denna sida ska innehålla:

    - Information av kontakt med föregående fält
        - Företaget ska vara klickbart till företagets sida


## Övrigt
    - Krav markerade med `*` är EJ obligatoriska
    - Då det inte finns så mycket data hjälps vi åt att skapa det