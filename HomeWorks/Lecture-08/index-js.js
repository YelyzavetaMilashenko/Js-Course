// создадим классы оружия у нас должен быть родительский класс Weapon
// от Weapon будут наследоваться два класса ближнего MeleeWeapon и дальнего боя RangeWeapon
// от MeleeWeapon будет наследоваться меч, топор и копье
// от RangeWeapon будет наследоваться лук и арбалет


RangeWeapon = {
	type: string; // 'bow' | 'crossbow' (приватное свойство)
	name: string; //(приватное свойство)
	level: number // (приватное свойство)
	range: number; // (приватное свойство)
	damage: { // (приватное свойство)
		min: number;
		max: number;
	}
	ammo: { // (приватное свойство)
		total: number; // (приватное свойство)
		current: number; // (приватное свойство)
	};
	speed: number; // количество ms(приватное свойство)
	attack: () => number;// (публичный метод) 1. с 30% вероятностью наносит урон 0(промах)
	// ammo.current уменьшается на 1
	// 2.возвращает рандомное число от damage.min до damage.max
	// 3. если нет боеприпасов ammo.current === 0 мы возвращаем урон равный 0 и не уменьшаем ammo.current до -1
	fillAmmo: () => string; // поднимает ammo.current до ammo.total и возвращает строку боезапас пополнен
	levelUp: () => void; // в каждом типе оружие улучшается по разному (публичный метод);
	getInfo: () => string;//(публичный метод) возвращает строку типа:
	// type name (перенос строки)
	// level(перенос строки)
	// damage: min-max(перенос строки)
	// dps: урон в секунду(перенос строки)
	// range(перенос строки)
	// ammo: current/total
}

MeleeWeapon = {
	type: string; // 'sword' | 'axe' |  'spear' (приватное свойство)
	name: string; // (приватное свойство)
	level: number; // (приватное свойство)
	radius: number; // (приватное свойство)
	damage: { // (приватное свойство)
		min: number; // (приватное свойство)
		max: number; // (приватное свойство)
	};
	durability: { // (приватное свойство)
		total: number; // (приватное свойство)
		current: number; // (приватное свойство)
	}

	speed: number; // количество ms(приватное свойство)
	fix: () => string; // (публичный метод) понижает максимальную прочность оружия на 1, 
                    //    поднимает текущую прочность оружия до максимальной и возвращает строку оружие починено durability.current => durability.total, 
                    // если current прочность на максимуме то возвращаем строку оружие уже не сломано

	attack: () => number; // (публичный метод) 1. с 25% вероятностью durability.current уменьшается на один
	// 2.возвращает рандомное число от damage.min до damage.max
	// 3. если оружие сломано durability.current === 0 мы возвращаем урон равный 0 и не уменьшаем durability до -1
	levelUp: () => void; // в каждом типе оружие улучшается по разному (публичный метод)
	getInfo: () => string; //(публичный метод) возвращает строку типа:
	// type name (перенос строки)
	// level(перенос строки)
	// damage: min-max(перенос строки)
	// dps: урон в секунду(перенос строки)
	// radius(перенос строки)
	// durability: current/total
}

axe.levelUp() // увеличивает level на 1 min damage на 1 max damage на 2 speed уменьшает на 15 мс
sword.levelUp() // увеличивает level на 1 на четных уровнях увеличивает min damage на 3 а на нечетных max damage на 3 speed уменьшает на 20 мс
spear.levelUp() // увеличивает level на 1 увеличивает max damage на 3 speed уменьшает на 5 мс
bow.levelUp() // увеличивает level на 1 на четных уровнях увеличивает max damage на 3 на нечетных min damage на 2 speed уменьшает на 15 мс
crossBow.levelUp() //увеличивает level на 1 увеличивает на 2 min и max damage speed уменьшает на 5 мс

// Пример создания
const sword = SwordWeapon({
	name: 'Кладинец',
	radius: 350,
	minDamage: 2,
	maxDamage: 4,
	durability: 50, //максимальная прочность
	speed: 1200, // кол-во мс через которое можно провести еще одну атаку(пока нужно просто для get info и dps)
})










// Рекурсия
// function fillAmmo (current =1, total=40) {
//     console.log(current)

// if(current === 40) {
//    return  console.log('Боезапас пополнен')
// } 
// current += 1

// return fillAmmo(current , total)
// }

// console.log(fillAmmo())
