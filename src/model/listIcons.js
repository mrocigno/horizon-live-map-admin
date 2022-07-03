import { categories } from "./categories"

export function getIconsWithCategory() {
    return icons.map((icon) => {
        return {
            ...icon,
            category: categories.find((category) => category.id == icon.category)
        }
    })
}

export const icons = [
    {
        id: 1,
        image: "/images/map_icons/ic_camp.webp",
        title: "Camp",
        category: 1
    },
    {
        id: 2,
        image: "/images/map_icons/ic_archive.webp",
        title: "Archive",
        category: 2
    },
    {
        id: 3,
        image: "/images/map_icons/ic_bandit_camp.webp",
        title: "Bandit camp",
        category: 1
    },
    {
        id: 4,
        image: "/images/map_icons/ic_cauldron_banuk.webp",
        title: "Cauldron ?",
        category: 3
    },
    {
        id: 5,
        image: "/images/map_icons/ic_cauldron_rho.webp",
        title: "Cauldron RHO",
        category: 3
    },
    {
        id: 6,
        image: "/images/map_icons/ic_cauldron_sigma.webp",
        title: "Cauldron SIGMA",
        category: 3
    },
    {
        id: 7,
        image: "/images/map_icons/ic_cauldron_xi.webp",
        title: "Cauldron XI",
        category: 3
    },
    {
        id: 8,
        image: "/images/map_icons/ic_cauldron_zeta.webp",
        title: "Cauldron ZETA",
        category: 3
    },
    {
        id: 9,
        image: "/images/map_icons/ic_city.webp",
        title: "City",
        category: 4
    },
    {
        id: 10,
        image: "/images/map_icons/ic_dungeon.webp",
        title: "Dungeon",
        category: 5
    },
    {
        id: 11,
        image: "/images/map_icons/ic_flag.webp",
        title: "Flag",
        category: 6
    },
    {
        id: 12,
        image: "/images/map_icons/ic_hand.webp",
        title: "Hand",
        category: 7
    },
    {
        id: 13,
        image: "/images/map_icons/ic_house.webp",
        title: "House",
        category: 4
    },
    {
        id: 14,
        image: "/images/map_icons/ic_memory.webp",
        title: "Memory",
        category: 7
    },
    {
        id: 15,
        image: "/images/map_icons/ic_rost.webp",
        title: "Rost",
        category: 2
    },
    {
        id: 16,
        image: "/images/map_icons/ic_shop.webp",
        title: "Shop",
        category: 8
    },
    {
        id: 17,
        image: "/images/map_icons/ic_sidequest.webp",
        title: "Sidequest",
        category: 10
    },
    {
        id: 18,
        image: "/images/map_icons/ic_signal.webp",
        title: "Signal",
        category: 2
    },
    {
        id: 19,
        image: "/images/map_icons/ic_special_shop.webp",
        title: "Special Shop",
        category: 8
    },
    {
        id: 20,
        image: "/images/map_icons/ic_training_camp.webp",
        title: "Training camp",
        category: 1
    },
    {
        id: 21,
        image: "/images/map_icons/ic_village.webp",
        title: "Village",
        category: 4
    },
    {
        id: 22,
        image: "/images/map_icons/ic_strider.webp",
        title: "Strider",
        category: 9
    },
    {
        id: 23,
        image: "/images/map_icons/ic_watcher.webp",
        title: "Watcher",
        category: 9
    },
    {
        id: 24,
        image: "/images/map_icons/ic_grazer.webp",
        title: "Grazer",
        category: 9
    },
    {
        id: 25,
        image: "/images/map_icons/ic_scrapper.webp",
        title: "Scrapper",
        category: 9
    },
    {
        id: 26,
        image: "/images/map_icons/ic_broadhead.webp",
        title: "Broadhead",
        category: 9
    },
    {
        id: 27,
        image: "/images/map_icons/ic_lancehorn.webp",
        title: "Lancehorn",
        category: 9
    },
    {
        id: 28,
        image: "/images/map_icons/ic_charger.webp",
        title: "Charger",
        category: 9
    },
    {
        id: 29,
        image: "/images/map_icons/ic_longleg.webp",
        title: "Longleg",
        category: 9
    },
    {
        id: 30,
        image: "/images/map_icons/ic_deathbringer.webp",
        title: "Deathbringer",
        category: 9
    },
    {
        id: 31,
        image: "/images/map_icons/ic_sawtooth.webp",
        title: "Sawtooth",
        category: 9
    },
    {
        id: 32,
        image: "/images/map_icons/ic_trampler.webp",
        title: "Trampler",
        category: 9
    },
    {
        id: 33,
        image: "/images/map_icons/ic_corruptor.webp",
        title: "Corruptor",
        category: 9
    },
    {
        id: 34,
        image: "/images/map_icons/ic_glinthawk.webp",
        title: "Glinthawk",
        category: 9
    },
    {
        id: 35,
        image: "/images/map_icons/ic_bellowback.webp",
        title: "Fire Bellowback",
        category: 9
    },
    {
        id: 36,
        image: "/images/map_icons/ic_bellowback.webp",
        title: "Ice Bellowback",
        category: 9
    },
    {
        id: 37,
        image: "/images/map_icons/ic_stalker.webp",
        title: "Stalker",
        category: 9
    },
    {
        id: 38,
        image: "/images/map_icons/ic_shell_walker.webp",
        title: "Shell Walker",
        category: 9
    },
    {
        id: 39,
        image: "/images/map_icons/ic_ravager.webp",
        title: "Ravager",
        category: 9
    },
    {
        id: 40,
        image: "/images/map_icons/ic_snapmaw.webp",
        title: "Snapmaw",
        category: 9
    },
    {
        id: 41,
        image: "/images/map_icons/ic_rockbreaker.webp",
        title: "Rockbreaker",
        category: 9
    },
    {
        id: 42,
        image: "/images/map_icons/ic_behemoth.webp",
        title: "Behemoth",
        category: 9
    },
    {
        id: 43,
        image: "/images/map_icons/ic_thunderjaw.webp",
        title: "Thunderjaw",
        category: 9
    },
    {
        id: 44,
        image: "/images/map_icons/ic_stormbird.webp",
        title: "Stormbird",
        category: 9
    },
    {
        id: 45,
        image: "/images/map_icons/ic_scorcher.webp",
        title: "Scorcher",
        category: 9
    },
    {
        id: 46,
        image: "/images/map_icons/ic_tallneck.webp",
        title: "Tallneck",
        category: 9
    }
]