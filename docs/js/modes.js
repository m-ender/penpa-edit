/* Contains complete list of all the supported modes */
const penpa_types = ['mode', 'sub', 'combisub', 'ms', 'ms1', 'ms3', 'ms4', 'st', 'symmode', 'combimode', 'customcolor'];

const mode_names = {
    'surface': 'Surface',
    'multicolor': 'Multicolor',
    'line': 'Line',
    'lineE': 'Edge',
    'wall': 'Wall',
    'number': 'Number',
    'symbol': 'Shape',
    'special': 'Special',
    'cage': 'Cage',
    'combi': 'Composite',
    'sudoku': 'Sudoku',
    'board': 'Box',
    'move': 'Move'
};

const penpa_modes_map = {
    'surface': 'surface',
    'multicolor': 'multicolor',
    'number': 'number',
    'numberS': 'numberS',
    'symbol': 'symbol',
    'line': 'line',
    'freeline': 'line',
    'lineE': 'lineE',
    'freelineE': 'lineE',
    'deletelineE': 'lineE',
    'wall': 'wall',
    'cage': 'cage',
    'thermo': 'special',
    'nobulbthermo': 'special',
    'arrows': 'special',
    'direction': 'special',
    'killercages': 'cage',
    'squareframe': 'special',
    'polygon': 'special',
};

