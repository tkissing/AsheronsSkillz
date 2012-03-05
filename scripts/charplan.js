(function($) {
    var skills, credits, methods;

    credits = [0,2,3,4,5,6,7,8,9,10,12,14,16,18,20,23,26,29,32,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130,140,150,160,180,200,225,250,275];

    skills = {
        "Alchemy":{
            "name":"Alchemy",
            "formula":"(C+F)/3",
            "train":6,
            "spec":6,
            "status":"Unusable"
        },
        "Arcane Lore":{
            "name":"Arcane Lore",
            "formula":"F/3",
            "train":0,
            "spec":2,
            "status":"Trained"
        },
        "Armor Tinkering":{
            "name":"Armor Tinkering",
            "formula":"(F+E)/2",
            "train":4,
            "spec":0,
            "status":"Untrained"
        },
        "Assess Creature":{
            "name":"Assess Creature",
            "formula":"(None)",
            "train":4,
            "spec":2,
            "status":"Unusable"
        },
        "Assess Person":{
            "name":"Assess Person",
            "formula":"(None)",
            "train":2,
            "spec":2,
            "status":"Unusable"
        },
        "Cooking":{
            "name":"Cooking",
            "formula":"(C+F)/3",
            "train":4,
            "spec":4,
            "status":"Unusable"
        },
        "Creature Enchantment":{
            "name":"Creature Enchantment",
            "formula":"(F+W)/4",
            "train":8,
            "spec":8,
            "status":"Unusable"
        },
        "Deception":{
            "name":"Deception",
            "formula":"(None)",
            "train":4,
            "spec":2,
            "status":"Unusable"
        },
        "Dual Wield":{
            "name":"Dual Wield",
            "formula":"(S+C)/3",
            "train":2,
            "spec":2,
            "status":"Unusable"
        },
        "Dirty Fighting":{
            "name":"Dirty Fighting",
            "formula":"(S+C)/3",
            "train":2,
            "spec":2,
            "status":"Unusable"
        },
        "Finesse Weapons":{
            "name":"Finesse Weapons",
            "formula":"(C+Q)/3",
            "train":4,
            "spec":4,
            "status":"Untrained"
        },
        "Fletching":{
            "name":"Fletching",
            "formula":"(C+F)/3",
            "train":4,
            "spec":4,
            "status":"Unusable"
        },
        "Healing":{
            "name":"Healing",
            "formula":"(F+C)/3",
            "train":6,
            "spec":4,
            "status":"Unusable"
        },
        "Heavy Weapons":{
            "name":"Heavy Weapons",
            "formula":"(S+C)/3",
            "train":6,
            "spec":6,
            "status":"Untrained"
        },
        "Item Enchantment":{
            "name":"Item Enchantment",
            "formula":"(F+W)/4",
            "train":8,
            "spec":8,
            "status":"Unusable"
        },
        "Item Tinkering":{
            "name":"Item Tinkering",
            "formula":"(F+C)/2",
            "train":2,
            "spec":0,
            "status":"Untrained"
        },
        "Jump":{
            "name":"Jump",
            "formula":"(S+C)/2",
            "train":0,
            "spec":4,
            "status":"N/A"
        },
        "Leadership":{
            "name":"Leadership",
            "formula":"(None)",
            "train":4,
            "spec":2,
            "status":"Untrained"
        },
        "Life Magic":{
            "name":"Life Magic",
            "formula":"(F+W)/4",
            "train":12,
            "spec":8,
            "status":"Unusable"
        },
        "Light Weapons":{
            "name":"Light Weapons",
            "formula":"(S+C)/3",
            "train":4,
            "spec":4,
            "status":"Untrained"
        },
        "Lockpick":{
            "name":"Lockpick",
            "formula":"(C+F)/3",
            "train":6,
            "spec":4,
            "status":"Unusable"
        },
        "Loyalty":{
            "name":"Loyalty",
            "formula":"(None)",
            "train":0,
            "spec":2,
            "status":"N/A"
        },
        "Magic Defense":{
            "name":"Magic Defense",
            "formula":"(F+W)/7",
            "train":0,
            "spec":12,
            "status":"N/A"
        },
        "Magic Item Tinkering":{
            "name":"Magic Item Tinkering",
            "formula":"F",
            "train":4,
            "spec":0,
            "status":"Untrained"
        },
        "Mana Conversion":{
            "name":"Mana Conversion",
            "formula":"(F+W)/6",
            "train":6,
            "spec":6,
            "status":"Unusable"
        },
        "Melee Defense":{
            "name":"Melee Defense",
            "formula":"(Q+C)/3",
            "train":10,
            "spec":10,
            "status":"Untrained"
        },
        "Missile Defense":{
            "name":"Missile Defense",
            "formula":"(Q+C)/5",
            "train":6,
            "spec":4,
            "status":"Untrained"
        },
        "Missile Weapons":{
            "name":"Missile Weapons",
            "formula":"C/2",
            "train":6,
            "spec":6,
            "status":"Untrained"
        },
        "Recklessness":{
            "name":"Recklessness",
            "formula":"(S+Q)/3",
            "train":4,
            "spec":2,
            "status":"Unusable"
        },
        "Run":{
            "name":"Run",
            "formula":"Q",
            "train":0,
            "spec":4,
            "status":"N/A"
        },
        "Salvaging":{
            "name":"Salvaging",
            "formula":"(None)",
            "train":0,
            "spec":0,
            "status":"N/A"
        },
        "Shield":{
            "name":"Shield",
            "formula":"(S+C)/2",
            "train":2,
            "spec":2,
            "status":"Untrained"
        },
        "Sneak Attack":{
            "name":"Sneak Attack",
            "formula":"(C+Q)/3",
            "train":4,
            "spec":2,
            "status":"Unusable"
        },
        "Two Handed Combat":{
            "name":"Two Handed Combat",
            "formula":"(S+C)/3",
            "train":8,
            "spec":8,
            "status":"Untrained"
        },
        "Void Magic":{
            "name":"Void Magic",
            "formula":"(F+W)/4",
            "train":16,
            "spec":12,
            "status":"Unusable"
        },
        "War Magic":{
            "name":"War Magic",
            "formula":"(F+W)/4",
            "train":16,
            "spec":12,
            "status":"Unusable"
        },
        "Weapon Tinkering":{
            "name":"Weapon Tinkering",
            "formula":"(F+S)/2",
            "train":4,
            "spec":0,
            "status":"Untrained"
        }
    };

    methods = {
        creditsAt: function(level) {
            var c = 0;
            $.each(credits, function(i, v) {
                if (v > level) {
                    return false;
                }
                c = i;
            });

            return 52 + c;
        },
        levelFor: function(c) {
            var cc = c > 52 ? c - 52 : c;
            return credits[cc] || 275;
        }
    };

    window.GameData = $.extend({
        skills: skills
    }, methods);

}(jQuery));
