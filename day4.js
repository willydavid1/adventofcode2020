const fs = require("fs")

const values = [
  'byr', 
  'iyr', 
  'eyr', 
  'hgt', 
  'hcl', 
  'ecl', 
  'pid', 
]

const getData = () => {
  const data = fs.readFileSync('day4.txt', 'utf8')
  const entry = data.split('\n')
  let obj = []
  for (let i = 0; i < entry.length; i++) {
    if (entry[i] === '') {
      obj[obj.length - 1] = obj[obj.length - 1].reduce((acum, elem) => {
        return acum + elem + ' '
      }, '').trim()
      obj.push([])
      continue
    }
    if (i === 0) {
      obj.push([entry[i]])
      continue
    }
    obj[obj.length - 1].push(entry[i])
  }
  obj.pop()
  return obj
}

const inputs = getData()
let total = 0
for (const elem of inputs) {
  const value = elem.split(' ').filter((passport) => values.includes(passport.split(':')[0]))
  if (value.length === 7) total++
}
console.log(total)
