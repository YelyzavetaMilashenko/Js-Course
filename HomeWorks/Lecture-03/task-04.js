// № 4
let result = ''
for (let i = 10; i <= 50; i++) {
	if(i > 30 && i<=40 ){
	continue
	}
	result += `${i} <br>`
	
} 
document.write(result)