package com.tutorials.apiresponsegridview

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.BaseAdapter
import com.squareup.picasso.MemoryPolicy
import com.squareup.picasso.NetworkPolicy
import com.squareup.picasso.Picasso
import kotlinx.android.synthetic.main.photo_content.view.*

class PhotoAdapter : BaseAdapter {

    var context: Context? = null
    var photos = ArrayList<Photo>();

    constructor(context: Context?, photos: ArrayList<Photo>) {
        this.context = context
        this.photos = photos
    }

    override fun getView(position: Int, convertView: View?, parent: ViewGroup?): View {
        var photo = this.photos[position]

        var inflator = context!!.getSystemService(Context.LAYOUT_INFLATER_SERVICE) as LayoutInflater
        var photoView = inflator.inflate(R.layout.photo_content, null)
        photoView.image.setImageResource(R.drawable.ic_launcher_background)
        photoView.title.setText(photo.title!!)

        Picasso.get()
            .load(photo.url)
            .resize(150, 150)
            .centerCrop()
            .into(photoView.image)


        return photoView
    }

    override fun getItem(position: Int): Any {
        return photos[position]
    }

    override fun getItemId(position: Int): Long {
        return position.toLong()
    }

    override fun getCount(): Int {
        return photos.size
    }
}