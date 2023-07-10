//popolo il dataset con tutti gli album con i relativi dati. Il rating:0 è il valore iniziale del voto.
var albums = [
{
      title: "X2", //uscito il 7/01
      artist: "Sick Luke",
      image: "https://i.scdn.co/image/ab67616d00001e02e45f97fc68a12ca3601b1047",
      tracks: [
        { title: "VUOTO DENTRO", feat: "Mara Sattei, Bresh", rating: 0 },
        { title: "NOTTE SCURA", feat: "Gazzelle, Tedua", rating: 0 },
        { title: "CREATUR", feat: "Geolier, Ernia", rating: 0 },
        { title: "IL GIORNO PIÙ TRISTE DEL MONDO", feat: "Tedua, Gazzelle", rating: 0 },
        { title: "SOLITE PARE", feat: "Sfera Ebbasta, Thasup", rating: 0 },
        { title: "FALENA", feat: "Coez, Franco126, Ketama126", rating: 0 },
        { title: "DREAM TEAM", feat: "Dylan, Capo Plaza, Tedua, Shiva", rating: 0 },
        { title: "HENTAI", feat: "Ghali, Tony Effe", rating: 0 },
        { title: "LA STREGA DEL FRUTTETO", feat: "Madame, Chiello", rating: 0 },
        { title: "CLOCHARD", feat: "Dylan, Taxi B", rating: 0 },
        { title: "SOGNI MATTI", feat: "Drast, Leon Faun", rating: 0 },
        { title: "FACCIO COSE", feat: "Fabri Fibra, Izi, Jake La Furia", rating: 0 },
        { title: "MOSAICI", feat: "Gaia, Carl Brave", rating: 0 },
        { title: "TEMPORALE", feat: "Ketama126, Izi, Luchè", rating: 0 },
        { title: "FUNERAL PARTY", feat: "Side Baby, Emis Killa", rating: 0 },
        { title: "PEZZI DA 20", feat: "Side Baby, Emis Killa", rating: 0 },
        { title: "CAMEL E MALINCONIA", feat: "Duke Montana", rating: 0 },
        { title: "LIBERTÀ", feat: "Madame, Chiello", rating: 0 }
      ]
},
{
      title: "Virus", //uscito il 14/01
      artist: "Noyz Narcos",
      image: "https://i.scdn.co/image/ab67616d00001e02d37cd62527626c7dc5dcac80",
      tracks: [
          { title: "INTRO", feat: " ", rating: 0 },
          { title: "UOMO A TERRA", feat: " ", rating: 0 },
          { title: "VIRUS", feat: " ", rating: 0 },
          { title: "VOLANTE 4", feat: "Franco126, Ketama126", rating: 0 },
          { title: "CRY LATER", feat: "Luchè, Sfera Ebbasta", rating: 0 },
          { title: "WELCOME BACK", feat: "Raekwon", rating: 0 },
          { title: "SPINE", feat: "Coez", rating: 0 },
          { title: "FOOT LOCKER", feat: "Geolier", rating: 0 },
          { title: "NO RATZ", feat: "Capo Plaza, Guè", rating: 0 },
          { title: "BLISTER", feat: "Franco126", rating: 0 },
          { title: "DOPE BOY", feat: " ", rating: 0 },
          { title: "WORST WAY", feat: "Cam'ron", rating: 0 },
          { title: "WAR GAMES", feat: " ", rating: 0 },
          { title: "MONEY BAGZ", feat: "Speranza", rating: 0 },
          { title: "VERANO ZOMBIE, Pt. 3", feat: "Gemello, Metal Carter", rating: 0 },
          { title: "DAYTONA 2000", feat: "Rasty Kilo", rating: 0 },
          { title: "VICTORY LAP", feat: " ", rating: 0 },
          { title: "RVSSIAN BAG", feat: "Click Head, Gast, Thirstin Howl III", rating: 0 }
      ]
},
{
      title: "Wave Deluxe", //uscito il 14/01
      artist: "Slings",
      image: "https://i.scdn.co/image/ab67616d00001e02d73e08076e09375a511d8e7e",
      tracks: [
        { title: "INTRO", feat: "", rating: 0 },
        { title: "Surf", feat: "Ft. Vegas Jones", rating: 0 },
        { title: "Link Up", feat: "", rating: 0 },
        { title: "Don't Cry", feat: "", rating: 0 },
        { title: "CARDI B", feat: "", rating: 0 },
        { title: "ONLYFANS", feat: "Ft. MamboLosco", rating: 0 },
        { title: "Diamanti", feat: "Ft. Heartman", rating: 0 },
        { title: "Mood", feat: "Ft. Bello Figo", rating: 0 },
        { title: "Thick", feat: "", rating: 0 },
        { title: "Diamanti RMX", feat: "Ft. Heartman & VillaBanks", rating: 0 },
        { title: "Skiii", feat: "", rating: 0 },
        { title: "Scarpe Pulite", feat: "Ft. Tony Boy", rating: 0 },
        { title: "Crema", feat: "Ft. Touché", rating: 0 },
        { title: "Esercizi", feat: "", rating: 0 }
    ]
},
{
      title: "Devastante", //uscito il 21/01
      artist: "Il Pagante",
      image: "https://i.scdn.co/image/ab67616d00001e02ceaeb9d72a6398f943ca9ad8",
      tracks: [
        { title: "Gente de la Mañana", feat: "", rating: 0 },
        { title: "Se Fem?", feat: "", rating: 0 },
        { title: "Portofino", feat: "", rating: 0 },
        { title: "Open Bar", feat: "Ft. The Kolors", rating: 0 },
        { title: "Italiani a Londra", feat: "Ft. J-Ax", rating: 0 },
        { title: "Smart Working", feat: "", rating: 0 },
        { title: "La Grande Bellezza", feat: "Ft. Carl Brave", rating: 0 },
        { title: "Un Pacco Per Te", feat: "Ft. Lorella Cuccarini", rating: 0 },
        { title: "No Va Be", feat: "Ft. Chadia Rodriguez & Vegas Jones", rating: 0 },
        { title: "San Siro", feat: "Ft. Jake La Furia", rating: 0 },
        { title: "Devastante", feat: "Ft. M¥SS KETA", rating: 0 }
    ]
},        
{
      title: "BELLA VITA", //uscito il 21/01
      artist: "Niko Pandetta",
      image: "https://i.scdn.co/image/ab67616d00001e029622f2bf5ef2753f96246ab7",
      tracks: [
        { title: "Non fotti con la gang", feat: "", rating: 0 },
        { title: "Bella Vita", feat: "", rating: 0 },
        { title: "Su e Giù", feat: "Ft. VillaBanks", rating: 0 },
        { title: "123", feat: "Ft. MamboLosco", rating: 0 },
        { title: "Pistole Nella Fendi", feat: "", rating: 0 },
        { title: "Bad Bitch", feat: "Ft. BL4IR", rating: 0 },
        { title: "BUM BUM BUM", feat: "", rating: 0 },
        { title: "Scappo vado via", feat: "Ft. J2LASTEU", rating: 0 },
        { title: "Saint Moritz", feat: "Ft. Hypno Carlito", rating: 0 },
        { title: "UEM", feat: "Ft. Ketama126 & Massimo Pericolo", rating: 0 },
        { title: "Fierr e Kalash", feat: "Ft. Boro Boro", rating: 0 },
        { title: "MARIA", feat: "", rating: 0 },
        { title: "Lamborghini", feat: "Ft. Side Baby", rating: 0 },
        { title: "Strade Scoperte", feat: "", rating: 0 }
    ]
},
{
      title: "Succo Di Zenzero Vol.2", //uscito il 21/01
      artist: "Wayne Santana",
      image: "https://i.scdn.co/image/ab67616d00001e02138c90ec97f95163920151a2",
      tracks: [
        { title: "Bust Down", feat: "", rating: 0 },
        { title: "Dance Floor", feat: "Ft. ​sangiovanni", rating: 0 },
        { title: "Suv", feat: "Ft. Dylan (ITA) & M¥SS KETA", rating: 0 },
        { title: "Egoisti", feat: "Ft. Fred De Palma", rating: 0 },
        { title: "Minkia", feat: "", rating: 0 },
        { title: "Bad Vibes", feat: "Ft. Side Baby", rating: 0 },
        { title: "Roxanne", feat: "", rating: 0 },
        { title: "Monti", feat: "Ft. Dylan (ITA) & Tony Effe", rating: 0 },
        { title: "Fuck Love", feat: "", rating: 0 },
        { title: "Tokyo Drift", feat: "Ft. Taxi B", rating: 0 },
        { title: "Euro", feat: "Ft. MamboLosco", rating: 0 },
        { title: "Rimowa", feat: "Ft. DrefGold", rating: 0 },
        { title: "Zonda", feat: "Ft. Neves17 & Rhove", rating: 0 },
        { title: "Vestito Rosa", feat: "", rating: 0 },
        { title: "Marmellata", feat: "Ft. RADICAL, Rosa Chemical & Tony Effe", rating: 0 },
        { title: "Santana", feat: "", rating: 0 }
    ]
},
{
      title: "TAXI DRIVER+ (Deluxe)", //uscito il 27/01
      artist: "Rkomi",
      image: "https://i.scdn.co/image/ab67616d00001e0224b17f5dc773cb177330f349",
      tracks: [
        { title: "INTRO (ULTIMA CURVA)", feat: "", rating: 0 },
        { title: "OSSA ROTTE", feat: "", rating: 0 },
        { title: "INSUPERABILE", feat: "", rating: 0 },
        { title: "LA CODA DEL DIAVOLO", feat: "Elodie", rating: 0 },
        { title: "MALEDUCATA", feat: "Dargen D'Amico", rating: 0 },
        { title: "HO PAURA DI TE", feat: "Karakaz", rating: 0 },
        { title: "FEGATO, FEGATO SPAPPOLATO", feat: "", rating: 0 },
        { title: "AUTOBUS DI NOTTE", feat: "", rating: 0 },
        { title: "AMICO DOVE SEI?", feat: "", rating: 0 },
        { title: "PARTIRE DA TE", feat: "", rating: 0 },
        { title: "HO SPENTO IL CIELO", feat: "Tommaso Paradiso", rating: 0 },
        { title: "ME O LE MIE CANZONI?", feat: "Gazzelle", rating: 0 },
        { title: "DIECIMILAVOCI", feat: "ARIETE", rating: 0 },
        { title: "LUNA PIENA", feat: "Irama", rating: 0 },
        { title: "NUOVO RANGE", feat: "Sfera Ebbasta", rating: 0 },
        { title: "PARADISO VS. INFERNO (INTERLUDE)", feat: "Roshelle", rating: 0 },
        { title: "SOPRA LE CANZONI", feat: "", rating: 0 },
        { title: "10 RAGAZZE", feat: "Ernia", rating: 0 },
        { title: "MARE CHE NON SEI", feat: "GAIA", rating: 0 },
        { title: "SOLO CON ME", feat: "TOMMY DALI", rating: 0 },
        { title: "CANCELLI DI MEZZANOTTE", feat: "Chiello", rating: 0 },
        { title: "TAXI DRIVER", feat: "", rating: 0 },
    ]
},
{
    title: "LAURO - Achille Idol Superstar", //uscito il 11/02
    artist: "Achille Lauro",
    image: "https://i.scdn.co/image/ab67616d00001e025aea47a91f2ef4d51639ad9b",
    tracks: [
      { title: "FOXY", feat: "", rating: 0 },
      { title: "DOMENICA", feat: "", rating: 0 },
      { title: "LATTE+", feat: "", rating: 0 },
      { title: "COME ME", feat: "", rating: 0 },
      { title: "ROLLING STONES", feat: "", rating: 0 },
      { title: "GENERAZIONE X", feat: "", rating: 0 },
      { title: "BARRILETE COSMICO", feat: "", rating: 0 },
      { title: "SABATO SERA", feat: "", rating: 0 },
      { title: "FIORI ROSA", feat: "", rating: 0 },
      { title: "A UN PASSO DA DIO", feat: "", rating: 0 },
      { title: "LAURO", feat: "", rating: 0 },
      { title: "STUPIDE CANZONI D'AMORE", feat: "", rating: 0 },
      { title: "FEMMINA", feat: "", rating: 0 },
      { title: "MARILÙ", feat: "", rating: 0 },
      { title: "PAVONE", feat: "", rating: 0 },
      { title: "PREQUEL", feat: "", rating: 0 },
      { title: "SOLO NOI", feat: "", rating: 0 },
      { title: "SEXY BOY", feat: "", rating: 0 },
      { title: "IO E TE (ANNI DA CANE SOUNDTRACK)", feat: "", rating: 0 },
      { title: "RICORDI D’INVERNI", feat: "", rating: 0 }
  ]
},
{
  title: "SPECCHIO", //uscito il 24/02
  artist: "ARIETE",
  image: "https://i.scdn.co/image/ab67616d00001e021701bb554cf2cf3896516500",
  tracks: [
    { title: "GIORNATE NOIOSE", feat: "", rating: 0 },
    { title: "CLUB", feat: "", rating: 0 },
    { title: "CICATRICI", feat: "Madame", rating: 0 },
    { title: "L", feat: "", rating: 0 },
    { title: "CASTELLI DI LENZUOLA", feat: "", rating: 0 },
    { title: "SPECCHIO", feat: "", rating: 0 },
    { title: "AVVISO", feat: "", rating: 0 },
    { title: "QUELLA DI PRIMA", feat: "", rating: 0 },
    { title: "FRAGILI", feat: "Franco126", rating: 0 },
    { title: "SPIFFERI", feat: "", rating: 0 },
    { title: "IRIDE", feat: "", rating: 0 }
]
},
{
  title: "Oro Blu", //uscito il 4/03
  artist: "Bresh",
  image: "https://i.scdn.co/image/ab67616d00001e0211271c5cddba3610cb9b02cd",
  tracks: [
    { title: "Ulisse", feat: "", rating: 0 },
    { title: "Andrea", feat: "", rating: 0 },
    { title: "Parli Di Me", feat: "Rkomi", rating: 0 },
    { title: "Come Stai", feat: "IZI", rating: 0 },
    { title: "Angelina Jolie", feat: "", rating: 0 },
    { title: "Alcool & Acqua", feat: "PSICOLOGI", rating: 0 },
    { title: "Svuotatasche", feat: "", rating: 0 },
    { title: "Amore", feat: "Greg Willen", rating: 0 },
    { title: "Caffè", feat: "", rating: 0 },
    { title: "Fottiti", feat: "Tony Effe", rating: 0 },
    { title: "Se Rinasco", feat: "Massimo Pericolo", rating: 0 },
    { title: "La Presa B e La Presa Male", feat: "Francesca Michielin", rating: 0 }
]
},   
{
      title: "Salvatore", //uscito il 11/03
      artist: "Paky",
      image: "https://i.scdn.co/image/ab67616d00001e02079d4ace79994f70725d5759",
      tracks: [
        { title: "Intro", feat: "", rating: 0 },
        { title: "100 Uomini", feat: "", rating: 0 },
        { title: "Blauer", feat: "", rating: 0 },
        { title: "No wallet", feat: "Marracash", rating: 0 },
        { title: "Pascià", feat: "", rating: 0 },
        { title: "Auto tedesca", feat: "", rating: 0 },
        { title: "Star", feat: "Shiva", rating: 0 },
        { title: "Salvatore", feat: "", rating: 0 },
        { title: "Quando piove", feat: "", rating: 0 },
        { title: "Vivi o muori", feat: "Guè", rating: 0 },
        { title: "Vita sbagliata", feat: "", rating: 0 },
        { title: "Comandamento", feat: "Geolier", rating: 0 },
        { title: "Giorno del giudizio", feat: "Luchè & Mahmood", rating: 0 },
        { title: "Mi manchi", feat: "", rating: 0 },
        { title: "Storie tristi", feat: "", rating: 0 },
        { title: "Mama I’m a Criminal", feat: "", rating: 0 },
        { title: "Bronx", feat: "", rating: 0 }
    ]
},
{
      title: "Caos", //uscito il 18/03
      artist: "Fabri Fibra",
      image: "https://i.scdn.co/image/ab67616d00001e02b39f1cccb454cd361da50fdb",
      tracks: [
        { title: "Intro (Cielo)", feat: " ", rating: 0 },
        { title: "GoodFellas", feat: "Rose Villain", rating: 0 },
        { title: "Brutto Figlio Di", feat: " ", rating: 0 },
        { title: "Sulla Giostra", feat: "Neffa", rating: 0 },
        { title: "Stelle", feat: "Maurizio Carucci", rating: 0 },
        { title: "Propaganda", feat: "Colapesce, Dimartino", rating: 0 },
        { title: "Caos", feat: "Lazza, Madame", rating: 0 },
        { title: "Pronti Al Peggio", feat: "Ketama126", rating: 0 },
        { title: "Fumo Erba", feat: " ", rating: 0 },
        { title: "Demo Nello Stereo", feat: "", rating: 0 },
        { title: "El Diablo", feat: " ", rating: 0 },
        { title: "Amici O Nemici", feat: " ", rating: 0 },
        { title: "Cocaine", feat: "Guè, Salmo", rating: 0 },
        { title: "Noia", feat: "Marracash", rating: 0 },
        { title: "Nessuno", feat: " ", rating: 0 },
        { title: "Liberi", feat: "Francesca Michielin", rating: 0 },
        { title: "Outro (Senti)", feat: " ", rating: 0 },
      ]
},
{
      title: "Dove Volano Le Aquile", //uscito il 1/04
      artist: "Luchè",
      image: "https://i.scdn.co/image/ab67616d00001e025558244723616933a29ebcbd",
      tracks: [
        { title: "D10S", feat: "Elisa", rating: 0 },
        { title: "Slang", feat: " ", rating: 0 },
        { title: "No Love", feat: "CoCo", rating: 0 },
        { title: "Liberami Da Te", feat: "Etta (ITA)", rating: 0 },
        { title: "Le Pietre Non Volano", feat: "Marracash", rating: 0 },
        { title: "Qualcosa Di Grande", feat: "Madame", rating: 0 },
        { title: "L’Ultima Volta", feat: " ", rating: 0 },
        { title: "Ci Riuscirò Davvero", feat: "Ernia", rating: 0 },
        { title: "Karma", feat: "CoCo", rating: 0 },
        { title: "Password", feat: " ", rating: 0 },
        { title: "Tutto Di Me", feat: " ", rating: 0 },
        { title: "Si Vince Alla Fine", feat: " ", rating: 0 },
        { title: "Over", feat: "Geolier", rating: 0 },
        { title: "Dire La Mia", feat: " ", rating: 0 },
        { title: "Addio", feat: "Guè, Noyz Narcos", rating: 0 },
        { title: "Topless by Luchè, CoCo", feat: " ", rating: 0 },
      ]
},
{
        title: "SIRIO", //uscito il 8/04
        artist: "Lazza",
        image: "https://i.scdn.co/image/ab67616d00001e02279a772ce72afcc068718423",
        tracks: [
            { title: "OUV3RTURE", feat: " ", rating: 0 },
            { title: "ALIBI", feat: " ", rating: 0 },
            { title: "MOLOTOV", feat: " ", rating: 0 },
            { title: "SOGNI D'ORO", feat: " ", rating: 0 },
            { title: "BUGIA", feat: "Tory Lanez", rating: 0 },
            { title: "CINEMA", feat: " ", rating: 0 },
            { title: "PIOVE", feat: "Sfera Ebbasta", rating: 0 },
            { title: "JEFE", feat: " ", rating: 0 },
            { title: "TOPBOY", feat: "Noyz Narcos", rating: 0 },
            { title: "PUTO", feat: "French Montana", rating: 0 },
            { title: "SENZA RUMORE", feat: " ", rating: 0 },
            { title: "NESSUNO", feat: "Geolier", rating: 0 },
            { title: "3 PALI", feat: " ", rating: 0 },
            { title: "USCITO DI GALERA", feat: " ", rating: 0 },
            { title: "NULLA DI", feat: " ", rating: 0 },
            { title: "REPLAY", feat: " ", rating: 0 }
        ]
},
{
        title: "XENOVERSO", //uscito il 14/04
        artist: "Rancore",
        image: "https://i.scdn.co/image/ab67616d00001e026ce8adc612fa5a802e63b340",
        tracks: [
          { title: "Ombra", feat: "", rating: 0 },
          { title: "Freccia", feat: "", rating: 0 },
          { title: "Federico", feat: "", rating: 0 },
          { title: "Guardie&Ladri", feat: "Nayt", rating: 0 },
          { title: "Cronosurfisti", feat: "", rating: 0 },
          { title: "Lontano 2036", feat: "", rating: 0 },
          { title: "X Agosto 2048", feat: "", rating: 0 },
          { title: "Arakno 2100", feat: "", rating: 0 },
          { title: "Guerra dei Versi", feat: "", rating: 0 },
          { title: "Le Rime", feat: "", rating: 0 },
          { title: "Fantasia", feat: "", rating: 0 },
          { title: "Ignoranze Funebri", feat: "", rating: 0 },
          { title: "Eden", feat: "Dardust", rating: 0 },
          { title: "Equatore", feat: "Margherita Vicario", rating: 0 },
          { title: "Xenoverso", feat: "", rating: 0 },
          { title: "Questa cosa che io ho scritto mi piace", feat: "", rating: 0 },
          { title: "Io non sono io", feat: "", rating: 0 }
      ]
},
{
          title: "Solito posto, Soliti guai", //uscito il 22/04
          artist: "Tredici Pietro",
          image: "https://i.scdn.co/image/ab67616d00001e02fef92234eafe2c04469678bd",
          tracks: [
            { title: "Solito posto, Soliti guai", feat: " ", rating: 0 },
            { title: "Fumo pensando a te", feat: " ", rating: 0 },
            { title: "Come fossi andato via", feat: " ", rating: 0 },
            { title: "INTRO", feat: "", rating: 0 },
            { title: "ORO", feat: "Mecna", rating: 0 },
            { title: "MALE", feat: " ", rating: 0 },
            { title: "BOLO", feat: " ", rating: 0 },
            { title: "NO PROB", feat: "Nayt", rating: 0 },
            { title: "MARE", feat: "Giaime", rating: 0 },
            { title: "DALL’ALTO", feat: " ", rating: 0 },
          ]
},
{
        title: "Black Pulcinella", //uscito il 29/04
        artist: "Clementino",
        image: "https://i.scdn.co/image/ab67616d00001e02ca465aa1de2bfa37e0016720",
        tracks: [
          { title: "The dark side of Iena White", feat: "", rating: 0 },
          { title: "Univers", feat: "", rating: 0 },
          { title: "ATM", feat: "", rating: 0 },
          { title: "Revenge", feat: "Enzo Dong", rating: 0 },
          { title: "Sound of Napoli", feat: "", rating: 0 },
          { title: "Emirates", feat: "Rocco Hunt", rating: 0 },
          { title: "Desaparecidos", feat: "Geolier", rating: 0 },
          { title: "Eclissi", feat: "J Lord & Speranza", rating: 0 },
          { title: "La belva umana", feat: "", rating: 0 },
          { title: "Amore lo-fi", feat: "Madame & Nicola Siciliano", rating: 0 },
          { title: "Capate storte", feat: "Mattak", rating: 0 },
          { title: "Crazy shit (VM18)", feat: "Nello Taver", rating: 0 },
          { title: "MKCNF8", feat: "Nerone", rating: 0 },
          { title: "Non passa mai", feat: "Ensi & LA NIÑA", rating: 0 },
          { title: "Black Pulcinella", feat: "", rating: 0 }
      ]
},
{
      title: "TRAUMA", //uscito il 29/04
      artist: "PSICOLOGI",
      image: "https://i.scdn.co/image/ab67616d00001e0207cc0817eec051cfed4fc67e",
      tracks: [
        { title: "NLFP", feat: "Tha Sup", rating: 0 },     
        { title: "PAGINE", feat: "", rating: 0 },
        { title: "FIORI MORTI", feat: "", rating: 0 },
        { title: "TUTTO BENE", feat: "", rating: 0 },
        { title: "UMORE", feat: "ARIETE", rating: 0 },
        { title: "COLORE", feat: "", rating: 0 },
        { title: "LIBERO", feat: "Franco126", rating: 0 },
        { title: "ACIDO", feat: "", rating: 0 },
        { title: "MEDICINE", feat: "", rating: 0 },
        { title: "1312", feat: "", rating: 0 },
        { title: "SUI MURI", feat: "", rating: 0 }
    ]
},
{
          title: "Italiano", //uscito il 6/05
          artist: "Sfera Ebbasta",
          image: "https://i.scdn.co/image/ab67616d00001e02f5cb50fb281d237ca6b00a3a",
          tracks: [
            { title: "Italiano Anthem", feat: " ", rating: 0 },
            { title: "Mamma Mia", feat: " ", rating: 0 },
            { title: "Easy", feat: "Fivio Foreign", rating: 0 },
            { title: "Sola", feat: "Myke Towers", rating: 0 },
            { title: "X6", feat: "BIA", rating: 0 },
          ]
},
{
        title: "LIBERATO II", //uscito il 9/05
        artist: "LIBERATO",
        image: "https://i.scdn.co/image/ab67616d00001e0256eced9d26508a2ea063f5be",
        tracks: [
          { title: "PARTENOPE", feat: "", rating: 0 },
          { title: "NUN CE PENZÀ", feat: "", rating: 0 },
          { title: "NUNNEOVER", feat: "", rating: 0 },
          { title: "ANNA", feat: "", rating: 0 },
          { title: "GUAGLIUNCELLA NAPULITANA", feat: "", rating: 0 },
          { title: "CICERENELLA", feat: "", rating: 0 },
          { title: "'NA STORIA 'E 'NA SERA", feat: "", rating: 0 }
      ]
},
{
          title: "Eclissi", //uscito il 13/05
          artist: "Gemitaiz",
          image: "https://i.scdn.co/image/ab67616d00001e029bc0f2396a3033896410b63c",
          tracks: [
            { title: "Adesso", feat: "", rating: 0 },
            { title: "Ciao Baby", feat: "", rating: 0 },
            { title: "Eclissi", feat: "Neffa", rating: 0 },
            { title: "Jorge Lorenzo", feat: "A$AP Ferg", rating: 0 },
            { title: "Top", feat: "MadMan", rating: 0 },
            { title: "Pornstar", feat: "Sfera Ebbasta", rating: 0 },
            { title: "Rollin' Pt. 2", feat: "", rating: 0 },
            { title: "Silenzio", feat: "", rating: 0 },
            { title: "Pochette", feat: "Noyz Narcos", rating: 0 },
            { title: "K.O.", feat: "Coez, Marracash", rating: 0 },
            { title: "Quando Sto Con Te", feat: "", rating: 0 },
            { title: "Ogni Volta", feat: "Venerus", rating: 0 },
            { title: "Qua Con Me", feat: "", rating: 0 },
        ]        
},
{
        title: "CRIMI", //uscito il 17/05
        artist: "Simba La Rue",
        image: "https://i.scdn.co/image/ab67616d00001e023a3f16ed291393f0674afb32",
        tracks: [
          { title: "INTRO+INTRO", feat: "", rating: 0 },
          { title: "FEAT. SIMBA LA RUE", feat: "", rating: 0 },
          { title: "BENEF", feat: "", rating: 0 },
          { title: "BISTURI", feat: "Fresh laDouille & Philip", rating: 0 },
          { title: "SUITE HOTEL", feat: "", rating: 0 },
          { title: "NOTTE", feat: "", rating: 0 },
          { title: "DETTAGLIO", feat: "", rating: 0 },
          { title: "MASK", feat: "", rating: 0 },
          { title: "TARANTELLE", feat: "", rating: 0 },
          { title: "OPINEL", feat: "", rating: 0 }
      ]
},
{
          title: "Senzazione Ultra", //uscito il 20/05
          artist: "Ghali",
          image: "https://i.scdn.co/image/ab67616d00001e02f9d7449322fe446c869d6b6b",
          tracks: [
            { title: "BAYNA", feat: "", rating: 0 },
            { title: "BRAVO", feat: "", rating: 0 },
            { title: "FORTUNA", feat: "", rating: 0 },
            { title: "FREE SOLO", feat: "Marracash", rating: 0 },
            { title: "WALO", feat: "", rating: 0 },
            { title: "MOON RAGE", feat: "Axell", rating: 0 },
            { title: "PARE", feat: "Madame", rating: 0 },
            { title: "CRAZY", feat: "", rating: 0 },
            { title: "PETER PARKER", feat: "Digital Astro", rating: 0 },
            { title: "WALLAH", feat: "", rating: 0 },
            { title: "DRARI", feat: "Baby Gang", rating: 0 },
            { title: "SENSAZIONE ULTRA", feat: "", rating: 0 },
        ]        
},
{
        title: "AMBIZIONE (Deluxe)", //uscito il 27/05
        artist: "Lele Blade",
        image: "https://i.scdn.co/image/ab67616d00001e025572aee4f6c9cdff47cabb9c",
        tracks: [
          { title: "Jump", feat: "Lazza", rating: 0 },
          { title: "So Fresh So Clean", feat: "Vale Lambo", rating: 0 },
          { title: "Lo Siento", feat: "Aka 7even", rating: 0 },
          { title: "Immortale", feat: "", rating: 0 },
          { title: "No Joke", feat: "MadMan", rating: 0 },
          { title: "Extendo RMX", feat: "Geolier, Paky & Shiva", rating: 0 },
          { title: "Ambizione", feat: "", rating: 0 },
          { title: "Extendo", feat: "Paky", rating: 0 },
          { title: "Gangsta Party", feat: "", rating: 0 },
          { title: "Sextape", feat: "", rating: 0 },
          { title: "Sul A’ Mia", feat: "Ernia", rating: 0 },
          { title: "Just for Fun", feat: "Yung Snapp", rating: 0 },
          { title: "Chello Che Vuó", feat: "Geolier", rating: 0 },
          { title: "Me Gusta", feat: "", rating: 0 },
          { title: "Million Dollar Pussy", feat: "", rating: 0 },
          { title: "Serpenti", feat: "Geolier", rating: 0 },
          { title: "North Face", feat: "Vale Lambo & Yung Snapp", rating: 0 },
          { title: "Tu Si A Droga Pe Me", feat: "MV Killa", rating: 0 },
          { title: "Resta", feat: "", rating: 0 }
      ]      
},
{
          title: "Blocco 181", //uscito il 27/05
          artist: "Salmo",
          image: "https://i.scdn.co/image/ab67616d00001e02cc7f03cfe529d32c1c0910f8",
          tracks: [
            { title: "181", feat: "", rating: 0 },
            { title: "LOCO", feat: "Guè", rating: 0 },
            { title: "9.19", feat: "Baby Gang", rating: 0 },
            { title: "M.S.O.M.", feat: "Jake La Furia, Rose Villain", rating: 0 },
            { title: "EZ", feat: "Ensi", rating: 0 },
            { title: "MI ANTHEM", feat: "Lazza", rating: 0 },
            { title: "PRENDELO", feat: "El Dicy Boy, Isaias LM", rating: 0 },
            { title: "APRI", feat: "Ernia", rating: 0 },
            { title: "SICARIO", feat: "Nerone", rating: 0 },
            { title: "SOTTO VOCE", feat: "Noyz Narcos", rating: 0 },
            { title: "BLOCCO 181 - Title Track", feat: "El Verano, Luciennn", rating: 0 },
        ]        
},
{
        title: "SEVEN 7oo MIxtape", //uscito il 27/05
        artist: "SEVEN 7oo",
        image: "https://i.scdn.co/image/ab67616d00001e025a5df8c7d8e1aec4da7d364e",
        tracks: [
          { title: "INTRO", feat: "Ft. Neima Ezza", rating: 0 },
          { title: "RUNNING", feat: "Ft. Keta, Rondodasosa & Sacky", rating: 0 },
          { title: "NVNSNP", feat: "Ft. Keta, Kilimoney, Neima Ezza & Sacky", rating: 0 },
          { title: "RAP", feat: "Ft. Neima Ezza, Rondodasosa & Sacky", rating: 0 },
          { title: "GANGSTA", feat: "Ft. Kilimoney, Neima Ezza, Sacky & Vale Pain", rating: 0 },
          { title: "667OO", feat: "Ft. ASHE 22, Dahirvè, Freeze Corleone, Keta & Sacky", rating: 0 },
          { title: "SEVEN 7oo", feat: "Ft. Keta, Kilimoney, Neima Ezza, Rondodasosa, Sacky & Vale Pain", rating: 0 },
          { title: "FUCK THE INDUSTRY", feat: "Ft. Central Cee & Rondodasosa", rating: 0 },
          { title: "SABBIE MOBILI", feat: "Ft. Sacky & Vale Pain", rating: 0 },
          { title: "BLINDO", feat: "Ft. Baby Gang, Kilimoney, Neima Ezza & Sacky", rating: 0 },
          { title: "SPACCIATORE", feat: "Ft. Gazo, Keta & Vale Pain", rating: 0 },
          { title: "INTERLUDE", feat: "", rating: 0 },
          { title: "Amico Mio (FreeBene)", feat: "Ft. Neima Ezza & Vale Pain", rating: 0 },
          { title: "DLS", feat: "Ft. Rondodasosa & Samy (ITA)", rating: 0 },
          { title: "SKY", feat: "Ft. Kilimoney, Neima Ezza & Vale Pain", rating: 0 },
          { title: "PARANOIA", feat: "Ft. Neima Ezza & Sacky", rating: 0 },
          { title: "LUNEDÌ", feat: "Ft. Kilimoney, Rondodasosa & Vale Pain", rating: 0 }
      ]     
},
{
          title: "Hustle", //uscito il 03/06
          artist: "Capo Plaza",
          image: "https://i.scdn.co/image/ab67616d00001e02b67137ac4c300ce27f5f817d",
          tracks: [
            { title: "Hustle", feat: "", rating: 0 },
            { title: "Everyday Everynight", feat: "Gazo, Russ Millions", rating: 0 },
            { title: "Stone Island", feat: "", rating: 0 },
            { title: "Goyard", feat: "", rating: 0 },
            { title: "Money Time Freestyle", feat: "", rating: 0 },
            { title: "Paranoie (BIT)", feat: "Koba LaD", rating: 0 },
            { title: "Air Force", feat: "Leto", rating: 0 },
            { title: "Hennessy", feat: "", rating: 0 },
            { title: "Capri Sun", feat: "", rating: 0 },
            { title: "Giungla", feat: "", rating: 0 },
            { title: "RapStar", feat: "", rating: 0 },
            { title: "Non Bastano Mai", feat: "", rating: 0 },
        ]        
},
{
        title: "FAIV", //uscito il 03/06
        artist: "Dani Faiv",
        image: "https://i.scdn.co/image/ab67616d00001e02bec12ee6033d217028d77952",
        tracks: [
          { title: "FAIV, PUNTO", feat: "", rating: 0 },
          { title: "MAYDAY", feat: "", rating: 0 },
          { title: "FACCE VERE", feat: "Nayt", rating: 0 },
          { title: "FOTO DI NOI", feat: "Drast", rating: 0 },
          { title: "VENEZIA", feat: "", rating: 0 },
          { title: "HOW TO", feat: "", rating: 0 },
          { title: "WEED, SOLDI, SESSO", feat: "Gemitaiz", rating: 0 },
          { title: "LUNA NERA", feat: "", rating: 0 },
          { title: "OLIO E ACQUA", feat: "", rating: 0 },
          { title: "SHAQ E KOBE", feat: "KKRISNA", rating: 0 },
          { title: "FINTO GIOVANE", feat: "", rating: 0 },
          { title: "ICONA HIP HOP", feat: "Emis Killa", rating: 0 },
          { title: "AMELIE", feat: "Leon Faun", rating: 0 },
          { title: "CLOCHARD", feat: "", rating: 0 },
          { title: "FULL SPEED", feat: "", rating: 0 },
          { title: "ANNO ZERO", feat: "", rating: 0 },
      ]        
},
{
      title: "Armageddon", //uscito il 03/06
      artist: "Ketama126",
      image: "https://i.scdn.co/image/ab67616d00001e02fdde79c3a3d439fb8112e431",
      tracks: [
        { title: "INTRO: VIVO PER VINCERE", feat: "", rating: 0 },
        { title: "COCA ROSA", feat: "RAF Camora", rating: 0 },
        { title: "ARMAGEDDON", feat: "", rating: 0 },
        { title: "RAGAZZI FUORI", feat: "", rating: 0 },
        { title: "BENEDIZIONE", feat: "", rating: 0 },
        { title: "ANIMALE", feat: "Noyz Narcos", rating: 0 },
        { title: "TANGA", feat: "Kaydy Cain", rating: 0 },
        { title: "SU E GIU'", feat: "", rating: 0 },
        { title: "DIMENTICARE", feat: "Franco126", rating: 0 },
        { title: "RIBELLE", feat: "", rating: 0 },
        { title: "BIG BANG", feat: "", rating: 0 },
        { title: "STOP", feat: "", rating: 0 },
        { title: "SPARANDO ALLA LUNA", feat: "Carl Brave & Pretty Solero", rating: 0 },
        { title: "GUERRA", feat: "", rating: 0 },
        { title: "IMMORTALE", feat: "", rating: 0 },
        { title: "L'ULTIMO TRENO", feat: "Yung Beef", rating: 0 },
        { title: "SOTTO LA LUNA", feat: "", rating: 0 }
    ]    
},
{
    title: "PROVINCIALE", //uscito il 10/06
    artist: "Rhove",
    image: "https://i.scdn.co/image/ab67616d00001e0258bc6fd7dab23766d6839567",
    tracks: [
      { title: "La Famiglia", feat: "8blevrai, Kassimi, Nabi (ITA), Néza (ITA), Sisco (ITA), Yunes LaGrintaa", rating: 0 },
      { title: "Couple", feat: "Sasso", rating: 0 },
      { title: "LAPROVINCE #2", feat: "", rating: 0 },
      { title: "Copacabana", feat: "", rating: 0 },
      { title: "Tuta Lacoste", feat: "Timal", rating: 0 },
      { title: "La Haine", feat: "", rating: 0 },
      { title: "Compliqué", feat: "Ghali, Shiva", rating: 0 },
      { title: "Over The Rainbow RMX", feat: "", rating: 0 },
      { title: "Bébé", feat: "", rating: 0 },
      { title: "Copacabana RMX", feat: "Paky", rating: 0 },
  ]        
},
{
  title: "Lista 47", //uscito il 17/06
  artist: "ANNA",
  image: "https://i.scdn.co/image/ab67616d00001e02570975a05831785b6c53db20",
  tracks: [
    { title: "SOLO ANDATA", feat: "", rating: 0 },
    { title: "GASOLINA", feat: "", rating: 0 },
    { title: "ADVICE", feat: "MamboLosco", rating: 0 },
    { title: "BABE", feat: "Rondodasosa", rating: 0 },
    { title: "LOCA", feat: "", rating: 0 },
    { title: "RUFA", feat: "Slings", rating: 0 },
    { title: "3 DI CUORI", feat: "Lazza", rating: 0 }
]      
},
{
  title: "EP2", //uscito il 17/06
  artist: "Baby Gang",
  image: "https://i.scdn.co/image/ab67616d00001e0236be7de7d26219b029d7e485",
  tracks: [
    { title: "Paranoia", feat: "", rating: 0 },
    { title: "Combattere", feat: "", rating: 0 },
    { title: "Carico", feat: "", rating: 0 },
    { title: "2000", feat: "", rating: 0 },
    { title: "Cella 3", feat: "", rating: 0 },
    { title: "Mentalité", feat: "", rating: 0 },
    { title: "Lei", feat: "Bené (FRA)", rating: 0 },
    { title: "Come Te", feat: "", rating: 0 },
    { title: "Mamacita", feat: "Sacky", rating: 0 }
]     
},
{
  title: "Ferro del mestiere", //uscito il 17/06
  artist: "Jake La Furia",
  image: "https://i.scdn.co/image/ab67616d00001e026e6ea00e3976afa18365e954",
  tracks: [
    { title: "20 Primavere", feat: "", rating: 0 },
    { title: "I soldi e la droga", feat: "Lazza", rating: 0 },
    { title: "Yeah", feat: "Emis Killa", rating: 0 },
    { title: "Indiani e cowboy", feat: "", rating: 0 },
    { title: "Jumpman", feat: "", rating: 0 },
    { title: "Caramelle da uno sconosciuto", feat: "", rating: 0 },
    { title: "L'amore e la violenza", feat: "8blevrai & Paky", rating: 0 },
    { title: "La cosa giusta", feat: "Inoki", rating: 0 },
    { title: "Senza niente da dire", feat: "Ana Mena", rating: 0 },
    { title: "Trips!", feat: "Noyz Narcos & Yung Snapp", rating: 0 },
    { title: "Un altro weekend", feat: "", rating: 0 }
]  
},
{
  title: "HO UCCISO L'HIP HOP ITALIANO", //uscito il 17/06
  artist: "Nello Taver",
  image: "https://i.scdn.co/image/ab67616d00001e025ad5f42f0197003eda3634ab",
  tracks: [
    { title: "MUTISMO SELETTIVO", feat: "", rating: 0 },
    { title: "HO UN PROBLEMA", feat: "", rating: 0 },
    { title: "VUOLE UNA BIRKIN", feat: "", rating: 0 },
    { title: "VADO A MILANO FREESTYLE", feat: "", rating: 0 },
    { title: "HAPPY HIPPO", feat: "", rating: 0 },
    { title: "SU LE MANI FREESTYLE", feat: "", rating: 0 },
    { title: "DDL ZAN CON I MIEI AMICI", feat: "", rating: 0 },
    { title: "HIPHOPABORTO FREESTYLE", feat: "", rating: 0 },
    { title: "BILL COSBY", feat: "", rating: 0 },
    { title: "SCASSI IL CAZZO FREESTYLE", feat: "", rating: 0 },
    { title: "ERASMUS", feat: "", rating: 0 },
    { title: "E VABBÈ", feat: "", rating: 0 },
    { title: "TARANTELLE (Angioletto Remix)", feat: "", rating: 0 },
]
},
{
  title: "Sex Festival", //uscito il 2/09
  artist: "VillaBanks",
  image: "https://i.scdn.co/image/ab67616d00001e020e5c44f9525d61540e4fd89c",
  tracks: [
    { title: "Sole Di Fine Estate", feat: "", rating: 0 },
    { title: "Insieme", feat: "ARIETE", rating: 0 },
    { title: "Qvid", feat: "", rating: 0 },
    { title: "Jamaica", feat: "Lil Kvneki", rating: 0 },
    { title: "Dalla Finestra", feat: "", rating: 0 },
    { title: "Notte D’Amore", feat: "D'Amore", rating: 0 },
    { title: "Fiducia", feat: "Heartman", rating: 0 },
    { title: "Essere Me", feat: "Tananai", rating: 0 },
    { title: "Giocattolo", feat: "Cixi", rating: 0 },
    { title: "Russian Cream II", feat: "", rating: 0 },
]
},
{
title: "BOTOX", //uscito il 16/09
artist: "Night Skinny",
image: "https://i.scdn.co/image/ab67616d00001e027494a37de9bdde20bba9e5a1",
tracks: [
  { title: "Fake", feat: "Geolier, Luchè", rating: 0 },
  { title: "Diavolo", feat: "​bnkr44, Ghali, Rkomi, Tedua", rating: 0 },
  { title: "Blessed", feat: "ARIETE, Drast, Madame, ​thasup", rating: 0 },
  { title: "Marciapiede", feat: "Ernia, Rkomi, Tony Effe", rating: 0 },
  { title: "Non Aprire", feat: "Salmo", rating: 0 },
  { title: "Mezzanotte in Punto", feat: "Bresh, Franco126, Ketama126", rating: 0 },
  { title: "Giorni Contati", feat: "Geolier, Noyz Narcos, Paky", rating: 0 },
  { title: "Doppio Hublot", feat: "Baby Gang, Guè", rating: 0 },
  { title: "Coki", feat: "Guè, Ketama126, Noyz Narcos, Tony Effe", rating: 0 },
  { title: "Prodotto", feat: "Ernia, Jake La Furia, Lazza, Paky", rating: 0 },
  { title: "Come Mi Guardi", feat: "Bresh, Coez, Madame", rating: 0 },
  { title: "Dedication", feat: "​anice, Geolier", rating: 0 },
  { title: "Addio", feat: "Ernia, Gazzelle, Mahmood, Rkomi", rating: 0 },
  { title: "Scale", feat: "Luchè", rating: 0 },
  { title: "Per La Strada", feat: "Coez, Guè, Rkomi", rating: 0 },
  { title: "Così Non Va", feat: "​bnkr44, Elisa, GAIA, Madame, Rkomi", rating: 0 },
  { title: "Millesimati", feat: "J Lord, Lazza, Noyz Narcos, Salmo", rating: 0 },
  { title: "Marmellata", feat: "Carl Brave, Dylan (ITA), Rkomi, VillaBanks", rating: 0 },
  { title: "Changes", feat: "2Rari, ​anice, J Lord, Vettosi", rating: 0 },
  { title: "Sparami", feat: "ARIETE, CoCo, Ernia", rating: 0 },
  { title: "BTX Posse", feat: "Coez, Ernia, Fabri Fibra, Geolier, Guè, Lazza, L'immortale, MamboLosco, Paky, Tony Effe", rating: 0 },
  { title: "Fernando", feat: "Dylan (ITA), MamboLosco, Side Baby", rating: 0 },
]        
},
{
title: "c@ra++ere s?ec!@le", //uscito il 30/09
artist: "Tha Sup",
image: "https://i.scdn.co/image/ab67616d00001e0272cfdfd53af51bcfed067d75",
tracks: [
  { title: "​mar+e", feat: "", rating: 0 },
  { title: "​okk@pp@", feat: "", rating: 0 },
  { title: "!ly", feat: "Coez", rating: 0 },
  { title: "​l%p", feat: "Mara Sattei", rating: 0 },
  { title: "_bilico_", feat: "", rating: 0 },
  { title: "​r()t()nda", feat: "​thasup, Tiziano Ferro", rating: 0 },
  { title: "​ye@h", feat: "Shiva", rating: 0 },
  { title: "​come t! vorre!", feat: "", rating: 0 },
  { title: "​rock, rolla", feat: "Rkomi", rating: 0 },
  { title: "​molecole (interlude)", feat: "", rating: 0 },
  { title: "​sci@ll@", feat: "Tananai", rating: 0 },
  { title: "​r!va", feat: "Pinguini Tattici Nucleari", rating: 0 },
  { title: "​mi @mi o è f@ke", feat: "", rating: 0 },
  { title: "​s!r!", feat: "Lazza, Sfera Ebbasta", rating: 0 },
  { title: "​b@by nel bed", feat: "", rating: 0 },
  { title: "​cas!no nella m!a testa", feat: "Salmo", rating: 0 },
  { title: "​w()ah", feat: "", rating: 0 },
  { title: "​c!ao", feat: "Rondodasosa", rating: 0 },
  { title: "+ bla se c'è bling", feat: "", rating: 0 },
  { title: "​m%n", feat: "", rating: 0 },
]        
},
{
title: "CANTERA MACHETE, VOL. II", //uscito il 7/08
artist: "Machete",
image: "https://i.scdn.co/image/ab67616d00001e02802bf9e9e50acab428e431da",
tracks: [
  { title: "PRIMO MAGGIO", feat: "Biancomarmo", rating: 0 },
  { title: "DIECIMILA COMPLESSI", feat: "Sio (rapper)", rating: 0 },
  { title: "RED LIGHT", feat: "Pico (ITA)", rating: 0 },
  { title: "TUTTO OK", feat: "E1S", rating: 0 },
  { title: "WAVE", feat: "Kunta (ITA)", rating: 0 },
  { title: "A ME", feat: "EOS (ITA)", rating: 0 },
  { title: "PRIVÈ", feat: "Mek (ITA)", rating: 0 },
  { title: "DIO DENARO", feat: "Andres El Chico", rating: 0 },
  { title: "LIBELLULE", feat: "Rondine", rating: 0 },
  { title: "GASPAR", feat: "Mat Smile", rating: 0 },
  { title: "SOLO ANGELI", feat: "Dans (ITA)", rating: 0 }
  ]      
},
{
title: "PAIN", //uscito il 14/10
artist: "Vale Pain",
image: "https://i.scdn.co/image/ab67616d00001e02933eab134e3febc6aab716e8",
tracks: [
  { title: "Pain", feat: "", rating: 0 },
  { title: "I miei panni", feat: "", rating: 0 },
  { title: "Penso", feat: "", rating: 0 },
  { title: "Te Quiero", feat: "NKO", rating: 13.8 },
  { title: "Codeina e Hash", feat: "", rating: 0 },
  { title: "Michael Jackson", feat: "", rating: 0 },
  { title: "X", feat: "", rating: 0 },
  { title: "Till I Die", feat: "", rating: 0 },
  { title: "3D", feat: "", rating: 0 },
  { title: "Orfanelli", feat: "", rating: 0 },
  { title: "Serie A", feat: "", rating: 0 }
  ]
},
{
title: "Ricorso Inammissibile", //uscito il 21/10
artist: "Niko Pandetta",
image: "https://i.scdn.co/image/ab67616d00001e0245630380ac483fb71d286c01",
tracks: [
  { title: "Non mi prenderete mai", feat: "", rating: 0 },
  { title: "Piazze di spaccio", feat: "", rating: 0 },
  { title: "4 di mattina", feat: "", rating: 0 },
  { title: "Crazy love", feat: "", rating: 0 },
  { title: "Pistole nella LV", feat: "", rating: 0 },
  { title: "Una su mille", feat: "", rating: 0 },
  { title: "Tuta Nike", feat: "", rating: 0 },
  { title: "I miei amici", feat: "Niko Pandetta & Voyage", rating: 0 },
  { title: "Malandrino", feat: "", rating: 0 },
  { title: "Bella vita 2", feat: "", rating: 0 },
  { title: "Crush", feat: "", rating: 0 },
  { title: "Ciao", feat: "", rating: 0 },
  { title: "BamBamBam", feat: "Neima Ezza", rating: 0 }
  ]
},
{
  title: "Salvatore Vive", //uscito il 27/10
  artist: "Paky",
  image: "https://i.scdn.co/image/ab67616d00001e029bc1e071ba29539476074626",
  tracks: [
    { title: "Salvatore vive", feat: "", rating: 0 },
    { title: "Belen", feat: "", rating: 0 },
    { title: "Sharm El Sheikh", feat: "", rating: 0 },
    { title: "La Bellavita", feat: "JuL", rating: 0 },
    { title: "Onore e rispetto", feat: "", rating: 0 },
    { title: "Intro", feat: "", rating: 0 },
    { title: "100 Uomini", feat: "", rating: 0 },
    { title: "Blauer", feat: "", rating: 0 },
    { title: "No wallet", feat: "Marracash", rating: 0 },
    { title: "Pascià", feat: "", rating: 0 },
    { title: "Auto tedesca", feat: "", rating: 0 },
    { title: "Star", feat: "Shiva", rating: 0 },
    { title: "Salvatore", feat: "", rating: 0 },
    { title: "Quando piove", feat: "", rating: 0 },
    { title: "Vivi o muori", feat: "Guè", rating: 0 },
    { title: "Vita sbagliata", feat: "", rating: 0 },
    { title: "Comandamento", feat: "Geolier", rating: 0 },
    { title: "Giorno del giudizio", feat: "Luchè, Mahmood", rating: 0 },
    { title: "Mi manchi", feat: "", rating: 0 },
    { title: "Storie tristi", feat: "", rating: 0 },
    { title: "Mama I’m a Criminal", feat: "", rating: 0 },
    { title: "Bronx", feat: "", rating: 0 }
    ]        
},   
{
  title: "The Globe", //uscito il 04/11
  artist: "Kid Yugi",
  image: "https://i.scdn.co/image/ab67616d00001e0257a74373348984f3d97d248a",
  tracks: [
    { title: "Hybris", feat: "", rating: 0 },
    { title: "Kabuki", feat: "", rating: 0 },
    { title: "No Gimmick", feat: "", rating: 0 },
    { title: "GRAMMELOT", feat: "", rating: 0 },
    { title: "Yung 3p 3", feat: "", rating: 0 },
    { title: "Sturm und drang", feat: "", rating: 0 },
    { title: "Back N' Forth", feat: "Kira (ITA)", rating: 0 },
    { title: "King Lear", feat: "Sosa Priority", rating: 0 },
    { title: "DEM", feat: "Artie 5ive, Tony Boy", rating: 0 },
    { title: "Paradise Now", feat: "", rating: 0 },
    { title: "Il Filmografo", feat: "", rating: 0 },
    { title: "Il Ferro di Čechov", feat: "", rating: 0 }
    ]
},
{
  title: "4 Mani", //uscito il 25/11
  artist: "Inoki",
  image: "https://i.scdn.co/image/ab67616d00001e02b8f5475df5a06a5b56bd2d6f",
  tracks: [
    { title: "SPUNTABLU", feat: "", rating: 0 },
    { title: "MILANO BY NIGHT", feat: "Emis Killa, Jake La Furia", rating: 0 },
    { title: "EZÉRCITO", feat: "", rating: 0 },
    { title: "DETOX", feat: "Gemitaiz", rating: 0 },
    { title: "4LIRE", feat: "", rating: 0 },
    { title: "SORELLE", feat: "Nina Zilli", rating: 0 },
    { title: "A&F", feat: "", rating: 0 }
    ]
},
{
  title: "Milano Demons", //uscito il 25/11
  artist: "Shiva",
  image: "https://i.scdn.co/image/ab67616d00001e02c7e356600aed38293c7ca0a4",
  tracks: [
    { title: "Milano Demons", feat: "", rating: 0 },
    { title: "Cup", feat: "", rating: 0 },
    { title: "Vorrei", feat: "Lazza", rating: 0 },
    { title: "Take 4", feat: "", rating: 0 },
    { title: "Rollie AP", feat: "Dylan (ITA) & Slings", rating: 0 },
    { title: "Cellphone", feat: "Bianca Costa & Rhove", rating: 0 },
    { title: "Diamante", feat: "", rating: 0 },
    { title: "Non è Easy", feat: "", rating: 0 },
    { title: "Messaggio in Segreteria", feat: "interlude", rating: 0 },
    { title: "Cicatrici", feat: "Tedua", rating: 0 },
    { title: "Non lo Sai", feat: "", rating: 0 },
    { title: "Naturale", feat: "", rating: 0 },
    { title: "Alleluia", feat: "Sfera Ebbasta", rating: 0 },
    { title: "Soldi Puliti", feat: "", rating: 0 },
    { title: "Dimenticare", feat: "Federica Abbate", rating: 0 },
    { title: "Un Altro Show", feat: "Geolier", rating: 0 },
    { title: "Se Fosse Per Me", feat: "", rating: 0 },
    { title: "3 Stick Freestyle", feat: "", rating: 0 }
]
}, 
{
  title: "X2 DELUXE", //uscito il 02/12
  artist: "Sick Luke",
  image: "https://i.scdn.co/image/ab67616d00001e02c6aa303cad1f8eb08a53b416",
  tracks: [
    { title: "OCCHI COLTELLO", feat: "Gemitaiz, Giorgio Poi, Lil Kvneki & Massimo Pericolo", rating: 0 },
    { title: "AUDI", feat: "Capo Plaza & Rhove", rating: 0 },
    { title: "DOMANI TI CHIAMO", feat: "​bnkr44 & Tananai", rating: 0 },
    { title: "NELLA CASA DI DIO", feat: "J Lord, Paky & Tony Effe", rating: 0 },
    { title: "VUOTO DENTRO", feat: "Bresh & Mara Sattei", rating: 0 },
    { title: "MARY POPPIN", feat: "RADICAL, Side Baby, Thelonious B. & Zyrtck", rating: 0 },
    { title: "NOTTE SCURA", feat: "Gazzelle & Tedua", rating: 0 },
    { title: "CREATUR", feat: "Ernia & Geolier", rating: 0 },
    { title: "IL GIORNO PIÙ TRISTE DEL MONDO", feat: "ARIETE & Mecna", rating: 0 },
    { title: "SOLITE PARE", feat: "Sfera Ebbasta & ​thasup", rating: 0 },
    { title: "FALENA", feat: "Coez, Franco126 & Ketama126", rating: 0 },
    { title: "DREAM TEAM", feat: "Capo Plaza, Dylan (ITA), Shiva & Tedua", rating: 0 },
    { title: "HENTAI", feat: "Ghali & Tony Effe", rating: 0 },
    { title: "LA STREGA DEL FRUTTETO", feat: "Chiello & Madame", rating: 0 },
    { title: "CLOCHARD", feat: "Dylan (ITA) & Taxi B", rating: 0 },
    { title: "SOGNI MATTI", feat: "Drast & Leon Faun", rating: 0 },
    { title: "FACCIO COSE", feat: "Fabri Fibra, IZI & Jake La Furia", rating: 0 },
    { title: "MOSAICI", feat: "Carl Brave & GAIA", rating: 0 },
    { title: "TEMPORALE", feat: "IZI, Ketama126 & Luchè", rating: 0 },
    { title: "FUNERAL PARTY", feat: "Cosmo & Pop X", rating: 0 },
    { title: "PEZZI DA 20", feat: "Emis Killa & Side Baby", rating: 0 },
    { title: "CAMEL E MALINCONIA", feat: "CoCo & PSICOLOGI", rating: 0 },
    { title: "LIBERTÀ", feat: "Duke Montana", rating: 0 }
]
},
{
  title: "NOI, LORO, GLI ALTRI (Deluxe)", //uscito il 9/12
  artist: "Lazza",
  image: "https://i.scdn.co/image/ab67616d00001e02771abd32d4f4fea582171cbd",
  tracks: [
    { title: "IMPORTANTE", feat: "", rating: 0 },
    { title: "LORO", feat: "", rating: 0 },
    { title: "PAGLIACCIO", feat: "", rating: 0 },
    { title: "∞ LOVE", feat: "Guè", rating: 0 },
    { title: "IO", feat: "", rating: 0 },
    { title: "CRAZY LOVE", feat: "", rating: 0 },
    { title: "COSPLAYER", feat: "", rating: 0 },
    { title: "DUBBI", feat: "", rating: 0 },
    { title: "LAUREA AD HONOREM", feat: "Calcutta", rating: 0 },
    { title: "NOI", feat: "", rating: 0 },
    { title: "NOI, LORO, GLI ALTRI SKIT", feat: "", rating: 0 },
    { title: "GLI ALTRI (Giorni Stupidi)", feat: "", rating: 0 },
    { title: "NEMESI", feat: "BLANCO", rating: 0 },
    { title: "DUMBO GETS MAD SKIT", feat: "", rating: 0 },
    { title: "CLIFFHANGER", feat: "", rating: 0 },
    { title: "INTRO (Live)", feat: "", rating: 0 },
    { title: "LORO (Live)", feat: "", rating: 0 },
    { title: "PAGLIACCIO (Live)", feat: "Vassily Solodkyy", rating: 0 },
    { title: "COSPLAYER (Live)", feat: "", rating: 0 },
    { title: "CRAZY LOVE (Live)", feat: "", rating: 0 },
    { title: "GLI ALTRI (Giorni Stupidi) (Live)", feat: "EDONiCO", rating: 0 },
    { title: "NOI (Live)", feat: "", rating: 0 },
    { title: "INTERLUDE (Live)", feat: "", rating: 0 },
    { title: "DUBBI (Live)", feat: "", rating: 0 },
    { title: "LAUREA AD HONOREM (Live)", feat: "", rating: 0 },
    { title: "IO (Live)", feat: "", rating: 0 },
    { title: "NEMESI (Live)", feat: "BLANCO", rating: 0 },
    { title: "NIENTE CANZONI D’AMORE (Live)", feat: "Elisa", rating: 0 },
    { title: "64 BARRE DI PAURA (Bonus Track) [Live]", feat: "", rating: 0 },
    { title: "∞ LOVE (Live)", feat: "Guè", rating: 0 }
    ]
},
{
  title: "SIRIO (Concertos)",
  artist: "Lazza",
  image: "https://i.scdn.co/image/ab67616d00001e023d97f2837df4e046d840bd9b",
  tracks: [
    { title: "ALIBI (Concertos)", feat: "", rating: 0 },
    { title: "MOLOTOV (Concertos)", feat: "", rating: 0 },
    { title: "PIOVE (Concertos)", feat: "", rating: 0 },
    { title: "PANICO (Concertos)", feat: "", rating: 0 },
    { title: "SENZA RUMORE (Concertos)", feat: "", rating: 0 },
    { title: "NESSUNO (Concertos)", feat: "", rating: 0 },
    { title: "USCITO DI GALERA (Concertos)", feat: "", rating: 0 },
    { title: "NULLA DI (Concertos)", feat: "", rating: 0 }
    ]
}
  ];
  
  var currentAlbumIndex = 0;

  function getRandomAlbum() {
    var randomIndex = Math.floor(Math.random() * albums.length);
    return albums[randomIndex];
  }
  
  function displayAlbum(album) {
    document.getElementById('album-title').textContent = album.title;
    document.getElementById('artist-name').textContent = album.artist;
    document.getElementById('profile-image').src = album.image;
  
    var trackListElement = document.getElementById('track-list');
    var trackListBody = trackListElement.querySelector('tbody');
    trackListBody.innerHTML = ''; // Pulisci la lista delle tracce
  
    // Aggiungi le tracce alla tabella
    album.tracks.forEach(function(track, index) {
      var row = document.createElement('tr');

      var trackNumberCell = document.createElement('td');
      trackNumberCell.textContent = index + 1;
      row.appendChild(trackNumberCell);
  
      var trackTitleCell = document.createElement('td');
      trackTitleCell.textContent = track.title;
      row.appendChild(trackTitleCell);
  
      var featCell = document.createElement('td');
      featCell.textContent = track.feat;
      row.appendChild(featCell);
  
      var ratingCell = document.createElement('td');
      var ratingInput = document.createElement('input');
      ratingInput.type = 'number';
      ratingInput.min = 0;
      ratingInput.max = 10;
      ratingInput.step = 1;
      ratingInput.value = track.rating;
      ratingInput.addEventListener('input', function() {
        album.tracks[index].rating = parseInt(ratingInput.value);
        updateOverallRating();
      });
      ratingCell.appendChild(ratingInput);
      row.appendChild(ratingCell);

      trackListBody.appendChild(row);
    });
  
    updateOverallRating();
  }
  
  function updateOverallRating() {
    var currentAlbum = albums[currentAlbumIndex];
    var ratings = currentAlbum.tracks.map(function(track) {
      return track.rating;
    });
    var overallRating = calculateAverage(ratings);
    document.getElementById('overall-rating').textContent = 'OVERALL: ' + overallRating.toFixed(1);
  }
  
  function calculateAverage(numbers) {
    var sum = numbers.reduce(function(total, number) {
      return total + number;
    }, 0);
    return sum / numbers.length;
  }
  
  document.querySelector('.random-btn').addEventListener('click', function() {
    var album = getRandomAlbum();
    currentAlbumIndex = albums.indexOf(album);
    displayAlbum(album);
  });
  
  // Carica un album iniziale all'avvio della pagina
  var initialAlbum = getRandomAlbum();
  currentAlbumIndex = albums.indexOf(initialAlbum);
  displayAlbum(initialAlbum);
  
  document.querySelector('.previous-btn').addEventListener('click', function() {
    currentAlbumIndex = (currentAlbumIndex - 1 + albums.length) % albums.length;
    displayAlbum(albums[currentAlbumIndex]);
  });
  
  document.querySelector('.next-btn').addEventListener('click', function() {
    currentAlbumIndex = (currentAlbumIndex + 1) % albums.length;
    displayAlbum(albums[currentAlbumIndex]);
  });

  //screenshot
  document.getElementById('share-btn').addEventListener('click', function() {
    captureScreenshot();
  });

  function captureScreenshot() {
    var containerElement = document.querySelector('.card'); // L'elemento che desideri catturare come screenshot
  
    // Seleziona gli elementi da nascondere nello screenshot
    var elementsToHide = containerElement.querySelectorAll('.logo, nav, .buttons, #profile-image');
  
    // Nascondi gli elementi selezionati
    elementsToHide.forEach(function(element) {
      element.style.display = 'none';
    });
  
    html2canvas(containerElement).then(function(canvas) {
      // Ripristina la visualizzazione degli elementi nascosti
      elementsToHide.forEach(function(element) {
        element.style.display = '';
      });
  
      var screenshotUrl = canvas.toDataURL('image/png');
  
      // Apri una nuova finestra o un popup con l'immagine dello screenshot
      var popupWindow = window.open('', '_blank');
      popupWindow.document.write('<img src="' + screenshotUrl + '">');
      popupWindow.document.close();
    });
  }

  
  
  
  