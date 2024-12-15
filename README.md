W ramach zadania skonfigurowano workflow GitHub Actions do budowania wieloarchitekturowego obrazu Dockera uzupełniony o dane atestacji (SBOM oraz provenance), jego publikacji na DockerHub oraz przeprowadzenia testu na obecność podatności za pomocą programu Trivy.

![alt text](https://github.com/lukaszlikos/zadanie_2_dodatkowe/blob/master/images/provenance%20sbom.png)
Do przeprowadzenia testu wykorzystano narzędzie Docker Scout 

tryb skanowania cves,
wyswietlenie podsumowania w tabeli,
gnoruje podatności, dla których nie istnieje dostępna poprawka,
pokazując tylko podatności o poziomach CRITICAL i HIGH,
kod błędu w przypadku wykrycia zagrożeń HIGH lub CRITICAL
![alt text](https://github.com/lukaszlikos/zadanie_2_dodatkowe/blob/master/images/Zrzut%20ekranu%202024-12-15%20022755.png)

Wstępnie przeprowadzono test działania bez wywołania kodu błędu w celu poprawności działania workflow, kolejno dodano parametr exit-code: "1"
i ponownie zwerfikowano działanie. 

![alt text](https://github.com/lukaszlikos/zadanie_2_dodatkowe/blob/master/images/Trivy.png)


