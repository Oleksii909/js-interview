let A = {
    name: 'Oleksii909',
    tags: ['programmer', 'drupal', 'react'],
    education: {
        college: {name: 'PEK NAU', graduated: '2004'},
        university: {name: 'NAU', degree: 'master'}
    }
}

let B = A

B.tags.push(...['junior', 'master'])
B.name += ' Bondarenko'
console.log('A variable was changed by reference via B variable', A)

// SHALLOW copy object via spread operator
B = {...A}

B.name += ' Mazaltov'
console.log('A.name variable wasn\'t changed by reference cause B variable crated via spread operator as shallow copy of object', A, B)

B = new Object(A);
B.name += ' B = A is the same B = new Object(A)'
console.log('A.name variable was changed by reference cause B variable crated via new Object() syntax', A, B)
