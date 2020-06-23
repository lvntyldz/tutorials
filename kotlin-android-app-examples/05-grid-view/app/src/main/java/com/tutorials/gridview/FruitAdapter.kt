package com.tutorials.gridview

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.BaseAdapter
import kotlinx.android.synthetic.main.fruit_item.view.*

class FruitAdapter : BaseAdapter {
    var fruitList = ArrayList<Fruit>()
    var context: Context? = null

    constructor(context: Context, fruitList: ArrayList<Fruit>) : super() {
        this.context = context
        this.fruitList = fruitList
    }

    override fun getCount(): Int {
        return fruitList.size
    }

    override fun getItem(position: Int): Any {
        return fruitList[position]
    }

    override fun getItemId(position: Int): Long {
        return position.toLong()
    }

    override fun getView(position: Int, convertView: View?, parent: ViewGroup?): View {
        val fruit = this.fruitList[position]

        var inflator = context!!.getSystemService(Context.LAYOUT_INFLATER_SERVICE) as LayoutInflater
        var fruitItemView = inflator.inflate(R.layout.fruit_item, null)
        fruitItemView.fruitName.text = fruit.name!!
        fruitItemView.fruitImage.setImageResource(fruit.image!!)

        fruitItemView.fruitImage.setOnClickListener {
            println("Current fruit : ${fruit.toString()}")
        }

        return fruitItemView
    }
}