const penpa_modes = {
    'square': {
        //modes
        'mode': ['surface', 'multicolor', 'line', 'lineE', 'wall', 'number', 'symbol', 'special', 'cage', 'combi', 'sudoku', 'board', 'move'],
        //submodes
        'sub': ['line1', 'line2', 'line3', 'line5', 'line4',
            'lineE1', 'lineE2', 'lineE3', 'lineE4', 'lineE5', 'lineE6',
            'number1', 'number10', 'number6', 'number5', 'number7', 'number3', 'number9', 'number4', 'number2', 'number8', 'number11',
            'specialthermo', 'specialnobulbthermo', 'specialarrows', 'specialdirection', 'specialsquareframe', 'specialpolygon',
            'cage1', 'cage2', 'move1', 'move2', 'move3',
            'sudoku1', 'sudoku2', 'sudoku3'
        ],
        //composite modes
        'combisub': ['blpo', 'blwh', 'shaka',
            'linex', 'lineox', 'linedir', 'edgex', 'edgexoi', 'yajilin', 'hashi', 'rassisillai',
            'edgesub',
            'battleship', 'star', 'tents', 'magnets', 'mines', 'akari', 'arrowS', 'doublemines',
            'numfl', 'alfl'
        ],
        //composite mode headers
        'subcombi': ['subc1', 'subc2', 'subc3', 'subc4', 'subc5'],
        'shapemodes': ['ms1', 'ms2', 'ms3', 'ms4', 'ms5'],
        // shapes
        'ms': ['cross', 'line', 'frameline', 'tri', 'inequality', 'degital_f', 'dice', 'pills',
            'arrow_Short', 'arrow_S', 'arrow_cross', 'arrow_eight', 'arrow_fourtip',
            'battleship_B', 'battleship_G', 'battleship_W', 'battleship_B+', 'battleship_G+', 'battleship_W+',
            'kakuro', 'tents', 'star', 'compass', 'sudokuetc', 'sudokumore', 'polyomino', 'polyhex',
            'angleloop', 'firefly', 'sun_moon', 'pencils', 'slovak', 'arc', 'darts', 'spans', 'neighbors'
        ],
        'ms1': ['circle', 'square', 'triup', 'tridown', 'triright', 'trileft', 'diamond', 'hexpoint', 'hexflat', 'ox', 'bars', 'degital'],
        'ms3': ['math', 'arrow_B', 'arrow_N', 'arrow_tri', 'arrow_fouredge', 'arrow_GP'],
        'ms4': ['battleship'],
        // styles
        'st': ['surface1', 'surface8', 'surface3', 'surface4', 'surface2', 'surface5', 'surface6', 'surface7', 'surface9', 'surface10', 'surface11', 'surface12',
            'line3', 'line2', 'line5', 'line8', 'line9', 'line80', 'line12', 'line13', 'line40', 'line30',
            'lineE3', 'lineE2', 'lineE5', 'lineE8', 'lineE9', 'lineE21', 'lineE80', 'lineE12', 'lineE13', 'lineE30',
            'wall3', 'wall2', 'wall5', 'wall8', 'wall9', 'wall1', 'wall12', 'wall17', 'wall14',
            'number1', 'number2', 'number8', 'number3', 'number9', 'number10', 'number4', 'number0', 'number6', 'number7', 'number11', 'number5',
            'symbol1', 'symbol2',
            'cage10', 'cage7', 'cage15', 'cage16',
            'sudoku1', 'sudoku2', 'sudoku8', 'sudoku3', 'sudoku9', 'sudoku10'
        ],
        'li': ['battleship', 'kakuro', 'tents', 'star', 'compass', 'sudokuetc', 'sudokumore', 'polyomino',
            'linex', 'lineox', 'linedir', 'edgex', 'edgexoi', 'yajilin', 'hashi',
            'circle', 'square', 'triup', 'tridown', 'triright', 'trileft', 'diamond', 'hexpoint', 'hexflat', 'ox', 'cross', 'line', 'frameline', 'bars', 'tri',
            'circle_L', 'circle_M', 'circle_S', 'circle_SS', 'square_LL', 'square_L', 'square_M', 'square_S', 'square_SS',
            'arrow_B', 'arrow_N', 'arrow_tri', 'arrow_GP', 'arrow_fouredge', 'arrow_Short', 'arrow_S', 'arrow_cross', 'arrow_eight', 'arrow_fourtip'
        ],
        'symmode': ['content'],
        'combimode': ['content'],
        'customcolor': ['line', 'lineE', 'wall', 'surface', 'multicolor', 'cage', 'special', 'symbol'],
        'top_buttons': ['input_sudoku', 'rotation'],
        // unique IDs that doesn't follow regular id naming
        'exceptions': ['custom_color_lb', 'msli_degital',
            'combili_shaka', 'combili_battleship', 'combili_arrowS',
            'ul_degital', 'ul_bars'
        ]
    },
    'sudoku': {
        //modes
        'mode': ['surface', 'multicolor', 'line', 'lineE', 'wall', 'number', 'symbol', 'special', 'cage', 'combi', 'sudoku', 'board', 'move'],
        //submodes
        'sub': ['line1', 'line2', 'line3', 'line5', 'line4',
            'lineE1', 'lineE2', 'lineE3', 'lineE4', 'lineE5', 'lineE6',
            'number1', 'number10', 'number6', 'number5', 'number7', 'number3', 'number9', 'number4', 'number2', 'number8', 'number11',
            'specialthermo', 'specialnobulbthermo', 'specialarrows', 'specialdirection', 'specialsquareframe', 'specialpolygon',
            'cage1', 'cage2', 'move1', 'move2', 'move3',
            'sudoku1', 'sudoku2', 'sudoku3'
        ],
        //composite modes
        'combisub': ['blpo', 'blwh', 'shaka',
            'linex', 'lineox', 'linedir', 'edgex', 'edgexoi', 'yajilin', 'hashi', 'rassisillai',
            'edgesub',
            'battleship', 'star', 'tents', 'magnets', 'mines', 'akari', 'arrowS', 'doublemines',
            'numfl', 'alfl'
        ],
        //composite mode headers
        'subcombi': ['subc1', 'subc2', 'subc3', 'subc4', 'subc5'],
        'shapemodes': ['ms1', 'ms2', 'ms3', 'ms4', 'ms5'],
        // shapes
        'ms': ['cross', 'line', 'frameline', 'tri', 'inequality', 'degital_f', 'dice', 'pills',
            'arrow_Short', 'arrow_S', 'arrow_cross', 'arrow_eight', 'arrow_fourtip',
            'battleship_B', 'battleship_G', 'battleship_W', 'battleship_B+', 'battleship_G+', 'battleship_W+',
            'kakuro', 'tents', 'star', 'compass', 'sudokuetc', 'sudokumore', 'polyomino',
            'angleloop', 'firefly', 'sun_moon', 'pencils', 'slovak', 'arc', 'darts', 'spans', 'neighbors'
        ],
        'ms1': ['circle', 'square', 'triup', 'tridown', 'triright', 'trileft', 'diamond', 'hexpoint', 'hexflat', 'ox', 'bars', 'degital'],
        'ms3': ['math', 'arrow_B', 'arrow_N', 'arrow_tri', 'arrow_fouredge', 'arrow_GP'],
        'ms4': ['battleship'],
        // styles
        'st': ['surface1', 'surface8', 'surface3', 'surface4', 'surface2', 'surface5', 'surface6', 'surface7', 'surface9', 'surface10', 'surface11', 'surface12',
            'line3', 'line2', 'line5', 'line8', 'line9', 'line80', 'line12', 'line13', 'line40', 'line30',
            'lineE3', 'lineE2', 'lineE5', 'lineE8', 'lineE9', 'lineE21', 'lineE80', 'lineE12', 'lineE13', 'lineE30',
            'wall3', 'wall2', 'wall5', 'wall8', 'wall9', 'wall1', 'wall12', 'wall17', 'wall14',
            'number1', 'number2', 'number8', 'number3', 'number9', 'number10', 'number4', 'number0', 'number6', 'number7', 'number11', 'number5',
            'symbol1', 'symbol2',
            'cage10', 'cage7', 'cage15', 'cage16',
            'sudoku1', 'sudoku2', 'sudoku8', 'sudoku3', 'sudoku9', 'sudoku10'
        ],
        'li': ['battleship', 'kakuro', 'tents', 'star', 'compass', 'sudokuetc', 'sudokumore', 'polyomino',
            'linex', 'lineox', 'linedir', 'edgex', 'edgexoi', 'yajilin', 'hashi',
            'circle', 'square', 'triup', 'tridown', 'triright', 'trileft', 'diamond', 'hexpoint', 'hexflat', 'ox', 'cross', 'line', 'frameline', 'bars', 'tri',
            'circle_L', 'circle_M', 'circle_S', 'circle_SS', 'square_LL', 'square_L', 'square_M', 'square_S', 'square_SS',
            'arrow_B', 'arrow_N', 'arrow_tri', 'arrow_GP', 'arrow_fouredge', 'arrow_Short', 'arrow_S', 'arrow_cross', 'arrow_eight', 'arrow_fourtip'
        ],
        'symmode': ['content'],
        'combimode': ['content'],
        'customcolor': ['line', 'lineE', 'wall', 'surface', 'multicolor', 'cage', 'special', 'symbol'],
        'top_buttons': ['input_sudoku', 'rotation'],
        // unique IDs that doesn't follow regular id naming
        'exceptions': ['custom_color_lb', 'msli_degital',
            'combili_shaka', 'combili_battleship', 'combili_arrowS',
            'ul_degital', 'ul_bars'
        ]
    },
    'kakuro': {
        //modes
        'mode': ['surface', 'multicolor', 'line', 'lineE', 'wall', 'number', 'symbol', 'special', 'cage', 'combi', 'sudoku', 'board', 'move'],
        //submodes
        'sub': ['line1', 'line2', 'line3', 'line5', 'line4',
            'lineE1', 'lineE2', 'lineE3', 'lineE4', 'lineE5', 'lineE6',
            'number1', 'number10', 'number6', 'number5', 'number7', 'number3', 'number9', 'number4', 'number2', 'number8', 'number11',
            'specialthermo', 'specialnobulbthermo', 'specialarrows', 'specialdirection', 'specialsquareframe', 'specialpolygon',
            'cage1', 'cage2', 'move1', 'move2', 'move3',
            'sudoku1', 'sudoku2', 'sudoku3'
        ],
        //composite modes
        'combisub': ['blpo', 'blwh', 'shaka',
            'linex', 'lineox', 'linedir', 'edgex', 'edgexoi', 'yajilin', 'hashi', 'rassisillai',
            'edgesub',
            'battleship', 'star', 'tents', 'magnets', 'mines', 'akari', 'arrowS', 'doublemines',
            'numfl', 'alfl'
        ],
        //composite mode headers
        'subcombi': ['subc1', 'subc2', 'subc3', 'subc4', 'subc5'],
        'shapemodes': ['ms1', 'ms2', 'ms3', 'ms4', 'ms5'],
        // shapes
        'ms': ['cross', 'line', 'frameline', 'tri', 'inequality', 'degital_f', 'dice', 'pills',
            'arrow_Short', 'arrow_S', 'arrow_cross', 'arrow_eight', 'arrow_fourtip',
            'battleship_B', 'battleship_G', 'battleship_W', 'battleship_B+', 'battleship_G+', 'battleship_W+',
            'kakuro', 'tents', 'star', 'compass', 'sudokuetc', 'sudokumore', 'polyomino',
            'angleloop', 'firefly', 'sun_moon', 'pencils', 'slovak', 'arc', 'darts', 'spans', 'neighbors'
        ],
        'ms1': ['circle', 'square', 'triup', 'tridown', 'triright', 'trileft', 'diamond', 'hexpoint', 'hexflat', 'ox', 'bars', 'degital'],
        'ms3': ['math', 'arrow_B', 'arrow_N', 'arrow_tri', 'arrow_fouredge', 'arrow_GP'],
        'ms4': ['battleship'],
        // styles
        'st': ['surface1', 'surface8', 'surface3', 'surface4', 'surface2', 'surface5', 'surface6', 'surface7', 'surface9', 'surface10', 'surface11', 'surface12',
            'line3', 'line2', 'line5', 'line8', 'line9', 'line80', 'line12', 'line13', 'line40', 'line30',
            'lineE3', 'lineE2', 'lineE5', 'lineE8', 'lineE9', 'lineE21', 'lineE80', 'lineE12', 'lineE13', 'lineE30',
            'wall3', 'wall2', 'wall5', 'wall8', 'wall9', 'wall1', 'wall12', 'wall17', 'wall14',
            'number1', 'number2', 'number8', 'number3', 'number9', 'number10', 'number4', 'number0', 'number6', 'number7', 'number11', 'number5',
            'symbol1', 'symbol2',
            'cage10', 'cage7', 'cage15', 'cage16',
            'sudoku1', 'sudoku2', 'sudoku8', 'sudoku3', 'sudoku9', 'sudoku10'
        ],
        'li': ['battleship', 'kakuro', 'tents', 'star', 'compass', 'sudokuetc', 'sudokumore', 'polyomino',
            'linex', 'lineox', 'linedir', 'edgex', 'edgexoi', 'yajilin', 'hashi',
            'circle', 'square', 'triup', 'tridown', 'triright', 'trileft', 'diamond', 'hexpoint', 'hexflat', 'ox', 'cross', 'line', 'frameline', 'bars', 'tri',
            'circle_L', 'circle_M', 'circle_S', 'circle_SS', 'square_LL', 'square_L', 'square_M', 'square_S', 'square_SS',
            'arrow_B', 'arrow_N', 'arrow_tri', 'arrow_GP', 'arrow_fouredge', 'arrow_Short', 'arrow_S', 'arrow_cross', 'arrow_eight', 'arrow_fourtip'
        ],
        'symmode': ['content'],
        'combimode': ['content'],
        'customcolor': ['line', 'lineE', 'wall', 'surface', 'multicolor', 'cage', 'special', 'symbol'],
        'top_buttons': ['input_sudoku', 'rotation'],
        // unique IDs that doesn't follow regular id naming
        'exceptions': ['custom_color_lb', 'msli_degital',
            'combili_shaka', 'combili_battleship', 'combili_arrowS',
            'ul_degital', 'ul_bars'
        ]
    },
    'hex': {
        //modes
        'mode': ['surface', 'multicolor', 'line', 'lineE', 'wall', 'number', 'symbol', 'special', 'cage', 'combi', 'sudoku', 'board', 'move'],
        //submodes
        'sub': ['line1', 'line3', 'line5', 'line4',
            'lineE1', 'lineE3', 'lineE4', 'lineE5',
            'number1', 'number10', 'number6', 'number5', 'number7', 'number3', 'number4', 'number2', 'number8',
            'specialthermo', 'specialnobulbthermo', 'specialarrows', 'specialdirection', 'specialsquareframe', 'specialpolygon',
            'cage2', 'move1', 'move2', 'move3',
            'sudoku1', 'sudoku3'
        ],
        //composite modes
        'combisub': ['blpo', 'blwh',
            'linex', 'lineox', 'edgex', 'edgexoi', 'yajilin', 'hashi',
            'edgesub',
            'star', 'tents', 'magnets', 'mines', 'akari',
            'numfl', 'alfl'
        ],
        //composite mode headers
        'subcombi': ['subc1', 'subc2', 'subc3', 'subc4', 'subc5'],
        'shapemodes': ['ms1', 'ms2', 'ms3', 'ms4', 'ms5'],
        // shapes
        'ms': ['cross', 'line', 'frameline', 'inequality', 'degital_f', 'dice', 'pills',
            'arrow_Short', 'arrow_S', 'arrow_cross', 'arrow_eight',
            'battleship_B', 'battleship_G', 'battleship_W',
            'kakuro', 'tents', 'star', 'compass', 'sudokuetc', 'polyomino', 'polyhex',
            'angleloop', 'firefly', 'sun_moon'
        ],
        'ms1': ['circle', 'square', 'triup', 'tridown', 'diamond', 'hexpoint', 'hexflat', 'ox', 'degital'],
        'ms3': ['math', 'arrow_B', 'arrow_N', 'arrow_tri', 'arrow_GP'],
        'ms4': ['battleship'],
        // styles
        'st': ['surface1', 'surface8', 'surface3', 'surface4', 'surface2', 'surface5', 'surface6', 'surface7', 'surface9', 'surface10', 'surface11', 'surface12',
            'line3', 'line2', 'line5', 'line8', 'line9', 'line80', 'line12', 'line13', 'line40', 'line30',
            'lineE3', 'lineE2', 'lineE5', 'lineE8', 'lineE9', 'lineE21', 'lineE80', 'lineE12', 'lineE13', 'lineE30',
            'wall3', 'wall2', 'wall5', 'wall8', 'wall9', 'wall1', 'wall12', 'wall17', 'wall14',
            'number1', 'number2', 'number8', 'number3', 'number9', 'number10', 'number4', 'number0', 'number6', 'number7', 'number11', 'number5',
            'symbol1', 'symbol2',
            'cage10', 'cage7', 'cage15', 'cage16',
            'sudoku1', 'sudoku2', 'sudoku8', 'sudoku3', 'sudoku9', 'sudoku10'
        ],
        'li': ['battleship', 'kakuro', 'tents', 'star', 'compass', 'sudokuetc', 'sudokumore', 'polyomino',
            'linex', 'lineox', 'edgex', 'edgexoi', 'yajilin', 'hashi',
            'circle', 'square', 'triup', 'tridown', 'triright', 'trileft', 'diamond', 'hexpoint', 'hexflat', 'ox', 'cross', 'line', 'frameline', 'bars', 'tri',
            'circle_L', 'circle_M', 'circle_S', 'circle_SS', 'square_LL', 'square_L', 'square_M', 'square_S', 'square_SS',
            'arrow_B', 'arrow_N', 'arrow_tri', 'arrow_GP', 'arrow_fouredge', 'arrow_Short', 'arrow_S', 'arrow_cross', 'arrow_eight', 'arrow_fourtip'
        ],
        'symmode': ['content'],
        'combimode': ['content'],
        'customcolor': ['line', 'lineE', 'wall', 'surface', 'multicolor', 'cage', 'special', 'symbol'],
        'top_buttons': ['rotation'],
        // unique IDs that doesn't follow regular id naming
        'exceptions': ['custom_color_lb', 'msli_degital', 'ul_degital']
    },
    'tri': {
        //modes
        'mode': ['surface', 'multicolor', 'line', 'lineE', 'number', 'symbol', 'special', 'combi', 'sudoku', 'board', 'move'],
        //submodes
        'sub': ['line1', 'line3', 'line5', 'line4',
            'lineE1', 'lineE3', 'lineE4', 'lineE5',
            'number1', 'number6', 'number5', 'number7', 'number3', 'number4', 'number2', 'number8',
            'specialthermo', 'specialnobulbthermo', 'specialarrows', 'specialdirection', 'specialsquareframe', 'specialpolygon',
            'cage2', 'move1', 'move2', 'move3',
            'sudoku1', 'sudoku3'
        ],
        //composite modes
        'combisub': ['blpo', 'blwh',
            'linex', 'lineox', 'edgex', 'edgexoi', 'yajilin', 'hashi',
            'edgesub',
            'star', 'tents', 'magnets', 'mines', 'akari',
            'numfl', 'alfl'
        ],
        //composite mode headers
        'subcombi': ['subc1', 'subc2', 'subc3', 'subc4', 'subc5'],
        'shapemodes': ['ms1', 'ms2', 'ms3', 'ms4', 'ms5'],
        // shapes
        'ms': ['cross', 'line', 'frameline', 'inequality', 'degital_f', 'dice',
            'arrow_Short', 'arrow_S', 'arrow_cross', 'arrow_eight',
            'tents', 'star', 'sudokuetc', 'polyomino',
            'angleloop', 'firefly', 'sun_moon'
        ],
        'ms1': ['circle', 'square', 'triup', 'tridown', 'diamond', 'hexpoint', 'hexflat', 'ox'],
        'ms3': ['math', 'arrow_B', 'arrow_N', 'arrow_tri', 'arrow_GP'],
        'ms4': [],
        // styles
        'st': ['surface1', 'surface8', 'surface3', 'surface4', 'surface2', 'surface5', 'surface6', 'surface7', 'surface9', 'surface10', 'surface11', 'surface12',
            'line3', 'line2', 'line5', 'line8', 'line9', 'line80', 'line12', 'line13', 'line40', 'line30',
            'lineE3', 'lineE2', 'lineE5', 'lineE8', 'lineE9', 'lineE21', 'lineE80', 'lineE12', 'lineE13', 'lineE30',
            'wall3', 'wall2', 'wall5', 'wall8', 'wall9', 'wall1', 'wall12', 'wall17', 'wall14',
            'number1', 'number2', 'number8', 'number3', 'number9', 'number10', 'number4', 'number0', 'number6', 'number7', 'number11', 'number5',
            'symbol1', 'symbol2',
            'cage10', 'cage7', 'cage15', 'cage16',
            'sudoku1', 'sudoku2', 'sudoku8', 'sudoku3', 'sudoku9', 'sudoku10'
        ],
        'li': ['tents', 'star', 'sudokuetc', 'sudokumore', 'polyomino',
            'linex', 'lineox', 'edgex', 'edgexoi', 'yajilin', 'hashi',
            'circle', 'square', 'triup', 'tridown', 'triright', 'trileft', 'diamond', 'hexpoint', 'hexflat', 'ox', 'cross', 'line', 'frameline', 'bars', 'tri',
            'circle_L', 'circle_M', 'circle_S', 'circle_SS', 'square_LL', 'square_L', 'square_M', 'square_S', 'square_SS',
            'arrow_B', 'arrow_N', 'arrow_tri', 'arrow_GP', 'arrow_fouredge', 'arrow_Short', 'arrow_S', 'arrow_cross', 'arrow_eight', 'arrow_fourtip'
        ],
        'symmode': ['content'],
        'combimode': ['content'],
        'customcolor': ['line', 'lineE', 'surface', 'multicolor', 'special', 'symbol'],
        'top_buttons': ['rotation'],
        // unique IDs that doesn't follow regular id naming
        'exceptions': ['custom_color_lb']
    },
    'pyramid': {
        //modes
        'mode': ['surface', 'multicolor', 'line', 'lineE', 'wall', 'number', 'symbol', 'special', 'combi', 'sudoku', 'board', 'move'],
        //submodes
        'sub': ['line1', 'line3', 'line4',
            'lineE1', 'lineE3', 'lineE4', 'lineE5',
            'number1', 'number10', 'number6', 'number5', 'number7', 'number3', 'number4', 'number2', 'number8',
            'specialthermo', 'specialnobulbthermo', 'specialarrows', 'specialdirection', 'specialsquareframe', 'specialpolygon',
            'cage2', 'move1', 'move2', 'move3',
            'sudoku1', 'sudoku3'
        ],
        //composite modes
        'combisub': ['blpo', 'blwh',
            'linex', 'lineox', 'edgex', 'edgexoi', 'yajilin', 'hashi',
            'edgesub',
            'star', 'tents', 'magnets', 'mines', 'akari',
            'numfl', 'alfl'
        ],
        //composite mode headers
        'subcombi': ['subc1', 'subc2', 'subc3', 'subc4', 'subc5'],
        'shapemodes': ['ms1', 'ms2', 'ms3', 'ms4', 'ms5'],
        // shapes
        'ms': ['cross', 'line', 'frameline', 'inequality', 'degital_f', 'dice', 'pills',
            'arrow_Short', 'arrow_S', 'arrow_cross', 'arrow_eight',
            'battleship_B', 'battleship_G', 'battleship_W',
            'kakuro', 'tents', 'star', 'compass', 'sudokuetc', 'polyomino',
            'angleloop', 'firefly', 'sun_moon'
        ],
        'ms1': ['circle', 'square', 'triup', 'tridown', 'diamond', 'hexpoint', 'hexflat', 'ox'],
        'ms3': ['math', 'arrow_B', 'arrow_N', 'arrow_tri', 'arrow_GP'],
        'ms4': ['battleship'],
        // styles
        'st': ['surface1', 'surface8', 'surface3', 'surface4', 'surface2', 'surface5', 'surface6', 'surface7', 'surface9', 'surface10', 'surface11', 'surface12',
            'line3', 'line2', 'line5', 'line8', 'line9', 'line80', 'line12', 'line13', 'line40', 'line30',
            'lineE3', 'lineE2', 'lineE5', 'lineE8', 'lineE9', 'lineE21', 'lineE80', 'lineE12', 'lineE13', 'lineE30',
            'wall3', 'wall2', 'wall5', 'wall8', 'wall9', 'wall1', 'wall12', 'wall17', 'wall14',
            'number1', 'number2', 'number8', 'number3', 'number9', 'number10', 'number4', 'number0', 'number6', 'number7', 'number11', 'number5',
            'symbol1', 'symbol2',
            'cage10', 'cage7', 'cage15', 'cage16',
            'sudoku1', 'sudoku2', 'sudoku8', 'sudoku3', 'sudoku9', 'sudoku10'
        ],
        'li': ['battleship', 'kakuro', 'tents', 'star', 'compass', 'sudokuetc', 'polyomino',
            'linex', 'lineox', 'edgex', 'edgexoi', 'yajilin', 'hashi',
            'circle', 'square', 'triup', 'tridown', 'triright', 'trileft', 'diamond', 'hexpoint', 'hexflat', 'ox', 'cross', 'line', 'frameline', 'bars', 'tri',
            'circle_L', 'circle_M', 'circle_S', 'circle_SS', 'square_LL', 'square_L', 'square_M', 'square_S', 'square_SS',
            'arrow_B', 'arrow_N', 'arrow_tri', 'arrow_GP', 'arrow_fouredge', 'arrow_Short', 'arrow_S', 'arrow_cross', 'arrow_eight', 'arrow_fourtip'
        ],
        'symmode': ['content'],
        'combimode': ['content'],
        'customcolor': ['line', 'lineE', 'wall', 'surface', 'multicolor', 'special', 'symbol'],
        'top_buttons': ['rotation'],
        // unique IDs that doesn't follow regular id naming
        'exceptions': ['custom_color_lb']
    },
    'iso': {
        //modes
        'mode': ['surface', 'multicolor', 'line', 'lineE', 'number', 'symbol', 'special', 'combi', 'sudoku', 'board', 'move'],
        //submodes
        'sub': ['line1', 'line3', 'line4',
            'lineE1', 'lineE2', 'lineE3', 'lineE4', 'lineE5',
            'number1', 'number10', 'number6', 'number5', 'number7', 'number4', 'number2', 'number8',
            'specialpolygon',
            'cage2', 'move1', 'move2', 'move3',
            'sudoku1', 'sudoku3'
        ],
        //composite modes
        'combisub': ['blpo', 'blwh',
            'linex', 'lineox', 'edgex', 'edgexoi', 'yajilin', 'hashi',
            'edgesub',
            'star', 'tents', 'magnets', 'mines', 'akari',
            'numfl', 'alfl'
        ],
        //composite mode headers
        'subcombi': ['subc1', 'subc2', 'subc3', 'subc4', 'subc5'],
        'shapemodes': ['ms1', 'ms2', 'ms3', 'ms5'],
        // shapes
        'ms': ['cross', 'line', 'frameline', 'inequality', 'degital_f', 'dice', 'pills',
            'arrow_Short', 'arrow_S', 'arrow_cross', 'arrow_eight',
            'kakuro', 'tents', 'star', 'compass', 'sudokuetc', 'sudokumore', 'polyomino',
            'angleloop', 'firefly', 'sun_moon'
        ],
        'ms1': ['circle', 'square', 'triup', 'tridown', 'diamond', 'hexpoint', 'hexflat', 'ox'],
        'ms3': ['math', 'arrow_B', 'arrow_N', 'arrow_tri', 'arrow_GP'],
        'ms4': [],
        // styles
        'st': ['surface1', 'surface8', 'surface3', 'surface4', 'surface2', 'surface5', 'surface6', 'surface7', 'surface9', 'surface10', 'surface11', 'surface12',
            'line3', 'line2', 'line5', 'line8', 'line9', 'line80', 'line12', 'line13', 'line40', 'line30',
            'lineE3', 'lineE2', 'lineE5', 'lineE8', 'lineE9', 'lineE21', 'lineE80', 'lineE12', 'lineE13', 'lineE30',
            'wall3', 'wall2', 'wall5', 'wall8', 'wall9', 'wall1', 'wall12', 'wall17', 'wall14',
            'number1', 'number2', 'number8', 'number3', 'number9', 'number10', 'number4', 'number0', 'number6', 'number7', 'number11', 'number5',
            'symbol1', 'symbol2',
            'cage10', 'cage7', 'cage15', 'cage16',
            'sudoku1', 'sudoku2', 'sudoku8', 'sudoku3', 'sudoku9', 'sudoku10'
        ],
        'li': ['battleship', 'kakuro', 'tents', 'star', 'compass', 'sudokuetc', 'sudokumore', 'polyomino',
            'linex', 'lineox', 'edgex', 'edgexoi', 'yajilin', 'hashi',
            'circle', 'square', 'triup', 'tridown', 'triright', 'trileft', 'diamond', 'hexpoint', 'hexflat', 'ox', 'cross', 'line', 'frameline', 'bars', 'tri',
            'circle_L', 'circle_M', 'circle_S', 'circle_SS', 'square_LL', 'square_L', 'square_M', 'square_S', 'square_SS',
            'arrow_B', 'arrow_N', 'arrow_tri', 'arrow_GP', 'arrow_fouredge', 'arrow_Short', 'arrow_S', 'arrow_cross', 'arrow_eight', 'arrow_fourtip'
        ],
        'symmode': ['content'],
        'combimode': ['content'],
        'customcolor': ['line', 'lineE', 'surface', 'multicolor', 'special', 'symbol'],
        'top_buttons': ['rotation'],
        // unique IDs that doesn't follow regular id naming
        'exceptions': ['custom_color_lb']
    },
    'tetrakis_square': {
        //modes
        'mode': ['surface', 'multicolor', 'line', 'lineE', 'number', 'symbol', 'special', 'combi', 'sudoku', 'board', 'move'],
        //submodes
        'sub': ['line1', 'line3', 'line4',
            'lineE1', 'lineE3', 'lineE4', 'lineE5',
            'number1', 'number10', 'number6', 'number5', 'number7', 'number4', 'number2', 'number8',
            'specialpolygon',
            'cage2', 'move1', 'move2', 'move3',
            'sudoku1', 'sudoku3'
        ],
        //composite modes
        'combisub': ['blpo', 'blwh',
            'linex', 'lineox', 'edgex', 'edgexoi', 'yajilin', 'hashi',
            'edgesub',
            'star', 'tents', 'magnets', 'mines', 'akari',
            'numfl', 'alfl'
        ],
        //composite mode headers
        'subcombi': ['subc1', 'subc2', 'subc3', 'subc4'],
        'shapemodes': ['ms1', 'ms2', 'ms3', 'ms5'],
        // shapes
        'ms': ['cross', 'line', 'frameline', 'inequality', 'degital_f', 'dice', 'pills',
            'arrow_Short', 'arrow_S', 'arrow_cross', 'arrow_eight',
            'kakuro', 'tents', 'star', 'compass', 'sudokuetc', 'sudokumore', 'polyomino',
            'angleloop', 'firefly', 'sun_moon'
        ],
        'ms1': ['circle', 'square', 'triup', 'tridown', 'diamond', 'hexpoint', 'hexflat', 'ox'],
        'ms3': ['math', 'arrow_B', 'arrow_N', 'arrow_tri', 'arrow_GP'],
        'ms4': [],
        // styles
        'st': ['surface1', 'surface8', 'surface3', 'surface4', 'surface2', 'surface5', 'surface6', 'surface7', 'surface9', 'surface10', 'surface11', 'surface12',
            'line3', 'line2', 'line5', 'line8', 'line9', 'line80', 'line12', 'line13', 'line40', 'line30',
            'lineE3', 'lineE2', 'lineE5', 'lineE8', 'lineE9', 'lineE21', 'lineE80', 'lineE12', 'lineE13', 'lineE30',
            'wall3', 'wall2', 'wall5', 'wall8', 'wall9', 'wall1', 'wall12', 'wall17', 'wall14',
            'number1', 'number2', 'number8', 'number3', 'number9', 'number10', 'number4', 'number0', 'number6', 'number7', 'number11', 'number5',
            'symbol1', 'symbol2',
            'cage10', 'cage7', 'cage15', 'cage16',
            'sudoku1', 'sudoku2', 'sudoku8', 'sudoku3', 'sudoku9', 'sudoku10'
        ],
        'li': ['battleship', 'kakuro', 'tents', 'star', 'compass', 'sudokuetc', 'sudokumore', 'polyomino',
            'linex', 'lineox', 'edgex', 'edgexoi', 'yajilin', 'hashi',
            'circle', 'square', 'triup', 'tridown', 'triright', 'trileft', 'diamond', 'hexpoint', 'hexflat', 'ox', 'cross', 'line', 'frameline', 'bars', 'tri',
            'circle_L', 'circle_M', 'circle_S', 'circle_SS', 'square_LL', 'square_L', 'square_M', 'square_S', 'square_SS',
            'arrow_B', 'arrow_N', 'arrow_tri', 'arrow_GP', 'arrow_fouredge', 'arrow_Short', 'arrow_S', 'arrow_cross', 'arrow_eight', 'arrow_fourtip'
        ],
        'symmode': ['content'],
        'combimode': ['content'],
        'customcolor': ['line', 'lineE', 'surface', 'multicolor', 'special', 'symbol'],
        'top_buttons': ['rotation'],
        // unique IDs that doesn't follow regular id naming
        'exceptions': ['custom_color_lb']
    },
    'truncated_square': {
        //modes
        'mode': ['surface', 'multicolor', 'line', 'lineE', 'number', 'symbol', 'special', 'combi', 'sudoku', 'board'],
        //submodes
        'sub': ['line1', 'line3', 'line4',
            'lineE1', 'number10', 'lineE3', 'lineE4', 'lineE5',
            'number1', 'number6', 'number5', 'number8',
            'specialpolygon',
            'cage2', 'move1', 'move2', 'move3',
            'sudoku1', 'sudoku3'
        ],
        //composite modes
        'combisub': ['blpo', 'blwh',
            'linex', 'lineox', 'edgex', 'edgexoi', 'yajilin', 'hashi',
            'edgesub',
            'star', 'tents', 'magnets', 'mines', 'akari',
            'numfl', 'alfl'
        ],
        //composite mode headers
        'subcombi': ['subc1', 'subc2', 'subc3', 'subc4'],
        'shapemodes': ['ms1', 'ms2', 'ms3', 'ms5'],
        // shapes
        'ms': ['cross', 'line', 'inequality', 'degital_f',
            'arrow_Short', 'arrow_S', 'arrow_cross', 'arrow_eight',
            'kakuro', 'tents', 'star', 'compass', 'sudokuetc', 'sudokumore', 'polyomino',
            'angleloop', 'firefly', 'sun_moon'
        ],
        'ms1': ['circle', 'square', 'triup', 'tridown', 'diamond', 'hexpoint', 'hexflat', 'ox'],
        'ms3': ['math', 'arrow_B', 'arrow_N', 'arrow_tri', 'arrow_GP'],
        'ms4': [],
        // styles
        'st': ['surface1', 'surface8', 'surface3', 'surface4', 'surface2', 'surface5', 'surface6', 'surface7', 'surface9', 'surface10', 'surface11', 'surface12',
            'line3', 'line2', 'line5', 'line8', 'line9', 'line80', 'line12', 'line13', 'line40', 'line30',
            'lineE3', 'lineE2', 'lineE5', 'lineE8', 'lineE9', 'lineE21', 'lineE80', 'lineE12', 'lineE13', 'lineE30',
            'wall3', 'wall2', 'wall5', 'wall8', 'wall9', 'wall1', 'wall12', 'wall17', 'wall14',
            'number1', 'number2', 'number8', 'number3', 'number9', 'number10', 'number4', 'number0', 'number6', 'number7', 'number11', 'number5',
            'symbol1', 'symbol2',
            'cage10', 'cage7', 'cage15', 'cage16',
            'sudoku1', 'sudoku2', 'sudoku8', 'sudoku3', 'sudoku9', 'sudoku10'
        ],
        'li': ['battleship', 'kakuro', 'tents', 'star', 'compass', 'sudokuetc', 'sudokumore', 'polyomino',
            'linex', 'lineox', 'edgex', 'edgexoi', 'yajilin', 'hashi',
            'circle', 'square', 'triup', 'tridown', 'triright', 'trileft', 'diamond', 'hexpoint', 'hexflat', 'ox', 'cross', 'line', 'frameline', 'bars', 'tri',
            'circle_L', 'circle_M', 'circle_S', 'circle_SS', 'square_LL', 'square_L', 'square_M', 'square_S', 'square_SS',
            'arrow_B', 'arrow_N', 'arrow_tri', 'arrow_GP', 'arrow_fouredge', 'arrow_Short', 'arrow_S', 'arrow_cross', 'arrow_eight', 'arrow_fourtip'
        ],
        'symmode': ['content'],
        'combimode': ['content'],
        'customcolor': ['line', 'lineE', 'surface', 'multicolor', 'special', 'symbol'],
        'top_buttons': ['rotation'],
        // unique IDs that doesn't follow regular id naming
        'exceptions': ['custom_color_lb']
    },
    'snub_square': {
        //modes
        'mode': ['surface', 'multicolor', 'line', 'lineE', 'number', 'symbol', 'special', 'combi', 'sudoku', 'board'],
        //submodes
        'sub': ['line1', 'line3', 'line4',
            'lineE1', 'number10', 'lineE3', 'lineE4', 'lineE5',
            'number1', 'number6', 'number5', 'number8',
            'specialpolygon',
            'cage2', 'move1', 'move2', 'move3',
            'sudoku1', 'sudoku3'
        ],
        //composite modes
        'combisub': ['blpo', 'blwh',
            'linex', 'lineox', 'edgex', 'edgexoi', 'yajilin', 'hashi',
            'edgesub',
            'star', 'tents', 'magnets', 'mines', 'akari',
            'numfl', 'alfl'
        ],
        //composite mode headers
        'subcombi': ['subc1', 'subc2', 'subc3', 'subc4'],
        'shapemodes': ['ms1', 'ms2', 'ms3', 'ms5'],
        // shapes
        'ms': ['cross', 'line', 'inequality', 'degital_f',
            'arrow_Short', 'arrow_S', 'arrow_cross', 'arrow_eight',
            'kakuro', 'tents', 'star', 'compass', 'sudokuetc', 'sudokumore', 'polyomino',
            'angleloop', 'firefly', 'sun_moon'
        ],
        'ms1': ['circle', 'square', 'triup', 'tridown', 'diamond', 'hexpoint', 'hexflat', 'ox'],
        'ms3': ['math', 'arrow_B', 'arrow_N', 'arrow_tri', 'arrow_GP'],
        'ms4': [],
        // styles
        'st': ['surface1', 'surface8', 'surface3', 'surface4', 'surface2', 'surface5', 'surface6', 'surface7', 'surface9', 'surface10', 'surface11', 'surface12',
            'line3', 'line2', 'line5', 'line8', 'line9', 'line80', 'line12', 'line13', 'line40', 'line30',
            'lineE3', 'lineE2', 'lineE5', 'lineE8', 'lineE9', 'lineE21', 'lineE80', 'lineE12', 'lineE13', 'lineE30',
            'wall3', 'wall2', 'wall5', 'wall8', 'wall9', 'wall1', 'wall12', 'wall17', 'wall14',
            'number1', 'number2', 'number8', 'number3', 'number9', 'number10', 'number4', 'number0', 'number6', 'number7', 'number11', 'number5',
            'symbol1', 'symbol2',
            'cage10', 'cage7', 'cage15', 'cage16',
            'sudoku1', 'sudoku2', 'sudoku8', 'sudoku3', 'sudoku9', 'sudoku10'
        ],
        'li': ['battleship', 'kakuro', 'tents', 'star', 'compass', 'sudokuetc', 'sudokumore', 'polyomino',
            'linex', 'lineox', 'edgex', 'edgexoi', 'yajilin', 'hashi',
            'circle', 'square', 'triup', 'tridown', 'triright', 'trileft', 'diamond', 'hexpoint', 'hexflat', 'ox', 'cross', 'line', 'frameline', 'bars', 'tri',
            'circle_L', 'circle_M', 'circle_S', 'circle_SS', 'square_LL', 'square_L', 'square_M', 'square_S', 'square_SS',
            'arrow_B', 'arrow_N', 'arrow_tri', 'arrow_GP', 'arrow_fouredge', 'arrow_Short', 'arrow_S', 'arrow_cross', 'arrow_eight', 'arrow_fourtip'
        ],
        'symmode': ['content'],
        'combimode': ['content'],
        'customcolor': ['line', 'lineE', 'surface', 'multicolor', 'special', 'symbol'],
        'top_buttons': ['rotation'],
        // unique IDs that doesn't follow regular id naming
        'exceptions': ['custom_color_lb']
    },
    'cairo_pentagonal': {
        //modes
        'mode': ['surface', 'multicolor', 'line', 'lineE', 'number', 'symbol', 'special', 'combi', 'sudoku', 'board'],
        //submodes
        'sub': ['line1', 'line3', 'line4',
            'lineE1', 'number10', 'lineE3', 'lineE4', 'lineE5',
            'number1', 'number6', 'number5', 'number8',
            'specialpolygon',
            'cage2', 'move1', 'move2', 'move3',
            'sudoku1', 'sudoku3'
        ],
        //composite modes
        'combisub': ['blpo', 'blwh',
            'linex', 'lineox', 'edgex', 'edgexoi', 'yajilin', 'hashi',
            'edgesub',
            'star', 'tents', 'magnets', 'mines', 'akari',
            'numfl', 'alfl'
        ],
        //composite mode headers
        'subcombi': ['subc1', 'subc2', 'subc3', 'subc4'],
        'shapemodes': ['ms1', 'ms2', 'ms3', 'ms5'],
        // shapes
        'ms': ['cross', 'line', 'inequality', 'degital_f',
            'arrow_Short', 'arrow_S', 'arrow_cross', 'arrow_eight',
            'kakuro', 'tents', 'star', 'compass', 'sudokuetc', 'sudokumore', 'polyomino',
            'angleloop', 'firefly', 'sun_moon'
        ],
        'ms1': ['circle', 'square', 'triup', 'tridown', 'diamond', 'hexpoint', 'hexflat', 'ox'],
        'ms3': ['math', 'arrow_B', 'arrow_N', 'arrow_tri', 'arrow_GP'],
        'ms4': [],
        // styles
        'st': ['surface1', 'surface8', 'surface3', 'surface4', 'surface2', 'surface5', 'surface6', 'surface7', 'surface9', 'surface10', 'surface11', 'surface12',
            'line3', 'line2', 'line5', 'line8', 'line9', 'line80', 'line12', 'line13', 'line40', 'line30',
            'lineE3', 'lineE2', 'lineE5', 'lineE8', 'lineE9', 'lineE21', 'lineE80', 'lineE12', 'lineE13', 'lineE30',
            'wall3', 'wall2', 'wall5', 'wall8', 'wall9', 'wall1', 'wall12', 'wall17', 'wall14',
            'number1', 'number2', 'number8', 'number3', 'number9', 'number10', 'number4', 'number0', 'number6', 'number7', 'number11', 'number5',
            'symbol1', 'symbol2',
            'cage10', 'cage7', 'cage15', 'cage16',
            'sudoku1', 'sudoku2', 'sudoku8', 'sudoku3', 'sudoku9', 'sudoku10'
        ],
        'li': ['battleship', 'kakuro', 'tents', 'star', 'compass', 'sudokuetc', 'sudokumore', 'polyomino',
            'linex', 'lineox', 'edgex', 'edgexoi', 'yajilin', 'hashi',
            'circle', 'square', 'triup', 'tridown', 'triright', 'trileft', 'diamond', 'hexpoint', 'hexflat', 'ox', 'cross', 'line', 'frameline', 'bars', 'tri',
            'circle_L', 'circle_M', 'circle_S', 'circle_SS', 'square_LL', 'square_L', 'square_M', 'square_S', 'square_SS',
            'arrow_B', 'arrow_N', 'arrow_tri', 'arrow_GP', 'arrow_fouredge', 'arrow_Short', 'arrow_S', 'arrow_cross', 'arrow_eight', 'arrow_fourtip'
        ],
        'symmode': ['content'],
        'combimode': ['content'],
        'customcolor': ['line', 'lineE', 'surface', 'multicolor', 'special', 'symbol'],
        'top_buttons': ['rotation'],
        // unique IDs that doesn't follow regular id naming
        'exceptions': ['custom_color_lb']
    },
    'rhombitrihexagonal': {
        //modes
        'mode': ['surface', 'multicolor', 'line', 'lineE', 'number', 'symbol', 'special', 'combi', 'sudoku', 'board'],
        //submodes
        'sub': ['line1', 'line3', 'line4',
            'lineE1', 'number10', 'lineE3', 'lineE4', 'lineE5',
            'number1', 'number6', 'number5', 'number8',
            'specialpolygon',
            'cage2', 'move1', 'move2', 'move3',
            'sudoku1', 'sudoku3'
        ],
        //composite modes
        'combisub': ['blpo', 'blwh',
            'linex', 'lineox', 'edgex', 'edgexoi', 'yajilin', 'hashi',
            'edgesub',
            'star', 'tents', 'magnets', 'mines', 'akari',
            'numfl', 'alfl'
        ],
        //composite mode headers
        'subcombi': ['subc1', 'subc2', 'subc3', 'subc4'],
        'shapemodes': ['ms1', 'ms2', 'ms3', 'ms5'],
        // shapes
        'ms': ['cross', 'line', 'inequality', 'degital_f',
            'arrow_Short', 'arrow_S', 'arrow_cross', 'arrow_eight',
            'kakuro', 'tents', 'star', 'compass', 'sudokuetc', 'sudokumore', 'polyomino',
            'angleloop', 'firefly', 'sun_moon'
        ],
        'ms1': ['circle', 'square', 'triup', 'tridown', 'diamond', 'hexpoint', 'hexflat', 'ox'],
        'ms3': ['math', 'arrow_B', 'arrow_N', 'arrow_tri', 'arrow_GP'],
        'ms4': [],
        // styles
        'st': ['surface1', 'surface8', 'surface3', 'surface4', 'surface2', 'surface5', 'surface6', 'surface7', 'surface9', 'surface10', 'surface11', 'surface12',
            'line3', 'line2', 'line5', 'line8', 'line9', 'line80', 'line12', 'line13', 'line40', 'line30',
            'lineE3', 'lineE2', 'lineE5', 'lineE8', 'lineE9', 'lineE21', 'lineE80', 'lineE12', 'lineE13', 'lineE30',
            'wall3', 'wall2', 'wall5', 'wall8', 'wall9', 'wall1', 'wall12', 'wall17', 'wall14',
            'number1', 'number2', 'number8', 'number3', 'number9', 'number10', 'number4', 'number0', 'number6', 'number7', 'number11', 'number5',
            'symbol1', 'symbol2',
            'cage10', 'cage7', 'cage15', 'cage16',
            'sudoku1', 'sudoku2', 'sudoku8', 'sudoku3', 'sudoku9', 'sudoku10'
        ],
        'li': ['battleship', 'kakuro', 'tents', 'star', 'compass', 'sudokuetc', 'sudokumore', 'polyomino',
            'linex', 'lineox', 'edgex', 'edgexoi', 'yajilin', 'hashi',
            'circle', 'square', 'triup', 'tridown', 'triright', 'trileft', 'diamond', 'hexpoint', 'hexflat', 'ox', 'cross', 'line', 'frameline', 'bars', 'tri',
            'circle_L', 'circle_M', 'circle_S', 'circle_SS', 'square_LL', 'square_L', 'square_M', 'square_S', 'square_SS',
            'arrow_B', 'arrow_N', 'arrow_tri', 'arrow_GP', 'arrow_fouredge', 'arrow_Short', 'arrow_S', 'arrow_cross', 'arrow_eight', 'arrow_fourtip'
        ],
        'symmode': ['content'],
        'combimode': ['content'],
        'customcolor': ['line', 'lineE', 'surface', 'multicolor', 'special', 'symbol'],
        'top_buttons': ['rotation'],
        // unique IDs that doesn't follow regular id naming
        'exceptions': ['custom_color_lb']
    },
    'deltoidal_trihexagonal': {
        //modes
        'mode': ['surface', 'multicolor', 'line', 'lineE', 'number', 'symbol', 'special', 'combi', 'sudoku', 'board'],
        //submodes
        'sub': ['line1', 'line3', 'line4',
            'lineE1', 'number10', 'lineE3', 'lineE4', 'lineE5',
            'number1', 'number6', 'number5', 'number8',
            'specialpolygon',
            'cage2', 'move1', 'move2', 'move3',
            'sudoku1', 'sudoku3'
        ],
        //composite modes
        'combisub': ['blpo', 'blwh',
            'linex', 'lineox', 'edgex', 'edgexoi', 'yajilin', 'hashi',
            'edgesub',
            'star', 'tents', 'magnets', 'mines', 'akari',
            'numfl', 'alfl'
        ],
        //composite mode headers
        'subcombi': ['subc1', 'subc2', 'subc3', 'subc4'],
        'shapemodes': ['ms1', 'ms2', 'ms3', 'ms5'],
        // shapes
        'ms': ['cross', 'line', 'inequality', 'degital_f',
            'arrow_Short', 'arrow_S', 'arrow_cross', 'arrow_eight',
            'kakuro', 'tents', 'star', 'compass', 'sudokuetc', 'sudokumore', 'polyomino',
            'angleloop', 'firefly', 'sun_moon'
        ],
        'ms1': ['circle', 'square', 'triup', 'tridown', 'diamond', 'hexpoint', 'hexflat', 'ox'],
        'ms3': ['math', 'arrow_B', 'arrow_N', 'arrow_tri', 'arrow_GP'],
        'ms4': [],
        // styles
        'st': ['surface1', 'surface8', 'surface3', 'surface4', 'surface2', 'surface5', 'surface6', 'surface7', 'surface9', 'surface10', 'surface11', 'surface12',
            'line3', 'line2', 'line5', 'line8', 'line9', 'line80', 'line12', 'line13', 'line40', 'line30',
            'lineE3', 'lineE2', 'lineE5', 'lineE8', 'lineE9', 'lineE21', 'lineE80', 'lineE12', 'lineE13', 'lineE30',
            'wall3', 'wall2', 'wall5', 'wall8', 'wall9', 'wall1', 'wall12', 'wall17', 'wall14',
            'number1', 'number2', 'number8', 'number3', 'number9', 'number10', 'number4', 'number0', 'number6', 'number7', 'number11', 'number5',
            'symbol1', 'symbol2',
            'cage10', 'cage7', 'cage15', 'cage16',
            'sudoku1', 'sudoku2', 'sudoku8', 'sudoku3', 'sudoku9', 'sudoku10'
        ],
        'li': ['battleship', 'kakuro', 'tents', 'star', 'compass', 'sudokuetc', 'sudokumore', 'polyomino',
            'linex', 'lineox', 'edgex', 'edgexoi', 'yajilin', 'hashi',
            'circle', 'square', 'triup', 'tridown', 'triright', 'trileft', 'diamond', 'hexpoint', 'hexflat', 'ox', 'cross', 'line', 'frameline', 'bars', 'tri',
            'circle_L', 'circle_M', 'circle_S', 'circle_SS', 'square_LL', 'square_L', 'square_M', 'square_S', 'square_SS',
            'arrow_B', 'arrow_N', 'arrow_tri', 'arrow_GP', 'arrow_fouredge', 'arrow_Short', 'arrow_S', 'arrow_cross', 'arrow_eight', 'arrow_fourtip'
        ],
        'symmode': ['content'],
        'combimode': ['content'],
        'customcolor': ['line', 'lineE', 'surface', 'multicolor', 'special', 'symbol'],
        'top_buttons': ['rotation'],
        // unique IDs that doesn't follow regular id naming
        'exceptions': ['custom_color_lb']
    },
    'penrose_P3': {
        //modes
        'mode': ['surface', 'line', 'lineE', 'number', 'symbol', 'special', 'combi', 'sudoku', 'board', 'move'],
        //submodes
        'sub': ['line1', 'line3', 'line4',
            'lineE1', 'lineE3', 'lineE4', 'lineE5',
            'number1', 'number10', 'number6', 'number5', 'number7', 'number4', 'number2', 'number8',
            'specialpolygon',
            'cage2', 'move1', 'move2', 'move3',
            'sudoku1', 'sudoku3'
        ],
        //composite modes
        'combisub': ['blpo', 'blwh',
            'linex', 'lineox', 'edgex', 'edgexoi', 'yajilin', 'hashi',
            'edgesub',
            'star', 'tents', 'magnets', 'mines', 'akari',
            'numfl', 'alfl'
        ],
        //composite mode headers
        'subcombi': ['subc1', 'subc2', 'subc3', 'subc4'],
        'shapemodes': ['ms1', 'ms2', 'ms3', 'ms5'],
        // shapes
        'ms': ['cross', 'line', 'frameline', 'inequality', 'degital_f', 'dice', 'pills',
            'arrow_Short', 'arrow_S', 'arrow_cross', 'arrow_eight',
            'kakuro', 'tents', 'star', 'compass', 'sudokuetc', 'sudokumore', 'polyomino',
            'angleloop', 'firefly', 'sun_moon'
        ],
        'ms1': ['circle', 'square', 'triup', 'tridown', 'diamond', 'hexpoint', 'hexflat', 'ox'],
        'ms3': ['math', 'arrow_B', 'arrow_N', 'arrow_tri', 'arrow_GP'],
        'ms4': [],
        // styles
        'st': ['surface1', 'surface8', 'surface3', 'surface4', 'surface2', 'surface5', 'surface6', 'surface7', 'surface9', 'surface10', 'surface11', 'surface12',
            'line3', 'line2', 'line5', 'line8', 'line9', 'line80', 'line12', 'line13', 'line40', 'line30',
            'lineE3', 'lineE2', 'lineE5', 'lineE8', 'lineE9', 'lineE21', 'lineE80', 'lineE12', 'lineE13', 'lineE30',
            'wall3', 'wall2', 'wall5', 'wall8', 'wall9', 'wall1', 'wall12', 'wall17', 'wall14',
            'number1', 'number2', 'number8', 'number3', 'number9', 'number10', 'number4', 'number0', 'number6', 'number7', 'number11', 'number5',
            'symbol1', 'symbol2',
            'cage10', 'cage7', 'cage15', 'cage16',
            'sudoku1', 'sudoku2', 'sudoku8', 'sudoku3', 'sudoku9', 'sudoku10'
        ],
        'li': ['battleship', 'kakuro', 'tents', 'star', 'compass', 'sudokuetc', 'sudokumore', 'polyomino',
            'linex', 'lineox', 'edgex', 'edgexoi', 'yajilin', 'hashi',
            'circle', 'square', 'triup', 'tridown', 'triright', 'trileft', 'diamond', 'hexpoint', 'hexflat', 'ox', 'cross', 'line', 'frameline', 'bars', 'tri',
            'circle_L', 'circle_M', 'circle_S', 'circle_SS', 'square_LL', 'square_L', 'square_M', 'square_S', 'square_SS',
            'arrow_B', 'arrow_N', 'arrow_tri', 'arrow_GP', 'arrow_fouredge', 'arrow_Short', 'arrow_S', 'arrow_cross', 'arrow_eight', 'arrow_fourtip'
        ],
        'symmode': ['content'],
        'combimode': ['content'],
        'customcolor': ['line', 'lineE', 'surface', 'special', 'symbol'],
        'top_buttons': ['rotation'],
        // unique IDs that doesn't follow regular id naming
        'exceptions': ['custom_color_lb']
    },
};