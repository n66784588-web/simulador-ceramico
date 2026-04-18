// --- 1. ESTADO GLOBAL ---
let texturaActual = ''; 
let modoEdicion = 'piso'; 

const misProductos = [
    // NITROPISO
    { nombre: "acatlan-30x60", marca: "nitropiso" },
    { nombre: "alameda-60x60", marca: "nitropiso" },
    { nombre: "alhambra-gris-44x44", marca: "nitropiso" },
    { nombre: "alhambra-rojo-44x44", marca: "nitropiso" },
    { nombre: "altamira-33x33", marca: "nitropiso" },
    { nombre: "antigua-44x44", marca: "nitropiso" },
    { nombre: "aquismon-33x33", marca: "nitropiso" },
    { nombre: "arce-azul-19.5x89.5", marca: "nitropiso" },
    { nombre: "arce-azul-30x60", marca: "nitropiso" },
    { nombre: "arce-azul-60x60", marca: "nitropiso" },
    { nombre: "arce-blanco-19.5x89.5", marca: "nitropiso" },
    { nombre: "arce-blanco-30x60", marca: "nitropiso" },
    { nombre: "arce-blanco-60x60", marca: "nitropiso" },
    { nombre: "arce-cafe-19.5x89.5", marca: "nitropiso" },
    { nombre: "arce-cafe-30x60", marca: "nitropiso" },
    { nombre: "arce-cafe-60x60", marca: "nitropiso" },
    { nombre: "arezzo-beige-30x60", marca: "nitropiso" },
    { nombre: "arezzo-blanco-30x60", marca: "nitropiso" },
    { nombre: "arezzo-gris-30x60", marca: "nitropiso" },
    { nombre: "aspen-blanco-30x60", marca: "nitropiso" },
    { nombre: "aspen-rojo-30x60", marca: "nitropiso" },
    { nombre: "bremen-beige-30x60", marca: "nitropiso" },
    { nombre: "bremen-gris-30x60", marca: "nitropiso" },
    { nombre: "brest-30x60", marca: "nitropiso" },
    { nombre: "brookline-60x60", marca: "nitropiso" },
    { nombre: "bursera-gris-20x60", marca: "nitropiso" },
    { nombre: "cadiz-30x60", marca: "nitropiso" },
    { nombre: "calacatta-30x60", marca: "nitropiso" },
    { nombre: "cantera-cafe-30x60", marca: "nitropiso" },
    { nombre: "cantera-negro-30x60", marca: "nitropiso" },
    { nombre: "carrara-blanco-30x60", marca: "nitropiso" },
    { nombre: "carrara-blanco-60x60", marca: "nitropiso" },
    { nombre: "casa-blanca-60x60", marca: "nitropiso" },
    { nombre: "castellon-44x44", marca: "nitropiso" },
    { nombre: "cedral-beige-33x33", marca: "nitropiso" },
    { nombre: "coban-44x44", marca: "nitropiso" },
    { nombre: "concrete-gris-30x60", marca: "nitropiso" },
    { nombre: "copacabana-blanco-30x60", marca: "nitropiso" },
    { nombre: "copacabana-gris-30x60", marca: "nitropiso" },
    { nombre: "cuzco-blanco-50x50", marca: "nitropiso" },
    { nombre: "cuzco-rojo-50x50", marca: "nitropiso" },
    { nombre: "diamante-blanco-30x60", marca: "nitropiso" },
    { nombre: "elegance-nieve-33x33", marca: "nitropiso" },
    { nombre: "grecia-30x60", marca: "nitropiso" },
    { nombre: "greytech-30x60", marca: "nitropiso" },
    { nombre: "hita-beige-59.5x59.5", marca: "nitropiso" },
    { nombre: "hita-blanco-59.5x59.5", marca: "nitropiso" },
    { nombre: "hita-gris-59.5x59.5", marca: "nitropiso" },
    { nombre: "huizache-cognac-33x33", marca: "nitropiso" },
    { nombre: "iguazu-miel-20x60", marca: "nitropiso" },
    { nombre: "iguazu-cafe-20x60", marca: "nitropiso" },
    { nombre: "ipina-45x90", marca: "nitropiso" },
    { nombre: "liverpool-44x44", marca: "nitropiso" },
    { nombre: "loreto-beige-50x50", marca: "nitropiso" },
    { nombre: "lublin-blanco-30x60", marca: "nitropiso" },
    { nombre: "lublin-rojo-30x60", marca: "nitropiso" },
    { nombre: "magna-60x60", marca: "nitropiso" },
    { nombre: "manchester-caoba-60x60", marca: "nitropiso" },
    { nombre: "manchester-chocolate-60x60", marca: "nitropiso" },
    { nombre: "marruecos-gris-30x60", marca: "nitropiso" },
    { nombre: "marruecos-rojo-30x60", marca: "nitropiso" },
    { nombre: "mazzaro-chocolate-20x60", marca: "nitropiso" },
    { nombre: "messel-30x60", marca: "nitropiso" },
    { nombre: "miranda-60x60", marca: "nitropiso" },
    { nombre: "monaco-rojo-30x60", marca: "nitropiso" },
    { nombre: "montecarlo-59.5x59.5", marca: "nitropiso" },
    { nombre: "mosset-30x60", marca: "nitropiso" },
    { nombre: "neiva-60x60", marca: "nitropiso" },
    { nombre: "olmo-rojo-20x60", marca: "nitropiso" },
    { nombre: "onice-beige-44x44", marca: "nitropiso" },
    { nombre: "parma-noce-44x44", marca: "nitropiso" },
    { nombre: "petra-beige-30x60", marca: "nitropiso" },
    { nombre: "petra-gris-30x60", marca: "nitropiso" },
    { nombre: "piedra-de-bernal-44x44", marca: "nitropiso" },
    { nombre: "piedra-de-rio-44x44", marca: "nitropiso" },
    { nombre: "piedra-porfirio-beige-44x44", marca: "nitropiso" },
    { nombre: "piedra-porfirio-rojo-44x44", marca: "nitropiso" },
    { nombre: "porto-30x60", marca: "nitropiso" },
    { nombre: "prado-gris-30x60", marca: "nitropiso" },
    { nombre: "prisma-beige-30x60", marca: "nitropiso" },
    { nombre: "prisma-beige-60x60", marca: "nitropiso" },
    { nombre: "prisma-gris-60x60", marca: "nitropiso" },
    { nombre: "prisma-negro-60x60", marca: "nitropiso" },
    { nombre: "quartz-gris-60x60", marca: "nitropiso" },
    { nombre: "quartz-negro-60x60", marca: "nitropiso" },
    { nombre: "rivalta-cafe-20x60", marca: "nitropiso" },
    { nombre: "rock-clover-negro-60x60", marca: "nitropiso" },
    { nombre: "rock-clover-gris-60x60", marca: "nitropiso" },
    { nombre: "san-diego-50x50", marca: "nitropiso" },
    { nombre: "shangai-33x33", marca: "nitropiso" },
    { nombre: "sherezada-30x60", marca: "nitropiso" },
    { nombre: "steel-20x60", marca: "nitropiso" },
    { nombre: "steel-60x60", marca: "nitropiso" },
    { nombre: "steel-plate-60x60", marca: "nitropiso" },
    { nombre: "tamesi-beige-30x60", marca: "nitropiso" },
    { nombre: "tamesi-negro-30x60", marca: "nitropiso" },
    { nombre: "tamesi-rojo-30x60", marca: "nitropiso" },
    { nombre: "tamuin-beige-33x33", marca: "nitropiso" },
    { nombre: "tamuin-gris-33x33", marca: "nitropiso" },
    { nombre: "torino-60x60", marca: "nitropiso" },
    { nombre: "toulon-20x60", marca: "nitropiso" },
    { nombre: "tuxtla-44x44", marca: "nitropiso" },
    { nombre: "vancouver-blanco-60x60", marca: "nitropiso" },
    { nombre: "zacapa-44x44", marca: "nitropiso" },
    { nombre: "zurich-20x60", marca: "nitropiso" },

    // PORCELANITE
    { nombre: "alabaster-55x55", marca: "porcelanite" },
    { nombre: "andes-plus-blanco-20x30", marca: "porcelanite" },
    { nombre: "aramis-coral-20x30", marca: "porcelanite" },
    { nombre: "aramis-esmeralda-20x30", marca: "porcelanite" },
    { nombre: "aramis-perla-20x30", marca: "porcelanite" },
    { nombre: "aramis-verde-20x30", marca: "porcelanite" },
    { nombre: "aruba-beige-55x55", marca: "porcelanite" },
    { nombre: "asturias-cafe-claro-20x30", marca: "porcelanite" },
    { nombre: "asturias-cafe-oscuro-20x30", marca: "porcelanite" },
    { nombre: "avalon-cafe-55x55", marca: "porcelanite" },
    { nombre: "balmor-blanco-60x60", marca: "porcelanite" },
    { nombre: "belice-blanco-20x30", marca: "porcelanite" },
    { nombre: "belite-gris-44x44", marca: "porcelanite" },
    { nombre: "belite-rojo-44x44", marca: "porcelanite" },
    { nombre: "beta-beige-20x30", marca: "porcelanite" },
    { nombre: "beta-salmon-20x30", marca: "porcelanite" },
    { nombre: "bluette-azul-55x55", marca: "porcelanite" },
    { nombre: "bossa-blanco-20x30", marca: "porcelanite" },
    { nombre: "bossa-blanco-36x36", marca: "porcelanite" },
    { nombre: "boston-beige-20x30", marca: "porcelanite" },
    { nombre: "boston-blanco-20x30", marca: "porcelanite" },
    { nombre: "brada-mix-33x33", marca: "porcelanite" },
    { nombre: "bramassole-bone-30x60", marca: "porcelanite" },
    { nombre: "briko-blanco-20x30", marca: "porcelanite" },
    { nombre: "briko-marble-blanco-20x30", marca: "porcelanite" },
    { nombre: "briko-stone-greige-20x30", marca: "porcelanite" },
    { nombre: "cabos-azul-20x20", marca: "porcelanite" },
    { nombre: "cabos-beige-20x20", marca: "porcelanite" },
    { nombre: "cabos-blanco-20x20", marca: "porcelanite" },
    { nombre: "cantia-blanco-36x36", marca: "porcelanite" },
    { nombre: "cantia-gris-36x36", marca: "porcelanite" },
    { nombre: "carson-gris-25x40", marca: "porcelanite" },
    { nombre: "carson-gris-44x44", marca: "porcelanite" },
    { nombre: "carson-oxford-25x40", marca: "porcelanite" },
    { nombre: "carson-oxford-44x44", marca: "porcelanite" },
    { nombre: "cassalotti-brillante-44x44", marca: "porcelanite" },
    { nombre: "cassalotti-mate-44x44", marca: "porcelanite" },
    { nombre: "creel-glossy-blanco-30x60", marca: "porcelanite" },
    { nombre: "croce-cafe-33x33", marca: "porcelanite" },
    { nombre: "croce-rojo-33x33", marca: "porcelanite" },
    { nombre: "damasco-blanco-55x55", marca: "porcelanite" },
    { nombre: "damasco-crema-55x55", marca: "porcelanite" },
    { nombre: "damasco-gris-55x55", marca: "porcelanite" },
    { nombre: "dent-greka-mix-30x45", marca: "porcelanite" },
    { nombre: "dione-blanco-55x55", marca: "porcelanite" },
    { nombre: "doppio-arena-30x60", marca: "porcelanite" },
    { nombre: "dovela-gris-20x30", marca: "porcelanite" },
    { nombre: "farbe-blanco-25x40", marca: "porcelanite" },
    { nombre: "farbe-negro-25x40", marca: "porcelanite" },
    { nombre: "farbe-rojo-25x40", marca: "porcelanite" },
    { nombre: "fashion-negro-20x30", marca: "porcelanite" },
    { nombre: "fashion-perla-20x30", marca: "porcelanite" },
    { nombre: "florina-azul-44x44", marca: "porcelanite" },
    { nombre: "florina-marron-44x44", marca: "porcelanite" },
    { nombre: "galana-cafe-44x44", marca: "porcelanite" },
    { nombre: "gales-azul-20x30", marca: "porcelanite" },
    { nombre: "gales-beige-20x30", marca: "porcelanite" },
    { nombre: "gales-beige-36x36", marca: "porcelanite" },
    { nombre: "gales-gris-20x30", marca: "porcelanite" },
    { nombre: "gales-gris-36x36", marca: "porcelanite" },
    { nombre: "garda-gris-30x45", marca: "porcelanite" },
    { nombre: "garea-blanco-36x36", marca: "porcelanite" },
    { nombre: "garea-grafito-36x36", marca: "porcelanite" },
    { nombre: "garea-gris-36x36", marca: "porcelanite" },
    { nombre: "harper-blanco-60x1.20", marca: "porcelanite" },
    { nombre: "holbein-black-60x60", marca: "porcelanite" },
    { nombre: "holbein-bone-60x60", marca: "porcelanite" },
    { nombre: "jasper-beige-33x33", marca: "porcelanite" },
    { nombre: "jasper-cafe-33x33", marca: "porcelanite" },
    { nombre: "jasper-carrara-white-33x33", marca: "porcelanite" },
    { nombre: "jasper-grafito-33x33", marca: "porcelanite" },
    { nombre: "kasha-beige-55x55", marca: "porcelanite" },
    { nombre: "kasha-cafe-55x55", marca: "porcelanite" },
    { nombre: "kasha-gris-55x55", marca: "porcelanite" },
    { nombre: "kindsley-bone-59.3x117", marca: "porcelanite" },
    { nombre: "kuo-rosa-20x20", marca: "porcelanite" },
    { nombre: "lauret-hueso-36x36", marca: "porcelanite" },
    { nombre: "leia-blanco-60x60", marca: "porcelanite" },
    { nombre: "ligne-azul-25x40", marca: "porcelanite" },
    { nombre: "ligne-blanco-25x40", marca: "porcelanite" },
    { nombre: "lisva-beige-36x36", marca: "porcelanite" },
    { nombre: "macei-cobalto-30x60", marca: "porcelanite" },
    { nombre: "macei-jade-30x60", marca: "porcelanite" },
    { nombre: "macei-perla-30x60", marca: "porcelanite" },
    { nombre: "madera-bois-cafe-55x55", marca: "porcelanite" },
    { nombre: "madera-diniza-33x33", marca: "porcelanite" },
    { nombre: "madera-girona-55x55", marca: "porcelanite" },
    { nombre: "madera-jaipur-natura-33x33", marca: "porcelanite" },
    { nombre: "madera-tanami-gris-55x55", marca: "porcelanite" },
    { nombre: "madera-tanami-natural-55x55", marca: "porcelanite" },
    { nombre: "madera-tribe-cerezo-18x55", marca: "porcelanite" },
    { nombre: "madera-tribe-gris-18x55", marca: "porcelanite" },
    { nombre: "mahogany-abedul-18x55", marca: "porcelanite" },
    { nombre: "mahogany-fresno-18x55", marca: "porcelanite" },
    { nombre: "mahogany-roble-18x55", marca: "porcelanite" },
    { nombre: "mare-beige-25x40", marca: "porcelanite" },
    { nombre: "malaya-cafe-33x33", marca: "porcelanite" },
    { nombre: "marmol-caselli-44x44", marca: "porcelanite" },
    { nombre: "marmol-casole-44x44", marca: "porcelanite" },
    { nombre: "maroma-rojo-55x55", marca: "porcelanite" },
    { nombre: "marsella-cafe-20x30", marca: "porcelanite" },
    { nombre: "marsella-chocolate-20x30", marca: "porcelanite" },
    { nombre: "messier-deco-blanco-55x55", marca: "porcelanite" },
    { nombre: "mezzo-mix-44x44", marca: "porcelanite" },
    { nombre: "monvile-beige-60x60", marca: "porcelanite" },
    { nombre: "monvile-grafito-60x60", marca: "porcelanite" },
    { nombre: "munet-azul-60x1.20", marca: "porcelanite" },
    { nombre: "mystone-cafe-36x36", marca: "porcelanite" },
    { nombre: "nagara-gris-30x60", marca: "porcelanite" },
    { nombre: "nagara-beige-30x60", marca: "porcelanite" },
    { nombre: "naica-pul-silver-59.3x119", marca: "porcelanite" },
    { nombre: "napoles-beige-55x55", marca: "porcelanite" },
    { nombre: "naturawood-caoba-18x55", marca: "porcelanite" },
    { nombre: "naturawood-natura-18x55", marca: "porcelanite" },
    { nombre: "naturawood-natura-brillante-18x55", marca: "porcelanite" },
    { nombre: "nevada-blanco-brillante-2da-25x40", marca: "porcelanite" },
    { nombre: "nival-blanco-20x30", marca: "porcelanite" },
    { nombre: "nival-carrara-white-20x20", marca: "porcelanite" },
    { nombre: "nival-oxford-20x20", marca: "porcelanite" },
    { nombre: "nobu-cerezo-36x36", marca: "porcelanite" },
    { nombre: "noe-patio-grafito-44x44", marca: "porcelanite" },
    { nombre: "nolan-blanco-25x40", marca: "porcelanite" },
    { nombre: "nolan-deco-blanco-25x40", marca: "porcelanite" },
    { nombre: "paduk-cerezo-44x44", marca: "porcelanite" },
    { nombre: "palco-gris-55x55", marca: "porcelanite" },
    { nombre: "parma-beige-55x55", marca: "porcelanite" },
    { nombre: "pecan-cafe-36x36", marca: "porcelanite" },
    { nombre: "pecan-rojo-36x36", marca: "porcelanite" },
    { nombre: "piombo-brick-marron-36x36", marca: "porcelanite" },
    { nombre: "piombo-marron-20x30", marca: "porcelanite" },
    { nombre: "pompei-beige-25x40", marca: "porcelanite" },
    { nombre: "sain-blanco-30x60", marca: "porcelanite" },
    { nombre: "spazio-blanco-44x44", marca: "porcelanite" },
    { nombre: "spazio-negro-44x44", marca: "porcelanite" },
    { nombre: "san-cristobal-cafe-33x33", marca: "porcelanite" },
    { nombre: "stones-multicolor-20x20", marca: "porcelanite" },
    { nombre: "stones-multicolor-44x44", marca: "porcelanite" },
    { nombre: "sudden-blanco-60x60", marca: "porcelanite" },
    { nombre: "sundeck-haya-18x55", marca: "porcelanite" },
    { nombre: "sunset-azul-33x33", marca: "porcelanite" },
    { nombre: "sunset-beige-33x33", marca: "porcelanite" },
    { nombre: "sunset-verde-33x33", marca: "porcelanite" },
    { nombre: "tabarca-mix-60x60", marca: "porcelanite" },
    { nombre: "tarasco-rojo-33x33", marca: "porcelanite" },
    { nombre: "teak-azul-20x30", marca: "porcelanite" },
    { nombre: "teak-blanco-20x30", marca: "porcelanite" },
    { nombre: "timberwood-cafe-18x55", marca: "porcelanite" },
    { nombre: "tribe-glossy-gris-18x55", marca: "porcelanite" },
    { nombre: "tribe-glossy-natura-18x55", marca: "porcelanite" },
    { nombre: "tribe-glossy-cerezo-18x55", marca: "porcelanite" },
    { nombre: "venecia-azul-20x20", marca: "porcelanite" },
    { nombre: "venecia-cobalto-20x20", marca: "porcelanite" },
    { nombre: "venecia-rosa-20x20", marca: "porcelanite" },
    { nombre: "venecia-verde-20x20", marca: "porcelanite" },
    { nombre: "venezuela-amarillo-33x33", marca: "porcelanite" },
    { nombre: "venezuela-azul-33x33", marca: "porcelanite" },
    { nombre: "venezuela-gris-33x33", marca: "porcelanite" },
    { nombre: "venezuela-rojo-33x33", marca: "porcelanite" },
    { nombre: "vetro-blanco-25x40", marca: "porcelanite" },
    { nombre: "yukon-beige-33x33", marca: "porcelanite" },
    { nombre: "yukon-cafe-33x33", marca: "porcelanite" },

    // VITROMEX
    { nombre: "alpino-oro-brillo-50x100", marca: "vitromex" },
    { nombre: "arizpe-caoba-18x60", marca: "vitromex" },
    { nombre: "arizpe-ceniza-18x60", marca: "vitromex" },
    { nombre: "arizpe-haya-18x60", marca: "vitromex" },
    { nombre: "aspen-20x30", marca: "vitromex" },
    { nombre: "azteca-azul-36x36", marca: "vitromex" },
    { nombre: "brasil-negro-mate-61x122", marca: "vitromex" },
    { nombre: "brico-multicolor-45x45", marca: "vitromex" },
    { nombre: "budapest-crema-61.2x61.2", marca: "vitromex" },
    { nombre: "budapest-gris-61.2x61.2", marca: "vitromex" },
    { nombre: "cadereyta-miel-35.7x35.7", marca: "vitromex" },
    { nombre: "cairo-azul-35.7x50.2", marca: "vitromex" },
    { nombre: "cairo-crema-35.7x50.2", marca: "vitromex" },
    { nombre: "calix-beige-37x37", marca: "vitromex" },
    { nombre: "carranza-nogal-20x60", marca: "vitromex" },
    { nombre: "carranza-rec-bianco-mate-50x100", marca: "vitromex" },
    { nombre: "castilla-terracota-37x37", marca: "vitromex" },
    { nombre: "catedral-ceniza-35.7x35.7", marca: "vitromex" },
    { nombre: "catedral-cafe-35.7x35.7", marca: "vitromex" },
    { nombre: "chapala-abedul-18x60", marca: "vitromex" },
    { nombre: "chapala-albino-18x60", marca: "vitromex" },
    { nombre: "chapala-miel-18x60", marca: "vitromex" },
    { nombre: "chapala-pino-18x60", marca: "vitromex" },
    { nombre: "cienega-multicolor-37x37", marca: "vitromex" },
    { nombre: "corfu-grafito-45x45", marca: "vitromex" },
    { nombre: "corfu-gris-45x45", marca: "vitromex" },
    { nombre: "cosala-haya-35.7x35.7", marca: "vitromex" },
    { nombre: "deco-wood-roble-37x37", marca: "vitromex" },
    { nombre: "dual-blanco-35.7x35.7", marca: "vitromex" },
    { nombre: "dual-negro-35.7x35.7", marca: "vitromex" },
    { nombre: "everest-grigio-mate-61x122", marca: "vitromex" },
    { nombre: "gaudi-oro-36x36", marca: "vitromex" },
    { nombre: "harlem-crema-62.1x62.1", marca: "vitromex" },
    { nombre: "irlanda-grafito-mate-61x122", marca: "vitromex" },
    { nombre: "jaral-miel-36x36", marca: "vitromex" },
    { nombre: "jarana-caoba-35.7x35.7", marca: "vitromex" },
    { nombre: "jarana-haya-35.7x35.7", marca: "vitromex" },
    { nombre: "linares-terracota-36x36", marca: "vitromex" },
    { nombre: "lisboa-almendra-20x20", marca: "vitromex" },
    { nombre: "lisboa-gris-20x20", marca: "vitromex" },
    { nombre: "living-beige-50x100", marca: "vitromex" },
    { nombre: "madero-moka-20x20", marca: "vitromex" },
    { nombre: "marmara-blanco-61.2x122.6", marca: "vitromex" },
    { nombre: "marmoliza-blanco-20x30", marca: "vitromex" },
    { nombre: "marmoliza-blanco-36x36", marca: "vitromex" },
    { nombre: "marmol-blanco-brillo-50x100", marca: "vitromex" },
    { nombre: "mazamitla-crema-35.7x35.7", marca: "vitromex" },
    { nombre: "mediterraneo-azul-28x60", marca: "vitromex" },
    { nombre: "mediterraneo-blanco-28x60", marca: "vitromex" },
    { nombre: "mediterraneo-verde-28x60", marca: "vitromex" },
    { nombre: "metepec-verde-20x30", marca: "vitromex" },
    { nombre: "metepec-azul-20x30", marca: "vitromex" },
    { nombre: "mila-beige-35.7x35.7", marca: "vitromex" },
    { nombre: "milpa-tierra-35.7x35.7", marca: "vitromex" },
    { nombre: "monaco-gris-20x20", marca: "vitromex" },
    { nombre: "monaco-cafe-20x20", marca: "vitromex" },
    { nombre: "monet-haya-26x100", marca: "vitromex" },
    { nombre: "napa-blanco-brillo-35.7x50.2", marca: "vitromex" },
    { nombre: "nativa-cherry-18x60", marca: "vitromex" },
    { nombre: "nexo-blanco-22x60", marca: "vitromex" },
    { nombre: "nexo-negro-22x60", marca: "vitromex" },
    { nombre: "novara-grigio-55x55", marca: "vitromex" },
    { nombre: "novara-nube-55x55", marca: "vitromex" },
    { nombre: "oslo-blanco-35.7x35.7", marca: "vitromex" },
    { nombre: "panuco-ceniza-35.7x35.7", marca: "vitromex" },
    { nombre: "papantla-azul-20x30", marca: "vitromex" },
    { nombre: "papantla-azul-35.7x35.7", marca: "vitromex" },
    { nombre: "papantla-gris-20x30", marca: "vitromex" },
    { nombre: "papantla-gris-35.7x35.7", marca: "vitromex" },
    { nombre: "peregrino-terracota-35.7x35.7", marca: "vitromex" },
    { nombre: "porto-ceniza-20x20", marca: "vitromex" },
    { nombre: "ranch-lux-castano-35.7x35.7", marca: "vitromex" },
    { nombre: "real-de-catorce-35.7x50.2", marca: "vitromex" },
    { nombre: "roma-gris-35x35", marca: "vitromex" },
    { nombre: "rubik-arena-20x20", marca: "vitromex" },
    { nombre: "rubik-azul-20x20", marca: "vitromex" },
    { nombre: "rubik-cafe-20x20", marca: "vitromex" },
    { nombre: "rubik-verde-20x20", marca: "vitromex" },
    { nombre: "sacramento-azul-37x37", marca: "vitromex" },
    { nombre: "san-gabriel-hueso-50x100", marca: "vitromex" },
    { nombre: "san-gabriel-mt-gray-50x100", marca: "vitromex" },
    { nombre: "san-joaquin-azul-20x30", marca: "vitromex" },
    { nombre: "san-joaquin-verde-20x30", marca: "vitromex" },
    { nombre: "sari-blanco-55x55", marca: "vitromex" },
    { nombre: "sena-marfil-45x45", marca: "vitromex" },
    { nombre: "sierra-cafe-35.7x35.7", marca: "vitromex" },
    { nombre: "spritz-negro-20x20", marca: "vitromex" },
    { nombre: "spritz-blanco-20x20", marca: "vitromex" },
    { nombre: "strada-terra-45x45", marca: "vitromex" },
    { nombre: "verona-grey-20x20", marca: "vitromex" },
    { nombre: "xicotepec-beige-20x30", marca: "vitromex" },
    { nombre: "xicotepec-cafe-20x30", marca: "vitromex" },
    { nombre: "xilitla-blanco-35.7x35.7", marca: "vitromex" },
    { nombre: "yukon-black-55x55", marca: "vitromex" },
    { nombre: "yukon-cream-55x55", marca: "vitromex" },
    { nombre: "zenia-iron-36x50", marca: "vitromex" },
    { nombre: "zenia-black-36x50", marca: "vitromex" },

    // DALTILE
    { nombre: "african-walnut-brown-20x90", marca: "daltile" },
    { nombre: "african-walnut-natural-20x90", marca: "daltile" },
    { nombre: "alpha-gris-37x37", marca: "daltile" },
    { nombre: "alpha-rojo-37x37", marca: "daltile" },
    { nombre: "amalia-gris-30x45", marca: "daltile" },
    { nombre: "amore-carlotta-60x60", marca: "daltile" },
    { nombre: "amore-julieta-60x60", marca: "daltile" },
    { nombre: "amore-stella-60x60", marca: "daltile" },
    { nombre: "antique-wood-ocre-18x60", marca: "daltile" },
    { nombre: "arboleda-cafe-45x45", marca: "daltile" },
    { nombre: "avenza-blanco-60x1.20", marca: "daltile" },
    { nombre: "black-walnut-moka-18x60", marca: "daltile" },
    { nombre: "blender-stone-30x45", marca: "daltile" },
    { nombre: "breccia-ligh-gray-60.5x60.5", marca: "daltile" },
    { nombre: "breccia-marfil-60x60", marca: "daltile" },
    { nombre: "cantabria-avorio-60.5x60.5", marca: "daltile" },
    { nombre: "colonial-frida-37x37", marca: "daltile" },
    { nombre: "corintia-oxford-60.5x60.5", marca: "daltile" },
    { nombre: "dannes-blanco-30x45", marca: "daltile" },
    { nombre: "dannes-cafe-30x45", marca: "daltile" },
    { nombre: "dannes-gris-30x45", marca: "daltile" },
    { nombre: "divana-brown-34x50", marca: "daltile" },
    { nombre: "encanabanu-cerezo-18x60", marca: "daltile" },
    { nombre: "encanabanu-natural-18x60", marca: "daltile" },
    { nombre: "fort-wood-beige-18x60", marca: "daltile" },
    { nombre: "fort-wood-brown-18x60", marca: "daltile" },
    { nombre: "fort-wood-dark-gray-18x60", marca: "daltile" },
    { nombre: "fort-wood-ligh-gray-18x60", marca: "daltile" },
    { nombre: "glitz-blue-37x37", marca: "daltile" },
    { nombre: "hamlet-latte-30x45", marca: "daltile" },
    { nombre: "hamlet-motley-30x45", marca: "daltile" },
    { nombre: "kalos-greige-45x90", marca: "daltile" },
    { nombre: "kalos-gris-45x90", marca: "daltile" },
    { nombre: "lake-beige-37x37", marca: "daltile" },
    { nombre: "legend-brown-15x66", marca: "daltile" },
    { nombre: "legend-greige-15x66", marca: "daltile" },
    { nombre: "legend-natural-18x50", marca: "daltile" },
    { nombre: "lucca-bianco-20x30", marca: "daltile" },
    { nombre: "lucca-bianco-37x37", marca: "daltile" },
    { nombre: "lumiere-blanco-37x37", marca: "daltile" },
    { nombre: "luster-graphite-60x60", marca: "daltile" },
    { nombre: "luster-gray-60x60", marca: "daltile" },
    { nombre: "luster-white-37x37", marca: "daltile" },
    { nombre: "luster-white-60.5x60.5", marca: "daltile" },
    { nombre: "magnus-black-60x60", marca: "daltile" },
    { nombre: "melbourne-gray-45x90", marca: "daltile" },
    { nombre: "melbourne-multicolor-45x90", marca: "daltile" },
    { nombre: "navia-azul-20x30", marca: "daltile" },
    { nombre: "navia-azul-37x37", marca: "daltile" },
    { nombre: "navia-beige-20x30", marca: "daltile" },
    { nombre: "navia-beige-37x37", marca: "daltile" },
    { nombre: "navia-gris-20x30", marca: "daltile" },
    { nombre: "navia-gris-37x37", marca: "daltile" },
    { nombre: "navia-verde-37x37", marca: "daltile" },
    { nombre: "origin-black-rec-60x1.20", marca: "daltile" },
    { nombre: "palatia-gold-60.5x60.5", marca: "daltile" },
    { nombre: "patio-terraza-ocre-37x37", marca: "daltile" },
    { nombre: "piacenza-beige-60x60", marca: "daltile" },
    { nombre: "piacenza-gris-60x60", marca: "daltile" },
    { nombre: "prisma-origami-blanco-30x45", marca: "daltile" },
    { nombre: "republica-multicolor-18x60", marca: "daltile" },
    { nombre: "rioja-multicolor-37x37", marca: "daltile" },
    { nombre: "rockwell-gris-30x45", marca: "daltile" },
    { nombre: "rockwell-latte-30x45", marca: "daltile" },
    { nombre: "rockwell-multicolor-30x45", marca: "daltile" },
    { nombre: "royal-walnut-natural-brown-15x66", marca: "daltile" },
    { nombre: "san-miguel-azul-37x37", marca: "daltile" },
    { nombre: "san-miguel-rojo-37x37", marca: "daltile" },
    { nombre: "santa-clara-37x37", marca: "daltile" },
    { nombre: "sayul-azul-37x37", marca: "daltile" },
    { nombre: "segovia-latte-30x45", marca: "daltile" },
    { nombre: "segovia-multicolor-30x45", marca: "daltile" },
    { nombre: "sonata-black-20x90", marca: "daltile" },
    { nombre: "sonata-gray-20x90", marca: "daltile" },
    { nombre: "stonefort-34x50", marca: "daltile" },
    { nombre: "stratto-black-60.5x60.5", marca: "daltile" },
    { nombre: "stratto-gray-60.5x60.5", marca: "daltile" },
    { nombre: "sunwood-miel-18x60", marca: "daltile" },
    { nombre: "symbol-cotto-37x37", marca: "daltile" },
    { nombre: "taxco-cafe-37x37", marca: "daltile" },
    { nombre: "teul-beige-37x37", marca: "daltile" },
    { nombre: "timberwood-gray-20x90", marca: "daltile" },
    { nombre: "tula-cafe-37x37", marca: "daltile" },
    { nombre: "urbania-black-30x45", marca: "daltile" },
    { nombre: "urbania-black-white-30x45", marca: "daltile" },
    { nombre: "urbania-blue-30x45", marca: "daltile" },
    { nombre: "urbania-cobalt-blue-30x45", marca: "daltile" },
    { nombre: "urbania-white-30x45", marca: "daltile" },
    { nombre: "veneto-gris-60x60", marca: "daltile" },
    { nombre: "whisper-oak-brown-15x66", marca: "daltile" },
    { nombre: "whisper-oak-cherry-15x66", marca: "daltile" },
    { nombre: "whisper-oak-gray-15x66", marca: "daltile" },
    { nombre: "zenwood-brown-45x45", marca: "daltile" },

    // MISE
    { nombre: "abstrac-gold-60x1.20", marca: "mise" },
    { nombre: "alistonia-gold-60x1.20", marca: "mise" },
    { nombre: "calacatta-renoire-60x60", marca: "mise" },
    { nombre: "castor-blue-60x1.20", marca: "mise" },
    { nombre: "cracovia-high-glossy-60x1.20", marca: "mise" },
    { nombre: "eloy-satvario-60x1.20", marca: "mise" },
    { nombre: "flicker-white-60x1.20", marca: "mise" },
    { nombre: "frize-gold-60x1.20", marca: "mise" },
    { nombre: "glassia-wood-60x1.20", marca: "mise" },
    { nombre: "iron-gold-60x1.20", marca: "mise" },
    { nombre: "lublin-60x1.20", marca: "mise" },
    { nombre: "luccano-dark-60x1.20", marca: "mise" },
    { nombre: "luccano-light-60x1.20", marca: "mise" },
    { nombre: "ollin-marble-60x1.20", marca: "mise" },
    { nombre: "onice-chiaro-glossy-60x60", marca: "mise" },
    { nombre: "onice-scuro-60x60", marca: "mise" },
    { nombre: "praga-60x1.20", marca: "mise" },
    { nombre: "roomy-black-60x1.20", marca: "mise" },
    { nombre: "stavario-ascent-grey-60x1.20", marca: "mise" },
    { nombre: "titanium-blue-60x1.20", marca: "mise" },
    { nombre: "titanium-blue-60x60", marca: "mise" },

    // BENADRESA
    { nombre: "avenue-beige-30x90", marca: "benadresa" },
    { nombre: "blanco-brillo-30x90", marca: "benadresa" },
    { nombre: "cascais-30x90", marca: "benadresa" },
    { nombre: "decor-dune-newbury-white-30x60", marca: "benadresa" },
    { nombre: "gothel-cream-30x60", marca: "benadresa" },
    { nombre: "gothel-moka-30x90", marca: "benadresa" },
    { nombre: "keid-gothel-cream-30x90", marca: "benadresa" },
    { nombre: "keid-gothel-moka-30x90", marca: "benadresa" },
    { nombre: "leaves-avenue-beige-30x90", marca: "benadresa" },
    { nombre: "leaves-blanco-brillo-30x90", marca: "benadresa" },
    { nombre: "leaves-cascais-30x90", marca: "benadresa" },
    { nombre: "leaves-stryn-30x90", marca: "benadresa" },
    { nombre: "newbury-white-30x60", marca: "benadresa" },
    { nombre: "stryn-30x90", marca: "benadresa" }
];

