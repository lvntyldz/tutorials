package com.tutorials.gridview

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {

    var adapter: FruitAdapter? = null
    var fruits = ArrayList<Fruit>()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        fruits.add(Fruit("Watermelon", R.drawable.watermelon_icon))
        fruits.add(Fruit("Apple", R.drawable.apple_icon))
        fruits.add(Fruit("Lemon", R.drawable.lemon_icon))
        fruits.add(Fruit("Strawberry", R.drawable.strawberry_icon))
        fruits.add(Fruit("Cherry", R.drawable.cherry_icon))
        fruits.add(Fruit("Banana", R.drawable.banana_icon))

        adapter = FruitAdapter(this, fruits)

        fruitsGridView.adapter = adapter
    }
}