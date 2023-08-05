/*const processQuantities = (minQty, maxQty, defaultQty = 0) => {
    console.log(minQty) // 8
    console.log(maxQty) // 29
    console.log(defaultQty) // 10 в первом вызове, 0 во втором вызове
    return defaultQty + maxQty - minQty
  }

  const inputQuantities1 = [8, 29, 10]
  console.log(processQuantities(inputQuantities1)) // 31

  const inputQuantities2 = [8, 29]
  console.log(processQuantities(inputQuantities2)) // 21*/


/*
    Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

    Если объект salaries пустой, то нужно вернуть null.
    Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.

P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

*/

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };



  function topSalary(kek) {

    let max = 0;
    let maxName = null;

    for(let [name, salary] of Object.entries(kek)) {
      if (max < salary) {
        max = salary;
        maxName = name;
      }
    }

    return maxName;
  }

  console.log(topSalary(salaries))







