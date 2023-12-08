var button = document.createElement("button");
button.innerHTML = "Meet your new friend!";

var certificate = document.getElementById("certificate");
certificate.appendChild(button);
button.id = "idk_your_id_here";

const GRUB_NAMES = [
  "Gumbo",
  "Cholli",
  "Grubber",
  "Jen Jen",
  "Grubbin",
  "Grubbing",
  "Grublet",
  "Grubling",
  "Grub-in-the-Rough",
  "Grub-Tastic!",
  "Grubbing Around",
  "Grub-a-Doodle-Do",
  "Grub-a-Licious",
  "Grub's Grotto",
  "Grumble Grub",
  "Upside-Down Grub",
  "Grubberling",
  "Tunnel Grub",
  "Royal Grub",
  "Tootle",
  "Glitter",
  "Grub-Grub-Grumble",
  "Grub-with-Glee",
  "Grubby Groove Grub",
  "Grubster",
  "Grubnose",
  "Grumble",
  "Grumblethorn",
  "Grumbleweed",
  "Grumblewort",
  "Nimble",
  "Grumpshrimp",
  "Grumpty",
  "Grumptysnout",
  "Grumwyrm",
  "Grumpus",
  "Grounder",
  "Snaggle",
  "Wandering Grub",
  "Grubblegut the Gluttonous",
  "Chirp",
  "Glittersnaps",
  "Mordant the Ancient",
  "Grubby Little Grub",
  "Vengeful Spirit",
  "Grumpshrimp",
  "Jelly Grub",
  "Glow Grub",
  "Grubette",
  "Grubb",
  "Grubble",
  "Grubbly",
  "Grubberlin",
  "Grum",
  "Grumm",
  "Grumps",
  "Grumworm",
  "Mire",
  "Squirmy",
  "Curly",
  "Wiggles",
  "Gizmo",
  "Squirm",
  "Buzzy",
  "Scrunchy",
  "Squirmles",
  "Gloam",
  "Slitherwing",
  "Gritburger",
  "Gribbler",
  "Greepbuzz",
  "Three-Eye Grubshroom",
  "Mato Grub",
  "Spiny Wurm",
  "Thragg",
  "Ambrose",
  "Hushwing",
  "Necromancer",
  "Buzzsaw Grub",
  "Shadow Grub",
  "Glowing Grub",
  "DeepScale Grub",
  "Moss Grub",
  "Moss Matter",
  "Grub Sweeper",
  "Nibblebug",
  "Slime Galore",
  "Flop 'Em",
  "Dust Grub",
  "Needlemane",
  "King Grist",
  "The Molted Sentinel",
  "The Fargus Flycatcher",
  "Mantraphagus the Glutton",
  "Maggotcloud the Voracious",
  "Deepglide the Wriggler",
  "Queen Mantis Shade",
  "Grubguard the Thirsty",
  "Buzz-Wing",
  "Dustfly",
  "Muckoo",
  "Fungicle",
  "Squisk",
  "Soot Slug",
  "Silverhopper",
  "Shadow Flitter",
  "Greber the Grub",
  "Coggles the Crawler",
  "Snickle the Snurble",
  "Burbly the Snaffler",
  "Nibbs the Bug",
  "Orph the Nocto",
  "Clacco the Chirrup",
  "Squigzy the Goop",
  "Mothwing",
  "Needler",
  "Plush Bug",
  "Deep Grub",
  "Wire Bug",
  "Hive Knight",
  "Dawn Grub",
  "Glowing Snail",
  "Slumbercat",
  "Dream Grub",
  "Solon",
  "Lumafly",
  "Dustwing",
  "Mantisclaw",
  "Bristleback",
  "Prickly Pod",
  "Nail Grubble",
  "Neleb",
  "Gambril",
  "Entoza",
  "Meregol",
  "Lurker",
  "Gorgot",
  "Lapotch",
  "Slick",
  "Sludge Eel",
  "Lantern Grub",
  "Glowfly Grub",
  "Burrow Grub",
  "Gascoigne Grub",
  "Trappledoof",
  "Inkback",
  "Mawmaw",
  "Greyfur",
  "Hivebark",
  "Softmaker",
  "Nezzrazz",
  "Knightly Delight Grub",
  "Hollow Eel Grub",
  "Extrest Grub",
  "Chirping Grub",
  "Gripper Grub",
  "Willow Weevil",
  "Safe Creeper",
  "Lichen Hopper",
  "Pale Wriggler",
  "Gizzlaw",
  "Beeglob",
  "Mosstail",
  "Nibblesnout",
  "Scuttletail",
  "Whiskring",
  "Clawcrawler",
  "Sliverbug",
  "Vespa Grub",
  "Spiral Grub",
  "Burrower Grub",
  "Drifter Worm",
  "Spikeroot",
  "Grub Egg",
  "Nail Bug",
  "Pale Bearer",
  "Light Devourer",
  "Void Gazer",
  "Shade Lurker",
  "Shadeclaw",
  "Chirpee",
  "Duskwings",
  "Cinderpillar",
  "Nailbirb",
  "Grubboon",
  "Silksnail",
  "Seeker Grub",
  "Fire Dreamer",
  "Fury Sprout",
  "Mosskin",
  "Storm Crawler",
  "Charged Fat Grub",
  "Truffle Mite",
  "Tinkerfly",
  "Stalwart Grub",
  "Glowing Wriggler",
  "Buzzscuttle",
  "Nailclaw",
  "Wegsnar",
  "Shadow Shimmer",
  "Puru",
  "Mawlek",
  "Friggs",
  "Whitecap",
  "Blastfly",
  "Watchergleam",
  "Groggo",
  "Bogeeze",
  "Crestog",
  "Nodor",
  "Fracto",
  "Maggotry",
  "Flitt",
  "Buzzbuzz",
  "Skedaddle",
  "Clitch",
  "Molemite",
  "Wilkling",
  "Slurper",
  "Scuttler",
  "Chirper",
  "Buzzbug",
  "Narelle",
  "JourneyBite",
  "Needleworm",
  "Labyrinth Grub",
  "Spirit Grub",
  "Wisp Grub",
  "Bulb Grub",
  "Grub Hopper",
  "Sap Grub",
  "Grubberfly",
  "Consume-a-lot",
  "Grimmalle",
  "Plumombre",
  "Ossean",
  "Whimby",
  "Shelien",
  "Sroadign",
  "Huffleg",
  "Cardigole",
  "Slopper",
  "Quaggle",
  "Thistle Guard",
  "Silk Sensei",
  "Buzz Burr",
  "Heavy Shade",
  "Shadow Buzzer",
  "Rustwasp",
  "Hivekeeper",
  "Groob",
  "Swarmstone",
  "Fungusfly",
  "Slimeball",
  "Knitwisp",
  "Shadefly",
  "Fungmin",
  "Moon Hopper",
  "Markfruit-Grub",
  "Shadow-Grub",
  "Glintmoth-Grub",
  "Grit-Grub",
  "Scree-Grub",
  "Gloom-Grub",
  "Cinder-Grub",
  "Baelfly Princess",
  "Swarmlord",
  "Dusk Thief",
  "Oozy the Slime",
  "Eileen the Hungry",
  "Snibbob the Gluttonous",
  "Soul Grub",
  "Grimm Grub",
  "Skele Grub",
  "Buzzfuzz",
  "Jumpcale",
  "Wiggler",
  "Snapperfly",
  "Gruffa",
  "Watcher Knight",
  "Buzz One",
  "Shade Beast",
  "Phantom Spawn",
  "Mantis Lord",
  "Venomer",
  "Gravity Grub",
  "Scavenger Grub",
  "Luminary Grub",
  "Mender Grub",
  "Trailblazer Grub",
  "Viridian Grub",
  "Tanglebloom",
  "Hivelord",
  "Bloomguard",
  "Agitha",
  "Stingtail",
  "Mossbinder",
  "Stagmane",
  "Blueclaw Spitter",
  "Moldmarshal",
  "Supergrub",
  "Shellglider",
  "Buzzzelworm",
  "Fungey Shrubster",
  "Fungus-Lord",
  "Glibglop",
  "Glopling",
  "Goomok",
  "Grimmer",
  "Grogger",
  "Gropler",
  "Gutterfly",
  "Goobling",
  "Glooper",
  "Grubsey",
  "Viridescent Flytrap",
  "Moth Skitterling",
  "Nail Clipper",
  "Hotnest Grub",
  "Void Maze",
  "Grim Hornet",
  "Grave Wasp",
  "Shade Edge",
  "Spore Cloud",
  "Stingwing",
  "Scabblefly",
  "Clacksnout",
  "Stonejaw",
  "Needleshell",
  "Clinger Grub",
  "Nature Grub",
  "Nevermore Grub",
  "Mud Puff",
  "Loom Grub",
  "Dust Drake",
  "Grimfly",
  "Deep Wriggler",
  "Wild Grub",
  "Guardian Grub",
  "Char Grub",
  "Pillar Grub",
  "King Mould",
  "Viscount Chorus",
  "Garpede",
  "Mosquito",
  "Tummy Sprout",
  "Great Nailsage Sly",
  "Pandemite",
  "Earendel",
  "Shellback",
  "Belkite",
  "Churlbugg",
  "Wrigglar",
  "Buzzangler",
  "Cloth Wisp",
  "Grey Hunter",
  "Dirt Muncher",
  "Plated Clawsnail",
  "Hivebound Honey",
  "Fire Lashbug",
  "Grizzled Snoutworm",
  "Charred Slugsaw",
  "Fungal Emberfly",
  "Moth Tribe Shaman",
  "Grimmermite",
  "Wriggling Chap",
  "Muffle Wisp",
  "Gloomnip",
  "Chillcoat",
  "Sideslip",
  "Buzzbit",
  "Gleeble",
  "Crunchlette",
  "Shriek Bun",
  "Jumpfeather",
  "Desolation Moth",
  "Grubglider",
  "Bubblebug",
  "Honeycomb",
  "Dustmound",
  "Chubb Bug",
  "Shell Hopper",
  "Silk Gatherer",
  "Gallop Mudbug",
  "Redcap",
  "Stingbulb",
  "The Waking Shadow",
  "Mud Catterpillar",
  "Feathery Fritter",
  "Chalkgrub",
  "Moss Mound Munchkin",
  "Fungal Forager",
  "Bellowing Bog Beetle",
  "Cave Glow Cocoon",
  "Crystalline Crawler",
  "Stone Skimmer",
  "Wolf Knight",
  "Grub Knight",
  "Mite-Mite",
  "Chugga-Bug",
  "Grubcap",
  "Grubclaw",
  "Dirt Roo",
  "Wolfshell",
  "Birdfly",
  "Puffapod",
  "Violoid",
  "Chimera Grub",
  "Mothfly",
  "Crossroad-cruncher",
  "Deep-delver",
  "Gloam-gnawer",
  "Mist-muncher",
  "Hive-hopper",
  "Knocker-Noggin",
  "Acid Crawler",
  "Essence Eater",
  "Crimson Skitterling",
  "Clawkin",
  "Deepwing",
  "Chubwing",
  "Saltsquirm",
  "Grubblob",
  "Flukemstrum",
  "Fungoar",
  "Grimmite",
  "Nailshroom",
  "Churrworm",
  "Lumarok",
  "Chewi",
  "Wambus",
  "Chirpy",
  "Slyder",
  "Grubbun",
  "Nectar Eater",
  "Bumbleshell",
  "Fungoidsting",
  "Vivibulb",
  "Rustybug",
  "Swoofulk",
  "Shadechomp",
  "N4ll Beetle",
  "Snailer",
  "Fuzzer",
  "Blaze Salamander",
  "Fungal Wick",
  "Fungiface",
  "Mushroom Mage",
  "Cashew Cutter",
  "Glimmerfly Grove",
  "Grubspike",
  "Glowmaggot",
  "Crystallis",
  "Strisp",
  "Grubbersnout",
  "Nailwhirl",
  "Mosquibug",
  "Fungoid",
  "Scrobbler",
  "Staincrab",
  "Magmagrub",
  "Gust Grub",
  "Chillbumper",
  "Crawly",
  "Tadpink",
  "Gormaander",
  "Thin-Mud",
  "Moskit",
  "Glutterfly",
  "Skeetle",
  "Grobblefly",
  "Cuttletrunk",
  "Blitznab",
  "Grimburly",
  "Crispersnip",
  "Figgolem",
  "Buzzbeak",
  "Figglepop",
  "Fumtum",
  "Wrigglermoth",
  "Dirtmoss",
  "Charvee",
  "Spittlegrub",
  "Mushaboom",
  "Honey Hopper",
  "Glowwormshroom",
  "Grublus",
  "Gritlily",
  "Soulgazer",
  "Zote the Mighty",
  "Hooded Stranger",
  "Grealez",
  "Needloth",
  "Salubra Skulker",
  "Glooble",
  "The Splinter Grub",
  "Chittering Glider",
  "Puffcoil",
  "Gruzzer",
  "Slimemite",
  "Wingmutter",
  "Nailbuzzer",
  "Hivewing",
  "Shadowdancer",
  "Cinderbug",
  "Buzz Bugger",
  "Snicker Scuttler",
  "The Void Wing",
  "Chirruping Grub",
  "Larveaureon",
  "Wallworm",
  "Cybuggler",
  "Scarabug",
  "Grubwatcher",
  "Grubulisk",
  "Wiggly",
  "Fluffy",
  "Poppy",
  "Jiggly",
  "Fuzzy",
  "Twinkles",
  "Pinstripe",
  "Sunny",
  "Schnookie",
  "Hoppy",
  "Puddles",
  "Butters",
  "Tater",
  "Crumpet",
  "Cricket",
  "Daisy",
  "Buttercup",
  "Ripple",
  "Grubby",
  "Yapper",
  "Fidget",
  "Itchy",
  "Moth",
  "Whiskers",
  "Scamper",
  "Hops",
  "Jingle",
  "Buzzzz",
  "Jitter",
  "Wiggle",
  "Wriggle",
  "Sprout",
  "Twiggy",
  "Skipley",
  "Skippety",
  "Whimsy",
  "Peekaboo",
  "Tater Tot",
  "Squirty",
  "Slurpy",
  "Dozy",
  "Nibbler",
  "Poofy",
  "Dottie",
  "Floppy",
  "Loopy",
  "Mittens",
  "Miffy",
  "Chubbles",
  "Squiggly",
  "Herky",
  "Scamp",
  "Slipper",
  "Plump",
  "Buzz",
  "Perky",
  "Snuggle",
  "Patter",
  "Chipper",
  "Snuggles",
  "Stumpy",
  "Nibbles",
  "Chomper",
  "Squishy",
  "Grouchy",
  "Pupa",
  "Chewie",
  "Buzzitty",
  "Woogle",
  "Bumblebee",
  "Pebbles",
  "Twitchy",
  "Trot",
  "Pippin",
  "Poppet",
  "Doodle",
  "Bumbles",
  "Snibble",
  "Glossy",
  "Zap",
  "Fuzzkins",
  "Squiggle",
  "Buzzer",
  "Trotter",
  "Muncher",
  "Glimmer",
  "Glider",
  "Hopper",
  "Tiny",
  "Plodder",
  "Happy",
  "Skipper",
  "Sparky",
  "Snuggly",
  "Tubby",
  "Slither",
  "Flutter",
  "Squirt",
  "Squish-Munch",
  "Fuzzy-Puppy",
  "Snuggles-Wiggles",
  "Tippy-Toots",
  "Mr. Chomps",
  "Gizmo-Gobble",
  "Bumble-Beezy",
  "Tiny-Crawler",
  "Fluffy-Feathers",
  "Cutesy-Paws",
  "Quirkle",
  "Grubbles",
  "Rickle",
  "Speckle",
  "Nibble",
  "Scampers",
  "Gussel",
  "Scuttles",
  "Tickle",
  "Squeakums",
  "Wobbles",
  "Waltz",
  "GiggleBug",
  "Wormly",
  "Poko",
  "Fuzzball",
  "Jellie",
  "Curley",
  "Wigglez",
  "Bulby",
  "Pippa",
  "Bun Bun Grub",
  "Stubby Grub",
  "Grub Sluggard",
  "Cutie Pie Grub",
  "Gooey Grub",
  "Gummy Grub",
  "Wiggly Grub",
  "Grumpy Grubkin",
  "Prickly Grubbee",
  "Sploshy Grub",
  "Groovin' Grubby",
  "Cosy Grubbinator",
  "Grubby Dizzy-Goo",
  "Slick Grubster",
  "Pancake Grub",
  "Chunky Grubbles",
  "Chunky Grubby",
  "Grubble Mc Grubberson",
  "Flufftastic Grub",
  "Smiley Grub",
  "Snuggy Grub",
  "Grubbily-Goo",
  "Groovy Grub",
  "Bubbalou Grub",
  "Grubbleworm",
  "Grubby Friend",
  "Wiggle n' Jiggle",
  "Pupperoni",
  "Hug-A-Bug",
  "Grubbin Huggins",
  "Grub Blubb",
  "Bobble Grub",
  "Squirm Blurm",
  "Tumbly Bubbly",
  "Chub-Chub",
  "Fuzzy Nubble",
  "Grumblebee",
  "Grubkin",
  "Gribby",
  "Grubbydoodle",
  "Grubby-Wubby-Do",
  "Chubby Cheeks Grub",
  "Perplexed Grub",
  "Refurbished Grub",
  "Honeycomb Grub",
  "Convenient Grub",
  "The Greasy Grub",
  "Buzzy Bee",
  "Fuzzy Wuzzy Grub",
  "Scrubby",
  "Giggles",
  "Doodle Bug",
  "Jitterbug",
  "Squish",
  "Grubberoo",
  "Buzzby",
  "Curly Q",
  "Wigglesworth",
  "Hipper",
  "Tart",
  "Fifi the Friendly Grub",
  "Wiggles the Wiggly Grub",
  "Joltin' Grub",
  "Buzzy the Bzzing Grub",
  "Curly the Curlicue Grub",
  "Snoozy Grub",
  "Millie the Milling Grub",
  "Grubbers the Grubbing Grub",
  "Wingy the Winged Grub",
  "Chompy the Chomping Grub",
  "Grub-a-Bye",
  "Grubby Guts",
  "Grub Pie",
  "Grub-a-Lot",
  "Grubber Bug",
  "Grub-a-Saurus",
  "Grub-a-Mania",
  "Grub-o-Matic",
  "Grub-a-Tron",
  "Grubble Gum",
  "Grubblin' Gourmand",
  "Squirm Grub",
  "Wriggle Grub",
  "Itsy Grub",
  "Grubbly Bear",
  "Grub-a-Dub-Dub",
  "Grubbing it Out",
  "The Grub-inator",
  "Grub-tastic",
  "Grub-tacular",
  "Grub-topia",
  "Grub-Adore",
  "Grubby Gatherings",
  "Grubling Groove",
  "Grubby Glimmer",
  "Grub-a-Dab-Do",
  "Grubstache",
  "Grub-a-Boo",
  "Grubbling Along",
  "Grubby Grubber",
  "Grub-a-Fied",
  "Grubbly Grubster",
  "Fuzzy Grub",
  "Tumble Grub",
  "Grub Glimmer",
  "Grubbing for Glory",
  "Grub-a-Tude",
  "Grubbly Goodness",
  "Grubulous Maximus",
  "Grubby's Groove",
  "Grubble Bug",
  "Grub Nibble",
  "Grubble Bop",
  "Grubblet",
  "Grubblefritz",
  "Grubble Dazzle",
  "Grubberiffic",
  "Grubsy",
  "Grubby Little Buddies",
  "Grubbly Wubbly",
  "Grubby Grubberoo",
  "Grubble Blob",
  "Grub Groove",
  "Grub Tubble",
  "Grubba-Do",
  "Grubble the Grub",
  "Grub the Conqueror",
  "Grubby Glider",
  "Grub-a-Bye-Baby",
  "Grub-a-Roo",
  "Grubbing Out",
  "Grubbing in the Dark",
  "Grubby the Grub",
  "Grub Snugglers",
  "Grub-a-Lumpkin",
  "Grub-a-Munchkin",
  "Grub-a-Knot",
  "Grub-a-Tangle",
  "Grub-a-Wiggler",
  "Grubblewing",
  "Grubbering",
  "Grubby McFly",
  "Grubbing Along",
  "Grubbing for Gold",
  "Grub-B-Rumble",
  "Grubby Grub-Grub",
  "Grub-N-Go",
  "Grub's Knees",
  "Grub-a-Rama",
  "Grub-a-Thon",
  "Grub-a-Glow",
  "Grub-a-Lub-Dub",
  "Grubbing the Night Away",
  "Dandy Grub",
  "Cuddly Grubs",
  "Tiny Troopers",
  "Grubble Grubs",
  "Grubby Galore",
  "Grubberella",
  "Grubberfest",
  "Grub the Builder",
  "Grubsworth",
  "Grub-a-Nator",
  "Grubblette",
  "Jittery Grub",
  "Grubby-Munchkin",
  "Grubblegum",
  "Grubby the Grubber",
  "Grubblebug",
  "Grubberific",
  "Grubby McBuggy",
  "Grubbles the Grub",
  "Grubbly-Go-Round",
  "Grubloaf",
  "Grub-of-the-Deep",
  "Grub-on-the-Go",
  "Buggly",
  "Mitey",
  "Cuddles",
  "Gloop",
  "Gooble",
  "Niblet",
  "Buzzly",
  "Swoonworm",
  "Sappyfly",
  "Glimfly",
  "Glowmo",
  "Shinee",
  "Shimmerbug",
  "Glimglom",
  "Glitter Grub",
  "Sparklewiggler",
  "Snuggle Bug",
  "Squink",
  "SpindlyDoodle",
  "LittleMiso",
  "Dust-bunny",
  "Hive Keeper",
  "Chipotle",
  "Grubtastic",
  "Tubbelup",
  "Squeaks",
  "Leafy",
  "Gloopy",
  "Curli",
  "Bobbley",
  "Fuzzums",
  "Spudstar",
  "Gumbloom",
  "Snugglebug",
  "Tuffly",
  "Shyrtle",
  "Bumbly",
  "Buzzwing",
  "Pipsqueak",
  "Chubsy",
  "Stitchy",
  "Wriggly",
  "Tickly",
  "Cutie Caterpillar",
  "Tiny Turnip",
  "Hopper Husky",
  "Hovering Hermit",
  "Smiley Skitter",
  "Perky Pillbug",
  "Wiggly Wisp",
  "Squirming Seeker",
  "Highlighter",
  "Frilly",
  "Brigge",
  "Jittery",
  "Puddley",
  "Trinket",
  "Hoppit",
  "Pinchy",
  "Wriggles",
  "Wrinkles",
  "Wrigglers",
  "Quirper",
  "Chipmunk",
  "Bolt",
  "Nubbins",
  "Squiggy",
  "Nibbledonk",
  "Flik",
  "Flipo",
  "Clicky",
  "Peepers",
  "Munchkin",
  "Flicker",
  "Beamer",
  "Gloomy",
  "Woofer",
  "Tinny",
  "Crumbly",
  "Muffin",
  "Snookums",
  "Honeybun",
  "Pillowbugs",
  "Grubbies",
  "Weebugs",
  "Squiglet",
  "Butterbug",
  "Squeeker",
  "Wrigglepuff",
  "Jeweldrop",
  "Glitterwing",
  "Sweet Burrower",
  "Cutie Chitter",
  "Charmer Snail",
  "Pitter Plodder",
  "Skipper Skittles",
  "Cuddly Crawly",
  "Giggle Wiggler",
  "Squirmilla",
  "Cuttlebitty",
  "Scuttlesnout",
  "Cuddlesquirm",
  "Flutterbee",
  "Buzzboop",
  "Hiccup",
  "Thumper",
  "Bunbun",
  "Curlicue",
  "Nimbletrot",
  "Jumppup",
  "Bumblesnout",
  "Cuddlebud",
  "Pranceworm",
  "Lil' Wriggler",
  "Fuzzy Flutter",
  "Buzzy Blinker",
  "Cuttlebu",
  "Chirpsy",
  "Fizzworm",
  "Flitterbug",
  "Glitterbug",
  "Glowbud",
  "Glimworm",
  "Jinglebug",
  "Noctecoon",
  "Pluckabee",
  "Twiggles",
  "Honey Buns",
  "Figgy",
  "Glitzie",
  "Slickles",
  "Snazzles",
  "Cuttlebug",
  "Glowygrub",
  "Cuddlee",
  "Hoppin' Joe",
  "Flutterbug",
  "Sleepy Slugger",
  "Jiggly Joe",
  "Munchy",
  "Calitzi",
  "Glitz",
  "Scorupt",
  "Mysticaline",
  "Buzzler",
  "Plopkins",
  "Sparklewing",
  "Burrowie",
  "Scuttly",
  "Wrigglee",
  "Thrumble",
  "Buddeet",
  "Snuffly",
  "Squirmly",
  "Bulbly",
  "Burrly",
  "Sirius",
  "Fizzy",
  "Cloppy",
  "Fuddy",
  "Gumby",
  "Snickerdoodle",
  "Honeybae",
  "Pillurble",
  "Fuzzlemuff",
  "Dugong",
  "Hoppity",
  "Snugglefly",
  "Bubblebee",
  "Squirmz",
  "Stardustbug",
  "Diamondeye",
  "Iridbug",
  "Silverwing",
  "Lightdarter",
  "Rustle",
  "Squeaky",
  "Glitchy",
  "Prickle",
  "Skip",
  "Fluffa",
  "Bop",
  "BuzzBee",
  "Scootaloo",
  "Frizzlefly",
  "Munchmoth",
  "Cutie Wiggler",
  "Squishypaw",
  "Bounceback",
  "Knickknacker",
  "Noble Nibbler",
  "Squirtie",
  "Chubbly",
  "Chewbuggie",
  "Puddly",
  "Nibbly",
  "Gigglebuggie",
  "Pippy",
  "Floppies",
  "Fuzzywuzz",
  "Mushy",
  "Snickety",
  "Dartly",
  "Deeree",
  "Hopple",
  "Ponder",
  "Cheepy",
  "Flitzy",
  "Xeamless",
  "Peekagrub",
];
const PRONOUNS = [
  'she/her',
  'she/her',
  'she/her',
  'she/her',
  'she/her',
  'he/him',
  'he/him',
  'he/him',
  'he/him',
  'he/him',
  'they/them',
  'they/them',
  'they/them',
  'they/them',
  'they/them',
  'fae/faer',
  'xe/xem',
  'it/its'
];
const GRUB_FOODSTUFFS = [
  'Parsley',
  'Carrot',
  'Fennel',
  'Rue',
  'Dill',
  'Parsnip',
  'Culantro',
  'Coriander',
  'Chervil',
  'Celery',
  'Magnolia',
  'Olive',
  'Roses Petals',
  'Rose Leaves',
  'Laurel',
  'Sweet Orange Leaves',
  'Lemon Leaves',
  'Apple Tree Leaves',
  'Virginia snakeroot',
  'Birthwort Vines',
  'Dutchman’s pipe',
  'Woolly Pawpaw',
  'Bigflower Pawpaw',
  'Smallflower Pawpaw',
  'Dwarf Pawpaw',
  'Netted Pawpaw',
  'Sea Torchwood',
  'Wild Lime',
  'Common Hoptree',
  'Tangerine Leaves',
  'Milkweed',
  'Grapefruit Leaves',
  'Queen Anne’s Lace',
  'Golden Alexander',
  'Anise',
  'Prickly ash',
  'Spicebush',
  'Sassafras',
  'Pipevine',
  'Lilac',
  'Willow',
  'Birch',
  'Tuliptree',
  'Cherry trees',
  'Plum trees',
  'Apple trees',
  'Violets',
  'Pansies',
  'Passionflowers',
  'Plantains',
  'Nettle',
  'Azalea',
  'Mallow',
  'Thistle',
  'Daisies',
  'Snapdragon',
  'Aster',
  'Strawberry',
  'Mint',
  'Clover',
  'Cabbage'
];
const GRUB_PERSONALITIES = [
  'Curious',
  'Persistent',
  'Brave',
  'Explorer',
  'Playful',
  'Shy',
  'Tenacious',
  'Patient',
  'Adaptable',
  'Resourceful',
  'Determined',
  'Inquisitive',
  'Discerning',
  'Independent',
  'Detail-oriented',
  'Focused',
  'Loyal',
  'Patient',
  'Sensitive',
  'Sociable',
  'Optimistic',
  'Trusting',
  'Tireless'
];
const MIMIC_NAMES = [
  'Jubilant Grobbler',
  'Mandible Mish-mash',
  'Nibble Scuttle',
  'Oily Grubble',
  'Buzzing Bimble',
  'Funky Chompster',
  'Gummy Nibbler',
  'Gabble Glutton',
  'Smack Snack',
  'Ledger Lunger',
  'Gristly Grawl',
  'Munch Monster',
  'Junk Muddle',
  'Mining Masticator',
  'Smiggy Gnawer',
  'Clomping Chomper',
  'Gurgle Gulper',
  'Scrap Sniggerer',
  'Pick Pincher',
  'Chikkin Cringer',
  'Scalebrush',
  'Plumphog',
  'Splutch',
  'Sludgrin',
  'Troghopp',
  'Grublurk',
  'Skulleach',
  'Joltbug',
  'Hortling',
  'Shellshade',
  'Grubpup',
  'Skelechomp',
  'Fossflow',
  'Gutgorger',
  'Gluttock',
  'Faltail',
  'Scrapfang',
  'Mazegoose',
  'Plodworm',
  'Gritskitter',
  'Croakershrike',
  'Suddenhide',
  'Pulpdigger',
  'Glurcher',
  'Glopgrub',
  'Rumblegut',
  'Tarbag',
  'Footwriggler',
  'Revelburrow',
  'Crawlfang',
  'Glowcap',
  'Slugslip',
  'Muckdragger',
  'Cutterfly',
  'Fleabite',
  'Chirpy',
  'Grubspinner',
  'Gutterfly',
  'Nectarhopper',
  'Crawlclaw',
  'Munchy Grubber',
  'Root Skulker',
  'Larva Lurker',
  'Maggot Muncher',
  'Beardy Beetle',
  'Grunny Grounder',
  'Shish Kabughan',
  'Nibble Nibbler',
  'Clicky Crawler',
  'Clampy Clinger',
  'Chomperkin',
  'Greedsquid',
  'Munchling',
  'Fungoblin',
  'Glutbuzz',
  'Slurgslaw',
  'Mardel Grubber',
  'Squishgrub',
  'Meatshield',
  'Burrower bug',
  'Wiggleglom',
  'Root wriggler',
  'Wild swarm',
  'Muck Midge',
  'Char Swarmer',
  'Gribbly Gnat',
  'Cling Dweller',
  'Swooping Scourge',
  'Plasterskimmer',
  'Blobtodder',
  'Dirtminder',
  'Grumble Fly',
  'Chomp Bug',
  'Soggy Spore',
  'Fire Bloon',
  'Slime Pincer',
  'Grubkin Maw',
  'Glutterfly',
  'Gnawer Beetle',
  'Muncher Shrimp',
  'Blocky Scarab'
];
const MIMIC_FOODSTUFFS = [
  'Grub Fries',
  'Grub Rice',
  'Grub Crepes',
  'Grub Noodle Bowl',
  'Grub Pizza',
  'Grub Grilled Cheese',
  'Grub Fish and Chips',
  'Grub Fried Chicken',
  'Dusty Bun',
  'Flukefin Soup',
  'Violet Confit',
  'Grubhoney',
  'Grub Cake',
  'Mosskin Egg',
  'Glowing Egg',
  'Great Slashshroom',
  'Nail Bat Spore',
  'Spectral Core',
  'Fey Moth Egg',
  'Glowing Wort',
  'Heavenly Bulb',
  'Blistermoss',
  'Yowlsect Eggs',
  'Ruptureroot',
  'Matozaure Egg',
  'Shadow Orb',
  'Hive Cluster',
  'Void Spore',
  'Pale Cyst',
  'Flukemarm Egg',
  'Dreamfeast',
  'Vengefly',
  'Putrid Things',
  'JELLY Lumpfish',
  'Fungal Clump',
  'Fungal Core',
  'Fungus Drum',
  'Shadow Mold',
  'Hulking Carapace',
  'Effervescent Mush',
  'Gobbletoots',
  'Snail Pods',
  'Mycelial Tufts',
  'Dirt Sprouts',
  'Glowfly Lantern',
  'Pale Ore',
  'Salt Sprinklings',
  'Mist Lurkers',
  'Void Dreams',
  'Void Salts',
  'Soul Totem',
  'Dirt Clumps',
  'Putrid Eggs',
  'Failed Experiment Pie',
  'Nail Pie',
  'Dust Moth Bites',
  'Fungal Clump Pudding',
  'Flukemarm Eggs',
  'Pale Ore Soup',
  'Blue Moth Strip',
  'Funicular Fruit',
  'Wild Grass',
  'Hollow Knight Cake',
  'Jelly Jumps',
  'Hiveborn Soup',
  'Deepnest Delights',
  'Sharp Shadows',
  'Fungal Wastes Mushrooms'
];
const MIMIC_PERSONALITIES = [
  'Cunning',
  'Resourceful',
  'Socially Savvy',
  'Charismatic',
  'Articulate',
  'Adaptable',
  'Observant',
  'Opportunistic',
  'Clever',
  'Tireless',
  'Patient',
  'Ambitious',
  'Intelligent',
  'Mystical',
  'Humorous',
  'Stealthy',
  'Self-Reliant',
  'Altruistic',
  'Diligent',
  'Imaginative',
  'Inquisitive'
];

