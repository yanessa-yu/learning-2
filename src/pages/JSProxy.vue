<template>
    <div>JS Proxy Demo</div>
</template>

<script setup lang="ts">


const person = {
   name: 'lily',
   age: 18
}



const personProxy = new Proxy(person, {
    set(target, key, value) {
        console.log('set', target, key, value)
        target[key] = value
        return true
    },
    get(target, key) {
        console.log('get', key)
        return target[key] 
    }
})


console.log(personProxy.name)
personProxy.name = 'jason'
console.log('personProxy name ', personProxy.name)
console.log('person name', person.name)

person.age = 28
console.log('person age', person.age)
console.log('personProxy age', personProxy.age)


const updatedValueSet = new Set()
const windowProxy = new Proxy(window, {
    set(target, key, value) {
        target[key] = value
        updatedValueSet.add(key)
        return true
    },
    deleteProperty(target, key) {
        if (target.hasOwnProperty(key)) {
            delete target[key]
            updatedValueSet.delete(key)
            return true
        }
        return false
    }
})


function run(window) {
    window.a = 1
    console.log(updatedValueSet)
}

run(windowProxy)





</script>