// --- 2. MOTOR DE PROYECCIÓN (CORREGIDO) ---
function renderizarTextura() {
    const canvasId = (modoEdicion === 'piso') ? 'floor-canvas' : 'wall-canvas';
    const canvas = document.getElementById(canvasId);
    const viewport = document.getElementById('viewport');
    
    if (!canvas || !texturaActual || !viewport) return;

    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    // Forzamos que la imagen cargue desde cero para evitar errores de cache
    img.src = texturaActual + '?t=' + new Date().getTime();

    img.onload = () => {
        const IDs = (modoEdicion === 'piso') ? ['p1', 'p2', 'p3', 'p4'] : ['p5', 'p6', 'p7', 'p8'];
        
        const pts = IDs.map(id => {
            const el = document.getElementById(id);
            return el ? { x: el.offsetLeft, y: el.offsetTop } : { x: 0, y: 0 };
        });

        canvas.width = viewport.clientWidth;
        canvas.height = viewport.clientHeight;

        const srcPts = [0, 0, img.width, 0, img.width, img.height, 0, img.height];
        const dstPts = [pts[0].x, pts[0].y, pts[1].x, pts[1].y, pts[2].x, pts[2].y, pts[3].x, pts[3].y];
        
        try {
            // Verificamos si la librería existe
            if (typeof PerspectiveTransform === 'undefined') {
                console.error("Error: La librería PerspectiveTransform no ha cargado en el HTML.");
                return;
            }

            const transform = PerspectiveTransform(srcPts, dstPts);
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // ESTO ES CLAVE: Aplicamos la transformación al canvas
            canvas.style.transform = transform.getCSS();
            canvas.style.transformOrigin = "0 0";
            
            // Si el modo multiply lo hace invisible, prueba comentando esta línea:
            canvas.style.mixBlendMode = "multiply"; 
            
            ctx.drawImage(img, 0, 0, img.width, img.height);
            console.log("Proyección realizada con éxito");
        } catch (e) {
            console.error("Error en la transformación:", e);
        }
    };
}

