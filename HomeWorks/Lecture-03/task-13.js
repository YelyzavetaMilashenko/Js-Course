// № 13
// const test2 = ('Sam' || '' || false) && (0 || 9) && 111; => true && true && 111 => 111
// const test3 = (null || '' || undefined || 0) && (NaN || 9) && 111; => 0 && 9 && 111 => 0
// const test4 = (null || 99) && (undefined || NaN) && (NaN || 9) && 111; => 99 && NaN && 9 && 111 => NaN && 9 && 111 => NaN && 111 => NaN
// const test5 = (null || 100 || undefined || NaN) && ( NaN || 9) && 'string'; => 100 && 9 && 'string' => 'string'
// const test6 = ({name: 'Sam'} || '' || undefined || NaN) && (NaN || [1, 2]) && 111; => {name: 'Sam'} && [1, 2] && 111 => 111
// const test7 = (null || '' || {} || NaN) && [] && 111; => {} && [] && 111 => 111
// const test2 = 'Sam' || '' || false && 0 || 9 && 111; => 'Sam' || '' || 0 || 111 => 'Sam' || 0 || 111 => 'Sam' || 111 => Sam
// const test3 = null || '' || undefined || 0 && NaN || 9 && 111; => null || '' || undefined || NaN || 111 => 111
// const test4 = null || 99 && undefined || NaN && NaN || 9 && 111; => null || undefined || NaN || 111 => 111
// const test5 = null || 100 || undefined || NaN && NaN || 9 && 'string'; => null || 100 || undefined || NaN || 'String' => 100
// const test6 = {name: 'Sam'} || '' || undefined || NaN && NaN || [1, 2] && 111; => {name: 'Sam'} || '' || undefined || NaN || 111 => {name: 'Sam'}
// const test7 = null || '' || {} || NaN && [] && 111; => null || '' || {} || NaN => {}
