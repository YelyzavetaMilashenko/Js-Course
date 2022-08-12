class Weapon {
    constructor(options) {
    this.weapons = 'It is Weapon'
    }
}

class RangeWeapon extends Weapon {
    #type = 'Range Weapon';
    #name;
    #level = 1;
    #range;
    #damage;
    #ammo;
    #speed;

    constructor(options) {
    super(options);
    this.#type = 'Range Weapon'; 
	this.#name = options.name; 
	this.#level = 1;
	this.#range = options.range; 
	this.#damage = { 
		min: options.damage.min,
		max: options.damage.max,
	}
	this.#ammo = { 
		total: options.ammo.total, 
		current: 1,
	};
	this.#speed = options.speed; 
}

	attack() {
    const result = Math.floor(Math.random(this.#damage.min * this.#damage.max))
    return result 
};

	fillAmmo () {
    do {
    console.log( this.#ammo.current );
    this.#ammo.current ++;
    } while (this.#ammo.current <= this.#ammo.total){
    console.log('Боезапас пополнен')
    }
};

	getInfo () { return `${this.#level}<br/>${this.#name}<br/>${this.#damage}<br/>${this.#range}<br/>${this.#ammo}`};

    levelUp () {
        do {
            console.log( this.#level );
            this.#level ++;
            } while (this.#level <= 10){
            console.log('Достигнут максимальный уровень !')
        
    }
}
}

class MeleeWeapon extends Weapon {
    #type ;
    #name;
    #level = 1;
    #radius;
    #damage;
    #durability;
    #speed;

    constructor(options) {
    super(options);
	this.#type = 'melee weapon'; 
	this.#name = options.name; 
	this.#level = 1;
	this.#radius = options.radius; 
	this.#damage = { 
		min: options.damage.min, 
		max: options.damage.max,
	};
	this.#durability = { 
		total: options.durability.total,
		current: 1,
	}

	this.#speed = options.speed; 
}
	fix () {
        do {
            console.log( this.#durability.current );
            this.#durability.current ++;
            } while (this.#durability.current <= this.#durability.total){
            console.log('Оружие починено')
            }
        };
    
	attack() {
        const result = Math.floor(Math.random(this.#damage.min * this.#damage.max))
        return result 
    };

    getInfo () {
        return `${this.#level}<br/>${this.#name}<br/>${this.#damage}<br/>${this.#radius}<br/>${this.#durability}`
    };

    levelUp () {
        do {
            console.log( this.#level );
            this.#level ++;
            } while (this.#level <= 10){
            console.log('Достигнут максимальный уровень !')
        
    }
    }
}

const sword = new MeleeWeapon({name: 'Sword', radius: 20, damage:{min: 5, max: 12}, durability: {total: 8}, speed: 12})
const axe = new MeleeWeapon({name: 'Axe', radius: 10, damage:{min: 4, max: 9}, durability: {total: 6}, speed: 8})
const spear = new MeleeWeapon({name: 'Spear', radius: 35, damage:{min: 12, max: 19}, durability: {total: 13}, speed: 22})
const bow = new RangeWeapon ({name: 'Bow', range: 25, damage:{min:15, max: 20}, ammo:{total: 40}, speed: 60}, )
const crossBow = new RangeWeapon({name: 'Cross bow', range: 37, damage:{min:20, max: 26}, ammo:{total: 50}, speed: 80})

console.log(bow.levelUp())
 //увеличивает level на 1 увеличивает на 2 min и max damage speed уменьшает на 5 мс