button.addEventListener("click", function() {
  var grubbynumber = Math.floor(Math.random() * 100);
  document.getElementById("namelabel").innerHTML = 'Your grub\'s name is...';

  var pronouns = PRONOUNS[Math.floor((Math.random() * PRONOUNS.length))]
  document.getElementById("pronouns").innerHTML = pronouns;

  var possessive_pronoun = "";
  var referential_pronoun = "";
  switch (pronouns) {
    case "he/him":
      possessive_pronoun = "His";
      referential_pronoun = "him";
      break;
    case "she/her":
      possessive_pronoun = "Her";
      referential_pronoun = "her";
      break;
    case "they/them":
      possessive_pronoun = "Their";
      referential_pronoun = "them";
      break;
    case "fae/fer":
      possessive_pronoun = "Faer";
      referential_pronoun = "faer";
      break;
    case "xe/xem":
      possessive_pronoun = "Xir";
      referential_pronoun = "xem";
      break;
    case "it/its":
      possessive_pronoun = "Its";
      referential_pronoun = "it";
      break;
    default:
      possessive_pronoun = "Grub";
      referential_pronoun = "grub";
      break;
  }

  document.getElementById("pronounlabel").innerHTML = possessive_pronoun + ' pronouns are...';
  document.getElementById("foodlabel").innerHTML = possessive_pronoun + ' favorite food is...';
  document.getElementById("personalitylabel").innerHTML = possessive_pronoun + ' personality type is...';
  document.getElementById("congrats").innerHTML = 'Congratulations on making a new friend! Please make sure to take good care of ' + referential_pronoun + ".";
  button.innerHTML = "Make another friend!";

  var grubbyImage = document.getElementById("grubbyimage")
  grubbyImage.classList.add('rightside-up');
  grubbyImage.classList.remove('upside-down');

  if (grubbynumber > 7) {
    var name = GRUB_NAMES[Math.floor((Math.random() * GRUB_NAMES.length))]
    document.getElementById("grubname").innerHTML = name;
    document.getElementById("food").innerHTML = GRUB_FOODSTUFFS[Math.floor((Math.random() * GRUB_FOODSTUFFS.length))];
    document.getElementById("personality").innerHTML = GRUB_PERSONALITIES[Math.floor((Math.random() * GRUB_PERSONALITIES.length))];
    grubbyImage.innerHTML = '<img src="images/grubby.png" alt="A grub!" height="100px" width="100px">';

    // Special case: flip if upside-down grub
    if (name == "Upside-Down Grub") {
      grubbyImage.classList.add('upside-down');
      grubbyImage.classList.remove('rightside-up');
    }
  }
  else {
      document.getElementById("grubname").innerHTML = MIMIC_NAMES[Math.floor((Math.random() * MIMIC_NAMES.length))];
      document.getElementById("food").innerHTML = MIMIC_FOODSTUFFS[Math.floor((Math.random() * MIMIC_FOODSTUFFS.length))];
      document.getElementById("personality").innerHTML = MIMIC_PERSONALITIES[Math.floor((Math.random() * MIMIC_PERSONALITIES.length))];
      grubbyImage.innerHTML = '<img src="images/mimic.png" alt="A mimic!" height="100px" width="100px">';
    }
});