// --- 3. FUNCIONES DE INTERFAZ ---
function setModo(modo) {
    modoEdicion = modo;
    console.log("Modo cambiado a:", modoEdicion);
}

function cambiarHabitacion(archivo) {
    const bg = document.getElementById('bg-room');
    if (bg) bg.src = 'img/habitaciones/' + archivo;
}

function mostrarProductos(marca) {
    const contenedor = document.getElementById('catalog-container');
    if (!contenedor) return;
    contenedor.innerHTML = ''; 

    const filtrados = misProductos.filter(p => marca === 'todas' || p.marca === marca);

    filtrados.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'tile-card';
        const ruta = `img/ceramicas/${producto.nombre}.jpg`;

        card.innerHTML = `
            <img src="${ruta}" style="width:100%; cursor:pointer;">
            <p style="color:white; font-size:10px;">${producto.nombre}</p>
        `;

        card.onclick = () => {
            texturaActual = ruta;
            renderizarTextura();
        };
        contenedor.appendChild(card);
    });
}

// --- 4. ARRASTRE DE PUNTOS ---
document.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('mousedown', function(e) {
        const viewport = document.getElementById('viewport');
        const rect = viewport.getBoundingClientRect();

        function moverPunto(ev) {
            let x = ev.clientX - rect.left;
            let y = ev.clientY - rect.top;
            dot.style.left = x + 'px';
            dot.style.top = y + 'px';
            if(texturaActual) renderizarTextura(); 
        }

        function detenerMovimiento() {
            document.removeEventListener('mousemove', moverPunto);
            document.removeEventListener('mouseup', detenerMovimiento);
        }

        document.addEventListener('mousemove', moverPunto);
        document.addEventListener('mouseup', detenerMovimiento);
    });
});

window.onload = () => {
    mostrarProductos('todas');
    setModo('piso');
};



