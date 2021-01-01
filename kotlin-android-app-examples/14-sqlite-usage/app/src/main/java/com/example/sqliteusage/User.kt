package com.example.sqliteusage

class User {
    var age: Int = 0
    var name: String? = null
    var id: Int = 0

    constructor(name: String, age: Int) {
        this.name = name
        this.age = age
    }

    constructor(id:Int, name: String, age: Int) {
        this.id = id
        this.name = name
        this.age = age
    }

}