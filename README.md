# game-destiny


rozdělení beamu hry dle obsahu:

1. gameRoom - obecné informace o místnosti z databáze

2. gameSlot - informace jedinečné pro připojeného clienta
	lobby: nepřiřazeno
	node::*nodeId*: zobrazuje informace a ovládá jeden systém lodi;
	monitor: zobrazuje kompletní informace o stavu lodi. není interaktivní
	bridge: hlavní ovládací panel lodi (můstek lodi)
	backroom: zobrazuje a ovládá hru jako takovou

3. gamePlay - informace o aktuálním stavu hry