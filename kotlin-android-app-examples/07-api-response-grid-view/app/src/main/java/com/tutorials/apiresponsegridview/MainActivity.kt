package com.tutorials.apiresponsegridview

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.google.gson.Gson
import kotlinx.android.synthetic.main.activity_main.*
import okhttp3.*
import okio.IOException
import java.util.concurrent.CountDownLatch


class MainActivity : AppCompatActivity() {
    var adapter: PhotoAdapter? = null
    var photos = ArrayList<Photo>()

    private val client = OkHttpClient()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        doApiCall("https://jsonplaceholder.typicode.com/albums/1/photos")

        adapter = PhotoAdapter(this, photos)

        photosGridView.adapter = adapter
    }

    fun doApiCall(url: String) {
        val request = Request.Builder().url(url).build()

        val countDownLatch = CountDownLatch(1)
        client.newCall(request).enqueue(object : Callback {

            override fun onFailure(call: Call, e: IOException) {
                println("Error! e : ${e.message} ")
                countDownLatch.countDown();
            }

            override fun onResponse(call: Call, response: Response) {

                println("Success...")

                val responseStr = response.body?.string()
                val photoList: List<Photo> =
                    Gson().fromJson(responseStr, Array<Photo>::class.java).toList()

                println("photo : $photoList")

                photos = photoList as ArrayList<Photo>
                countDownLatch.countDown();
            }
        })

        countDownLatch.await();
    }
}