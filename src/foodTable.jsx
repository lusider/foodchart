const foodTable = [
    { id: 1, name: "Acai", Jan: 0, Feb: 0, Mar: 0, Apr: 0, May: 0, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 0, Nov: 0, Dec: 0 },
    { id: 2, name: "Acerola", Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 },
    { id: 3, name: "Apple", Jan: 3, Feb: 3, Mar: 3, Apr: 2, May: 2, Jun: 0, Jul: 0, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 0 }, 
    { id: 4, name: "Apricot", Jan: 1, Feb: 1, Mar: 0, Apr: 0, May: 2, Jun: 2, Jul: 2, Aug: 0, Sep: 0, Oct: 0, Nov: 1, Dec: 1}, 
    { id: 5, name: "Banana", Jan: 3, Feb: 3, Mar: 3, Apr: 3, May: 3, Jun: 3, Jul: 3, Aug: 3, Sep: 3, Oct: 3, Nov: 3, Dec: 3}, 
    { id: 6, name: "Blackberry", Jan: 3, Feb: 3, Mar: 3, Apr: 0, May: 0, Jun: 0, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 3}, 
    { id: 7, name: "Blueberry", Jan: 1, Feb: 1, Mar: 1, Apr: 0, May: 2, Jun: 2, Jul: 2, Aug: 2, Sep: 2, Oct: 1, Nov: 1, Dec: 1}, 
    { id: 8, name: "Boysenberry", Jan: 1, Feb: 1, Mar: 1, Apr: 0, May: 0, Jun: 2, Jul: 2, Aug: 0, Sep: 0, Oct: 0, Nov: 0, Dec: 1}, 
    { id: 9, name: "Camu Camu", Jan: 0, Feb: 0, Mar: 0, Apr: 0, May: 1, Jun: 1, Jul: 1, Aug: 0, Sep: 0, Oct: 0, Nov: 0, Dec: 0}, 
    { id: 10, name: "Cherry, DS", Jan: 0, Feb: 0, Mar: 0, Apr: 0, May: 0, Jun: 2, Jul: 2, Aug: 0, Sep: 0, Oct: 0, Nov: 1, Dec: 1}, 
    { id: 11, name: "Cherry, Tart", Jan: 1, Feb: 0, Mar: 0, Apr: 0, May: 0, Jun: 2, Jul: 2, Aug: 2, Sep: 0, Oct: 0, Nov: 1, Dec: 1}, 
    { id: 12, name: "Cranberry", Jan: 0, Feb: 1, Mar: 1, Apr: 1, May: 0, Jun: 0, Jul: 0, Aug: 2, Sep: 2, Oct: 2, Nov: 0, Dec: 0},
    { id: 13, name: "Currant", Jan: 0, Feb: 0, Mar: 0, Apr: 0, May: 0, Jun: 1, Jul: 1, Aug: 0, Sep: 0, Oct: 0, Nov: 0, Dec: 0},
    { id: 14, name: "Dragonfruit", Jan: 0, Feb: 0, Mar: 0, Apr: 0, May: 1, Jun: 1, Jul: 1, Aug: 0, Sep: 0, Oct: 0, Nov: 0, Dec: 0},
    { id: 15, name: "Elderberry", Jan: 0, Feb: 0, Mar: 1, Apr: 1, May: 0, Jun: 0, Jul: 2, Aug: 2, Sep: 2, Oct: 0, Nov: 0, Dec: 0},
    { id: 16, name: "Goji Berry", Jan: 0, Feb: 0, Mar: 0, Apr: 0, May: 0, Jun: 0, Jul: 0, Aug: 0, Sep: 2, Oct: 2, Nov: 0, Dec: 0},
    { id: 17, name: "Grape, Concord", Jan: 0, Feb: 0, Mar: 1, Apr: 1, May: 0, Jun: 0, Jul: 0, Aug: 0, Sep: 2, Oct: 2, Nov: 0, Dec: 0},
    { id: 18, name: "Grape, White", Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 0, Jun: 0, Jul: 0, Aug: 2, Sep: 2, Oct: 0, Nov: 0, Dec: 0},
    { id: 19, name: "Grape, Red", Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 0, Jun: 0, Jul: 0, Aug: 2, Sep: 2, Oct: 0, Nov: 0, Dec: 0},
    { id: 20, name: "Grapefruit", Jan: 2, Feb: 2, Mar: 2, Apr: 2, May: 2, Jun: 0, Jul: 0, Aug: 0, Sep: 0, Oct: 0, Nov: 2, Dec: 2},
    { id: 21, name: "Guava", Jan: 1, Feb: 1, Mar: 2, Apr: 2, May: 2, Jun: 2, Jul: 2, Aug: 3, Sep: 3, Oct: 3, Nov: 3, Dec: 1},
    { id: 22, name: "Kiwi", Jan: 0, Feb: 0, Mar: 2, Apr: 2, May: 2, Jun: 2, Jul: 0, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 0},
    { id: 23, name: "Lemon", Jan: 3, Feb: 1, Mar: 1, Apr: 1, May: 3, Jun: 3, Jul: 2, Aug: 2, Sep: 2, Oct: 2, Nov: 3, Dec: 3},
    { id: 24, name: "Lime", Jan: 3, Feb: 1, Mar: 1, Apr: 1, May: 3, Jun: 3, Jul: 2, Aug: 2, Sep: 2, Oct: 2, Nov: 3, Dec: 3},
    { id: 25, name: "Mango", Jan: 2, Feb: 2, Mar: 2, Apr: 2, May: 3, Jun: 3, Jul: 3, Aug: 1, Sep: 1, Oct: 2, Nov: 2, Dec: 2},
    { id: 26, name: "Mangosteen", Jan: 0, Feb: 0, Mar: 0, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 0, Nov: 0, Dec: 0},
    { id: 27, name: "Nectarine", Jan: 0, Feb: 0, Mar: 0, Apr: 0, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 0, Nov: 0, Dec: 0},
    { id: 28, name: "Orange", Jan: 3, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 3, Aug: 2, Sep: 2, Oct: 2, Nov: 2, Dec: 2},
    { id: 29, name: "Papaya", Jan: 3, Feb: 3, Mar: 3, Apr: 3, May: 3, Jun: 3, Jul: 3, Aug: 3, Sep: 3, Oct: 3, Nov: 3, Dec: 3},
    { id: 30, name: "Passion Fruit", Jan: 1, Feb: 1, Mar: 3, Apr: 3, May: 3, Jun: 3, Jul: 2, Aug: 2, Sep: 2, Oct: 2, Nov: 3, Dec: 3},
    { id: 31, name: "Peach", Jan: 2, Feb: 2, Mar: 2, Apr: 0, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 0, Nov: 0, Dec: 2},
    { id: 32, name: "Pear", Jan: 2, Feb: 2, Mar: 2, Apr: 0, May: 0, Jun: 0, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 0, Dec: 0 },
    { id: 33, name: "Pear, Prickly", Jan: 0, Feb: 0, Mar: 0, Apr: 0, May: 0, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 0},
    { id: 34, name: "Pineapple", Jan: 3, Feb: 3, Mar: 3, Apr: 3, May: 3, Jun: 3, Jul: 3, Aug: 3, Sep: 3, Oct: 3, Nov: 3, Dec: 3}, 
    { id: 35, name: "Plum", Jan: 2, Feb: 2, Mar: 2, Apr: 0, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 0, Nov: 0, Dec: 0}, 
    { id: 36, name: "Pomegranate", Jan: 2, Feb: 2, Mar: 0, Apr: 0, May: 0, Jun: 0, Jul: 1, Aug: 1, Sep: 1, Oct: 0, Nov: 0, Dec: 0}, 
    { id: 37, name: "Prune", Jan: 0, Feb: 2, Mar: 2, Apr: 0, May: 0, Jun: 0, Jul: 1, Aug: 1, Sep: 1, Oct: 0, Nov: 0, Dec: 0}, 
    { id: 38, name: "Raspberry", Jan: 2, Feb: 2, Mar: 2, Apr: 0, May: 0, Jun: 1, Jul: 1, Aug: 1, Sep: 0, Oct: 0, Nov: 0, Dec: 2}, 
    { id: 39, name: "Strawberry", Jan: 3, Feb: 3, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 3, Aug: 3, Sep: 3, Oct: 2, Nov: 2, Dec: 3}, 
    { id: 40, name: "Tangerine", Jan: 3, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 0, Jul: 2, Aug: 2, Sep: 2, Oct: 3, Nov: 3, Dec: 3}
]

export default foodTable