package com.tutorials.gridview

class Fruit {
    var name: String? = null
    var image: Int? = null

    constructor(name: String, image: Int) {
        this.name = name
        this.image = image
    }

    override fun toString(): String {
        return "Fruit(name=$name, image=$image)"
    }
}